function solution(n, arr1, arr2) {
  var answer = [];
  var temp1, temp2 =[];
  var temp =[]
  for(var a=0; a<n; a++){
      arr1[a] = arr1[a].toString(2)
      if(arr1[a].length < n){
          arr1[a] = arr1[a].padStart(n,'0');
      }
  }
  for(var b=0; b<n; b++){
      arr2[b] = arr2[b].toString(2)
      if(arr2[b].length < n){
          arr2[b] = arr2[b].padStart(n,'0');
      }
  }
  for(var i=0; i<n; i++){
      temp1 = arr1[i].split('')
      temp2 = arr2[i].split('')
      for(var j=0; j<arr1[i].length; j++){
          if(temp1[j] == 1 || temp2[j] ==1){
              temp1[j] ='#'
          }
          else{
              temp1[j] = ' '
          }
          temp = temp1.join('')
      }
      answer.push(temp)
  }
  return answer;
}