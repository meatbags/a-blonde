var gulp = require("gulp"),
	importResolve = require("import-resolve"),
	pathSCSS = "scss/",
	pathCSS = "assets/";

gulp.task("sass", function(){
	importResolve({
		"ext": "scss",
		"pathToMain": pathSCSS + "style.scss",
		"output": pathCSS + "alabama.scss.liquid"
	});
	return 1;
});

gulp.task('watch', function(){
	gulp.watch( [pathSCSS + "*.scss", pathSCSS + "**/*.scss"], ["sass"]); 
});