var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

// default
gulp.task('default', function(){
  console.log("I have configured a gulpfile");
  
});

// concatenate javascript files together
gulp.task('concat', function() {
  return gulp.src(['./client/js/app.js', './client/js/components/**/*.js'])
    .pipe(concat('scott-brown-dev.js'))
    .pipe(gulp.dest('./dist/'));
});



// compile sass
gulp.task('sass', function(){
  return gulp.src('./client/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    // NEED TO MAKE TICKET TO INVESTIGATE
    // .pipe(autoprefixer({
    //         browsers: ['last 2 versions'],
    //         cascade: false
    //     }))
    .pipe(gulp.dest('./client/css'))
    .pipe(gulp.dest('./dist/css'));
});

// minify javascript files

 
// uglify javascript files

// create auto-inject index.html file

