var width = 0;
function dothis(){
	setInterval(frame, 100)
}
function frame() {
	var myElements = document.getElementsByClassName('bar');
	if(Number(myElements[0].style.width.replace('%', '')) >= '100'){
		width = 0;
	}
	else{
		width = Number(myElements[0].style.width.replace('%', '')) + 10;
	}
	for(let i = 0; i < myElements.length; i++){
		myElements[i].style.width = width + '%';
	}
}
