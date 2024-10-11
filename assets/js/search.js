document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    var searchInput = document.getElementById('search-input');
    var resultsContainer = document.getElementById('results-container');
    var hashTags = document.querySelectorAll('#search-tag span');
    
    searchInput.addEventListener('focus', function() {
        var searchTerm = searchInput.value;

        // 검색어가 있을 때만 결과를 보이게 함
        resultsContainer.classList.add('active');
        resultsContainer.style.display = 'block';
    });

    searchInput.addEventListener('blur', function() {
        var searchTerm = searchInput.value;

        // 검색어가 있을 때만 결과를 보이게 함
        resultsContainer.classList.add('active');
        resultsContainer.style.display = 'none';
    });

    hashTags.forEach(function(tag) {
        tag.addEventListener('click', function() {
            var tagName = this.textContent.trim().substring(1); // Remove the leading '#' from the tag name
            searchInput.value = tagName; // Set the value of the search input to the clicked tag name
            searchInput.dispatchEvent(new Event('input')); 
        });
    });

    SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: '/search.json',
        searchResultTemplate: '<li class="li-result"><a href="{url}" title="{desc}">{title}</a></li>',
        noResultsText: '<li>No results found</li>',
        limit: 10000,
        fuzzy: false,
        exclude: ['Welcome']
    });
});
