function submitName(){

let name = document.getElementById("nameInput").value;
let msg = document.getElementById("message");

if(name === ""){
msg.innerHTML = "Error: Please enter a name";
msg.style.color = "red";
}
else{
msg.innerHTML = "Welcome, " + name + "!";
msg.style.color = "green";
}

}
