/**
 * ManageSpace Orgs API
 * ManageSpace Orgs API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UnitFeature } from './unitFeature';
import { SiteAmenity } from './siteAmenity';


export interface CreateOrgRequest { 
    /**
     * Organization name
     */
    orgName: string;
    /**
     * Organization description
     */
    orgDescription: string;
    /**
     * A list of default amenity ids
     */
    defaultAmenities?: Array<SiteAmenity>;
    /**
     * A list of default unit feature ids
     */
    defaultFeatures?: Array<UnitFeature>;
}

