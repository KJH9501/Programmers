var n = [5, 21]
var m = [5,6,7,8,9]
var temp =[]
  for(var i=0; i<m.length; i++){
    for(var j = i+1; j<m.length; j++){
        for(var k = j+1; k<m.length; k++){
            var sum = m[i] + m[j] + m[k]
            // 세 숫자의 합 구하기
            if(sum < n[1]){
              temp.push(sum)
            }
        }
    }
}
  answer = Math.max.apply(null, sum)
  console.log(answer)
