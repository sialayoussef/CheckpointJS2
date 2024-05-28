// 1 - Reverse a String: Write a function that reverses a given string.

var name = "mahmoud"

var resultat = ""

for(var i = name.length-1; i >= 0;i--){
  resultat = resultat + name[i]
}

console.log(resultat)

// 2- Count Characters: Create a function that counts the number of characters in a string.

function counter(name){
  var count = 0

  for(var i = 0; i < name.length; i ++){
    count = count +1
  }

  return count
}

console.log(counter("Ashref"))

// 3- Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

function Cap(phrase){

  var newPhrase = phrase[0].toUpperCase()

  var verif = false

  for (var i = 1; i < phrase.length; i++) {

    if (verif == false) {
      newPhrase = newPhrase + phrase[i]
    } else {
      newPhrase = newPhrase + phrase[i].toUpperCase()
      verif = false
    }

    if (phrase[i] == " ") {
      verif = true
    }
  }

  return newPhrase
}

var sentence = "hello si achref"

console.log(Cap(sentence))

//4- Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

function minmax(arr){
  var min = arr[0]
  var max = arr[0]

  for(var i = 0; i < arr.length;i++){

    if(min > arr[i]){
      min = arr[i]
    }

    if(max < arr[i]){
      max = arr[i]
    }
  }
  return [min,max]
}

console.log(minmax([5,2,1,100]))

// 5- Sum of Array: Create a function that calculates the sum of all elements in an array.

function sumArr(t){
  var sum = 0

  for(var i = 0;i < t.length; i ++){
    sum = sum + t[i] 
  }
  return sum
}

console.log(sumArr([5,2,1,100]))



// 6- Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterArray(arr,ty){
  var resultat = []

  for (var i = 0; i < arr.length; i++) {

    if (typeof (arr[i]) == ty) {
      resultat.push(arr[i])
    }
  }

  return resultat
}

var t = [1,2,"a","b",100,true,false,true]

var type = "boolean"

console.log(filterArray(t,type))

// 7- Factorial: Write a function to calculate the factorial of a given number.

function fact(a){
  var stal = 1

  for(var i = 1; i<= a ; i++){
    stal = stal * i
  }

  return stal
}

console.log(fact(3))

// 8- Permutaion

var x = 5
var y = 2
var z = 1
var aux 


aux = x
x = y
y = z
z = aux

console.log(x)
console.log(y)
console.log(z)

// 9-Prime Number Check: Create a function to check if a number is prime or not.

function Prime(x){
  var count = 0


  for (var i = 1; i < x; i++) {
    if (x % i == 0) {
      count++
    }
  }
  if (count > 1) {
    return "Non prime"
  } else {
    return "Prime"
  }
}

console.log(Prime(10))


