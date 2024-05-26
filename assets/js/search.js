
window.onload = function() {
	// 검색 입력 요소 가져오기
	var searchInput = document.getElementById('search-input');
};
document.addEventListener('DOMContentLoaded', function() {
    // 헤더 요소 가져오기
    var header = document.querySelector('header');
	var searchInput = document.getElementById('search-input');
    
    header.addEventListener('click', function() {
			searchInput = document.getElementById('search-input');
		    searchInput.focus();
		});
		
	searchInput.addEventListener('input', function() {
		searchInput = document.getElementById('search-input');
		var searchTerm = searchInput.value;
        //window.checkInput(searchTerm);
		searchInput.focus();
    });
});

SimpleJekyllSearch({
	searchInput: document.getElementById('search-input'),
	resultsContainer: document.getElementById('results-container'),
	json: '/search.json',
	searchResultTemplate: '<a href="{url}" title="{desc}" target="_blank"><li>{title}</li></a>',
	noResultsText: 'No results found',
	limit: 10000,
	fuzzy: false,
	exclude: ['Welcome']
});


document.addEventListener('DOMContentLoaded', function() {
	var searchInput = document.querySelector('#search-input');
	var hashTags = document.querySelectorAll('#search-tag span');
	
	hashTags.forEach(function(tag) {
		tag.addEventListener('click', function() {
				var tagName = this.textContent.trim().substring(1); // Remove the leading '#' from the tag name
				searchInput.value = tagName; // Set the value of the search input to the clicked tag name
				//window.checkInput(tagName);
				searchInput.dispatchEvent(new Event('input')); 
				searchInput.focus();
			});
	});
});
