const validText = "<span style='color: gren; font-weight: bold;'>✓</span>";

function ButtonProcess(){
    const docTitleOutput = document.getElementById("TitleValidation");
    const docFirstnameOutput = document.getElementById("FirstnameValidation");
    const docEmailOutput = document.getElementById("EmailValidation");
    const docMessageOutput = document.getElementById("MessageValidation");

    function ClearErrors(){
        docTitleOutput.innerHTML = "";
        docFirstnameOutput.innerHTML = "";
        docEmailOutput.innerHTML = "";
        docMessageOutput.innerHTML = "";
    }

    function ErrorText(errorMessage){
        return "<span style='color: red; font-weight: bold;'>X " + errorMessage + "</span>";
    }
    
    function CheckValid(){
        // -- Title Validation --
        if(document.getElementById("InputTitle").value == ""){
            docTitleOutput.innerHTML = ErrorText("Please select a Title")
        }
        else{
            docTitleOutput.innerHTML = validText
        }
        // -- End Title Validation
    
        // -- Firstname Validation --
        if(document.getElementById("InputFirstname").value == ""){
            docFirstnameOutput.innerHTML = ErrorText("Please enter a Firstname");
        }
        else{
            docFirstnameOutput.innerHTML = validText;
        }
        // -- End of Firstname Validation --

        // -- Surname NOT Required --
    
        // -- Email Validation --
        const docEmailInput = document.getElementById("InputEmail"); 

        if(docEmailInput.value == ""){
            docEmailOutput.innerHTML = ErrorText("Please enter a Valid Email Address");
        }
        else if(docEmailInput.value.length < 3){
            docEmailOutput.innerHTML = ErrorText("Email must be at least 3 characters");
        }
        else if(!docEmailInput.value.includes("@")){
            docEmailOutput.innerHTML = ErrorText("Email must contain an @");
        }
        else{
            docEmailOutput.innerHTML = validText;
        }
        // -- End Email Validation --

        // -- Message Validation
        if(document.getElementById("InputMessage").value == ""){
            docMessageOutput.innerHTML = ErrorText("Please enter a Message");
        }
        else{
            docMessageOutput.innerHTML = validText;
        }
        // -- End Message Validation --
    }

    ClearErrors();
    CheckValid();
}