import pool from './config/database';
import fs from 'fs';
import path from 'path';

async function initializeDatabase() {
  try {
    console.log('Initializing database...');

    const schemaPath = path.join(__dirname, 'config', 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf-8');

    await pool.query(schema);

    console.log('✓ Database tables created successfully');
    console.log('✓ Database initialized');

    process.exit(0);
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
}

initializeDatabase();
