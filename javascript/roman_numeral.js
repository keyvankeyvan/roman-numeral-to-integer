function romanNumeral(string) {
  // type your code here
  const vals = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  }

  strLen = string.length
  translatedStr = []
  for (let i = 0; i <= strLen; i++) {
    // if (string[i] == undefined) {
    //   return
    // }
    
    let doubleCheck = `${string[i]}${string[i + 1]}`
    if (vals[doubleCheck] != undefined) {
      //console.log(doubleCheck)
      translatedStr.push(vals[doubleCheck])
      i+=2
    }
    if (vals[`${string[i]}`] != undefined){
      //console.log(`qweqwe ${string[i]}`)
      translatedStr.push(vals[string[i]])
    }
    //console.log(translatedStr)
  }

  return summer(translatedStr).reduce((first, second) => first + second )
}

function summer(arr){
  let arrLen = arr.length
  for(let i = 0; i < arrLen; i++){
    if (arr[i] < arr[i +1]){
      arr[i] = arr[i + 1] - arr[i]
      arr.splice(i + 1,1)
    }
  }
  //console.log(arr)
  
  return arr
}

if (require.main === module) {

  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));

  console.log("");

  console.log("Expecting: 1999");
  console.log(romanNumeral('MCMXCIX'));
}


module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
