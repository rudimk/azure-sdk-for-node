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
 * Initializes a new instance of the JobRecurrence class.
 * @constructor
 * @member {string} [frequency] Gets or sets the frequency of recurrence
 * (second, minute, hour, day, week, month). Possible values include: 'Minute',
 * 'Hour', 'Day', 'Week', 'Month'
 *
 * @member {number} [interval] Gets or sets the interval between retries.
 *
 * @member {number} [count] Gets or sets the maximum number of times that the
 * job should run.
 *
 * @member {date} [endTime] Gets or sets the time at which the job will
 * complete.
 *
 * @member {object} [schedule]
 *
 * @member {array} [schedule.weekDays] Gets or sets the days of the week that
 * the job should execute on.
 *
 * @member {array} [schedule.hours] Gets or sets the hours of the day that the
 * job should execute at.
 *
 * @member {array} [schedule.minutes] Gets or sets the minutes of the hour that
 * the job should execute at.
 *
 * @member {array} [schedule.monthDays] Gets or sets the days of the month that
 * the job should execute on. Must be between 1 and 31.
 *
 * @member {array} [schedule.monthlyOccurrences] Gets or sets the occurrences
 * of days within a month.
 *
 */
class JobRecurrence {
  constructor() {
  }

  /**
   * Defines the metadata of JobRecurrence
   *
   * @returns {object} metadata of JobRecurrence
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobRecurrence',
      type: {
        name: 'Composite',
        className: 'JobRecurrence',
        modelProperties: {
          frequency: {
            required: false,
            serializedName: 'frequency',
            type: {
              name: 'Enum',
              allowedValues: [ 'Minute', 'Hour', 'Day', 'Week', 'Month' ]
            }
          },
          interval: {
            required: false,
            serializedName: 'interval',
            type: {
              name: 'Number'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          endTime: {
            required: false,
            serializedName: 'endTime',
            type: {
              name: 'DateTime'
            }
          },
          schedule: {
            required: false,
            serializedName: 'schedule',
            type: {
              name: 'Composite',
              className: 'JobRecurrenceSchedule'
            }
          }
        }
      }
    };
  }
}

module.exports = JobRecurrence;
