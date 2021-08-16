var initAppConfig=function(){domainUrl="",authUrl="",appRoutes=[""],envConfig={"blue-app/app":{cache:clientEnvProps.serviceData},"blue/siteMode":clientEnvProps.siteMode,"blue/siteData":{}},appConfig={"blue-app/app":{defaultMocking:!1,AUTH_INDEX:"/web/auth/#",AUTH_LOGOFF_PATH:"logon",ACCOUNTS_INDEX:"/web/accounts#",PROFILE_INDEX:"/web/accounts#",ASSETS_INDEX:clientEnvProps["app.content.domain"]+"/common/assets/",authDeviceCookie:clientEnvProps["app.devicecookie"],rocketFuelAdOfferAudienceUrl:clientEnvProps["app.rocket.fuel.adofferaudience.url"],rocketFuelAudienceUrl:clientEnvProps["app.rocket.fuel.audience.url"],mobileBankingUrl:clientEnvProps["app.classic.mobile.domain"]+"/",classicBaseUrl:clientEnvProps["app.classic.chaseonline.web.domain"]+"/",privateBankingUrl:clientEnvProps["app.classic.jpmorgan.web.domain"]+"/",authServiceCrossDomain:!1,geoImageUrl:"https://"+clientEnvProps["app.cq5.host"]+"/content/geo-images/images",cq5ResourceBase:"https://"+clientEnvProps["app.cq5.host"],pubUrl:clientEnvProps["app.pub.domain"],dpsAuthPath:"/web/auth/",mobileEnabledPods:clientEnvProps["app.mobileEnabledPods"],gwmPortalDomainUrl:clientEnvProps["app.gwmportal.domain"],cfapDomainUrl:clientEnvProps["app.cfap.domain"],retirementCalculatorDomain:clientEnvProps["app.retirementCalculator.domain"],contentAgreementHost:"https://"+clientEnvProps["content.agreement.host"],tagServerHost:clientEnvProps["app.tagManager.server"],ULTIMATE_REWARDS_SITE:clientEnvProps["app.ultimate.rewards.web.domain"],cbwelcomeDocUrl:clientEnvProps["app.cbwelcome.document.web.domain"],cbwelcomeOpenUrl:clientEnvProps["app.cbwelcome.open.web.domain"],idcDomainUrl:clientEnvProps["app.idc.host"],classicDomains:{CLASSIC_APPLY_URI:clientEnvProps["app.classic.apply.web.domain"],CLASSIC_APPLYNOW_URI:clientEnvProps["app.classic.applynow.web.domain"],CLASSIC_BANKING_URI:clientEnvProps["app.classic.banking.web.domain"],CLASSIC_BORROWER_PORTAL_URI:clientEnvProps["app.classic.borrowerportal.web.domain"],CLASSIC_CARDS_URI:clientEnvProps["app.classic.cards.web.domain"],CLASSIC_CHASEONLINE_URI:clientEnvProps["app.classic.chaseonline.web.domain"],CLASSIC_INVESTMENTS_URI:clientEnvProps["app.classic.investments.web.domain"],CLASSIC_JPMORGAN_URI:clientEnvProps["app.classic.jpmorgan.web.domain"],CLASSIC_PAYMENTS_URI:clientEnvProps["app.classic.payments.web.domain"],CLASSIC_SERVICING_URI:clientEnvProps["app.classic.servicing.web.domain"],CLASSIC_STATEMENTS_URI:clientEnvProps["app.classic.stmts.web.domain"],CLASSIC_MESSAGE_CENTER_URI:clientEnvProps["app.classic.messagecenter.web.domain"],CLASSIC_CHASEPAY_URI:clientEnvProps["app.classic.chasepay.web.domain"],CLASSIC_APPLY_URI_ES:clientEnvProps["app.classic.apply.espanol.web.domain"],CLASSIC_BANKING_URI_ES:clientEnvProps["app.classic.banking.espanol.web.domain"],CLASSIC_CARDS_URI_ES:clientEnvProps["app.classic.cards.espanol.web.domain"],CLASSIC_CHASEONLINE_URI_ES:clientEnvProps["app.classic.chaseonline.espanol.web.domain"],CLASSIC_PAYMENTS_URI_ES:clientEnvProps["app.classic.payments.espanol.web.domain"],CLASSIC_SERVICING_URI_ES:clientEnvProps["app.classic.servicing.espanol.web.domain"],CLASSIC_STATEMENTS_URI_ES:clientEnvProps["app.classic.stmts.espanol.web.domain"],CLASSIC_MESSAGE_CENTER_URI_ES:clientEnvProps["app.classic.messagecenter.espanol.web.domain"],CLASSIC_CHASEPAY_URI_ES:clientEnvProps["app.classic.chasepay.espanol.web.domain"],CLASSIC_CWM_TRADING:clientEnvProps["app.classic.cwmtrading.web.domain"],CLASSIC_QUICKDEPOSIT_URI:clientEnvProps["app.classic.quickdeposit.web.domain"],CLASSIC_QUICKDEPOSIT_URI_ES:clientEnvProps["app.classic.quickdeposit.espanol.web.domain"]},thirdPartyClassicDomains:{CLASSIC_CWM_TRADING:clientEnvProps["app.classic.cwmtrading.web.domain"],CLASSIC_IDC:clientEnvProps["app.classic.idc.web.domain"]},dashboardUrl:"https://SECUREPOD/web/auth/dashboard"},require:{baseUrl:clientEnvProps["app.content.domain"]+"/",paths:{"appkit-utilities":"appkit-utilities/dist/appkit-utilities/js","blue-blocks":"blue-connect","blue-spec-shared":"blue-spec-shared/dist/spec",analytics:"blue-analytics/dist/analytics/js",screenmap:"blue-spec/dist/screen-map",logon:"logon/js",common:"common/js",dashboard:"dashboard/js",bluespec:"blue-spec/dist/spec","blue-ui":"blue-ui/dist/blue-ui/js","blue-legacy":"blue-legacy/dist/blue-legacy/js"}},"blue/log":{ALL:{level:clientDefaultLogLevel,enabled:clientDefaultLogEnabled},appender:{console:{level:clientConsoleLogLevel,enabled:clientConsoleLogEnabled},analytics:{level:clientAnalyticsLogLevel,enabled:clientAnalyticsLogEnabled}}},"analytics/eventTracker":{enableAnalytics:clientEnvProps["app.analytics.enabled"],analytics:{bufferInterval:clientEnvProps["app.analytics.bufferInterval.millisec"],maxReattempts:clientEnvProps["app.analytics.maxReattempts.count"],cooloffPeriod:clientEnvProps["app.analytics.cooloffPeriod.millisec"],eventTypes:{webEvent:clientEnvProps["app.analytics.webEvent.enabled"],screenEvent:clientEnvProps["app.analytics.screenEvent.enabled"],variableSettingsEvent:clientEnvProps["app.analytics.variableSettingsEvent.enabled"],decisionedContentEvent:clientEnvProps["app.analytics.decisionedContentEvent.enabled"],adsEvent:clientEnvProps["app.analytics.adsEvent.enabled"],loggingEvent:clientEnvProps["app.analytics.loggingEvent.enabled"],formFieldEvent:clientEnvProps["app.analytics.formFieldEvent.enabled"]}}},"logon/service/content":{remoteContentUrl:"https://"+clientEnvProps["app.cq5.host"]+"/content/resource-bundles/:site/:version/:language/bundles.json/logon.json",useLocalContent:!1,contentLanguage:appLanguage,contentSite:clientEnvProps["app.cq5.env"],contentVersion:clientEnvProps["app.content.bundleVersion"],contentUrls:{app:{remote:"https://"+clientEnvProps["app.cq5.host"]+"/content/resource-bundles/:site/:version/:language/bundles.json/logon.json",local:""}}},"logon/lib/browserDetector":{allowAndroid:clientEnvProps["app.allowAndroid"]},"blue-app/validate/types":{types:{Password:{constraints:[{type:"NonConsecutiveAlphaNumerics",params:{maxSeqential:3}},{type:"NonRepeatingAlphaNumerics",params:{maxRepeating:2}}]}}},services:[]},clientEnvProps["app.logon.banner"]&&(appConfig["logon/controller/siteMessage"]={standaloneWarning:!0}),clientEnvProps["app.blueJSVersion.enabled"]&&(blueDomain=clientEnvProps["app.blue.domain"])},loaderCallback=function(){var e=document,n=(e.location.protocol+"//"+e.location.hostname+(e.location.port?":"+e.location.port:"")).toLowerCase(),a={},o={packages:a},s="en",i="";try{top.postMessage(JSON.stringify({command:"netStart"}),n)}catch(l){}document.cookie.replace(/\bPC_1_0=([^;]+)/,function(e,n){decodeURIComponent(n).replace(/locale=([^_|]+)/,function(e,n){n&&"undefined"!==n&&(s=n)})}),clientEnvProps["app.content.useBrandContent"]&&document.cookie.replace(/\bBRAND_1_0=([^;]+)/,function(e,n){i=n+"/"});var p="https://"+clientEnvProps["app.cq5.host"]+"/content/resource-bundles/"+clientEnvProps["app.cq5.env"]+"/"+clientEnvProps["app.content.bundleVersion"]+"/"+s+"/bundles.json/";a[p+i]={json:{app:0,accounts:0,convoDeck:0,payMultipleBills:0,profile:0}},(a[p]||(a[p]={json:{}})).json.logon=0,loader.init(o);var t={packages:{}};clientEnvProps["app.blueJSVersion.enabled"]&&(t.packages[clientEnvProps["app.blue.domain"]]={js:{}},t.packages[clientEnvProps["app.blue.domain"]].js[clientEnvProps["app.blueBoot.version"]+"/main-ver"]=0,t.packages[clientEnvProps["app.blue.domain"]].js[clientEnvProps["app.blueVendor.version"]+"/main"]=0,t.packages[clientEnvProps["app.blue.domain"]].js[clientEnvProps["app.blue.version"]+"/main"]=0,t.packages[clientEnvProps["app.blue.domain"]].js[clientEnvProps["app.blueApp.version"]+"/main"]=0,t.packages[clientEnvProps["app.blue.domain"]].js[clientEnvProps["app.blueView.version"]+"/main"]=0),t.packages[clientEnvProps["app.content.domain"]+"/"]={js:{},png:{"common/assets/img/bwline":0},css:{"common/assets/blue-ui":0,"logon/assets/logon":0,"dashboard/assets/dashboard":0}},clientEnvProps["app.blueJSVersion.enabled"]?t.packages[clientEnvProps["app.content.domain"]+"/"].js={"logon/js/boot":0,"dashboard/js/main":0,"dashboard/payMultipleBills/js/main":0,"dashboard/profile/js/main":0,"appkit-utilities/dist/appkit-utilities/js/main":0}:t.packages[clientEnvProps["app.content.domain"]+"/"].js={"blue-boot/dist/blue-boot/js/main":0,"blue-vendor/dist/blue-vendor/js/main":0,"blue-core/dist/blue/js/main":0,"blue-app/dist/blue-app/js/main":0,"blue-view/dist/blue-view/js/main":0,"logon/js/boot":0,"dashboard/js/main":0,"dashboard/payMultipleBills/js/main":0,"dashboard/profile/js/main":0,"appkit-utilities/dist/appkit-utilities/js/main":0},loader.init(t),loader.ready(function(){var e=clientEnvProps["app.genericErrorPageUri"],a=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,o=[[{path:"common/assets/img/bwline",failure:loader.handlers.ignore,defer:!1}]];clientEnvProps["app.blueJSVersion.enabled"]?(o.push([{path:"common/assets/blue-ui",failure:loader.handlers.ignore,defer:!1},{path:"logon/assets/logon",failure:loader.handlers.ignore,defer:!1},clientEnvProps["app.blueVendor.version"]+"/main",clientEnvProps["app.blue.version"]+"/main",clientEnvProps["app.blueApp.version"]+"/main",clientEnvProps["app.blueView.version"]+"/main","appkit-utilities/dist/appkit-utilities/js/main","logon/js/boot","logon"]),o.push([{path:clientEnvProps["app.blueBoot.version"]+"/main-ver",failure:loader.handlers.redirect(clientEnvProps["app.error.scriptErrorPageUri"]),defer:!1}])):(o.push([{path:"common/assets/blue-ui",failure:loader.handlers.ignore,defer:!1},{path:"logon/assets/logon",failure:loader.handlers.ignore,defer:!1},"blue-vendor/dist/blue-vendor/js/main","blue-core/dist/blue/js/main","blue-app/dist/blue-app/js/main","blue-view/dist/blue-view/js/main","appkit-utilities/dist/appkit-utilities/js/main","logon/js/boot","logon"]),o.push([{path:"blue-boot/dist/blue-boot/js/main",failure:loader.handlers.redirect(clientEnvProps["app.error.scriptErrorPageUri"]),defer:!1}])),loader.loadGroups(o,{failure:loader.handlers.redirect(e),defer:!0,precache:!a});var s=0,i=[["dashboard/js/main"],["dashboard/payMultipleBills/js/main"],["dashboard/profile/js/main"]],l=[["app","convoDeck","accounts"],["common/assets/blue-ui","dashboard/assets/dashboard"],["dashboard/js/main"],["dashboard/payMultipleBills/js/main","payMultipleBills"],["dashboard/profile/js/main","profile"]],p=a?i:l,t=function(){var e=p[s++];e&&setTimeout(function(){loader.complete(t),loader.loadGroups([e],{defer:!0,failure:loader.handlers.ignore})},0)};loader.complete(function(){self===top?t():top.postMessage(JSON.stringify({command:"netFinish"}),n),clientEnvProps["app.blueJSVersion.enabled"]?require([clientEnvProps["app.blue.domain"]+clientEnvProps["app.blueBoot.version"]+"/boot.js"]):require(["blue-boot/boot"]),clientEnvProps=null})})},processClientEnvProps=function(){var e,n,a=["app.analytics.enabled","app.analytics.webEvent.enabled","app.analytics.screenEvent.enabled","app.analytics.variableSettingsEvent.enabled","app.analytics.decisionedContentEvent.enabled","app.analytics.adsEvent.enabled","app.analytics.loggingEvent.enabled","app.analytics.formFieldEvent.enabled","app.logon.banner","app.content.useBrandContent","app.blueJSVersion.enabled"],o=["app.analytics.bufferInterval.millisec","app.analytics.maxReattempts.count","app.analytics.cooloffPeriod.millisec"];for(e=a.length-1;e>=0;e--)n=a[e],clientEnvProps[n]=clientEnvProps[n]&&JSON.parse(clientEnvProps[n]);for(e=o.length-1;e>=0;e--)n=o[e],clientEnvProps[n]=clientEnvProps[n]&&JSON.parse(clientEnvProps[n])};processClientEnvProps(),initAppConfig(),initBrowserDetect();
//# sourceMappingURL=../../../../sourcemap/hash/logon/js/appConfig.js.map
