function solution(n) {
  var answer = [];
  var temp = []
  n = String(n)
  answer = n.split(''); //n을 문자열로 바꾸고 배열화
  for(var i=0; i<answer.length; i++){
      temp.push(answer[answer.length-i-1]) // 바뀐 배열을 역순으로 temp에 저장
  }
  for(var j=0; j<temp.length; j++){ // 역순으로 저장된 temp배열 요소들을 다시 정수형으로 변환
      temp[j] = Number(temp[j])
  }
  return temp;
}