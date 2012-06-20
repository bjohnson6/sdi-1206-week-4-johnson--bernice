//alert("JavaScript works!");
//Bernice Johnson
//June 18, 2012
//Deliverable 4, My Library


var myLibrary = function(){

    //1# string
    //Does a string follow a 123-456-7890 pattern like a phone number? //keep working on this
   var validatePhoneNum = function(number){  //validates the number 
      var phoneNumPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  //the regEx code
        return phoneNumPattern.test(number); //returns true

   };   
   
    //validatePhoneNum(6102865545); //number I used to verify number//returned true //call function

    //validatePhoneNum(100000000000); // number I used to verify number//returned false
    //finshed 1# ///////////////////////////////////////////////////////////////

    //#2 Does a string follow an aaa@bbb.ccc pattern like an email address?
    var validateEmailAddress = function (email){ //validate the email address
    	var emailAddressPattern = ^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b;
    	return emailAddressPattern.test(email);

    //NEED TO WORK ON THIS MORE


    };






//RETURN FUNCTION WRAPPER
    return {
    	"validatePhoneNum":validatePhoneNum, //1# return
    	"validateEmailAddress":validateEmailAddress,

    	
    };


}; 

var newLib = new myLibrary();

//console.log(newLib.checkNum(15)); // WIMBA DEMONSTRATION FOR REFERENCE
console.log(newLib.validatePhoneNum(6102865545)); // NUMBER I USED TO VERIFY..returns true
console.log(newLib.validateEmailAddress(bernicejohnson@fullsail.edu)); //EMAIL ADDRESS I USED TO VERIFY..




