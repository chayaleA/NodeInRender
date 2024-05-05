"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'render-api/1.0.0 (api/6.1.1)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
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
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
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
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * List authorized users and teams
     *
     * @throws FetchError<401, types.GetOwnersResponse401> Authorization information is missing or invalid.
     * @throws FetchError<406, types.GetOwnersResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<429, types.GetOwnersResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.GetOwnersResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.GetOwnersResponse503> Server currently unavailable.
     */
    SDK.prototype.getOwners = function (metadata) {
        return this.core.fetch('/owners', 'get', metadata);
    };
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
    SDK.prototype.getOwner = function (metadata) {
        return this.core.fetch('/owners/{ownerId}', 'get', metadata);
    };
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
    SDK.prototype.getRegistryCredentials = function (metadata) {
        return this.core.fetch('/registrycredentials', 'get', metadata);
    };
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
    SDK.prototype.createRegistryCredential = function (body) {
        return this.core.fetch('/registrycredentials', 'post', body);
    };
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
    SDK.prototype.getRegistrycredentialsRegistrycredentialid = function (metadata) {
        return this.core.fetch('/registrycredentials/{registryCredentialId}', 'get', metadata);
    };
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
    SDK.prototype.updateRegistryCredential = function (body, metadata) {
        return this.core.fetch('/registrycredentials/{registryCredentialId}', 'patch', body, metadata);
    };
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
    SDK.prototype.deleteRegistryCredential = function (metadata) {
        return this.core.fetch('/registrycredentials/{registryCredentialId}', 'delete', metadata);
    };
    /**
     * List services
     *
     * @throws FetchError<401, types.GetServicesResponse401> Authorization information is missing or invalid.
     * @throws FetchError<406, types.GetServicesResponse406> Unable to generate preferred media types as specified by Accept request header.
     * @throws FetchError<429, types.GetServicesResponse429> Rate limit has been surpassed.
     * @throws FetchError<500, types.GetServicesResponse500> An unexpected server error has occurred.
     * @throws FetchError<503, types.GetServicesResponse503> Server currently unavailable.
     */
    SDK.prototype.getServices = function (metadata) {
        return this.core.fetch('/services', 'get', metadata);
    };
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
    SDK.prototype.createService = function (body) {
        return this.core.fetch('/services', 'post', body);
    };
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
    SDK.prototype.getService = function (metadata) {
        return this.core.fetch('/services/{serviceId}', 'get', metadata);
    };
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
    SDK.prototype.updateService = function (body, metadata) {
        return this.core.fetch('/services/{serviceId}', 'patch', body, metadata);
    };
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
    SDK.prototype.deleteService = function (metadata) {
        return this.core.fetch('/services/{serviceId}', 'delete', metadata);
    };
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
    SDK.prototype.getDeploys = function (metadata) {
        return this.core.fetch('/services/{serviceId}/deploys', 'get', metadata);
    };
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
    SDK.prototype.createDeploy = function (body, metadata) {
        return this.core.fetch('/services/{serviceId}/deploys', 'post', body, metadata);
    };
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
    SDK.prototype.getDeploy = function (metadata) {
        return this.core.fetch('/services/{serviceId}/deploys/{deployId}', 'get', metadata);
    };
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
    SDK.prototype.cancelDeploy = function (metadata) {
        return this.core.fetch('/services/{serviceId}/deploys/{deployId}/cancel', 'post', metadata);
    };
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
    SDK.prototype.rollbackDeploy = function (body, metadata) {
        return this.core.fetch('/services/{serviceId}/rollback', 'post', body, metadata);
    };
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
    SDK.prototype.getEnvVarsForService = function (metadata) {
        return this.core.fetch('/services/{serviceId}/env-vars', 'get', metadata);
    };
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
    SDK.prototype.updateEnvVarsForService = function (body, metadata) {
        return this.core.fetch('/services/{serviceId}/env-vars', 'put', body, metadata);
    };
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
    SDK.prototype.retrieveHeaders = function (metadata) {
        return this.core.fetch('/services/{serviceId}/headers', 'get', metadata);
    };
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
    SDK.prototype.retrieveRoutes = function (metadata) {
        return this.core.fetch('/services/{serviceId}/routes', 'get', metadata);
    };
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
    SDK.prototype.getCustomDomains = function (metadata) {
        return this.core.fetch('/services/{serviceId}/custom-domains', 'get', metadata);
    };
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
    SDK.prototype.createCustomDomain = function (body, metadata) {
        return this.core.fetch('/services/{serviceId}/custom-domains', 'post', body, metadata);
    };
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
    SDK.prototype.getCustomDomain = function (metadata) {
        return this.core.fetch('/services/{serviceId}/custom-domains/{customDomainIdOrName}', 'get', metadata);
    };
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
    SDK.prototype.deleteCustomDomain = function (metadata) {
        return this.core.fetch('/services/{serviceId}/custom-domains/{customDomainIdOrName}', 'delete', metadata);
    };
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
    SDK.prototype.refreshCustomDomain = function (metadata) {
        return this.core.fetch('/services/{serviceId}/custom-domains/{customDomainIdOrName}/verify', 'post', metadata);
    };
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
    SDK.prototype.suspendService = function (metadata) {
        return this.core.fetch('/services/{serviceId}/suspend', 'post', metadata);
    };
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
    SDK.prototype.resumeService = function (metadata) {
        return this.core.fetch('/services/{serviceId}/resume', 'post', metadata);
    };
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
    SDK.prototype.restartServer = function (metadata) {
        return this.core.fetch('/services/{serviceId}/restart', 'post', metadata);
    };
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
    SDK.prototype.scaleService = function (body, metadata) {
        return this.core.fetch('/services/{serviceId}/scale', 'post', body, metadata);
    };
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
    SDK.prototype.autoscaleService = function (body, metadata) {
        return this.core.fetch('/services/{serviceId}/autoscaling', 'put', body, metadata);
    };
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
    SDK.prototype.previewService = function (body, metadata) {
        return this.core.fetch('/services/{serviceId}/preview', 'post', body, metadata);
    };
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
    SDK.prototype.listJob = function (metadata) {
        return this.core.fetch('/services/{serviceId}/jobs', 'get', metadata);
    };
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
    SDK.prototype.postJob = function (body, metadata) {
        return this.core.fetch('/services/{serviceId}/jobs', 'post', body, metadata);
    };
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
    SDK.prototype.getJob = function (metadata) {
        return this.core.fetch('/services/{serviceId}/jobs/{jobId}', 'get', metadata);
    };
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
    SDK.prototype.cancelJob = function (metadata) {
        return this.core.fetch('/services/{serviceId}/jobs/{jobId}/cancel', 'post', metadata);
    };
    /**
     * Get CPU usage for one or more services
     *
     * @throws FetchError<400, types.GetCpuResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetCpuResponse500> An unexpected server error has occurred.
     */
    SDK.prototype.getCpu = function (metadata) {
        return this.core.fetch('/metrics/cpu', 'get', metadata);
    };
    /**
     * Get CPU limit for one or more services
     *
     * @throws FetchError<400, types.GetCpuLimitResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetCpuLimitResponse500> An unexpected server error has occurred.
     */
    SDK.prototype.getCpuLimit = function (metadata) {
        return this.core.fetch('/metrics/cpu-limit', 'get', metadata);
    };
    /**
     * Get CPU target for one or more services
     *
     * @throws FetchError<400, types.GetCpuTargetResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetCpuTargetResponse500> An unexpected server error has occurred.
     */
    SDK.prototype.getCpuTarget = function (metadata) {
        return this.core.fetch('/metrics/cpu-target', 'get', metadata);
    };
    /**
     * Get memory usage for one or more services
     *
     * @throws FetchError<400, types.GetMemoryResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetMemoryResponse500> An unexpected server error has occurred.
     */
    SDK.prototype.getMemory = function (metadata) {
        return this.core.fetch('/metrics/memory', 'get', metadata);
    };
    /**
     * Get CPU limit for one or more services
     *
     * @throws FetchError<400, types.GetMemoryLimitResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetMemoryLimitResponse500> An unexpected server error has occurred.
     */
    SDK.prototype.getMemoryLimit = function (metadata) {
        return this.core.fetch('/metrics/memory-limit', 'get', metadata);
    };
    /**
     * Get memory target for one or more services
     *
     * @throws FetchError<400, types.GetMemoryTargetResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetMemoryTargetResponse500> An unexpected server error has occurred.
     */
    SDK.prototype.getMemoryTarget = function (metadata) {
        return this.core.fetch('/metrics/memory-target', 'get', metadata);
    };
    /**
     * Get HTTP request count for one or more services
     *
     * @throws FetchError<400, types.GetHttpRequestsResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetHttpRequestsResponse500> An unexpected server error has occurred.
     */
    SDK.prototype.getHttpRequests = function (metadata) {
        return this.core.fetch('/metrics/http-requests', 'get', metadata);
    };
    /**
     * Get HTTP latency for one or more services
     *
     * @throws FetchError<400, types.GetHttpLatencyResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetHttpLatencyResponse500> An unexpected server error has occurred.
     */
    SDK.prototype.getHttpLatency = function (metadata) {
        return this.core.fetch('/metrics/http-latency', 'get', metadata);
    };
    /**
     * Get bandwidth usage for one or more services
     *
     * @throws FetchError<400, types.GetBandwidthResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetBandwidthResponse500> An unexpected server error has occurred.
     */
    SDK.prototype.getBandwidth = function (metadata) {
        return this.core.fetch('/metrics/bandwidth', 'get', metadata);
    };
    /**
     * Get disk usage for one or more services
     *
     * @throws FetchError<400, types.GetDiskUsageResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetDiskUsageResponse500> An unexpected server error has occurred.
     */
    SDK.prototype.getDiskUsage = function (metadata) {
        return this.core.fetch('/metrics/disk-usage', 'get', metadata);
    };
    /**
     * Get disk capacity for one or more services
     *
     * @throws FetchError<400, types.GetDiskCapacityResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetDiskCapacityResponse500> An unexpected server error has occurred.
     */
    SDK.prototype.getDiskCapacity = function (metadata) {
        return this.core.fetch('/metrics/disk-capacity', 'get', metadata);
    };
    /**
     * Get instance count for one or more services
     *
     * @throws FetchError<400, types.GetInstanceCountResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetInstanceCountResponse500> An unexpected server error has occurred.
     */
    SDK.prototype.getInstanceCount = function (metadata) {
        return this.core.fetch('/metrics/instance-count', 'get', metadata);
    };
    /**
     * Get instance values to filter by for one or more services
     *
     * @throws FetchError<400, types.GetApplicationFilterValuesResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetApplicationFilterValuesResponse500> An unexpected server error has occurred.
     */
    SDK.prototype.getApplicationFilterValues = function (metadata) {
        return this.core.fetch('/metrics/filters/application', 'get', metadata);
    };
    /**
     * Get status codes and host values to filter by for one or more services
     *
     * @throws FetchError<400, types.GetHttpFilterValuesResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetHttpFilterValuesResponse500> An unexpected server error has occurred.
     */
    SDK.prototype.getHttpFilterValues = function (metadata) {
        return this.core.fetch('/metrics/filters/http', 'get', metadata);
    };
    /**
     * The path suggestions are based on the most recent 5000 log lines as filtered by the
     * provided filters
     *
     * @summary Get path suggestions to filter by for one or more services
     * @throws FetchError<400, types.GetPathFilterValuesResponse400> The request could not be understood by the server.
     * @throws FetchError<500, types.GetPathFilterValuesResponse500> An unexpected server error has occurred.
     */
    SDK.prototype.getPathFilterValues = function (metadata) {
        return this.core.fetch('/metrics/filters/path', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
