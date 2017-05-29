package com.camecame;

import com.facebook.react.ReactActivity;
import com.wix.RNCameraKit.RNCameraKitPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.rnfs.RNFSPackage;
import fr.greweb.reactnativeviewshot.RNViewShotPackage;
import com.imagepicker.ImagePickerPackage;
import com.lwansbrough.RCTCamera.*;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "CameCame";
    }

    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
            new RNCameraKitPackage(),
            new VectorIconsPackage(),
            new RNFSPackage(),
            new RNViewShotPackage(),
            new ImagePickerPackage(),
                    new RCTCameraPackage()
                );
    }
}
