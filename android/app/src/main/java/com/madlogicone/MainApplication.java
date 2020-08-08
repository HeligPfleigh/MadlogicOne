package com.madlogicone;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import com.sqoony.sdk.Sqoony;
import com.sqoony.sdk.SqoonyCallback;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }


  private class MSqoonyCallback implements SqoonyCallback {

      @Override
      public void registerOk(boolean b) {

      }

      @Override
      public void registerError(String s) {

      }

      @Override
      public void activatedOk() {

      }

      @Override
      public void activatedError(String s) {

      }

      @Override
      public void synced() {

      }

      @Override
      public void syncFailed(String s) {

      }

      @Override
      public void segmentsChanged() {

      }

      @Override
      public void segmentsChangeError(String s) {

      }

      @Override
      public void triggersChanged() {

      }

      @Override
      public void automatedBroadcastsLocationChanged() {

      }

      @Override
      public void broadcastsPlayedFromNotification(boolean b) {

      }

      @Override
      public void onNotificationUnreadChange(int i) {

      }

      @Override
      public void onCustomCTA(String s) {

      }

      @Override
      public void onBroadcastView(String s) {

      }

      @Override
      public void onBroadcastWatched(String s) {

      }
  }

  private MSqoonyCallback mSqoonyCallback;

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    // temporary fix for crashing when FCMService is trying to access application context before it is initialized
    mSqoonyCallback = new MSqoonyCallback();
    Sqoony.init("", "1.00", "", "204086430232", this, MainActivity.class, mSqoonyCallback);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.madlogicone.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
