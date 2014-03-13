/*
SimpleFacebookOauth
Simple javascript facebook oauth
(c) Alexis Esposito 2014 (@alexisesposito)
*/

window.fbAsyncInit = function() {
	FB.init({ 
		appId: 'YOUR_APP_ID', 
		status: true, 
		cookie: true,
		xfbml: true,
		oauth: true
	});
};


function SimpleFacebookOauth () {

	this.login = function(scope, callback) {
		FB.login(function(response) {
			callback(response.authResponse, response.authResponse.accessToken);
		}, scope);
	};


	this.getMe = function(callback)
	{
		FB.api('/me', function(response) {
			callback({
				id: response.id, 
				name:response.name, 
				first_name:response.first_name,
				last_name:response.last_name, 
				email:response.email, 
				picture: "https://graph.facebook.com/" + response.id + "/picture/?type=large"
			});	

		});
	};

	this.publish = function(options, callback){
		FB.api('/me/feed', 'POST', options, function(response) {
			callback();
		})
	};

	this.checkLogin = function(callback)
	{
		FB.getLoginStatus(function(response) {
			if (response.status === 'connected') {
				callback({
					success: true, 
					id: response.authResponse.userID, 
					token: response.authResponse.accessToken
				});
			} 
			else
			{
				callback({
					success: false
				});
			}		
		});
	}
}