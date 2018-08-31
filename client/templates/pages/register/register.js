import { Template } from 'meteor/templating';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { insert } from '../../../../imports/API/register/methods.js';

Template.register.onCreated(function registerOnCreated(){
    this.registerUser=(user)=>{
        let temp = insert.call({email:user.email, password:user.password, org:user.org});
        console.log(temp)
    }
})

Template.register.events({
    "submit .sign-up":function(event){
        event.preventDefault();
        const instance = Template.instance();
        
        const random = Math.floor(Math.random()*3);
        let user = {email:event.target.email.value,password:event.target.password.value, org:getOrg()};
        instance.registerUser(user);
    }
})

function getOrg(){
    const orgs = ["A", "B", "C"];
    return orgs[Math.floor(Math.random()*3)+1];
}