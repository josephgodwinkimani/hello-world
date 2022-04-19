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
  public manager_id: number

  @column()
  public store_name: string

  @column()
  public status: string

}
