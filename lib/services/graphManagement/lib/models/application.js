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

var util = require('util');

/**
 * @class
 * Initializes a new instance of the Application class.
 * @constructor
 * Active Directory user information
 *
 * @member {string} [objectId] object Id
 * 
 * @member {string} [objectType] object type
 * 
 * @member {string} [appId] application Id
 * 
 * @member {array} [appPermissions] application permissions
 * 
 * @member {boolean} [availableToOtherTenants] Indicates if the application
 * will be available to other tenants
 * 
 * @member {string} [displayName] the displayName
 * 
 * @member {array} [identifierUris] the application identifier Uris
 * 
 * @member {array} [replyUrls] the application reply Urls
 * 
 * @member {string} [homepage] Application homepage
 * 
 */
function Application() {
}

/**
 * Defines the metadata of Application
 *
 * @returns {object} metadata of Application
 *
 */
Application.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Application',
    type: {
      name: 'Composite',
      className: 'Application',
      modelProperties: {
        objectId: {
          required: false,
          serializedName: 'objectId',
          type: {
            name: 'String'
          }
        },
        objectType: {
          required: false,
          serializedName: 'objectType',
          type: {
            name: 'String'
          }
        },
        appId: {
          required: false,
          serializedName: 'appId',
          type: {
            name: 'String'
          }
        },
        appPermissions: {
          required: false,
          serializedName: 'appPermissions',
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
        availableToOtherTenants: {
          required: false,
          serializedName: 'availableToOtherTenants',
          type: {
            name: 'Boolean'
          }
        },
        displayName: {
          required: false,
          serializedName: 'displayName',
          type: {
            name: 'String'
          }
        },
        identifierUris: {
          required: false,
          serializedName: 'identifierUris',
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
        replyUrls: {
          required: false,
          serializedName: 'replyUrls',
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
        homepage: {
          required: false,
          serializedName: 'homepage',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = Application;