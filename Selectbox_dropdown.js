/**
 * Created by: Redford Sumcad, Aleph-labs
 * April 1, 2012 
 * Plugin    : Reading XML data for selectbox.
 ---------------------------------------------------------------------------------------- */
//load currency in all select options
  	$.selectCurrencyInit = function(){
				
			var strXML=getCurrencies();
			var xml=$.parseXML(strXML);
	
			$(xml).find('currencyName').each(function(){
				var tmpVal = $(this).text();
				$('select[name=currency]').append('<option value="'+tmpVal+'">'+tmpVal+'</option>') ;
			});
		}
		//load type of degree in all select options
		$.selectDegreeInit = function(){
			var strXML=getDegree();
			var xml=$.parseXML(strXML);
			var _this;
			$(xml).find('degreeName').each(function(){
				 _this = $(this);
				$('.degree').append('<option value="'+_this.text().toLowerCase()+'">'+_this.text()+'</option>') ;
			});
			$('.degree').parents('.selector').find('span').css('text-transform','capital);
		}
		//load country in all select options
		$.selectCountryInit = function(){
			var strXML=getCountry();
			var xml=$.parseXML(strXML);
			var _this;
			$(xml).find('countryName').each(function(){
				_this = $(this);
				$('.country').append('<option value="'+_this.text().toLowerCase()+'">'+_this.text()+'</option>') ;
			});
			$('.country').parents('.selector').find('span').css('text-transform','capitalize');
		}
		$.setSelectVal = function(eventName){
				var _this,tmpVal;
				$(eventName).each(function(){
					_this = $(this);
					tmpVal = _this.find('option:first').val().toLowerCase();
					_this.find('option').removeAttr('selected');
					
					if(_this.find('option[value="'+tmpVal+'"]').length >0){
						_this.find('option[value="'+tmpVal+'"]').attr('selected','selected');
						_this.find('option:first').remove();
					}else{
						 _this.find('option:first').attr('value',tmpVal);
					}
				});	
				
		}
function getCurrencies()
  {
		var xml='<currency xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'+
				'    <currencyName>AUD</currencyName>'+
				'    <currencyName>CAD</currencyName>'+
				'    <currencyName>CHF</currencyName>'+
				'    <currencyName>CNH</currencyName>'+
				'    <currencyName>CNY</currencyName>'+
				'    <currencyName>DKK</currencyName>'+
				'    <currencyName>EUR</currencyName>'+
				'    <currencyName>GBP</currencyName>'+
				'    <currencyName>HKD</currencyName>'+
				'    <currencyName>INR</currencyName>'+
				'    <currencyName>IDR</currencyName>'+
				'    <currencyName>JPY</currencyName>'+
				'    <currencyName>MYR</currencyName>'+
				'    <currencyName>NZD</currencyName>'+
				'    <currencyName>NOK</currencyName>'+
				'    <currencyName>SEK</currencyName>'+
				'    <currencyName>SGD</currencyName>'+
				'    <currencyName>THB</currencyName>'+
				'    <currencyName>USD</currencyName>'+
				'</currency>';

		return xml;
	}
	function getCountry()
	{
		var xml='<country xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'+
			'    <countryName>Alabama</countryName>'+
			'    <countryName>Alaska</countryName>'+
			'    <countryName>Arizona</countryName>'+
			'    <countryName>Arkansas</countryName>'+
			'    <countryName>California</countryName>'+
			'    <countryName>Colorado</countryName>'+
			'    <countryName>Connecticut</countryName>'+
			'    <countryName>Delaware</countryName>'+
			'    <countryName>District of Columbia</countryName>'+
			'    <countryName>Florida</countryName>'+
			'    <countryName>Georgia</countryName>'+
			'    <countryName>Hawaii</countryName>'+
			'    <countryName>Philippines</countryName>'+
			'    <countryName>Singapore</countryName>'+
			'    <countryName>US</countryName>'+
			'</country>';
		return xml;
	}
	function getDegree()
	{
		var xml='<Degree xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'+
				'    <degreeName>Accounting / Finance</degreeName>'+
				'    <degreeName>Admin &amp; Office Services</degreeName>'+
				'    <degreeName>Advertising / Promotions / Events</degreeName>'+
				'    <degreeName>Arts / Creative</degreeName>'+
				'    <degreeName>Audit / Taxation</degreeName>'+
				'    <degreeName>Beauty / Personal Care</degreeName>'+
				'    <degreeName>Corporate Planning / Business Development</degreeName>'+
				'    <degreeName>Customer Service</degreeName>'+
				'    <degreeName>Data / Statistical Analysis</degreeName>'+
				'    <degreeName>Design / Specifications</degreeName>'+
				'    <degreeName>Education / Training &amp; Development</degreeName>'+
				'    <degreeName>Engineering / Technical</degreeName>'+
				'    <degreeName>Environment / Health &amp; Safety</degreeName>'+
				'    <degreeName>Hospitality and Tourism</degreeName>'+
				'    <degreeName>Human Resources</degreeName>'+
				'    <degreeName>Information Technology</degreeName>'+
				'    <degreeName>Legal / Secretarial Services</degreeName>'+
				'    <degreeName>Logistics / Supply Chain Management</degreeName>'+
				'    <degreeName>Management</degreeName>'+
				'    <degreeName>Medical</degreeName>'+
				'    <degreeName>Nursing</degreeName>'+
				'    <degreeName>Others</degreeName>'+
				'    <degreeName>Pharmaceutical Services</degreeName>'+
				'    <degreeName>Product Development</degreeName>'+
				'    <degreeName>Production / Manufacturing</degreeName>'+
				'    <degreeName>Public Relations / Communications</degreeName>'+
				'    <degreeName>Quality Control / Assurance</degreeName>'+
				'    <degreeName>R&amp;D / Sciences / Laboratory</degreeName>'+
				'    <degreeName>Sales</degreeName>'+
				'    <degreeName>Security</degreeName>'+
				'    <degreeName>Therapy / Other Healthcare</degreeName>'+
				'</Degree>';
		return xml;
	}
