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
    const token = jwt.sign({ username: user.username }, SECRET,{expiresIn:60*15});//{expiresIn:60*15 to convert 15 min to second}
    return token;
  }

  async authenticateToken (token) {
    console.log('ttttttttttttoken',token);
    // akjsndlaksnd.34naliendiasnd.3nksabndfw334ng
    try {
      const tokenObject = await jwt.verify(token, SECRET);
      console.log('toooooooookenobject',tokenObject);
      // tokenObject = {username:"mahmoud",iat:91223238}
      
      if (tokenObject.username) {
        return Promise.resolve(tokenObject);
      } else {
        return Promise.reject('User is not found!');
      }
    } catch (e) {
      return Promise.reject(e.message);
    }
  }
  
  async list() {
    console.log('liiiiiiiiiiiist',await this.schema.find({ }));

    return await this.schema.find({ });

  }
}
  
module.exports = Model;


