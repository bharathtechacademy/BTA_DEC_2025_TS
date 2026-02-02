let array_1: number[]=[12,34,11,36,87,98,93];
let len= array_1.length;

for(let i=0; i<len; i++){
   
    for(let j=0; j<len; j++){
        if(array_1[j] > array_1[j+1])

            [array_1[j],array_1[j+1]] = [array_1[j+1],array_1[j]]
    }

}

console.log("sorted array:" + array_1);
console.log("second largest number:" + array_1[len-2]);
console.log("third largest number:" + array_1[len-3]);