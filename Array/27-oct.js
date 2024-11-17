// // // QUESTUIN 
// // // FIND INTERSACTION IT MEANS DONO ARRAY MAE KON KON SA ARRAY AVSIABLE HAI 
// // let array1=[1,2,3,4,5];
// // let array2=[2,4,6,8];
// // let a=array1.filter((value=>array2.includes(value)))
// // console.log(a);



// // let array=[1,2,3,4,56,778,8];
// // let a=array.filter((val)=>{
// //     return val%2==0;
// // })
// // console.log(a);

// // HOW TO MERGE TWO ARRAY WITHOUT DUBLICATE

// let arr1=[1,2,3];
// let arr2=[3,4,5];
// let a=arr1.concat(arr2).filter((val,index,self)=>{
//     return self.indexOf(val)===index
// })
// console.log(a);


// // let newUniqueArray=[...new Set([...arr1,...arr2])]
// // console.log(newUniqueArray);


// let arr=[1,2,3,4,5,6,7]

// const array = [1, 2, 3, 4, 5, 6, 7];

// const result = array.reduce((acc, curr, index) => {
//     // Check if the index is even to start a new pair
//     if (index % 2 === 0) {
//         acc.push([curr]); // Start a new subarray
//     } else {
//         acc[acc.length - 1].push(curr); // Add to the last subarray
//     }
//     return acc;
// }, []);

// console.log(result); // Output: [[1, 2], [3, 4], [5, 6], [7]]




//   function subArray(arr,size){                  //------------------------------->SAAMJ LIO EK BRR 
//     let chunks=[];
//     for(let i=0;i<arr.length;i+= size){
//        chunks.push(arr.slice(i,i+size));
     
//     }
//     return chunks;
// }
//  let res =subArray([1,2,3,4,5,6,7,8,9,10],3)  
//  console.log(res);
 

let array=[1,2,5,7,3,4,10,8]
 let sum=array.sort((a,b)=>a-b).filter((value)=>value>4).map((val)=>val*3)
console.log(sum);

// question for hw 










