function solution(s) {
  var answer = '';
  var temp = s.split('');
  
  temp.sort(function(a,b) {
      if(a<b) return 1;
      if(a>b) return -1;
      if(a===b) return 0;
  });
  answer = temp.join('');
  return answer;
}