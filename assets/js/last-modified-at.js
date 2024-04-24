window.addEventListener("load", function () {
    if (document.getElementById("last-modified-at")) {
      fetch("https://api.github.com/repos/moeun2/moeun2.github.io/commits?path=_posts/2022-05-30-jekyll-last-modified-at.md")
        .then((response) => {
          return response.json();
        })
        .then((commits) => {
          var modified = commits[0]["commit"]["committer"]["date"].slice(0, 17);

          return modified;
        })
        .then((modified) => {
          var date = modified.split(" ");
          var year = date[2];

		  console.log(date);
		  console.log(year);

          var month = console.log(date[0]);
          document.getElementById("last-modified-at").textContent = "last_modified_at : " + modified;
		  console.log(modified);
        });
    }
});