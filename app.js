var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8080 
});
var path = require('path');

// ROUTES
server.route({
	method: 'GET',
	path: '/' ,
	handler: function(request, reply){
		reply.file('joaoTiago.html');
	}
});

server.route({
	method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: path.join(__dirname, './public')
        }
    } 
});

server.start(function(){
	console.log('Server running at: ', server.info.uri);
});
