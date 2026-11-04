import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api/client';

interface Credentials {
  email: string;
  password: string;
}

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: Credentials) =>
      api.post('/auth/login', credentials).then((r) => r.data),
    onSuccess: (user) => queryClient.setQueryData(['me'], user),
  });
}
