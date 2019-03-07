'use strict';

/* Config Pages */

var cookPages = [{
	entry: "index",
	path: "/",
	pages: [{
		id: "start",
		title: "系统启动"
	},{
		id: "idle",
		title: "空闲页面",
		getKeys: ["I_SIGN","I_ISSUER", "I_INQ", "I_TRF_TFC", "I_AINQ_DETAIL", "I_CBILL","I_PassUnlock","I_PassActive","I_PassReset",
			"I_PIN", "I_CWD", "I_NCCWD", "I_DEP", "I_NCDEP", "I_TRF", "I_PassDetial","I_PassQuery","I_PassPin","I_EC", "I_INQ_PBKTrans","I_FaceDEPAndCWD","Trans_zhgl","I_PassDeposit","I_PassDraw","I_PassTransfer",
			"I_PIN_PBKTrans", "I_DEP_PBKTrans", "I_CWD_PBKTrans", "I_PBKFill", "I_RFTrans","anyChatVideo","I_Trans_BCredit","terminalId","Trans_Water","Trans_Electric","Trans_Gas","Trans_ADF","Trans_TVF","Trans_AYF","Trans_djf",
			"I_PassTransferCancel","I_CredCardDeposit","I_CredCardDraw","I_CredCardActive","I_CredCardReset","I_CreditBindAcc","I_LoansCounter","Trans_dk","Trans_cz","I_FCM","Trans_SMS","Trans_EBANK","Trans_UKEY",
			"I_FRA","I_FPS","I_FSC","I_FPSC","I_FPR","I_CallDeposit","I_FPD","I_YNC","I_FCC","I_NomalFixed","I_LoansGrant","Trans_TRF","Trans_TRFCANCEL","Trans_yhk","Trans_qy","Trans_lc","Trans_xyk","I_CreditQueryDetial","I_CredCardTransfer",
			"I_LoansQuery","I_LoansRevert","I_LoansSign","I_RemoveFreeze","I_ALL","I_STN","Trans_cusinfomodify","Trans_cardhanging","Trans_Query","Trans_Detial","Trans_PIN","Trans_ECash","I_CredCardPIN","I_CredCardINQ",
			"Trans_cardLoss","Trans_CitizenCardBusi","Trans_cardactive","Trans_cardreplace","Trans_transfersign","Trans_cardpwdreset","defaultMenu","CameraPhotoMode","I_ReceiptPrint","I_ReceiptCheck"],
		
		setButtons: ["I_SIGN","I_ISSUER","I_CitienISSUER", "I_INQ|INQ", "I_TRF_TFC|TRF", "I_AINQ_DETAIL|INQ_DETAIL", "I_CBILL",
			"I_PIN|PIN", "I_CWD|CWD", "I_NCCWD|CWD", "I_DEP|DEP", "I_NCDEP|DEP", "I_TRF|TRF", "I_EC|EC", "I_INQ_PBKTrans|INQ",
			"I_PIN_PBKTrans|PIN", "I_DEP_PBKTrans|DEP", "I_CWD_PBKTrans|CWD", "I_PBKFill", "I_RFTrans","I_Trans_BCredit"]
    },{
		id: "reInputPin",
		title: "密码错重输",
		getKeys: ["page_Eject","customAction"],
		timeout: 60
	},{
		id: "reInputPinAgain",
		title: "密码错重输",
		getKeys: ["page_Eject","customAction"],
		timeout: 60
	},{
		id: "reInputPinQuery",
		title: "密码错重输",
		getKeys: ["page_Eject","customAction"],
		timeout: 60
	},{
		id: "reInputPinQueryCreditCardInfo",
		title: "密码错重输",
		getKeys: ["page_Eject","customAction"],
		timeout: 60
	},{
		id: "reInputPinCard",
		title: "密码错重输",
		timeout: 60
	},{
		id: "inputPinCard",
		title: "密码输入",
		timeout: 60
	},{
		id: "depositInsurance",
		getKeys: ["Fun_MachineName",],
		title: "存款保险",
		timeout: 60
	},{
		id: "media",
		title: "主动呼叫",
		getKeys: ["AnyChat_terminalId", "AnyChat_tellerno", "transTime",
					"AnyChat_orgcode","AnyChat_serial"],
		setKeys: ["AnyChat_terminalId", "AnyChat_tellerno", "AnyChat_orgcode"],
	},{
		id: "cardInsert",
		title: "提示插卡",
		timeout: 30
	},{
		id: "CreditCardInsert",
		title: "提示插卡",
		timeout: 30
	},{
		id: "CashPayMenu",
		title: "贷记卡无卡有卡按钮",
		timeout: 30
	},{
		id: "BankCardInsert",
		title: "提示插卡",
		timeout: 30
	},{
		id: "RFCardInsert",
		title: "提示放卡",
		timeout: 30
	},{
		id: "transPassword",
		title: "输入密码",
		getKeys: ["page_Eject"],
		timeout: 60
	},{
		id: "chooseStatisfied",
		title: "满意度调查页面",
		timeout: 60
	},{
		id: "mainMenu",
		title: "借记卡主菜单",
		timeout: 90,
		getKeys: ["page_Eject", "INQ", "CWD", "DEP", "PIN", "TRF", "INQ_DETAIL", "NomalFixed", "CallDeposit","I_CWD","I_DEP",
				"AgentFee","Financial","Child_DETAIL","signflg","EC","TRFCancel","Trans_cusinfomodify","Trans_cardhanging",
				"QUERY_DETAIL","Trans_socialActive","Trans_minshengSocial","Trans_CitizenCardBusi","CreditRepayment","I_RemoveFreeze","I_ALL","I_STN"],
		setButtons: ["INQ", "CWD", "DEP", "PIN", "TRF", "INQ_DETAIL", "NomalFixed", "CallDeposit","AgentFee",
				"Financial","Child_DETAIL","TRFCancel","CusInfoModify","LocalCardHanging","QUERY_DETAIL","CreditRepayment","RemoveFreeze","ALL","STN"]
  	},{
		id: "creditMainMenu",
		title: "贷记卡主菜单",
		timeout: 90,
		getKeys: ["INQ", "CWD", "DEP", "PIN", "TRF", "CBILL", "EC","TRFCancel","RepayBindAccount","I_CWD","I_DEP",
			"CreditCardHanging","idcardflg"],
		setButtons: ["INQ", "CWD", "DEP", "PIN", "TRF", "CBILL","TRFCancel","RepayBindAccount","CreditCardHanging"]
  	},{
		id: "PBKMainMenu",
		title: "刷折主菜单",
		timeout: 120,
		getKeys: ["INQ", "PIN", "DEP", "CWD"],
		setButtons: ["INQ", "PIN", "DEP", "CWD"]
  	},{
		id: "brushTipPassbook",
		title: "请刷存折",
		timeout: 60
	},{
		id: "brushTipPassbookError",
		title: "刷折无效，请刷存折",
		timeout: 60
	},{
		id: "passbookInsert",
		title: "插入存折",
		timeout: 60
	},{
		id: "turnPageEjectPBK",
		title: "定期补登折翻页",
		timeout: 60
	},{
		id: "turnPageEjectUsp",
		title: "零存整取补登折翻页",
		timeout: 60
	},{
		id: "transSucceed",
		title: "交易成功",
		getKeys: ["page_transAmount", "page_transFee","page_Eject", "customAction", "receipt", "crown","menuAction","ST_TRFTimeType"],
		setButtons:["receipt", "crown"],
		timeout: 60
	},{
		id: "NCDEPSucceed",
		title: "无卡无折存款交易成功",
		getKeys: ["page_transAmount", "page_transFee", "page_Eject", "receipt", "crown"],
		setButtons:["receipt", "crown"],
		timeout: 30
	},{
		id: "NCCWDSucceed",
		title: "无卡取款交易成功",
		getKeys: ["page_transAmount", "page_transFee", "page_Eject", "receipt", "crown", "NCCWDContinue"],
		setButtons:["receipt", "crown", "NCCWDContinue"],
		timeout: 30
	},{
		id: "RPTStatusTips",
		title: "凭条故障提示",
		getKeys: ["page_Eject"],
		timeout: 70
	},{
		id: "RPTStatusTipsBCredit",
		title: "凭条故障提示",
		getKeys: ["page_Eject"],
		timeout: 70
	},{
		id: "RPTStatusErrorTips",
		title: "凭条故障提示",
		getKeys: ["page_Eject"],
		timeout: 70
	},{
		id: "passbookFillInvalid",
		title: "存折补登无效折",
		timeout: 5
	},{
		id: "CataSmsSelete",
		title: "客户选择卡折交易",
		timeout: 60
	},{
		id: "CataCAPSelete",
		title: "短信签约选择介质类型",
		getKeys: ["AgainselectedTrans"],
		timeout: 60
	},{
		id: "CataCAPSeletehtml",
		title: "短信签约选择介质类型",
		getKeys: ["AgainselectedTrans"],
		timeout: 60
	},{
		id: "SeleteCata",
		title: "短信签约选择介质类型",
		getKeys: ["AgainselectedTrans"],
		timeout: 60
	},{
		id: "CataFinancialSelete",
		title: "客户选择卡折交易-理财交易",
		timeout: 60
	},{
		id: "CataCASelete",
		title: "客户选择卡折交易",
		timeout: 60
	},{
		id: "IDSelect",
		title: "客户选择插入身份证、输入身份证号",
		timeout: 60
	}]
}, {
	entry: "index",
	path: "/MEDIA/",
	pages: [{
		id: "media1",
		title: "Media1",
		timeout: 90
	},{
		id: "media2",
		title: "Media2",
		timeout: 90
	},{
		id: "media3",
		title: "Media3",
		timeout: 90
	}]
}, {
	entry: "auxiliary",
	path: "/",
	pages: [{
		id: "auxiliary",
		title: "辅助频广告视频"
	}]
},  {
	entry: "video",
	path: "/",
	pages: [{
		id: "video",
		title: "播放视频",
		timeout: 90
	}]
},{
	entry: "camera_amface",
	path: "/",
	pages: [{
		id: "camera_amface",
		title: "活体拍照"
	}]
},{
	entry: "adminStart",
	path: "/",
	pages: [{
		id: "adminStart",
		YH_Hand:"1",
		title: "维护待机"
	}]
}, {
	entry: "advertise",
	path: "/",
	pages: [{
		id: "advertise",
		title: "广告页面"
	}]
},{
	entry: "index",
	path: "/CARD/",
	pages: [{
		id: "Doc_PrintSuccess",
		title: "取走回单",
		timeout: 15
	},{
		id: "UpdateMobileFailTips",
		title: "提示客户手机号修改失败，请至客户信息修改交易维护",
		getKeys: ["page_message"],
		timeout: 30
	},{
		id: "eject_card",
		title: "取走卡片",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName"],
		timeout: 20
	},{
		id: "cardTypeEmpty",
		title: "无可选择的卡类型",
		timeout: 5
	},{
		id: "IDCardInsert",
		title: "插入身份证",
		timeout: 58
	},{
		id: "IDCardInsertALL",
		title: "插入身份证",
		timeout: 58
	},{
		id: "IDCardInsertALLFirst",
		title: "插入身份证",
		timeout: 58
	},{
		id: "cardDispenser",
		title: "发卡处理中",
		timeout: 30
	},{
		id: "UKeyDispenser",
		title: "发UKey处理中",
		timeout: 30
	},{
		id: "UKTaken",
		title: "发UKey处理中",
		timeout: 30
	},{
		id: "camera_photo",
		title: "拍照"
	},{
		id: "camera_photo_hy",
		title: "拍照",
	},{
		id: "camera_photo_yc",
		title: "拍照",
	},{
		id: "camera_photo_error",
		title: "拍照"
	},{
		id: "camera_photo_hy_error",
		title: "拍照",
	},{
		id: "camera_photo_yc_error",
		title: "拍照",
	},{
		id: "cardTaken",
		title: "开卡取卡提示",
		timeout: 30
	},{
		id: "card_eject",
		title: "开卡取卡提示",
		timeout: 30
	},{
		id: "id_eject",
		title: "身份证取回",
		timeout: 70
	},{
		id: "host_custom",
		title: "用户信息检测",
		timeout: 70
	},{
		id: "apply_agreement",
		title: "申请-阅读协议",
		timeout: 90
	},{
		id: "applyCardAgreement",
		title: "申请-阅读借记卡协议",
		timeout: 90
	},{
		id: "apply_telemarket",
		title: "申请-阅读防电信诈骗书",
		timeout: 90
	},{
		id: "anyChatProcessing",
		title: "正在发送业务数据",
		getKeys: ["AnyChat_terminalId", "AnyChat_tellerno", "transTime",
					"AnyChat_orgcode","AnyChat_serial"],
		setKeys: ["AnyChat_terminalId", "AnyChat_tellerno","AnyChat_orgcode"],
		timeout: 100
	},{
		id: "rePhotoProcessing",
		title: "重新拍照",
		timeout: 30
	},{
		id: "anyChatInfoProcessing",
		title: "正在发送客户信息",
		timeout: 90
	},{
		id: "anyChatUpFormImageProcessing",
		title: "上传表单图片",
		timeout: 90
	},{
		id: "UpFormImageProcessing",
		title: "上传表单图片",
		timeout: 120
	},{
		id: "anyChatUpFormImageVideoProcessing",
		title: "上传表单图片",
		timeout: 90
	},{
		id: "anyChatLoginProcessing",
		title: "登录anychat",
		timeout: 60
	},{
		id: "anyChatUpIDCardImageProcessing",
		title: "上传身份证图片",
		timeout: 60
	},{
		id: "UpIDCardImageProcessing",
		title: "上传身份证图片",
		timeout: 120
	},{
		id: "anyChatUpCIMFormImageProcessing",
		title: "上传表单图片",
		timeout: 60
	},{
		id: "anyChatUpJournalProcessing",
		title: "上传日志",
		timeout: 90
	},{
		id: "anyChatFormProcessing",
		title: "正在发送客户信息",
		timeout: 90
	},{
		id: "anyChatFormRefusedProcessing",
		title: "正在通知坐席审核失败",
		timeout: 3
	},{
		id: "anyChatFISRefusedProcessing",
		title: "正在通知坐席指纹比对失败",
		timeout: 3
	},{
		id: "reAnyChatFormProcessing",
		title: "正在发送客户信息",
		timeout: 90
	},{
		id: "host_agent_begin",
		title: "坐席开始",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName"],
		timeout: 70
	},{
		id: "apply_cardType",
		title: "申请-卡类型",
		getDetails: ["detail","ST_Count","Trans_CitizenCardBusi"],
		setKeys: ["chosedCardType"],
		pageCount: 10,
		timeout: 70
	},{
		id: "apply_citizenCardType",
		title: "申请-卡类型",
		getDetails: ["detail","ST_Count","Trans_CitizenCardBusi"],
		setKeys: ["chosedCardType"],
		pageCount: 10,
		timeout: 70
	},{
		id: "apply_form",
		title: "申请-填写表单",
		YH_Hand:"0",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName",
					"name", "pid", "mobile", "telephone", "address",
					"signNetBank", "agreeNetBank","ST_EngName","ST_MrgFlag","ST_CustTtl","ST_StayPostcode",
					"signMobileBank", "agreeMobileBank","job","ST_Register","SF_ApplyCardCustInfoQryResult"],
		setKeys: ["mobile", "telephone", "address","ST_EngName","ST_MrgFlag","ST_CustTtl","ST_StayPostcode",
					"signNetBank", "agreeNetBank","occupCode",
					"signMobileBank", "agreeMobileBank","job","ST_Register"],
		timeout: 240
			},{
		id: "apply_formNew",
		title: "申请-填写表单",
		YH_Hand:"0",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName","ST_ResidentFlag",
					"name", "pid", "mobile", "telephone", "address",
					"signNetBank", "agreeNetBank","ST_EngName","ST_MrgFlag","ST_CustTtl","ST_StayPostcode",
					"signMobileBank", "agreeMobileBank","job","ST_Register","SF_ApplyCardCustInfoQryResult"],
		setKeys: ["mobile", "telephone", "address","ST_EngName","ST_MrgFlag","ST_CustTtl","ST_StayPostcode",
					"signNetBank", "agreeNetBank","occupCode",
					"signMobileBank", "agreeMobileBank","job","ST_Register","ST_ResidentFlag","IsTax"],
		timeout: 240
	},{
		id: "apply_formAgain",
		title: "重新申请-填写表单",
		YH_Hand:"0",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName",
					"name", "pid", "mobile", "telephone", "address",
					"signNetBank", "agreeNetBank",
					"signMobileBank", "agreeMobileBank","job"],
		setKeys: ["mobile", "telephone", "address",
					"signNetBank", "agreeNetBank",
					"signMobileBank", "agreeMobileBank","job"],
		timeout: 120
	},{
		id: "PERID",
		title: "回单显示",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno", "transDate", 
		          "transTime","ST_AccType","ST_VirtualCardType","job","mobile","address","PERresponseCode","PERerrorMessage",
				  "adminUserName","ST_CardSmsSign","ST_CardAtmSign","ST_CardTelSign","ST_AccType","ST_EBankIsSign","ST_SmsIsSign",
				  "chosedCardType"],
		timeout: 60
	},{
		id: "IDCardForm",
		title: "身份证正反面表单",
	},{
		id: "PERIDWithSign",
		title: "回单显示",
		YH_Hand:"0",
		getKeys: ["chosedCardType","ST_bankConf","ST_AccType","ST_agentType","ST_agentId","ST_agentName","name", "pid", "mobile", "telephone", "address",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate",
		          "transTime","PERresponseCode","PERerrorMessage"],
		timeout: 59
	},{
		id: "PERID_Video",
		title: "回单显示",
		YH_Hand:"0",
		getKeys: ["chosedCardType","ST_bankConf","ST_AccType","ST_agentType","ST_agentId","ST_agentName","name", "pid", "mobile", "telephone", "address",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate",
		          "transTime","PERresponseCode","PERerrorMessage"],
		timeout: 59
	},{
		id: "PERIDForJPG",
		title: "回单转图片",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno", "transDate", 
		          "transTime","ST_AccType","ST_VirtualCardType","job","mobile","address","PERresponseCode","PERerrorMessage",
				  "adminUserName","ST_CardSmsSign","ST_CardAtmSign","ST_CardTelSign","ST_AccType","ST_EBankIsSign","ST_SmsIsSign",
				  "chosedCardType"],
	},{
		id: "host_agent_authorized",
		title: "坐席通讯",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName"],
		timeout: 70
	},{
		id: "agent_authorized",
		getKeys: ["name", "pid", "mobile", "telephone", "address",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate",
		          "transTime","PERresponseCode","PERerrorMessage"],
		title: "现场审核",
		timeout: 100
	},{
		id: "checkFISOK",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno", "transDate", 
		          "transTime","ST_AccType","ST_VirtualCardType","job","mobile","address","PERresponseCode","PERerrorMessage",
				  "adminUserName","ST_CardSmsSign","ST_CardAtmSign","ST_CardTelSign","ST_AccType","ST_EBankIsSign","ST_SmsIsSign",
				  "chosedCardType"],
		title: "现场审核",
		timeout: 60
	},{
		id: "checkFISOKVideo",
		getKeys: ["chosedCardType","ST_bankConf","ST_AccType","ST_agentType","ST_agentId","ST_agentName","name", "pid", "mobile", "telephone", "address",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate",
		          "transTime","PERresponseCode","PERerrorMessage"],
		title: "现场审核",
		timeout: 60
	},{
		id: "finger_auth",
		title: "指纹授权",
		timeout: 60
	},{
		id: "finger_authError",
		title: "指纹授权",
		timeout: 59
	},{
		id: "finger_authError_PERID",
		title: "指纹授权",
		timeout: 59
	},{
		id: "PERID_finger",
		title: "指纹授权",
		timeout: 59
	},{
		id: "SignImgExcute",
		title: "签名图片透明化",
	},{
		id: "finger_authError_PERID_Video",
		title: "指纹授权",
		timeout: 59
	},{
		id: "finger_authError_PERID_WithSign",
		title: "指纹授权",
		timeout: 59
	},{
		id: "finger_start",
		title: "指纹开始",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName"],
		timeout: 30
	},{
		id: "finger_scan",
		title: "指纹采集",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName"],
		timeout: 5
	},{
		id: "finger_end",
		title: "指纹结束",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName"],
		timeout: 3
	},{
		id: "finger_success",
		title: "指纹采集成功",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName"],
		timeout: 2
	},{
		id: "host_blank_verify",
		title: "主机-空白卡验证",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName"],
		timeout: 70
	},{
		id: "pad_password",
		title: "申请-设置卡密码",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName"],
		timeout: 60
	},{
		id: "pad_password2",
		title: "申请-确认密码",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName"],
		timeout: 60
	},{
		id: "pad_passwordDiffPin",
		title: "比对密码失败",
		timeout: 60
	},{
		id: "host_account_open",
		title: "申请-发卡开户",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName"],
		timeout: 70
	},{
		id: "apply_success",
		title: "申请-开卡成功",
		setButtons:["receipt"],
		getKeys: ["cardNo","receipt","issueoffice", "abatedate", "viewCustomerName",
					"name", "pid", "mobile", "telephone", "address","ST_CardAtmSignSucc","ST_CardSmsSignSucc",
					"ST_CardTelSignSucc","ST_CardSmsSign","ST_CardAtmSign","ST_CardTelSign","ST_VirtualCardType",
					"ST_SmsErrorMessage","ST_TRFErrorMessage","ST_EBankErrorMessage","ST_AccType","page_TransTime",
					"page_TransDate","terminalId"],
		timeout: 70
	},{
		id: "cardBinErrorInfo",
		title: "提示发卡卡bin错误",
		timeout: 5
	},{
		id: "receipt_prompt",
		title: "是否打印凭条",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName"],
		timeout: 70
	},{
		id: "agent_submit",
		title: "提交交易结果",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName"],
		timeout: 5
	},{
		id: "agent_end",
		title: "坐席结束",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName"],
		timeout: 70
	},{
		id: "media_connect",
		title: "连接视频",
		getKeys: ["AnyChat_terminalId", "AnyChat_tellerno", "transTime",
					"AnyChat_orgcode","AnyChat_serial"],
		setKeys: ["AnyChat_terminalId", "AnyChat_tellerno", "AnyChat_orgcode"],
	},{
		id: "media_authorized",
		title: "视频审核",
		getKeys: ["name", "pid", "gender", "brithday", "mobile", "telephone", "address", "issueoffice", "issuedate", "abatedate" ],
		timeout: 120
	},{
		id: "applyFirstTips",
		title: "提示客户开二三类户",
		timeout: 30
	},{
		id: "applySignConfirm",
		title: "开卡后是否继续签约",
		setKeys: ["ST_CardSmsSign", "ST_CardAtmSign", "ST_CardTelSign","ST_ApplyCheckedAgree","ST_ReferrerName","ST_ReferrerNo","ST_ReferrerType"],
		getKeys: ["ST_CardSmsSign", "ST_CardAtmSign", "ST_CardTelSign","ST_ApplyCheckedAgree","ST_AccType","ST_VirtualCardType","ST_ReferrerName","ST_ReferrerNo","ST_ReferrerType"],
		timeout: 90
	},{
		id: "ApplyMsgSignFeeDetail",
		title: "短信签约套餐明细页面1",
		setKeys:["ST_QY_packId","ST_QY_fee"],
		getDetails: ["detail","name","pid","ST_CardAtmSign","ST_CardTelSign","ST_QY_packId","ST_QY_fee"],
		timeout: 120
	},{
		id: "ApplyMsgSignFeePage",
		title: "短信签约套餐明细页面2",
		setKeys:["ST_QY_fee"],
		getKeys: ["ST_Pay","ST_Name","ST_QY_packId","name","pid","ST_CardAtmSign","ST_CardTelSign","ST_QY_fee"],
		timeout: 120
	},{
		id: "ApplyTransSign_form",
		title: "填写转账签约表单",
		YH_Hand:"0",
		setKeys:["ATS_funCode","transAmount","ATS_enddate","banktype"],
		getDetails: ["atmTransSignDetail","name","pid","ST_CardSmsSign","ST_CardTelSign","ATS_enddate","ATS_funCode","banktype","transAmount"],
		timeout: 120
	},{
		id: "ApplyPBank_form",
		title: "填写手机银行签约表单",
		setKeys:["ST_TRFOneLimitAmount","ST_TRFDayLimitAmount","ST_MessOneLimitAmount","ST_MessDayLimitAmount",
			"ST_BankInnerTransfer","ST_CrossBankTransfer","CifManagerSeq","CifManagerName","CifManagerTel",
			"ST_ReferrerType","ST_ReferrerNo","ST_ReferrerName","ST_StayPostcode","ST_SecretNotice"],
		getKeys: ["ST_TRFOneLimitAmount","ST_TRFDayLimitAmount","ST_MessOneLimitAmount","ST_MessDayLimitAmount",
			"ST_EmployeeDeptName","ST_CardSmsSign","ST_CardAtmSign"],
		timeout: 120
	},{
		id: "PERIDWithApplySign",
		title: "回单显示",
		YH_Hand:"0",
		getKeys: ["ST_CardSmsSign","ST_CardAtmSign","ST_CardTelSign","name","pid","ST_QY_packId","ST_QY_fee",
				  "ATS_enddate","transAmount","ATS_funCode", "banktype", "ST_MessOneLimitAmount",
				  "ST_MessDayLimitAmount", "ST_BankInnerTransfer","ST_CrossBankTransfer","ST_ReferrerType",
		          "ST_ReferrerNo","ST_ReferrerName","ST_StayPostcode","ST_SecretNotice","PERresponseCode",
				  "PERerrorMessage","ST_EBankIsSign","ST_SmsIsSign","ST_TRFIsSign","ST_LoginId"],
		timeout: 90
	},{
		id: "PERIDApplySignForJPG",
		title: "回单转图片",
		getKeys: ["ST_CardSmsSign","ST_CardAtmSign","ST_CardTelSign","name","pid","ST_QY_packId","ST_QY_fee",
				  "ATS_enddate","transAmount","ATS_funCode", "banktype", "ST_MessOneLimitAmount",
				  "ST_MessDayLimitAmount", "ST_BankInnerTransfer","ST_CrossBankTransfer","ST_ReferrerType",
		          "ST_ReferrerNo","ST_ReferrerName","ST_StayPostcode","ST_SecretNotice","PERresponseCode",
				  "PERerrorMessage","ST_EBankIsSign","ST_SmsIsSign","ST_TRFIsSign","ST_LoginId"],
	},{
		id: "applySignAgreement",
		title: "开卡后签约阅读协议",
		timeout: 120
	},{
		id: "ApplySignCusInfoTips",
		title: "提示客户去柜面合并客户信息",
		timeout: 5
	},{
		id: "ApplySignSignedTips",
		title: "提示客户已进行过手机银行签约",
		timeout: 5
	},{
		id: "ApplySignSignedResult",
		title: "提示客户已短信签约",
		timeout: 5
	},{
		id: "apply_AccountType",
		title: "选择Ⅱ、Ⅲ账户类型",
		setKeys: ["ST_AccType","ST_VirtualCardType"],
		timeout: 60
	},{
		id: "inputApplyBindAcc",
		title: "输入Ⅰ类户账号",
		setKeys : ["payeracc"],
		timeout: 60
	},{
		id: "inputApplyBindAccError",
		title: "重新输入Ⅰ类户账号",
		setKeys : ["payeracc"],
		timeout: 60
	},{
		id: "AccountCheckError",
		title: "提示客户账户验证失败",
		timeout: 5
	},{
		id: "PERID_Sign_CardActive",
		title: "卡激活表单",
		YH_Hand:"0",
		getKeys: ["name", "pid", "mobile", "telephone", "address","adminUserName",
		          "job","Apply_terminalId","gender","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate",
		          "transTime","PERresponseCode","PERerrorMessage"],
		timeout: 60
	},{
		id: "checkFISOK_CardActive",
		getKeys: ["name", "pid", "mobile", "telephone", "address","adminUserName",
		          "job","Apply_terminalId","gender","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate",
		          "transTime","PERresponseCode","PERerrorMessage"],
		title: "卡激活现场审核",
		timeout: 60
	},{
		id: "PERIDForJPG_CardACTIVE",
		title: "卡激活回单转图片",
		getKeys: ["logoPath","name", "pid", "mobile", "telephone","address",
		          "job","Apply_terminalId","gender","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","adminUserName",
		          "transTime","PERresponseCode","PERerrorMessage"],
	},{
		id: "PERID_Sign_CardReset",
		title: "卡密码重置表单",
		YH_Hand:"0",
		getKeys: ["name", "pid", "mobile", "telephone", "address","adminUserName","ST_PinResetType",
		          "job","Apply_terminalId","gender","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate",
		          "transTime","PERresponseCode","PERerrorMessage"],
		timeout: 60
	},{
		id: "checkFISOK_CardReset",
		getKeys: ["name", "pid", "mobile", "telephone", "address","adminUserName","ST_PinResetType",
		          "job","Apply_terminalId","gender","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate",
		          "transTime","PERresponseCode","PERerrorMessage"],
		title: "卡密码重置审核",
		timeout: 60
	},{
		id: "PERIDForJPG_CardReset",
		title: "卡密码重置回单转图片",
		getKeys: ["logoPath","name", "pid", "mobile", "telephone","address","ST_PinResetType",
		          "job","Apply_terminalId","gender","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","adminUserName",
		          "transTime","PERresponseCode","PERerrorMessage"],
	}]
}, {
	entry: "index",
	path: "/DEP/",
	pages: [{
		id: "inputDepositAmountError",
		title: "存款金额输入错",
		setKeys: ["input_DEPAmount","page_Eject"],
		getKeys: ["page_DEPValue", "page_DEPMaxAmount"],
		timeout: 45
	},{
		id: "DEPMenu",
		title: "存款菜单",
		getKeys: ["I_INQ"],
		timeout: 30
	},{
		id: "DEPAmountMenu",
		title: "存款金额选择",
		setKeys : ["input_DEPAmount"],
		getKeys: ["page_Eject"],
		timeout: 45
	},{
		id: "LocalBankAccNoForFace",
		title: "客户选择借记卡账户",
		getDetails:["detail","menuAction"],
		setKeys : ["payeracc","ST_CardCatlog"],
		pageCount: 10,
		timeout: 90
	},{
		id: "inputDepositAmount",
		title: "输入存款金额",
		setKeys: ["input_DEPAmount"],
		getKeys: ["page_DEPValue", "page_DEPMaxAmount","page_Eject"],
		timeout: 45
	}]
}, {
	entry: "index",
	path: "/CWD/",
	pages: [{
		id: "inputWithdrawAmount",
		title: "取款金额页面",
		setKeys: ["transAmount"],
		getKeys: ["page_CWDValue", "page_CWDMaxAmount", "page_CWDAllValue"],
		timeout: 30
	},{
		id: "CWDMenu",
		title: "取款菜单",
		getKeys: ["I_INQ"],
		timeout: 30
	},{
		id: "PERIDForJPG_FaceDraw",
		title: "刷脸取款转图片",
		getKeys: ["logoPath","accountName", "certID", "mobile", "telephone", "ST_CIMAddress","isUserSign","transAmount",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","gender",
		          "transTime","PERresponseCode","PERerrorMessage"],
	},{
		id: "PERIDForJPG_FaceDeposit",
		title: "刷脸存款转图片",
		getKeys: ["logoPath","accountName", "certID", "mobile", "telephone", "ST_CIMAddress","isUserSign","transAmount",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","gender",
		          "transTime","PERresponseCode","PERerrorMessage"],
	},{
		id: "FaceDEPAndCWDMenu",
		title: "刷脸存取款菜单",
		getKeys: ["I_DEP", "I_CWD", "I_INQ"],
		timeout: 30
	},{
		id: "inputCertID",
		title: "输入身份证号",
		setKeys: ["pid"],
		timeout: 60
	},{
		id: "inputWithdrawAmountError",
		title: "取款金额验证失败页面",
		setKeys: ["transAmount"],
		getKeys: ["page_CWDValue", "page_CWDMaxAmount", "page_CWDAllValue"],
		timeout: 30
	},{
		id: "inputNCWithdrawAmount",
		title: "预约取款金额页面",
		setKeys: ["transAmount"],
		getKeys: ["page_CWDValue", "page_CWDMaxAmount", "orderAmount"],
		timeout: 30
	},{
		id: "inputFaceWithdrawAmount",
		title: "刷脸取款金额页面",
		setKeys: ["transAmount"],
		getKeys: ["page_CWDValue", "page_CWDMaxAmount", "orderAmount"],
		timeout: 30
	},{
		id: "inputNCWithdrawAmountError",
		title: "预约取款金额验证失败页面",
		setKeys: ["transAmount"],
		getKeys: ["page_CWDValue", "page_CWDMaxAmount", "orderAmount"],
		timeout: 30
	},{
		id: "inputWithdrawAmount_10",
		title: "10元取款金额页面",
		setKeys: ["transAmount"],
		getKeys: ["page_CWDValue", "page_CWDMaxAmount"],
		timeout: 30
	},{
		id: "inputWithdrawAmountError_10",
		title: "10元取款金额页面",
		setKeys: ["transAmount"],
		getKeys: ["page_CWDValue", "page_CWDMaxAmount"],
		timeout: 30
	},{
		id: "inputWithdrawalTEL",
		title: "无卡取款手机号输入",
		setKeys: ["input_NCCWDTELNumber"],
		timeout: 30
	},{
		id: "inputWithdrawalTELError",
		title: "无卡取款手机号重新输入",
		setKeys: ["input_NCCWDTELNumber"],
		timeout: 30
	},{
		id: "inputWithdrawalVerifyCodeNumber",
		title: "无卡取款预约码输入",
		setKeys: ["input_NCCWDVerifyCodeNumber"],
		timeout: 30
	},{
		id: "inputWithdrawalVerifyCodeNumberError",
		title: "无卡取款预约码重新输入",
		setKeys: ["input_NCCWDVerifyCodeNumber"],
		timeout: 30
	},{
		id: "cashDispenseSuccess",
		title: "单次取钞成功",
		timeout: 5
	},{
		id: "NCWithdrawEndTransSucceed",
		title: "结束预约",
		timeout: 3
	}]
},  {
	entry: "index",
	path: "/EC/",
	pages: [{
		id: "ECashMenu",
		title: "电子现金主菜单",
		getKeys: ["EC_BALANCE","EC_Detail","EC_Load"],
		setButtons:["EC_BALANCE|EC","EC_Detail|EC","EC_Load|EC"],
		timeout: 60
	},{
		id: "ECashBalance",
		title: "电子现金余额",
		getKeys: ["ECashBalance"],
		timeout: 30
	},{
		id: "ECBalance_Excess",
		title: "电子现金余额超限",
		timeout: 5
	},{
		id: "ECashDetail",
		title: "电子现金明细显示",
		getDetails: ["detail"],
		pageCount: 10,
		timeout: 60
	},{
		id: "inputLoadAmount",
		title: "圈存金额",
		getKeys: ["input_maxECVal","input_maxVal"],
		setKeys: ["transAmount","input_maxVal"],
		timeout: 30
	},{
		id: "inputLoadAmountError",
		title: "圈存金额有误,重新输入",
		getKeys: ["input_maxECVal","input_maxVal"],
		setKeys: ["transAmount"],
		timeout: 30
	},{
		id: "inputUnLoadAmount",
		title: "圈提金额",
		getKeys: ["input_maxECVal","input_maxVal"],
		setKeys: ["transAmount"],
		timeout: 30
	},{
		id: "inputUnLoadAmountError",
		title: "圈提金额有误,重新输入",
		getKeys: ["input_maxECVal","input_maxVal"],
		setKeys: ["transAmount"],
		timeout: 30
	},{
		id: "OtherBusiMenu",
		title: "其他业务二级菜单",
		getKeys: ["ECash","Trans_cusinfomodify","Trans_socialActive","Trans_minshengSocial","Trans_socialLoss","Trans_CitizenCardBusi"],
		setButtons:["ECash|EC"],
		timeout: 30
	},{
		id: "SocialBusiMenu",
		title: "社保卡业务选择界面",
		getKeys: ["Trans_socialActive","Trans_minshengSocial","Trans_socialLoss"],
		timeout: 30
	}]
}, {
	entry: "index",
	path: "/NCDEP/",
	pages: [{
		id: "NCDEP_AccConfirm",
		title: "无卡存款核对",
		getKeys: ["page_DEPAccNo", "page_inAccTranslate"],
		timeout: 30
	},{
		id: "NCDEP_inputDepositAmount",
		title: "无卡存款输入金额",
		setKeys: ["input_DEPAmount"],
		getKeys: ["page_DEPValue", "page_DEPMaxAmount"],
		timeout: 30
	},{
		id: "NCDEP_inputDepositAmountError",
		title: "无卡存款金额错误",
		setKeys: ["input_DEPAmount"],
		getKeys: ["page_DEPValue", "page_DEPMaxAmount"],
		timeout: 30
	},{
		id: "NCPASS_inputDepositAmount",
		title: "无折存款输入金额",
		setKeys: ["input_DEPAmount"],
		getKeys: ["page_DEPValue", "page_DEPMaxAmount"],
		timeout: 30
	},{
		id: "NCPASS_inputDepositAmountError",
		title: "无折存款金额错误",
		setKeys: ["input_DEPAmount"],
		getKeys: ["page_DEPValue", "page_DEPMaxAmount"],
		timeout: 30
	},{
		id: "inputNCDEPPBKAcc",
		title: "无折存款输入账号",
		setKeys: ["input_info"],
		timeout: 60
	},{
		id: "inputNCDEPPBKAccError",
		title: "无折存款账号错误",
		setKeys: ["input_info"],
		timeout: 60
	},{
		id: "inputNCDEPAcc",
		title: "无卡存款输入账号",
		YH_Hand:"0",
		setKeys: ["input_info"],
		timeout: 60
	},{
		id: "inputNCDEPAccError",
		title: "无卡存款账号错误",
		setKeys: ["input_info"],
		timeout: 60
	},{
		id: "NCDEP_accountTypeSelect",
		title: "选择存款账户类型",
		timeout: 30
	}]
}, {
	entry: "index",
	path: "/PIN/",
	pages: [{
		id: "changePinType",
		getKeys: ["page_Eject"],
		title: "贷记卡改密交易类型选择",
		setKeys:["OPTION"],				
		timeout: 45
	},{
		id: "inputOldPin",
		title: "输入原密码",
		getKeys: ["page_Eject"],
		timeout: 60
	},{
		id: "inputNewPin",
		title: "输入新密码",
		getKeys: ["page_Eject"],
		timeout: 60
	},{
		id: "reInputNewPin",
		title: "新旧密码一致，重新输入新密码",
		getKeys: ["page_Eject"],
		timeout: 60
	},{
		id: "reInputNewPinAgain",
		title: "新旧密码一致，重新输入新密码",
		getKeys: ["page_Eject"],
		timeout: 60
	},{
		id: "inputNewPinAgain",
		title: "二次输入新密码",
		getKeys: ["page_Eject"],
		timeout: 60
	},{
		id: "inputPinDiffPin",
		title: "二次输入新密码",
		getKeys: ["page_Eject"],
		timeout: 60
	},{
		id: "changePinSucceed",
		title: "密码修改成功",
		timeout: 5
	},{
		id: "InputPinTimesout",
		title: "输入次数超限",
		timeout: 3
	},{
		id: "InputPinTimesoutAgain",
		title: "输入次数超限",
		timeout: 3
	},{
		id: "reInputOldPin",
		title: "密码错重输",
		getKeys: ["page_Eject","customAction"],
		timeout: 60
	},{
		id: "NoQueryPasswordShow",
		title: "无查询密码页面显示",
		timeout: 5
	},{
		id: "CreditResetPinType",
		getKeys: ["page_Eject"],
		title: "贷记卡密码重置类型选择",
		setKeys:["ST_PinResetType"],				
		timeout: 45
	}]
}, {
	entry: "index",
	path: "/PLATFORM/",
	pages: [{
		id: "CardQuit_Processing",
		title: "正在处理"
	},{
		id: "CardQuit_CardReread",
		title: "重新读卡",
		timeout: 30
	},{
		id: "CardQuit_CardRetain",
		title: "超时吞卡",
		timeout: 5
	},{
		id: "CardQuit_ApplyCardRetain",
		title: "失败吞卡",
		timeout: 5
	},{
		id: "CardQuit_CardTaken",
		title: "取卡提示",
		timeout: 30
	},{
		id: "CardQuit_PassbookTaken",
		title: "折取回",
		timeout: 30
	},{
		id: "CardQuit_PersonCardTaken",
		title: "身份证取回",
		timeout: 30
	},{
		id: "CardQuit_ContactlessCardTaken",
		title: "取非接卡提示",
		timeout: 30
	},{
		id: "CashAccept_EjectCash",
		title: "正在退钞",
	},{
		id: "CashAccept_EjectCashTaken",
		title: "取回退钞",
		timeout: 45
	},{
		id: "CashAccept_Insert",
		getKeys: ["page_DEPValue", "page_DEPNumber"],
		title: "存款放钞",
		timeout: 45
	},{
		id: "CashAccept_InsertProcessing",
		title: "正在处理"
	},{
		id: "CashAccept_NoCash",
		title: "存款验证无钞",
		timeout: 3
	},{
		id: "CashAccept_NoCashTimesout",
		title: "存款验证无钞",
		timeout: 3
	},{
		id: "CashAccept_OverCashTaken",
		title: "取多余钞票",
		timeout: 45
	},{
		id: "CashAccept_Processing",
		title: "存款准备页面",
	},{
		id: "CashAccept_RetractCash",
		title: "正在存款吞钞",
	},{
		id: "CashAccept_UnrecognizedCashTaken",
		title: "取拒钞",
		timeout: 45
	},{
		id: "CashAccept_Verify",
		title: "正在验钞",
	},{
		id: "CashAccept_VerifyResult",
		getKeys: ["page_DEP10Value", "menuAction","ST_CYCLDEPAMT", "page_DEPNumber", "page_DEP50Value", "page_DEP100Value", "page_DEPTotalValue", "DEP_ADDCASH"],
		setButtons: ["DEP_ADDCASH"],
		title: "验钞结果",
		timeout: 30
	},{
		id: "CashDispense_CashTaken",
		title: "请取走钞票",
		timeout: 45
	},{
		id: "CashDispense_Processing",
		title: "正在准备钞票",
	},{
		id: "CashDispense_RetractCash",
		title: "正在取款吞钞",
	},{
		id: "CashInBoxes_Processing",
		title: "正在入钞箱",
	},{
		id: "Common_DeviceReset",
		title: "正在复位"
	},{
		id: "Common_InputTimesout",
		title: "输入次数超限",
		timeout: 3
	},{
		id: "Common_RuntimeException",
		title: "服务取消",
		timeout: 3
	},{
		id: "Common_TransProcessing",
		title: "联机交易"
	},{
		id: "Common_TransTimeout",
		title: "提示客户通讯异常",
		timeout: 5
	},{
		id: "Common_Processing",
		title: "正在处理"
	},{
		id: "Common_FlowProcessing",
		title: "正在处理",
	},{
		id: "Common_CustomEndProcessing",
		title: "正在处理",
		timeout: 3
	},{
		id: "Common_MediaProcessing",
		title: "正在处理"
	},{
		id: "Common_Welcome",
		title: "谢谢使用",
		timeout: 3
	},{
		id: "Common_IDMessProcessing",
		title: "上送联网核查信息",
		timeout: 30
	},{
		id: "Common_IDMessProcessingOnce",
		title: "上送联网核查信息",
		timeout: 30
	},{
		id: "Common_CustInfoQryProcessingTimeout",
		title: "查询客户信息超时上送信息",
		timeout: 30
	},{
		id: "Common_CustInfoQryProcessingSuccess",
		title: "查询客户信息成功上送信息",
		timeout: 30
	},{
		id: "Common_CustInfoQryProcessingFailure",
		title: "查询客户信息失败上送信息",
		timeout: 30
	},{
		id: "CustomBegin_ICFailed",
		title: "服务取消2",
		timeout: 3
	},{
		id: "CustomBegin_Track",
		title: "读卡"
	},{
		id: "CustomBegin_IC",
		title: "读卡"
	},{
		id: "GetInfo_InvalidCard",
		title: "不能识别卡",
		timeout: 5
	},{
		id: "GetInfo_InvalidApplyCard",
		title: "不能识别卡",
		timeout: 5
	},{
		id: "GetInfo_InvalidPassBook",
		title: "不能识别存折",
		timeout: 5
	},{
		id: "GetInfo_InvalidIDCard",
		title: "不能识别身份证",
		timeout: 5
	},{
		id: "GetInfo_NameDifferent",
		title: "卡号姓名与身份证不一致",
		timeout: 5
	},{
		id: "GetInfo_PidDifferent",
		title: "卡号身份证号与身份证不一致",
		timeout: 5
	},{
		id: "GetInfo_OverLimitIDCard",
		title: "身份证已过期",
		timeout: 5
	},{
		id: "GetInfo_InvalidFIS",
		title: "不能识别指纹",
		timeout: 5
	},{
		id: "HostTrans_ICAppLoadFailed",
		title: "读取芯片失败",
		timeout: 5
	},{
		id: "HostTrans_BankScriptLoadFailed",
		title: "芯片脚本处理失败",
		timeout: 5
	},{
		id: "HostTrans_FailedInfo",
		title: "交易失败",
		getKeys: ["page_message"],
		timeout: 5
	},{
		id: "HostTrans_FailedInfo_large",
		title: "交易失败",
		getKeys: ["page_message"],
		timeout: 5
	},{
		id: "VerifyCodeHostTrans_FailedInfo",
		title: "交易失败",
		getKeys: ["page_message"],
		timeout: 30
	},{
		id: "HostTrans_FailedTips",
		title: "交易失败",
		getKeys: ["page_message"],
		timeout: 5
	},{
		id: "InputAmount_Error",
		title: "交易金额输入错误",
		timeout: 45
	},{
		id: "InputAmount",
		title: "输入交易金额",
		timeout: 45
	},{
		id: "InputInfo",
		title: "输入内容",
		timeout: 45
	},{
		id: "InputInfo_Error",
		title: "输入内容错误",
		timeout: 45
	},{
		id: "InputPin",
		title: "输入登录密码",
		getKeys: ["page_Eject","customAction"],
		timeout:60
	},{
		id: "InputCreditCardPin",
		title: "输入贷记卡帐号密码",
		getKeys: ["page_Eject","customAction"],
		timeout:60
	},{
		id: "Print_PrintFailed",
		title: "打印凭条失败",
		timeout: 5
	},{
		id: "Print_PrintSuccess",
		title: "打印凭条",
		timeout: 5
	},{
		id: "runtime_exception",
		title: "运行时异常",
		timeout: 5
	},{
		id: "deviceError",
		title: "故障提示",
		timeout: 5
	},{
		id: "CitizenError",
		title: "故障提示",
		timeout: 5
	},{
		id: "CardInsertError",
		title: "请插借记卡",
		timeout: 5
	},{
		id: "CreditCardInsertError",
		title: "请插借记卡",
		timeout: 5
	},{
		id: "cardStatusError",
		title: "卡状态异常",
		getKeys: ["ST_CrdStatus"],
		timeout: 5
	},{
		id: "formImageUpLoadError",
		title: "表单上传失败",
		timeout: 5
	},{
		id: "IDCardImageUpLoadError",
		title: "身份证上传失败",
		timeout: 5
	},{
		id: "SignName",
		title: "签名页面",
		timeout: 90
	},{
		id: "PassDepositSignName",
		title: "签名页面",
		timeout: 90
	},{
		id: "Success_BankCardWithDraw",
		title: "交易成功",
		getKeys: ["page_transAmount", "page_TransDate","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "crown","menuAction","page_CardNo"],
		setButtons:["receipt", "crown"],
		timeout: 60
	},{
		id: "Success_BankCardDeposit",
		title: "交易成功",
		getKeys: ["page_transAmount", "page_TransDate","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "crown","menuAction","page_CardNo"],
		setButtons:["receipt", "crown"],
		timeout: 60
	},{
		id: "Success_NCDeposit",
		title: "交易成功",
		getKeys: ["page_transAmount", "page_TransDate","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "crown","menuAction","page_CardNo"],
		setButtons:["receipt", "crown"],
		timeout: 60
	},{
		id: "Success_FaceDeposit",
		title: "交易成功",
		getKeys: ["page_transAmount", "page_TransDate","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "crown","menuAction","page_CardNo"],
		setButtons:["receipt", "crown"],
		timeout: 60
	},{
		id: "Success_FaceWithdraw",
		title: "交易成功",
		getKeys: ["page_transAmount", "page_TransDate","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "crown","menuAction","page_CardNo"],
		setButtons:["receipt", "crown"],
		timeout: 60
	},{
		id: "Success_NCWithDraw",
		title: "交易成功",
		getKeys: ["page_transAmount", "NCCWDContinue","page_TransDate","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "crown","menuAction","page_CardNo"],
		setButtons:["receipt", "crown"],
		timeout: 60
	},{
		id: "Success_CreditTransferRepayment",
		title: "贷记卡转账还款",
		getKeys: ["page_transAmount", "NCCWDContinue","page_TransDate","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "crown","menuAction","page_CardNo"],
		setButtons:["receipt", "crown"],
		timeout: 60
	},{
		id: "Success_CreditNoCardCashRepayment",
		title: "信用卡无卡现金还款",
		getKeys: ["page_transAmount", "page_TransDate","page_TransTime","terminalId","page_inAccTranslate","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "crown","menuAction","page_CardNo"],
		setButtons:["receipt", "crown"],
		timeout: 60
	},{
		id: "Success_CreditCashRepayment",
		title: "信用卡现金还款",
		getKeys: ["page_transAmount", "page_TransDate","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "crown","menuAction","page_CardNo"],
		setButtons:["receipt", "crown"],
		timeout: 60
	},{
		id: "Success_CreditCardWithDraw",
		title: "信用卡取款",
		getKeys: ["page_transAmount", "page_TransDate","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "crown","menuAction","page_CardNo"],
		setButtons:["receipt", "crown"],
		timeout: 60
	},{
		id: "SelectFunction",
		title: "请选择服务项目",
		timeout: 45
	},{
		id: "ZeroScene_Start",
		title: "系统启动"
	},{
		id: "ZeroScene_advert",
		title: "广告页面"
	},{
		id: "ZeroScene_Maintenance",
		title: "正在维护系统",
	},{
		id: "ZeroScene_OutOfService",
		getKeys: ["stopReason"],
		title: "系统停止"
	},{
		id: "ZeroScene_WaitingCardCancelled",
		title: "关闭读卡器",
		timeout: 5
	},{
		id: "InputCommonAcc",
		title: "输入磁卡账号",
		setKeys : ["payeracc"],
		timeout: 60
	},{
		id: "InputCommonAccError",
		title: "重新输入磁卡账号",
		setKeys : ["payeracc"],
		timeout: 60
	},{
		id: "InputCommonPBKAcc",
		title: "输入存折账号",
		setKeys : ["payeracc"],
		timeout: 60
	},{
		id: "InputCommonPBKAccError",
		title: "重新输入存折账号",
		setKeys : ["payeracc"],
		timeout: 60
	}]
}, {
	entry: "index",
	path: "/INQ/",
	pages: [{
		id: "queryBalanceResults",
		title: "余额结果",
		getKeys: ["page_INQBalance", "page_INQAvaliable","page_Eject"],
		timeout: 70
	},{
		id: "queryCreditBalanceResults",
		title: "余额结果",
		getKeys: ["payeracc","accountName","creditLimit", "creditUsedBalance","page_INQAvaliable","page_Eject"],
		timeout: 70
	},{
		id: "cashRepayCreditBalanceResults",
		title: "余额结果",
		getKeys: ["payeracc","accountName","minpay", "amount","page_Eject"],
		timeout: 70
	},{
		id: "UnSupportedCreditCardType",
		title: "暂不支持该贷记卡类型",
		timeout: 30
	},{
		id: "cashRepayNoCreditCardResults",
		title: "余额结果",
		getKeys: ["payeracc","page_inAccTranslate","accountName","minpay", "amount","page_Eject"],
		timeout: 70
	},{
		id: "queryPointResults",
		title: "积分余额结果",
		getKeys: ["payeracc","accountName","creditLimit", "creditUsedBalance","page_INQAvaliable","page_Eject"],
		timeout: 70
	},{
		id: "querySelect",
		title: "选择查询项目",
		timeout: 45
	},{
		id: "detailEmpty",
		title: "无交易明细",
		timeout: 30
	},{
		id: "ECashSupportInfo",
		title: "是否支持电子现金提示",
		timeout: 30
	},{
		id: "detailSelect",
		title: "明细查询日期选择",
		getKeys: ["page_Eject"],
		setKeys: ["mobile", "telephone", "address"],
		timeout: 70
	},{
	    id: "RemoveFreezeNormal",
		title: "没有需要解除关注的事项",
		timeout: 30
	},{
	 id: "RemoveFreezeSelect",
		title: "是否需要解除关注的事项",
		timeout: 60
	},{
		id: "accountRemoveSelectView",
		title: "解除账户状态页面",
		setKeys: ["removefunction", "removetype",],
		timeout: 70
	},{
		id: "PERID_Sign_RemoveFreeze",
		title: "关注类账户签名表单",
		YH_Hand:"0",
		getKeys: ["name", "genderC","nationality","pid", "mobileNumber","adminUserName","Apply_tellerno",
		         "abatedate","Apply_terminalId","issuedate","issueoffice","transDate","transTime"],
		timeout: 60
	},{
		id: "PERIDForJPG_RemoveFreeze",
		title: "关注类账户回单转图片",
		getKeys: ["name", "genderC","nationality","pid", "mobileNumber","adminUserName","Apply_tellerno",
		         "abatedate","Apply_terminalId","issuedate","issueoffice","transDate","transTime",
			"PERresponseCode","PERerrorMessage"],
		timeout: 60
	},{
		id: "checkFISOK_RemoveFreeze",
		title: "关注类账户信息确认",
		getKeys: ["name", "genderC","nationality","pid", "mobileNumber","adminUserName","Apply_tellerno",
		         "abatedate","Apply_terminalId","issuedate","issueoffice","transDate","transTime"],
		timeout: 90
	},{
		id: "RemoveFreezeSuccess",
		title: "解除账户状态成功",
		setButtons:["receipt"],
		getKeys: ["name","cardPassFlag","accountName","SleepCode", "accountBalance","page_transAmount", "page_TransDate","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "menuAction","page_CardNo"],
		timeout: 60
	},{
		id: "startDateSelect",
		title: "开始日期选择",
		setKeys: ["startDate",],
		timeout: 70
	},{
		id: "startDateSelectError",
		title: "开始日期选择",
		setKeys: ["startDate",],
		timeout: 70
	},{
		id: "endDateSelect",
		title: "结束日期选择",
		setKeys: ["endDate",],
		getKeys: ["startDate"],
		timeout: 70
	},{
		id: "endDateSelectError",
		title: "结束日期选择",
		setKeys: ["endDate",],
		timeout: 70
	},{
		id: "detailResult",
		title: "明细显示",
		getDetails: ["detail","cardNo"],
		pageCount: 10,
		timeout: 60
	},{
		id: "detailResultNew",
		title: "明细显示",
		getDetailsPageTurns: ["detail","pageTurnsFlag","pageNo","cardNo",],
        setKeys: ["pageTurnsFlag","pageNo",],
		pageCount: 10,
		timeout: 60
	},{
		id: "QuerydetailResult",
		title: "明细显示",
		getDetails: ["detail","cardNo","page_Eject"],
		pageCount: 10,
		timeout: 60
	},{
		id: "NoSupportCard",
		title: "借记卡提示",
		timeout: 5
	},{
		id: "AccountMenu",
		title: "账户管理类型",
		getKeys: ["PIN", "query","Trans_cardactive","Trans_cardpwdreset","Trans_cardLoss","Trans_cardhanging",
				"signflg","Trans_cardreplace","idcardflg","Trans_RemoveFreeze"],
		setButtons: ["PIN", "query"],
		timeout: 30
	},{
		id: "queryMenu",
		title: "查询类型",
		getKeys: ["INQ","QUERY_DETAIL","CBILL","Child_DETAIL"],
		setButtons: ["INQ","QUERY_DETAIL","CBILL","Child_DETAIL"],
		timeout: 30
	},{
		id: "childAccResult",
		title: "子账户明细",
		getDetails: ["detail"],
		pageCount: 8,
		timeout: 60
	}]
}, {
	entry: "index",
	path: "/TRF/",
	pages: [{
		id: "transferAmount",
		title: "输入转账金额",
		getKeys: ["msg_transferLmt", "page_trfLmtAmount","accountType","input_maxVal"],
		setKeys: ["transAmount"],
		timeout: 30
	},{
		id: "passBooktransferAmount",
		title: "输入转账金额",
		getKeys: ["msg_transferLmt", "page_TFRMaxAmount","accountType","input_maxVal"],
		setKeys: ["transAmount"],
		timeout: 30
	},{
		id: "cardTypeError",
		title: "转入卡非贷记卡",
		timeout: 5
	},{
		id: "transferAmountError",
		title: "转账金额有误",
		getKeys: ["msg_transferLmt", "oneLmtAmt"],
		setKeys: ["transAmount"],
		timeout: 30
	},{
		id: "transferAccConfirm",
		title: "核对账号和户名",
		getKeys: ["page_TRFAccNo","page_Eject", "page_inAccTranslate"],
		timeout: 30
	},{
		id: "CreditCardtransferAccConfirm",
		title: "信用卡转账还款",
		getKeys: ["page_TRFAccNo","page_Eject", "page_inAccTranslate","minpay", "amount",],
		timeout: 30
	},{
		id: "CreditCardTransferAmountMenu",
		title: "信用卡转账还款",
		getKeys: ["page_Eject","minpay", "amount",],
		setKeys: ["transAmount"],
		timeout: 30
	},{
		id: "handInputAmount",
		title: "手输金额",
		getKeys: ["page_Eject","minpay", "amount",],
		setKeys: ["transAmount"],
		timeout: 30
	},{
		id: "handInputAmountCash",
		title: "贷记卡现金还款手输金额",
		getKeys: ["page_Eject",],
		setKeys: ["input_DEPAmount"],
		timeout: 60
	},{
		id: "handInputAmountCashNoCard",
		title: "贷记卡现金还款手输金额--无卡",
		getKeys: ["page_Eject",],
		setKeys: ["input_DEPAmount"],
		timeout: 60
	},{
		id: "inputTransferAcc",
		title: "输入转入账号",
		getKeys: ["cardNo"],
		setKeys : ["inAccountNo"],
		timeout: 60
	},{
		id: "inputTransferAccError",
		title: "转入账号有误",
		setKeys : ["inAccountNo"],
		timeout: 60
	},{
		id: "inputPBKTransferAcc",
		title: "输入转入存折账号",
		setKeys : ["inAccountNo"],
		timeout: 60
	},{
		id: "inputPBKTransferAccError",
		title: "转入存折账号有误",
		setKeys : ["inAccountNo"],
		timeout: 60
	},{
		id: "transferCancelResult",
		title: "转账撤销查询明细结果",
		getDetails: ["detail"],
		setKeys: ["preworkdate","pretranstype","preagentserialno","prebankfzseq", "prebankfzdate","transAmount","prepayeeacc","payeraccname","payeeaccname"],
		pageCount: 6,
		timeout: 60
	},{
		id: "cancelTransferSuccess",
		title: "转账撤销成功",
		setButtons:["receipt"],
		getKeys: ["page_Eject","receipt","page_CardNo","terminalId","page_TransTime","page_TransDate","adminUserName","name"],
		timeout: 60
	},{
		id: "TransferSuccess",
		title: "转账成功",
		setButtons:["receipt"],
		getKeys: ["page_Eject","receipt","page_CardNo","terminalId","page_TransTime","inAccountName","page_TRFAccNo","page_inAccTranslate","page_TransDate","adminUserName","accountName",
		"page_transAmount","menuAction","ST_TRFTimeType"],
		timeout: 60
	},{
		id: "CreditTransferSuccess",
		title: "信用卡转账成功",
		setButtons:["receipt"],
		getKeys: ["page_Eject","receipt","TransInNo","page_CardNo","terminalId","page_TransTime","page_TransDate","accountName","page_transAmount","menuAction"],
		timeout: 60
	},{
		id: "accountTypeSelect",
		title: "选择转账账户类型",
		timeout: 30
	},{
		id: "transferTypeSelect",
		title: "选择交易类型",
		timeout: 30
	},{
		id: "transferTips",
		title: "转账温馨提示",
		getKeys: ["page_Eject"],
		timeout: 30
	},{
		id: "transferInfoConfirm",
		title: "核对转账信息",
		setKeys: ["ST_TransferMessage"],
		getKeys: ["page_Eject","cardNo", "page_accTranslate", "page_TRFAccNo", "page_inAccTranslate", "transAmount","inAccountNo"],
		timeout: 120
	},{
		id: "creditTransferInfo",
		title: "信用卡转账信息",
		setKeys: ["ST_TransferMessage"],
		getKeys: ["page_Eject","cardNo", "page_accTranslate", "TransInNo", "page_inAccTranslate", "transAmount"],
		timeout: 60
	},{
		id: "TFCMenuOnce",
		title: "选择定活业务类型",
		getKeys: ["NomalCTF","NomalFTC"],
		setButtons: ["CallCTF","CallFTC","NomalCTF","NomalFTC"],
		timeout: 30
	},{
		id: "TFCMenuAgain",
		title: "通知类型再次选择",
		getKeys: ["CallCTF","CallFTC"],
		setButtons: ["NomalCTF","NomalFTC","CallCTF","CallFTC"],
		timeout: 30
	},{
		id: "TRFMenu",
		title: "选择转账业务类型",
		getKeys: ["DEFAULT","PASSBOOK","TRANSFERCANCEL"],
		setButtons: ["DEFAULT","PASSBOOK","TRANSFERCANCEL"],
		timeout: 30
	},{
		id: "inputCommonTransAmount",
		title: "转账金额输入",
		getKeys: ["page_Eject"],
		setKeys: ["transAmount","ST_TRFAmountType"],
		timeout: 60
	},{
		id: "inputCommonTransAmountError",
		title: "转账金额输入",
		getKeys: ["page_Eject"],
		setKeys: ["transAmount","ST_TRFAmountType"],
		timeout: 60
	},{
		id: "TransferTimeSelect",
		title: "客户选择到账时间类型",
		getKeys: ["page_Eject"],
		setKeys: ["ST_TRFTimeType"],
		timeout: 60
	},{
		id: "inputCommonTransAcc",
		title: "输入转入账号",
		getKeys: ["page_Eject"],
		setKeys: ["inAccountNo"],
		timeout: 60
	},{
		id: "inputCommonTransAccError",
		title: "输入转入账号",
		getKeys: ["page_Eject"],
		setKeys: ["inAccountNo"],
		timeout: 60
	},{
		id: "inputAccountName",
		title: "行外帐号输入银行名称和户名",
		setKeys: ["ST_inBankName","inAccountName","ST_inBankNo"],
		getKeys: ["detail","page_Eject"],
		timeout: 120
	},{
		id: "inputAccountNo",
		title: "行外帐号输入户名",
		setKeys: ["inAccountName"],
		getKeys: ["page_Eject","ST_inBankName"],
		timeout: 120
	},{
		id: "CreditCardPayMenu",
		title: "信用卡还款",
		timeout: 60
	},{
		id: "checkFISOK_Transfer",
		title: "信息确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","inAccountNo","inAccountName","transAmount","ST_TRFTimeType","PERresponseCode",
		"PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "PERID_Transfer",
		title: "表单回显",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","inAccountNo","inAccountName","transAmount","ST_TRFTimeType","PERresponseCode",
		"PERerrorMessage","adminUserName"],
		timeout: 59
	},{
		id: "PERIDForJPG_TRANSFER",
		title: "表单回显",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","inAccountNo","inAccountName","transAmount","ST_TRFTimeType","PERresponseCode",
		"PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "transfer_telemarket",
		title: "转账-阅读防电信诈骗书",
		timeout: 90
	}]
}, {
	entry: "index",
	path: "/FINANCIAL/",
	pages: [{
		id: "financialSelect",
		title: "理财业务选择",
		getKeys: ["page_Eject","Trans_financialsign"],
		timeout: 60
	},{
		id: "financialProductCancellationFailed",
		title: "理财撤单交易结果失败页面",
		getKeys: ["Financial_ProductCancellation_ErrorMessage","page_Eject"],
		timeout: 70
	},{
		id: "wrongAccount",
		title: "非个人账户",
		timeout: 5
	},{      
		id: "financialCustomTransDetailsResult",
		title: "理财产品客户已购列表",
		getDetails: ["detail","page_Eject"],
		pageCount: 7,
		setKeys: ["FinancialCustomTransSubscription","SS_old_prodCode","SS_oriagentSerialNo","FPSC_OriginApplyAmount"],
		timeout: 90
	},{
		id: "financialCustomTransDetailsEmpty",
		title: "无已购理财明细",
		getKeys: ["page_Eject"],
		timeout: 30
	},{
		id: "financialProductSubscriptionContractInput",
		title: "理财产品预约认购份额输入",
		YH_Hand:"0",
		getKeys: ["FinancialProductSubscription", "FinancialCustomTransSubscription","FPSC_OriginApplyAmount"],
		setKeys: ["FinancialProductSubscriptionNumber","custmanage","FPSC_ProductName",
					"FPSC_ProductLeval","FPSC_PerAmount","FPSC_PreRate","FPSC_PreAmount"],
		timeout: 90
	},{
		id: "financialProductSubscriptionContractConfirm",
		title: "理财产品预约认购份额确认",
		setButtons:["modify"],
		getDetails: ["transAmount","FinancialProductSubscription", "FinancialCustomTransSubscription", "FinancialProductSubscriptionNumber","custmanage"],
		timeout: 60
	},{
		id: "financialProductDetailsResult",
		title: "理财产品列表",
		getDetails: ["detail","page_Eject"],
		pageCount: 7,
		setKeys: ["FinancialProductSubscription","SS_prodCode","SS_riskCode","FRA_Code"],
		timeout: 90
	},{
		id: "FinancialCancellationProductSelect",
		title: "可撤单理财产品列表",
		getDetails: ["detail","page_Eject"],
		pageCount: 7,
		setKeys: ["FinancialProductSubscription","SS_prodCode","agentserialno","cancelAmount",
		          "cancelAmount_show","FC_ProductName","FC_originDate"],
		timeout: 90
	},{
		id: "financialProductCancelllationInput",
		title: "可撤单理财产品申请承诺书勾选",
		YH_Hand:"0",
		getKeys: ["FinancialProductSubscription"],
		setKeys: ["FinancialProductSubscriptionNumber","custmanage"],
		timeout: 90
	},{
		id: "FinancialCancellation_PERID",
		title: "理财撤单回单显示",
		getKeys: ["name", "pid","Apply_terminalId","genderC",
		          "cardNo","Apply_tellerno","transDate","transTime","FinancialProductSubscription","adminUserName"],
		timeout: 59
	},{
		id: "FinancialCancellation_checkFISOK",
		title: "理财撤单确认页面",
		getKeys: ["name", "pid","Apply_terminalId","genderC",
		          "cardNo","Apply_tellerno","transDate","transTime","FinancialProductSubscription","adminUserName"],
		timeout: 59
	},{
		id: "FinancialAssessment_PERID",
		title: "理财风险评估回单显示",
		getKeys: ["name", "pid","Apply_terminalId","genderC",
		          "cardNo","Apply_tellerno","transDate","transTime","adminUserName"],
		timeout: 59
	},{
		id: "FinancialAssessment_checkFISOK",
		title: "理财风险评估确认页面",
		getKeys: ["name", "pid","Apply_terminalId","genderC",
		          "cardNo","Apply_tellerno","transDate","transTime","adminUserName"],
		timeout: 59
	},{
		id: "FinancialSign_PERID",
		title: "理财签约回单显示",            
		getKeys: ["name", "pid","Apply_terminalId","genderC","mobile","telephone","custmanage",
		          "cardNo","Apply_tellerno","transDate","transTime","address","adminUserName"],
		timeout: 59
	},{
		id: "FinancialSign_checkFISOK",
		title: "理财签约确认页面",
		getKeys: ["name", "pid","Apply_terminalId","genderC","mobile","telephone","custmanage",
		          "cardNo","Apply_tellerno","transDate","transTime","FinancialProductSubscription","address","adminUserName"],
		timeout: 59
	},{
		id: "financialProductCancellationSuccess",
		title: "理财撤单成功页面",
		YH_Hand:"0",
		getKeys: ["customAction","FinancialProductSubscription","receipt","page_CardNo",
					"terminalId","page_TransTime","page_TransDate","name","print_terminalSerial","accountName"],
		setButtons:["receipt"],
		timeout: 90
	},{
		id: "financialProductDetailsEmpty",
		title: "无理财明细",
		getKeys: ["page_Eject"],
		timeout: 30
	},{
		id: "financialCancellableProductDetailsEmpty",
		title: "无可撤单认购记录",
		timeout: 30
	},{
		id: "financialProductSubscriptionInput",
		title: "理财产品认购份额输入",
		YH_Hand:"0",
		getKeys: ["FinancialProductSubscription","checkReadFlag"],
		setKeys: ["FinancialProductSubscriptionNumber","custmanage","checkReadFlag"],
		timeout: 90
	},{
		id: "financialProductSubscriptionConfirm",
		title: "理财产品认购份额确认",
		getDetails: ["transAmount","FinancialProductSubscription", "FinancialProductSubscriptionNumber","custmanage"],
		timeout: 60
	},{
		id: "financialProductSubscriptionSuccess",
		title: "理财产品认购份额申购成功",
		setButtons:["receipt"],
		getDetails: ["transAmount","custmanage","FinancialProductSubscription", "FinancialProductSubscriptionNumber","receipt", "name",
					"customAction", "page_CardNo", "terminalId", "page_TransTime", "page_TransDate", "print_terminalSerial","accountName"],
					        
		
		timeout: 60
	},{
		id: "financialProductSubscriptionContractSuccess",
		title: "理财产品预约认购申购成功",
		setButtons:["receipt"],
		getDetails: ["transAmount","custmanage","FinancialProductSubscription", "FinancialProductSubscriptionNumber","receipt", "name",
				"customAction", "page_CardNo", "page_TransTime", "terminalId", "page_TransDate", "print_terminalSerial","accountName"],
				
		timeout: 60
	},{
		id: "financialSignSuccess",
		title: "理财产品签约成功",
		getDetails: ["customAction", "page_CardNo","receipt","pid","name","custmanage","page_TransTime",
						"terminalId","page_TransDate","print_terminalSerial","accountName","telephone","mobile","address","Apply_tellerno","adminUserName"],
		        
		 	
		setButtons:["receipt"],
		timeout: 30
	},{
		id: "sign_agreement",
		title: "理财签约协议",
		timeout: 120
	},{
		id: "sign_form",
		title: "理财签约表单填写",
		YH_Hand:"0",
		getKeys: ["name", "pid","cardNo", "mobile", "telephone", "address","custmanage"],
		setKeys: ["mobile", "telephone", "address","custmanage"],
		timeout: 120
	},{
		id: "PERIDForJPG_SIGN",
		title: "理财签约回单转图片",
		getKeys: ["name", "pid","Apply_terminalId","genderC","mobile","telephone","custmanage",
		          "cardNo","Apply_tellerno","transDate","transTime","address","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 59
	},{
		id: "PERIDForJPG_CANCEL",
		title: "理财撤单回单转图片",
		getKeys: ["name", "pid","Apply_terminalId","genderC",
		          "cardNo","Apply_tellerno","transDate","transTime","FinancialProductSubscription",
		          "PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 59
	},{
		id: "PERIDForJPG_ASSESSMENT",
		title: "理财风险评估回单转图片",
		getKeys: ["name", "pid","Apply_terminalId","genderC",
		          "cardNo","Apply_tellerno","transDate","transTime",
		          "PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 59
	},{
		id: "SignedResult",
		title: "已进行理财签约",
		getKeys: ["page_Eject"],
		timeout: 30
	},{
		id: "NotSigned",
		title: "未进行理财签约",
		getKeys: ["page_Eject"],
		timeout: 30
	},{
		id: "UnSignedResult",
		title: "未进行理财签约",
		getKeys: ["page_Eject"],
		timeout: 30
	},{
		id: "FinancialServiceMenu",
		title: "风险评估",
		getKeys: ["FRA"],
		setButtons: ["FRA"],
		timeout: 30
	},{
		id: "ListRiskQuestionResult",
		title: "风险评估列表",
		getDetails: ["detail"],
		setKeys:["answer"],
		pageCount: 1,
		timeout: 90
	},{
		id: "RiskQuestionEmpty",
		title: "暂无评估试题",
		getKeys: ["page_Eject"],
		timeout: 30
	},{
		id: "RiskAssessmentResult",
		title: "风险评估结果",
		getKeys: ["riskname","customAction","receipt","pid","name","print_terminalSerial",
					"page_TransDate","page_TransTime","terminalId","accountName"],
		setButtons:["receipt"],
		timeout: 60
	},{
		id: "FinancialMenu",
		title: "理财业务二级菜单",
		timeout: 30
	},{
		id: "financialProductsRunFlag",
		title: "理财产品运行方式选择",
		setKeys:["SS_FinancialProductsRunFlag"],
		getKeys:["page_Eject"],
		timeout: 30
	},{
		id: "customerFinancialRedeemSelect",
		title: "选择需要赎回的产品",
		getDetails: ["detail","page_Eject"],
		pageCount: 7,
		setKeys: ["FinancialProductSubscription","SS_prodCode"],
		timeout: 90
	},{
		id: "customerFinancialRedeemInput",
		title: "理财产品赎回输入",
		setKeys:["FinancialProductRedemptionNumber"],
		getKeys: ["FinancialProductSubscription","SS_redeemAmount","sgpurclper"],
		timeout: 60
	},{
		id: "customerFinancialCancellationPromiseInput",
		title: "理财撤单申请承诺输入",
		timeout: 60
	},{
		id: "customerFinancialCancellationInput",
		title: "理财产品撤单输入",
		setKeys:["FC_ProductName","cancelAmount","FC_PerAmount","FC_Number"],
		getKeys: ["FinancialProductSubscription"],
		timeout: 60
	},{
		id: "customerFinancialRedeemInputConfirm",
		title: "理财产品赎回确认页面",
		setButtons:["modify"],
		getKeys: ["FinancialProductSubscription","SS_redeemAmount","FinancialProductRedemptionNumber"],
		timeout: 60
	},{
		id: "customerFinancialRedeemConfirm",
		title: "理财产品赎回信息确认",
		getKeys: ["transAmount","FinancialProductSubscription","SS_redeemAmount","FinancialProductRedemptionNumber"],
		timeout: 60
	},{
		id: "financialProductsRedeemSuccess",
		title: "理财赎回交易成功",
		setButtons:["receipt"],
		getKeys:["hostapplamt","FinancialProductRedemptionNumber","FinancialProductSubscription","receipt","print_terminalSerial",
				"customAction","page_CardNo","terminalId","page_TransTime","page_TransDate","accountName","RedeemType","leftsumamt"],
		        
		timeout: 30
	},{
		id: "PreBuyBackConfirm",
		title: "是否进行预约赎回",    
		timeout: 60
	},{
		id: "StillSubscriptConfirm",
		title: "是否进行预约赎回",    
		timeout: 60
	},{
		id: "RiskEvaluationSign",
		title: "提示客户重新进行风险评估",
		getKeys: ["page_message","page_Eject"],
		timeout: 30
	},{
		id: "RiskEvaluationUnabled",
		title: "提示客户重至柜面进行风险评估",
		getKeys: ["page_message","page_Eject"],
		timeout: 10
	},{
		id: "RiskEvaluationLevelFailed",
		title: "提示客户风险评估等级不够",
		getKeys: ["page_message"],
		timeout: 10
	},{
		id: "financialProductDetails",
		title: "理财产品列表",
		getDetails: ["detail","page_Eject","Query_totalAmount","detail_type"],
		pageCount: 7,
		timeout: 90
	},{
		id: "financialProductSelect",
		title: "理财产品明细类型选择",
		YH_Hand:"0",
		setKeys: ["startDate","endDate","SS_FinancialProductsRunFlag","SS_selType","detail_type"],
		timeout: 120
	},{
		id: "YNCForm",
		title: "益农存签约信息确认页面",
		YH_Hand:"0",
		getKeys: ["name","pid","nationality","genderC","brithday","address","issuedate","abatedate"],       
		timeout: 60
	},{
		id: "YNCSignedResult",
		title: "益农存已签约提示页面",
		YH_Hand:"0",
		getKeys: ["name","pid","YNCSignDate","YNCCancelDate"],
		timeout: 60
	},{
		id: "YNCSign_success",
		title: "益农存签约成功",
		YH_Hand:"0",
		getKeys: ["name","pid","YNCSignDate","print_terminalSerial","receipt", "customAction", "terminalId",
					"page_TransDate", "page_TransTime","nationality","genderC","brithday","address","issuedate","abatedate"],
		timeout: 60
	},{
		id: "YNCSignHost_FailedInfo",
		title: "益农存签约失败",
		YH_Hand:"0",
		timeout: 30
	},{
		id: "FinancialComputerInput",
		title: "存款利息计算器输入页面",
		YH_Hand:"0",
		setKeys: ["FComputer_amount",
		          "FComputer_productCode","FComputer_period","FComputer_term",
				  "FComputer_productCode_show","FComputer_period_show","FComputer_term_show",
				  "FComputer_startDate","FComputer_endDate","FComputer_startDate_show","FComputer_endDate_show"],
		getKeys: ["FComputer_amount","FComputer_productCode","FComputer_period",
					"FComputer_term","FComputer_startDate","FComputer_endDate",
					"FComputer_startDate_show","FComputer_endDate_show",
					"FComputer_productCode_show","FComputer_period_show","FComputer_term_show"],
		timeout: 120
	},{
		id: "FinancialComputerInputConfirm",
		title: "存款利息计算器输入确认页面",
		YH_Hand:"0",
		getKeys: ["FComputer_amount","FComputer_productCode_show","FComputer_period_show",
		          "FComputer_startDate_show","FComputer_endDate_show","FComputer_term_show"],				
		timeout: 120
	},{
		id: "FinancialComputerResult",
		title: "存款利息计算器结果页面",
		YH_Hand:"0",
		getKeys: ["FComputer_amount","FComputer_productCode_show","FComputer_period_show",
		          "FComputer_startDate_show","FComputer_endDate_show","FComputer_term_show",
					"periodInterest","totalInterest","withholdInterest","receipt","print_terminalSerial",
					"page_CardNo","terminalId","page_TransTime","page_TransDate"],  
		timeout: 120
	},{
		id: "alreadyEvaluated",
		title: "已评估且在有效期",
		YH_Hand:"0",
		getKeys: ["name","pid","EVA_Date","EVA_score","EVA_riskcode","EVA_leavelDesc","EVA_DeadLine","page_Eject"],     
		timeout: 30
	},{
		id: "notEvaluated",
		title: "理财签约时未评估",
		YH_Hand:"0",     
		timeout: 30
	},{
		id: "outOfUse",
		title: "理财风险评估过期",
		YH_Hand:"0",     
		timeout: 30
	}]
},{
	entry: "index",
	path: "/LOANS/",
	pages: [{
		id: "LoansSelect",
		title: "贷款业务二级菜单",
		timeout: 60
	},{
		id: "insertSelect",
		title: "选择插卡或插证",
		timeout: 30
	},{
		id: "InputAccPinAccount",
		title: "密码输入",
		getKeys: ["page_Eject"],
		timeout: 60
	},{
		id: "reInputPinAccount",
		title: "密码错重输",
		getKeys: ["page_Eject","customAction"],
		timeout: 60
	},{
		id: "LoansInfo",
		title: "贷款信息",
		getDetails:["detail"],
		pageCount: 10,
		timeout: 120
	},{
		id: "LoansInfoSelect",
		title: "贷款信息",
		getDetails:["detail","menuAction"],
		setKeys : ["ST_LoansAcc","ST_LoansAmount","ST_LoansBalance","ST_LoansDay5","ST_INTR"],
		pageCount: 10,
		timeout: 120
	},{
		id: "LoansTest",
		title: "贷款信息",
		getKeys:["ST_LoansLimit","ST_LoansTimeLimit","cardNo","ST_LoansCNTTNo","ST_CifNo"],
		
		timeout: 120
	},{
		id: "LoansRevertWay",
		title: "还款方式选择",
		setKeys:["ST_LoansRevertWay","ST_LoansRevertWay1"],		
		timeout: 120
	},{
		id: "LoansReverAll",
		title: "放款结清",
		getKeys:["ST_LoansAcc","ST_LoansAmount","ST_LoansBalance"],		
		
		timeout: 120
	},{
		id: "loansReverPart",
		title: "提前还本",
		pageCount: 10,
		timeout: 120
	},{
		id: "LoansReverPart_form",
		title: "提前还本表单填写",
		getKeys:["ST_LoansBalance","ST_LoansAmount","balance"],
		setKeys : ["ST_LoansRevertAmount"],	
		pageCount: 10,
		timeout: 120
	},{
		id: "LoansRevertSuccess",
		title: "还款成功",
		getKeys: ["ST_LoansContinueRevert","page_TransDate","Apply_tellerno","page_TransTime","terminalId","print_terminalSerial","receipt","accountName","ST_LoansAcc","ST_LoansAmount","ST_INTR","ST_LoansRevertWay1","ST_PayAmount","cardNo","ST_BalanceDue"],
		setButtons:["receipt"],
		timeout: 60
	},{
		id: "loansReverPresent",
		title: "当期偿还",
		pageCount: 10,
		timeout: 120
	},{
		id: "LoansCreditInfo",
		title: "信贷信息",
		getKeys: ["ST_LoansLimit", "ST_LoansBalance", "ST_LoansTimeLimit"],		
		pageCount: 10,
		timeout: 120
	},{
		id: "LoansInfo_form",
		title: "贷款信息填写",
		getKeys: ["accountName", "ST_LoansLimit", "ST_LoansBalance", "ST_LoansTimeLimit", "ST_LoansMinAmount"],	
		setKeys:["ST_loansGrantAmount", "ST_loansGrantDate","ST_loansGrantBeBalance"],
		timeout: 120
	},{
		id: "RevertInfoVerify",
		title: "还款信息确认",
		getKeys: ["accountName", "ST_LoansAcc","ST_PayAmount","ST_LoansRevertWay"],	
		pageCount: 10,
		timeout: 120
	},{
		id: "LoansMediaSelete",
		title: "贷款业务介质选择界面",
		getKeys: ["I_LoansIDCardReader","I_LoansCardReader"],
		pageCount: 10,
		timeout: 120
	},{
		id: "NotLoansSignTips",
		title: "未签约贷款提示信息",
		timeout: 5
	},{
		id: "CardStatusAbnormal",
		title: "卡状态异常，请至柜面办理",
		getKeys: ["ST_CardStatus","ST_CrdStatus"],
		timeout: 5
	},{
		id: "LoansGrantSuccess",
		title: "易贷通贷款发放成功",
		getKeys: ["page_TransDate","Apply_tellerno","page_TransTime","terminalId","print_terminalSerial","receipt","accountName","ST_loansGrantAmount","transDate","ST_loansGrantDate","ST_loans_payeracc","cardNo","ST_loans_INTR"],
		setButtons:["receipt"],
		timeout: 60
	},{
		id: "LoansGrantVerify",
		title: "易贷通贷款发放确认",
		getKeys: ["accountName", "ST_LoansCompactNo","transDate","ST_loansGrantDate", "ST_LoansLimit","ST_loansGrantAmount"],
		
		timeout: 30
	},{
		id: "LoansCounter",
		title: "贷款利息计算器",
		setKeys:["ST_LoansAmount", "ST_LoansPeriods", "ST_Rate", "ST_LoansRevertWay"],
		timeout: 120
	},{
		id: "LoansCounterResult",
		title: "贷款利息计算结果",
		setButtons:["receipt"],
		getDetails: ["detail","ST_RateSum", "ST_AmountSum", "ST_LoansAmount", "ST_LoansRevertWay", "ST_LoansPeriods","receipt"],
		pageCount: 10,	
		timeout: 120
	},{
		id: "LoansSignSuccess",
		title: "易贷通自助渠道放款签约成功",
		getKeys: ["page_TransDate","Apply_tellerno","page_TransTime","terminalId","print_terminalSerial","receipt","ST_LoansCUSTNAME","ST_LoansCompactNo"],
		setButtons:["receipt"],
		timeout: 60
	},{
		id: "LoansSign_agreement",
		title: "易贷通自助渠道放款签约阅读协议",
		timeout: 120
	},{
		id: "LoansSignInfoSelect",
		title: "签约信息确认",
		getDetails: ["detail","ST_LoansStatus","ST_LoansCUSTNAME"],

		setKeys:["ST_LoansCompactNo"],
		pageCount: 10,	
		timeout: 120
	},{
		id: "LoansBalanceTips",
		title: "卡内余额不足交易失败提示",
		timeout: 5
	},{
		id: "LoansInsertLocalBankTips",
		title: "提示客户插入本行借记卡",
		timeout: 5
	},{
		id: "LoansCompareTips",
		title: "卡证不一致提示",
		timeout: 5
	},{
		id: "LoansRevertNotINTRBL",
		title: "无当期利息说明",
		timeout: 5
	},{
		id: "SelectLocalBankAccNo",
		title: "客户选择借记卡账户",
		getDetails: ["detail"],
		setKeys:["payeracc","cardNo"],
		pageCount: 10,
		timeout: 120
	},{
		id: "LoansID_Revert",
		title: "贷款回收回单显示",
		getKeys: ["ST_LoansRevertWay1","name","pid","certID","cardNo","ST_PayAmount","ST_LoansDay5","ST_LoansAcc","isUserSign","ST_LoansDay4",
				"transAction","ST_LoansAmount","Apply_terminalId","Apply_tellerno","transDate","transTime"],
		timeout: 120
	},{
		id: "LoansCheck_Revert",
		title: "贷款回收回单信息确认",
		getKeys: ["ST_LoansRevertWay1","name","pid","certID","cardNo","ST_PayAmount","ST_LoansDay5","ST_LoansAcc","isUserSign","ST_LoansDay4",
				"transAction","ST_LoansAmount","Apply_terminalId","Apply_tellerno","transDate","transTime"],
		timeout: 120
	},{
		id: "LoansForJPG_Revert",
		title: "贷款回收回单转图片",
		getKeys: ["ST_LoansRevertWay1","name","pid","certID","cardNo","ST_PayAmount","ST_LoansDay5","ST_LoansAcc","isUserSign","ST_LoansDay4",
				"transAction","ST_LoansAmount","Apply_terminalId","Apply_tellerno","transDate","transTime"],
		timeout: 60
	},{
		id: "LoansID_Sign",
		title: "贷款签约回单显示",
		getKeys: ["name", "ST_LoansCompactNo", "pid","ST_LoansLimit","ST_loansGrantAmount","transDate","ST_loansGrantDate","Apply_terminalId","Apply_tellerno","transDate","transTime"],
		timeout: 120
	},{
		id: "LoansCheck_Sign",
		title: "贷款签约回单确认",
		getKeys: ["name", "ST_LoansCompactNo", "pid","ST_LoansLimit","ST_loansGrantAmount","transDate","ST_loansGrantDate","Apply_terminalId","Apply_tellerno","transDate","transTime"],
		timeout: 120
	},{
		id: "LoansForJPG_Sign",
		title: "贷款签约回单转图片",
		getKeys: ["name", "ST_LoansCompactNo", "pid","ST_LoansLimit","ST_loansGrantAmount","transDate","ST_loansGrantDate","Apply_terminalId","Apply_tellerno","transDate","transTime"],
		timeout: 60
	},{
		id: "LoansID_Grant",
		title: "贷款发放回单显示",
		getKeys: ["name", "ST_LoansCompactNo", "pid","ST_LoansLimit","ST_loansGrantAmount","transDate","ST_loansGrantDate","Apply_terminalId","Apply_tellerno","transDate","transTime"],
		timeout: 120
	},{
		id: "LoansCheck_Grant",
		title: "贷款发放回单确认",
		getKeys: ["name", "ST_LoansCompactNo", "pid","ST_LoansLimit","ST_loansGrantAmount","transDate","ST_loansGrantDate","Apply_terminalId","Apply_tellerno","transDate","transTime"],
		timeout: 120
	},{
		id: "LoansForJPG_Grant",
		title: "贷款发放回单转图片",
		getKeys: ["name", "ST_LoansCompactNo", "pid","ST_LoansLimit","ST_loansGrantAmount","transDate","ST_loansGrantDate","Apply_terminalId","Apply_tellerno","transDate","transTime"],
		timeout: 60
	}]
},{
	entry: "admin",
	path: "/ADMIN/",
	pages: [{
		id: "admin",
		title: "维护首页"
	},{
		id: "admin_main",
		title: "维护首页"
	},{
		id: "adminQuit",
		title: "正在退出"
	},{
		id: "login",
		title: "登入维护"
	},{
		id: "cycleCashBox",
		title: "钞箱信息"
	},{
		id: "cycle_Voucher_Load_In",
		title: "清机加卡"
	},{
		id: "cycle_Voucher_Load_Out",
		title: "清机对账"
	},{
		id: "cycleCardNumber",
		title: "清吞卡数"
	},{
		id: "cycleSettleDinspect",
		title: "列清机核查单"
	},{
		id: "cycleCardDinspect",
		title: "列清卡核查单"
	},{
		id: "cycleCmCardReader",
		title: "一键清卡"
	},{
		id: "dataCardDetailQuery",
		title: "钞箱信息"
	},{
		id: "deviceCheck",
		title: "设备检测"
	},{
		id: "deviceResetAll",
		title: "设备复位"
	},{
		id: "deviceActiveBox",
		title: "激活钞箱"
	},{
		id: "keySetKey",
		title: "设置主密钥"
	},{
		id: "keyGetWorkKey",
		title: "获取工作密钥"
	},{
		id: "keySetKDM",
		title: "密钥分发器"
	},{
		id: "dataSetParameter",
		title: "参数设置"
	},{
		id: "dataSetTransaction",
		title: "交易设置"
	},{
		id: "dataLogQuery",
		title: "日志查询"
	},{
		id: "dataLogBackup",
		title: "日志拷贝"
	},{
		id: "dataCrown",
		title: "冠子号查询"
	},{
		id: "dataLogPrint",
		title: "补打流水"
	},{
		id: "dataPasswordChange",
		title: "修改密码"
	},{
		id: "dataPasswordReset",
		title: "密码重置"
	},{
		id: "dataUserDelete",
		title: "用户删除"
	},{
		id: "dataUserAdd",
		title: "用户添加"
	},{
		id: "dataUserAddCheck",
		title: "用户添加校验"
	},{
		id: "dataFingerScanner",
		title: "指纹录入"
	},{
		id: "dataFingerCheck",
		title: "指纹校验"
	},{
		id: "dataFingerLog",
		title: "签到日志查询"
	},{
		id: "dataAdminLog",
		title: "用户日志查询"
	},{
		id: "system_restart_app",
		title: "重启设备"
	},{
		id: "systemCloseApp",
		title: "关闭应用"
	},{
		id: "system_shutdown",
		title: "关闭系统",
	},{
		id: "systemVersion",
		title: "版本信息查询",
	},{
		id: "accountsCredenceIn",
		title: "凭证调拨",
	},{
		id: "accountsFlat",
		title: "账务处理",
	},{
		id: "PERID_Voucher",
		title: "凭证调拨表单",
	},{
		id: "PERID_Voucher_Cash",
		title: "现金凭证调拨表单",
	}]


}, {
	entry: "admin2",
	path: "/admin/",
	pages: [{
		id: "device_reset",
		title: "设备重置"
	}, {
		id: "login2",
		title: "用户登录"
	}, {
		id: "data_crown",
		title: "冠字号查询"
	}, {
		id: "bootstrap_test",
		title: "测试用"
	}]
}, {
	entry: "index",
	path: "/TFC/",
	pages: [{
		id: "TFCtransferAmount",
		title: "输入转账金额",
		getKeys: ["otherBusinessType","msg_TFCAmount","minTransAmount"],
		setKeys: ["transAmount","autoTransfer","mng_flag_autoTransfer"],
		timeout: 30
	},{
		id: "TFCtransferAmountError",
		title: "转账金额有误",
		getKeys: ["otherBusinessType","msg_TFCAmount","minTransAmount"],
		setKeys: ["transAmount","autoTransfer"],
		timeout: 30
	},{
		id: "TFC_CTCtransferAmount",
		title: "活期转通知输入转账金额",
		getKeys: ["otherBusinessType","msg_TFCAmount","minTransAmount"],
		setKeys: ["transAmount","autoTransfer","mng_flag_autoTransfer","intersetRateQryAmt"],
		timeout: 30
	},{
		id: "TFC_CTCtransferAmountError",
		title: "活期转通知转账金额有误",
		getKeys: ["otherBusinessType","msg_TFCAmount","minTransAmount"],
		setKeys: ["transAmount"],
		timeout: 30
	},{
		id: "TFC_CTFtransferAmount",
		title: "活期转定期输入转账金额",
		getKeys: ["otherBusinessType","msg_TFCAmount","minTransAmount"],
		setKeys: ["transAmount","autoTransfer","mng_flag_autoTransfer","intersetRateQryAmt","transamount_show"],
		timeout: 30
	},{
		id: "TFC_CTFtransferAmountError",
		title: "活期转定期转账金额有误",
		getKeys: ["otherBusinessType","msg_TFCAmount","minTransAmount"],
		setKeys: ["transAmount","autoTransfer"],
		timeout: 30
	},{
		id: "TFCouttransferAmount",
		title: "输入转出金额",
		getKeys: ["otherBusinessType","msg_TFCoutAmount","minTransAmount","AccountAmount"],
		setKeys: ["transAmount"],
		timeout: 30
	},{
		id: "TFCouttransferAmountError",
		title: "转出金额有误",
		getKeys: ["otherBusinessType","msg_TFCoutAmount","minTransAmount","AccountAmount"],
		setKeys: ["transAmount"],
		timeout: 30
	},{
		id: "TFCMenu",
		title: "定活类型选择页面",
		timeout: 30
	},{
		id: "callDepositSelect",
		title: "通知存款类型选择",
		timeout: 30
	},{
		id: "fixedCurrentMenu",
		title: "普通存款定活互转类型选择",
		getKeys: ["FixedToCurrent"],
		setButtons: ["FixedToCurrent"],
		timeout: 30
	},{
		id: "callCurrentMenu",
		title: "通知存款定活互转类型选择",
		getKeys: ["FixedToCurrent"],
		setButtons: ["FixedToCurrent"],
		timeout: 30
	},{
		id: "fixedTransferConfirm",
		title: "活转定确认页面",
		getKeys: ["transAmount","transamount_show", "page_Term","CurrentTransType","autoTransfer","intersetRate1","intersetRate2","intersetRateDescrip","AVL-DT","DOC-NO-CM"],
		timeout: 30
	},{
		id: "callTransferConfirm",
		title: "活转通知确认页面",
		getKeys: ["transAmount", "page_Term","CurrentTransType","autoTransfer","intersetRate1","intersetRate2","intersetRateDescrip","AVL-DT","DOC-NO-CM"],
		timeout: 30
	},{
		id: "fixedSubAccountResult",
		title: "普通存款定期子账户列表",
		getDetails: ["detail"],
		setKeys: ["accStatus","startDate","endDate","transAmount", "seqNo","Term","AccountAmount","toEndDate","partCashed"],
		pageCount: 7,
		timeout: 60
	},{
		id: "callDepositSubAccountResult",
		title: "通知存款定期子账户列表",
		getDetails: ["detail"],
		setKeys: ["accStatus","startDate","endDate","transAmount", "seqNo","Term","AccountAmount","partCashed"],
		pageCount: 7,
		timeout: 60
	},{
		id: "callPreservedAccountResult",
		title: "可维护通知存款定期子账户列表",
		getDetails: ["detail"],
		setKeys: ["NP_sqno","NP_amount","NP_term","NP_amount_show","NP_startDate","NP_endDate"],
		pageCount: 7,
		timeout: 60
	},{
		id: "accountStatus",
		title: "账户状态提示页面",
		timeout: 5
	},{
		id: "NomalFixedConfirm",
		title: "普通存款定期转活期确认",
		timeout: 30
	},{
		id: "CallDepositConfirm",
		title: "通知存款定期转活期确认",
		timeout: 30
	},{
		id: "inputRandomNumber",
		title: "输入手机验证码",
		getKeys: ["RandomNumber","msg_TFCNumber"],
		setKeys: ["input_TFCRandom"],
		timeout: 90
	},{
		id: "fixedToCurrentConfirm",
		title: "定期转活期信息确认页面",
		getKeys: ["startDate","endDate","Page2_Term","transAmount"],
		timeout: 30
	},{
		id: "CallToCurrentConfirm",
		title: "通知转活期信息确认页面",
		getKeys: ["startDate","endDate","Page2_Term","transAmount"],
		timeout: 30
	},{
		id: "fixedDateSelect",
		title: "定期存款存期选择",
		timeout: 30
	},{
		id: "fixedPassDateSelect",
		title: "有折定期存款存期选择",
		timeout: 30
	},{
		id: "fixedCardDateSelect",
		title: "定期卡转账存入存期选择",
		timeout: 30
	},{
		id: "financialCurrentToFixedSuccess",
		title: "活转定成功页面",
		setButtons:["receipt"],
		getKeys: ["customAction","receipt","accountName","page_Term","autoTransfer",
					"print_terminalSerial","intersetRate1","transAmount","page_TransDate","page_TransTime",
					"terminalId","page_CardNo","transamount_show"],
		timeout: 30
	},{
		id: "financialCurrentToCallSuccess",
		title: "活转通知成功页面",
		setButtons:["receipt"],
		getKeys: ["customAction","receipt","accountName","page_Term","autoTransfer",
					"print_terminalSerial","intersetRate1","transAmount","page_TransDate","page_TransTime",
					"terminalId","page_CardNo"],
		timeout: 30
	},{
		id: "financialFixedToCurrentSuccess",
		title: "定期转活期成功页面",
		setButtons:["receipt"],
		getKeys: ["startDate","endDate","Page2_Term","transAmount","receipt", "customAction",
					"page_CardNo", "terminalId", "page_TransTime", "page_TransDate","accountName","print_terminalSerial"
					,"TT_INT","TT_INTR","TT_INTTotal"],
		
		timeout: 30
	},{
		id: "financialCallToCurrentSuccess",
		title: "通知转活期成功页面",
		setButtons:["receipt"],
		getKeys: ["startDate","endDate","Page2_Term","transAmount","receipt", "customAction",
		          "accountName", "print_terminalSerial", "page_TransTime", "page_CardNo", "terminalId", "page_TransDate"
				  ,"TT_INT","TT_INTR","TT_INTTotal"],
		
		timeout: 30
	},{
		id: "CallPreserveInput",
		title: "卡内通知存款支取维护输入页面",
		getKeys: ["NP_amount_show","NP_term","NP_sqno","NP_callWay","NP_cash","NP_startDate","NP_endDate"],
		setKeys: ["NP_amount1","NP_amount","NP_callWay","NP_cash","NP_drawDate","NP_callWay_show","NP_cash_show","NP_drawDate_show"],
		timeout: 60
	},{
		id: "CallPreserveInputConfirm",
		title: "卡内通知存款支取维护输入确认页面",
		getKeys: ["ST_FullName","cardNo","NP_callWay_show","NP_cash_show","NP_drawDate_show","NP_amount_show"
					,"NP_term","NP_sqno","NP_amount","NP_startDate","NP_endDate"],
		timeout: 30
	},{
		id: "CallPreserveSuccess",
		title: "卡内通知存款支取维护输入成功",
		setButtons:["receipt"],
		getKeys: ["receipt","customAction","accountName","print_terminalSerial",
					"page_TransDate", "page_TransTime","terminalId", "page_CardNo","NP_cash_show", "NP_callWay_show",
		           "NP_term","NP_sqno","NP_startDate","NP_amount","NP_endDate","NP_drawDate_show","NP_amount_show","NP_drawDate1"],
		timeout: 30
	},{
		id: "TFCNumberSign",
		title: "验证码发送成功提示",
		getKeys: ["mobile","msg_TFCNumber"],
		timeout: 30
	}]
},{
	entry: "index",
	path: "/DCW/",
	pages: [{
		id: "stateTypeSelect",
		title: "账单类型选择",
		timeout: 30
	},{
		id: "creditStateDate",
		title: "账单日期输入",
		setKeys:["CreditStatementDate"],
		timeout: 60
	},{
		id: "detailConfirm",
		title: "账单信息确认",
		getDetails: ["detail","CreditStatementDate","CreditStatementType"],
		pageCount: 8,
		timeout: 60
	},{
		id: "CreditYCdetailConfirm",
		title: "账单信息确认",
		getDetails: ["detail","CreditStatementDate","CreditStatementType","ST_TRANYM","ST_PAYED","ST_STMTAMT","ST_MINPAY","ST_DUEDATE","ST_STMTDATE","ST_amount"],
		pageCount: 8,
		timeout: 60
	}]
},{
	entry: "index",
	path: "/AGENT/",
	pages: [{
		id: "AgentFeeMenu",
		title: "代缴费类型选择界面",
		getKeys: ["AWF", "AEF","AGF","TVF","ADF","AYF"],
		setButtons: ["AWF", "AEF","AGF","TVF","ADF","AYF"],
		timeout: 30
	},{
		id: "AgentMenu",
		title: "代缴费二级菜单",
		getKeys: ["AWF", "AEF","AGF","TVF","ADF","AYF"],
		setButtons: ["AWF", "AEF","AGF","TVF","ADF","AYF"],
		timeout: 30
	},{
		id: "signEchoView",
		title: "代缴费签约户名回显",
		getKeys: ["userNum", "userName","userAddress","page_Eject"],
		timeout: 30
				
	},{
		id: "cancelDataForm",
		title: "解约数据",
		getKeys: [ "userNum","userName","userAddress","page_Eject"],
		setKeys: ["userAddress","userName"],
		timeout: 120
				
	},{
		id: "modifyDataForm",
		title: "签约数据",
		getKeys: [ "userNum","userName","userAddress","page_Eject"],
		setKeys: ["userAddress","userName"],
		timeout: 120
				
	},{
		id: "signDataForm",
		title: "签约数据",
		getKeys: [ "userNum","userName","userAddress","page_Eject"],
		setKeys: ["userAddress","userName"],
		timeout: 120
				
	},{
		id: "signEchoViewa",
		title: "代缴费签约户名回显",
		getKeys: ["userNum", "userName","userAddress","page_Eject"],
		timeout: 30
				
	},{
		id: "signModifyView",
		title: "代缴费变更户名回显",
		getKeys: ["userNum", "userName","userAddress","page_Eject"],
		timeout: 30
	},{
		id: "cancelSignView",
		title: "代缴费解约户名回显",
		getKeys: ["userNum", "userName","userAddress","page_Eject"],
		timeout: 30
	},{
		id: "PERID_Sign_Agent",
		title: "签字界面",
		YH_Hand:"0",
		getKeys: ["name","Apply_tellerno","genderC","nationality","pid", "transactor",
			"abatedate", "Apply_terminalId","issueoffice","transDate","transTime","mobileNumber",
			"PERresponseCode","PERerrorMessage","issuedate","menuAction","cardNo","address",
			"selectedTrans","subBusiTypeName","userNum"],
		timeout: 90
	},{
	 id: "PERIDForJPG_AGENT",
		title: "回单转图片",
		getKeys: ["name","Apply_tellerno","genderC","nationality","pid", "transactor",
			"abatedate", "Apply_terminalId","issueoffice","transDate","transTime","mobileNumber",
			"PERresponseCode","PERerrorMessage","issuedate","menuAction","cardNo","address",
			"selectedTrans","subBusiTypeName","userNum"],
		timeout: 90
	},{
		id: "Success_Agent",
		title: "代缴费交易成功",
		getKeys: ["page_transAmount", "page_TransDate","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "menuAction","page_CardNo"],
		setButtons:["receipt"],
		timeout: 60
	},{
		id: "AgentOtherCardTips",
		title: "支付方式选择",
		timeout: 30
		
		
	},{
		id: "AgentSignedTips",
		title: "代缴费已签约提示",
		timeout: 30
	
	},{
		id: "AgentNoSignedTips",
		title: "代缴费未签约提示",
		timeout: 30
	},{
		id: "AgentNoSignedTipsM",
		title: "代缴费未签约提示M",
		timeout: 30
		
	},{
		id: "queryEmpty",
		title: "无支持的交易类型",
		timeout: 30
	},{
		id: "paymentsConfirm",
		title: "预存信息确认",
		getKeys: ["cardNo","userNum","userName","userPayfeesum","transAmount"],
		timeout: 30
	},{
		id: "orderPayfeeAmount",
		title: "预存输入金额",
		setKeys:["transAmount"],
		getKeys: ["userNum","userName","userPayfeesum","page_TFRMaxAmount"],
		timeout: 30
	},{
		id: "orderPayfeeAmountError",
		title: "重新输入预存金额",
		setKeys:["transAmount"],
		getKeys: ["userNum","userName","userPayfeesum","page_TFRMaxAmount"],
		timeout: 30
	},{
		id: "inputAgentNumber",
		title: "输入客户号",
		setKeys:["userNum"],
		timeout: 60
	},{
		id: "inputAgentNumber_qry",
		title: "输入客户号",
		YH_Hand:"0",
		setKeys:["userNum"],
		timeout: 60
	},{
		id: "agentSignSucceedView",
		title: "签约成功页面",
		getKeys: ["page_transAmount", "page_TransDate","page_TransTime","terminalId",
					"accountName","page_TransKeyPrint","print_terminalSerial","page_transFee",
					"page_Eject", "customAction", "receipt", "menuAction","page_CardNo","userNum"],
		setButtons:["receipt"],
		timeout: 30
	},{
		id: "agentQueryView",
		title: "欠费查询成功",
		getKeys: ["userNum","userName","userPayfeesum","userAddress","page_Eject"],
		timeout: 30
	},{
		id: "agentQueryTransResult",
		title: "支持交易选择",
		getDetails: ["detail"],
		pageCount: 8,
		timeout: 90
	},{
		
		id: "agentQueryBusiResult",
		title: "代缴费地区选择",
		getDetails: ["detail"],
		pageCount: 12,
		timeout: 90
	},{
		id: "agentPaymentView",
		title: "欠费金额查询成功后缴费",
		getKeys: ["userNum","userName","userPayfeesum","userAddress","page_Eject"],
		timeout: 30
	},{
		id: "agentErrorMessage",
		title: "状态同步联机成功页面",
		getKeys: ["errorMessage","page_Eject"],
		timeout: 30
	},{
		id: "HuaFeeMenu",
		title: "代缴话费类型界面",
		timeout: 30
	},{
		id: "inputTeleNumber",
		title: "输入固话号码",
		setKeys:["userNum"],
		timeout: 60
	},{
		id: "inputTeleAreaCode",
		title: "输入固话区号",
		setKeys:["nt3"],
		timeout: 60
	},{
		id: "inputPhoneNumber",
		title: "输入手机号码",
		setKeys:["userNum"],
		YH_Hand:"0",
		timeout: 60
	},{
		id: "YDAdvanceView",
		title: "移动缴费预存页面",
		setKeys:["transAmount"],
		timeout: 30
	},{
		id: "YDAdvanceConfirm",
		title: "移动缴费预存确认",
		getKeys:["userNum","transAmount"],
		timeout: 30
	},{
		id: "AgentSignedInfoTips",
		title: "提示客户未签约",
		timeout: 5
	},{
		id: "AgentSignedResultSelect",
		title: "签约信息选择",
		getDetails:["detail","menuAction"],
		setKeys:["userNum","userName","payeracc","nt3","cardflag"],
		pageCount: 10,
		timeout: 120
	}]
},{
	entry: "index",
	path: "/SOCIAL/",
	pages: [{
		id: "peopleQueryTransResult",
		title: "支持交易选择",
		getDetails: ["detail"],
		pageCount: 8,
		timeout: 30
	},{
		id: "apply_peopleform",
		title: "申请-填写表单",
		YH_Hand:"0",
		setKeys: ["mobile",  "bxtype",
					"idno","peopid"],
		timeout: 120
	},{
		id: "apply_payfeeform",
		title: "申请-填写表单",
		YH_Hand:"0",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName",
					"name", "pid",  "telephone", "address",
					"signNetBank", "agreeNetBank",
					"signMobileBank", "agreeMobileBank","job"],
		setKeys: ["telephone", "peoptype",
					"signNetBank", "agreeNetBank",
					"signMobileBank", "agreeMobileBank","idno","peopid"],
		timeout: 120
	},{
		id: "apply_payfeeform1",
		title: "申请-填写表单",
		YH_Hand:"0",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName",
					"name", "pid",  "telephone", "address",
					"signNetBank", "agreeNetBank",
					"signMobileBank", "agreeMobileBank","job","page_Eject"],
		setKeys: ["telephone", "peoptype",
					"signNetBank", "agreeNetBank",
					"signMobileBank", "agreeMobileBank","idno","peopid"],
		timeout: 120
	},{
		id: "apply_queryinfoform",
		title: "申请-填写表单",
		YH_Hand:"0",
		getKeys: ["viewLeftTitle", "viewCardNo", "viewCustomerName",
					"name", "pid",  "telephone", "address",
					"signNetBank", "agreeNetBank",
					"signMobileBank", "agreeMobileBank","job"],
		setKeys: ["idno","peopid"],
		timeout: 120
	},{
		id: "peopleSignView",
		title: "签约成功",
		getKeys: ["peopid","peopname","acctno","mode","page_Eject"],
		timeout: 30
	},{
		id: "payFeeTransResult",
		title: "欠费明细列表",
		getDetails: ["detail"],
		setKeys: ["instype","bustype","ksny","zzny", "amount","payno"],
		pageCount: 7,
		timeout: 60
	},{
		id: "payFeeTransResult1",
		title: "欠费明细列表",
		getDetails: ["detail","page_Eject"],
		setKeys: ["instype","bustype","ksny","zzny", "amount","payno"],
		pageCount: 7,
		timeout: 60
	},{
		id: "payFeeXinXiConfirm",
		title: "缴费确认页面",
		getKeys: ["instype","ksny","zzny","amount","payno"],
		timeout: 30
	},{
		id: "basicInfomationView",
		title: "基础信息查询页面",
		getKeys: ["peopid","peopname","idnumber","telphno","areacode","address","vocation","acctstatus","page_Eject"],
		timeout: 30
	},{
		id: "InputPin1",
		title: "输入登录密码",
		getKeys: ["page_Eject","customAction"],
		timeout:60
	},{
		id: "phoneNumberError",
		title: "手机号码有误",
		timeout: 5
	 },{
		id: "reInputPin1",
		title: "密码错重输",
		getKeys: ["page_Eject","customAction"],
		timeout: 60
	},{
		id: "peoplePayFee_success",
		title: "申请-开卡成功",
		setButtons:["receipt"],
		getKeys: ["cardNo","receipt","page_amount","page_Eject"],
		timeout: 70
	},{
		id: "peopleStatusErrorMessage",
		title: "状态同步联机成功页面",
		getKeys: ["errorMessage","page_Eject"],
		timeout: 30
	},{
		id: "peopleStatusErrorMessage1",
		title: "状态同步联机成功页面",
		getKeys: ["errorMessage","page_Eject"],
		timeout: 30
	},{
		id: "SocialCardMenu",
		title: "社保卡菜单",
		getKeys: ["I_INQ","Trans_socialActive","Trans_socialLoss"],
		timeout: 30
	},{
		id: "activeCardInfoView",
		title: "社保卡激活确认页面",
		getKeys: ["activateName","activateTelephone","activateIdno"],
		timeout: 30
	},{
		id: "SocialCardActiveSuccess",
		title: "卡片激活交易成功页面",
		setButtons:["receipt"],
		getKeys: ["receipt","transAction","page_CardNo","terminalId","page_TransTime","page_TransDate","adminUserName","name"],
		timeout: 30
	},{
		id: "PeopleSocialAllMenu",
		title: "其他业务二级菜单",
		getKeys: ["Trans_peopleSocial"],
		timeout: 30
	},{
		id: "SOCIALACTIVE_Sign",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["activateName", "isUserSign","genderC", "activateTelephone", "nationality","activateIdno","issuedate","abatedate"],
		timeout: 59
	},{
		id: "SOCIALACTIVEWithSign",
		title: "本地审核-表单指纹",
		YH_Hand:"0",
		getKeys: ["activateName", "genderC", "activateTelephone", "nationality","activateIdno","issuedate","abatedate","PERresponseCode","PERerrorMessage"],
		timeout: 59
	},{
		id: "SOCIALACTIVE_Video_Sign",
		title: "本地审核-表单指纹",
		YH_Hand:"0",
		getKeys: ["activateName", "genderC", "activateTelephone", "nationality","activateIdno","issuedate","abatedate","PERresponseCode","PERerrorMessage"],
		timeout: 59
	},{
		id: "SOCIALACTIVEFISOKVideo_Sign",
		title: "本地审核-表单指纹",
		YH_Hand:"0",
		getKeys: ["activateName", "genderC", "activateTelephone", "nationality","activateIdno","issuedate","abatedate","PERresponseCode","PERerrorMessage"],
		timeout: 59
	},{
		id: "SOCIALACTIVEFISOK_Sign",
		title: "本地审核-表单指纹",
		YH_Hand:"0",
		getKeys: ["activateName", "genderC", "activateTelephone", "nationality","activateIdno","issuedate","abatedate","PERresponseCode","PERerrorMessage"],
		timeout: 59
	},{
		id: "SOCIALACTIVEForJPG_SIGN",		
		title: "社保卡激活_回单转图片",
		getKeys: ["name","genderC","pid","issueoffice","isUserSign","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "inputSocialCommonRandomNumber",
		title: "输入手机验证码",
		getKeys: ["RandomNumber","msg_TFCNumber"],
		timeout: 90
	},{
		id: "SLPERID_Video_Sign",
		title: "视频审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name", "pid", "genderC","issueoffice","transDate","menuAction","mobile","PERresponseCode",
			"PERerrorMessage","ST_LostTime","payeracc","Apply_terminalId","nationality","issuedate","abatedate",
			"transTime","cardlossFlag"],
		timeout: 59
	},{
		id: "SLcheckFISOKVideo_Sign",
		title: "视频审核-审核确认",
		getKeys: ["name", "pid", "genderC","issueoffice","transDate","menuAction","mobile","PERresponseCode",
			"PERerrorMessage","ST_LostTime","payeracc","Apply_terminalId","nationality","issuedate","abatedate",
			"transTime","cardlossFlag"],
		timeout: 90
	},{
		id: "SLPERID_Sign",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name", "pid", "genderC","issueoffice","transDate","menuAction","mobile","PERresponseCode",
			"PERerrorMessage","ST_LostTime","payeracc","Apply_terminalId","nationality","issuedate","abatedate",
			"transTime","cardlossFlag"],
		timeout: 59
	},{
		id: "SLPERIDWithSign",
		title: "本地审核-表单指纹",
		YH_Hand:"0",
		getKeys: ["name", "pid", "genderC","issueoffice","transDate","menuAction","mobile","PERresponseCode",
			"PERerrorMessage","ST_LostTime","payeracc","Apply_terminalId","nationality","issuedate","abatedate",
			"transTime","cardlossFlag"],
		timeout: 59
	},{
		id: "SLcheckFISOK_Sign",
		title: "本地审核-审核确认",
		getKeys: ["name", "pid", "genderC","issueoffice","transDate","menuAction","mobile","PERresponseCode",
			"PERerrorMessage","ST_LostTime","payeracc","Apply_terminalId","nationality","issuedate","abatedate",
			"transTime","cardlossFlag"],
		timeout: 90
	},{
		id: "SLPERIDForJPG_SIGN",
		title: "社保卡挂失_回单转图片",
		getKeys: ["name","genderC","pid","isUserSign","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","payeracc","PERresponseCode","PERerrorMessage","adminUserName","cardlossFlag"],
		timeout: 90
	},{
		id: "SocialLossSuccess",
		title: "社保卡挂失交易成功",
		setButtons:["receipt"],
		getKeys: ["receipt","terminalId","ST_CardLossFlag","print_terminalSerial","ST_SocialCardLossFlag","ST_SocialCardLossErrorMess","ST_SLbzMessage"],
		timeout: 30
	},{
		id: "SocialAccDetailEmpty",
		title: "提示没有社保账户明细",
		timeout: 5
	},{
		id: "SocialCardLossResult",
		title: "社保卡挂失交易失败结果",
		getKeys: ["ST_SocialCardLossErrorMess"],
		timeout: 5
	}]
	},{
	entry: "index",
	path: "/SIGN/",
	pages: [{
		id: "SignMenu",
		title: "电子银行业务二级菜单",
		getKeys:["Trans_transfersign","Trans_ebanksign", "Trans_ebankcancel","Trans_UBankChangeBusi",
		"Ukeyflg","Trans_BankUBundedBusi","Trans_EBankBundBusi","page_Eject","Trans_ebankmodify"],
		timeout: 30
	},{
		id: "AccSignMenu",
		title: "账户签约业务二级菜单",
		getKeys:["Trans_SmsBankBusi","Trans_SmsModifyBankBusi","Trans_SmsCancelBankBusi","Trans_transfersign",
		"Trans_ebanksign","Trans_ebankcancel","Trans_UBankChangeBusi","Ukeyflg","Trans_BankUBundedBusi",
		"Trans_EBankBundBusi","Trans_UkeyUnBlock","Trans_UkeyPinUnBlock","Trans_ebankmodify"],
		timeout: 30
	},{
		id: "ATMSignedResult",
		title: "提示客户已转账签约",
		getDetails: ["detail"],
		pageCount: 10,
		timeout: 60
	},{
		id: "MsgSignHost_FailedInfo",
		title: "交易失败",
		getKeys: ["ST_SmsResult","ST_SmsResultCode"],
		timeout: 5
	},{
		id: "EBank_agreement",
		title: "客户阅读协议",
		timeout: 90
	},{
		id: "EBank_form",
		title: "填写表单",
		YH_Hand:"0",
		setKeys:["mobile","job","address"],
		getKeys: ["name","pid","mobileNumber","job","address"],
		timeout: 120
	},{
		id: "PERID_SmsSign",
		title: "表单回显",
		YH_Hand:"0",
		getKeys: ["name", "pid", "mobile", "address", "job","idType","genderC","issuedate","abatedate",
			"PERresponseCode","PERerrorMessage","ST_QY_packId","ST_QY_fee","Apply_terminalId","issueoffice",
			"transDate","transTime"],
		timeout: 59
	},{
		id: "PERIDWithSmSSign",
		title: "表单回显",
		YH_Hand:"0",
		getKeys: ["name", "pid", "mobile", "address", "job","idType","genderC","issuedate","abatedate",
			"PERresponseCode","PERerrorMessage","ST_QY_packId","ST_QY_fee","Apply_terminalId","issueoffice",
			"transDate","transTime"],
		timeout: 59
	},{
		id: "PERIDWithSmSSignAndFingerAuth",
		title: "表单回显及授权",
		YH_Hand:"0",
		getKeys: ["name", "pid", "mobile", "address", "job","idType","genderC","issuedate","abatedate","PERresponseCode","PERerrorMessage","ST_QY_packId","ST_QY_fee"],
		timeout: 59
	},{
		id: "PERIDForJPG_SMSSIGN",
		title: "表单回显",
		getKeys: ["name", "pid", "mobile", "address", "job","idType","genderC","issuedate","abatedate",
			"PERresponseCode","PERerrorMessage","ST_QY_packId","ST_QY_fee","Apply_terminalId","issueoffice",
			"transDate","transTime"],
		timeout: 90
	},{
		id: "checkFISOK_SmsSign",
		title: "信息确认",
		getKeys: ["name", "pid", "mobile", "address", "job","idType","genderC","issuedate","abatedate",
			"PERresponseCode","PERerrorMessage","ST_QY_packId","ST_QY_fee","Apply_terminalId","issueoffice",
			"transDate","transTime"],
		timeout: 90
	},{
		id: "agent_authorized_SmsSign",
		title: "信息确认,指纹授权",
		getKeys: ["name", "pid", "mobile", "address", "job","idType","genderC","issuedate","abatedate","PERresponseCode","PERerrorMessage"],
		timeout: 90
	},{
		id: "SmsSign_success",
		title: "短信签约交易成功",
		getKeys: ["receipt", "page_Eject","page_CardNo","terminalId","page_TransTime","page_TransDate","adminUserName","name",
		"transAction"],
		setButtons:["receipt"],
		timeout: 60
	},{
		id: "TransSign_success",
		title: "转账签约交易成功",
		getKeys: ["receipt", "page_Eject","page_CardNo","terminalId","page_TransTime","page_TransDate","transAmount",
		"adminUserName","name"],
		setButtons:["receipt"],
		timeout: 60
	},{
		id: "agent_authorized_TransSign",
		title: "信息确认,指纹授权",
		getKeys: ["name", "pid", "mobileNumber", "address","idType","genderC","issuedate","abatedate","ATS_funCode","transAmount","ATS_enddate","banktype","PERresponseCode","PERerrorMessage"],
		timeout: 90
	},{
		id: "checkFISOK_TransSign",
		title: "信息确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno", "transDate", 
		          "transTime","cardNo","transAmount","ATS_enddate","ATS_funCode","banktype","address","PERresponseCode",
				  "PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "PERID_TransSign",
		title: "表单回显",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno", "transDate", 
		          "transTime","cardNo","transAmount","ATS_enddate","ATS_funCode","banktype","address","PERresponseCode",
				  "PERerrorMessage","adminUserName"],
		timeout: 60
	},{
		id: "PERIDWithTransSign",
		title: "表单回显",
		YH_Hand:"0",
		getKeys: ["name", "pid", "mobileNumber", "address","idType","genderC","issuedate","abatedate",
			"ATS_funCode","transAmount","ATS_enddate","banktype","PERresponseCode","PERerrorMessage",
			"cardNo","Apply_terminalId","nationality","issueoffice","transDate","transTime"],
		timeout: 59
	},{
		id: "PERIDWithTransSignAndFingerAuth",
		title: "表单回显及授权",
		YH_Hand:"0",
		getKeys: ["name", "pid", "mobileNumber", "address","idType","genderC","issuedate","abatedate","ATS_funCode","transAmount","ATS_enddate","banktype","PERresponseCode","PERerrorMessage"],
		timeout: 59
	},{
		id: "PERIDForJPG_TRFSIGN",
		title: "表单回显",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno", "transDate", 
		          "transTime","cardNo","transAmount","ATS_enddate","ATS_funCode","banktype","address","PERresponseCode",
				  "PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "TransSign_form",
		title: "填写表单",
		YH_Hand:"0",
		setKeys:["ATS_funCode","transAmount","ATS_enddate","banktype","ATS_amount"],
		getDetails: ["atmTransSignDetail","name","pid","transAmount","ATS_amount"],
		timeout: 120
	},{
		id: "MsgSignFeeDetail",
		title: "短信签约套餐明细页面1",
		setKeys:["ST_QY_packId","ST_QY_fee"],
		getDetails: ["detail"],
		timeout: 60
	},{
		id: "MsgSignFeePage",
		title: "短信签约套餐明细页面2",
		setKeys:["ST_QY_fee"],
		getKeys: ["ST_Pay","ST_Name","ST_QY_packId"],
		timeout: 60
	},{
		id: "SignedContinue",
		title: "显示可签约列表",
		getDetails: ["detail"],
		pageCount: 10,
		timeout: 60
	},{
		id: "BCreditForm",
		title: "填写个人信息表单",
		YH_Hand:"0",
		setKeys:["mobile","ST_Email","ST_MarryStatus","ST_EducationLevel","ST_StayPostcode","ST_StayAddr"],
		getKeys:["name","pid","mobile","address"],
		timeout: 120
	},{
		id: "BCreditFormAgain",
		title: "继续填写个人信息表单",
		YH_Hand:"0",
		setKeys:["ST_CompanyAddr","ST_MarryStatus","ST_EducationLevel","ST_YearIncome","mobile","ST_StayAddr","ST_StayPostcode","ST_Email","ST_BillType","ST_OpenAccountMessage","ST_AutomaticRepayment","ST_AutomaticRepaymentType","ST_AutomaticRepaymentCard","ST_HavingHouse","ST_HavingCar","ST_ApplyCardType","ST_AgreeGeneral","ST_WorkTime"],
		timeout: 120
	},{
		id: "BCreditFormOnceAgain",
		title: "再次填写个人信息表单",
		YH_Hand:"0",
		setKeys:["ST_HavingHouse","ST_HavingCar","ST_ApplyCardType","ST_AgreeGeneral","ST_EmploymentStatus"],
		timeout: 120
	},{
		id: "BCreditSucceed",
		title: "信用卡预约交易成功页面",
		getKeys:["receipt"],
		setButtons:["receipt"],
		timeout: 30
	},{
		id: "errorIDCard",
		title: "身份证错误提示",
		timeout: 5
	},{
		id: "checkFISOKVideo_SmsSign",
		title: "信息确认",
		getKeys: ["name", "pid", "mobile", "address", "job","idType","genderC","issuedate","abatedate",
			"PERresponseCode","PERerrorMessage","ST_QY_packId","ST_QY_fee","Apply_terminalId","issueoffice",
			"transDate","transTime"],
		timeout: 90
	},{
		id: "checkFISOKVideo_TransSign",
		title: "信息确认",
		getKeys: ["name", "pid", "mobileNumber", "address","idType","genderC","issuedate","abatedate",
			"ATS_funCode","transAmount","ATS_enddate","banktype","PERresponseCode","PERerrorMessage",
			"cardNo","Apply_terminalId","nationality","issueoffice","transDate","transTime"],
		timeout: 90
	},{
		id: "PERID_Video_TransSign",
		title: "表单回显",
		YH_Hand:"0",
		getKeys: ["name", "pid", "mobileNumber", "address","idType","genderC","issuedate","abatedate",
			"ATS_funCode","transAmount","ATS_enddate","banktype","PERresponseCode","PERerrorMessage",
			"cardNo","Apply_terminalId","nationality","issueoffice","transDate","transTime"],
		timeout: 59
	},{
		id: "PERID_Video_SmsSign",
		title: "表单回显",
		YH_Hand:"0",
		getKeys: ["name", "pid", "mobile", "address", "job","idType","genderC","issuedate","abatedate",
			"PERresponseCode","PERerrorMessage","ST_QY_packId","ST_QY_fee","Apply_terminalId","issueoffice",
			"transDate","transTime"],
		timeout: 59
	},{
		id: "PERID_Video_TransSign_FingerAuth",
		title: "表单回显及授权",
		YH_Hand:"0",
		getKeys: ["name", "pid", "mobile", "address", "job","idType","genderC","issuedate","abatedate","PERresponseCode","PERerrorMessage","ST_QY_packId","ST_QY_fee"],
		timeout: 59
	},{
		id: "PERID_Video_SmsSign_FingerAuth",
		title: "表单回显及授权",
		YH_Hand:"0",
		getKeys: ["name", "pid", "mobile", "address", "job","idType","genderC","issuedate","abatedate","PERresponseCode","PERerrorMessage","ST_QY_packId","ST_QY_fee"],
		timeout: 59
	},{
		id: "IDCardInsertOnce",
		title: "插入身份证",
		timeout: 59
	},{
		id: "IDCardInsertAgain",
		title: "插入身份证",
		timeout: 59
	},{
		id: "SmsSignedResult",
		title: "提示客户已短信签约",
		getDetails:["ST_SmsSignAcDetail","ST_QY_packId","ST_SmsSignDate"],
		pageCount: 8,
		timeout: 30
	},{
		id: "SmsNoSignedTips",
		title: "提示客户未签约",
		timeout: 5
	},{
		id: "SmsCancel_success",
		title: "短信解约交易成功",
		getKeys: ["receipt","page_CardNo","terminalId","page_TransTime","page_TransDate","adminUserName","name"],
		setButtons:["receipt"],
		timeout: 30
	},{
		id: "SmsCancelAccount",
		title: "客户选择多个解约账户",
		getDetails: ["ST_SmsSignAcDetail","ST_SmsSignDate","ST_SmsCancelCheck"],
		setKeys: ["ST_SmsCancelAcDetail","ST_SmsCancelCheck","ST_SmsSignFlag"],
		pageCount: 8,
		timeout: 60
	},{
		id: "SCPERIDWithSignSave",
		title: "本地审核-客户签名确认页面",
		YH_Hand:"0",
		getKeys: ["name","Apply_tellerno","genderC","nationality","pid", "transactor",
			"abatedate", "Apply_terminalId","issueoffice","transDate","transTime","mobileNumber",
			"PERresponseCode","PERerrorMessage","issuedate","menuAction","cardNo","address",
			"ST_SmsCancelAcDetail","ST_SmsSignMobileDetail","ST_QY_packId","ST_QY_fee"],
		timeout: 90
	},{
		id: "SCPERIDForJPG_SIGN",
		title: "回单转图片",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","pid","ST_QY_packId","ST_QY_fee","ST_SmsCancelAcDetail","ST_SmsSignMobileDetail","PERresponseCode",
		"PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "SMNoSignedTips",
		title: "短信变更提示客户未签约",
		timeout: 30
	},{
		id: "SmsModifyAccount",
		title: "客户签约账户变更",
		getDetails: ["ST_SmsSignAcDetail","menuAction"],
		setKeys: ["ST_SmsModifyAcDetail","ST_SmsModifyDelAcc"],
		pageCount: 8,
		timeout: 60
	},{
		id: "SmsSignAccount",
		title: "客户签约账户签约",
		getDetails: ["ST_SmsSignAcDetail","menuAction","cardNo","ST_SmsSignCardNo"],
		setKeys: ["ST_SmsModifyAcDetail","ST_SmsModifyDelAcc"],
		pageCount: 8,
		timeout: 60
	},{
		id: "delAccConfirmTips",
		title: "客户确认是否删除该账户",
		getDetails: ["ST_SmsSignAcDetail","ST_SmsModifyDelAcc"],
		setKeys: ["ST_SmsSignAcDetail"],
		timeout: 30
	},{
		id: "SmsModifyAccountAdd",
		title: "客户变更账户新增",
		getDetails: ["ST_SmsModifyNoSignAcDetail","ST_SmsCancelCheck","ST_SmsSignAcDetail"],
		setKeys: ["ST_SmsCancelCheck","ST_SmsSignAcDetail"],
		pageCount: 8,
		timeout: 60
	},{
		id: "SmsSignAccountAdd",
		title: "客户签约账户新增",
		getDetails: ["ST_SmsModifyNoSignAcDetail"],
		setKeys: ["ST_SmsModifyAddAcc","ST_OpenDeptNew","ST_AcType"],
		pageCount: 8,
		timeout: 60
	},{
		id: "SmsModifyNoMoreAcc",
		title: "提示客户不存在未签约借记账户",
		timeout: 5
	},{
		id: "InputSmsAccPin",
		title: "输入选择的账户密码",
		timeout:60
	},{
		id: "reInputSmsAccPin",
		title: "重新输入选择的账户密码",
		timeout:60
	},{
		id: "SmsModifyMobile",
		title: "客户变更手机号明细",
		getDetails: ["ST_SmsSignMobileDetail","menuAction"],
		setKeys: ["ST_SmsModifyPhoneDetail","ST_SmsModifyDelPhone"],
		pageCount: 8,
		timeout: 60
	},{
		id: "SmsSignMobile",
		title: "客户签约手机号明细",
		getDetails: ["ST_SmsSignMobileDetail","menuAction"],
		setKeys: ["ST_SmsModifyPhoneDetail","ST_SmsModifyDelPhone"],
		pageCount: 8,
		timeout: 60
	},{
		id: "delMobileConfirmTips",
		title: "客户确认是否删除该手机号",
		getDetails: ["ST_SmsSignMobileDetail","ST_SmsModifyDelPhone"],
		setKeys: ["ST_SmsSignMobileDetail"],
		timeout: 30
	},{
		id: "inputSmsMobileNumber",
		title: "客户输入新增的手机号",
		setKeys: ["mobile"],
		getKeys: ["ST_SmsSignMobileDetail"],
		timeout: 60
	},{
		id: "SMPERIDWithSignSave",
		title: "本地审核-客户签名确认页面",
		YH_Hand:"0",
		getKeys: ["name","Apply_tellerno","genderC","nationality","pid", "transactor",
			"abatedate", "Apply_terminalId","issueoffice","transDate","transTime","mobileNumber",
			"PERresponseCode","PERerrorMessage","issuedate","menuAction","cardNo","address",
			"ST_SmsModifyAcDetail","ST_SmsModifyPhoneDetail","ST_QY_packId","ST_QY_fee"],
		timeout: 90
	},{
		id: "SMPERIDForJPG_SIGN",
		title: "回单转图片",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","pid","ST_QY_packId","ST_QY_fee","ST_SmsModifyAcDetail","ST_SmsModifyPhoneDetail","PERresponseCode",
		"PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "SmsModify_success",
		title: "短信变更交易成功",
		getKeys: ["receipt","terminalId","page_TransTime","page_TransDate","adminUserName","name"],
		setButtons:["receipt"],
		timeout: 60
	},{
		id: "SSPERIDWithSignSave",
		title: "本地审核-客户签名确认页面",
		YH_Hand:"0",
		getKeys: ["name","Apply_tellerno","genderC","nationality","pid", "transactor",
			"abatedate", "Apply_terminalId","issueoffice","transDate","transTime","mobileNumber",
			"PERresponseCode","PERerrorMessage","issuedate","menuAction","cardNo","address",
			"ST_SmsModifyAcDetail","ST_SmsModifyPhoneDetail","ST_QY_packId","ST_QY_fee"],
		timeout: 90
	},{
		id: "SSPERIDForJPG_SIGN",
		title: "回单转图片",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","pid","ST_QY_packId","ST_QY_fee","ST_SmsModifyAcDetail","ST_SmsModifyPhoneDetail","PERresponseCode",
		"PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "SSPERID_Video_Sign",
		title: "视频审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","Apply_tellerno","genderC","nationality","pid", "transactor",
			"abatedate", "Apply_terminalId","issueoffice","transDate","transTime","mobileNumber",
			"PERresponseCode","PERerrorMessage","issuedate","menuAction","cardNo","address",
			"ST_SmsModifyAcDetail","ST_SmsModifyPhoneDetail","ST_QY_packId","ST_QY_fee"],
		timeout: 59
	},{
		id: "SScheckFISOKVideo_Sign",
		title: "视频审核-审核确认",
		getKeys: ["name","Apply_tellerno","genderC","nationality","pid", "transactor",
			"abatedate", "Apply_terminalId","issueoffice","transDate","transTime","mobileNumber",
			"PERresponseCode","PERerrorMessage","issuedate","menuAction","cardNo","address",
			"ST_SmsModifyAcDetail","ST_SmsModifyPhoneDetail","ST_QY_packId","ST_QY_fee"],
		timeout: 90
	},{
		id: "SSPERID_Sign",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","pid","ST_QY_packId","ST_QY_fee","ST_SmsModifyAcDetail","ST_SmsModifyPhoneDetail","PERresponseCode",
		"PERerrorMessage","adminUserName"],
		timeout: 60
	},{
		id: "SSPERIDWithSign",
		title: "本地审核-表单指纹",
		YH_Hand:"0",
		getKeys: ["name","Apply_tellerno","genderC","nationality","pid", "transactor",
			"abatedate", "Apply_terminalId","issueoffice","transDate","transTime","mobileNumber",
			"PERresponseCode","PERerrorMessage","issuedate","menuAction","cardNo","address",
			"ST_SmsModifyAcDetail","ST_SmsModifyPhoneDetail","ST_QY_packId","ST_QY_fee"],
		timeout: 59
	},{
		id: "SScheckFISOK_Sign",
		title: "本地审核-审核确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","pid","ST_QY_packId","ST_QY_fee","ST_SmsModifyAcDetail","ST_SmsModifyPhoneDetail","PERresponseCode",
		"PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "SmsCancelTips",
		title: "客户短信解约提示",
		timeout: 30
	},{
		id: "SMSMenu",
		title: "短信银行功能选择界面",
		getKeys:["Trans_SmsBankBusi","Trans_SmsModifyBankBusi","Trans_SmsCancelBankBusi"],
		timeout: 30
	},{
		id: "SMPERID_Sign",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","pid","ST_QY_packId","ST_QY_fee","ST_SmsModifyAcDetail","ST_SmsModifyPhoneDetail","PERresponseCode",
		"PERerrorMessage","adminUserName"],
		timeout: 59
	},{
		id: "SMcheckFISOK_Sign",
		title: "本地审核-审核确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","pid","ST_QY_packId","ST_QY_fee","ST_SmsModifyAcDetail","ST_SmsModifyPhoneDetail","PERresponseCode",
		"PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "SCPERID_Sign",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","pid","ST_QY_packId","ST_QY_fee","ST_SmsCancelAcDetail","ST_SmsSignMobileDetail","PERresponseCode",
		"PERerrorMessage","adminUserName"],
		timeout: 60
	},{
		id: "SCcheckFISOK_Sign",
		title: "本地审核-审核确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","pid","ST_QY_packId","ST_QY_fee","ST_SmsCancelAcDetail","ST_SmsSignMobileDetail","PERresponseCode",
		"PERerrorMessage","adminUserName"],
		timeout: 90
	}]
}, {
	entry: "index",
	path: "/BANK/",
	pages: [{
		id: "Bank_agreement",
		title: "客户阅读协议",
		timeout: 90
	},{
		id: "Ukey_agreement",
		title: "动态令牌客户阅读协议",
		timeout: 90
	},{
		id: "MobileHostFailedInfo",
		title: "提示手机号错误信息",
		getKeys: ["page_message"],
		timeout: 60
	},{
		id: "EBankCusInfoTips",
		title: "提示客户去柜面合并客户信息",
		timeout: 10
	},{
		id: "EBankSignedTips",
		title: "提示客户已进行过手机银行签约",
		timeout: 10
	},{
		id: "BankUBundedTips",
		title: "提示客户未做过绑定",
		timeout: 5
	},{
		id: "PBank_form",
		title: "填写表单1",
		YH_Hand:"0",
		setKeys:["ST_StayPostcode","ST_ReferrerName","ST_ReferrerNo","ST_ReferrerType","ST_BankInnerTransfer",
					"ST_CrossBankTransfer","address"],
		getKeys: ["name","pid","ST_StayPostcode","ST_ReferrerName","ST_ReferrerNo","ST_ReferrerType","ST_BankInnerTransfer",
					"ST_CrossBankTransfer","address"],
		timeout: 120
	},{
		id: "PBank_formAgain",
		title: "填写表单2",
		YH_Hand:"0",
		setKeys:["PMoUkeyType","PIsMessType","PIsUkeyType","PIsEBank","PIsMobileBank","ST_TRFOneLimitAmount","ST_TRFDayLimitAmount","ST_MessOneLimitAmount","ST_MessDayLimitAmount","ST_SecretNotice"],
		getDetails: ["PBankAmountDetail","Ukeyflg","ST_TRFOneLimitAmount","ST_TRFDayLimitAmount","ST_MessOneLimitAmount","ST_MessDayLimitAmount","ST_SecretNotice","pid"],
		timeout: 120
	},{
		id: "PBank_formOnceAgain",
		title: "填写表单3",
		YH_Hand:"0",
		setKeys:["ST_BankInnerTransfer","ST_CrossBankTransfer","ST_ReferrerType","ST_ReferrerName","ST_ReferrerNo","CifManagerTel","CifManagerName","CifManagerSeq"],
		getKeys:["ST_EmployeeDeptName","ST_BankInnerTransfer","ST_CrossBankTransfer"],
		timeout: 120
	},{
		id: "PERID_Video_BankSign",
		title: "视频审核-表单签名",
		YH_Hand:"0",
		getDetails: ["PBankSignDetail","pid", "cardNo", "mobile", "PIsEBank","PIsMobileBank","PIsMessType",
			"ST_TRFOneLimitAmount","ST_TRFDayLimitAmount","ST_MessDayLimitAmount","ST_MessOneLimitAmount",
			"ST_BankInnerTransfer","ST_CrossBankTransfer","address","ST_SecretNotice","PMoUkeyType",
			"PIsUkeyType","ST_LoginId","name","genderC","Apply_terminalId","issuedate","abatedate",
			"transDate","transTime","PERresponseCode","PERerrorMessage"],
		timeout: 59
	},{
		id: "PERID_Video_BankSign_fingerAuth",
		title: "视频审核-表单签名指纹",
		YH_Hand:"0",
		getDetails: ["PBankSignDetail","pid", "cardNo", "mobile", "PIsEBank","PIsMobileBank","PIsMessType",
			"ST_TRFOneLimitAmount","ST_TRFDayLimitAmount","ST_MessDayLimitAmount","ST_MessOneLimitAmount",
			"ST_BankInnerTransfer","ST_CrossBankTransfer","address","ST_SecretNotice","PMoUkeyType","PIsUkeyType"],
		timeout: 59
	},{
		id: "checkFISOKVideo_BankSign",
		title: "视频审核-审核确认",
		getDetails: ["PBankSignDetail","pid", "cardNo", "mobile", "PIsEBank","PIsMobileBank","PIsMessType",
			"ST_TRFOneLimitAmount","ST_TRFDayLimitAmount","ST_MessDayLimitAmount","ST_MessOneLimitAmount",
			"ST_BankInnerTransfer","ST_CrossBankTransfer","address","ST_SecretNotice","PMoUkeyType",
			"PIsUkeyType","ST_LoginId","name","genderC","Apply_terminalId","issuedate","abatedate",
			"transDate","transTime","PERresponseCode","PERerrorMessage"],
		timeout: 90
	},{
		id: "PERID_BankSign",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","mobile","ST_LoginId","PIsEBank","PIsUkeyType","PIsMobileBank","PIsMessType",
		"PMoUkeyType","ST_MessOneLimitAmount","ST_MessDayLimitAmount","ST_BankInnerTransfer","ST_CrossBankTransfer",
		"ST_SecretNotice","address","PERresponseCode","PERerrorMessage","adminUserName","ST_TRFOneLimitAmount","ST_TRFDayLimitAmount"],
		timeout: 59
	},{
		id: "PERIDWithBankSign",
		title: "本地审核-表单",
		YH_Hand:"0",
		getDetails: ["PBankSignDetail","pid", "cardNo", "mobile", "PIsEBank","PIsMobileBank","PIsMessType",
			"ST_TRFOneLimitAmount","ST_TRFDayLimitAmount","ST_MessDayLimitAmount","ST_MessOneLimitAmount",
			"ST_BankInnerTransfer","ST_CrossBankTransfer","address","ST_SecretNotice","PMoUkeyType",
			"PIsUkeyType","ST_LoginId","name","genderC","Apply_terminalId","issuedate","abatedate",
			"transDate","transTime","PERresponseCode","PERerrorMessage"],
		timeout: 59
	},{
		id: "PERIDWithBankSignAndFingerAuthor",
		title: "本地审核-表单指纹",
		YH_Hand:"0",
		getDetails: ["PBankSignDetail","pid", "cardNo", "mobile", "PIsEBank","PIsMobileBank","PIsMessType",
			"ST_TRFOneLimitAmount","ST_TRFDayLimitAmount","ST_MessDayLimitAmount","ST_MessOneLimitAmount",
			"ST_BankInnerTransfer","ST_CrossBankTransfer","address","ST_SecretNotice","PMoUkeyType","PIsUkeyType","PERresponseCode","PERerrorMessage"],
		timeout: 59
	},{
		id: "checkFISOK_BankSign",
		title: "本地审核-审核确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","mobile","ST_LoginId","PIsEBank","PIsUkeyType","PIsMobileBank","PIsMessType",
		"PMoUkeyType","ST_MessOneLimitAmount","ST_MessDayLimitAmount","ST_BankInnerTransfer","ST_CrossBankTransfer",
		"ST_SecretNotice","address","PERresponseCode","PERerrorMessage","adminUserName","ST_TRFOneLimitAmount","ST_TRFDayLimitAmount"],
		timeout: 90
	},{
		id: "PERIDForJPG_BankSIGN",
		title: "回单转图片",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","mobile","ST_LoginId","PIsEBank","PIsUkeyType","PIsMobileBank","PIsMessType",
		"PMoUkeyType","ST_MessOneLimitAmount","ST_MessDayLimitAmount","ST_BankInnerTransfer","ST_CrossBankTransfer",
		"ST_SecretNotice","address","PERresponseCode","PERerrorMessage","adminUserName","ST_TRFOneLimitAmount","ST_TRFDayLimitAmount"],
		timeout: 90
	},{
		id: "PERID_BankModify",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","mobile","ST_LoginId","PIsEBank","PIsUkeyType","PIsMobileBank","PIsMessType",
		"PMoUkeyType","ST_MessOneLimitAmount","ST_MessDayLimitAmount","ST_BankInnerTransfer","ST_CrossBankTransfer",
		"ST_SecretNotice","address","PERresponseCode","PERerrorMessage","adminUserName","ST_TRFOneLimitAmount",
		"ST_TRFDayLimitAmount","ST_TRFOldDayLimitAmount","ST_TRFOldOneLimitAmount","ST_MessOldDayLimitAmount",
		"ST_MessOldOneLimitAmount"],
		timeout: 60
	},{
		id: "checkFISOK_BankModify",
		title: "本地审核-审核确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","mobile","ST_LoginId","PIsEBank","PIsUkeyType","PIsMobileBank","PIsMessType",
		"PMoUkeyType","ST_MessOneLimitAmount","ST_MessDayLimitAmount","ST_BankInnerTransfer","ST_CrossBankTransfer",
		"ST_SecretNotice","address","PERresponseCode","PERerrorMessage","adminUserName","ST_TRFOneLimitAmount",
		"ST_TRFDayLimitAmount","ST_TRFOldDayLimitAmount","ST_TRFOldOneLimitAmount","ST_MessOldDayLimitAmount",
		"ST_MessOldOneLimitAmount"],
		timeout: 90
	},{
		id: "PERIDForJPG_BankMODIFY",
		title: "回单转图片",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","mobile","ST_LoginId","PIsEBank","PIsUkeyType","PIsMobileBank","PIsMessType",
		"PMoUkeyType","ST_MessOneLimitAmount","ST_MessDayLimitAmount","ST_BankInnerTransfer","ST_CrossBankTransfer",
		"ST_SecretNotice","address","PERresponseCode","PERerrorMessage","adminUserName","ST_TRFOneLimitAmount",
		"ST_TRFDayLimitAmount","ST_TRFOldDayLimitAmount","ST_TRFOldOneLimitAmount","ST_MessOldDayLimitAmount",
		"ST_MessOldOneLimitAmount"],
		timeout: 90
	},{
		id: "NotSignedTips",
		title: "未签约提示",
		timeout: 30
	},{
		id: "CommonNumberSign",
		title: "验证码发送成功提示",
		getKeys: ["msg_TFCNumber"],
		timeout: 30
	},{
		id: "inputCommonRandomNumber",
		title: "输入手机验证码",
		getKeys: ["RandomNumber","msg_TFCNumber"],
		timeout: 90
	},{
		id: "inputCommonRandomNumber2",
		title: "输入手机验证码",
		getKeys: ["RandomNumber","msg_TFCNumber"],
		timeout: 90
	},{
		id: "UBCPERID_Video_Sign",
		title: "视频审核-表单签名指纹",
		YH_Hand:"0",
		getDetails: ["PBankSignDetail","name", "pid", "genderC", "ST_UserId","cardNo","Apply_terminalId",
			"ST_MchannelFlag","issueoffice","issuedate","abatedate","transDate","transTime","PERresponseCode",
			"PERerrorMessage","PBankSignDetail2","PBankSignFlag","CCustomUkeyNo"],
		timeout: 59
	},{
		id: "UBCcheckFISOKVideo_Sign",
		title: "视频审核-审核确认",
		getDetails: ["PBankSignDetail","name", "pid", "genderC", "ST_UserId","cardNo","Apply_terminalId",
			"ST_MchannelFlag","issueoffice","issuedate","abatedate","transDate","transTime","PERresponseCode",
			"PERerrorMessage","PBankSignDetail2","PBankSignFlag","CCustomUkeyNo"],
		timeout: 90
	},{
		id: "UBCPERID_Sign",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PBankSignFlag","ST_MchannelFlag","CCustomUkeyNo","PBankSignDetail","PBankSignDetail2",
		"ST_UserId","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 59
	},{
		id: "UBCPERIDWithSign",
		title: "本地审核-表单指纹",
		YH_Hand:"0",
		getDetails: ["PBankSignDetail","name", "pid", "genderC", "ST_UserId","cardNo","Apply_terminalId",
			"ST_MchannelFlag","issueoffice","issuedate","abatedate","transDate","transTime","PERresponseCode",
			"PERerrorMessage","PBankSignDetail2","PBankSignFlag","CCustomUkeyNo"],
		timeout: 59
	},{
		id: "UBCcheckFISOK_Sign",
		title: "本地审核-审核确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PBankSignFlag","ST_MchannelFlag","CCustomUkeyNo","PBankSignDetail","PBankSignDetail2",
		"ST_UserId","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "UBCPERIDForJPG_SIGN",
		title: "回单转图片",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PBankSignFlag","ST_MchannelFlag","CCustomUkeyNo","PBankSignDetail","PBankSignDetail2",
		"ST_UserId","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "UkeyDispenserFailed",
		title: "提示发U盾失败",
		timeout: 5
	},{
		id: "UkeyReaderFailed",
		title: "提示读取U盾信息失败",
		timeout: 5
	},{
		id: "UkeyDispenserSuccess",
		title: "提示发U盾成功",
		getKeys: [""],
		timeout: 60
	},{
		id: "BUBPERID_Video_Sign",
		title: "视频审核-表单签名指纹",
		YH_Hand:"0",
		getDetails: ["PBankSignDetail","name", "pid", "genderC", "ST_UserId","cardNo","Apply_terminalId",
			"ST_MchannelFlag","issueoffice","issuedate","abatedate","transDate","transTime","PERresponseCode",
			"PERerrorMessage","PBankSignDetail2","PBankSignFlag","CCustomUkeyNo"],
		timeout: 59
	},{
		id: "BUBcheckFISOKVideo_Sign",
		title: "视频审核-审核确认",
		getDetails: ["PBankSignDetail","name", "pid", "genderC", "ST_UserId","cardNo","Apply_terminalId",
			"ST_MchannelFlag","issueoffice","issuedate","abatedate","transDate","transTime","PERresponseCode",
			"PERerrorMessage","PBankSignDetail2","PBankSignFlag","CCustomUkeyNo"],
		timeout: 90
	},{
		id: "BUBPERID_Sign",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PBankSignFlag","ST_MchannelFlag","CCustomUkeyNo","PBankSignDetail","PBankSignDetail2",
		"ST_UserId","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 60
	},{
		id: "BUBPERIDWithSign",
		title: "本地审核-表单指纹",
		YH_Hand:"0",
		getDetails: ["PBankSignDetail","name", "pid", "genderC", "ST_UserId","cardNo","Apply_terminalId",
			"ST_MchannelFlag","issueoffice","issuedate","abatedate","transDate","transTime","PERresponseCode",
			"PERerrorMessage","PBankSignDetail2","PBankSignFlag","CCustomUkeyNo"],
		timeout: 59
	},{
		id: "BUBcheckFISOK_Sign",
		title: "本地审核-审核确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PBankSignFlag","ST_MchannelFlag","CCustomUkeyNo","PBankSignDetail","PBankSignDetail2",
		"ST_UserId","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "BUBPERIDForJPG_SIGN",
		title: "回单转图片",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PBankSignFlag","ST_MchannelFlag","CCustomUkeyNo","PBankSignDetail","PBankSignDetail2",
		"ST_UserId","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "selectBankSignType",
		title: "选择电子银行签约账户",
		setKeys: ["PBankSignDetail","ST_CifCertNo","ST_CifSeq","ST_CifType","ST_CifNo"],
		getDetails: ["detail"],
		timeout: 60
	},{
		id: "UkeyInformation",
		title: "Ukey基本信息显示",
		getKeys: ["page_Eject","CCustomUkeyNo","ST_UkeyActiveCode","UkeyTypeName"],
		setKeys: ["ST_OtpPassword","OtpType","OtpVendorId"],
		timeout: 180
	},{
		id: "UkeyInformationAgain",
		title: "Ukey基本信息再次显示",
		getKeys: ["page_Eject","CCustomUkeyNo","ST_UkeyActiveCode","UkeyTypeName"],
		setKeys: ["ST_OtpPassword","OtpType","OtpVendorId"],
		timeout: 180
	},{
		id: "inputBankSignNumFirst",
		title: "设置用户名和手机号",
		getKeys: ["page_Eject","mobileNumber"],
		setKeys: ["ST_EBankMobile","ST_LoginId"],
		timeout: 120
	},{
		id: "inputBankSignNum",
		title: "设置用户名和手机号",
		getKeys: ["page_Eject","mobile"],
		setKeys: ["ST_EBankMobile","ST_LoginId"],
		timeout: 120
	},{
		id: "inputBankSignNumAgain",
		title: "重新设置用户名",
		getKeys: ["page_Eject","ST_ApplySign"],
		setKeys: ["ST_LoginId"],
		timeout: 120
	},{
		id: "inputBankSignNumOnceAgain",
		title: "重新设置手机号",
		getKeys: ["page_Eject","ST_ApplySign"],
		setKeys: ["ST_EBankMobile"],
		timeout: 120
	},{
		id: "BUBbankBundInfo",
		title: "令牌解绑选择电子银行已签约账户",
		getDetails: ["detail","accountName","CCustomUkeyNo"],
		setKeys: ["PBankSignDetail","PBankSignDetail2","ST_CifSeq","CCustomUkeyNo","OtpVendorId","OTPState",
			"PBankSignFlag","ST_MchannelFlag","OtpType"],
		timeout: 60
	},{
		id: "UBCbankBundInfo",
		title: "令牌更换选择电子银行已签约账户",
		getDetails: ["detail","accountName","CCustomUkeyNo"],
		setKeys: ["PBankSignDetail","PBankSignDetail2","ST_CifSeq","CCustomUkeyNo","OtpVendorId","OTPState",
			"PBankSignFlag","ST_MchannelFlag","OtpType"],
		timeout: 60
	},{
		id: "EBBPERID_Video_Sign",
		title: "视频审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name", "pid", "genderC", "ST_UserId","ST_MchannelFlag","Apply_terminalId","issueoffice",
			"issuedate","abatedate","transDate","transTime","PERresponseCode","PERerrorMessage"],
		timeout: 59
	},{
		id: "EBBcheckFISOKVideo_Sign",
		title: "视频审核-审核确认",
		getKeys: ["name", "pid", "genderC", "ST_UserId","ST_MchannelFlag","Apply_terminalId","issueoffice",
			"issuedate","abatedate","transDate","transTime","PERresponseCode","PERerrorMessage"],
		timeout: 90
	},{
		id: "EBBPERID_Sign",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","ST_UserId","ST_MchannelFlag","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 60
	},{
		id: "EBBPERIDWithSign",
		title: "本地审核-表单指纹",
		YH_Hand:"0",
		getKeys: ["name", "pid", "genderC", "ST_UserId","ST_MchannelFlag","Apply_terminalId","issueoffice",
			"issuedate","abatedate","transDate","transTime","PERresponseCode","PERerrorMessage"],
		timeout: 59
	},{
		id: "EBBcheckFISOK_Sign",
		title: "本地审核-审核确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","ST_UserId","ST_MchannelFlag","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "EBBPERIDForJPG_SIGN",
		title: "回单转图片",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","ST_UserId","ST_MchannelFlag","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "TeleBank_form",
		title: "电话银行签约——填写表单",
		YH_Hand:"0",
		setKeys:["ST_PhoneOneLimitAmount","mobile","ST_PhoneDayLimitAmount"],
		getKeys: ["mobileNumber","name","pid"],
		timeout: 120
	},{
		id: "TelePERID_Video_Sign",
		title: "视频审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["mobile","name", "pid", "genderC", "issuedate","abatedate","ST_PhoneOneLimitAmount","ST_PhoneDayLimitAmount"],
		timeout: 59
	},{
		id: "TelecheckFISOKVideo_Sign",
		title: "视频审核-审核确认",
		getKeys: ["mobile","name", "pid", "genderC", "issuedate","abatedate","ST_PhoneOneLimitAmount","ST_PhoneDayLimitAmount"],
		timeout: 90
	},{
		id: "TelePERID_Sign",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["mobile","name", "pid", "genderC", "issuedate","abatedate","ST_PhoneOneLimitAmount","ST_PhoneDayLimitAmount"],
		timeout: 59
	},{
		id: "TelePERIDWithSign",
		title: "本地审核-表单指纹",
		YH_Hand:"0",
		getKeys: ["mobile","name", "pid", "genderC", "issuedate","abatedate","ST_PhoneOneLimitAmount","ST_PhoneDayLimitAmount"],
		timeout: 59
	},{
		id: "TelecheckFISOK_Sign",
		title: "本地审核-审核确认",
		getKeys: ["mobile","name", "pid", "genderC", "issuedate","abatedate","ST_PhoneOneLimitAmount","ST_PhoneDayLimitAmount"],
		timeout: 90
	},{
		id: "TelePERIDForJPG_SIGN",
		title: "回单转图片",
		getKeys: ["name","Apply_tellerno","genderC","nationality","print_terminalSerial","pid", "transactor",
			"abatedate", "Apply_terminalId","issueoffice","transDate","transTime","ST_PhoneOneLimitAmount",
			"ST_PhoneDayLimitAmount","mobile"],
		timeout: 90
	},{
		id: "inputSignPin",
		title: "输入电子银行密码",
		setKeys: ["input_PINNew2"],
		getKeys: ["menuAction"],
		timeout: 120
	},{
		id: "bankSignHost_FailedInfo",
		title: "交易失败",
		getKeys: ["ST_MobilebankResult","ST_NetbankResult"],
		timeout: 10
	},{
		id: "bankSignHostSuccess",
		title: "电子银行签约结果",
		setButtons:["receipt"],
		getKeys: ["receipt","page_Eject","terminalId","page_TransTime","page_TransDate","adminUserName","name",
		"ST_UkeyActiveCode","PIsUkeyType","PMoUkeyType"],
		timeout: 120
	},{
		id: "TelSignedResult",
		title: "提示客户已电话银行签约",
		getDetails:["detail"],
		pageCount: 8,
		timeout: 30
	},{
		id: "CommonSignHost_FailedInfo",
		title: "交易失败",
		getKeys: ["ST_CommonResult","ST_CommonResultCode"],
		timeout: 5
	},{
		id: "EBankBundform",
		title: "网银令牌绑定——填写表单",
		YH_Hand:"0",
		setKeys:["ST_MchannelFlag"],
		getKeys: ["ST_UserId","ST_CifSeq","PIBSIsDisabled","PMBSIsDisabled"],
		timeout: 120
	},{
		id: "UKeyBindTips",
		title: "令牌绑定无渠道类型提示",
		timeout: 5
	},{
		id: "EBBindSuccess",
		title: "令牌绑定交易成功页面",
		setButtons:["receipt"],
		getKeys: ["receipt","page_Eject","page_CardNo","terminalId","page_TransTime","page_TransDate","adminUserName","name",
		"ST_UkeyActiveCode"],
		timeout: 60
	},{
		id: "BUBindSuccess",
		title: "令牌解绑交易成功页面",
		setButtons:["receipt"],
		getKeys: ["receipt","page_Eject","page_CardNo","terminalId","page_TransTime","page_TransDate","adminUserName","name"],
		timeout: 60
	},{
		id: "UBChangeSuccess",
		title: "令牌更换交易成功页面",
		setButtons:["receipt"],
		getKeys: ["receipt","page_Eject","page_CardNo","terminalId","page_TransTime","page_TransDate","adminUserName","name",
		"ST_UkeyActiveCode"],
		timeout: 60
	},{
		id: "EBankCancelTips",
		title: "提示客户无手机银行签约信息",
		timeout: 5
	},{
		id: "EBankModifyTips",
		title: "提示客户无手机银行签约信息",
		timeout: 5
	},{
		id: "PERID_Video_BankCancel",
		title: "视频审核-表单签名",
		YH_Hand:"0",
		getKeys: ["name","genderC", "pid", "ST_EBankAcNo", "PIsMobileBank","mobile","ST_MobBankDetail",
			"PIsEBank","ST_LoginId","ST_NetBankDetail","ST_BankInnerTransfer","ST_CrossBankTransfer",
			"CCustomUkeyNo","OtpVendorName","Apply_terminalId","issuedate","abatedate","transDate",
			"transTime","ST_SecretNotice","PERerrorMessage","ST_NetAccDetail","ST_MobAccDetail"],
		timeout: 59
	},{
		id: "checkFISOKVideo_BankCancel",
		title: "视频审核-审核确认",
		getKeys: ["name","genderC", "pid", "ST_EBankAcNo", "PIsMobileBank","mobile","ST_MobBankDetail",
			"PIsEBank","ST_LoginId","ST_NetBankDetail","ST_BankInnerTransfer","ST_CrossBankTransfer",
			"CCustomUkeyNo","OtpVendorName","Apply_terminalId","issuedate","abatedate","transDate",
			"transTime","ST_SecretNotice","PERerrorMessage","ST_NetAccDetail","ST_MobAccDetail"],
		timeout: 90
	},{
		id: "PERID_BankCancel",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PIsMobileBank","mobile","ST_MobBankDetail","PIsEBank","ST_LoginId","ST_NetBankDetail",
		"CCustomUkeyNo","OtpVendorId","ST_NetAccDetail","ST_MobAccDetail","ST_SecretNotice","PERresponseCode",
		"PERerrorMessage","adminUserName"],
		timeout: 59
	},{
		id: "PERIDWithBankCancel",
		title: "本地审核-表单",
		YH_Hand:"0",
		getKeys: ["name","genderC", "pid", "ST_EBankAcNo", "PIsMobileBank","mobile","ST_MobBankDetail",
			"PIsEBank","ST_LoginId","ST_NetBankDetail","ST_BankInnerTransfer","ST_CrossBankTransfer",
			"CCustomUkeyNo","OtpVendorName","Apply_terminalId","issuedate","abatedate","transDate",
			"transTime","ST_SecretNotice","PERerrorMessage","ST_NetAccDetail","ST_MobAccDetail"],
		timeout: 59
	},{
		id: "checkFISOK_BankCancel",
		title: "本地审核-审核确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PIsMobileBank","mobile","ST_MobBankDetail","PIsEBank","ST_LoginId","ST_NetBankDetail",
		"CCustomUkeyNo","OtpVendorId","ST_NetAccDetail","ST_MobAccDetail","ST_SecretNotice","PERresponseCode",
		"PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "PERIDForJPG_BankCANCEL",
		title: "回单转图片",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PIsMobileBank","mobile","ST_MobBankDetail","PIsEBank","ST_LoginId","ST_NetBankDetail",
		"CCustomUkeyNo","OtpVendorId","ST_NetAccDetail","ST_MobAccDetail","ST_SecretNotice","PERresponseCode",
		"PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "bankCancelHostSuccess",
		title: "电子银行解约结果",
		setButtons:["receipt"],
		getKeys: ["receipt","page_Eject","terminalId","page_TransTime","page_TransDate","adminUserName","name"],
		timeout: 60
	},{
		id: "inputUnBlockUkeyCode",
		title: "输入口令牌解锁挑战码",
		setKeys: ["ST_UkeyChallengeCode"],
		getKeys: ["CCustomUkeyNo","OtpVendorName"],
		timeout: 60
	},{
		id: "UnBlockUkeySuccess",
		title: "口令牌解锁交易成功",
		setButtons:["receipt"],
		getKeys: ["receipt","page_CardNo","terminalId","page_TransTime","page_TransDate","adminUserName","name","CCustomUkeyNo"],
		timeout: 60
	},{
		id: "UnBlockUkeyPinSuccess",
		title: "口令牌pin码解锁交易成功",
		setButtons:["receipt"],
		getKeys: ["receipt","ST_UkeyUnblockCode","CCustomUkeyNo","page_CardNo","terminalId","page_TransTime",
		"page_TransDate","adminUserName","name"],
		timeout: 60
	},{
		id: "UnBlockUkeyTips",
		title: "提示客户未绑定口令牌",
		timeout: 5
	},{
		id: "UnBlockUkeyInfo",
		title: "电子银行绑定口令牌信息",
		getDetails: ["detail","accountName"],
		setKeys: ["OtpType","OTPState","OtpVendorId","ST_MchannelFlag","OTPMgmtType","CCustomUkeyNo"],
		timeout: 60
	},{
		id: "bankModifyHostSuccess",
		title: "电子银行变更交易成功",
		setButtons:["receipt"],
		getKeys: ["receipt","page_Eject","terminalId","page_TransTime","page_TransDate","adminUserName","name","ST_UkeyActiveCode"],
		timeout: 60
	},{
		id: "BankModify_form",
		title: "电子银行变更表单一",
		YH_Hand:"0",
		setKeys:["ST_StayPostcode","ST_ReferrerName","ST_ReferrerNo","ST_ReferrerType","ST_BankInnerTransfer",
					"ST_CrossBankTransfer","address"],
		getKeys: ["name","pid","ST_StayPostcode","ST_ReferrerName","ST_ReferrerNo","ST_ReferrerType","ST_BankInnerTransfer",
					"ST_CrossBankTransfer","address"],
		timeout: 120
	},{
		id: "BankModify_formAgain",
		title: "电子银行变更表单二",
		YH_Hand:"0",
		setKeys:["PMoUkeyType","PIsMessType","PIsUkeyType","PIsEBank","PIsMobileBank","ST_TRFOneLimitAmount",
			"ST_TRFDayLimitAmount","ST_MessOneLimitAmount","ST_MessDayLimitAmount","ST_SecretNotice","ST_UkeyModifyFlag",
			"ST_OptChannel","ST_OTPMgmtType"],
		getDetails: ["PBankAmountDetail","pid","Ukeyflg","ST_TRFOneLimitAmount","ST_TRFDayLimitAmount","PMoUkeyType",
			"ST_MessOneLimitAmount","ST_MessDayLimitAmount","ST_SecretNotice","PIsMessType","PIsUkeyType","PIsEBank",
			"PIsMobileBank"],
		timeout: 120
	},{
		id: "EBANKMenu",
		title: "电子银行功能选择界面",
		getKeys:["Trans_ebanksign","Trans_ebankcancel","Trans_ebankmodify"],
		timeout: 30
	},{
		id: "UKEYMenu",
		title: "安全介质功能选择界面",
		getKeys:["Trans_UBankChangeBusi","Ukeyflg","Trans_BankUBundedBusi","Trans_EBankBundBusi","Trans_UkeyUnBlock",
		"Trans_UkeyPinUnBlock"],
		timeout: 30
	},{
		id: "insertLocalBankTips",
		title: "提示客户插入本行借记卡",
		timeout: 5
	},{
		id: "insertLocalBankCreditTips",
		title: "提示客户插入本行贷记卡",
		timeout: 5
	}]
},{
	entry: "index",
	path: "/ACCOUNT/",
	pages: [{
		id: "CommonSuccess",
		title: "交易成功页面",
		setButtons:["receipt"],
		getKeys: ["receipt","page_Eject"],
		timeout: 30
	},{
		id: "adminAuthSameTips",
		title: "提示不可本人审核业务",
		timeout: 5
	},{
		id: "ProductNameErrorTips",
		title: "提示产品名称校验失败",
		timeout: 5
	},{
		id: "ProductIdErrorTips",
		title: "提示产品证件号校验失败",
		timeout: 5
	},{
		id: "SleepToNormal",
		title: "提示账户正常",
		timeout: 30
	},{
		id: "SleepTurnNormalTips",
		title: "提示客户去柜面做此交易",
		timeout: 30
	},{
	    id: "SleepTurnNormalSuccess",
		title: "睡眠户转正常交易成功",
		getKeys: ["name","cardPassFlag","SleepCode", "accountBalance","page_transAmount", "page_TransDate","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "menuAction","page_CardNo"],
		setButtons:["receipt"],
		timeout: 60
	},{
		id: "PERID_Sign_STN",
		title: "睡眠户转正常签名表单",
		YH_Hand:"0",
		getKeys: ["cardNo","name", "genderC","nationality","pid", "mobileNumber","adminUserName","Apply_tellerno",
		         "abatedate","Apply_terminalId","issuedate","issueoffice","transDate","transTime"],
		timeout: 60
	},{
		id: "PERIDForJPG_STN",
		title: "睡眠户转正常回单转图片",
		getKeys: ["cardNo","name", "genderC","nationality","pid", "mobileNumber","adminUserName","Apply_tellerno",
		         "abatedate","Apply_terminalId","issuedate","issueoffice","transDate","transTime",
			"PERresponseCode","PERerrorMessage"],
		timeout: 60
	},{
		id: "checkFISOK_STN",
		title: "睡眠户转正常信息确认",
		getKeys: ["cardNo","name", "genderC","nationality","pid", "mobileNumber","adminUserName","Apply_tellerno",
		         "abatedate","Apply_terminalId","issuedate","issueoffice","transDate","transTime"],
		timeout: 90
	},{
		 id: "PERID_Sign_ALL",
		title: "账户升降级签名表单",
		YH_Hand:"0",
		getKeys: ["name", "genderC","nationality","pid", "mobileNumber","adminUserName","Apply_tellerno",
		         "abatedate","Apply_terminalId","issuedate","issueoffice","transDate","transTime",
			"ALL_AccountlevelB","ST_AcOpenDept","ALL_transAction","cardNo","ALL_AccountlevelBZ","ALL_AccountlevelAZ"],
		timeout: 60
	},{
     id: "PERIDForJPG_ALL",
		title: "账户升降级回单转图片",
		getKeys: ["name", "genderC","nationality","pid", "mobileNumber","adminUserName","Apply_tellerno",
		         "abatedate","Apply_terminalId","issuedate","issueoffice","transDate","transTime",
			"PERresponseCode","PERerrorMessage",
			"ALL_AccountlevelB","ST_AcOpenDept","ALL_transAction","cardNo","ALL_AccountlevelBZ","ALL_AccountlevelAZ"],
		timeout: 60
	},{
		id: "checkFISOK_ALL",
		title: "账户升降级信息确认",
		getKeys: ["name", "genderC","nationality","pid", "mobileNumber","adminUserName","Apply_tellerno",
		         "abatedate","Apply_terminalId","issuedate","issueoffice","transDate","transTime",
			"ALL_AccountlevelB","ST_AcOpenDept","ALL_transAction","cardNo","ALL_AccountlevelBZ","ALL_AccountlevelAZ"],
		timeout: 90
	},{
	    id: "AccountLiftLevelSuccess",
		title: "账户升降级交易成功",
		getKeys: ["name","cardPassFlag","ALL_transAction","ALL_AccountlevelBZ","ALL_AccountlevelAZ","SleepCode", "accountBalance","page_transAmount", "page_TransDate","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "menuAction","page_CardNo"],
		setButtons:["receipt"],
		timeout: 60
	},{
		id: "AccountLiftLevel",
		title: "客户选择账户升降级",
		getKeys: ["ALL_AccountlevelB"],
		timeout: 60
	},{
		id: "SocialCardLossTips",
		title: "社保卡挂失提示",
		timeout: 5
	},{
		id: "CertInfoTips",
		title: "产品证件信息不一致",
		timeout: 5
	},{
		id: "CIMAfterActiveInfo",
		title: "提示客户是否继续修改客户信息",
		timeout: 30
	},{
		id: "cardlossflagMenu",
		title: "选择借记卡挂失方式",
		setKeys: ["cardlossFlag"],
		timeout: 30
	},{
		id: "CAerrorIDCard",
		title: "身份证错误提示",
		timeout: 5
	},{
		id: "inputPinAgain",
		title: "密码错重输",
		getKeys: ["page_Eject","customAction"],
		timeout: 60
	},{
		id: "inputOldCardPin",
		title: "输入旧卡密码",
		getKeys: ["page_Eject"],
		timeout: 60
	},{
		id: "inputNewCardPin",
		title: "输入新卡密码",
		getKeys: ["page_Eject"],
		timeout: 60
	},{
		id: "inputNewCardPinAgain",
		title: "二次输入新卡密码",
		getKeys: ["page_Eject"],
		timeout: 60
	},{
		id: "inputCardPinDiffPin",
		title: "二次输入新卡密码",
		getKeys: ["page_Eject"],
		timeout: 60
	},{
		id: "CardResetPinResult",
		title: "卡片密码重置交易失败结果",
		getKeys: ["ST_PinResetType","ST_CardResetPinErrorMessage","page_message"],
		timeout: 8
	},{
		id: "localCPR_password",
		title: "申请-设置卡密码",
		getKeys: ["menuAction"],
		timeout: 60
	},{
		id: "localCPR_password2",
		title: "申请-确认密码",
		getKeys: ["menuAction"],
		timeout: 60
	},{
		id: "localCPR_passwordDiffPin",
		title: "比对密码失败",
		getKeys: ["menuAction"],
		timeout: 60
	},{
		id: "CPR_password",
		title: "重置查询密码",
		getKeys: ["page_Eject","menuAction"],
		timeout: 60
	},{
		id: "CPR_password2",
		title: "再次重置查询密码",
		getKeys: ["page_Eject","menuAction"],
		timeout: 60
	},{
		id: "CPR_passwordDiffPin",
		title: "两次输入不一致，重新重置查询密码",
		getKeys: ["page_Eject","menuAction"],
		timeout: 60
	},{
		id: "CPR_Paypassword",
		title: "重置支付密码",
		getKeys: ["page_Eject","menuAction"],
		timeout: 60
	},{
		id: "CPR_Paypassword2",
		title: "再次重置支付密码",
		getKeys: ["page_Eject","menuAction"],
		timeout: 60
	},{
		id: "CPR_PaypasswordDiffPin",
		title: "两次输入不一致，重新重置支付密码",
		getKeys: ["page_Eject","menuAction"],
		timeout: 60
	},{
		id: "CPR_CredPaypassword",
		title: "重置交易密码",
		getKeys: ["page_Eject","menuAction"],
		timeout: 60
	},{
		id: "CPR_CredPaypassword2",
		title: "再次重置交易密码",
		getKeys: ["page_Eject","menuAction"],
		timeout: 60
	},{
		id: "CPR_CredPaypasswordDiffPin",
		title: "两次输入不一致，重新重置交易密码",
		getKeys: ["page_Eject","menuAction"],
		timeout: 60
	},{
		id: "InputLocalBankPin",
		title: "输入借记卡密码",
		getKeys: ["page_Eject","customAction"],
		timeout:60
	},{
		id: "reInputLocalBankPin",
		title: "重新输入借记卡密码",
		getKeys: ["page_Eject","customAction"],
		timeout:60
	},{
		id: "Card_InputTimesout",
		title: "输入次数超限",
		timeout: 3
	},{
		id: "CusInfoTips",
		title: "提示客户完善基本信息",
		timeout: 5
	},{
		id: "CardLossSuccess",
		title: "卡片挂失交易成功",
		setButtons:["receipt"],
		getKeys: ["receipt","I_ISSUER","page_Eject","menuAction"],
		timeout: 60
	},{
		id: "CardPwdResetSuccess",
		title: "卡片激活交易成功",
		setButtons:["receipt"],
		getKeys: ["receipt","page_Eject","page_CardNo","terminalId","page_TransTime","page_TransDate","adminUserName","name",
		"transAction"],
		timeout: 60
	},{
		id: "Success_CreditPwdReset",
		title: "卡片密码重置交易成功",
		setButtons:["receipt"],
		getKeys: ["adminUserName","page_TransDate","ST_PinResetType","page_TransTime","terminalId","name","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt","menuAction","page_CardNo"],
		timeout: 30
	},{
		id: "CusInfoModifySuccess",
		title: "客户信息修改交易成功",
		setButtons:["receipt"],
		getKeys: ["receipt","page_Eject","page_CardNo","terminalId","page_TransTime","page_TransDate","adminUserName","name"],
		timeout: 60
	},{
		id: "Success_RepayBindAcc",
		title: "交易成功",
		setButtons:["receipt"],
		getKeys: ["adminUserName","page_CreditPayerAcc","page_payeracc","ST_Func","ST_RepayType","page_TransDate","page_TransTime","terminalId","name","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt","menuAction","page_CardNo"],
		timeout: 30
	},{
		id: "CreditBankAccNo",
		title: "客户选择贷记卡账户",
		getDetails:["detail","menuAction"],
		setKeys : ["payeracc"],
		pageCount: 10,
		timeout: 90
	},{
		id: "CreditReplaymentAccNo",
		title: "客户选择贷记卡账户",
		getDetails:["detail","menuAction"],
		setKeys : ["inAccountNo"],
		pageCount: 10,
		timeout: 90
	},{
		id: "LocalBankAccNo",
		title: "客户选择借记卡账户",
		getDetails:["detail","menuAction","creditbindAccount"],
		setKeys : ["payeracc","ST_CardCatlog"],
		pageCount: 10,
		timeout: 90
	},{
		id: "LocalSocialAccNo",
		title: "客户选择社保卡账户",
		getDetails:["detail","menuAction","creditbindAccount"],
		setKeys : ["payeracc","ST_CardCatlog"],
		pageCount: 10,
		timeout: 90
	},{
		id: "LocalCLCardNo",
		title: "客户选择借记卡账户",
		getDetails:["detail","menuAction","ST_BRANCH","name"],
		setKeys : ["payeracc","ST_CardCatlog"],
		pageCount: 10,
		timeout: 90
	},{
		id: "LocalCRCardNo",
		title: "客户选择借记卡账户",
		getDetails:["detail","menuAction","ST_BRANCH","name"],
		setKeys : ["payeracc","ST_CardCatlog"],
		pageCount: 10,
		timeout: 90
	},{
		id: "CardActiveTips",
		title: "提示客户卡片已激活",
		timeout: 5
	},{
		id: "CardHangingTips",
		title: "提示客户卡片已解挂",
		getKeys: ["ST_CardStatus"],
		timeout: 5
	},{
		id: "CHCardTypeErrorTips",
		title: "提示客户不支持结算卡解挂",
		timeout: 5
	},{
		id: "CardLossTips",
		title: "提示客户卡片已挂失",
		timeout: 5
	},{
		id: "CardLostFeeTips",
		title: "手续费信息提示",
		getKeys: ["ST_LostFee"],
		timeout: 60
	},{
		id:"showCreditLostFeeTips",
		title: "提示挂失手续费",
		timeout: 30
	},{
		id:"simplePasswordShow",
		title: "提示密码过于简单",
		timeout: 5
	},{
		id:"CardLossNoneTips",
		title: "提示客户卡片未挂失",
		timeout: 5
	},{
		id:"CardReplaceNoneTips",
		title: "提示客户卡片状态不正常",
		timeout: 5
	},{
		id:"CardReplaceErrorTips",
		title: "提示客户卡片状态不正常",
		timeout: 5
	},{
		id:"replaceNotSupportTips",
		title:"不支持卡类型",
		timeout:5
	},{
		id:"CardActiveExceptionTips",
		title: "提示客户卡片状态异常",
		timeout: 5
	},{
		id:"CardLossErrorTips",
		title: "提示客户错误信息",
		timeout: 5
	},{
		id:"CardBindErrorTips",
		title: "提示客户错误信息",
		timeout: 5
	},{
		id: "CreditBindCardTips",
		title: "提示客户贷记卡已绑定账户",
		getKeys: ["creditbindAccount","ST_RepayType","repayName"],
		timeout: 90
	},{
		id: "CreditBindCardInfo",
		title: "显示贷记卡账户内容",
		getKeys: ["creditbindAccount","ST_RepayType","accountName","CreditPayerAcc","certID"],
		timeout: 90
	},{
		id: "SameBindNoteView",
		title: "已被绑定提示",
		timeout: 30
	 },{
		id: "ChangeBindNoteView",
		title: "已被绑定提示",
		timeout: 30
	 },{
		id: "NotBindBoteView",
		title: "已被绑定提示",
		timeout: 30
	 },{
		id: "CardActiveSuccess",
		title: "卡片激活交易成功页面",
		setButtons:["receipt"],
		getKeys: ["receipt","transAction","page_CardNo","terminalId","page_TransTime","page_TransDate","adminUserName","name"],
		timeout: 30
	},{
		id: "Success_CreditCardActive",
		title: "卡激活交易成功页面",
		setButtons:["receipt"],
		getKeys: ["adminUserName","page_TransDate","responseCode","ST_CardResetPinCode","page_TransTime","terminalId","name","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt","menuAction","page_CardNo"],
		timeout: 30
	},{
		id: "CardReplaceSuccess",
		title: "卡片更换交易成功",
		setButtons:["receipt"],
		getKeys: ["receipt","page_Eject","ST_CReplaceSignMove","ST_CModifyResponseCode","page_CardNo","terminalId",
		"page_TransTime","page_TransDate","adminUserName","name","payeracc"],
		timeout: 60
	},{
		id: "CardHangSuccess",
		title: "卡片解挂交易成功页面",
		setButtons:["receipt"],
		getKeys: ["receipt","page_Eject","page_CardNo","terminalId","page_TransTime","page_TransDate","adminUserName","name"],
		timeout: 60
	},{
		id: "Replace_cardType",
		title: "申请-卡类型",
		getDetails: ["detail","ST_CardTypeName"],
		setKeys: ["chosedCardType"],
		pageCount: 10,
		timeout: 70
	},{
		id: "CAPERIDForJPG_SIGN",
		title: "回单转图片",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "CAPERIDWithSignSave",
		title: "本地审核-客户签名确认页面",
		YH_Hand:"0",
		getKeys: ["name","Apply_tellerno","genderC","nationality","pid", "transactor",
			"abatedate", "Apply_terminalId","issueoffice","transDate","transTime","mobileNumber",
			"PERresponseCode","PERerrorMessage","issuedate","menuAction","cardNo","address"],
		timeout: 90
	},{
		id: "CAPERID_Video_Sign",
		title: "视频审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","Apply_tellerno","genderC","nationality","pid", "transactor",
			"abatedate", "Apply_terminalId","issueoffice","transDate","transTime","mobileNumber",
			"PERresponseCode","PERerrorMessage","issuedate","menuAction","cardNo","address"],
		timeout: 59
	},{
		id: "CAcheckFISOKVideo_Sign",
		title: "视频审核-审核确认",
		getKeys: ["name","Apply_tellerno","genderC","nationality","pid", "transactor",
			"abatedate", "Apply_terminalId","issueoffice","transDate","transTime","mobileNumber",
			"PERresponseCode","PERerrorMessage","issuedate","menuAction","cardNo","address"],
		timeout: 90
	},{
		id: "CAPERID_Sign",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 59
	},{
		id: "SocialActive_Sign",
		title: "社保激活-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","isUserSign","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 59
	},{
		id: "CAPERIDWithSign",
		title: "本地审核-表单指纹",
		YH_Hand:"0",
		getKeys: ["name","Apply_tellerno","genderC","nationality","pid", "transactor",
			"abatedate", "Apply_terminalId","issueoffice","transDate","transTime","mobileNumber",
			"PERresponseCode","PERerrorMessage","issuedate","menuAction","cardNo","address"],
		timeout: 59
	},{
		id: "CAcheckFISOK_Sign",
		title: "本地审核-审核确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "checkFISOK_SocialActive",
		title: "社保卡激活-审核确认",
		getKeys: ["name","isUserSign","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "CardHang_form",
		title: "卡片解挂填写表单",
		YH_Hand:"0",
		setKeys:["ST_PBKStatus","ST_ManaCertType","ST_ManaCertId"],
		getKeys: ["name","pid","ST_PBKStatus","ST_ManaCertType","ST_ManaCertId"],
		timeout: 120
	},{
		id: "CHPERID_Video_Sign",
		title: "视频审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name", "pid", "genderC", "issuedate","abatedate","transDate","ST_ManaCertType",
				"ST_ManaCertId","ST_PBKStatus","PERresponseCode","PERerrorMessage","cardNo","Apply_terminalId",
				"nationality","issueoffice","transTime"],
		timeout: 59
	},{
		id: "CHcheckFISOKVideo_Sign",
		title: "视频审核-审核确认",
		getKeys: ["name", "pid", "genderC", "issuedate","abatedate","transDate","ST_ManaCertType",
				"ST_ManaCertId","ST_PBKStatus","PERresponseCode","PERerrorMessage","cardNo","Apply_terminalId",
				"nationality","issueoffice","transTime"],
		timeout: 90
	},{
		id: "CHPERID_Sign",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 60
	},{
		id: "CHPERIDWithSign",
		title: "本地审核-表单指纹",
		YH_Hand:"0",
		getKeys: ["name", "pid", "genderC", "issuedate","abatedate","transDate","ST_ManaCertType",
				"ST_ManaCertId","ST_PBKStatus","PERresponseCode","PERerrorMessage","cardNo","Apply_terminalId",
				"nationality","issueoffice","transTime"],
		timeout: 59
	},{
		id: "CHcheckFISOK_Sign",
		title: "本地审核-审核确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "CHPERIDForJPG_SIGN",
		title: "回单转图片",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "CLPERID_Video_Sign",
		title: "视频审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name", "pid", "genderC", "ST_PBKStatus","ST_ManaCertType","ST_ManaCertId","issueoffice",
			"transDate","menuAction","mobile","ST_LostType","ST_CanCode","PERresponseCode","PERerrorMessage",
			"ST_LostDate","ST_LostTime","payeracc","Apply_terminalId","nationality","issuedate","abatedate",
			"transTime","cardlossFlag"],
		timeout: 59
	},{
		id: "CLcheckFISOKVideo_Sign",
		title: "视频审核-审核确认",
		getKeys: ["name", "pid", "genderC", "ST_PBKStatus","ST_ManaCertType","ST_ManaCertId","issueoffice",
			"transDate","menuAction","mobile","ST_LostType","ST_CanCode","PERresponseCode","PERerrorMessage",
			"ST_LostDate","ST_LostTime","payeracc","Apply_terminalId","nationality","issuedate","abatedate",
			"transTime","cardlossFlag"],
		timeout: 90
	},{
		id: "CLPERID_Sign",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","payeracc","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 60
	},{
		id: "CLPERID_SocialLoss",
		title: "社保卡挂失-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","isUserSign","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","payeracc","PERresponseCode","PERerrorMessage","adminUserName","cardlossFlag"],
		timeout: 60
	},{
		id: "CLPERIDWithSign",
		title: "本地审核-表单指纹",
		YH_Hand:"0",
		getKeys: ["name", "pid", "genderC", "ST_PBKStatus","ST_ManaCertType","ST_ManaCertId","issueoffice",
			"transDate","menuAction","mobile","ST_LostType","ST_CanCode","PERresponseCode","PERerrorMessage",
			"ST_LostDate","ST_LostTime","payeracc","Apply_terminalId","nationality","issuedate","abatedate",
			"transTime","cardlossFlag"],
		timeout: 59
	},{
		id: "CLcheckFISOK_Sign",
		title: "本地审核-审核确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","payeracc","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "checkFISOK_SocialLoss",
		title: "社保卡挂失-审核确认",
		getKeys: ["name","isUserSign","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","payeracc","PERresponseCode","PERerrorMessage","adminUserName","cardlossFlag"],
		timeout: 90
	},{
		id: "CLPERIDForJPG_SIGN",
		title: "回单转图片",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","payeracc","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "CReplace_form",
		title: "卡片更换填写表单",
		YH_Hand:"0",
		setKeys:["ST_RepCardType","ST_ICCrdMode","ST_ICCrdFlg","ST_CReplaceSignMove"],
		getKeys: ["name","pid","payeracc","ST_RepCardType","ST_ICCrdMode","chosedCardType",
		"ST_CReplaceSignMove","ST_LostICCrdFlg"],
		timeout: 120
	},{
		id: "CardPwdReset_form",
		title: "卡片密码重置填写表单",
		YH_Hand:"0",
		setKeys:["ST_PinResetType"],
		getKeys: ["payeracc","name","pid","genderC","ST_PinResetType"],
		timeout: 120
	},{
		id: "CPRPERID_Video_Sign",
		title: "视频审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name", "pid", "genderC", "issuedate","abatedate","ST_PinResetType","transDate","payeracc",
			"menuAction","PERresponseCode","PERerrorMessage","Apply_terminalId","nationality","issueoffice",
			"transTime"],
		timeout: 59
	},{
		id: "CPRcheckFISOKVideo_Sign",
		title: "视频审核-审核确认",
		getKeys: ["name", "pid", "genderC", "issuedate","abatedate","ST_PinResetType","transDate","payeracc",
			"menuAction","PERresponseCode","PERerrorMessage","Apply_terminalId","nationality","issueoffice",
			"transTime"],
		timeout: 90
	},{
		id: "CPRPERID_Sign",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","payeracc","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 60
	},{
		id: "CPRPERIDWithSign",
		title: "本地审核-表单指纹",
		YH_Hand:"0",
		getKeys: ["name", "pid", "genderC", "issuedate","abatedate","ST_PinResetType","transDate","payeracc",
			"menuAction","PERresponseCode","PERerrorMessage","Apply_terminalId","nationality","issueoffice",
			"transTime"],
		timeout: 59
	},{
		id: "CPRcheckFISOK_Sign",
		title: "本地审核-审核确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","payeracc","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "CPRPERIDForJPG_SIGN",
		title: "回单转图片",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","payeracc","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "CusInfo_form",
		title: "客户信息修改填写表单",
		YH_Hand:"0",
		setKeys:["mobile","telephone","ST_EconTyp","job","ST_StayPostcode","address","ST_CustTtl","ST_MrgFlag",
			"ST_EngName","ST_Register","ST_ResidentFlag","IsTax"],
		getKeys: ["name", "genderC","pid","mobile","telephone","ST_EconTyp","job","ST_StayPostcode","address","ST_CIMAddress",
			"ST_CustTtl","ST_MrgFlag","brithday","ST_EngName","ST_Register","abatedate","SF_ApplyCardCustInfoQryResult","ST_ResidentFlag"],
		timeout: 240
	},{
		id: "SocialCardInfo_form",
		title: "社保卡激活_客户信息表单",
		YH_Hand:"0",
		setKeys:["mobile","telephone","ST_EconTyp","job","ST_StayPostcode","address","ST_CustTtl","ST_MrgFlag",
			"ST_EngName","ST_Register","ST_ResidentFlag","IsTax"],
		getKeys: ["name", "genderC","pid","mobile","telephone","ST_EconTyp","job","ST_StayPostcode","address","ST_CIMAddress",
			"ST_CustTtl","ST_MrgFlag","brithday","ST_EngName","ST_Register","abatedate","SF_ApplyCardCustInfoQryResult","ST_ResidentFlag"],
		timeout: 240
	},{
		id: "CusInfo_Tax",
		title: "个人税收居民身份声明文件 ",
		timeout: 90
	},{
		id: "CIMPERID_Video_Sign",
		title: "视频审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","job","ST_EconTyp","mobile","telephone","ST_StayPostcode","address",
					"PERresponseCode","PERerrorMessage","ST_CustTtl","ST_MrgFlag","cardNo","Apply_terminalId",
					"ST_Register","issueoffice","issuedate","abatedate","transDate","transTime","ST_EngName"],
		timeout: 59
	},{
		id: "CIMcheckFISOKVideo_Sign",
		title: "视频审核-审核确认",
		getKeys: ["name","genderC","pid","job","ST_EconTyp","mobile","telephone","ST_StayPostcode","address",
					"PERresponseCode","PERerrorMessage","ST_CustTtl","ST_MrgFlag","cardNo","Apply_terminalId",
					"ST_Register","issueoffice","issuedate","abatedate","transDate","transTime","ST_EngName"],
		timeout: 90
	},{
		id: "CIMPERID_Sign",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","ST_Register","job","ST_EconTyp","mobile","telephone","ST_CustTtl","ST_EngName","ST_MrgFlag",
		"ST_StayPostcode","address","PERresponseCode","PERerrorMessage","adminUserName","ST_ResidentFlag"],
		timeout: 60
	},{
		id: "CIMPERIDWithSign",
		title: "本地审核-表单指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","job","ST_EconTyp","mobile","telephone","ST_StayPostcode","address",
					"PERresponseCode","PERerrorMessage","ST_CustTtl","ST_MrgFlag","cardNo","Apply_terminalId",
					"ST_Register","issueoffice","issuedate","abatedate","transDate","transTime","ST_EngName"],
		timeout: 59
	},{
		id: "CIMcheckFISOK_Sign",
		title: "本地审核-审核确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","ST_Register","job","ST_EconTyp","mobile","telephone","ST_CustTtl","ST_EngName","ST_MrgFlag",
		"ST_StayPostcode","address","PERresponseCode","PERerrorMessage","adminUserName","ST_ResidentFlag"],
		timeout: 90
	},{
		id: "CIMPERIDForJPG_SIGN",
		title: "回单转图片",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","ST_Register","job","ST_EconTyp","mobile","telephone","ST_CustTtl","ST_EngName","ST_MrgFlag",
		"ST_StayPostcode","address","PERresponseCode","PERerrorMessage","adminUserName","ST_ResidentFlag"],
		timeout: 90
	},{
		id: "CIMPERIDWithSignSave",
		title: "本地审核-客户签名确认页面",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","job","ST_EconTyp","mobile","telephone","ST_StayPostcode","address",
					"PERresponseCode","PERerrorMessage","ST_CustTtl","ST_MrgFlag","cardNo","Apply_terminalId",
					"ST_Register","issueoffice","issuedate","abatedate","transDate","transTime","ST_EngName"],
		timeout: 90
	},{
		id: "RBA_form",
		title: "还款绑定账户填写表单",
		YH_Hand:"0",
		setKeys:["ST_RepayType"],
		getKeys: ["cardNo","CreditPayerAcc","payeracc","accountName","pid","ST_RepayType"],
		timeout: 120
	},{
		id: "RBAPERIDForJPG_SIGN",
		title: "回单转图片",
		getKeys: ["name", "pid", "genderC", "ST_RepayType","cardNo","payeracc","PERresponseCode",
			"PERerrorMessage","Apply_terminalId","nationality","issueoffice","issuedate","abatedate",
			"transDate","transTime","address"],
		timeout: 90
	},{
		id: "RBAPERIDWithSignSave",
		title: "本地审核-客户签名确认页面",
		YH_Hand:"0",
		getKeys: ["name", "pid", "genderC", "ST_RepayType","cardNo","payeracc","PERresponseCode",
			"PERerrorMessage","Apply_terminalId","nationality","issueoffice","issuedate","abatedate",
			"transDate","transTime","address"],
		timeout: 90
	},{
		id: "CardLossLocal_form",
		title: "借记卡挂失填写表单",
		YH_Hand:"0",
		setKeys:["ST_PBKStatus","ST_ManaCertType","ST_ManaCertId"],
		getKeys: ["name","pid","ST_PBKStatus","ST_ManaCertType","ST_ManaCertId"],
		timeout: 120
	},{
		id: "CardLossCredit_form",
		title: "贷记卡挂失填写表单",
		YH_Hand:"0",
		setKeys:["mobile","ST_LostType","ST_CanCode","ST_LostDate","ST_LostTime"],
		getKeys: ["name","pid","mobile","ST_LostType","ST_CanCode","ST_LostDate","ST_LostTime"],
		timeout: 120
	},{
		id: "BCreditMenu",
		title: "信用卡业务类型选择界面",
		getKeys: ["I_Trans_BCredit","RepayBindAccount","Trans_cardactive","Trans_cardpwdreset","Trans_cardLoss",
			"CBILL","PIN","INQ","TRF","signflg","idcardflg"],
		setButtons: ["RepayBindAccount","CBILL","PIN","INQ","TRF"],
		timeout: 30
	},{
		id: "CRPERID_Video_Sign",
		title: "视频审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name", "pid", "genderC", "payeracc","ST_RepCardType","transDate","PERresponseCode",
				  "PERerrorMessage","ST_ICCrdMode","Apply_terminalId","nationality","issueoffice","issuedate",
				  "abatedate","transTime"],
		timeout: 59
	},{
		id: "CRcheckFISOKVideo_Sign",
		title: "视频审核-审核确认",
		getKeys: ["name", "pid", "genderC", "payeracc","ST_RepCardType","transDate","PERresponseCode",
				  "PERerrorMessage","ST_ICCrdMode","Apply_terminalId","nationality","issueoffice","issuedate",
				  "abatedate","transTime"],
		timeout: 90
	},{
		id: "CRPERID_Sign",
		title: "本地审核-表单签名指纹",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","payeracc","ST_RepCardType","ST_ICCrdMode","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 60
	},{
		id: "CRPERIDWithSign",
		title: "本地审核-表单指纹",
		YH_Hand:"0",
		getKeys: ["name", "pid", "genderC", "payeracc","ST_RepCardType","transDate","PERresponseCode",
				  "PERerrorMessage","ST_ICCrdMode","Apply_terminalId","nationality","issueoffice","issuedate",
				  "abatedate","transTime"],
		timeout: 59
	},{
		id: "CRcheckFISOK_Sign",
		title: "本地审核-审核确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","payeracc","ST_RepCardType","ST_ICCrdMode","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "CRPERIDForJPG_SIGN",
		title: "回单转图片",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","payeracc","ST_RepCardType","ST_ICCrdMode","PERresponseCode","PERerrorMessage","adminUserName"],
		timeout: 90
	},{
		id: "accDetailEmpty",
		title: "无账户明细",
		timeout: 5
	},{
		id: "CardReplaceNoAccTips",
		title: "提示客户挂失补卡前请先正式挂失卡",
		timeout: 5
	},{
		id: "CLSignName",
		title: "签名页面",
		timeout: 90
	},{
		id: "ReceiptPrintMediaSelect",
		title: "介质选择",
		timeout: 90
	},{
		id: "InputAccount",
		title: "输入账号",
		setKeys : ["pid"],
		timeout: 120
	},{
		id: "InputAccountError",
		title: "重新输入账号",
		setKeys : ["pid"],
		timeout: 120
	},{
		id: "PrintReceiptDetail",
		title: "选择打印回单",
		getDetails: ["detail","ST_ReceiptName","ST_ReceiptAcc"],
		setKeys: ["ST_ReceiptTransInfoSelect","ST_ReceiptSeq","ST_ReceiptAccount","ST_ReceiptTransDate","ST_ReceiptBusType","ST_ReceiptAmount"
		,"ST_ReceiptPayerAcctno","ST_ReceiptPayerName","ST_ReceiptPayeeAcctno","ST_ReceiptPayeeName","ST_ReceiptTotal"],
		
		pageCount: 12,
		timeout: 300
	},{
		id: "ReceiptTips",
		title: "回单提示信息",
		getDetails: ["detail","ST_ReceiptMaxTips"],
		timeout: 30
	},{
		id: "PrintInfoDetail",
		title: "回单详细信息",
		getKeys: ["ST_ReceiptSeq","ST_ReceiptAccount","ST_ReceiptTransDate","ST_ReceiptBusType","ST_ReceiptAmount"
		,"ST_ReceiptPayerAcctno","ST_ReceiptPayerName","ST_ReceiptPayeeAcctno","ST_ReceiptPayeeName"],
		setKeys: ["ST_ReceiptTransInfoSelect"],
		pageCount: 12,
		timeout: 60
	},{
		id: "ReceiptAccountSelect",
		title: "回单账户选择",
		getDetails: ["detail","ST_ReceiptAccCacheDetail"],
		setKeys: ["ST_ReceiptName","ST_ReceiptAcc","ST_ReceiptAccDetail","ST_ReceiptAccCacheDetail","ST_ReceiptqueryAccSign"],
		pageCount: 8,
		timeout: 300
	},{
		id: "ReceiptAccountSelect1",
		title: "回单账户选择1",
		getDetails: ["detail","ST_ReceiptAccCacheDetail"],
		setKeys: ["ST_ReceiptName","ST_ReceiptAcc","ST_ReceiptAccDetail","ST_ReceiptAccCacheDetail","ST_ReceiptqueryAccSign"],
		pageCount: 8,
		timeout: 300
	},{
		id: "ReceiptBusCategorySelect",
		title: "回单分类选择",
		getDetails: ["detail","ST_ReceiptName","ST_ReceiptAcc"],
		setKeys: ["ST_ReceiptAcc"],
		pageCount: 10,
		timeout: 60
	},{
		id: "QueryDateSelect",
		title: "明细查询日期选择",
		getKeys: ["page_Eject","ST_ReceiptName","ST_ReceiptAcc"],
		setKeys: ["mobile", "telephone", "address"],
		timeout: 60
	},{
		id: "ReceiptStartDateSelect",
		title: "开始日期选择",
		setKeys: ["startDate",],
		timeout: 70
	},{
		id: "ReceiptEndDateSelect",
		title: "结束日期选择",
		setKeys: ["endDate"],
		getKeys: ["startDate"],
		timeout: 70
	},{
		id: "InputIDCardNo",
		title: "身份证号填写",
		getKeys: ["page_Eject"],
		setKeys: ["pid"],
		timeout: 70
	},{
		id: "InputReceiptNo",
		title: "回单号填写",
		setKeys: ["ST_ReceiptSealCode","ST_ReceiptTransdt"],
		timeout: 180
	},{
		id: "ReceiptInfo",
		title: "回单号信息展现",
		getKeys: ["ST_ReceiptJpgPath"],
		
		timeout: 180
	},{
		id: "ReceiptQueryBalance",
		title: "对公账户余额结果",
		getKeys: ["page_INQBalance", "page_INQAvaliable", "ST_ReceiptName", "ST_ReceiptAcc"],
		timeout: 60
	},{
		id: "printReceiptProcessing",
		title: "正在打印"
	},{
		id: "printReceiptSuccess",
		title: "请取走回单",
		timeout: 5
	},{
		id: "ReceiptQuery_from",
		title: "回单查询表单填写",
		getDetails: ["detail","ST_ReceiptName","ST_ReceiptAcc"],
		setKeys: ["ST_ReceiptBusCategory", "startDate", "endDate"],
		timeout: 120
	},{
		id: "PrintReceiptContinue",
		title: "选择是否继续打印回单",
		timeout: 30
	},{
		id: "AcOpenDeptTips",
		title: "非本法人行卡提示",
		timeout: 15
	},{
		id: "DownLoadDetailFailed",
		title: "下载TXT、转换PDF、上传PDF、下载PDF失败提示",
		timeout: 5
	},{
		id: "DetailQueryDateSelect",
		title: "查询日期类型选择",
		getDetails: ["cardNo","accountName"],
		setKeys: ["startDate", "endDate"],
		timeout: 120
	},{
		id: "PublicAccountSelect",
		title: "对公账户选择",
		getDetails: ["detail","ST_ReceiptAccCacheDetail"],
		setKeys: ["ST_ReceiptName","ST_ReceiptAcc","ST_ReceiptAccDetail","ST_ReceiptAccCacheDetail","ST_ReceiptqueryAccSign"],
		pageCount: 8,
		timeout: 300
	},{
		id: "PublicAccountSelect1",
		title: "对公账户选择1",
		getDetails: ["detail","ST_ReceiptAccCacheDetail"],
		setKeys: ["ST_ReceiptName","ST_ReceiptAcc","ST_ReceiptAccDetail","ST_ReceiptAccCacheDetail","ST_ReceiptqueryAccSign"],
		pageCount: 8,
		timeout: 300
	}]
},{
	entry: "index",
	path: "/CITIZEN/",
	pages: [{
		id: "CitizenBusiMenu",
		title: "市民卡业务选择界面",
		getKeys: ["I_CitienISSUER"],
		timeout: 30
	},{
		id: "inputCitizenLoadAmount",
		title: "市民卡圈存金额",
		getKeys: ["ST_CitizenAmount"],
		setKeys: ["transAmount"],
		timeout: 60
	},{
		id: "inputCitizenLoadAmountError",
		title: "市民卡圈存金额有误,重新输入",
		getKeys: ["ST_CitizenAmount"],
		setKeys: ["transAmount"],
		timeout: 60
	},{
		id: "CitizenLoadInfoConfirm",
		title: "确认市民卡圈存信息",
		getKeys: ["transAmount","ST_CitizenAmount","ST_CitizenCardNo"],
		timeout: 60
	},{
		id: "CitizenCardBalance",
		title: "显示余额信息",
		getKeys: ["ST_CitizenCardNo", "ST_CitizenAmount"],
		timeout: 60
	},{
		id: "CitizenCardInitFailed",
		title: "圈存初始化失败",
		timeout: 5
	},{
		id: "YZCitizenLoad_success",
		title: "市民卡圈存交易成功",
		setButtons:["receipt"],
		getKeys: ["receipt","transAmount", "ST_CitizenAfterAmount"],
		timeout: 60
	},{
		id: "YZCitizenLoad_failedInfo",
		title: "市民卡圈存交易失败",
		timeout: 5
	}]
},{
	entry: "index",
	path: "/PASS/",
	pages: [{
		id: "PassAccSelect",
		title: "存折续存账号方式选择页面",
		getKeys: ["I_DEP"],
		timeout: 90,
  	},{
		id: "inputPassAcc",
		title: "输入存折账号",
		setKeys : ["PassNo"],
		timeout: 60
	},{
		id: "inputPassAccError",
		title: "重新输入存折账号",
		setKeys : ["PassNo"],
		timeout: 60
	},{
		id: "PassActiveTips",
		title: "提示客户存折已激活",
		timeout: 5
	},{
		id: "PassDisLockTips",
		title: "提示客户存折已挂失",
		timeout: 5
	},{
		id: "PassTypeMenu",
		title: "存折续存类型选择页面",
		getKeys: ["I_DEP", "terminalId"],		
		timeout: 90,
  	},{
		id: "FixPassTypeSelect",
		title: "定一本存入方式选择页面",
		setKeys : ["FixedPassType"],
		getKeys: ["I_DEP", "terminalId"],	
		timeout: 90,
  	},{
		id: "CataPassSelete",
		title: "定一本存入介质选择页面",
		timeout: 90,
  	},{
		id: "PassDrawMenu",
		title: "存折支取类型选择页面",
		getKeys: ["I_CurrentPassCWD", "terminalId"],	
		timeout: 90,
  	},{
		id: "passExtractAmount",
		title: "部提金额输入",
		setKeys: ["transAmount"],
		getKeys: ["accountBalance"],
		timeout: 90,
  	},{
		id: "LocalTransAccNo",
		title: "选择转入账号",
		timeout: 90,
  	},{
		id: "PassLossTips",
		title: "提示客户存折已挂失",
		timeout: 5
	},{
		id: "inputTransAmount",
		title: "输入金额",
		setKeys : ["transAmount"],
		timeout: 90
	},{
		id: "inputTransAmountError",
		title: "输入金额有误",
		setKeys : ["transAmount"],
		timeout: 5
	},{
		id: "passAccountInfo",
		title: "账户信息显示",
		getKeys: ["cardNo","accountName","page_INQAvaliable","ST_PdpCODE"],
		timeout: 90
	},{
		id: "brushTrackPassbook",
		title: "请刷存折",
		timeout: 60
	},{
		id: "PassInvalTips",
		title: "存折异常提示",
		timeout: 5
	},{
		id: "PassUnsetTips",
		title: "存折异常提示",
		timeout: 5
	},{
		id: "fixedPBKdetailEmpty",
		title: "无定期补登明细",
		timeout: 5
	},{
		id: "TransOutNoEmpty",
		title: "取册号异常",
		timeout: 5
	},{
		id: "LocalAllAccNo",
		title: "客户选择转入账户",
		getDetails:["detail"],
		setKeys : ["TransInNo"],
		pageCount: 10,
		timeout: 90
	},{
		id: "turnFixedPageEjectPBK",
		title: "补登折翻页",
		getKeys: ["FixPageSum"],
		timeout: 60
	},{
		id: "SelectFixedAccNo",
		title: "客户选择定期未销户账户",
		getDetails:["detail"],
		setKeys : ["TD_VOLNO","accountBalance"],
		pageCount: 8,
		timeout: 90
	},{
		id: "TransAmtErro",
		title: "零存整取金额非法",
		timeout: 5
	},{
		id: "TransDateErro1",
		title: "零存整取本期已缴纳",
		timeout: 5
	},{
		id: "TransDateErro2",
		title: "零存整取逾期",
		timeout: 5
	},{
		id: "TransDateErro3",
		title: "零存整取最后交易日期未知",
		timeout: 5
	},{
		id: "NoSupportFixedBook",
		title: "激活不支持非活期存折",
		timeout: 5
	},{
		id: "PassPrintErro",
		title: "补登故障",
		timeout: 5
	},{
		id: "localPBK_password",
		title: "申请-设置存折密码",
		getKeys: ["menuAction"],
		timeout: 60
	},{
		id: "inputPassWithdrawAmount",
		title: "存折取款金额页面",
		setKeys: ["transAmount"],
		getKeys: ["page_CWDValue", "page_CWDMaxAmount", "page_CWDAllValue"],
		timeout: 30
	},{
		id: "PassSignName",
		title: "签名页面",
		setKeys: ["isUserSign"],
		timeout: 90
	},{
		id: "CustomFinger",
		title: "解锁客户指纹",
		YH_Hand:"0",
		getKeys: ["name", "pid", "mobile", "address", "job","idType","genderC","issuedate","abatedate",
			"Apply_terminalId","issueoffice","cardNo"],
		timeout: 60
	},{
		id: "ChooseFingerSign",
		title: "客户选择指纹或签名",
		YH_Hand:"0",
		getKeys: ["name", "pid", "mobile", "address", "job","idType","genderC","issuedate","abatedate",
			"Apply_terminalId","issueoffice","cardNo"],
		timeout: 60
	},{
		id: "PERID_Sign_PassUnlock",
		title: "存折密码解锁签名表单",
		YH_Hand:"0",
		getKeys: ["name", "pid", "mobile", "telephone", "address","isUserSign","adminUserName",
		          "job","Apply_terminalId","gender","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate",
		          "transTime","PERresponseCode","PERerrorMessage"],
		timeout: 60
	},{
		id: "checkFISOK_PassUnlock",
		getKeys: ["name", "pid", "mobile", "telephone", "address","isUserSign","adminUserName",
		          "job","Apply_terminalId","gender","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate",
		          "transTime","PERresponseCode","PERerrorMessage"],
		title: "存折密码解锁现场审核",
		timeout: 60
	},{
		id: "PERIDForJPG_PASSUnlock",
		title: "存折密码解锁回单转图片",
		getKeys: ["logoPath","name", "pid", "mobile", "telephone", "address","isUserSign",
		          "job","Apply_terminalId","gender","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","adminUserName",
		          "transTime","PERresponseCode","PERerrorMessage"],
	},{
		id: "PERID_Sign_PassActive",
		title: "存折激活表单",
		YH_Hand:"0",
		getKeys: ["name", "pid", "mobile", "telephone", "address","isUserSign","adminUserName",
		          "job","Apply_terminalId","gender","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate",
		          "transTime","PERresponseCode","PERerrorMessage"],
		timeout: 60
	},{
		id: "checkFISOK_PassActive",
		getKeys: ["name", "pid", "mobile", "telephone", "address","isUserSign","adminUserName",
		          "job","Apply_terminalId","gender","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate",
		          "transTime","PERresponseCode","PERerrorMessage"],
		title: "存折激活现场审核",
		timeout: 60
	},{
		id: "PERIDForJPG_PASSACTIVE",
		title: "存折激活回单转图片",
		getKeys: ["logoPath","name", "pid", "mobile", "telephone", "address","isUserSign",
		          "job","Apply_terminalId","gender","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","adminUserName",
		          "transTime","PERresponseCode","PERerrorMessage"],
	},{
		id: "PERID_Sign_PassReset",
		title: "存折密码挂失补设表单",
		YH_Hand:"0",
		getKeys: ["name", "pid", "mobile", "telephone", "address","isUserSign","adminUserName",
		          "job","Apply_terminalId","gender","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate",
		          "transTime","PERresponseCode","PERerrorMessage"],
		timeout: 60
	},{
		id: "checkFISOK_PassReset",
		getKeys: ["name", "pid", "mobile", "telephone", "address","isUserSign","adminUserName",
		          "job","Apply_terminalId","gender","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate",
		          "transTime","PERresponseCode","PERerrorMessage"],
		title: "存折密码挂失补设现场审核",
		timeout: 60
	},{
		id: "PERIDForJPG_PASSRESET",
		title: "存折密码挂失补设回单转图片",
		getKeys: ["logoPath","name", "pid", "mobile", "telephone", "address","isUserSign",
		          "job","Apply_terminalId","gender","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","adminUserName",
		          "transTime","PERresponseCode","PERerrorMessage"],
	},{
		id: "PERID_Sign_CupDraw",
		title: "活期存折支取表单",
		YH_Hand:"0",
		getKeys: ["accountName" ,"pid", "mobile", "telephone", "ST_CIMAddress","isUserSign","transAmount",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","gender",
		          "transTime","PERresponseCode","PERerrorMessage"],
		timeout: 60
	},{
		id: "PERIDForJPG_CupDraw",
		title: "活期存折支取转图片",
		getKeys: ["logoPath","accountName", "pid", "mobile", "telephone", "ST_CIMAddress","isUserSign","transAmount",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","gender",
		          "transTime","PERresponseCode","PERerrorMessage"],
	},{
		id: "PERID_Sign_FixDraw",
		title: "定期存折支取表单",
		YH_Hand:"0",
		getKeys: ["accountName" ,"pid", "mobile", "telephone", "ST_CIMAddress","isUserSign","transAmount",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","gender",
		          "transTime","PERresponseCode","PERerrorMessage","TransInNo"],
		timeout: 60
	},{
		id: "PERIDForJPG_FixDraw",
		title: "定期存折支取转图片",
		getKeys: ["logoPath","accountName", "pid", "mobile", "telephone", "ST_CIMAddress","isUserSign","transAmount",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","gender",
		          "transTime","PERresponseCode","PERerrorMessage","TransInNo"],
	},{
		id: "PERID_Sign_CupDeposit",
		title: "有折活期存折存款表单",
		YH_Hand:"0",
		getKeys: ["accountName" ,"pid", "mobile", "telephone", "ST_CIMAddress","isUserSign","transAmount",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","gender",
		          "transTime","PERresponseCode","PERerrorMessage"],
		timeout: 60
	},{
		id: "PERID_Sign_NoCupDeposit",
		title: "无折活期存折存款表单",
		YH_Hand:"0",
		getKeys: ["accountName" ,"pid", "mobile", "telephone", "ST_CIMAddress","isUserSign","transAmount",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","gender",
		          "transTime","PERresponseCode","PERerrorMessage"],
		timeout: 60
	},{
		id: "PERIDForJPG_CupDeposit",
		title: "活期存折存款转图片",
		getKeys: ["logoPath","accountName", "pid", "mobile", "telephone", "ST_CIMAddress","isUserSign","transAmount",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","gender",
		          "transTime","PERresponseCode","PERerrorMessage"],
	},{
		id: "PERID_Sign_FixDeposit",
		title: "有折定期存折存款表单",
		YH_Hand:"0",
		getKeys: ["accountName" ,"TransOutNo","fixedPassNo","pid", "mobile", "telephone", "ST_CIMAddress","isUserSign","transAmount",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","gender",
		          "transTime","PERresponseCode","PERerrorMessage"],
		timeout: 60
	},{
		id: "PERID_Sign_NoFixDeposit",
		title: "无折定期存折存款表单",
		YH_Hand:"0",
		getKeys: ["accountName" ,"TransOutNo","fixedPassNo","pid", "mobile", "telephone", "ST_CIMAddress","isUserSign","transAmount",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","gender",
		          "transTime","PERresponseCode","PERerrorMessage"],
		timeout: 60
	},{
		id: "PERIDForJPG_FixDeposit",
		title: "定期存折存款转图片",
		getKeys: ["logoPath","accountName","TransOutNo","fixedPassNo", "pid", "mobile", "telephone", "ST_CIMAddress","isUserSign","transAmount",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","gender",
		          "transTime","PERresponseCode","PERerrorMessage"],
	},{
		id: "PERID_Sign_UspDeposit",
		title: "有折零存整取存款表单",
		YH_Hand:"0",
		getKeys: ["accountName" ,"pid", "mobile", "telephone", "ST_CIMAddress","isUserSign","transAmount",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","gender",
		          "transTime","PERresponseCode","PERerrorMessage"],
		timeout: 60
	},{
		id: "PERID_Sign_NoUspDeposit",
		title: "无折零存整取存款表单",
		YH_Hand:"0",
		getKeys: ["accountName" ,"pid", "mobile", "telephone", "ST_CIMAddress","isUserSign","transAmount",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","gender",
		          "transTime","PERresponseCode","PERerrorMessage"],
		timeout: 60
	},{
		id: "PERIDForJPG_UspDeposit",
		title: "零存整取存款转图片",
		getKeys: ["logoPath","accountName", "pid", "mobile", "telephone", "ST_CIMAddress","isUserSign","transAmount",
		          "job","Apply_terminalId","genderC","nationality","print_terminalSerial",
		          "cardNo","abatedate","Apply_tellerno","issueoffice","transDate","gender",
		          "transTime","PERresponseCode","PERerrorMessage"],
	},{
		id: "CustomFingerNoPid",
		title: "客户指纹(无身份证)",
		YH_Hand:"0",
		getKeys: ["accountName", "pid", "mobile", "ST_CIMAddress", "job","idType","gender","issuedate","abatedate",
			"Apply_terminalId","issueoffice","cardNo","transAmount"],
		timeout: 60
	},{
		id: "CustomFingerOrSign",
		title: "客户选择指纹或签名",
		YH_Hand:"0",
		getKeys: ["accountName", "pid", "mobile", "ST_CIMAddress", "job","idType","gender","issuedate","abatedate",
			"Apply_terminalId","issueoffice","cardNo","transAmount"],
		timeout: 60
	},{
		id: "CustomPassFingerOrSign",
		title: "有存折存款选择指纹或签名",
		YH_Hand:"0",
		getKeys: ["accountName", "pid", "mobile", "ST_CIMAddress", "job","idType","gender","issuedate","abatedate",
			"Apply_terminalId","issueoffice","cardNo","transAmount"],
		timeout: 60
	},{
		id: "PassFillNoteView",
		title: "是否补登提示",
		timeout: 30
	 },{
		id: "devicePTRError",
		title: "故障提示",
		timeout: 5
	},{
		id: "PassCAerrorIDCard",
		title: "存折身份证错误提示",
		timeout: 5
	},{
		id: "PassTransDifIDCard",
		title: "存折身份证错误提示",
		timeout: 5
	},{
		id: "Success_PassAmountTrans",
		title: "交易成功",
		getKeys: ["page_transAmount", "page_TransDate","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "crown","menuAction","page_CardNo"],
		setButtons:["receipt", "crown"],
		timeout: 30
	},{
		id: "Success_HavePassAmountTrans",
		title: "交易成功",
		getKeys: ["page_transAmount", "page_TransDate","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "crown","menuAction","page_CardNo"],
		setButtons:["receipt", "crown"],
		timeout: 30
	},{
		id: "Success_NoPassAmountTrans",
		title: "交易成功",
		getKeys: ["page_transAmount", "page_TransDate","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "crown","menuAction","page_CardNo"],
		setButtons:["receipt", "crown"],
		timeout: 30
	},{
		id: "Success_FixedPassDeposit",
		title: "交易成功",
		getKeys: ["page_transAmount", "page_TransDate","page_fixedPassNo","page_TransOutNo","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "crown","menuAction","page_CardNo"],
		setButtons:["receipt", "crown"],
		timeout: 30
	},{
		id: "Success_NoPassFixedPassDeposit",
		title: "交易成功",
		getKeys: ["page_transAmount", "page_TransDate","page_fixedPassNo","page_TransOutNo","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "crown","menuAction","page_CardNo"],
		setButtons:["receipt", "crown"],
		timeout: 30
	},{
		id: "Success_FixedPassDraw",
		title: "交易成功",
		getKeys: ["page_transAmount", "page_TransInNo","page_TransDate","page_TransTime","terminalId","accountName","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt", "crown","menuAction","page_CardNo"],
		setButtons:["receipt", "crown"],
		timeout: 30
	},{
		id: "Success_PassTrans",
		title: "交易成功",
		getKeys: ["adminUserName","page_TransDate","page_TransTime","terminalId","name","page_TransKeyPrint","print_terminalSerial","page_transFee","page_Eject", "customAction", "receipt","menuAction","page_CardNo"],
		setButtons:["receipt"],
		timeout: 30
	},{
		id: "localPassCPR_password",
		title: "设置存折密码",
		getKeys: ["menuAction"],
		timeout: 60
	},{
		id: "localPassCPR_passwordDiffPin",
		title: "比对密码失败",
		getKeys: ["menuAction"],
		timeout: 60
	},{
		id: "NoSupportBook",
		title: "不支持的存折类型",
		timeout: 5
	 },{
		id: "choosePassAmount",
		title: "部提/支取选择",
		getKeys: ["accountBalance","cardNo","TD_VOLNO","accountName"],
		timeout: 90
	},{
		id: "Common_FingerInputTimesout",
		title: "输入次数超限",
		timeout: 3
	},{
		id: "PERID_PassTransfer",
		title: "存折转账表单回显",
		YH_Hand:"0",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","inAccountNo","inAccountName","transAmount","ST_TRFTimeType","PERresponseCode",
		"PERerrorMessage","isUserSign","adminUserName"],
		timeout: 59
	},{
		id: "checkFISOK_PassTransfer",
		title: "存折转账信息确认",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","inAccountNo","inAccountName","transAmount","ST_TRFTimeType","PERresponseCode",
		"PERerrorMessage","isUserSign","adminUserName"],
		timeout: 90
	},{
		id: "PERIDForJPG_PassTRANSFER",
		title: "存折转账表单回显",
		getKeys: ["name","genderC","pid","issueoffice","abatedate","Apply_terminalId","Apply_tellerno","transDate",
		"transTime","cardNo","inAccountNo","inAccountName","transAmount","ST_TRFTimeType","PERresponseCode",
		"PERerrorMessage","isUserSign","adminUserName"],
		timeout: 90
	},{
		id: "CustomTransFingerNoPid",
		title: "客户指纹(无身份证)",
		YH_Hand:"0",
		getKeys: ["accountName", "address","pid", "mobile","genderC", "ST_CIMAddress", "job","idType","gender","issuedate","abatedate",
			"Apply_terminalId","issueoffice","cardNo","transAmount"],
		timeout: 60
	},{
		id: "CustomTransFingerOrSign",
		title: "客户选择指纹或签名",
		YH_Hand:"0",
		getKeys: ["accountName", "pid", "address","mobile","genderC", "ST_CIMAddress", "job","idType","gender","issuedate","abatedate",
			"Apply_terminalId","issueoffice","cardNo","transAmount"],
		timeout: 60
	}
	]
}];

var cookReviseSchema = [{
	schema : 's54',
	title : '屏幕5:4方案',
	revise: {
		index : 'index_s54',
		idle : 'idle_s54'
	}
}, {
	schema : 'yihua',
	title : '怡化LOGO方案',
	revise: {
		index : 'index_yihua',
		idle : 'idle_yihua'
	}
}];

var activeReviseSchema = 'default'
