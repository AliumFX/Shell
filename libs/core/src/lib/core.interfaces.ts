import { SecurityState } from './security/security.interfaces';

/**
 * Represents the core application state
 */
export interface CoreState {
  /**
   * The security state
   */
  security: SecurityState;
}
