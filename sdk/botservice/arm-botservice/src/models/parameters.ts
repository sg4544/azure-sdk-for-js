/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const channelName0: msRest.OperationURLParameter = {
  parameterPath: "channelName",
  mapper: {
    required: true,
    serializedName: "channelName",
    type: {
      name: "Enum",
      allowedValues: [
        "AlexaChannel",
        "FacebookChannel",
        "EmailChannel",
        "KikChannel",
        "TelegramChannel",
        "SlackChannel",
        "MsTeamsChannel",
        "SkypeChannel",
        "WebChatChannel",
        "DirectLineChannel",
        "SmsChannel",
        "LineChannel",
        "DirectLineSpeechChannel"
      ]
    }
  }
};
export const channelName1: msRest.OperationURLParameter = {
  parameterPath: "channelName",
  mapper: {
    required: true,
    serializedName: "channelName",
    constraints: {
      MaxLength: 64,
      MinLength: 2,
      Pattern: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const channelName2: msRest.OperationURLParameter = {
  parameterPath: "channelName",
  mapper: {
    required: true,
    serializedName: "channelName",
    type: {
      name: "Enum",
      allowedValues: [
        "WebChatChannel",
        "DirectLineChannel"
      ]
    }
  }
};
export const connectionName: msRest.OperationURLParameter = {
  parameterPath: "connectionName",
  mapper: {
    required: true,
    serializedName: "connectionName",
    constraints: {
      MaxLength: 64,
      MinLength: 2,
      Pattern: /^[a-zA-Z0-9][\sa-zA-Z0-9_.-]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    constraints: {
      MaxLength: 64,
      MinLength: 2,
      Pattern: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const resourceName: msRest.OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    required: true,
    serializedName: "resourceName",
    constraints: {
      MaxLength: 64,
      MinLength: 2,
      Pattern: /^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
