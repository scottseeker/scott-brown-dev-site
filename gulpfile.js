var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var minify = require('gulp-minify');


// default
gulp.task('default', function(){
  console.log("I have configured a gulpfile");
  
});

gulp.task('dev',['dev-js', 'sass']);

gulp.task('dev-js', function() {
    return gulp.src(['./client/js/app.js', './client/js/components/**/*.js'])
    .pipe(concat('scott-brown-dev.js'))
    .pipe(minify({
        ext: {
            src:'-debug.js',
            min:'.js'
        }
        }))
    .pipe(gulp.dest('./dist/'));
});

// concatenate javascript files together
gulp.task('concat-js', function() {
  return gulp.src(['./client/js/app.js', './client/js/components/**/*.js'])
    .pipe(concat('scott-brown-dev.js'))
    .pipe(gulp.dest('./dist/'));
});

// minify javascript files
gulp.task('minify-js', function() {
    return gulp.src('./client/js/**/*.js')
        .pipe(minify({
        ext: {
            src:'-debug.js',
            min:'.js'
        }
        }))
        .pipe(gulp.dest('./dist/'));
});

 
// uglify javascript files

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

// create auto-inject index.html file

