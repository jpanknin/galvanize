var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array.
_.first = function(array) {
  return array[0];
};

 // Returns the first n number of elements in an array.
_.take = function(array, n) {
  if (n === undefined) {
    n = 1;
  }
    return array.slice(0, n);
};

// Returns the last element of an array.
_.last = function(array) {
  return array.pop();
};

// Returns the last n number of elements in an array.
_.takeRight = function(array, n) {
	if (n === undefined) {
    n = 1;
  }
  return array.slice(-n);
};

// Returns a new array with all falsey values removed.
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {
	var falsey = [false, null, 0, "", undefined, NaN];
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (falsey.includes(array[i])) {
      continue;
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

// Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrayOne, arrayTwo) {
	var newArray = [];
  for (var i = 0; i < arrayOne.length; i++) {
    if (arrayTwo.includes(arrayOne[i])) {
      continue;
    } else {
      newArray.push(arrayOne[i])
    }
  }
  return newArray;
};

// Returns element with minimum
// value in an array.
_.min = function(array) {
	return Math.min(...array);
};

// Returns element with maximum
// value in an array.
_.max = function(array) {
	return Math.max(...array);
};

// Returns either index of matched element or
// -1.
_.indexOf = function(array, el) {
	if (array.indexOf(el) != -1) {
    return array.indexOf(el);
  } else {
    return -1;
  }
};

/*************** BONUS ***************/
// Retuns a new array with elements in shuffled order.
_.shuffle = function(array) {
	var arr = [];
  for (var i = 0; i < arr.length; i++) {
    // var value = arr[i - 1];
    arr.push(array[i - 1]);
  }
  return arr;
};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
_.size = function(collection) {
  if (typeof collection === Array) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
};

// Iterates on each element of a collection and
// then returns the original collection.
_.forEach = function(collection, callback) {
	if (typeof collection === 'string') {
    var newStr = str(collection);
    return newStr;
  } else if (collection.constructor === Array) {
    var newArr = arr(collection);
    return newArr;
  } else if (collection.constructor === Object) {
    var newObj = obj(collection);
    return newObj;
  } else {
    return "The collection is not an object";
  }
};

function str(collection) {
  var newStr = ""

}

function arr(collection) {
  var newArr = [];
  collection.forEach(function(element) {
    newArr.push(element);
  });
  return newArr;
}

function obj(collection) {

}

// Iterates on each element of a collection and
// then returns a new array.
_.map = function(collection, callback) {
	var arr = [];
  if (collection.isArray()) {

  }
};

// Returns a new collection with filtered elements.
_.filter = function(collection, callback) {
	// Place your solution here
};

// Returns a new collection with unfiltered elements.
_.reject = function(collection, callback) {
	// Place your solution here
};

/*************** BONUS ***************/
 // Returns n number of elements in a collection.
_.sample = function(collection, n) {
	// Place your solution here
};

module.exports = _;
