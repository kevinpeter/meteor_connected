Meteor.startup(function(){
	Blaze.render(Template.connected, $('body').get(0));
});