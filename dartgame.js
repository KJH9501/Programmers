function solution(dartResult) {
    var num = 0;
    var answer = [];
    var temp = 0;
    for(var i = 0; i < dartResult.length; i++) {
        if(dartResult[i] >= 0 && dartResult[i] <= 9) { // 점수인지 확인
            if(dartResult[i] == 1 && dartResult[i+1] == 0) { // 점수 10인지 확인
                temp = 10; // 10점
                i++;  
            }
            else { // 나머지 1~9점 
                temp = dartResult[i];
            }
        }
        else if(dartResult[i] === 'S') { // S = 1제곱. 그냥 그대로
            answer.push(temp);
        }
        else if(dartResult[i] === 'D') { // D = 2제곱. pow사용해서 2제곱 값 push
            answer.push(Math.pow(temp, 2));
        }
        else if(dartResult[i] === 'T'){ // T = 3제곱. pow 사용해서 3제곱 값 push
            answer.push(Math.pow(temp, 3));
        }
        else if(dartResult[i] == '#') { // #은 현재값, 이전값을 각 2배로 But 이전값은 -됨
           answer[answer.length-1]*=-1;
        }
        else if(dartResult[i] == '*') { // *은 현재값, 이전값을 각 2배로
            answer[answer.length-1]*=2;
            answer[answer.length-2]*=2;
        }
    }
    for(var i = 0; i < answer.length; i++) { // answer배열 값들을 숫자로 변환. num에 각 더해줌
        num +=Number(answer[i]);
    }
    return num;
}