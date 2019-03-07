#坐席接口#

- agent_begin  坐席排队
- agent_submit 提交内容
- agent_request 坐席交互
- agent_authorized 坐席审核
- agent_end 坐席结束

#坐席交互#
- ACD begin 排队
- submit userInfo 提交用户信息
- submit FrontImage 提交身份证前面图像
- submit BackImage 提交身份证后面图像
- submit HeadImage 提交身份证头部图像
- submit FacePhoto 提交拍照图像
- request agent 等待坐席交互就绪
- submit form 提交表单信息
- authorized form 坐席审核结果
- submit finger 提交指纹采集
- submit transInfo 提交交易信息
- ACD end 结束
