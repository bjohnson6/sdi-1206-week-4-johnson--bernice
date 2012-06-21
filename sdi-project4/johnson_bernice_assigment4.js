//alert("JavaScript works!");
//Bernice Johnson
//June 18, 2012
//Deliverable 4, My Library


var myLibrary = function(){

    //1# string
    //Does a string follow a 123-456-7890 pattern like a phone number? 
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
         //SEE EMAIL REGEX VERIFICATION CODE EXPLANATION BELOW THE CONSOLE.LOGS AT THE BOTTOM OF THE PAGE
//SAVE TO TEST AGAIN ^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)$/;

//FINISHED 2# /////////////////////////////////////////////////////////////
    
    //3# Is the string a URL? (Does it start with http: or https:?)
    var validateUrl = function (url){  //Function and string argument..validate url
        var urlPattern =  /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; //the url regEx code
    	    if(urlPattern.test(url) === false) { 
            console.log("Your url is not a match."); ////this message shows up if the url is invalid. false.
	        return false;
        }else{
	    	console.log("Your url is a match."); // this message shows up if the url is valid http or https. true
	    	return true;
        }
	   
    };
         //validateUrl("http://fullsail.com"); //true
        //validateUrl("https://httpsnow.org"); //true
       //validateUrl("www.google.com"); //false
      //validateUrl("p//nothing.com"); //false

//Finshed 3# /////////////////////////////////////////////////////////////


    //4# Given a string version of a number such as "42", return the value as an actual number, such as 42.
    var changeToNumber = function(stringNum){ //FUNTION AND STRING ARGUMENT
    	var actualNumber = parseFloat(stringNum); //parseFloat function parses a string and returns a floating point number.
    	return actualNumber; //RETURNS THE NUMBER 42
    };
   
 //Finished 4# //////////////////////////////////////////////////////////   

    //5# Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
    var forMatNum = function(num){ //FUNCTION WITH NUMBER ARGUMENT
    	var number = num
    	var nums = number.toFixed(2); //toFixed converts a number into a string, keeping only 2 decimals.
    	console.log("I have $" + number.toFixed(2) + " left."); //message says, I have $2.10 left.
    	return nums; //returns 2.10

    };
//Finished 5# /////////////////////////////////////////////////////////

    
    //6# Title case a string 
    var toUpperCases = function(str){ //function and string argument
		str = str.toLowerCase().replace(/([-\.']) */g,'$1 '); // str.toLowerCase converts a string to lower case letters
		var regExPattern = /\b([a-z'-\.]+)\b/ig; //RegEx Pattern
		str = str.replace(regExPattern,function(w){ //see below str.replace 
		return w.charAt(0).toUpperCase()+w.substring(1); //The charAt() method returns the character at the specified index in a string.
		});
		return str.replace(/^ *|(\-|') *| *$/g,'$1'); //see below str.replace
	};
        //toUpperCases("bernice johnson"); returns Bernice Johnson

//The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
//The toUpperCase() method converts a string to uppercase letters.
//The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.

  





//RETURN FUNCTION WRAPPER
    return {
    	"validatePhoneNum":validatePhoneNum, //1# return
    	"validateEmailAddress":validateEmailAddress, //2# return
    	"validateUrl":validateUrl, //3# return
    	"changeToNumber":changeToNumber,
    	"forMatNum":forMatNum,
    	"toUpperCases":toUpperCases,

    	
    };


}; 

var newLib = new myLibrary();

//console.log(newLib.checkNum(15)); // WIMBA DEMONSTRATION FOR REFERENCE
console.log(newLib.validatePhoneNum(6102865545)); // NUMBER I USED TO VERIFY..returns true
console.log(newLib.validateEmailAddress("bernicejohnson@fullsail.edu")); //EMAIL ADDRESS I USED TO VERIFY..
console.log(newLib.validateUrl("http://fullsail.com")); //EMAIL TO VERIFY HTTP URL PART..
console.log(newLib.changeToNumber("42")); //STRING NUMBER CONVERTED TO NUMBER..
console.log(newLib.forMatNum(2.1)); //NUMBER USED TO CHANGE ITO A DECIMAL 2 PLACES 2.10
console.log(newLib.toUpperCases("bernice johnson")); //STRING NAME USED..RETURNS Bernice Johnson




//email verification notes below
///^[a-zA-Z0-9._-]+:  This means that the email address must begin with alpha-numeric characters (both lowercase and uppercase characters are allowed). It may have periods,underscores and hyphens.

//[a-zA-Z0-9.-]+: Behind the ‘@’ sign there must be some of the alpha-numeric characters. It can also contain period (‘.’) and and hyphens(‘-’).
//
//[a-zA-Z]{2,4}$/: The email address must end with two to four alphabets. Having a-z and A-Z means that both lowercase and uppercase letters are allowed. 





