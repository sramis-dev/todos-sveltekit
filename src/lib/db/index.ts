import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';

import * as schema from './schema';

const client = new Database('todos.db');
const db = drizzle(client, { schema });

export { db };
