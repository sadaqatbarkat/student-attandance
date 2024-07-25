let login = () => {
    let loginemail = document.getElementById("loginemail");
    let loginpassword = document.getElementById("loginpassword");

    var getData = localStorage.getItem("getData");

    if (getData) {
        getData = JSON.parse(getData);
    } else {
        getData = [];
    }

    const studentData = {
        email: loginemail.value,
        password: loginpassword.value
    };





if (!studentData.email){

	Swal.fire({
		icon: "error",
		title: "Oops...",
		text: "Please enter your email",
		footer: '<a href="#">Why do I have this issue?</a>'
	});

	return
}




    // Basic email validation
    if (!isValidEmail(studentData.email)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter a valid email address",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    }


   
	if (!studentData.password){
		Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter your password",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
		return;

	}



	if (studentData.password.length <=8){

		Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password must contain 8 characters",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
		

	}










    getData.push(studentData);
    localStorage.setItem("getData", JSON.stringify(getData));

    // Continue with login process



if (studentData.email && studentData.password){
	
}




loginpassword.value = ''
loginemail.value  = ''


setTimeout (function(){
    document.location.href = "index.html"
},1000)



};

let isValidEmail = (email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}








