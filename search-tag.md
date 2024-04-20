---
layout: page
title: search tag
---

<section>
	<h2>
		<ul id="search-tag">
			<li> sudo make me a sandwich</li>
		</ul>
	</h2>
</section>

<style>
	#search-tag li {
		list-style: none; /* 기본 리스트 마커 제거 */
	}

	#search-tag li::before {
		content: "#"; /* 리스트 항목 앞에 # 추가 */
		margin-right: 5px; /* #과 항목 텍스트 사이의 여백 설정 */
	}
</style>