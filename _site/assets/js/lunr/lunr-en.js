(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') { fn(); }
    else { document.addEventListener('DOMContentLoaded', fn); }
  }

  ready(function () {
    var input = document.getElementById('search');
    var resultDiv = document.getElementById('results');
    if (!input || !resultDiv) return;

    var idx = lunr(function () {
      this.field('title', { boost: 10 });
      this.field('excerpt');
      this.ref('id');
      for (var i = 0; i < store.length; i++) {
        this.add({ id: i, title: store[i].title, excerpt: store[i].excerpt });
      }
    });

    input.addEventListener('keyup', function () {
      var query = this.value.trim();
      resultDiv.innerHTML = '';
      if (!query) return;

      var results = [];
      try { results = idx.search(query); } catch (e) {}

      resultDiv.innerHTML = '<p class="results__found">' + results.length + ' Result(s) found</p>';
      results.forEach(function (r) {
        var item = store[r.ref];
        resultDiv.innerHTML +=
          '<div class="list__item">' +
            '<article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">' +
              '<h2 class="archive__item-title" itemprop="headline">' +
                '<a href="' + item.url + '" rel="permalink">' + item.title + '</a>' +
              '</h2>' +
              '<p class="archive__item-excerpt" itemprop="description">' +
                item.excerpt.split(' ').slice(0, 25).join(' ') + '...' +
              '</p>' +
            '</article>' +
          '</div>';
      });
    });
  });
})();
