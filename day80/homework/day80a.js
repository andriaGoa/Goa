const MyForm = document.getElementById("form1");
MyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let myPassword = document.getElementById("password1").value;
    let myPassword1 = document.getElementById("password2").value;
    if (myPassword === "" || myPassword1 === "" ){
        alert("inputs cant be empty");
    }
    else if (myPassword !== myPassword1){
        alert("passwords do not match eachother")
    }
    else if (myPassword === myPassword1) {
        alert("your login was sucsesfull")
    };
});
