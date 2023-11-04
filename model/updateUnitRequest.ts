/**
 * ManageSpace Orgs API
 * ManageSpace Orgs API Documentation
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Condition } from './condition';
import { UnitFeature } from './unitFeature';
import { UnitPosition } from './unitPosition';


export interface UpdateUnitRequest { 
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
    position: UnitPosition;
    /**
     * Unit Features
     */
    unitFeatures: Array<UnitFeature>;
    /**
     * Unit Conditions
     */
    conditions: Array<Condition>;
    /**
     * The Unit ID
     */
    unitId?: string;
    /**
     * The Organization ID
     */
    orgId?: string;
    /**
     * The site ID
     */
    siteId?: string;
    /**
     * Location ID
     */
    locationId: string;
    /**
     * Status
     */
    statusId?: number;
    /**
     * The dimensions of the unit
     */
    dimensions?: string;
    /**
     * Created Date
     */
    createdAt?: string;
    /**
     * Updated Date
     */
    updatedAt?: string | null;
}

