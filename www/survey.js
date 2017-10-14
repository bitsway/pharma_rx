$.afui.useOSThemes=false;
$.afui.useOSThemes=false;
$.afui.loadDefaultHash=true;
$.afui.autoLaunch=false;

//check search
var search=document.location.search.toLowerCase().replace("?","");
if(search.length>0){
   $.afui.useOSThemes=true;
	if(search=="win8")
		$.os.ie=true;
	else if(search=="firefox")
		$.os.fennec="true"
	$.afui.ready(function(){
		$(document.body).get(0).className=(search);
	});
}


var  apipath =''; //for medicine search


//var  apipath ='http://127.0.0.1:8000/w02_ipi/medSearch/'

var oprtunityVal='';

    $(document).ready(function(){
        $.afui.launch();		
		
		var imgList="";
		for(i=1;i<=30;i++){
					
			imgList+='<div style="width:30%; float:left; border:1px solid #00bfff; border-radius:10px; height:100px; margin:.2%;" ><img width="75" alt="Image'+i+'" id="myImage'+i+'" onClick="gotoPic('+i+');"><input name="prPhoto'+i+'" id="prPhoto'+i+'" type="hidden"/><div style="float:right;"><a href="#" style="font-size:20px; text-decoration:none;" class="icon remove" onClick="cancelPicture('+i+')" ></a></div></div>';//<img src="cancel.png" width="20" height="20" alt="X" id="myImage1"  onClick="cancelPicture('+i+')"></span>
			
		}
		$("#imgList").append(imgList);
		
		//-----------------
		/*var charList=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		
		var chBarList="";
		for(i=0;i<=charList.length-1;i++){			
			chBarList+='<div style="height:5%; border-bottom:1px solid #004d80; padding:8%;" onClick="searchPrChar(\''+charList[i]+'\')">'+charList[i]+'</div>';
			
		}
		$("#charBarRt").append(chBarList);*/
		
		
		
		localStorage.location_error=''
		$("#wait_image_login").hide();
		
		
		$("#loginButton").show();
		
				
		
		//first_page();
		
	//===============SetPR=================
	for (j=0; j < 10; j++){
		var picNo=parseInt(j)+1 
		var imageDiv="myImage"+picNo
		var imageText="prPhoto"+picNo
		var imageSource=''
		
		
		if (picNo==1){
			imageSource=localStorage.prPhoto1
		}
		if (picNo==2){
			imageSource=localStorage.prPhoto2
		}
		if (picNo==3){
			imageSource=localStorage.prPhoto3
		}
		if (picNo==4){
			imageSource=localStorage.prPhoto4
		}
		if (picNo==5){
			imageSource=localStorage.prPhoto5
		}
		if (picNo==6){
			imageSource=localStorage.prPhoto6
		}
		if (picNo==7){
			imageSource=localStorage.prPhoto7
		}
		if (picNo==8){
			imageSource=localStorage.prPhoto8
		}
		if (picNo==9){
			imageSource=localStorage.prPhoto9
		}
		if (picNo==10){
			imageSource=localStorage.prPhoto10
		}
		if (picNo==11){
			imageSource=localStorage.prPhoto11
		}
		if (picNo==12){
			imageSource=localStorage.prPhoto12
		}
		if (picNo==13){
			imageSource=localStorage.prPhoto13
		}
		if (picNo==14){
			imageSource=localStorage.prPhoto14
		}
		if (picNo==15){
			imageSource=localStorage.prPhoto15
		}
		if (picNo==16){
			imageSource=localStorage.prPhoto16
		}
		if (picNo==17){
			imageSource=localStorage.prPhoto17
		}
		if (picNo==18){
			imageSource=localStorage.prPhoto18
		}
		if (picNo==19){
			imageSource=localStorage.prPhoto19
		}
		if (picNo==20){
			imageSource=localStorage.prPhoto20
		}
		if (picNo==21){
			imageSource=localStorage.prPhoto21
		}
		if (picNo==22){
			imageSource=localStorage.prPhoto22
		}
		if (picNo==23){
			imageSource=localStorage.prPhoto23
		}
		if (picNo==24){
			imageSource=localStorage.prPhoto24
		}
		if (picNo==25){
			imageSource=localStorage.prPhoto25
		}
		if (picNo==26){
			imageSource=localStorage.prPhoto26
		}
		if (picNo==27){
			imageSource=localStorage.prPhoto27
		}
		if (picNo==28){
			imageSource=localStorage.prPhoto28
		}
		if (picNo==29){
			imageSource=localStorage.prPhoto29
		}
		if (picNo==30){
			imageSource=localStorage.prPhoto30
		}
		
		//alert (imageSource)
		var image = document.getElementById(imageDiv);
		image.src = imageSource;
		imagePath = imageSource;
		$("#"+imageText).val(imagePath);
		
	}

	
	
//	===========================================

	
	var currentDate = new Date()
	var day = currentDate.getDate();if(parseInt(day)<9)	{day="0" + day};
	var month = currentDate.getMonth() + 1;if(parseInt(month)<9){month="0" +month};
	var year = currentDate.getFullYear();
	var today=  year + "-" + month + "-" + day
	localStorage.today=today;

		//alert (localStorage.synced);
		if (localStorage.synced=='YES'){
			$("#cid").val(localStorage.cid);
			$("#user_id").val(localStorage.user_id);
			$("#user_pass").val(localStorage.user_pass);
			
			$.afui.loadContent("#pageHome",true,true,'right');
			
		}


		//------------------ op search
		$("#opMedAdd").click(function (){
			$('#opCart').empty();
			localStorage.opProdID_Str = oprtunityVal;
			campaign_doc_str=localStorage.opProdID_Str
			
			var campaignList = campaign_doc_str.split('||');
			var campaignListLength=campaignList.length;
			var medId='';
			var medName='';
			var medVal='';
			op_cart_list='<h1>Medicine</h1>';
			op_cart_list+='<table style="width:100%;">';
			op_cart_list+='<tr style="background-color:#80bfff; height:20px;"><td style="width:80%; padding-left:5px;">Name</td><td style="width:10%;">Qty</td><td style="width:5%;"></td></tr>';			
			for ( i=0; i < campaignListLength; i++){
				
				var pID=campaignList[i];
				var pIdSpilt = pID.split('|');
				
				for(n=0; n < pIdSpilt.length; n++){
					medId = pIdSpilt[0];
					medName = pIdSpilt[1];
					medVal = pIdSpilt[2];
				}
				
				if(medId!=''){						
					op_cart_list+='<tr style="background-color:#cce6ff; height:20px;" id="cartOp_'+medId+'"><td style="padding-left:5px;">'+medName+'<input id="inpId'+medId+'" type="hidden" value="'+medVal+'"/></td><td style="text-align:center;" >'+medVal+'</td><td style="text-align:center;">&nbsp;<a onClick="removeCarItemOp(\''+medId+'\');" style="font-size:15px; text-decoration:none;" class="icon remove"></a></td></tr>'; //<img  src="cancel.png" width="20" height="20" alt="X" >
				}				
			}
			op_cart_list+='</table>';
				
			//alert (op_cart_list)
			$('#opCart').append(op_cart_list);
		
		});
		
		//-------------------- med add -------------------------------------
		/*$("#medAdd").click(function (){
				$('#prCart').empty();
				localStorage.prProdID_Str=optionVal;
				campaign_doc_str=localStorage.prProdID_Str
				
				var campaignList = campaign_doc_str.split('<rd>');
				var campaignListLength=campaignList.length;
				var pID;
				var inpVal;
				cart_list='<h1>Item</h1>';
				for ( i=0; i < campaignListLength; i++){
					var pIDv=campaignList[i];
					var pidSplit = pIDv.split('<||>');
					
					for(n=0; n<pidSplit.length; n++){
						ppID=pidSplit[0];
						pID=pidSplit[1];
						inpVal=pidSplit[2];						
					}
					if(inpVal==undefined||inpVal==''){
								inpVal=0;
							}
							
					if((pID!='') && (pID!=undefined)){
							cart_list+='<div style="padding:5px; border-bottom:1px solid #8CAFD7; background-color:#cce6ff;" id="cartPr_'+ppID+'">'+pID+'<input id="inpId'+pID+'" type="hidden"  value="'+inpVal+'"/>&nbsp;&nbsp;'+inpVal+'&nbsp;&nbsp;<span style="text-align:right;" width="10%"  onClick="removeCarItemPr(\''+ppID+'\',\''+pID+'\',\''+inpVal+'\');">&nbsp;&nbsp;<img  src="cancel.png" width="20" height="20" alt="X" onClick="removeCarItemPr(\''+ppID+'\',\''+pID+'\',\''+inpVal+'\');"> </span></div>';
						
						}
						
				}
				$('#prCart').append(cart_list);
		});*/
				
		
    });

$.afui.animateHeader(true);

function page_login() {
	
	$("#btn_prescription_submit").show();
	
	$("#wait_image_login").hide();
		
	$("#loginButton").show();
	
	$.afui.loadContent("#login",true,true,'right');
}

function setPicture(){
localStorage.picFlag=0;

}

function gotoPic(picNo) {
	
	var imageDiv="myImage"+picNo
	var imageText="prPhoto"+picNo
	
	if (picNo!=localStorage.picNo){
		$('#medicineList').empty();
		$('#doctorList').empty();
		$("#docCart").empty();						
		$("#opCart").empty();
		$("#docSelect").empty();
		
		$("#medicine_1").val('');
		$("#medicine_2").val('');
		$("#medicine_3").val('');
		$("#medicine_4").val('');
		$("#medicine_5").val('');
		
		$("#btn_prescription_submit").show();
		//localStorage.prProdID_Str=''
		localStorage.opProdID_Str=''
		//getDocDataprCart()
		//$("#pr_id_lv").empty()
		//setPrProduct()
		//$("#op_id_lv").empty()
		//setOpProduct()
	}
	localStorage.picNo=picNo
	
	var prPic=$("#"+imageText).val();
	
	var image_show = document.getElementById('myImagePrescription_show');
	image_show.src = prPic;
	$("#myImagePrescription_show").val(prPic)
	
	//alert (prPic)
	if (prPic!=''){		
		$.afui.loadContent("#imageSinglePage",true,true,'right');
	}else{
		$.afui.loadContent("#imageSinglePage",true,true,'right');
	}
}

function cancelPicture(i){
	var imageDiv="myImage"+i
	var imageText="prPhoto"+i
	var imageSource=''
	var image = document.getElementById(imageDiv);
	image.src = imageSource;
	imagePath = imageSource;
	$("#"+imageText).val(imagePath);
	var picNo=i+1
	if (picNo==1){localStorage.prPhoto1=''}
	if (picNo==2){localStorage.prPhoto2=''}
	if (picNo==3){localStorage.prPhoto3=''}
	if (picNo==4){localStorage.prPhoto4=''}
	if (picNo==5){localStorage.prPhoto5=''}
	if (picNo==6){localStorage.prPhoto6=''}
	if (picNo==7){localStorage.prPhoto7=''}
	if (picNo==8){localStorage.prPhoto8=''}
	if (picNo==9){localStorage.prPhoto9=''}
	if (picNo==10){localStorage.prPhoto10=''}
	if (picNo==11){localStorage.prPhoto11=''}
	if (picNo==12){localStorage.prPhoto12=''}
	if (picNo==13){localStorage.prPhoto13=''}
	if (picNo==14){localStorage.prPhoto14=''}
	if (picNo==15){localStorage.prPhoto15=''}
	if (picNo==16){localStorage.prPhoto16=''}
	if (picNo==17){localStorage.prPhoto17=''}
	if (picNo==18){localStorage.prPhoto18=''}
	if (picNo==19){localStorage.prPhoto19=''}
	if (picNo==20){localStorage.prPhoto20=''}
	if (picNo==21){localStorage.prPhoto21=''}
	if (picNo==22){localStorage.prPhoto22=''}
	if (picNo==23){localStorage.prPhoto23=''}
	if (picNo==24){localStorage.prPhoto24=''}
	if (picNo==25){localStorage.prPhoto25=''}
	if (picNo==26){localStorage.prPhoto26=''}
	if (picNo==27){localStorage.prPhoto27=''}
	if (picNo==28){localStorage.prPhoto28=''}
	if (picNo==29){localStorage.prPhoto29=''}
	if (picNo==30){localStorage.prPhoto30=''}
	
}

//------------------ doc search 
function docAdd(docid){
						
			$('#docCart').empty();
			$('#docSelect').empty();
			var docStr=$("#doc"+docid).val();
			if (docStr!=""){
			  localStorage.docStr=docStr			
			  keywordLi=localStorage.docStr.split("|")
			  var docID=keywordLi[0].trim();
			  var docName=keywordLi[1];
			  var docAdd=keywordLi[2];
			  var docArea=keywordLi[3];
			  
			  doc_cart_list='<div style="background-color:#80bfff;"><h1>Doctor</h1></div>';
			  doc_cart_list+='<div  style="float:left; width:80%" >';
			  doc_cart_list+='<input type="hidden" id="doc'+docID+'" value="'+keywordStr[i]+'"/>'
			  doc_cart_list+='<h3>'+docName+'</h3>';
			  doc_cart_list+='<p >'+docAdd+'</p>';  
			  doc_cart_list+='</div>';
			  doc_cart_list+='<div style="clear:both; border-bottom:1px solid #8CAFD7; margin:2px;"></div><br/>';
			
			  $('#docCart').append(doc_cart_list);
			  $('#docSelect').append('<div  style="float:center; width:100%; background-color:#e6e6ff; text-align:left;" ><h3>'+docName+'</h3><p >'+docAdd+'</p></div>');
			  	
			}		
		}

<!-- doctor-->
function searchDoc(){
	// opitemSearch
	var searchValue = $("#drSearch").val();
	
	if(searchValue.length<3){
		$('#doctorList').html('<p>Type minimum 3 character <span style="color:red;"><sup>*</sup></span></p>');
	}
	else{
		//alert(apipath+'search_doctor?searchValue='+searchValue);
		$.ajax({
			  url: localStorage.apipath+'search_doctor?searchValue='+searchValue,
			  success: function(resStr) {
				if (resStr!=""){
					keywordStr=resStr.split("||");
					  var keywordS='';
					  for (i=0;i<keywordStr.length;i++){
						  keywordLi=keywordStr[i].split("|")
						  var docID=keywordLi[0].trim();
						  var docName=keywordLi[1];
						  var docAdd=keywordLi[2];
						  var docArea=keywordLi[3];
						  
						  keywordS+='<div  style="float:left; width:80%" onclick="docAdd(\''+docID+'\')" >';
						  keywordS+='<input type="hidden" id="doc'+docID+'" value="'+keywordStr[i]+'"/>'
						  keywordS+='<h3>'+docName+'</h3>';
						  keywordS+='<p >'+docAdd+'</p>';  
						  keywordS+='</div>';
						  keywordS+='<div style="clear:both; border-bottom:1px solid #8CAFD7; margin:2px;"></div>';
					  }
					  
					  
					$('#doctorList').empty();
					$('#doctorList').append(keywordS).trigger('create');
					 
					$(".error").text("");				
				}else{
					$(".error").text("Invalid keywords");
				}
			
			  }
			
		});
	}
}



<!-- op product-->
function searchMedicine(){
	// opitemSearch
	var searchValue = $("#opitemSearch").val();
	
	if(searchValue.length<3){
		$('#medicineList').html('<p>Type minimum 3 character <span style="color:red;"><sup>*</sup></span></p>');
	}
	else{
		//alert(apipath+'search_medicine?searchValue='+searchValue);
		$.ajax({
			  url: localStorage.apipath+'search_medicine?searchValue='+searchValue,
			  success: function(resStr) {
				if (resStr!=""){
					keywordStr=resStr.split("||");
					  var keywordS='';
					  for (i=0;i<keywordStr.length;i++){
						  keywordLi=keywordStr[i].split("|")
						  var pID=keywordLi[0].trim();
						  var medName=keywordLi[1];
						  keywordS+='<div  style="float:left; width:75%"  id="medId'+pID+'">'
						  keywordS+='<span onclick="medClickVal2(\''+pID+'\',\''+medName+'\')" style="margin-bottom:10px; " >'+medName+'</span>' 
						  keywordS+='</div>'
						  keywordS+='<div style="float:right; width:15%">'
						  keywordS+='<input onmouseout="medClickVal(\''+pID+'\',\''+medName+'\')" id="inpId'+pID+'" type="number" style="width:56px; height:35px;" />'
						  keywordS+='</div>'
						  keywordS+='<div style="clear:both; border-bottom:1px solid #8CAFD7; margin:2px;"></div>'
					  }
					  
					  
					$('#medicineList').empty();
					$('#medicineList').append(keywordS).trigger('create');
					 
					$(".error").text("");
					
				}else{
					$(".error").text("Invalid keywords");
				}
			
			  }
			
		});
	}
}


function removeCarItemOp(product_idGet){
	
	$("#cartOp_"+product_idGet).remove();
	var repl1='';
	
	iStr=localStorage.opProdID_Str.split('||');
	iLen=iStr.length
	for(i=0;i<iLen;i++){
		iStrD=iStr[i].split('|');
		if(iStrD[0]!=product_idGet){
			if (repl1==''){
				repl1=iStr[i]
			}else{
				repl1+='||'+iStr[i]
			}				
		}				
	}
	oprtunityVal = repl1;
	localStorage.opProdID_Str=repl1;
}


/***********  medClickVal *********/

function medClickVal(pid, name){
	var inpVal = $("#inpId"+pid).val();
	
	if(inpVal!=0 && inpVal!=undefined){
		$("#medId"+pid).addClass('bgc');
		var inpVal = $("#inpId"+pid).val();
		if(inpVal==''||inpVal==undefined){
			inpVal=0;
		}
		var pConcat = pid+'|'+name+'|'+inpVal;
		
		if(oprtunityVal.indexOf(pid)==-1){
				if (oprtunityVal==''){
					oprtunityVal=pConcat
				}else{
					oprtunityVal+='||'+pConcat
				}
		}
	}
}

function medClickVal2(pid, name){
	var inpVal = $("#inpId"+pid).val(1);
	$("#medId"+pid).addClass('bgc');
	var pConcat = pid+'|'+name+'|'+1;
	
	if(oprtunityVal.indexOf(pid)==-1){
			if (oprtunityVal==''){
				oprtunityVal=pConcat
			}else{
				oprtunityVal+='||'+pConcat
			}
	}
}

function medClick2(pid, name){
	$("#medId"+pid).addClass('bgc');
	//alert(localStorage.opProdID_Str);
	var inpVal = $("#inpId"+pid).val();
	if(inpVal==''||inpVal==undefined){
		inpVal=0;
	}
	var pConcat = pid+'|'+name+'|'+inpVal;
	var campaign_doc_str=localStorage.opProdID_Str
	
	if(campaign_doc_str.indexOf(pid)==-1){
			if (campaign_doc_str==''){
				campaign_doc_str=pConcat
			}else{
				campaign_doc_str+='||'+pConcat
			}
	}
	localStorage.opProdID_Str=campaign_doc_str;
	
}



function check_user() {	
	
	var cid=$("#cid").val().toUpperCase();
	cid=$.trim(cid);
	
	//Local
	var apipath_base_photo_dm ='http://a007.yeapps.com/ipi/dmpath_live_new/get_path?CID='+cid +'&HTTPPASS=e99business321cba'
	//online
    //var apipath_base_photo_dm ='http://e2.businesssolutionapps.com/welcome/dmpath_live_new/get_path?CID='+cid +'&HTTPPASS=e99business321cba'
    //alert (apipath_base_photo_dm)	
	
	var user_id=$("#user_id").val();
	var user_pass=$("#user_pass").val();
	
	user_id=$.trim(user_id);
		
	if (user_id=="" || user_id==undefined || user_pass=="" || user_pass==undefined){
		var url = "#login";      
		$.mobile.navigate(url);
		$("#error_login").html("Required User ID and Password");	
	}else{
			
		//alert(apipath_base_photo_dm);
		$("#loginButton").hide();
		$("#doctorButton").hide();
		$("#wait_image_login").show();
		$("#error_logintext").val(apipath_base_photo_dm);
		$.ajax(apipath_base_photo_dm,{
								// cid:localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
			type: 'POST',
			timeout: 30000,
			error: function(xhr) {
			$("#wait_image_login").hide();
			$("#loginButton").show();
			$("#error_login").html('Network Timeout. Please check your Internet connection..');
													},
			success:function(data, status,xhr){		
			if (status=='success'){
				localStorage.base_url='';
				//alert (data);
				var dtaStr=data.replace('<start>','').replace('<end>','')
				var resultArray = dtaStr.split('<fd>');		
					if(resultArray.length==4){
						var base_url=resultArray[0]; // base sync url 
						var photo_url=resultArray[1]; // application path http://a007.yeapps.com/ipi/
						var photo_submit_url=resultArray[2]; // image submission url
						var report_url=resultArray[3]; // report url
						localStorage.apipath =  photo_url + 'medSearch/';
						
						base_url = photo_url + 'syncmobile_rx/';
						//alert (base_url);
						
						
						//-------------
						if(base_url=='' || photo_url==''){	
							$("#wait_image_login").hide();
							$("#loginButton").show();
							//$("#doctorButton").show();
							$("#error_login").html('Base URL not available');	
						}
						else{
							localStorage.base_url='';
							localStorage.app_url='';
							localStorage.photo_submit_url='';
							
//							--------------------------
							//alert (base_url);
							localStorage.base_url=base_url;
							localStorage.photo_url=photo_url;
							localStorage.photo_submit_url=photo_submit_url;
							localStorage.report_url=report_url;
							//alert (localStorage.base_url);
							
							localStorage.cid=cid;
							localStorage.user_id=user_id;
							localStorage.user_pass=user_pass;   		
							localStorage.synced='NO';
							localStorage.picFlag=0;
							
							
							var currentDate = new Date();
							var day = currentDate.getDate();if(day.length==1)	{day="0" +day};
							var month = currentDate.getMonth() + 1;if(month.length==1)	{month="0" +month};
							var year = currentDate.getFullYear();
							var today=  year + "-" + month + "-" + day;
							localStorage.sync_date=today;
							
							//alert (localStorage.base_url+'check_user_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
							$("#error_logintext").val(localStorage.base_url+'check_user_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
	
							$.ajax(localStorage.base_url+'check_user_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
								// cid:localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_login").hide();
								$("#loginButton").show();
								$("#error_login").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#wait_image_login").hide();
											$("#loginButton").show();								
											$("#error_login").html(resultArray[1]);
										}
										else if (resultArray[0]=='SUCCESS'){
													//afterSync()													
													localStorage.synccode=resultArray[1];
													localStorage.synced='YES';
																									
		
													$.afui.loadContent("#pageHome",true,true,'right');													

										  }//else failed
	
								}// success
							});	//Second Hit		
						}												
					}					
				}
		}
     
    });			
}		
}//Function

function page_PrescriptionCapture() {	
	//localStorage.doctor_pr=1;
//	localStorage.doctor_plan_flag=0
//	localStorage.doctor_flag=1
	//alert (localStorage.doctor_pr)
	localStorage.doctor_flag=1;
	localStorage.doctor_plan_flag=0;
	localStorage.doctor_pr=1;
	localStorage.tourFlag=0
	localStorage.saved_data_submit=0;
	$.afui.loadContent("#page_PrescriptionCapture",true,true,'right');
}

function prescription_submit(){
	$("#error_prescription_submit").html("")		
	$("#wait_image_prescription").show();
	$("#btn_prescription_submit").hide();
	
	var doctorId=localStorage.docStr.split('|')[0]	
	var doctor_name=localStorage.docStr.split('|')[1]
	
	var areaId=localStorage.docStr.split('|')[3]
	
	if (doctor_name=='' ){		
		$("#error_prescription_submit").text("Required Doctor and Item"); //|| localStorage.opProdID_Str==""
		$("#wait_image_prescription").show();
		$("#btn_prescription_submit").hide();
	}else{
		
		var latitude=$("#lat").val();
		var longitude=$("#longitude").val();
		
		var picNo = localStorage.picNo
		var imageDiv="myImage"+picNo
		var imageText="prPhoto"+picNo
		var prescriptionPhoto=$("#"+imageText).val();
		
				
		var medicine_1=$("#medicine_1").val();
		var medicine_2=$("#medicine_2").val();
		var medicine_3=$("#medicine_3").val();
		var medicine_4=$("#medicine_4").val();
		var now = $.now();
		
		var imageName=localStorage.user_id+'_'+now.toString()+'.jpg';
				 
		//alert(localStorage.base_url+'prescription_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&synccode='+localStorage.synccode+'&areaId='+areaId+'&doctor_id='+encodeURIComponent(doctorId)+'&doctor_name='+encodeURIComponent(doctor_name)+'&latitude='+latitude+'&longitude='+longitude+'&pres_photo='+imageName+'&opProdID_Str='+localStorage.opProdID_Str+'&medicine_1='+medicine_1+'&medicine_2='+medicine_2+'&medicine_3='+medicine_3+'&medicine_4='+medicine_4)
		$("#errorShow").val(localStorage.base_url+'prescription_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&synccode='+localStorage.synccode+'&areaId='+areaId+'&doctor_id='+encodeURIComponent(doctorId)+'&doctor_name='+encodeURIComponent(doctor_name)+'&latitude='+latitude+'&longitude='+longitude+'&pres_photo='+imageName+'&opProdID_Str='+localStorage.opProdID_Str+'&medicine_1='+medicine_1+'&medicine_2='+medicine_2+'&medicine_3='+medicine_3+'&medicine_4='+medicine_4);
		 $.ajax(localStorage.base_url+'prescription_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&synccode='+localStorage.synccode+'&areaId='+areaId+'&doctor_id='+encodeURIComponent(doctorId)+'&doctor_name='+encodeURIComponent(doctor_name)+'&latitude='+latitude+'&longitude='+longitude+'&pres_photo='+imageName+'&opProdID_Str='+localStorage.opProdID_Str+'&medicine_1='+medicine_1+'&medicine_2='+medicine_2+'&medicine_3='+medicine_3+'&medicine_4='+medicine_4,{
				// cid:localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
				type: 'POST',
				timeout: 30000,
				error: function(xhr) {							
							var resultArray = data.split('<SYNCDATA>');
							$("#error_prescription_submit").html(resultArray[1]);
							$("#wait_image_prescription").hide();
							$("#btn_prescription_submit").show();							
				},
			success:function(data, status,xhr){					
			if (status!='success'){				
				$("#error_prescription_submit").html('Network timeout. Please ensure you have active internet connection.');
				$("#wait_image_prescription").hide();
				$("#btn_prescription_submit").show();
			}
			else{
				//alert (data)
				   var resultArray = data.split('<SYNCDATA>');	
					if (resultArray[0]=='FAILED'){						
						$("#error_prescription_submit").html(resultArray[1]);
						$("#wait_image_prescription").hide();
						$("#btn_prescription_submit").show();
					}else if (resultArray[0]=='SUCCESS'){
						
						localStorage.opProdID_Str='';
						localStorage.prProdID_Str='';
						oprtunityVal='';
						optionVal='';
													
						uploadPhoto(prescriptionPhoto, imageName);
						
						imageSource=''
						var image = document.getElementById(imageDiv);
						image.src = imageSource;
						imagePath = imageSource;
						$("#"+imageText).val(imagePath);
						if (picNo==1){localStorage.prPhoto1=''}
						if (picNo==2){localStorage.prPhoto2=''}
						if (picNo==3){localStorage.prPhoto3=''}
						if (picNo==4){localStorage.prPhoto4=''}
						if (picNo==5){localStorage.prPhoto5=''}
						if (picNo==6){localStorage.prPhoto6=''}
						if (picNo==7){localStorage.prPhoto7=''}
						if (picNo==8){localStorage.prPhoto8=''}
						if (picNo==9){localStorage.prPhoto9=''}
						if (picNo==10){localStorage.prPhoto10=''}


						$("#lat").val("");
						$("#long").val("");
						$("#medicine_1").val('');
						$("#medicine_2").val('');
						$("#medicine_3").val('');
						$("#medicine_4").val('');
						$("#medicine_5").val('');
						$("#wait_image_prescription").hide();
						$("#btn_prescription_submit").show();
						
						
						$('#medicineList').empty();
						$('#doctorList').empty();
						$("#docCart").empty();						
						$("#opCart").empty();
						$("#docSelect").empty();

						//--------------------------

						//$.afui.loadContent("#imageSinglePage",true,true,'right');
						
					}else{						
						$("#error_prescription_submit").html('Authentication error. Please register and sync to retry.');
						$("#wait_image_prescription").hide();
						$("#btn_prescription_submit").show();
						}
				}
			}
		});		
	
		$("#wait_image_prescription").hide();
		$("#btn_prescription_submit").show();				
//		}pic else
	}
//$.afui.loadContent("#page_confirm_visit_success",true,true,'right');
}



// -------------- If Not synced, Show login
function first_page(){
	if ((localStorage.synced!='YES')){
		$.afui.loadContent("#login",true,true,'right');	
	}
	else{	
		$.afui.loadContent("#pageHome",true,true,'right');
	}
}

function homePage() {
	var currentDate = new Date()
	var day = currentDate.getDate();if(parseInt(day)<9)	{day="0" + day};
	var month = currentDate.getMonth() + 1;if(parseInt(month)<9){month="0" +month};
	var year = currentDate.getFullYear()
	//alert (parseInt(day))
	var today=  year + "-" + month + "-" + day
	localStorage.today=today;						

	if (localStorage.synced=='YES'){	
		$.afui.loadContent("#pageHome",true,true,'right');
	}
	
}


function uploadPhoto(imageURI, imageName) {
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName;
    options.mimeType="image/jpeg";
	
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
	
    options.params = params;
	options.chunkedMode = false;
	
    var ft = new FileTransfer();
     ft.upload(imageURI, encodeURI(localStorage.photo_submit_url),winPr,failPr,options);
	 
}

function winPr(r) {
	$("#btn_prescription_submit").hide();	
	$.afui.loadContent("#page_PrescriptionCapture",true,true,'right');	
}

function failPr(error) {
	$("#btn_prescription_submit").show();
	$("#error_prescription_submit").text('Memory Error. Please take new picture and Submit');
}


function takePicture(){
navigator.camera.getPicture( cameraSuccess, cameraError, {
		quality: 90,
		targetWidth: 400,
       // destinationType: Camera.DestinationType.FILE_URI,
		destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true ,
        correctOrientation: true,
        saveToPhotoAlbum: true
    }); 
	
}

function cameraSuccess(uri){  
	var picNo=parseInt(localStorage.picFlag)+1 
	var imageDiv="myImage"+picNo
	var imageText="prPhoto"+picNo
	localStorage.picFlag=picNo
	var image = document.getElementById(imageDiv);
	image.src = uri;
	imagePath = uri;
	if (picNo==1){
		localStorage.prPhoto1=uri
	}
	if (picNo==2){
		localStorage.prPhoto2=uri
	}
	if (picNo==3){
		localStorage.prPhoto3=uri
	}
	if (picNo==4){
		localStorage.prPhoto4=uri
	}
	if (picNo==5){
		localStorage.prPhoto5=uri
	}
	if (picNo==6){
		localStorage.prPhoto6=uri
	}
	if (picNo==7){
		localStorage.prPhoto7=uri
	}
	if (picNo==8){
		localStorage.prPhoto8=uri
	}
	if (picNo==9){
		localStorage.prPhoto9=uri
	}
	if (picNo==10){
		localStorage.prPhoto10=uri
	}
	if (picNo==11){
		localStorage.prPhoto11=uri
	}
	if (picNo==12){
		localStorage.prPhoto12=uri
	}
	if (picNo==13){
		localStorage.prPhoto13=uri
	}
	if (picNo==14){
		localStorage.prPhoto14=uri
	}
	if (picNo==15){
		localStorage.prPhoto15=uri
	}
	if (picNo==16){
		localStorage.prPhoto16=uri
	}
	if (picNo==17){
		localStorage.prPhoto17=uri
	}
	if (picNo==18){
		localStorage.prPhoto18=uri
	}
	if (picNo==19){
		localStorage.prPhoto19=uri
	}
	if (picNo==20){
		localStorage.prPhoto20=uri
	}
	if (picNo==21){
		localStorage.prPhoto21=uri
	}
	if (picNo==22){
		localStorage.prPhoto22=uri
	}
	if (picNo==23){
		localStorage.prPhoto23=uri
	}
	if (picNo==24){
		localStorage.prPhoto24=uri
	}
	if (picNo==25){
		localStorage.prPhoto25=uri
	}
	if (picNo==26){
		localStorage.prPhoto26=uri
	}
	if (picNo==27){
		localStorage.prPhoto27=uri
	}
	if (picNo==28){
		localStorage.prPhoto28=uri
	}
	if (picNo==29){
		localStorage.prPhoto29=uri
	}
	if (picNo==30){
		localStorage.prPhoto30=uri
	}

		
	takePicture();
	
    $("#"+imageText).val(imagePath);    
}

function cameraError(message){
	var a=''
    //alert("Canceled!"); 
	
}


$('#ThumbnailTest_buttonTakePhotosNow').click(function(){
    takePicture();
});


function exit() {	
	navigator.app.exitApp();
}





















//------------------------------------------------------------------------------------------------------------------
