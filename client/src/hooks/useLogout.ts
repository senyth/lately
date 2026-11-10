import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/client';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => api.post('/auth/logout'),
    onSuccess: () => {
      queryClient.setQueryData(['me'], null);
      queryClient.removeQueries({ predicate: (q) => q.queryKey[0] !== 'me' });
      navigate('/login', { replace: true });
    },
  });
}
