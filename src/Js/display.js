const display = function(movies1, movies2) {
	console.log(movies1);
	console.log(movies2);
	const movies = [ ...movies1, ...movies2 ];
	console.log(movies);
	let moviesEl = document.querySelector('.movie-list');
	movies.forEach(function(item, index) {
		console.log(item['title']);
		let movieEl = document.createElement('div');
		movieEl.className = `movie`;
		movieEl.innerHTML = `
        <img src='${item['images'][0]['url']}' alt='${item['title']}'>
        <h1 class='movie-title'>${item['title']}</h1>
        `;
		moviesEl.appendChild(movieEl);
	});
	setupEventListeners(movies);
};

const setupEventListeners = function(movies) {
	let imgs = document.querySelectorAll('.movie');
	imgs.forEach(function(item, index) {
		item.addEventListener('click', function(event) {
			alert(movies[index]['shortDescription']);
		});
	});
};
