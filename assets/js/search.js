document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('search-input');
    var resultsContainer = document.getElementById('results-container');
    var hashTags = document.querySelectorAll('#search-tag span');
    
    // 검색창에 포커스가 있을 때 결과 표시
    searchInput.addEventListener('focus', function() {
        resultsContainer.classList.add('active');
        resultsContainer.style.display = 'block';
    });
    
    // 포커스 해제 시 결과를 숨기지만, 클릭한 요소가 결과 컨테이너 내부라면 숨기지 않음
    searchInput.addEventListener('blur', function(event) {
        var relatedTarget = event.relatedTarget; // blur 시 포커스 이동 대상
        if (!resultsContainer.contains(relatedTarget)) {
            resultsContainer.classList.remove('active');
            resultsContainer.style.display = 'none';
        }
    });
    
    // 검색 결과 링크 클릭 시 결과 숨기기
    resultsContainer.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            resultsContainer.classList.remove('active');
            resultsContainer.style.display = 'none';
        }
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
