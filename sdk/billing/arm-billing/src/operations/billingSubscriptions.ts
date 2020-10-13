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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/billingSubscriptionsMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a BillingSubscriptions. */
export class BillingSubscriptions {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a BillingSubscriptions.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the subscriptions for a customer. The operation is supported only for billing accounts
   * with agreement type Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsListByCustomerResponse>
   */
  listByCustomer(billingAccountName: string, customerName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingSubscriptionsListByCustomerResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param callback The callback
   */
  listByCustomer(billingAccountName: string, customerName: string, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param customerName The ID that uniquely identifies a customer.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByCustomer(billingAccountName: string, customerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  listByCustomer(billingAccountName: string, customerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingSubscriptionsListResult>, callback?: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): Promise<Models.BillingSubscriptionsListByCustomerResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        customerName,
        options
      },
      listByCustomerOperationSpec,
      callback) as Promise<Models.BillingSubscriptionsListByCustomerResponse>;
  }

  /**
   * Lists the subscriptions for a billing account. The operation is supported for billing accounts
   * with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsListByBillingAccountResponse>
   */
  listByBillingAccount(billingAccountName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingSubscriptionsListByBillingAccountResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  listByBillingAccount(billingAccountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingSubscriptionsListResult>, callback?: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): Promise<Models.BillingSubscriptionsListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      listByBillingAccountOperationSpec,
      callback) as Promise<Models.BillingSubscriptionsListByBillingAccountResponse>;
  }

  /**
   * Lists the subscriptions that are billed to a billing profile. The operation is supported for
   * billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner
   * Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsListByBillingProfileResponse>
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingSubscriptionsListByBillingProfileResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param callback The callback
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingSubscriptionsListResult>, callback?: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): Promise<Models.BillingSubscriptionsListByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        options
      },
      listByBillingProfileOperationSpec,
      callback) as Promise<Models.BillingSubscriptionsListByBillingProfileResponse>;
  }

  /**
   * Lists the subscriptions that are billed to an invoice section. The operation is supported only
   * for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsListByInvoiceSectionResponse>
   */
  listByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingSubscriptionsListByInvoiceSectionResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param callback The callback
   */
  listByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  listByInvoiceSection(billingAccountName: string, billingProfileName: string, invoiceSectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingSubscriptionsListResult>, callback?: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): Promise<Models.BillingSubscriptionsListByInvoiceSectionResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        invoiceSectionName,
        options
      },
      listByInvoiceSectionOperationSpec,
      callback) as Promise<Models.BillingSubscriptionsListByInvoiceSectionResponse>;
  }

  /**
   * Gets a subscription by its ID. The operation is supported for billing accounts with agreement
   * type Microsoft Customer Agreement and Microsoft Partner Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsGetResponse>
   */
  get(billingAccountName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingSubscriptionsGetResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param callback The callback
   */
  get(billingAccountName: string, callback: msRest.ServiceCallback<Models.BillingSubscription>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(billingAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingSubscription>): void;
  get(billingAccountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingSubscription>, callback?: msRest.ServiceCallback<Models.BillingSubscription>): Promise<Models.BillingSubscriptionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.BillingSubscriptionsGetResponse>;
  }

  /**
   * Updates the properties of a billing subscription. Currently, cost center can be updated. The
   * operation is supported only for billing accounts with agreement type Microsoft Customer
   * Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param parameters Request parameters that are provided to the update billing subscription
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsUpdateResponse>
   */
  update(billingAccountName: string, parameters: Models.BillingSubscription, options?: msRest.RequestOptionsBase): Promise<Models.BillingSubscriptionsUpdateResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param parameters Request parameters that are provided to the update billing subscription
   * operation.
   * @param callback The callback
   */
  update(billingAccountName: string, parameters: Models.BillingSubscription, callback: msRest.ServiceCallback<Models.BillingSubscription>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param parameters Request parameters that are provided to the update billing subscription
   * operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(billingAccountName: string, parameters: Models.BillingSubscription, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingSubscription>): void;
  update(billingAccountName: string, parameters: Models.BillingSubscription, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingSubscription>, callback?: msRest.ServiceCallback<Models.BillingSubscription>): Promise<Models.BillingSubscriptionsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.BillingSubscriptionsUpdateResponse>;
  }

  /**
   * Moves a subscription's charges to a new invoice section. The new invoice section must belong to
   * the same billing profile as the existing invoice section. This operation is supported for
   * billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param destinationInvoiceSectionId The destination invoice section id.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsMoveResponse>
   */
  move(billingAccountName: string, destinationInvoiceSectionId: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingSubscriptionsMoveResponse> {
    return this.beginMove(billingAccountName,destinationInvoiceSectionId,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.BillingSubscriptionsMoveResponse>;
  }

  /**
   * Validates if a subscription's charges can be moved to a new invoice section. This operation is
   * supported for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param destinationInvoiceSectionId The destination invoice section id.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsValidateMoveResponse>
   */
  validateMove(billingAccountName: string, destinationInvoiceSectionId: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingSubscriptionsValidateMoveResponse>;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param destinationInvoiceSectionId The destination invoice section id.
   * @param callback The callback
   */
  validateMove(billingAccountName: string, destinationInvoiceSectionId: string, callback: msRest.ServiceCallback<Models.ValidateSubscriptionTransferEligibilityResult>): void;
  /**
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param destinationInvoiceSectionId The destination invoice section id.
   * @param options The optional parameters
   * @param callback The callback
   */
  validateMove(billingAccountName: string, destinationInvoiceSectionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ValidateSubscriptionTransferEligibilityResult>): void;
  validateMove(billingAccountName: string, destinationInvoiceSectionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ValidateSubscriptionTransferEligibilityResult>, callback?: msRest.ServiceCallback<Models.ValidateSubscriptionTransferEligibilityResult>): Promise<Models.BillingSubscriptionsValidateMoveResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        destinationInvoiceSectionId,
        options
      },
      validateMoveOperationSpec,
      callback) as Promise<Models.BillingSubscriptionsValidateMoveResponse>;
  }

  /**
   * Moves a subscription's charges to a new invoice section. The new invoice section must belong to
   * the same billing profile as the existing invoice section. This operation is supported for
   * billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param destinationInvoiceSectionId The destination invoice section id.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginMove(billingAccountName: string, destinationInvoiceSectionId: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        billingAccountName,
        destinationInvoiceSectionId,
        options
      },
      beginMoveOperationSpec,
      options);
  }

  /**
   * Lists the subscriptions for a customer. The operation is supported only for billing accounts
   * with agreement type Microsoft Partner Agreement.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsListByCustomerNextResponse>
   */
  listByCustomerNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingSubscriptionsListByCustomerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByCustomerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByCustomerNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  listByCustomerNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingSubscriptionsListResult>, callback?: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): Promise<Models.BillingSubscriptionsListByCustomerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByCustomerNextOperationSpec,
      callback) as Promise<Models.BillingSubscriptionsListByCustomerNextResponse>;
  }

  /**
   * Lists the subscriptions for a billing account. The operation is supported for billing accounts
   * with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsListByBillingAccountNextResponse>
   */
  listByBillingAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingSubscriptionsListByBillingAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBillingAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccountNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  listByBillingAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingSubscriptionsListResult>, callback?: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): Promise<Models.BillingSubscriptionsListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBillingAccountNextOperationSpec,
      callback) as Promise<Models.BillingSubscriptionsListByBillingAccountNextResponse>;
  }

  /**
   * Lists the subscriptions that are billed to a billing profile. The operation is supported for
   * billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner
   * Agreement.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsListByBillingProfileNextResponse>
   */
  listByBillingProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingSubscriptionsListByBillingProfileNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBillingProfileNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingProfileNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  listByBillingProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingSubscriptionsListResult>, callback?: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): Promise<Models.BillingSubscriptionsListByBillingProfileNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBillingProfileNextOperationSpec,
      callback) as Promise<Models.BillingSubscriptionsListByBillingProfileNextResponse>;
  }

  /**
   * Lists the subscriptions that are billed to an invoice section. The operation is supported only
   * for billing accounts with agreement type Microsoft Customer Agreement.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingSubscriptionsListByInvoiceSectionNextResponse>
   */
  listByInvoiceSectionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingSubscriptionsListByInvoiceSectionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByInvoiceSectionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInvoiceSectionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): void;
  listByInvoiceSectionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingSubscriptionsListResult>, callback?: msRest.ServiceCallback<Models.BillingSubscriptionsListResult>): Promise<Models.BillingSubscriptionsListByInvoiceSectionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByInvoiceSectionNextOperationSpec,
      callback) as Promise<Models.BillingSubscriptionsListByInvoiceSectionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByCustomerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/billingSubscriptions",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.customerName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingSubscriptions",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByInvoiceSectionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingSubscriptions",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName,
    Parameters.invoiceSectionName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{subscriptionId}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscription
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{subscriptionId}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.BillingSubscription,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscription
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const validateMoveOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{subscriptionId}/validateMoveEligibility",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      destinationInvoiceSectionId: "destinationInvoiceSectionId"
    },
    mapper: {
      ...Mappers.TransferBillingSubscriptionRequestProperties,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ValidateSubscriptionTransferEligibilityResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginMoveOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{subscriptionId}/move",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      destinationInvoiceSectionId: "destinationInvoiceSectionId"
    },
    mapper: {
      ...Mappers.TransferBillingSubscriptionRequestProperties,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscription,
      headersMapper: Mappers.BillingSubscriptionsMoveHeaders
    },
    202: {
      headersMapper: Mappers.BillingSubscriptionsMoveHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
      headersMapper: Mappers.BillingSubscriptionsMoveHeaders
    }
  },
  serializer
};

const listByCustomerNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingAccountNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingProfileNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByInvoiceSectionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingSubscriptionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};