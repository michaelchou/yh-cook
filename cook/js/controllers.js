'use strict';

/* Controllers */

var cookControllers = angular.module('cookControllers', []);

cookControllers.controller('CookCtrl', ['$scope',
  function($scope) {
	$scope.skip = function() {
	  $scope.$broadcast('skipAction');
	  return false;
	};
    $scope.admin = function() {
        $scope.$broadcast('adminAction');
        return false;
    };
    $scope.auxiliary = function() {//呼叫
        $scope.$broadcast('auxiliaryAction');
        return false;
      };
    $scope.helpControl = function() {//协助
        $scope.$broadcast('helpControlAction');
        return false;
      };
    $scope.MediaHangUp = function() {//挂断
        $scope.$broadcast('mediaHangUpAction');
        return false;
      };
    $scope.reviseIndex = getRevise('index');
  }]);

cookControllers.controller('CookMedia', ['$scope',
  function($scope) {
    $scope.skip = function() {
      $scope.$broadcast('skipAction');
      return false;
    };
    $scope.admin = function() {
      $scope.$broadcast('adminAction');
      return false;
    };
    $scope.auxiliary = function() {//呼叫
        $scope.$broadcast('auxiliaryAction');
        return false;
      };
    $scope.helpControl = function() {//协助
        $scope.$broadcast('helpControlAction');
        return false;
      };
     $scope.MediaHangUp = function() {//挂断
        $scope.$broadcast('mediaHangUpAction');
        return false;
      };
    $scope.reviseIndex = getRevise('index');

    /*$scope.mediaLogin = function() {
        //alert('mediaLogin');
        var ret = MyActiveX.mediaTerminalLogin("VTM101","YH_Terminal101");
    }
    $scope.mediaCall = function() {
        var ret = MyActiveX.mediaTerminalCall(10001, 101, "");
    }
    $scope.mediaSendData = function(data) {
        var ret = MyActiveX.mediaTerminalSendMsg(data);
    }
    $scope.mediaSendFile = function(file) {
        var ret = MyActiveX.mediaTerminalTransFile(file);
    }
    $scope.mediaHangUp = function(data) {
        var ret = MyActiveX.mediaTerminalReleaseCall();
    }
    $scope.mediaLogout = function(data) {
        var ret = MyActiveX.mediaTerminalLogout();
    }*/
}]);

cookControllers.controller('PageListCtrl', ['$scope', 'HubSwitch',
  function($scope, HubSwitch) {
    $scope.pages = HubSwitch.getAllPages();
  }]);

cookControllers.controller('PageCtrl', ['$scope', '$window', '$timeout', '$routeParams', '$route', 'HubSwitch',
  function($scope, $window, $timeout, $routeParams, $route, HubSwitch) {
    $scope.result = HubSwitch.getResult();
	var page = HubSwitch.getPage($routeParams.pageId);
	$scope.page = page;
	HubSwitch.setPage(page.id);
	$scope.pageId = page.id;
	$scope.answer = new Array();
	
	$scope.timeout = page.timeout ? page.timeout : -1;
	$scope._timeout = $scope.timeout;
	// 等待下个页面加载结束之后再响应新的action请求
	HubSwitch.setActionStart(false);
	
    if(page.getKeys) {
		$scope.pool = HubSwitch.getPool().query({key: page.getKeys});
    } else if (page.getDetails) {
		var pageNo = 1;
		var pageSize = 0;
		var pageCount = page.pageCount==undefined?10:page.pageCount;		// 默认pagecount值为10
		var details = new Array();
		$scope.getDetailsCallback = function(result) {
			$scope.pool = result;
			var detailResult = eval("result." + page.getDetails[0]);
			if (typeof(detailResult) != "undefined" && detailResult != null && detailResult != "") {
				var j = 0;
				// var detailResult = result.detail;
				if (detailResult.charAt(detailResult.length - 1) == '#') {
					detailResult = detailResult.substring(0, detailResult.length - 1);
				}
				var listValue = new Array();
				var jsonArr = new Array();
				listValue = detailResult.split("#");
				for(var i = 0;i < (listValue.length); i++) {
					var listValue2 = listValue[i].split("@");
					var jsonObj = {};
					for(var n = 0;n < listValue2.length; n++) {
					   jsonObj["key" + n] = listValue2[n];
					}
					jsonArr.push(jsonObj)
				}
				$scope.details = jsonArr;
				details = $scope.details;
				pageSize = (details.length) / pageCount;
				if (details.length % pageCount != 0) {
					pageSize = Math.ceil(pageSize);
				}
				var detail = new Array();
				for(var i = (pageNo - 1) * pageCount; i < (details.length) && i < pageNo * pageCount;i++) {
					detail[j] = details[i];
					j = j + 1;
				}
				$scope.detail = detail;
				$scope.Prev = true;
				if(pageSize == pageNo) {
					 $scope.Next = true;
					 $scope.Submit = false;
				} else {
					 $scope.Next = false;
					 $scope.Submit = true;
				}
				$scope.pageSize = pageSize;
				$scope.pageNo = pageNo;
			}
		}

		$scope.next = function(page) {
			pageNo = pageNo + page;
			var j = 0;
			var detail = new Array();
			for(var i = (pageNo - 1) * pageCount; i < (details.length) && i < pageNo * pageCount;i++) {
				detail[j] = details[i];
				j = j + 1;
			}
			$scope.detail = detail;
			if(pageNo <= 1) {
				$scope.Prev = true;
			} else {
				$scope.Prev = false;
			}
			 if(pageSize == pageNo) {
				$scope.Next = true;
				$scope.Submit = false;
			} else {
				$scope.Next = false;
				$scope.Submit = true;
			}
			$scope.pageNo = pageNo;
			$scope.timeout = $scope._timeout;
		}
		HubSwitch.getPool().query({key: page.getDetails}, $scope.getDetailsCallback);
	}else if (page.getDetailsPageTurns) {
		var pageNo = 1;
        var pageTurnsFlag = "";
		var pageSize = 0;
        var strpageSize = "";
		var pageCount = page.pageCount==undefined?10:page.pageCount;		// 默认pagecount值为10
		var details = new Array();
		$scope.getDetailsCallback = function(result) {
			$scope.pool = result;

			var detailResult = eval("result." + page.getDetailsPageTurns[0]);
                strpageSize = eval("result.pageNo");
                pageTurnsFlag = eval("result.pageTurnsFlag");

			try{
					if(strpageSize !="" && strpageSize != null)
					{
                          pageNo = parseInt(strpageSize);
					}
			}catch(e){
			}
			if (typeof(detailResult) != "undefined" && detailResult != null && detailResult != "") {
				var j = 0;
				// var detailResult = result.detail;
				if (detailResult.charAt(detailResult.length - 1) == '#') {
					detailResult = detailResult.substring(0, detailResult.length - 1);
				}

				var listValue = new Array();
				var jsonArr = new Array();

				listValue = detailResult.split("#");
				for(var i = 0;i < (listValue.length); i++) {
					var listValue2 = listValue[i].split("@");
					var jsonObj = {};
					for(var n = 0;n < listValue2.length; n++) {
					   jsonObj["key" + n] = listValue2[n];
					}
					jsonArr.push(jsonObj)
				}

				$scope.details = jsonArr;
				details = $scope.details;
				pageSize = (details.length) / pageCount;
				if (details.length % pageCount != 0) {
					pageSize = Math.ceil(pageSize);
				}
				var detail = new Array();
				for(var i = (pageNo - 1) * pageCount; i < (details.length) && i < pageNo * pageCount;i++) {
					detail[j] = details[i];
					j = j + 1;
				}
				$scope.detail = detail;
				
				if(pageSize == pageNo ) {//需要继续查询
                     if(pageSize>1)
						{
                           $scope.Prev = '1';
						}else{
                             $scope.Prev = '0';
                          }
					 if(pageTurnsFlag !="1")
                     {
				       $scope.Next = '1';
                       $scope.Next2 = '0';
                     }else{
                            $scope.Next = '0';
                            $scope.Next2 = '0';
                          }
				} else {//不需要查询
                     $scope.Prev = '1';
                     $scope.Next = '0';
					 $scope.Next2 = '1';
                     
				}
				$scope.pageSize = pageSize;
				$scope.pageNo = pageNo;
			}else{
                     $scope.Next = '0';
					 $scope.Next2 = '0';
                 }
		}

		$scope.next = function(page) {
			pageNo = pageNo + page;
			var j = 0;
			var detail = new Array();
			for(var i = (pageNo - 1) * pageCount; i < (details.length) && i < pageNo * pageCount;i++) {
				detail[j] = details[i];
				j = j + 1;
			}
			$scope.detail = detail;
			 if(pageSize == pageNo) {
                     if(pageSize>1 && pageNo>1)
						{
                           $scope.Prev = '1';
						}else{
                             $scope.Prev = '0';
                          }
                     if(pageTurnsFlag !="1")
                     {
				       $scope.Next = '1';
                       $scope.Next2 = '0';
                     }else{
                            $scope.Next = '0';
                            $scope.Next2 = '0';
                          }
				} else {//不需要查询
                     if(pageSize>1 && pageNo>1)
						{
                           $scope.Prev = '1';
						}else{
                             $scope.Prev = '0';
                          }
                     $scope.Next = '0';
					 $scope.Next2 = '1';
                     
				}
			$scope.pageNo = pageNo;
			$scope.timeout = $scope._timeout;
		}
		HubSwitch.getPool().query({key: page.getDetailsPageTurns}, $scope.getDetailsCallback);
	} else {
		$scope.pool = {};
	}
	/**
	if (page.getButtons) {
		$scope.buttons = HubSwitch.getPool().query({key: page.getButtons});
	} else {
		$scope.buttons = {};
	}
	*/
	
	$scope.destroyError = function(){
		AddLog("destroyError开始:");
		try{
			var objs = document.getElementsByTagName("button");
			if(document.getElementById('confirmRisk')!=null && document.getElementById('confirmRisk') !=undefined)
				var objs1 = document.getElementById('confirmRisk').id;
			if(objs != null && objs != undefined && objs1 != null && objs1 != undefined){
				var obj = objs.item(1);
				$("#" + obj.id).popover('destroy');
				}
			AddLog("destroyError结束:");
		}catch(e){
			AddLog("destroyError异常:"+e);
			
		}
}

	$scope.checkRiskAnswer = function(){
		var error="";
		$scope.pool['answer'] = $scope.answer.join("");
		if($scope.pool['answer'].length < pageSize){
			error = "请完成所有题目后再提交";
	}
	
		var objs = document.getElementsByTagName("button");
		var obj = objs.item(1);
		if (error.length > 0) {
			$("#" + obj.id).attr("data-content", error);
			$("#" + obj.id).popover('show');
			$scope.timeout = $scope._timeout;
	} else {
			$scope.action("confirm");
	}
	}
	
	$scope.nextCheck = function(){
		var radios = document.getElementsByName("a")
		var sign = 0
		for(var i =0; i < radios.length; i ++){
			if(radios[i].checked == true){
				sign = 1
			}
		}
		if(sign == 1){
			$scope.next(1)
		}
	}

	$scope.action = function(actionId) {
        AddLog("actionId:"+actionId);
		$scope.destroyError();	
		destory();
		try{
			Hide();
			Handexit();
		}catch(e){
			
		}
		if((actionId == 'submit' || actionId == "confirm" || actionId == 'submit2') && $scope.page.setKeys) {
			var sendData = {};
			var keyLen = $scope.page.setKeys.length;
			for(var i = 0; i < keyLen; i++) {
			  var key = $scope.page.setKeys[i];
			  AddLog("key:"+key);
			  sendData[key] = $scope.pool[key];
			}
			HubSwitch.submit(actionId, sendData, $scope.actionCallback);
		} else {
			HubSwitch.action(actionId, $scope.actionCallback);
		}
	};
	
	var sys = "/admin/NewAdminSystemServlet";

	$scope.closeHandWriter = function(){
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
	
	function destory() {
		AddLog("destory开始");
		try {      
		document.getElementById("ui-datepicker-div").style.display = "none"; 
		}catch(e){
		}
		try {
			var inputs = document.getElementsByTagName("input");
			for (var i = 0; i < inputs.length; i ++ ) {
				if (inputs.item(i).type == 'text' || inputs.item(i).type == 'password' || inputs.item(i).type == 'tel' || inputs.item(i).type == 'checkbox') {
					$("#" + inputs.item(i).id).popover('destroy');
				}
			}
			
			var inputArea = document.getElementsByTagName("textarea");
			for (var j = 0; j < inputArea.length; j ++ ) {
				$("#" + inputArea.item(j).id).popover('destroy');
			}
			
			var inputSelect = document.getElementsByTagName("select");
			for (var k = 0; k < inputSelect.length; k ++ ) {
				$("#" + inputSelect.item(k).id).popover('destroy');
			}
			AddLog("destory结束");
		}catch(e){
			AddLog("destory异常:"+e);
		}
	}

	$scope.clear = function() {
		destory();
		var input = $scope.focusPassword();
		if (input == undefined) input = $scope.focusInput();
		if (input != undefined) input.value = '';
	}

	$scope._delete = function() {
		destory();
		var input = $scope.focusInput();
		if (input != undefined) input.value = input.value.substring(0, input.value.length - 1);
	}
	
	$scope.focusInput = function() {
		var inputs = document.getElementsByTagName("input");
		for (var i = 0; i < inputs.length; i ++ ) {
			if (inputs.item(i).id == document.activeElement.id) {
				return inputs.item(i);
			}
		}
		var inputArea = document.getElementsByTagName("textarea");
		for (var j = 0; j < inputArea.length; j ++ ) {
			if (inputArea.item(j).id == document.activeElement.id) {
				return inputArea.item(j);
			}
		}
	}
	
	$scope.focusPassword = function() {
		var inputs = document.getElementsByTagName("input");
		for (var i = 0; i < inputs.length; i ++ ) {
			if (inputs.item(i).type == "password") {
				return inputs.item(i);
			}
		}
	}

	$scope.actionCallback = function(result) {
		AddLog("actionCallback成功:"+result.to);
		if(result.wait) return;
		if(result.to) {
			HubSwitch.setFlow(result.flow);
			//$route.updateParams({pageId: result.to});
			var toPage = HubSwitch.getPage(result.to);
			AddLog("跳转到:"+toPage.entry + '.html#/pages' + toPage.path + toPage.id);
			$window.location.href = toPage.entry + '.html#/pages' + toPage.path + toPage.id;
		}
		/**
		else {
            HubSwitch.setFlow(result.flow);
		    //$route.updateParams({pageId: ''});
            $window.location.href = 'index.html#/pages'
		}
		*/
	}

	function decreaseTimer() {
	if($('#myModal').html()!=null&&$scope.timeout<=2) {
	 $('#myModal').modal('hide');
	  }
	  if($scope.timeout > 1) {
	    $scope.timeout -= 1;
	    timer = $timeout(decreaseTimer, 1000);
    }else if($scope.timeout == 0)
    	{
    		timer = $timeout(decreaseTimer, 1000);
    	} 
    else if($scope.timeout == 1) {
    	destory();
	    $scope.action('timeout');
	  }
	};
	var timer;

	$scope.$on('$viewContentLoaded', function() {
	  timer = $timeout(decreaseTimer, 1000);
	});

	$scope.$on('$destroy', function() {
	  if(timer) { $timeout.cancel(timer); }
	});
	$scope.auxiliaryAnyChat = function(data) {
		BrowserCallback(data);
	}
	$scope.$on('skipAction', function() {
	  //console.log('skipAction received');
	  $scope.action('skip');
	});
    $scope.$on('adminAction', function() {
        //$scope.action('admin');
		BrowserCallback("Key.GOADMIN");
    });
    
    $scope.$on('auxiliaryAction', function() {
		BrowserCallback("Key.GOAUXILIARY");//呼叫
    });
    $scope.$on('helpControlAction', function() {
		BrowserCallback("Key.helpControl");//协助
    });
    $scope.$on('mediaHangUpAction', function() {
    	//$("#call2").hide();
		BrowserCallback("Key.mediaHangUp");//挂断
    });
    
    
	$window.document.onkeydown = function(event) {
		var ev = event||window.event || arguments.callee.caller.arguments[0];
		var obj = ev.target || ev.sreElement;
		var t = obj.type || obj.getAttribute('type')
		switch(event.keyCode) {
			case 3:		// cancel
				var _cancel = document.getElementById("cancel");
				if (_cancel != null && _cancel != undefined) {
					_cancel.click();
				}
				break;
			case 8:		// backspace
				if (typeof(event.target.type) == 'undefined' || t.indexOf("select") >= 0 || t.indexOf("checkbox") >= 0 || t.indexOf("button") >= 0) {return false;}
				break;
			case 12:	// clear
				$scope.clear();
				break;
			case 13:	// confirm
				var _confirm = document.getElementById("confirm");
				if (_confirm != null && _confirm != undefined) {
					_confirm.click();
				}
				
				break;
			case 16:	// *
				var input = $scope.focusPassword();
				if (input != undefined) input.value = input.value + '*';
				break;
			case 46:	// delete
				$scope._delete();
				break;
			default:
				break;
		}
	};
	
}]);

cookControllers.controller('ZeroCtrl', ['$scope', '$window', '$timeout', '$routeParams', '$route', 'HubSwitch',
  function($scope, $window, $timeout, $routeParams, $route, HubSwitch) {
    //$scope.result = HubSwitch.getResult();
	var page = HubSwitch.getPage("idle");
	$scope.page = page;
	HubSwitch.setPage(page.id);
	$scope.pageId = page.id;
	$scope.timeout = page.timeout ? page.timeout : -1;
	// 等待下个页面加载结束之后再响应新的action请求
	HubSwitch.setActionStart(false);

	if (page.getKeys) {
		$scope.pool = HubSwitch.getPool().query({key: page.getKeys});
	} else {
		$scope.pool = {};
	}

	$scope.action = function(actionId) {
	  if(actionId == 'submit' && $scope.page.setKeys) {
	    var sendData = {};
	    var keyLen = $scope.page.setKeys.length;
	    for(var i = 0; i < keyLen; i++) {
	      var key = $scope.page.setKeys[i];
	      sendData[key] = $scope.pool[key];
	    }
	    HubSwitch.submit(actionId, sendData, $scope.actionCallback);
	  }
      else {
          HubSwitch.action(actionId, $scope.actionCallback);
      }
	};

	$scope.resettime = function() {
	var page = HubSwitch.getPage("idle");
	$scope.page = page;
	HubSwitch.setPage(page.id);
	$scope.pageId = page.id;
	$scope.timeout = 90;
	}

	$scope.actionCallback = function(result) {
		if(result.wait) return;
		if(result.to) {
		  HubSwitch.setFlow(result.flow);
		  //$route.updateParams({pageId: result.to});
          var toPage = HubSwitch.getPage(result.to);
          $window.location.href = toPage.entry + '.html#/pages' + toPage.path + toPage.id;
		}
		else {
            HubSwitch.setFlow(result.flow);
		    //$route.updateParams({pageId: ''});
            $window.location.href = 'index.html#/pages'
		}
	}

	function decreaseTimer() {
	  if($scope.timeout > 1) {
	    $scope.timeout -= 1;
	    timer = $timeout(decreaseTimer, 1000);
    } else if($scope.timeout == 1) {
	    $scope.action('timeout');
	  }
	};
	var timer = $timeout(decreaseTimer, 1000);

	$scope.$on('skipAction', function() {
	  //console.log('skipAction received');
	  $scope.action('skip');
	});
    $scope.$on('adminAction', function() {
        //$scope.action('admin');
		BrowserCallback("Key.GOADMIN");
    });
    $scope.$on('auxiliaryAction', function() {
		BrowserCallback("Key.GOAUXILIARY");//呼叫
    });
    $scope.$on('mediaHangUpAction', function() {
    $("#call2").hide();
		BrowserCallback("Key.mediaHangUp");//挂断
    });
  }
]);

cookControllers.controller('AdminCtrl', ['$scope', '$window', '$routeParams', '$route', 'HubSwitch',
  function($scope, $window, $routeParams, $route, HubSwitch) {
    $scope.result = HubSwitch.getResult();
	var page = HubSwitch.getPage($routeParams.pageId);
	$scope.page = page;
	HubSwitch.setPage(page.id);
	$scope.pageId = page.id;
	// 等待下个页面加载结束之后再响应新的action请求
	HubSwitch.setActionStart(false);
    if(page.getKeys) {
        $scope.pool = HubSwitch.getPool().query({key: page.getKeys});
    }
    else {
        $scope.pool = {};
    }

    $scope.skip = function() {
        $scope.action('skip');
	};

	$scope.action = function(actionId) {
	
		destory();
		try {
             HandWrite.exit();
            } catch (e) {
	 
	        }
	//alert(actionId)
	  if(actionId == 'submit' && $scope.page.setKeys) {
	    var sendData = {};
	    var keyLen = $scope.page.setKeys.length;
	    for(var i = 0; i < keyLen; i++) {
	      var key = $scope.page.setKeys[i];
	      sendData[key] = $scope.pool[key];
	    }
	    HubSwitch.submit(actionId, sendData, $scope.actionCallback);
	  }
      else {
          HubSwitch.action(actionId, $scope.actionCallback);
      }
	};
	function destory() {
		var inputs = document.getElementsByTagName("input");
		for (var i = 0; i < inputs.length; i ++ ) {
			$("#" + inputs.item(i).id).popover('destroy');
		}
	}
	$scope.actionCallback = function(result) {
		if(result.wait) return;
		if(result.to) {
		  HubSwitch.setFlow(result.flow);
		  //$route.updateParams({pageId: result.to});
          var toPage = HubSwitch.getPage(result.to);
          $window.location.href = toPage.entry + '.html#/pages' + toPage.path + toPage.id;
		}
		/**else {
	
            HubSwitch.setFlow(result.flow);
		    //$route.updateParams({pageId: ''});
           // $window.location.href = 'index.html#/pages'
		}
		**/
	}

	$window.document.onkeypress = function(event) {
	  var inputKey = String.fromCharCode(event.charCode);
	 
	  if(inputKey == 'h') {
	   // $scope.action('home');//屏蔽空格
		return;
	  }
	  if(inputKey == ' ') {
	   // $scope.action('skip');//屏蔽空格
		return;
	  }
	};
}]);

cookControllers.controller('AdminPageCtrl', ['$scope', '$routeParams', 'HubSwitch',
  function($scope, $routeParams, HubSwitch) {
	var page = HubSwitch.getPage($routeParams.pageId);
	$scope.page = page;
	HubSwitch.setPage(page.id);
	$scope.pageId = page.id;
	// 等待下个页面加载结束之后再响应新的action请求
	HubSwitch.setActionStart(false);
    if(page.getKeys) {
        $scope.pool = HubSwitch.getPool().query({key: page.getKeys});
    }
    else {
        $scope.pool = {};
    }
}]);

cookControllers.controller('MediaConnectCtrl', ['$scope', '$timeout',
  function($scope, $timeout) {
    $scope.$on('MediaLoginSuccEvent', function() {
        //alert('MediaConnectCtrl MediaLoginSuccEvent');
		$scope.mediaCall();
    });
    $scope.$on('MediaLoginFailEvent', function() {
        //alert('MediaConnectCtrl MediaLoginFailEvent');
        $scope.action('mediaFail');
    });
    $scope.$on('MediaCallingSuccEvent', function() {
        $scope.action('next');
    });
    $scope.$on('MediaCallingFailEvent', function() {
        $scope.action('mediaFail');
    });

    // 延迟登录视频服务
    var timer = $timeout($scope.mediaLogin, 2000);

}]);

cookControllers.controller('MediaAuthorizedCtrl', ['$scope', '$timeout',
  function($scope, $timeout) {
    $scope.send = 'init';
    $scope.recv = 'init';
    $scope.$on('MediaSendDataSuccEvent', function() {

    });
    $scope.$on('MediaRecvMsgEvent', function(event, data) {
        //alert('MediaRecvMsgEvent ' + data);
        $scope.recv = data;
        var rdata = eval('(' + data + ')');
        $scope.mediaLogout();
        switch(rdata.INFO) {
            case '0':
                $scope.action('pass');
                break;
            case '1':
                $scope.action('photo');
                break;
            case '2':
                $scope.action('form');
                break;
            case '3':
                $scope.action('refused');
                break;
            default:
                $scope.action('mediaFail')
                break;
        }
    });
    $scope.sendData = function() {
        var message = {
        	name: $scope.pool.name,
			pid: $scope.pool.pid,
			mobile: $scope.pool.mobile,
			address: $scope.pool.address,
			transactor: $scope.pool.transactor
		};
        $scope.send = JSON.stringify(message);
        $scope.mediaSendData($scope.send);
    }
    $scope.sendFile = function() {
        $scope.mediaSendFile('D:/FaceImg.jpg');
    }
    $scope.hangUp = function() {
        $scope.mediaHangUp();
    }
    // 延迟发送数据
    var timer = $timeout($scope.sendData, 2000);

}]);

