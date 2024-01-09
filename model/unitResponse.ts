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


export interface UnitResponse { 
    /**
     * Unit ID
     */
    unitId: string;
    /**
     * Unit Name
     */
    unitName: string;
    /**
     * Unit Description
     */
    unitDescription: string;
    /**
     * Org ID
     */
    orgId: string;
    /**
     * Site ID
     */
    siteId: string;
    /**
     * Location ID
     */
    locationId: string;
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
    height: number;
    /**
     * The dimensions of the unit
     */
    dimensions: string;
    /**
     * Size
     */
    size: number;
    /**
     * Metric
     */
    metricId: number;
    /**
     * Standard Price
     */
    standardPrice: number;
    /**
     * Tax
     */
    tax: number;
    /**
     * Security Deposit
     */
    unitSecurityDeposit: number;
    /**
     * Walk through order
     */
    walkThroughOrder: number;
    /**
     * Currency
     */
    currencyId: number;
    /**
     * Floor
     */
    floor: number;
    /**
     * Unit Conditions
     */
    conditions: Array<Condition>;
    /**
     * Inside Unit
     */
    notes: string;
    /**
     * Unit Features
     */
    unitFeatures: Array<UnitFeature>;
    position: Position;
    /**
     * Created at.
     */
    createdAt: string;
    /**
     * Updated at.
     */
    updatedAt: string | null;
    /**
     * Paid through date.
     */
    paidThrough: string | null;
    /**
     * Payment ststus
     */
    paymentStatus: UnitResponse.PaymentStatusEnum | null;
    /**
     * Reservation ID
     */
    reservationId: string | null;
    /**
     * Rental ID
     */
    rentalId: string | null;
}
export namespace UnitResponse {
    export type PaymentStatusEnum = 'paid' | 'unpaid' | 'overdue';
    export const PaymentStatusEnum = {
        Paid: 'paid' as PaymentStatusEnum,
        Unpaid: 'unpaid' as PaymentStatusEnum,
        Overdue: 'overdue' as PaymentStatusEnum
    };
}


