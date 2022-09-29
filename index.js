//Code your solutions in this file
function fiveToOneHundred () {
    for (let i = 5;i <= 100; i++) {  
        console.log (i)}
}
fiveToOneHundred()

function multiplesOfThree() {
    for (let i = 3; i <=100; i= i+3){
        console.log(i)
    }
}
multiplesOfThree()

function multiplesOfThreeOrFive() {
    for (let i = 3; i <=100; i++)
     {if (i % 3 === 0 || i % 5 === 0) {
         console.log(i)
         
             }
        }
    }
    
multiplesOfThreeOrFive()

function untilNum(num){
    for(let i = 1; i <= num; i++){
        console.log(i)
    }
}
untilNum(40)

function mutliply (num1,num2){
    return num1 * num2
}
console.log (mutliply( 20,4))

function add(num1,num2){
    if (num1 === num2){
        return (num1 + num2) * 3
    } else {
        return num1 + num2
    }
}
console.log(add(2,2))

function isNegative(num){
    if (num < 0) return true
    return false 
}
console.log(isNegative (Math.PI))

function triangleArea(base,height){
    return (base * height) /2
}
console.log(triangleArea(6,8))

function betweenTwentyAndFourty(num){
    if (num > 20 && num < 40)return true
     return false
        
    }

console.log(betweenTwentyAndFourty(21))