---
layout: page
title: search tag
---

<style>
	#search-tag li {
		list-style: none; /* 기본 리스트 마커 제거 */
	}

	#search-tag li::before {
		content: "#"; /* 리스트 항목 앞에 # 추가 */
		margin-right: 5px; /* #과 항목 텍스트 사이의 여백 설정 */
	}

	#search-tag span {
		cursor: pointer;
	}
</style>


<section>
	<h2>
		<ul id="search-tag">
			{% assign rawtags = "" %}
				{% for post in site.posts %}
					{% assign ttags = post.tags | join:'|' | append:'|' %}
					{% assign rawtags = rawtags | append:ttags %}
				{% endfor %}
			{% assign rawtags = rawtags | split:'|' | sort %}
			{% assign tags = "" %}
				{% for tag in rawtags %}
					{% if tag != "" %}
						{% if tags == "" %}
							{% assign tags = tag | split:'|' %}
						{% endif %}
						{% unless tags contains tag %}
							{% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
						{% endunless %}
					{% endif %}
				{% endfor %}
			{% for tag in tags %}
				<span class="search-tag"> # {{ tag }}</span> &nbsp;
			{% endfor %}
			<span class="search-tag"> # sudo make me a sandwich</span>&nbsp;
			<span class="search-tag"> # maxx "C"</span>&nbsp; <!-- finish tags -->
		</ul>
			<ul class="divider">
			<hr class="divider"><br/>
			{% for tag in tags %}
			<h3 class="{{ tag }}" id="{{ tag | slugify }}">{{ tag }}</h3>
			<ul>
			{% for post in site.posts %}
			{% if post.tags contains tag %}
			<li>
				<a href="{{ post.url | prepend: site.baseurl | replace: '//', '/' }}">
					{{ post.title }}
				</a>
			</li>
			{% endif %}
			{% endfor %}
			</ul>
			<br>
			{% endfor %}
		</ul>
	</h2>
</section>