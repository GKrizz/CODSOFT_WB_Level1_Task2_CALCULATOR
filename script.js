document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("inputBox");
    let buttons = document.querySelectorAll("button");

    let string = "";
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            if (e.target.innerHTML === "=") {
                try {
                    string = eval(string);
                    if (isNaN(string) || !isFinite(string)) {
                        throw new Error("Invalid input");
                    }
                    input.value = string;
                } catch (error) {
                    alert("Invalid input");
                    string = "";
                    input.value = "";
                }
            } else if (e.target.innerHTML === "AC") {
                string = "";
                input.value = string;
            } else if (e.target.innerHTML === "DEL") {
                string = string.substring(0, string.length - 1);
                input.value = string;
            } else {
                string += e.target.innerHTML;
                input.value = string;
            }
        });
    });
});
