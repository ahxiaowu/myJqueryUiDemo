$(function(){
	$('#search_button').button();
	$('#reg').buttonset(); //设置单选框
	$('#reg').dialog({
		title:'知问会员注册',
		autoOpen:true,
		modal:true,
		width:320,
		height:320,
		resizable:false,
		buttons:{
			'提交':function(){
				$(this).submit();
			},
			'取消':function(){
				$(this).dialog('close');
			}
		}	
	}).validate({
		submitHandler:function(form){
			alert('验证成功,准备提交中...');
		},
		showErrors:function(errorMap,errorList){
			var errorNum = this.numberOfInvalids();
			if(errorNum>0){
				$('#reg').dialog('option','height',errorNum*20+320);
			}else{
				$('#reg').dialog('option','height',320);
			}

			this.defaultShowErrors(); //执行默认的验证
		},
		highlight:function(element,errorClass){
			$(element).css('border','1px solid #639');
		},
		unhighlight:function(element,errorClass){
			$(element).css('border','1px solid #ccc');
			$(element).parent().find('span').html('&nbsp;').addClass('succ');
		},		
		errorLabelContainer:'ol.reg_error',
		wrapper:'li',
		rules:{
			user:{
				required:true,
				minlength:2
			},
			pass:{
				required:true,
				minlength:3
			},
			email:{
				required:true,
				email:true
			}			
		},
		messages:{
			user:{
				required:'账号不得为空',
				minlength:jQuery.format('账号不得少于{0}位!')
			},
			pass:{
				required:'密码不得为空',
				minlength:jQuery.format('密码不得少于{0}位!')
			},
			email:{
				required:'邮箱不得为空',
				email:'请输入正确的邮箱地址!'
			}						
		}
	});

	$('#reg_a').click(function(){
		$('#reg').dialog('open');
	});

	$('#date').datepicker({
		changeMonth:true,
		changeYear:true,
		yearSuffix:'',
		maxDate:0,
		yearRange:'1950:2030'
	});
/*
	$('#reg input[title]').tooltip({
		show:false,
		hide:false,
		position:{
			my:'left center',
			at:'right+5 center'
		}
	});
*/

	$('#email').autocomplete({
		autoFocus:true,
		delay:0,
		source:function(request,response){
			var hostArr = ['qq.com','163.com','263.com','gmail.com','sina.com','hotmail.com'];
			var inputText = $.trim(request.term);
			var emailName = inputText;
			var hostName  = '';
			var ix = inputText.indexOf('@');
			var result = [];

			result.push(emailName);	

			if(ix>-1){
				emailName = inputText.slice(0,ix);
				hostName  = inputText.slice(ix+1);
			}

			if(emailName){
				var findArr = hostArr;
				if(hostName){
					findArr = $.grep(hostArr,function(value,index){
						return value.indexOf(hostName)>-1;
					});
				}
				findArr = $.map(findArr,function(val,i){
					return emailName+'@'+val;
				});		
				result = result.concat(findArr);
			}
			response(result);
		}
	});

});