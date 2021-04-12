function solution(a, b) {
  var answer = '';
  var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  var date = new Date(2016,a-1,b).getDay();
  answer = week[date]
  return answer;
}