function solution(phone_number) {
  var answer = '';
  var temp = phone_number.split('');
  for(var i=0; i<temp.length-4; i++){
      temp[i] = '*'
  }
  answer = temp.join('');

  return answer;
}