function solution(numbers) {
    var answer = [];
    var temp = []; //임시배열선
    var a=0;
    for(var i=0; i<numbers.length; i++) {
        for(var j = numbers.length-1; j>i; j--){
        a= numbers[i]+numbers[j];
            temp.push(a);
        }
    }
    // numbers 배열 내 모든 수를 더해서 temp배열에 push해줌.
    temp.sort(function(a,b) { return a-b}); // 오름차순정렬


    const set = new Set(temp);

    const Arr = [...set];

    // 중요! set함수를 이용해 배열내 중복을 제거해줌
    // 다시 spread operater(전개연산자)를 이용해 set객체를 배열화 시켜줌!
    answer = Arr;

    return answer;
}
