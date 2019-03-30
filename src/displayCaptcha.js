window.displayCaptcha = () => {
    const name = document.forms[0]["name"].value;
    const email = document.forms[0]["_replyto"].value;
    const message = document.forms[0]["message"].value;
    const validEmail = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (name && validEmail && message) {
        document.getElementById("contactCaptcha").style.display = "initial";
        return true;
    }

    return false;
};