/**
 * Represents an error in an API response
 */
export interface ApiError {
  /**
   * The root error that caused this current error
   */
  causedBy?: ApiError;

  /**
   * The error category
   */
  category?: string;

  /**
   * The error description
   */
  description: string;

  /**
   * The error title
   */
  title?: string;
}

/**
 * Represents pager information from a set API response
 */
export interface ApiPager {
  /**
   * The current page
   */
  page: number;

  /**
   * The page size
   */
  pageSize: number;

  /**
   * The total number of items in the set
   */
  totalCount: number;

  /**
   * The total number of pages in the set
   */
  totalPages: number;
}

/**
 * Represents meta information from an API response
 */
export interface ApiMeta {
  /**
   * The pager for set API responses
   */
  pager?: ApiPager;

  /**
   * Any attached data provided by the API response
   */
  data?: Map<string, any>;
}

/**
 * A base implementation of an API response
 */
interface ApiResponseBase {
  /**
   * The set of errors that the API returned
   */
  errors?: ApiError[];

  /**
   * The metadata provided by the API
   */
  meta?: ApiMeta;
}

/**
 * Represents an API response for a single item
 */
export interface ApiResponse<T> extends ApiResponseBase {
  /**
   * The data payload from the API response
   */
  data: T;
}

/**
 * Represents an API response for a set of items
 */
export interface SetApiResponse<T> extends ApiResponseBase {
  /**
   * The data payload from the API response
   */
  data: T[];
}
