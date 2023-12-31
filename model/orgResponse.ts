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


export interface OrgResponse { 
    /**
     * Organization ID
     */
    orgId: string;
    /**
     * Organization name
     */
    orgName: string;
    /**
     * Organization description
     */
    orgDescription: string;
    /**
     * Time of creation
     */
    createdAt: string;
    /**
     * userId of who created the merchandise
     */
    createdBy: string;
    /**
     * Time of the last update
     */
    updatedAt: string;
    /**
     * userId of who updated the merchandise
     */
    updatedBy: string;
}

