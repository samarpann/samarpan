//callbacks

// function cbExample(name,cb) {
//     return cb(name);
// }
// function greetName(name) {
//     return `hello $[name} good to see u`;
// }
// console.log(cbExample("samarpan",greetName))

class railwayForm {
   submit(){
    alert("the form is submit")
   }
   cancel(){
    alert("the form is cancel")
   }
        
    
}
// let samarpan= new railwayForm()
// let rihan= new railwayForm()
 
// samarpan.cancel()
// rihan.submit()


// CRASH COURSE
//JS 
// IT IS A PROGRAMMI A LANGUAGE TO MAKE WEBSITE MORE INTERACTUVE 

// let a='samarpan'
// let b='singh'
// console.log(a+b);
// console.log(`${a} ${b}`);

// DATA TYPES I JS 
//  NUBMER 
// STRING 
// BIG INT ------>u can use n after a number or BigInt(10) 
let sym= Symbol("jjfdf")
console.log(sym);

// undefined
// NULL /
// BOOLEAN  it is o and 1
// SYMBOL  IT IS A TYPE OF FROM WHICH U CAN MAKE SYMBOL 


// COMPARION OPERATORS 
// ===   ---> EQUAL TO AND ALSO CHR=ECK THE DATA TYPE
// 10>12--->10 greater than 12 
// !---->not equal to 


// FALSY VALUE AND TRUTHY VAALUE 
// FALSY-->0,EMPTY STRING ,NULL,UNDEFINED 
//OTHER THEN THIS IS TRUTHY VALUE 


// CONDITIONAL STATEMENT 
// IF ,ELSE ,ELSEIF AND THE OTHER IS SWITCH CASE 


// TERNARY OPERATOR 
// let age=4
// let mssg =(age>=18)?"you are adult ":"you are not ";
// console.log(mssg);
// let a=5;
// let b=6;
//  let ans=a>5&& b>a?"ok":"no";
//  console.log(ans);
 
// &&----->it means multiply =1*0


// ||=>it means or 


// LOOPS
//while 
// while(condition){

// }

// //do while 
// // for in 
// for each 



   

// let i = 1; 
// let total = 0; 

// while (i <= 5) {
//     total += i; 
//     i++; 
// }

// console.log("The sum is:", total); 


// let i=1;
// let total=1
// while (i<=5) {
//    total*=i
//    i++;
// }
// console.log(total);


// break and continue
// let i=9
// do{
//    console.log(i);
   
// }
// while(i>10)

// for (let i = 1; i < 10; i++) {
//   if(i==5){
//    continue;
//   }
   
// }
// console.log(i);

// for in loop --->it gives u index
// a=[1,2,3]
// b=[10,20,30]
// c=a
// c.pop()
// console.log(a,c); 
//ARRAY SOTRE IN HEAP SOTRAGE
// a=[1,2,3,4,5]
// console.log(a[1])
// for(let i=0;i<=a,length;i++){

   // REST AND SPREAD/ 
   // WHERE U WANT TO COPY SOMEONG U USE SPREAD 
    //REST 
// a=[1,2,3,4,5]
// let [...y]=a;//  ---> y==>REST OF THE ARRAY
// console.log(x,y);

// FUNCTION 
// function name(params) {
   
// }
// console.log(name());

// ARROW Function
// async (params) => {
   
// }


// function name(name=`Dummy`) {
//    console.log(`hello ${name} welcome`);
   
// }
// console.log(name());

// REST PARAMETER 
// function samar(a,b,...c) {
//    console.log(a,b,...c);
// }
//    console.log(samar(1,2,3,4,5,6,7,8,9,10));
   


// callback function -------->when u pass function in anothers function parameter 
//   function samar(cb) {              // -------->it is a higher order function which takes a function in their parameter 
//    console.log("i have added a callbaxk function");
//    console.log(10+10+10);
//    cb();
   
// }
// function sam( ) {
//    console.log(`my work is done `);
   
// }
// samar(sam)

// ARRAY 


