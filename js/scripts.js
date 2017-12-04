
  function getTriangleArea(a, h) {
    var value = a*h/2,
        valuemorethan0 = value <= 0 ;
        console.log('Result with number a: ' + a + ' and number h: ' + h + ' is equal to: '+ value);
        if (valuemorethan0) {
        console.log('nieprawidłowy wynik')}
        return 'getTriangleArea'
  }
getTriangleArea(10, 6)
var triangle1Area = getTriangleArea(10, 15),
    triangle2Area = getTriangleArea(-15, 2),
    triangle3Area = getTriangleArea(4, 75);
