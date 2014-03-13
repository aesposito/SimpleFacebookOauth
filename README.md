SimpleFacebookOauth
===================

Simple javascript facebook oauth

<br/>
<strong>Example:</strong>
<br/><br/>

```html

<head>
	<script type="text/javascript" src="https://connect.facebook.net/en_US/all.js"></script>
	<!-- Replace YOUR_APP_ID in SimpleFacebookOauth.js file-->
	<script type="text/javascript" src="SimpleFacebookOauth.js"></script>
</head>

<html>
...
	<script>

	var oauth = new SimpleFacebookOauth();

	//Login Facebook oauth
	oauth.login({scope:'email,publish_stream'}, function(success, token){
		if (success)
		{

		}
	});

	//Publish in user's wall
	oauth.publish({
		message: "message",
		picture: "http://...",
		link: "http://..."
	}, function(e){
		//Callback publish finish
	});

	//User info
	oauth.getMe(function(me){
		//me.name
		//me.first_name
		//me.last_name
		//me.email
		//me.picture
	});

	</script>

...
</html>

```

<br/>
<strong>Functions</strong>
<br/><br/>

* Facebook Oauth
* Get user info
* Publish Stream
* Check login status

<h2>Changelog</h2>
#### 1.0<br/>
* SimpleFacebookOauth