/*
 * 1. explain the special meaning of the following special characters
 \0 the null character
 \n new line
 \r carriage return
 \v vertical tab
 \t
 \backspace
 \f form feed
 */

/*
 *  2.Please combine those two array together as one array by using concate:
 *  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 *  var arr2 = ['Thursday', 'Friday', 'Saturday']
 */
var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday'];
var arr2 = ['Thursday', 'Friday', 'Saturday'];
var arrCombined = arr1.concat(arr2);
console.log( arrCombined );
/*
 *  3.Please combine those three array together as one array by only using concate() function once:
 *  var arr1 = ['Sunday', 'Monday']
 *  var arr2 = ['Tuesday', 'Wednesday']
 *  var arr3 = ['Thursday', 'Friday', 'Saturday']
 */
var arr1 = ['Sunday', 'Monday'];
var arr2 = ['Tuesday', 'Wednesday'];
var arr3 = ['Thursday', 'Friday', 'Saturday'];
var arrCombined = arr1.concat(arr2,arr3);
console.log( arrCombined );
/*
 * 4. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.sort());
 *    console.log(arr);
 */

/*
 * 5. what is the result(output of following code):*/
 var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 console.log(arr.sort());
 console.log(arr);
 

/*
 * 6. Please remove mike, jerry, adn Enoch from the following array by using slice
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 */
 var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 arr.splice(2,2);
 arr.splice(-2,1);
 console.log(arr);

/*
 * 7. what is the result(output of following code): */
 var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 console.log(arr.slice(-3, -1));
 console.log(arr);



/*
 * 8. what is the result(output of following code): */
var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
console.log(arr.slice(2));
console.log(arr);


/*
 * 9. what is the result(output of following code): 
 * ANS  = [ 'Enoch', 'lars' ]
 * 
 * */
var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
console.log("# Question 9");
console.log(arr.slice(-2));
console.log(arr);


/*
 * 10. convert the following function to function expression:
 *   function addTwoNumber (num1, num2) {
 *     return num1 + num2;
 *   }
 *
 *   and invoke the function expression to caluate the result of 256 + 532
 */

function addTwoNumber (num1, num2) {
    return num1 + num2;
};
console.log(addTwoNumber(256, 532));

/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
 */
var iife = (function (){
    var life = "Vine";
    console.log("#Lecture 11");
    console.log(life);
}());





/*
 * 12. you have following objects:
 *     var person1 = {
 *          name: 'ashwin'
 *     };
 *
 *     var person2 = {
 *          name: 'lars'
 *     };
 *
 *    function namer() {
 *          return this.name;
 *    }
 *
 *    use bind function here to make namer() function to call 'ashwin'
 *    and lars
 */

var person1 = {
    name: 'ashwin'
};
var person2 = {
    name: 'lars'
};
function namer() {
    return this.name;
}
var namer1 = namer.bind(person1);
var namer2 = namer.bind(person2);
console.log("#Question 12a.");
console.log(namer1());
console.log(namer2());

/*
 * 12. you have following object:
 *     var number = {
 *          x: 22,
 *          y: 33
 *     };
 *
 *    var count = function() {
 *          console.log(this.x + this.y);
 *    }
 *  a. what is the result when we invoke count()?
 *  b. use bind on function expression to make this work.
 */
var number = {
    x: 22,
    y: 33
};

var count = function() {
    console.log(this.x + this.y);
}
count =  count.bind(number);
console.log("12.");
count();

/*
 * 13. you have following objects:
 *     var person1 = {
 *          firstName: 'ashwin'
 *          lastName: 'Yaw'
 *     };
 *
 *     var person2 = {
 *          firstName: 'lars',
 *          lastName: 'Mike'
 *     };
 *
 *     function hello(greeting) {
 *          console.log(greeting + ' ' + this.firstName + '' + lastName);
 *    }
 *
 *  use call methods on function expression to make this work.
 */
var person1 = {
    firstName: 'ashwin',
    lastName: 'Yaw'
};

var person2 = {
    firstName: 'lars',
    lastName: 'Mike'
};

function hello(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
console.log("###Question 13");
hello.call(person1, 'Good morning ');
hello.call(person2, 'Good morning ');


/*
 * 14. We have a following string:
 *     var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
 *
 *     please write a function to change the first letter of every word to upper case.
 */
function firstChar(word){
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

function capitalize(str){
    var words = str.split(' ');
    words = words.map(firstChar);
    return words.join(' ');
};

console.log("###Question 14");
console.log(capitalize("i am a mester"));
