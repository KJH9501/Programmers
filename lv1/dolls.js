function solution(board, moves) {
  var answer =0; 
  var tempArr = []; // 뽑은 인형 넣을 임시배열
  var choiceCount =0; //중복방지
for (var i = 0; i < moves.length; i++){ //뽑기기계가 움직인 횟수 만큼 반복
 var a =  moves[i]-1; //배열은 0부터
 for (var j = 0; j < board.length; j++){
     if (board[j][a] != 0 && choiceCount == i){
         choiceCount++;
         if(tempArr[tempArr.length-1] == board[j][a]) {
             tempArr.pop();
             answer+=2
         }
         else 
             tempArr.push(board[j][a]);
         
         board[j][a] =0;
     }
     //moves[i]에 해당하는 열에 인형(0이 아닌 수)탐색 - 첫번째 반복문
     //moves[i]에 해당하는 열 숫자 검사. choiceCount사용해 중복방지 - 두번째 반복문
     //이후 탐색한 수와 tempArr 마지막요소와 비교, 같다면 마지막요소 pop()-배열제거 점수+2
     //같지않다면 tempArr 마지막 요소에 push()-배열추가
    }
 }                           
 
 return answer;
}