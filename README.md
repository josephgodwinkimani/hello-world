### Get Started

Install dependencies `yarn install`

Try running Database migrations with command `node ace migration:run`

Error trying migrations:



Run `node ace serve --watch`

Visit `http://localhost:3333/stores`

Error `{"message":"Knex: Timeout acquiring a connection. The pool is probably full. Are you missing a .transacting(trx) call?","stack":"KnexTimeoutError: Knex: Timeout acquiring a connection. The pool is probably full. Are you missing a .transacting(trx) call?\n    at Client_MySQL.acquireConnection (C:\\Users\\home\\adonisjs\\hello-world\\node_modules\\knex\\lib\\client.js:310:26)\n    at QueryRunner.executeUsingManagedConnection (C:\\Users\\home\\adonisjs\\hello-world\\node_modules\\@adonisjs\\lucid\\build\\src\\QueryRunner\\index.js:112:28)\n    at ModelQueryBuilder.execQuery (C:\\Users\\home\\adonisjs\\hello-world\\node_modules\\@adonisjs\\lucid\\build\\src\\Orm\\QueryBuilder\\index.js:185:22)\n    at ModelQueryBuilder.exec (C:\\Users\\home\\adonisjs\\hello-world\\node_modules\\@adonisjs\\lucid\\build\\src\\Orm\\QueryBuilder\\index.js:654:24)\n    at StoresController.index (C:\\Users\\home\\adonisjs\\hello-world\\app\\Controllers\\Http\\StoresController.ts:10:25)\n    at Object.PreCompiler.runRouteHandler [as fn] (C:\\Users\\home\\adonisjs\\hello-world\\node_modules\\@adonisjs\\http-server\\build\\src\\Server\\PreCompiler\\index.js:47:31)\n    at Server.handleRequest (C:\\Users\\home\\adonisjs\\hello-world\\node_modules\\@adonisjs\\http-server\\build\\src\\Server\\index.js:108:13)"}`
