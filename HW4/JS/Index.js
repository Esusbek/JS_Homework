//Task 1

function validateNum(n) {
    if (isNaN(n) || !isFinite(n)) return false;
    return true;
}

function validateLink(link) {
    let flag = link.indexOf(" ");
    if (flag === -1 && link.length>=10) return true;
    return false;
}

let link = prompt("Enter link to the image:");
if (validateLink(link)) {
    let baseAng = +prompt("Enter rotation angle:");
    let ang = baseAng;
    for (var i = 0; i < 5; i++) {
        let img = document.createElement("img");
        img.setAttribute('src', link);
        img.setAttribute('style', `transform: rotateZ(${ang}deg);`);
        document.getElementById("wrapper").appendChild(img);
        ang += baseAng;
    }
}
//Task 2

function deleteTag(tagName) {
    let tag = document.getElementById(tagName);
    if (!tag) return false;
    tag.remove();
    return true;
}
do {
    if (!deleteTag(prompt("What tag to delete?")))
    {
        alert("This tag doesnt exist");
    }
} while (confirm("Continue deleting?"));

//Task 3
let MultiTable = document.createElement("table");
let innerStr = "<tr>";
for (let i = 0; i < 10; i++) {
    innerStr += `<th>${i}</th>`;
}
innerStr += "</tr>";
for (let i = 1; i < 10; i++) {
    innerStr += `<tr><th>${i}</th>`;
    for (var j = 1; j < 10; j++) {
        innerStr += `<td>${i * j}</td>`;
    }
    innerStr += "</tr>";
}
innerStr += "</table>";
MultiTable.innerHTML = innerStr;
MultiTable.style.border = "1px solid black";
document.body.appendChild(MultiTable);

//Task 4

let cells = document.querySelectorAll("td");
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseover", function () {
        this.style.backgroundColor = "Red";
    });
    cells[i].addEventListener("mouseout", function () {
        this.style.backgroundColor = "White";
    });
}

//Task 5

document.getElementById("btn").addEventListener("click", function () {
    let in1 = +document.getElementById("input1").value;
    let in2 = +document.getElementById("input2").value;
    if (validateNum(in1) && validateNum(in2)) {
        document.getElementById("result").innerText = in1 + in2;
    }
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
})

//Task 6


function sort(arr, cond) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i+1; j < arr.length; j++) {
            if (arr[i][cond] > arr[j][cond])
            {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}

var persons = [{
    name: 'Vasyan', age: 21
}, {
    name: 'Kolyan', age: 22
}, {
    name: 'Mashka', age: 99
}];

sort(persons, 'name'); // return sorted by 'name' array;
console.log(persons)
sort(persons, 'age'); // return sorted by 'age' array;
console.log(persons)

//Task 7

function splice(array, start) {
    
}

let arr = [' hello darkness   my old   friend ', ' i\'ve come to   talk  with   you again    '];
console.log(arr.map(function (currentValue, index, array) {
    let i = 0;
    let el = currentValue.split("");
    while (el[0] === ' ') { el.splice(0, 1); }
    while (el[el.length-1] === ' ') { el.splice(el.length - 1, 1); }
    while (i < el.length - 1) {
        if (el[i] === ' ' && el[i + 1] === ' ') {
            el.splice(i, 1);
            i--;
        }
        i++;
    }
    return el.join("");
}));

//Task 8

function filter(array, cb) { // should return new filtered array
    let result = [];
    for (var i = 0; i < array.length; i++) {
        if (cb(array[i]))
        {
            result.push(array[i]);
        }
    }
    return result;
}

//Task 9

var someTree = {
    tagName: "table",
    children: [
        {
            tagName: "tr",
            children: [
                {
                    tagName: "td",
                    text: "some text",
                },
                {
                    tagName: "td",
                    text: "some text 2",
                }
            ]
        }
    ],
    attrs:
    {
        border: 1,
    },
}

function DOMCreate(el) {
    let res = document.createElement(el.tagName);
    for (prop in el.attrs) {
        res.setAttribute(prop, el.attrs[prop]);
    }
    if (el.text != undefined) res.innerText = el.text;
    if (el.children) {
        for (var i = 0; i < el.children.length; i++) {
            res.appendChild(DOMCreate(el.children[i]));
        }
    }
    return res;
}

document.body.appendChild(DOMCreate(someTree));