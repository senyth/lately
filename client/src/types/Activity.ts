export interface Activity {
  id: string;
  name: string;
  date: string;
}

export interface CreateActivityInput {
  name: string;
  categoryId: string;
}
