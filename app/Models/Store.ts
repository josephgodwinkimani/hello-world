/*
 * hello-world
 *
 * Joseph Godwin Kimani <josephgodwinke@gmail.com>
 *
 * 
 */

import { DateTime } from 'luxon'
import { column, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class Store extends BaseModel {
   
  public static table = 'stores'

  @column({ isPrimary: true })
  public id: number

  @column()
  public managerID: number

  @column()
  public location: string

  @column()
  public status: string

  @column()
  public storePhoto: string 

  @column()
  public created_by: string

  /*
  * https://github.com/adonisjs/core/discussions/3298
  */

  @column.dateTime({
    autoCreate: true,
    serialize: (value: DateTime | null) => {
      return value ? value.toFormat('yyyy-MM-dd HH:mm:ss') : value
    },
  })
  public created_at: DateTime

  @column()
  public updated_by: string

  @column.dateTime({ 
    autoCreate: true, 
    autoUpdate: true,
    serialize: (value: DateTime | null) => {
      return value ? value.toFormat('yyyy-MM-dd HH:mm:ss') : value
    }, 
  })
  public updated_at: DateTime

}
