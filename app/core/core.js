'use strict';

this.buildIndex = function(arr) {
  var result = {};
  for (var i in arr) {
    result[arr[i].id] = arr[i];
  }
  return result;
}