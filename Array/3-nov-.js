// // THERE ARE FIVE TYPES OF LOOPS 

// // WHILE 
// // DO WHILE 
// // FoR 
// // FOR OF  IT GIVES O U VALUE 
// // FOR IN  IT GIVES INDEX 

// // BUBBLE SORT\ last wala phle sort hota hai 
// // let array=[3,2,1,6,5,4,9,8,7] 
// // for(let i=0;i<array.length;i++){
// //     for(let j=0;j<array.length;j++){
// //         if(array[j]>array[j+1]){
// //             [array[j],array[j+1]]= [array[j+1],array[j]]
// //         }
// //     }
 

// // }
// // console.log(array);



// // SELECTION SORT --------------->starting wala phl sort hota hai 
// // let array=[3,2,1,6,5,4,9,8,7];
// // function selectionSort(array) {
// //     for(let i=0;i<array.length;i++){
// //         let min_idx=i;
// //         for(let j=i+1;j<array.length;j++){
// //             if(array[min_idx]>array[j]){        // --------->if(minidx !==i)
// //                 min_idx=j;
// //             }
// //             // temp=array[i];
// //             // array[i]=array[min_idx];
// //             // array[min_idx]=temp
// //         }
// //         temp=array[i];
// //         array[i]=array[min_idx];
// //         array[min_idx]=temp
// //     }
// //     return array;
// // }
// // console.log(selectionSort(array));

// // STRINGS ----> STRINGS IS A SEQUENCE OF CHARACTERS USED TO REPRESENT TEXT......
// // "SAMARPAN" `SAMARPAN` 'SAMARPAN'

// // let name="samarpan"
// // console.log(name.toUpperCase());
// // console.log(name.toLowerCase());
// // console.log(name.lenght);

// // let str="samarpan"
// // console.log(str.indexOf(`a`,2));
// // SEARCHING IN STRING 
// // let str=`samarpan`
// // console.log(str.includes("an",`s`));


// // let str=`hello world`
// // console.log(str.slice(2,4));

// // let str=`hello world`
// // console.log(str.replaceAll('hello','hii','HII'));

// let str='        hello                  ddjd          '
// console.log(str.trim());

// l





// console.log(name.join(''));



// / palindrome function
// function palindrome(str){
//     let j=str.length-1;
//     for(let i =0 ; i<=str.lenght/2;i++){
//         if(str[i] !== str[j]){
//             return "false"
//         }
//         j--
//     }
//     return "true"
// }
// const val =palindrome("samar");
// console.log(val)



// function isPalindrome(str) {
//     str = str.toLowerCase();  
//     return str === str.split('').reverse().join(''); 
// }


// console.log(isPalindrome("racecar"));  
// console.log(isPalindrome("hello"));   
// console.log(isPalindrome("Madam"));    

