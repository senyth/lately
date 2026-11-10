import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api/client';
import { useNavigate } from 'react-router-dom';

interface Credentials {
  email: string;
  password: string;
}

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (credentials: Credentials) =>
      api.post('/auth/login', credentials).then((r) => r.data),
    onSuccess: (user) => {
      queryClient.setQueryData(['me'], user);
      navigate('/activities');
    },
  });
}
