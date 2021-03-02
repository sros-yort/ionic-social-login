# Social Login

## Google Login Config

Create google OAuth 2.0 Client IDs for android
https://console.developers.google.com/apis/credentials

Add your google OAuth 2.0 Client IDs to file ```package.json```

    "cordova": {
    "plugin": {
      "cordova-plugin-googleplus": {
        "REVERSED_CLIENT_ID": "com.***",
        "WEB_APPLICATION_CLIENT_ID": "***.apps.googleusercontent.com"
      }
    }

