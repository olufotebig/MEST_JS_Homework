/**
 * Created by Jerry on 2016-10-22.
 */

/*  1. Explain the following code:
 *
 *  function func() {
 *      console.log(this);
 *  }
 *
 *  func(); // what is the output? Why?
 *  ANS: The output is the string representation of a function object;
 *  `this` refers to the object instance upon invokation which in this case is a function object.
 *
 *  var obj = {
 *      func: func // what is the second func here?
 *  };
 *  ANS: The second func here is the named function func defined above
 * 
 *
 *  obj.func(); //what is the output? try to explain why.
 *  ANS: the output is the same as invoking func() because obj.func is points to the func function.
 * 
 *
 *  obj.func.bind(window)(); // what is the output? why?
 *  ANS: The output is the string representation of the window object.
 * 
 *
 *  obj.func.bind(this)();  // what is the output? why?
 *  ANS: The output is the string representation of the window object, because `this` in the global 
 *  environment refers to the window object.
 *
 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why?
 *  ANS: The output is the string representation of the people object,
 */

/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 */
function firstChar(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

function capitalize(str) {
    var words = str.split(' ');
    words = words.map(firstChar);
    return words.join(' ');
};

console.log('###Question 2');
var input = 'hi, welcome to mest;'
console.log('input = ' + input + '.output = ' + capitalize(input));


/*
 *  3. Write reg expresion for email validation(This is not an easy
 *  question, please make sure you do your research on this).
 *
 *  *** regex was derived from js regex on emailregex.com 
 */
RegExp.escape = function(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
};

var tlds = ['aero','arpa','biz','com','com.gh','com.ng','coop','edu','gov','info','int','mil','museum','name','net','ng','org','pro','travel','mobi'];
var emailregex_str =  "^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.( " + tlds.join('|')  + "|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$" ;
emailregex = new RegExp (emailregex_str, 'i');

console.log(emailregex_str)
console.log("gbekeloluwa.olufotebi@meltwater.org".match(emailregex));
/*
 * 4. what is localStorage and sessionStorge under window object? What is the
 *    difference
 *    
 *    According to the Mozilla developer network:
 *    
 *    The localStorage property allows you to access a local Storage object. 
 *    localStorage is similar to sessionStorage. 
 *    The only difference is that, while data stored in localStorage has no expiration time, 
 *    data stored in sessionStorage gets cleared when the browsing session ends—that is, 
 *    when the browser is closed.
 *
 * 
 *    The sessionStorage property allows you to access a session Storage object for the current origin. 
 *    sessionStorage is similar to Window.localStorage, the only difference is while data stored in localStorage 
 *    has no expiration set, data stored in sessionStorage gets cleared when the page session ends.
 *
 * 
 */