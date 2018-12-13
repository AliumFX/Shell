import { InjectionToken } from '@angular/core';
import { Environment } from './env.interfaces';

/**
 * An injection token for injecting the environment configuration into services and components
 */
export const AX_ENVIRONMENT = new InjectionToken<Environment>('Environment');
