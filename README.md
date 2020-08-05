# Madlogic One

## How to run

- install node_modules and Pods: `npm i && cd ios && npx pod-install`
- create directory for temporary bundle file: `mkdir android/app/src/main/assets`
- in android, run `npm run dev-android`
- in ios, before running file `.xcworkspace`, convert the `SqoonySDKReact.framework` to Swift 5 then run normally by pressing ⌘ + R
  ![Swift 5 Conversion](https://i.imgur.com/ZIhNkrh.png)

## Mocking

- currently, the ClientCode screen is using mocked data => for login with ADFS, using code 0, with username and password, using code 1, with email only, using code 2
