let count = 0;



document.getElementById('decreaseBtn').onclick = function(){
  count--
  document.getElementById('display').textContent=count;
}
document.getElementById('resetBtn').onclick = function(){
  count=0
  document.getElementById('display').textContent=count;
}
document.getElementById('increaseBtn').onclick = function(){
  count++
  document.getElementById('display').textContent=count;
}




