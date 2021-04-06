function solution(s){
  var answer = true;
  s=s.toLowerCase();
  var text1 = s;
  var count1 = 0;
  var searchChar1 = 'p'; 
  var pos1 = text1.indexOf(searchChar1);
  var text2 = s;
  var count2 = 0;
  var searchChar2 = 'y'; 
  var pos2 = text2.indexOf(searchChar2);

  while (pos1 !== -1) {
        count1++;
        pos1 = text1.indexOf(searchChar1, pos1 + 1);
}
  while (pos2 !== -1) {
        count2++;
        pos2 = text1.indexOf(searchChar2, pos2 + 1);
} 
  if(count1 == count2){
      answer = true
  }
  else{
      answer=false
  }
  
  return answer;
  
  
}