/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the TroubleshootingDetails class.
 * @constructor
 * Information gained from troubleshooting of specified resource.
 *
 * @member {string} [id] The id of the get troubleshoot operation.
 *
 * @member {string} [reasonType] Reason type of failure.
 *
 * @member {string} [summary] A summary of troubleshooting.
 *
 * @member {string} [detail] Details on troubleshooting results.
 *
 * @member {array} [recommendedActions] List of recommended actions.
 *
 */
class TroubleshootingDetails {
  constructor() {
  }

  /**
   * Defines the metadata of TroubleshootingDetails
   *
   * @returns {object} metadata of TroubleshootingDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TroubleshootingDetails',
      type: {
        name: 'Composite',
        className: 'TroubleshootingDetails',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          reasonType: {
            required: false,
            serializedName: 'reasonType',
            type: {
              name: 'String'
            }
          },
          summary: {
            required: false,
            serializedName: 'summary',
            type: {
              name: 'String'
            }
          },
          detail: {
            required: false,
            serializedName: 'detail',
            type: {
              name: 'String'
            }
          },
          recommendedActions: {
            required: false,
            serializedName: 'recommendedActions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TroubleshootingRecommendedActionsElementType',
                  type: {
                    name: 'Composite',
                    className: 'TroubleshootingRecommendedActions'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TroubleshootingDetails;
