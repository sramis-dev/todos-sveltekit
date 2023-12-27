import type { PageServerLoad } from './$types';
import { db } from '$lib/db';

export const load: PageServerLoad = async () => {
  const result = await db.query.todos.findMany({
    orderBy: (todos, { desc }) => [desc(todos.order)]
  });

  return {
    todos: result
  };
};
