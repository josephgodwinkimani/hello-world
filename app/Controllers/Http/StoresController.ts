import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Store from "App/Models/Store";

export default class StoresController {

    public async index({ response }: HttpContextContract) {
   
        const managerid = "1"
        const results = await Store
                        .query()
                        .where('managerid', managerid)    
      
          if(results !== null){
              return results //json format
          } else {
              const invalidMSG = 'Sorry nothing here' ;
              return response.json({invalidMSG})                  
          }

  }
}
