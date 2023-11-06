/**
 * ManageSpace Orgs API
 * ManageSpace Orgs API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface TaxRateResponse { 
    /**
     * ID of the tax rate.
     */
    taxRateId: string;
    /**
     * Name of the tax rate.
     */
    name: string;
    /**
     * Percent of tax to be applied.
     */
    rate: number;
    /**
     * Whether this tax is currently active or not.
     */
    active: boolean;
}
