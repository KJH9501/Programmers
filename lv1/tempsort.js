function solution(strings, n) {

  strings.sort(function(a,b) {
      if(a[n] === b[n]){
          return (a > b)-(a < b); 
      }
      else{
          return (a[n] > b[n]) - (a[n] < b[n]);
      }
  });
  return strings;
}