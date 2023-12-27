import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { drizzle } from 'drizzle-orm/better-sqlite3/driver';
import Database from 'better-sqlite3';

const client = new Database('todos.db');
const db = drizzle(client);

async function main() {
  console.log('migration started...');
  migrate(db, { migrationsFolder: 'drizzle/migrations' });
  console.log('migration ended...');

  client.close();
  process.exit(0);
}

main().catch((err) => {
  console.log(err);
  process.exit(1);
});
