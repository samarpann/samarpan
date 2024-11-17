// array:collection of elements and u can use any data type.like boolean symbol big int string number
// length:number of elements .
// index always starts from 0 .
// there are three parts in array : index,array and 
// THERE ARE TWO TYPES OF FUNCTION 
// TRUE AND VOID 
// anonmous jinka koi naam naa ho 


// let arr=[1,2,3,4,null,true];
//  for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);         //--->connect this with index
    
//  }                                       // we are going to do triverse 
// console.log(arr[3]);                                         // in this elements is 6 but index is 5 
//                                             // if u want to access any specifi value then u need to use array[index ]

// sum of n number 

// function sumofnum(val){
//     let sum=0;
//     for(let i =0;i<=val;i++){
//         sum+=i
//     }
//         return sum
// }
// console.log(sumofnum(5));


// let arr=[1,2,4,5,6]
// let sum=0
// function sumofnum(val){
//     let sum=0;
//     for(let i=0;i<=val;i++){
//         sum+=i;
//     }
//     return sum
// }
// let result=sumofnum(6)
// console.log(result);


// let arr=[3,2,4,3,55,4];
// let sum=0
// for(let i=0;i<=arr.length;i++){
//     sum+=arr[i];
//     console.log(sum);
    
// }


// how to  do swaping with the help of third varaible 
// let a=4;
// let b=5;
// let c;
// c=a;
// a=b;
// b=c;
// console.log(a,b);






// let a=5;
// let b=10;
// let c;
// c=a;
// a=b;
// b=c;
// console.log(a,b);



// it is with the help of destructing method 
// let a=4;
// let b=5;
// [a,b]=[b,a];
// console.log(a,b);
// HOMEWORK:DO WITH FOUR VALUE 
// /SWAPING OF 3 NUMBERS   


// let a=5;
// let b=10;

// a=a + b;    //15
// b= a-b;    //5  
// a= a-b;   //10
// console.log(a,b);




// find sum of array 
// let array=[1,23,4,6,53,445];
// sum=0;
// for(let i=0;i<array.length;i++);
// sum+=i;
// console.log(sum);



// let swapping with four variable 
// let a=5;
// let b=15;
// let c=25;
// let d=35;
// // temp=a;
// a=b; //15
// b=c;//25
// c=d;//35
// d=a;//5
// console.log(a,b,c,d);

// let arr=[1,2,343,5553,22]
// let max= 0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     return max;
// }
// // return max;
// console.log();


// function findmax(){
//     let max=-200;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max
// }
// let arr=[43,4546,35,24,534];
// console.log(findmax(arr));




// function value(arr){
//     let max=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max
// }
// let arr=[1,2,3,4,56,57,5]
// let ans=value(arr)
// console.log(ans);


// let arr=[1,2,3,5,356,54324,53];
// function summ(arr){
// sum=0;
// for(let i=0;i<arr.length;i++)
//     sum+=arr[i];
// return sum


// }
// console.log(summ(arr));

// let arr=[5,35,3,0,52,100]
// function minval(arr){
//     min=1000;
//     for(let i=0;i<arr.length;i++){
//         if(min>arr[i]){
//             min=arr[i]
//         }
//     }
//     return min
// }
// let ans=minval(arr)
// console.log(ans);





// let num=[1,2,3,4,5,6,7,8];

// function value(num){
//    for(let i=0;i<num.length;i++){
//     if(num%2==0){
//         log
//     }
//    }
// }

// Function to find even numbers in an array
// function findEvenNumbers(arr) {
//     let evenNumbers = [];  // Create an empty array to store even numbers
//     for (let i = 0; i < arr.length; i++) {  // Loop through the array
//         if (arr[i] % 2 === 0) {  // Check if the number is divisible by 2
//             evenNumbers.push(arr[i]);  // If even, add to the array
//         }
//     }
//     return evenNumbers;  // Return the array of even numbers
// }

// // Example usage:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = findEvenNumbers(arr);
// console.log("Even numbers in the array:", result);




// let arr=[1,2,3,4,5,6,7,8]
// function findOddEvenNum(arr){
//     let evenArr=[];
//     let oddArr=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             evenArr.push(arr[i]);
//         }
//         else{
//             oddArr.push(arr[i])
//     }                                         // console andar isliye kiya kyuki yae ek void function hai 
//     }

//     console.log(evenArr,oddArr); 
// }
// findOddEvenNum(arr)
// console.log(evenArr,oddArr); 


// let arr=[1,2,3,4,5,6,7,8];
//    let newArr=[];
// function reverse(arr){
//     for(let i=arr.length-1;i>=0;i--){
//          newArr.push(arr[i]);

//     }
//   console.log(newArr); 
// }
// reverse(arr)



// let arr=[1,2,3,4,5,6,7,8];
//    let newArr=[];
// function reverse(arr){
//     for(let i=arr.length-1;i>=0;i--){
//          newArr.push(arr[i]);

//     }
// //   console.log(newArr); 
//   return newArr
// }
// // reverse(arr)
//  let ans=reverse(arr);
//  console.log(ans);


// let arr=[4,3,2,6,7];
// function findTarget(arr,target) {
//     for(let i=0;i<arr.length;i++){
        
        
//        for(let j=i+1;j<arr.length;j++){
//         // console.log(i,j);           ------>yae jrur dekh lio
//         if(arr[i]+arr[j]===target){
//             return true
//         }
//        } 
       
//     }
//     return false
// }
// console.log(findTarget(arr,8));


// let arr=[10,7,12,15,20,2,8];

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
               
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }


// let arr=[10,7,12,15,20,2,8];
// console.log(bubbleSort(arr)); 


// let arr=[10,7,12,15,20,2,8];
// function sortArray(arr){
//      for (let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp
//             }
//         }
//      }
//      return arr
// }
// console.log(sortArray(arr));







