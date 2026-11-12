import type { Activity, CreateActivityInput } from '../types/Activity';
import { api } from './client';

export const fetchActivities = () =>
  api.get<Activity[]>('/activities').then((r) => r.data);

export const createActivity = (input: CreateActivityInput) =>
  api.post<Activity>('/activities', input).then((r) => r.data);
