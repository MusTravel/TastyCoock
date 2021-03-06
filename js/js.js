/*Section6 Функция проверки адреса почты*/

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

/*Section6 Всплывающая подсказка*/
function alert_msg(i) {
		let msg = document.querySelector('.section6_btn_msg');
		msg.style.opacity = i;	
		setTimeout(() => {let msg = document.querySelector('.section6_btn_msg');msg.style.opacity = 0;}, 3000) ;	
}

/*Section6 Активация модального окна*/
function popup_msg() {
	let popup = document.querySelector('.section6_overlay');
	popup.style.visibility = "visible";	
	popup.style.opacity = 1;	
	setTimeout(() => {let msg = document.querySelector('.section6_overlay');msg.style.visibility = "hidden";msg.style.opacity = 0;}, 8000) ;	
}
/*Section6 Закрытие модального окна*/
function popup_msg_close() {
	let popup = document.querySelector('.section6_overlay');
	popup.style.visibility = "hidden";	
	popup.style.opacity = 0;	
}

/* Слайдер на 3 - 5 карточек */
function slider(a) {
	let 	label = a.value,
/*			selectName = a.name, */
			sectionClass = a.classList[0],
			selectBox, 
			tempBox = [1, 2, 3, 4, 5, 1, 2], 
			i ;
	const 	box_1 = document.getElementsByClassName(sectionClass),
			screenWidth = window.innerWidth;	
	sectionClass = a.classList[0].replace("radio", "box");
	for (i=1; i<=box_1.length; i++) {
		if (label == i) {
			if ((box_1.length>3) && (screenWidth>767)) 
			{
				let n = i;
				while (n<=i+2) 
				{
					selectBox = sectionClass.concat(tempBox [n-1]);
					document.getElementById(selectBox).style.display='none';
					showSlider (selectBox, n);
					n ++;
				}
				i= i + 2;
			} 
			else {
				selectBox = sectionClass.concat(i);
				showSlider (selectBox,0);
			};
		} 
		else {
			selectBox = sectionClass.concat(i);
			let ccc=document.getElementById(selectBox).style.order;
			document.getElementById(selectBox).style.order = 10;
			document.getElementById(selectBox).style.display='none';
		   	document.getElementById(selectBox).style.opacity='0';

		}

	}
}

/*Показать слайдер*/
function showSlider(selectBox, ord) {
	document.getElementById(selectBox).style.order = ord;
	document.getElementById(selectBox).style.display='block';
	document.getElementById(selectBox).style.opacity='0';

	let currentBox = selectBox;
	setTimeout(() => {let msg = "1"; document.getElementById(currentBox).style.opacity = msg;}, ord*150);

}

/* Контроль размера окна*/

function checkResize() {
	const 	screenWidth = window.innerWidth;	
	let 	selectBox = "section2_box", n, i;

	if (screenWidth<768) {
		document.getElementById("section2_radiobox").style.display='block';
		section2_show("section2_box",1);
	} 	else {
		if ((screenWidth>=768) && (screenWidth<1024)) {
			document.getElementById("section2_radiobox").style.display='block';
			section2_show("section3_box", 1);
			section2_show("section2_box", 3);
			section2_show("section5_box", 1);
		}	else {
			if (screenWidth>=1024) {
				document.getElementById("section2_radiobox").style.display='none';
				section2_show("section2_box",5);
				section2_show("section3_box",3);
				section2_show("section5_box",3);
			}
		}
	} 

}



/* Показать 1-5 боксов, скрыть 2-4 бокса */

function section2_show(box, i) {
	let n=1, selectBox;
   	for (n; n<=i; n++) {
   		selectBox = box.concat(n)
   		document.getElementById(selectBox).style.order = n;
		document.getElementById(selectBox).style.display='block';
	   	document.getElementById(selectBox).style.opacity='1';
	} 
	if ((n<5) && (box=="section2_box")) {
	   	for (n; n<=5; n++) {
	   		selectBox = box.concat(n);
	   		console.log (n + " - скрываем бокс - " + selectBox);
	   		document.getElementById(selectBox).style.order = n;
			document.getElementById(selectBox).style.display='none';
		} 
	}
	if ((n<3) && ((box=="section3_box") || (box=="section5_box"))){
	   	for (n; n<=3; n++) {
	   		selectBox = box.concat(n);
	   		document.getElementById(selectBox).style.order = n;
			document.getElementById(selectBox).style.display='none';
		} 
	}

}

