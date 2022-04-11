import { 
 JsonController,
 Get,
 Post,
 Body,
 Delete,
 Param,
 QueryParam
} from 'routing-controllers';

import {UserStore} from '../repository/UserStore'
import {UserModel} from '../model/UserModel'

@JsonController()
export class UserController {
  private userStore:UserStore

  constructor(userStore: UserStore){
    this.userStore = new UserStore()
  }

  @Post('/adduser')
  adduser(@Body() postData:UserModel) {
    return this.userStore.save(postData)
  }

  @Post('/updateUser')
  updateUser(@Body() postData:UserModel) {
    console.log(postData)
    return this.userStore.update(postData)
  }

  @Get('/getusers')
  getUsers(@QueryParam("name") name:string){
    if(name){
      return this.userStore.findOne(name)
    }
    return this.userStore.findAll()
  }

  @Delete('/deleteUserById')
  deleteUserById(@QueryParam("id") id:number) {
      return this.userStore.remove(id);
  }


}