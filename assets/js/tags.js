document.addEventListener('DOMContentLoaded', function () {
    const tags = document.querySelectorAll('.tag');
    const tagPosts = document.querySelectorAll('.tag-posts');

    // 페이지 로드 시 해시값에 해당하는 태그를 하이라이트
    if (window.location.hash) {
        let tagId = decodeURIComponent(window.location.hash.substring(1)); // 해시에서 #을 제거하고 URL 디코딩
        tagId = tagId.replace(/\s+/g, '-'); // 띄어쓰기를 하이픈으로 변경

        // 해당 태그에 하이라이트 추가
        const tag = document.querySelector(`.tag-${tagId}`); // 대소문자 구분하여 클래스를 선택
        if (tag) {
            tag.classList.add('highlight');
        }
    }

    tags.forEach(tag => {
        tag.addEventListener('click', function (e) {
            e.stopPropagation(); // 클릭이 다른 곳으로 전파되지 않도록 막기
            const tagPost = tag.nextElementSibling; // 각 태그에 해당하는 포스트 링크 div

            // 이전에 열려있는 포스트 링크들을 모두 숨김
            tagPosts.forEach(post => {
                if (post !== tagPost) {
                    post.classList.remove('show');
                }
            });

            // 해당 태그에 하이라이트 추가
            tags.forEach(t => t.classList.remove('highlight')); // 모든 태그의 하이라이트 제거
            tag.classList.add('highlight'); // 현재 클릭된 태그에 하이라이트 추가

            // 포스트 링크를 클릭한 태그 아래에 위치시키기
            const tagRect = tag.getBoundingClientRect(); // 태그의 위치와 크기 정보
            const tagPostHeight = tagPost.offsetHeight;

            // 태그의 위치를 기준으로 포스트 링크의 위치 조정
            tagPost.style.top = `${tagRect.bottom + window.scrollY}px`; // 화면에서의 y 위치
            tagPost.style.left = `${tagRect.left + window.scrollX}px`; // 화면에서의 x 위치

            // 해당 태그의 포스트 목록을 보이게 함
            tagPost.classList.toggle('show');
        });
    });

    // 다른 곳을 클릭하면 포스트 목록을 숨김
    document.addEventListener('click', function (e) {
        // 클릭한 곳이 태그나 포스트 링크가 아니라면 포스트 링크 숨기기
        if (!e.target.closest('.tag') && !e.target.closest('.tag-posts')) {
            tagPosts.forEach(post => post.classList.remove('show'));
            tags.forEach(t => t.classList.remove('highlight')); // 다른 곳 클릭 시 하이라이트 제거
        }
    });
});

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
