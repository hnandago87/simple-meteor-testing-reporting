import {Factory} from 'meteor/dburles:factory';
import {expect} from 'chai';
import StubCollections from 'meteor/hwillson:stub-collections';
import { RegisterUser } from './register';
import {insert} from './methods.js'

describe('Testing Register Component', function(done){
    StubCollections.stub(RegisterUser);
    it('Test inserting user registration', function(){
        const sampleUser = Factory.define('RegisterUser', RegisterUser, {
            email: () => "d@a.com",
            password: () => "12345",
            org: () => "A",
        });
        const id = insert.call({email:"a@a.com",password:"123",org:"B"});
        expect(id).to.not.be.null;
    })
    it('Test fetching User', function(){
        let testFetch = RegisterUser.findOne({email:"a@a.com"})
        expect(testFetch.hashedPassword).to.be.equal("123")
    })
})
//MOCHA_REPORTER=XUnit SERVER_TEST_REPORTER=reporter-file 
//spacejam test --driver-package cultofcoders:mocha --load-images=no --ssl-protocol=TLSv1 --xunit-out unit-integrational-results.html --port 7357
//spacejam test --driver-package centiq:testing --use-system-phantomjs --load-images=no --ssl-protocol=TLSv1 --xunit-out './unit-integrational-results.html' --output-encoding=utf8"