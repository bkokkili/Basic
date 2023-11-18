This example for the best pratcices of Components, Classes and JavaScript functions of Array.

## map(), reduce() and filter()

The map(), reduce() and filter() are array functions in JavaScript, that transform the array according to the applied function and return the updated array.

## map()

 map() method applies a given function on all the elements of the array and returns the updated array.
 It is the simpler and shorter code instead of a loop.

 This method accepts one parameter

   Syntax: array.map(callbackFunction) 
           array.map(function(currentValue, index, arr))

## filter()

The filter() method in JavaScript is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method.

This method accepts five parameters

  Syntax:  array.filter(callbackFunction)
           array.filter(callback(element, index, arr), thisValue)

  callback: This parameter holds the function to be called for each element of the array.
  element: The parameter holds the current element of the array being processed
  The callback function should return true if the element should be included in the new array, and false otherwise.

 ## reduce() 

 reduce() method in JavaScript is used to reduce the array to a single value.
 This method accepts five parameters 

  Syntax: array.reduce(callbackFunction)
          array.reduce( function(total, currentValue, currentIndex, arr), initialValue)

 total: It is a required parameter and is used to specify the initial value or the previously returned value of the function.
 currentValue: It is a required parameter and is used to specify the value of the current element.