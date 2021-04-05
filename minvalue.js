function solution(arr) {
  var answer = [];
  var min = arr[0];
  
  if(arr.length === 1 || arr.length === 0){
      arr[0] = -1;
  }
  
  else{
      for(var i =0; i<arr.length; i++) {
      if(min > arr[i]){
          min = arr[i];
      }
  }
      arr.splice(arr.indexOf(min),1)
      
  }
  answer = arr;
  return answer;
}