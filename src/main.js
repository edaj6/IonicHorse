import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

// if ('serviceWorker' in navigator) {
// 	navigator.serviceWorker.register('/service-worker.js')
//   }

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
	  navigator.serviceWorker.register('/service-worker.js');
	});
  }

export default app;