const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");



email.addEventListener("blur", validateEmail);
subject.addEventListener("blur", validateInput);
message.addEventListener("blur", validateInput);



// Validate email address:
function validateEmail(e) {
    if (!e.target.value.includes("@")) {
        email.classList.add("bad-email");
        e.target.classList.add("not-ready");

    } else {
        email.classList.remove("bad-email");
        e.target.classList.remove("not-ready");

    }
    activeSendButton();

}

// Validate subject:
function validateInput(e) {
    if (e.target.value == "") {
        e.target.classList.add("bad-email");
        e.target.classList.add("not-ready");
    } else {
        e.target.classList.remove("bad-email");
        e.target.classList.remove("not-ready");

    }
    activeSendButton();
}


function activeSendButton() {
    let send = document.querySelector("#sendBtn");

    if (document.querySelectorAll(".not-ready").length == 0) {
        send.classList.remove("disabled");
    } else {
        send.classList.add("disabled");
    }
}