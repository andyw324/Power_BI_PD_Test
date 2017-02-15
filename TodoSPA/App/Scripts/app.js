'use strict';
angular.module('todoApp', ['ngRoute','AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/App/Views/Home.html",
    }).when("/TodoList", {
        controller: "todoListCtrl",
        templateUrl: "/App/Views/TodoList.html",
        requireADLogin: true,
    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/App/Views/UserData.html",
    }).when("/Report", {
        controller: "reportCtrl",
        templateUrl: "/App/Views/Report.html",
    }).otherwise({ redirectTo: "/Home" });

    adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/', 
            tenant: 'homeofficegsigovuk.onmicrosoft.com',
            clientId: '2ad5dba7-b359-483c-89e2-3da5878eb8e5',
            extraQueryParameter: 'nux=1',
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
        );
   
}]);



////////////////////// - commented out start - ////////////////////////////
        // //This code is for sample purposes only.

        // //Configure IFrame for the Report after you have an Access Token. See Default.aspx.cs to learn how to get an Access Token
        // window.onload = function () {
        //     if ("" != document.getElementById('MainContent_accessToken').value)
        //     {
        //         var iframe = document.getElementById('power-bi-report');

        //         // To load a Report do the following:
        //         // Set the IFrame source to the EmbedUrl from the Get Reports operation
        //         iframe.src = document.getElementById('MainContent_ReportEmbedUrl').value;

        //         // Add an onload handler to submit the access token
        //         iframe.onload = postActionLoadReport;
        //     }
        // };

        // // Post the access token to the IFrame
        // function postActionLoadReport() {

        //     // Construct the push message structure
        //     // this structure also supports setting the reportId, groupId, height, and width.
        //     // when using a report in a group, you must provide the groupId on the iFrame SRC
        //     var m = {
        //         action: "loadReport",
        //         accessToken: document.getElementById('MainContent_accessToken').value
        //     };
        //     message = JSON.stringify(m);

        //     // push the message.
        //     iframe = document.getElementById('iFrameEmbedReport');
        //     iframe.contentWindow.postMessage(message, "*");;
        // }

////////////////////// - commented out end - ////////////////////////////

function testbutton() {
    var iframe = document.getElementById('power-bi-report');
    var rptContainerHdr = document.getElementById('report-container-header');
    if ("Google" == rptContainerHdr.innerHTML)
    {
        rptContainerHdr.innerHTML = "Bing";
        iframe.src = "http://www.bing.co.uk";    
    } else {
        rptContainerHdr.innerHTML = "Google Maps";
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.349685956168!2d-0.10071463395430447!3d51.378250879614114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876073207bc0495%3A0xd5ea7934b2506711!2sLunar+House%2C+Croydon+CR0!5e0!3m2!1sen!2suk!4v1487063829320";
    }

}


function getToken() {
    var outputTo = document.getElementById('tokenText');
    var token = window.sessionStorage.getItem('adal.idtoken');
    console.log("token = " + token);
    outputTo.innerHTML = token;
}

//nsFv4nvWj6Qqa7s6pMZUr4YFZGvUv/LYyXequ8oyvT8=

// $(function() {
//  var $mainReportContainer = $('#mainReportContainer');
//  $.getJSON('https://api.powerbi.com/groups/me/reports/4dbb8f18-0933-490c-8ee9-31d1d3f11284')
//      .then(function (embedConfiguration) {
//          powerbi.embed($mainReportContainer.get(0),embedConfiguration);  
//      });
// });
