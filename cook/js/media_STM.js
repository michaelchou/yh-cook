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
	try{
	  EBCommonCtrl.AppendEJournal("jcols_log.txt",message);
	}catch(e){
		
	}
}


var reuqestFrom ="";
var authorizedMode ="";
var videoInitFlag = "0";//初始化，进入营业厅是否成功标识
var mediaInitFlag = "0";//初始化成功标识
var scope;
var CameraPhotoMode = "";
function loadCameraPhotoMode(cameraMachine)
		{
			if(CameraPhotoMode == cameraMachine)
			{
				return;
			}
			CameraPhotoMode = cameraMachine;
			if(cameraMachine == "TC")
			{
				var Layer_TC = document.getElementById("Layer_TC");
				var TFace1 = document.createElement("object");
					TFace1.width = 0;
					TFace1.height = 0;
					TFace1.id = "TFace1";
					TFace1.classid = "CLSID:FC3899CF-1DDA-4F3D-917C-AA7A7385320B";
				Layer_TC.appendChild(TFace1);
			}else if(cameraMachine == "YC"){
			    var Layer_YC = document.getElementById("Layer_YC");
				var TFace1_YC = document.createElement("object");
					TFace1_YC.width = 400;
					TFace1_YC.height = 400;
					TFace1_YC.id = "TFace1_YC";
					TFace1_YC.classid = "CLSID:BD0F48B3-EC69-4107-AF33-107C35D09E2C";
				Layer_YC.appendChild(TFace1_YC);
			}else{
			    var Layer_HY = document.getElementById("Layer_HY");
				var cap1 = document.createElement("object");
					cap1.width = 400;
					cap1.height = 400;
					cap1.id = "cap1";
					cap1.classid = "CLSID:A513D124-E7F8-448C-8663-8A93637F9456";
				Layer_HY.appendChild(cap1);
			}
		}


function MediaInit() {
	
		//if(mediaInitFlag == "1")
		//{
		  //return;
		//}
	try{
		// 检查是否安装了插件
		var NEED_ANYCHAT_APILEVEL = "0"; // 定义业务层需要的AnyChat
		//EBCommonCtrl.AppendEJournal("jcols_log.txt","视频控件初始化:");
		// API Level
		var errorcode = BRAC_InitSDK(NEED_ANYCHAT_APILEVEL); // 初始化插件（返回成功(0)或插件版本号太低的编号）
		//AddLog("BRAC_InitSDK(" + NEED_ANYCHAT_APILEVEL + ")=" + errorcode, LOG_TYPE_API);
		//alert(errorcode)
		if (errorcode == GV_ERR_SUCCESS) {// 安装成功的情况下
            //mediaInitFlag = "1"
			AddLog("初始化插件成功");
			//setTimeout("MediaLogin()",1000);
		} else { // 没有安装插件，或是插件版本太旧
            //mediaInitFlag = "0" 
			AddLog("初始化插件失败");
		}
	}catch(e){
        //mediaInitFlag = "0" 
	}
}
var loginFailedFlag = "0";

function MediaLogin(data,value) {
	loginFailedFlag = 1;
    mDefaultServerAddr = data;		    // 默认服务器地址
    mDefaultServerPort = value;
	/**连接服务器*/
	BRAC_Connect(mDefaultServerAddr, mDefaultServerPort);
}

// 客户端连接服务器，bSuccess表示是否连接成功，errorcode表示出错代码
function OnAnyChatConnect(bSuccess, errorcode) {
	  AddLog("连接回调");
	  if(loginFailedFlag == "0")
	  {
		  return;
	  }
    AddLog("OnAnyChatConnect(errorcode=" + errorcode + ")", LOG_TYPE_EVENT);
	if (errorcode == 0) {
    AddLog("连接成功");
    /**登入anychat*/
	loginFailedFlag = "0";
	  var loginTag = BRAC_Login(mUserName, mPassword, 0);
    
	} else {
		
		if(loginFailedFlag == "1")
		{
			loginFailedFlag = "0";
			AddLog("连接失败");
		    anychatjump("failed");
		}
		
	}
}

// 客户端登录系统，dwUserId表示自己的用户ID号，errorcode表示登录结果：0 成功，否则为出错代码，参考出错代码定义
function OnAnyChatLoginSystem(dwUserId, errorcode) {
	 //alert(errorcode)
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
		anychatjump("submit");
		//InitClientObjectInfo(mSelfUserId,mObjectInitFlag,mPriority);
	} else {
		AddLog("登录失败");
		videoInitFlag = "0";
		anychatjump("failed");
	}
}

function MediaLogout() {
    
	AddLog("注销系统")
	/**连接服务器*/
	BRAC_Logout(mDefaultServerAddr, mDefaultServerPort);
	
}




// 文件传输完成通知
function OnAnyChatTransFile(dwUserId, lpFileName, lpTempFilePath, dwFileLength,wParam, lParam, dwTaskId) {	
    AddLog("上传表单后anychat返回路径:"+lpTempFilePath)
    clearTimeout(mSendTextMessageTimeout);
	if (intTransFileFlag == 8){//任何模式上传表单返回
		ACformPath = lpTempFilePath;
		TMP_FormPIC = lpTempFilePath;
		//intTransFileFlag = 10;
		if(lpTempFilePath !="" && lpTempFilePath.length >0)
		{
			MediaLogout();
		 anychatjump("submit");
		}else{
			MediaLogout();
			anychatjump("failed");
		}
		
	}
	else if (intTransFileFlag == 9){//上传身份证返回
		//ACjournalPath = lpTempFilePath;'
		if(lpTempFilePath !="" && lpTempFilePath.length >0)
		{
			MediaLogout();
		 anychatjump("submit");
		}else{
			MediaLogout();
			anychatjump("failed");
		}
		
	}
}
var mSendTextMessageTimeout = -1;//发送接口计时器
var mSendTextMessageTimeouter = 30;//超时时间

function sendTextMessageTimeout()
{
	 clearTimeout(mSendTextMessageTimeout);
	 mSendTextMessageTimeout = setTimeout(function () {
		mSendTextMessageTimeouter = 30;
		MediaLogout();
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
		  AddLog("上传表单路径:"+obj.perImagePath)
		 iTaskId = BRAC_TransFile(0, obj.perImagePath, 0, 0, 128);//上传日志	
	    }else{
			anychatjump("failed");
		}
	}else{
		if(videoInitFlag == 1)
		{
		 intTransFileFlag = 9;
		  AddLog("上传表身份证路径:"+obj.perIDCardImagePath)
		 iTaskId = BRAC_TransFile(0, obj.perIDCardImagePath, 0, 0, 128);//上传日志	
		}else{
			anychatjump("failed");
		}
	}
	
	

}

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