---
layout: page
title: News
permalink: /news/
nav: false
---


<div class="news">
  {% assign news = site.news | reverse %}
  
  {% for item in news %}
    <div class="news-item mb-4">
      <h5>{{ item.date | date: "%B %-d, %Y" }}</h5>
      <div class="news-content">
        {{ item.content }}
      </div>
    </div>
    <hr>
  {% endfor %}
</div>
