
function fizzBuzz(num) {
  for (var i = 1; i < 101; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
  }
}

fizzBuzz(100);

function reverse(word) {
  var reversed = '';
  for (var i = (word.length - 1); i >= 0; i--) {
    reversed += word[i];
  }
  return ("The word " + word + " reversed is: " + reversed);
}

console.log(reverse("Hello"));

function biggest(nums) {
  var largest = nums[i];
  for (var i = 0; i < (nums.length - 1); i++) {
    if (largest > nums[i + 1]) {
      largest = largest;
    } else {
      largest = nums[i + 1];
    }
  }
  return ("The largest number in the array is: " + largest);
}

nums = [1, 5, 7, 11, 3, 2, 9];
console.log(biggest(nums));
