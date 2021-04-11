function solution(n){
    var answer = 0;
    n = String(n);
    var temp = n.split('');
    for(var i=0; i<temp.length; i++){
        answer += Number(temp[i])
    }
    
    
    
    return answer;
}