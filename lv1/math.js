function solution(answers) {
    var answer = [];
    var p1 = [1,2,3,4,5];
    var p2 = [2,1,2,3,2,4,2,5];
    var p3 = [3,3,1,1,2,2,4,4,5,5];
    
    var cnt = [0,0,0];
   
    var i;
    for(i=0;i<answers.length;i++){
            if(answers[i] == p1[i % 5]) cnt[0]++;
        }
        for(i=0;i<answers.length;i++){
            if(answers[i] == p2[i % 8]) cnt[1]++;
        }
        for(i=0;i<answers.length;i++){
            if(answers[i] == p3[i % 10]) cnt[2]++;
        }
    // %연산자 사용하면 배열길이만큼 차례대로 접근 가능....
    
    let max = cnt.reduce((a, b) => {
        return Math.max(a, b);
    });
    
    if (max === cnt[0]) answer.push(1);
    if (max === cnt[1]) answer.push(2);
    if (max === cnt[2]) answer.push(3);
    
    return answer;
}