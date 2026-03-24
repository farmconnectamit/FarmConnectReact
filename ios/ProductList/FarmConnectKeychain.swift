import Foundation
import Security

@objc(FarmConnectKeychain)
class FarmConnectKeychain: NSObject {
    
    private static let serviceName = "farm_connect_auth"
    
    @objc(setGenericPassword:service:resolver:rejecter:)
    static func setGenericPassword(_ password: String, service: String, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        do {
            // Create a dictionary with the password
            let query: [String: Any] = [
                kSecClass as String: kSecClassGenericPassword,
                kSecAttrService as String: service,
                kSecValueData as String: password.data(using: .utf8)!,
                kSecAttrAccessible as String: kSecAttrAccessibleWhenUnlocked
            ]
            
            // Delete existing item if it exists
            SecItemDelete(query as CFDictionary)
            
            // Add new item
            let status = SecItemAdd(query as CFDictionary, nil)
            
            if status == errSecSuccess {
                resolve(true)
            } else {
                reject("ERROR", "Failed to store password", NSError(domain: "", code: Int(status), userInfo: nil))
            }
        } catch {
            reject("ERROR", "Failed to store password", error)
        }
    }
    
    @objc(getGenericPassword:resolver:rejecter:)
    static func getGenericPassword(_ service: String, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrService as String: service,
            kSecReturnData as String: true,
            kSecMatchLimit as String: kSecMatchLimitOne
        ]
        
        var result: AnyObject?
        let status = SecItemCopyMatching(query as CFDictionary, &result)
        
        if status == errSecSuccess {
            if let data = result as? Data {
                if let password = String(data: data, encoding: .utf8) {
                    resolve(password)
                } else {
                    reject("ERROR", "Failed to decode password", nil)
                }
            } else {
                resolve(nil)
            }
        } else if status == errSecItemNotFound {
            resolve(nil)
        } else {
            reject("ERROR", "Failed to retrieve password", NSError(domain: "", code: Int(status), userInfo: nil))
        }
    }
    
    @objc(resetGenericPassword:resolver:rejecter:)
    static func resetGenericPassword(_ service: String, resolver resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrService as String: service
        ]
        
        let status = SecItemDelete(query as CFDictionary)
        
        if status == errSecSuccess || status == errSecItemNotFound {
            resolve(true)
        } else {
            reject("ERROR", "Failed to clear password", NSError(domain: "", code: Int(status), userInfo: nil))
        }
    }
}