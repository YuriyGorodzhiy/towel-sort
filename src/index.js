
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var arr = [];
  if (matrix == undefined || matrix.length == 0) {    
    return arr;
  } else {
    for (i = 0; i < matrix.length; i++) {
      for (j = 0; j < matrix[i].length; j++) {
        if (i%2!=0) {
          arr.push(matrix[i][matrix[i].length -1 - j]);
        } else {
          arr.push(matrix[i][j]);
        }       
      }
    }
    return arr;
  } 
}