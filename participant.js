function solution(participant, completion) {
  var answer = '';
  var pTemp =participant.sort();
  var cTemp =completion.sort();
  const result = {};

  
  for(var i=0; i<pTemp.length; i++) {
      if(pTemp[i] !== cTemp[i]){
          answer = pTemp[i];
          return answer;
      }
  }
}