Array.prototype.bubbleSort = function() {
  let counter = -1

  let new_arr = this.slice();

  while(counter != 0) {
    counter = 0;

    for(let i = 0; i < this.length; i += 1) {
      if(new_arr[i] > new_arr[i + 1]) {
        let temp = new_arr[i];
        new_arr[i] = new_arr[i + 1];
        new_arr[i + 1] = temp;
        counter += 1;
      }
    }
  }

  return new_arr;
};

String.prototype.substrings = function() {
  let arr = [];

  for(i = 0; i < this.length; i += 1) {
    for (j = i + 1; j <= this.length; j += 1) {
      arr.push(this.slice(i, j))
    }
  }

  return arr;
}