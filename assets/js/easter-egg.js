// 이전에 발견한 이스터 에그를 숨기는 함수
function hideEasterEgg() {
    var allEasterEgg = document.querySelectorAll("#easter-egg .egg");
    for (var i = 0; i < allEasterEgg.length; i++) {
        allEasterEgg[i].style.display = 'none';
    }
}

// 특정 조건에 따라 메시지를 표시하거나 숨기는 함수
function toggleSpecialMessage(show, easterEggMsg) {
    var specialMessage = document.getElementById('special-message');
    var noResultsText = document.getElementById('results-container');
    
    if (show) {
        hideEasterEgg();
        specialMessage.innerText = easterEggMsg;
        specialMessage.style.display = 'block';
        noResultsText.style.display = 'none'; // 결과가 없을 때 숨김
    } else {
        specialMessage.style.display = 'none';
        noResultsText.style.display = 'block'; // 결과가 없을 때 표시
        hideEasterEgg(); // 이전에 발견한 이스터 에그 숨기기
    }
}

// 예시: 검색 입력에 따라 메시지를 표시
function checkInput() {
    var searchInput = document.getElementById('search-input');
    var searchTerm = searchInput.value;
    
    if (searchTerm === 'sudo make me a sandwich') {
        toggleSpecialMessage(true, "Y U M M M M M M M M M Y"); // 특정 메시지만 표시
        var sandwich = document.getElementById('sandwich');
        sandwich.style.display = 'block';
    } 
    else if (searchTerm === 'maxx "C"') {
        toggleSpecialMessage(true, " 🌟 Ash Blossom & Joyous Spring 🌟 ");
        var ashBlossom_joyousSpring = document.getElementById('ashBlossom_joyousSpring');
        ashBlossom_joyousSpring.style.display = 'block';
    }
    else {
        toggleSpecialMessage(false, null); // 일반적인 결과 표시
    }
}
