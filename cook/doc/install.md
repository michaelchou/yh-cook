# VTMC #

## 底层安装 ##
0. 确保系统为Win7专业版或以上，且当前用户必须为administrator，
1. 设备各驱动安装（厂商安装）
2. sp安装（厂商安装）

## 中间件与应用【手动】 ##
【下列内容重写】
1. 将C端应用文件（YH-VTMC）夹复制到D盘下,只能是D盘
2. 在YH-VTMC下找到YHAX，在里面双击执行批处理文件REGAX.BAT即可
3. 在YHAX下的Test Utilities中的网页可对设备各个模块进行测试
4. 注册数据池控件（在YH-VTMC下找到DataKit.dll，双击进行注册）
5. 安装摄像软件（首先将拍照软件附带的MSCOMCTL.OCX放在C:\windows\System32下，
  找到TESO_Biometric_TCFCapture_SDK_Install.exe，双击安装软件，设置验证码激活（首先向天诚盛业获取SN码，然后输入到SN框，获取返回码，
  将返回码发送给天诚盛业等待器发回激活码，填会activation Code 框，点击激活即可，点击系统开始按钮->所有程序->TESO_Biometric_TCFCapture文件夹下的default.htm打开进行拍照测试）
6. 安装视频编码解码器（在视频编解码文件夹下找到iv5setup.exe，双击安装文件直到完成即可）
7. 安装方正粗倩体字体，在YH-VTMC下找到方正粗倩简体.ttf，双击安装即可
8. 配置好YH-VTMC.ini文件，主要是本机IP（ClientID）地址和终端号（TerminalNo），网点号（BranchNo; AreaCode;），服务器IP已经配好
  请与银行相关人员确认
9. 配置YH-VTMC\YH-TcpClient\config文件，主要配置uploadIp=ACD的IP

## 中间件与应用【自动】 ##
【下列内容重写】
1. 双击xxx-setup.exe，默认安装在D盘即可（只能是D盘）
2. 执行完所有操作后
  在YHAX下的Test Utilities中的网页可对设备各个模块进行测试，
3. 配置好YH-VTMC.ini文件，主要是本机IP（ClientID）地址和终端号（TerminalNo），网点号（BranchNo; AreaCode;）服务器IP已经配好
  请跟银行相关人员确认
4. 配置YH-VTMC\YH-TcpClient\config文件，主要设置 uploadIp=ACD的IP  
启动后确保TcpClient.exe能在进程中看到
5. 若拍照程序注册不成功，需检查vc运行库是否足够，若不够请打开vc运行库，里面有相应的库文件，相应安装即可

## 系统设置 ##
1. 屏蔽手势与多点触摸（控制面板->所有控制面板->笔和触摸->笔势（禁用）->触摸（把启用多点触控笔势和墨迹勾选去掉！）
2. 关闭防火墙
3. 关闭屏幕键盘 （屏幕键盘左上角->工具->打开方式->去掉“使用输入面板选项卡”的勾选）
4. 在YH-VTMC下找到StartVTMC.bat 创建快捷方式,最后点击操作系统开始按钮->所有程序-> 启动->打开启动文件夹->
将快捷方式粘贴到启动文件夹
5. 重启设备，确保应用能够自动开启
