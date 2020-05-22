---
layout: main
pagination:
    enabled: true
---


<div class="me">
    <div class="name"><h3>KI HWAN</h3></div>
    <div class="comment"><h4>사소한 것부터 소중한 것까지 모두 기록하는 블로그에요.</div></h4>
</div>
<hr>
<div class="me">
    <div class="name"><h5>카테고리</h5></div>
    <ul>
    {% for category in site.categories %}
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <li class="categories"><a href="/category/{{category_name}}">{{category_name}}</a></li>
    {% endfor %}
    </ul>
</div>
<hr>
<h2 style="margin-top: 2rem;">최신 글</h2>
<!-- Recent Posts -->
{% for post in paginator.posts %}
    <div class="preview-container">
        <div class="post-title">
           <a href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
        </div>
        <div class="post-date">{{ post.date | date: "%Y년 %-m월 %-d일"}}</div>
    </div>
    <hr>    
{% endfor %}


<!-- Pagination links -->
<div class="pagination">
    <ul>
        {% if paginator.page_trail %}
            {% for trail in paginator.page_trail %}
                <li >
                    <a {% if page.url == trail.path %}class="selected"{% endif %} href="{{ trail.path | prepend: site.baseurl }}" title="{{trail.title}}">{{ trail.num }}</a>
                </li>
            {% endfor %}
        {% endif %}
    </ul>
</div>