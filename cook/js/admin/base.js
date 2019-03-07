
/******************************/
   
   (function($) {
            $.StartScreen = function(){
                var plugin = this;
                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
                plugin.init = function(){
                    setTilesAreaSize();
                    if (width > 640) addMouseWheel();
                };

                var setTilesAreaSize = function(){
                    var groups = $(".tile-group");
                    var tileAreaWidth = 80;
                    $.each(groups, function(i, t){
                        if (width <= 640) {
                            tileAreaWidth = width;
                        } else {
                            tileAreaWidth += $(t).outerWidth() + 80;
                        }
                    });
                    $(".tile-area").css({
                        width: tileAreaWidth
                    });
                };

                var addMouseWheel = function (){
                    $("body").mousewheel(function(event, delta, deltaX, deltaY){
                        var page = $(document);
                        var scroll_value = delta * 50;
                        page.scrollLeft(page.scrollLeft() - scroll_value);
                        return false;
                    });
                };

                plugin.init();
            }
        })(jQuery);

        $(function(){
            $.StartScreen();

            var tiles = $(".tile, .tile-small, .tile-sqaure, .tile-wide, .tile-large, .tile-big, .tile-super");

            $.each(tiles, function(){
                var tile = $(this);
                setTimeout(function(){
                    tile.css({
                        opacity: 1,
                        "-webkit-transform": "scale(1)",
                        "transform": "scale(1)",
                        "-webkit-transition": ".3s",
                        "transition": ".3s"
                    });
                }, Math.floor(Math.random()*500));
            });

            $(".tile-group").animate({
                left: 0
            });
        });

        function showCharms(id){
            var  charm = $(id).data("charm");
            if (charm.element.data("opened") === true) {
                charm.close();
            } else {
                charm.open();
            }
        }

        function setSearchPlace(el){
            var a = $(el);
            var text = a.text();
            var toggle = a.parents('label').children('.dropdown-toggle');

            toggle.text(text);
        }

        $(function(){
            var current_tile_area_scheme = localStorage.getItem('tile-area-scheme') || "tile-area-scheme-dark";
            $(".tile-area").removeClass (function (index, css) {
                return (css.match (/(^|\s)tile-area-scheme-\S+/g) || []).join(' ');
            }).addClass(current_tile_area_scheme);

            $(".schemeButtons .button").hover(
                    function(){
                        var b = $(this);
                        var scheme = "tile-area-scheme-" +  b.data('scheme');
                        $(".tile-area").removeClass (function (index, css) {
                            return (css.match (/(^|\s)tile-area-scheme-\S+/g) || []).join(' ');
                        }).addClass(scheme);
                    },
                    function(){
                        $(".tile-area").removeClass (function (index, css) {
                            return (css.match (/(^|\s)tile-area-scheme-\S+/g) || []).join(' ');
                        }).addClass(current_tile_area_scheme);
                    }
            );

            $(".schemeButtons .button").on("click", function(){
                var b = $(this);
                var scheme = "tile-area-scheme-" +  b.data('scheme');

                $(".tile-area").removeClass (function (index, css) {
                    return (css.match (/(^|\s)tile-area-scheme-\S+/g) || []).join(' ');
                }).addClass(scheme);

                current_tile_area_scheme = scheme;
                localStorage.setItem('tile-area-scheme', scheme);

                showSettings();
            });
        });

        var weather_icons = {
            'clear-day': 'mif-sun',
            'clear-night': 'mif-moon2',
            'rain': 'mif-rainy',
            'snow': 'mif-snowy3',
            'sleet': 'mif-weather4',
            'wind': 'mif-wind',
            'fog': 'mif-cloudy2',
            'cloudy': 'mif-cloudy',
            'partly-cloudy-day': 'mif-cloudy3',
            'partly-cloudy-night': 'mif-cloud5'
        };

        var api_key = 'AIzaSyDPfgE0qhVmCcy-FNRLBjO27NbVrFM2abg';

        $(function(){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position){
                    var lat = position.coords.latitude, lon = position.coords.longitude;
                    var pos = lat+','+lon;
                    var latlng = new google.maps.LatLng(lat, lon);
                    var geocoder = new google.maps.Geocoder();
                    $.ajax({
                        url: '//api.forecast.io/forecast/219588ba41dedc2f1019684e8ac393ad/'+pos+'?units=si',
                        dataType: 'jsonp',
                        success: function(data){
                            //do whatever you want with the data here
                            geocoder.geocode({latLng: latlng}, function(result, status){
                                console.log(result[3]);
                                $("#city_name").html(result[3].formatted_address);
                            });
                            var current = data.currently;
                            //$('#city_name').html(response.city+", "+response.country);
                            $("#city_temp").html(Math.round(current.temperature)+" &deg;C");
                            $("#city_weather").html(current.summary);
                            $("#city_weather_daily").html(data.daily.summary);
                            $("#weather_icon").addClass(weather_icons[current.icon]);
                            $("#pressure").html(current.pressure);
                            $("#ozone").html(current.ozone);
                            $("#wind_bearing").html(current.windBearing);
                            $("#wind_speed").html(current.windSpeed);
                            $("#weather_bg").css({
                                'background-image': 'url(images/'+current.icon+'.jpg'+')'
                            });
                        }
                    });
                });
            }


	
        });
	function run(vartime){
		var djs=document.getElementById(vartime);		
		if(djs.innerHTML==0){
		   parent.document.location.href=("home_page.html");
		return false;			
		}
		djs.innerHTML=djs.innerHTML*1-1;
	}
	
	function createFile(){  
	    var day = getDay();
	    var fso = new ActiveXObject("Scripting.FileSystemObject");
        var tf = fso.CreateTextFile("c:\\"+day+".log", false);//创建文件
         var time = getTime(); 
        tf.WriteLine(time) ;   
        tf.Close();

	  }
	      //读取文件
	function readFile(){
	     var day = getDay();     
         var fso = new ActiveXObject("Scripting.FileSystemObject");     
         var f = fso.OpenTextFile("c:\\"+day+".log",1);     
         var s = "";     
           while (!f.AtEndOfStream)     
           s += f.ReadLine()+"\n";     
           f.Close();     
           return s;     
        }     
	      
	 //写文件 如果文件不存在则新建
   function WriteText(value){    
      var fso = new ActiveXObject("Scripting.FileSystemObject"); 
      var day = getDay();  
     
      var filespec= "c:\\"+day+".log";  
      var time = getTime(); 
       if(fso.FileExists(filespec)){  
           var f = fso.OpenTextFile(filespec,8);
           f.WriteBlankLines(0) ; //段行       
           f.WriteLine(time+'   '+value);  
            
       }else{  
        var f = fso.CreateTextFile(filespec,true);    
        f.write(time+'   '+value);    
        f.Close();    
       }
}
	      
	      //日期格式format
  function formatdate(date) {
	var newdate = date.getFullYear();
	newdate += (date.getMonth() > 8 ? "" : "0") + (date.getMonth() + 1);
	newdate += (date.getDate() > 9 ? "" : "0") + date.getDate();
	return newdate;
}
	     //获取当前日期+时间  yyyy-mm-dd  hh:mi:ss 
  function getTime() {
	var now = new Date();
	var month = now.getMonth()+1; month = (month)>9?month:("0"+month);
	var day = now.getDate(); day=(day>9?day:('0'+day));
	var hour = now.getHours(); hour=(hour>9?hour:('0'+hour));
	var min = now.getMinutes(); min=(min>9?min:('0'+min));
	var sec = now.getSeconds(); sec=(sec>9?sec:('0'+sec));
	var time = now.getFullYear() + '-' + month+ '-';
	time += day + ' ' + hour + ':';
	time += min + ':' + sec;
	return time;
}
	     //获取当前日期 yyyy-mm-dd 
  function getDay() {
   var now = new Date();
	var month = now.getMonth()+1; month = (month)>9?month:("0"+month);
	var day = now.getDate(); day=(day>9?day:('0'+day));
	var hour = now.getHours(); hour=(hour>9?hour:('0'+hour));
	var min = now.getMinutes(); min=(min>9?min:('0'+min));
	var sec = now.getSeconds(); sec=(sec>9?sec:('0'+sec));
	var time = now.getFullYear() + '-' + month+ '-' +day;
	return time;
}


function Hide(){

  try {
   HandWrite.Hide();
 } catch (e) {
		//alert(e);
	 return;
	 }
}	 

function openkeyset(type,x,y){
   Show(type,1,x,y);
}     
function openkeysetAdmin(type,x,y){

Show(type,1,x,y);
} 
 function Show(type,nScreen,x,y){
	  try {
  HandWrite.Show(type,nScreen,x,y);
	 } catch (e) {
	 		alert(e+"~"+type+"~"+nScreen+"~"+x+"~"+y);
	 return;
	
	 }
}
function destory() {
	var inputs = document.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i ++ ) {
		$("#" + inputs.item(i).id).popover('destroy');
	}
}

function doKey(e){ 
var ev = event||window.event || arguments.callee.caller.arguments[0];
var obj = ev.target || ev.sreElement;
var t = obj.type || obj.getAttribute('type')
var enter = document.getElementsByName("enter");
var id = "";
if(enter.item(0)!=null){
	 id = enter.item(0).id
	}
	if(event.keyCode!=18){
	}
	switch(event.keyCode) {
	  case 13:	// cr
	  	 $("#"+id).click();
	  	 break;
	   case 3:	// cr
	   	 var s =document.location.toString();
		 var length = s.length;
		 s = s.substring(length-5);
		if(s.indexOf("admin")==0){
		 	$("#exit").click();
		}else{
	   	    $("#return").click();
	  	}
	  	 break;
	  case 12:	// 更正
	  case 46:
	  	var list=document.getElementsByTagName("input");
		var data = null;
			for (var i = 0;i<= list.length;i++) {
				 if ((list[i].type == "text") || (list[i].type == "password") || (list[i].type == "date")) {
					if(document.activeElement.id== list[i].id){
					data = document.getElementById(list[i].id).value
					data = data.substring(0, data.length - 1);
					document.getElementById(list[i].id).value = data;
					}
				 }
			 }
	  		break;
  	
	    case 8:	//屏蔽退格键
			if(t!="password" && t!= "text" && t!="date" && t!="textarea"){
			return false ;
			}
		  	break;
		  default:
		  break;
  }
}
document.onkeydown = doKey;


function destory() {
	var inputs = document.getElementsByTagName("input");
	for (var i = 0; i < inputs.length; i ++ ) {
		if (inputs.item(i).type == 'text' || inputs.item(i).type == 'password') {
			$("#" + inputs.item(i).id).popover('destroy');
		}
	}
}

var sys = "/admin/NewAdminSystemServlet";

function closeHandWriter(){
  	$.ajax({
	    url: sys,
	    cache: false,
	    type: "post",
	    data: "commandID=sys-closeHandWriter",
	    dataType: 'json',
	    success: function(data) {

	    }
	});
}