var gulp = require('gulp');
var cssmin = require('gulp-cssmin');

var autoprefixer = require('gulp-autoprefixer');

gulp.task('css',function(){
   gulp.src('./css/*.css')
   .pipe(cssmin())
   .pipe(autoprefixer({
      browsers:['last 5 versions']
      }))
   .pipe(gulp.dest('./css/'))
})