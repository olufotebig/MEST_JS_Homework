/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the best practise
 */

var firstCar = 'Doge'; // variable name should not start with number var 1stCar = 'Doge';
var vari = 'variable'; // varaible name should not be keyword var var = 'variable';
var first_name = 'Jerry'; // space should not be in variable name var first name = 'Jerry';
var Sch00lName = 'MEST';
var totalnumber = 100;

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  'It\'s nice to me you today!'; // single quote used within single quote string  var greeting  =  'It's nice to me you today!';
var response = 'Ashwin said, "Yes Sir!"'; //  var response = "Ashwin said, "Yes Sir!"";


/*
 * 3. Try 0.2 + 0.1 === 0.3, explain what happen here
 *
 * Numbers are stored in binary floating-point format and this introduces accuracy issues.
 */




/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */
PSIZE = '12';
PTYPE = 'bbqMeatLover';
PPRICE = '24';
PDESC = 'Maple cured rasher bacon, pepperoni, cherry wood smoked leg ham, ground beef, Italian sausage on a BBQ sauce base';

// Method 1a
var pizza = {
    size : PSIZE,
    type : PTYPE,
    price : PPRICE,
    description : PDESC

}

// Method 1b
var pizza2 = {};
pizza2.size = PSIZE;
pizza2.type = PTYPE;
pizza2.price = PPRICE;
pizza2.description = PDESC;

// Method 2 - Object Constructor Function
function Pizza(size, type, price, description ) {
    this.size = size;
    this.type = type;
    this.price = price;
    this.description = description;
}

var pizza3 = new Pizza(PSIZE, PTYPE, PPRICE, PDESC);


// Method 3 - Object.ceate
var pizza4 = Object.create(pizza);


/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */
function Animal(name, species, sound) {
    this.name = name;
    this.species = species;
    this.sound = sound;
}

Animal.prototype.view = function(){
    return this.name + " is a " + this.species + "!";
}

Animal.prototype.speak = function(){
    return this.sound + "!";
}

dog = new Animal('charlie', 'dog', 'bark');
console.log(dog.view());
console.log(dog.speak());

/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
function print_selection(item) {
    console.log(item);
}
var menu = '1 for rice.\n 2 for beans.\n 3 for fufu';
var selection = '1';
if (selection === '1') {
    print_selection('rice');
}else if (selection === '2') {
    print_selection('beans');
} else if (selection === '3') {
    print_selection('fufu');
} else {
    print_selection('Not a valid menu selection');
}

switch (selection){
    case '1':
        print_selection('rice');
        break;
    case '2':
        print_selection('beans');
        break;
    case '3':
        print_selection('fufu');
        break;
    default:
        print_selection('Not a valid menu selection');
        break;
}

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
var arrayLength = studentScores.length;

function printGrade(score){
    score = parseInt(score);
    var grade;
    if (score <= 100 && score >= 70 ){
        grade = 'A';
    } else if (score < 70 && score >= 60 ){
        grade = 'B';
    } else if (score < 60 && score >= 50 ){
        grade = 'C';
    } else if(score < 50 && score >= 45 ){
        grade = 'D';
    } else if (score < 45 && score >= 40 ){
        grade = 'E';
    }else if (score < 40 && score > 0 ){
        grade = 'F';
    } else{
        grade = 'Invalid Score'; //TODO Throw Error
    }
    console.log(grade);
}

for (i=0; i < arrayLength; i++){
    printGrade(studentScores[i]);
}

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */
studentScores.forEach(function(item){
    printGrade(item);
});