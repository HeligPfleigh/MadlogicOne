# Madlogic One

## How to run

- install node_modules and Pods: `npm i && cd ios && npx pod-install`
- create directory for temporary bundle file: `mkdir android/app/src/main/assets`
- in android, run `npm run dev-android`
- in ios, before running file `.xcworkspace`, convert the `SqoonySDKReact.framework` to Swift 5 then run normally by pressing ⌘ + R
  ![Swift 5 Conversion](https://i.imgur.com/ZIhNkrh.png)

## Mocking

- currently, the ClientCode screen is using mocked data
  - for login with ADFS, using code 0, username: tly@equipezorgbedrijven.nl, password: N6#&r35zU#D
  - with username and password, using code 1, username: test@madlogic.nl, password: test123
  - with email only, using arbitrary code and email

## TODO

- the `FCMService` is called before `Sqoony.init` => my temporary solution is init it `onCreate` of Application (need to find other better solution)
