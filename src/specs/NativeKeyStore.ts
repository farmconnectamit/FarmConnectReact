import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {

  setGenericPassword(password: string): Promise<boolean>;
  setRefreshToken(refresh:string): Promise<boolean>;
  getRefreshToken(): Promise<{ token: string } | null>
  getGenericPassword(): Promise<{ password: string } | null>;
  resetGenericPassword(): Promise<boolean>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeKeyStore');