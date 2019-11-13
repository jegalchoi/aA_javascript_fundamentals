Array.prototype.uniq = function() {
  let new_arr = []
  this.forEach(element => {
    if(!new_arr.includes(element)) {
      new_arr.push(element)
    }
  });
  return new_arr;
};

Array.prototype.twoSum = function() {
  let pairs = [];
  
  for(let i = 0; i < this.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if((this[i] + this[j] == 0) && j >= i) {
        pairs.push(this[i], this[j]);
      }
    }
  }

  return pairs;
};

Array.prototype.twoSumHash = function() {
  let pool = {};


}


Array.prototype.transpose = function() {
  let new_arr = []

  for(let i = 0; i < this.length; i += 1) {
    let temp_arr = []
    this.forEach(element => {
      temp_arr.push(element[i])
    })
    new_arr.push(temp_arr);
  }
  
  return new_arr;
};
