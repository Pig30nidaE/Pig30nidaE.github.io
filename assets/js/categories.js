// 페이지가 로드될 때 앵커로 스크롤 이동
window.onload = function() {
    if (window.location.hash) {
        var categoryId = window.location.hash.substring(1); // 앵커에서 '#' 제거
        scrollToCategory(categoryId);
    }
}

// 카테고리 클릭시 이벤트 핸들러 등록
// 카테고리 클릭시 이벤트 핸들러 등록
var categoryLinks = document.querySelectorAll('.categories_time a');
categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        var categoryId = link.getAttribute('data-category'); // 클릭된 카테고리의 ID 가져오기
        scrollToCategory(categoryId); // 해당 카테고리 위치로 스크롤 이동
    });
});


// 클릭된 카테고리의 위치로 스크롤 이동하는 함수
function scrollToCategory(categoryId) {
    var categoryElement = document.getElementById(categoryId);
    if (categoryElement) {
        // 페이지 최상단에 해당 카테고리가 위치하도록 스크롤 조정
        var offset = categoryElement.offsetTop;
        var headerHeight = document.querySelector('header').offsetHeight; // 헤더 높이
        var scrollToPosition = offset - headerHeight;
        window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
    }
}
