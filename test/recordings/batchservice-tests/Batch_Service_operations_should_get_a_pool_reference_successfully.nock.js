// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/nodesdktestpool1?api-version=2017-01-01.4.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#pools/@Element\",\"id\":\"nodesdktestpool1\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/nodesdktestpool1\",\"eTag\":\"0x8D44C7E41054958\",\"lastModified\":\"2017-02-03T21:47:30.6538328Z\",\"creationTime\":\"2017-02-03T21:45:49.6652031Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-02-03T21:45:49.6652031Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2017-02-03T21:46:54.3459663Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":3,\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo hello > hello.txt\",\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n  },\"userAccounts\":[\r\n    {\r\n      \"name\":\"nonAdminUser\",\"password\":\"2ec114e8-fd74-4981-b398-669f389eebef\",\"elevationLevel\":\"nonadmin\"\r\n    }\r\n  ],\"metadata\":[\r\n    {\r\n      \"name\":\"foo2\",\"value\":\"bar2\"\r\n    }\r\n  ],\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 03 Feb 2017 21:47:30 GMT',
  etag: '0x8D44C7E41054958',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c558ca0a-9ee3-45b0-88f0-e36433dfb54e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 21:54:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/nodesdktestpool1?api-version=2017-01-01.4.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#pools/@Element\",\"id\":\"nodesdktestpool1\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/nodesdktestpool1\",\"eTag\":\"0x8D44C7E41054958\",\"lastModified\":\"2017-02-03T21:47:30.6538328Z\",\"creationTime\":\"2017-02-03T21:45:49.6652031Z\",\"state\":\"active\",\"stateTransitionTime\":\"2017-02-03T21:45:49.6652031Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2017-02-03T21:46:54.3459663Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":3,\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo hello > hello.txt\",\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n  },\"userAccounts\":[\r\n    {\r\n      \"name\":\"nonAdminUser\",\"password\":\"2ec114e8-fd74-4981-b398-669f389eebef\",\"elevationLevel\":\"nonadmin\"\r\n    }\r\n  ],\"metadata\":[\r\n    {\r\n      \"name\":\"foo2\",\"value\":\"bar2\"\r\n    }\r\n  ],\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 03 Feb 2017 21:47:30 GMT',
  etag: '0x8D44C7E41054958',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c558ca0a-9ee3-45b0-88f0-e36433dfb54e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 21:54:13 GMT',
  connection: 'close' });
 return result; }]];