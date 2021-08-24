import type { Temporal } from 'https://raw.githubusercontent.com/js-temporal/temporal-polyfill/main/index.d.ts'

export type Arrays =
  | Array<Arrays>
  | Array<Maps>
  | Array<number>
  | Array<Records>
  | Array<Sets>
  | Array<string>
  | Array<Temporal.Calendar>
  | Array<Temporal.Duration>
  | Array<Temporal.PlainDate>
  | Array<Temporal.PlainDateTime>
  | Array<Temporal.ZonedDateTime>

export type Maps =
  | Map<string, Arrays>
  | Map<string, Maps>
  | Map<string, number>
  | Map<string, Records>
  | Map<string, Sets>
  | Map<string, string>
  | Map<string, Temporal.Calendar>
  | Map<string, Temporal.Duration>
  | Map<string, Temporal.PlainDate>
  | Map<string, Temporal.PlainDateTime>
  | Map<string, Temporal.ZonedDateTime>

export type Records =
  | Record<string, { [key: string]: string | Records }>
  | Record<string, Arrays>
  | Record<string, Maps>
  | Record<string, number>
  | Record<string, Sets>
  | Record<string, string>
  | Record<string, Temporal.Calendar>
  | Record<string, Temporal.Duration>
  | Record<string, Temporal.PlainDate>
  | Record<string, Temporal.PlainDateTime>
  | Record<string, Temporal.ZonedDateTime>

export type Sets =
  | Set<Arrays>
  | Set<Maps>
  | Set<number>
  | Set<Records>
  | Set<Sets>
  | Set<string>
  | Set<Temporal.Calendar>
  | Set<Temporal.Duration>
  | Set<Temporal.PlainDate>
  | Set<Temporal.PlainDateTime>
  | Set<Temporal.ZonedDateTime>

export type State = Record<
  string,
  {
    name: string
    path?: Array<string>
    value?: Value
  }
>

export type FormState = Record<
  string,
  {
    name: string
    path?: Array<string>
    value?: Value
    touched: boolean
    dirty: boolean
  }
>

/*
	===== String sorting =====
*/
export type LanguageType = 'en' | 'fr'

export type LocaleCompareOptions = {
  language?: LanguageType | Array<LanguageType>
  options?: {
    ignorePunctuation?: boolean
    usage?: 'search' | 'sort'
    sensitivity?: 'base' | 'accent' | 'case' | 'variant'
    numeric?: boolean
    caseFirst?: 'upper' | 'lower' | 'false'
  }
}

export type Fraction = {
  denominator: number
  numerator: number
}

export type NumberDatatype = 'integer' | 'floatingPoint' | 'precision'

export type NumberFormat = typeof Intl.NumberFormat

export type DurationOptions = {
  years?: number
  months?: number
  weeks?: number
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
  milliseconds?: number
  microseconds?: number
  nanoseconds?: number
}

/*
	===== Value types =====
*/
export type ArrayValue = {
  readonly datatype: 'array'
  value: Arrays | string
  separator?: string | RegExp
}

export type BooleanValue = {
  readonly datatype: 'boolean'
  value: boolean
  permitIndeterminate?: boolean
}

export type CalendarValue = {
  readonly datatype: 'calendar'
  value: Temporal.Calendar | string
}

export type DurationValue = {
  readonly datatype: 'duration'
  value: Temporal.Duration | DurationOptions | string
}

export type EmptyValue = Record<string, unknown>

export type FractionValue = {
  readonly datatype: 'fraction'
  value: Fraction
  numberType?: 'integer' | 'bigint'
}

export type InstantValue = {
  readonly datatype: 'instant'
  value: Temporal.Instant | Date | string
}

export type IntegerValue = {
  readonly datatype: 'integer'
  value: number
  numberType?: 'integer' | 'bigint'
  format?: NumberFormat
}

export type ListValue = {
  readonly datatype: 'list'
  value: Arrays | string
  separator?: string | RegExp
}

export type MemberValue = {
  readonly datatype: 'member'
  value: unknown
}

export type MapValue = {
  readonly datatype: 'map'
  value: Maps | Records | string
  keyValueSeparator?: string | RegExp
  separator?: string | RegExp
}

export type MonthDayValue = {
  readonly datatype: 'monthDay'
  value: Temporal.PlainMonthDay | string
}

export type PlainDateValue = {
  readonly datatype: 'plainDate'
  value: Temporal.PlainDate | string | Date
}

export type PlainDateTimeValue = {
  readonly datatype: 'plainDateTime'
  value: Temporal.PlainDateTime | string | Date
}

export type PrecisionNumberValue = {
  readonly datatype: 'precision'
  value: number
  decimalPlaces: number
  format?: NumberFormat
}

export type RadianValue = {
  readonly datatype: 'radian'
  value: number
}

export type RealNumberValue = {
  readonly datatype: 'real'
  value: number
  format?: NumberFormat
  decimalPlaces?: number
}

export type RecordValue = {
  readonly datatype: 'map'
  value: Records | string
  keyValueSeparator?: string | RegExp
  separator?: string | RegExp
}

export type RegularExpressionValue = {
  readonly datatype: 'string'
  value: string
  flags?: string
  message?: string
}

export type SetValue = {
  readonly datatype: 'set'
  value: Sets | Arrays | string
  separator?: string | RegExp
}

export type StringValue = {
  readonly datatype: 'string'
  value: string
  matches?: RegExp
}

export type TimeZoneValue = {
  readonly datatype: 'timeZone'
  value: Temporal.TimeZone | string
}

export type YearMonthValue = {
  readonly datatype: 'yearMonth'
  value: Temporal.PlainYearMonth | string
}

export type ZonedDateTimeValue = {
  readonly datatype: 'zonedDateTime'
  value: Temporal.ZonedDateTime | string | Date
  timeZone?: Temporal.TimeZone | string
}

export type NonFractionValue =
  | PrecisionNumberValue
  | RealNumberValue
  | IntegerValue

export type NumberValue = NonFractionValue | FractionValue

export type DateTimeValue =
  | InstantValue
  | PlainDateTimeValue
  | PlainDateValue
  | ZonedDateTimeValue

export type Value =
  | ArrayValue
  | BooleanValue
  | CalendarValue
  | DateTimeValue
  | DurationValue
  | EmptyValue
  | ListValue
  | MapValue
  | MemberValue
  | NumberValue
  | RadianValue
  | RecordValue
  | RegularExpressionValue
  | SetValue
  | StringValue
  | TimeZoneValue

export type DateType = PlainDateValue | Date | string

export type DateTimeType = PlainDateTimeValue | Date | string

export type DateTimeWithTimeZoneType =
  | ZonedDateTimeValue
  | InstantValue
  | Date
  | string

export type AnyDateTimeValue = DateTimeType | DateTimeWithTimeZoneType
export type AnyDateValue = DateType | AnyDateTimeValue

export type ValueType =
  | string
  | boolean
  | number
  | Date
  | Temporal.PlainDate
  | Temporal.PlainDateTime
  | Temporal.PlainTime
  | Temporal.PlainYearMonth
  | Temporal.Instant
  | Temporal.Duration
  | Temporal.Calendar
  | Records
  | Arrays
  | Sets
  | Maps

export enum AjaxTrigger {
  onAbort = 'onabort',
  onError = 'onerror',
  onLoad = 'onload',
  onLoadEnd = 'onloadend',
  onLoadStart = 'onloadstart',
  onProgress = 'onprogress',
  onTimeout = 'ontimeout',
}

export enum ButtonLayout {
  ICON_ON_LEFT = 'ICON_ON_LEFT',
  ICON_ON_RIGHT = 'ICON_ON_RIGHT',
  ICON_ONLY = 'ICON_ONLY',
  ICON_OVER = 'ICON_OVER',
  ICON_UNDER = 'ICON_UNDER',
  TEXT_ONLY = 'TEXT_ONLY',
}

export enum ClipboardTrigger {
  onClipboardData = 'onclipboarddata',
}

export enum DateFormat {
  CUSTOM_DATE = 'CUSTOM_DATE',
  DATE = 'DATE',
  LONG_DATE = 'LONG_DATE',
  SHORT_DATE = 'SHORT_DATE',
}

export enum DateTimeFormat {
  CUSTOM_DATE_TIME = 'CUSTOM_DATE_TIME',
  DATE_TIME = 'DATE_TIME',
  LONG_DATE_TIME = 'LONG_DATE_TIME',
  SHORT_DATE_TIME = 'SHORT_DATE_TIME',
}

export enum DocumentLoadingTrigger {
  onDocumentContentLoaded = 'ondocumentcontentloaded',
  onReadyStateChange = 'onreadystatechange',
  onKeyUp = 'onkeyup',
}

export enum ElementFocusTrigger {
  onBlur = 'onblur',
  onFocus = 'onfocus',
  onFocusIn = 'onfocusin',
  onFocusOut = 'onfocusout',
}

export enum FileReaderTrigger {
  onAbort = 'onabort',
  onError = 'onerror',
  onLoad = 'onload',
  onLoadEnd = 'onloadend',
  onLoadStart = 'onloadstart',
  onProgress = 'onprogress',
}

export enum FormTrigger {
  onFormData = 'onformdata',
  onReset = 'onreset',
  onSubmit = 'onsubmit',
}

export enum FullScreenTrigger {
  onFullScreenChange = 'onfullscreenchange',
  onFullScreenError = 'onfullscreenerror',
}

export enum HistoryTrigger {
  onHashChange = 'onhashchange',
  onPageHide = 'onpagehide',
  onPageShow = 'onpageshow',
  onPopState = 'onpopstate',
}

export enum InputElementTrigger {
  onInput = 'oninput',
  onInvalid = 'oninvalid',
  onSearch = 'onsearch',
}

export enum InputTrigger {
  onBeforeInput = 'onbeforeinput',
  onInput = 'oninput',
  onChange = 'onchange',
}

export enum InterfaceEditMode {
  EDIT_ONLY = 'EDIT_ONLY',
  VIEW_ONLY = 'VIEW_ONLY',
  VIEW_AND_EDIT = 'VIEW_AND_EDIT',
}

export enum KeyboardTrigger {
  onKeyDown = 'onkeydown',
  onKeyPress = 'onkeypress',
  onKeyUp = 'onkeyup',
}

export enum MouseTrigger {
  onAuxClick = 'onauxclick',
  onClick = 'onclick',
  onContextMenu = 'oncontextmenu',
  onDblClick = 'ondblclick',
  onMouseDown = 'onmousedown',
  onMouseEnter = 'onmouseenter',
  onMouseLeave = 'onmouseleave',
  onMouseMove = 'onmousemove',
  onMouseOut = 'onmouseout',
  onMouseOver = 'onmouseover',
  onMouseUp = 'onmouseup',
}

export enum StringFormat {
  CAMEL_CASE = 'CAMEL_CASE',
  CREDIT_CARD_NUMBER = 'CREDIT_CARD_NUMBER',
  DOTTED_PATH = 'DOTTED_PATH',
  EMAIL_ADDRESS = 'EMAIL_ADDRESS',
  IPV4 = 'IPV4',
  IPV6 = 'IPV6',
  LOWERCASE = 'LOWERCASE',
  PASCAL_CASE = 'PASCAL_CASE',
  SCREAMING_SNAKE_CASE = 'SCREAMING_SNAKE_CASE',
  SENTENCE_CASE = 'SENTENCE_CASE',
  SNAKE_CASE = 'SNAKE_CASE',
  TELEPHONE_NUMBER = 'TELEPHONE_NUMBER',
  TITLE_CASE = 'TITLE_CASE',
  TRAIN_CASE = 'TRAIN_CASE',
  UPPERCASE = 'UPPERCASE',
  URL = 'URL',
  URN = 'URN',
}

export enum TimeFormat {
  CUSTOM_TIME = 'CUSTOM_TIME',
  TIME = 'TIME',
  LONG_TIME = 'LONG_TIME',
  SHORT_TIME = 'SHORT_TIME',
}

export enum TabStyle {
  CARDS = 'CARDS',
  ICON_TABS = 'ICON_TABS',
  TEXT_TABS = 'TEXT_TABS',
  TEXT_AND_ICON_TABS = 'TEXT_AND_ICON_TABS',
}

export enum TruncationMethod {
  ROUND_UP = 'ROUND_UP',
  ROUND_DOWN = 'ROUND_DOWN',
  ROUND = 'ROUND',
}

export enum TypeOfAction {
  BLOCK_DEFAULT = 'BLOCK_DEFAULT',
  LOAD_DATA = 'LOAD_DATA',
  SHOW_MODAL = 'SHOW_MODAL',
  LOG = 'LOG',
  MUTATE = 'MUTATE',
  QUERY = 'QUERY',
  SHOW_CONTEXT_MENU = 'SHOW_CONTEXT_MENU',
  UPDATE_STATE = 'UPDATE_STATE',
}

export enum TypeOfBoolean {
  ALLOW_INDETERMINATE = 'ALLOW_INDETERMINATE',
  ALLOW_MAYBE = 'ALLOW_MAYBE',
  FORCED_CHOICE = 'FORCED_CHOICE',
  INDETERMINATE_UNTIL_CHOSEN = 'INDETERMINATE_UNTIL_CHOSEN',
}

export enum TypeOfButton {
  ADD = 'ADD',
  CLEAR = 'CLEAR',
  CUSTOM = 'CUSTOM',
  REMOVE = 'REMOVE',
  RESET = 'RESET',
  SUBMIT = 'SUBMIT',
  TOGGLE = 'TOGGLE',
}

export enum TypeOfChoice {
  AUTO = 'AUTO',
  CHECKBOXES = 'CHECKBOXES',
  COMBOBOX = 'COMBOBOX',
  RADIO_BUTTONS = 'RADIO_BUTTONS',
  TAGS = 'TAGS',
  TOGGLES = 'TOGGLES',
}

export enum TypeOfColor {
  BRAND_PRIMARY = '#208365',
  BRAND_SECONDARY = '#364f38',
  BRAND_TERTIARY = '#e37371',
  BLACK = '#27323f',
  BASE_DARK = '#393d42',
  BASE_NEUTRAL = '#687079',
  BASE_LIGHT = '#9ca3ab',
  BORDER_DARK = '#a0a1a1',
  BORDER_NEUTRAL = '#dddddd',
  BORDER_LIGHT = '#f4f5f6',
  SHADOW_DARK = '#bababa40',
  SHADOW_NEUTRAL = '#cacbcc',
  SHADOW_LIGHT = '#3e434933',
  WHITE = '#fff',
}

export enum TypeOfComponent {
  ADDRESS_FIELD = 'ADDRESS_FIELD',
  AUTOCOMPLETE_FIELD = 'AUTOCOMPLETE_FIELD',
  BUTTON = 'BUTTON',
  BUTTON_BAR = 'BUTTON_BAR',
  CHOOSE_ONE_FIELD = 'CHOOSE_ONE_FIELD',
  CHOOSE_SOME_FIELD = 'CHOOSE_SOME_FIELD',
  COMPOSITE_FIELD = 'COMPOSITE_FIELD',
  DATE_FIELD = 'DATE_FIELD',
  DATE_RANGE_FIELD = 'DATE_RANGE_FIELD',
  DATE_TIME_FIELD = 'DATE_TIME_FIELD',
  DATE_TIME_RANGE_FIELD = 'DATE_TIME_RANGE_FIELD',
  EMAIL_FIELD = 'EMAIL_FIELD',
  FIELDSET = 'FIELDSET',
  HIDDEN_FIELD = 'HIDDEN_FIELD',
  INTEGER_FIELD = 'INTEGER_FIELD',
  MENU = 'MENU',
  MENU_FLYOUT = 'MENU_FLYOUT',
  MENU_ITEM = 'MENU_ITEM',
  MONEY_FIELD = 'MONEY_FIELD',
  NOTE = 'NOTE',
  NUMBER_RANGE_FIELD = 'NUMBER_RANGE_FIELD',
  ORDINAL_FIELD = 'ORDINAL_FIELD',
  PAGE = 'PAGE',
  PHONE_FIELD = 'PHONE_FIELD',
  PRECISION_NUMBER_FIELD = 'PRECISION_NUMBER_FIELD',
  READ_ONLY_FIELD = 'READ_ONLY_FIELD',
  REAL_NUMBER_FIELD = 'REAL_NUMBER_FIELD',
  SELECTOR_FIELD = 'SELECTOR_FIELD',
  SEPARATOR = 'SEPARATOR',
  TAB = 'TAB',
  TAB_SET = 'TAB_SET',
  TABS = 'TABS',
  TEXT_FIELD = 'TEXT_FIELD',
  TOOLBAR = 'TOOLBAR',
  TOOLBAR_BUTTON = 'TOOLBAR_BUTTON',
  TOOLBAR_GROUP = 'TOOLBAR_GROUP',
  URL_FIELD = 'URL_FIELD',
  YES_NO_FIELD = 'YES_NO_FIELD',
}

export enum TypeOfConstraint {
  AFTER_ALPHABETICALLY = 'AFTER_ALPHABETICALLY',
  AFTER_DATE = 'AFTER_DATE',
  AFTER_DATE_TIME = 'AFTER_DATE_TIME',
  AND = 'AND',
  AT_LEAST_N = 'AT_LEAST_N',
  AT_LEAST_N_CHARACTERS = 'AT_LEAST_N_CHARACTERS',
  AT_MOST_N = 'AT_MOST_N',
  AT_MOST_N_CHARACTERS = 'AT_MOST_N_CHARACTERS',
  BEFORE_ALPHABETICALLY = 'BEFORE_ALPHABETICALLY',
  BEFORE_DATE = 'BEFORE_DATE',
  BEFORE_DATE_TIME = 'BEFORE_DATE_TIME',
  CONFIRMATION = 'CONFIRMATION',
  DISJOINT_SET = 'DISJOINT_SET',
  EQUAL_TO = 'EQUAL_TO',
  EXACTLY_N_CHARACTERS = 'EXACTLY_N_CHARACTERS',
  FEWER_THAN_N_CHARACTERS = 'FEWER_THAN_N_CHARACTERS',
  IS_ARRAY = 'IS_ARRAY',
  IS_BOOLEAN = 'IS_BOOLEAN',
  IS_DATE = 'IS_DATE',
  IS_DATE_TIME = 'IS_DATE_TIME',
  IS_DURATION = 'IS_DURATION',
  IS_FRACTION = 'IS_FRACTION',
  IS_INSTANT = 'IS_INSTANT',
  IS_INTEGER = 'IS_INTEGER',
  IS_LIST = 'IS_LIST',
  IS_MAP = 'IS_MAP',
  IS_MEMBER = 'IS_MEMBER',
  IS_MONTH_DAY = 'IS_MONTH_DAY',
  IS_PRECISION = 'IS_PRECISION',
  IS_REAL = 'IS_REAL',
  IS_SET = 'IS_SET',
  IS_STRING = 'IS_STRING',
  IS_TIME_ZONE = 'IS_TIME_ZONE',
  IS_YEAR_MONTH = 'IS_YEAR_MONTH',
  IS_ZONED_DATE_TIME = 'IS_ZONED_DATE_TIME',
  LESS_THAN_N = 'LESS_THAN_N',
  MATCH = 'MATCH',
  MEMBER = 'MEMBER',
  MORE_THAN_N = 'MORE_THAN_N',
  MORE_THAN_N_CHARACTERS = 'MORE_THAN_N_CHARACTERS',
  NOT_AFTER_ALPHABETICALLY = 'NOT_AFTER_ALPHABETICALLY',
  NOT_BEFORE_ALPHABETICALLY = 'NOT_BEFORE_ALPHABETICALLY',
  NOT_EQUAL_TO = 'NOT_EQUAL_TO',
  ON_OR_AFTER_DATE = 'ON_OR_AFTER_DATE',
  ON_OR_BEFORE_DATE = 'ON_OR_BEFORE_DATE',
  OR = 'OR',
  ORDERED_LIST = 'ORDERED_LIST',
  OVERLAPPING_SET = 'OVERLAPPING_SET',
  REVERSED_LIST = 'REVERSED_LIST',
  SUBSET = 'SUBSET',
  SUPERSET = 'SUPERSET',
  XOR = 'XOR',
}

export enum TypeOfIcon {
  ADD = 'ADD',
  CUT = 'CUT',
  COPY = 'COPY',
  PASTE = 'PASTE',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
  PERSONAL = 'PERSONAL',
  SECURITY = 'SECURITY',
  TAX = 'TAX',
}

export enum TypeOfMatch {
  REGEXP = 'REGEXP',
  STRING = 'STRING',
}

export enum Operators {
  ABSOLUTE_VALUE = 'ABSOLUTE_VALUE',
  AND = 'AND',
  AVERAGE = 'AVERAGE',
  CASE = 'CASE',
  CONCATENATE = 'CONCATENATE',
  COSECANT = 'COSECANT',
  COSINE = 'COSINE',
  COTANGENT = 'COTANGENT',
  DEFAULT = 'DEFAULT',
  DIFFERENCE = 'DIFFERENCE',
  DURATION = 'DURATION',
  ELSE = 'ELSE',
  ELSE_IF = 'ELSE_IF',
  EQUAL_TO = 'EQUAL_TO',
  EXPONENT = 'EXPONENT',
  FROM_PERCENT = 'FROM_PERCENT',
  GREATER_THAN = 'GREATER_THAN',
  GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO',
  IDENTITY = 'IDENTITY',
  IF = 'IF',
  INJECT_VALUE = 'INJECT_VALUE',
  INSTANT = 'INSTANT',
  IS_DISJOINT = 'IS_DISJOINT',
  IS_EVEN = 'IS_EVEN',
  IS_MEMBER_OF = 'IS_MEMBER_OF',
  IS_NEGATIVE = 'IS_NEGATIVE',
  IS_ODD = 'IS_ODD',
  IS_OVERLAPPING = 'IS_OVERLAPPING',
  IS_POSITIVE = 'IS_POSITIVE',
  IS_SUBSET = 'IS_SUBSET',
  IS_SUPERSET = 'IS_SUPERSET',
  JOIN = 'JOIN',
  LESS_THAN = 'LESS_THAN',
  LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO',
  LOG = 'LOG',
  MATCH = 'MATCH',
  MAXIMUM = 'MAXIMUM',
  MEAN = 'MEAN',
  MEDIAN = 'MEDIAN',
  MINIMUM = 'MINIMUM',
  MODE = 'MODE',
  MODULO = 'MODULO',
  NATURAL_LOG = 'NATURAL_LOG',
  NEGATE = 'NEGATE',
  NOT = 'NOT',
  OR = 'OR',
  PAD = 'PAD',
  POWER = 'POWER',
  PRODUCT = 'PRODUCT',
  QUOTIENT = 'QUOTIENT',
  RADICAL = 'RADICAL',
  RANDOM = 'RANDOM',
  RECIPROCAL = 'RECIPROCAL',
  REMAINDER = 'REMAINDER',
  ROOT_MEAN_SQUARE = 'ROOT_MEAN_SQUARE',
  ROUND = 'ROUND',
  ROUND_DOWN = 'ROUND_DOWN',
  ROUND_UP = 'ROUND_UP',
  SECANT = 'SECANT',
  SINE = 'SINE',
  SPLIT = 'SPLIT',
  STANDARD_DEVIATION = 'STANDARD_DEVIATION',
  SUM = 'SUM',
  SWITCH = 'SWITCH',
  TANGENT = 'TANGENT',
  TO_BOOLEAN = 'TO_BOOLEAN',
  TO_FRACTION = 'TO_FRACTION',
  TO_INTEGER = 'TO_INTEGER',
  TO_LOWERCASE = 'TO_LOWERCASE',
  TO_PERCENT = 'TO_PERCENT',
  TO_PRECISION_NUMBER = 'TO_PRECISION_NUMBER',
  TO_REAL_NUMBER = 'TO_REAL_NUMBER',
  TO_SENTENCE_CASE = 'TO_SENTENCE_CASE',
  TO_TITLE_CASE = 'TO_TITLE_CASE',
  TO_UPPERCASE = 'TO_UPPERCASE',
  TRIM = 'TRIM',
  TRUNCATE = 'TRUNCATE',
  UNEQUAL_TO = 'UNEQUAL_TO',
  XOR = 'XOR',
}

export enum ReturnType {
  ARRAY = 'ARRAY',
  BOOLEAN = 'BOOLEAN',
  CALENDAR = 'CALENDAR',
  DURATION = 'DURATION',
  FRACTION = 'FRACTION',
  INSTANT = 'INSTANT',
  INTEGER = 'INTEGER',
  MAP = 'MAP',
  PLAIN_DATE = 'PLAIN_DATE',
  PLAIN_DATE_TIME = 'PLAIN_DATE_TIME',
  PRECISION_NUMBER = 'PRECISION_NUMBER',
  REAL_NUMBER = 'REAL_NUMBER',
  RECORD = 'RECORD',
  SET = 'SET',
  STRING = 'STRING',
  ZONED_DATE_TIME = 'ZONED_DATE_TIME',
}

export enum TypeOfSource {
  COOKIE_STORAGE = 'COOKIE_STORAGE',
  FETCH = 'FETCH',
  LOCAL_STORAGE = 'LOCAL_STORAGE',
  QUERY_STRING = 'QUERY_STRING',
  SESSION_STORAGE = 'SESSION_STORAGE',
  STATE = 'STATE',
  URL_PARAMS = 'URL_PARAMS',
}

export enum TypeOfTrigger {
  onAbort = 'onAbort',
  onAuxClick = 'onAuxClick',
  onBeforeInput = 'onBeforeInput',
  onBeforeUnload = 'onBeforeUnload',
  onBlur = 'onBlur',
  onChange = 'onChange',
  onCleanup = 'onCleanup',
  onClick = 'onClick',
  onClipboardData = 'onClipboardData',
  onContextMenu = 'onContextMenu',
  onDblClick = 'onDblClick',
  onDocumentContentLoaded = 'onDocumentContentLoaded',
  onError = 'onError',
  onFocus = 'onFocus',
  onFocusIn = 'onFocusIn',
  onFocusOut = 'onFocusOut',
  onFormData = 'onFormData',
  onFullScreenChange = 'onFullScreenChange',
  onFullScreenError = 'onFullScreenError',
  onHashChange = 'onHashChange',
  onInput = 'onInput',
  onInvalid = 'onInvalid',
  onKeyDown = 'onKeyDown',
  onKeyPress = 'onKeyPress',
  onKeyUp = 'onKeyUp',
  onLoad = 'onLoad',
  onLoadEnd = 'onLoadEnd',
  onLoadStart = 'onLoadStart',
  onMount = 'onMount',
  onMouseDown = 'onMouseDown',
  onMouseEnter = 'onMouseEnter',
  onMouseLeave = 'onMouseLeave',
  onMouseMove = 'onMouseMove',
  onMouseOut = 'onMouseOut',
  onMouseOver = 'onMouseOver',
  onMouseUp = 'onMouseUp',
  onPageHide = 'onPageHide',
  onPageShow = 'onPageShow',
  onPopState = 'onPopState',
  onProgress = 'onProgress',
  onReadyStateChange = 'onReadyStateChange',
  onReset = 'onReset',
  onSearch = 'onSearch',
  onSubmit = 'onSubmit',
  onTimeout = 'onTimeout',
  onUnload = 'onUnload',
}

export enum TypeOfTrim {
  BOTH = 'BOTH',
  LEFT = 'LEFT',
  NONE = 'NONE',
  RIGHT = 'RIGHT',
}

export enum TruncationType {
  CHARACTERS = 'CHARACTERS',
  LINES = 'LINES',
  NONE = 'NONE',
  ROUND = 'ROUND',
  ROUND_DOWN = 'ROUND_DOWN',
  ROUND_UP = 'ROUND_UP',
  TRUNCATE = 'TRUNCATE',
  WORDS = 'WORDS',
}

export enum TypeOfUpdate {
  MERGE = 'MERGE',
  REPLACE = 'REPLACE',
}

export enum WindowFocusTrigger {
  onBlur = 'onblur',
  onFocus = 'onfocus',
}

export enum WindowLoadingTrigger {
  onBeforeUnload = 'onbeforeunload',
  onLoad = 'onload',
  onUnload = 'onunload',
  DOM_CONTENT_LOAD_DATA = 'DOM_CONTENT_LOAD_DATA',
}

export type Calculator = () => Promise<Value>

export type AbsoluteValueCalculation = {
  operand: Calculation | NumberValue | number
  operatorType: Operators.ABSOLUTE_VALUE
}

export type AndCalculation = {
  operands: Array<Calculation>
  operatorType: Operators.AND
}

export type AverageCalculation = {
  operands: Array<Calculation>
  operatorType: Operators.AVERAGE
}

export type CaseCalculation = {
  condition: Calculation
  operatorType: Operators.CASE
  result: Calculation
}

export type ConcatenationCalculation = {
  operands: Array<Calculation>
  operatorType: Operators.CONCATENATE
}

export type CosecantCalculation = {
  operand: Calculation | RadianValue | number
  operatorType: Operators.COSECANT
}

export type CosineCalculation = {
  operand: Calculation | RadianValue | number
  operatorType: Operators.COSINE
}

export type CotangentCalculation = {
  operand: Calculation | RadianValue | number
  operatorType: Operators.COTANGENT
}

export type DefaultCalculation = {
  operatorType: Operators.DEFAULT
  result: Calculation
}

export type DifferenceCalculation = {
  decimalPlaces?: number
  minuend: Calculation | NumberValue | number
  operatorType: Operators.DIFFERENCE
  returnType: ReturnType
  subtrahend: Calculation | NumberValue | number
  truncationType?: TruncationType
}

export type DurationCalculation = {
  operatorType: Operators.DURATION
  operand: Calculation | DurationValue | string
}

export type ElseIfCalculation = {
  condition: Calculation
  operatorType: Operators.ELSE_IF
  result: Calculation
}

export type ElseCalculation = {
  operatorType: Operators.ELSE
  result: Calculation
}

export type EqualToCalculation = {
  operands: Array<Calculation | Value>
  operatorType: Operators.EQUAL_TO
}

export type ExponentCalculation = {
  exponent: Calculation | NumberValue | number
  operatorType: Operators.EXPONENT
}

export type FromPercentCalculation = {
  operand: Calculation | NumberValue | number
  operatorType: Operators.FROM_PERCENT
}

export type GreaterThanCalculation = {
  left: Calculation | NumberValue | number
  operatorType: Operators.GREATER_THAN
  right: Calculation | NumberValue | number
}

export type GreaterThanOrEqualToCalculation = {
  left: Calculation | NumberValue | number
  operatorType: Operators.GREATER_THAN_OR_EQUAL_TO
  right: Calculation | NumberValue | number
}

export type IdentityCalculation = {
  operatorType: Operators.IDENTITY
  operand: Calculation | Value | ValueType
}

export type IfCalculation = {
  condition: Calculation
  else?: ElseCalculation
  elsifs?: Array<ElseIfCalculation>
  operatorType: Operators.IF
  result: Calculation
}

export type InjectValueCalculation = {
  decimalPlaces?: number
  fallback: ValueType
  keyValueSeparator?: string | RegExp
  operatorType: Operators.INJECT_VALUE
  path: Array<string>
  query?: string
  returnType: ReturnType
  separator?: string | RegExp
  sourceType: TypeOfSource
  url?: string
}

export type InstantCalculation = {
  operand?: Calculation | Temporal.ZonedDateTime | Temporal.PlainDateTime
  operatorType: Operators.INSTANT
}

export type IsDisjointCalculation = {
  left: Calculation | SetValue | Sets | Arrays | string
  operatorType: Operators.IS_DISJOINT
  right: Calculation | SetValue | Sets | Arrays | string
}

export type IsEvenCalculation = {
  operand: Calculation
  operatorType: Operators.IS_EVEN
}

export type IsMemberOfCalculation = {
  left: Calculation | ValueType
  operatorType: Operators.IS_MEMBER_OF
  right: Calculation | SetValue | Sets | Arrays | string
}

export type IsNegativeCalculation = {
  operand: Calculation | NumberValue | number
  operatorType: Operators.IS_NEGATIVE
}

export type IsOddCalculation = {
  operand: Calculation
  operatorType: Operators.IS_ODD
}

export type IsOverlappingCalculation = {
  left: Calculation | SetValue | Sets | Arrays | string
  operatorType: Operators.IS_OVERLAPPING
  right: Calculation | SetValue | Sets | Arrays | string
}

export type IsPositiveCalculation = {
  operand: Calculation | NumberValue | number
  operatorType: Operators.IS_POSITIVE
}

export type IsSubsetCalculation = {
  left: Calculation | SetValue | Sets | Arrays | string
  operatorType: Operators.IS_SUBSET
  right: Calculation | SetValue | Sets | Arrays | string
}

export type IsSupersetCalculation = {
  left: Calculation | SetValue | Sets | Arrays | string
  operatorType: Operators.IS_SUPERSET
  right: Calculation | SetValue | Sets | Arrays | string
}

export type JoinCalculation = {
  operands: Array<Calculation>
  operatorType: Operators.JOIN
  separator: string
}

export type LessThanCalculation = {
  left: Calculation | NumberValue | number
  operatorType: Operators.LESS_THAN
  right: Calculation | NumberValue | number
}

export type LessThanOrEqualToCalculation = {
  left: Calculation | NumberValue | number
  operatorType: Operators.LESS_THAN_OR_EQUAL_TO
  right: Calculation | NumberValue | number
}

export type LogCalculation = {
  base: Calculation | NumberValue | number
  operand: Calculation | NumberValue | number
  operatorType: Operators.NATURAL_LOG
}

export type MatchCalculation = {
  operand: Calculation
  operatorType: Operators.MATCH
  pattern: string | RegExp
}

export type MaximumCalculation = {
  operands: Array<Calculation | NumberValue | number>
  operatorType: Operators.MAXIMUM
}

export type MeanCalculation = {
  operands: Array<Calculation | NumberValue | number>
  operatorType: Operators.MEAN
}

export type MedianCalculation = {
  operands: Array<Calculation | NumberValue | number>
  operatorType: Operators.MEDIAN
}

export type MinimumCalculation = {
  operands: Array<Calculation | NumberValue | number>
  operatorType: Operators.MINIMUM
}

export type ModeCalculation = {
  operands: Array<Calculation | NumberValue | number>
  operatorType: Operators.MODE
}

export type ModuloCalculation = {
  dividend: Calculation | NumberValue | number
  modulus: Calculation | NumberValue | number
  operatorType: Operators.MODULO
  returnType: ReturnType.INTEGER
}

export type NaturalLogCalculation = {
  operand: Calculation | NumberValue | number
  operatorType: Operators.NATURAL_LOG
}

export type NegateCalculation = {
  operand: Calculation | NumberValue | number
  operatorType: Operators.NEGATE
}

export type NotCalculation = {
  operand: Calculation | Value | ValueType
  operatorType: Operators.NOT
}

export type OrCalculation = {
  operands: Array<Calculation>
  operatorType: Operators.OR
}

export type PadCalculation = {
  character: string
  operand: Calculation
  operatorType: Operators.PAD
  padLength: number
}

export type PowerCalculation = {
  exponent: Calculation | NumberValue | number
  base: Calculation | NumberValue | number
  operatorType: Operators.POWER
}

export type ProductCalculation = {
  decimalPlaces?: number
  operands: Array<Calculation>
  operatorType: Operators.PRODUCT
  returnType: ReturnType
  truncationType?: TruncationType
}

export type QuotientCalculation = {
  decimalPlaces?: number
  dividend: Calculation | NumberValue | number
  divisor: Calculation | NumberValue | number
  operatorType: Operators.QUOTIENT
  returnType: ReturnType
  truncationType?: TruncationType
}

export type RadicalCalculation = {
  radicand: Calculation | NumberValue | number
  index: Calculation | NumberValue | number
  operatorType: Operators.RADICAL
}

export type RandomCalculation = {
  operand: Calculation
  operatorType: Operators.RANDOM
  seed?: number
}

export type ReciprocalCalculation = {
  operand: Calculation | NumberValue | number
  operatorType: Operators.RECIPROCAL
}

export type RemainderCalculation = {
  dividend: Calculation | NumberValue | number
  divisor: Calculation | NumberValue | number
  operatorType: Operators.REMAINDER
  returnType: ReturnType.INTEGER
}

export type RootMeanSquareCalculation = {
  operands: Array<Calculation>
  operatorType: Operators.ROOT_MEAN_SQUARE
}

export type RoundDownCalculation = {
  operand: Calculation
  operatorType: Operators.ROUND_DOWN
}

export type RoundCalculation = {
  decimals: number
  operand: Calculation
  operatorType: Operators.ROUND
}

export type RoundUpCalculation = {
  operand: Calculation
  operatorType: Operators.ROUND_UP
}

export type SecantCalculation = {
  operand: Calculation | RadianValue | number
  operatorType: Operators.SECANT
}

export type SineCalculation = {
  operand: Calculation | RadianValue | number
  operatorType: Operators.SINE
}

export type SplitCalculation = {
  operand: Calculation
  operatorType: Operators.SPLIT
  separator?: string
  matchType?: TypeOfMatch
}

export type StandardDeviationCalculation = {
  operands: Array<Calculation>
  operatorType: Operators.STANDARD_DEVIATION
}

export type SumCalculation = {
  decimalPlaces?: number
  operands: Array<Calculation | NumberValue | number>
  operatorType: Operators.SUM
  returnType: ReturnType
  truncationType?: TruncationType
}

export type SwitchCalculation = {
  condition: Calculation
  default?: DefaultCalculation
  cases?: Array<CaseCalculation>
  operatorType: Operators.SWITCH
}

export type TangentCalculation = {
  operand: Calculation | RadianValue | number
  operatorType: Operators.TANGENT
}

export type ToBooleanCalculation = {
  operand: Calculation | Value | ValueType
  operatorType: Operators.TO_BOOLEAN
}

export type ToFractionCalculation = {
  operand: Calculation | Value | ValueType
  operatorType: Operators.TO_FRACTION
}

export type ToIntegerCalculation = {
  operand: Calculation | Value | ValueType
  operatorType: Operators.TO_INTEGER
}

export type ToLowercaseCalculation = {
  operand: Calculation | StringValue | string
  operatorType: Operators.TO_LOWERCASE
}

export type ToPercentCalculation = {
  operand: Calculation | NumberValue | number
  operatorType: Operators.TO_PERCENT
}

export type ToPrecisionNumberCalculation = {
  operand: Calculation | NumberValue | number
  operatorType: Operators.TO_PRECISION_NUMBER
  decimalPlaces?: number
}

export type ToRealNumberCalculation = {
  operand: Calculation | NumberValue | number
  operatorType: Operators.TO_REAL_NUMBER
}

export type ToSentenceCaseCalculation = {
  operand: Calculation | StringValue | string
  operatorType: Operators.TO_SENTENCE_CASE
  separator?: string
  matchType?: TypeOfMatch
}

export type ToTitleCaseCalculation = {
  operand: Calculation | StringValue | string
  operatorType: Operators.TO_TITLE_CASE
  separator?: string
  matchType?: TypeOfMatch
}

export type ToUppercaseCalculation = {
  operand: Calculation | StringValue | string
  operatorType: Operators.TO_UPPERCASE
}

export type TrimCalculation = {
  operand: Calculation
  operatorType: Operators.TRIM
  pattern: string | RegExp
  trimType: TypeOfTrim
}

export type TruncateCalculation = {
  maxLength: number
  operand: Calculation
  operatorType: Operators.TRUNCATE
  symbolToAppend?: string
}

export type UnequalToCalculation = {
  operands: Array<Calculation | Value | ValueType>
  operatorType: Operators.UNEQUAL_TO
}

export type XorCalculation = {
  operands: Array<Calculation>
  operatorType: Operators.XOR
}

export type Calculation =
  | AbsoluteValueCalculation
  | AndCalculation
  | AverageCalculation
  | CaseCalculation
  | ConcatenationCalculation
  | CosecantCalculation
  | CosineCalculation
  | CotangentCalculation
  | DefaultCalculation
  | QuotientCalculation
  | DurationCalculation
  | ElseIfCalculation
  | ElseCalculation
  | EqualToCalculation
  | ExponentCalculation
  | FromPercentCalculation
  | GreaterThanCalculation
  | GreaterThanOrEqualToCalculation
  | IdentityCalculation
  | IfCalculation
  | InstantCalculation
  | IsDisjointCalculation
  | InjectValueCalculation
  | IsEvenCalculation
  | IsMemberOfCalculation
  | IsNegativeCalculation
  | IsOddCalculation
  | IsOverlappingCalculation
  | IsPositiveCalculation
  | IsSubsetCalculation
  | IsSupersetCalculation
  | JoinCalculation
  | LessThanCalculation
  | LessThanOrEqualToCalculation
  | LogCalculation
  | MatchCalculation
  | MaximumCalculation
  | MeanCalculation
  | MedianCalculation
  | MinimumCalculation
  | ModeCalculation
  | ModuloCalculation
  | ProductCalculation
  | NaturalLogCalculation
  | NegateCalculation
  | NotCalculation
  | OrCalculation
  | PadCalculation
  | PowerCalculation
  | RadicalCalculation
  | RandomCalculation
  | ReciprocalCalculation
  | RemainderCalculation
  | RootMeanSquareCalculation
  | RoundDownCalculation
  | RoundCalculation
  | RoundUpCalculation
  | SecantCalculation
  | SineCalculation
  | SplitCalculation
  | StandardDeviationCalculation
  | DifferenceCalculation
  | SumCalculation
  | SwitchCalculation
  | ToBooleanCalculation
  | ToFractionCalculation
  | ToIntegerCalculation
  | ToLowercaseCalculation
  | ToPercentCalculation
  | ToPrecisionNumberCalculation
  | ToRealNumberCalculation
  | ToSentenceCaseCalculation
  | ToTitleCaseCalculation
  | ToUppercaseCalculation
  | TrimCalculation
  | TruncateCalculation
  | UnequalToCalculation
  | XorCalculation
