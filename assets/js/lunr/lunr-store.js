---
layout: null
---
var store = [
  {%- for page in site.pages -%}
    {%- if page.title -%}
  {
    "title": {{ page.title | jsonify }},
    "excerpt": {{ page.content | strip_html | strip_newlines | truncatewords: 50 | jsonify }},
    "content": {{ page.content | strip_html | strip_newlines | jsonify }},
    "url": {{ page.url | relative_url | jsonify }}
  },
    {%- endif -%}
  {%- endfor -%}
  {%- for post in site.posts -%}
  {
    "title": {{ post.title | jsonify }},
    "excerpt": {{ post.excerpt | strip_html | strip_newlines | jsonify }},
    "content": {{ post.content | strip_html | strip_newlines | jsonify }},
    "url": {{ post.url | relative_url | jsonify }}
  },
  {%- endfor -%}
];
