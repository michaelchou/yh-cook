//var mDefaultServerAddr = "66.3.49.61";		    // 默认服务器地址
//var mDefaultServerPort = 8912;					// 默认服务器端口号
var mDefaultServerAddr = "127.0.0.1";		    // 默认服务器地址
var mDefaultServerPort = 8906;					// 默认服务器端口号
var mUserName = "yihua-vtm1";
var mPassword = "";
var mSelfUserId = -1;                           // 本地用户ID
var mPriority = 10;                             // 用户优先级
var mTargetUserId = -1;                         // 目标用户ID（请求了对方的音视频）
var mUserType = 1;                              // 用户类型 1为客户,2为坐席
var mObjectInitFlag=0;                          // 对象初始化标识(用户，坐席)
var mCurrentAreaId = 10001;                     // 营业厅号
var mStartServiceFlag=false;                    // 开始服务标志，True表示已开始服务
var mCurrentAgentID = -1;                       // 当前座席ID
var mQueueListName="";                          // 队列名称
var mQueueWaitingTimer = -1;                    // 排队等待定时器
var mRefreshVolumeTimer = -1;                   // 实时音量大小定时器

// 日志记录类型，在日志信息栏内显示不同的颜色
var LOG_TYPE_NORMAL = 0;
var LOG_TYPE_API = 1;
var LOG_TYPE_EVENT = 2;
var LOG_TYPE_ERROR = 3;

//当前被选择的队列名称
var currentSelectedQueueName = "";
var currentSelectedQueueId = -1;

//服务区域(营业厅)ID数组
var areaIdArray = null;
var areaArrayIdx = 0;

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
	EBCommonCtrl.AppendEJournal("jcols_log.txt", "主动呼叫："+message);
//    GetID("LOG_DIV_CONTENT").innerHTML += message + "&nbsp" + GetTheTime().fontcolor("#333333") + "<br />";
//	GetID("LOG_DIV_CONTENT").scrollTop = GetID("LOG_DIV_CONTENT").scrollHeight;
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

function MediaInit() {
	// 检查是否安装了插件
	var NEED_ANYCHAT_APILEVEL = "0"; // 定义业务层需要的AnyChat
	EBCommonCtrl.AppendEJournal("jcols_log.txt","主动呼叫开始:");
	// API Level
	var errorcode = BRAC_InitSDK(NEED_ANYCHAT_APILEVEL); // 初始化插件（返回成功(0)或插件版本号太低的编号）
	//AddLog("BRAC_InitSDK(" + NEED_ANYCHAT_APILEVEL + ")=" + errorcode, LOG_TYPE_API);
	if (errorcode == GV_ERR_SUCCESS) {// 安装成功的情况下
		 setTimeout("MediaLogin()",1000);
		// BRAC_SetSDKOption(BRAC_SO_CORESDK_SCREENCAMERACTRL,1);//显示桌面
//		AddLog("AnyChat Plugin Version:" + BRAC_GetVersion(0), LOG_TYPE_NORMAL);
//		AddLog("AnyChat SDK Version:" + BRAC_GetVersion(1), LOG_TYPE_NORMAL);
//		AddLog("Build Time:" + BRAC_GetSDKOptionString(BRAC_SO_CORESDK_BUILDTIME), LOG_TYPE_NORMAL);
	} else { // 没有安装插件，或是插件版本太旧
		ForSession("BRAC_InitSDK error!", true);
	}
}


function MediaLogin() {
	/**连接服务器*/
	BRAC_Connect(mDefaultServerAddr, mDefaultServerPort);
	/**登入anychat*/
	var loginTag = BRAC_Login(mUserName, mPassword, 0);
    if(loginTag == 0)
    {
    	VideoCallRequest("0");
    }else{
    }
}

// 客户端连接服务器，bSuccess表示是否连接成功，errorcode表示出错代码
function OnAnyChatConnect(bSuccess, errorcode) {
	  AddLog("连接成功");
    AddLog("OnAnyChatConnect(errorcode=" + errorcode + ")", LOG_TYPE_EVENT);
	if (errorcode == 0) {

	} else {

	}
}

// 客户端登录系统，dwUserId表示自己的用户ID号，errorcode表示登录结果：0 成功，否则为出错代码，参考出错代码定义
function OnAnyChatLoginSystem(dwUserId, errorcode) {
	  AddLog("登录成功");
    AddLog("OnAnyChatLoginSystem(userid=" + dwUserId + ", errorcode=" + errorcode + ")", LOG_TYPE_EVENT);
	if (errorcode == 0) {
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
		ForSession("Client logon failure!", true);
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
			MediaEnterQueue();
        } else if(mUserType == 2) {			//坐席

        }
	}
}

function MediaEnterQueue() {
	var currentSelectedQueueId = 101;
	/**进入队列*/
	var errorcode = BRAC_ObjectControl(ANYCHAT_OBJECT_TYPE_QUEUE, currentSelectedQueueId, ANYCHAT_QUEUE_CTRL_USERENTER, 0, 0, 0, 0, "");
	AddLog("进入队列");
	AddLog("BRAC_ObjectControl(" + ANYCHAT_OBJECT_TYPE_QUEUE + "," + currentSelectedQueueId + "," + ANYCHAT_QUEUE_CTRL_USERENTER + ",0,0,0,0,''" + ")=" + errorcode, LOG_TYPE_API);
}

// 本地用户进入队列结果
function OnAnyChatEnterQueueResult(dwObjectType, dwObjectId, dwErrorCode) {
	AddLog("本地用户进入队列结果");
  AddLog('OnAnyChatEnterQueueResult(' + dwObjectType + ',' + dwObjectId + ',' + dwErrorCode + ')', LOG_TYPE_EVENT);
	currentSelectedQueueId = dwObjectId;
	currentSelectedQueueName = BRAC_ObjectGetStringValue(ANYCHAT_OBJECT_TYPE_QUEUE, dwObjectId, ANYCHAT_OBJECT_INFO_NAME);
	//$("#queueMsg1").show(); //重置显示排队信息
	//$("#callLayer").show(); //显示弹出窗口
    //$("#queueMsg1 strong:eq(2)").text(0); //清零排队时间
     clearInterval(mQueueWaitingTimer);
     mQueueWaitingTimer = setInterval(function () {
         var time = formatSeconds(BRAC_ObjectGetIntValue(ANYCHAT_OBJECT_TYPE_QUEUE, currentSelectedQueueId, ANYCHAT_QUEUE_INFO_WAITTIMESECOND));
         //$("#queueMsg1 strong:eq(2)").text(time);
     }, 1000);
}

function MediaLeaveQueue() {
	/**离开队列*/
	var errorcode = BRAC_ObjectControl(ANYCHAT_OBJECT_TYPE_QUEUE, currentSelectedQueueId, ANYCHAT_QUEUE_CTRL_USERLEAVE, 0, 0, 0, 0, "");
	AddLog("离开队列");
	AddLog("BRAC_ObjectControl(" + ANYCHAT_OBJECT_TYPE_QUEUE + "," + currentSelectedQueueId + "," + ANYCHAT_QUEUE_CTRL_USERLEAVE + ",0,0,0,0,''" + ")=" + errorcode, LOG_TYPE_API);
	$("#callLayer").hide(); //隐藏弹出窗口
//	var scope = angular.element(main).scope();
//	scope.action("mediaFail");

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
			clearInterval(mQueueWaitingTimer);
			ForSession("用户主动放弃会话", true);
			mStartServiceFlag = false;
			break;
		case GV_ERR_SESSION_OFFLINE:
		    ForSession("目标用户不在线",true);
			break;
		case GV_ERR_SESSION_BUSY:
			/*CancelCall();*/
			ForSession("目标用户忙", true);
			mStartServiceFlag = false;
			break;
		case GV_ERR_SESSION_REFUSE:
			ForSession("目标用户拒绝会话", true);
			mStartServiceFlag = false;
			break;
		case GV_ERR_SESSION_TIMEOUT:
			CancelCall();
		 	ForSession("会话请求超时",true);
			break;
		case GV_ERR_SESSION_DISCONNECT:
			ForSession("网络断线",true);
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
		    var videoHtml='<div id="VideoShowDiv" style="display:block;margin-left:-80px;">'+
					'<div id="remoteVideoPos" class="videoshow0"></div>'+
					'<div id="remoteAudioVolume" style="width:480px;height:5px;top:370px;left: 21px;"></div>'+
					'<div id="localVideoPos" class="videoshow1"></div>'+
					'<div id="localAudioVolume" style="width:480px;height:5px;top:370px;left: 517px;"></div>'+
					'<div id="div_username0" uid="" class="ShowName" style="left: 21px;">' + agentUserName + '(坐席)</div>' +
					'<div id="div_username1" uid="" class="ShowName" style="left:517px">' + myUserName + '(自己)</div>' +
				//'<b style="position: absolute;bottom: -40px;right: 30px;font-size: 18px;"><a id="hangUp" class="Buttons" onclick="MediaHangUp()"></a></b>'+
			'</div>';

//			var videoHtml='<div id="VideoShowDiv" style="display:block;margin-left:-80px;width:1px;height:1px;">'+
//					'<div id="remoteVideoPos" style="visibility:none;width:1px;height:1px;"  class="videoshow0"></div>'+
//					'<div id="remoteAudioVolume" style="visibility:none;width:480px;height:5px;left: 21px;"></div>'+
//					'<div id="localVideoPos"  class="videoshow1"></div>'+
//					'<div id="localAudioVolume" style="width:480px;height:5px;top:370px;left: 517px;"></div>'+
//					'<div id="div_username0"  uid="" class="ShowName" style="left: 21px;">' + agentUserName + '(坐席)</div>' +
//					'<div id="div_username1"  uid="" class="ShowName" style="left:517px">' + myUserName + '(自己)</div>' +
//					'<b style="position: absolute;bottom: -40px;right: 30px;font-size: 18px;"><a id="hangUp" class="Buttons" onclick="MediaHangUp()"></a></b>'+
//				'</div>';
		  $("#tips").hide(); 
			$("#videoCallContent").html(videoHtml);//填充视频会话层
			$("#videoCall").show();
		}
		
		//打开本地视频
		controlVideo(mSelfUserId, GetID("localVideoPos"), "ANYCHAT_VIDEO_LOCAL",1);
		setVolumeTimer();//设置音量感应
		//transbuffer();
		//alert(mTargetUserId)
//		var scope = angular.element(main).scope();
//		//scope.anychatID(mTargetUserId);
//    	scope.action("mediaFail");

	}else{
		AddLog("OnAnyChatEnterRoom(dwRoomId: "+dwRoomId+',errorcode: '+errorcode + ')', LOG_TYPE_ERROR);
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
    //var scope = angular.element(main).scope();
    //scope.auxiliaryEnd();
	//语音操作
    errorcode = BRAC_UserSpeakControl(uid, state);
    AddLog("语音操作");
    AddLog("BRAC_UserSpeakControl(" + uid + "," + state + ")=" + errorcode, LOG_TYPE_API);

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

	//语音操作
 errorcode = BRAC_UserSpeakControl(uid, state);
 AddLog("语音操作");
 AddLog("BRAC_UserSpeakControl(" + uid + "," + state + ")=" + errorcode, LOG_TYPE_API);
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
	clearInterval(mRefreshVolumeTimer); // 清除实时音量显示计时器

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
		clearInterval(mQueueWaitingTimer);
	}else if(mUserType==2){

	}
	//关闭本地视频
	//controlVideo(mSelfUserId, GetID("localVideoPos"), "ANYCHAT_VIDEO_LOCAL",0);
	clearInterval(mRefreshVolumeTimer); // 清除实时音量显示计时器
	$("#remoteVideoPos").text("");
	$("#localVideoPos").text("");
	ForSession("会话结束...", true); // 提示层

	mStartServiceFlag = false;
	self.location ="http://127.0.0.1/flow-jsnxvtm/resources/auxiliary.html";
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

// 收到文字消息,
function OnAnyChatTextMessage(dwFromUserId, dwToUserId, bSecret, lpMsgBuf,dwLen) {
	alert(dwFromUserId+"   "+dwToUserId+"    "+bSecret+"    "+lpMsgBuf);
}

// 收到透明通道传输数据
function OnAnyChatTransBuffer(dwUserId, lpBuf, dwLen) {

}

// 收到透明通道（扩展）传输数据
function OnAnyChatTransBufferEx(dwUserId, lpBuf, dwLen, wParam, lParam,dwTaskId) {

}

// 文件传输完成通知
function OnAnyChatTransFile(dwUserId, lpFileName, lpTempFilePath, dwFileLength,wParam, lParam, dwTaskId) {

}

// 系统音量改变通知
function OnAnyChatVolumeChange(device, dwCurrentVolume) {

}

// 收到服务器发送的SDK Filter数据
function OnAnyChatSDKFilterData(lpBuf, dwLen) {

}

// 收到录像或拍照完成事件
function OnAnyChatRecordSnapShot(dwUserId, lpFileName, dwParam, bRecordType) {

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
	var errorcode2 = BRAC_ObjectControl(ANYCHAT_OBJECT_TYPE_QUEUE, "101", ANYCHAT_QUEUE_CTRL_USERENTER, 0, 0, 0, 0, "");//进入队列
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
function filetrans()
{
	//if(mTargetUserId==-1)
	//{
	//	alert("请选择远程用户");
	//	return;
	//}
	iTaskId=BRAC_TransFile(mTargetUserId, "D:/FaceImg.jpg", 0, 0, 0);
	//alert(iTaskId);
}

//传送透明通道数据
function transbuffer()
{
//	if(mTargetUserId==-1)
//	{
//		alert("请选择远程用户");
//		return;
//	}
	 var message = {
	        	name: "zhou",
				pid: "321322",
				mobile: "1234",
				address: "nanjing"
			};
	    var data= JSON.stringify(message);
	    var Msg =  "{\"CHANNEL\":\"66\",\"MSGID\":\"CA1002\",\"MSGNO\":\"10000000000000000001\",\"VTMNO\":\"0001\",\"STAFFNO\":\"1001\",\"STARTTIME\":\"2016-07-22 11:22:33\",\"VTMORG\":\"JSNX-01\",\"VTMORGNAME\":\"江苏农信\",\"VTMADDRESS\":\"南京市建邺区江中东路395号\",\"CURRENTSTEPNO\":\"003\",\"CURRENTSTEPNAME\":\"身份审核\"}";
	    alert(mTargetUserId);
	    BRAC_SendTextMessage(mTargetUserId, 1,Msg);
	    var scope = angular.element(main).scope();
	    scope.auxiliaryAnyChat("submit");
	    //scope.action("submit");
	
	
}
