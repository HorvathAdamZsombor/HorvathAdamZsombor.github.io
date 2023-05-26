function initlang(){	
	const tx = document.getElementsByTagName("textarea");
	for (let i = 0; i < tx.length; i++) {
	  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
	  tx[i].addEventListener("input", OnInput, false);
	}
	if (sessionStorage.getItem('nyelv')){
		changelang(sessionStorage.getItem('nyelv'));
	}
	else {
		sessionStorage.setItem('nyelv','hu');
		changelang('hu');
	}
}
function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}

function changelang(nyelv){
	if (nyelv=='hu'){
		document.querySelectorAll('.en').forEach((elem)=>{elem.style.display='none'});
		document.querySelectorAll('.hu').forEach((elem)=>{elem.style.display='block'});
		sessionStorage.setItem('nyelv','hu');
	}
	else {
		document.querySelectorAll('.en').forEach((elem)=>{elem.style.display='block'});
		document.querySelectorAll('.hu').forEach((elem)=>{elem.style.display='none'});
		sessionStorage.setItem('nyelv','en');
	}
}