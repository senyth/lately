import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../api/client';

interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export function useRegister() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: RegisterInput) =>
      api.post('/auth/register', input).then((r) => r.data),
    onSuccess: (user) => queryClient.setQueryData(['me'], user),
  });
}
