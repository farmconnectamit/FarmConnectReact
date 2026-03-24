import NativeKeyStore from '../specs/NativeKeyStore';

const AUTH = "auth.ts "
export const isAuthenticated = async (): Promise<boolean> => {
  try {
    const tokenData = await NativeKeyStore.getGenericPassword();
    return tokenData !== null && tokenData.password !== null;
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
};

export const clearTokens = async (): Promise<void> => {
  try {
    await NativeKeyStore.resetGenericPassword();
  } catch (error) {
    console.error('Error clearing tokens:', error);
  }
};

export const setRefreshToken = async (token: string): Promise<boolean> => {
  try {
    return await NativeKeyStore.setRefreshToken(token);
  } catch (error) {
    console.error('Error setting token:', error);
    return false;
  }
};

export const setAuthToken = async (token: string): Promise<boolean> => {
  try {
    return await NativeKeyStore.setGenericPassword(token);
  } catch (error) {
    console.error('Error setting token:', error);
    return false;
  }
};

export const getAuthToken = async (screenName: string = ""): Promise<string | null> => {
  try {
    const tokenData = await NativeKeyStore.getGenericPassword();
    const path = screenName + " "+ AUTH
    console.log(path+ " ===== DEBUG =====");
    console.log(path+ " Type:", typeof tokenData);
    console.log(path + " Is null?", tokenData === null);
    console.log(path + " Value:", tokenData);
    console.log(path + " JSON:", JSON.stringify(tokenData));
    if (tokenData && typeof tokenData === 'object') {
      console.log(path + " Keys:", Object.keys(tokenData));
      console.log(path + " Has password?", 'password' in tokenData);
    }
    console.log(path+ " ===== END =====");
    // Return based on actual type
    if (tokenData && typeof tokenData === 'object' && 'password' in tokenData) {
      return tokenData.password;
    }
    
    if (typeof tokenData === 'string') {
      return tokenData;
    }
    
    return null;
  } catch (error) {
    console.error('Error getting token:', error);
    return null;
  }
};

export const getRefreshToken = async (screenName: string = ""): Promise<string | null> => {
  const refreshTokenData = await NativeKeyStore.getRefreshToken();
  return refreshTokenData && typeof refreshTokenData.token === 'string' ? refreshTokenData.token : null;
}