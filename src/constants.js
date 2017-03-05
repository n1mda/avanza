/**
 * General settings
 */
export const BASE_URL = 'www.avanza.se'
export const PORT = 443
export const USER_AGENT = 'Avanza/se.avanza.iphone (2.12.0 - (#64); iOS 10.0.2)'
export const MAX_INACTIVE_MINUTES = '1440'

/**
 * Paths
 */
export const SOCKET_URL =               'wss://www.avanza.se/_push/cometd'
export const POSITIONS_PATH =           '/_mobile/account/positions'
export const OVERVIEW_PATH =            '/_mobile/account/overview'
export const ACCOUNT_OVERVIEW_PATH =    '/_mobile/account/{0}/overview'
export const DEALS_AND_ORDERS_PATH =    '/_mobile/account/dealsandorders'
export const WATCHLISTS_PATH =          '/_mobile/usercontent/watchlist'
export const WATCHLISTS_ADD_PATH =      '/_api/usercontent/watchlist/{0}/orderbooks/{1}'
export const STOCK_PATH =               '/_mobile/market/stock/{0}'
export const FUND_PATH =                '/_mobile/market/fund/{0}'
export const ORDERBOOK_PATH =           '/_mobile/order/{0}'
export const ORDERBOOK_LIST_PATH =      '/_mobile/market/orderbooklist/{0}'
export const CHARTDATA_PATH =           '/_mobile/chart/orderbook/{0}'
export const CHARTDATA_PATH_WEB =       '/ab/component/highstockchart/getchart/orderbook'
export const ORDER_PATH =               '/_api/order'
export const SEARCH_PATH =              '/_mobile/market/search/{0}'
export const AUTHENTICATION_PATH =      '/_api/authentication/sessions/username'
export const NOTIFICATION_DELETE_PATH = '/ab/larm/kurslarm/delete/{0}'
export const NOTIFICATION_CREATE_PATH = '/ab/larm/kurslarm/save'
export const INSPIRATION_LIST_PATH =    '/_mobile/marketing/inspirationlist/{0}'
export const TRANSACTIONS_PATH =        '/_mobile/account/transactions/{0}'

/**
 * Search
 */
export const STOCK = 'stock'
export const FUND = 'fund'
export const BOND = 'bond'
export const OPTION = 'option'
export const FUTURE_FORWARD = 'future_forward'
export const CERTIFICATE = 'certificate'
export const WARRANT = 'warrant'
export const ETF = 'exchange_traded_fund'
export const INDEX = 'index';
export const PREMIUM_BOND = 'premium_bond'
export const SUBSCRIPTION_OPTION = 'subscription_option'
export const EQUITY_LINKED_BOND = 'equity_linked_bond';
export const CONVERTIBLE = 'convertible';

/**
 * Chartdata
 */
export const TODAY = 'today';
export const ONE_MONTH = 'one_month';
export const THREE_MONTHS = 'three_months';
export const ONE_WEEK = 'one_week';
export const THIS_YEAR = 'this_year';
export const ONE_YEAR = 'one_year';
export const FIVE_YEARS = 'five_years';

/**
 * Notifications
 */
export const PUSH_NOTIFICATION = 'PUSH_NOTIFICATION'
export const EMAIL = 'EMAIL'
export const SMS = 'SMS'
export const ABOVE_OR_EQUAL = 'ABOVE'
export const BELOW_OR_EQUAL = 'BELOW'

/**
 * Marketing
 */
export const HIGHEST_RATED_FUNDS = 'HIGHEST_RATED_FUNDS'
export const LOWEST_FEE_INDEX_FUNDS = 'LOWEST_FEE_INDEX_FUNDS'
export const BEST_DEVELOPMENT_FUNDS_LAST_THREE_MONTHS = 'BEST_DEVELOPMENT_FUNDS_LAST_THREE_MONTHS'
export const MOST_OWNED_FUNDS = 'MOST_OWNED_FUNDS'
