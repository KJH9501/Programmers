function isPrime(a){
    if(a < 2) return false;
    for(var i=2; i<=Math.sqrt(a);i++) 
        if(a % i == 0) 
            return false;
    return true;
} // 소수 구하는 함수
  // 제곱근을 이용해 true, false 반환.
function solution(nums) {
    var answer = 0;
    
    var temp = [];
    for(var i=0; i<nums.length; i++){
        for(var j = i+1; j<nums.length; j++){
            for(var k = j+1; k<nums.length; k++){
                var sum = nums[i] + nums[j] + nums[k]
                // 세 숫자의 합 구하기
                if(isPrime(sum)){
                    answer++ 
                    // 합을 바로바로 소수 판별해 answer에 누적
                }
            }
        }
    }
    return answer;
}