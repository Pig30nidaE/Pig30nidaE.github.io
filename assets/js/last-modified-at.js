window.addEventListener("load", function() {
    if (document.getElementsByClassName("last-modified-at")) {
		var all_month_alphabet = {
			"01": "Jan",
			"02": "Feb",
			"03": "Mar",
			"04": "Apr",
			"05": "May",
			"06": "Jun",
			"07": "Jul",
			"08": "Aug",
			"09": "Sep",
			"10": "Oct",
			"11": "Nov",
			"12": "Dec"
		};
        fetch("https://api.github.com/repos/Pig30nidaE/Pig30nidaE.github.io/commits?path=categories/42Seoul/Born2code/_posts/2024-04-21-Libft.md")
            .then((response) => {
                return response.json();
            })
            .then((commits) => {
                var modified = commits[0]["commit"]["committer"]["date"].slice(0, 20);

                return modified;
            })
            .then((modified) => {
                var date = modified.split("-");
                var year = date[0];
                var month = all_month_alphabet[date[1]];
				var day = date[2].slice(0, 2);
				var time = date[2].slice(3, 8);
				var to_in_date = day + " " + month + " " + year + " " + time;

                document.getElementsByClassName("last-modified-at").textContent = to_in_date;
                console.log(to_in_date);
            });
    }
});