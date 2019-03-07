function checkInput(id, rule) {
	try{
		var type=HandWrite.GetPadType(); //获取软键盘类型，1为纯数字键盘
		if(type == '1' && event.keyCode == 65){
			document.getElementById(id).value = '';
		}
	}catch(e){
	}
	if(event.keyCode == 13) return;
	$("#" + id).popover('destroy');
	if (rule == undefined) return;
	if (!new RegExp(rule).test(document.getElementById(id).value)) {
		var scope = angular.element(main).scope();
		scope._delete();
	}
	
}
function resetModel(id,model) {
	try{
		var scope = angular.element(main).scope();
		scope.pool[model] = document.getElementById(id).value;
	}catch(e){
	}
}
function hideHelpButton(data)
{

	 $("#helpControl").hide();

}

function anychatjump(data)
{
	
	if("hide" == data)
	{
	 $("#call").hide();
  }else{
	var scope = angular.element(main).scope();
	scope.action(data);
 }
}

function showCallButton(data)
{
	$("#call").show();
	$("#calling").hide();
	$("#helpControl").hide();
	n_sec = 0; //秒
  n_min = 0; //分
  n_hour = 0; //时
	clearInterval(n_timer);
	clearInterval(n_interval);
	$("#callTime").html("");
}

function hideButton(data)
{
	$("#call").hide();
	$("#calling").hide();
	$("#helpControl").hide();
	n_sec = 0; //秒
  n_min = 0; //分
  n_hour = 0; //时
	clearInterval(n_timer);
	clearInterval(n_interval);
	$("#callTime").html("");
}

function hideCallButton(data)
{
	$("#call").hide();
	if("success" == data)
	{
		$("#helpControl").show();
  	$("#callingValue").html("通话中");
	  clearInterval(n_timer);
	  clearInterval(n_interval);
	  n_sec_timeout = 30;
	  n_timer = setCallTime();
  }else if("hideHelpControl" == data){
  	$("#helpControl").hide();
  	$("#callingValue").html("通话中");
	n_sec_timeout = 30;
  	clearInterval(n_timer);
	clearInterval(n_interval);
	  n_timer = setCallTime();
  }
	
}

function showCallingButton(data)
{
	$("#call").hide();
	$("#calling").show();
	$("#callingValue").html("呼叫中");
	clearInterval(n_timer);
	clearInterval(n_interval);
    setCallTimeOut();
}
var n_timer;
var n_interval;

var n_sec_timeout = 30; //秒
var n_min_timeout = 0; //分

function setCallTimeOut() {
 n_interval = setInterval(function () {
	var str_sec = n_sec_timeout;
  var str_min = n_min_timeout;
  if ( n_sec_timeout < 10) {
   str_sec = "0" + n_sec_timeout;
  }
  if ( n_min_timeout < 10 ) {
   str_min = "0" + n_min_timeout;
  }
 
 
  var time = str_min + ":" + str_sec;
  n_sec_timeout = n_sec_timeout-1;
  $("#callTime").html(time);
  if ( n_sec_timeout == 0) {
  	
  	n_sec_timeout = 30; //秒
    n_min_timeout = 0; //分
    clearInterval(n_timer);
	clearInterval(n_interval);
    $("#callingValue").html("");
    $("#callTime").html("");
    document.getElementById("tipTick").style.display = "block";
    document.getElementById("tipTick").innerHTML="系统繁忙，请稍候再拨";
    
    setTimeout(function (){
    	 document.getElementById("tipTick").style.display = "none";
    	 var scope = angular.element(main).scope();
    	 scope.auxiliaryAnyChat("MediaLeaveQueue");
    	},5000)
    
   //MediaLeaveQueue();
  }
  
  
	},1000);
}

var n_sec = 0; //秒
var n_min = 0; //分
var n_hour = 0; //时

function setCallTime() {
 return setInterval(function () {

		var str_sec = n_sec;
  var str_min = n_min;
  var str_hour = n_hour;
  if ( n_sec < 10) {
   str_sec = "0" + n_sec;
  }
  if ( n_min < 10 ) {
   str_min = "0" + n_min;
  }
 
  if ( n_hour < 10 ) {
   str_hour = "0" + n_hour;
  }
 
  var time = str_min + ":" + str_sec;
  //ele_timer.value = time;
  n_sec++;
  if (n_sec > 59){
   n_sec = 0;
   n_min++;
  }
  if (n_min > 59) {
   n_sec = 0;
   n_hour++;
  }
  $("#callTime").html(time);
	},1000);
}
function hideCallButtonHangUpButton(data)
{
	$("#call").hide();
	$("#helpControl").hide();
	
}


// 明细开始日期校验
function checkStartDate() {
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	var startDateobj = inputs.item(0);
	startDate = startDateobj.value.replace('年','').replace('月','').replace('日','').replace(/\s+/g,'');
	
	var error = "";
	var reg = "yyyyMMdd";
     reg = reg.replace(/yyyy/, "[0-9]{4}");
     reg = reg.replace(/yy/, "[0-9]{2}");
     reg = reg.replace(/MM/, "((0[1-9])|1[0-2])");
     reg = reg.replace(/M/, "(([1-9])|1[0-2])");
     reg = reg.replace(/dd/, "((0[1-9])|([1-2][0-9])|30|31)");
     reg = reg.replace(/d/, "([1-9]|[1-2][0-9]|30|31))");
     //reg = reg.replace(/HH/, "(([0-1][0-9])|20|21|22|23)");
     //reg = reg.replace(/H/, "([0-9]|1[0-9]|20|21|22|23)");
     //reg = reg.replace(/mm/, "([0-5][0-9])");
     //reg = reg.replace(/m/, "([0-9]|([1-5][0-9]))");
     //reg = reg.replace(/ss/, "([0-5][0-9])");
     //reg = reg.replace(/s/, "([0-9]|([1-5][0-9]))");
     var re =/^[0-9]+.?[0-9]*$/;
     reg = new RegExp("^" + reg + "$");
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
  //startDate = startDateobj.value.replace(/\D-/g,'');
  
  	
	if(!re.test(startDate)){
	 	 error = "点击选择日期";
	}else if(!reg.test(startDate)){
	  error = "点击选择日期";
	}else if(startDate.toString() > currentDate){
	  error = "起始日期大于当前日期";
	}
	if (error.length > 0) {
		$("#" + startDateobj.id).attr("data-content", error);
		$("#" + startDateobj.id).popover('show');
		scope.timeout = scope._timeout;
	} else {
	
		scope.pool["startDate"] = startDate;
		scope.action("confirm");
	}
}	
	function destory() {
		var inputs = document.getElementsByTagName("input");
		for (var i = 0; i < inputs.length; i ++ ) {
			$("#" + inputs.item(i).id).popover('destroy');
		}
	}
	
// 明细结束日期校验
function checkEndDate() {
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	var endDateobj = inputs.item(0);
	var endDate = endDateobj.value.replace('年','').replace('月','').replace('日','').replace(/\s+/g,'');
	var startDateTime = new Date(inputs.item(1).value.substring(0,4),inputs.item(1).value.substring(4,6),inputs.item(1).value.substring(6,8)).getTime();
	var endDateTime = new Date(endDate.substring(0,4),endDate.substring(4,6),endDate.substring(6,8)).getTime();
	var error = "";
	var reg = "yyyyMMdd";
     reg = reg.replace(/yyyy/, "[0-9]{4}");
     reg = reg.replace(/yy/, "[0-9]{2}");
     reg = reg.replace(/MM/, "((0[1-9])|1[0-2])");
     reg = reg.replace(/M/, "(([1-9])|1[0-2])");
     reg = reg.replace(/dd/, "((0[1-9])|([1-2][0-9])|30|31)");
     reg = reg.replace(/d/, "([1-9]|[1-2][0-9]|30|31))");
     reg = new RegExp("^" + reg + "$");
     var re =/^[0-9]+.?[0-9]*$/;
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
	if(!re.test(endDate)){
	 	 error = "请点击选择日期";
	}else if(!reg.test(endDate))
	{
	  error = "输入日期格式错误";
	}else if(endDate.toString() > currentDate)
	{
	  error = "截止日期大于当前日期";
	}else if(endDate.toString() < inputs.item(1).value)
	{
	  error = "截止日期小于开始日期";
	}else if((endDateTime-startDateTime)/86400000 >= 180)
	{
	
	  error = "日期间隔超过六个月";
	}
	if (error.length > 0) {
		$("#" + endDateobj.id).attr("data-content", error);
		$("#" + endDateobj.id).popover('show');
		scope.timeout = scope._timeout;
	} else {
		scope.pool["endDate"] = endDate;
		scope.action("confirm");
	}
}

// 取款校验 @最大取款金额 @最小取款面值
function checkCWDAmount(maxVal, minValue) {
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	maxVal = eval("scope.pool." + maxVal);
	minValue = eval("scope.pool." + minValue);
	var obj = inputs.item(0);
	var error = "";
	if (obj.value.length <= 0) {
		error = "取款金额不能为空";
	} else if (obj.value % minValue != 0) {
		error = "取款金额必须为" + minValue + "的倍数";
	} else if (parseFloat(obj.value) > maxVal) {
		error = "取款金额不能大于" + maxVal;
	}else if (parseFloat(obj.value) == 0 ) {
		error = "取款金额不能等于0";
	}
	if (error.length > 0) {
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
		scope.timeout = scope._timeout;
	} else {
		scope.action("confirm");
	}
}	

// 存款金额校验
function checkDEPAmount(maxVal) {
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	maxVal = eval("scope.pool." + maxVal);
	var obj = inputs.item(0);
	var error = "";
	if(obj.value.length<=0){
		error = "存款金额不能为空";
	}else if (obj.value % 100 != 0) {
		error = "存款金额必须为100的倍数";
	} else if (parseFloat(obj.value) > maxVal) {
		error = "存款金额不能大于" + maxVal;
	}else if (parseFloat(obj.value) <= 0 ) {
		error = "存款金额不能等于0";
	}
	if (error.length > 0) {
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
		scope.timeout = scope._timeout;
	} else {
		scope.action("confirm");
	}
}

// 存款金额校验
function checkPASSDEPAmount(maxVal) {
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	maxVal = eval("scope.pool." + maxVal);
	var obj = inputs.item(0);
	var error = "";
	if(obj.value == "" || obj.value == null ){
		error = "存款金额不能为空";
	}else if (obj.value % 100 != 0) {
		error = "存款金额必须为100的倍数";
	} else if (parseFloat(obj.value) > maxVal) {
		error = "存款金额不能大于" + maxVal;
	}else if (parseFloat(obj.value) == 0 ) {
		error = "存款金额不能等于0";
	}
	if (error.length > 0) {
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
		scope.timeout = scope._timeout;
	} else {
		scope.action("confirm");
	}
}

// 手机校验
function checkTEL() {
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	var obj = inputs.item(0);
	var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/; //11位号码必须 13 14 15 17 18 开头
	var error = "";
	if (obj.value.length < 11) {
		error = "请输入11位手机号";
	} else if (!reg.test(obj.value)) {
		error = "请输入正确的手机号";
	}
	if (error.length > 0) {
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
		scope.timeout = scope._timeout;
	} else {
		scope.action("confirm");
	}
}

// 6位随机码校验
function checkRandomCode(randomNumber) {
	var scope = angular.element(main).scope();
	randomNumber = eval("scope.pool." + randomNumber);
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	var obj = inputs.item(0);
	var reg = /^[0-9]{1,6}$/; 
	var error = "";
	if (obj.value.length != 6) {
		error = "请输入手机上的6位验证码";
	} else if (obj.value != randomNumber) {
		error = "请输入正确的6位验证码";
	}
	if (error.length > 0) {
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
	} else {
		scope.action("confirm");
	}
}

// 6位数字校验
function checkRandomCode2() {
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	var obj = inputs.item(0);
	var reg = /^[0-9]{1,6}$/; 
	var error = "";
	if (obj.value.length != 6) {
		error = "请输入手机上的6位验证码";
	}
	if (error.length > 0) {
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
	} else {
		scope.action("confirm");
	}
}


//密码校验
function checkPIN(){ 
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	var obj = inputs.item(0);
	var error = "";
	if (obj.value.length == 0) {
		error = "密码不能为空";
	}
	if (obj.value.length < 6) {
		error = "密码不能小于6位";
	}
	if (error.length > 0) {
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
	} else {
		scope.action("confirm");
	}
}


// 身份证号校验
function checkIdNo() {
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	var obj = inputs.item(0);
	var error = "";
	if (obj.value.length == 0) {
		error = "身份证号不能为空";
	} else if (obj.value.length !=18) {
		error = "身份证号位数有误";
	}
	if (error.length > 0) {
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
		scope.timeout = scope._timeout;
	} else {
		scope.action("confirm");
	}
}

// 磁卡账号校验
function checkACC() {
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	var obj = inputs.item(0);
	var error = "";
	if (obj.value.length == 0) {
		error = "转入账号不能为空";
	} else if (obj.value.length < 16 || obj.value.length > 20) {
		error = "转入账号位数有误";
	}
	if (error.length > 0) {
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
		scope.timeout = scope._timeout;
	} else {
		scope.action("confirm");
	}
}

// 磁卡账号校验转入转出账号不允许一致
function checkACCAndNotSame() {
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	var obj = inputs.item(0);
	var error = "";
	var cardNo;
	cardNo = eval("scope.pool.cardNo");
	if (obj.value.length == 0) {
		error = "转入账号不能为空";
	} else if (obj.value.length < 16 || obj.value.length > 20) {
		error = "转入账号位数有误";
	} else if (obj.value == cardNo) {
		error = "转入账号与转出账号不能相同";
	}
	if (error.length > 0) {
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
		scope.timeout = scope._timeout;
	} else {
		scope.pool.inAccountNo = obj.value
		scope.action("confirm");
	}
}

// 磁卡、存折账号校验 转入转出账号不允许一致
function checkCommonTransACC() {
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	var obj = inputs.item(0);
	var error = "";
	var cardNo;
	cardNo = eval("scope.pool.cardNo");
	if (obj.value.length == 0) {
		error = "转入账号不能为空";
	}else if (obj.value == cardNo) {
		error = "转入账号与转出账号不能相同";
	}	
	/*else if (!(obj.value.length == 22 || (obj.value.length >= 16 && obj.value.length <= 19))) {
		error = "转入账号位数有误";
	} */
	if (error.length > 0) {
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
		scope.timeout = scope._timeout;
	} else {
		scope.pool.inAccountNo = obj.value
		scope.action("confirm");
	}
}

// 存折账号校验
function checkPBKACC() {
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	var obj = inputs.item(0);
	var error = "";
	if (obj.value.length == 0) {
		error = "转入存折号不能为空";
	} else if (obj.value.length != 22) {
		error = "转入存折号为22位";
	}
	if (error.length > 0) {
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
		scope.timeout = scope._timeout;
	} else {
		scope.action("confirm");
	}
}

// 转账金额校验
function checkTRFAmount(maxVal) {
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	var obj = inputs.item(0);
	maxVal = eval("scope.pool." + maxVal);
	var error = "";
	if (obj.value.length <= 0 || parseFloat(obj.value)<0.01) {
		error = "转账金额不能为空或为零";
	} else if (parseFloat(obj.value) > maxVal) {
		error = "转账金额不能大于" + maxVal;
	}
	if (error.length > 0) {
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
		scope.timeout = scope._timeout;
	} else {
		scope.action("confirm");
	}
}

// 圈存金额校验
function checkLoadAmount(maxVal) {
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	var obj = inputs.item(0);
	maxVal = eval("scope.pool." + maxVal);
	var error = "";
	if (obj.value.length <= 0 || parseFloat(obj.value)<0.01) {
		error = "圈存金额不能为空或为零";
	} else if (parseFloat(obj.value) > parseFloat(maxVal)) {
		error = "圈存金额不能大于" + parseFloat(maxVal).toFixed(2);
	}
	if (error.length > 0) {
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
		scope.timeout = scope._timeout;
	} else {
		scope.action("confirm");
	}
}

// 圈提金额校验
function checkUnLoadAmount(ECashBalance) {
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	var obj = inputs.item(0);
	ECashBalance = eval("scope.pool." + ECashBalance);
	var error = "";
	if (obj.value.length <= 0 || parseFloat(obj.value)<0.01) {
		error = "圈提金额不能为空或为零";
	} else if (parseFloat(obj.value) > parseFloat(ECashBalance)) {
		error = "圈提金额不能大于" + parseFloat(ECashBalance).toFixed(2);
	}
	if (error.length > 0) {
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
		scope.timeout = scope._timeout;
	} else {
		scope.action("confirm");
	}
}

//查询账单输入日期校验 yyyyMM
function checkDate() {
	var inputs = document.getElementsByTagName("input");
	var obj = inputs.item(0);
	AddLog("obj:"+obj);
	var scope = angular.element(main).scope();
	var error = "";
	var reg = "yyyyMM";
	reg = reg.replace(/yyyy/, "[0-9]{4}");
    reg = reg.replace(/MM/, "((0[1-9])|1[0-2])");
	reg = new RegExp("^[0-9]{4}((0[1-9])|1[0-2])$");
	var dtVal = new Date();
    var strYear = dtVal.getFullYear();
    var strMonth = (dtVal.getMonth()+1).toString();
	AddLog("strMonth:"+strMonth);
    for (var i=strMonth.length; i<2; i++)
    {
    	strMonth = '0' + strMonth;
    }
    var currentDate=strYear + strMonth;
	AddLog("obj.value:"+obj.value);
	if (obj.value.length <= 0) {
		error = "输入年月不能为空";
	}
	else if(!reg.test(obj.value)){
		error = "输入年月格式错误";
	}
	else if(obj.value > currentDate){
		error = "输入年月不能大于当前年月";
	}
	AddLog("error:"+error);
	if (error.length > 0) {
		AddLog("obj.id:"+obj.id);
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
		AddLog("scope._timeout:"+scope._timeout);
		scope.timeout = scope._timeout;
	}
	else{
		AddLog("error1:"+error);
		scope.action("confirm");
	}
}

// 活转定金额校验
function checkTFCAmount(type) {
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	var obj = inputs.item(0);
	type = eval("scope.pool." + type);
	var error = "";
	if (obj.value.length <= 0) {
		error = "定活金额不能为空";
	} 
	else if ("NomalFixed" == type) {
		if(parseFloat(obj.value) < 50.00){
			error = "定活金额不能小于50.00" ;
		}
	}
	else if("CallDeposit" == type){
		if(parseFloat(obj.value) < 50000.00){
			error = "定活金额不能小于50000.00" ;
		}
	}
	if (error.length > 0) {
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
		scope.timeout = scope._timeout;
	} else {
		scope.action("confirm");
	}
}

//代缴费预存金额校验
function checkAGENTAmount(userPayfeesum,maxVal) {
	var inputs = document.getElementsByTagName("input");
	var scope = angular.element(main).scope();
	var obj = inputs.item(0);
	userPayfeesum = eval("scope.pool." + userPayfeesum);
	maxVal = eval("scope.pool." + maxVal);
	var error = "";
	if (obj.value.length <= 0 || parseFloat(obj.value)<0.01) {
		error = "预存金额不能为空或为零";
	} 
	else if (parseFloat(obj.value) < userPayfeesum) {
		error = "预存金额不能小于" + userPayfeesum;
	}
	else if(parseFloat(obj.value) > maxVal){
		error = "预存金额不能大于" + maxVal;
	}
	if (error.length > 0) {
		$("#" + obj.id).attr("data-content", error);
		$("#" + obj.id).popover('show');
		scope.timeout = scope._timeout;
	} else {
		scope.action("confirm");
	}
}

function Show(type,x,y){
	  try {
  HandWrite.Show(type,1,x,y);
	 } catch (e) {
	 		alert(e);
	 return;
	
	 }
}

function Hide(){

  try {
	   AddLog("Hide开始");
	   HandWrite.Hide();
	 } catch (e) {
	   AddLog("Hide异常"+e);
	 //	alert(e);
	 //return;
	 }
}	
 
function Handexit(){
  try {
	  AddLog("Handexit开始");
   HandWrite.exit();
 } catch (e) {
	 AddLog("Handexit异常"+e);
	 //return;
	 }
}

function openkeyset(type,x,y){
	
   Show(type,x,y);
}     