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

   };   //need to add if else statement????
   
    //validatePhoneNum(6102865545); //number I used to verify number//returned true //call function

    //validatePhoneNum(100000000000); // number I used to verify number//returned false
    //finshed 1#  






//RETURN FUNCTION WRAPPER
    return {
    	"validatePhoneNum":validatePhoneNum, //1# return

    	
    };


}; 

var newLib = new myLibrary();

//console.log(newLib.checkNum(15)); // WIMBA DEMONSTRATION FOR REFERENCE
console.log(newLib.validatePhoneNum(6102865545)); //returns true




