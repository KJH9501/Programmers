function solution(numbers, hand) {
  var answer = ''
  function dis(num, left, right, keypad, hand) {
      const ldistance = Math.abs(keypad[left][0] - keypad[num][0]) + Math.abs(keypad[left][1] - keypad[num][1])
      // 왼손 현재 위치에서 목표점까지의 x축과 y축의 거리
      const rdistance = Math.abs(keypad[right][0] - keypad[num][0]) + Math.abs(keypad[right][1] - keypad[num][1])
      // 오른손 현재 위치에서 목표점까지의 x축과 y축의 거리
      if (ldistance === rdistance)  // 거리차 비교
          return hand === 'left' ?  'L' : 'R'; // hand가 left면 왼쪽 아니면 오른쪽
      return ldistance < rdistance ? 'L' : 'R' // 거리차 비교해 가까운 쪽 손 반환
  }

  const keypad = {
      1: [0, 0], 2: [0, 1], 3: [0, 2],
      4: [1, 0], 5: [1, 1], 6: [1, 2],
      7: [2, 0], 8: [2, 1], 9: [2, 2],
      '*': [3, 0], 0: [3, 1], '#': [3, 2]
  };
  
  var left = '*', right = '#'; //왼쪽 오른쪽 손 초기화
  for (var num of numbers){
      if (num % 3 === 1){
          answer += 'L';
          left = num;
      }
      
      else if (num !==0 && num % 3 === 0){
          answer += 'R';
          right = num;
      }
      
      else{
          answer += dis(num, left, right, keypad, hand) // 거리구하는 함수 사용해 L or R 반환.
          answer[answer.length-1] === 'L'? left = num : right = num // 이전 손이 어떤손인지 설정해 맞는 손반환
      }
  }

  return answer;
}