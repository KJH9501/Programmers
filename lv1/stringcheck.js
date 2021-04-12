function solution(s) {
  var answer = true;
  var temp = s.split('');
  if(temp.length === 4 || temp.length === 6){
      answer = true;
      for(var i =0; i<temp.length; i++){
          if(isNaN(temp[i]) === true){
              answer = false;
          }
      }
  }
  else
      answer = false
      
  return answer;
}