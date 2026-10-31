import { useQuery } from '@tanstack/react-query';
import { api } from '../api/client';

export function useAuth() {
  const { data: user, isPending } = useQuery({
    queryKey: ['me'],
    queryFn: () => api.get('/auth/me').then((r) => r.data),
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  return { user: user ?? null, isPending };
}
