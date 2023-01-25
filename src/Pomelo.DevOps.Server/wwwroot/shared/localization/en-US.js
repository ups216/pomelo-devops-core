﻿// Copyright (c) Yuko(Yisheng) Zheng. All rights reserved.
// Licensed under the MIT. See LICENSE in the project root for license information.

exports.texts = {
    "MENU_DASHBOARD": "Dashboard",
    "MENU_PIPELINES": "Pipelines",
    "MENU_MEMBERS": "Members",
    "MENU_AGENT_POOLS": "Agent Pools",
    "MENU_SETTINGS": "Settings",
    "MENU_USERS": "Users",
    "MENU_STEP_GALLERY": "Gallery",
    "MENU_PERSONAL_ACCESS_TOKEN": "Personal Access Token",
    "MENU_TRIGGER_PROVIDERS": "Trigger Providers",
    "MENU_LOGIN_PROVIDERS": "Login Methods",
    "MENU_JOB_EXTENSIONS": "Job Extensions",
    "MENU_WIDGETS": "Widgets",
    "MENU_SIGN_OUT": "Sign-out",
    "MENU_BACK_TO_JOBS": "Back to Jobs",
    "MENU_OVERVIEW": "Overview",
    "MENU_PARAMETERS": "Parameters",
    "MENU_REBUILD": "Rebuild",
    "MENU_JOBS": "Jobs",
    "MENU_PLAYBOOK": "Playbook",
    "MENU_DIAGRAM": "Pipeline Diagram",
    "MENU_DIAGRAM_STAGES": "Stages Definitions",
    "MENU_YAML": "YAML",
    "MENU_ARGUMENTS": "Arguments",
    "MENU_CONSTANTS": "Constants",
    "MENU_TRIGGERS": "Triggers",
    "MENU_ACCESS": "Access",
    "MENU_SYSTEM": "System",

    "PROJECT_SELECTOR_SEARCH": "Search...",
    "PROJECT_SELECTOR_NEW_PROJECT": "New Project",

    "NEW_PROJECT": "New Project",
    "NEW_PROJECT_PROJECT_NAME": "Project Name",
    "NEW_PROJECT_PROJECT_NAME_PLACEHOLDER": "Type project name here, it will display in project list",
    "NEW_PROJECT_PROJECT_ID": "Project Id",
    "NEW_PROJECT_PROJECT_ID_PLACEHOLDER": "Only a-z, A-Z, 0-9, -, _ allowed",
    "NEW_PROJECT_PROJECT_LOGO": "Project Logo",
    "NEW_PROJECT_PROJECT_LOGO_HINT": "Click to upload project icon",
    "NEW_PROJECT_CREATE_PROJECT": "Create Project",

    "PIPELINE_SEARCH_PLACEHOLDER": "Search name or ID",
    "PIPELINE_SEARCH_ALL": "All",
    "PIPELINE_PUBLIC": "Public",
    "PIPELINE_PRIVATE": "Private",
    "PIPELINE_NEW_PIPELINE": "New Pipeline",
    "PIPELINE_LAST_TRIGGERED_AT": "Last Triggered At:",
    "PIPELINE_AUTHOR": "Author:",

    "PIPELINE_PIPELINE_NAME": "Pipeline Name",
    "PIPELINE_PIPELINE_NAME_PLACEHOLDER": "Type pipeline name here, it will display in pipeline list",
    "PIPELINE_PIPELINE_ID": "Pipeline ID",
    "PIPELINE_PIPELINE_ID_PLACEHOLDER": "Only a-z, A-Z, 0-9, -, _ allowed",
    "PIPELINE_PIPELINE_TYPE": "Pipeline Type",
    "PIPELINE_PIPELINE_TYPE_LINEAR": "Linear",
    "PIPELINE_PIPELINE_TYPE_LINEAR_DESCRIPTION": "The stages/steps will be executed one by one",
    "PIPELINE_PIPELINE_TYPE_DIAGRAM": "Diagram",
    "PIPELINE_PIPELINE_TYPE_DIAGRAM_DESCRIPTION": "Draw a diagram to control the pipeline",
    "PIPELINE_CREATE_PIPELINE": "Create Pipeline",

    "PIPELINE_JOB_SEARCH_PLACEHOLDER": "Job name...",
    "PIPELINE_FILTER_BY_LABEL": "Filter by label",
    "PIPELINE_NEW_JOB": "New Job",
    "PIPELINE_JOB_DESCRIPTION": "Description",
    "PIPELINE_JOB_DATE": "Date",
    "PIPELINE_JOB_DURATION_TRIGGER_TEMPLATE": "The job has triggered at {0} ago",
    "PIPELINE_JOB_DURATION_STARTED_TEMPLATE": "The job has started at {0} ago",
    "PIPELINE_JOB_NO_RESULT": "No job found",

    "PIPELINE_NEW_JOB_JOB_NAME": "Job Name",
    "PIPELINE_NEW_JOB_JOB_NAME_DEFAULT": "New Job",
    "PIPELINE_NEW_JOB_JOB_NAME_PLACEHOLDER": "Input job name...",
    "PIPELINE_NEW_JOB_JOB_DESCRIPTION": "Job Description",
    "PIPELINE_NEW_JOB_JOB_DESCRIPTION_PLACEHOLDER": "Input description...",
    "PIPELINE_NEW_JOB_START_JOB": "Start Job",

    "PIPELINE_EDIT_SAVE": "Save",
    "PIPELINE_EDIT_DISCARD": "Discard",
    "PIPELINE_EDIT_REFRESH": "Refresh",
    "PIPELINE_EDIT_NODE_SETTINGS": "Node Settings",
    "PIPELINE_EDIT_DELETE_ELEMENT": "Delete Element",
    "PIPELINE_EDIT_CLEAR_ALL": "Clear All",

    "PIPELINE_EDIT_PLAYBOOK_ADD_STAGE": "Add Stage",
    "PIPELINE_EDIT_PLAYBOOK_ADD_STAGE_DEFAULT": "New Stage",

    "PIPELINE_EDIT_PLAYBOOK_ORDER": "Order",
    "PIPELINE_EDIT_PLAYBOOK_ORDER_HINT": "The same order number means the stages can be run parallelly",
    "PIPELINE_EDIT_PLAYBOOK_ISOLATION_LEVEL": "Isolation Level",
    "PIPELINE_EDIT_PLAYBOOK_ISOLATION_LEVEL_SEQUENTIAL": "Sequetial",
    "PIPELINE_EDIT_PLAYBOOK_ISOLATION_LEVEL_SEQUENTIAL_HINT": "The job will occupy the whole agent, jobs run one by one",
    "PIPELINE_EDIT_PLAYBOOK_ISOLATION_LEVEL_PARALLEL": "Parallel",
    "PIPELINE_EDIT_PLAYBOOK_ISOLATION_LEVEL_PARALLEL_HINT": "One agent can execute multiple jobs parallelly",
    "PIPELINE_EDIT_PLAYBOOK_AGENT_POOL": "Agent Pool",
    "PIPELINE_EDIT_PLAYBOOK_AGENT_POOL_CLICK": "<Click here to select an agent pool>",
    "PIPELINE_EDIT_PLAYBOOK_AGENT_COUNT": "Agent Count",
    "PIPELINE_EDIT_PLAYBOOK_AGENT_COUNT_HINT": "{0} agents in the pool",
    "PIPELINE_EDIT_PLAYBOOK_START_CONDITION": "Start Condition",
    "PIPELINE_EDIT_PLAYBOOK_START_CONDITION_REQUIRE_PREVIOUS_TASK_SUCCESS": "Require previous task success",
    "PIPELINE_EDIT_PLAYBOOK_START_CONDITION_REQUIRE_PREVIOUS_TASK_FAILED": "Require previous task failed",
    "PIPELINE_EDIT_PLAYBOOK_START_CONDITION_RUN_ANYWAY": "Run anyway",
    "PIPELINE_EDIT_PLAYBOOK_START_CONDITION_CHECK_VARIABLE_IS_TRUE": "Check variable is true",
    "PIPELINE_EDIT_PLAYBOOK_CONDITION_VARIABLE_NAME": "Condition Variable Name",
    "PIPELINE_EDIT_PLAYBOOK_CONDITION_VARIABLE_NAME_PLACEHOLDER": "Input variable name...",
    "PIPELINE_EDIT_PLAYBOOK_TIMEOUT": "Timeout (Unit: second)",
    "PIPELINE_EDIT_PLAYBOOK_TIMEOUT_HINT": "(-1 means unlimited)",
    "PIPELINE_EDIT_PLAYBOOK_DANGER_ZONE": "Danger Zone",
    "PIPELINE_EDIT_PLAYBOOK_DELETE_STAGE": "Delete Stage",

    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_ALL": "All",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_FILTER_PLACEHOLDER": "Filter by name or ID",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_IMPORT": "Import",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_PLATFORM_SUPPORTED": "{0} supported",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_FILTER": "Filter",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_LATEST_VERSION": "Latest Version",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_UPDATED_AT": "Updated At",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_PACKAGE_ID": "Package ID",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_AUTHOR": "Author",

    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_GENERAL_SETTINGS": "General Settings",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_START_CONDITION": "Start Condition",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_START_CONDITION_REQUIRE_PREVIOUS_TASK_SUCCESS": "Require previous task success",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_START_CONDITION_REQUIRE_PREVIOUS_TASK_FAILED": "Require previous task failed",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_START_CONDITION_RUN_ANYWAY": "Run anyway",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_START_CONDITION_CHECK_VARIABLE_IS_TRUE": "Check variable is true",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_CONDITION_VARIABLE_NAME": "Condition Variable Name",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_CONDITION_VARIABLE_NAME_PLACEHOLDER": "Input variable name...",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_TIMEOUT": "Timeout (Unit: second)",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_TIMEOUT_HINT": "(-1 means unlimited)",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_RETRY": "Retry",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_RETRY_HINT": "(-1: infinite, 0: no retry)",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_ERROR_HANDLING": "Error Handling",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_ERROR_HANDLING_NORMAL": "Normal",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_ERROR_HANDLING_NORMAL_HINT": "Determine the process exit code is zero",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_ERROR_HANDLING_IGNORE_FAILURE": "Ignore Failure",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_ERROR_HANDLING_IGNORE_FAILURE_HINT": "Always treat the step as success",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_ERROR_HANDLING_STDERR": "Standard error as fail",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_ERROR_HANDLING_STDERR_HINT": "Set failed if the process wrote message into stderr",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_DANGER_ZONE": "Danger Zone",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_DELETE_STEP": "Delete Step",

    "PIPELINE_EDIT_ARGUMENTS": "Arguments",
    "PIPELINE_EDIT_ARGUMENTS_NAME": "Name (Unique Key)",
    "PIPELINE_EDIT_ARGUMENTS_NAME_PLACEHOLDER": "Argument Name",
    "PIPELINE_EDIT_ARGUMENTS_DESCRIPTION": "Description",
    "PIPELINE_EDIT_ARGUMENTS_DESCRIPTION_PLACEHOLDER": "Description",
    "PIPELINE_EDIT_ARGUMENTS_TYPE": "Type",
    "PIPELINE_EDIT_ARGUMENTS_EXT": "Ext.",
    "PIPELINE_EDIT_ARGUMENTS_REGEX_PLACEHOLDER": "Regex",
    "PIPELINE_EDIT_ARGUMENTS_OPTION_PLACEHOLDER": "value:description,value:description,... or value,value,...",
    "PIPELINE_EDIT_ARGUMENTS_NUMBER_MIN_PLACEHOLDER": "Min",
    "PIPELINE_EDIT_ARGUMENTS_NUMBER_MAX_PLACEHOLDER": "Max",
    "PIPELINE_EDIT_ARGUMENTS_NUMBER_STEP_PLACEHOLDER": "Step",
    "PIPELINE_EDIT_ARGUMENTS_DEFAULT_VALUE": "Default Value",
    "PIPELINE_EDIT_ARGUMENTS_DEFAULT_VALUE_PLACEHOLDER": "Default Value",
    "PIPELINE_EDIT_ARGUMENTS_ACTIONS": "Actions",
    "PIPELINE_EDIT_ARGUMENTS_NO_RESULT": "No argument found in this pipeline.",
    "PIPELINE_EDIT_ARGUMENTS_ADD_ARGUMENT": "Add Argument",
    "PIPELINE_EDIT_ARGUMENTS_REMOVE": "Remove",
    "PIPELINE_EDIT_ARGUMENTS_TYPE_TEXT": "Text",
    "PIPELINE_EDIT_ARGUMENTS_TYPE_OPTION": "Option",
    "PIPELINE_EDIT_ARGUMENTS_TYPE_TOGGLE_BUTTON": "Toggle Button",
    "PIPELINE_EDIT_ARGUMENTS_TYPE_NUMBER": "Number",

    "PIPELINE_EDIT_CONSTANTS": "Constants",
    "PIPELINE_EDIT_CONSTANTS_KEY": "Key",
    "PIPELINE_EDIT_CONSTANTS_KEY_PLACEHOLDER": "Key",
    "PIPELINE_EDIT_CONSTANTS_VALUE": "Value",
    "PIPELINE_EDIT_CONSTANTS_VALUE_PLACEHOLDER": "Value",
    "PIPELINE_EDIT_CONSTANTS_TYPE": "Type",
    "PIPELINE_EDIT_CONSTANTS_TYPE_PLAIN": "Plain",
    "PIPELINE_EDIT_CONSTANTS_TYPE_SECRET": "Secret",
    "PIPELINE_EDIT_CONSTANTS_ACTIONS": "Actions",
    "PIPELINE_EDIT_CONSTANTS_REMOVE": "Remove",
    "PIPELINE_EDIT_CONSTANTS_NO_RESULT": "No constant found in this pipeline.",
    "PIPELINE_EDIT_CONSTANTS_ADD_CONSTANT": "Add Constant",

    "PIPELINE_TRIGGER_ADD_TRIGGER": "Add Trigger",
    "PIPELINE_TRIGGER_DISABLED": "Disabled",

    "PIPELINE_TRIGGERS": "Triggers",

    "PIPELINE_ACCESS_MEMBER_NAME": "Member name...",
    "PIPELINE_ACCESS_FILTER_BY_ROLES": "Filter by roles",
    "PIPELINE_ACCESS_ROLES_READER": "Reader",
    "PIPELINE_ACCESS_ROLES_COLLABORATOR": "Collaborator",
    "PIPELINE_ACCESS_ROLES_MASTER": "Master",
    "PIPELINE_ACCESS_ADD_ACCESS": "Add Access",
    "PIPELINE_ACCESS_NO_RESULT": "No access assigned in this pipeline",
    "PIPELINE_ACCESS_MEMBER": "Member",
    "PIPELINE_ACCESS_ACCESS_TYPE": "Access Type",
    "PIPELINE_ACCESS_ACCESS_ACTIONS": "Actions",
    "PIPELINE_ACCESS_ACCESS_ACTIONS_EDIT": "Edit",
    "PIPELINE_ACCESS_ACCESS_ACTIONS_DELETE": "Delete",

    "PIPELINE_ACCESS_ADD": "Grant Pipeline Access",
    "PIPELINE_ACCESS_ADD_USER": "User",
    "PIPELINE_ACCESS_ADD_USER_CLICK": "<Select User>",
    "PIPELINE_ACCESS_ADD_ACCESS_TYPE": "Access Type",
    "PIPELINE_ACCESS_ADD_ACCESS_TYPE_READER": "Reader",
    "PIPELINE_ACCESS_ADD_ACCESS_TYPE_READER_HINT": "The user who can read this pipeline only",
    "PIPELINE_ACCESS_ADD_ACCESS_TYPE_COLLABORATOR": "Collaborator",
    "PIPELINE_ACCESS_ADD_ACCESS_TYPE_COLLABORATOR_HINT": "The user who can trigger jobs",
    "PIPELINE_ACCESS_ADD_ACCESS_TYPE_MASTER": "Master",
    "PIPELINE_ACCESS_ADD_ACCESS_TYPE_MASTER_HINT": "The user have write access on this pipeline",
    "PIPELINE_ACCESS_ADD_GRANT_ACCESS": "Grant Access",

    "PIPELINE_ACCESS_EDIT": "Edit Access",
    "PIPELINE_ACCESS_EDIT_SAVE": "Save",

    "PIPELINE_SETTINGS": "Pipeline Settings",
    "PIPELINE_SETTINGS_PIPELINE_NAME": "Pipeline Name",
    "PIPELINE_SETTINGS_PIPELINE_VISIBILITY": "Visibility",
    "PIPELINE_SETTINGS_PIPELINE_VISIBILITY_PUBLIC": "Public",
    "PIPELINE_SETTINGS_PIPELINE_VISIBILITY_PRIVATE": "Private",
    "PIPELINE_SETTINGS_PIPELINE_VISIBILITY_PUBLIC_HINT": "Everyone can see this pipeline in list",
    "PIPELINE_SETTINGS_PIPELINE_VISIBILITY_PRIVATE_HINT": "Only you can see this pipeline in list",
    "PIPELINE_SETTINGS_DANGER_ZONE": "Danger Zone",
    "PIPELINE_SETTINGS_DELETE_PIPELINE": "Delete Pipeline",

    // Member
    "MEMBER_MEMBER_NAME": "Member name...",
    "FILTER_BY_ROLES": "Filter by roles",
    "MEMBER_ADD_MEMBER": "Add Member",
    "MEMBER_NO_RESULT": "No member found",
    "MEMBER_MEMBER": "Member",
    "MEMBER_ROLE": "Role",
    "MEMBER_ROLE_MEMBER": "Member",
    "MEMBER_ROLE_AGENT": "Agent",
    "MEMBER_ROLE_ADMIN": "Admin",
    "MEMBER_ACTIONS": "Actions",
    "MEMBER_ACTIONS_EDIT": "Edit",
    "MEMBER_ACTIONS_DELETE": "Delete",

    "MEMBER_ADD_MEMBER": "Add Member",
    "MEMBER_ADD_MEMBER_USER": "User",
    "MEMBER_ADD_MEMBER_USER_CLICK": "<Select User>",
    "MEMBER_ADD_MEMBER_ROLE": "Role",
    "MEMBER_ADD_MEMBER_ROLE_MEMBER": "Member",
    "MEMBER_ADD_MEMBER_ROLE_MEMBER_HINT": "The user only have read access to this project",
    "MEMBER_ADD_MEMBER_ROLE_AGENT": "Agent",
    "MEMBER_ADD_MEMBER_ROLE_AGENT_HINT": "Used for agent, it can invoke most of APIs in this project",
    "MEMBER_ADD_MEMBER_ROLE_ADMIN": "Admin",
    "MEMBER_ADD_MEMBER_ROLE_ADMIN_HINT": "The user have full permission to this project",
    "MEMBER_ADD_MEMBER_SUBMIT": "Add Member",

    "MEMBER_EDIT": "Edit Member",
    "MEMBER_EDIT_SAVE": "Save",

    "AGENT_POOLS": "Agent Pools",
    "AGENT_POOLS_ID": "ID",
    "AGENT_POOLS_NAME": "Name",
    "AGENT_POOLS_AGENTS": "Agents",
    "AGENT_POOLS_ACTIONS": "Actions",
    "AGENT_POOLS_EDIT": "Edit",
    "AGENT_POOLS_DELETE": "Delete",
    "AGENT_POOLS_NO_RESULT": "No agent pool created yet.",
    "AGENT_POOLS_CREATE_POOL": "Create Pool",
    "AGENT_POOLS_POOL_NAME": "Pool Name",
    "AGENT_POOLS_POOL_NAME_PLACEHOLDER": "Input pool name...",

    "AGENT_POOLS_ADD_AGENT": "Add Agent",
    "AGENT_POOLS_STATUS": "Status",
    "AGENT_POOLS_VERSION": "Version",
    "AGENT_POOLS_POOL_NO_RESULT": "No agent registered in this pool yet.",
    "AGENT_POOLS_NEW_AGENT_STEP_1": "Step 1: Download Agent And Extract",
    "AGENT_POOLS_NEW_AGENT_STEP_2": "Step 2: Install",
    "AGENT_POOLS_NEW_AGENT_STEP_3": "Step 3: Configure",
    "AGENT_POOLS_NEW_AGENT_STEP_3_CONTENT": "Visit http://localhost:5500 on the agent machine to register the agent to DevOps platform",

    "PROJECT_SETTINGS": "Project Settings",
    "PROJECT_SETTINGS_PROJECT_ID": "Project ID",
    "PROJECT_SETTINGS_PROJECT_NAME": "Project Name",
    "PROJECT_SETTINGS_PROJECT_LOGO": "Project Logo",
    "PROJECT_SETTINGS_PROJECT_LOGO_CLICK": "Click to upload project icon",
    "PROJECT_SETTINGS_SAVE": "Save",

    "PROJECT_DASHBOARD_EDIT": "Edit",
    "PROJECT_DASHBOARD_SAVE": "Save",
    "PROJECT_DASHBOARD_BACK": "Back",
    "PROJECT_DASHBOARD_ADD_WIDGET": "Add Widget",
    "PROJECT_DASHBOARD_SEARCH_WIDGET": "Search widget...",
    "PROJECT_DASHBOARD_CLOSE": "Close",
    "PROJECT_DASHBOARD_OK": "OK",

    "PIPELINE_REBUILD": "Rebuild",
    "PIPELINE_REBUILD_JOB_NAME": "Job Name",
    "PIPELINE_REBUILD_JOB_NAME_PLACEHOLDER": "Input job name...",
    "PIPELINE_REBUILD_JOB_DESCRIPTION": "Job Description",
    "PIPELINE_REBUILD_JOB_DESCRIPTION_PLACEHOLDER": "Input job description...",

    "PIPELINE_PARAMS_KEY": "Key",
    "PIPELINE_PARAMS_VALUE": "Value",
    "PIPELINE_PARAMS_NO_RESULT": "No parameter in this job",

    "SYSTEM_USER_FILTER_USER_NAME": "User name...",
    "SYSTEM_USER_FILTER_BY_ROLES": "Filter by roles",
    "SYSTEM_USER_FILTER_BY_ROLES_SYSTEM_ADMIN": "System Admin",
    "SYSTEM_USER_FILTER_BY_ROLES_COLLABORATOR": "Collaborator",
    "SYSTEM_USER_FILTER_BY_PROVIDERS": "Filter by providers",
    "SYSTEM_USER_CREATE_LOCAL_USER": "Create Local User",
    "SYSTEM_USER_USERNAME": "Username",
    "SYSTEM_USER_DISPLAY_NAME": "Display Name",
    "SYSTEM_USER_EMAIL": "Email",
    "SYSTEM_USER_ROLE": "Role",
    "SYSTEM_USER_PROVIDER": "Provider",
    "SYSTEM_USER_ACTIONS": "Actions",
    "SYSTEM_USER_ACTIONS_EDIT": "Edit",
    "SYSTEM_USER_ACTIONS_DELETE": "Delete",
    "SYSTEM_USER_DISABLED": "Disabled",

    "SYSTEM_USER_LOCAL_CREATE": "Create Local User",
    "SYSTEM_USER_LOCAL_USERNAME": "Username",
    "SYSTEM_USER_LOCAL_USERNAME_PLACEHOLDER": "Input username...",
    "SYSTEM_USER_LOCAL_PASSWORD": "Password",
    "SYSTEM_USER_LOCAL_PASSWORD_PLACEHOLDER": "Input password...",
    "SYSTEM_USER_LOCAL_CONFIRM_PASSWORD": "Confirm Password",
    "SYSTEM_USER_LOCAL_CONFIRM_PASSWORD_PLACEHOLDER": "Input password again...",
    "SYSTEM_USER_LOCAL_EMAIL_ADDRESS": "Email Address",
    "SYSTEM_USER_LOCAL_EMAIL_ADDRESS_PLACEHOLDER": "Input email address...",
    "SYSTEM_USER_LOCAL_DISPLAY_NAME": "Display Name",
    "SYSTEM_USER_LOCAL_DISPLAY_NAME_PLACEHOLDER": "Input display name...",
    "SYSTEM_USER_LOCAL_CREATE_USER": "Create User",
    "SYSTEM_USER_LOCAL_RESET_PASSWORD": "Password (Keep empty if you don't want to change password')",
    "SYSTEM_USER_LOCAL_RESET_PASSWORD_PLACEHOLDER": "Input new password...",
    "SYSTEM_USER_LOCAL_USER_ROLE": "User Role",
    "SYSTEM_USER_LOCAL_USER_ROLE_COLLABORATOR": "Collaborator",
    "SYSTEM_USER_LOCAL_USER_ROLE_SYSTEM_ADMIN": "System Admin",
    "SYSTEM_USER_LOCAL_SAVE": "Save",

    "MY_PAT": "Personal Access Token",
    "MY_PAT_NAME": "Name",
    "MY_PAT_EXPIRE_AT": "Expire At",
    "MY_PAT_ACTIONS": "Actions",
    "MY_PAT_ACTIONS_REVOKE": "Revoke",
    "MY_PAT_NO_RESULT": "No personal access token created yet.",
    "MY_PAT_GENERATE_TOKEN": "Generate Token",
    "MY_PAT_TOKEN_NAME": "Token Name",
    "MY_PAT_TOKEN_NAME_PLACEHOLDER": "Input token name...",
    "MY_PAT_EXPIRE_DATE": "Expire Date",
    "MY_PAT_EXPIRE_DATE_PLACEHOLDER": "YYYY-MM-DD, Keep empty if it is a long term token.",
    "MY_PAT_LONG_TERM": "Long-term",
    "MY_PAT_GENERATED_HINT": "Please store the above token, the token will be displayed only one time.",

    "SYSTEM_TRIGGER_PROVIDER_SEARCH": "Search name or namespace",
    "SYSTEM_TRIGGER_PROVIDER_ADD_PROVIDER": "Add Provider",
    "SYSTEM_TRIGGER_PROVIDER_NAME": "Name",
    "SYSTEM_TRIGGER_PROVIDER_PROVIDER_ADDRESS": "Provider Address",
    "SYSTEM_TRIGGER_PROVIDER_ACTIONS": "Actions",
    "SYSTEM_TRIGGER_PROVIDER_ACTIONS_EDIT": "Edit",
    "SYSTEM_TRIGGER_PROVIDER_ACTIONS_DETAILS": "Details",
    "SYSTEM_TRIGGER_PROVIDER_ACTIONS_DELETE": "Delete",
    "SYSTEM_TRIGGER_PROVIDER_NO_RESULT": "No Result",

    "SYSTEM_TRIGGER_ADD": "Add Trigger Provider",
    "SYSTEM_TRIGGER_ADD_PROVIDER_METADATA_JSON_URL": "Provider Metadata JSON URL",
    "SYSTEM_TRIGGER_ADD_PROVIDER_METADATA_JSON_URL_PLACEHOLDER": "Input provider metadata JSON URL",
    "SYSTEM_TRIGGER_ADD_AUTHORIZATION_TOKEN": "Authorization Token",
    "SYSTEM_TRIGGER_ADD_AUTHORIZATION_TOKEN_PLACEHOLDER": "Input authorization token",
    "SYSTEM_TRIGGER_ADD_PROVIDER": "Add Provider",

    "SYSTEM_TRIGGER_EDIT": "Edit Trigger Provider",
    "SYSTEM_TRIGGER_SAVE": "Save",

    "SYSTEM_LOGIN_PROVIDER_ADD_PROVIDER": "Add Provider",
    "SYSTEM_LOGIN_PROVIDER_LOGIN_PROVIDERS": "Login Providers",
    "SYSTEM_LOGIN_PROVIDER_LOCAL_AUTH": "Local Auth",
    "SYSTEM_LOGIN_PROVIDER_LOCAL_AUTHENTICATION": "Local Authentication",
    "SYSTEM_LOGIN_PROVIDER_ID": "Provider Id",
    "SYSTEM_LOGIN_PROVIDER_ID_PLACEHOLDER": "A-Z, a-z, 0-9, -, _",
    "SYSTEM_LOGIN_PROVIDER_NAME": "Provider Name",
    "SYSTEM_LOGIN_PROVIDER_NAME_PLACEHOLDER": "Input provider name...",
    "SYSTEM_LOGIN_PROVIDER_ENABLED": "Enabled",
    "SYSTEM_LOGIN_PROVIDER_PRIORITY": "Priority",
    "SYSTEM_LOGIN_PROVIDER_ALLOW_REGISTER": "Allow Register",
    "SYSTEM_LOGIN_PROVIDER_ALLOW_REGISTER_ALLOW": "Allow",
    "SYSTEM_LOGIN_PROVIDER_ALLOW_REGISTER_ALLOW_HINT": "Users are able to register local account",
    "SYSTEM_LOGIN_PROVIDER_ALLOW_REGISTER_DENY": "Deny",
    "SYSTEM_LOGIN_PROVIDER_ALLOW_REGISTER_DENY_HINT": "Only system admin can create accounts",
    "SYSTEM_LOGIN_PROVIDER_SAVE": "Save",
    "SYSTEM_LOGIN_PROVIDER_CREATE": "Create",
    "SYSTEM_LOGIN_PROVIDER_DELETE": "Delete",
    "SYSTEM_LOGIN_PROVIDER_ICON_URL": "Icon URL",
    "SYSTEM_LOGIN_PROVIDER_ICON_URL_PLACEHOLDER": "Input provider icon URL",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_SERVER_BASE_URL": "OAuth2 Server Base URL",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_SERVER_BASE_URL_PLACEHOLDER": "Input OAuth2 server base URL",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_AUTHORIZE_ENDPOINT": "Authorize Endpoint",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_AUTHORIZE_ENDPOINT_PLACEHOLDER": "Input authorize endpoint",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_CLIENT_ID": "OAuth2 Client ID",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_CLIENT_ID_PLACEHOLDER": "Input OAuth2 client ID",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_SCOPE": "Scope",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_SCOPE_PLACEHOLDER": "Input OAuth2 scope",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_RESTRICTED_CALLBACK": "Restricted Callback URL",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_ACCESS_TOKEN_ENDPOINT": "Access Token Endpoint",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_ACCESS_TOKEN_ENDPOINT_PLACEHOLDER": "Input access token endpoint",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_CLIENT_SECRET": "Client Secret",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_CLIENT_SECRET_PLACEHOLDER": "Input client secret",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_ACCESS_TOKEN_FIELD_JSON_PATH": "Access Token Field Json Path",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_ACCESS_TOKEN_FIELD_JSON_PATH_PLACEHOLDER": "Input access token field json path",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_TOKEN_TYPE_FIELD_JSON_PATH": "Token Type Field Json Path",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_TOKEN_TYPE_FIELD_JSON_PATH_PLACEHOLDER": "Input token type field json path",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_USER_INFO_ENDPOINT": "User Info Endpoint",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_USER_INFO_ENDPOINT_PLACEHOLDER": "Input user info endpoint",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_USER_NAME_JSON_PATH": "Username JSON Field Path",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_USER_NAME_JSON_PATH_PLACEHOLDER": "Input username json field path",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_EMAIL_JSON_PATH": "Email JSON Field Path",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_EMAIL_JSON_PATH_PLACEHOLDER": "Input email json field path",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_DISPLAY_NAME_JSON_PATH": "Display Name JSON Field Path",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_DISPLAY_NAME_JSON_PATH_PLACEHOLDER": "Input display name json field path",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_CALLBACK_URL": "OAuth2 Callback URL (Fill in OAuth2 Server)",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_AUTHENTICATION": "OAuth2 Authentication",
    "SYSTEM_LOGIN_PROVIDER_LDAP_AUTHENTICATION": "LDAP Authentication",
    "SYSTEM_LOGIN_PROVIDER_LDAP_SERVER_ADDRESS": "Server Address",
    "SYSTEM_LOGIN_PROVIDER_LDAP_SERVER_ADDRESS_PLACEHOLDER": "Input LDAP server address",
    "SYSTEM_LOGIN_PROVIDER_LDAP_SERVER_PORT": "Server Port",
    "SYSTEM_LOGIN_PROVIDER_LDAP_SERVER_PORT_PLACEHOLDER": "Input LDAP server port",
    "SYSTEM_LOGIN_PROVIDER_LDAP_SEARCH_BASE": "Search Base",
    "SYSTEM_LOGIN_PROVIDER_LDAP_SEARCH_BASE_PLACEHOLDER": "Input search base",
    "SYSTEM_LOGIN_PROVIDER_LDAP_USERNAME_PROPERTY_KEY": "Username Property Key",
    "SYSTEM_LOGIN_PROVIDER_LDAP_USERNAME_PROPERTY_KEY_PLACEHOLDER": "Input username property key",
    "SYSTEM_LOGIN_PROVIDER_LDAP_EMAIL_PROPERTY_KEY": "Email Property Key",
    "SYSTEM_LOGIN_PROVIDER_LDAP_EMAIL_PROPERTY_KEY_PLACEHOLDER": "Input email property key",
    "SYSTEM_LOGIN_PROVIDER_LDAP_DISPLAY_NAME_PROPERTY_KEY": "Display Name Property Key",
    "SYSTEM_LOGIN_PROVIDER_LDAP_DISPLAY_NAME_PROPERTY_KEY_PLACEHOLDER": "Input display name property key",
    "SYSTEM_LOGIN_PROVIDER_LDAP_LOGIN_HINT": "Login Hint",
    "SYSTEM_LOGIN_PROVIDER_LDAP_LOGIN_HINT_DEFAULT": "Please use your domain account as username",
    "SYSTEM_LOGIN_PROVIDER_LDAP_LOGIN_HINT_PLACEHOLDER": "Input login hint",
    "SYSTEM_LOGIN_PROVIDER_LDAP_USERNAME_INPUT_PLACEHOLDER_TEXT": "Username Input Placeholder Text",
    "SYSTEM_LOGIN_PROVIDER_LDAP_USERNAME_INPUT_PLACEHOLDER_TEXT_DEFAULT": "Domain Account",
    "SYSTEM_LOGIN_PROVIDER_LDAP_USERNAME_INPUT_PLACEHOLDER_TEXT_PLACEHOLDER": "Input username placeholder text",

    "SYSTEM_JOB_EXTENSION_SEARCH": "Search name or namespace",
    "SYSTEM_JOB_EXTENSION_ADD_EXTENSION": "Add Extension",
    "SYSTEM_JOB_EXTENSION_NO_RESULT": "No Result",
    "SYSTEM_JOB_EXTENSION_NAME": "Name",
    "SYSTEM_JOB_EXTENSION_EXTENSION_ADDRESS": "Extension Address",
    "SYSTEM_JOB_EXTENSION_ACTIONS": "Actions",
    "SYSTEM_JOB_EXTENSION_ACTIONS_EDIT": "Edit",
    "SYSTEM_JOB_EXTENSION_ACTIONS_DETAILS": "Details",
    "SYSTEM_JOB_EXTENSION_ACTIONS_DELETE": "Delete",

    "SYSTEM_JOB_EXTENSION_ADD": "Add Job Extension",
    "SYSTEM_JOB_EXTENSION_METADATA_JSON_URL": "Extension Metadata JSON URL",
    "SYSTEM_JOB_EXTENSION_METADATA_JSON_URL_PLACEHOLDER": "Input extension metadata json URL",
    "SYSTEM_JOB_EXTENSION_AUTHORIZATION_TOKEN": "Authorization Token",
    "SYSTEM_JOB_EXTENSION_AUTHORIZATION_TOKEN_PLACEHOLDER": "Input authorization token",
    "SYSTEM_JOB_EXTENSION_ADD_EXTENSION": "Add Extension",
    "SYSTEM_JOB_EXTENSION_EDIT": "Edit Job Extension",
    "SYSTEM_JOB_EXTENSION_SAVE": "Save",

    "SYSTEM_WIDGET_SEARCH": "Search name or namespace",
    "SYSTEM_WIDGET_ADD": "Add Widget",
    "SYSTEM_WIDGET_NO_RESULT": "No Result",
    "SYSTEM_WIDGET_NAME": "Name",
    "SYSTEM_WIDGET_ACTIONS": "Actions",
    "SYSTEM_WIDGET_ACTIONS_EDIT": "Edit",
    "SYSTEM_WIDGET_ACTIONS_DELETE": "Delete",

    "SYSTEM_WIDGET_IMPORT_JSON": "Import Widget JSON",
    "SYSTEM_WIDGET_ONLINE_EDIT": "Online Edit",

    "SYSTEM_WIDGET_IMPORT_JSON_CLICK": "Click above button to upload widget JSON.",

    "SYSTEM_WIDGET_CREATE_WIDGET": "Create Widget",
    "SYSTEM_WIDGET_WIDGET_ID": "Widget ID",
    "SYSTEM_WIDGET_WIDGET_ID_PLACEHOLDER": "Input widget id, 0-9, a-z, A-Z, ._-",
    "SYSTEM_WIDGET_WIDGET_NAME": "Widget Name",
    "SYSTEM_WIDGET_WIDGET_NAME_PLACEHOLDER": "Input widget name",
    "SYSTEM_WIDGET_WIDGET_DESCRIPTION": "Widget Description",
    "SYSTEM_WIDGET_WIDGET_DESCRIPTION_PLACEHOLDER": "Input widget description",
    "SYSTEM_WIDGET_CREATE": "Create",

    "SYSTEM_WIDGET_EDIT_SAVE": "Save",
    "SYSTEM_WIDGET_EDIT_DISCARD": "Discard",
    "SYSTEM_WIDGET_EDIT_EXPORT_TO_JSON": "Export to JSON",
    "SYSTEM_WIDGET_EDIT_SETTINGS": "Settings",
    "SYSTEM_WIDGET_EDIT_NEW_FILE": "New File",
    "SYSTEM_WIDGET_EDIT_UPLOAD_FILE": "Upload File",
    "SYSTEM_WIDGET_EDIT_NEW_FOLDER": "New Folder",
    "SYSTEM_WIDGET_EDIT_RENAME": "Rename",
    "SYSTEM_WIDGET_EDIT_DELETE": "Delete",
    "SYSTEM_WIDGET_ICON_URL": "Icon URL",
    "SYSTEM_WIDGET_ICON_URL_PLACEHOLDER": "Input icon URL",
    "SYSTEM_WIDGET_WIDGET_ENTRY": "Widget Entry",
    "SYSTEM_WIDGET_WIDGET_ENTRY_PLACEHOLDER": "Input widget entry",
    "SYSTEM_WIDGET_CONFIG_ENTRY": "Config Entry",
    "SYSTEM_WIDGET_CONFIG_ENTRY_PLACEHOLDER": "Input config entry",

    "SYSTEM_SETTINGS": "System Settings",
    "SYSTEM_SETTINGS_SAVE": "Save",
    "SYSTEM_SETTINGS_DEVOPS_WEBSITE_NAME": "DevOps Website Name",
    "SYSTEM_SETTINGS_DEVOPS_WEBSITE_NAME_PLACEHOLDER": "Input DevOps website name",
    "SYSTEM_SETTINGS_DEVOPS_WEBSITE_ICON": "DevOps Website Icon URL",
    "SYSTEM_SETTINGS_DEVOPS_WEBSITE_ICON_PLACEHOLDER": "Input DevOps website icon URL",
    "SYSTEM_SETTINGS_GALLERY_WEBSITE_NAME": "Gallery Website Name",
    "SYSTEM_SETTINGS_GALLERY_WEBSITE_NAME_PLACEHOLDER": "Input gallery website name",
    "SYSTEM_SETTINGS_GALLERY_WEBSITE_ICON": "Gallery Website Icon URL",
    "SYSTEM_SETTINGS_GALLERY_WEBSITE_ICON_PLACEHOLDER": "Input gallery website icon URL",
    "SYSTEM_SETTINGS_ALLOW_USER_CREATE_PROJECT": "Allow User Create Project",
};