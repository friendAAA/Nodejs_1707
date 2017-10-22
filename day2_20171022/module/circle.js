const PI = 3.14;

function area(radius) {
    return PI * radius * radius;
}

function perimeter(radius) {
    return PI * radius * 2;
}

exports.test = area; // key = value
exports.perimeter = perimeter;

// console.log(area(1.2));
// console.log(perimeter(1.2));
