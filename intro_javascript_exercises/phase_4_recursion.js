function range(start, end) {
  if(start == end) {
    return [end];
  }

  return range(start, end - 1).concat([end]);
}

function sumRec(arr) {
  if(arr.length == 0) {
    return 0;
  }

  let digit = arr[arr.length - 1];
  let new_arr = arr.slice(0, arr.length - 1);
  
  return digit + sumRec(new_arr);
}

function exponent(base, exp) {
  if (exp == 0) {
    return 1;
  } else if (exp == 1) {
    return base;
  } 
  if (exp % 2 == 0) {
    return exponent(base, exp / 2) ** 2;
  } else {
    return base * (exponent(base, (exp - 1) / 2) ** 2)
  }
}

function fibonacci(n) {
  if (n <= 1) {
    return [0];
  }
  if (n == 2) {
    return [0, 1];
  }

  let sequence = fibonacci(n - 1);
  let firstNum = sequence[sequence.length - 2];
  let secondNum = sequence[sequence.length - 1];
  return sequence.concat([firstNum + secondNum]);
};

function deepDup(arr) {

}

function bsearch(arr, target) {
  let middle = Math.floor(arr.length / 2);
  let lower = arr.slice(0, middle);
  let upper = arr.slice(middle, arr.length);

  if (arr[middle] == target) {
    return middle;
  } else if (arr.length == 1 && arr[0] != target) {
    return -1;
  } else if (arr[middle] > target) {
    return bsearch(lower, target);
  } else {
    if (bsearch(upper, target) == -1) {
      return -1;
    } else {
      return bsearch(upper, target) + middle;
    }
  }
};

function mergesort(arr) {
  let middle_idx = Math.floor(arr.length / 2);
  let left_arr = arr.slice(0, middle_idx);
  let right_arr = arr.slice(middle_idx, arr.length);

  if (left_arr.length == 0 || right_arr.length == 0) {
    return left_arr.concat(right_arr);
  };

  left_arr = mergesort(left_arr);
  right_arr = mergesort(right_arr);

  let temp_arr = [];
  while(temp_arr.length < arr.length) {
    let first_left = left_arr[0];
    let first_right = right_arr[0];
    if (left_arr.length == 0 || right_arr.length == 0) {
      return temp_arr.concat(left_arr.concat(right_arr));
    }
    if (first_left < first_right) {
      temp_arr.push(left_arr.shift());
    } else {
      temp_arr.push(right_arr.shift());
    };
  };
  
  return temp_arr;
};

function subsets(arr) {
  let final_arr = [];

  if (arr.length == 0) {
    return [];
  };

  final_arr = final_arr.concat(subsets(arr.slice(1,arr.length)));

  let i = 0;
  while(i < arr.length) {
    let first_arr = [arr[0]];
    let remaining_arr = arr.slice(1, arr.length - i);

    final_arr.push(first_arr.concat(remaining_arr));
    i += 1
  }

  return final_arr
};


function subsets(arr) {
  let start = arr[arr.length - 1];
  let ending = arr.slice(0, arr.length - 1);
  //console.log(`start: ${start}`);
  //console.log(`ending: ${ending}`);

  let final_arr = [];

  if (arr.length == 0) {
    return [];
  }

  final_arr.push(ending.concat(start));

  final_arr.concat(subsets(ending));
  
  return final_arr;
};

function subsets(arr) {
  let final_arr = [];

  for (let i = 0; i < 10; i += 1) {
    final_arr = final_arr.push()
    
  }

  return final_arr;

};