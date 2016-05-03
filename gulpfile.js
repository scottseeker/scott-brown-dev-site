var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var minify = require('gulp-minify');
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

// default
gulp.task('default', function(){
});

gulp.task('dev', ['sass']);

gulp.task('prod',['prod-js', 'sass'], function() {
    console.log('production build >>');
    runSequence('prod-index', 'prod-rename-index');
});

gulp.task('prod-js', function() {
    return gulp.src(['./client/js/app.js', './client/js/components/**/*.js'])
    .pipe(concat('scott-brown-dev.js'))
    .pipe(minify({
        ext: {
            src:'-debug.js',
            min:'.js',
            mangle: true
        }
        }))
    .pipe(gulp.dest('./dist/js/'));
});

// concatenate javascript files together
gulp.task('concat-js', function() {
  return gulp.src(['./client/js/**/*.js'])
    .pipe(concat('scott-brown-dev.js'))
    .pipe(gulp.dest('./dist/js/'));
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
        .pipe(gulp.dest('./dist/js/'));
});

// uglify javascript files

// compile sass
gulp.task('sass', function(){
   
  return gulp.src('./client/scss/**/*.scss')
    .pipe(sass())    
    .pipe(autoprefixer('last 2 versions')) // TO DO: this does not seem to be doing anything, investigate
    .pipe(gulp.dest('./client/css'))
    .pipe(gulp.dest('./dist/css'));
});

// create auto-inject index.html file
gulp.task('prod-index', function () {
  var target = gulp.src('./client/index-inject.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp.src(['./js/scott-brown-dev.js', './css/**/*.css'], {read: false, cwd: __dirname + '/dist'});
 
  return target.pipe(inject(sources, {
      ignorePath: ''
  }))
    .pipe(gulp.dest('./dist/'));    
});

gulp.task('prod-rename-index', function() {
   return gulp.src('./dist/index-inject.html')
       .pipe(clean())
       .pipe(rename("index.html"))
       .pipe(gulp.dest('./dist'));
});
