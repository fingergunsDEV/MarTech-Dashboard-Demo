import Sortable from "https://esm.sh/sortablejs";

const el = document.getElementById('dashboard-widgets');
const sortable = Sortable.create(el, {
  animation: 150,
  ghostClass: 'blue-background-class'
});

const AnalyticsComponent = Vue.defineAsyncComponent(() =>
  import('./components/AnalyticsComponent.vue')
)

const routes = [
  {
    path: '/analytics',
    component: () => import('./views/Analytics.vue')
  }
]const url = '';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ef570a3765msh16434f4eab02191p16ef8bjsn32dfca968956',
		'x-rapidapi-host': 'local-business-data.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);


