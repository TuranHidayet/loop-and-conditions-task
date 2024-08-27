var rows = 6;

for (var  i = 0; i <= rows; i++) {
    var line = ""; 
    for (var j = 0; j <= i; j++) {
        line += "*"; 
    }
    console.log(line); 
} //düzbucaqlı üçbucaq 
console.log("----------------");



var rows = 5;
for (var i = 1; i <= rows; i++) {
    var line = ""; 
    
    if (i === 1 || i === rows) {
        for (var j = 1; j <= rows; j++) {
            line += "*";
        }
        
        
    } else { 
        line += "*"; 
        for (var j = 2; j <= rows; j++) {
            line += " "; 
        }
        for (var j = 2; j <= rows; j++) {
            line += " "; 
        }
    }
    console.log(line); 
} // C herfi 
console.log("----------------");


for (var num = 2; num <= 200; num++) {
    var isPrime = true; 

    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false; 
            break; 
        }
    }

    if (isPrime) {
        console.log(num);
    }
}

