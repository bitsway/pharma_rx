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
localStorage.ff_present=0
localStorage.associated_call=0

$(document).ready(function(){
        $.afui.launch();
		
		localStorage.ff_present=0
		localStorage.associated_call=0		
		
		if (localStorage.synced=='YES'){
			$("#cid").val(localStorage.cid);
			$("#user_id").val(localStorage.user_id);
			$("#user_pass").val(localStorage.user_pass);			
			$.afui.loadContent("#pageHome",true,true,'right');			
		}
		
		
		
		// presscription page
		var imgList='';
		
		//imgList='<div style="width:30%; position:relative; float:left; border:1px solid #b3e4ff; border-radius:5px; height:120px; margin:1%; overflow:hidden; box-shadow:3px 3px 3px #b3e4ff;" ><img src="roxy.jpg" width="100%" style="border-radius: 5px; height:auto;" alt="&nbsp;&nbsp;&nbsp;Image &nbsp;'+100+'" id="myImage'+100+'" onClick="gotoPic('+100+')"><input name="prPhoto'+100+'" id="prPhoto'+100+'" type="hidden"/><div style="float:right; position: absolute; top:0; right: 0; width: 20px;height: 20px; "><a href="#" style="font-size:20px; text-decoration:none; color:#00a6ff;" class="icon remove" onClick="cancelPicture('+100+')" ></a></div></div>';
		
		for(i=1;i<=60;i++){					
			imgList+='<div style="width:30%; position:relative; float:left; border:1px solid #b3e4ff; border-radius:5px; height:120px; margin:1%; overflow:hidden; box-shadow:3px 3px 3px #b3e4ff;" ><img width="100%" style="border-radius: 5px; height:auto;" alt="&nbsp;&nbsp;&nbsp;Image &nbsp;'+i+'" id="myImage'+i+'" onClick="gotoPic('+i+')"><input name="prPhoto'+i+'" id="prPhoto'+i+'" type="hidden"/><div style="float:right; position: absolute; top:0; right: 0; width: 20px;height: 20px; "><a href="#" style="font-size:20px; text-decoration:none; color:#00a6ff;" class="icon remove" onClick="cancelPicture('+i+')" ></a></div></div>';//<img src="cancel.png" width="20" height="20" alt="X" id="myImage1"  onClick="cancelPicture('+i+')"></span>
		}
		
		$("#imgList").append(imgList);
		
		//single zoom in out
		var $section = $('section').first();
		$section.find('.panzoom').panzoom({
			$zoomIn: $section.find(".zoom-in"),
			$zoomOut: $section.find(".zoom-out"),
			$zoomRange: $section.find(".zoom-range"),
			$reset: $section.find(".reset")
		});
		
		
		$("#btn_search_med").show();
		$("#wait_image_med").hide();
		$("#opitemSearch").val('');
		
		$("#btn_search_doc").show();
		$("#wait_image_doc").hide();
		$("#drSearch").val('');
		
		$("#wait_image_prescription").hide();
		
				
		$("#wait_image_login").hide();
		$("#loginButton").show();
		
		getLocationInfo_ready();
		
	//===============SetPR=================
	for (j=1; j <= 30; j++){
		var picNo=parseInt(j); 
		var imageDiv="myImage"+picNo
		var imageText="prPhoto"+picNo
		var imageSource=''
				
		if (picNo==1){imageSource=localStorage.prPhoto1}
		if (picNo==2){imageSource=localStorage.prPhoto2}
		if (picNo==3){imageSource=localStorage.prPhoto3}
		if (picNo==4){imageSource=localStorage.prPhoto4}
		if (picNo==5){imageSource=localStorage.prPhoto5}
		if (picNo==6){imageSource=localStorage.prPhoto6}
		if (picNo==7){imageSource=localStorage.prPhoto7}
		if (picNo==8){imageSource=localStorage.prPhoto8}
		if (picNo==9){imageSource=localStorage.prPhoto9}
		if (picNo==10){imageSource=localStorage.prPhoto10}
		if (picNo==11){imageSource=localStorage.prPhoto11}
		if (picNo==12){imageSource=localStorage.prPhoto12}
		if (picNo==13){imageSource=localStorage.prPhoto13}
		if (picNo==14){imageSource=localStorage.prPhoto14}
		if (picNo==15){imageSource=localStorage.prPhoto15}
		if (picNo==16){imageSource=localStorage.prPhoto16}
		if (picNo==17){imageSource=localStorage.prPhoto17}
		if (picNo==18){imageSource=localStorage.prPhoto18}
		if (picNo==19){imageSource=localStorage.prPhoto19}
		if (picNo==20){imageSource=localStorage.prPhoto20}
		if (picNo==21){imageSource=localStorage.prPhoto21}
		if (picNo==22){imageSource=localStorage.prPhoto22}
		if (picNo==23){imageSource=localStorage.prPhoto23}
		if (picNo==24){imageSource=localStorage.prPhoto24}
		if (picNo==25){imageSource=localStorage.prPhoto25}
		if (picNo==26){imageSource=localStorage.prPhoto26}
		if (picNo==27){imageSource=localStorage.prPhoto27}
		if (picNo==28){imageSource=localStorage.prPhoto28}
		if (picNo==29){imageSource=localStorage.prPhoto29}
        if (picNo == 30) { imageSource = localStorage.prPhoto30 }
        if (picNo == 31) { imageSource = localStorage.prPhoto31 }
        if (picNo == 32) { imageSource = localStorage.prPhoto32 }
        if (picNo == 33) { imageSource = localStorage.prPhoto33 }
        if (picNo == 34) { imageSource = localStorage.prPhoto34 }
        if (picNo == 35) { imageSource = localStorage.prPhoto35 }
        if (picNo == 36) { imageSource = localStorage.prPhoto36 }
        if (picNo == 37) { imageSource = localStorage.prPhoto37 }
        if (picNo == 38) { imageSource = localStorage.prPhoto38 }
        if (picNo == 39) { imageSource = localStorage.prPhoto39 }
        if (picNo == 40) { imageSource = localStorage.prPhoto40 }
        if (picNo == 41) { imageSource = localStorage.prPhoto41 }
        if (picNo == 42) { imageSource = localStorage.prPhoto42 }
        if (picNo == 43) { imageSource = localStorage.prPhoto43 }
        if (picNo == 44) { imageSource = localStorage.prPhoto44 }
        if (picNo == 45) { imageSource = localStorage.prPhoto45 }
        if (picNo == 46) { imageSource = localStorage.prPhoto46 }
        if (picNo == 47) { imageSource = localStorage.prPhoto47 }
        if (picNo == 48) { imageSource = localStorage.prPhoto48 }
        if (picNo == 49) { imageSource = localStorage.prPhoto49 }
        if (picNo == 50) { imageSource = localStorage.prPhoto50 }
        if (picNo == 51) { imageSource = localStorage.prPhoto51 }
        if (picNo == 52) { imageSource = localStorage.prPhoto52 }
        if (picNo == 53) { imageSource = localStorage.prPhoto53 }
        if (picNo == 54) { imageSource = localStorage.prPhoto54 }
        if (picNo == 55) { imageSource = localStorage.prPhoto55 }
        if (picNo == 56) { imageSource = localStorage.prPhoto56 }
        if (picNo == 57) { imageSource = localStorage.prPhoto57 }
        if (picNo == 58) { imageSource = localStorage.prPhoto58 }
        if (picNo == 59) { imageSource = localStorage.prPhoto59 }
        if (picNo == 60) { imageSource = localStorage.prPhoto60 } 
		                                                   
		//alert (imageSource)
		var image = document.getElementById(imageDiv);
		image.src = imageSource;
		imagePath = imageSource;
		$("#"+imageText).val(imagePath);
		
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
			
			if (localStorage.opProdID_Str!=""){				
				op_cart_list='<table style="width:100%;">';
				op_cart_list+='<tr><td colspan="3" style="border-bottom:0px;"><h2 style="border-bottom:1px solid #d9d9d9;background-color:#ccedff; padding-left:5px; margin:0px;">Medicine</h2></td></tr>';			
				op_cart_list+='<tr style="background-color:#99dbff; height:20px;"><td style="width:85%; padding-left:5px;">Name</td><td style="width:10%; text-align:center;"></td><td style="width:3px;"></td></tr>';				
				for ( i=0; i < campaignListLength; i++){
					
					var pID=campaignList[i];
					var pIdSpilt = pID.split('|');
					
					for(n=0; n < pIdSpilt.length; n++){
						medId = pIdSpilt[0];
						medName = pIdSpilt[1];
						medVal = pIdSpilt[2];
					}
					
					if(medId!=''){						
						op_cart_list+='<tr style="background-color:#ccedff; height:20px;" id="cartOp_'+medId+'"><td style="padding-left:5px;">'+medName+'<input id="inpId'+medId+'" type="hidden" value="'+medVal+'"/></td><td style="text-align:center;" ></td><td style="text-align:center;">&nbsp;<a onClick="removeCarItemOp(\''+medId+'\');" style="font-size:15px; text-decoration:none; color:#cc3300" class="icon remove"></a></td></tr>'; //<img  src="cancel.png" width="20" height="20" alt="X" >
					}				
				}
				op_cart_list+='</table>';
					
				//alert (op_cart_list)
				$('#opCart').empty();
				$('#opCart').html(op_cart_list);
			}
		
		});		
    });

$.afui.animateHeader(true);

//-   ----- popup
function showSearchDoc() {
	
    $.afui.popup({
        title: "Search<hr/>",
        message: "Region :<div id='doc_region_cmb' ></div><div id='doc_area_cmb' ></div><div id='doc_tr_cmb' ></div><div id='doc_cat_cmb' ></div>",
        cancelText: "Cancel",
        cancelCallback: function () {},
        doneText: "Search",
        doneCallback: function () {
			localStorage.doc_region=$('#doc_region').val();
			localStorage.doc_area=$('#doc_area').val();
			localStorage.doc_territory=$('#doc_territory').val();
			localStorage.doc_category=$('#doc_category').val();
			
			if (localStorage.doc_area=='undefined'){
				localStorage.doc_area='';
			}
						
			if (localStorage.doc_category=='undefined'){
				localStorage.doc_category='';
			}
			if (localStorage.doc_territory=='undefined'){
				localStorage.doc_territory='';
				
				localStorage.doc_region='';
				localStorage.doc_area='';
				localStorage.doc_territory='';
				localStorage.searchSelect='';
				localStorage.doc_cart_list='';
			  	localStorage.docSelect='';
				
				$('#searchSelect').empty();
				$("#error_doctorList").text("Required Territory.").removeClass('success').addClass('error');				
			}else{			
				localStorage.searchSelect='<div  style="background-color:#e6fff9; border-bottom:1px solid #00cc99; margin:5px; border-radius:5px; padding:5px;" ><h3 >Region &nbsp;&nbsp;&nbsp;:<span style="font-size:11px;">'+localStorage.doc_region+'</span></h3><h3 >Area &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="font-size:11px;">'+localStorage.doc_area+'</span></h3><h3 >Territory &nbsp;:<span style="font-size:11px;">'+localStorage.doc_territory+'</span></h3><h3 >Category &nbsp;:<span style="font-size:11px;">'+localStorage.doc_category+'</span></h3></div>'
				
				$('#searchSelect').empty();
				$('#docCart').empty();
				$('#searchSelect').append(localStorage.searchSelect);
				searchDoc()
			}
			
        },
        cancelOnly: false		
    });
	
	//--------------- region combo
	var regionCmbo='';
	var regionArr=localStorage.regionStr.split('<rd>');
	var regionArrLen=regionArr.length;	
	regionCmbo+='<select id="doc_region" onChange="getArea()">';
	regionCmbo+='<option value="">Select Region</option>';
	for (i=0;i<regionArrLen;i++){
		var regionS=regionArr[i].split('<fd>');																																								
		regionCmbo+='<option value="'+regionS[0]+'|'+regionS[1]+'">'+regionS[1]+'</option>';																												
		}
	regionCmbo+='</select>'	
	$('#doc_region_cmb').html(regionCmbo);

	//--------------- doctor Category combo
	var docCatCmbo='';
	var docCatArr=localStorage.docCategoryStr.split('<fd>');
	var docCatArrLen=docCatArr.length;
	docCatCmbo+='<div>Category :</div>';	
	docCatCmbo+='<select id="doc_category">';
	docCatCmbo+='<option value="">Select Category</option>';
	for (i=0;i<docCatArrLen;i++){																																							
		docCatCmbo+='<option value="'+docCatArr[i]+'">'+docCatArr[i]+'</option>';																												
		}
	docCatCmbo+='</select>'	
	$('#doc_cat_cmb').html(docCatCmbo);	
	
}

function getArea(){
	var doc_region=$('#doc_region').val().split('|');
	
	var areaCmbo='';
	var areaArr=localStorage.areaStr.split('<rd>');
	var areaArrLen=areaArr.length;
	areaCmbo+='<div>Area :</div>';	
	areaCmbo+='<select id="doc_area" onChange="getTerritory()">';
	areaCmbo+='<option value="">Select Area</option>';
	for (i=0;i<areaArrLen;i++){
		var areaS=areaArr[i].split('<fd>');																																								
			if (areaS[0]==doc_region[0]){
				areaCmbo+='<option value="'+areaS[1]+'|'+areaS[2]+'">'+areaS[2]+'</option>';		
			}																													
		}
	areaCmbo+='</select>'	
	$('#doc_area_cmb').html(areaCmbo);
	$('#doc_tr_cmb').empty();	
	}

function getTerritory(){
	var doc_region=$('#doc_region').val().split('|');
	var doc_area=$('#doc_area').val().split('|');
	
	var trCmbo='';
	var trArr=localStorage.territoryStr.split('<rd>');
	var trArrLen=trArr.length;	
	trCmbo+='<div>Territory :</div>';
	trCmbo+='<select id="doc_territory" >';
	for (i=0;i<trArrLen;i++){
		var trS=trArr[i].split('<fd>');																																								
			if (trS[0]==doc_region[0] && trS[1]==doc_area[0]){
				trCmbo+='<option value="'+trS[2]+'|'+trS[3]+'">'+trS[3]+'</option>';		
			}																													
		}
	trCmbo+='</select>'	
	$('#doc_tr_cmb').html(trCmbo);	
	}

function addNewDoc() {
	$("#error_doctorList").text("").removeClass('success').removeClass('error');
    $.afui.popup({
        title: "New Doctor <hr/>",
        message: "Region<sup style='color:#F00;'>*</sup>: <div id='doc_add_region_cmb' ></div><div id='doc_add_area_cmb' ></div><div id='doc_add_tr_cmb' ></div><div>Name<sup style='color:#F00;'>*</sup>: <input type='text' id='doc_name_new' ></div><div>Address<sup style='color:#F00;'>*</sup>: <textarea col='50' rows='3' id='doc_address_new'></textarea></div>",
        cancelText: "Cancel",
        cancelCallback: function () {},
        doneText: "Save",
        doneCallback: function () {		
			var doc_tr_new=$('#doc_add_territory').val();
			
			if (doc_tr_new==undefined){
				$("#error_doctorList").text("Required Territory for New Doctor Add.").removeClass('success').addClass('error');
			}else{
				var doc_name_new=$('#doc_name_new').val();
				var doc_address_new=$('#doc_address_new').val();
				
				if (doc_name_new=='' || doc_address_new==''){
					$("#error_doctorList").text("Required Name and address For New Doctor Add.").removeClass('success').addClass('error');
				}else{
					localStorage.doc_region=$('#doc_add_region').val();
					localStorage.doc_area=$('#doc_add_area').val();
					localStorage.doc_territory=$('#doc_add_territory').val();
					
					if (localStorage.doc_area=='undefined'){
						localStorage.doc_area='';
					}
					
					if (localStorage.doc_territory=='undefined'){
						localStorage.doc_territory='';
					}
								
					localStorage.searchSelect='<div  style="background-color:#e6fff9; border-bottom:1px solid #00cc99; margin:5px; border-radius:5px; padding:5px;" ><h3 >Region &nbsp;&nbsp;&nbsp;:<span style="font-size:11px;">'+localStorage.doc_region+'</span></h3><h3 >Area &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<span style="font-size:11px;">'+localStorage.doc_area+'</span></h3><h3 >Territory &nbsp;:<span style="font-size:11px;">'+localStorage.doc_territory+'</span></h3></div>'
					
					$('#searchSelect').empty();
					$('#searchSelect').append(localStorage.searchSelect);
						
					
				
					doc_tr_new=localStorage.doc_territory.split('|');				
					var docStr='0|'+doc_name_new+'|'+doc_address_new+'|'+doc_tr_new[0];				
					localStorage.docStr=docStr
					
					
					doc_cart_list='<div style="background-color:#ccedff; border-bottom:1px solid #d9d9d9; margin:5px; padding:5px; border-radius:2px;">';
					doc_cart_list+='<h2 style="border-bottom:1px solid #d9d9d9;">Doctor</h2>';
					doc_cart_list+='<h3 > '+doc_name_new+'</h3>';
					doc_cart_list+='<p style="margin:0px; font-size:11px; line-height:normal;">'+doc_address_new+'</p>';  
					doc_cart_list+='</div>';
					doc_cart_list+='<div style="clear:both;"></div><br/>';
					
					localStorage.doc_cart_list=doc_cart_list
					
					$('#docCart').empty();
					$('#docCart').html(localStorage.doc_cart_list);
					$('#docSelect').empty();
					$('#docSelect').append('<div  style="background-color:#e6fff9; border-bottom:1px solid #00cc99; margin:5px; border-radius:5px; padding:5px;" ><h3 >'+doc_name_new+'</h3><p style="margin:0px; font-size:11px; line-height:normal;" >'+doc_address_new+'</p></div>');
				}
			}
		},
        cancelOnly: false
    });
	
	var regionCmbo='';
	var regionArr=localStorage.regionStr.split('<rd>');
	var regionArrLen=regionArr.length;	
	regionCmbo+='<select id="doc_add_region" onChange="getDocAddArea()">';
	regionCmbo+='<option value="">Select Region</option>';
	for (i=0;i<regionArrLen;i++){
		var regionS=regionArr[i].split('<fd>');																																								
		regionCmbo+='<option value="'+regionS[0]+'|'+regionS[1]+'">'+regionS[1]+'</option>';																												
		}
	regionCmbo+='</select>'	
	$('#doc_add_region_cmb').html(regionCmbo);
	
}


function getDocAddArea(){
	var doc_region=$('#doc_add_region').val().split('|');
	
	var areaCmbo='';
	var areaArr=localStorage.areaStr.split('<rd>');
	var areaArrLen=areaArr.length;	 
	areaCmbo+='Area<sup style="color:#F00;">*</sup>:';
	areaCmbo+='<select id="doc_add_area" onChange="getDocAddTerritory()">';
	areaCmbo+='<option value="">Select Area</option>';
	for (i=0;i<areaArrLen;i++){
		var areaS=areaArr[i].split('<fd>');																																								
			if (areaS[0]==doc_region[0]){
				areaCmbo+='<option value="'+areaS[1]+'|'+areaS[2]+'">'+areaS[2]+'</option>';		
			}																													
		}
	areaCmbo+='</select>'	
	$('#doc_add_area_cmb').html(areaCmbo);
	$('#doc_add_tr_cmb').empty();	
	}

function getDocAddTerritory(){
	var doc_region=$('#doc_add_region').val().split('|');
	var doc_area=$('#doc_add_area').val().split('|');
	
	var trCmbo='';
	var trArr=localStorage.territoryStr.split('<rd>');
	var trArrLen=trArr.length;
	trCmbo+='Territory<sup style="color:#F00;">*</sup>:';	
	trCmbo+='<select id="doc_add_territory" >';
	for (i=0;i<trArrLen;i++){
		var trS=trArr[i].split('<fd>');																																								
			if (trS[0]==doc_region[0] && trS[1]==doc_area[0]){
				trCmbo+='<option value="'+trS[2]+'|'+trS[3]+'">'+trS[3]+'</option>';		
			}																													
		}
	trCmbo+='</select>'	
	$('#doc_add_tr_cmb').html(trCmbo);	
	}



//----------/popup



//==Reload Location
function getLocationInfo_ready() { //location
	$("#wait_image_visit_submit").show();
	$("#visit_location").hide();
	
	$("#checkLocation").html(''); 
	
	
	$("#wait_image_visit_submit_doc").hide();	
	$("#checkLocation_doc").html('');
	
	var options = { enableHighAccuracy: true, timeout:30000};
	navigator.geolocation.getCurrentPosition(onSuccess_ready, onError_ready, options);
}

// onSuccess Geolocationshom
function onSuccess_ready(position) {
	$("#lat").val(position.coords.latitude);
	$("#longitude").val(position.coords.longitude);
	
	localStorage.latitude=position.coords.latitude
	localStorage.longitude=position.coords.longitude	
	
		
	$("#checkLocation").html('Location Confirmed'); 		
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#visit_location").hide();
	
	$("#checkLocation_doc").html('Location Confirmed');
		
} 
function onError_ready(error) {	
	$("#lat").val(0);
	$("#longitude").val(0);	
		
	$("#checkLocation").html(''); 
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#visit_location").hide();
		
    $("#checkLocation_doc").html('');
	$("#wait_image_visit_submit_doc").hide();
	alert ("Please on your GPS")
	
}






function page_login() {
	$("#error_login").text("").removeClass('success').removeClass('error');
	$("#wait_image_login").hide();		
	$("#loginButton").show();	
	$.afui.loadContent("#login",true,true,'right');
}

function clearPicture(){
	localStorage.picFlag=0;	
	/*$("#imgList").empty();
	
	var imgList="";
	for(i=1;i<=30;i++){					
		imgList+='<div style="width:30%; position:relative; float:left; border:1px solid #b3e4ff; border-radius:5px; height:120px; margin:1%; overflow:hidden; box-shadow:3px 3px 3px #b3e4ff;" ><img width="100%" style="border-radius: 5px; height:auto;" alt="&nbsp;&nbsp;&nbsp;Image &nbsp;'+i+'" id="myImage'+i+'" onClick="gotoPic('+i+');"><input name="prPhoto'+i+'" id="prPhoto'+i+'" type="hidden"/><div style="float:right; position: absolute; top:0; right: 0; width: 20px;height: 20px; "><a href="#" style="font-size:20px; text-decoration:none; color:#00a6ff;" class="icon remove" onClick="cancelPicture('+i+')" ></a></div></div>';//<img src="cancel.png" width="20" height="20" alt="X" id="myImage1"  onClick="cancelPicture('+i+')"></span>
	}
	$("#imgList").append(imgList); */

}

function gotoPic(picNo) {
	$("#error_prescription_submit").text("").removeClass('error').removeClass('success');
	$("#btn_prescription_submit").show();
	$("#wait_image_prescription").hide();
	$(".panzoom").removeClass('panzoom').addClass('panzoom');
	
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
		
		
		localStorage.opProdID_Str=''
		
	}
	localStorage.picNo=picNo
	
	var prPic=$("#"+imageText).val();
	
	var image_show = document.getElementById('myImagePrescription_show');
	image_show.src = prPic;
	$("#myImagePrescription_show").val(prPic)
	
	if (localStorage.docStr!=""){			
		  keywordLi=localStorage.docStr.split("|")		  
		  var docID=keywordLi[0].trim();
		  var docName=keywordLi[1];
		  var docAdd=keywordLi[2];
		  var docArea=keywordLi[3];
		  		  
		  doc_cart_list='<div style="background-color:#ccedff; border-bottom:1px solid #d9d9d9; margin:5px; padding:5px; border-radius:2px;">';
		  doc_cart_list+='<input type="hidden" id="doc'+docID+'" value="'+localStorage.docStr+'"/>'
		  doc_cart_list+='<h2 style="border-bottom:1px solid #d9d9d9;">Doctor</h2>';
		  doc_cart_list+='<h3 > '+docName+'</h3>';
		  doc_cart_list+='<p style="margin:0px; font-size:11px; line-height:normal;">'+docAdd+'</p>';  
		  doc_cart_list+='</div>';
		  doc_cart_list+='<div style="clear:both;"></div><br/>';
		
		  localStorage.doc_cart_list=doc_cart_list;
		  
		  localStorage.docSelect='<div  style="background-color:#e6fff9; border-bottom:1px solid #00cc99; margin:5px; border-radius:5px; padding:5px;" ><h3 >'+docName+'</h3><p style="margin:0px; font-size:11px; line-height:normal;" >'+docAdd+'</p></div>';
		  			
		  $('#docCart').empty();
		  $('#docCart').html(localStorage.doc_cart_list);
		  $('#docSelect').empty();
		  $('#docSelect').html(localStorage.docSelect);
		  
		  
			
		}
		
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
    if (picNo == 30) { localStorage.prPhoto30 = '' }
    if (picNo == 31) { localStorage.prPhoto31 = '' }
    if (picNo == 32) { localStorage.prPhoto32 = '' }
    if (picNo == 33) { localStorage.prPhoto33 = '' }
    if (picNo == 34) { localStorage.prPhoto34 = '' }
    if (picNo == 35) { localStorage.prPhoto35 = '' }
    if (picNo == 36) { localStorage.prPhoto36 = '' }
    if (picNo == 37) { localStorage.prPhoto37 = '' }
    if (picNo == 38) { localStorage.prPhoto38 = '' }
    if (picNo == 39) { localStorage.prPhoto39 = '' }
    if (picNo == 40) { localStorage.prPhoto40 = '' }
    if (picNo == 41) { localStorage.prPhoto41 = '' }
    if (picNo == 42) { localStorage.prPhoto42 = '' }
    if (picNo == 43) { localStorage.prPhoto43 = '' }
    if (picNo == 44) { localStorage.prPhoto44 = '' }
    if (picNo == 45) { localStorage.prPhoto45 = '' }
    if (picNo == 46) { localStorage.prPhoto46 = '' }
    if (picNo == 47) { localStorage.prPhoto47 = '' }
    if (picNo == 48) { localStorage.prPhoto48 = '' }
    if (picNo == 49) { localStorage.prPhoto49 = '' }
    if (picNo == 50) { localStorage.prPhoto50 = '' }
    if (picNo == 51) { localStorage.prPhoto51 = '' }
    if (picNo == 52) { localStorage.prPhoto52 = '' }
    if (picNo == 53) { localStorage.prPhoto53 = '' }
    if (picNo == 54) { localStorage.prPhoto54 = '' }
    if (picNo == 55) { localStorage.prPhoto55 = '' }
    if (picNo == 56) { localStorage.prPhoto56 = '' }
    if (picNo == 57) { localStorage.prPhoto57 = '' }
    if (picNo == 58) { localStorage.prPhoto58 = '' }
    if (picNo == 59) { localStorage.prPhoto59 = '' }
    if (picNo == 60) { localStorage.prPhoto60 = '' }
	
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
			  
			  
			  doc_cart_list='<div style="background-color:#ccedff; border-bottom:1px solid #d9d9d9; margin:5px; padding:5px; border-radius:2px;">';
			  doc_cart_list+='<input type="hidden" id="doc'+docID+'" value="'+localStorage.docStr+'"/>'
			  doc_cart_list+='<h2 style="border-bottom:1px solid #d9d9d9;">Doctor</h2>';
			  doc_cart_list+='<h3 > '+docName+'</h3>';
			  doc_cart_list+='<p style="margin:0px; font-size:11px; line-height:normal;">'+docAdd+'</p>';  
			  doc_cart_list+='</div>';
			  doc_cart_list+='<div style="clear:both;"></div><br/>';
			  
			  localStorage.doc_cart_list=doc_cart_list
			  
			  localStorage.docSelect='<div  style="background-color:#e6fff9; border-bottom:1px solid #00cc99; margin:5px; border-radius:5px; padding:5px;" ><h3 >'+docName+'</h3><p style="margin:0px; font-size:11px; line-height:normal;" >'+docAdd+'</p></div>';
		  								
			  $('#docCart').empty();
			  $('#docCart').html(localStorage.doc_cart_list);
			  $('#docSelect').empty();			  		  
		      $('#docSelect').html(localStorage.docSelect);
			  			  	
			}		
		}

<!-- doctor-->
function docList(){		
	$.afui.drawer.show('#doctor_add','left','push');
	searchDoc()	
	}
	
function searchDoc(){
	$("#error_doctorList").text("").removeClass('success').removeClass('error');
	// opitemSearch
	$('#docSelect').empty();
	$('#doctorList').empty(); 
	//$("#btn_search_doc").hide();
	$("#wait_image_doc").show();
	$('#searchSelect').empty();
	$('#docSelect').html(localStorage.docSelect);
	$('#searchSelect').html(localStorage.searchSelect);
	
	var docRegion=localStorage.doc_region.split('|');
	var docArea=localStorage.doc_area.split('|');
	var docTr=localStorage.doc_territory.split('|');
	var docCat=localStorage.doc_category;
	var searchValue = $("#drSearch").val();
	
		
		//alert(localStorage.apipath+'search_doctor?region='+docRegion[0]+'&area='+docArea[0]+'&tr='+docTr[0]+'&category='+docCat+'&searchValue='+searchValue);
		$.ajax({
			  url: localStorage.apipath+'search_doctor?region='+docRegion[0]+'&area='+docArea[0]+'&tr='+docTr[0]+'&category='+docCat+'&searchValue='+searchValue,
			  success: function(resStr) {
				if (resStr!=""){
					keywordStr=resStr.split("||");
					  var keywordS='<br/>';
					  for (i=0;i<keywordStr.length;i++){
						  keywordLi=keywordStr[i].split("|")
						  var docID=keywordLi[0].trim();
						  var docName=keywordLi[1];
						  var docAdd=keywordLi[2];
						  var docArea=keywordLi[3];						  
						  						  
						  keywordS+='<div  style="background-color:#ccedff; border-bottom:1px solid #d9d9d9; margin-bottom:2px; border-radius:5px; padding:5px; " onclick="docAdd(\''+docID+'\')" >';						  				  
						  keywordS+='<input type="hidden" id="doc'+docID+'" value="'+keywordStr[i]+'"/>'
						  keywordS+='<h3 >'+docName+'</h3>';
						  keywordS+='<p style="margin:0px; font-size:11px; line-height:normal; " >'+docAdd+'</p>';  
						  keywordS+='</div>';
						  keywordS+='<div style="clear:both;"></div>';	
					  }					  
					  
					$('#doctorList').empty();
					$('#doctorList').append(keywordS).trigger('create');
					
					
					$("#btn_search_doc").show();
					$("#wait_image_doc").hide();		
				}else{					
					$("#error_doctorList").text("No Dr. Found.").removeClass('success').addClass('error');
					$("#wait_image_doc").hide();
					
				}
			
			  }
			
		});

}

function clearDoc(){
	//$('#docSelect').empty();
	$(".error").text("").removeClass('success').removeClass('error');	
	$('#doctorList').empty(); 
	$("#btn_search_doc").show();
	$("#wait_image_doc").hide();	
	$("#drSearch").val('');	
	$('#docSelect').empty();		
	searchDoc()
}


<!-- op product-->
function searchMedicine(){
	$(".error").text("").removeClass('success').removeClass('error');
	// opitemSearch
	$('#medicineList').empty(); 
	$("#btn_search_med").hide();
	$("#wait_image_med").show();
	
	var searchValue = $("#opitemSearch").val();
	
	if(searchValue.length<3){
		$("#wait_image_med").hide();
		$('#error_medicineList').text('Type minimum 3 character').removeClass('success').addClass('error');
		$("#btn_search_med").show();
	}
	else{
		//alert(localStorage.apipath+'search_medicine?searchValue='+searchValue);
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
						  
						 
						  keywordS+='<div  style="background-color:#ccedff; border-bottom:1px solid #d9d9d9; margin-bottom:2px; border-radius:2px; padding:5px;">';						  					  
						  keywordS+='<div  style="float:left; width:80%;"   id="medId'+pID+'">';
						  keywordS+='<span onclick="medClickVal2(\''+pID+'\',\''+medName+'\')"  >'+medName+'</span>' 
						  keywordS+='</div>'
						  keywordS+='<div style="float:left; width:15%;">'
						  keywordS+='<input onmouseout="medClickVal(\''+pID+'\',\''+medName+'\')" id="inpId'+pID+'" type="hidden" style="width:50px; height:30px; margin:0px; padding:0px;" />'
						  keywordS+='</div>'
						  keywordS+='<div style="clear:both;"></div></div>'
					  }
					  
					  
					$('#medicineList').empty();
					$('#medicineList').append(keywordS).trigger('create');
					 
					$("#error_medicineList").text("");
					$("#btn_search_med").show();
					$("#wait_image_med").hide();
					
				}else{
					$("#error_medicineList").text("Medicine Not Found..").removeClass('success').addClass('error');
				}
			
			  }
			
		});
	}
}

function clearMedicine(){
	$(".error").text("").removeClass('success').removeClass('error');	
	$('#medicineList').empty(); 
	$("#btn_search_med").show();
	$("#wait_image_med").hide();	
	$("#opitemSearch").val('');	
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
	$("#error_login").text("").removeClass('success').removeClass('error');
	var cid=$("#cid").val().toUpperCase();
	cid=$.trim(cid);
	
	//Local
	//var apipath_base_photo_dm ='http://127.0.0.1:8000/w02_ipi/syncmobile_rx_171128/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
	//var apipath_base_photo_dm ='http://a007.yeapps.com/ipi/dmpath_live_new/get_path?CID='+cid +'&HTTPPASS=e99business321cba'
	//online
    var apipath_base_photo_dm ='http://e2.businesssolutionapps.com/welcome/dmpath_live_new/get_path?CID='+cid +'&HTTPPASS=e99business321cba'
    //alert (apipath_base_photo_dm)	
	
	var user_id=$("#user_id").val();
	var user_pass=$("#user_pass").val();
	
	user_id=$.trim(user_id);
		
	if (user_id=="" || user_id==undefined || user_pass=="" || user_pass==undefined){
		var url = "#login";      
		$.mobile.navigate(url);
		$("#error_login").html("Required User ID and Password").removeClass('success').addClass('error');	
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
			$("#error_login").html('Network Timeout. Please check your Internet connection..').removeClass('success').addClass('error');
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
						localStorage.apipath =  photo_url + 'medSearch_171128/';
						
						base_url = photo_url + 'syncmobile_rx_171128/';
						
						//-------------
						if(base_url=='' || photo_url==''){	
							$("#wait_image_login").hide();
							$("#loginButton").show();
							//$("#doctorButton").show();
							$("#error_login").html('Base URL not available').removeClass('success').addClass('error');	
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
							
														
							//alert (localStorage.base_url+'check_user_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
							$("#error_logintext").val(localStorage.base_url+'check_user_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
	
							$.ajax(localStorage.base_url+'check_user_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
								
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {								
								$("#wait_image_login").hide();
								$("#loginButton").show();
								$("#error_login").html('Network Timeout. Please check your Internet connection..').removeClass('success').addClass('error');
													},
								success:function(data, status,xhr){	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#wait_image_login").hide();
											$("#loginButton").show();								
											$("#error_login").html(resultArray[1]).removeClass('success').addClass('error');
										}
										else if (resultArray[0]=='SUCCESS'){										
													localStorage.synccode=resultArray[1];
													localStorage.regionStr=resultArray[2];
													localStorage.areaStr=resultArray[3];
													localStorage.territoryStr=resultArray[4];
													localStorage.docCategoryStr=resultArray[5];
													localStorage.synced='YES';
													
													localStorage.docStr="";
													localStorage.opProdID_Str ="";
													
													
													
													$('#opCart').empty();
													$('#docCart').empty();
													$('#docSelect').empty();	
													$('#doctorList').empty();
																									
													
													$.afui.loadContent("#pageHome",true,true,'right');
													//$.afui.loadContent("#page_PrescriptionCapture",true,true,'right');													

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
	/*localStorage.doctor_flag=1;
	localStorage.doctor_plan_flag=0;
	localStorage.doctor_pr=1;
	localStorage.tourFlag=0
	localStorage.saved_data_submit=0;*/
	$.afui.loadContent("#page_PrescriptionCapture",true,true,'right');
}

function page_notice() {
	$.afui.loadContent("#card",true,true,'right');
}

function ffPresent(){
	var ff_present=document.getElementById('ff_present').checked?1:0;
	localStorage.ff_present=ff_present;
	}

function associatedCall(){
	var associated_call=document.getElementById('associated_call').checked?1:0;
	localStorage.associated_call=associated_call;
	}
	
function prescription_submit(){
	
	//alert(localStorage.ff_present+'   '+localStorage.associated_call);
	$("#error_prescription_submit").html("").removeClass('error').removeClass('success');		
	$("#wait_image_prescription").show();
	$("#btn_prescription_submit").hide();
	
	
	if (localStorage.docStr	==undefined || localStorage.docStr	=="" ){
		$("#error_prescription_submit").text("Required Doctor.").removeClass('success').addClass('error');		
		$("#wait_image_prescription").hide();
		$("#btn_prescription_submit").show();
	}else{
		var doctorId=localStorage.docStr.split('|')[0]	
		var doctor_name=localStorage.docStr.split('|')[1]		
		var areaId=localStorage.docStr.split('|')[3]
		
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
				 
		//alert(localStorage.base_url+'prescription_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&synccode='+localStorage.synccode+'&areaId='+areaId+'&doctor_id='+encodeURIComponent(doctorId)+'&doctor_name='+encodeURIComponent(doctor_name)+'&category='+localStorage.doc_category+'&latitude='+latitude+'&longitude='+longitude+'&pres_photo='+imageName+'&opProdID_Str='+localStorage.opProdID_Str+'&medicine_1='+medicine_1+'&medicine_2='+medicine_2+'&medicine_3='+medicine_3+'&medicine_4='+medicine_4+'&ff_present='+localStorage.ff_present+'&associated_call='+localStorage.associated_call)
		$("#errorShow").val(localStorage.base_url+'prescription_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&synccode='+localStorage.synccode+'&areaId='+areaId+'&doctor_id='+encodeURIComponent(doctorId)+'&doctor_name='+encodeURIComponent(doctor_name)+'&category='+localStorage.doc_category+'&latitude='+latitude+'&longitude='+longitude+'&pres_photo='+imageName+'&opProdID_Str='+localStorage.opProdID_Str+'&medicine_1='+medicine_1+'&medicine_2='+medicine_2+'&medicine_3='+medicine_3+'&medicine_4='+medicine_4);
		 $.ajax(localStorage.base_url+'prescription_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&synccode='+localStorage.synccode+'&areaId='+areaId+'&doctor_id='+encodeURIComponent(doctorId)+'&doctor_name='+encodeURIComponent(doctor_name)+'&category='+localStorage.doc_category+'&latitude='+latitude+'&longitude='+longitude+'&pres_photo='+imageName+'&opProdID_Str='+localStorage.opProdID_Str+'&medicine_1='+medicine_1+'&medicine_2='+medicine_2+'&medicine_3='+medicine_3+'&medicine_4='+medicine_4+'&ff_present='+localStorage.ff_present+'&associated_call='+localStorage.associated_call,{
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
				$("#error_prescription_submit").html('Network timeout. Please ensure you have active internet connection.').removeClass('success').addClass('error');
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
                        if (picNo == 30) { localStorage.prPhoto30 = '' }
                        if (picNo == 31) { localStorage.prPhoto31 = '' }
                        if (picNo == 32) { localStorage.prPhoto32 = '' }
                        if (picNo == 33) { localStorage.prPhoto33 = '' }
                        if (picNo == 34) { localStorage.prPhoto34 = '' }
                        if (picNo == 35) { localStorage.prPhoto35 = '' }
                        if (picNo == 36) { localStorage.prPhoto36 = '' }
                        if (picNo == 37) { localStorage.prPhoto37 = '' }
                        if (picNo == 38) { localStorage.prPhoto38 = '' }
                        if (picNo == 39) { localStorage.prPhoto39 = '' }
                        if (picNo == 40) { localStorage.prPhoto40 = '' }
                        if (picNo == 41) { localStorage.prPhoto41 = '' }
                        if (picNo == 42) { localStorage.prPhoto42 = '' }
                        if (picNo == 43) { localStorage.prPhoto43 = '' }
                        if (picNo == 44) { localStorage.prPhoto44 = '' }
                        if (picNo == 45) { localStorage.prPhoto45 = '' }
                        if (picNo == 46) { localStorage.prPhoto46 = '' }
                        if (picNo == 47) { localStorage.prPhoto47 = '' }
                        if (picNo == 48) { localStorage.prPhoto48 = '' }
                        if (picNo == 49) { localStorage.prPhoto49 = '' }
                        if (picNo == 50) { localStorage.prPhoto50 = '' }
                        if (picNo == 51) { localStorage.prPhoto51 = '' }
                        if (picNo == 52) { localStorage.prPhoto52 = '' }
                        if (picNo == 53) { localStorage.prPhoto53 = '' }
                        if (picNo == 54) { localStorage.prPhoto54 = '' }
                        if (picNo == 55) { localStorage.prPhoto55 = '' }
                        if (picNo == 56) { localStorage.prPhoto56 = '' }
                        if (picNo == 57) { localStorage.prPhoto57 = '' }
                        if (picNo == 58) { localStorage.prPhoto58 = '' }
                        if (picNo == 59) { localStorage.prPhoto59 = '' }
                        if (picNo == 60) { localStorage.prPhoto60 = '' }


						$("#lat").val("");
						$("#long").val("");
						$("#medicine_1").val('');
						$("#medicine_2").val('');
						$("#medicine_3").val('');
						$("#medicine_4").val('');
						$("#medicine_5").val('');
						$("#wait_image_prescription").hide();
						$("#btn_prescription_submit").hide();
						
						
						$('#medicineList').empty();
						$('#doctorList').empty();
						$("#docCart").empty();						
						$("#opCart").empty();
						$("#docSelect").empty();

						//--------------------------
						//$("#error_prescription_submit").text("Uploading.").addClass('success');	
						//$.afui.loadContent("#imageSinglePage",true,true,'right');
						
					}else{						
						$("#error_prescription_submit").html('Authentication error. Please register and sync to retry.').removeClass('success').addClass('error');
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



function uploadPhoto(imageURI, imageName) {
	$("#error_prescription_submit").text("Image Sync...").removeClass('error').addClass('success');
	
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
	$("#error_prescription_submit").text("Submitted Succesfully.").removeClass('error').addClass('success');
	$("#myImagePrescription_show").val('')
	$("#btn_prescription_submit").hide();
}

function failPr(error) {
	$("#error_prescription_submit").text('Memory Error. Please take new picture and Submit').removeClass('success').addClass('error');
	$("#btn_prescription_submit").show();	
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
	if (picNo==1){localStorage.prPhoto1=uri}
	if (picNo==2){localStorage.prPhoto2=uri}
	if (picNo==3){localStorage.prPhoto3=uri}
	if (picNo==4){localStorage.prPhoto4=uri}
	if (picNo==5){localStorage.prPhoto5=uri}
	if (picNo==6){localStorage.prPhoto6=uri}
	if (picNo==7){localStorage.prPhoto7=uri}
	if (picNo==8){localStorage.prPhoto8=uri}
	if (picNo==9){localStorage.prPhoto9=uri}
	if (picNo==10){localStorage.prPhoto10=uri}
	if (picNo==11){localStorage.prPhoto11=uri}
	if (picNo==12){localStorage.prPhoto12=uri}
	if (picNo==13){localStorage.prPhoto13=uri}
	if (picNo==14){localStorage.prPhoto14=uri}
	if (picNo==15){localStorage.prPhoto15=uri}
	if (picNo==16){localStorage.prPhoto16=uri}
	if (picNo==17){localStorage.prPhoto17=uri}
	if (picNo==18){localStorage.prPhoto18=uri}
	if (picNo==19){localStorage.prPhoto19=uri}
	if (picNo==20){localStorage.prPhoto20=uri}
	if (picNo==21){localStorage.prPhoto21=uri}
	if (picNo==22){localStorage.prPhoto22=uri}
	if (picNo==23){localStorage.prPhoto23=uri}
	if (picNo==24){localStorage.prPhoto24=uri}
	if (picNo==25){localStorage.prPhoto25=uri}
	if (picNo==26){localStorage.prPhoto26=uri}
	if (picNo==27){localStorage.prPhoto27=uri}
	if (picNo==28){localStorage.prPhoto28=uri}
	if (picNo==29){localStorage.prPhoto29=uri}
    if (picNo == 30) { localStorage.prPhoto30 = uri }
    if (picNo == 31) { localStorage.prPhoto31 = uri }
    if (picNo == 32) { localStorage.prPhoto32 = uri }
    if (picNo == 33) { localStorage.prPhoto33 = uri }
    if (picNo == 34) { localStorage.prPhoto34 = uri }
    if (picNo == 35) { localStorage.prPhoto35 = uri }
    if (picNo == 36) { localStorage.prPhoto36 = uri }
    if (picNo == 37) { localStorage.prPhoto37 = uri }
    if (picNo == 38) { localStorage.prPhoto38 = uri }
    if (picNo == 39) { localStorage.prPhoto39 = uri }
    if (picNo == 40) { localStorage.prPhoto40 = uri }
    if (picNo == 41) { localStorage.prPhoto41 = uri }
    if (picNo == 42) { localStorage.prPhoto42 = uri }
    if (picNo == 43) { localStorage.prPhoto43 = uri }
    if (picNo == 44) { localStorage.prPhoto44 = uri }
    if (picNo == 45) { localStorage.prPhoto45 = uri }
    if (picNo == 46) { localStorage.prPhoto46 = uri }
    if (picNo == 47) { localStorage.prPhoto47 = uri }
    if (picNo == 48) { localStorage.prPhoto48 = uri }
    if (picNo == 49) { localStorage.prPhoto49 = uri }
    if (picNo == 50) { localStorage.prPhoto50 = uri }
    if (picNo == 51) { localStorage.prPhoto51 = uri }
    if (picNo == 52) { localStorage.prPhoto52 = uri }
    if (picNo == 53) { localStorage.prPhoto53 = uri }
    if (picNo == 54) { localStorage.prPhoto54 = uri }
    if (picNo == 55) { localStorage.prPhoto55 = uri }
    if (picNo == 56) { localStorage.prPhoto56 = uri }
    if (picNo == 57) { localStorage.prPhoto57 = uri }
    if (picNo == 58) { localStorage.prPhoto58 = uri }
    if (picNo == 59) { localStorage.prPhoto59 = uri }
    if (picNo == 60) { localStorage.prPhoto60 = uri }

		
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


//======================== report==========

function page_report(){
	$("#wait_image_daily_summary").hide();	
	$.afui.loadContent("#page_report",true,true,'right');
}

function summaryDaily(){
	$("#error_summary_rpt").text("").removeClass('success').removeClass('error');
	$('#summaryRpt').empty();
	$("#wait_image_daily_summary").show();
	
	var from_date = $("#from_date").val();	
	
	//alert(localStorage.base_url+'summary_daily?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&from_date='+from_date);
	$.ajax({
		  url: localStorage.base_url+'summary_daily?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&from_date='+from_date,
		  success: function(resStr) {
			if (resStr!=""){					
				var summaryDailyStr=resStr.split("||");
				var summaryDailyLen=summaryDailyStr.length;
				 
				 if (from_date==''){
					from_date='Today';	 
				 }
				 
				rpt_daily_list='<table style="width:100%;">';
				rpt_daily_list+='<tr><td colspan="3" style="border-bottom:0px;"><h2 style="border-bottom:1px solid #d9d9d9;background-color:#ccedff; padding-left:5px; margin:0px;">Date: &nbsp;'+from_date+'</h2></td></tr>';			
				rpt_daily_list+='<tr style="background-color:#99dbff; height:20px;"><td style="width:40%; padding-left:5px;">Territory</td><td style="width:40%; text-align:left;">Doctor Name</td><td style="width:3px; text-align:center;">Count</td></tr>';				
				var prtDailyTotal=0;
				for ( i=0; i < summaryDailyLen; i++){						
					var summaryDailyS=summaryDailyStr[i];
					var rptDailyStr = summaryDailyS.split('|');												
					
					prtDailyTotal+=parseInt(rptDailyStr[2]);
									
					rpt_daily_list+='<tr style="background-color:#ccedff; height:20px;" ><td style="padding-left:5px;">'+rptDailyStr[0]+'</td><td style="text-align:left;" >'+rptDailyStr[1]+'</td><td style="text-align:center;">'+rptDailyStr[2]+'</td></tr>';
							
				}
				rpt_daily_list+='<tr style="background-color:#99dbff; height:20px; font-weight:bold;" ><td style="padding-left:5px;"></td><td style="text-align:right;" >Total</td><td style="text-align:center;">'+prtDailyTotal+'</td></tr>'
				rpt_daily_list+='</table>';
				
				$("#wait_image_daily_summary").hide();
				$('#summaryRpt').empty();
				$('#summaryRpt').html(rpt_daily_list);						  
								
				
			}else{				
				$("#error_summary_rpt").text("Data Not Found..").removeClass('success').addClass('error');
			}
		
		  }		
	});	
}

//======================== report==========

function getNotice(){
	$('#notice_list').empty();
	$("#wait_image_notice").show();
	//alert(localStorage.base_url+'notice_list?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass));
	$.ajax({
		  url: localStorage.base_url+'notice_list?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass),
		  success: function(resStr) {
			if (resStr!=""){					
				var noticeStr=resStr.split("||");
				var noticeLen=noticeStr.length;
				var notice_list_str='';
				for ( i=0; i < noticeLen; i++){						
					var noticeS=noticeStr[i];
					var noticeSArr = noticeS.split('|');	
					notice_list_str+='<div style="background-color:#ccedff; border-bottom:1px solid #d9d9d9; margin:10px; padding:5px; border-radius:2px; box-shadow:0 1px 4px #358495;">';		  
					notice_list_str+='<h2 style="border-bottom:1px solid #d9d9d9;">'+noticeSArr[0]+'</h2>';	  
					notice_list_str+='<p style="margin:0px; font-size:11px; line-height:normal;">'+noticeSArr[1]+'</p>';  
					notice_list_str+='</div>';				
				}
				
				$("#wait_image_notice").hide();
				$('#notice_list').empty();
				$('#notice_list').html(notice_list_str);							
				
			}else{				
				$("#error_notice_list").text("Data Not Found..").removeClass('success').addClass('error');
			}
		
		  }		
	});	
}