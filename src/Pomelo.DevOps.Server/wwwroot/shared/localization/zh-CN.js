﻿// Copyright (c) Yuko(Yisheng) Zheng. All rights reserved.
// Licensed under the MIT. See LICENSE in the project root for license information.

exports.texts = {
    "MENU_DASHBOARD": "仪表盘",
    "MENU_PIPELINES": "流水线",
    "MENU_MEMBERS": "成员管理",
    "MENU_AGENT_POOLS": "Agent池",
    "MENU_SETTINGS": "设置",
    "MENU_USERS": "用户管理",
    "MENU_STEP_GALLERY": "市场",
    "MENU_PERSONAL_ACCESS_TOKEN": "令牌管理",
    "MENU_TRIGGER_PROVIDERS": "触发器插件",
    "MENU_LOGIN_PROVIDERS": "登录方式",
    "MENU_JOB_EXTENSIONS": "构建任务插件",
    "MENU_WIDGETS": "仪表盘组件",
    "MENU_SIGN_OUT": "退出",
    "MENU_BACK_TO_JOBS": "返回构建列表",
    "MENU_OVERVIEW": "概览",
    "MENU_PARAMETERS": "参数",
    "MENU_REBUILD": "重新构建",
    "MENU_JOBS": "构建历史",
    "MENU_PLAYBOOK": "流水线编辑器",
    "MENU_DIAGRAM": "流水线流程",
    "MENU_DIAGRAM_STAGES": "阶段定义",
    "MENU_YAML": "YAML编辑器",
    "MENU_ARGUMENTS": "参数",
    "MENU_CONSTANTS": "常量",
    "MENU_TRIGGERS": "触发器",
    "MENU_ACCESS": "权限",
    "MENU_SYSTEM": "系统设置",

    "PROJECT_SELECTOR_SEARCH": "搜索...",
    "PROJECT_SELECTOR_NEW_PROJECT": "创建项目",

    "NEW_PROJECT": "新建项目",
    "NEW_PROJECT_PROJECT_NAME": "项目名称",
    "NEW_PROJECT_PROJECT_NAME_PLACEHOLDER": "项目名称将显示在左上角的项目列表中",
    "NEW_PROJECT_PROJECT_ID": "项目ID",
    "NEW_PROJECT_PROJECT_ID_PLACEHOLDER": "请使用a-z, A-Z, 0-9, -, _作为ID",
    "NEW_PROJECT_PROJECT_LOGO": "项目徽标",
    "NEW_PROJECT_PROJECT_LOGO_HINT": "点击上传徽标",
    "NEW_PROJECT_CREATE_PROJECT": "创建项目",

    "PIPELINE_SEARCH_PLACEHOLDER": "搜索流水线名称或ID",
    "PIPELINE_SEARCH_ALL": "全部",
    "PIPELINE_PUBLIC": "公共",
    "PIPELINE_PRIVATE": "私有",
    "PIPELINE_NEW_PIPELINE": "新建流水线",
    "PIPELINE_LAST_TRIGGERED_AT": "最后构建于: ",
    "PIPELINE_AUTHOR": "所有者: ",

    "PIPELINE_PIPELINE_NAME": "流水线名称",
    "PIPELINE_PIPELINE_NAME_PLACEHOLDER": "流水线名称显示在流水线列表中",
    "PIPELINE_PIPELINE_ID": "流水线ID",
    "PIPELINE_PIPELINE_ID_PLACEHOLDER": "请使用a-z, A-Z, 0-9, -, _作为ID",
    "PIPELINE_PIPELINE_TYPE": "流水线类型",
    "PIPELINE_PIPELINE_TYPE_LINEAR": "线性",
    "PIPELINE_PIPELINE_TYPE_LINEAR_DESCRIPTION": "流水线以一个阶段接一个阶段为主呈线性排列",
    "PIPELINE_PIPELINE_TYPE_DIAGRAM": "流程图",
    "PIPELINE_PIPELINE_TYPE_DIAGRAM_DESCRIPTION": "绘制流程图以控制流水线的走向",
    "PIPELINE_CREATE_PIPELINE": "创建流水线",

    "PIPELINE_JOB_SEARCH_PLACEHOLDER": "按名称筛选...",
    "PIPELINE_FILTER_BY_LABEL": "按标签筛选",
    "PIPELINE_NEW_JOB": "新构建任务",
    "PIPELINE_JOB_DESCRIPTION": "描述",
    "PIPELINE_JOB_DATE": "时间日期",
    "PIPELINE_JOB_DURATION_TEMPLATE": "此构建开始于{0}前",
    "PIPELINE_JOB_NO_RESULT": "没有构建历史",

    "PIPELINE_NEW_JOB_JOB_NAME": "构建任务名称",
    "PIPELINE_NEW_JOB_JOB_NAME_DEFAULT": "新的构建任务",
    "PIPELINE_NEW_JOB_JOB_NAME_PLACEHOLDER": "请输入构建任务名称...",
    "PIPELINE_NEW_JOB_JOB_DESCRIPTION": "构建任务说明",
    "PIPELINE_NEW_JOB_JOB_DESCRIPTION_PLACEHOLDER": "请输入构建任务说明...",
    "PIPELINE_NEW_JOB_START_JOB": "开始构建",

    "PIPELINE_EDIT_SAVE": "保存",
    "PIPELINE_EDIT_DISCARD": "撤销",
    "PIPELINE_EDIT_REFRESH": "刷新",
    "PIPELINE_EDIT_NODE_SETTINGS": "节点设置",
    "PIPELINE_EDIT_DELETE_ELEMENT": "删除元素",
    "PIPELINE_EDIT_CLEAR_ALL": "清空全部",

    "PIPELINE_EDIT_PLAYBOOK_ADD_STAGE": "创建新阶段",
    "PIPELINE_EDIT_PLAYBOOK_ADD_STAGE_DEFAULT": "新阶段",
    
    "PIPELINE_EDIT_PLAYBOOK_ORDER": "执行顺序",
    "PIPELINE_EDIT_PLAYBOOK_ORDER_HINT": "相同顺序的阶段将并行执行",
    "PIPELINE_EDIT_PLAYBOOK_ISOLATION_LEVEL": "任务隔离",
    "PIPELINE_EDIT_PLAYBOOK_ISOLATION_LEVEL_SEQUENTIAL": "顺序执行",
    "PIPELINE_EDIT_PLAYBOOK_ISOLATION_LEVEL_SEQUENTIAL_HINT": "任务将占据整个Agent，其他任务需等此任务完成后才能执行",
    "PIPELINE_EDIT_PLAYBOOK_ISOLATION_LEVEL_PARALLEL": "并行执行",
    "PIPELINE_EDIT_PLAYBOOK_ISOLATION_LEVEL_PARALLEL_HINT": "该任务可以与其他任务同时运行",
    "PIPELINE_EDIT_PLAYBOOK_AGENT_POOL": "Agent池",
    "PIPELINE_EDIT_PLAYBOOK_AGENT_POOL_CLICK": "<点击选择Agent池>",
    "PIPELINE_EDIT_PLAYBOOK_AGENT_COUNT": "Agent数量",
    "PIPELINE_EDIT_PLAYBOOK_AGENT_COUNT_HINT": "池中有{0}个Agent可用",
    "PIPELINE_EDIT_PLAYBOOK_START_CONDITION": "任务启动条件",
    "PIPELINE_EDIT_PLAYBOOK_START_CONDITION_REQUIRE_PREVIOUS_TASK_SUCCESS": "需要上一阶段成功",
    "PIPELINE_EDIT_PLAYBOOK_START_CONDITION_REQUIRE_PREVIOUS_TASK_FAILED": "需要上一阶段失败",
    "PIPELINE_EDIT_PLAYBOOK_START_CONDITION_RUN_ANYWAY": "总是执行",
    "PIPELINE_EDIT_PLAYBOOK_START_CONDITION_CHECK_VARIABLE_IS_TRUE": "检查条件变量为`true`",
    "PIPELINE_EDIT_PLAYBOOK_CONDITION_VARIABLE_NAME": "条件变量名称",
    "PIPELINE_EDIT_PLAYBOOK_CONDITION_VARIABLE_NAME_PLACEHOLDER": "请输入条件变量名称...",
    "PIPELINE_EDIT_PLAYBOOK_TIMEOUT": "超时 (单位: 秒)",
    "PIPELINE_EDIT_PLAYBOOK_TIMEOUT_HINT": "(-1代表无限制)",
    "PIPELINE_EDIT_PLAYBOOK_DANGER_ZONE": "危险",
    "PIPELINE_EDIT_PLAYBOOK_DELETE_STAGE": "删除阶段",

    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_ALL": "全部",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_FILTER_PLACEHOLDER": "根据名称或ID过滤",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_IMPORT": "导入",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_PLATFORM_SUPPORTED": "该步骤支持{0}",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_LATEST_VERSION": "最新版本",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_UPDATED_AT": "更新于",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_PACKAGE_ID": "包ID",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_AUTHOR": "作者",

    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_GENERAL_SETTINGS": "通用设置",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_START_CONDITION": "任务启动条件",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_START_CONDITION_REQUIRE_PREVIOUS_TASK_SUCCESS": "需要上一步骤成功",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_START_CONDITION_REQUIRE_PREVIOUS_TASK_FAILED": "需要上一步骤失败",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_START_CONDITION_RUN_ANYWAY": "总是执行",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_START_CONDITION_CHECK_VARIABLE_IS_TRUE": "检查条件变量为`true`",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_CONDITION_VARIABLE_NAME": "条件变量名称",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_CONDITION_VARIABLE_NAME_PLACEHOLDER": "请输入条件变量名称...",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_TIMEOUT": "超时 (单位: 秒)",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_TIMEOUT_HINT": "(-1代表无限制)",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_RETRY": "重试",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_RETRY_HINT": "(-1: 无限, 0: 不重试)",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_ERROR_HANDLING": "错误处理模式",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_ERROR_HANDLING_NORMAL": "标准模式",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_ERROR_HANDLING_NORMAL_HINT": "根据进程返回值是否为0判定成功",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_ERROR_HANDLING_IGNORE_FAILURE": "忽略错误",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_ERROR_HANDLING_IGNORE_FAILURE_HINT": "总是认为步骤执行成功",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_ERROR_HANDLING_STDERR": "标准输出流",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_ERROR_HANDLING_STDERR_HINT": "若进程向标准错误流写入信息，则认为失败",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_DANGER_ZONE": "危险",
    "PIPELINE_EDIT_PLAYBOOK_STEP_GALLERY_DELETE_STEP": "删除步骤",

    "PIPELINE_EDIT_ARGUMENTS": "参数",
    "PIPELINE_EDIT_ARGUMENTS_NAME": "名称 (唯一)",
    "PIPELINE_EDIT_ARGUMENTS_NAME_PLACEHOLDER": "参数名称",
    "PIPELINE_EDIT_ARGUMENTS_DESCRIPTION": "描述",
    "PIPELINE_EDIT_ARGUMENTS_DESCRIPTION_PLACEHOLDER": "参数描述",
    "PIPELINE_EDIT_ARGUMENTS_TYPE": "类型",
    "PIPELINE_EDIT_ARGUMENTS_EXT": "扩展",
    "PIPELINE_EDIT_ARGUMENTS_REGEX_PLACEHOLDER": "正则表达式",
    "PIPELINE_EDIT_ARGUMENTS_OPTION_PLACEHOLDER": "值:描述,值:描述,... 或 值,值,...",
    "PIPELINE_EDIT_ARGUMENTS_NUMBER_MIN_PLACEHOLDER": "最小值",
    "PIPELINE_EDIT_ARGUMENTS_NUMBER_MAX_PLACEHOLDER": "最大值",
    "PIPELINE_EDIT_ARGUMENTS_NUMBER_STEP_PLACEHOLDER": "步",
    "PIPELINE_EDIT_ARGUMENTS_DEFAULT_VALUE": "默认值",
    "PIPELINE_EDIT_ARGUMENTS_DEFAULT_VALUE_PLACEHOLDER": "默认值",
    "PIPELINE_EDIT_ARGUMENTS_ACTIONS": "操作",
    "PIPELINE_EDIT_ARGUMENTS_NO_RESULT": "该流水线尚未定义任何参数",
    "PIPELINE_EDIT_ARGUMENTS_ADD_ARGUMENT": "添加参数",
    "PIPELINE_EDIT_ARGUMENTS_REMOVE": "删除",
    "PIPELINE_EDIT_ARGUMENTS_TYPE_TEXT": "文本",
    "PIPELINE_EDIT_ARGUMENTS_TYPE_OPTION": "单选",
    "PIPELINE_EDIT_ARGUMENTS_TYPE_TOGGLE_BUTTON": "布尔",
    "PIPELINE_EDIT_ARGUMENTS_TYPE_NUMBER": "数值",

    "PIPELINE_EDIT_CONSTANTS": "常量",
    "PIPELINE_EDIT_CONSTANTS_KEY": "常量名 (唯一)",
    "PIPELINE_EDIT_CONSTANTS_KEY_PLACEHOLDER": "常量名",
    "PIPELINE_EDIT_CONSTANTS_VALUE": "值",
    "PIPELINE_EDIT_CONSTANTS_VALUE_PLACEHOLDER": "常量值",
    "PIPELINE_EDIT_CONSTANTS_TYPE": "类型",
    "PIPELINE_EDIT_CONSTANTS_TYPE_PLAIN": "明文",
    "PIPELINE_EDIT_CONSTANTS_TYPE_SECRET": "密钥",
    "PIPELINE_EDIT_CONSTANTS_ACTIONS": "操作",
    "PIPELINE_EDIT_CONSTANTS_REMOVE": "删除",
    "PIPELINE_EDIT_CONSTANTS_NO_RESULT": "该流水线尚未定义常量",
    "PIPELINE_EDIT_CONSTANTS_ADD_CONSTANT": "添加常量",

    "PIPELINE_TRIGGER_ADD_TRIGGER": "添加触发器",
    "PIPELINE_TRIGGER_DISABLED": "已禁用",

    "PIPELINE_TRIGGERS": "触发器",

    "PIPELINE_ACCESS_MEMBER_NAME": "成员...",
    "PIPELINE_ACCESS_FILTER_BY_ROLES": "按角色过滤",
    "PIPELINE_ACCESS_ROLES_READER": "只读",
    "PIPELINE_ACCESS_ROLES_COLLABORATOR": "合作者",
    "PIPELINE_ACCESS_ROLES_MASTER": "管理员",
    "PIPELINE_ACCESS_ADD_ACCESS": "添加权限",
    "PIPELINE_ACCESS_NO_RESULT": "这条流水线没有授予任何人权限",
    "PIPELINE_ACCESS_MEMBER": "成员",
    "PIPELINE_ACCESS_ACCESS_TYPE": "权限类型",
    "PIPELINE_ACCESS_ACCESS_ACTIONS": "操作",
    "PIPELINE_ACCESS_ACCESS_ACTIONS_EDIT": "编辑",
    "PIPELINE_ACCESS_ACCESS_ACTIONS_DELETE": "删除",

    "PIPELINE_ACCESS_ADD": "流水线权限",
    "PIPELINE_ACCESS_ADD_USER": "用户",
    "PIPELINE_ACCESS_ADD_USER_CLICK": "<点击选择用户>",
    "PIPELINE_ACCESS_ADD_ACCESS_TYPE": "权限类型",
    "PIPELINE_ACCESS_ADD_ACCESS_TYPE_READER": "只读",
    "PIPELINE_ACCESS_ADD_ACCESS_TYPE_READER_HINT": "这个用户将只有读取流水线内容的权限",
    "PIPELINE_ACCESS_ADD_ACCESS_TYPE_COLLABORATOR": "合作者",
    "PIPELINE_ACCESS_ADD_ACCESS_TYPE_COLLABORATOR_HINT": "这个用户将可以发起构建任务",
    "PIPELINE_ACCESS_ADD_ACCESS_TYPE_MASTER": "管理员",
    "PIPELINE_ACCESS_ADD_ACCESS_TYPE_MASTER_HINT": "这个用户将具有编辑流水线中内容的权限",
    "PIPELINE_ACCESS_ADD_GRANT_ACCESS": "授予权限",

    "PIPELINE_ACCESS_EDIT": "编辑权限",
    "PIPELINE_ACCESS_EDIT_SAVE": "保存",

    "PIPELINE_SETTINGS": "流水线设置",
    "PIPELINE_SETTINGS_PIPELINE_NAME": "流水线名称",
    "PIPELINE_SETTINGS_PIPELINE_VISIBILITY": "可见性",
    "PIPELINE_SETTINGS_PIPELINE_VISIBILITY_PUBLIC": "公开",
    "PIPELINE_SETTINGS_PIPELINE_VISIBILITY_PRIVATE": "私有",
    "PIPELINE_SETTINGS_PIPELINE_VISIBILITY_PUBLIC_HINT": "所有人都能看到这条流水线",
    "PIPELINE_SETTINGS_PIPELINE_VISIBILITY_PRIVATE_HINT": "只有您和被授权的人可以看到这条流水线",
    "PIPELINE_SETTINGS_DANGER_ZONE": "危险",
    "PIPELINE_SETTINGS_DELETE_PIPELINE": "删除流水线",

    // Member
    "MEMBER_MEMBER_NAME": "成员名...",
    "FILTER_BY_ROLES": "按角色过滤",
    "MEMBER_ADD_MEMBER": "添加成员",
    "MEMBER_NO_RESULT": "没有找到成员",
    "MEMBER_MEMBER": "成员",
    "MEMBER_ROLE": "角色",
    "MEMBER_ROLE_MEMBER": "普通成员",
    "MEMBER_ROLE_AGENT": "Agent",
    "MEMBER_ROLE_ADMIN": "管理员",
    "MEMBER_ACTIONS": "操作",
    "MEMBER_ACTIONS_EDIT": "编辑",
    "MEMBER_ACTIONS_DELETE": "删除",

    "MEMBER_ADD_MEMBER": "添加成员",
    "MEMBER_ADD_MEMBER_USER": "用户",
    "MEMBER_ADD_MEMBER_USER_CLICK": "<点击选择用户>",
    "MEMBER_ADD_MEMBER_ROLE": "角色",
    "MEMBER_ADD_MEMBER_ROLE_MEMBER": "普通成员",
    "MEMBER_ADD_MEMBER_ROLE_MEMBER_HINT": "这个用户将只有读取项目中信息的权限",
    "MEMBER_ADD_MEMBER_ROLE_AGENT": "Agent",
    "MEMBER_ADD_MEMBER_ROLE_AGENT_HINT": "拥有对构建任务及阶段、步骤的读写等权限",
    "MEMBER_ADD_MEMBER_ROLE_ADMIN": "管理员",
    "MEMBER_ADD_MEMBER_ROLE_ADMIN_HINT": "拥有项目的完全管理权限",
    "MEMBER_ADD_MEMBER_SUBMIT": "添加成员",

    "MEMBER_EDIT": "编辑成员",
    "MEMBER_EDIT_SAVE": "保存",

    "AGENT_POOLS": "Agent池",
    "AGENT_POOLS_ID": "ID",
    "AGENT_POOLS_NAME": "名称",
    "AGENT_POOLS_AGENTS": "Agents",
    "AGENT_POOLS_ACTIONS": "操作",
    "AGENT_POOLS_EDIT": "编辑",
    "AGENT_POOLS_DELETE": "删除",
    "AGENT_POOLS_NO_RESULT": "这个项目中没有任何Agent池",
    "AGENT_POOLS_CREATE_POOL": "创建池",
    "AGENT_POOLS_POOL_NAME": "Agent池名称",
    "AGENT_POOLS_POOL_NAME_PLACEHOLDER": "请输入Agent池名称...",

    "AGENT_POOLS_ADD_AGENT": "添加Agent",
    "AGENT_POOLS_STATUS": "状态",
    "AGENT_POOLS_VERSION": "版本",
    "AGENT_POOLS_POOL_NO_RESULT": "这个Agent池中没有任何Agent",
    "AGENT_POOLS_NEW_AGENT_STEP_1": "步骤 1: 下载Agent程序并解压",
    "AGENT_POOLS_NEW_AGENT_STEP_2": "步骤 2: 安装",
    "AGENT_POOLS_NEW_AGENT_STEP_3": "步骤 3: 配置",
    "AGENT_POOLS_NEW_AGENT_STEP_3_CONTENT": "在Agent机器中访问 http://localhost:5500，将其注册至DevOps平台",

    "PROJECT_SETTINGS": "项目设置",
    "PROJECT_SETTINGS_PROJECT_ID": "项目ID",
    "PROJECT_SETTINGS_PROJECT_NAME": "项目名称",
    "PROJECT_SETTINGS_PROJECT_LOGO": "项目徽标",
    "PROJECT_SETTINGS_PROJECT_LOGO_CLICK": "点击上传徽标",
    "PROJECT_SETTINGS_SAVE": "保存",

    "PROJECT_DASHBOARD_EDIT": "编辑",
    "PROJECT_DASHBOARD_SAVE": "保存",
    "PROJECT_DASHBOARD_BACK": "返回",
    "PROJECT_DASHBOARD_ADD_WIDGET": "添加组件",
    "PROJECT_DASHBOARD_SEARCH_WIDGET": "搜索组件...",
    "PROJECT_DASHBOARD_CLOSE": "关闭",
    "PROJECT_DASHBOARD_OK": "确定",

    "PIPELINE_REBUILD": "重新构建",
    "PIPELINE_REBUILD_JOB_NAME": "构建任务名称",
    "PIPELINE_REBUILD_JOB_NAME_PLACEHOLDER": "请输入构建任务名称...",
    "PIPELINE_REBUILD_JOB_DESCRIPTION": "构建任务说明",
    "PIPELINE_REBUILD_JOB_DESCRIPTION_PLACEHOLDER": "请输入构建任务说明...",
    
    "PIPELINE_PARAMS_KEY": "属性名称",
    "PIPELINE_PARAMS_VALUE": "值",
    "PIPELINE_PARAMS_NO_RESULT": "这个构建任务中没有任何参数",

    "SYSTEM_USER_FILTER_USER_NAME": "用户名或显示名称...",
    "SYSTEM_USER_FILTER_BY_ROLES": "按角色过滤",
    "SYSTEM_USER_FILTER_BY_ROLES_SYSTEM_ADMIN": "系统管理员",
    "SYSTEM_USER_FILTER_BY_ROLES_COLLABORATOR": "协作者",
    "SYSTEM_USER_FILTER_BY_PROVIDERS": "按登录方式过滤",
    "SYSTEM_USER_CREATE_LOCAL_USER": "创建本地用户",
    "SYSTEM_USER_USERNAME": "用户名",
    "SYSTEM_USER_DISPLAY_NAME": "显示名称",
    "SYSTEM_USER_EMAIL": "电子邮箱",
    "SYSTEM_USER_ROLE": "角色",
    "SYSTEM_USER_PROVIDER": "登录方式",
    "SYSTEM_USER_ACTIONS": "操作",
    "SYSTEM_USER_ACTIONS_EDIT": "编辑",
    "SYSTEM_USER_ACTIONS_DELETE": "删除",
    "SYSTEM_USER_DISABLED": "已禁用",

    "SYSTEM_USER_LOCAL_CREATE": "创建本地用户",
    "SYSTEM_USER_LOCAL_USERNAME": "用户名",
    "SYSTEM_USER_LOCAL_USERNAME_PLACEHOLDER": "请输入用户名...",
    "SYSTEM_USER_LOCAL_PASSWORD": "密码",
    "SYSTEM_USER_LOCAL_PASSWORD_PLACEHOLDER": "请输入密码...",
    "SYSTEM_USER_LOCAL_CONFIRM_PASSWORD": "密码重复",
    "SYSTEM_USER_LOCAL_CONFIRM_PASSWORD_PLACEHOLDER": "请再输入一遍密码...",
    "SYSTEM_USER_LOCAL_EMAIL_ADDRESS": "电子邮箱地址",
    "SYSTEM_USER_LOCAL_EMAIL_ADDRESS_PLACEHOLDER": "请输入电子邮箱地址...",
    "SYSTEM_USER_LOCAL_DISPLAY_NAME": "显示名称",
    "SYSTEM_USER_LOCAL_DISPLAY_NAME_PLACEHOLDER": "请输入显示名称...",
    "SYSTEM_USER_LOCAL_CREATE_USER": "创建用户",
    "SYSTEM_USER_LOCAL_RESET_PASSWORD": "密码 (如无需修改密码请留空)",
    "SYSTEM_USER_LOCAL_RESET_PASSWORD_PLACEHOLDER": "请输入新密码...",
    "SYSTEM_USER_LOCAL_USER_ROLE": "用户角色",
    "SYSTEM_USER_LOCAL_USER_ROLE_COLLABORATOR": "协作者",
    "SYSTEM_USER_LOCAL_USER_ROLE_SYSTEM_ADMIN": "系统管理员",
    "SYSTEM_USER_LOCAL_SAVE": "保存",

    "MY_PAT": "个人访问令牌",
    "MY_PAT_NAME": "名称",
    "MY_PAT_EXPIRE_AT": "过期时间",
    "MY_PAT_ACTIONS": "操作",
    "MY_PAT_ACTIONS_REVOKE": "撤销",
    "MY_PAT_NO_RESULT": "您尚未创建任何个人访问令牌",
    "MY_PAT_GENERATE_TOKEN": "生成令牌",
    "MY_PAT_TOKEN_NAME": "令牌名称",
    "MY_PAT_TOKEN_NAME_PLACEHOLDER": "请输入令牌名称...",
    "MY_PAT_EXPIRE_DATE": "过期时间",
    "MY_PAT_EXPIRE_DATE_PLACEHOLDER": "YYYY-MM-DD, 留空则为长期有效",
    "MY_PAT_LONG_TERM": "长期有效",
    "MY_PAT_GENERATED_HINT": "请妥善保管令牌，令牌仅显示一次，页面刷新后将不再显示",

    "SYSTEM_TRIGGER_PROVIDER_SEARCH": "按名称或ID搜索",
    "SYSTEM_TRIGGER_PROVIDER_ADD_PROVIDER": "添加插件",
    "SYSTEM_TRIGGER_PROVIDER_NAME": "名称",
    "SYSTEM_TRIGGER_PROVIDER_PROVIDER_ADDRESS": "插件地址",
    "SYSTEM_TRIGGER_PROVIDER_ACTIONS": "操作",
    "SYSTEM_TRIGGER_PROVIDER_ACTIONS_EDIT": "编辑",
    "SYSTEM_TRIGGER_PROVIDER_ACTIONS_DETAILS": "插件详情",
    "SYSTEM_TRIGGER_PROVIDER_ACTIONS_DELETE": "删除",
    "SYSTEM_TRIGGER_PROVIDER_NO_RESULT": "没有结果",

    "SYSTEM_TRIGGER_ADD": "添加触发器插件",
    "SYSTEM_TRIGGER_ADD_PROVIDER_METADATA_JSON_URL": "插件元数据JSON地址",
    "SYSTEM_TRIGGER_ADD_PROVIDER_METADATA_JSON_URL_PLACEHOLDER": "请输入插件元数据JSON地址",
    "SYSTEM_TRIGGER_ADD_AUTHORIZATION_TOKEN": "身份验证令牌",
    "SYSTEM_TRIGGER_ADD_AUTHORIZATION_TOKEN_PLACEHOLDER": "请输入身份验证令牌",
    "SYSTEM_TRIGGER_ADD_PROVIDER": "添加插件",

    "SYSTEM_TRIGGER_EDIT": "编辑触发器插件",
    "SYSTEM_TRIGGER_SAVE": "保存",

    "SYSTEM_LOGIN_PROVIDER_ADD_PROVIDER": "添加登录方式",
    "SYSTEM_LOGIN_PROVIDER_LOGIN_PROVIDERS": "登录方式",
    "SYSTEM_LOGIN_PROVIDER_LOCAL_AUTH": "本地认证",
    "SYSTEM_LOGIN_PROVIDER_LOCAL_AUTHENTICATION": "本地认证",
    "SYSTEM_LOGIN_PROVIDER_ID": "登录方式ID",
    "SYSTEM_LOGIN_PROVIDER_ID_PLACEHOLDER": "A-Z, a-z, 0-9, -, _",
    "SYSTEM_LOGIN_PROVIDER_NAME": "登录方式名称",
    "SYSTEM_LOGIN_PROVIDER_NAME_PLACEHOLDER": "请输入登录方式名称...",
    "SYSTEM_LOGIN_PROVIDER_ENABLED": "启用",
    "SYSTEM_LOGIN_PROVIDER_PRIORITY": "优先级",
    "SYSTEM_LOGIN_PROVIDER_ALLOW_REGISTER": "允许注册",
    "SYSTEM_LOGIN_PROVIDER_ALLOW_REGISTER_ALLOW": "允许",
    "SYSTEM_LOGIN_PROVIDER_ALLOW_REGISTER_ALLOW_HINT": "用户可以注册本地帐号登录本平台",
    "SYSTEM_LOGIN_PROVIDER_ALLOW_REGISTER_DENY": "拒绝",
    "SYSTEM_LOGIN_PROVIDER_ALLOW_REGISTER_DENY_HINT": "只有系统管理员可以创建本地帐号",
    "SYSTEM_LOGIN_PROVIDER_SAVE": "保存",
    "SYSTEM_LOGIN_PROVIDER_CREATE": "创建",
    "SYSTEM_LOGIN_PROVIDER_DELETE": "删除",
    "SYSTEM_LOGIN_PROVIDER_ICON_URL": "图标URL",
    "SYSTEM_LOGIN_PROVIDER_ICON_URL_PLACEHOLDER": "请输入图标URL",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_SERVER_BASE_URL": "OAuth2服务商Base URL",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_SERVER_BASE_URL_PLACEHOLDER": "请输入OAuth2服务商Base URL",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_AUTHORIZE_ENDPOINT": "Authorize Endpoint",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_AUTHORIZE_ENDPOINT_PLACEHOLDER": "请输入authorize endpoint",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_CLIENT_ID": "OAuth2 Client ID",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_CLIENT_ID_PLACEHOLDER": "请输入OAuth2 Client ID",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_SCOPE": "Scope",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_SCOPE_PLACEHOLDER": "请输入scope",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_RESTRICTED_CALLBACK": "OAuth2服务商要求严格的回调URL",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_ACCESS_TOKEN_ENDPOINT": "Access Token Endpoint",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_ACCESS_TOKEN_ENDPOINT_PLACEHOLDER": "请输入access token endpoint",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_CLIENT_SECRET": "Client Secret",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_CLIENT_SECRET_PLACEHOLDER": "请输入client secret",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_ACCESS_TOKEN_FIELD_JSON_PATH": "Access Token的JSON字段名",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_ACCESS_TOKEN_FIELD_JSON_PATH_PLACEHOLDER": "请输入Access Token的JSON字段名",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_TOKEN_TYPE_FIELD_JSON_PATH": "Token类型的JSON字段名",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_TOKEN_TYPE_FIELD_JSON_PATH_PLACEHOLDER": "请输入Token类型的JSON字段名",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_USER_INFO_ENDPOINT": "用户信息Endpoint",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_USER_INFO_ENDPOINT_PLACEHOLDER": "请输入用户信息Endpoint",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_USER_NAME_JSON_PATH": "用户名的JSON字段名",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_USER_NAME_JSON_PATH_PLACEHOLDER": "请输入用户名的JSON字段名",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_EMAIL_JSON_PATH": "电子邮箱的JSON字段名",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_EMAIL_JSON_PATH_PLACEHOLDER": "请输入电子邮箱的JSON字段名",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_DISPLAY_NAME_JSON_PATH": "显示名称的JSON字段名",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_DISPLAY_NAME_JSON_PATH_PLACEHOLDER": "请输入显示名称的JSON字段名",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_CALLBACK_URL": "OAuth2回调地址 (在OAuth2服务商处填写)",
    "SYSTEM_LOGIN_PROVIDER_OAUTH2_AUTHENTICATION": "OAuth2 验证",
    "SYSTEM_LOGIN_PROVIDER_LDAP_AUTHENTICATION": "LDAP 验证",
    "SYSTEM_LOGIN_PROVIDER_LDAP_SERVER_ADDRESS": "服务器地址",
    "SYSTEM_LOGIN_PROVIDER_LDAP_SERVER_ADDRESS_PLACEHOLDER": "请输入LDAP服务器地址",
    "SYSTEM_LOGIN_PROVIDER_LDAP_SERVER_PORT": "服务器端口",
    "SYSTEM_LOGIN_PROVIDER_LDAP_SERVER_PORT_PLACEHOLDER": "请输入LDAP服务器端口",
    "SYSTEM_LOGIN_PROVIDER_LDAP_SEARCH_BASE": "Search Base",
    "SYSTEM_LOGIN_PROVIDER_LDAP_SEARCH_BASE_PLACEHOLDER": "请输入search base",
    "SYSTEM_LOGIN_PROVIDER_LDAP_USERNAME_PROPERTY_KEY": "用户名属性名",
    "SYSTEM_LOGIN_PROVIDER_LDAP_USERNAME_PROPERTY_KEY_PLACEHOLDER": "请输入用户名属性名",
    "SYSTEM_LOGIN_PROVIDER_LDAP_EMAIL_PROPERTY_KEY": "电子邮箱属性名",
    "SYSTEM_LOGIN_PROVIDER_LDAP_EMAIL_PROPERTY_KEY_PLACEHOLDER": "请输入电子邮箱属性名",
    "SYSTEM_LOGIN_PROVIDER_LDAP_DISPLAY_NAME_PROPERTY_KEY": "显示名称属性名",
    "SYSTEM_LOGIN_PROVIDER_LDAP_DISPLAY_NAME_PROPERTY_KEY_PLACEHOLDER": "请输入显示名称属性名",
    "SYSTEM_LOGIN_PROVIDER_LDAP_LOGIN_HINT": "登录提示",
    "SYSTEM_LOGIN_PROVIDER_LDAP_LOGIN_HINT_DEFAULT": "请使用域帐号进行登录",
    "SYSTEM_LOGIN_PROVIDER_LDAP_LOGIN_HINT_PLACEHOLDER": "请输入登录提示",
    "SYSTEM_LOGIN_PROVIDER_LDAP_USERNAME_INPUT_PLACEHOLDER_TEXT": "用户名提示文字",
    "SYSTEM_LOGIN_PROVIDER_LDAP_USERNAME_INPUT_PLACEHOLDER_TEXT_DEFAULT": "域帐号",
    "SYSTEM_LOGIN_PROVIDER_LDAP_USERNAME_INPUT_PLACEHOLDER_TEXT_PLACEHOLDER": "请输入用户名提示文字",

    "SYSTEM_JOB_EXTENSION_SEARCH": "按名称或ID搜索",
    "SYSTEM_JOB_EXTENSION_ADD_EXTENSION": "添加插件",
    "SYSTEM_JOB_EXTENSION_NO_RESULT": "没有结果",
    "SYSTEM_JOB_EXTENSION_NAME": "名称",
    "SYSTEM_JOB_EXTENSION_EXTENSION_ADDRESS": "插件地址",
    "SYSTEM_JOB_EXTENSION_ACTIONS": "操作",
    "SYSTEM_JOB_EXTENSION_ACTIONS_EDIT": "编辑",
    "SYSTEM_JOB_EXTENSION_ACTIONS_DETAILS": "插件详情",
    "SYSTEM_JOB_EXTENSION_ACTIONS_DELETE": "删除",

    "SYSTEM_JOB_EXTENSION_ADD": "添加构建任务插件",
    "SYSTEM_JOB_EXTENSION_METADATA_JSON_URL": "插件元数据JSON地址",
    "SYSTEM_JOB_EXTENSION_METADATA_JSON_URL_PLACEHOLDER": "请输入插件元数据JSON地址",
    "SYSTEM_JOB_EXTENSION_AUTHORIZATION_TOKEN": "身份验证令牌",
    "SYSTEM_JOB_EXTENSION_AUTHORIZATION_TOKEN_PLACEHOLDER": "请输入身份验证令牌",
    "SYSTEM_JOB_EXTENSION_ADD_EXTENSION": "添加插件",
    "SYSTEM_JOB_EXTENSION_EDIT": "编辑构建任务插件",

    "SYSTEM_WIDGET_SEARCH": "按名称或ID搜索",
    "SYSTEM_WIDGET_ADD": "添加组件",
    "SYSTEM_WIDGET_NO_RESULT": "没有结果",
    "SYSTEM_WIDGET_NAME": "名称",
    "SYSTEM_WIDGET_ACTIONS": "操作",
    "SYSTEM_WIDGET_ACTIONS_EDIT": "编辑",
    "SYSTEM_WIDGET_ACTIONS_DELETE": "删除",

    "SYSTEM_WIDGET_IMPORT_JSON": "导入组件JSON",
    "SYSTEM_WIDGET_ONLINE_EDIT": "在线编辑",

    "SYSTEM_WIDGET_IMPORT_JSON_CLICK": "点击上方图标上传组件JSON",

    "SYSTEM_WIDGET_CREATE_WIDGET": "创建组件",
    "SYSTEM_WIDGET_WIDGET_ID": "组件ID",
    "SYSTEM_WIDGET_WIDGET_ID_PLACEHOLDER": "请输入组件ID, 0-9, a-z, A-Z, ._-",
    "SYSTEM_WIDGET_WIDGET_NAME": "组件名称",
    "SYSTEM_WIDGET_WIDGET_NAME_PLACEHOLDER": "请输入组件名称",
    "SYSTEM_WIDGET_WIDGET_DESCRIPTION": "组件说明",
    "SYSTEM_WIDGET_WIDGET_DESCRIPTION_PLACEHOLDER": "请输入组件说明",
    "SYSTEM_WIDGET_CREATE": "创建",

    "SYSTEM_WIDGET_EDIT_SAVE": "保存",
    "SYSTEM_WIDGET_EDIT_DISCARD": "撤销",
    "SYSTEM_WIDGET_EDIT_EXPORT_TO_JSON": "导出为JSON",
    "SYSTEM_WIDGET_EDIT_SETTINGS": "设置",
    "SYSTEM_WIDGET_EDIT_NEW_FILE": "新建文件",
    "SYSTEM_WIDGET_EDIT_UPLOAD_FILE": "上传文件",
    "SYSTEM_WIDGET_EDIT_NEW_FOLDER": "新建文件夹",
    "SYSTEM_WIDGET_EDIT_RENAME": "重命名",
    "SYSTEM_WIDGET_EDIT_DELETE": "删除",
    "SYSTEM_WIDGET_ICON_URL": "图标URL",
    "SYSTEM_WIDGET_ICON_URL_PLACEHOLDER": "请输入图标URL",
    "SYSTEM_WIDGET_WIDGET_ENTRY": "组件入口",
    "SYSTEM_WIDGET_WIDGET_ENTRY_PLACEHOLDER": "请输入组件入口",
    "SYSTEM_WIDGET_CONFIG_ENTRY": "配置入口",
    "SYSTEM_WIDGET_CONFIG_ENTRY_PLACEHOLDER": "请输入配置入口",

    "SYSTEM_SETTINGS": "系统设置",
    "SYSTEM_SETTINGS_SAVE": "保存",
    "SYSTEM_SETTINGS_DEVOPS_WEBSITE_NAME": "DevOps网站名称",
    "SYSTEM_SETTINGS_DEVOPS_WEBSITE_NAME_PLACEHOLDER": "请输入DevOps网站名称",
    "SYSTEM_SETTINGS_DEVOPS_WEBSITE_ICON": "DevOps网站图标URL",
    "SYSTEM_SETTINGS_DEVOPS_WEBSITE_ICON_PLACEHOLDER": "请输入DevOps网站图标URL",
    "SYSTEM_SETTINGS_GALLERY_WEBSITE_NAME": "市场网站名称",
    "SYSTEM_SETTINGS_GALLERY_WEBSITE_NAME_PLACEHOLDER": "请输入市场网站名称",
    "SYSTEM_SETTINGS_GALLERY_WEBSITE_ICON": "市场网站图标URL",
    "SYSTEM_SETTINGS_GALLERY_WEBSITE_ICON_PLACEHOLDER": "请输入市场网站图标URL",
    "SYSTEM_SETTINGS_ALLOW_USER_CREATE_PROJECT": "允许用户创建项目",
};