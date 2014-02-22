/**
* Templates
*/
Template.messages.messages = function () {
  return Messages.find({}, { sort: { time: -1 }, limit:10});
}


Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      if (Meteor.user()){
        var name = Meteor.user().profile.name;
        var picture_url = Meteor.user().profile.picture;
      }else{
        var name = 'Anônimo';
        var picture = 'http://www.anonysocial.com/file/pic/photo/25c5a7220baccd9548a5b929d81723fc_1024.jpg'
      }

      var message = document.getElementById('message');
      if (message.value != '') {
        Messages.insert({
          name: name,
          message: message.value,
          picture_url: picture, 
          time: Date.now(),
        });

        document.getElementById('message').value = '';
        message.value = '';

        
      }
    }
  }
}