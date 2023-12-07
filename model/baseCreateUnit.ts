/**
 * ManageSpace Orgs API
 * ManageSpace Orgs API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Condition } from './condition';
import { UnitFeature } from './unitFeature';
import { Position } from './position';


export interface BaseCreateUnit { 
    /**
     * Unit Name
     */
    unitName: string;
    /**
     * Unit Description
     */
    unitDescription: string | null;
    /**
     * Unit Type ID
     */
    unitTypeId: number;
    /**
     * Status
     */
    statusId: number;
    /**
     * Length
     */
    length: number;
    /**
     * Width
     */
    width: number;
    /**
     * Height
     */
    height: number | null;
    /**
     * Size
     */
    size: number | null;
    /**
     * Metric
     */
    metricId: number;
    /**
     * Standard Price
     */
    standardPrice: number | null;
    /**
     * Tax
     */
    tax: number | null;
    /**
     * Security Deposit
     */
    unitSecurityDeposit: number | null;
    /**
     * Walk through order
     */
    walkThroughOrder: number | null;
    /**
     * Currency
     */
    currencyId: number | null;
    /**
     * Floor
     */
    floor: number | null;
    /**
     * Notes
     */
    notes: string | null;
    position: Position;
    /**
     * Unit Features
     */
    unitFeatures: Array<UnitFeature>;
    /**
     * Unit Conditions
     */
    conditions: Array<Condition>;
}

