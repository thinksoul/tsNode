import {Sequelize} from 'Sequelize'

export const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'sqlite',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  storage: 'D:/study/node/tsNode/src/db/tsnode.db'//我这里用的是绝对路径
})

export const db_connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

