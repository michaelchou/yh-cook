var obj_tightvnc_ex;

$(function() {
	try {
		obj_tightvnc_ex =document.getElementById("tightvnc_ex");
		tightvnc_ex.InitSession(3456);// 初始化本地端口
	} catch (e) {
		// TODO: handle exception
	}
	
});

// 启动exe服务,让ocx守护exe进程
function StartupServer(ltimeout) {
	var ret =obj_tightvnc_ex.StartupServer(ltimeout);
}

// 终止服务exe服务,终止ocx守护exe进程
function EndService() {
	var ret = tightvnc_ex.EndServer();
}

// 服务端是否允许远程控制(status 0:不允许控制、1:允许控制)
//function AllowControl(status) {
	//var ret = obj_tightvnc_ex.AllowControl(status);
//}

// 获取服务端控制状态
function GetControlStatus() {
	var ret = obj_tightvnc_ex.GetControlStatus();
}
