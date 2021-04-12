function solution(s) {
    var answer = '';
    var temp = s.split('');
    var arr =[];
   
        if(temp.length % 2 === 0) {
            arr.push(temp[temp.length/2-1],temp[temp.length/2]);
            answer = arr.join('');
        }
        if(temp.length % 2 !== 0){
            answer = temp[parseInt(temp.length/2)];
        }
            
    
    return answer;
}