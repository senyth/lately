import type { Category } from '../types/Category';
import { api } from './client';

export const fetchCategories = () =>
  api.get<Category[]>('/categories').then((r) => r.data);

export const createCategory = (name: string) =>
  api.post<Category>('/categories', { name }).then((r) => r.data);
