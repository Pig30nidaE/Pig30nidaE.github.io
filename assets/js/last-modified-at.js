window.addEventListener("load", function () {
    if (document.getElementById("last-modified")) {
      fetch("https://api.github.com/repos/moeun2/moeun2.github.io/commits?path=_posts/2022-05-30-jekyll-last-modified-at.md")
        .then((response) => {
          return response.json();
        })
        .then((commits) => {
          var modified = commits[0]["commit"]["committer"]["date"].slice(0, 10);

          return modified;
        })
        .then((modified) => {
          var date = modified.split("-");
          var year = date[0];

          var month = console.log(date[0]);
          document.getElementById("last-modified").textContent = "last_modified_at : " + modified;
        });
    }
});