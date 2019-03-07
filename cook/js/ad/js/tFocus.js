function addLoadEvent(func){var oldonload=window.onload;if(typeof window.onload != 'function'){window.onload=func;}else{window.onload=function(){oldonload();func();}}} 
var flag = 0;
var flagAD = 1;
var timelen = 100;
function Focus(time){
  function byid(id) {return document.getElementById(id);}
  function bytag(tag,obj){return (typeof obj=='object'?obj:byid(obj)).getElementsByTagName(tag);}
  var timer = null;
  var oFocus = byid('tFocus');
  var oPic = byid('tFocus-pic');
  var oPicLis = bytag('li',oPic);
  
  //var oBtn = byid('tFocus-btn');
  //var oBtnLis = bytag('li',oBtn);
  var iActive = 0; 
      timelen = time.length;
  function inlize(){oPicLis[0].style.filter = 'alpha(opacity:100)'; oPicLis[0].style.opacity = 100; }
  playNext();
function playNext(){
	//document.getElementById("tFocus-pic").style.opacity=100;
	//alert(oPicLis.length)
  	if(flag==time.length-1){
  		flag = 0;
		flagAD = 0;
		
		window.setTimeout(next,time[flag]*1000);
		
		
  		}else{
			window.setTimeout(autoplay,time[flag]*1000);
            window.setTimeout(playNext,time[flag]*1000);
  			flag++;
}
};

function next(){
	         doMove(oPicLis[oPicLis.length-1],"opacity",0);
			 if(advtiseLoadedflag)
				{
					advertiseInit();
				}else{
					checkMediaPlayer();
				}
		     
	     
	    
};
function next2(){
	 $("#mediaPlayer1").show();
		   document.getElementById("advertiseContainer").style.display="none";
		  //window.setTimeout(checkMediaPlayer,1000);
		  
		  checkMediaPlayer();
};

  //for(var i=0;i<oPicLis.length;i++){oBtnLis[i].sIndex = i;oBtnLis[i].onclick = function(){if(this.sIndex==iActive)return;iActive=this.sIndex;changePic();}};
 
  function changePic(){
	  for(var i=0;i<oPicLis.length;i++)
	  {
		  doMove(oPicLis[i],'opacity',0);
      };
	 doMove(oPicLis[iActive],'opacity',100);	 
	};
  function autoplay()
  {
	  if(iActive>=oPicLis.length-1)
	  {
		 iActive=0;
      }else{
		  iActive++;
		  }
	  changePic();
  };
 // aTimer = setInterval(autoplay,time[flag]*1000);
  inlize();
  function getStyle(obj, attr){if(obj.currentStyle){return obj.currentStyle[attr];}else{return getComputedStyle(obj, false)[attr];}	};
  function doMove(obj,attr,iTarget){clearInterval(obj.timer);obj.timer=setInterval(function (){var iCur=0;if(attr=='opacity'){iCur=parseInt(parseFloat(getStyle(obj, attr))*100);}
  else{iCur=parseInt(getStyle(obj, attr));}var iSpeed=(iTarget-iCur)/8;iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);if(iCur==iTarget){clearInterval(obj.timer);}
  else{if(attr=='opacity'){obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';obj.style.opacity=(iCur+iSpeed)/100;}else{obj.style[attr]=iCur+iSpeed+'px';}}}, 30)};
 // byid('tFocus').onmouseover = function(){clearInterval(aTimer);}
  //byid('tFocus').onmouseout = function(){aTimer = setInterval(autoplay,time[flag]*1000);}
}