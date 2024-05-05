import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * List authorized users and teams
     *
     * @throws FetchError<401, types.GetOwnersResponse401> Authorization information is missing or invalid.
     * @throws FetchError<406, types.GetOwnersResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<429, types.GetOwnersResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.GetOwnersResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.GetOwnersResponse503> Server currently unavailable.
     */
    getOwners(metadata?: types.GetOwnersMetadataParam): Promise<FetchResponse<200, types.GetOwnersResponse200>>;
    /**
     * Retrieve user or team
     *
     * @throws FetchError<401, types.GetOwnerResponse401> Authorization information is missing or invalid.
     * @throws FetchError<404, types.GetOwnerResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.GetOwnerResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.GetOwnerResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.GetOwnerResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.GetOwnerResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.GetOwnerResponse503> Server currently unavailable.
     */
    getOwner(metadata: types.GetOwnerMetadataParam): Promise<FetchResponse<200, types.GetOwnerResponse200>>;
    /**
     * List registry credentials
     *
     * @summary List registry credentials
     * @throws FetchError<401, types.GetRegistryCredentialsResponse401> Authorization information is missing or invalid.
     * @throws FetchError<406, types.GetRegistryCredentialsResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<429, types.GetRegistryCredentialsResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.GetRegistryCredentialsResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.GetRegistryCredentialsResponse503> Server currently unavailable.
     */
    getRegistryCredentials(metadata?: types.GetRegistryCredentialsMetadataParam): Promise<FetchResponse<200, types.GetRegistryCredentialsResponse200>>;
    /**
     * Create registry credential
     *
     * @summary Create registry credential
     * @throws FetchError<400, types.CreateRegistryCredentialResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.CreateRegistryCredentialResponse401> Authorization information is missing or invalid.
     * @throws FetchError<402, types.CreateRegistryCredentialResponse402> You must enter payment information to perform this request.
     * @throws FetchError<406, types.CreateRegistryCredentialResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<409, types.CreateRegistryCredentialResponse409> The current state of the resource conflicts with this request.
     * @throws FetchError<429, types.CreateRegistryCredentialResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.CreateRegistryCredentialResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.CreateRegistryCredentialResponse503> Server currently unavailable.
     */
    createRegistryCredential(body: types.CreateRegistryCredentialBodyParam): Promise<FetchResponse<200, types.CreateRegistryCredentialResponse200>>;
    /**
     * Retrieve registry credentials
     *
     * @summary Retrieve registry credentials
     * @throws FetchError<401, types.GetRegistrycredentialsRegistrycredentialidResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.GetRegistrycredentialsRegistrycredentialidResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.GetRegistrycredentialsRegistrycredentialidResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.GetRegistrycredentialsRegistrycredentialidResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.GetRegistrycredentialsRegistrycredentialidResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.GetRegistrycredentialsRegistrycredentialidResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.GetRegistrycredentialsRegistrycredentialidResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.GetRegistrycredentialsRegistrycredentialidResponse503> Server currently unavailable.
     */
    getRegistrycredentialsRegistrycredentialid(metadata: types.GetRegistrycredentialsRegistrycredentialidMetadataParam): Promise<FetchResponse<200, types.GetRegistrycredentialsRegistrycredentialidResponse200>>;
    /**
     * Update registry credential. Services that use this credential must be redeployed to use
     * the updated values.
     *
     * @summary Update registry credential
     * @throws FetchError<400, types.UpdateRegistryCredentialResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.UpdateRegistryCredentialResponse401> Authorization information is missing or invalid.
     * @throws FetchError<402, types.UpdateRegistryCredentialResponse402> You must enter payment information to perform this request.
     * @throws FetchError<403, types.UpdateRegistryCredentialResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.UpdateRegistryCredentialResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.UpdateRegistryCredentialResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<409, types.UpdateRegistryCredentialResponse409> The current state of the resource conflicts with this request.
     * @throws FetchError<410, types.UpdateRegistryCredentialResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.UpdateRegistryCredentialResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.UpdateRegistryCredentialResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.UpdateRegistryCredentialResponse503> Server currently unavailable.
     */
    updateRegistryCredential(body: types.UpdateRegistryCredentialBodyParam, metadata: types.UpdateRegistryCredentialMetadataParam): Promise<FetchResponse<200, types.UpdateRegistryCredentialResponse200>>;
    /**
     * Delete registry credential
     *
     * @summary Delete registry credential
     * @throws FetchError<401, types.DeleteRegistryCredentialResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.DeleteRegistryCredentialResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.DeleteRegistryCredentialResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.DeleteRegistryCredentialResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.DeleteRegistryCredentialResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.DeleteRegistryCredentialResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.DeleteRegistryCredentialResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.DeleteRegistryCredentialResponse503> Server currently unavailable.
     */
    deleteRegistryCredential(metadata: types.DeleteRegistryCredentialMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * List services
     *
     * @throws FetchError<401, types.GetServicesResponse401> Authorization information is missing or invalid.
     * @throws FetchError<406, types.GetServicesResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<429, types.GetServicesResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.GetServicesResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.GetServicesResponse503> Server currently unavailable.
     */
    getServices(metadata?: types.GetServicesMetadataParam): Promise<FetchResponse<200, types.GetServicesResponse200>>;
    /**
     * Create service
     *
     * @throws FetchError<400, types.CreateServiceResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.CreateServiceResponse401> Authorization information is missing or invalid.
     * @throws FetchError<402, types.CreateServiceResponse402> You must enter payment information to perform this request.
     * @throws FetchError<406, types.CreateServiceResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<409, types.CreateServiceResponse409> The current state of the resource conflicts with this request.
     * @throws FetchError<429, types.CreateServiceResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.CreateServiceResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.CreateServiceResponse503> Server currently unavailable.
     */
    createService(body: types.CreateServiceBodyParam): Promise<FetchResponse<201, types.CreateServiceResponse201>>;
    /**
     * Retrieve service
     *
     * @throws FetchError<401, types.GetServiceResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.GetServiceResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.GetServiceResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.GetServiceResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.GetServiceResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.GetServiceResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.GetServiceResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.GetServiceResponse503> Server currently unavailable.
     */
    getService(metadata: types.GetServiceMetadataParam): Promise<FetchResponse<200, types.GetServiceResponse200>>;
    /**
     * Update service
     *
     * @throws FetchError<400, types.UpdateServiceResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.UpdateServiceResponse401> Authorization information is missing or invalid.
     * @throws FetchError<402, types.UpdateServiceResponse402> You must enter payment information to perform this request.
     * @throws FetchError<403, types.UpdateServiceResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.UpdateServiceResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.UpdateServiceResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<409, types.UpdateServiceResponse409> The current state of the resource conflicts with this request.
     * @throws FetchError<410, types.UpdateServiceResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.UpdateServiceResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.UpdateServiceResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.UpdateServiceResponse503> Server currently unavailable.
     */
    updateService(body: types.UpdateServiceBodyParam, metadata: types.UpdateServiceMetadataParam): Promise<FetchResponse<200, types.UpdateServiceResponse200>>;
    /**
     * Delete service
     *
     * @throws FetchError<401, types.DeleteServiceResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.DeleteServiceResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.DeleteServiceResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.DeleteServiceResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.DeleteServiceResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.DeleteServiceResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.DeleteServiceResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.DeleteServiceResponse503> Server currently unavailable.
     */
    deleteService(metadata: types.DeleteServiceMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * List deploys
     *
     * @throws FetchError<401, types.GetDeploysResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.GetDeploysResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.GetDeploysResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.GetDeploysResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.GetDeploysResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.GetDeploysResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.GetDeploysResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.GetDeploysResponse503> Server currently unavailable.
     */
    getDeploys(metadata: types.GetDeploysMetadataParam): Promise<FetchResponse<200, types.GetDeploysResponse200>>;
    /**
     * Trigger a deploy
     *
     * @throws FetchError<400, types.CreateDeployResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.CreateDeployResponse401> Authorization information is missing or invalid.
     * @throws FetchError<404, types.CreateDeployResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.CreateDeployResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<409, types.CreateDeployResponse409> The current state of the resource conflicts with this request.
     * @throws FetchError<410, types.CreateDeployResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.CreateDeployResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.CreateDeployResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.CreateDeployResponse503> Server currently unavailable.
     */
    createDeploy(body: types.CreateDeployBodyParam, metadata: types.CreateDeployMetadataParam): Promise<FetchResponse<201, types.CreateDeployResponse201>>;
    /**
     * Retrieve deploy
     *
     * @throws FetchError<401, types.GetDeployResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.GetDeployResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.GetDeployResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.GetDeployResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.GetDeployResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.GetDeployResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.GetDeployResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.GetDeployResponse503> Server currently unavailable.
     */
    getDeploy(metadata: types.GetDeployMetadataParam): Promise<FetchResponse<200, types.GetDeployResponse200>>;
    /**
     * This endpoint allows you to cancel a running deploy. Canceling cronjob deploys is
     * currently not supported.
     *
     * @summary Cancel deploy
     * @throws FetchError<400, types.CancelDeployResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.CancelDeployResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.CancelDeployResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.CancelDeployResponse404> Unable to find the requested resource.
     * @throws FetchError<429, types.CancelDeployResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.CancelDeployResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.CancelDeployResponse503> Server currently unavailable.
     */
    cancelDeploy(metadata: types.CancelDeployMetadataParam): Promise<FetchResponse<200, types.CancelDeployResponse200>>;
    /**
     * Trigger a rollback to a previous deploy
     *
     * @summary Rollback to a previous deploy
     * @throws FetchError<400, types.RollbackDeployResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.RollbackDeployResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.RollbackDeployResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.RollbackDeployResponse404> Unable to find the requested resource.
     * @throws FetchError<429, types.RollbackDeployResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.RollbackDeployResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.RollbackDeployResponse503> Server currently unavailable.
     */
    rollbackDeploy(body: types.RollbackDeployBodyParam, metadata: types.RollbackDeployMetadataParam): Promise<FetchResponse<200, types.RollbackDeployResponse200>>;
    /**
     * Retrieve environment variables
     *
     * @throws FetchError<401, types.GetEnvVarsForServiceResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.GetEnvVarsForServiceResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.GetEnvVarsForServiceResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.GetEnvVarsForServiceResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.GetEnvVarsForServiceResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.GetEnvVarsForServiceResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.GetEnvVarsForServiceResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.GetEnvVarsForServiceResponse503> Server currently unavailable.
     */
    getEnvVarsForService(metadata: types.GetEnvVarsForServiceMetadataParam): Promise<FetchResponse<200, types.GetEnvVarsForServiceResponse200>>;
    /**
     * Replaces all environment variables for a service with the provided list of environment
     * variables.
     *
     * @summary Update environment variables
     * @throws FetchError<400, types.UpdateEnvVarsForServiceResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.UpdateEnvVarsForServiceResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.UpdateEnvVarsForServiceResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.UpdateEnvVarsForServiceResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.UpdateEnvVarsForServiceResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.UpdateEnvVarsForServiceResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.UpdateEnvVarsForServiceResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.UpdateEnvVarsForServiceResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.UpdateEnvVarsForServiceResponse503> Server currently unavailable.
     */
    updateEnvVarsForService(body: types.UpdateEnvVarsForServiceBodyParam, metadata: types.UpdateEnvVarsForServiceMetadataParam): Promise<FetchResponse<200, types.UpdateEnvVarsForServiceResponse200>>;
    /**
     * Retrieve headers
     *
     * @throws FetchError<401, types.RetrieveHeadersResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.RetrieveHeadersResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.RetrieveHeadersResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.RetrieveHeadersResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.RetrieveHeadersResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.RetrieveHeadersResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.RetrieveHeadersResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.RetrieveHeadersResponse503> Server currently unavailable.
     */
    retrieveHeaders(metadata: types.RetrieveHeadersMetadataParam): Promise<FetchResponse<200, types.RetrieveHeadersResponse200>>;
    /**
     * Retrieve redirect and rewrite rules
     *
     * @throws FetchError<401, types.RetrieveRoutesResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.RetrieveRoutesResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.RetrieveRoutesResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.RetrieveRoutesResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.RetrieveRoutesResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.RetrieveRoutesResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.RetrieveRoutesResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.RetrieveRoutesResponse503> Server currently unavailable.
     */
    retrieveRoutes(metadata: types.RetrieveRoutesMetadataParam): Promise<FetchResponse<200, types.RetrieveRoutesResponse200>>;
    /**
     * List custom domains
     *
     * @throws FetchError<400, types.GetCustomDomainsResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.GetCustomDomainsResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.GetCustomDomainsResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.GetCustomDomainsResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.GetCustomDomainsResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.GetCustomDomainsResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.GetCustomDomainsResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.GetCustomDomainsResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.GetCustomDomainsResponse503> Server currently unavailable.
     */
    getCustomDomains(metadata: types.GetCustomDomainsMetadataParam): Promise<FetchResponse<200, types.GetCustomDomainsResponse200>>;
    /**
     * Add custom domain
     *
     * @throws FetchError<400, types.CreateCustomDomainResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.CreateCustomDomainResponse401> Authorization information is missing or invalid.
     * @throws FetchError<402, types.CreateCustomDomainResponse402> You must enter payment information to perform this request.
     * @throws FetchError<403, types.CreateCustomDomainResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.CreateCustomDomainResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.CreateCustomDomainResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<409, types.CreateCustomDomainResponse409> The current state of the resource conflicts with this request.
     * @throws FetchError<410, types.CreateCustomDomainResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.CreateCustomDomainResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.CreateCustomDomainResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.CreateCustomDomainResponse503> Server currently unavailable.
     */
    createCustomDomain(body: types.CreateCustomDomainBodyParam, metadata: types.CreateCustomDomainMetadataParam): Promise<FetchResponse<201, types.CreateCustomDomainResponse201>>;
    /**
     * Retrieve custom domain
     *
     * @throws FetchError<400, types.GetCustomDomainResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.GetCustomDomainResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.GetCustomDomainResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.GetCustomDomainResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.GetCustomDomainResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.GetCustomDomainResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.GetCustomDomainResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.GetCustomDomainResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.GetCustomDomainResponse503> Server currently unavailable.
     */
    getCustomDomain(metadata: types.GetCustomDomainMetadataParam): Promise<FetchResponse<200, types.GetCustomDomainResponse200>>;
    /**
     * Delete custom domain
     *
     * @throws FetchError<400, types.DeleteCustomDomainResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.DeleteCustomDomainResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.DeleteCustomDomainResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.DeleteCustomDomainResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.DeleteCustomDomainResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.DeleteCustomDomainResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.DeleteCustomDomainResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.DeleteCustomDomainResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.DeleteCustomDomainResponse503> Server currently unavailable.
     */
    deleteCustomDomain(metadata: types.DeleteCustomDomainMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Verify DNS configuration
     *
     * @throws FetchError<400, types.RefreshCustomDomainResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.RefreshCustomDomainResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.RefreshCustomDomainResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.RefreshCustomDomainResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.RefreshCustomDomainResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.RefreshCustomDomainResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.RefreshCustomDomainResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.RefreshCustomDomainResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.RefreshCustomDomainResponse503> Server currently unavailable.
     */
    refreshCustomDomain(metadata: types.RefreshCustomDomainMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Suspend service
     *
     * @throws FetchError<400, types.SuspendServiceResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.SuspendServiceResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.SuspendServiceResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.SuspendServiceResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.SuspendServiceResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.SuspendServiceResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.SuspendServiceResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.SuspendServiceResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.SuspendServiceResponse503> Server currently unavailable.
     */
    suspendService(metadata: types.SuspendServiceMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Resume service
     *
     * @throws FetchError<400, types.ResumeServiceResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.ResumeServiceResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.ResumeServiceResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.ResumeServiceResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.ResumeServiceResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.ResumeServiceResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.ResumeServiceResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.ResumeServiceResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.ResumeServiceResponse503> Server currently unavailable.
     */
    resumeService(metadata: types.ResumeServiceMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Restart a server
     *
     * @throws FetchError<400, types.RestartServerResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.RestartServerResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.RestartServerResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.RestartServerResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.RestartServerResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.RestartServerResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.RestartServerResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.RestartServerResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.RestartServerResponse503> Server currently unavailable.
     */
    restartServer(metadata: types.RestartServerMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Scale service to desired number of instances
     *
     * @throws FetchError<400, types.ScaleServiceResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.ScaleServiceResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.ScaleServiceResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.ScaleServiceResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.ScaleServiceResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.ScaleServiceResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.ScaleServiceResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.ScaleServiceResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.ScaleServiceResponse503> Server currently unavailable.
     */
    scaleService(body: types.ScaleServiceBodyParam, metadata: types.ScaleServiceMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Update the autoscaling config for a service
     *
     * @throws FetchError<400, types.AutoscaleServiceResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.AutoscaleServiceResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.AutoscaleServiceResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.AutoscaleServiceResponse404> Unable to find the requested resource.
     * @throws FetchError<406, types.AutoscaleServiceResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<410, types.AutoscaleServiceResponse410> The requested resource is no longer available.
     * @throws FetchError<429, types.AutoscaleServiceResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.AutoscaleServiceResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.AutoscaleServiceResponse503> Server currently unavailable.
     */
    autoscaleService(body: types.AutoscaleServiceBodyParam, metadata: types.AutoscaleServiceMetadataParam): Promise<FetchResponse<200, types.AutoscaleServiceResponse200>>;
    /**
     * Creates a build preview instance for an image-backed service. The preview uses the
     * settings of the base service (referenced by `serviceId`), except settings overridden via
     * provided parameters. You can view all active previews from your service's Previews tab
     * on the Render Dashboard. Note that you can't create previews for Git-backed services
     * using the Render API.
     *
     * @summary Create preview for image-backed service
     * @throws FetchError<400, types.PreviewServiceResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.PreviewServiceResponse401> Authorization information is missing or invalid.
     * @throws FetchError<403, types.PreviewServiceResponse403> You do not have permissions for the requested resource.
     * @throws FetchError<404, types.PreviewServiceResponse404> Unable to find the requested resource.
     * @throws FetchError<429, types.PreviewServiceResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.PreviewServiceResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.PreviewServiceResponse503> Server currently unavailable.
     */
    previewService(body: types.PreviewServiceBodyParam, metadata: types.PreviewServiceMetadataParam): Promise<FetchResponse<200, types.PreviewServiceResponse200>>;
    /**
     * List jobs
     *
     * @throws FetchError<400, types.ListJobResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.ListJobResponse401> Authorization information is missing or invalid.
     * @throws FetchError<404, types.ListJobResponse404> Unable to find the requested resource.
     * @throws FetchError<429, types.ListJobResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.ListJobResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.ListJobResponse503> Server currently unavailable.
     */
    listJob(metadata: types.ListJobMetadataParam): Promise<FetchResponse<200, types.ListJobResponse200>>;
    /**
     * Create job
     *
     * @throws FetchError<400, types.PostJobResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.PostJobResponse401> Authorization information is missing or invalid.
     * @throws FetchError<404, types.PostJobResponse404> Unable to find the requested resource.
     * @throws FetchError<429, types.PostJobResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.PostJobResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.PostJobResponse503> Server currently unavailable.
     */
    postJob(body: types.PostJobBodyParam, metadata: types.PostJobMetadataParam): Promise<FetchResponse<200, types.PostJobResponse200>>;
    /**
     * Retrieve job
     *
     * @throws FetchError<400, types.GetJobResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.GetJobResponse401> Authorization information is missing or invalid.
     * @throws FetchError<404, types.GetJobResponse404> Unable to find the requested resource.
     * @throws FetchError<429, types.GetJobResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.GetJobResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.GetJobResponse503> Server currently unavailable.
     */
    getJob(metadata: types.GetJobMetadataParam): Promise<FetchResponse<200, types.GetJobResponse200>>;
    /**
     * Cancel running job
     *
     * @throws FetchError<400, types.CancelJobResponse400> The request could not be understood by the server.
     * @throws FetchError<401, types.CancelJobResponse401> Authorization information is missing or invalid.
     * @throws FetchError<404, types.CancelJobResponse404> Unable to find the requested resource.
     * @throws FetchError<429, types.CancelJobResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.CancelJobResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.CancelJobResponse503> Server currently unavailable.
     */
    cancelJob(metadata: types.CancelJobMetadataParam): Promise<FetchResponse<200, types.CancelJobResponse200>>;
    /**
     * Get CPU usage for one or more services
     *
     * @throws FetchError<400, types.GetCpuResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetCpuResponse500> An unexpected server error has occurred.
     */
    getCpu(metadata: types.GetCpuMetadataParam): Promise<FetchResponse<200, types.GetCpuResponse200>>;
    /**
     * Get CPU limit for one or more services
     *
     * @throws FetchError<400, types.GetCpuLimitResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetCpuLimitResponse500> An unexpected server error has occurred.
     */
    getCpuLimit(metadata: types.GetCpuLimitMetadataParam): Promise<FetchResponse<200, types.GetCpuLimitResponse200>>;
    /**
     * Get CPU target for one or more services
     *
     * @throws FetchError<400, types.GetCpuTargetResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetCpuTargetResponse500> An unexpected server error has occurred.
     */
    getCpuTarget(metadata: types.GetCpuTargetMetadataParam): Promise<FetchResponse<200, types.GetCpuTargetResponse200>>;
    /**
     * Get memory usage for one or more services
     *
     * @throws FetchError<400, types.GetMemoryResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetMemoryResponse500> An unexpected server error has occurred.
     */
    getMemory(metadata: types.GetMemoryMetadataParam): Promise<FetchResponse<200, types.GetMemoryResponse200>>;
    /**
     * Get CPU limit for one or more services
     *
     * @throws FetchError<400, types.GetMemoryLimitResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetMemoryLimitResponse500> An unexpected server error has occurred.
     */
    getMemoryLimit(metadata: types.GetMemoryLimitMetadataParam): Promise<FetchResponse<200, types.GetMemoryLimitResponse200>>;
    /**
     * Get memory target for one or more services
     *
     * @throws FetchError<400, types.GetMemoryTargetResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetMemoryTargetResponse500> An unexpected server error has occurred.
     */
    getMemoryTarget(metadata: types.GetMemoryTargetMetadataParam): Promise<FetchResponse<200, types.GetMemoryTargetResponse200>>;
    /**
     * Get HTTP request count for one or more services
     *
     * @throws FetchError<400, types.GetHttpRequestsResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetHttpRequestsResponse500> An unexpected server error has occurred.
     */
    getHttpRequests(metadata: types.GetHttpRequestsMetadataParam): Promise<FetchResponse<200, types.GetHttpRequestsResponse200>>;
    /**
     * Get HTTP latency for one or more services
     *
     * @throws FetchError<400, types.GetHttpLatencyResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetHttpLatencyResponse500> An unexpected server error has occurred.
     */
    getHttpLatency(metadata: types.GetHttpLatencyMetadataParam): Promise<FetchResponse<200, types.GetHttpLatencyResponse200>>;
    /**
     * Get bandwidth usage for one or more services
     *
     * @throws FetchError<400, types.GetBandwidthResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetBandwidthResponse500> An unexpected server error has occurred.
     */
    getBandwidth(metadata: types.GetBandwidthMetadataParam): Promise<FetchResponse<200, types.GetBandwidthResponse200>>;
    /**
     * Get disk usage for one or more services
     *
     * @throws FetchError<400, types.GetDiskUsageResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetDiskUsageResponse500> An unexpected server error has occurred.
     */
    getDiskUsage(metadata: types.GetDiskUsageMetadataParam): Promise<FetchResponse<200, types.GetDiskUsageResponse200>>;
    /**
     * Get disk capacity for one or more services
     *
     * @throws FetchError<400, types.GetDiskCapacityResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetDiskCapacityResponse500> An unexpected server error has occurred.
     */
    getDiskCapacity(metadata: types.GetDiskCapacityMetadataParam): Promise<FetchResponse<200, types.GetDiskCapacityResponse200>>;
    /**
     * Get instance count for one or more services
     *
     * @throws FetchError<400, types.GetInstanceCountResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetInstanceCountResponse500> An unexpected server error has occurred.
     */
    getInstanceCount(metadata: types.GetInstanceCountMetadataParam): Promise<FetchResponse<200, types.GetInstanceCountResponse200>>;
    /**
     * Get instance values to filter by for one or more services
     *
     * @throws FetchError<400, types.GetApplicationFilterValuesResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetApplicationFilterValuesResponse500> An unexpected server error has occurred.
     */
    getApplicationFilterValues(metadata: types.GetApplicationFilterValuesMetadataParam): Promise<FetchResponse<200, types.GetApplicationFilterValuesResponse200>>;
    /**
     * Get status codes and host values to filter by for one or more services
     *
     * @throws FetchError<400, types.GetHttpFilterValuesResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetHttpFilterValuesResponse500> An unexpected server error has occurred.
     */
    getHttpFilterValues(metadata: types.GetHttpFilterValuesMetadataParam): Promise<FetchResponse<200, types.GetHttpFilterValuesResponse200>>;
    /**
     * The path suggestions are based on the most recent 5000 log lines as filtered by the
     * provided filters
     *
     * @summary Get path suggestions to filter by for one or more services
     * @throws FetchError<400, types.GetPathFilterValuesResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetPathFilterValuesResponse500> An unexpected server error has occurred.
     */
    getPathFilterValues(metadata: types.GetPathFilterValuesMetadataParam): Promise<FetchResponse<200, types.GetPathFilterValuesResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
