const a = document.querySelector('input[name="fname"]');
const b = document.querySelector('input[name="lname"]');
function getFormvalue() {
	let c = a.value.trim();
	let d = b.value.trim();
	if(c==='' || d===''){
		alert("Please provide valid input");
		return ;
	}

	alert(`${c} ${d}`)

	
    //Write your code here

}
