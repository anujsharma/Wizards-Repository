// JavaScript Document
 $(document).ready(function () {	
	//Tooltips for all 6-9 steps heading	
	var isAppTypeSelected = false; var isOSActive = false; var isOSSelected = false; var isAppIndustrySelected = false;	var isTestingDeliverableActive = false;	var isAppComplexityActive = false;
	var isTestingRegionSelected = false; var isUpdatePriceClicked = false;	
	var tce = 1000;	var tcc = 750;
	var testing_deliverable_price = 0;
	var app_complexity = 1;
	var testing_team_size = 0;
	
	var base_price = 3333;
	var cumulativeFinalPrice1 = 0; var cumulativeFinalPrice2 = 0;	
	var final_price_p1 = 0; var final_price_p2 = 0;
	
	var appTypeValue;
	var osValue = new Array();
	var appIndustryValue; 
	var testingDeliverablesValue = new Array();
	
	//Current Domain
	var currentDomain = document.domain;
	
	//App Industry : Roll Over Effects
	$(".application-type").hover(function() {		
			$(this).toggleClass('hovered');
			 $('.application-type').not(this).removeClass('hovered');  		
				
	});
	//Adding Calendar
	$("#datepicker").datepicker();
	//App Type : Toggle Effect
	$(".application-type").click(function() {
		$(this).toggleClass('selected');
	    $('.application-type').not(this).removeClass('selected');		
		isAppTypeSelected = true;		
		_appTypeClicked = $(this).attr('class');	
		
		//Clearing OS Array Values And Clearing all selected styling
		if($(this).hasClass('selected'))
		{		
			osValue = new Array();			
		}		
	
		switch (_appTypeClicked) 
		{
			case 'application-type mobile hovered selected':
			appTypeValue = 'Mobile';
			break;
			
			case 'application-type web hovered selected':
			appTypeValue = 'Web';
			break;
			
			case 'application-type desktop hovered selected':
			appTypeValue = 'Desktop';
			break;
			
		}
		//PopUp Value Setup
		$('.app-type-value').text(appTypeValue);
		
		$('#step-2 #os ul li a').removeClass('selected');					
		selectOS(_appTypeClicked);		
	});	
	function selectOS(appTypeClicked) {			
		if(isAppTypeSelected == true) {
			$('.step-1-active').addClass('step-1-inactive');
			$('a#app-type-heading').css('color','#0099cc');
				
			if(isUpdatePriceClicked == false)
			{					
				$('#step-2').addClass('active');
			}
			else
			{
				$('#step-2').removeClass('active');
			}
			$('a#os-type-heading').css('color','#0099cc');
		}
		switch(appTypeClicked)
		{
			case 'application-type mobile hovered selected':
				$('#os .mobile').addClass('active');
				$('#os .mobile h3').css('color','#999999');
				$('#os .browsers h3,#os .desktop h3').css('color','#dddddd');
				$('#os .browsers,#os .browsers-right,#os .desktop').removeClass('active');				
				isOSActive = true;			
				break;
				
			case 'application-type web hovered selected':
				$('#os .browsers,#os .browsers-right').addClass('active');	
				$('#os .browsers h3').css('color','#999999');	
				$('#os .mobile h3,#os .desktop h3').css('color','#dddddd');		
				$('#os .desktop,#os .mobile').removeClass('active');
				
				isOSActive = true;				
				break;
				
			case 'application-type desktop hovered selected':
				$('#os .desktop').addClass('active');
				$('#os .desktop h3').css('color','#999999');	
				$('#os .browsers h3,#os .mobile h3').css('color','#dddddd');
				$('#os .browsers,#os .browsers-right,#os .mobile').removeClass('active');
											
				isOSActive = true;				
				break;			
		}		
	}
	//OS selection
	//Desktop
	$("#os .desktop ul li a,#os .mobile ul li a,#os .browsers ul li a,#os .browsers-right ul li a").click(function(){
		if(isOSActive == true) {			
				$(this).toggleClass('selected');			
				$('#step-2').removeClass('active');
				
				if(isUpdatePriceClicked == false)
				{					
					$('#step-3').addClass('active');
				}
				else
				{
					$('#step-3').removeClass('active');
				}	
			
				$('a#app-industry-heading').css('color','#0099cc');
				isOSSelected = true;
				
				if($(this).hasClass('selected'))
				{			       	
					osValue.push(' ' + $(this).text());
				}
				else
				{
	
					osValue.removeByValue($(this).text());
				}
				
				//PopUp Value Setup
				$('.os-value').text(String(osValue));
						
	}	
	});
	
	//App Industry : Roll Over Effects
	$(".app-industry").hover(function() {
		if(isOSSelected == true)
		{	
			$(this).toggleClass('hovered');
			 $('.app-industry').not(this).removeClass('hovered');  
		}				
	});
	//App Industry Type : Toggle Effect
	$(".app-industry").click(function() {	
		if(isOSSelected == true) {
			$(this).toggleClass('selected');			
			$('.app-industry').not(this).removeClass('selected'); 
			
			isAppIndustrySelected = true;
			appIndustryTypeClicked = $(this).attr('class');
					
			switch (appIndustryTypeClicked) 
			{
				case 'app-industry retail hovered selected':
				appIndustryValue = 'Retail';
				break;
				
				case 'app-industry media hovered selected':
				appIndustryValue = 'Media';
				break;
				
				case 'app-industry travel hovered selected':
				appIndustryValue = 'Travel';
				break;
				
				case 'app-industry social hovered selected':
				appIndustryValue = 'Social';
				break;
				
				case 'app-industry health hovered selected':
				appIndustryValue = 'Health';
				break;
				
				case 'app-industry education hovered selected':
				appIndustryValue = 'Education';
				break;
				
				case 'app-industry financial hovered selected':
				appIndustryValue = 'Financial';
				break;
				
				case 'app-industry gaming hovered selected':
				appIndustryValue = 'Gaming';
				break;
				
				case 'app-industry software hovered selected':
				appIndustryValue = 'Software';
				break;
				
			}
			
		//PopUp Value Setup
		$('.app-industry-value').text(appIndustryValue);
			
			selectTestingDeliverables(); 			
		}				
	});
	//Testing Deliverables : Toggle Effect
	function selectTestingDeliverables(){
		if(isAppIndustrySelected == true) {						
		
			$('#step-3').removeClass('active');
			if(isUpdatePriceClicked == false)
			{					
				$('#step-4').addClass('active');
			}
			else
			{
				$('#step-4').removeClass('active');
			}	
			
			$('#step-4 .testing-deliverable').addClass('active');
			$('a.testing-deliverable-heading').css('color','#0099cc');	
			isTestingDeliverableActive = true;
		}
	}	
	$("#step-4 .testing-deliverable ul li a").click(function(){
		if(isTestingDeliverableActive == true) {
							
			$(this).toggleClass('selected');			
			$('#step-4').removeClass('active');
			
			<!--Activating Both Step 5 and 6-->
			if(isUpdatePriceClicked == false)
			{					
				$('#step-5,#step-6').addClass('active');
			}
			else
			{
				$('#step-5,#step-6').removeClass('active');
			}	
			
			$('a.app-complexity-heading,a.choosing-testing-region-heading').css('color','#0099cc');
						
			<!--Selecting all in coverage Report-->
			if($(this).attr('class') == 'first-coverage-report-link selected') {
				$("#coverage-report li").each(function(){
      				$('#coverage-report li a').addClass("selected");
				});				
			}
			else if($(this).attr('class') == 'first-coverage-report-link') {
				$("#coverage-report li").each(function(){
      				$('#coverage-report li a').removeClass("selected");
				});				
			}
			
			if($(this).hasClass('selected'))
			{			       	
        		testingDeliverablesValue.push(' ' + $(this).text());				
			}
			else
			{
				testingDeliverablesValue.removeByValue($(this).text());				
			}
			
			//PopUp Value Setup
			$('.testing-deliverables-value').text(String(testingDeliverablesValue));
						
			//getting tce and tcc
			testingDeliverableClicked = $(this).attr('class');						
			isAppComplexityActive = true;	
			
			isTCESelected = $('#step-4 ul li a.tce').hasClass('selected');
			isTCCSelected = $('#step-4 ul li a.tcc').hasClass('selected');						
		}
		return false;	
	});
	
//Function for removing unchecked elements from Array
Array.prototype.removeByValue = function(val) {
for(var i=0; i<this.length; i++) {
	if(this[i] == val) {
	this.splice(i, 1);
	break;
		}
	}
}	

//App Complexity Slider
 $(".app-complexity-slider" ).slider({
			    animate: true,
                range: "min",
                value: 5,
                min: 1,
                max: 10,
				step: 1,
                
				//this gets a live reading of the value and prints it on the page
                slide: function( event, ui ) {
					if(isAppComplexityActive == false)
					{
						return false;
					}
					else if(isAppComplexityActive == true)
					{											
						$('a.testing-team-size-heading').css('color','#0099cc');						
					
						if(ui.value < '2')
						{							
							$('#app-complexity-slider-result-image').attr('src', 'images/small-complex-app.png');
							app_complexity = -300;

						}
						if(ui.value >= '2' && ui.value <'4')
						{							
							$('#app-complexity-slider-result-image').attr('src', 'images/small-complex-app-2.png');
							app_complexity = -150;

						}
						if(ui.value >= '4' && ui.value <'6')
						{							
							$('#app-complexity-slider-result-image').attr('src', 'images/medium-complex-app.png');
							app_complexity = 1;

						}
						if(ui.value >= '6' && ui.value <'8')
						{						
							$('#app-complexity-slider-result-image').attr('src', 'images/medium-complex-app-2.png');
							app_complexity = 200;

						}
						if(ui.value >'8')
						{							
							$('#app-complexity-slider-result-image').attr('src', 'images/high-complex-app.png');
							app_complexity = 400;
						}
						
					}
                },
				
				//this updates the hidden form field so we can submit the data using a form
                change: function(event, ui) { 
                $('#app-complexity-slider-hidden').attr('value', ui.value);
                }               
			
});
//Testing Team Size Slider
 $(".testing-team-size-slider" ).slider({
			    animate: true,
                range: "min",
                value: 5,
                min: 1,
                max: 10,
				step: 1,
                
				//this gets a live reading of the value and prints it on the page
                slide: function( event, ui ) { 
					if(isAppComplexityActive == false) {
						return false;
					}
					else if(isAppComplexityActive == true) {						
						$('a.testing-duration-heading').css('color','#0099cc');	
									  
						if(ui.value < '2') {
							
							$('#testing-team-size-slider-result-image').attr('src', 'images/small-testing-team.png');
							testing_team_size = -500;
						}
						if(ui.value >= '2' && ui.value <'4') {
							
							$('#testing-team-size-slider-result-image').attr('src', 'images/small-testing-team-2.png');
							testing_team_size = -250;
						}
						if(ui.value >= '4' && ui.value <'6') {
							
							$('#testing-team-size-slider-result-image').attr('src', 'images/medium-testing-team.png');
							testing_team_size = 1;
						}
						if(ui.value >= '6' && ui.value <='8') {
							
							$('#testing-team-size-slider-result-image').attr('src', 'images/medium-testing-team-2.png');
							testing_team_size = 400;
						}
						if(ui.value >'8') {
							
							$('#testing-team-size-slider-result-image').attr('src', 'images/large-testing-team.png');
							testing_team_size = 800;
						}
					}
                },

				//this updates the hidden form field so we can submit the data using a form
                change: function(event, ui) { 
                $('#testing-team-size-slider-hidden').attr('value', ui.value);
                }
			
});
//Testing Duration Slider
 $(".testing-duration-slider" ).slider({
			    animate: true,
                range: "min",
                value: 6,
                min: 1,
                max: 12,
				step: 1,
                
				//this gets a live reading of the value and prints it on the page
                slide: function( event, ui ) {
					if(isAppComplexityActive == false)	{
						return false;
					}
					else if(isAppComplexityActive == true) {						
						$('#step-5').removeClass('active');
											
                   		$( "#testing-duration-slider-result" ).html( ui.value );
						
						//PopUp Value Setup
						$('.testing-duration-value').text(ui.value + ' Months' );
						
						testingDurationValue = String(ui.value + 'Months');
											
						switch (ui.value)
						{
							case 1:
							base_price = 6000;						
							break;
							
							case 2:
							base_price = 5000;
							break;
							
							case 3:
							base_price = 4000;
							break;
							
							case 4:
							base_price = 3750;
							break;
							
							case 5:
							base_price = 3500;
							break;
							
							case 6:
							base_price = 3333;
							break;
							
							case 7:
							base_price = 3276;
							break;
							
							case 8:
							base_price = 3220;
							break;
							
							case 9:
							base_price = 3163;
							break;
							
							case 10:
							base_price = 3106;
							break;
							
							case 11:
							base_price = 3050;
							break;
							
							case 12:
							base_price = 3000;
							break;							
						}						
					}
                },
				//this updates the hidden form field so we can submit the data using a form
                change: function(event, ui) { 
                $('#testing-duration-hidden').attr('value', ui.value);
                }
			
});
//Testing Region : Events
$(".testing-region").hover(function() {
	if(isAppComplexityActive == true) {	
		$(this).toggleClass('hovered');
		 $('.testing-region').not(this).removeClass('hovered');  
	}			
});
$(".testing-region").click(function() {
	if(isAppComplexityActive == true)
	{	
		$(this).toggleClass('selected');
		
		//Getting Selected Region Class
		testingRegionClicked = $(this).attr('class');
		
		isTestingRegionSelected = true;
		$('.update-button').addClass('active');
		$('#step-6').removeClass('active');		
		
		isAsiaSelected = $('#step-6 button.testing-region.asia').hasClass('selected');		
		isAfricaSelected = $('#step-6 button.testing-region.africa').hasClass('selected');
		isSouthAmericaSelected = $('#step-6 button.testing-region.south-america').hasClass('selected');		
	}			
});	
//Update Price Logic
$(".update-button").click(function() {
	
	if(isUpdatePriceClicked == false)
	{	
		isUpdatePriceClicked = true;		
	}
		
	if(isTestingRegionSelected == true) {
	
	//Adding Testing Deliverable to final Price
	if (isTCESelected == true) {
		if(isTCCSelected == true) {		
			testing_deliverable_price = tce + tcc;				
		}
		else{
			testing_deliverable_price = tce;
		}		
	}		
	else		
	{
		if(isTCCSelected == true) {
			testing_deliverable_price = tcc;
		}
		else {
			testing_deliverable_price = 0;
		}	
	
	}
	
	final_price_p1 = Math.round(finalPriceP1(base_price,testing_deliverable_price,testing_team_size,app_complexity,isAsiaSelected,isAfricaSelected,isSouthAmericaSelected));
	final_price_p2 = Math.round(finalPriceP2(base_price,testing_deliverable_price,testing_team_size,app_complexity,isAsiaSelected,isAfricaSelected,isSouthAmericaSelected));
	
	$("p.final-price-range").text("$" + final_price_p1 + " - " + "$" + final_price_p2).hide("fast");
	$("p.final-price-range").text("$" + final_price_p1 + " - " + "$" + final_price_p2).show("slow");
	
	//PopUp Value Setup
	$('.popupEmail-wr-price-range,.popupDemo-wr-price-range,.popupTalkinPerson-wr-price-range,.popupShareWithOthers-wr-price-range').text('$' + final_price_p1 + ' - ' + '$' + final_price_p2 + ' Per Month');		

	}
	else {
		alert('Please select all steps 1-6 to see the price estimate');
	}
		
	//Changing related topics depending upon app Industry (e-commerce only FTTB) selected
	if(appIndustryTypeClicked == 'app-industry retail hovered selected')
	{
		$('.related-topic-1').slideUp("slow");			
		$('.related-topic-1 a').attr('href','http://www.utest.com/landing-interior/optimized-ecommerce');
		$('.related-topic-1 a#rt-1').text('Optimized Ecommerce');
		$('.related-topic-1 p').text("This free whitepaper will share some proven methods to help you optimize your eCommerce strategy.");
		$(".related-topic-1").slideDown("slow");			
		
		$('.related-topic-2').slideUp("slow");	
		$('.related-topic-2 a').attr('href','http://www.utest.com/landing-interior/utest-the-alternative-outsourced-software-testing');
		$('.related-topic-2 a#rt-2').text('uTest vs. Outsourcing');
		$('.related-topic-2 p').text("See how uTest's in-the-wild services stack up against traditional outsourced testing firms.");
		$(".related-topic-2").slideDown("slow");
		
		$('.related-topic-3').slideUp("slow");	
		$('.related-topic-3 a').attr('href','http://www.utest.com/landing-interior/forrester-google-analyst-report');
		$('.related-topic-3 a#rt-3').text('Google-Forrester Report');
		$('.related-topic-3 p').text("Discover how Google leverages in-the-wild software testing for their latest web and mobile applications");
		$(".related-topic-3").slideDown("slow");
	}
	//Changing related topics depending upon app type selected
	else
	{	
		switch (_appTypeClicked)
		{
			case 'application-type mobile hovered selected':
			$('.related-topic-1').slideUp("slow");			
			$('.related-topic-1 a').attr('href','http://www.utest.com/landing-interior/crowdsource-your-mobile-app-testing');
			$('.related-topic-1 a#rt-1').text('Mobile App Testing eBook');
			$('.related-topic-1 p').text("Learn how today's top companies overcome the challenges of mobile app testing in this free eBook.");
			$(".related-topic-1").slideDown("slow");			
			
			$('.related-topic-2').slideUp("slow");	
			$('.related-topic-2 a').attr('href','http://www.utest.com/spotlight/tapulous');
			$('.related-topic-2 a#rt-2').text('Tapulous Case Study');
			$('.related-topic-2 p').text("Find out why Tapulous leveraged uTest for their mobile testing needs for Tap Tap Revenge.");
			$(".related-topic-2").slideDown("slow");
			
			$('.related-topic-3').slideUp("slow");	
			$('.related-topic-3 a').attr('href','http://www.utest.com/landing-interior/utest-the-alternative-outsourced-software-testing');
			$('.related-topic-3 a#rt-3').text('uTest vs. Outsourcing');
			$('.related-topic-3 p').text("See how uTest's in-the-wild services stack up against traditional outsourced testing firms.");
			$(".related-topic-3").slideDown("slow");				
			break;
			
			case 'application-type web hovered selected':
			$('.related-topic-1').slideUp("slow");			
			$('.related-topic-1 a').attr('href','http://www.utest.com/landing-interior/ten-web-testing-tips');
			$('.related-topic-1 a#rt-1').text('Web App Testing Whitepaper');
			$('.related-topic-1 p').text("Launching a web app has never been more complicated. Discover proven strategies for success.");
			$(".related-topic-1").slideDown("slow");			
			
			$('.related-topic-2').slideUp("slow");	
			$('.related-topic-2 a').attr('href','http://www.utest.com/spotlight/aol-answers');
			$('.related-topic-2 a#rt-2').text('AOL Answers Case Study');
			$('.related-topic-2 p').text("Learn how AOL Answers adopted uTest for testing without any delays in their agile dev schedule.");
			$(".related-topic-2").slideDown("slow");
			
			$('.related-topic-3').slideUp("slow");	
			$('.related-topic-3 a').attr('href','http://www.utest.com/landing-interior/forrester-google-analyst-report');
			$('.related-topic-3 a#rt-3').text('Google-Forrester Report');
			$('.related-topic-3 p').text("Discover how Google leverages in-the-wild software testing for their latest web and mobile applications.");
			$(".related-topic-3").slideDown("slow");	
			break;
			
			case 'application-type desktop hovered selected':
			$('.related-topic-1').slideUp("slow");			
			$('.related-topic-1 a').attr('href','http://www.utest.com/landing-interior/can-your-testing-keep-agile');
			$('.related-topic-1 a#rt-1').text('Agile Whitepaper');
			$('.related-topic-1 p').text("The fast pace of the agile methodology requires a new approach to testing and QA.");
			$(".related-topic-1").slideDown("slow");			
			
			$('.related-topic-2').slideUp("slow");	
			$('.related-topic-2 a').attr('href','http://www.utest.com/spotlight/microsoft-security-essentials');
			$('.related-topic-2 a#rt-2').text('Microsoft Case Study');
			$('.related-topic-2 p').text("Find out why the team at Microsoft Security Essentials leveraged uTest before launching their anti-virus");
			$(".related-topic-2").slideDown("slow");
			
			$('.related-topic-3').slideUp("slow");	
			$('.related-topic-3 a').attr('href','http://www.utest.com/landing-interior/utest-the-alternative-outsourced-software-testing');
			$('.related-topic-3 a#rt-3').text('uTest vs. Outsourcing');
			$('.related-topic-3 p').text("See how uTest's in-the-wild services stack up against traditional outsourced testing firms.");
			$(".related-topic-3").slideDown("slow");	
			break;
		}
	}
					
});  
//Reset Button Click	
$(".reset-button").bind("click", function() {
	  window.location="main.php";
  });
//Closing ThickBox
$(".close-button").bind("click", function() {	      
	  /*$('#main').remove();*/
	  window.location="https://" + currentDomain +"/pricing-functional-testing/thanks";
  });

/*Adding Price range*/  
function finalPriceP1(base_price,testing_deliverable_price,testing_team_size,app_complexity,asia_selected,africa_selected,south_america_selected) {
	
	 base_price = (base_price + testing_deliverable_price + testing_team_size + app_complexity);
	 
	 if(asia_selected == true) {		
			base_price = base_price + 100;
	}
			
	if(africa_selected == true) {
		base_price = base_price + 150;
	}
			
	if(south_america_selected == true){		
		base_price = base_price + 100;
	}
	
	 var cum_price1 = base_price - base_price*0.1;
	 
	 return cum_price1 ;
  }
  
  function finalPriceP2(base_price,testing_deliverable_price,testing_team_size,app_complexity,asia_selected,africa_selected,south_america_selected) {
	  
	 base_price = (base_price + testing_deliverable_price + testing_team_size + app_complexity);
	 
	 if(asia_selected == true) {		
			base_price = base_price + 100;
	}
			
	if(africa_selected == true) {
		base_price = base_price + 150;
	}
			
	if(south_america_selected == true){		
		base_price = base_price + 100;
	}
	
	 var cum_price2 = base_price + base_price*0.1;
	 
	 return cum_price2 ;
  }

//Resetting Email Pop up
$("#email-popup-reset-button,#tip-popup-reset-button,#demo-popup-reset-button,#share-popup-reset-button").click(function(){
		clearPopUp();
	}); 

function clearPopUp() {
	$("form :input").val('');	
	return false;
}
//Sending Email : Email Pop up
$('#popup-email-submit').click(function () {
	var email_us_first_name = $('input[name=email_us_first_name]');
	var email_us_last_name = $('input[name=email_us_last_name]');
    var email_us_email = $('input[name=email_us_email]');
	var email_us_company = $('input[name=email_us_company]'); 
	var email_us_subject = $('input[name=email_us_subject]'); 
    var email_us_message = $('textarea[name=email_us_message]');
               
        //organize the data properly
        var data = 'email_us_first_name=' + email_us_first_name.val() +'&email_us_last_name=' + email_us_last_name.val() + '&email_us_email=' + email_us_email.val() + '&email_us_company=' + email_us_company.val() + '&email_us_subject='+ email_us_subject.val() + '&email_us_message=' + email_us_message.val() + '&appTypeValue=' + appTypeValue + '&appIndustryValue=' + appIndustryValue +'&testingDeliverablesValue=' +String(testingDeliverablesValue) + '&osValue=' + osValue + '&testingDurationValue=' + testingDurationValue + '&priceEstimate=' + String(final_price_p1 + '-'+ final_price_p2);
		
        $('.text').attr('disabled','true');
         
        //start the ajax
        $.ajax({           
            url: "process-email.php",             
            type: "GET",
			data: data,
            cache: false,
            success: function (html) {                            
                if (html==1) {                 
                    //hide the form
                    $('#email-form-wrapper').fadeOut('slow');                
                     
                    //show the success message
                    $('.email-sent-done').fadeIn('slow');
                     
                //if process.php returned 0/false (send mail failed)
                } else alert('Sorry, unexpected error. Please try again later.');              
            }      
        });
        return false;
    });
//Sending Email: On Click of Schedule a Demo
$('#popup-demo-submit').click(function () {
	var demo_us_first_name = $('input[name=demo_us_first_name]');
	var demo_us_last_name = $('input[name=demo_us_last_name]');
    var demo_us_email = $('input[name=demo_us_email]');
	var demo_us_company = $('input[name=demo_us_company]'); 	
    var demo_us_message = $('textarea[name=demo_us_message]');	
	var demo_us_calendar = String($('#datepicker').val());
	var demo_us_time_picker = String($('select#demo_us_time_picker').val());
	var demo_us_timezone_picker = String($('select#demo_us_timezone').val());
	
     //organize the data properly
     var data = 'demo_us_first_name=' + demo_us_first_name.val() +'&demo_us_last_name=' + demo_us_last_name.val() + '&demo_us_email=' + demo_us_email.val() + '&demo_us_company=' + demo_us_company.val() + '&demo_us_message=' + demo_us_message.val() +'&demo_us_calendar=' + demo_us_calendar + '&demo_us_time_picker=' + demo_us_time_picker+ '&demo_us_timezone_picker=' + demo_us_timezone_picker + '&appTypeValue=' + appTypeValue + '&appIndustryValue=' + appIndustryValue +'&testingDeliverablesValue=' +String(testingDeliverablesValue) + '&osValue=' + osValue + '&testingDurationValue=' + testingDurationValue + '&priceEstimate=' + String(final_price_p1 + '-'+ final_price_p2);
				
        $('.text').attr('disabled','true');
         
        //start the ajax
        $.ajax({           
            url: "process-schedule-demo-email.php",             
            type: "GET",
			data: data,
            cache: false,
            success: function (html) {                            
                if (html==1) {                 
                    //hide the form
                    $('#demo-form-wrapper').fadeOut('slow');                
                     
                    //show the success message
                    $('.demo-email-sent-done').fadeIn('slow');
                     
                //if process.php returned 0/false (send mail failed)
                } else alert('Sorry, unexpected error. Please try again later.');              
            }      
        });
        return false;
}); 	
	
//Sending Email: On Click of Talk in Person
$('#popup-tip-submit').click(function () {
	var tip_us_first_name = $('input[name=tip_us_first_name]');
	var tip_us_last_name = $('input[name=tip_us_last_name]');
    var tip_us_email = $('input[name=tip_us_email]');
	var tip_us_company = $('input[name=tip_us_company]'); 
	var tip_us_subject = $('input[name=tip_us_subject]'); 
    var tip_us_message = $('textarea[name=tip_us_message]');
               
        //organize the data properly
        var data = 'tip_us_first_name=' + tip_us_first_name.val() +'&tip_us_last_name=' + tip_us_last_name.val() + '&tip_us_email=' + tip_us_email.val() + '&tip_us_company=' + tip_us_company.val() + '&tip_us_subject='+ tip_us_subject.val() + '&tip_us_message=' + tip_us_message.val() + '&appTypeValue=' + appTypeValue + '&appIndustryValue=' + appIndustryValue +'&testingDeliverablesValue=' +String(testingDeliverablesValue) + '&osValue=' + osValue + '&testingDurationValue=' + testingDurationValue + '&priceEstimate=' + String(final_price_p1 + '-'+ final_price_p2);
				
        $('.text').attr('disabled','true');
         
        //start the ajax
        $.ajax({           
            url: "process-tip-email.php",             
            type: "GET",
			data: data,
            cache: false,
            success: function (html) {                            
                if (html==1) {                 
                    //hide the form
                    $('#tip-form-wrapper').fadeOut('slow');                
                     
                    //show the success message
                    $('.tip-sent-done').fadeIn('slow');
                     
                //if process.php returned 0/false (send mail failed)
                } else alert('Sorry, unexpected error. Please try again later.');              
            }      
        });
        return false;
    }); 
	
//Sending Email: On Share With Others
$('#popup-share-submit').click(function () {
	
	var share_us_your_email = $('input[name=share_us_your_email]');
	var share_us_friend_email = $('input[name=share_us_friend_email]');
	var share_us_subject = $('input[name=share_us_subject]');
	var share_us_message = $('textarea[name=share_us_message]');
	
        //organize the data properly
        var data = 'share_us_your_email=' + share_us_your_email.val() +'&share_us_friend_email=' + share_us_friend_email.val() + '&share_us_subject=' + share_us_subject.val() + '&share_us_message=' + share_us_message.val() + '&appTypeValue=' + appTypeValue + '&appIndustryValue=' + appIndustryValue +'&testingDeliverablesValue=' +String(testingDeliverablesValue) + '&osValue=' + osValue + '&testingDurationValue=' + testingDurationValue + '&priceEstimate=' + String(final_price_p1 + '-'+ final_price_p2);
				
        $('.text').attr('disabled','true');
         
        //start the ajax
        $.ajax({           
            url: "process-share-with-others-email.php",             
            type: "GET",
			data: data,
            cache: false,
            success: function (html) {                            
                if (html==1) {                 
                    //hide the form
                    $('#share-form-wrapper').fadeOut('slow');                
                     
                    //show the success message
                    $('.swo-sent-done').fadeIn('slow');
                     
                //if process.php returned 0/false (send mail failed)
                } else alert('Sorry, unexpected error. Please try again later.');              
            }      
        });
        return false;
    });
	
	

});