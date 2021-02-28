# Social Login

## Prerequisite dependencies

```shell
$ npm install
```

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

## Startup

For android via capacitor
```shell
  $ ionic cap run android -l --host your_ip
```

