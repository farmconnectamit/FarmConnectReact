import React

@objc(SampleTurboModule)
class SampleTurboModule: NSObject, RCTTurboModule {
  var moduleRegistry: RCTModuleRegistry?
  
  @objc static func requiresMainQueueSetup() -> Bool {
    return false
  }
  
  // Implement the methods you want to expose to JavaScript
  @objc func getString(_ callback: RCTResponseSenderBlock) {
    callback(["Hello from Turbo Module"])
  }
  
  @objc func multiply(_ a: Double, b: Double, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    resolve(a * b)
  }
  
  // If you need to provide constants
  @objc func constantsToExport() -> [String: Any]? {
    return [
      "NAME": "SampleTurboModule"
    ]
  }
}
