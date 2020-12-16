function emailValidation() {
    var val = input.Email.value.search(/[a-z]+.[a-z]{2}[1-2][1-9]@bmsce.ac.in/i);
    if (val == -1) {
        return false;

    } else {
        return true;
    }
}

function emailProfessorValidation() {
    var val = input.Email.value.search(/[a-z]+.[a-z]{3}@bmsce.ac.in/i);
    if (val == -1) {
        return false;

    } else {
        return true;
    }
}
//Login: student
function MoveOnStudent() {
    if (emailValidation()) {
        location.replace("index1.html"); //html link for student landing page
    } else {
        alert("INVALID EMAIL ID. PLEASE TRY AGAIN");
    }
}
//login: senior
function MoveOnSenior() {
    if (emailValidation()) {
        location.replace("seniormiddlepage.html"); //html link for senior landing page
    } else {
        alert("INVALID EMAIL ID. PLEASE TRY AGAIN");
    }
}
//login: professor
function MoveOnProfessor() {
    if (emailValidation()) {
        location.replace("professormiddlepage.html"); //html link for professor landing page
    } else {
        alert("INVALID EMAIL ID. PLEASE TRY AGAIN");
    }
}
//signup: student and senior
function StartS() {


    if (emailValidation() == false) {
        alert("INVALID EMAIL! PLEASE ENTER COLLEGE EMAIL ID ONLY!!!!");
    }
    if (phoneValidation() == false) {
        alert("INVALID PHONE NUMBER! PLEASE ENTER A VALID PHONE NUMBER!!!!");
    }

    if (passwordValidation() == false) {
        alert("Password and Confirm password dont match!!");
    }
    if (emailValidation() == true && phoneValidation() == true && (passwordValidation() == true)) {
        location.replace("middlepage.html");

    }
}
//sign up: professor
function StartP() {


    if (emailProfessorValidation() == false) {
        alert("INVALID EMAIL! PLEASE ENTER COLLEGE EMAIL ID ONLY!!!!");
    }
    if (phoneValidation() == false) {
        alert("INVALID PHONE NUMBER! PLEASE ENTER A VALID PHONE NUMBER!!!!");
    }

    if (passwordValidation() == false) {
        alert("Password and Confirm password dont match!!");
    }
    if (emailProfessorValidation() == true && phoneValidation() == true && (passwordValidation() == true)) {
        location.replace("middlepage.html");

    }
}

function passwordValidation() {
    var p = input.Pass.value;
    var c = input.Confpass.value;
    if (p != c) {
        return false;
    } else {
        return true;
    }
}

function phoneValidation() {
    var ph = input.Phone.value.search(/[0-9]{10}/);
    if (ph == -1 || input.Phone.value.length != 10) {
        return false;
    } else {
        return true;
        4
    }
}