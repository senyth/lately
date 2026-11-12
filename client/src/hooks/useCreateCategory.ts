import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCategory } from '../api/categories';

export function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCategory,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    },
  });
}
