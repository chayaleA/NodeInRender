declare const AutoscaleService: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["enabled", "min", "max", "criteria"];
        readonly properties: {
            readonly enabled: {
                readonly type: "boolean";
                readonly default: false;
            };
            readonly min: {
                readonly type: "integer";
                readonly description: "The minimum number of instances for the service";
            };
            readonly max: {
                readonly type: "integer";
                readonly description: "The maximum number of instances for the service";
            };
            readonly criteria: {
                readonly type: "object";
                readonly required: readonly ["cpu", "memory"];
                readonly properties: {
                    readonly cpu: {
                        readonly type: "object";
                        readonly required: readonly ["enabled", "percentage"];
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                                readonly default: false;
                            };
                            readonly percentage: {
                                readonly type: "integer";
                                readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                            };
                        };
                    };
                    readonly memory: {
                        readonly type: "object";
                        readonly required: readonly ["enabled", "percentage"];
                        readonly properties: {
                            readonly enabled: {
                                readonly type: "boolean";
                                readonly default: false;
                            };
                            readonly percentage: {
                                readonly type: "integer";
                                readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["enabled", "min", "max", "criteria"];
            readonly properties: {
                readonly enabled: {
                    readonly type: "boolean";
                    readonly default: false;
                };
                readonly min: {
                    readonly type: "integer";
                    readonly description: "The minimum number of instances for the service";
                };
                readonly max: {
                    readonly type: "integer";
                    readonly description: "The maximum number of instances for the service";
                };
                readonly criteria: {
                    readonly type: "object";
                    readonly required: readonly ["cpu", "memory"];
                    readonly properties: {
                        readonly cpu: {
                            readonly type: "object";
                            readonly required: readonly ["enabled", "percentage"];
                            readonly properties: {
                                readonly enabled: {
                                    readonly type: "boolean";
                                    readonly default: false;
                                };
                                readonly percentage: {
                                    readonly type: "integer";
                                    readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                };
                            };
                        };
                        readonly memory: {
                            readonly type: "object";
                            readonly required: readonly ["enabled", "percentage"];
                            readonly properties: {
                                readonly enabled: {
                                    readonly type: "boolean";
                                    readonly default: false;
                                };
                                readonly percentage: {
                                    readonly type: "integer";
                                    readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CancelDeploy: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
                readonly deployId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the deploy";
                };
            };
            readonly required: readonly ["serviceId", "deployId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["id"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly commit: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                    };
                };
                readonly image: {
                    readonly description: "Image information used when creating the deploy. Not present for Git-backed deploys";
                    readonly type: "object";
                    readonly properties: {
                        readonly ref: {
                            readonly description: "Image reference used when creating the deploy";
                            readonly type: "string";
                        };
                        readonly sha: {
                            readonly description: "SHA that the image reference was resolved to when creating the deploy";
                            readonly type: "string";
                        };
                        readonly registryCredential: {
                            readonly description: "Name of credential used to pull the image, if provided";
                            readonly type: "string";
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["created", "build_in_progress", "update_in_progress", "live", "deactivated", "build_failed", "update_failed", "canceled", "pre_deploy_in_progress", "pre_deploy_failed"];
                    readonly description: "`created` `build_in_progress` `update_in_progress` `live` `deactivated` `build_failed` `update_failed` `canceled` `pre_deploy_in_progress` `pre_deploy_failed`";
                };
                readonly trigger: {
                    readonly type: "string";
                    readonly enum: readonly ["api", "blueprint_sync", "deploy_hook", "deployed_by_render", "manual", "other", "new_commit", "rollback", "service_resumed", "service_updated"];
                    readonly description: "`api` `blueprint_sync` `deploy_hook` `deployed_by_render` `manual` `other` `new_commit` `rollback` `service_resumed` `service_updated`";
                };
                readonly finishedAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CancelJob: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
                readonly jobId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the job";
                };
            };
            readonly required: readonly ["serviceId", "jobId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["id", "serviceId", "startCommand", "planId", "createdAt"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["job-xxxxx"];
                };
                readonly serviceId: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                };
                readonly startCommand: {
                    readonly type: "string";
                    readonly examples: readonly ["echo 'hello world'"];
                };
                readonly planId: {
                    readonly type: "string";
                    readonly examples: readonly ["plan-srv-004"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["succeeded"];
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-07-15T07:20:05.777035-07:00"];
                };
                readonly startedAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-07-15T07:20:05.777035-07:00"];
                };
                readonly finishedAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-07-15T07:20:05.777035-07:00"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateCustomDomain: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name"];
        readonly properties: {
            readonly name: {
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly required: readonly ["id", "name", "domainType", "publicSuffix", "verificationStatus", "createdAt", "redirectForName"];
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                    };
                    readonly name: {
                        readonly type: "string";
                    };
                    readonly domainType: {
                        readonly type: "string";
                        readonly enum: readonly ["apex", "subdomain"];
                        readonly description: "`apex` `subdomain`";
                    };
                    readonly publicSuffix: {
                        readonly type: "string";
                    };
                    readonly redirectForName: {
                        readonly type: "string";
                    };
                    readonly verificationStatus: {
                        readonly type: "string";
                        readonly enum: readonly ["verified", "unverified"];
                        readonly description: "`verified` `unverified`";
                    };
                    readonly createdAt: {
                        readonly type: "string";
                        readonly format: "date-time";
                    };
                    readonly server: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "409": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateDeploy: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly clearCache: {
                readonly type: "string";
                readonly enum: readonly ["clear", "do_not_clear"];
                readonly default: "do_not_clear";
                readonly description: "Defaults to \"do_not_clear\"\n\nDefault: `do_not_clear`";
            };
            readonly commitId: {
                readonly type: "string";
                readonly description: "Specific ID of commit to deploy for a web service, defaults to latest commit. Not supported for Cron Job deploys.";
            };
            readonly imageUrl: {
                readonly type: "string";
                readonly description: "URL of the image to deploy for an image-backed service. The host, repository, and image name must match the currently configured image for the service.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly required: readonly ["id"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly commit: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                    };
                };
                readonly image: {
                    readonly description: "Image information used when creating the deploy. Not present for Git-backed deploys";
                    readonly type: "object";
                    readonly properties: {
                        readonly ref: {
                            readonly description: "Image reference used when creating the deploy";
                            readonly type: "string";
                        };
                        readonly sha: {
                            readonly description: "SHA that the image reference was resolved to when creating the deploy";
                            readonly type: "string";
                        };
                        readonly registryCredential: {
                            readonly description: "Name of credential used to pull the image, if provided";
                            readonly type: "string";
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["created", "build_in_progress", "update_in_progress", "live", "deactivated", "build_failed", "update_failed", "canceled", "pre_deploy_in_progress", "pre_deploy_failed"];
                    readonly description: "`created` `build_in_progress` `update_in_progress` `live` `deactivated` `build_failed` `update_failed` `canceled` `pre_deploy_in_progress` `pre_deploy_failed`";
                };
                readonly trigger: {
                    readonly type: "string";
                    readonly enum: readonly ["api", "blueprint_sync", "deploy_hook", "deployed_by_render", "manual", "other", "new_commit", "rollback", "service_resumed", "service_updated"];
                    readonly description: "`api` `blueprint_sync` `deploy_hook` `deployed_by_render` `manual` `other` `new_commit` `rollback` `service_resumed` `service_updated`";
                };
                readonly finishedAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "409": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateRegistryCredential: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name", "registry", "username", "authToken", "ownerId"];
        readonly properties: {
            readonly registry: {
                readonly type: "string";
                readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
            };
            readonly name: {
                readonly type: "string";
            };
            readonly username: {
                readonly type: "string";
            };
            readonly authToken: {
                readonly type: "string";
            };
            readonly ownerId: {
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["id", "name", "username", "registry"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this credential";
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "Descriptive name for this credential";
                };
                readonly registry: {
                    readonly type: "string";
                    readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                    readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                };
                readonly username: {
                    readonly type: "string";
                    readonly description: "The username associated with the credential";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "409": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateService: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["type", "name", "ownerId"];
        readonly properties: {
            readonly type: {
                readonly type: "string";
                readonly enum: readonly ["static_site", "web_service", "private_service", "background_worker", "cron_job"];
            };
            readonly name: {
                readonly type: "string";
            };
            readonly ownerId: {
                readonly type: "string";
            };
            readonly repo: {
                readonly type: "string";
                readonly description: "Do not include the branch in the repo string. You can instead supply a 'branch' parameter.";
                readonly examples: readonly ["https://github.com/render-examples/flask-hello-world"];
            };
            readonly autoDeploy: {
                readonly type: "string";
                readonly enum: readonly ["yes", "no"];
                readonly default: "yes";
                readonly description: "Defaults to \"yes\"\n\nDefault: `yes`";
            };
            readonly branch: {
                readonly type: "string";
                readonly description: "If left empty, this will fall back to the default branch of the repository";
            };
            readonly image: {
                readonly type: "object";
                readonly required: readonly ["imagePath", "ownerId"];
                readonly properties: {
                    readonly ownerId: {
                        readonly type: "string";
                        readonly description: "The ID of the owner for this image. This should match the owner of the service as well as the owner of any specified registry credential.";
                    };
                    readonly registryCredentialId: {
                        readonly type: "string";
                        readonly description: "Optional reference to the registry credential passed to the image repository to retrieve this image.";
                    };
                    readonly imagePath: {
                        readonly type: "string";
                        readonly description: "Path to the image used for this server (e.g docker.io/library/nginx:latest).";
                    };
                };
            };
            readonly buildFilter: {
                readonly type: "object";
                readonly required: readonly ["paths", "ignoredPaths"];
                readonly properties: {
                    readonly paths: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly ignoredPaths: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly rootDir: {
                readonly type: "string";
            };
            readonly envVars: {
                readonly type: "array";
                readonly items: {
                    readonly oneOf: readonly [{
                        readonly type: "object";
                        readonly required: readonly ["key", "value"];
                        readonly properties: {
                            readonly key: {
                                readonly type: "string";
                            };
                            readonly value: {
                                readonly type: "string";
                            };
                        };
                    }, {
                        readonly type: "object";
                        readonly required: readonly ["key", "generateValue"];
                        readonly properties: {
                            readonly key: {
                                readonly type: "string";
                            };
                            readonly generateValue: {
                                readonly type: "boolean";
                            };
                        };
                    }];
                };
            };
            readonly secretFiles: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly required: readonly ["id", "name"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly serviceDetails: {
                readonly oneOf: readonly [{
                    readonly type: "object";
                    readonly properties: {
                        readonly buildCommand: {
                            readonly type: "string";
                        };
                        readonly headers: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["path", "name", "value"];
                                readonly properties: {
                                    readonly path: {
                                        readonly type: "string";
                                        readonly description: "The request path to add the header to. Wildcards will cause headers to be applied to all matching paths.";
                                        readonly examples: readonly ["/static/*"];
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "Header name";
                                        readonly examples: readonly ["Cache-Control"];
                                    };
                                    readonly value: {
                                        readonly type: "string";
                                        readonly description: "Header value";
                                        readonly examples: readonly ["public, max-age=604800"];
                                    };
                                };
                            };
                        };
                        readonly publishPath: {
                            readonly type: "string";
                            readonly description: "Defaults to \"public\"";
                        };
                        readonly pullRequestPreviewsEnabled: {
                            readonly type: "string";
                            readonly enum: readonly ["yes", "no"];
                            readonly default: "no";
                            readonly description: "Defaults to \"no\"\n\nDefault: `no`";
                        };
                        readonly routes: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly required: readonly ["id", "type", "source", "destination", "priority"];
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: readonly ["redirect", "rewrite"];
                                    };
                                    readonly source: {
                                        readonly type: "string";
                                    };
                                    readonly destination: {
                                        readonly type: "string";
                                    };
                                    readonly priority: {
                                        readonly type: "integer";
                                        readonly description: "Redirect and Rewrite Rules are applied in priority order starting at 0";
                                    };
                                };
                            };
                        };
                    };
                }, {
                    readonly type: "object";
                    readonly required: readonly ["env"];
                    readonly properties: {
                        readonly disk: {
                            readonly type: "object";
                            readonly required: readonly ["name", "mountPath"];
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly mountPath: {
                                    readonly type: "string";
                                };
                                readonly sizeGB: {
                                    readonly type: "integer";
                                    readonly minimum: 1;
                                    readonly description: "Defaults to 1";
                                };
                            };
                        };
                        readonly env: {
                            readonly type: "string";
                            readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                            readonly description: "Environment (runtime)";
                        };
                        readonly envSpecificDetails: {
                            readonly oneOf: readonly [{
                                readonly type: "object";
                                readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                readonly properties: {
                                    readonly dockerCommand: {
                                        readonly type: "string";
                                    };
                                    readonly dockerContext: {
                                        readonly type: "string";
                                    };
                                    readonly dockerfilePath: {
                                        readonly type: "string";
                                    };
                                    readonly preDeployCommand: {
                                        readonly type: "string";
                                    };
                                    readonly registryCredential: {
                                        readonly type: "object";
                                        readonly required: readonly ["id", "name", "username", "registry"];
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                                readonly description: "Unique identifier for this credential";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                                readonly description: "Descriptive name for this credential";
                                            };
                                            readonly registry: {
                                                readonly type: "string";
                                                readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                readonly description: "The registry to use this credential with";
                                            };
                                            readonly username: {
                                                readonly type: "string";
                                                readonly description: "The username associated with the credential";
                                            };
                                        };
                                    };
                                };
                            }, {
                                readonly type: "object";
                                readonly required: readonly ["buildCommand", "startCommand"];
                                readonly properties: {
                                    readonly buildCommand: {
                                        readonly type: "string";
                                    };
                                    readonly startCommand: {
                                        readonly type: "string";
                                    };
                                    readonly preDeployCommand: {
                                        readonly type: "string";
                                    };
                                };
                            }];
                        };
                        readonly healthCheckPath: {
                            readonly type: "string";
                        };
                        readonly numInstances: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Defaults to 1";
                        };
                        readonly plan: {
                            readonly default: "starter";
                            readonly description: "Defaults to \"starter\"\n\nDefault: `starter`";
                            readonly type: "string";
                            readonly enum: readonly ["starter", "standard", "pro", "pro_plus", "pro_max", "pro_ultra"];
                        };
                        readonly pullRequestPreviewsEnabled: {
                            readonly type: "string";
                            readonly enum: readonly ["yes", "no"];
                            readonly default: "no";
                            readonly description: "Defaults to \"no\"\n\nDefault: `no`";
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                            readonly default: "oregon";
                            readonly description: "Defaults to \"oregon\"\n\nDefault: `oregon`";
                        };
                    };
                }, {
                    readonly type: "object";
                    readonly required: readonly ["env"];
                    readonly properties: {
                        readonly disk: {
                            readonly type: "object";
                            readonly required: readonly ["name", "mountPath"];
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly mountPath: {
                                    readonly type: "string";
                                };
                                readonly sizeGB: {
                                    readonly type: "integer";
                                    readonly minimum: 1;
                                    readonly description: "Defaults to 1";
                                };
                            };
                        };
                        readonly env: {
                            readonly type: "string";
                            readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                            readonly description: "Environment (runtime)";
                        };
                        readonly envSpecificDetails: {
                            readonly oneOf: readonly [{
                                readonly type: "object";
                                readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                readonly properties: {
                                    readonly dockerCommand: {
                                        readonly type: "string";
                                    };
                                    readonly dockerContext: {
                                        readonly type: "string";
                                    };
                                    readonly dockerfilePath: {
                                        readonly type: "string";
                                    };
                                    readonly preDeployCommand: {
                                        readonly type: "string";
                                    };
                                    readonly registryCredential: {
                                        readonly type: "object";
                                        readonly required: readonly ["id", "name", "username", "registry"];
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                                readonly description: "Unique identifier for this credential";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                                readonly description: "Descriptive name for this credential";
                                            };
                                            readonly registry: {
                                                readonly type: "string";
                                                readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                readonly description: "The registry to use this credential with";
                                            };
                                            readonly username: {
                                                readonly type: "string";
                                                readonly description: "The username associated with the credential";
                                            };
                                        };
                                    };
                                };
                            }, {
                                readonly type: "object";
                                readonly required: readonly ["buildCommand", "startCommand"];
                                readonly properties: {
                                    readonly buildCommand: {
                                        readonly type: "string";
                                    };
                                    readonly startCommand: {
                                        readonly type: "string";
                                    };
                                    readonly preDeployCommand: {
                                        readonly type: "string";
                                    };
                                };
                            }];
                        };
                        readonly numInstances: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly default: 1;
                            readonly description: "Defaults to 1";
                        };
                        readonly plan: {
                            readonly default: "starter";
                            readonly description: "Defaults to \"starter\"\n\nDefault: `starter`";
                            readonly type: "string";
                            readonly enum: readonly ["starter", "standard", "pro", "pro_plus", "pro_max", "pro_ultra"];
                        };
                        readonly pullRequestPreviewsEnabled: {
                            readonly type: "string";
                            readonly enum: readonly ["yes", "no"];
                            readonly default: "no";
                            readonly description: "Defaults to \"no\"\n\nDefault: `no`";
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                            readonly default: "oregon";
                            readonly description: "Defaults to \"oregon\"\n\nDefault: `oregon`";
                        };
                    };
                }, {
                    readonly type: "object";
                    readonly required: readonly ["env"];
                    readonly properties: {
                        readonly disk: {
                            readonly type: "object";
                            readonly required: readonly ["name", "mountPath"];
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly mountPath: {
                                    readonly type: "string";
                                };
                                readonly sizeGB: {
                                    readonly type: "integer";
                                    readonly minimum: 1;
                                    readonly description: "Defaults to 1";
                                };
                            };
                        };
                        readonly env: {
                            readonly type: "string";
                            readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                            readonly description: "Environment (runtime)";
                        };
                        readonly envSpecificDetails: {
                            readonly oneOf: readonly [{
                                readonly type: "object";
                                readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                readonly properties: {
                                    readonly dockerCommand: {
                                        readonly type: "string";
                                    };
                                    readonly dockerContext: {
                                        readonly type: "string";
                                    };
                                    readonly dockerfilePath: {
                                        readonly type: "string";
                                    };
                                    readonly preDeployCommand: {
                                        readonly type: "string";
                                    };
                                    readonly registryCredential: {
                                        readonly type: "object";
                                        readonly required: readonly ["id", "name", "username", "registry"];
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                                readonly description: "Unique identifier for this credential";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                                readonly description: "Descriptive name for this credential";
                                            };
                                            readonly registry: {
                                                readonly type: "string";
                                                readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                readonly description: "The registry to use this credential with";
                                            };
                                            readonly username: {
                                                readonly type: "string";
                                                readonly description: "The username associated with the credential";
                                            };
                                        };
                                    };
                                };
                            }, {
                                readonly type: "object";
                                readonly required: readonly ["buildCommand", "startCommand"];
                                readonly properties: {
                                    readonly buildCommand: {
                                        readonly type: "string";
                                    };
                                    readonly startCommand: {
                                        readonly type: "string";
                                    };
                                    readonly preDeployCommand: {
                                        readonly type: "string";
                                    };
                                };
                            }];
                        };
                        readonly numInstances: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly default: 1;
                            readonly description: "Defaults to 1";
                        };
                        readonly plan: {
                            readonly default: "starter";
                            readonly description: "Defaults to \"starter\"\n\nDefault: `starter`";
                            readonly type: "string";
                            readonly enum: readonly ["starter", "standard", "pro", "pro_plus", "pro_max", "pro_ultra"];
                        };
                        readonly pullRequestPreviewsEnabled: {
                            readonly type: "string";
                            readonly enum: readonly ["yes", "no"];
                            readonly default: "no";
                            readonly description: "Defaults to \"no\"\n\nDefault: `no`";
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                            readonly default: "oregon";
                            readonly description: "Defaults to \"oregon\"\n\nDefault: `oregon`";
                        };
                    };
                }, {
                    readonly type: "object";
                    readonly required: readonly ["env", "schedule"];
                    readonly properties: {
                        readonly env: {
                            readonly type: "string";
                            readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                            readonly description: "Environment (runtime)";
                        };
                        readonly envSpecificDetails: {
                            readonly oneOf: readonly [{
                                readonly type: "object";
                                readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                readonly properties: {
                                    readonly dockerCommand: {
                                        readonly type: "string";
                                    };
                                    readonly dockerContext: {
                                        readonly type: "string";
                                    };
                                    readonly dockerfilePath: {
                                        readonly type: "string";
                                    };
                                    readonly preDeployCommand: {
                                        readonly type: "string";
                                    };
                                    readonly registryCredential: {
                                        readonly type: "object";
                                        readonly required: readonly ["id", "name", "username", "registry"];
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                                readonly description: "Unique identifier for this credential";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                                readonly description: "Descriptive name for this credential";
                                            };
                                            readonly registry: {
                                                readonly type: "string";
                                                readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                readonly description: "The registry to use this credential with";
                                            };
                                            readonly username: {
                                                readonly type: "string";
                                                readonly description: "The username associated with the credential";
                                            };
                                        };
                                    };
                                };
                            }, {
                                readonly type: "object";
                                readonly required: readonly ["buildCommand", "startCommand"];
                                readonly properties: {
                                    readonly buildCommand: {
                                        readonly type: "string";
                                    };
                                    readonly startCommand: {
                                        readonly type: "string";
                                    };
                                    readonly preDeployCommand: {
                                        readonly type: "string";
                                    };
                                };
                            }];
                        };
                        readonly plan: {
                            readonly type: "string";
                            readonly enum: readonly ["starter", "standard", "pro", "pro_plus", "pro_max", "pro_ultra"];
                        };
                        readonly region: {
                            readonly type: "string";
                            readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                            readonly default: "oregon";
                            readonly description: "Defaults to \"oregon\"\n\nDefault: `oregon`";
                        };
                        readonly schedule: {
                            readonly type: "string";
                        };
                    };
                }];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly service: {
                    readonly type: "object";
                    readonly required: readonly ["id", "name", "ownerId", "type", "createdAt", "updatedAt", "suspended", "suspenders", "autoDeploy", "notifyOnFail", "slug", "serviceDetails", "rootDir"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly autoDeploy: {
                            readonly type: "string";
                            readonly enum: readonly ["yes", "no"];
                            readonly description: "`yes` `no`";
                        };
                        readonly branch: {
                            readonly type: "string";
                        };
                        readonly buildFilter: {
                            readonly type: "object";
                            readonly required: readonly ["paths", "ignoredPaths"];
                            readonly properties: {
                                readonly paths: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                };
                                readonly ignoredPaths: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly imagePath: {
                            readonly type: "string";
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly notifyOnFail: {
                            readonly type: "string";
                            readonly enum: readonly ["default", "notify", "ignore"];
                            readonly description: "`default` `notify` `ignore`";
                        };
                        readonly ownerId: {
                            readonly type: "string";
                        };
                        readonly repo: {
                            readonly type: "string";
                            readonly examples: readonly ["https://github.com/render-examples/flask-hello-world"];
                        };
                        readonly rootDir: {
                            readonly type: "string";
                        };
                        readonly slug: {
                            readonly type: "string";
                        };
                        readonly suspended: {
                            readonly type: "string";
                            readonly enum: readonly ["suspended", "not_suspended"];
                            readonly description: "`suspended` `not_suspended`";
                        };
                        readonly suspenders: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["admin", "billing", "user", "parent_service", "unknown"];
                                readonly description: "`admin` `billing` `user` `parent_service` `unknown`";
                            };
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["static_site", "web_service", "private_service", "background_worker", "cron_job"];
                            readonly description: "`static_site` `web_service` `private_service` `background_worker` `cron_job`";
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly serviceDetails: {
                            readonly oneOf: readonly [{
                                readonly type: "object";
                                readonly required: readonly ["buildCommand", "publishPath", "pullRequestPreviewsEnabled", "url", "buildPlan"];
                                readonly properties: {
                                    readonly buildCommand: {
                                        readonly type: "string";
                                    };
                                    readonly parentServer: {
                                        readonly required: readonly ["id", "name"];
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly publishPath: {
                                        readonly type: "string";
                                    };
                                    readonly pullRequestPreviewsEnabled: {
                                        readonly type: "string";
                                        readonly enum: readonly ["yes", "no"];
                                        readonly description: "`yes` `no`";
                                    };
                                    readonly url: {
                                        readonly type: "string";
                                    };
                                    readonly buildPlan: {
                                        readonly type: "string";
                                    };
                                };
                            }, {
                                readonly type: "object";
                                readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "pullRequestPreviewsEnabled", "numInstances", "buildPlan", "healthCheckPath", "openPorts", "url"];
                                readonly properties: {
                                    readonly autoscaling: {
                                        readonly type: "object";
                                        readonly required: readonly ["enabled", "min", "max", "criteria"];
                                        readonly properties: {
                                            readonly enabled: {
                                                readonly type: "boolean";
                                                readonly default: false;
                                            };
                                            readonly min: {
                                                readonly type: "integer";
                                                readonly description: "The minimum number of instances for the service";
                                            };
                                            readonly max: {
                                                readonly type: "integer";
                                                readonly description: "The maximum number of instances for the service";
                                            };
                                            readonly criteria: {
                                                readonly type: "object";
                                                readonly required: readonly ["cpu", "memory"];
                                                readonly properties: {
                                                    readonly cpu: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["enabled", "percentage"];
                                                        readonly properties: {
                                                            readonly enabled: {
                                                                readonly type: "boolean";
                                                                readonly default: false;
                                                            };
                                                            readonly percentage: {
                                                                readonly type: "integer";
                                                                readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                            };
                                                        };
                                                    };
                                                    readonly memory: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["enabled", "percentage"];
                                                        readonly properties: {
                                                            readonly enabled: {
                                                                readonly type: "boolean";
                                                                readonly default: false;
                                                            };
                                                            readonly percentage: {
                                                                readonly type: "integer";
                                                                readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly disk: {
                                        readonly type: "object";
                                        readonly required: readonly ["id", "name", "sizeGB", "mountPath"];
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly sizeGB: {
                                                readonly type: "integer";
                                            };
                                            readonly mountPath: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly env: {
                                        readonly type: "string";
                                        readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                        readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                                    };
                                    readonly envSpecificDetails: {
                                        readonly oneOf: readonly [{
                                            readonly type: "object";
                                            readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                            readonly properties: {
                                                readonly dockerCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly dockerContext: {
                                                    readonly type: "string";
                                                };
                                                readonly dockerfilePath: {
                                                    readonly type: "string";
                                                };
                                                readonly preDeployCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly registryCredential: {
                                                    readonly type: "object";
                                                    readonly required: readonly ["id", "name", "username", "registry"];
                                                    readonly properties: {
                                                        readonly id: {
                                                            readonly type: "string";
                                                            readonly description: "Unique identifier for this credential";
                                                        };
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly description: "Descriptive name for this credential";
                                                        };
                                                        readonly registry: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                            readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                        };
                                                        readonly username: {
                                                            readonly type: "string";
                                                            readonly description: "The username associated with the credential";
                                                        };
                                                    };
                                                };
                                            };
                                        }, {
                                            readonly type: "object";
                                            readonly required: readonly ["buildCommand", "startCommand"];
                                            readonly properties: {
                                                readonly buildCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly startCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly preDeployCommand: {
                                                    readonly type: "string";
                                                };
                                            };
                                        }];
                                    };
                                    readonly healthCheckPath: {
                                        readonly type: "string";
                                    };
                                    readonly numInstances: {
                                        readonly type: "integer";
                                        readonly description: "For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.";
                                    };
                                    readonly openPorts: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly required: readonly ["port", "protocol"];
                                            readonly properties: {
                                                readonly port: {
                                                    readonly type: "integer";
                                                    readonly examples: readonly [10000];
                                                };
                                                readonly protocol: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["TCP", "UDP"];
                                                    readonly description: "`TCP` `UDP`";
                                                };
                                            };
                                        };
                                    };
                                    readonly parentServer: {
                                        readonly required: readonly ["id", "name"];
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly plan: {
                                        readonly type: "string";
                                        readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                        readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                        readonly examples: readonly ["starter"];
                                    };
                                    readonly pullRequestPreviewsEnabled: {
                                        readonly type: "string";
                                        readonly enum: readonly ["yes", "no"];
                                        readonly description: "`yes` `no`";
                                    };
                                    readonly region: {
                                        readonly type: "string";
                                        readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                        readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                                    };
                                    readonly url: {
                                        readonly type: "string";
                                    };
                                    readonly buildPlan: {
                                        readonly type: "string";
                                    };
                                };
                            }, {
                                readonly type: "object";
                                readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "pullRequestPreviewsEnabled", "numInstances", "buildPlan", "openPorts", "url"];
                                readonly properties: {
                                    readonly autoscaling: {
                                        readonly type: "object";
                                        readonly required: readonly ["enabled", "min", "max", "criteria"];
                                        readonly properties: {
                                            readonly enabled: {
                                                readonly type: "boolean";
                                                readonly default: false;
                                            };
                                            readonly min: {
                                                readonly type: "integer";
                                                readonly description: "The minimum number of instances for the service";
                                            };
                                            readonly max: {
                                                readonly type: "integer";
                                                readonly description: "The maximum number of instances for the service";
                                            };
                                            readonly criteria: {
                                                readonly type: "object";
                                                readonly required: readonly ["cpu", "memory"];
                                                readonly properties: {
                                                    readonly cpu: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["enabled", "percentage"];
                                                        readonly properties: {
                                                            readonly enabled: {
                                                                readonly type: "boolean";
                                                                readonly default: false;
                                                            };
                                                            readonly percentage: {
                                                                readonly type: "integer";
                                                                readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                            };
                                                        };
                                                    };
                                                    readonly memory: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["enabled", "percentage"];
                                                        readonly properties: {
                                                            readonly enabled: {
                                                                readonly type: "boolean";
                                                                readonly default: false;
                                                            };
                                                            readonly percentage: {
                                                                readonly type: "integer";
                                                                readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly disk: {
                                        readonly type: "object";
                                        readonly required: readonly ["id", "name", "sizeGB", "mountPath"];
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly sizeGB: {
                                                readonly type: "integer";
                                            };
                                            readonly mountPath: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly env: {
                                        readonly type: "string";
                                        readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                        readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                                    };
                                    readonly envSpecificDetails: {
                                        readonly oneOf: readonly [{
                                            readonly type: "object";
                                            readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                            readonly properties: {
                                                readonly dockerCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly dockerContext: {
                                                    readonly type: "string";
                                                };
                                                readonly dockerfilePath: {
                                                    readonly type: "string";
                                                };
                                                readonly preDeployCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly registryCredential: {
                                                    readonly type: "object";
                                                    readonly required: readonly ["id", "name", "username", "registry"];
                                                    readonly properties: {
                                                        readonly id: {
                                                            readonly type: "string";
                                                            readonly description: "Unique identifier for this credential";
                                                        };
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly description: "Descriptive name for this credential";
                                                        };
                                                        readonly registry: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                            readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                        };
                                                        readonly username: {
                                                            readonly type: "string";
                                                            readonly description: "The username associated with the credential";
                                                        };
                                                    };
                                                };
                                            };
                                        }, {
                                            readonly type: "object";
                                            readonly required: readonly ["buildCommand", "startCommand"];
                                            readonly properties: {
                                                readonly buildCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly startCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly preDeployCommand: {
                                                    readonly type: "string";
                                                };
                                            };
                                        }];
                                    };
                                    readonly numInstances: {
                                        readonly type: "integer";
                                        readonly description: "For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.";
                                    };
                                    readonly openPorts: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly required: readonly ["port", "protocol"];
                                            readonly properties: {
                                                readonly port: {
                                                    readonly type: "integer";
                                                    readonly examples: readonly [10000];
                                                };
                                                readonly protocol: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["TCP", "UDP"];
                                                    readonly description: "`TCP` `UDP`";
                                                };
                                            };
                                        };
                                    };
                                    readonly parentServer: {
                                        readonly required: readonly ["id", "name"];
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly plan: {
                                        readonly type: "string";
                                        readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                        readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                        readonly examples: readonly ["starter"];
                                    };
                                    readonly pullRequestPreviewsEnabled: {
                                        readonly type: "string";
                                        readonly enum: readonly ["yes", "no"];
                                        readonly description: "`yes` `no`";
                                    };
                                    readonly region: {
                                        readonly type: "string";
                                        readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                        readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                                    };
                                    readonly url: {
                                        readonly type: "string";
                                    };
                                    readonly buildPlan: {
                                        readonly type: "string";
                                    };
                                };
                            }, {
                                readonly type: "object";
                                readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "pullRequestPreviewsEnabled", "numInstances", "buildPlan"];
                                readonly properties: {
                                    readonly autoscaling: {
                                        readonly type: "object";
                                        readonly required: readonly ["enabled", "min", "max", "criteria"];
                                        readonly properties: {
                                            readonly enabled: {
                                                readonly type: "boolean";
                                                readonly default: false;
                                            };
                                            readonly min: {
                                                readonly type: "integer";
                                                readonly description: "The minimum number of instances for the service";
                                            };
                                            readonly max: {
                                                readonly type: "integer";
                                                readonly description: "The maximum number of instances for the service";
                                            };
                                            readonly criteria: {
                                                readonly type: "object";
                                                readonly required: readonly ["cpu", "memory"];
                                                readonly properties: {
                                                    readonly cpu: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["enabled", "percentage"];
                                                        readonly properties: {
                                                            readonly enabled: {
                                                                readonly type: "boolean";
                                                                readonly default: false;
                                                            };
                                                            readonly percentage: {
                                                                readonly type: "integer";
                                                                readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                            };
                                                        };
                                                    };
                                                    readonly memory: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["enabled", "percentage"];
                                                        readonly properties: {
                                                            readonly enabled: {
                                                                readonly type: "boolean";
                                                                readonly default: false;
                                                            };
                                                            readonly percentage: {
                                                                readonly type: "integer";
                                                                readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly disk: {
                                        readonly type: "object";
                                        readonly required: readonly ["id", "name", "sizeGB", "mountPath"];
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly sizeGB: {
                                                readonly type: "integer";
                                            };
                                            readonly mountPath: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly env: {
                                        readonly type: "string";
                                        readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                        readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                                    };
                                    readonly envSpecificDetails: {
                                        readonly oneOf: readonly [{
                                            readonly type: "object";
                                            readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                            readonly properties: {
                                                readonly dockerCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly dockerContext: {
                                                    readonly type: "string";
                                                };
                                                readonly dockerfilePath: {
                                                    readonly type: "string";
                                                };
                                                readonly preDeployCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly registryCredential: {
                                                    readonly type: "object";
                                                    readonly required: readonly ["id", "name", "username", "registry"];
                                                    readonly properties: {
                                                        readonly id: {
                                                            readonly type: "string";
                                                            readonly description: "Unique identifier for this credential";
                                                        };
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly description: "Descriptive name for this credential";
                                                        };
                                                        readonly registry: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                            readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                        };
                                                        readonly username: {
                                                            readonly type: "string";
                                                            readonly description: "The username associated with the credential";
                                                        };
                                                    };
                                                };
                                            };
                                        }, {
                                            readonly type: "object";
                                            readonly required: readonly ["buildCommand", "startCommand"];
                                            readonly properties: {
                                                readonly buildCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly startCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly preDeployCommand: {
                                                    readonly type: "string";
                                                };
                                            };
                                        }];
                                    };
                                    readonly numInstances: {
                                        readonly type: "integer";
                                        readonly description: "For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.";
                                    };
                                    readonly parentServer: {
                                        readonly required: readonly ["id", "name"];
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly plan: {
                                        readonly type: "string";
                                        readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                        readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                        readonly examples: readonly ["starter"];
                                    };
                                    readonly pullRequestPreviewsEnabled: {
                                        readonly type: "string";
                                        readonly enum: readonly ["yes", "no"];
                                        readonly description: "`yes` `no`";
                                    };
                                    readonly region: {
                                        readonly type: "string";
                                        readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                        readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                                    };
                                    readonly buildPlan: {
                                        readonly type: "string";
                                    };
                                };
                            }, {
                                readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "schedule", "buildPlan"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly env: {
                                        readonly type: "string";
                                        readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                        readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                                    };
                                    readonly envSpecificDetails: {
                                        readonly oneOf: readonly [{
                                            readonly type: "object";
                                            readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                            readonly properties: {
                                                readonly dockerCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly dockerContext: {
                                                    readonly type: "string";
                                                };
                                                readonly dockerfilePath: {
                                                    readonly type: "string";
                                                };
                                                readonly preDeployCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly registryCredential: {
                                                    readonly type: "object";
                                                    readonly required: readonly ["id", "name", "username", "registry"];
                                                    readonly properties: {
                                                        readonly id: {
                                                            readonly type: "string";
                                                            readonly description: "Unique identifier for this credential";
                                                        };
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly description: "Descriptive name for this credential";
                                                        };
                                                        readonly registry: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                            readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                        };
                                                        readonly username: {
                                                            readonly type: "string";
                                                            readonly description: "The username associated with the credential";
                                                        };
                                                    };
                                                };
                                            };
                                        }, {
                                            readonly type: "object";
                                            readonly required: readonly ["buildCommand", "startCommand"];
                                            readonly properties: {
                                                readonly buildCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly startCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly preDeployCommand: {
                                                    readonly type: "string";
                                                };
                                            };
                                        }];
                                    };
                                    readonly lastSuccessfulRunAt: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                    readonly plan: {
                                        readonly type: "string";
                                        readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                        readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                        readonly examples: readonly ["starter"];
                                    };
                                    readonly region: {
                                        readonly type: "string";
                                        readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                        readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                                    };
                                    readonly schedule: {
                                        readonly type: "string";
                                    };
                                    readonly buildPlan: {
                                        readonly type: "string";
                                    };
                                };
                            }];
                        };
                    };
                };
                readonly deployId: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "409": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteCustomDomain: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
                readonly customDomainIdOrName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID or name of the custom domain";
                };
            };
            readonly required: readonly ["serviceId", "customDomainIdOrName"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteRegistryCredential: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly registryCredentialId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the registry credential";
                };
            };
            readonly required: readonly ["registryCredentialId"];
        }];
    };
    readonly response: {
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteService: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }];
    };
    readonly response: {
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetApplicationFilterValues: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly startTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now() - 1 hour`.";
                };
                readonly endTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:30:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`.";
                };
                readonly resolutionSeconds: {
                    readonly type: "number";
                    readonly minimum: 30;
                    readonly default: 60;
                    readonly examples: readonly [60];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The resolution of the returned data";
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Service ID to query. When multiple service query params are provided, they are ORed together";
                };
            };
            readonly required: readonly ["service"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "A collection of filter values for application metrics";
            readonly required: readonly ["items"];
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly filter: {
                        readonly type: "string";
                        readonly enum: readonly ["instance"];
                        readonly description: "`instance`";
                    };
                    readonly values: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly examples: readonly ["srv-xxxxx-yyyy"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBandwidth: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly startTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now() - 1 hour`.";
                };
                readonly endTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:30:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`.";
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Service ID to query. When multiple service query params are provided, they are ORed together";
                };
            };
            readonly required: readonly ["service"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "A collection of time series";
            readonly required: readonly ["items"];
            readonly items: {
                readonly type: "object";
                readonly description: "A time series data point";
                readonly required: readonly ["labels", "values", "unit"];
                readonly properties: {
                    readonly labels: {
                        readonly type: "array";
                        readonly description: "List of labels describing the time series";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A time series datapoint label";
                            readonly required: readonly ["field", "value"];
                            readonly properties: {
                                readonly field: {
                                    readonly type: "string";
                                    readonly examples: readonly ["service"];
                                };
                                readonly value: {
                                    readonly type: "string";
                                    readonly examples: readonly ["srv-xxxxx"];
                                };
                            };
                        };
                    };
                    readonly values: {
                        readonly type: "array";
                        readonly description: "The values of the time series";
                        readonly items: {
                            readonly description: "A time series datapoint value";
                            readonly type: "object";
                            readonly required: readonly ["timestamp", "value", "unit"];
                            readonly properties: {
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                                };
                                readonly value: {
                                    readonly type: "number";
                                    readonly examples: readonly [1];
                                };
                            };
                        };
                    };
                    readonly unit: {
                        readonly type: "string";
                        readonly examples: readonly ["GB"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCpu: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly startTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now() - 1 hour`.";
                };
                readonly endTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:30:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`.";
                };
                readonly resolutionSeconds: {
                    readonly type: "number";
                    readonly minimum: 30;
                    readonly default: 60;
                    readonly examples: readonly [60];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The resolution of the returned data";
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Service ID to query. When multiple service query params are provided, they are ORed together";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx-yyyy"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID to query. When multiple instance ID query params are provided, they are ORed together";
                };
                readonly aggregationMethod: {
                    readonly type: "string";
                    readonly enum: readonly ["AVG", "MAX", "MIN"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The aggregation method to apply to multiple time series";
                };
            };
            readonly required: readonly ["service"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "A collection of time series";
            readonly required: readonly ["items"];
            readonly items: {
                readonly type: "object";
                readonly description: "A time series data point";
                readonly required: readonly ["labels", "values", "unit"];
                readonly properties: {
                    readonly labels: {
                        readonly type: "array";
                        readonly description: "List of labels describing the time series";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A time series datapoint label";
                            readonly required: readonly ["field", "value"];
                            readonly properties: {
                                readonly field: {
                                    readonly type: "string";
                                    readonly examples: readonly ["service"];
                                };
                                readonly value: {
                                    readonly type: "string";
                                    readonly examples: readonly ["srv-xxxxx"];
                                };
                            };
                        };
                    };
                    readonly values: {
                        readonly type: "array";
                        readonly description: "The values of the time series";
                        readonly items: {
                            readonly description: "A time series datapoint value";
                            readonly type: "object";
                            readonly required: readonly ["timestamp", "value", "unit"];
                            readonly properties: {
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                                };
                                readonly value: {
                                    readonly type: "number";
                                    readonly examples: readonly [1];
                                };
                            };
                        };
                    };
                    readonly unit: {
                        readonly type: "string";
                        readonly examples: readonly ["GB"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCpuLimit: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly startTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now() - 1 hour`.";
                };
                readonly endTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:30:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`.";
                };
                readonly resolutionSeconds: {
                    readonly type: "number";
                    readonly minimum: 30;
                    readonly default: 60;
                    readonly examples: readonly [60];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The resolution of the returned data";
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Service ID to query. When multiple service query params are provided, they are ORed together";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx-yyyy"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID to query. When multiple instance ID query params are provided, they are ORed together";
                };
            };
            readonly required: readonly ["service"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "A collection of time series";
            readonly required: readonly ["items"];
            readonly items: {
                readonly type: "object";
                readonly description: "A time series data point";
                readonly required: readonly ["labels", "values", "unit"];
                readonly properties: {
                    readonly labels: {
                        readonly type: "array";
                        readonly description: "List of labels describing the time series";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A time series datapoint label";
                            readonly required: readonly ["field", "value"];
                            readonly properties: {
                                readonly field: {
                                    readonly type: "string";
                                    readonly examples: readonly ["service"];
                                };
                                readonly value: {
                                    readonly type: "string";
                                    readonly examples: readonly ["srv-xxxxx"];
                                };
                            };
                        };
                    };
                    readonly values: {
                        readonly type: "array";
                        readonly description: "The values of the time series";
                        readonly items: {
                            readonly description: "A time series datapoint value";
                            readonly type: "object";
                            readonly required: readonly ["timestamp", "value", "unit"];
                            readonly properties: {
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                                };
                                readonly value: {
                                    readonly type: "number";
                                    readonly examples: readonly [1];
                                };
                            };
                        };
                    };
                    readonly unit: {
                        readonly type: "string";
                        readonly examples: readonly ["GB"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCpuTarget: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly startTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now() - 1 hour`.";
                };
                readonly endTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:30:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`.";
                };
                readonly resolutionSeconds: {
                    readonly type: "number";
                    readonly minimum: 30;
                    readonly default: 60;
                    readonly examples: readonly [60];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The resolution of the returned data";
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Service ID to query. When multiple service query params are provided, they are ORed together";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx-yyyy"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID to query. When multiple instance ID query params are provided, they are ORed together";
                };
            };
            readonly required: readonly ["service"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "A collection of time series";
            readonly required: readonly ["items"];
            readonly items: {
                readonly type: "object";
                readonly description: "A time series data point";
                readonly required: readonly ["labels", "values", "unit"];
                readonly properties: {
                    readonly labels: {
                        readonly type: "array";
                        readonly description: "List of labels describing the time series";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A time series datapoint label";
                            readonly required: readonly ["field", "value"];
                            readonly properties: {
                                readonly field: {
                                    readonly type: "string";
                                    readonly examples: readonly ["service"];
                                };
                                readonly value: {
                                    readonly type: "string";
                                    readonly examples: readonly ["srv-xxxxx"];
                                };
                            };
                        };
                    };
                    readonly values: {
                        readonly type: "array";
                        readonly description: "The values of the time series";
                        readonly items: {
                            readonly description: "A time series datapoint value";
                            readonly type: "object";
                            readonly required: readonly ["timestamp", "value", "unit"];
                            readonly properties: {
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                                };
                                readonly value: {
                                    readonly type: "number";
                                    readonly examples: readonly [1];
                                };
                            };
                        };
                    };
                    readonly unit: {
                        readonly type: "string";
                        readonly examples: readonly ["GB"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCustomDomain: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
                readonly customDomainIdOrName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID or name of the custom domain";
                };
            };
            readonly required: readonly ["serviceId", "customDomainIdOrName"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["id", "name", "domainType", "publicSuffix", "verificationStatus", "createdAt", "redirectForName"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly domainType: {
                    readonly type: "string";
                    readonly enum: readonly ["apex", "subdomain"];
                    readonly description: "`apex` `subdomain`";
                };
                readonly publicSuffix: {
                    readonly type: "string";
                };
                readonly redirectForName: {
                    readonly type: "string";
                };
                readonly verificationStatus: {
                    readonly type: "string";
                    readonly enum: readonly ["verified", "unverified"];
                    readonly description: "`verified` `unverified`";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly server: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetCustomDomains: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly cursor: {
                    readonly type: "string";
                    readonly format: "byte";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Cursor to begin retrieving entries for this query";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly default: 20;
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly description: "Max number of items that can be returned";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly name: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for the names of custom domain";
                };
                readonly domainType: {
                    readonly type: "string";
                    readonly enum: readonly ["apex", "subdomain"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for apex or subdomains";
                };
                readonly verificationStatus: {
                    readonly type: "string";
                    readonly enum: readonly ["verified", "unverified"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for verified or unverified custom domains";
                };
                readonly createdBefore: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for custom domains created before a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly createdAfter: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-02-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for custom domains created after a certain time (specified as an ISO 8601 timestamp)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly customDomain: {
                        readonly type: "object";
                        readonly required: readonly ["id", "name", "domainType", "publicSuffix", "verificationStatus", "createdAt", "redirectForName"];
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly domainType: {
                                readonly type: "string";
                                readonly enum: readonly ["apex", "subdomain"];
                                readonly description: "`apex` `subdomain`";
                            };
                            readonly publicSuffix: {
                                readonly type: "string";
                            };
                            readonly redirectForName: {
                                readonly type: "string";
                            };
                            readonly verificationStatus: {
                                readonly type: "string";
                                readonly enum: readonly ["verified", "unverified"];
                                readonly description: "`verified` `unverified`";
                            };
                            readonly createdAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly server: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                    readonly cursor: {
                        readonly type: "string";
                        readonly format: "byte";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDeploy: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
                readonly deployId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the deploy";
                };
            };
            readonly required: readonly ["serviceId", "deployId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["id"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly commit: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                    };
                };
                readonly image: {
                    readonly description: "Image information used when creating the deploy. Not present for Git-backed deploys";
                    readonly type: "object";
                    readonly properties: {
                        readonly ref: {
                            readonly description: "Image reference used when creating the deploy";
                            readonly type: "string";
                        };
                        readonly sha: {
                            readonly description: "SHA that the image reference was resolved to when creating the deploy";
                            readonly type: "string";
                        };
                        readonly registryCredential: {
                            readonly description: "Name of credential used to pull the image, if provided";
                            readonly type: "string";
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["created", "build_in_progress", "update_in_progress", "live", "deactivated", "build_failed", "update_failed", "canceled", "pre_deploy_in_progress", "pre_deploy_failed"];
                    readonly description: "`created` `build_in_progress` `update_in_progress` `live` `deactivated` `build_failed` `update_failed` `canceled` `pre_deploy_in_progress` `pre_deploy_failed`";
                };
                readonly trigger: {
                    readonly type: "string";
                    readonly enum: readonly ["api", "blueprint_sync", "deploy_hook", "deployed_by_render", "manual", "other", "new_commit", "rollback", "service_resumed", "service_updated"];
                    readonly description: "`api` `blueprint_sync` `deploy_hook` `deployed_by_render` `manual` `other` `new_commit` `rollback` `service_resumed` `service_updated`";
                };
                readonly finishedAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDeploys: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly createdBefore: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for deploys created before a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly createdAfter: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-02-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for deploys created after a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly updatedBefore: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for deploys updated before a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly updatedAfter: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-02-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for deploys updated after a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly finishedBefore: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for deploys finished before a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly finishedAfter: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-02-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for deploys finished after a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly format: "byte";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Cursor to begin retrieving entries for this query";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly default: 20;
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly description: "Max number of items that can be returned";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly deploy: {
                        readonly type: "object";
                        readonly required: readonly ["id"];
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly commit: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly message: {
                                        readonly type: "string";
                                    };
                                    readonly createdAt: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                };
                            };
                            readonly image: {
                                readonly description: "Image information used when creating the deploy. Not present for Git-backed deploys";
                                readonly type: "object";
                                readonly properties: {
                                    readonly ref: {
                                        readonly description: "Image reference used when creating the deploy";
                                        readonly type: "string";
                                    };
                                    readonly sha: {
                                        readonly description: "SHA that the image reference was resolved to when creating the deploy";
                                        readonly type: "string";
                                    };
                                    readonly registryCredential: {
                                        readonly description: "Name of credential used to pull the image, if provided";
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly enum: readonly ["created", "build_in_progress", "update_in_progress", "live", "deactivated", "build_failed", "update_failed", "canceled", "pre_deploy_in_progress", "pre_deploy_failed"];
                                readonly description: "`created` `build_in_progress` `update_in_progress` `live` `deactivated` `build_failed` `update_failed` `canceled` `pre_deploy_in_progress` `pre_deploy_failed`";
                            };
                            readonly trigger: {
                                readonly type: "string";
                                readonly enum: readonly ["api", "blueprint_sync", "deploy_hook", "deployed_by_render", "manual", "other", "new_commit", "rollback", "service_resumed", "service_updated"];
                                readonly description: "`api` `blueprint_sync` `deploy_hook` `deployed_by_render` `manual` `other` `new_commit` `rollback` `service_resumed` `service_updated`";
                            };
                            readonly finishedAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly createdAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updatedAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                        };
                    };
                    readonly cursor: {
                        readonly type: "string";
                        readonly format: "byte";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDiskCapacity: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly startTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now() - 1 hour`.";
                };
                readonly endTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:30:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`.";
                };
                readonly resolutionSeconds: {
                    readonly type: "number";
                    readonly minimum: 30;
                    readonly default: 60;
                    readonly examples: readonly [60];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The resolution of the returned data";
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Service ID to query. When multiple service query params are provided, they are ORed together";
                };
            };
            readonly required: readonly ["service"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "A collection of time series";
            readonly required: readonly ["items"];
            readonly items: {
                readonly type: "object";
                readonly description: "A time series data point";
                readonly required: readonly ["labels", "values", "unit"];
                readonly properties: {
                    readonly labels: {
                        readonly type: "array";
                        readonly description: "List of labels describing the time series";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A time series datapoint label";
                            readonly required: readonly ["field", "value"];
                            readonly properties: {
                                readonly field: {
                                    readonly type: "string";
                                    readonly examples: readonly ["service"];
                                };
                                readonly value: {
                                    readonly type: "string";
                                    readonly examples: readonly ["srv-xxxxx"];
                                };
                            };
                        };
                    };
                    readonly values: {
                        readonly type: "array";
                        readonly description: "The values of the time series";
                        readonly items: {
                            readonly description: "A time series datapoint value";
                            readonly type: "object";
                            readonly required: readonly ["timestamp", "value", "unit"];
                            readonly properties: {
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                                };
                                readonly value: {
                                    readonly type: "number";
                                    readonly examples: readonly [1];
                                };
                            };
                        };
                    };
                    readonly unit: {
                        readonly type: "string";
                        readonly examples: readonly ["GB"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDiskUsage: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly startTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now() - 1 hour`.";
                };
                readonly endTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:30:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`.";
                };
                readonly resolutionSeconds: {
                    readonly type: "number";
                    readonly minimum: 30;
                    readonly default: 60;
                    readonly examples: readonly [60];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The resolution of the returned data";
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Service ID to query. When multiple service query params are provided, they are ORed together";
                };
            };
            readonly required: readonly ["service"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "A collection of time series";
            readonly required: readonly ["items"];
            readonly items: {
                readonly type: "object";
                readonly description: "A time series data point";
                readonly required: readonly ["labels", "values", "unit"];
                readonly properties: {
                    readonly labels: {
                        readonly type: "array";
                        readonly description: "List of labels describing the time series";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A time series datapoint label";
                            readonly required: readonly ["field", "value"];
                            readonly properties: {
                                readonly field: {
                                    readonly type: "string";
                                    readonly examples: readonly ["service"];
                                };
                                readonly value: {
                                    readonly type: "string";
                                    readonly examples: readonly ["srv-xxxxx"];
                                };
                            };
                        };
                    };
                    readonly values: {
                        readonly type: "array";
                        readonly description: "The values of the time series";
                        readonly items: {
                            readonly description: "A time series datapoint value";
                            readonly type: "object";
                            readonly required: readonly ["timestamp", "value", "unit"];
                            readonly properties: {
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                                };
                                readonly value: {
                                    readonly type: "number";
                                    readonly examples: readonly [1];
                                };
                            };
                        };
                    };
                    readonly unit: {
                        readonly type: "string";
                        readonly examples: readonly ["GB"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetEnvVarsForService: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly cursor: {
                    readonly type: "string";
                    readonly format: "byte";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Cursor to begin retrieving entries for this query";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly default: 20;
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly description: "Max number of items that can be returned";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly envVar: {
                        readonly type: "object";
                        readonly required: readonly ["key", "value"];
                        readonly properties: {
                            readonly key: {
                                readonly type: "string";
                            };
                            readonly value: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly cursor: {
                        readonly type: "string";
                        readonly format: "byte";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetHttpFilterValues: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly startTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now() - 1 hour`.";
                };
                readonly endTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:30:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`.";
                };
                readonly resolutionSeconds: {
                    readonly type: "number";
                    readonly minimum: 30;
                    readonly default: 60;
                    readonly examples: readonly [60];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The resolution of the returned data";
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Service ID to query. When multiple service query params are provided, they are ORed together";
                };
                readonly host: {
                    readonly type: "string";
                    readonly examples: readonly ["example.com"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The hosts of HTTP requests to filter to. When multiple host query params are provided, they are ORed together";
                };
                readonly statusCode: {
                    readonly type: "string";
                    readonly examples: readonly [200];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The status codes of HTTP requests to filter to. When multiple status code query params are provided, they are ORed together";
                };
            };
            readonly required: readonly ["service"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "A collection of filter values for HTTP metrics";
            readonly required: readonly ["items"];
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly filter: {
                        readonly type: "string";
                        readonly enum: readonly ["host", "statusCode"];
                        readonly description: "`host` `statusCode`";
                    };
                    readonly values: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly examples: readonly ["api.example.com"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetHttpLatency: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly startTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now() - 1 hour`.";
                };
                readonly endTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:30:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`.";
                };
                readonly resolutionSeconds: {
                    readonly type: "number";
                    readonly minimum: 30;
                    readonly default: 60;
                    readonly examples: readonly [60];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The resolution of the returned data";
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Service ID to query. When multiple service query params are provided, they are ORed together";
                };
                readonly host: {
                    readonly type: "string";
                    readonly examples: readonly ["example.com"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The hosts of HTTP requests to filter to. When multiple host query params are provided, they are ORed together";
                };
                readonly path: {
                    readonly type: "string";
                    readonly examples: readonly ["/graphql"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The paths of HTTP requests to filter to. When multiple path query params are provided, they are ORed together";
                };
                readonly quantile: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly examples: readonly [0.99];
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The quantile of latencies to fetch. When multiple quantile query params are provided, they are ORed together";
                };
            };
            readonly required: readonly ["service"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "A collection of time series";
            readonly required: readonly ["items"];
            readonly items: {
                readonly type: "object";
                readonly description: "A time series data point";
                readonly required: readonly ["labels", "values", "unit"];
                readonly properties: {
                    readonly labels: {
                        readonly type: "array";
                        readonly description: "List of labels describing the time series";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A time series datapoint label";
                            readonly required: readonly ["field", "value"];
                            readonly properties: {
                                readonly field: {
                                    readonly type: "string";
                                    readonly examples: readonly ["service"];
                                };
                                readonly value: {
                                    readonly type: "string";
                                    readonly examples: readonly ["srv-xxxxx"];
                                };
                            };
                        };
                    };
                    readonly values: {
                        readonly type: "array";
                        readonly description: "The values of the time series";
                        readonly items: {
                            readonly description: "A time series datapoint value";
                            readonly type: "object";
                            readonly required: readonly ["timestamp", "value", "unit"];
                            readonly properties: {
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                                };
                                readonly value: {
                                    readonly type: "number";
                                    readonly examples: readonly [1];
                                };
                            };
                        };
                    };
                    readonly unit: {
                        readonly type: "string";
                        readonly examples: readonly ["GB"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetHttpRequests: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly startTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now() - 1 hour`.";
                };
                readonly endTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:30:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`.";
                };
                readonly resolutionSeconds: {
                    readonly type: "number";
                    readonly minimum: 30;
                    readonly default: 60;
                    readonly examples: readonly [60];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The resolution of the returned data";
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Service ID to query. When multiple service query params are provided, they are ORed together";
                };
                readonly host: {
                    readonly type: "string";
                    readonly examples: readonly ["example.com"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The hosts of HTTP requests to filter to. When multiple host query params are provided, they are ORed together";
                };
                readonly path: {
                    readonly type: "string";
                    readonly examples: readonly ["/graphql"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The paths of HTTP requests to filter to. When multiple path query params are provided, they are ORed together";
                };
                readonly aggregateBy: {
                    readonly type: "string";
                    readonly enum: readonly ["statusCode", "host"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The field to aggregate by";
                };
            };
            readonly required: readonly ["service"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "A collection of time series";
            readonly required: readonly ["items"];
            readonly items: {
                readonly type: "object";
                readonly description: "A time series data point";
                readonly required: readonly ["labels", "values", "unit"];
                readonly properties: {
                    readonly labels: {
                        readonly type: "array";
                        readonly description: "List of labels describing the time series";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A time series datapoint label";
                            readonly required: readonly ["field", "value"];
                            readonly properties: {
                                readonly field: {
                                    readonly type: "string";
                                    readonly examples: readonly ["service"];
                                };
                                readonly value: {
                                    readonly type: "string";
                                    readonly examples: readonly ["srv-xxxxx"];
                                };
                            };
                        };
                    };
                    readonly values: {
                        readonly type: "array";
                        readonly description: "The values of the time series";
                        readonly items: {
                            readonly description: "A time series datapoint value";
                            readonly type: "object";
                            readonly required: readonly ["timestamp", "value", "unit"];
                            readonly properties: {
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                                };
                                readonly value: {
                                    readonly type: "number";
                                    readonly examples: readonly [1];
                                };
                            };
                        };
                    };
                    readonly unit: {
                        readonly type: "string";
                        readonly examples: readonly ["GB"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetInstanceCount: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly startTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now() - 1 hour`.";
                };
                readonly endTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:30:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`.";
                };
                readonly resolutionSeconds: {
                    readonly type: "number";
                    readonly minimum: 30;
                    readonly default: 60;
                    readonly examples: readonly [60];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The resolution of the returned data";
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Service ID to query. When multiple service query params are provided, they are ORed together";
                };
            };
            readonly required: readonly ["service"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "A collection of time series";
            readonly required: readonly ["items"];
            readonly items: {
                readonly type: "object";
                readonly description: "A time series data point";
                readonly required: readonly ["labels", "values", "unit"];
                readonly properties: {
                    readonly labels: {
                        readonly type: "array";
                        readonly description: "List of labels describing the time series";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A time series datapoint label";
                            readonly required: readonly ["field", "value"];
                            readonly properties: {
                                readonly field: {
                                    readonly type: "string";
                                    readonly examples: readonly ["service"];
                                };
                                readonly value: {
                                    readonly type: "string";
                                    readonly examples: readonly ["srv-xxxxx"];
                                };
                            };
                        };
                    };
                    readonly values: {
                        readonly type: "array";
                        readonly description: "The values of the time series";
                        readonly items: {
                            readonly description: "A time series datapoint value";
                            readonly type: "object";
                            readonly required: readonly ["timestamp", "value", "unit"];
                            readonly properties: {
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                                };
                                readonly value: {
                                    readonly type: "number";
                                    readonly examples: readonly [1];
                                };
                            };
                        };
                    };
                    readonly unit: {
                        readonly type: "string";
                        readonly examples: readonly ["GB"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetJob: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
                readonly jobId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the job";
                };
            };
            readonly required: readonly ["serviceId", "jobId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["id", "serviceId", "startCommand", "planId", "createdAt"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["job-xxxxx"];
                };
                readonly serviceId: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                };
                readonly startCommand: {
                    readonly type: "string";
                    readonly examples: readonly ["echo 'hello world'"];
                };
                readonly planId: {
                    readonly type: "string";
                    readonly examples: readonly ["plan-srv-004"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["succeeded"];
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-07-15T07:20:05.777035-07:00"];
                };
                readonly startedAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-07-15T07:20:05.777035-07:00"];
                };
                readonly finishedAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-07-15T07:20:05.777035-07:00"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetMemory: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly startTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now() - 1 hour`.";
                };
                readonly endTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:30:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`.";
                };
                readonly resolutionSeconds: {
                    readonly type: "number";
                    readonly minimum: 30;
                    readonly default: 60;
                    readonly examples: readonly [60];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The resolution of the returned data";
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Service ID to query. When multiple service query params are provided, they are ORed together";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx-yyyy"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID to query. When multiple instance ID query params are provided, they are ORed together";
                };
            };
            readonly required: readonly ["service"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "A collection of time series";
            readonly required: readonly ["items"];
            readonly items: {
                readonly type: "object";
                readonly description: "A time series data point";
                readonly required: readonly ["labels", "values", "unit"];
                readonly properties: {
                    readonly labels: {
                        readonly type: "array";
                        readonly description: "List of labels describing the time series";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A time series datapoint label";
                            readonly required: readonly ["field", "value"];
                            readonly properties: {
                                readonly field: {
                                    readonly type: "string";
                                    readonly examples: readonly ["service"];
                                };
                                readonly value: {
                                    readonly type: "string";
                                    readonly examples: readonly ["srv-xxxxx"];
                                };
                            };
                        };
                    };
                    readonly values: {
                        readonly type: "array";
                        readonly description: "The values of the time series";
                        readonly items: {
                            readonly description: "A time series datapoint value";
                            readonly type: "object";
                            readonly required: readonly ["timestamp", "value", "unit"];
                            readonly properties: {
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                                };
                                readonly value: {
                                    readonly type: "number";
                                    readonly examples: readonly [1];
                                };
                            };
                        };
                    };
                    readonly unit: {
                        readonly type: "string";
                        readonly examples: readonly ["GB"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetMemoryLimit: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly startTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now() - 1 hour`.";
                };
                readonly endTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:30:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`.";
                };
                readonly resolutionSeconds: {
                    readonly type: "number";
                    readonly minimum: 30;
                    readonly default: 60;
                    readonly examples: readonly [60];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The resolution of the returned data";
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Service ID to query. When multiple service query params are provided, they are ORed together";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx-yyyy"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID to query. When multiple instance ID query params are provided, they are ORed together";
                };
            };
            readonly required: readonly ["service"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "A collection of time series";
            readonly required: readonly ["items"];
            readonly items: {
                readonly type: "object";
                readonly description: "A time series data point";
                readonly required: readonly ["labels", "values", "unit"];
                readonly properties: {
                    readonly labels: {
                        readonly type: "array";
                        readonly description: "List of labels describing the time series";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A time series datapoint label";
                            readonly required: readonly ["field", "value"];
                            readonly properties: {
                                readonly field: {
                                    readonly type: "string";
                                    readonly examples: readonly ["service"];
                                };
                                readonly value: {
                                    readonly type: "string";
                                    readonly examples: readonly ["srv-xxxxx"];
                                };
                            };
                        };
                    };
                    readonly values: {
                        readonly type: "array";
                        readonly description: "The values of the time series";
                        readonly items: {
                            readonly description: "A time series datapoint value";
                            readonly type: "object";
                            readonly required: readonly ["timestamp", "value", "unit"];
                            readonly properties: {
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                                };
                                readonly value: {
                                    readonly type: "number";
                                    readonly examples: readonly [1];
                                };
                            };
                        };
                    };
                    readonly unit: {
                        readonly type: "string";
                        readonly examples: readonly ["GB"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetMemoryTarget: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly startTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now() - 1 hour`.";
                };
                readonly endTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:30:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`.";
                };
                readonly resolutionSeconds: {
                    readonly type: "number";
                    readonly minimum: 30;
                    readonly default: 60;
                    readonly examples: readonly [60];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The resolution of the returned data";
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Service ID to query. When multiple service query params are provided, they are ORed together";
                };
                readonly instance: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx-yyyy"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Instance ID to query. When multiple instance ID query params are provided, they are ORed together";
                };
            };
            readonly required: readonly ["service"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "A collection of time series";
            readonly required: readonly ["items"];
            readonly items: {
                readonly type: "object";
                readonly description: "A time series data point";
                readonly required: readonly ["labels", "values", "unit"];
                readonly properties: {
                    readonly labels: {
                        readonly type: "array";
                        readonly description: "List of labels describing the time series";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A time series datapoint label";
                            readonly required: readonly ["field", "value"];
                            readonly properties: {
                                readonly field: {
                                    readonly type: "string";
                                    readonly examples: readonly ["service"];
                                };
                                readonly value: {
                                    readonly type: "string";
                                    readonly examples: readonly ["srv-xxxxx"];
                                };
                            };
                        };
                    };
                    readonly values: {
                        readonly type: "array";
                        readonly description: "The values of the time series";
                        readonly items: {
                            readonly description: "A time series datapoint value";
                            readonly type: "object";
                            readonly required: readonly ["timestamp", "value", "unit"];
                            readonly properties: {
                                readonly timestamp: {
                                    readonly type: "string";
                                    readonly format: "date-time";
                                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                                };
                                readonly value: {
                                    readonly type: "number";
                                    readonly examples: readonly [1];
                                };
                            };
                        };
                    };
                    readonly unit: {
                        readonly type: "string";
                        readonly examples: readonly ["GB"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOwner: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly ownerId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the user or team";
                };
            };
            readonly required: readonly ["ownerId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["id", "name", "email", "type"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly email: {
                    readonly type: "string";
                };
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["user", "team"];
                    readonly description: "`user` `team`";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOwners: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly email: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly format: "byte";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Cursor to begin retrieving entries for this query";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly default: 20;
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly description: "Max number of items that can be returned";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly properties: {
                    readonly owner: {
                        readonly type: "object";
                        readonly required: readonly ["id", "name", "email", "type"];
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly email: {
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["user", "team"];
                                readonly description: "`user` `team`";
                            };
                        };
                    };
                    readonly cursor: {
                        readonly type: "string";
                        readonly format: "byte";
                    };
                };
                readonly type: "object";
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetPathFilterValues: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly startTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now() - 1 hour`.";
                };
                readonly endTime: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:30:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`.";
                };
                readonly resolutionSeconds: {
                    readonly type: "number";
                    readonly minimum: 30;
                    readonly default: 60;
                    readonly examples: readonly [60];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The resolution of the returned data";
                };
                readonly service: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Service ID to query. When multiple service query params are provided, they are ORed together";
                };
                readonly host: {
                    readonly type: "string";
                    readonly examples: readonly ["example.com"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The hosts of HTTP requests to filter to. When multiple host query params are provided, they are ORed together";
                };
                readonly statusCode: {
                    readonly type: "string";
                    readonly examples: readonly [200];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The status codes of HTTP requests to filter to. When multiple status code query params are provided, they are ORed together";
                };
                readonly path: {
                    readonly type: "string";
                    readonly examples: readonly ["/graphql"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The paths of HTTP requests to filter to. When multiple path query params are provided, they are ORed together";
                };
            };
            readonly required: readonly ["service"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly description: "A collection of suggested paths to filter by";
            readonly required: readonly ["items"];
            readonly items: {
                readonly type: "string";
                readonly examples: readonly ["/user/*"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetRegistryCredentials: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for the name of a credential";
                };
                readonly username: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for the username of a credential";
                };
                readonly type: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for the registry type for the credential";
                };
                readonly createdBefore: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for services created before a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly createdAfter: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-02-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for services created after a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly updatedBefore: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for services updated before a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly updatedAfter: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-02-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for services updated after a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly ownerId: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the owner (team or personal user) whose resources should be returned";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly format: "byte";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Cursor to begin retrieving entries for this query";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly default: 20;
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly description: "Max number of items that can be returned";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly required: readonly ["id", "name", "username", "registry"];
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "Unique identifier for this credential";
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly description: "Descriptive name for this credential";
                    };
                    readonly registry: {
                        readonly type: "string";
                        readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                        readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                    };
                    readonly username: {
                        readonly type: "string";
                        readonly description: "The username associated with the credential";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetRegistrycredentialsRegistrycredentialid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly registryCredentialId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the registry credential";
                };
            };
            readonly required: readonly ["registryCredentialId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["id", "name", "username", "registry"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this credential";
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "Descriptive name for this credential";
                };
                readonly registry: {
                    readonly type: "string";
                    readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                    readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                };
                readonly username: {
                    readonly type: "string";
                    readonly description: "The username associated with the credential";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetService: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["id", "name", "ownerId", "type", "createdAt", "updatedAt", "suspended", "suspenders", "autoDeploy", "notifyOnFail", "slug", "serviceDetails", "rootDir"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly autoDeploy: {
                    readonly type: "string";
                    readonly enum: readonly ["yes", "no"];
                    readonly description: "`yes` `no`";
                };
                readonly branch: {
                    readonly type: "string";
                };
                readonly buildFilter: {
                    readonly type: "object";
                    readonly required: readonly ["paths", "ignoredPaths"];
                    readonly properties: {
                        readonly paths: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly ignoredPaths: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly imagePath: {
                    readonly type: "string";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly notifyOnFail: {
                    readonly type: "string";
                    readonly enum: readonly ["default", "notify", "ignore"];
                    readonly description: "`default` `notify` `ignore`";
                };
                readonly ownerId: {
                    readonly type: "string";
                };
                readonly repo: {
                    readonly type: "string";
                    readonly examples: readonly ["https://github.com/render-examples/flask-hello-world"];
                };
                readonly rootDir: {
                    readonly type: "string";
                };
                readonly slug: {
                    readonly type: "string";
                };
                readonly suspended: {
                    readonly type: "string";
                    readonly enum: readonly ["suspended", "not_suspended"];
                    readonly description: "`suspended` `not_suspended`";
                };
                readonly suspenders: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["admin", "billing", "user", "parent_service", "unknown"];
                        readonly description: "`admin` `billing` `user` `parent_service` `unknown`";
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["static_site", "web_service", "private_service", "background_worker", "cron_job"];
                    readonly description: "`static_site` `web_service` `private_service` `background_worker` `cron_job`";
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly serviceDetails: {
                    readonly oneOf: readonly [{
                        readonly type: "object";
                        readonly required: readonly ["buildCommand", "publishPath", "pullRequestPreviewsEnabled", "url", "buildPlan"];
                        readonly properties: {
                            readonly buildCommand: {
                                readonly type: "string";
                            };
                            readonly parentServer: {
                                readonly required: readonly ["id", "name"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly publishPath: {
                                readonly type: "string";
                            };
                            readonly pullRequestPreviewsEnabled: {
                                readonly type: "string";
                                readonly enum: readonly ["yes", "no"];
                                readonly description: "`yes` `no`";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                            readonly buildPlan: {
                                readonly type: "string";
                            };
                        };
                    }, {
                        readonly type: "object";
                        readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "pullRequestPreviewsEnabled", "numInstances", "buildPlan", "healthCheckPath", "openPorts", "url"];
                        readonly properties: {
                            readonly autoscaling: {
                                readonly type: "object";
                                readonly required: readonly ["enabled", "min", "max", "criteria"];
                                readonly properties: {
                                    readonly enabled: {
                                        readonly type: "boolean";
                                        readonly default: false;
                                    };
                                    readonly min: {
                                        readonly type: "integer";
                                        readonly description: "The minimum number of instances for the service";
                                    };
                                    readonly max: {
                                        readonly type: "integer";
                                        readonly description: "The maximum number of instances for the service";
                                    };
                                    readonly criteria: {
                                        readonly type: "object";
                                        readonly required: readonly ["cpu", "memory"];
                                        readonly properties: {
                                            readonly cpu: {
                                                readonly type: "object";
                                                readonly required: readonly ["enabled", "percentage"];
                                                readonly properties: {
                                                    readonly enabled: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                    };
                                                    readonly percentage: {
                                                        readonly type: "integer";
                                                        readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                    };
                                                };
                                            };
                                            readonly memory: {
                                                readonly type: "object";
                                                readonly required: readonly ["enabled", "percentage"];
                                                readonly properties: {
                                                    readonly enabled: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                    };
                                                    readonly percentage: {
                                                        readonly type: "integer";
                                                        readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly disk: {
                                readonly type: "object";
                                readonly required: readonly ["id", "name", "sizeGB", "mountPath"];
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly sizeGB: {
                                        readonly type: "integer";
                                    };
                                    readonly mountPath: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly env: {
                                readonly type: "string";
                                readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                            };
                            readonly envSpecificDetails: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                    readonly properties: {
                                        readonly dockerCommand: {
                                            readonly type: "string";
                                        };
                                        readonly dockerContext: {
                                            readonly type: "string";
                                        };
                                        readonly dockerfilePath: {
                                            readonly type: "string";
                                        };
                                        readonly preDeployCommand: {
                                            readonly type: "string";
                                        };
                                        readonly registryCredential: {
                                            readonly type: "object";
                                            readonly required: readonly ["id", "name", "username", "registry"];
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                    readonly description: "Unique identifier for this credential";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly description: "Descriptive name for this credential";
                                                };
                                                readonly registry: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                    readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                };
                                                readonly username: {
                                                    readonly type: "string";
                                                    readonly description: "The username associated with the credential";
                                                };
                                            };
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly required: readonly ["buildCommand", "startCommand"];
                                    readonly properties: {
                                        readonly buildCommand: {
                                            readonly type: "string";
                                        };
                                        readonly startCommand: {
                                            readonly type: "string";
                                        };
                                        readonly preDeployCommand: {
                                            readonly type: "string";
                                        };
                                    };
                                }];
                            };
                            readonly healthCheckPath: {
                                readonly type: "string";
                            };
                            readonly numInstances: {
                                readonly type: "integer";
                                readonly description: "For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.";
                            };
                            readonly openPorts: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly required: readonly ["port", "protocol"];
                                    readonly properties: {
                                        readonly port: {
                                            readonly type: "integer";
                                            readonly examples: readonly [10000];
                                        };
                                        readonly protocol: {
                                            readonly type: "string";
                                            readonly enum: readonly ["TCP", "UDP"];
                                            readonly description: "`TCP` `UDP`";
                                        };
                                    };
                                };
                            };
                            readonly parentServer: {
                                readonly required: readonly ["id", "name"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly plan: {
                                readonly type: "string";
                                readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                readonly examples: readonly ["starter"];
                            };
                            readonly pullRequestPreviewsEnabled: {
                                readonly type: "string";
                                readonly enum: readonly ["yes", "no"];
                                readonly description: "`yes` `no`";
                            };
                            readonly region: {
                                readonly type: "string";
                                readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                            readonly buildPlan: {
                                readonly type: "string";
                            };
                        };
                    }, {
                        readonly type: "object";
                        readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "pullRequestPreviewsEnabled", "numInstances", "buildPlan", "openPorts", "url"];
                        readonly properties: {
                            readonly autoscaling: {
                                readonly type: "object";
                                readonly required: readonly ["enabled", "min", "max", "criteria"];
                                readonly properties: {
                                    readonly enabled: {
                                        readonly type: "boolean";
                                        readonly default: false;
                                    };
                                    readonly min: {
                                        readonly type: "integer";
                                        readonly description: "The minimum number of instances for the service";
                                    };
                                    readonly max: {
                                        readonly type: "integer";
                                        readonly description: "The maximum number of instances for the service";
                                    };
                                    readonly criteria: {
                                        readonly type: "object";
                                        readonly required: readonly ["cpu", "memory"];
                                        readonly properties: {
                                            readonly cpu: {
                                                readonly type: "object";
                                                readonly required: readonly ["enabled", "percentage"];
                                                readonly properties: {
                                                    readonly enabled: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                    };
                                                    readonly percentage: {
                                                        readonly type: "integer";
                                                        readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                    };
                                                };
                                            };
                                            readonly memory: {
                                                readonly type: "object";
                                                readonly required: readonly ["enabled", "percentage"];
                                                readonly properties: {
                                                    readonly enabled: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                    };
                                                    readonly percentage: {
                                                        readonly type: "integer";
                                                        readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly disk: {
                                readonly type: "object";
                                readonly required: readonly ["id", "name", "sizeGB", "mountPath"];
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly sizeGB: {
                                        readonly type: "integer";
                                    };
                                    readonly mountPath: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly env: {
                                readonly type: "string";
                                readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                            };
                            readonly envSpecificDetails: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                    readonly properties: {
                                        readonly dockerCommand: {
                                            readonly type: "string";
                                        };
                                        readonly dockerContext: {
                                            readonly type: "string";
                                        };
                                        readonly dockerfilePath: {
                                            readonly type: "string";
                                        };
                                        readonly preDeployCommand: {
                                            readonly type: "string";
                                        };
                                        readonly registryCredential: {
                                            readonly type: "object";
                                            readonly required: readonly ["id", "name", "username", "registry"];
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                    readonly description: "Unique identifier for this credential";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly description: "Descriptive name for this credential";
                                                };
                                                readonly registry: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                    readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                };
                                                readonly username: {
                                                    readonly type: "string";
                                                    readonly description: "The username associated with the credential";
                                                };
                                            };
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly required: readonly ["buildCommand", "startCommand"];
                                    readonly properties: {
                                        readonly buildCommand: {
                                            readonly type: "string";
                                        };
                                        readonly startCommand: {
                                            readonly type: "string";
                                        };
                                        readonly preDeployCommand: {
                                            readonly type: "string";
                                        };
                                    };
                                }];
                            };
                            readonly numInstances: {
                                readonly type: "integer";
                                readonly description: "For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.";
                            };
                            readonly openPorts: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly required: readonly ["port", "protocol"];
                                    readonly properties: {
                                        readonly port: {
                                            readonly type: "integer";
                                            readonly examples: readonly [10000];
                                        };
                                        readonly protocol: {
                                            readonly type: "string";
                                            readonly enum: readonly ["TCP", "UDP"];
                                            readonly description: "`TCP` `UDP`";
                                        };
                                    };
                                };
                            };
                            readonly parentServer: {
                                readonly required: readonly ["id", "name"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly plan: {
                                readonly type: "string";
                                readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                readonly examples: readonly ["starter"];
                            };
                            readonly pullRequestPreviewsEnabled: {
                                readonly type: "string";
                                readonly enum: readonly ["yes", "no"];
                                readonly description: "`yes` `no`";
                            };
                            readonly region: {
                                readonly type: "string";
                                readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                            readonly buildPlan: {
                                readonly type: "string";
                            };
                        };
                    }, {
                        readonly type: "object";
                        readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "pullRequestPreviewsEnabled", "numInstances", "buildPlan"];
                        readonly properties: {
                            readonly autoscaling: {
                                readonly type: "object";
                                readonly required: readonly ["enabled", "min", "max", "criteria"];
                                readonly properties: {
                                    readonly enabled: {
                                        readonly type: "boolean";
                                        readonly default: false;
                                    };
                                    readonly min: {
                                        readonly type: "integer";
                                        readonly description: "The minimum number of instances for the service";
                                    };
                                    readonly max: {
                                        readonly type: "integer";
                                        readonly description: "The maximum number of instances for the service";
                                    };
                                    readonly criteria: {
                                        readonly type: "object";
                                        readonly required: readonly ["cpu", "memory"];
                                        readonly properties: {
                                            readonly cpu: {
                                                readonly type: "object";
                                                readonly required: readonly ["enabled", "percentage"];
                                                readonly properties: {
                                                    readonly enabled: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                    };
                                                    readonly percentage: {
                                                        readonly type: "integer";
                                                        readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                    };
                                                };
                                            };
                                            readonly memory: {
                                                readonly type: "object";
                                                readonly required: readonly ["enabled", "percentage"];
                                                readonly properties: {
                                                    readonly enabled: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                    };
                                                    readonly percentage: {
                                                        readonly type: "integer";
                                                        readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly disk: {
                                readonly type: "object";
                                readonly required: readonly ["id", "name", "sizeGB", "mountPath"];
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly sizeGB: {
                                        readonly type: "integer";
                                    };
                                    readonly mountPath: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly env: {
                                readonly type: "string";
                                readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                            };
                            readonly envSpecificDetails: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                    readonly properties: {
                                        readonly dockerCommand: {
                                            readonly type: "string";
                                        };
                                        readonly dockerContext: {
                                            readonly type: "string";
                                        };
                                        readonly dockerfilePath: {
                                            readonly type: "string";
                                        };
                                        readonly preDeployCommand: {
                                            readonly type: "string";
                                        };
                                        readonly registryCredential: {
                                            readonly type: "object";
                                            readonly required: readonly ["id", "name", "username", "registry"];
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                    readonly description: "Unique identifier for this credential";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly description: "Descriptive name for this credential";
                                                };
                                                readonly registry: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                    readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                };
                                                readonly username: {
                                                    readonly type: "string";
                                                    readonly description: "The username associated with the credential";
                                                };
                                            };
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly required: readonly ["buildCommand", "startCommand"];
                                    readonly properties: {
                                        readonly buildCommand: {
                                            readonly type: "string";
                                        };
                                        readonly startCommand: {
                                            readonly type: "string";
                                        };
                                        readonly preDeployCommand: {
                                            readonly type: "string";
                                        };
                                    };
                                }];
                            };
                            readonly numInstances: {
                                readonly type: "integer";
                                readonly description: "For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.";
                            };
                            readonly parentServer: {
                                readonly required: readonly ["id", "name"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly plan: {
                                readonly type: "string";
                                readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                readonly examples: readonly ["starter"];
                            };
                            readonly pullRequestPreviewsEnabled: {
                                readonly type: "string";
                                readonly enum: readonly ["yes", "no"];
                                readonly description: "`yes` `no`";
                            };
                            readonly region: {
                                readonly type: "string";
                                readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                            };
                            readonly buildPlan: {
                                readonly type: "string";
                            };
                        };
                    }, {
                        readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "schedule", "buildPlan"];
                        readonly type: "object";
                        readonly properties: {
                            readonly env: {
                                readonly type: "string";
                                readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                            };
                            readonly envSpecificDetails: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                    readonly properties: {
                                        readonly dockerCommand: {
                                            readonly type: "string";
                                        };
                                        readonly dockerContext: {
                                            readonly type: "string";
                                        };
                                        readonly dockerfilePath: {
                                            readonly type: "string";
                                        };
                                        readonly preDeployCommand: {
                                            readonly type: "string";
                                        };
                                        readonly registryCredential: {
                                            readonly type: "object";
                                            readonly required: readonly ["id", "name", "username", "registry"];
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                    readonly description: "Unique identifier for this credential";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly description: "Descriptive name for this credential";
                                                };
                                                readonly registry: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                    readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                };
                                                readonly username: {
                                                    readonly type: "string";
                                                    readonly description: "The username associated with the credential";
                                                };
                                            };
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly required: readonly ["buildCommand", "startCommand"];
                                    readonly properties: {
                                        readonly buildCommand: {
                                            readonly type: "string";
                                        };
                                        readonly startCommand: {
                                            readonly type: "string";
                                        };
                                        readonly preDeployCommand: {
                                            readonly type: "string";
                                        };
                                    };
                                }];
                            };
                            readonly lastSuccessfulRunAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly plan: {
                                readonly type: "string";
                                readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                readonly examples: readonly ["starter"];
                            };
                            readonly region: {
                                readonly type: "string";
                                readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                            };
                            readonly schedule: {
                                readonly type: "string";
                            };
                            readonly buildPlan: {
                                readonly type: "string";
                            };
                        };
                    }];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetServices: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly name: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by resource name";
                };
                readonly type: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["static_site", "web_service", "private_service", "background_worker", "cron_job"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for types of services";
                };
                readonly env: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                        readonly description: "Environment (runtime)";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for environments (runtimes) of services";
                };
                readonly region: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by resource region";
                };
                readonly suspended: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["suspended", "not_suspended"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter resources based on whether they're suspended or not suspended";
                };
                readonly createdBefore: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for resources created before a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly createdAfter: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-02-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for resources created after a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly updatedBefore: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for resources updated before a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly updatedAfter: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for resources updated after a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly ownerId: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the owner (team or personal user) whose resources should be returned";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly format: "byte";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Cursor to begin retrieving entries for this query";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly default: 20;
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly description: "Max number of items that can be returned";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly service: {
                        readonly type: "object";
                        readonly required: readonly ["id", "name", "ownerId", "type", "createdAt", "updatedAt", "suspended", "suspenders", "autoDeploy", "notifyOnFail", "slug", "serviceDetails", "rootDir"];
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly autoDeploy: {
                                readonly type: "string";
                                readonly enum: readonly ["yes", "no"];
                                readonly description: "`yes` `no`";
                            };
                            readonly branch: {
                                readonly type: "string";
                            };
                            readonly buildFilter: {
                                readonly type: "object";
                                readonly required: readonly ["paths", "ignoredPaths"];
                                readonly properties: {
                                    readonly paths: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                    readonly ignoredPaths: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly createdAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly imagePath: {
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly notifyOnFail: {
                                readonly type: "string";
                                readonly enum: readonly ["default", "notify", "ignore"];
                                readonly description: "`default` `notify` `ignore`";
                            };
                            readonly ownerId: {
                                readonly type: "string";
                            };
                            readonly repo: {
                                readonly type: "string";
                                readonly examples: readonly ["https://github.com/render-examples/flask-hello-world"];
                            };
                            readonly rootDir: {
                                readonly type: "string";
                            };
                            readonly slug: {
                                readonly type: "string";
                            };
                            readonly suspended: {
                                readonly type: "string";
                                readonly enum: readonly ["suspended", "not_suspended"];
                                readonly description: "`suspended` `not_suspended`";
                            };
                            readonly suspenders: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly enum: readonly ["admin", "billing", "user", "parent_service", "unknown"];
                                    readonly description: "`admin` `billing` `user` `parent_service` `unknown`";
                                };
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["static_site", "web_service", "private_service", "background_worker", "cron_job"];
                                readonly description: "`static_site` `web_service` `private_service` `background_worker` `cron_job`";
                            };
                            readonly updatedAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly serviceDetails: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly required: readonly ["buildCommand", "publishPath", "pullRequestPreviewsEnabled", "url", "buildPlan"];
                                    readonly properties: {
                                        readonly buildCommand: {
                                            readonly type: "string";
                                        };
                                        readonly parentServer: {
                                            readonly required: readonly ["id", "name"];
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly publishPath: {
                                            readonly type: "string";
                                        };
                                        readonly pullRequestPreviewsEnabled: {
                                            readonly type: "string";
                                            readonly enum: readonly ["yes", "no"];
                                            readonly description: "`yes` `no`";
                                        };
                                        readonly url: {
                                            readonly type: "string";
                                        };
                                        readonly buildPlan: {
                                            readonly type: "string";
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "pullRequestPreviewsEnabled", "numInstances", "buildPlan", "healthCheckPath", "openPorts", "url"];
                                    readonly properties: {
                                        readonly autoscaling: {
                                            readonly type: "object";
                                            readonly required: readonly ["enabled", "min", "max", "criteria"];
                                            readonly properties: {
                                                readonly enabled: {
                                                    readonly type: "boolean";
                                                    readonly default: false;
                                                };
                                                readonly min: {
                                                    readonly type: "integer";
                                                    readonly description: "The minimum number of instances for the service";
                                                };
                                                readonly max: {
                                                    readonly type: "integer";
                                                    readonly description: "The maximum number of instances for the service";
                                                };
                                                readonly criteria: {
                                                    readonly type: "object";
                                                    readonly required: readonly ["cpu", "memory"];
                                                    readonly properties: {
                                                        readonly cpu: {
                                                            readonly type: "object";
                                                            readonly required: readonly ["enabled", "percentage"];
                                                            readonly properties: {
                                                                readonly enabled: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                };
                                                                readonly percentage: {
                                                                    readonly type: "integer";
                                                                    readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                                };
                                                            };
                                                        };
                                                        readonly memory: {
                                                            readonly type: "object";
                                                            readonly required: readonly ["enabled", "percentage"];
                                                            readonly properties: {
                                                                readonly enabled: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                };
                                                                readonly percentage: {
                                                                    readonly type: "integer";
                                                                    readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        readonly disk: {
                                            readonly type: "object";
                                            readonly required: readonly ["id", "name", "sizeGB", "mountPath"];
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                };
                                                readonly sizeGB: {
                                                    readonly type: "integer";
                                                };
                                                readonly mountPath: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly env: {
                                            readonly type: "string";
                                            readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                            readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                                        };
                                        readonly envSpecificDetails: {
                                            readonly oneOf: readonly [{
                                                readonly type: "object";
                                                readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                                readonly properties: {
                                                    readonly dockerCommand: {
                                                        readonly type: "string";
                                                    };
                                                    readonly dockerContext: {
                                                        readonly type: "string";
                                                    };
                                                    readonly dockerfilePath: {
                                                        readonly type: "string";
                                                    };
                                                    readonly preDeployCommand: {
                                                        readonly type: "string";
                                                    };
                                                    readonly registryCredential: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["id", "name", "username", "registry"];
                                                        readonly properties: {
                                                            readonly id: {
                                                                readonly type: "string";
                                                                readonly description: "Unique identifier for this credential";
                                                            };
                                                            readonly name: {
                                                                readonly type: "string";
                                                                readonly description: "Descriptive name for this credential";
                                                            };
                                                            readonly registry: {
                                                                readonly type: "string";
                                                                readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                                readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                            };
                                                            readonly username: {
                                                                readonly type: "string";
                                                                readonly description: "The username associated with the credential";
                                                            };
                                                        };
                                                    };
                                                };
                                            }, {
                                                readonly type: "object";
                                                readonly required: readonly ["buildCommand", "startCommand"];
                                                readonly properties: {
                                                    readonly buildCommand: {
                                                        readonly type: "string";
                                                    };
                                                    readonly startCommand: {
                                                        readonly type: "string";
                                                    };
                                                    readonly preDeployCommand: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            }];
                                        };
                                        readonly healthCheckPath: {
                                            readonly type: "string";
                                        };
                                        readonly numInstances: {
                                            readonly type: "integer";
                                            readonly description: "For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.";
                                        };
                                        readonly openPorts: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly required: readonly ["port", "protocol"];
                                                readonly properties: {
                                                    readonly port: {
                                                        readonly type: "integer";
                                                        readonly examples: readonly [10000];
                                                    };
                                                    readonly protocol: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["TCP", "UDP"];
                                                        readonly description: "`TCP` `UDP`";
                                                    };
                                                };
                                            };
                                        };
                                        readonly parentServer: {
                                            readonly required: readonly ["id", "name"];
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly plan: {
                                            readonly type: "string";
                                            readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                            readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                            readonly examples: readonly ["starter"];
                                        };
                                        readonly pullRequestPreviewsEnabled: {
                                            readonly type: "string";
                                            readonly enum: readonly ["yes", "no"];
                                            readonly description: "`yes` `no`";
                                        };
                                        readonly region: {
                                            readonly type: "string";
                                            readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                            readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                                        };
                                        readonly url: {
                                            readonly type: "string";
                                        };
                                        readonly buildPlan: {
                                            readonly type: "string";
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "pullRequestPreviewsEnabled", "numInstances", "buildPlan", "openPorts", "url"];
                                    readonly properties: {
                                        readonly autoscaling: {
                                            readonly type: "object";
                                            readonly required: readonly ["enabled", "min", "max", "criteria"];
                                            readonly properties: {
                                                readonly enabled: {
                                                    readonly type: "boolean";
                                                    readonly default: false;
                                                };
                                                readonly min: {
                                                    readonly type: "integer";
                                                    readonly description: "The minimum number of instances for the service";
                                                };
                                                readonly max: {
                                                    readonly type: "integer";
                                                    readonly description: "The maximum number of instances for the service";
                                                };
                                                readonly criteria: {
                                                    readonly type: "object";
                                                    readonly required: readonly ["cpu", "memory"];
                                                    readonly properties: {
                                                        readonly cpu: {
                                                            readonly type: "object";
                                                            readonly required: readonly ["enabled", "percentage"];
                                                            readonly properties: {
                                                                readonly enabled: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                };
                                                                readonly percentage: {
                                                                    readonly type: "integer";
                                                                    readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                                };
                                                            };
                                                        };
                                                        readonly memory: {
                                                            readonly type: "object";
                                                            readonly required: readonly ["enabled", "percentage"];
                                                            readonly properties: {
                                                                readonly enabled: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                };
                                                                readonly percentage: {
                                                                    readonly type: "integer";
                                                                    readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        readonly disk: {
                                            readonly type: "object";
                                            readonly required: readonly ["id", "name", "sizeGB", "mountPath"];
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                };
                                                readonly sizeGB: {
                                                    readonly type: "integer";
                                                };
                                                readonly mountPath: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly env: {
                                            readonly type: "string";
                                            readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                            readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                                        };
                                        readonly envSpecificDetails: {
                                            readonly oneOf: readonly [{
                                                readonly type: "object";
                                                readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                                readonly properties: {
                                                    readonly dockerCommand: {
                                                        readonly type: "string";
                                                    };
                                                    readonly dockerContext: {
                                                        readonly type: "string";
                                                    };
                                                    readonly dockerfilePath: {
                                                        readonly type: "string";
                                                    };
                                                    readonly preDeployCommand: {
                                                        readonly type: "string";
                                                    };
                                                    readonly registryCredential: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["id", "name", "username", "registry"];
                                                        readonly properties: {
                                                            readonly id: {
                                                                readonly type: "string";
                                                                readonly description: "Unique identifier for this credential";
                                                            };
                                                            readonly name: {
                                                                readonly type: "string";
                                                                readonly description: "Descriptive name for this credential";
                                                            };
                                                            readonly registry: {
                                                                readonly type: "string";
                                                                readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                                readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                            };
                                                            readonly username: {
                                                                readonly type: "string";
                                                                readonly description: "The username associated with the credential";
                                                            };
                                                        };
                                                    };
                                                };
                                            }, {
                                                readonly type: "object";
                                                readonly required: readonly ["buildCommand", "startCommand"];
                                                readonly properties: {
                                                    readonly buildCommand: {
                                                        readonly type: "string";
                                                    };
                                                    readonly startCommand: {
                                                        readonly type: "string";
                                                    };
                                                    readonly preDeployCommand: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            }];
                                        };
                                        readonly numInstances: {
                                            readonly type: "integer";
                                            readonly description: "For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.";
                                        };
                                        readonly openPorts: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly required: readonly ["port", "protocol"];
                                                readonly properties: {
                                                    readonly port: {
                                                        readonly type: "integer";
                                                        readonly examples: readonly [10000];
                                                    };
                                                    readonly protocol: {
                                                        readonly type: "string";
                                                        readonly enum: readonly ["TCP", "UDP"];
                                                        readonly description: "`TCP` `UDP`";
                                                    };
                                                };
                                            };
                                        };
                                        readonly parentServer: {
                                            readonly required: readonly ["id", "name"];
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly plan: {
                                            readonly type: "string";
                                            readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                            readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                            readonly examples: readonly ["starter"];
                                        };
                                        readonly pullRequestPreviewsEnabled: {
                                            readonly type: "string";
                                            readonly enum: readonly ["yes", "no"];
                                            readonly description: "`yes` `no`";
                                        };
                                        readonly region: {
                                            readonly type: "string";
                                            readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                            readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                                        };
                                        readonly url: {
                                            readonly type: "string";
                                        };
                                        readonly buildPlan: {
                                            readonly type: "string";
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "pullRequestPreviewsEnabled", "numInstances", "buildPlan"];
                                    readonly properties: {
                                        readonly autoscaling: {
                                            readonly type: "object";
                                            readonly required: readonly ["enabled", "min", "max", "criteria"];
                                            readonly properties: {
                                                readonly enabled: {
                                                    readonly type: "boolean";
                                                    readonly default: false;
                                                };
                                                readonly min: {
                                                    readonly type: "integer";
                                                    readonly description: "The minimum number of instances for the service";
                                                };
                                                readonly max: {
                                                    readonly type: "integer";
                                                    readonly description: "The maximum number of instances for the service";
                                                };
                                                readonly criteria: {
                                                    readonly type: "object";
                                                    readonly required: readonly ["cpu", "memory"];
                                                    readonly properties: {
                                                        readonly cpu: {
                                                            readonly type: "object";
                                                            readonly required: readonly ["enabled", "percentage"];
                                                            readonly properties: {
                                                                readonly enabled: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                };
                                                                readonly percentage: {
                                                                    readonly type: "integer";
                                                                    readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                                };
                                                            };
                                                        };
                                                        readonly memory: {
                                                            readonly type: "object";
                                                            readonly required: readonly ["enabled", "percentage"];
                                                            readonly properties: {
                                                                readonly enabled: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                };
                                                                readonly percentage: {
                                                                    readonly type: "integer";
                                                                    readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        readonly disk: {
                                            readonly type: "object";
                                            readonly required: readonly ["id", "name", "sizeGB", "mountPath"];
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                };
                                                readonly sizeGB: {
                                                    readonly type: "integer";
                                                };
                                                readonly mountPath: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly env: {
                                            readonly type: "string";
                                            readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                            readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                                        };
                                        readonly envSpecificDetails: {
                                            readonly oneOf: readonly [{
                                                readonly type: "object";
                                                readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                                readonly properties: {
                                                    readonly dockerCommand: {
                                                        readonly type: "string";
                                                    };
                                                    readonly dockerContext: {
                                                        readonly type: "string";
                                                    };
                                                    readonly dockerfilePath: {
                                                        readonly type: "string";
                                                    };
                                                    readonly preDeployCommand: {
                                                        readonly type: "string";
                                                    };
                                                    readonly registryCredential: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["id", "name", "username", "registry"];
                                                        readonly properties: {
                                                            readonly id: {
                                                                readonly type: "string";
                                                                readonly description: "Unique identifier for this credential";
                                                            };
                                                            readonly name: {
                                                                readonly type: "string";
                                                                readonly description: "Descriptive name for this credential";
                                                            };
                                                            readonly registry: {
                                                                readonly type: "string";
                                                                readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                                readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                            };
                                                            readonly username: {
                                                                readonly type: "string";
                                                                readonly description: "The username associated with the credential";
                                                            };
                                                        };
                                                    };
                                                };
                                            }, {
                                                readonly type: "object";
                                                readonly required: readonly ["buildCommand", "startCommand"];
                                                readonly properties: {
                                                    readonly buildCommand: {
                                                        readonly type: "string";
                                                    };
                                                    readonly startCommand: {
                                                        readonly type: "string";
                                                    };
                                                    readonly preDeployCommand: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            }];
                                        };
                                        readonly numInstances: {
                                            readonly type: "integer";
                                            readonly description: "For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.";
                                        };
                                        readonly parentServer: {
                                            readonly required: readonly ["id", "name"];
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                        readonly plan: {
                                            readonly type: "string";
                                            readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                            readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                            readonly examples: readonly ["starter"];
                                        };
                                        readonly pullRequestPreviewsEnabled: {
                                            readonly type: "string";
                                            readonly enum: readonly ["yes", "no"];
                                            readonly description: "`yes` `no`";
                                        };
                                        readonly region: {
                                            readonly type: "string";
                                            readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                            readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                                        };
                                        readonly buildPlan: {
                                            readonly type: "string";
                                        };
                                    };
                                }, {
                                    readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "schedule", "buildPlan"];
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly env: {
                                            readonly type: "string";
                                            readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                            readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                                        };
                                        readonly envSpecificDetails: {
                                            readonly oneOf: readonly [{
                                                readonly type: "object";
                                                readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                                readonly properties: {
                                                    readonly dockerCommand: {
                                                        readonly type: "string";
                                                    };
                                                    readonly dockerContext: {
                                                        readonly type: "string";
                                                    };
                                                    readonly dockerfilePath: {
                                                        readonly type: "string";
                                                    };
                                                    readonly preDeployCommand: {
                                                        readonly type: "string";
                                                    };
                                                    readonly registryCredential: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["id", "name", "username", "registry"];
                                                        readonly properties: {
                                                            readonly id: {
                                                                readonly type: "string";
                                                                readonly description: "Unique identifier for this credential";
                                                            };
                                                            readonly name: {
                                                                readonly type: "string";
                                                                readonly description: "Descriptive name for this credential";
                                                            };
                                                            readonly registry: {
                                                                readonly type: "string";
                                                                readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                                readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                            };
                                                            readonly username: {
                                                                readonly type: "string";
                                                                readonly description: "The username associated with the credential";
                                                            };
                                                        };
                                                    };
                                                };
                                            }, {
                                                readonly type: "object";
                                                readonly required: readonly ["buildCommand", "startCommand"];
                                                readonly properties: {
                                                    readonly buildCommand: {
                                                        readonly type: "string";
                                                    };
                                                    readonly startCommand: {
                                                        readonly type: "string";
                                                    };
                                                    readonly preDeployCommand: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            }];
                                        };
                                        readonly lastSuccessfulRunAt: {
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly plan: {
                                            readonly type: "string";
                                            readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                            readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                            readonly examples: readonly ["starter"];
                                        };
                                        readonly region: {
                                            readonly type: "string";
                                            readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                            readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                                        };
                                        readonly schedule: {
                                            readonly type: "string";
                                        };
                                        readonly buildPlan: {
                                            readonly type: "string";
                                        };
                                    };
                                }];
                            };
                        };
                    };
                    readonly cursor: {
                        readonly type: "string";
                        readonly format: "byte";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListJob: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly cursor: {
                    readonly type: "string";
                    readonly format: "byte";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Cursor to begin retrieving entries for this query";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly default: 20;
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly description: "Max number of items that can be returned";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly status: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["pending", "running", "succeeded", "failed"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for the status of the job (`pending`, `running`, `succeeded`, or `failed`)";
                };
                readonly createdBefore: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for jobs created before a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly createdAfter: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-02-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for jobs created after a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly startedBefore: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for jobs started before a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly startedAfter: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-02-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for jobs started after a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly finishedBefore: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-06-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for jobs finished before a certain time (specified as an ISO 8601 timestamp)";
                };
                readonly finishedAfter: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-02-17T08:15:30Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for jobs finished after a certain time (specified as an ISO 8601 timestamp)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly job: {
                        readonly type: "object";
                        readonly required: readonly ["id", "serviceId", "startCommand", "planId", "createdAt"];
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["job-xxxxx"];
                            };
                            readonly serviceId: {
                                readonly type: "string";
                                readonly examples: readonly ["srv-xxxxx"];
                            };
                            readonly startCommand: {
                                readonly type: "string";
                                readonly examples: readonly ["echo 'hello world'"];
                            };
                            readonly planId: {
                                readonly type: "string";
                                readonly examples: readonly ["plan-srv-004"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["succeeded"];
                            };
                            readonly createdAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2021-07-15T07:20:05.777035-07:00"];
                            };
                            readonly startedAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2021-07-15T07:20:05.777035-07:00"];
                            };
                            readonly finishedAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly examples: readonly ["2021-07-15T07:20:05.777035-07:00"];
                            };
                        };
                    };
                    readonly cursor: {
                        readonly type: "string";
                        readonly format: "byte";
                        readonly examples: readonly ["abc123"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostJob: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["startCommand"];
        readonly properties: {
            readonly startCommand: {
                readonly type: "string";
            };
            readonly planId: {
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["id", "serviceId", "startCommand", "planId", "createdAt"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["job-xxxxx"];
                };
                readonly serviceId: {
                    readonly type: "string";
                    readonly examples: readonly ["srv-xxxxx"];
                };
                readonly startCommand: {
                    readonly type: "string";
                    readonly examples: readonly ["echo 'hello world'"];
                };
                readonly planId: {
                    readonly type: "string";
                    readonly examples: readonly ["plan-srv-004"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["succeeded"];
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-07-15T07:20:05.777035-07:00"];
                };
                readonly startedAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-07-15T07:20:05.777035-07:00"];
                };
                readonly finishedAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly examples: readonly ["2021-07-15T07:20:05.777035-07:00"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PreviewService: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["imagePath"];
        readonly properties: {
            readonly imagePath: {
                readonly type: "string";
                readonly description: "Must be either a full URL or the relative path to an image. If a relative path, Render uses the base service's image URL as its root. For example, if the base service's image URL is `docker.io/library/nginx:latest`, then valid values are: `docker.io/library/nginx:<any tag or SHA>`, `library/nginx:<any tag or SHA>`, or `nginx:<any tag or SHA>`. Note that the path must match (only the tag or SHA can vary).";
                readonly examples: readonly ["docker.io/library/nginx:latest"];
            };
            readonly name: {
                readonly type: "string";
                readonly description: "A name for the service preview instance. If not specified, Render generates the name using the base service's name and the specified tag or SHA.";
                readonly examples: readonly ["preview"];
            };
            readonly plan: {
                readonly type: "string";
                readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.";
                readonly examples: readonly ["starter"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly service: {
                    readonly type: "object";
                    readonly required: readonly ["id", "name", "ownerId", "type", "createdAt", "updatedAt", "suspended", "suspenders", "autoDeploy", "notifyOnFail", "slug", "serviceDetails", "rootDir"];
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly autoDeploy: {
                            readonly type: "string";
                            readonly enum: readonly ["yes", "no"];
                            readonly description: "`yes` `no`";
                        };
                        readonly branch: {
                            readonly type: "string";
                        };
                        readonly buildFilter: {
                            readonly type: "object";
                            readonly required: readonly ["paths", "ignoredPaths"];
                            readonly properties: {
                                readonly paths: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                };
                                readonly ignoredPaths: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly imagePath: {
                            readonly type: "string";
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly notifyOnFail: {
                            readonly type: "string";
                            readonly enum: readonly ["default", "notify", "ignore"];
                            readonly description: "`default` `notify` `ignore`";
                        };
                        readonly ownerId: {
                            readonly type: "string";
                        };
                        readonly repo: {
                            readonly type: "string";
                            readonly examples: readonly ["https://github.com/render-examples/flask-hello-world"];
                        };
                        readonly rootDir: {
                            readonly type: "string";
                        };
                        readonly slug: {
                            readonly type: "string";
                        };
                        readonly suspended: {
                            readonly type: "string";
                            readonly enum: readonly ["suspended", "not_suspended"];
                            readonly description: "`suspended` `not_suspended`";
                        };
                        readonly suspenders: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["admin", "billing", "user", "parent_service", "unknown"];
                                readonly description: "`admin` `billing` `user` `parent_service` `unknown`";
                            };
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["static_site", "web_service", "private_service", "background_worker", "cron_job"];
                            readonly description: "`static_site` `web_service` `private_service` `background_worker` `cron_job`";
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly serviceDetails: {
                            readonly oneOf: readonly [{
                                readonly type: "object";
                                readonly required: readonly ["buildCommand", "publishPath", "pullRequestPreviewsEnabled", "url", "buildPlan"];
                                readonly properties: {
                                    readonly buildCommand: {
                                        readonly type: "string";
                                    };
                                    readonly parentServer: {
                                        readonly required: readonly ["id", "name"];
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly publishPath: {
                                        readonly type: "string";
                                    };
                                    readonly pullRequestPreviewsEnabled: {
                                        readonly type: "string";
                                        readonly enum: readonly ["yes", "no"];
                                        readonly description: "`yes` `no`";
                                    };
                                    readonly url: {
                                        readonly type: "string";
                                    };
                                    readonly buildPlan: {
                                        readonly type: "string";
                                    };
                                };
                            }, {
                                readonly type: "object";
                                readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "pullRequestPreviewsEnabled", "numInstances", "buildPlan", "healthCheckPath", "openPorts", "url"];
                                readonly properties: {
                                    readonly autoscaling: {
                                        readonly type: "object";
                                        readonly required: readonly ["enabled", "min", "max", "criteria"];
                                        readonly properties: {
                                            readonly enabled: {
                                                readonly type: "boolean";
                                                readonly default: false;
                                            };
                                            readonly min: {
                                                readonly type: "integer";
                                                readonly description: "The minimum number of instances for the service";
                                            };
                                            readonly max: {
                                                readonly type: "integer";
                                                readonly description: "The maximum number of instances for the service";
                                            };
                                            readonly criteria: {
                                                readonly type: "object";
                                                readonly required: readonly ["cpu", "memory"];
                                                readonly properties: {
                                                    readonly cpu: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["enabled", "percentage"];
                                                        readonly properties: {
                                                            readonly enabled: {
                                                                readonly type: "boolean";
                                                                readonly default: false;
                                                            };
                                                            readonly percentage: {
                                                                readonly type: "integer";
                                                                readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                            };
                                                        };
                                                    };
                                                    readonly memory: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["enabled", "percentage"];
                                                        readonly properties: {
                                                            readonly enabled: {
                                                                readonly type: "boolean";
                                                                readonly default: false;
                                                            };
                                                            readonly percentage: {
                                                                readonly type: "integer";
                                                                readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly disk: {
                                        readonly type: "object";
                                        readonly required: readonly ["id", "name", "sizeGB", "mountPath"];
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly sizeGB: {
                                                readonly type: "integer";
                                            };
                                            readonly mountPath: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly env: {
                                        readonly type: "string";
                                        readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                        readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                                    };
                                    readonly envSpecificDetails: {
                                        readonly oneOf: readonly [{
                                            readonly type: "object";
                                            readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                            readonly properties: {
                                                readonly dockerCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly dockerContext: {
                                                    readonly type: "string";
                                                };
                                                readonly dockerfilePath: {
                                                    readonly type: "string";
                                                };
                                                readonly preDeployCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly registryCredential: {
                                                    readonly type: "object";
                                                    readonly required: readonly ["id", "name", "username", "registry"];
                                                    readonly properties: {
                                                        readonly id: {
                                                            readonly type: "string";
                                                            readonly description: "Unique identifier for this credential";
                                                        };
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly description: "Descriptive name for this credential";
                                                        };
                                                        readonly registry: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                            readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                        };
                                                        readonly username: {
                                                            readonly type: "string";
                                                            readonly description: "The username associated with the credential";
                                                        };
                                                    };
                                                };
                                            };
                                        }, {
                                            readonly type: "object";
                                            readonly required: readonly ["buildCommand", "startCommand"];
                                            readonly properties: {
                                                readonly buildCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly startCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly preDeployCommand: {
                                                    readonly type: "string";
                                                };
                                            };
                                        }];
                                    };
                                    readonly healthCheckPath: {
                                        readonly type: "string";
                                    };
                                    readonly numInstances: {
                                        readonly type: "integer";
                                        readonly description: "For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.";
                                    };
                                    readonly openPorts: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly required: readonly ["port", "protocol"];
                                            readonly properties: {
                                                readonly port: {
                                                    readonly type: "integer";
                                                    readonly examples: readonly [10000];
                                                };
                                                readonly protocol: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["TCP", "UDP"];
                                                    readonly description: "`TCP` `UDP`";
                                                };
                                            };
                                        };
                                    };
                                    readonly parentServer: {
                                        readonly required: readonly ["id", "name"];
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly plan: {
                                        readonly type: "string";
                                        readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                        readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                        readonly examples: readonly ["starter"];
                                    };
                                    readonly pullRequestPreviewsEnabled: {
                                        readonly type: "string";
                                        readonly enum: readonly ["yes", "no"];
                                        readonly description: "`yes` `no`";
                                    };
                                    readonly region: {
                                        readonly type: "string";
                                        readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                        readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                                    };
                                    readonly url: {
                                        readonly type: "string";
                                    };
                                    readonly buildPlan: {
                                        readonly type: "string";
                                    };
                                };
                            }, {
                                readonly type: "object";
                                readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "pullRequestPreviewsEnabled", "numInstances", "buildPlan", "openPorts", "url"];
                                readonly properties: {
                                    readonly autoscaling: {
                                        readonly type: "object";
                                        readonly required: readonly ["enabled", "min", "max", "criteria"];
                                        readonly properties: {
                                            readonly enabled: {
                                                readonly type: "boolean";
                                                readonly default: false;
                                            };
                                            readonly min: {
                                                readonly type: "integer";
                                                readonly description: "The minimum number of instances for the service";
                                            };
                                            readonly max: {
                                                readonly type: "integer";
                                                readonly description: "The maximum number of instances for the service";
                                            };
                                            readonly criteria: {
                                                readonly type: "object";
                                                readonly required: readonly ["cpu", "memory"];
                                                readonly properties: {
                                                    readonly cpu: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["enabled", "percentage"];
                                                        readonly properties: {
                                                            readonly enabled: {
                                                                readonly type: "boolean";
                                                                readonly default: false;
                                                            };
                                                            readonly percentage: {
                                                                readonly type: "integer";
                                                                readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                            };
                                                        };
                                                    };
                                                    readonly memory: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["enabled", "percentage"];
                                                        readonly properties: {
                                                            readonly enabled: {
                                                                readonly type: "boolean";
                                                                readonly default: false;
                                                            };
                                                            readonly percentage: {
                                                                readonly type: "integer";
                                                                readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly disk: {
                                        readonly type: "object";
                                        readonly required: readonly ["id", "name", "sizeGB", "mountPath"];
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly sizeGB: {
                                                readonly type: "integer";
                                            };
                                            readonly mountPath: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly env: {
                                        readonly type: "string";
                                        readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                        readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                                    };
                                    readonly envSpecificDetails: {
                                        readonly oneOf: readonly [{
                                            readonly type: "object";
                                            readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                            readonly properties: {
                                                readonly dockerCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly dockerContext: {
                                                    readonly type: "string";
                                                };
                                                readonly dockerfilePath: {
                                                    readonly type: "string";
                                                };
                                                readonly preDeployCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly registryCredential: {
                                                    readonly type: "object";
                                                    readonly required: readonly ["id", "name", "username", "registry"];
                                                    readonly properties: {
                                                        readonly id: {
                                                            readonly type: "string";
                                                            readonly description: "Unique identifier for this credential";
                                                        };
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly description: "Descriptive name for this credential";
                                                        };
                                                        readonly registry: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                            readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                        };
                                                        readonly username: {
                                                            readonly type: "string";
                                                            readonly description: "The username associated with the credential";
                                                        };
                                                    };
                                                };
                                            };
                                        }, {
                                            readonly type: "object";
                                            readonly required: readonly ["buildCommand", "startCommand"];
                                            readonly properties: {
                                                readonly buildCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly startCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly preDeployCommand: {
                                                    readonly type: "string";
                                                };
                                            };
                                        }];
                                    };
                                    readonly numInstances: {
                                        readonly type: "integer";
                                        readonly description: "For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.";
                                    };
                                    readonly openPorts: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly required: readonly ["port", "protocol"];
                                            readonly properties: {
                                                readonly port: {
                                                    readonly type: "integer";
                                                    readonly examples: readonly [10000];
                                                };
                                                readonly protocol: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["TCP", "UDP"];
                                                    readonly description: "`TCP` `UDP`";
                                                };
                                            };
                                        };
                                    };
                                    readonly parentServer: {
                                        readonly required: readonly ["id", "name"];
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly plan: {
                                        readonly type: "string";
                                        readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                        readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                        readonly examples: readonly ["starter"];
                                    };
                                    readonly pullRequestPreviewsEnabled: {
                                        readonly type: "string";
                                        readonly enum: readonly ["yes", "no"];
                                        readonly description: "`yes` `no`";
                                    };
                                    readonly region: {
                                        readonly type: "string";
                                        readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                        readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                                    };
                                    readonly url: {
                                        readonly type: "string";
                                    };
                                    readonly buildPlan: {
                                        readonly type: "string";
                                    };
                                };
                            }, {
                                readonly type: "object";
                                readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "pullRequestPreviewsEnabled", "numInstances", "buildPlan"];
                                readonly properties: {
                                    readonly autoscaling: {
                                        readonly type: "object";
                                        readonly required: readonly ["enabled", "min", "max", "criteria"];
                                        readonly properties: {
                                            readonly enabled: {
                                                readonly type: "boolean";
                                                readonly default: false;
                                            };
                                            readonly min: {
                                                readonly type: "integer";
                                                readonly description: "The minimum number of instances for the service";
                                            };
                                            readonly max: {
                                                readonly type: "integer";
                                                readonly description: "The maximum number of instances for the service";
                                            };
                                            readonly criteria: {
                                                readonly type: "object";
                                                readonly required: readonly ["cpu", "memory"];
                                                readonly properties: {
                                                    readonly cpu: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["enabled", "percentage"];
                                                        readonly properties: {
                                                            readonly enabled: {
                                                                readonly type: "boolean";
                                                                readonly default: false;
                                                            };
                                                            readonly percentage: {
                                                                readonly type: "integer";
                                                                readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                            };
                                                        };
                                                    };
                                                    readonly memory: {
                                                        readonly type: "object";
                                                        readonly required: readonly ["enabled", "percentage"];
                                                        readonly properties: {
                                                            readonly enabled: {
                                                                readonly type: "boolean";
                                                                readonly default: false;
                                                            };
                                                            readonly percentage: {
                                                                readonly type: "integer";
                                                                readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    readonly disk: {
                                        readonly type: "object";
                                        readonly required: readonly ["id", "name", "sizeGB", "mountPath"];
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly sizeGB: {
                                                readonly type: "integer";
                                            };
                                            readonly mountPath: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly env: {
                                        readonly type: "string";
                                        readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                        readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                                    };
                                    readonly envSpecificDetails: {
                                        readonly oneOf: readonly [{
                                            readonly type: "object";
                                            readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                            readonly properties: {
                                                readonly dockerCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly dockerContext: {
                                                    readonly type: "string";
                                                };
                                                readonly dockerfilePath: {
                                                    readonly type: "string";
                                                };
                                                readonly preDeployCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly registryCredential: {
                                                    readonly type: "object";
                                                    readonly required: readonly ["id", "name", "username", "registry"];
                                                    readonly properties: {
                                                        readonly id: {
                                                            readonly type: "string";
                                                            readonly description: "Unique identifier for this credential";
                                                        };
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly description: "Descriptive name for this credential";
                                                        };
                                                        readonly registry: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                            readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                        };
                                                        readonly username: {
                                                            readonly type: "string";
                                                            readonly description: "The username associated with the credential";
                                                        };
                                                    };
                                                };
                                            };
                                        }, {
                                            readonly type: "object";
                                            readonly required: readonly ["buildCommand", "startCommand"];
                                            readonly properties: {
                                                readonly buildCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly startCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly preDeployCommand: {
                                                    readonly type: "string";
                                                };
                                            };
                                        }];
                                    };
                                    readonly numInstances: {
                                        readonly type: "integer";
                                        readonly description: "For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.";
                                    };
                                    readonly parentServer: {
                                        readonly required: readonly ["id", "name"];
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly plan: {
                                        readonly type: "string";
                                        readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                        readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                        readonly examples: readonly ["starter"];
                                    };
                                    readonly pullRequestPreviewsEnabled: {
                                        readonly type: "string";
                                        readonly enum: readonly ["yes", "no"];
                                        readonly description: "`yes` `no`";
                                    };
                                    readonly region: {
                                        readonly type: "string";
                                        readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                        readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                                    };
                                    readonly buildPlan: {
                                        readonly type: "string";
                                    };
                                };
                            }, {
                                readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "schedule", "buildPlan"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly env: {
                                        readonly type: "string";
                                        readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                        readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                                    };
                                    readonly envSpecificDetails: {
                                        readonly oneOf: readonly [{
                                            readonly type: "object";
                                            readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                            readonly properties: {
                                                readonly dockerCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly dockerContext: {
                                                    readonly type: "string";
                                                };
                                                readonly dockerfilePath: {
                                                    readonly type: "string";
                                                };
                                                readonly preDeployCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly registryCredential: {
                                                    readonly type: "object";
                                                    readonly required: readonly ["id", "name", "username", "registry"];
                                                    readonly properties: {
                                                        readonly id: {
                                                            readonly type: "string";
                                                            readonly description: "Unique identifier for this credential";
                                                        };
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly description: "Descriptive name for this credential";
                                                        };
                                                        readonly registry: {
                                                            readonly type: "string";
                                                            readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                            readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                        };
                                                        readonly username: {
                                                            readonly type: "string";
                                                            readonly description: "The username associated with the credential";
                                                        };
                                                    };
                                                };
                                            };
                                        }, {
                                            readonly type: "object";
                                            readonly required: readonly ["buildCommand", "startCommand"];
                                            readonly properties: {
                                                readonly buildCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly startCommand: {
                                                    readonly type: "string";
                                                };
                                                readonly preDeployCommand: {
                                                    readonly type: "string";
                                                };
                                            };
                                        }];
                                    };
                                    readonly lastSuccessfulRunAt: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                    };
                                    readonly plan: {
                                        readonly type: "string";
                                        readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                        readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                        readonly examples: readonly ["starter"];
                                    };
                                    readonly region: {
                                        readonly type: "string";
                                        readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                        readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                                    };
                                    readonly schedule: {
                                        readonly type: "string";
                                    };
                                    readonly buildPlan: {
                                        readonly type: "string";
                                    };
                                };
                            }];
                        };
                    };
                };
                readonly deployId: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RefreshCustomDomain: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
                readonly customDomainIdOrName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID or name of the custom domain";
                };
            };
            readonly required: readonly ["serviceId", "customDomainIdOrName"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RestartServer: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ResumeService: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RetrieveHeaders: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly path: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for specific paths that headers apply to";
                };
                readonly name: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for header names";
                };
                readonly value: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for header values";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly format: "byte";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Cursor to begin retrieving entries for this query";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly default: 20;
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly description: "Max number of items that can be returned";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly headers: {
                        readonly type: "object";
                        readonly required: readonly ["id", "path", "name", "value"];
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly path: {
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly value: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly cursor: {
                        readonly type: "string";
                        readonly format: "byte";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RetrieveRoutes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly type: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["redirect", "rewrite"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for the type of route rule";
                };
                readonly source: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for the source path of the route";
                };
                readonly destination: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter for the destination path of the route";
                };
                readonly cursor: {
                    readonly type: "string";
                    readonly format: "byte";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Cursor to begin retrieving entries for this query";
                };
                readonly limit: {
                    readonly type: "number";
                    readonly default: 20;
                    readonly minimum: 1;
                    readonly maximum: 100;
                    readonly description: "Max number of items that can be returned";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly routes: {
                        readonly type: "object";
                        readonly required: readonly ["id", "type", "source", "destination", "priority"];
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["redirect", "rewrite"];
                                readonly description: "`redirect` `rewrite`";
                            };
                            readonly source: {
                                readonly type: "string";
                            };
                            readonly destination: {
                                readonly type: "string";
                            };
                            readonly priority: {
                                readonly type: "integer";
                                readonly description: "Redirect and Rewrite Rules are applied in priority order starting at 0";
                            };
                        };
                    };
                    readonly cursor: {
                        readonly type: "string";
                        readonly format: "byte";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RollbackDeploy: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["deployId"];
        readonly properties: {
            readonly deployId: {
                readonly type: "string";
                readonly description: "The ID of the deploy to rollback to";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["id"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly commit: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                    };
                };
                readonly image: {
                    readonly description: "Image information used when creating the deploy. Not present for Git-backed deploys";
                    readonly type: "object";
                    readonly properties: {
                        readonly ref: {
                            readonly description: "Image reference used when creating the deploy";
                            readonly type: "string";
                        };
                        readonly sha: {
                            readonly description: "SHA that the image reference was resolved to when creating the deploy";
                            readonly type: "string";
                        };
                        readonly registryCredential: {
                            readonly description: "Name of credential used to pull the image, if provided";
                            readonly type: "string";
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["created", "build_in_progress", "update_in_progress", "live", "deactivated", "build_failed", "update_failed", "canceled", "pre_deploy_in_progress", "pre_deploy_failed"];
                    readonly description: "`created` `build_in_progress` `update_in_progress` `live` `deactivated` `build_failed` `update_failed` `canceled` `pre_deploy_in_progress` `pre_deploy_failed`";
                };
                readonly trigger: {
                    readonly type: "string";
                    readonly enum: readonly ["api", "blueprint_sync", "deploy_hook", "deployed_by_render", "manual", "other", "new_commit", "rollback", "service_resumed", "service_updated"];
                    readonly description: "`api` `blueprint_sync` `deploy_hook` `deployed_by_render` `manual` `other` `new_commit` `rollback` `service_resumed` `service_updated`";
                };
                readonly finishedAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ScaleService: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["numInstances"];
        readonly properties: {
            readonly numInstances: {
                readonly type: "integer";
                readonly examples: readonly [3];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const SuspendService: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }];
    };
    readonly response: {
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateEnvVarsForService: {
    readonly body: {
        readonly type: "array";
        readonly items: {
            readonly oneOf: readonly [{
                readonly type: "object";
                readonly required: readonly ["key", "value"];
                readonly properties: {
                    readonly key: {
                        readonly type: "string";
                    };
                    readonly value: {
                        readonly type: "string";
                    };
                };
            }, {
                readonly type: "object";
                readonly required: readonly ["key", "generateValue"];
                readonly properties: {
                    readonly key: {
                        readonly type: "string";
                    };
                    readonly generateValue: {
                        readonly type: "boolean";
                    };
                };
            }];
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly envVar: {
                        readonly type: "object";
                        readonly required: readonly ["key", "value"];
                        readonly properties: {
                            readonly key: {
                                readonly type: "string";
                            };
                            readonly value: {
                                readonly type: "string";
                            };
                        };
                    };
                    readonly cursor: {
                        readonly type: "string";
                        readonly format: "byte";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateRegistryCredential: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["name", "registry", "username", "authToken"];
        readonly properties: {
            readonly registry: {
                readonly type: "string";
                readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
            };
            readonly name: {
                readonly type: "string";
            };
            readonly username: {
                readonly type: "string";
            };
            readonly authToken: {
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly registryCredentialId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the registry credential";
                };
            };
            readonly required: readonly ["registryCredentialId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["id", "name", "username", "registry"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "Unique identifier for this credential";
                };
                readonly name: {
                    readonly type: "string";
                    readonly description: "Descriptive name for this credential";
                };
                readonly registry: {
                    readonly type: "string";
                    readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                    readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                };
                readonly username: {
                    readonly type: "string";
                    readonly description: "The username associated with the credential";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "409": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateService: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly autoDeploy: {
                readonly type: "string";
                readonly enum: readonly ["yes", "no"];
            };
            readonly repo: {
                readonly type: "string";
            };
            readonly branch: {
                readonly type: "string";
            };
            readonly image: {
                readonly type: "object";
                readonly required: readonly ["imagePath", "ownerId"];
                readonly properties: {
                    readonly ownerId: {
                        readonly type: "string";
                        readonly description: "The ID of the owner for this image. This should match the owner of the service as well as the owner of any specified registry credential.";
                    };
                    readonly registryCredentialId: {
                        readonly type: "string";
                        readonly description: "Optional reference to the registry credential passed to the image repository to retrieve this image.";
                    };
                    readonly imagePath: {
                        readonly type: "string";
                        readonly description: "Path to the image used for this server (e.g docker.io/library/nginx:latest).";
                    };
                };
            };
            readonly name: {
                readonly type: "string";
            };
            readonly buildFilter: {
                readonly type: "object";
                readonly required: readonly ["paths", "ignoredPaths"];
                readonly properties: {
                    readonly paths: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly ignoredPaths: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly rootDir: {
                readonly type: "string";
            };
            readonly serviceDetails: {
                readonly oneOf: readonly [{
                    readonly type: "object";
                    readonly properties: {
                        readonly buildCommand: {
                            readonly type: "string";
                        };
                        readonly publishPath: {
                            readonly type: "string";
                        };
                        readonly pullRequestPreviewsEnabled: {
                            readonly type: "string";
                            readonly enum: readonly ["yes", "no"];
                        };
                    };
                }, {
                    readonly type: "object";
                    readonly properties: {
                        readonly envSpecificDetails: {
                            readonly oneOf: readonly [{
                                readonly type: "object";
                                readonly properties: {
                                    readonly dockerCommand: {
                                        readonly type: "string";
                                    };
                                    readonly dockerContext: {
                                        readonly type: "string";
                                    };
                                    readonly dockerfilePath: {
                                        readonly type: "string";
                                    };
                                    readonly preDeployCommand: {
                                        readonly type: "string";
                                    };
                                    readonly registryCredentialId: {
                                        readonly type: "string";
                                    };
                                };
                            }, {
                                readonly type: "object";
                                readonly properties: {
                                    readonly buildCommand: {
                                        readonly type: "string";
                                    };
                                    readonly startCommand: {
                                        readonly type: "string";
                                    };
                                    readonly preDeployCommand: {
                                        readonly type: "string";
                                    };
                                };
                            }];
                        };
                        readonly healthCheckPath: {
                            readonly type: "string";
                        };
                        readonly plan: {
                            readonly type: "string";
                            readonly enum: readonly ["starter", "standard", "pro", "pro_plus", "pro_max", "pro_ultra"];
                        };
                        readonly pullRequestPreviewsEnabled: {
                            readonly type: "string";
                            readonly enum: readonly ["yes", "no"];
                        };
                    };
                }, {
                    readonly type: "object";
                    readonly properties: {
                        readonly envSpecificDetails: {
                            readonly oneOf: readonly [{
                                readonly type: "object";
                                readonly properties: {
                                    readonly dockerCommand: {
                                        readonly type: "string";
                                    };
                                    readonly dockerContext: {
                                        readonly type: "string";
                                    };
                                    readonly dockerfilePath: {
                                        readonly type: "string";
                                    };
                                    readonly preDeployCommand: {
                                        readonly type: "string";
                                    };
                                    readonly registryCredentialId: {
                                        readonly type: "string";
                                    };
                                };
                            }, {
                                readonly type: "object";
                                readonly properties: {
                                    readonly buildCommand: {
                                        readonly type: "string";
                                    };
                                    readonly startCommand: {
                                        readonly type: "string";
                                    };
                                    readonly preDeployCommand: {
                                        readonly type: "string";
                                    };
                                };
                            }];
                        };
                        readonly plan: {
                            readonly type: "string";
                            readonly enum: readonly ["starter", "standard", "pro", "pro_plus", "pro_max", "pro_ultra"];
                        };
                        readonly pullRequestPreviewsEnabled: {
                            readonly type: "string";
                            readonly enum: readonly ["yes", "no"];
                        };
                    };
                }, {
                    readonly type: "object";
                    readonly properties: {
                        readonly envSpecificDetails: {
                            readonly oneOf: readonly [{
                                readonly type: "object";
                                readonly properties: {
                                    readonly dockerCommand: {
                                        readonly type: "string";
                                    };
                                    readonly dockerContext: {
                                        readonly type: "string";
                                    };
                                    readonly dockerfilePath: {
                                        readonly type: "string";
                                    };
                                    readonly preDeployCommand: {
                                        readonly type: "string";
                                    };
                                    readonly registryCredentialId: {
                                        readonly type: "string";
                                    };
                                };
                            }, {
                                readonly type: "object";
                                readonly properties: {
                                    readonly buildCommand: {
                                        readonly type: "string";
                                    };
                                    readonly startCommand: {
                                        readonly type: "string";
                                    };
                                    readonly preDeployCommand: {
                                        readonly type: "string";
                                    };
                                };
                            }];
                        };
                        readonly plan: {
                            readonly type: "string";
                            readonly enum: readonly ["starter", "standard", "pro", "pro_plus", "pro_max", "pro_ultra"];
                        };
                        readonly pullRequestPreviewsEnabled: {
                            readonly type: "string";
                            readonly enum: readonly ["yes", "no"];
                        };
                    };
                }, {
                    readonly type: "object";
                    readonly properties: {
                        readonly envSpecificDetails: {
                            readonly oneOf: readonly [{
                                readonly type: "object";
                                readonly properties: {
                                    readonly dockerCommand: {
                                        readonly type: "string";
                                    };
                                    readonly dockerContext: {
                                        readonly type: "string";
                                    };
                                    readonly dockerfilePath: {
                                        readonly type: "string";
                                    };
                                    readonly preDeployCommand: {
                                        readonly type: "string";
                                    };
                                    readonly registryCredentialId: {
                                        readonly type: "string";
                                    };
                                };
                            }, {
                                readonly type: "object";
                                readonly properties: {
                                    readonly buildCommand: {
                                        readonly type: "string";
                                    };
                                    readonly startCommand: {
                                        readonly type: "string";
                                    };
                                    readonly preDeployCommand: {
                                        readonly type: "string";
                                    };
                                };
                            }];
                        };
                        readonly plan: {
                            readonly type: "string";
                            readonly enum: readonly ["starter", "standard", "pro", "pro_plus", "pro_max", "pro_ultra"];
                        };
                        readonly schedule: {
                            readonly type: "string";
                        };
                    };
                }];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly serviceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the service";
                };
            };
            readonly required: readonly ["serviceId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["id", "name", "ownerId", "type", "createdAt", "updatedAt", "suspended", "suspenders", "autoDeploy", "notifyOnFail", "slug", "serviceDetails", "rootDir"];
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly autoDeploy: {
                    readonly type: "string";
                    readonly enum: readonly ["yes", "no"];
                    readonly description: "`yes` `no`";
                };
                readonly branch: {
                    readonly type: "string";
                };
                readonly buildFilter: {
                    readonly type: "object";
                    readonly required: readonly ["paths", "ignoredPaths"];
                    readonly properties: {
                        readonly paths: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly ignoredPaths: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly createdAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly imagePath: {
                    readonly type: "string";
                };
                readonly name: {
                    readonly type: "string";
                };
                readonly notifyOnFail: {
                    readonly type: "string";
                    readonly enum: readonly ["default", "notify", "ignore"];
                    readonly description: "`default` `notify` `ignore`";
                };
                readonly ownerId: {
                    readonly type: "string";
                };
                readonly repo: {
                    readonly type: "string";
                    readonly examples: readonly ["https://github.com/render-examples/flask-hello-world"];
                };
                readonly rootDir: {
                    readonly type: "string";
                };
                readonly slug: {
                    readonly type: "string";
                };
                readonly suspended: {
                    readonly type: "string";
                    readonly enum: readonly ["suspended", "not_suspended"];
                    readonly description: "`suspended` `not_suspended`";
                };
                readonly suspenders: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["admin", "billing", "user", "parent_service", "unknown"];
                        readonly description: "`admin` `billing` `user` `parent_service` `unknown`";
                    };
                };
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["static_site", "web_service", "private_service", "background_worker", "cron_job"];
                    readonly description: "`static_site` `web_service` `private_service` `background_worker` `cron_job`";
                };
                readonly updatedAt: {
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly serviceDetails: {
                    readonly oneOf: readonly [{
                        readonly type: "object";
                        readonly required: readonly ["buildCommand", "publishPath", "pullRequestPreviewsEnabled", "url", "buildPlan"];
                        readonly properties: {
                            readonly buildCommand: {
                                readonly type: "string";
                            };
                            readonly parentServer: {
                                readonly required: readonly ["id", "name"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly publishPath: {
                                readonly type: "string";
                            };
                            readonly pullRequestPreviewsEnabled: {
                                readonly type: "string";
                                readonly enum: readonly ["yes", "no"];
                                readonly description: "`yes` `no`";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                            readonly buildPlan: {
                                readonly type: "string";
                            };
                        };
                    }, {
                        readonly type: "object";
                        readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "pullRequestPreviewsEnabled", "numInstances", "buildPlan", "healthCheckPath", "openPorts", "url"];
                        readonly properties: {
                            readonly autoscaling: {
                                readonly type: "object";
                                readonly required: readonly ["enabled", "min", "max", "criteria"];
                                readonly properties: {
                                    readonly enabled: {
                                        readonly type: "boolean";
                                        readonly default: false;
                                    };
                                    readonly min: {
                                        readonly type: "integer";
                                        readonly description: "The minimum number of instances for the service";
                                    };
                                    readonly max: {
                                        readonly type: "integer";
                                        readonly description: "The maximum number of instances for the service";
                                    };
                                    readonly criteria: {
                                        readonly type: "object";
                                        readonly required: readonly ["cpu", "memory"];
                                        readonly properties: {
                                            readonly cpu: {
                                                readonly type: "object";
                                                readonly required: readonly ["enabled", "percentage"];
                                                readonly properties: {
                                                    readonly enabled: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                    };
                                                    readonly percentage: {
                                                        readonly type: "integer";
                                                        readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                    };
                                                };
                                            };
                                            readonly memory: {
                                                readonly type: "object";
                                                readonly required: readonly ["enabled", "percentage"];
                                                readonly properties: {
                                                    readonly enabled: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                    };
                                                    readonly percentage: {
                                                        readonly type: "integer";
                                                        readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly disk: {
                                readonly type: "object";
                                readonly required: readonly ["id", "name", "sizeGB", "mountPath"];
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly sizeGB: {
                                        readonly type: "integer";
                                    };
                                    readonly mountPath: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly env: {
                                readonly type: "string";
                                readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                            };
                            readonly envSpecificDetails: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                    readonly properties: {
                                        readonly dockerCommand: {
                                            readonly type: "string";
                                        };
                                        readonly dockerContext: {
                                            readonly type: "string";
                                        };
                                        readonly dockerfilePath: {
                                            readonly type: "string";
                                        };
                                        readonly preDeployCommand: {
                                            readonly type: "string";
                                        };
                                        readonly registryCredential: {
                                            readonly type: "object";
                                            readonly required: readonly ["id", "name", "username", "registry"];
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                    readonly description: "Unique identifier for this credential";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly description: "Descriptive name for this credential";
                                                };
                                                readonly registry: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                    readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                };
                                                readonly username: {
                                                    readonly type: "string";
                                                    readonly description: "The username associated with the credential";
                                                };
                                            };
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly required: readonly ["buildCommand", "startCommand"];
                                    readonly properties: {
                                        readonly buildCommand: {
                                            readonly type: "string";
                                        };
                                        readonly startCommand: {
                                            readonly type: "string";
                                        };
                                        readonly preDeployCommand: {
                                            readonly type: "string";
                                        };
                                    };
                                }];
                            };
                            readonly healthCheckPath: {
                                readonly type: "string";
                            };
                            readonly numInstances: {
                                readonly type: "integer";
                                readonly description: "For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.";
                            };
                            readonly openPorts: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly required: readonly ["port", "protocol"];
                                    readonly properties: {
                                        readonly port: {
                                            readonly type: "integer";
                                            readonly examples: readonly [10000];
                                        };
                                        readonly protocol: {
                                            readonly type: "string";
                                            readonly enum: readonly ["TCP", "UDP"];
                                            readonly description: "`TCP` `UDP`";
                                        };
                                    };
                                };
                            };
                            readonly parentServer: {
                                readonly required: readonly ["id", "name"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly plan: {
                                readonly type: "string";
                                readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                readonly examples: readonly ["starter"];
                            };
                            readonly pullRequestPreviewsEnabled: {
                                readonly type: "string";
                                readonly enum: readonly ["yes", "no"];
                                readonly description: "`yes` `no`";
                            };
                            readonly region: {
                                readonly type: "string";
                                readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                            readonly buildPlan: {
                                readonly type: "string";
                            };
                        };
                    }, {
                        readonly type: "object";
                        readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "pullRequestPreviewsEnabled", "numInstances", "buildPlan", "openPorts", "url"];
                        readonly properties: {
                            readonly autoscaling: {
                                readonly type: "object";
                                readonly required: readonly ["enabled", "min", "max", "criteria"];
                                readonly properties: {
                                    readonly enabled: {
                                        readonly type: "boolean";
                                        readonly default: false;
                                    };
                                    readonly min: {
                                        readonly type: "integer";
                                        readonly description: "The minimum number of instances for the service";
                                    };
                                    readonly max: {
                                        readonly type: "integer";
                                        readonly description: "The maximum number of instances for the service";
                                    };
                                    readonly criteria: {
                                        readonly type: "object";
                                        readonly required: readonly ["cpu", "memory"];
                                        readonly properties: {
                                            readonly cpu: {
                                                readonly type: "object";
                                                readonly required: readonly ["enabled", "percentage"];
                                                readonly properties: {
                                                    readonly enabled: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                    };
                                                    readonly percentage: {
                                                        readonly type: "integer";
                                                        readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                    };
                                                };
                                            };
                                            readonly memory: {
                                                readonly type: "object";
                                                readonly required: readonly ["enabled", "percentage"];
                                                readonly properties: {
                                                    readonly enabled: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                    };
                                                    readonly percentage: {
                                                        readonly type: "integer";
                                                        readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly disk: {
                                readonly type: "object";
                                readonly required: readonly ["id", "name", "sizeGB", "mountPath"];
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly sizeGB: {
                                        readonly type: "integer";
                                    };
                                    readonly mountPath: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly env: {
                                readonly type: "string";
                                readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                            };
                            readonly envSpecificDetails: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                    readonly properties: {
                                        readonly dockerCommand: {
                                            readonly type: "string";
                                        };
                                        readonly dockerContext: {
                                            readonly type: "string";
                                        };
                                        readonly dockerfilePath: {
                                            readonly type: "string";
                                        };
                                        readonly preDeployCommand: {
                                            readonly type: "string";
                                        };
                                        readonly registryCredential: {
                                            readonly type: "object";
                                            readonly required: readonly ["id", "name", "username", "registry"];
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                    readonly description: "Unique identifier for this credential";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly description: "Descriptive name for this credential";
                                                };
                                                readonly registry: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                    readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                };
                                                readonly username: {
                                                    readonly type: "string";
                                                    readonly description: "The username associated with the credential";
                                                };
                                            };
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly required: readonly ["buildCommand", "startCommand"];
                                    readonly properties: {
                                        readonly buildCommand: {
                                            readonly type: "string";
                                        };
                                        readonly startCommand: {
                                            readonly type: "string";
                                        };
                                        readonly preDeployCommand: {
                                            readonly type: "string";
                                        };
                                    };
                                }];
                            };
                            readonly numInstances: {
                                readonly type: "integer";
                                readonly description: "For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.";
                            };
                            readonly openPorts: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly required: readonly ["port", "protocol"];
                                    readonly properties: {
                                        readonly port: {
                                            readonly type: "integer";
                                            readonly examples: readonly [10000];
                                        };
                                        readonly protocol: {
                                            readonly type: "string";
                                            readonly enum: readonly ["TCP", "UDP"];
                                            readonly description: "`TCP` `UDP`";
                                        };
                                    };
                                };
                            };
                            readonly parentServer: {
                                readonly required: readonly ["id", "name"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly plan: {
                                readonly type: "string";
                                readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                readonly examples: readonly ["starter"];
                            };
                            readonly pullRequestPreviewsEnabled: {
                                readonly type: "string";
                                readonly enum: readonly ["yes", "no"];
                                readonly description: "`yes` `no`";
                            };
                            readonly region: {
                                readonly type: "string";
                                readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                            readonly buildPlan: {
                                readonly type: "string";
                            };
                        };
                    }, {
                        readonly type: "object";
                        readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "pullRequestPreviewsEnabled", "numInstances", "buildPlan"];
                        readonly properties: {
                            readonly autoscaling: {
                                readonly type: "object";
                                readonly required: readonly ["enabled", "min", "max", "criteria"];
                                readonly properties: {
                                    readonly enabled: {
                                        readonly type: "boolean";
                                        readonly default: false;
                                    };
                                    readonly min: {
                                        readonly type: "integer";
                                        readonly description: "The minimum number of instances for the service";
                                    };
                                    readonly max: {
                                        readonly type: "integer";
                                        readonly description: "The maximum number of instances for the service";
                                    };
                                    readonly criteria: {
                                        readonly type: "object";
                                        readonly required: readonly ["cpu", "memory"];
                                        readonly properties: {
                                            readonly cpu: {
                                                readonly type: "object";
                                                readonly required: readonly ["enabled", "percentage"];
                                                readonly properties: {
                                                    readonly enabled: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                    };
                                                    readonly percentage: {
                                                        readonly type: "integer";
                                                        readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                    };
                                                };
                                            };
                                            readonly memory: {
                                                readonly type: "object";
                                                readonly required: readonly ["enabled", "percentage"];
                                                readonly properties: {
                                                    readonly enabled: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                    };
                                                    readonly percentage: {
                                                        readonly type: "integer";
                                                        readonly description: "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            readonly disk: {
                                readonly type: "object";
                                readonly required: readonly ["id", "name", "sizeGB", "mountPath"];
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly sizeGB: {
                                        readonly type: "integer";
                                    };
                                    readonly mountPath: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly env: {
                                readonly type: "string";
                                readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                            };
                            readonly envSpecificDetails: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                    readonly properties: {
                                        readonly dockerCommand: {
                                            readonly type: "string";
                                        };
                                        readonly dockerContext: {
                                            readonly type: "string";
                                        };
                                        readonly dockerfilePath: {
                                            readonly type: "string";
                                        };
                                        readonly preDeployCommand: {
                                            readonly type: "string";
                                        };
                                        readonly registryCredential: {
                                            readonly type: "object";
                                            readonly required: readonly ["id", "name", "username", "registry"];
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                    readonly description: "Unique identifier for this credential";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly description: "Descriptive name for this credential";
                                                };
                                                readonly registry: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                    readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                };
                                                readonly username: {
                                                    readonly type: "string";
                                                    readonly description: "The username associated with the credential";
                                                };
                                            };
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly required: readonly ["buildCommand", "startCommand"];
                                    readonly properties: {
                                        readonly buildCommand: {
                                            readonly type: "string";
                                        };
                                        readonly startCommand: {
                                            readonly type: "string";
                                        };
                                        readonly preDeployCommand: {
                                            readonly type: "string";
                                        };
                                    };
                                }];
                            };
                            readonly numInstances: {
                                readonly type: "integer";
                                readonly description: "For a *manually* scaled service, this is the number of instances the service is scaled to. DOES NOT indicate the number of running instances for an *autoscaled* service.";
                            };
                            readonly parentServer: {
                                readonly required: readonly ["id", "name"];
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly plan: {
                                readonly type: "string";
                                readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                readonly examples: readonly ["starter"];
                            };
                            readonly pullRequestPreviewsEnabled: {
                                readonly type: "string";
                                readonly enum: readonly ["yes", "no"];
                                readonly description: "`yes` `no`";
                            };
                            readonly region: {
                                readonly type: "string";
                                readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                            };
                            readonly buildPlan: {
                                readonly type: "string";
                            };
                        };
                    }, {
                        readonly required: readonly ["env", "envSpecificDetails", "plan", "region", "schedule", "buildPlan"];
                        readonly type: "object";
                        readonly properties: {
                            readonly env: {
                                readonly type: "string";
                                readonly enum: readonly ["docker", "elixir", "go", "node", "python", "ruby", "rust", "image"];
                                readonly description: "Environment (runtime)\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`";
                            };
                            readonly envSpecificDetails: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly required: readonly ["dockerCommand", "dockerContext", "dockerfilePath"];
                                    readonly properties: {
                                        readonly dockerCommand: {
                                            readonly type: "string";
                                        };
                                        readonly dockerContext: {
                                            readonly type: "string";
                                        };
                                        readonly dockerfilePath: {
                                            readonly type: "string";
                                        };
                                        readonly preDeployCommand: {
                                            readonly type: "string";
                                        };
                                        readonly registryCredential: {
                                            readonly type: "object";
                                            readonly required: readonly ["id", "name", "username", "registry"];
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "string";
                                                    readonly description: "Unique identifier for this credential";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly description: "Descriptive name for this credential";
                                                };
                                                readonly registry: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["GITHUB", "GITLAB", "DOCKER"];
                                                    readonly description: "The registry to use this credential with\n\n`GITHUB` `GITLAB` `DOCKER`";
                                                };
                                                readonly username: {
                                                    readonly type: "string";
                                                    readonly description: "The username associated with the credential";
                                                };
                                            };
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly required: readonly ["buildCommand", "startCommand"];
                                    readonly properties: {
                                        readonly buildCommand: {
                                            readonly type: "string";
                                        };
                                        readonly startCommand: {
                                            readonly type: "string";
                                        };
                                        readonly preDeployCommand: {
                                            readonly type: "string";
                                        };
                                    };
                                }];
                            };
                            readonly lastSuccessfulRunAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly plan: {
                                readonly type: "string";
                                readonly enum: readonly ["starter", "starter_plus", "standard", "standard_plus", "pro", "pro_plus", "pro_max", "pro_ultra", "free", "custom"];
                                readonly description: "The instance type to use for the preview instance. Note that base services with any paid instance type can't create preview instances with the `free` instance type.\n\n`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`";
                                readonly examples: readonly ["starter"];
                            };
                            readonly region: {
                                readonly type: "string";
                                readonly enum: readonly ["frankfurt", "oregon", "ohio", "singapore"];
                                readonly description: "`frankfurt` `oregon` `ohio` `singapore`";
                            };
                            readonly schedule: {
                                readonly type: "string";
                            };
                            readonly buildPlan: {
                                readonly type: "string";
                            };
                        };
                    }];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "406": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "409": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "410": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                };
                readonly message: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { AutoscaleService, CancelDeploy, CancelJob, CreateCustomDomain, CreateDeploy, CreateRegistryCredential, CreateService, DeleteCustomDomain, DeleteRegistryCredential, DeleteService, GetApplicationFilterValues, GetBandwidth, GetCpu, GetCpuLimit, GetCpuTarget, GetCustomDomain, GetCustomDomains, GetDeploy, GetDeploys, GetDiskCapacity, GetDiskUsage, GetEnvVarsForService, GetHttpFilterValues, GetHttpLatency, GetHttpRequests, GetInstanceCount, GetJob, GetMemory, GetMemoryLimit, GetMemoryTarget, GetOwner, GetOwners, GetPathFilterValues, GetRegistryCredentials, GetRegistrycredentialsRegistrycredentialid, GetService, GetServices, ListJob, PostJob, PreviewService, RefreshCustomDomain, RestartServer, ResumeService, RetrieveHeaders, RetrieveRoutes, RollbackDeploy, ScaleService, SuspendService, UpdateEnvVarsForService, UpdateRegistryCredential, UpdateService };
