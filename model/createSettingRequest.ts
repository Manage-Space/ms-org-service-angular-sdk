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
import { SettingResponseValue } from './settingResponseValue';


export interface CreateSettingRequest { 
    value: SettingResponseValue;
    /**
     * Standard setting type ID.
     */
    standardSettingTypeId: string;
}

