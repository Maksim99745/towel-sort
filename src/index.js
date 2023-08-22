
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (!matrix) {
    return [];
  }

  if (matrix.length === 0) {
    return [];
  }

 
  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 === 0) {
      continue;
    } else if (i % 2 !== 0) {
      matrix[i] = matrix[i].reverse();
    }
  }


  
  return matrix.flat();
}