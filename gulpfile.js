var gulp = require('gulp');

gulp.task('build_npm', function(){
	gulp.src(['src/**/*.d.ts', 'src/**/*.js', 'src/**/*.html', 'src/**/*.css', 'src/**/*.json'])
	.pipe(gulp.dest('dist'))
})