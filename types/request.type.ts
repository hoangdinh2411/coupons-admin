export interface IResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  status?: number;
}

export interface IResponseWithTotal<T> {
  results: T;
  total: number;
}
