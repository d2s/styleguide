var exec = require('child_process').exec,
	watcher = require('./modules/watcher'),
	livereloader = require('./modules/livereloader'),
	utils = require('./modules/utils');

var PORT = 9000;

watcher.start();
livereloader.start();

exec('cd ' + utils.basePath + '&& harp server', utils.puts);
exec('lsof -i tcp:' + PORT + ' | xargs kill', utils.puts);
exec('echo "Starting Server.." && echo "PROGRESS:94"', utils.puts);
exec('sleep 6 "Almost there!" && "PROGRESS:98"', utils.puts);
exec('sleep 15 && echo "Done! Enjoy!" && echo "PROGRESS:100" && open "http://localhost:' + PORT + '"', utils.puts);