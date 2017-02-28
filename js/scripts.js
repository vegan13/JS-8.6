function getTriangleArea(a, h) {
    
    if ((a <= 0) || (h <= 0)) {
        return "Dane są nieprawidłowe";
    }
    
    return a * h / 2;
    
}

console.log(getTriangleArea(10, 60));

var triangleArea1 = getTriangleArea(5, 9);
var triangleArea2 = getTriangleArea(4, 4);
var triangleArea3 = getTriangleArea(88, 77);

console.log(triangleArea1);
console.log(triangleArea2);
console.log(triangleArea3);
