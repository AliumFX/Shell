import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoreState } from './../core.interfaces';
import { SecurityState } from './security.interfaces';

/** SELECTORS */
export const securitySelector = createFeatureSelector<CoreState, SecurityState>('security');
export const accessSelector = createSelector(securitySelector, s => s.access);
export const userSelector = createSelector(securitySelector, s => s.user);
