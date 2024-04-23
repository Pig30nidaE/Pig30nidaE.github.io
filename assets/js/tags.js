// 페이지가 로드될 때 앵커로 스크롤 이동
window.onload = function() {
    if (window.location.hash) {
        var tagId = window.location.hash.substring(1); // 앵커에서 '#' 제거
        scrollToTag(tagId);
    }
}

// 클릭된 태그의 위치로 스크롤 이동하는 함수
function scrollToTag(tagId) {
    var tagElement = document.getElementById(tagId);
    if (tagElement) {
        // 페이지 최상단에 해당 태그가 위치하도록 스크롤 조정
        var offset = tagElement.offsetTop;
        var headerHeight = document.querySelector('header').offsetHeight; // 헤더 높이
        var scrollToPosition = offset - headerHeight;
        window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
    }
}
