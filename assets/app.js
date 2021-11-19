
let n = 1000;
  
let simple = true;

for(let i = 3; i <= n; i ++){
   for(let y = 2; y < i; y ++){
         if(i % y == 0){
             simple = false;
            continue;
         }
       
   }
     if(simple){
       console.log(i);
   } 
}









//   let sum = 0;

//   for(let i = 0; i <= 100; i++){
     
//      console.log(`${i}`);
//  }

 

//  let num = 21;
//  let maxNum = 57;

// for(let  i = 21; i <= maxNum; i++){
   
//     console.log(`${i}`);
// }
 

// for(let i = 2; i <= 100; i = i+2){
//     console.log(`${i}`);
// }

// let sum = 0;

// for(i = 0; i <= 100; i++){
//     sum = sum + i;
//     console.log(`${i} => ${sum}`);
// }
//  console.log(`Итого:  ${sum}`);




    