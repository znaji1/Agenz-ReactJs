import i18n from "i18next";
// import { exclude } from "query-string";

export const TRANSLATE = i18n;

export const INDEX_PAGE_SIZE_OPTIONS = [10, 20, 30, 40, 50];

export const DEFAULT_DATE_FORMAT = "DD/MM/YYYY";
export const DATE_TIME_FORMAT = "DD-MM-YYYY HH:mm:ss";

export const DATE_FIELD_FORMAT = "YYYY-MM-DD";

//arabic keyboard language

export const NUMBER_REGEX = /^\d*$/;
// export const NUMBER_REGEX = /^[0-9]*$/;
//const for email regular expression
export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PHONE_REGEX = /^\d{1,10}$/g;
/*-------------------------------------card request constants------------------------------------*/
