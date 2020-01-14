const getData = function() {
	let myRequest1 = fetch(
		'https://api.cloud.altbalaji.com/zuul/catalogue/balaji/catalogue/filters/all-movies-in?domain=IN&page=1&size=7'
	);
	let myRequest2 = fetch(
		'https://api.cloud.altbalaji.com/zuul/catalogue/balaji/catalogue/filters/all-movies-in?domain=IN&page=2&size=7'
	);
	Promise.all([ myRequest1, myRequest2 ])
		.then((values) => Promise.all(values.map((value) => value.json())))
		.then((finalVals) => {
			let firstAPIResp = finalVals[0];
			let secondAPIResp = finalVals[1];
			display(firstAPIResp['content'], secondAPIResp['content']);
		});
};
getData();
