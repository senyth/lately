import type { Category } from '../types/Category';
import { api } from './client';

export const fetchCategories = () =>
  api.get<Category[]>('/categories').then((r) => r.data);
