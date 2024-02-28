let userAge=prompt('Enter your  age');
userAge=Number(userAge);
let message;
if (userAge>=21){
  message=`old enough, we confirm your entry as you are old enough to drink alcohol because you are ${userAge} old`;
}
else if(userAge>=19){
  message=`confirm entry to the venue but deny the purchase of alcohol`;
}
else{
  message='deny entry';
}
console.log(message);