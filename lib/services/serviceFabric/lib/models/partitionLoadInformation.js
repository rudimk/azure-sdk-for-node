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

/**
 * @class
 * Initializes a new instance of the PartitionLoadInformation class.
 * @constructor
 * The information of the partition load
 *
 * @member {string} [partitionId]
 *
 * @member {array} [primaryLoadMetricReports]
 *
 * @member {array} [secondaryLoadMetricReports]
 *
 */
class PartitionLoadInformation {
  constructor() {
  }

  /**
   * Defines the metadata of PartitionLoadInformation
   *
   * @returns {object} metadata of PartitionLoadInformation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PartitionLoadInformation',
      type: {
        name: 'Composite',
        className: 'PartitionLoadInformation',
        modelProperties: {
          partitionId: {
            required: false,
            serializedName: 'PartitionId',
            type: {
              name: 'String'
            }
          },
          primaryLoadMetricReports: {
            required: false,
            serializedName: 'PrimaryLoadMetricReports',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          secondaryLoadMetricReports: {
            required: false,
            serializedName: 'SecondaryLoadMetricReports',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PartitionLoadInformation;
