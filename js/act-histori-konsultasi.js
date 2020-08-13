var header = document.getElementById("backup-daftar-chat-act");
	var btns = header.getElementsByClassName("backup-cht-lw");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function() {
			var current = document.getElementsByClassName("act-backup-cht");
			current[0].className = current[0].className.replace(" act-backup-cht", "");
			this.className += " act-backup-cht";
		});
	};