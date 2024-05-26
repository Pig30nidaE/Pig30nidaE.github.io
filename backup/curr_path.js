pathname = window.location.pathname;
dir_name = pathname.split("/");
if (dir_name[1] === "categories") {
	if (dir_name.length > 2) {
		if (dir_name[2] === "")
			toInner = pathname.slice(0, pathname.length - 1);
		else {
			toInner = pathname.slice(11, pathname.length);
		}
	}
	else {
		toInner = pathname.slice(0, pathname.length - 1);
	}
}
else {
	toInner = pathname;
}
document.getElementById('current-path').innerText = toInner;