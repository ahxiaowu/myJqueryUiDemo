$(function(){
	$('#reg').validate({
		//debug:true,
		
		//当验证成功后执行,而且阻止了默认提交
		//一般用于ajax提交使用
		submitHandler:function(form){
			alert('验证成功,准备提交!');
/* invalidHandler用这段判断语句
			if(errorNum==0){
				$('.myerrorNum').hide();
			}*/
		},

/*		//忽略某个字段验证
		//ignore:'#pass',

		//群组错误信息 字段之间用空格隔开
		groups:{
			myerror:'user pass'
		},
		//默认错误光标聚焦位置,设置这个解决群组时错误提示重复问题
		focusInvalid:false,
		//显示群组的错误提示
		errorPlacement:function(error,element){
			//alert(element[0]);
			$.each(error,function(index,value){
				//alert(index+' '+$(value).html());
				$('.myerror').html($('.myerror').html()+$(value).html());
			});
		},*/

/*		
		//设置默认的错误样式名
		errorClass:'myerror',
		//设置错误提示的标签
		errorElement:'span',
*/
		
/*		
		//统一包裹错误提示信息
		errorLabelContainer:'ol.myerror',
		wrapper:'li',
*/

/*		//验证成功后加载的样式 默认认样式为valid名称
		//success:'abc',

		success:function(label){
			label.addClass('abc').text('OK');
		},*/

/*		//高亮显示有错误的元素,变色式
		highlight:function(element,errorClass){
			$(element).css('border','1px solid red');
		},

		//验证成功后移出错误高亮
		unhighlight:function(element,errorClass){
			$(element).css('border','1px solid green');
		},*/

/*		//表单提交时获取信息
		invalidHandler:function(event,validator){
			//alert(validator.numberOfInvalids()); //得到错误条数
			var errorNum = validator.numberOfInvalids();
			if(errorNum){
				$('.myerrorNum').html('错误信息有:'+errorNum+'条信息');
			}
		},*/

		//获取错误提示名柄,不用提交及时获取值
		showErrors:function(errorMap,errorList){
			$.each(errorMap,function(index,value){});

			//alert(errorMap.user);
			//alert(errorList[0].element);
			//alert(errorList[0].message);
			
			var errorNum = this.numberOfInvalids();
			//alert(errorNum);
			if(errorNum){
				$('.myerrorNum').html('错误信息有:'+errorNum+'条信息');
			}else{
				$('.myerrorNum').hide();
			}

			this.defaultShowErrors(); //执行默认提示
		},

		
		rules:{
			user:{
				required:true,
				minlength:2,
				rangelength:[2,10],
				//remote:'code.php'
			},
			email:{
				email:true
			},
			url:{
				url:true
			},
			number:{
				number:true
			},
			pass:{
				required:true,
				remote:{
					url:'code.php',
					//type:'POST',
					//dataType:'json',
					data:{
						user:function(){
							return $('#user').val();
						}
					}
				}
			},
			repass:{
				equalTo:'#pass'
			},
			min:{
				min:5
			},
			range:{
				range:[5,10]
			},
			rangelength:{
				rangelength:[5,10]
			}
		},
		messages:{
			user:{
				required:'账号不得为空!',
				minlength:jQuery.format('账号不能小于{0}位!'),
				rangelength:jQuery.format('账号应该在{0}-{1}之间!'),
				//remote:'账号已使用!'
			},
			pass:{
				required:'密码不得为空!',
				remote:'账号或密码不正确'
			}
		}
	});

	//在外部获得表单验证的结果 得到true或false
	//alert($('#reg').valid());
	
	$('#zipcode').rules('add',{
		required:true,
		zipcode:true,
		messages:{
			required:'邮编必须填写'
		}
	});

	//自定义验证插件写法
	$.validator.addMethod('zipcode',function(value,element){
		var reg = /^[0-9]{6}$/;
		return this.optional(element) || (reg.test(value)); //固定写法
	},'请输入正确的邮政编码');


});