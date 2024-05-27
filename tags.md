---
layout: page
title: tags
---

<section>
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
		</ul>
		<ul class="divider">
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
</section>