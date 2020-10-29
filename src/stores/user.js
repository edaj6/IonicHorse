import { writable } from "svelte/store";

const userStore = writable(getStorageUser());

function getStorageUser() {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username: null, jwt: null };
}

export function setStorageUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function setUser(user) {
  console.log("userStore setUser()");
  console.log(user);
  userStore.set({ username: user.username, jwt: user.jwt });
}

export function logoutUser() {
  localStorage.clear();
  userStore.set({ username: null, jwt: null });
}

export default userStore;
