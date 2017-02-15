'use strict';
angular.module('todoApp')
.controller('reportCtrl', ['$scope', 'adalAuthenticationService', function ($scope, adalService) {
    // Add new "load report id" function to add a user defined report id into session memory
    console.log('Scope is as follows:');
    console.log($scope);
    $scope.loadReport = function () {
        // test = window.sessionStorage.getItem('adal.idtoken');
        console.log($scope);
	    var outputTo = document.getElementById('appTokenPara');
	    var token = window.sessionStorage.getItem('adal.idtoken');
	    // console.log("token = " + token);
	    // outputTo.innerHTML = "Application Token: " + token;
        // $scope.reportId = document.GetElement
		window.onload = function () {
			if ("" != token)
	            {
	                var iframe = document.getElementById('power-bi-report');

	                // To load a Report do the following:
	                // Set the IFrame source to the EmbedUrl from the Get Reports operation
	                iframe.src = $scope.reportId;//document.getElementById('MainContent_ReportEmbedUrl').value;

	                // Add an onload handler to submit the access token
	                iframe.onload = postActionLoadReport(token);
	            }
        };

        // Post the access token to the IFrame
        function postActionLoadReport(token) {

            // Construct the push message structure
            // this structure also supports setting the reportId, groupId, height, and width.
            // when using a report in a group, you must provide the groupId on the iFrame SRC
            
            var m = {
                action: "loadReport",
                accessToken: "Bearer " + token
            };
            
            var message = JSON.stringify(m);
			console.log("message: " + message);
            // push the message.
            iframe = document.getElementById('power-bi-report');
            iframe.contentWindow.postMessage(message, "*");//$scope.reportId);
        }

    };
}]);

//https://app.powerbi.com/reportEmbed?reportId=4dbb8f18-0933-490c-8ee9-31d1d3f11284