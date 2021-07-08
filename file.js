



let theInputs = document.querySelectorAll('.log-in input'),
	btn = document.querySelector('.log-in form button');

btn.onclick = function(e){
	checkvalidate(theInputs)
	if(document.querySelectorAll('form .active').length == 0){
		
	}else{
		e.preventDefault();
	}
}
function checkvalidate(inp){
	inp.forEach((e,b) => {
		if(!e.checkValidity()){
			e.parentNode.classList.add('active');
			e.setAttribute('placeholder','')
		}
	})
}
theInputs.forEach(a =>{
	a.onkeyup = function(){
		if(!a.checkValidity()){
			a.parentNode.classList.add('active');
		}else{
			a.parentNode.classList.remove('active');
		}
	}
})