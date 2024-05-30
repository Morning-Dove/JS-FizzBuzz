function range(start, end, step = 1) {
    const rangeArray = [];
    for (let i = start; i < end; i += step) {
        rangeArray.push(i);
    }
    return rangeArray;
}


// function fizzbuzz(){
//     const myRange = range(1, 101);
//     let i = 0;
//     while (i < myRange.length){
//         if (i % 3 === 0 && i % 5 === 0){
//             console.log(myRange[i]+ " FizzBuzz");
//         }else if(i % 3 === 0){
//             console.log(myRange[i]+ " Fizz");
//         }else if(i % 5 === 0){
//             console.log(myRange[i]+ " Buzz");
//         }else{
//             console.log(myRange[i]);
//         }
//         i++;
//     }
// }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function fizzbuzz() {
    const myRange = range(1, 101);
    const printResult = document.getElementById("printFizzBuzz");
    
    for (let i = 0; i < myRange.length; i++) {
        let result;
        if (myRange[i] % 3 === 0 && myRange[i] % 5 === 0) {
            result = `${myRange[i]} FizzBuzz`;
        } else if (myRange[i] % 3 === 0) {
            result = `${myRange[i]} Fizz`;
        } else if (myRange[i] % 5 === 0) {
            result = `${myRange[i]} Buzz`;
        } else {
            result = `${myRange[i]}`;
        }
        
        const p = document.createElement("p");
        p.textContent = result + "\n";
        printResult.appendChild(p);
        p.classList.add('typewriter');
        
        await sleep(100);
    };
}
