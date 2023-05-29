/*
Question 1



1. Variable = containers that are used to store values

2. Value = information that can be stored in a variable. like a Number, string , text , object, array.

3. Datatype = category of a value that determines the type of operations that can be performed on it and the way it is stored in memory

4. Initialization = assigning an initial value to a variable when it is declared. When you declare a variable, you can choose to immediately assign it a value, and that value becomes its initial value.

5. const = means that values cannot be reassigned once they have been initialized

    let = can be reassigned to a new value

    var = refers to the declared variables and can be used before a variable is declared also have accesible global scope
 
6. Variable scope = determines where and how a variable can be used

7. do while = when you want a function to run once

    for each = when you want to iterate over elements in an array and perform a specific action for each element

8. Hoisting = means you can use variables and functions before they are actually declared in your code.

Variable scoping = refers to the visibility or accessibility of variables within different parts of your code. In JavaScript, for example to access a variable in global scope or local scope



let fullName = 'Mongikazi Dlanjwa'

function fullname(name) {
    console.log(name);
}


Question 2

/*

let personalDetails = {
    firstname : '',
    lastname : '',
    Age : 25,
};

console.log(student.firstname, student.lastname, student.Age);


let subjects = ['CSS', JavaScript', 'HTML', 'Bootsrap']

console.log(subjects[0], subjects[1], subjects[2]), subjects[3];

let address = {
    streetName : 'Ndwana Crescent',
    streetNumber : 11640,
    suburb : 'Philippi',
    city : 'CapeTown',
    country : 'South Africa'
}

console.log(address.streetName, address.streetNumber, address.suburb, address.city, address.country);

*/
/*
let number1 = document.querySelector('#number1')
let number2 =document.querySelector('#number2')
let operator = document.querySelector('#operator')
let result=document.querySelector('#lblResult')


function calculate() {
    

switch (operator.value) {
    case "+":
        result.innerText = eval(number1.value +'+'+ number2.value);
        break;
    case "-":
        result.innerText = eval(number1.value +'-'+  number2.value);
        break;
    case "*":
        result.innerText = eval(number1.value +'*'+ number2.value);
        break;
    case "/":
        result.innerText = eval(number1.value +'/'+ number2.value);
        break;
    default:
        result.innerText = "Invalid 👎, Please select the available operators";
}
}
*/


/*   


Question 4

let subject= "programming";
console.log(subject.split().reverse().join(''))


// Question 5



let people= [
    person1={
        firstname: "Mongikazi",
         dob : new Date("1997-08-21"),

    },person2={
        firstname: "Tom",
        dob :new Date("2000-08-02") ,
    }
];



let current_date=new Date()

// if 'people' has a firstname of Mongi then...
if (people['firstname'] == "Mongikazi") {

    // We are getting the keys of our objects and retrieving their `dob and age`
   
    age = current_date.getFullYear - people[0].dob.getFullYear
    
    //  ..if the current date is greater than her 'd.o.b', we want to create a variable to hold the keys next birthday

    }if (current_date.month < people[0].dob.month ) {
        next_birthday = datetime.date(current_date.year, people[0].dob.month, people[0].dob.day)
    
    // ... 
    }if (next_birthday < current_date) {
        next_birthday = datetime.date(current_date.year + 1, people[0].dob.month, dob.day)
        days_left = (next_birthday - current_date).days
    }
    
    console.log(people[firstname] + "' age is", age, "and there are", days_left, "days left until his birthday.");

/*

            Question 6 



 
switch (marks) {
    case "100%" :
    System.out.println("You're amazing");
    break;
  case "90-99":
    System.out.println("Well Done");
    break;
    case "80-89":
    System.out.println("Way to go");
    break;
    case "75-79":
    System.out.println("Keep it up");
    break;
    case "60-74":
    System.out.println("You did good");
    break;
    case "50-59":
    System.out.println("That was good");
    break;
    case "Below 50":
    System.out.println("You failed");
    break;
};*/

friends= ['Henk','Peter', 'Jack', 'Lerato', 'Julius']
console.log(friends.slice( 2, 4)) 




