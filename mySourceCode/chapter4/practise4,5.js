let price= parseInt(prompt('select a number between 1-10'));
let mySelection='My selection';
switch(price){
case 1:
case 2:
alert('you win nothing sorry');
break;
case 3:
case 4:
  alert('you win a mobicel haha')
;
break;
case 5:
  case 6:
    alert('god damn you won an iphone 29, yeah it was released in the future');
break;
case 7:
  case 8:
    alert('well, well, well looks like we have a lucky person on our hands. congra you won a house valued at $500 000');
    break;
case 9:
  case 10:
    let celeb=prompt('whats your celeb crush');
    alert(`you won a dinner date with ${celeb}`);
    break;
  default:
    alert('i said a number between 1-10');
  
}