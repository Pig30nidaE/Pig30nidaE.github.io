---
layout: page
title: tags
---
<head>
    <link rel="stylesheet" href="/css/tags.css">
    <script src="/assets/js/tags.js"></script>
</head>
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
        <span class="tag tag-{{ tag | replace: ' ', '-' }} tag-lg">#{{ tag }}</span>
        <div class="tag-posts hidden">
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
        </div>
    {% endfor %}
</ul>



</section>