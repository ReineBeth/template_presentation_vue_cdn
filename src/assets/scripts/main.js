let liste = [
	{
		description: 'Maitriser le HTML',
		fait: true,
	},
	{
		description: 'Hacker la NASA avec le HTML',
		fait: false,
	},
	{
		description: 'Chanter dans la douche',
		fait: false,
	},
	{
		description: 'Jouer à Hadès',
		fait: true,
	}
];

const appTodo = {
	data() {
	  	return {
			message : 'Bonjour Vue!'
		};
	},
 };	

Vue.createApp(appTodo).mount('#app_todo');