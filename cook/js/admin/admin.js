

var VoucherUserRole =  "";
var userRole = "";//角色
var cycleMain ="";//清机加卡
var dataMain = "";//日志管理
var userMain ="";//用户管理
var systemManage = "";//系统管理
var list;

	$(function(){

             cycleMain = "cycle,cycleSettledInspect,cycleAddCard";
	     dataMain  = "dataAPPLog,dataAPPLogOut,dataSPLog,dataSPLogOut,dataTransLog,dataTransLogOut";
             userMain = "userQuery,userAdd,userManage,userChangePassword,userResetPassword,userRole";
             systemManage = "systemKey,systemDownload,systemParameter,systemVersion,systemVDM,systemCloseApp,systemRestar,systemShutdown"
		
		cycleMain = cycleMain.split(",");//清机加卡
		dataMain = dataMain.split(",");//日志管理
		userMain = userMain.split(",");//用户管理
		systemManage = systemManage.split(",");//系统管理
		$(".btn1").mousedown(function(){
			$(".btn1").attr("src","image/admin/chosen1.png");
			$(".btn2").attr("src","image/admin/normal2.png");
			$(".btn3").attr("src","image/admin/normal3.png");
			$(".btn4").attr("src","image/admin/normal4.png");
			$(".btn5").attr("src","image/admin/normal5.png");
			$(".btn6").attr("src","image/admin/normal6.png");
			$(".btn7").attr("src","image/admin/normal7.png");
			
			$("#menu_machine_manage").css("display", "none");
			$("#menu_system_manage").css("display", "none");
			$("#menu_cycle_manage").css("display", "none");
			$("#menu_data_manage").css("display", "none");
			$("#menu_user_manage").css("display", "none");
			
			$(".div_center_menu").animate({ width: "0px" },200);
			$(".div_center_menu").css("border", "0px");
			$(".div_right").css("margin-left","118px" );
			$(".div_right").animate({ width: "1162px" },200);
			$('#content').attr("src","admin_main.html"); 
		});
		
		$(".btn2").mousedown(function(){
			$(".btn2").attr("src","image/admin/chosen2.png");
			$(".btn1").attr("src","image/admin/normal1.png");
			$(".btn3").attr("src","image/admin/normal3.png");
			$(".btn4").attr("src","image/admin/normal4.png");
			$(".btn5").attr("src","image/admin/normal5.png");
			$(".btn6").attr("src","image/admin/normal6.png");
			$(".btn7").attr("src","image/admin/normal7.png");
			
			if($(".div_center_menu").width()==0){
				$("#menu_cycle_manage").css("display", "block");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
			}else if($("#menu_cycle_manage").css("display")!="block"){
				
				$("#menu_system_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "0px" },200);
				$(".div_center_menu").css("border", "0px");
				$(".div_right").css("margin-left","118px" );
				$(".div_right").animate({ width: "1162px" },200);
				
				$("#menu_machine_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
				
				$("#menu_cycle_manage").css("display", "block");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
				
				$("#menu_data_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
				
				$("#menu_user_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
			}
			
			
			var div_data=document.getElementById("menu_cycle_manage").getElementsByTagName("div");
			for(var i=0;i<div_data.length;i++){ 
				
				if(i>0&&i%2==1){
					for(var j=0;j<cycleMain.length;j++){
						
						if(cycleMain[j]==div_data[i].id){
							$("#"+div_data[i].id).css("display","block");
							$("#"+div_data[i].id).next().css("display","block");
						}
						
					}
					
				}
				
			}
			
			
		});
		
		$(".btn3").mousedown(function(){
			$(".btn3").attr("src","image/admin/chosen3.png");
			$(".btn1").attr("src","image/admin/normal1.png");
			$(".btn2").attr("src","image/admin/normal2.png");
			$(".btn4").attr("src","image/admin/normal4.png");
			$(".btn5").attr("src","image/admin/normal5.png");
			$(".btn6").attr("src","image/admin/normal6.png");
			$(".btn7").attr("src","image/admin/normal7.png");
			
			if($(".div_center_menu").width()==0){
				$("#menu_machine_manage").css("display", "block");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
			}else if($("#menu_machine_manage").css("display")!="block"){
				
				$("#menu_system_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "0px" },200);
				$(".div_center_menu").css("border", "0px");
				$(".div_right").css("margin-left","118px" );
				$(".div_right").animate({ width: "1162px" },200);
				
				$("#menu_machine_manage").css("display", "block");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
				
				$("#menu_cycle_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
				
				$("#menu_data_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
				
				$("#menu_user_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
			}
			$("#resetAll").css("display","block");
			$("#resetAll").next().css("display","block");
	
		});
		
		$(".btn4").mousedown(function(){
			$(".btn4").attr("src","image/admin/chosen4.png");
			$(".btn1").attr("src","image/admin/normal1.png");
			$(".btn2").attr("src","image/admin/normal2.png");
			$(".btn3").attr("src","image/admin/normal3.png");
			$(".btn5").attr("src","image/admin/normal5.png");
			$(".btn6").attr("src","image/admin/normal6.png");
			$(".btn7").attr("src","image/admin/normal7.png");
			
			if($(".div_center_menu").width()==0){
				$("#menu_data_manage").css("display", "block");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
			}else if($("#menu_data_manage").css("display")!="block"){
				
				$("#menu_system_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "0px" },200);
				$(".div_center_menu").css("border", "0px");
				$(".div_right").css("margin-left","118px" );
				$(".div_right").animate({ width: "1162px" },200);
				
				$("#menu_data_manage").css("display", "block");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
				
				$("#menu_cycle_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
				
				$("#menu_machine_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
				
				$("#menu_user_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
			}
			
				
			var div_data=document.getElementById("menu_data_manage").getElementsByTagName("div");
			for(var i=0;i<div_data.length;i++){ 
				
				if(i>0&&i%2==1){
					for(var j=0;j<dataMain.length;j++){
						
						if(dataMain[j]==div_data[i].id){
							$("#"+div_data[i].id).css("display","block");
							$("#"+div_data[i].id).next().css("display","block");
						}
						
					}
					
				}
				
			}
		});
		
		$(".btn5").mousedown(function(){
			$(".btn1").attr("src","image/admin/normal1.png");
			$(".btn2").attr("src","image/admin/normal2.png");
			$(".btn3").attr("src","image/admin/normal3.png");
			$(".btn4").attr("src","image/admin/normal4.png");
			$(".btn5").attr("src","image/admin/chosen5.png");
			$(".btn6").attr("src","image/admin/normal6.png");
			$(".btn7").attr("src","image/admin/normal7.png");
			
			if($(".div_center_menu").width()==0){
				$("#menu_user_manage").css("display", "block");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
			}else if($("#menu_user_manage").css("display")!="block"){
				
				$("#menu_machine_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "0px" },200);
				$(".div_center_menu").css("border", "0px");
				$(".div_right").css("margin-left","118px" );
				$(".div_right").animate({ width: "1162px" },200);
				
				$("#menu_user_manage").css("display", "block");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
				
				$("#menu_cycle_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
				
				$("#menu_data_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
				
				$("#menu_system_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
			}
			
			var div_data=document.getElementById("menu_user_manage").getElementsByTagName("div");
			for(var i=0;i<div_data.length;i++){ 
				
				if(i>0&&i%2==1){
					for(var j=0;j<userMain.length;j++){
						
						if(userMain[j]==div_data[i].id){
							$("#"+div_data[i].id).css("display","block");
							$("#"+div_data[i].id).next().css("display","block");
						}
						
					}
					
				}
				
			}
		});
		
		$(".btn6").mousedown(function(){
			$(".btn6").attr("src","image/admin/chosen6.png");
			$(".btn1").attr("src","image/admin/normal1.png");
			$(".btn2").attr("src","image/admin/normal2.png");
			$(".btn3").attr("src","image/admin/normal3.png");
			$(".btn4").attr("src","image/admin/normal4.png");
			$(".btn5").attr("src","image/admin/normal5.png");
			$(".btn7").attr("src","image/admin/normal7.png");
			
			if($(".div_center_menu").width()==0){
				$("#menu_system_manage").css("display", "block");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
			}else if($("#menu_system_manage").css("display")!="block"){
				
				$("#menu_machine_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "0px" },200);
				$(".div_center_menu").css("border", "0px");
				$(".div_right").css("margin-left","118px" );
				$(".div_right").animate({ width: "1162px" },200);
				
				$("#menu_system_manage").css("display", "block");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
				
				$("#menu_cycle_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
				
				$("#menu_data_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
				
				$("#menu_user_manage").css("display", "none");
				$(".div_center_menu").animate({ width: "260px" },200);
				$(".div_center_menu").css("border-right", "1px solid #cccccc");
				$(".div_right").css("margin-left","379px" );
				$(".div_right").animate({ width: "901px" },200);
			}
			var div_data=document.getElementById("menu_system_manage").getElementsByTagName("div");
			for(var i=0;i<div_data.length;i++){ 
				
				if(i>0&&i%2==1){
					for(var j=0;j<systemManage.length;j++){
						
						if(systemManage[j]==div_data[i].id){
							$("#"+div_data[i].id).css("display","block");
							$("#"+div_data[i].id).next().css("display","block");
						}
						
					}
					
				}
				
			}
		});
		
		$(".btn7").mousedown(function(){
			$(".btn1").attr("src","image/admin/normal1.png");
			$(".btn2").attr("src","image/admin/normal2.png");
			$(".btn3").attr("src","image/admin/normal3.png");
			
			$(".btn4").attr("src","image/admin/normal4.png");
			$(".btn5").attr("src","image/admin/normal5.png");
			$(".btn6").attr("src","image/admin/normal6.png");
			$(".btn7").attr("src","image/admin/chosen7.png");
			loginOut();
		});
		
		$("#menu_machine_manage div").click(function(){
			var i=$("#menu_machine_manage div").index($(this));
			$(".menu_content").css("background","transparent");
			if(i>0&&i%2==1){
				$("#menu_machine_manage div").eq(i).css("background","#e7f0ff");
			}
		});
		
		$("#menu_cycle_manage div").click(function(){
			var i=$("#menu_cycle_manage div").index($(this));
			$(".menu_content").css("background","transparent");
			if(i>0&&i%2==1){
				$("#menu_cycle_manage div").eq(i).css("background","#e7f0ff");
			}
		});
		
		$("#menu_system_manage div").click(function(){
			var i=$("#menu_system_manage div").index($(this));
			$(".menu_content").css("background","transparent");
			if(i>0&&i%2==1){
				$("#menu_system_manage div").eq(i).css("background","#e7f0ff");
			}
		});
		
		$("#menu_data_manage div").click(function(){
			var i=$("#menu_data_manage div").index($(this));
			$(".menu_content").css("background","transparent");
			if(i>0&&i%2==1){
				$("#menu_data_manage div").eq(i).css("background","#e7f0ff");
			}
		});
		
		$("#menu_user_manage div").click(function(){
			var i=$("#menu_user_manage div").index($(this));
			$(".menu_content").css("background","transparent");
			if(i>0&&i%2==1){
				$("#menu_user_manage div").eq(i).css("background","#e7f0ff");
			}
		});
	});
	
	function settledinspect(){
	if (confirm("确认进行清机？")) {
       $('#content').attr("src","cycleVoucherLoadIn.html");  
       window.location.href=("cycleVoucherLoadIn.html");
      
        }			 
	 }
	 
    function cycleVoucherQuery(){
    	
        DataFace.OpenFileMap();
        var VoucherCycleNormalStatus = "";
        
        VoucherCycleNormalStatus = GetValue("VoucherCycleNormalStatus");//周期
        
        if(VoucherCycleNormalStatus!=0){
        alert("必须清后机才能加卡");
        }else{
       $('#content').attr("src","cycleVoucherLoadIn.html");  //测试用
       //  $('#content').attr("src","cycleVoucherQuery.html");
      // $('#content').attr("src","cycleVoucherQuery.html");  
	//  $('#content').attr("src","cycleSignIn.html");          //签到
	 }
	 }
    function loginOut(){
    window.location.href=("index.html#/pages/home");
    }
    
     function logOff(){
    window.location.href=("admin_login.html");
    }
    
 

