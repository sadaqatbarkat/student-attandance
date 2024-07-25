




const firstName = document.querySelector("#firstname")
const lastName = document.querySelector("#lastname")
const email = document.querySelector("#email")
const rollNo = document.querySelector("#rollno")
const phoneNo = document.querySelector("#number")
const main_parent = document.querySelector(".main-parent")
let inc = 1;
// Current Date
const today = new Date()

const currentDate = ` ${today.getUTCDate()}/ ${today.getMonth()}/ ${today.getFullYear()}      `

const add = document.getElementById("add")




// var users = localStorage.getItem("users")
// if (users) {
// 	users = JSON.parse(users)
// } else {
// 	users = []
// }
// console.log(users)

// var user = {
// 	firstName: firstName.value,
// 		lastName: lastName.value,
// 		email: email.value,
// 		rollNo: rollNo.value,
// 		number: phoneNo.value,
// 		date : currentDate
// }

// users.push(user)
// localStorage.setItem("users",JSON.stringify(users))










add.addEventListener("click", () => {
	// const userInput = phoneNo.value.trim()
	// let userData = localStorage.getItem("userData")
	// if (userData) {
	// 	userData = JSON.parse(userData)
	// } else {
	// 	userData = []
	// }
	// let info = {
	// 	firstName: firstName.value,
	// 	lastName: lastName.value,
	// 	email: email.value,
	// 	rollNo: rollNo.value,
	// 	number: phoneNo.value,
	// 	date : currentDate
	// }

	// userData.push(info)

	// localStorage.setItem("userData",JSON.stringify(userData))

	

	var users = localStorage.getItem("users")
	if (users) {
		users = JSON.parse(users)
	} else {
		users = []
	}
	console.log(users)
	
	var info = {
		firstName: firstName.value,
			lastName: lastName.value,
			email: email.value,
			rollNo: rollNo.value,
			number: phoneNo.value,
			date : currentDate
	}
	
	users.push(info)
	localStorage.setItem("users",JSON.stringify(users))



	

	if (info.firstName) {
		if (info.lastName) {
			if (info.email) {

				if (info.rollNo) {
					if(info.rollNo.length >= 4){

					
					if (info.number) {
						if (info.number.length >= 11) {
							if (info.number.startsWith("03")) {
								if(info.date){

								


								const main_parent = document.querySelector(".main-parent")
								main_parent.style.display = "block"
								const tbody = document.getElementById("tbody")


								tbody.innerHTML += ` 	<tr>
<td>  ${inc++}</td>
<td>${info.firstName}</td>
<td>${info.lastName}</td>
<td>${info.email}</td>
<td>${info.rollNo}</td>
<td>${info.date}</td>
<td> ${info.number}   </td>
</tr>`






								firstName.value = ''
								lastName.value = ''
								email.value = ''
								rollNo.value = ''
							
							
							
										number.value = ''

								}

							} else {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: 'Please enter 0 followed by 3 and then any numbers.',
									footer: '<a href="#">Why do I have this issue?</a>'
								});
							}


						} else {
							Swal.fire({
								icon: "error",
								title: "Oops...",
								text: "Phone number must contain 11 characters",
								footer: '<a href="#">Why do I have this issue?</a>'
							});
						}


					} else {
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "Please enter  your Number",
							footer: '<a href="#">Why do I have this issue?</a>'
						});

					}


				} else{
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Roll number must contain 4 numbers",
						footer: '<a href="#">Why do I have this issue?</a>'
					});

				}

				} else {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Please enter  your RollNo",
						footer: '<a href="#">Why do I have this issue?</a>'
					});

				}

		

			} else {
				Swal.fire({
					icon: "error-",
					title: "Oops...",
					text: "Please enter  your email",
					footer: '<a href="#">Why do I have this issue?</a>'
				});





			}

		} else {

			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Please enter  your LastName",
				footer: '<a href="#">Why do I have this issue?</a>'
			});

		}
	} else {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Please enter  your FirstName",
			footer: '<a href="#">Why do I have this issue?</a>'
		});


	}


	



})





































