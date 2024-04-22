var easterEggScript = document.createElement('script');
easterEggScript.src = '/assets/js/easter-egg.js';

easterEggScript.onload = function() {
    // easter-egg.js가 완전히 로드된 후에 checkInput 함수를 호출합니다.
    checkInput();
};

document.head.appendChild(easterEggScript);



document.getElementById('current-path').innerText = window.location.pathname;
// 페이지가 로드될 때 실행될 함수
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
        window.checkInput(searchTerm);
		searchInput.focus();
    });
});

SimpleJekyllSearch({
	searchInput: document.getElementById('search-input'),
	resultsContainer: document.getElementById('results-container'),
	json: '/search.json',
	searchResultTemplate: '<li><a href="{url}" title="{desc}" target="_blank">{title}</a></li>',
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
				var tagName = this.textContent.trim().substring(2); // Remove the leading '#' from the tag name
				searchInput.value = tagName; // Set the value of the search input to the clicked tag name
				window.checkInput(tagName);
				searchInput.dispatchEvent(new Event('input')); 
				searchInput.focus();
			});
	});
});
