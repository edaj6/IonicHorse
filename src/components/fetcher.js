import { writable } from 'svelte/store'

//fetch data and cache result

const cache = new Map();
const datastore = writable(new Promise(() => { }));

const store = {
  subscribe: datastore.subscribe,
  seturl: (url) => {
    console.log("seturl" + url);

    if (cache.has(url)) {
      datastore.set(Promise.resolve(cache.get(url)));
    }

    // console.log("Load async");
    const load = async () => {
      const response = await fetch(url);
      const data = await response.json();

      // console.log("Data loaded, set cache");

      cache.set(url, data);
      datastore.set(Promise.resolve(data));
    }

    load();
  }
};

export default store;