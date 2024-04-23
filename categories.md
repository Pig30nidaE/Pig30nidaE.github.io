---
layout: default
title: Categories
---

{% assign displayedCategories = "" %}
{% for post in site.posts %}
    {% assign first_category = post.categories | first %}
    {% if first_category %}
        {% unless displayedCategories contains first_category %}
            {{ first_category }}
            {% assign displayedCategories = displayedCategories | append: first_category | append: "|" %}
        {% endunless %}
    {% endif %}
{% endfor %}
