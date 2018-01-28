# ion-chat-app

## For Browser

Run `ionic serve` and navigate to `localhost:8100`. The app will automatically reload if you change any of the source files.

## For Android Testing

Run `ionic cordova run android` to test on Android simulator.

## For Android Publishing

Run `ionic cordova build --release android`.

This will generate a release build based on the settings in your config.xml.


## For IOS testing

Run 

1.) `ionic cordova build ios`

2.) `ionic cordova emulate ios`

3.) `ionic cordova prepare ios`

## For android builds

### Plugin to pass application build info (app name, ID, etc) to the OAuth widget.
1.) `cordova plugin add cordova-plugin-buildinfo --save`
### Plugin to handle Universal Links (Android app link redirects)
2.) `cordova plugin add cordova-universal-links-plugin --save`
### Plugin to handle opening secure browser views on iOS/Android mobile devices
3.) `cordova plugin add cordova-plugin-browsertab --save`
### Plugin to handle opening a browser view in older versions of iOS and Android
4.) `cordova plugin add cordova-plugin-inappbrowser --save`
### Plugin to handle deep linking through Custom Scheme for iOS
### Substitute *com.firebase.cordova* with the iOS bundle ID of your app.
5.) `cordova plugin add cordova-plugin-customurlscheme --variable \
    URL_SCHEME=com.firebase.cordova --save`
    
### Change your config.xml file
#### older version
<universal-links>

    <host name="DYNAMIC_LINK_DOMAIN" scheme="https" />
    
    <host name="AUTH_DOMAIN" scheme="https">
    
        <path url="/__/auth/callback"/>
        
    </host>
    
</universal-links>


#### newer version
<universal-links>

    <host name="abc123.app.goo.gl" scheme="https" />
    
    <host name="my-app.firebaseapp.com" scheme="https">
    
        <path url="/__/auth/callback"/>
        
    </host>

</universal-links>
