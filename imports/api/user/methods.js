import { Meteor } from 'meteor/meteor';
import  Future  from 'fibers/future'

Meteor.methods({
  'signup' : (obj) => {
    let future = new Future()
    let userId = Accounts.createUser({ ...obj });
      if(!userId) {
        future.throw(err);
      } else {
        future.return(userId)
      }
    return future.wait();
  }
})