document.addEventListener("DOMContentLoaded", function () {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function () {
        const value1 = input1.value.trim();
        const value2 = input2.value.trim();

        if (value1 === "" || value2 === "" || value1 !== value2) {
            console.log("The values should be equal and not blank");
        } else {
            console.log("The operation was successful");
        }
    });
});