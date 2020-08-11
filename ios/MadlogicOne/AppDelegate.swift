import Foundation
import UIKit
import SqoonySDK

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  var window: UIWindow?
  var bridge: RCTBridge!
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    let jsCodeLocation: URL
    jsCodeLocation = RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource:nil)
    let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "MadlogicOne", initialProperties: nil, launchOptions: launchOptions)
    let rootViewController = UIViewController()
    rootViewController.view = rootView
    self.window = UIWindow(frame: UIScreen.main.bounds)
    self.window?.rootViewController = rootViewController
    self.window?.makeKeyAndVisible()
    return true
  }
  
  func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
      Sqoony.shared.application(application, didRegisterForRemoteNotificationsWithDeviceToken: deviceToken)
  }

  func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
      Sqoony.shared.application(application, didFailToRegisterForRemoteNotificationsWithError: error)
  }

  func application(_ application: UIApplication, didReceiveRemoteNotification userInfo: [AnyHashable: Any], fetchCompletionHandler completionHandler: @escaping (UIBackgroundFetchResult) -> Void) {
      Sqoony.shared.application(application, didReceiveRemoteNotification: userInfo, fetchCompletionHandler: completionHandler)
  }
}
