/**
 * Represents access state information
 */
export interface AccessState {
  /**
   * The access token for the current user
   */
  accessToken: string;
  /**
   * The current state of authentication
   */
  authenticated: boolean;
}

/**
 * Represents user state information
 */
export interface UserState {
  /**
   * The user's forename
   */
  forename: string;
  /**
   * The user's surname
   */
  surname: string;
  /**
   * The user's email address
   */
  email: string;
  /**
   * The user's username
   */
  username: string;
}

/**
 * Represents security state information
 */
export interface SecurityState {
  /**
   * The access state
   */
  access: AccessState;
  /**
   * The user state
   */
  user: UserState;
}
