

function validate() {
      
        if( document.myForm.firstname.value == "" ) {
            alert( "Please provide your first name!" );
            document.myForm.firstname.focus() ;
            return false;
        }
		if( document.myForm.lastname.value == "" ) {
            alert( "Please provide your last name!" );
            document.myForm.lastname.focus() ;
            return false;
        }
        if( document.myForm.email.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.email.focus() ;
            return false;
        } else {
			validateEmail();
		} 
        return( true );
    }
	
	function validateEmail() {
         var emailID = document.myForm.email.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID")
            document.myForm.email.focus() ;
            return false;
         }
         return( true );
      }
