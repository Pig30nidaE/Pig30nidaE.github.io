// 대화 로직 정의
var conversation = [
    { speaker: "Computer", message: "What? Make it yourself." },
    { speaker: "User", message: "But I'm hungry!" },
    { speaker: "Computer", message: "Fine, here you go!" },
    { speaker: "Computer", message: "🥪" },
    { speaker: "User", message: "Thanks!" },
];

// 대화를 출력하는 함수
function displayConversation() {
    // 대화를 표시할 요소 선택
    var conversationElement = document.getElementById('conversation');

    // 대화를 요소에 추가
    conversation.forEach(function(line) {
        var messageElement = document.createElement('div');
        messageElement.innerHTML = '<strong>' + line.speaker + ':</strong> ' + line.message;
        conversationElement.appendChild(messageElement);
    });
}

// 사용자 입력을 처리하는 함수
function checkInput() {
    // 입력된 텍스트 가져오기
    var userInput = document.getElementById('search-input').value.toLowerCase();

    // "sudo make me a sandwich"인 경우 대화 표시
    if (userInput === "sudo make me a sandwich") {
        displayConversation();
    }
}

// 페이지 로드 시 초기화
window.onload = function() {
    // 검색 입력 요소에 이벤트 리스너 추가
    document.getElementById('search-input').addEventListener('keyup', checkInput);
};
