// 1-calcul.js

function calculateNumber (type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  if (type === 'SUM') {
    return roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
    return roundedA - roundedB;
  } else if (type === 'DIVIDE') {
    if (roundedB === 0)
      return 'Error';
    return roundedA / roundedB;
  }

  throw new Error('Invalid operation type');
}

console.log(Math.round(0.3));


module.exports = calculateNumber;
