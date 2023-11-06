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
import { SiteType } from './siteType';
import { OrgSiteAmenityResponse } from './orgSiteAmenityResponse';


export interface SiteResponse { 
    /**
     * Id of the site
     */
    siteId: string;
    /**
     * Name of the site
     */
    siteName: string;
    /**
     * Organization Id
     */
    orgId: string;
    /**
     * Default Location Id
     */
    defaultLocationId: string;
    /**
     * Access code length
     */
    accessCodeLength: number;
    /**
     * Site Types
     */
    siteTypes: Array<SiteType>;
    /**
     * Amenity Types
     */
    siteAmenities: Array<OrgSiteAmenityResponse>;
}

