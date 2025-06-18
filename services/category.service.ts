import customFetch, { IResponse } from './api';

interface Category {
  id: number;
  name: string;
}

interface GetCategoryResponse {
  data: Category[];
  total: number;
  page: number;
  limit: number;
}

export class CategoryService {
  static async getCategoryById(id: string | number): Promise<IResponse<GetCategoryResponse>> {
    const param = `/${id}`;
    return await customFetch<GetCategoryResponse>(`/categories${param}`, {
      method: 'GET',
    });
  }
  static async getCategories(
    page: number = 1,
    limit: number = 10
  ): Promise<IResponse<GetCategoryResponse>> {
    const query = `?page=${page}&limit=${limit}`;
    return await customFetch<GetCategoryResponse>(`/categories${query}`, {
      method: 'GET',
    });
  }
  static async updateCategoryById(
    id: string | number,
    payload: Category
  ): Promise<IResponse<GetCategoryResponse>> {
    const param = `/${id}`;
    return await customFetch<GetCategoryResponse>(`/categories${param}`, {
      method: 'PATCH',
      body: JSON.stringify(payload),
    });
  }

  static async createCategoryById(
    id: string | number,
    payload: Category
  ): Promise<IResponse<GetCategoryResponse>> {
    const param = `/${id}`;
    return await customFetch<GetCategoryResponse>(`/categories${param}`, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }
}

export default CategoryService;
