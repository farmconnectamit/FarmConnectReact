import { getAuthToken, clearTokens, setAuthToken, getRefreshToken, setRefreshToken } from './auth';

/**
 * Refresh JWT token using Django's refresh endpoint
 * @param refreshToken - The refresh token to use for getting new access token
 * @returns Promise resolving to new access token or null if failed
 */

const refreshUrl = 'http://192.168.1.2:8000/api/v1/refresh';

export const refreshJwtToken = async (): Promise<string | null> => {
  try {
    // This would be the actual API call to your Django backend
    // For now, we'll just return null to indicate that the token has expired
    // and should be cleared
    
    console.log('Attempting to refresh JWT token...');
    
    // In a real implementation, you would make an API call like:
    const token = await getRefreshToken()
    const response = await fetch(refreshUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh: token }),
    });
    
    if (response.ok) {
      const data = await response.json();
      console.log("Refresh data: " + data);
      await setRefreshToken(data.refresh)
      await setAuthToken(data.access)
      return data.access || null;
    }
    /**/
    
    // For now, we'll just clear the token as a placeholder
    await clearTokens();
    return null;
  } catch (error) {
    console.error('Error refreshing JWT token:', error);
    // Even if refresh fails, clear the tokens to prevent further unauthorized requests
    await clearTokens();
    return null;
  }
};

/**
 * Check if token is expired and handle accordingly
 * @param apiResult - The result from an API call that might have failed due to token expiration
 * @returns Promise resolving to whether the operation should be retried or not
 */
export const handleTokenExpiration = async (apiResult: any): Promise<boolean> => {
  if (apiResult?.error?.status === 401) {
    console.log('Token expired, clearing tokens and redirecting to login...');
    
    try {
      // Clear existing tokens
      await clearTokens();
      
      // In a real app, you would navigate to login screen here
      // This would require access to navigation in React components
      
      return false; // Don't retry the operation
    } catch (error) {
      console.error('Failed to handle token expiration:', error);
      return false;
    }
  }
  
  return true; // Continue with normal operation
};