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

function largest(num1,num2,num3){
    return Math.max(num1, num2, num3)
    
}console.log(largest(4,62,8))


// if the year is divisible by 4
function isLeapYear(num){
    
    if (num % 4 === 0 ){ 
        if (num % 100 === 0 && num % 400 != 0){
            return false
        } else {
            return true
        }
        
    } else {
        return false
    }

}
console.log(isLeapYear(2000))
console.log(isLeapYear(1900))
console.log(isLeapYear(2020))
console.log(isLeapYear(1999))

// 2000 - is divisible by 4, is divisible by 100, is divisible by 400 - true
// 1900 - is divisible by 4, is divisible by 100, is not divisible by 400 - false
// 2020 - is divisible by 4, is  not divisible by 100, is not divisible by 400 - true
// 1999 - is not divisible by 4, is not divisble by 100, is not divisible by 400



//&& num % 100 != 0 && num % 400 === 0
