#import "ViewController.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@interface ViewController ()

@end

@implementation ViewController

- (void)loadView {
    NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.appclip" fallbackExtension:nil];

    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"AppClip"
                                                 initialProperties:nil
                                                     launchOptions:nil];
    rootView.backgroundColor = [UIColor colorWithRed:1.0f green:1.0f blue:1.0f alpha:1.0f];

    self.view = rootView;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Additional setup after loading the view.
}
@end