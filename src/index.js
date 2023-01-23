
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  };
  
  const reversedArr = matrix.map((item, index) => {
    if (index % 2 === 0) {
      return item;
    } else {
      return item.reverse();
    };
  });  
  const towel = reversedArr.toString().split(',').map(item => +(item));
  return towel;
}
