const inputs = ["email", "Name", "UserName", "Message"];

function isEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const onChange = () => {
    alert("onchange")
  }
inputs.forEach((item) => {
    document.getElementById(`input-${item}`).addEventListener("focusout", () => {
        if (item === "email") {
            if (document.getElementById(`input-${item}`).value === "") {
                document.getElementById(`${item}Vadn`).style.display = "block";
            }
            else if (!isEmail(document.getElementById(`input-${item}`).value)) {
                document.getElementById(`${item}Vadn`).style.display = "none";
                document.getElementById("ValemailVadn").style.display = "block";
            }
            else{
                document.getElementById(`${item}Vadn`).style.display = "none";
                document.getElementById("ValemailVadn").style.display = "none";
            }
        }
        else {
            if (document.getElementById(`input-${item}`).value === "") {
                document.getElementById(`${item}Vadn`).style.display = "block";
            }
        }
    })
    document.getElementById(`input-${item}`).addEventListener("focusin", () => {
        if (item === "email") {
            document.getElementById(`${item}Vadn`).style.display = "none";
            document.getElementById(`$Val{item}Vadn`).style.display = "none";

        }
        else {
            document.getElementById(`${item}Vadn`).style.display = "none";
        }
    })
})
