$(function(){
	$('#search_button').button();
	$('#reg').buttonset(); //设置单选框
	$('#reg').dialog({
		title:'知问会员注册',
		autoOpen:true,
		modal:true,
		width:320,
		height:500,
		resizable:false,
		buttons:{
			'提交':function(){
				alert(1111);
			},
			'取消':function(){
				$(this).dialog('close');
			}
		}	
	});
	$('#reg_a').click(function(){
		$('#reg').dialog('open');
	});

	$('#date').datepicker();

	$('#reg input[title]').tooltip({
		show:false,
		hide:false,
		position:{
			my:'left center',
			at:'right+5 center'
		}
	});


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