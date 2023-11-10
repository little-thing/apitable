/**
 * Api Document
 * Backend_Server Api Document
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Batch Delete Member Request Parameters
*/
export class DeleteBatchMemberRo {
    /**
    * Delete action (0: delete this department, 1: delete from the organization structure completely)
    */
    'action'?: number;
    /**
    * Member ID Collection
    */
    'memberId': Array<number>;
    /**
    * Department ID, if it is the root department, can not be transferred. It is deleted from the root door by default, consistent with the principle of removing members from the space
    */
    'teamId': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "memberId",
            "baseName": "memberId",
            "type": "Array<number>",
            "format": "int64"
        },
        {
            "name": "teamId",
            "baseName": "teamId",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return DeleteBatchMemberRo.attributeTypeMap;
    }

    public constructor() {
    }
}
