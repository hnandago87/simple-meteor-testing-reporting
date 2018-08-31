import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class RegisterCollection extends Mongo.Collection {
    insert(doc, callback){
        const register = doc;
        // register.createdAt = register.createdAt || new Date();
        const result = super.insert(register, callback);
        return result;
    }
    update(selector, modifier) {
        const registered = super.update(selector, modifier);
        return registered;
    }
    remove(selector) {
        const registered = this.find(selector).fetch();
        const result = super.remove(selector);
        return result;
    }
}
export const RegisterUser = new RegisterCollection('register');
RegisterUser.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

RegisterUser.schema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  email: {
    type: String,
    max: 100,
    optional: true,
  },
  password: {
    type: String,
    max: 100,
    optional: true,
  },
  org: {
    type: String,
    max: 100,
    optional: true,
  }
});

RegisterUser.attachSchema(RegisterUser.schema);

// RegisterUser.publicFields = {
//   email: ,
//   createdAt: 
// };

RegisterUser.helpers({
  find(email) {
    console.log(email)
    return RegisterUser.findOne({email:email});
  },
});