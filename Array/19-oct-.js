//SWAP THE ARRAY WITH BUBBLE SORT METHOD ----->time complexity is n square 
// let n=5
// let array=[5,3,4,2,1];
// for(let i=0;i<n-1;i++){
//     for(let j=1;j<n-i-1;j++){
//         if(array[j]>array[j+1]){
//             array[j]=array[j++]
//         }
//     }
// }
// console.log(array);



// SOME ARRAY FUNCTIONS 

//PUSH
// let arr=[1,2,3,4,5]
   
// arr.push("6")
// console.log(arr);

// function bubblSort(arr) {
//     for(let i=0;i<arr.length;i++){
//         for(let j=0   ;j<arr.length;j++){
//             if(arr[j]<arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]//--->DESTRUCTING METHOD
//             }
//         }
//         // return arr
//     }
//     return arr
// }
// let arr=[1,2,3,4,5,6,7,8,9]
// console.log(bubblSort(arr));


// SELCTION SORT  --->compare one valuewith the others 
// let arr=[9,8,7,6,5,4,3,2,1];
// function selectionSort(arr) {
//     for(let i=0;i<arr.length;i++){
//         let min_idx=i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min_idx]){
//                 min_idx=j;
//             }
//         }
//         let temp=arr[i];
//         arr[i]=arr[min_idx];
//         arr[min_idx]=temp;
//     }
//     return arr;
// }
// console.log(selectionSort(arr));

// FIND DUBLICATE ------------.it's all about set method 
// let arr=[1,1,1,2,2,2,3,4,4,5]
// function findDublicates (arr) {
//     let set = new Set();
//     let dublicate=new Set();
//     for(let i of arr){              // ---------> 
//         if(set.has(i)){
//           dublicate.add(i);
//         }
//         else{
//            set.add(i);
//         }
//     }
//     return dublicate;
// }
// console.log(findDublicates(arr));


// FIND THIRD LARGEST NUMBER IN AN ARRAY 
// let arr=[9,8,7,6,5,4,3,2]
// function bubblSort(arr,k) {
//     arr.sort((a,b)=>a-b)
//     return arr[(arr.length) -k]
// }
// console.log(bubblSort(arr,1));




// PRACTICE TIME 
//LETS MAKE A FUCTION WHICH CAN REVERSE THE ARRAY  by bubble sort the time value of this sort is n sqaure 
// let array=[8,6,4,3,2,1,5,7,9];
// function bubblSort(array) {
//     for(let i=0;i<array.length;i++){
//         for(let j=0;j<array.length;j++){
//             if(array[j]>array[j+1]){
//                 [array[j],array[j+1]]=[array[j+1],array[j]]
//             }
//         }
      
//     }
//     return array
// }
// console.log(bubblSort(array));

// selection sort-->U WILL COMPARE ONE  THE FIRST ARRAY WITH THE OTHERS U WILL THINK THE FIRST ARRAY IS SORTED AND COMPAARE THIS WITH OTHERS
// let arr=[9,8,7,6,5,4,3,2,1];
// function selctionSort(arr) {
//     for(let i=0;i<arr.length;i++){
//         let min_idx=i;
//         for(let j=i+1;j<arr.lenght;j++){  //->why I used j=i+1 is BECASUE just understand this with a ex=i index is 0so value is 9, so u use j+1 so u comapre this with i+1 index so u are comparing this with 9 and 1...
//             if(arr[j]<arr[min_idx]){
//                 min_idx=j;
//             }
//         }
//          temp=arr[i];
//          arr[i]=arr[min_idx];
//          arr[min_idx]=temp;

//     }
//     return arr;
// }
// console.log(selctionSort(arr));



// let arr=[9,8,7,6,5,4,3,2,1];
// function selctionSort(arr) {
//     for(let i=0;i<arr.length;i++){
//         let min_idx=i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min_idx]){
//                 min_idx=j;
//             }
//             temp=arr[i];
//             arr[i]=arr[min_idx]
//             arr[min_idx]=temp
//         }
//     }
//     return arr
    
// }
// console.log(selctionSort(arr));


// FIND A DUBLICATE WORD IN ARRAY BY SET METHOD 
// let arr=[3,2,2,1,1]

// let result =[...new Set(arr)]
// console.log(result);


// function removeDublicate(array) {
//     return [new Set(array)]
// }
// let array=[1,2,2,3,3,4,5]
// console.log(removeDublicate(array));


// function findMaxMin(array) {
//     let maxvalue= Math.max(...array);
//     let minvalue= Math.min(...array);
//     return {max:maxvalue , min:minvalue};

// }
// let array=[9,8,63,21,1,52];
// console.log(findMaxMin(array));

// function findMaxMin(array) {
// let maxvalue=Math.max(...array);    
// let minvalue=Math.min(...array);  
// return {Max:maxvalue,Min:minvalue}  
// }
// let array=[2,3,52,4,2,432,1,2];
// console.log(findMaxMin(array));


// function square(array) {
//     return  array.map(x => x**2)
// }
// let array=[1,2,3,4,5]
// console.log(square(array));


// function evenNum(array) {
//     return array.filter(x=>x%2==0);
// }
// let array=[1,2,3,4,5,6,7,8]
// console.log(evenNum(array));


// function sumNumbers(array) {
//    return array.reduce((x,y)=>x+y,0)
// }
// let array=[1,2,3,4,5]
// console.log(sumNumbers(array));


// FIND THE MOST FREQUENT CHARACTER IN AN ARRAY 


// MAKE THE FIRST ARRAY CAPITAL 
// function capitalFirst(str) {
//     return str.charAt(0).toUpperCase()+str.slice()//----------------> it is used to give others letter 
// }
// let str="samarpan"
// console.log(capitalFirst(str));


// function sumOfElemets(array) {
//  return array.reduce((acc,rec) => acc+rec)   
// }
// let array=[1,2,3,4,5]
// console.log(sumOfElemets(array));

// / MAKE THE FIRST ARRAY CAPITAL 
function capitalFirst(str) {
    return str.charAt(0).toUpperCase()+str.slice(1)//----------------> it is used to give others letter 
}
let str="samarpan"
console.log(capitalFirst(str));



