import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabase';

export const load: PageServerLoad = async () => {
  const { data } = await supabase.from('todos').select();

  return {
    todos: data ?? []
  };
};
