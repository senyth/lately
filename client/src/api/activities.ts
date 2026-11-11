import type { Activity } from '../types/Activity';
import { api } from './client';

export const fetchActivities = () =>
  api.get<Activity[]>('/activities').then((r) => r.data);
