import {Model, DataTypes,InferAttributes, InferCreationAttributes,CreationOptional, Op } from 'Sequelize'
import {sequelize} from '../db/dbconnect'
import {UserModel} from '../model/UserModel'

class User extends Model {
  declare id: number;
  declare name: string;
  declare profession: string;
  declare sect: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING,
      allowNull: false
    },
    profession: {
      type: new DataTypes.STRING,
      allowNull: true
    },
    sect: {
      type: new DataTypes.STRING,
      allowNull: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: true
  }
);


export class UserStore {

  static async initUserData(){
    await User.create({
      id:1,
      name:'陈平安',
      profession:'落魄山',
      sect:'剑修'
    });
  }

  static async createTable(){
    await await sequelize.sync();
    await this.initUserData();
    console.log('createTable -- users');
  }

  findAll(){
    return sequelize.sync().then(()=>User.findAll({
      raw:true
    }))
  }

  findOne(name:string){
    return sequelize.sync().then(()=>User.findAll({
        raw:true,
        where: {
          name:name
        }
      })) 
  }

  remove(id:number){
     return sequelize.sync().then(()=>User.destroy({
        where: {
          id: {
            [Op.eq]: id
          }
        }
    })) 
  }

  save(postData:UserModel) {
    const {name,profession,sect} = postData
    return sequelize.sync().then(()=>User.create({
        name,
        profession,
        sect
      })) 
  }

  update(postData:UserModel) {
    const {name,profession,sect, id} = postData
    return sequelize.sync().then(()=>User.update({
        name,
        profession,
        sect
      },{
        where:{
          id:id
        }
      }))
  }
}
