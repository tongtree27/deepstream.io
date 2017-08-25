'use strict'

exports.MESSAGE_SEPERATOR = String.fromCharCode(30) // ASCII Record Seperator 1E
exports.MESSAGE_PART_SEPERATOR = String.fromCharCode(31) // ASCII Unit Separator 1F

exports.SOURCE_MESSAGE_CONNECTOR = 'SOURCE_MESSAGE_CONNECTOR'
exports.ALL = 'ALL'

exports.LOG_LEVEL = {}
exports.LOG_LEVEL.DEBUG = 0
exports.LOG_LEVEL.INFO = 1
exports.LOG_LEVEL.WARN = 2
exports.LOG_LEVEL.ERROR = 3
exports.LOG_LEVEL.OFF = 100

exports.STATES = {}
exports.STATES.STOPPED = 'Stopped'
exports.STATES.LOGGER_INIT = 'LoggerInit'
exports.STATES.PLUGIN_INIT = 'PluginInit'
exports.STATES.SERVICE_INIT = 'ServiceInit'
exports.STATES.CONNECTION_ENDPOINT_INIT = 'ConnectionEndpointInit'
exports.STATES.RUNNING = 'Running'
exports.STATES.CONNECTION_ENDPOINT_SHUTDOWN = 'ConnectionEndpointShutdown'
exports.STATES.SERVICE_SHUTDOWN = 'ServiceShutdown'
exports.STATES.PLUGIN_SHUTDOWN = 'PluginShutdown'
exports.STATES.LOGGER_SHUTDOWN = 'LoggerShutdown'

exports.EVENT = {}
exports.EVENT.DEPRECATED = 'DEPRECATED'
exports.EVENT.TRIGGER_EVENT = 'TRIGGER_EVENT'
exports.EVENT.INCOMING_CONNECTION = 'INCOMING_CONNECTION'
exports.EVENT.INFO = 'INFO'
exports.EVENT.SUBSCRIBE = 'SUBSCRIBE'
exports.EVENT.UNSUBSCRIBE = 'UNSUBSCRIBE'
exports.EVENT.RECORD_DELETION = 'RECORD_DELETION'
exports.EVENT.INVALID_AUTH_MSG = 'INVALID_AUTH_MSG'
exports.EVENT.INVALID_AUTH_DATA = 'INVALID_AUTH_DATA'
exports.EVENT.AUTH_ATTEMPT = 'AUTH_ATTEMPT'
exports.EVENT.AUTH_ERROR = 'AUTH_ERROR'
exports.EVENT.TOO_MANY_AUTH_ATTEMPTS = 'TOO_MANY_AUTH_ATTEMPTS'
exports.EVENT.AUTH_SUCCESSFUL = 'AUTH_SUCCESSFUL'
exports.EVENT.CONNECTION_ERROR = 'CONNECTION_ERROR'
exports.EVENT.MESSAGE_PERMISSION_ERROR = 'MESSAGE_PERMISSION_ERROR'
exports.EVENT.MESSAGE_PARSE_ERROR = 'MESSAGE_PARSE_ERROR'
exports.EVENT.MAXIMUM_MESSAGE_SIZE_EXCEEDED = 'MAXIMUM_MESSAGE_SIZE_EXCEEDED'
exports.EVENT.MESSAGE_DENIED = 'MESSAGE_DENIED'
exports.EVENT.INVALID_MESSAGE_DATA = 'INVALID_MESSAGE_DATA'
exports.EVENT.CONNECTION_AUTHENTICATION_TIMEOUT = 'CONNECTION_AUTHENTICATION_TIMEOUT'
exports.EVENT.UNKNOWN_TOPIC = 'UNKNOWN_TOPIC'
exports.EVENT.UNKNOWN_ACTION = 'UNKNOWN_ACTION'
exports.EVENT.MULTIPLE_SUBSCRIPTIONS = 'MULTIPLE_SUBSCRIPTIONS'
exports.EVENT.NOT_SUBSCRIBED = 'NOT_SUBSCRIBED'
exports.EVENT.ACK_TIMEOUT = 'ACK_TIMEOUT'
exports.EVENT.RESPONSE_TIMEOUT = 'RESPONSE_TIMEOUT'
exports.EVENT.MULTIPLE_ACK = 'MULTIPLE_ACK'
exports.EVENT.MULTIPLE_RESPONSE = 'MULTIPLE_RESPONSE'
exports.EVENT.NO_RPC_PROVIDER = 'NO_RPC_PROVIDER'
exports.EVENT.INVALID_RPC_CORRELATION_ID = 'INVALID_RPC_CORRELATION_ID'
exports.EVENT.RECORD_LOAD_ERROR = 'RECORD_LOAD_ERROR'
exports.EVENT.RECORD_CREATE_ERROR = 'RECORD_CREATE_ERROR'
exports.EVENT.RECORD_UPDATE_ERROR = 'RECORD_UPDATE_ERROR'
exports.EVENT.RECORD_DELETE_ERROR = 'RECORD_DELETE_ERROR'
exports.EVENT.RECORD_SNAPSHOT_ERROR = 'RECORD_SNAPSHOT_ERROR'
exports.EVENT.RECORD_NOT_FOUND = 'RECORD_NOT_FOUND'
exports.EVENT.CACHE_RETRIEVAL_TIMEOUT = 'CACHE_RETRIEVAL_TIMEOUT'
exports.EVENT.STORAGE_RETRIEVAL_TIMEOUT = 'STORAGE_RETRIEVAL_TIMEOUT'
exports.EVENT.CLOSED_SOCKET_INTERACTION = 'CLOSED_SOCKET_INTERACTION'
exports.EVENT.CLIENT_DISCONNECTED = 'CLIENT_DISCONNECTED'
exports.EVENT.INVALID_MESSAGE = 'INVALID_MESSAGE'
exports.EVENT.VERSION_EXISTS = 'VERSION_EXISTS'
exports.EVENT.INVALID_VERSION = 'INVALID_VERSION'
exports.EVENT.PLUGIN_ERROR = 'PLUGIN_ERROR'
exports.EVENT.PLUGIN_INITIALIZATION_ERROR = 'PLUGIN_INITIALIZATION_ERROR'
exports.EVENT.PLUGIN_INITIALIZATION_TIMEOUT = 'PLUGIN_INITIALIZATION_TIMEOUT'
exports.EVENT.UNKNOWN_CALLEE = 'UNKNOWN_CALLEE'
exports.EVENT.DISTRIBUTED_STATE_ADD = 'DISTRIBUTED_STATE_ADD'
exports.EVENT.DISTRIBUTED_STATE_REMOVE = 'DISTRIBUTED_STATE_REMOVE'
exports.EVENT.DISTRIBUTED_STATE_REQUEST_FULL_STATE = 'DISTRIBUTED_STATE_REQUEST_FULL_STATE'
exports.EVENT.DISTRIBUTED_STATE_FULL_STATE = 'DISTRIBUTED_STATE_FULL_STATE'
exports.EVENT.CLUSTER_JOIN = 'CLUSTER_JOIN'
exports.EVENT.CLUSTER_LEAVE = 'CLUSTER_LEAVE'
exports.EVENT.INVALID_LEADER_REQUEST = 'INVALID_LEADER_REQUEST'
exports.EVENT.TIMEOUT = 'TIMEOUT'
exports.EVENT.LEADING_LISTEN = 'LEADING_LISTEN'
exports.EVENT.LOCAL_LISTEN = 'LOCAL_LISTEN'
exports.EVENT.UNSOLICITED_MSGBUS_MESSAGE = 'UNSOLICITED_MSGBUS_MESSAGE'
exports.EVENT.INVALID_MSGBUS_MESSAGE = 'INVALID_MSGBUS_MESSAGE'
exports.EVENT.INVALID_CONFIG_DATA = 'INVALID_CONFIG_DATA'
exports.EVENT.INVALID_STATE_TRANSITION = 'INVALID_STATE_TRANSITION'

exports.TOPIC = {}
exports.TOPIC.CONNECTION = 'C'
exports.TOPIC.AUTH = 'A'
exports.TOPIC.ERROR = 'X'
exports.TOPIC.EVENT = 'E'
exports.TOPIC.RECORD = 'R'
exports.TOPIC.RPC = 'P'
exports.TOPIC.PRESENCE = 'U'
exports.TOPIC.ONLINE_USERS = 'O'
exports.TOPIC.CLUSTER = 'CL'
exports.TOPIC.LEADER = 'L'
exports.TOPIC.LEADER_PRIVATE = 'LP_'
exports.TOPIC.PRIVATE = 'PRIVATE/'
exports.TOPIC.STATE_REGISTRY = 'STATE_REG'

exports.TOPIC.LISTEN = 'LI'
exports.TOPIC.PUBLISHED_SUBSCRIPTIONS = 'PS'
exports.TOPIC.LISTEN_PATTERNS = 'LIP'
exports.TOPIC.SUBSCRIPTIONS = 'SUB'

exports.ACTIONS = {}
exports.ACTIONS.PING = 'PI'
exports.ACTIONS.PONG = 'PO'
exports.ACTIONS.ACK = 'A'
exports.ACTIONS.READ = 'R'
exports.ACTIONS.CREATE = 'C'
exports.ACTIONS.UPDATE = 'U'
exports.ACTIONS.PATCH = 'P'
exports.ACTIONS.DELETE = 'D'
exports.ACTIONS.SUBSCRIBE = 'S'
exports.ACTIONS.UNSUBSCRIBE = 'US'
exports.ACTIONS.HAS = 'H'
exports.ACTIONS.HEAD = 'HD'
exports.ACTIONS.SNAPSHOT = 'SN'
exports.ACTIONS.LISTEN_SNAPSHOT = 'LSN'
exports.ACTIONS.LISTEN = 'L'
exports.ACTIONS.UNLISTEN = 'UL'
exports.ACTIONS.LISTEN_ACCEPT = 'LA'
exports.ACTIONS.LISTEN_REJECT = 'LR'
exports.ACTIONS.SUBSCRIPTION_HAS_PROVIDER = 'SH'
exports.ACTIONS.SUBSCRIPTIONS_FOR_PATTERN_FOUND = 'SF'
exports.ACTIONS.SUBSCRIPTION_FOR_PATTERN_FOUND = 'SP'
exports.ACTIONS.SUBSCRIPTION_FOR_PATTERN_REMOVED = 'SR'
exports.ACTIONS.CREATEORREAD = 'CR'
exports.ACTIONS.CREATEANDUPDATE = 'CU'
exports.ACTIONS.EVENT = 'EVT'
exports.ACTIONS.ERROR = 'E'
exports.ACTIONS.REQUEST = 'REQ'
exports.ACTIONS.RESPONSE = 'RES'
exports.ACTIONS.REJECTION = 'REJ'
exports.ACTIONS.STATUS = 'ST'
exports.ACTIONS.REMOVE = 'RM'
exports.ACTIONS.LEADER_REQUEST = 'LR'
exports.ACTIONS.LEADER_VOTE = 'LV'
exports.ACTIONS.LOCK_REQUEST = 'LRQ'
exports.ACTIONS.LOCK_RESPONSE = 'LRP'
exports.ACTIONS.LOCK_RELEASE = 'LRL'
exports.ACTIONS.CHALLENGE = 'CH'
exports.ACTIONS.CHALLENGE_RESPONSE = 'CHR'
exports.ACTIONS.WRITE_ACKNOWLEDGEMENT = 'WA'

exports.ACTIONS.LEADER_REQUEST = 'LR'
exports.ACTIONS.LEADER_VOTE = 'LV'
exports.ACTIONS.LOCK_REQUEST = 'LRQ'
exports.ACTIONS.LOCK_RESPONSE = 'LRP'
exports.ACTIONS.LOCK_RELEASE = 'LRL'

exports.ACTIONS.PRESENCE_JOIN = 'PNJ'
exports.ACTIONS.PRESENCE_LEAVE = 'PNL'
exports.ACTIONS.QUERY = 'Q'

exports.TYPES = {}
exports.TYPES.STRING = 'S'
exports.TYPES.OBJECT = 'O'
exports.TYPES.NUMBER = 'N'
exports.TYPES.NULL = 'L'
exports.TYPES.TRUE = 'T'
exports.TYPES.FALSE = 'F'
exports.TYPES.UNDEFINED = 'U'
