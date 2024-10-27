<ul>
  {% assign sorted_notices = site.data.notices | sort: 'date' | reverse %}
  {% if sorted_notices.size > 0 %}
    {% for notice in sorted_notices %}
      <li>
        <h2>{{ notice.title }}</h2>
        <p>{{ notice.content | replace: "\n", "<br>" | markdownify }}</p> <!-- 줄 바꿈 처리 -->
        <p><small>{{ notice.date | date: "%Y-%m-%d" }}</small></p>
      </li>
    {% endfor %}
  {% else %}
    <li>공지사항이 없습니다.</li>
  {% endif %}
</ul>
