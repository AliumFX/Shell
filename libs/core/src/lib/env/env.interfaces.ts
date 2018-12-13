/**
 * Represents the environment
 */
export interface Environment {
  /**
   * If true, the application is built for the PRODUCTION environment
   */
  production: boolean;

  /**
   * The base URL for API calls
   */
  baseUrl: string;
}
