//alert("JavaScript works!");
//Bernice Johnson
//June 18, 2012
//Deliverable 4, My Library


var myLibrary = function(){

    //1# string
    //Does a string follow a 123-456-7890 pattern like a phone number? //keep working on this
   var validatePhoneNum = function(number){  // Function and  number argument ..validates the number 
      var phoneNumPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  //the regEx code
        return phoneNumPattern.test(number); //returns true

   };   
   
 //validatePhoneNum(6102865545); //number I used to verify number//returned true //call function

 //validatePhoneNum(100000000000); // number I used to verify number//returned false
 //finshed 1# ///////////////////////////////////////////////////////////////

   //#2 Does a string follow an aaa@bbb.ccc pattern like an email address?
   var validateEmailAddress = function (email){ // Funtion and string argument ..validate the email address
      var emailAddressPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //email regEx code
    	  if(emailAddressPattern.test(email) === false) {
	      console.log("Your email address is not valid."); //this message shows up if the email is invalid or incorrect.
	      return false;
	  }else{
		  console.log("Your email address is valid."); //MESSAGE SHOWS UP IF THE EMAIL ADDRESS IS CORRECT.
		  return true;//  RETURNS TRUE
      }
   };
    	 //used "bernicejohnson@fullsail.edu" to test returns: Your email address is valid. & true.
    	 //used "bernicejohnson@fullsail.e" to test returns : Your email address is not valid. & false.
    
//SAVE TO TEST AGAIN ^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$/;

//FINISHED 2# /////////////////////////////////////////////////////////////
    
    //3# Is the string a URL? (Does it start with http: or https:?)
    var validateUrl = function (url){  //Function and string argument..validate url
    	var urlPattern = ("^(http|https://"); // the url regEx code
    	    if(urlPattern.test(url) === false) { 
	        console.log("Not valid"); ////this message shows up if the url is invalid. false.
	        return false;
	    }else{
	    	console.log("Valid."); // this message shows up if the url is valid http or https. true
	    	return true;

	    }
    //}

    };
//Still working on this one///////getting an error that says on my if conditional
  






//RETURN FUNCTION WRAPPER
    return {
    	"validatePhoneNum":validatePhoneNum, //1# return
    	"validateEmailAddress":validateEmailAddress, //2# return
    	"validateUrl":validateUrl, //3# return

    	
    };


}; 

var newLib = new myLibrary();

//console.log(newLib.checkNum(15)); // WIMBA DEMONSTRATION FOR REFERENCE
console.log(newLib.validatePhoneNum(6102865545)); // NUMBER I USED TO VERIFY..returns true
console.log(newLib.validateEmailAddress("bernicejohnson@fullsail.edu")); //EMAIL ADDRESS I USED TO VERIFY..
console.log(newLib.validateUrl("http://fullsail.com")); //EMAIL TO VERIFY HTTP URL PART..
console.log(newLib.validateUrl("https://httpsnow.org")); //EMAIL TO VERIFY THE HTTPS PART..




//email verification notes below
///^[a-zA-Z0-9._-]+:  This means that the email address must begin with alpha-numeric characters (both lowercase and uppercase characters are allowed). It may have periods,underscores and hyphens.

//[a-zA-Z0-9.-]+: Behind the ‘@’ sign there must be some of the alpha-numeric characters. It can also contain period (‘.’) and and hyphens(‘-’).
//
//[a-zA-Z]{2,4}$/: The email address must end with two to four alphabets. Having a-z and A-Z means that both lowercase and uppercase letters are allowed. 





