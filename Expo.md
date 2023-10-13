# Set up

Use node version 14.19.0

```
nvm install 14.19.0
nvm use 14.19.0
```

- `npm install --global expo-cli eas-cli`

# Commands
`eas init`
- turns the repo into a project that can be deployed with expo or smth

`eas build:configure`
- Helps you make a config file that will be used when your app is built

`eas update`
- Deploy

`eas update --branch develop`
- Deploy the develop branch

`eas build`
- Builds your project for the app stores. For now, only build it for Android because that's easiest.

`eas submit`
- Submit to the app stores

`eas --help`
- Shows details for more commands

## Docs
https://docs.expo.dev/submit/android/
https://github.com/expo/fyi/blob/main/creating-google-service-account.md
https://github.com/expo/fyi/blob/main/first-android-submission.md
