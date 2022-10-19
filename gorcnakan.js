//Ex. 1
function findThirdAngle (angle1, angle2){
    let thirdAngle = (180-angle1-angle2)
    console.log(thirdAngle)
}
findThirdAngle(45, 90)
findThirdAngle(30, 30)
findThirdAngle(60, 90)


//Ex.2
function printValue (n) {
    if(n > 0){
      let str1 = n + n;
      let str2 = n + n + n;
      let result = ''+ n + str1 + str2;
      console.log (result);
    }
    
}
 printValue(3)
 printValue(17) 
 printValue(100)
 



//Ex. 3
function dividibleByTheOther (num1, num2) {
  if (num1 % num2 == 0 || num2 % num1 == 0){
        console.log( 1 );
  } else{
        console.log (0);  
  }
}dividibleByTheOther(3,14)
dividibleByTheOther(4,2)
dividibleByTheOther(2,16)







//Ex 4
function averageOfTheNumber (num1, num2, num3, num4, num5){
  let result = (num1 + num2 + num3 + num4 + num5)/5;
  console.log(result);
} 
averageOfTheNumber(45, -12, 0, 3, -15)







/*Ex 5

function lastDigitToTheBegining ( number ){
  let result =''
  let lastDigit = number % 10;
 
  }

lastDigitToTheBegining (369)
*/