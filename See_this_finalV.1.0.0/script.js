//document.write('<h1> I am external Javascript <h1>');

//function showDate(){
//document.getElementById('datep').innerHTML=Date();
//}

let a=10;
let b=15;
let sum=a+b;
let mul=a*b;
let div=a/b;
let mod=a%b;
const pi=3.14;
let r=45;
let area=pi*r*r;
let fname="Bishworaj";
let lname="Poudel";

/*
document.write(sum);
alert("I am Hacker");

console.log(sum);
document.write(area.toFixed(1))



document.write(fname+' '+lname)

let myAge=17;
if (myAge>=18){
 document.write("You are voter");
}
else if(myAge==17){
    document.write("hello");
}
else{
document.write("You are not voter");
}

//Looping tutorial//
//for loop//
for (let i=1 ;i<=100; i++){
 document.write("<br>",i);
}

//while loop
let i=0;
while (i<=100){
document.write("<br> Sagar Khanal");
i++;
}

//do while loop
let x=0;
do{
document.write(x);
x++;

}while (x<=100)
*/

//Array
/*
let student1="Hari Sharma";
let student2="binit gurung";
let myname="Sagar Khanal";
const days=["sunday","monday","tuesday","wedensday","thursday"];
console.log(days);

document.write(days[0]);
document.write(days[1]);
*/

/*
days.forEach(
    function(dayz) 
    {console.log(dayz)}
    );  
    */
const days=["sunday","monday","tuesday","wedensday","thursday"];
days.forEach(
function(abc){document.write(abc+"<br>")}
);

//shift removes first value//
days.shift();
document.write("<br>")
days.forEach(
    function(abc){document.write(abc+"<br>")}
    );
document.write("<br>")

//unshift adds value to first
days.unshift("Sagar");
days.forEach(
    function(abc){document.write(abc+"<br>")}
    );
    document.write("<br>")
//similary days.pop() removes last value, days.push("Friday") adds values to last


//the first number denotes place of entry and second number denotes element to be deleted
days.splice(1,1,"Between")
days.forEach(
    function(abc){document.write(abc+"<br>")}
    );

//Function

function printName(){
    document.getElementById("info").innerHTML="Sagar Khanal";
}

function calculateInterest(){
    let p=document.getElementById("P").value;
    let t=document.getElementById("T").value;
    let r=document.getElementById("R").value;
   
    let s=p*t*r*0.01;
    document.getElementById("info").innerHTML = s;
}

let person={
  fname:"Sagar",
  lname:"Khanal",
  age:21,
  location:"Pokhara",
  hobby:"Football",
  fullname: function(){
    return this.fname+" "+this.lname;
  }
};
document.write(person.fullname());

f=3.5414234
let e=Math.PI;
let g=Math.round(f);
document.write(e);
document.write("<br>");
document.write(g);

//similarly Math.pow(8,2) gives 64
//Math.sqrt(64) gives 8

let h=Math.random();
alert(h*10); 