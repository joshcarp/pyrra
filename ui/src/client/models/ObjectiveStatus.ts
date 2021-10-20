/* tslint:disable */
/* eslint-disable */
/**
 * Pyrra
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ObjectiveStatusAvailability,
    ObjectiveStatusAvailabilityFromJSON,
    ObjectiveStatusAvailabilityFromJSONTyped,
    ObjectiveStatusAvailabilityToJSON,
    ObjectiveStatusBudget,
    ObjectiveStatusBudgetFromJSON,
    ObjectiveStatusBudgetFromJSONTyped,
    ObjectiveStatusBudgetToJSON,
} from './';

/**
 * 
 * @export
 * @interface ObjectiveStatus
 */
export interface ObjectiveStatus {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ObjectiveStatus
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {ObjectiveStatusAvailability}
     * @memberof ObjectiveStatus
     */
    availability: ObjectiveStatusAvailability;
    /**
     * 
     * @type {ObjectiveStatusBudget}
     * @memberof ObjectiveStatus
     */
    budget: ObjectiveStatusBudget;
}

export function ObjectiveStatusFromJSON(json: any): ObjectiveStatus {
    return ObjectiveStatusFromJSONTyped(json, false);
}

export function ObjectiveStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObjectiveStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'labels': !exists(json, 'labels') ? undefined : json['labels'],
        'availability': ObjectiveStatusAvailabilityFromJSON(json['availability']),
        'budget': ObjectiveStatusBudgetFromJSON(json['budget']),
    };
}

export function ObjectiveStatusToJSON(value?: ObjectiveStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'labels': value.labels,
        'availability': ObjectiveStatusAvailabilityToJSON(value.availability),
        'budget': ObjectiveStatusBudgetToJSON(value.budget),
    };
}


