$(function(){

	/**
	 * 原有的ajax中 success: function(){} 就是这里的function方法\
	 * 自动阻止默认提交
	 */
/*	$('#reg').ajaxForm(function(){
		alert('提交成功!');
	});
*/

	/**
	 * JS中用了submit()这个方法时,采用ajaxSubmit()来提交
	 * submit() 方法没有阻止默认提交,需要自行阻止
	 */
	$('#reg').submit(function(){
		/*
		$(this).ajaxSubmit(function(){
			alert('提交成功!');
		});
		*/
		$(this).ajaxSubmit({
			url:'form.php', 			//设置提交的url,可覆盖action属性
			target:'#box',				//服务器返回的内容存在在指定ID的标签中
			type:'POST',				//GET,POST
			dataType:null,				//xml,json,script,默认为null
			clearForm:true,				//成功提交后,清空表单
			resetForm:true,				//成功提交后,重置表单
			data:{aaa:'bbb',cc:'dd'},	//增加额外的数据提交
			//提交之前执行,一般用于数据验证
			//数据不合法,就要返回false不让提交,返回true让提交
			beforeSubmit:function(formData,jqForm,options){
				//alert(formData[0].name); 	//得到传递表单元素的name
				//alert(formData[0].value); 	//得到传递表单元素的value
				//alert(jqForm);				//返回form表单的jquery对象 jqForm.html()
				//alert(options.url);			//得到目前options设置的属性
				//alert('正在提交中....');
				return true;
			},
			success:function(responseText,statusText){
				//alert('提交成功');
				//alert(responseText+statusText);
			},
			//错误时调用
			error:function(event,errorText,errorType){
				//alert(errorText+errorType);
			}
		});	

		return false;
	});

	//表单序列化
	//alert($('#reg').formSerialize());

	//序列化某一个字段
	//alert($('#reg #user').fieldSerialize());
	
	//得到某个字段的value值
	//alert($('#reg #user').fieldValue());

	//重置表单
	//$('#reg').resetForm();

	//清空某个字段
	//$('#reg #user').clearFields();	


});