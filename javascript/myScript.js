function validateForm(){
    var Fname = document.forms["contact-form"]["Fname"].value;
    var Lname = document.forms["contact-form"]["Lname"].value;
    var comment = document.forms["contact-form"]["Comment"].value;

    console.log("The Form Data is: "+ "FirstName" + Fname + "Lastname" + Lname + "Comments" + comment ) 
}