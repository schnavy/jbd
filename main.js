let buttons = document.querySelectorAll("button");
let overlay = document.querySelector(".overlay");

window.addEventListener("touchend", (e) => {
	console.log(e);
	overlay.classList.add("visible");
	if (e.target.id == "yes") {
		overlay.classList.add("yes");
        overlay.innerHTML = "<h1>Juhu! hier sind die Tickets!</h1> <br/> <a href='ticket.pdf' download target='_blank'>&darr;</a>"
	} else if (e.target.id == "no") {
		overlay.classList.add("no");
        overlay.innerHTML = "<h1>menno, versuchs nochmal</h1>"

	} else if (e.target.id == "maybe") {
		overlay.classList.add("maybe");
        overlay.innerHTML = "<h1>plz hehe</h1>"

	}else{
        overlay.className = 'overlay';
        overlay.innerHTML = "";
    }
});

window.addEventListener("click", (e) => {
	console.log(e);
	overlay.classList.add("visible");
	if (e.target.id == "yes") {
		overlay.classList.add("yes");
        overlay.innerHTML = "<h1>Juhu! hier sind die Tickets!</h1> <br/> <a href='ticket.pdf' download target='_blank'>&darr;</a>"
	} else if (e.target.id == "no") {
		overlay.classList.add("no");
        overlay.innerHTML = "<h1>menno, versuchs nochmal</h1>"

	} else if (e.target.id == "maybe") {
		overlay.classList.add("maybe");
        overlay.innerHTML = "<h1>plz hehe</h1>"

	}else{
        overlay.className = 'overlay';
        overlay.innerHTML = "";
    }
});