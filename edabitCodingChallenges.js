// Return the sum of two numbers
function addition(a, b) {
	var sum = a + b;
	return sum;
}
addition(10, 30);   // 40


// Area of a triangle
function triArea(base, height) {
	let area = (base * height) /2;
	return area;
}
triArea(7, 4);  // 14


// Increment a number by 1
function addition(num) {
    var add = num + 1;
    return add;
}
addition(9);    // 10


// Is the Number Less than or Equal to Zero?
function lessThanOrEqualToZero(num) {
	if (num <= 0){
		return true;
	} else {
		return false;
	}
}
lessThanOrEqualToZero(-50)  // true


// Check if an Integer is Divisible By Five
function divisibleByFive(n) {
	if (n % 5 === 0){
		return true;
    } else {
		return false;
    }
}
divisibleByFive(500)   // true


// Is the String Empty?
function isEmpty(s) {
	if (s == ""){
		return true;
	} else {
		return false;
	}
}
isEmpty("New York")    // false


// Profitable Gamble
// Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
function profitableGamble(prob, prize, pay) {
	if ((prob * prize) > pay){
		return true;
	} else {
		return false;
	}
}
profitableGamble(0.9, 3, 2);    // true


// Reverse an array
function reverse(arr) {
	return arr.reverse();
}
reverse([1,2,3,4]);    // [4,3,2,1]


// Concatenate First and Last Name into One String
function concatName(firstName, lastName) {
	return firstName + ', ' + lastName;
}
concatName("Ashley", "Karhoff");    // "Ashley, Karhoff"


// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
function divisible(num) {
	if(num %100 === 0){
		return true;
	} else {
		return false;
	}
}
divisible(231);  // false






