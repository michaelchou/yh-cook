//var mDefaultServerAddr = "66.3.49.61";		    // 默认服务器地址
//var mDefaultServerPort = 8912;					// 默认服务器端口号
var mDefaultFTPAddr = "";		    // 默认FTP地址
var mDefaultFTPUser = "";		    // 默认FTP用户名
var mDefaultFTPPass = "";		    // 默认FTP密码
var mDefaultServerAddr = "";		    // 默认服务器地址
var mDefaultServerPort = 8906;					// 默认服务器端口号
var mUserName = "yihua-vtm1";
var mPassword = "";
var mSelfUserId = -1;                           // 本地用户ID
var mPriority = 10;                             // 用户优先级
var mTargetUserId = -1;                         // 目标用户ID（请求了对方的音视频）
var mUserType = 1;                              // 用户类型 1为客户,2为坐席
var mObjectInitFlag=0;                          // 对象初始化标识(用户，坐席)
var mCurrentAreaId = 1001;                     // 营业厅号
var mStartServiceFlag=false;                    // 开始服务标志，True表示已开始服务
var mCurrentAgentID = -1;                       // 当前座席ID
var mQueueListName="";                          // 队列名称
var mQueueWaitingTimer = -1;                    // 排队等待定时器
var mQueueWaitingTimeOut = -1;                    // 排队等待定时器
var mRefreshVolumeTimer = -1;                   // 实时音量大小定时器

// 日志记录类型，在日志信息栏内显示不同的颜色
var LOG_TYPE_NORMAL = 0;
var LOG_TYPE_API = 1;
var LOG_TYPE_EVENT = 2;
var LOG_TYPE_ERROR = 3;
var TMP_PERPHOTO = "";
var TMP_PERFRONTPIC = "";
var TMP_PERBACKPIC = "";
var TMP_PERIDPIC = "";
var TMP_PERPIC = "";
var TMP_SignPIC = "";
var TMP_FormPIC = "";

var TMP_PERFRONTPICSrc = "";
var TMP_PERBACKPICSrc = "";
var TMP_PERIDPICSrc = "";
var TMP_PERPICSrc = "";
var TMP_SignPICSrc = "d:/sign.bmp";
var TMP_FormPICSrc = "";
var tmplpFileName = "";
var jpgORvideo = "jpg";
var obj1004;

var intTransFileFlag = 0;	//1-现场照片2-头像3-正面图像4-反面图像5-核查照片6-签名图片7-表单图片
var journalPath = "";//VTM本地Journal日志地址
var ACjournalPath = "";//上传日志后，anychat返回路径
var ACformPath = "";//上传表单后，anychat返回路径
//当前被选择的队列名称
var currentSelectedQueueName = "";
var currentSelectedQueueId = 101;  //队列号

//服务区域(营业厅)ID数组
var areaIdArray = null;
var areaArrayIdx = 0;
var videoSuccessFlag = "false";
function GetID(id) {
	if (document.getElementById) {
		return document.getElementById(id);
	} else if (window[id]) {
		return window[id];
	}
	return null;
}
//获取当前时间  (00:00:00)
function GetTheTime() {
	var TheTime = new Date();
	return TheTime.toLocaleTimeString();
}
// 添加日志并显示，根据不同的类型显示不同的颜色
function AddLog(message, type) {
	EBCommonCtrl.AppendEJournal("jcols_log.txt",message);
}

//$(function(){
//	//日志显示按钮
//	$(".showBox").click(function () {
//		$("#LOG_DIV_BODY").show();
//		$(".showBox").hide();
//		$("#LOG_DIV_BODY").animate({
//			bottom: 0
//		}, "slow");
//
//	});
//	//日志隐藏按钮
//	$("#LOG_DIV_TITLE").click(function () {
//		$("#LOG_DIV_BODY").animate({
//			bottom: -210, display: "none"
//		}, "slow");
//		$(".showBox").show();
//	});
//
//})

var reuqestFrom ="";
var authorizedMode ="";
var videoInitFlag = "0";//初始化，进入营业厅是否成功标识
var scope;
function MediaInit() {
	// 检查是否安装了插件
	var NEED_ANYCHAT_APILEVEL = "0"; // 定义业务层需要的AnyChat
	//EBCommonCtrl.AppendEJournal("jcols_log.txt","视频控件初始化:");
	// API Level
	var errorcode = BRAC_InitSDK(NEED_ANYCHAT_APILEVEL); // 初始化插件（返回成功(0)或插件版本号太低的编号）
	//AddLog("BRAC_InitSDK(" + NEED_ANYCHAT_APILEVEL + ")=" + errorcode, LOG_TYPE_API);
	if (errorcode == GV_ERR_SUCCESS) {// 安装成功的情况下
		AddLog("初始化插件成功");
		setTimeout("MediaLogin()",1000);
	} else { // 没有安装插件，或是插件版本太旧
		AddLog("初始化插件失败");
		videoInitFlag = "0";
	}
}

function setServer(machineType,data,value,BRANCH,FTPAddr,FTPUser,FTPPass)
{
	if(machineType == "VTM600A")//长城
	{
		document.getElementById("imgdepositInsurance").style.width = "1100px";
		document.getElementById("imgdepositInsurance").style.height = "1024px";
	}else if(machineType == "VM2000L"){//北辰德
		document.getElementById("imgdepositInsurance").style.width = "1100px";
		document.getElementById("imgdepositInsurance").style.height = "1024px";
	}else if(machineType == "UC5000M2"){//浪潮
		document.getElementById("imgdepositInsurance").style.width = "1100px";
		document.getElementById("imgdepositInsurance").style.height = "1024px";
	}else{
		document.getElementById("imgdepositInsurance").style.width = "1280px";
		document.getElementById("imgdepositInsurance").style.height = "1024px";
	}
	mDefaultServerAddr = data;		    // 默认服务器地址
  mDefaultServerPort = value;
  mUserName = BRANCH;
  mDefaultFTPAddr = FTPAddr;		    // 默认FTP地址
  mDefaultFTPUser = FTPUser;		    // 默认FTP用户名
  mDefaultFTPPass = FTPPass;		    // 默认FTP密码
  AddLog("获取坐席IP:"+data);
  AddLog("获取坐席端口:"+value);
  MediaInit();
	
}

function getServer()
{
	  advertiseInit();
	  scope = angular.element("#com").scope();
		scope.auxiliaryAnyChat("getServer");
}

function checkInit() {
	
	if("0" == videoInitFlag || 'undefined' ==videoInitFlag)//初始化失败
	{
		//var scope = angular.element("#com").scope();
	      scope.auxiliaryAnyChat("videoFail");
	}else{
		 scope.auxiliaryAnyChat("videoInitOk");
		}
	openMediaPlayer();
}

function MediaLogin() {

	/**连接服务器*/
	BRAC_Connect(mDefaultServerAddr, mDefaultServerPort);
}

// 客户端连接服务器，bSuccess表示是否连接成功，errorcode表示出错代码
function OnAnyChatConnect(bSuccess, errorcode) {
	  AddLog("连接回调");
    AddLog("OnAnyChatConnect(errorcode=" + errorcode + ")", LOG_TYPE_EVENT);
	if (errorcode == 0) {
    AddLog("连接成功");
    videoInitFlag = "1";
    /**登入anychat*/
	  var loginTag = BRAC_Login(mUserName, mPassword, 0);
    
	} else {
		AddLog("连接失败");
    videoInitFlag = "0";
	}
}

// 客户端登录系统，dwUserId表示自己的用户ID号，errorcode表示登录结果：0 成功，否则为出错代码，参考出错代码定义
function OnAnyChatLoginSystem(dwUserId, errorcode) {
	  AddLog("登录服务器");
    AddLog("OnAnyChatLoginSystem(userid=" + dwUserId + ", errorcode=" + errorcode + ")", LOG_TYPE_EVENT);
	if (errorcode == 0) {
		videoInitFlag = "1";
		 AddLog("登录成功");
	    if (mUserType == 2) {//客服
	        mCurrentAgentID = dwUserId;
			mObjectInitFlag=ANYCHAT_OBJECT_FLAGS_AGENT;//坐席标识
		}else if(mUserType==1){
			mObjectInitFlag=0;//客户
        }

		mSelfUserId = dwUserId;
		//身份信息设置
		InitClientObjectInfo(mSelfUserId,mObjectInitFlag,mPriority);
	} else {
		AddLog("登录失败");
		videoInitFlag = "0";
	}
}

//初始化本地对象信息
function InitClientObjectInfo(mSelfUserId, mObjectInitFlag, mPriority) {
	  AddLog("初始化本地对象信息");
    AddLog("Initialize Client Object Information", LOG_TYPE_NORMAL);

    //初始化服务区域Id数组
    areaArrayIdx = 0;
    areaIdArray = new Array();

	//业务对象身份初始化
	BRAC_SetSDKOption(BRAC_SO_OBJECT_INITFLAGS, mObjectInitFlag);
	//客户端用户对象优先级
	BRAC_ObjectSetValue(ANYCHAT_OBJECT_TYPE_CLIENTUSER, mSelfUserId, ANYCHAT_OBJECT_INFO_PRIORITY, mPriority);
	var dwAttribute = -1;
	BRAC_ObjectSetValue(ANYCHAT_OBJECT_TYPE_CLIENTUSER, mSelfUserId, ANYCHAT_OBJECT_INFO_ATTRIBUTE, dwAttribute);
	//向服务器发送数据同步请求指令
	BRAC_ObjectControl(ANYCHAT_OBJECT_TYPE_AREA, ANYCHAT_INVALID_OBJECT_ID, ANYCHAT_OBJECT_CTRL_SYNCDATA, mSelfUserId, 0, 0, 0, "");
}

//业务对象数据更新事件
function OnAnyChatObjectUpdate(dwObjectType, dwObjectId) {
    var str = null;
    AddLog("业务对象数据更新事件");
    AddLog('OnAnyChatObjectUpdate(' + dwObjectType + ',' + dwObjectId + ')', LOG_TYPE_EVENT);
	if(dwObjectType == ANYCHAT_OBJECT_TYPE_AREA) {
	    areaIdArray[areaArrayIdx] = dwObjectId;
	    areaArrayIdx++;
	} else if(dwObjectType == ANYCHAT_OBJECT_TYPE_QUEUE) {

	} else if(dwObjectType == ANYCHAT_OBJECT_TYPE_AGENT) {

	}
}

//业务对象同步完成事件
function OnAnyChatObjectSyncDataFinish(dwObjectType, dwObjectId) {
	  AddLog("业务对象同步完成事件");
    AddLog('OnAnyChatObjectSyncDataFinish(' + dwObjectType + ',' + dwObjectId + ')', LOG_TYPE_EVENT);

    if (dwObjectType == ANYCHAT_OBJECT_TYPE_AREA) {
        MediaEnterArea();
	} else if(dwObjectType == ANYCHAT_OBJECT_TYPE_QUEUE) {

	}

}

function MediaEnterArea() {

	/**进入营业厅*/
	var errorcode = BRAC_ObjectControl(ANYCHAT_OBJECT_TYPE_AREA, mCurrentAreaId, ANYCHAT_AREA_CTRL_USERENTER, 0, 0, 0, 0, "");
	AddLog("进入营业厅");
	AddLog("BRAC_ObjectControl(" + ANYCHAT_OBJECT_TYPE_AREA + "," + mCurrentAreaId + "," + ANYCHAT_AREA_CTRL_USERENTER + ",0,0,0,0,''" + ")=" + errorcode, LOG_TYPE_API);
}

// 进入服务区域通知事件
function OnAnyChatEnterAreaResult(dwObjectType, dwObjectId, dwErrorCode) {
	AddLog("进入服务区域通知事件");
	AddLog('OnAnyChatEnterAreaResult(' + dwObjectType + ',' + dwObjectId +','+dwErrorCode + ')', LOG_TYPE_EVENT);
	if (dwErrorCode == 0) {
		// 进入服务区域成功
		if(mUserType==1){//客户
			AddLog("进入营业厅成功");
            videoInitFlag = "1";
	       
			/**获取队列*/
			var queueList =BRAC_ObjectGetIdList(ANYCHAT_OBJECT_TYPE_QUEUE);
			for (var i in queueList) {
			    var queueListId = parseInt(queueList[i]);
			    /**获取队列名称*/
			    var queueName = BRAC_ObjectGetStringValue(ANYCHAT_OBJECT_TYPE_QUEUE, queueListId, ANYCHAT_OBJECT_INFO_NAME);
			    /**获取队列排队人数*/
			    var queueLength = BRAC_ObjectGetIntValue(ANYCHAT_OBJECT_TYPE_QUEUE, queueListId, ANYCHAT_QUEUE_INFO_LENGTH);
			    queueLength = queueLength < 0 ? 0 : queueLength;
			    /**获取队列信息*/
			    var queueInfo = BRAC_ObjectGetStringValue(ANYCHAT_OBJECT_TYPE_QUEUE, queueListId, ANYCHAT_OBJECT_INFO_DESCRIPTION);
			}
			//MediaEnterQueue();
        } else if(mUserType == 2) {			//坐席

        }
	}else {
		AddLog("进入营业厅失败");
		  videoInitFlag = "0";
		}
		
}
var messageJSON;
function MediaEnterQueue(data,msg,selectMode) {
	reuqestFrom = data;
	//authorizedMode = selectMode;//视频审核模式
	AddLog("呼叫开始")
	messageJSON = msg;//发送设备信息接口中的数据
	scope.auxiliaryAnyChat("videoCalling");
	clearTimeout(mQueueWaitingTimeOut);
	mQueueWaitingTimeOut = setTimeout(function () {
		
		//MediaLeaveQueue();//排队超时，离开队列
		},30000);
	var currentSelectedQueueId = 101;
	/**进入队列*/
	var errorcode = BRAC_ObjectControl(ANYCHAT_OBJECT_TYPE_QUEUE, currentSelectedQueueId, ANYCHAT_QUEUE_CTRL_USERENTER, 0, 0, 0, 0, "");
	AddLog("进入队列");
	AddLog("BRAC_ObjectControl(" + ANYCHAT_OBJECT_TYPE_QUEUE + "," + currentSelectedQueueId + "," + ANYCHAT_QUEUE_CTRL_USERENTER + ",0,0,0,0,''" + ")=" + errorcode, LOG_TYPE_API);
}

// 本地用户进入队列结果,进入队列成功后，等待坐席从队列中获取用户
function OnAnyChatEnterQueueResult(dwObjectType, dwObjectId, dwErrorCode) {
	AddLog("本地用户进入队列结果");
  AddLog('OnAnyChatEnterQueueResult(' + dwObjectType + ',' + dwObjectId + ',' + dwErrorCode + ')', LOG_TYPE_EVENT);
  if (dwErrorCode == 0) {
	currentSelectedQueueId = dwObjectId;
	currentSelectedQueueName = BRAC_ObjectGetStringValue(ANYCHAT_OBJECT_TYPE_QUEUE, dwObjectId, ANYCHAT_OBJECT_INFO_NAME);
	//$("#queueMsg1").show(); //重置显示排队信息
	//$("#callLayer").show(); //显示弹出窗口
    //$("#queueMsg1 strong:eq(2)").text(0); //清零排队时间
     /*clearInterval(mQueueWaitingTimer);
     mQueueWaitingTimer = setInterval(function () {
         var time = formatSeconds(BRAC_ObjectGetIntValue(ANYCHAT_OBJECT_TYPE_QUEUE, currentSelectedQueueId, ANYCHAT_QUEUE_INFO_WAITTIMESECOND));
          if(time == 30+"秒")
          {
         	 MediaLeaveQueue();//排队超时，离开队列
         	}
         //$("#queueMsg1 strong:eq(2)").text(time);
     }, 1000);
     */
   }else {
		//var scope = angular.element("#com").scope();
		//var player = document.getElementById("mediaPlayer1");
    	//player.play();
		scope.auxiliaryAnyChat("videoFinish");
		$("#com").hide();
    $("#videoContainer").show();
		if(reuqestFrom == "flow")
		 {	   
	       scope.auxiliaryAnyChat("mediaFail");//面签流程，视频联通超时，控制Media.dsl向下执行
		 }
		}
}

function MediaLeaveQueue() {
	/**离开队列*/
	var errorcode = BRAC_ObjectControl(ANYCHAT_OBJECT_TYPE_QUEUE, currentSelectedQueueId, ANYCHAT_QUEUE_CTRL_USERLEAVE, 0, 0, 0, 0, "");
	AddLog("离开队列");
	AddLog("BRAC_ObjectControl(" + ANYCHAT_OBJECT_TYPE_QUEUE + "," + currentSelectedQueueId + "," + ANYCHAT_QUEUE_CTRL_USERLEAVE + ",0,0,0,0,''" + ")=" + errorcode, LOG_TYPE_API);
	//$("#callLayer").hide(); //隐藏弹出窗口
	//var scope = angular.element("#com").scope();
	//var player = document.getElementById("mediaPlayer1");
    	//player.play();
	  $("#com").hide();
    $("#videoContainer").show();
	scope.auxiliaryAnyChat("videoFinish");
	
	if(reuqestFrom == "flow")
		 {
			   
	       scope.auxiliaryAnyChat("mediaFail");//面签流程，视频联通超时，控制Media.dsl向下执行
		 }
	//self.location ="http://127.0.0.1/flow-jsnxvtm/resources/auxiliary.html";

}

function playVideo()
{
	//var player = document.getElementById("mediaPlayer1");
			//player.play();
			$("#com").hide();
			$("#videoContainer").show();
}

//收到视频呼叫请求
function onVideoCallControlRequest(dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr)
{
	AddLog("收到视频呼叫请求");
	AddLog('onVideoCallControlRequest(' + dwUserId + ',' + dwErrorCode + ',' + dwFlags + ',' + dwParam + ',' + szUserStr + ')', LOG_TYPE_EVENT);
	//获取客服姓名
	var agentUserName = BRAC_ObjectGetStringValue(ANYCHAT_OBJECT_TYPE_CLIENTUSER, dwUserId, ANYCHAT_OBJECT_INFO_NAME);
	$("#callLayer").hide();
	mTargetUserId=dwUserId;
	MediaAcceptRequest();
}

//同意会话
function MediaAcceptRequest() {
	//呼叫请求回复触发
    var errorcode = BRAC_VideoCallControl(BRAC_VIDEOCALL_EVENT_REPLY, mTargetUserId, 0, 0, 0, "");
    AddLog("呼叫请求回复");
    AddLog("BRAC_VideoCallControl(" + BRAC_VIDEOCALL_EVENT_REPLY + "," + mTargetUserId + "," + "0,0,0,''" + ")=" + errorcode, LOG_TYPE_API);

}

//取消主动呼叫
function MediaCancelCall() {
	//取消主动呼叫
	var errorcode = BRAC_VideoCallControl(BRAC_VIDEOCALL_EVENT_REPLY, mTargetUserId, GV_ERR_SESSION_QUIT, 0, 0, "");
	AddLog("取消主动呼叫");
	AddLog("BRAC_VideoCallControl(" + BRAC_VIDEOCALL_EVENT_REPLY + "," + mTargetUserId + "," + GV_ERR_SESSION_QUIT + ",0,0,''" + ")=" + errorcode, LOG_TYPE_API);

	ForSession("取消呼叫...",true);
	if (mUserType == 1) {
	    //离开队列
	    BRAC_ObjectControl(ANYCHAT_OBJECT_TYPE_QUEUE, currentSelectedQueueId, ANYCHAT_QUEUE_CTRL_USERLEAVE, 0, 0, 0, 0, "");

	}else if(mUserType==2){

	}
    mStartServiceFlag = false;
}

//视频呼叫请求回复
function onVideoCallControlReply(dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr) {
	AddLog("取视频呼叫请求回复");
	AddLog('onVideoCallControlReply(' + dwUserId + ',' + dwErrorCode + ',' + dwFlags + ',' + dwParam + ',' + szUserStr + ')', LOG_TYPE_EVENT);
	switch(dwErrorCode)
	{
		case GV_ERR_SUCCESS://成功的情况
		    onSendVideoCallRequestSucess(dwUserId);
			break;
		case GV_ERR_SESSION_QUIT:
		  clearTimeout(mQueueWaitingTimeOut);
			clearInterval(mQueueWaitingTimer);
			ForSession("用户主动放弃会话", true);
			mStartServiceFlag = false;
			//var scope = angular.element("#com").scope();
	    scope.auxiliaryAnyChat("mediaFail");
			break;
		case GV_ERR_SESSION_OFFLINE:
		    ForSession("目标用户不在线",true);
		    //var scope = angular.element("#com").scope();
	      scope.auxiliaryAnyChat("mediaFail");
			break;
		case GV_ERR_SESSION_BUSY:
			/*CancelCall();*/
			ForSession("目标用户忙", true);
			mStartServiceFlag = false;
			//var scope = angular.element("#com").scope();
	    scope.auxiliaryAnyChat("mediaFail");
			break;
		case GV_ERR_SESSION_REFUSE:
			ForSession("目标用户拒绝会话", true);
			mStartServiceFlag = false;
			//var scope = angular.element("#com").scope();
	    scope.auxiliaryAnyChat("mediaFail");
			break;
		case GV_ERR_SESSION_TIMEOUT:
			CancelCall();
		 	ForSession("会话请求超时",true);
		 	//var scope = angular.element("#com").scope();
	    scope.auxiliaryAnyChat("mediaFail");
			break;
		case GV_ERR_SESSION_DISCONNECT:
			ForSession("网络断线",true);
			//var scope = angular.element("#com").scope();
	    scope.auxiliaryAnyChat("mediaFail");
			break;
		default:
			break;
	}
}

//通话开始
function onVideoCallControlStart(dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr)
{
	AddLog("通话开始");
	AddLog('onVideoCallControlStart(' + dwUserId + ',' + dwErrorCode + ',' + dwFlags + ',' + dwParam + ',' + szUserStr + ')', LOG_TYPE_EVENT);
	 //请求进入指定的房间
    var errorcode = BRAC_EnterRoom(dwParam, "", 0);
    AddLog("进入指定的房间");
    AddLog("BRAC_EnterRoom(" + dwParam + ",'',0" + ")=" + errorcode, LOG_TYPE_API);
}

// 客户端进入房间，dwRoomId表示所进入房间的ID号，errorcode表示是否进入房间：0成功进入，否则为出错代码
function OnAnyChatEnterRoom(dwRoomId, errorcode) {
	  AddLog("进入指定的房间回调");
    AddLog("OnAnyChatEnterRoom(dwRoomId=" + dwRoomId + ',errorcode=' + errorcode + ')', LOG_TYPE_NORMAL);

	if (errorcode == 0) {
		if (mUserType == 2) {

		} else if (mUserType ==1) {
			//客服姓名
		    var agentUserName = BRAC_ObjectGetStringValue(ANYCHAT_OBJECT_TYPE_CLIENTUSER, mTargetUserId, ANYCHAT_OBJECT_INFO_NAME);
			//个人姓名
		    var myUserName = BRAC_ObjectGetStringValue(ANYCHAT_OBJECT_TYPE_CLIENTUSER, mSelfUserId, ANYCHAT_OBJECT_INFO_NAME);
		    var videoHtml=//'<div id="VideoShowDiv" style="display:block;" >'+
                      //          '<div id="localVideoPos" style="position: absolute;left:737px;top:372px;width:200px;height:200px;z-index:99;"></div>'+
				//'<div id="remoteVideoPos" style="position: absolute;left:-87px;top:-194px;width:1024px;height:768px;z-index:998;"></div>'+
				//'<div id="localVideoPos" style="position: absolute;width:203px;left:89%;top:81%;height:204px;"></div>'+		
				//'<div id="remoteVideoPos" ></div>'+
				//'<div id="localVideoPos" style="position: absolute;width:203px;left:85%;top:66%;height:204px;"></div>'+		
				//'<b style="position: absolute;bottom: -40px;right: 30px;font-size: 18px;"><a id="hangUp" class="Buttons" onclick="MediaHangUp()"></a></b>'+
			//'</div>';
      //$("#tips").hide();
      $("#call").hide();
	  $("#com").hide();
			//$("#videoContainer").html(videoHtml);//填充视频会话层
			//$("#videoCall").show();
		}
		$("#remoteImagePos").hide();
		startLocalVideo();
		//if("local" == authorizedMode)//如果是本地审核,
		//{
			//controlVideo(mSelfUserId, GetID("localVideoPos"), "ANYCHAT_VIDEO_LOCAL",0);
		//}else{
			//打开本地视频
			controlVideo(mSelfUserId, GetID("localVideoPos"), "ANYCHAT_VIDEO_LOCAL",1);
	  //}
		clearTimeout(mQueueWaitingTimeOut);
		//StartupServer(100000);
		//setVolumeTimer();//设置音量感应
		
		transbuffer("CA1002");
		//alert(mTargetUserId)
		//var scope = angular.element(main).scope();
	     //scope.auxiliaryAnyChat("videoSuccess");
		//if(reuqestFrom == "flow")
		//{
			//scope.action("mediaFail");
		//}
		//var scope = angular.element(main).scope();
		//scope.anychatID(mTargetUserId);
    	//scope.action("mediaFail");

	}else{
		AddLog("OnAnyChatEnterRoom(dwRoomId: "+dwRoomId+',errorcode: '+errorcode + ')', LOG_TYPE_ERROR);
		//var scope = angular.element("#com").scope();
		scope.auxiliaryAnyChat("mediaFail");
		
	}
}


function closeCamera()//关闭摄像头
{
	controlVideo(mSelfUserId, GetID("localVideoPos"), "ANYCHAT_VIDEO_LOCAL",0);
}

function openCamera()//开启摄像头
{
	controlVideo(mSelfUserId, GetID("localVideoPos"), "ANYCHAT_VIDEO_LOCAL",1);
	if(jpgORvideo == "jpg")
	{
		playVideo();
	}else{
		$("#com").show();
	  $("#videoContainer").hide();
		
  }
}
// 收到当前房间的在线用户信息，进入房间后触发一次，dwUserCount表示在线用户数（包含自己），dwRoomId表示房间ID
function OnAnyChatRoomOnlineUser(dwUserCount, dwRoomId) {
	AddLog("进入房间后触发一次");
	AddLog("OnAnyChatRoomOnlineUser(dwUserCount=" + dwUserCount + ',dwRoomId=' + dwRoomId + ')', LOG_TYPE_NORMAL);
	//请求对方视频
	controlVideo(mTargetUserId, GetID("remoteVideoPos"), "ANYCHAT_VIDEO_REMOTE",1);
}

// 控制视频打开
function controlVideo(uid, videoID, videoType, state) {
	//视频操作
    var errorcode = BRAC_UserCameraControl(uid, state);
    AddLog("进视频操作");
    AddLog("BRAC_UserCameraControl(" + uid + "," + state + ")=" + errorcode, LOG_TYPE_API);
    if(errorcode !=0 && errorcode !=3)
    {
     //var scope = angular.element("#com").scope();
		 if(reuqestFrom == "flow")
		 {
			   
	       scope.auxiliaryAnyChat("mediaFail");//面签流程，视频联通超时，控制Media.dsl向下执行
		 }
    }
	//语音操作
    errorcode = BRAC_UserSpeakControl(uid, 1);
    AddLog("语音操作");
    AddLog("BRAC_UserSpeakControl(" + uid + "," + state + ")=" + errorcode, LOG_TYPE_API);
   if(errorcode !=0)
    {
     //var scope = angular.element("#com").scope();
		 if(reuqestFrom == "flow")
		 {
			   
	       scope.auxiliaryAnyChat("mediaFail");//面签流程，视频联通超时，控制Media.dsl向下执行
		 }
    }
	//设置视频显示位置
    BRAC_SetVideoPos(uid, videoID, videoType);
    try{
		// 远程用户视频自动全屏显示到扩展屏上
		//BRAC_GetDmoObject("ANYCHAT_VIDEO_REMOTE").SetSDKOptionInt(ANYCHATWEB_VIDEO_SO_EXTENDEDSCREEN, 1);
	}catch(e)
	{}
}

//控制视频关闭
function controlVideo2(uid, videoID, videoType, state) {
	try{
		// 远程用户视频自动从扩展屏上移除
		//BRAC_GetDmoObject("ANYCHAT_VIDEO_REMOTE").SetSDKOptionInt(ANYCHATWEB_VIDEO_SO_EXTENDEDSCREEN, 0);
	}catch(e)
	{}
	//视频操作
 var errorcode = BRAC_UserCameraControl(uid, state);
 AddLog("进视频操作");
 AddLog("BRAC_UserCameraControl(" + uid + "," + state + ")=" + errorcode, LOG_TYPE_API);
  if(errorcode !=0 && errorcode !=3)
    {
     //var scope = angular.element("#com").scope();
		 if(reuqestFrom == "flow")
		 {
			   
	       scope.auxiliaryAnyChat("mediaFail");//面签流程，视频联通超时，控制Media.dsl向下执行
		 }
    }
	//语音操作
 errorcode = BRAC_UserSpeakControl(uid, state);
 AddLog("语音操作");
 AddLog("BRAC_UserSpeakControl(" + uid + "," + state + ")=" + errorcode, LOG_TYPE_API);
 if(errorcode !=0)
    {
     //var scope = angular.element("#com").scope();
		 scope.auxiliaryAnyChat("mediaFail");
    }
}

//设置音量感应计时器
function setVolumeTimer(){
	mRefreshVolumeTimer = setInterval(
			function() {
				var LocalAudioVolume= GetID("localVideoPos").offsetHeight * BRAC_QueryUserStateInt(mSelfUserId,BRAC_USERSTATE_SPEAKVOLUME) / 100 + "px";//本地音量大小百分比
				GetID("localAudioVolume").style.width = LocalAudioVolume==0?"0px":LocalAudioVolume;
				if (mTargetUserId != -1) {
				var RemoteAudioVolume=GetID("remoteVideoPos").offsetHeight * BRAC_QueryUserStateInt(mTargetUserId,BRAC_USERSTATE_SPEAKVOLUME) / 100 + "px";//远程音量大小百分比
				GetID("remoteAudioVolume").style.width = RemoteAudioVolume==0?"0px":RemoteAudioVolume;
			    }
	}, 100);
}

function MediaHangUp() {
	var errorcode = BRAC_VideoCallControl(BRAC_VIDEOCALL_EVENT_FINISH, mTargetUserId, 0, 0, 0, ""); 	// 挂断
	AddLog("挂断");
	AddLog("BRAC_VideoCallControl(" + BRAC_VIDEOCALL_EVENT_FINISH + "," + mTargetUserId + ",0,0,0,''" + ")=" + errorcode, LOG_TYPE_API);
	//clearInterval(mRefreshVolumeTimer); // 清除实时音量显示计时器
	//var scope = angular.element("#com").scope();
	//$("#com").hide();
  //$("#videoContainer").show();
  //var player = document.getElementById("mediaPlayer1");
    	//player.play();
	scope.auxiliaryAnyChat("videoFinish");
	
	//self.location ="http://127.0.0.1/flow-jsnxvtm/resources/auxiliary.html";

}

//视频通话结束
function onVideoCallControlFinish(dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr)
{
	//var scope = angular.element(main).scope();
	//scope.auxiliary();
	AddLog("视频通话结束");
	BRAC_LeaveRoom(mSelfUserId);
	//关闭对方视频
	controlVideo2(mTargetUserId, GetID("remoteVideoPos"), "ANYCHAT_VIDEO_REMOTE",0);
	if(mUserType==1){
		clearTimeout(mQueueWaitingTimeOut);
		clearInterval(mQueueWaitingTimer);
	}else if(mUserType==2){

	}
	//关闭本地视频
	if("1" != videoFinishPhoto)//拍照结束，拍照未结束，不调用摄像头
	{
	 controlVideo(mSelfUserId, GetID("localVideoPos"), "ANYCHAT_VIDEO_LOCAL",0);
  }
	clearInterval(mRefreshVolumeTimer); // 清除实时音量显示计时器
	$("#remoteVideoPos").text("");
	$("#localVideoPos").text("");
	ForSession("会话结束...", true); // 提示层
  //EndService();
	mStartServiceFlag = false;
	//var scope = angular.element("#com").scope();
	//if(!"local" == authorizedMode)//如果是本地审核,
	//{
	//alert(videoFinishPhoto)
	if("1" != videoFinishPhoto)//拍照结束
	{
		//var player = document.getElementById("mediaPlayer1");
    	//player.play();
     $("#com").hide();
     $("#videoContainer").show();
  }
	//}
	
	scope.auxiliaryAnyChat("videoFinish");
	//self.location ="http://127.0.0.1/flow-jsnxvtm/resources/auxiliary.html";
}
var videoFinishPhoto = "";//是否拍照时，结束视频标识，1标识是
function setVideoFinishPhoto(val){
	
	videoFinishPhoto = val;
   }

//刷新用户进入队列后，排队等待时的显示信息
function refreshUserWaitingInfo(queueID) {
    var queueUserNum; //当前队列人数
    var beforeUserNum; //排在自己前面的队列人数

    /**获取当前队列人数*/
    queueUserNum = BRAC_ObjectGetIntValue(ANYCHAT_OBJECT_TYPE_QUEUE, queueID, ANYCHAT_QUEUE_INFO_LENGTH);
    //$('#queueMsg1 strong:eq(0)').text(queueUserNum);

    /**获取排在自己前面的用户数*/
    beforeUserNum = BRAC_ObjectGetIntValue(ANYCHAT_OBJECT_TYPE_QUEUE, queueID, ANYCHAT_QUEUE_INFO_BEFOREUSERNUM);
    beforeUserNum = beforeUserNum < 0 ? 0 : beforeUserNum;
    beforeUserNum++;

   // $('#queueMsg1 strong:eq(0)').text(queueUserNum);
    //$('#queueMsg1 strong:eq(1)').text(beforeUserNum);

    //$('#selectList li a[queueid=' + queueID + ']').prev().text(queueUserNum); //队列中当前排队人数填充


}

//录制时间设置
function formatSeconds(value) {
    var hour = 0;  //小时
	var minute = 0; //分钟
	var second = 0;   //秒钟
    var result = "";  //返回值

    second = parseInt(value);
	if(second > 60) {
      minute = parseInt(second / 60);
      second = parseInt(second % 60);
	  if(minute > 60) {
        hour = parseInt(minute / 60);
		minute = parseInt(minute % 60);
        result = parseInt(hour)+ "小时" +parseInt(minute)+ "分" + parseInt(second)+"秒";
	  }
      else{
        result = parseInt(minute)+ "分" + parseInt(second)+"秒";
      }
	}else{
    	result = parseInt(second)+"秒";
    }

	return result;
}




/*******************************************************************************
 * 事件回调部分 *
 ******************************************************************************/

// 异步消息通知，包括连接服务器、登录系统、进入房间等消息
function OnAnyChatNotifyMessage(dwNotifyMsg, wParam, lParam) {
	switch (dwNotifyMsg) {
	case WM_GV_CONNECT:
		OnAnyChatConnect(wParam, lParam);
		break;// 连接
	case WM_GV_LOGINSYSTEM:
		OnAnyChatLoginSystem(wParam, lParam);
		break;// 登录系统
	case WM_GV_ENTERROOM:
		OnAnyChatEnterRoom(wParam, lParam);
		break;// 进入房间
	case WM_GV_ONLINEUSER:
		OnAnyChatRoomOnlineUser(wParam, lParam);
		break;// 线上用户
	case WM_GV_USERATROOM:
		OnAnyChatUserAtRoom(wParam, lParam);
		break;// 在房间的用户
	case WM_GV_LINKCLOSE:
		OnAnyChatLinkClose(wParam, lParam);
		break;// 连接关闭
	case WM_GV_MICSTATECHANGE:
		OnAnyChatMicStateChange(wParam, lParam);
		break;// 改变话筒状态
	case WM_GV_CAMERASTATE:
		OnAnyChatCameraStateChange(wParam, lParam);
		break;// 摄像头状态
	case WM_GV_P2PCONNECTSTATE:
		OnAnyChatP2PConnectState(wParam, lParam);
		break;// p2p连接状态
	case WM_GV_PRIVATEREQUEST:
		OnAnyChatPrivateRequest(wParam, lParam);
		break;// 私有请求
	case WM_GV_PRIVATEECHO:
		OnAnyChatPrivateEcho(wParam, lParam);
		break;// 私有输出
	case WM_GV_PRIVATEEXIT:
		OnAnyChatPrivateExit(wParam, lParam);
		break;// 私有离开
	case WM_GV_USERINFOUPDATE:
		OnAnyChatUserInfoUpdate(wParam, lParam);
		break;// 用户信息更新
	case WM_GV_FRIENDSTATUS:
		OnAnyChatFriendStatus(wParam, lParam);
		break;// 友人状态
	default:
		break;
	}
}



// 收到透明通道传输数据
function OnAnyChatTransBuffer(dwUserId, lpBuf, dwLen) {
	var obj = $.parseJSON(lpBuf);
	if(obj.MSGID.indexOf("AC6004")==0 )
	{
		AddLog("坐席忙，进入队列失败");
		scope.auxiliaryAnyChat("mediaFail");
	}
}

// 收到透明通道（扩展）传输数据
function OnAnyChatTransBufferEx(dwUserId, lpBuf, dwLen, wParam, lParam,dwTaskId) {

}

// 文件传输完成通知
function OnAnyChatTransFile(dwUserId, lpFileName, lpTempFilePath, dwFileLength,wParam, lParam, dwTaskId) {	
	if (intTransFileFlag < 5){
		if (intTransFileFlag == 1){
			TMP_PERPHOTO = lpTempFilePath;
			intTransFileFlag = 2;
			filetrans(TMP_PERIDPICSrc);			
		}else if (intTransFileFlag == 2){
			TMP_PERIDPIC = lpTempFilePath;
			intTransFileFlag = 3;
			filetrans(TMP_PERFRONTPICSrc);			
		}else if (intTransFileFlag == 3){
			TMP_PERFRONTPIC = lpTempFilePath;
			intTransFileFlag = 4;
			filetrans(TMP_PERBACKPICSrc);			
		}else if (intTransFileFlag == 4){
			TMP_PERBACKPIC = lpTempFilePath;
			intTransFileFlag = 5;
			filetrans(TMP_PERPICSrc);			
		}
	}else if (intTransFileFlag == 5){
		TMP_PERPIC = lpTempFilePath;
		scope.auxiliaryAnyChat("lpFileName#"+tmplpFileName);//拍照成功，转换图片名称，跳转流程
		intTransFileFlag = 0;
	}else if (intTransFileFlag == 6){
		TMP_SignPIC = lpTempFilePath;
		//intTransFileFlag = 7;
		subSend1004();
		//filetrans(TMP_FormPICSrc);//远程模式上传表单图片
	}//else if (intTransFileFlag == 7){//远程上传表单返回
		//TMP_FormPIC = lpTempFilePath;
		//scope.auxiliaryAnyChat("ACformPath#"+TMP_FormPIC);
		//filetrans(journalPath);//远程模式上传日志
		//发CA1004
		//subSend1004();
	//}
	else if (intTransFileFlag == 8){//任何模式上传表单返回
	clearTimeout(mSendTextMessageTimeout);
		ACformPath = lpTempFilePath;
		TMP_FormPIC = lpTempFilePath;
		//intTransFileFlag = 10;
		if(lpTempFilePath !="" && lpTempFilePath.length >0)
		{
		 scope.auxiliaryAnyChat("ACformPath#"+ACformPath);
		}else{
			scope.auxiliaryAnyChat("failed");
		}
		
	}
	else if (intTransFileFlag == 9){//上传身份证返回
	clearTimeout(mSendTextMessageTimeout);
		//ACjournalPath = lpTempFilePath;
		if(lpTempFilePath !="" && lpTempFilePath.length >0)
		{
		 scope.auxiliaryAnyChat("submit");
		}else{
			scope.auxiliaryAnyChat("failed");
		}
		
	}
}

// 系统音量改变通知
function OnAnyChatVolumeChange(device, dwCurrentVolume) {

}

// 收到服务器发送的SDK Filter数据
function OnAnyChatSDKFilterData(lpBuf, dwLen) {

}

// 收到录像或拍照完成事件
function OnAnyChatRecordSnapShot(dwUserId, lpFileName, dwParam, bRecordType) {
	AddLog("拍照完成")
	AddLog("OnAnyChatRecordSnapShot:"+lpFileName);
	tmplpFileName = lpFileName;
	intTransFileFlag = 1;	
	filetrans(lpFileName);
	//lpFileName 文件路径
	//var scope = angular.element("#com").scope();
	
	//scope.auxiliaryAnyChat("lpFileName#"+lpFileName);//拍照成功，转换图片名称，跳转流程

}

// 收到录像或拍照完成事件（扩展）
function OnAnyChatRecordSnapShotEx(dwUserId, lpFileName, dwElapse, dwFlags,dwParam, lpUserStr) {

}

/*******************************************************************************
 * AnyChat SDK核心业务流程 *
 ******************************************************************************/

 // 用户进入（离开）房间，dwUserId表示用户ID号，bEnterRoom表示该用户是进入（1）或离开（0）房间
 function OnAnyChatUserAtRoom(dwUserId, bEnterRoom) {
 	AddLog("function OnAnyChatUserAtRoom(dwUserId="+dwUserId+')', LOG_TYPE_NORMAL);

 	//请求对方视频
 		if (bEnterRoom == 1) {
 			//请求对方视频
 			controlVideo(mTargetUserId, GetID("remoteVideoPos"), "ANYCHAT_VIDEO_REMOTE",1);
 			if(mUserType == 1){

 			}
 		} else {
 			if (mUserType == 2) {

 			}
 			if(mTargetUserId==dwUserId)
 				BRAC_LeaveRoom(roomNum);
 		}

 }

// 网络连接已关闭，该消息只有在客户端连接服务器成功之后，网络异常中断之时触发，reason表示连接断开的原因
function OnAnyChatLinkClose(reason, errorcode) {
	ForSession("网络异常中断!请检查网络，reason【 " + reason + " 】,errorcode【 " + errorcode + " 】,请联系相关工作人员!",true);
	AddLog("function OnAnyChatLinkClose(reason: " + reason + ",errorcode: " + errorcode , LOG_TYPE_ERROR);
	GetID('LOADING_GREY_DIV').style.display='none';
}

// 用户的音频设备状态变化消息，dwUserId表示用户ID号，State表示该用户是否已打开音频采集设备（0：关闭，1：打开）
function OnAnyChatMicStateChange(dwUserId, State) {

}

// 用户摄像头状态发生变化，dwUserId表示用户ID号，State表示摄像头的当前状态（0：没有摄像头，1：有摄像头但没有打开，2：打开）
function OnAnyChatCameraStateChange(dwUserId, State) {

}

// 本地用户与其它用户的P2P网络连接状态发生变化，dwUserId表示其它用户ID号，State表示本地用户与其它用户的当前P2P网络连接状态（0：没有连接，1：仅TCP连接，2：仅UDP连接，3：TCP与UDP连接）
function OnAnyChatP2PConnectState(dwUserId, State) {

}

// 用户发起私聊请求，dwUserId表示发起者的用户ID号，dwRequestId表示私聊请求编号，标识该请求
function OnAnyChatPrivateRequest(dwUserId, dwRequestId) {

}

// 用户回复私聊请求，dwUserId表示回复者的用户ID号，errorcode为出错代码
function OnAnyChatPrivateEcho(dwUserId, errorcode) {

}

// 用户退出私聊，dwUserId表示退出者的用户ID号，errorcode为出错代码
function OnAnyChatPrivateExit(dwUserId, errorcode) {

}

// 视频通话消息通知回调函数
function OnAnyChatVideoCallEvent(dwEventType, dwUserId, dwErrorCode, dwFlags,dwParam, szUserStr) {
	switch(dwEventType)
	{
		case BRAC_VIDEOCALL_EVENT_REQUEST:
			//收到视频呼叫请求
			onVideoCallControlRequest(dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr);
			break;
		case BRAC_VIDEOCALL_EVENT_REPLY:
			////视频呼叫请求回复
		    onVideoCallControlReply(dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr);
			break;
		case BRAC_VIDEOCALL_EVENT_START:
			//通话开始
			onVideoCallControlStart(dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr);
			//AllowControl(1);
			break;
		case BRAC_VIDEOCALL_EVENT_FINISH:
			//视频通话结束
		     onVideoCallControlFinish(dwUserId, dwErrorCode, dwFlags, dwParam, szUserStr);
			break;

	}
}

// 用户信息更新通知，dwUserId表示用户ID号，dwType表示更新类别
function OnAnyChatUserInfoUpdate(dwUserId, dwType) {

}

// 好友在线状态变化，dwUserId表示好友用户ID号，dwStatus表示用户的当前活动状态：0 离线， 1 上线
function OnAnyChatFriendStatus(dwUserId, dwStatus) {

}

//业务对象事件通知
function OnAnyChatObjectEvent(dwObjectType, dwObjectId, dwEventType, dwParam1, dwParam2, dwParam3, dwParam4, strParam) {
	//AddLog("OnAnyChatObjectEvent(dwObjectType=" + dwObjectType + ", dwObjectId=" + dwObjectId +  ", dwEventType=" + dwEventType + ")", LOG_TYPE_EVENT);
	switch(dwEventType) {
	    case ANYCHAT_OBJECT_EVENT_UPDATE: OnAnyChatObjectUpdate(dwObjectType, dwObjectId); break;
	    case ANYCHAT_OBJECT_EVENT_SYNCDATAFINISH: OnAnyChatObjectSyncDataFinish(dwObjectType, dwObjectId); break;
		case ANYCHAT_AREA_EVENT_ENTERRESULT:	OnAnyChatEnterAreaResult(dwObjectType, dwObjectId, dwParam1);	break;
		case ANYCHAT_AREA_EVENT_LEAVERESULT:    OnAnyChatLeaveAreaResult(dwObjectType, dwObjectId, dwParam1); break;
		case ANYCHAT_AREA_EVENT_STATUSCHANGE:   OnAnyChatAreaStatusChange(dwObjectType, dwObjectId, dwParam1); break;
		case ANYCHAT_QUEUE_EVENT_STATUSCHANGE:	OnAnyChatQueueStatusChanged(dwObjectType, dwObjectId);			break;
		case ANYCHAT_QUEUE_EVENT_ENTERRESULT:	OnAnyChatEnterQueueResult(dwObjectType, dwObjectId, dwParam1);	break;
		case ANYCHAT_QUEUE_EVENT_LEAVERESULT:	OnAnyChatLeaveQueueResult(dwObjectType, dwObjectId, dwParam1);	break;
		case ANYCHAT_AGENT_EVENT_STATUSCHANGE: OnAnyChatAgentStatusChanged(dwObjectType, dwObjectId, dwParam1); break;
		case ANYCHAT_AGENT_EVENT_SERVICENOTIFY: OnAnyChatServiceStart(dwParam1, dwParam2, dwParam3); break;
		case ANYCHAT_AGENT_EVENT_WAITINGUSER:   OnAnyChatAgentWaitingUser(); break;
		default:
			break;
	}
}

// 离开服务区域通知事件
function OnAnyChatLeaveAreaResult(dwObjectType, dwObjectId, dwErrorCode) {
    AddLog('OnAnyChatLeaveAreaResult(' + dwObjectType + ',' + dwObjectId + ',' + dwErrorCode + ')', LOG_TYPE_EVENT);

    mCurrentAreaId = -1;
}

//营业厅状态变化
function OnAnyChatAreaStatusChange(dwObjectType, dwObjectId, dwErrorCode) {
    AddLog('OnAnyChatAreaStatusChange(' + dwObjectType + ',' + dwObjectId + ',' + dwErrorCode + ')', LOG_TYPE_EVENT);
	if (mUserType == 2) {
	    refreshAgentServiceInfo(mCurrentAreaId);
    }
}

// 队列状态变化
function OnAnyChatQueueStatusChanged(dwObjectType, dwObjectId) {
    AddLog('OnAnyChatQueueStatusChanged(' + dwObjectType + ',' + dwObjectId + ')', LOG_TYPE_EVENT);
    if (mUserType == 2) {
        refreshAgentServiceInfo(mCurrentAreaId);
    }
	if(currentSelectedQueueId == dwObjectId)
		refreshUserWaitingInfo(dwObjectId);
//yantao	refreshQueueInfoDisplay(dwObjectId);
}

// 本地用户离开队列结果
function OnAnyChatLeaveQueueResult(dwObjectType, dwObjectId, dwErrorCode) {
    AddLog('OnAnyChatLeaveQueueResult(' + dwObjectType + ',' + dwObjectId + ',' + dwErrorCode + ')', LOG_TYPE_EVENT);
    if (dwErrorCode == 0) isShowReturnBtn(true);
    currentSelectedQueueName = "";
	currentSelectedQueueId = -1;

}

// 坐席状态变化
function OnAnyChatAgentStatusChanged(dwObjectType, dwObjectId, dwParam1) {
    AddLog('OnAnyChatAgentStatusChanged(' + dwObjectType + ',' + dwObjectId + ',' + dwParam1 + ')', LOG_TYPE_EVENT);
    if (dwObjectType == ANYCHAT_OBJECT_TYPE_AGENT && mCurrentAgentID == dwObjectId) {
        if (dwParam1 == ANYCHAT_AGENT_STATUS_WAITTING) {
            refreshAgentServiceInfo(mCurrentAreaId);

            refreshServicedUserInfo(-1);
            mStartServiceFlag = false;
            $("#LOADING_GREY_DIV span").show();

            isShowReturnBtn(true);
        }else if (dwParam1 == ANYCHAT_AGENT_STATUS_WORKING){
            mStartServiceFlag = true;
        }

    }
}

// 坐席服务开始
function OnAnyChatServiceStart(dwAgentId, clientId, dwQueueId) {
    AddLog('OnAnyChatServiceStart(' + dwAgentId + ',' + clientId + ',' + dwQueueId +')', LOG_TYPE_EVENT);
	if (mUserType == 2 && mSelfUserId == dwAgentId) {
		$("#LOADING_GREY_DIV span").hide();
	    refreshServicedUserInfo(clientId);
		mTargetUserId=clientId;//客户id
		VideoCallRequest(clientId);//呼叫用户
	}
}

//队列里没有客户，坐席端处理方式
function OnAnyChatAgentWaitingUser(){
    AddLog('OnAnyChatAgentWaitingUser()', LOG_TYPE_EVENT);
	if($("#remoteVideoPos").html()==""){
		$('#LOADING_GREY_DIV').hide();
		mStartServiceFlag=false;
		$("#LOADING_GREY_DIV span").show();
		ForSession('当前队列中已没有客户！',true);
	}
}

/*******************************************************************************
 * AnyChat VideoCall流程 *
 ******************************************************************************/

// JavaScript Document
var USER_ONLINE_STATUS=1;						// 用户上线
var USER_OFFLINE_STATUS=0;						// 用户下线

var USERINFO_NAME=1;							// 用户昵称信息
var USERINFO_IP=2;								// 用户IP地址信息

//会话提示信息
function ForSession(message,statue) {
    //$("#Initiative_Call_Div").hide();		// 隐藏正在呼叫层
//    $("#SessionPrompt_Div").show();
//    $("#SessionPrompt_Div").html("<iframe frameborder=0 scrolling=no style='background-color:transparent; z-index: 9999;width: 100%;height: 100%;top:0;left: 0;position: absolute; '></iframe><b>"+message+"</b>");
//    if(statue)$('#SessionPrompt_Div').animate({opacity: "hide"}, 1500);
}

//呼叫用户
function VideoCallRequest(ID) {
    /**向指定的用户发送会话邀请*/
	var errorcode = BRAC_ObjectControl(ANYCHAT_OBJECT_TYPE_AREA, "10001", ANYCHAT_AREA_CTRL_USERENTER, 0, 0, 0, 0, "");//进入营业厅
	//var errorcode2 = BRAC_ObjectControl(ANYCHAT_OBJECT_TYPE_QUEUE, "101", ANYCHAT_QUEUE_CTRL_USERENTER, 0, 0, 0, 0, "");//进入队列
    //var errorcode = BRAC_VideoCallControl(BRAC_VIDEOCALL_EVENT_REPLY, mTargetUserId, 0, 0, 0, "");
    AddLog("BRAC_VideoCallControl(" + BRAC_VIDEOCALL_EVENT_REPLY + "," + mTargetUserId + "," + "0,0,0,''" + ")=" + errorcode, LOG_TYPE_API);

}

//拒绝会话
function RejectRequestBtnClick() {
	//目标用户拒绝会话触发
    var errorcode = BRAC_VideoCallControl(BRAC_VIDEOCALL_EVENT_REPLY, mTargetUserId, GV_ERR_SESSION_REFUSE, 0, 0, "");
    AddLog("BRAC_VideoCallControl(" + BRAC_VIDEOCALL_EVENT_REPLY + "," + mTargetUserId + "," + GV_ERR_SESSION_REFUSE + ",0,0,''" + ")=" + errorcode, LOG_TYPE_API);

    ForSession("拒绝对方请求...",true);
}

//视频呼叫请求发送成功
function onSendVideoCallRequestSucess(mTargetUserId)
{
	this.mTargetUserId=mTargetUserId;
	if(mUserType==2){
		//用户姓名
	    var servicedUserName = BRAC_ObjectGetStringValue(ANYCHAT_OBJECT_TYPE_CLIENTUSER, mTargetUserId, ANYCHAT_OBJECT_INFO_NAME);
	    GetID("Initiative_Call_Div_Content").innerHTML = "正在呼叫 <b style=\"red;\">" + servicedUserName + "</b> 用户，等待对方响应<br /><img src='./img/others/LoadImg.gif'  style='width: 145px;height:30px;' />";
	    $("#Initiative_Call_Div").show();
	    $('#LOADING_GREY_DIV').show();
	}
}
//传送文件
function filetrans(strImage)
{
	//if(mTargetUserId==-1)
	//{
	//	alert("请选择远程用户");
	//	return;
	//}
	AddLog("intTransFileFlag:"+intTransFileFlag);
	AddLog("filetrans:"+strImage);
	if(strImage!="" && strImage!="null"){
		iTaskId=BRAC_TransFile(0, strImage, 0, 0, 128);
	}else{
		if (intTransFileFlag == 1){
			intTransFileFlag = 2;
			filetrans(TMP_PERIDPICSrc);			
		}else if (intTransFileFlag == 2){
			intTransFileFlag = 3;
			filetrans(TMP_PERFRONTPICSrc);			
		}else if (intTransFileFlag == 3){
			intTransFileFlag = 4;
			filetrans(TMP_PERBACKPICSrc);			
		}else if (intTransFileFlag == 4){
			intTransFileFlag = 5;
			filetrans(TMP_PERPICSrc);
		}else if (intTransFileFlag == 5){
			scope.auxiliaryAnyChat("lpFileName#"+tmplpFileName);//拍照成功，转换图片名称，跳转流程
			intTransFileFlag = 0;
		}else if (intTransFileFlag == 6){
			intTransFileFlag = 7;
			filetrans(TMP_FormPICSrc);
		}else if (intTransFileFlag == 7){
			//发CA1004
			subSend1004();
		}
	}
	//alert(iTaskId);
}
//var i=0;
//视频联通时，发送设备信息
function transbuffer(transcode)
{

    var message;
    var data;
    //var scope = angular.element("#com").scope();
    var dtVal = new Date();
    var strYear = dtVal.getFullYear();
    var strMonth = (dtVal.getMonth()+1).toString();
     for (var i=strMonth.length; i<2; i++)
     {
    	 strMonth = '0' + strMonth;
     }
     var strDate = dtVal.getDate().toString();
     for (var i=strDate.length; i<2; i++)
     {
    	 strDate = '0' + strDate;
     }
  var currentDate=strYear + strMonth +strDate;
  var mDevices = getLocalVideoDeivceList();
  var strMDevices = mDevices.toString();
  var BUSYINESSTYPE = "";
  if(reuqestFrom == "flow")
		 {
		 	 BUSYINESSTYPE = "1";
		 }else{
		 	 BUSYINESSTYPE = "0";
		 	}
		 message = {
		      CHANNEL: "66",
		      CHANNELNAME:"VTM",
					MSGID: "CA1002",
					MSGNO: messageJSON.AnyChat_terminalId+currentDate+messageJSON.AnyChat_serial+"CA1002",
					BUSYINESSTYPE:BUSYINESSTYPE,
					VTMNO: messageJSON.AnyChat_terminalId,
					STAFFNO:messageJSON.AnyChat_tellerno,
					STARTTIME:currentDate,
					VTMORG:messageJSON.AnyChat_orgcode,
					VTMORGNAME:"",
					VTMADDRESS:"",
					CURRENTSTEPNO:"",
					CURRENTSTEPNAME:"",
					CUSTOMIP:messageJSON.CUSTOMIP,
					MDEVICES:strMDevices,
					BANKNO:messageJSON.BANKNO
				};
		    data= JSON.stringify(message);
		    //var Msg =  "{\"CHANNEL\":\"66\",\"MSGID\":\"CA1002\",\"MSGNO\":\"10000000000000000001\",\"VTMNO\":\"0001\",\"STAFFNO\":\"1001\",\"STARTTIME\":\"2016-07-22 11:22:33\",\"VTMORG\":\"JSNX-01\",\"VTMORGNAME\":\"江苏农信\",\"VTMADDRESS\":\"南京市建邺区江中东路395号\",\"CURRENTSTEPNO\":\"003\",\"CURRENTSTEPNAME\":\"身份审核\"}";
		    //alert(data);
		    AddLog("发送设备信息："+data)
		   BRAC_SendTextMessage(mTargetUserId, 1,data);
		   scope.auxiliaryAnyChat("videoSuccess#"+messageJSON.AnyChat_terminalId+currentDate+messageJSON.AnyChat_serial+"CA1002");
		   videoSuccessFlag = "true";
		   //scope.auxiliaryAnyChat("CA1002MSGNO#"+messageJSON.AnyChat_terminalId+currentDate+messageJSON.AnyChat_serial+"CA1002");
		   if(reuqestFrom == "flow")
		   {
			  scope.auxiliaryAnyChat("next");//面签流程，视频联通后，控制Media.dsl继续向下执行
		   }else{
		   	//scope.auxiliaryAnyChat("hide");//idle页面或其他页面主动呼叫，隐藏呼叫按钮
		   }
	  
	   
	
	
}
function AllowControl(status) {
    //var ret = obj_tightvnc_ex.AllowControl(status);
	var Msg =  "{\"ASSIST\":\"0\",\"MSGID\":\"CA1005\"}";
	BRAC_SendTextMessage(mTargetUserId, 1,Msg);
	
}

function transbufferCA1001(obj)
{
	
	  var message;
    var data;    
    TMP_PERFRONTPICSrc = obj.PERFRONTPIC;
	TMP_PERBACKPICSrc = obj.PERBACKPIC;
	TMP_PERIDPICSrc = obj.PERIDPIC;
	//TMP_PERPICSrc = obj.PERPIC;
	TMP_PERPICSrc = "";
    //var scope = angular.element("#com").scope();
    //alert(scope);
    //alert(scope.pool.AnyChat_terminalId);
    //alert(eval("("+scope.pool.AnyChat_terminalId+")"));
    var dtVal = new Date();
    var strYear = dtVal.getFullYear();
    var strMonth = (dtVal.getMonth()+1).toString();
     for (var i=strMonth.length; i<2; i++)
     {
    	 strMonth = '0' + strMonth;
     }
     var strDate = dtVal.getDate().toString();
     for (var i=strDate.length; i<2; i++)
     {
    	 strDate = '0' + strDate;
     }
     var currentDate=strYear + strMonth +strDate;
     var BUSYINESSTYPE = "";
     if(reuqestFrom == "flow")
		 {
		 	 BUSYINESSTYPE = "1";
		 }else{
		 	 BUSYINESSTYPE = "0";
		 	}	 	
	  message = {
		      CHANNEL: "66",
					MSGID: "CA1001",
					MSGNO: obj.AnyChat_terminalId+currentDate+obj.AnyChat_serial+"CA1001",
					BUSYINESSTYPE:BUSYINESSTYPE,
					VTMNO: obj.AnyChat_terminalId,
					STAFFNO:obj.AnyChat_tellerno,
					STARTTIME:currentDate,
					SERVICENO:obj.AnyChat_terminalId+currentDate,
					BUSYINESSNO:obj.BUSYINESSNO,
					BUSYINESSNAME:obj.BUSYINESSNAME
				};
		    data= JSON.stringify(message);
		    //var Msg =  "{\"CHANNEL\":\"66\",\"MSGID\":\"CA1002\",\"MSGNO\":\"10000000000000000001\",\"VTMNO\":\"0001\",\"STAFFNO\":\"1001\",\"STARTTIME\":\"2016-07-22 11:22:33\",\"VTMORG\":\"JSNX-01\",\"VTMORGNAME\":\"江苏农信\",\"VTMADDRESS\":\"南京市建邺区江中东路395号\",\"CURRENTSTEPNO\":\"003\",\"CURRENTSTEPNAME\":\"身份审核\"}";
		    //alert(data);
		    AddLog("发送业务流水："+data)
		   BRAC_SendTextMessage(mTargetUserId, 1,data);
		   //scope.auxiliaryAnyChat("submit");//测试用
	
}

//客户信息推送
function transbufferCA1003(obj)
{
    var message;
    var data;
    //var scope = angular.element("#com").scope();
    var dtVal = new Date();
    var strYear = dtVal.getFullYear();
    var strMonth = (dtVal.getMonth()+1).toString();
     for (var i=strMonth.length; i<2; i++)
     {
    	 strMonth = '0' + strMonth;
     }
     var strDate = dtVal.getDate().toString();
     for (var i=strDate.length; i<2; i++)
     {
    	 strDate = '0' + strDate;
     }
  var currentDate=strYear + strMonth +strDate;
		  message = {
		      CHANNEL: "66",
					MSGID: "CA1003",
					MSGNO: eval("scope.pool.AnyChat_terminalId")+currentDate+eval("scope.pool.AnyChat_serial")+"CA1003",
					VTMNO: eval("scope.pool.AnyChat_terminalId"),
					STARTTIME:currentDate,
					CUSTCARD:"",
					CUSTNAME:obj.name,
					CUSTSEX:obj.genderC,
					ETHNICITY:obj.nationality,
					BIRTHDAY:obj.brithday,
					ADDRESS:obj.address,
					MOBILENO:obj.mobile,
					CUSTPTYPE:"01",
					CUSTPID:obj.pid,
					ISSUER:obj.issueoffice,
					CREDBGNDATE:obj.issuedate,
					CREDENDDATE:obj.abatedate,
					PERFRONTPIC:TMP_PERFRONTPIC,
					PERBACKPIC:TMP_PERBACKPIC,
					PERPIC:TMP_PERPIC,
					PERIDPIC:TMP_PERIDPIC,
					PERPHOTO:TMP_PERPHOTO
				};
		    data= JSON.stringify(message);
		    //var Msg =  "{\"CHANNEL\":\"66\",\"MSGID\":\"CA1002\",\"MSGNO\":\"10000000000000000001\",\"VTMNO\":\"0001\",\"STAFFNO\":\"1001\",\"STARTTIME\":\"2016-07-22 11:22:33\",\"VTMORG\":\"JSNX-01\",\"VTMORGNAME\":\"江苏农信\",\"VTMADDRESS\":\"南京市建邺区江中东路395号\",\"CURRENTSTEPNO\":\"003\",\"CURRENTSTEPNAME\":\"身份审核\"}";
		    //alert(data);
		    AddLog("发送客户信息："+data)
		   BRAC_SendTextMessage(mTargetUserId, 1,data);
						 //scope.auxiliaryAnyChat("rePhoto");//测试重新拍照
						 //scope.auxiliaryAnyChat("reIDCReader");//测试重新读取身份证
		  //scope.auxiliaryAnyChat("submit");//测试用，本地测试，发送数据没有返回
	
	
}

//传送表单信息
function transbufferCA1004(obj)
{
	obj1004 = obj;
	intTransFileFlag = 6;
	TMP_FormPICSrc = obj1004.perImagePath;
	//TMP_FormPICSrc = "d:/2.png";
	//if(obj1004.MANAGERREFUSE != "1"){
		filetrans(TMP_SignPICSrc);
	//}else{
		//subSend1004();
	//}
}

var mSendTextMessageTimeout = -1;//发送接口计时器
var mSendTextMessageTimeouter = 30;//超时时间

function sendTextMessageTimeout()
{
	 clearTimeout(mSendTextMessageTimeout);
	 mSendTextMessageTimeout = setTimeout(function () {
		mSendTextMessageTimeouter = 30;
		scope.auxiliaryAnyChat("failed");
		},mSendTextMessageTimeouter*1000);
}


//上传表单图片到anychat服务器，本地模式调用，远程模式在发送表单信息前已经上传
//obj 表单存放本地的地址
function upFile(obj)
{
	mSendTextMessageTimeouter = 30;
	sendTextMessageTimeout();
	if(obj.mode == "form")
	{
		if(videoInitFlag == 1)
	    {
	     intTransFileFlag = 8;
	     filetrans(obj.perImagePath);
	    }
	}else{
		if(videoInitFlag == 1)
		{
		 intTransFileFlag = 9;
		 iTaskId = BRAC_TransFile(0, obj.perIDCardImagePath, 0, 0, 128);//上传日志	
		}
	}
	
	

}

function subSend1004(){
    var message;
    var data;
    var formMsg;
	var dtVal = new Date();
    var strYear = dtVal.getFullYear();
    var strMonth = (dtVal.getMonth()+1).toString();
     for (var i=strMonth.length; i<2; i++)
     {
    	 strMonth = '0' + strMonth;
     }
     var strDate = dtVal.getDate().toString();
     for (var i=strDate.length; i<2; i++)
     {
    	 strDate = '0' + strDate;
     }
  var currentDate=strYear + strMonth +strDate;
    //var scope = angular.element("#com").scope();
    if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="OpenCard"){
	   	formMsg={
	   				FIELD1:obj1004.cardNo,
					FIELD5:obj1004.print_terminalSerial,
					FIELD6:obj1004.address,
				  	FIELD7:obj1004.mobile,				  	
				  	FIELD10:obj1004.job    	
	    	};
    }
    if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="FinancialSign"){
    		formMsg={
						FIELD1:obj1004.cardNo,
						FIELD2:obj1004.certType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name,
						FIELD5:obj1004.custmanage,
						FIELD6:obj1004.address,
						FIELD7:obj1004.telephone,
						FIELD8:obj1004.mobile,
						FIELD9:obj1004.agentname,
						FIELD21:obj1004.mode,
						FIELD22:obj1004.custtyp,
						FIELD23:obj1004.cardflag				
	    	};
    }
	if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="SmsSign"){
	   	formMsg={
						FIELD1:obj1004.cardNo,
						FIELD2:obj1004.idType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name,
						FIELD8:obj1004.mobile,
						FIELD21:obj1004.ST_QY_packId
	    	
	    	};
    }
	if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="AtmTransSign"){
	   	formMsg={
						FIELD1:obj1004.cardNo,
						FIELD2:obj1004.idType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name,
						FIELD21:obj1004.banktype,
						FIELD22:obj1004.transno,
						FIELD23:obj1004.busitype,
						FIELD24:obj1004.ATS_funCode,
						FIELD25:obj1004.transAmount,
						FIELD26:obj1004.ATS_enddate
	    	
	    	};
    }
	if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="EBankSign"){
	   	formMsg={
						FIELD1:obj1004.cardNo,
						FIELD2:obj1004.idType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name,
						FIELD8:obj1004.mobile,
						FIELD11:obj1004.ST_TRFOneLimitAmount,
						FIELD12:obj1004.ST_TRFDayLimitAmount,
						FIELD13:obj1004.ST_MessOneLimitAmount,
						FIELD14:obj1004.ST_MessDayLimitAmount,
						FIELD15:obj1004.PIsEBank,
						FIELD16:obj1004.PIsMobileBank	
	    	
	    	};
    }
	if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="DynamicTokenChange"){
	   	formMsg={
						FIELD1:obj1004.cardNo,
						FIELD2:obj1004.idType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name,
						FIELD8:obj1004.mobile,
						CUSTID:obj1004.ST_CifSeq,
						FIELD17:obj1004.CCustomUkeyNo	
	    	
	    	};
    }
	if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="DynamicTokenUnbind"){
	   	formMsg={
						FIELD1:obj1004.cardNo,
						FIELD2:obj1004.idType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name,
						FIELD8:obj1004.mobile,
						CUSTID:obj1004.ST_CifSeq,
						FIELD17:obj1004.CCustomUkeyNo	
	    	
	    	};
    }
	if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="DynamicTokenBind"){
	   	formMsg={
						FIELD1:obj1004.cardNo,
						FIELD2:obj1004.idType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name,
						FIELD8:obj1004.mobile,
						CUSTID:obj1004.ST_CifSeq
	    	};
    }
	if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="PhoneBankSign"){
	   	formMsg={
						FIELD1:obj1004.cardNo,
						FIELD2:obj1004.idType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name,
						FIELD7:obj1004.mobile,
						FIELD11:obj1004.ST_PhoneOneLimitAmount,
						FIELD12:obj1004.ST_PhoneDayLimitAmount
						
	    	};
    }
	if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="CustInfoModify"){
	   	formMsg={
						FIELD2:obj1004.idType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name,
						FIELD6:obj1004.address,
						FIELD7:obj1004.telephone,
						FIELD8:obj1004.mobile,
						FIELD28:obj1004.ST_EconTyp,
						FIELD29:obj1004.ST_StayPostcode
	    	};
    }
	if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="CardLoss"){
	   	formMsg={
						FIELD1:obj1004.cardNo,
						FIELD2:obj1004.idType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name,
						FIELD8:obj1004.mobile,
						FIELD32:obj1004.ST_ManaCertType,
						FIELD33:obj1004.ST_ManaCertId,
						FIELD34:obj1004.ST_LostType,
						FIELD35:obj1004.ST_CanCode,
						FIELD37:obj1004.cardlossFlag
	    	};
    }
	if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="CardPwdReset"){
	   	formMsg={
						FIELD1:obj1004.cardNo,
						FIELD2:obj1004.idType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name
	    	};
    }
    if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="SocialActive"){
	   	formMsg={
						FIELD1:obj1004.cardNo,
						FIELD2:obj1004.idType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name
	    	};
    }
    if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="RemoveFreeze"){
	   	formMsg={
						FIELD1:obj1004.cardNo,
						FIELD2:obj1004.idType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name
	    	};
    }
	if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="CardUnblind"){
	   	formMsg={
						FIELD1:obj1004.cardNo,
						FIELD2:obj1004.idType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name
	    	};
    }
	if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="CardChange"){
	   	formMsg={
						FIELD1:obj1004.cardNo,
						FIELD2:obj1004.idType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name,
						FIELD31:obj1004.ST_RepCardType,
						FIELD36:obj1004.ST_ICCrdMode
	    	};
    }
	if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="LocalCardActive"){
	   	formMsg={
						FIELD1:obj1004.cardNo,
						FIELD2:obj1004.idType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name
	    	};
    }
	if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="CreditCardActive"){
	   	formMsg={
						FIELD1:obj1004.cardNo,
						FIELD2:obj1004.idType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name
	    	};
    }
	if(obj1004.BUSYINESSNO != null && obj1004.BUSYINESSNO=="SocialLoss"){
	   	formMsg={
						FIELD1:obj1004.payeracc,
						FIELD2:obj1004.idType,
						FIELD3:obj1004.pid,
						FIELD4:obj1004.name,
						FIELD37:obj1004.cardlossFlag
	    	};
    }
    var formData = JSON.stringify(formMsg);
		  message = {
		      CHANNEL: "66",
					MSGID: "CA1004",
					MSGNO: obj1004.AnyChat_terminalId+currentDate+obj1004.AnyChat_serial+"CA1004",
					VTMNO: obj1004.AnyChat_terminalId,
					SIGNPIC:TMP_SignPIC,
					BUSYINESSINFOTABLE:TMP_FormPIC,
					BUSYINESSNO:obj1004.BUSYINESSNO,
					BUSYINESSNAME:obj1004.BUSYINESSNAME,
					ADDRESS:obj1004.address,
					MOBILENO:obj1004.mobile,
					BUSYINESSDATA:formData,
					MANAGERREFUSE:obj1004.MANAGERREFUSE
				};
		    data= JSON.stringify(message);
		    //var Msg =  "{\"CHANNEL\":\"66\",\"MSGID\":\"CA1002\",\"MSGNO\":\"10000000000000000001\",\"VTMNO\":\"0001\",\"STAFFNO\":\"1001\",\"STARTTIME\":\"2016-07-22 11:22:33\",\"VTMORG\":\"JSNX-01\",\"VTMORGNAME\":\"江苏农信\",\"VTMADDRESS\":\"南京市建邺区江中东路395号\",\"CURRENTSTEPNO\":\"003\",\"CURRENTSTEPNAME\":\"身份审核\"}";
		    //alert(data);
		    AddLog("发送表单信息："+data)
		   BRAC_SendTextMessage(mTargetUserId, 1,data);
		   //scope.auxiliaryAnyChat("submit");//测试用，本地测试，发送数据没有返回
			if(obj1004.MANAGERREFUSE == "1"){
				scope.auxiliaryAnyChat("submit");
			}
}


function rePhoto()
{
	BRAC_SetSDKOption(BRAC_SO_SNAPSHOT_TMPDIR,"d:");
	BRAC_SnapShot(-1, 0, 0);
}

// 收到文字消息,
function OnAnyChatTextMessage(dwFromUserId, dwToUserId, bSecret, lpMsgBuf,dwLen) {
	//lpMsgBuf 接口返回数据json
	//var scope = angular.element("#com").scope();
	AddLog("收到客户信息返回:"+lpMsgBuf);
	var obj = $.parseJSON(lpMsgBuf);
        AddLog(lpMsgBuf, "");
	if(obj.MSGID.indexOf("AC6003")==0 )//业务流水推送完，返回拍照标识
	{
		AddLog("业务流水审核结束并执行拍照");
	  BRAC_SetSDKOption(BRAC_SO_SNAPSHOT_TMPDIR,"d:");
	  BRAC_SnapShot(-1, 0, 0);
	  //var tags =BRAC_RECORD_FLAGS_SNAPSHOT+ANYCHAT_RECORD_FLAGS_USERFILENAME;
	  //var filname = '{"filename":"test"}';

	  //BRAC_StreamRecordCtrlEx(-1,1,tags,0,filname);
	}else if(obj.MSGID.indexOf("AC6001")==0 )//客户信息推送完，判断审核结果
		{
			if(obj.IDENTIFYRESULT == "0")//审核通过
			{
				AddLog("客户信息审核通过");
				scope.auxiliaryAnyChat("submit");
			}else if(obj.IDENTIFYRESULT == "1")//不通过
				{
					AddLog("客户信息审核不通过");
					scope.auxiliaryAnyChat("failed");
					
				}else if(obj.IDENTIFYRESULT == "2")//重新读取身份证
					{
						AddLog("客户信息审核结果重新读取身份证");
						scope.auxiliaryAnyChat("reIDCReader");
						
					}else if(obj.IDENTIFYRESULT == "3")//重新拍照
						{
							AddLog("客户信息审核重新拍照");
							scope.auxiliaryAnyChat("rePhoto");
						}
			
		}else if(obj.MSGID.indexOf("AC6002")==0 )//表单信息推送完，判断审核结果
		{
			if(obj.BUSYINESSCHACKRESULT == "0")//审核通过
			{
				AddLog("表单信息审核通过");
				scope.auxiliaryAnyChat("submit");
			}else if(obj.BUSYINESSCHACKRESULT == "1")//不通过
				{
					AddLog("表单信息审核不通过");
					scope.auxiliaryAnyChat("failed");
					
				}else if(obj.BUSYINESSCHACKRESULT == "2")//允许重新操作
					{
						AddLog("表单信息审核结果重新发送");
						scope.auxiliaryAnyChat("reWriter");
						
					}
			
		}else if(obj.MSGID.indexOf("AC6006")==0 )//满意度调查
		{
			if(obj.STATUS == "1")//需要进行满意度调查
			{
				AddLog("需要进行满意度调查");
				scope.auxiliaryAnyChat("Statisfied");
			}
			
		}else if(obj.MSGID.indexOf("AC6005")==0 )//坐席端控制展示视频或者图片
		{
			//if("local" == authorizedMode)//如果是本地审核,
			//{
				//return;
			//}
			if(obj.STATUS == "0")//展示图片
			{
				AddLog("表单信息审核通过");
				//var imagePath = obj.IMAGEPATH;
				//var basePath = "ftp://"+mDefaultFTPUser+":"+mDefaultFTPPass+"@"+mDefaultFTPAddr;
		    //var finalPath = basePath + imagePath;
		    //GetID("remoteImage").src=finalPath;
		    //$("#remoteVideoPos").hide();
		    //$("#remoteImagePos").show();
		    jpgORvideo = "jpg";
		    //var player = document.getElementById("mediaPlayer1");
	    	//player.play();
		    $("#com").hide();
        $("#videoContainer").show();
	      //controlVideo(mSelfUserId, GetID("localVideoPos"), "ANYCHAT_VIDEO_LOCAL",0);
			}else if(obj.STATUS == "1")//显示视频
				{
					AddLog("显示坐席视频");
					//$("#remoteImagePos").hide();
					//$("#remoteVideoPos").show();
					jpgORvideo = "video";
					//var player = document.getElementById("mediaPlayer1");
	    	  //player.stop();
		      $("#com").show();
          $("#videoContainer").hide();
	        //controlVideo(mSelfUserId, GetID("localVideoPos"), "ANYCHAT_VIDEO_LOCAL",1);
					//controlVideo(mTargetUserId, GetID("remoteVideoPos"), "ANYCHAT_VIDEO_REMOTE",1);
					
				}
			
		}
	//alert(dwFromUserId+"   "+dwToUserId+"    "+bSecret+"    "+lpMsgBuf);
}

function desktopParamsSetting(deviceIdx) {	
	// 设置本地视频编码的码率（如果码率为0，则表示使用质量优先模式）	
	BRAC_SetUserStreamInfo(-1,deviceIdx,BRAC_SO_LOCALVIDEO_BITRATECTRL,1200000);
	// 设置本地视频编码的质量	
	BRAC_SetUserStreamInfo(-1,deviceIdx,BRAC_SO_LOCALVIDEO_QUALITYCTRL,3);
	// 设置本地视频采集分辨率
	BRAC_SetUserStreamInfo(-1,deviceIdx,BRAC_SO_LOCALVIDEO_WIDTHCTRL, 1920);
	BRAC_SetUserStreamInfo(-1,deviceIdx,BRAC_SO_LOCALVIDEO_HEIGHTCTRL, 1280);
	// 设置本地视频编码的帧率	
	BRAC_SetUserStreamInfo(-1,deviceIdx,BRAC_SO_LOCALVIDEO_FPSCTRL,20);
	// 设置本地视频编码的关键帧间隔	
	BRAC_SetUserStreamInfo(-1,deviceIdx,BRAC_SO_LOCALVIDEO_GOPCTRL, 80);
	// 设置视频编码预设参数（值越大，编码质量越高，占用CPU资源也会越高）	
	BRAC_SetUserStreamInfo(-1,deviceIdx,BRAC_SO_LOCALVIDEO_PRESETCTRL,3);
	// 让视频参数生效   
	BRAC_SetUserStreamInfo(-1,deviceIdx,BRAC_SO_LOCALVIDEO_APPLYPARAM,1);	
}

//获取用户端的视频设备
function getLocalVideoDeivceList(){
	BRAC_SetSDKOption(BRAC_SO_CORESDK_SCREENCAMERACTRL,1); //显示共享桌面
	mDevices = BRAC_EnumDevices(BRAC_DEVICE_VIDEOCAPTURE);	
	return mDevices;
}

//开启用户端本地视频（包括共享桌面）
function startLocalVideo(){
	var videoDeviceList = getLocalVideoDeivceList();
	for(var i=0; i < videoDeviceList.length; i++){
		var streamIdx = i;
		BRAC_SetUserStreamInfo(-1, streamIdx, BRAC_SO_LOCALVIDEO_DEVICENAME, videoDeviceList[i]);		
		if(videoDeviceList[i].indexOf("Native Screen Camera") == -1){
			//BRAC_SetVideoPosEx(mSelfUserId, GetID("localVideoPos"), "ANYCHAT_VIDEO_LOCAL", streamIdx); // 设置视频显示位置
			//desktopParamsSetting(streamIdx);
		}else{			
			desktopParamsSetting(streamIdx);
		}			
		BRAC_UserCameraControlEx(-1, 1, streamIdx, 0, "");
		BRAC_UserSpeakControlEx(-1, 1, streamIdx, 0, "");		
	}	
}
