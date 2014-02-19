fs = require('fs');
var target_build = process.argv[2];
//console.log(__filename);
var pwd = __dirname;
var js_path = pwd.substring(0,pwd.lastIndexOf('\\')) + '\\js';
console.log('js path : ' + js_path);
var app_path = js_path + '\\app';
console.log('js app path : ' +app_path);

var app_modules = [];
var global_modules = [];

//build json object
var build = {
	appDir: '../js',
    baseUrl: '.',
    dir: '../js-built',
    mainConfigFile: '../js/config.js',
    modules: [
        //First set up the common build layer.
        {
            //module names are relative to baseUrl
            name: 'config',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            include: []
        }
    ]
}

fs.readdir(app_path,function (err,files) {
	// body...
	if (err) throw err;
	for(var i in files){
		//put module in app_modules
		var dotindex = files[i].lastIndexOf('.');
		if(dotindex >= 0){
			var extension = files[i].substring(dotindex+1,files[i].length);
			if(extension == 'js'){
				app_modules.push({
					name: 'app/' + files[i].substring(0,dotindex),
            		exclude: ['config']
				});
			}
		}
	}

	for(var j in app_modules){
		build.modules.push(app_modules[j]);
	}
	
	fs.readdir(js_path,function (err,files){
		if (err) throw err;
		for(var i in files){
			//put module in app_modules
			var dotindex = files[i].lastIndexOf('.');
			if(dotindex >= 0){
				var extension = files[i].substring(dotindex+1,files[i].length);
				if (extension == 'js' && files[i] != 'require.js') { //exclude non-js and require.js itself
					global_modules.push(files[i].substring(0,dotindex));
				}
			}	
		}

		build.modules[0].include = global_modules;
		//console.log(build);
		var t = pwd + '\\' + target_build;
		console.log(t);
		var fd = fs.openSync(t, 'w');
		fs.closeSync(fd);
		var json = JSON.stringify(build);
		fs.writeFileSync(t, json);
	});
});