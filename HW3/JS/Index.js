// Task 1

var persons = [
    {
        Name: `Vasya`,
        Surname: `Pupkin`,
        Fathername: `Clerk`
    },
    {
        Name: `Zheka`,
        Surname: `Zhechin`,
        Fathername: `Cashier`
    },
    {
        Name: `Lena`,
        Surname: `Pupkina`,
        Fathername: `Businesswoman`
    },
]
persons[persons.length] = {
    Name: `Petya`,
    Surname: `Pupkin`,
};

//Task 2

for (var i = 0; i < persons.length; i++) {
    console.log(persons[i]);
}

//Task 3

for (var i = 0; i < persons.length; i++) {
    console.log(`${persons[i].Name} ${persons[i].Surname}`);
}

//Task 4

for (var i = 0; i < persons.length; i++) {
    persons[i].FullName = `${persons[i].Name} ${persons[i].Surname}` + (persons[i].Fathername ? ` ` + persons[i].Fathername : ``);
}

//Task 5

var Jstring = JSON.stringify(persons);
console.log(Jstring);

//Task 6

var persons2 = JSON.parse(Jstring);
for (var i = 0; i < persons2.length; i++) {
    console.log(persons2[i]);
}

//Task 7

var str = `<table border='1'>`
for (var i = 0; i < persons.length;i++) {
    str += `<tr><td>${persons[i].Name}</td><td>${persons[i].Surname}</td></tr>`;
}
str += `</table>`
console.log(str)
document.write(str)

//Task 8,9,11

function avg2(...num)
{
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        if (!isNaN(num[i])) {
            sum += num[i];
        }
    }
    return sum / num.length;
}

//Task 10 

function IntRandom(lowerBound, upperBound)
{
    if (upperBound === undefined)
    {
        upperBound = lowerBound;
        lowerBound = 0;
    }
    return Math.round(Math.random() * (upperBound - lowerBound) + lowerBound);
}

console.log(IntRandom(10), IntRandom(10, 20));

//Task 12

function splice(array, start, amount, ...insert) {
    var result = [];
    for (var i = 0; i < start; i++) {
        result[i] = array[i];
    }
    for (var i = 0; i < insert.length; i++) {
        result[start + i] = insert[i];
    }
    for (var i = start + amount; i < array.length; i++) {
        result[insert.length + i - amount] = array[i];
    }
    return result;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(splice(array, 1, 2,7,7));