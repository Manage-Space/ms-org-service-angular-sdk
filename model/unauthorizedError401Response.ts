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
import { UnauthorizedError401ResponseError } from './unauthorizedError401ResponseError';


export interface UnauthorizedError401Response { 
    readonly data: Array<string>;
    readonly success: boolean;
    error: UnauthorizedError401ResponseError;
}

