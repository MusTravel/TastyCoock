
function ValidateEmail(inputText) {
	let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(inputText.value.match(mailformat)) {
		popup_msg();	
		return true;
	}
	else {
		alert_msg("0.8");	
		return false;
	}
}

function alert_msg(i) {
		let msg = document.querySelector('.section6_btn_msg');
		msg.style.opacity = i;	
		setTimeout(() => {let msg = document.querySelector('.section6_btn_msg');msg.style.opacity = 0;}, 3000) ;	
}

function popup_msg() {
	let popup = document.querySelector('.section6_overlay');
	popup.style.visibility = "visible";	
	popup.style.opacity = 1;	
	setTimeout(() => {let msg = document.querySelector('.section6_overlay');msg.style.visibility = "hidden";popup.style.opacity = 0;}, 8000) ;	
}

function popup_msg_close() {
	let popup = document.querySelector('.section6_overlay');
	popup.style.visibility = "hidden";	
	popup.style.opacity = 0;	
}