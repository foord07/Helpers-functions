 /**
 * Created by: Redford Sumcad, Aleph-labs
 * April 1, 2012 - New module saving XXXX
 * Plugin    : Validate all enetered values in text input(String, Numeric). Converts English to chinese
 * 				Auto complete inputs for Growth rate
 ---------------------------------------------------------------------------------------- */
(function ($){
$.checkReplicateName = function(){
  	var _this,count,count2;
		$('.checkDuplicate').live('focusout',function(){
				_this = $(this);
				$('.checkDuplicate').each(function() {
					if ($.trim(_this.val()).toUpperCase() == ''){
						_this.parents('tr').next('tr.hide').show();
						_this.parents('tr').next('tr.hide').find('.nameEmpty').show();
						return false;	
					}else{
						_this.parents('tr').next('tr.hide').find('.nameEmpty').hide();
					}
					
					if ($.trim($(this).val()).toUpperCase() == $.trim(_this.val()).toUpperCase() && $(this).attr('name')!= _this.attr('name')){
						$(this).parents('tr').next('tr.hide').show();
						
						_this.parents('tr').next('tr.hide').show();
						_this.parents('tr').next('tr.hide').find('.studentName').show();
						$(this).parents('tr').next('tr.hide').find('.studentName').show();		
						return false;
				
					}else {
						_this.parents('tr').next('tr.hide').find('.studentName').hide();
						$(this).parents('tr').next('tr.hide').find('.studentName').hide();
					}
					count = _this.parents('tr').next('tr.hide').find('.txt-error:hidden').length;
					count2 = $(this).parents('tr').next('tr.hide').find('.txt-error:hidden').length;
					
						if(count >=7 && count2 >=7 ){
						   _this.parents('tr').next('tr.hide').hide();
						   $(this).parents('tr').next('tr.hide').hide();
						}
				});
				return false;
			  });
	}

	$.validateNumEducation = function(type){
		var value,count,ageInput;
		$('.validateNum').live('blur', function() {
			value = $(this).val();
			ageInput = $(this).attr('name').substring(0,13).toLowerCase();
			if(ageInput == 'retirementage' || ageInput == 'percentageret'){
				$(this).val(value.replace(/[^\d.]/g, ''));	
			}else{
				Math.round(value.replace(/[^\d.]/g, ''))==0 ? $(this).val('') : $(this).val(Math.round(value.replace(/[^\d.]/g, '')));
			}
		    var errorName = '.'+$(this).attr('name');
			if(value<=0 || value== null || value==''){
				$(errorName).show().parents('tr').show();
			 }else{
				$(errorName).hide();
			 }
		        count = $(this).parents('tr').next('tr').find('.txt-error:hidden').length;
				if(count ===8){
				   $(errorName).parents('.hide').hide();
				}
		});
	}
	$.deleteEducation = function(){
		var countTr,id=1;
		$('.btn-delete').live('click',function(){
			$(this).parents('tr').next('tr.hide').remove();
			$(this).parents('tr').hide();
			id= $(this).closest('tr').find('td:first').find('input').attr('name').replace(/[^\d.]/g, '');
			//$('input[type="hidden"][rel="'+id+'"]').attr('rel', 'deleted');
			$('input[name=SelectedForGoal'+id+']').val('false');
			//$('input[type="hidden"][rel="'+id+'"]').remove();
			countTr = $('#educationContent').find('tr').length;
			if(countTr==0){
					$('#btn-proceed').addClass('disabled');	
			}
			
			var participents=0;
			if($('.educ-primary').length>0)
			{
				participents=$('input[name="ApplicantNo"][type="hidden"]').val();
			}
			$('input[name="ApplicantNo"][type="hidden"]').val(participents);
		});
	}

	$.educCountryCostInit = function(step){
		var _this,id;
		$('.country').live('change',function(){
		    _this = $(this);
		    id = _this.attr('name').replace(/[^\d.]/g, '');
		    if(_this.val() === 'others'){
			$('input[name=EducationCountryAmt' + id +']').show();
			$('input[name=EducationCountryAmt' + id +']').val('');
			$('select[name=TypeOfDegree' + id + ']').closest('.selector').hide();
		    }else{
			$('input[name=EducationCountryAmt' + id +']').hide();
			$('select[name=TypeOfDegree' + id + ']').closest('.selector').show();
			/*if($('select[name=TypeOfDegree' + id + ']').is(':visible').length>0)
			{
				$('select[name=TypeOfDegree' + id + ']').closest('.selector').show();
			}
			else{
				$('select[name=TypeOfDegree' + id + ']').show();
				$('select[name=TypeOfDegree' + id + ']').uniform();
			}*/
		    }
		})
		$('.educAmt').live('focus',function(){
		    if($(this).val()==='Education Cost') $(this).val('');
		    $(this).removeClass('txt-lightGray');
		});
	}
	$.validateNumZero = function(){
		var _this,value,ageInput;
		$('.validateNumZero').live('blur', function() {
			 _this = $(this);
			 value =$.trim($(this).val());
			ageInput = $(this).attr('name').substring(0,13).toLowerCase();
			if(ageInput == 'retirementage' || ageInput == 'percentageret'){
				$(this).val(value.replace(/[^\d.]/g, ''));	
			}else{
				Math.round(value.replace(/[^\d.]/g, ''))==0 ? $(this).val('') : $(this).val(Math.round(value.replace(/[^\d.]/g, '')));		
			}
			 if(value==null || $.trim(value)==='' || Math.round($(this).val())===0){
				 $(this).val('');
			 }else{
				$(this).val(Math.round($(this).val()));
			 }
		});
	}
	
	$.checkEmptyEducation = function(){
		var value,count,ageInput;
		$('.validateNum').each(function() {
			 value = $(this).val();
			 ageInput = $(this).attr('name').substring(0,13).toLowerCase();
			 if(ageInput == 'retirementage' || ageInput == 'percentageret'){
				$(this).val(value.replace(/[^\d.]/g, ''));	
			 }else{
				Math.round(value.replace(/[^\d.]/g, ''))==0 ? $(this).val('') : $(this).val(Math.round(value.replace(/[^\d.]/g, '')));		
			 }
			 var errorName = '.'+$(this).attr('name');
			if(value<=0 || value== null || value==''){
				$(errorName).show().parents('tr').show();
			 }else{
				$(errorName).hide();
			 }
		});
		$('.checkDuplicate').each(function() {
				value = $.trim($(this).val()); 
				if(value<=0 || value== null || value==''){
					$(this).parents('tr').next('tr.hide').show();
					$(this).parents('tr').next('tr.hide').find('.nameEmpty').show();
				}else {
					$(this).parents('tr').next('tr.hide').find('.nameEmpty').hide();
				}
				count = $(this).parents('tr').next('tr.hide').find('.txt-error:hidden').length;
					if(count ===8){
					   $(this).parents('tr').next('tr.hide').hide();
					}
		});
	}
	
	$.validateTab = function(idName){
		if($('.btn-tabs-inner.txt-errorInput:first').length >0){
			$('.btn-tabs').removeClass('selected');
			$('.btn-tabs-inner.txt-errorInput:first').parents('.btn-tabs').addClass('selected');
			$('.btn-tabs-inner.txt-errorInput:first').removeClass('txt-errorInput');
			//education tabs 
			$('.lifestyle-wrap').hide();
			$('.lifestyle-wrap').eq(idName-1).show();
			//retirement tabs 
			$('.tabs-wrap').hide();
			$('.tabs-wrap').eq(idName-1).show();
		}
	}
	$.autoCompleteGrowthRate = function(growthRate,id){
		var checker = growthRate.substring(0,growthRate.length-1);
		console.log(checker);
		if(checker == 'LumpSumAmountSetAside'){
			if(($.trim($('input[name="'+growthRate+'"]').val()) != '' || $('input[name="'+growthRate+'"]').val() > 0) && ($('input[name="GrowthRateLumpsum'+id+'"]').val() == null || $.trim($('input[name="GrowthRateLumpsum'+id+'"]').val()) == '')){
				$('input[name="GrowthRateLumpsum'+id+'"]').val($('input[name=BenchmarkRateOfReturn]').val());
			}
		}else if(checker == 'RegularAmountSetAside'){
			if(($('input[name="'+growthRate+'"]').val() != '' || $('input[name="'+growthRate+'"]').val() > 0) && ($('input[name="GrowthRateRegular'+id+'"]').val() !=null || $('input[name="GrowthRateRegular'+id+'"]').val() !='')){
				$('input[name="GrowthRateRegular'+id+'"]').val($('input[name=BenchmarkRateOfReturn]').val());
			}
		}
    }
	$.autoCompleteGrowthRateFIT = function(growthRate){
		var checker = growthRate;
		if(checker == 'LumpSumAmountSetAside'){
			if(($.trim($('input[name="'+growthRate+'"]').val()) != '' || $('input[name="'+growthRate+'"]').val() > 0) && ($('input[name="GrowthRateLumpsum"]').val() == null || $.trim($('input[name="GrowthRateLumpsum"]').val()) == '')){
				$('input[name="GrowthRateLumpsum"]').val($('input[name=BenchmarkRateOfReturn]').val());
			}
		}else if(checker == 'RegularAmountSetAside'){
			if(($('input[name="'+growthRate+'"]').val() != '' || $('input[name="'+growthRate+'"]').val() > 0) && ($('input[name="GrowthRateRegular"]').val() !=null || $('input[name="GrowthRateRegular"]').val() !='')){
				$('input[name="GrowthRateRegular"]').val($('input[name=BenchmarkRateOfReturn]').val());
			}
		}
    }
	var lump,tmpVal,tmpRateVal,reg,regRate;
	$.validateNumStep2 = function(){
		var ageInput;
		$('.validateNum').live('blur', function() {
			 _this = $(this);
			 value =$(this).val();
			 ageInput = $(this).attr('name').substring(0,13).toLowerCase();
			 if(ageInput == 'retirementage' || ageInput == 'percentageret'){
				$(this).val(value.replace(/[^\d.]/g, ''));	
			 }else{
				Math.round(value.replace(/[^\d.]/g, ''))==0 ? $(this).val('') : $(this).val(Math.round(value.replace(/[^\d.]/g, '')));	
			 }
			 
			 parentBox = _this.parents('td').length==0 ? '.col' : 'td';
			 lump = $('input[name=LumpSumAmountSetAside]');
			 lumpRate = $('input[name=GrowthRateLumpsum]');
			 $.validateRelativity(lump,lumpRate);
			 $.validateRelativity(lumpRate,lump);
			 reg = $('input[name=RegularAmountSetAside]');
			 regRate = $('input[name=GrowthRateRegular]');
			 $.validateRelativity(reg,regRate);
			 $.validateRelativity(regRate,reg);
		});
	}
	$.validateLumpGrowRate = function(){
		var id=1,ageInput,finalVal;
		$('.validateNumRel').live('blur', function() {
			_this = $(this);
			value =$(this).val();
			ageInput = $(this).attr('name').substring(0,13).toLowerCase();
			if(ageInput == 'retirementage' || ageInput == 'percentageret'){
				$(this).val(value.replace(/[^\d.]/g, ''));	
			}else{
				if(value.replace(/[^\d.]/g, '')==='0') $(this).val('0');
				else Math.round(value.replace(/[^\d.]/g, ''))==0 ? $(this).val('') : $(this).val(Math.round(value.replace(/[^\d.]/g, '')));
			}
			id = _this.attr('name').replace(/[^\d.]/g, '');
			lump = $('input[name="LumpSumAmountSetAside'+id+'"]');
			lumpRate = $('input[name="GrowthRateLumpsum'+id+'"]');
			console.log(lump);
			console.log(lumpRate);
			$.validateRelativity(lump,lumpRate);
			$.validateRelativity(lumpRate,lump);
			reg = $('input[name="RegularAmountSetAside'+id+'"]');
			regRate = $('input[name="GrowthRateRegular'+id+'"]');
			$.validateRelativity(reg,regRate);
			$.validateRelativity(regRate,reg);
			$.autoCompleteGrowthRate(_this.attr('name'),id);
		});
	}
	$.validateLumpGrowRateFIT = function(){
		var id=1,ageInput,finalVal;
		$('.validateNumRel').live('blur', function() {
			_this = $(this);
			value =$(this).val();
			Math.round(value.replace(/[^\d.]/g, ''))==0 ? $(this).val('') : $(this).val(Math.round(value.replace(/[^\d.]/g, '')));
			
			lump = $('input[name="LumpSumAmountSetAside"]');
			lumpRate = $('input[name="GrowthRateLumpsum"]');
			console.log(lump);
			console.log(lumpRate);
			$.validateRelativity(lump,lumpRate);
			$.validateRelativity(lumpRate,lump);
			reg = $('input[name="RegularAmountSetAside"]');
			regRate = $('input[name="GrowthRateRegular"]');
			$.validateRelativity(reg,regRate);
			$.validateRelativity(regRate,reg);
			$.autoCompleteGrowthRateFIT(_this.attr('name'),id);
		});
	}
	$.validateRelativity = function(enterVal,validateField){
			tmpVal = enterVal.val();
			tmpRateVal = validateField.val();
			msg = validateField.attr('name');
			if(tmpVal > 0 && (tmpRateVal == null || tmpRateVal == '' || tmpRateVal <= 0) ){
				$('.'+msg).html('Please enter value.').show();
				var idName = enterVal.attr('name').replace(/[^\d.]/g, '');
				var isSelected = $('#tabId'+idName).hasClass('selected');
				if(idName.length >0 && !isSelected){
					$('#tabId'+idName).find('.btn-tabs-inner').addClass('txt-errorInput');
					$.validateTab(idName);
				}
			}else{
				$('.'+msg).hide();
			}
	}
	$.validateAge = function(fromAge,toAge){
				var msg = toAge.attr('name')
				var id = msg.replace(/[^\d.]/g, '');
				var tmpFrom = fromAge.val();
				var	tmpTo = toAge.val();
				var curAge = parseInt($('input[name="Age'+id+'"]').val()) + 1;
				if( tmpFrom<curAge){
					fromAge.val(curAge);
				}else if( toAge<curAge){
					toAge.val(curAge);
				}else if(parseInt(tmpFrom) > parseInt(tmpTo) || (tmpFrom == '' || tmpFrom == null || tmpTo == '' || tmpTo == null || tmpFrom == 0 || tmpTo == 0)){
					$('.'+msg).html('Please enter a valid age range.').show();
					fromAge.addClass('txt-errorInput');
					toAge.addClass('txt-errorInput');
				}else{
				    fromAge.removeClass('txt-errorInput');
					toAge.removeClass('txt-errorInput');
					$('.'+msg).hide();
				}
	}
	$.validateGoalName = function(){
		var _this,check, value,parentBox;
		$('input[name=GoalName]').live('blur', function() {
			 _this = $(this);
			 value =$.trim($(this).val().toUpperCase());
			 parentBox = _this.parents('td').length==0 ? '.col' : 'td';
			 if(value=='EDUCATION' || value=='RETIREMENT' ){
				_this.parents(parentBox).find('.'+$(this).attr('name')).html('It cannot be "Education" or "Retirement".').show();
				_this.parents(parentBox).siblings().css('vertical-align','top');
			 }else if(value ==null || value ==''){
				_this.parents(parentBox).find('.'+$(this).attr('name')).html('Please enter your goal name.').show();
				//_this.focus();
				_this.parents(parentBox).siblings().css('vertical-align','top');
			 }else{
			 _this.parents(parentBox).find('.'+$(this).attr('name')).hide();
			 }
		});
	}
	$.relativeInput  = function(input1, input2){
		$(input1).live('blur', function() {
			 $(input2).text($.toDigits($(input1).val()));
		});
	}
	$.toDigits = function(nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
	}
	$.getDifference = function(input1,input2){
		var tmpLump = parseFloat(input1);
		var tmpReg = parseFloat(input2);
		return (tmpLump - tmpReg);
	}
    $.getSum = function(input1,input2){
		var tmpLump = parseFloat(input1);
		var tmpReg = parseFloat(input2);
		return (tmpLump + tmpReg);
	}
	$.redrawGraph = function(lump,reg, goal){
	var lumpSum = parseFloat(lump);
	var regular = parseFloat(reg);
	var total,lumpSumPer,regularPer,shortFallPer;
	
	
	total = parseFloat(goal);
	lumpSumPer = (lumpSum/total) * 100;
	regularPer = (regular/total) * 100;
	var shortFallPer=100-(lumpSumPer+regularPer);
	if(shortFallPer<0)shortFallPer=0;
	
	if(lumpSumPer>100 || regularPer>100) shortFallPer=0;
	var totalLumpReg=(lumpSum+regular)
	if(total< totalLumpReg){
		lumpSumPer=(lumpSum/totalLumpReg) * 100;
		regularPer=(regular/totalLumpReg) * 100;
	}
	$('.type-lump').css('height',lumpSumPer+'%');
	$('.type-short').css('height',shortFallPer+'%');
	$('.type-reg').css('height',regularPer+'%');
	}
})(jQuery);

/**
 * Created by: Redford Sumcad, Aleph-labs
 * Plugin	  : Ajax tab, navigating to each menu loads new content without reloading the whole page.
 ------------------------------------------------------------ */
(function ($){
	$.fn.ajaxTabInit = function(){
	containerId = $('#review-wrap');
	containerId.load('8-review-grow.html');
	var eventName = $(this).find('a');
	$(this).find('a').live('click',function(){
		var btn = $(this);
		var page = btn.attr('href');
		containerId.load(page,function(){
		containerId.fadeIn();
		eventName.removeClass('selected');
		btn.addClass('selected');
		});
		return false;
	});
	}
	$.ajaxTabRetirement = function(){
		$('.lifestyle-wrap').eq(1).hide();
		$('.btn-tabs').live('click',function(){
            var btn = $(this);
            var page = btn.attr('href');
            $('.btn-tabs').removeClass('selected').find('span').removeClass('txt-errorInput');;
            btn.addClass('selected');
            $('.lifestyle-wrap').hide();
            $(page).fadeIn('fast');
            return false;
        });
	}
	$.ajaxTabHeadRetirement = function(applicantNo){
		var i = 1;
		while(i <= applicantNo){
			if(i == 1){
				$('#tabsHead').append('<div class="tabs-menu"><a id="tabId1" href="#tabs-content'+i+'" class="btn-tabs selected"> <span class="btn-tabs-inner MainApplicant">Main applicant</span>  </a></div>');
			}else{
				$('#tabsHead').append('<div class="tabs-menu"><a id="tabId'+i+'" href="#tabs-content'+i+'" class="btn-tabs"> <span class="btn-tabs-inner JointApplicant">Joint applicant</span>  </a></div>');
			}
			i++;
		}
		
	}
	
	$.ajaxTabEducation = function(){
		$('.tabs-wrap').hide();
		$('.tabs-wrap:first').show();
		$('.btn-tabs').live('click',function(){
			var btn = $(this);
			var page = btn.attr('href');
			$('.btn-tabs').removeClass('selected').find('span').removeAttr('style');
			btn.addClass('selected');
			$('.tabs-wrap').hide();
			$(page).fadeIn('fast', function(){
				$.uniform.restore('select:visible');
				$("select:visible").uniform();
			});
			return false;
		});
	}
    $.ajaxTabEducationInitName = function(isServer,applicantNo){
		var name;
		var i = 1;
		while(i<= applicantNo){
				if($('input[name="Name'+i+'"]').length>0)
				{
					if(isServer==true){
						name=$('input[name="Name'+i+'"]').val();
					}else{
						name=$.getParameterByName('Name'+i);
					}
					$('.tabs').append('<div class="tabs-menu">'+
						'<a href="#tab-box'+i+'" class="btn-tabs" id="tabId'+i+'">'+
						'<span class="btn-tabs-inner"></span></a></div>');
					$('#tabId'+i).find('span').text(name);
				}
			i++;
		}
		$('.btn-tabs:first').addClass('selected');
        }
})(jQuery);
