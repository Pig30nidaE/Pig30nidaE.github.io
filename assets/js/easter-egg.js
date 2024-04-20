// 특정 조건에 따라 메시지를 표시하거나 숨기는 함수
function toggleSpecialMessage(show, easterEggMsg) {
    var specialMessage = document.getElementById('special-message');
    var noResultsText = document.getElementById('results-container');

    if (show) {
        specialMessage.innerText = easterEggMsg;
        specialMessage.style.display = 'block';
        noResultsText.style.display = 'none'; // 결과가 없을 때 숨김
    } else {
        specialMessage.style.display = 'none';
        noResultsText.style.display = 'block'; // 결과가 없을 때 표시
    }
}

// 예시: 검색 입력에 따라 메시지를 표시
function checkInput() {
    var searchInput = document.getElementById('search-input');
    var searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm === 'sudo make me a sandwich') {
        toggleSpecialMessage(true, "What? Make it yourself!"); // 특정 메시지만 표시
    } else {
        toggleSpecialMessage(false, null); // 일반적인 결과 표시
    }
}
