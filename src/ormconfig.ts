import { ConnectionOptions } from 'typeorm';

// You can load you .env file here synchronously using dotenv package (not installed here),
// import * as dotenv from 'dotenv';
// import * as fs from 'fs';
// const environment = process.env.NODE_ENV || 'development';
// const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`));
// You can also make a singleton service that load and expose the .env file content.
// ...

// Check typeORM documentation for more information.
const config: ConnectionOptions = {
	type: 'postgres',
	host: '',
	port: 5432,
	username: "",
	password: "",
	database: "test",
	entities: [__dirname + '/db/**/*.entity{.ts,.js}'],

	// We are using migrations, synchronize should be set to false.
	synchronize: true,

	// Run migrations automatically,
	// you can disable this if you prefer running migration manually.
	migrationsRun: false,
	logging: false,
	logger: 'file',
	maxQueryExecutionTime: 1000,
	// Allow both start:prod and start:dev to use migrations
	// __dirname is either dist or src folder, meaning either
	// the compiled js in prod or the ts in dev.
	migrations: [__dirname + '/db/migrations/**/*{.ts,.js}'],
};

export = config;
