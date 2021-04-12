function solution(arr, divisor) {
  var answer = [];
  var temp =[];
  for(var i=0; i<arr.length; i++) {
      if (arr[i] % divisor === 0){
          temp.push(arr[i]);
      }
  }
  temp.sort(function(a,b) { return a-b});
  if (temp == '') {
      temp.push(-1);
  }
  return temp;
}