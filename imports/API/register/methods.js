import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
// import {bcrypt} from  'bcrypt'

import {RegisterUser} from './register.js'

const saltRounds = 10;
const someOtherPlaintextPassword = 'not_bacon';
export const insert = new ValidatedMethod({
  name: 'insert',
  validate: new SimpleSchema({
    email:{
      type:String
    },
    password:{
      type:String
    },
    org:{
      type:String
    }
  }).validator(),
  run({ email, password, org }) {
    const user = RegisterUser.findOne(email);
    if (user) {
      throw new Meteor.Error('user.insert.accessDenied',
        'user already exists');
    }
    let hashedPassword = password;
    // bcrypt.genSalt(saltRounds, function(err, salt) {
    //     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
    //         hashedPassword = hash;
    //     });
    // });
    const User = {
      email,
      hashedPassword,
      org
    };
    const x = RegisterUser.insert(User, {bypassCollection2: true});
    console.log(x);
    return "done";
  },
});