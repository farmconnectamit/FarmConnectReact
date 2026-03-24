#import <React/RCTBridgeModule.h>
#import <React/RCTTurboModule.h>
#import <ReactCommon/TurboModule.h>

@interface SampleTurboModule : NSObject <RCTTurboModule>
@end

@implementation SampleTurboModule

RCT_EXPORT_METHOD(getString:(RCTResponseSenderBlock)callback) {
  callback(@[@"Hello from Turbo Module"]);
}

RCT_EXPORT_METHOD(multiply:(double)a b:(double)b resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
  resolve(a * b);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params {
  // Implement Turbo Module binding if needed
  return nullptr;
}

RCT_EXPORT_MODULE()

@end
