### Get Started

Install dependencies `yarn install`

Try running Database migrations with command `node ace migration:run`

Error trying migrations:

```
 KnexTimeoutError 

 Knex: Timeout acquiring a connection. The pool is probably full. Are you missing a .transacting(trx) call?    

 at Client_MySQL.acquireConnection C:/Users/home/adonisjs/hello-world/node_modules/knex/lib/client.js:310   
  305|        debug('acquired connection from pool: %s', connection.__knexUid);
  306|        return connection;
  307|      } catch (error) {
  308|        let convertedError = error;
  309|        if (error instanceof TimeoutError) {
> 310|          convertedError = new KnexTimeoutError(
  311|            'Knex: Timeout acquiring a connection. The pool is probably full. ' +
  312|              'Are you missing a .transacting(trx) call?'
  313|          );
  314|        }
  315|        throw convertedError;

   1  QueryRunner.executeUsingManagedConnection
     C:/Users/home/adonisjs/hello-world/node_modules/@adonisjs/lucid/build/src/QueryRunner/index.js:112     

   2  MysqlDialect.releaseAdvisoryLock
     C:/Users/home/adonisjs/hello-world/node_modules/@adonisjs/lucid/build/src/Dialects/Mysql.js:179        

   3  Migrator.releaseLock
     C:/Users/home/adonisjs/hello-world/node_modules/@adonisjs/lucid/build/src/Migrator/index.js:293        

   4  Migrator.shutdown
     C:/Users/home/adonisjs/hello-world/node_modules/@adonisjs/lucid/build/src/Migrator/index.js:426        

   5  Migrator.run
     C:/Users/home/adonisjs/hello-world/node_modules/@adonisjs/lucid/build/src/Migrator/index.js:553        

   6  Migrate.runMigrations
     C:/Users/home/adonisjs/hello-world/node_modules/@adonisjs/lucid/build/commands/Migration/Base.js:133   

   7  Migrate.runAsSubCommand
     C:/Users/home/adonisjs/hello-world/node_modules/@adonisjs/lucid/build/commands/Migration/Run.js:108    

   8  Migrate.runAsMain
     C:/Users/home/adonisjs/hello-world/node_modules/@adonisjs/lucid/build/commands/Migration/Run.js:117    

   9  Migrate.run
     C:/Users/home/adonisjs/hello-world/node_modules/@adonisjs/lucid/build/commands/Migration/Run.js:124    
```

Run `node ace serve --watch`

Visit `http://localhost:3333/stores`

Expected Error:

`{"message":"Knex: Timeout acquiring a connection. The pool is probably full. Are you missing a .transacting(trx) call?","stack":"KnexTimeoutError: Knex: Timeout acquiring a connection. The pool is probably full. Are you missing a .transacting(trx) call?\n    at Client_MySQL.acquireConnection (C:\\Users\\home\\adonisjs\\hello-world\\node_modules\\knex\\lib\\client.js:310:26)\n    at QueryRunner.executeUsingManagedConnection (C:\\Users\\home\\adonisjs\\hello-world\\node_modules\\@adonisjs\\lucid\\build\\src\\QueryRunner\\index.js:112:28)\n    at ModelQueryBuilder.execQuery (C:\\Users\\home\\adonisjs\\hello-world\\node_modules\\@adonisjs\\lucid\\build\\src\\Orm\\QueryBuilder\\index.js:185:22)\n    at ModelQueryBuilder.exec (C:\\Users\\home\\adonisjs\\hello-world\\node_modules\\@adonisjs\\lucid\\build\\src\\Orm\\QueryBuilder\\index.js:654:24)\n    at StoresController.index (C:\\Users\\home\\adonisjs\\hello-world\\app\\Controllers\\Http\\StoresController.ts:10:25)\n    at Object.PreCompiler.runRouteHandler [as fn] (C:\\Users\\home\\adonisjs\\hello-world\\node_modules\\@adonisjs\\http-server\\build\\src\\Server\\PreCompiler\\index.js:47:31)\n    at Server.handleRequest (C:\\Users\\home\\adonisjs\\hello-world\\node_modules\\@adonisjs\\http-server\\build\\src\\Server\\index.js:108:13)"}`
