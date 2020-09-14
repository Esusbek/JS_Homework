// Task 1

var color = prompt("Введите цвет", "");
if (color == "red") {
    document.write("<div style='background-color: red;'>красный</div>");
    document.write("<div style='background-color: black; color: white;'>черный</div>");
} else if (color == "black") {
    document.write("<div style='background-color: black; color: white;'>черный</div>");
} else if (color == "blue") {
    document.write("<div style='background-color: blue;'>синий</div>");
    document.write("<div style='background-color: green;'>зеленый</div>");
} else if (color == "green") {
    document.write("<div style='background-color: green;'>зеленый</div>");
} else {
 document.write("<div style='background-color: gray;'>Я не понял</div>");
}

//Task 2,4,5

var age = prompt("Enter age", "");
var weather = prompt("Enter current weather", "");
var greetString = "";
if (age >= 0 && age <= 10) {
    greetString += "Hello child. ";
} else if (age > 10 && age <= 25) {
    greetString += "Hi! ";
} else if (age > 25 && age <= 40) {
    greetString += "Greetings. ";
} else if (age > 40 && age <= 80) {
    greetString += "Greetings, Sensei. ";
} else if (age > 80 && age <= 100) {
    greetString += "How are you still alive? ";
} else {
    alert("Invalid age input");
}
switch (weather.toLowerCase()) {
    case "sunny":
        greetString += "Its a good time to go for a walk.";
        break;
    case "rain":
        greetString += "Dont forget your umbrella if you're going out.";
        break;
    case "thunderstorm":
        greetString += "Better stay home today.";
        break;
    case "wind":
    case "cold":
        greetString += "Dont forget your jacket.";
        break;
    default:
        alert("Incorrect weather input");
}
if (!greetString) {
    greetString = "Incorrect inputs";
}
alert(greetString);

//Task 3

var month = prompt("Enter month", "")
switch (month.toLowerCase()) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        alert("This month has 31 days.");
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        alert("This month has 30 days. ");
        break;
    case "february":
        alert("This month has 28 days. ");
        break;
    default:
        alert("Incorrect input.");
        break;
}

//Task 6

var body = {
    tagName: "body",
    subTags: {
        div: {
            tagName: "div",
            subTags: {
                span: {
                    tagName: "span",
                    text: "Enter a data please:"
                },
                br: {
                    tagName: "br"
                },
                input: {
                    tagName: "input",
                    attrs: {
                        type: "text",
                        id: "name"
                    }
                },
                input: {
                    tagName: "input",
                    attrs: {
                        type: "text",
                        id: "surname"
                    }
                }
            }
        },
        div: {
            tagName: "div",
            subTags: {
                button: {
                    tagName: "button",
                    attrs: {
                        id: "ok"
                    },
                    text: "OK"
                },
                button: {
                    tagName: "button",
                    attrs: {
                        id: "cancel"
                    },
                    text: "Cancel"
                }
            }
        }
    }
}

//Task 7

var notebook = {
    brand: prompt("Input notebook brand", ""),
    type: prompt("What type is it?", ""),
    model: prompt("What model is it?", ""),
    ram: prompt("How much RAM it has?", ""),
    size: prompt("Whats the size of it?", ""),
    weight: prompt("Whats the weight of it?", ""),
    resolution: {
        width: prompt("Input horizontal resolution", ""),
        height: prompt("Input vertical resolution", ""),
    },
};

var phone = {
    brand: prompt("Input phone brand", ""),
    model: prompt("Whats model is it?", ""),
    ram: prompt("How much RAM it has?", ""),
    color: prompt("What color is the case?", ""),
};

var person = {
    name: prompt("Input your name", ""),
    surname: prompt("Input your surname", ""),
    married: confirm("Are you married?"),
}

//Task 8

while (!confirm("Exit the loop?"))
{

}

//Task 9

function* genPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2)
        return "Number not valid : " + n;
    for (var i = 2; i < n; i++) {
        if (isPrime(i)) {
            console.log(i + " ");
            yield i;
        }
    }
}
function isPrime(num) {
    for (var i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
var numInput = prompt("Input a positive number", "");
const generatorObject = genPrime(numInput);
var outputString = "";
for (var i = 0; i < numInput; i++) {
    var temp = generatorObject.next().value;
    if (temp) {
        outputString += temp + "; ";
    }
}
alert(outputString);

//Task 10 

var counter = 0;
while (Math.random() <= 0.9)
{
    counter++;
}
alert(counter);

//Task 11 

var n = prompt("Input string length", "");
var outputString = "";
for (var i = 0; i < n; i++)
{
    outputString += "#";
}
alert(outputString);

//Task 12
var n = prompt("Input array length", "");
var arr = [];
var outputString = "";
for (var i = 0; i < n; i++) {
    arr.push(Math.pow(i, 3));
    outputString += arr[i] + "; ";
}
alert(outputString);