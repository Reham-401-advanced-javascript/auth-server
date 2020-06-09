'use strict';

require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET || 'mysecret';


class Model {
  constructor(schema) {
    this.schema = schema;
  }
  
  async saveUser(record) {
    // console.log('reeeeeeecoord',record);
    let db =await this.schema.find({ username: record.username } );
    if (!db.username) {
   
      record.password = await bcrypt.hash(record.password, 5);
      const newRecord = new this.schema(record);
      // console.log('reeeeeeecoord',record);

      return newRecord.save();
    }
    return Promise.reject(); 
    
  }
  async authenticateBasic (user, pass) {
    let userInfo = await this.schema.find({username : user});
    console.log('useeeeeeeeeeeeeeer',userInfo);
    const valid = await bcrypt.compare(pass, userInfo[0].password);
    return valid ? userInfo: Promise.reject('wrong password');
  }

  generateToken (user) {
    const token = jwt.sign({ username: user.username }, SECRET);
    return token;
  }

  async list() {
    console.log('liiiiiiiiiiiist',await this.schema.find({ }));

    return await this.schema.find({ });

  }
}
  
module.exports = Model;


