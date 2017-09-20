/*
* @Author: 木木
* @Date:   2017-09-18 21:06:25
* @Last Modified by:   木木
* @Last Modified time: 2017-09-20 19:58:53
*/
window.onload=function(){


function $(select,range){
    var range = range || document
    var first = select.charAt(0);
    if (first=='.') {
      return document.getElementsByClassName(select.substring(1),range);
    }else if (first=='#') {
      return document.getElementById(select.substring(1));
    }else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
            return document.getElementsByTagName(select);
      } 
    }

function getClass(classname,range){
      var range=range||document;
      if(document.getElementsByClassName){
        return range.getElementsByClassName(classname);
      }
      else{
      var newarr=[];
      var all=range.getElementsByTagName('*');
      for (var i=0;i<all.length;i++){
        if(check(all[i].className,classname)){
          newarr.push(all[i]);
        }
      }
      return newarr;
      }
    }
    function check(className,classname){
  var arr = className.split(' ');
  for(var j=0;j<arr.length;j++){
    if (arr[j]==classname) {
      return true;
    }
  }
  return false;
}
	



let bigbox=$('.big-box')[0];
let bigbanner=$('.bigbanner')[0]
let bannerli=bigbanner.getElementsByTagName('li');
let circle=$('.circle')[0];
let circleli=$('.circleli');
let bannertu=document.getElementsByClassName('img1');
let imgw=parseInt(getComputedStyle(bigbanner,null).width);
let flag = true;





for(let i=0;i<circleli.length;i++){
  circleli[i].onclick=function(){
    if (now==i) {
      return;
    }
      circleli[i].style.background='#fff';
      circleli[now].style.background='#15171b';
      bannerli[i].style.left=imgw+'px';
      animate(bannerli[now],{left:-imgw});
      animate(bannerli[i],{left:0});
      now=next=i;
  }
}


// let t = setInterval(move,3000);
// let num = 0;
// function move (){
//   for(let i=0;i<bannerli.length;i++){
//     bannerli[i].style.display='none';
//     circle[i].style.background='#15171b';
//   }
//     bannerli[num].style.display='block';
//     circleli[num].style.background='#fff';
// }

// let t = setInterval(move,3000);
// let num = 0;
// function move (){
//   num++;
//  if (num==bannertu.length) {
//     num=0;
//   }
//   for(let i=0;i<bannertu.length;i++){
//     // bannertu[i].style.display='none';
//     animate(bannertu[i],{opacity:0})
//     circleli[i].style.background='#15171b';
//   }
//     // bannertu[num].style.display='block';
//     animate(bannertu[num],{opacity:1})
//     circleli[num].style.background='#fff';
// }





let t = setInterval(move,3000);
let next = 0;
let now=0;
function move (){
  next++;
 if (next==bannerli.length) {
     next=0;
  }
     bannerli[next].style.left=imgw+'px';
     animate(bannerli[now],{left:-imgw});
     animate(bannerli[next],{left:0},function(){
      flag=true;
     });
     now=next;
}

function move1 (){
  next--;
 if (next<=0) {
     next=bannerli.length-1;
  }
     bannerli[next].style.left=`${-imgw}px`;
     animate(bannerli[now],{left:imgw});
     animate(bannerli[next],{left:0},function(){
      flag=true;
     });
     now=next;
    // circleli[i].style.background='#15171b';

    // circleli[num].style.background='#fff';
}

bigbox.onmouseover = function(){
  clearInterval(t);
}
bigbox.onmouseout = function(){
  t = setInterval(move,3000)
}

let rightarrow = document.getElementsByClassName('rightarrow')[0];
let leftarrow = $('.leftarrow')[0];
rightarrow.onclick=function(){
  if (!flag) {
    return;

  }
  move();
  flag=false;
}
leftarrow.onclick=function(){
  if(!flag){
    return;
  }
  move1();
  flag=false;
}



































// function move1 (){
//   num--;
//  if (num==0) {
//     num=bannertu.length-1;
//   }
//   for(let i=0;i<bannertu.length;i++){
//     bannertu[i].style.display='none';
//     circleli[i].style.background='#15171b';
//   }
//     bannertu[num].style.display='block';
//     circleli[num].style.background='#fff';
// }

// bigbox.onmouseover=function(){
//       clearInterval(t);
//     }  
// bigbox.onmouseout=function(){
//       // num=i;
//    t=setInterval(move,3000);

//     } 


// let leftarrow = $('.leftarrow')[0];

// let rightarrow = $('.rightarrow')[0];
//  rightarrow.onclick = function (){
//   move();
//  }

//  leftarrow.onclick = function (){
//    num--;
//  if (num<=0) {
//     num=bannertu.length-1;
//   }
//   for(let i=0;i<bannertu.length;i++){
//     // bannertu[i].style.display='none';
//     animate(bannertu[i],{opacity:0})
//     circleli[i].style.background='#15171b';
//   }
//     // bannertu[num].style.display='block';
//     animate(bannertu[num],{opacity:1})
//     circleli[num].style.background='#fff';
// }






}





