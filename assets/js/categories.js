window.onload = function() {
    // URL의 해시에서 categoryId를 추출
    if (window.location.hash) {
        var categoryId = window.location.hash.substring(1); // 앵커에서 '#' 제거
        
        // categoryId를 하이픈(-)을 기준으로 분리
        var ids = categoryId.split('-');

        // 각 부분을 사용하여 체크박스를 찾고 언체크
        ids.forEach(function(id, index) {
            setTimeout(function() {
                var checkbox = document.getElementById(id);
                if (checkbox) {
                    // 체크박스에 'unchecked' 클래스 추가하여 애니메이션 적용
                    checkbox.classList.add('unchecked');
                    
                    // 약간의 지연 후 체크박스의 상태를 언체크로 설정
                    setTimeout(function() {
                        checkbox.checked = false;
                    }, 200); // 애니메이션이 끝날 때까지 기다림 (0.5초)
                }
            }, index * 200); // 체크박스마다 1초 간격으로 애니메이션 적용
        });
    }
}
