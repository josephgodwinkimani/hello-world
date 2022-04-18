/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

/* All Stores
*
* Use a de facto way of handling HTTP requests
*
* API only routes
*
* When creating an API server, the routes to display the forms are redundant, 
* as you will be making those forms within your frontend or the mobile app. 
* You can remove those routes by calling the apiOnly method.
*
*/

//Route.get('stores', 'StoresController.index');
//Route.post('create', 'StoresController.create');

Route.resource('stores', 'StoresController').apiOnly() // 