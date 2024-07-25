let tbodyattendance = document.getElementById("tbodyattendance")
let storedData = localStorage.getItem('users');
let incre = 0

let parsedData = JSON.parse(storedData);
const todayDate = new Date()

const current= ` ${todayDate.getUTCDate()}/ ${todayDate.getMonth()}/ ${todayDate.getFullYear()}      `


parsedData.forEach((person) => {



	tbodyattendance.innerHTML += ` 	<tr>
	<td>  ${++incre}</td>
	<td>${person.firstName}</td>
	<td>${person.lastName}</td>
	<td>${person.email}</td>
	<td>${person.date}</td>
	<td> ${person.number} </td>
	<td id= father> <input type="radio" id="checkbox1" name="checkboxGroup" onchange="handleCheckboxChange(event)"> <span> Present </span>
     <input type="radio" id="checkbox2" name="checkboxGroup" onchange="handleCheckboxChange(event)">   <span> Absent </span>
     <input type="radio" id="checkbox3" name="checkboxGroup" onchange="handleCheckboxChange(event)"><span> Leave </span>

 </td>
	</tr>`


    
})


let id =  document.getElementById("father")

function handleCheckboxChange(event) {
    if (event.target.id === "checkbox1") {
        let storedData = localStorage.getItem('userData');
        if (storedData) {
            let parsedData = JSON.parse(storedData);
            let presentStudent = prompt("Enter your roll No");
            
      
            if (presentStudent === null  || presentStudent == "") {
                console.log("Enter your roll number");
                return; // Exit function if roll number is not entered
            }

            let isRegistered = false;

            parsedData.forEach((person) => {
                if (person.rollNo === presentStudent) {
                    console.log("Present");
                    isRegistered = true;

                    id.innerHTML = `<td> <button id = present> Present </button> </td>`
                }
            });

            if (!isRegistered) {
                console.log("You are not registered. Please enter your correct roll number.");
            }
        } else {
            console.log("No user data found in localStorage.");
        }
    } else if (event.target.id === "checkbox2") {
        id.innerHTML = `<td> <button id = absent> Absent </button> </td>`
    } else if (event.target.id === "checkbox3") {
        id.innerHTML =   `<td> <button id = leave> Leave </button> </td>`
    } else {
        console.log("Unknown checkbox ID:", event.target.id);
    }
}









//  else if(present.target.id == "checkbox2"){
// 	console.log("Absent")

//  }

//  else{
// 	console.log("leave")

//  }




























// function handleCheckboxChange(currentCheckbox) {
//     if (currentCheckbox.checked) {
//         // Unselect other checkboxes
//         document.querySelectorAll('input[name="checkboxGroup"]').forEach(function(checkbox) {
//             if (checkbox !== currentCheckbox) {
//                 checkbox.checked = false;
				
//             }
//         });
//     }
// }



