// Firstly we have select all elements in our HTML web page

let addBtn = document.querySelector("#liveToastBtn"); // for add button

let todoList = document.querySelector("#list"); // for select list items

let task = document.querySelector("#task"); // for task input id

let liLength = document.getElementsByTagName("li"); // for count of li element

for (let i = 0; i < liLength.length; i++) {
	let closeButton = document.createElement("span"); //close for each one of task element

	closeButton.textContent = "\u00D7"; // for creating close button

	closeButton.classList.add("close"); // we add close class for that button
	closeButton.onclick = removeButton; // when we clicked close button, we'll run our removeButton function
	liLength[i].append(closeButton); // we add close button for each index via using index

	liLength[i].onclick = check; // when we clicked that button, we'll run this function
}

// We add listener for our created button

addBtn.addEventListener("click", addTask); //when we clicked button, addTask will run

function check() {
	this.classList.toggle("checked");
}

function removeButton() {
	this.parentElement.remove(); //for remove button function. We use remove for removing our tasks
}

function addTask() {
	if (task.value == "") {
		// we checked input value is empty or not
		$(".error").toast("show"); //we use error class for showing toast message
	} else {
		$(".success").toast("show");

		let liDOM = document.createElement("li"); //we use create element for using create element with li
		todoList.appendChild(liDOM); //we use append child for adding our new element in the end of list
		liDOM.innerHTML = task.value; //we add our liDOM element value with task.value
		task.value = "";

		liDOM.onclick = check;

		let closeButton = document.createElement("span");
		closeButton.textContent = "\u00D7";
		closeButton.classList.add("close");
		closeButton.onclick = removeButton;

		liDOM.append(closeButton);
		todoList.append(liDOM);
		inputElement.value = "";
	}
}
