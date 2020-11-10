const { series } = require('gulp');
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    prefix = require('gulp-autoprefixer'),
    sas = require('gulp-sass'),
    pug = require('gulp-pug'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify'),
    notify = require('gulp-notify');

    gulp.task('html',async function(){

        return gulp.src('stage/html/**/*.*')
                .pipe(sourcemaps.init())
                .pipe(pug({pretty:true}))
                .pipe(sourcemaps.write('.'))
                .pipe(gulp.dest('dist/html'))
                .pipe(livereload());
  
  })
  gulp.task('html-1',async function(){

    return gulp.src('stage/html-1/**/*.*')
            .pipe(sourcemaps.init())
            .pipe(pug({pretty:true}))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist/html'))
            .pipe(livereload());

})
gulp.task('html-2',async function(){

  return gulp.src('stage/html-2/**/*.*')
          .pipe(sourcemaps.init())
          .pipe(pug({pretty:true}))
          .pipe(sourcemaps.write('.'))
          .pipe(gulp.dest('dist/html'))
          .pipe(livereload());

})
gulp.task('html-3',async function(){

  return gulp.src('stage/html-3/**/*.*')
          .pipe(sourcemaps.init())
          .pipe(pug({pretty:true}))
          .pipe(sourcemaps.write('.'))
          .pipe(gulp.dest('dist/html'))
          .pipe(livereload());

})
gulp.task('html-4',async function(){

  return gulp.src('stage/html-4/**/*.*')
          .pipe(sourcemaps.init())
          .pipe(pug({pretty:true}))
          .pipe(sourcemaps.write('.'))
          .pipe(gulp.dest('dist/html'))
          .pipe(livereload());

})
gulp.task('html-5',async function(){

  return gulp.src('stage/html-5/**/*.*')
          .pipe(sourcemaps.init())
          .pipe(pug({pretty:true}))
          .pipe(sourcemaps.write('.'))
          .pipe(gulp.dest('dist/html'))
          .pipe(livereload());

})
  gulp.task("css",async function(){

    return gulp.src('stage/css/**/*.*')
           .pipe(sourcemaps.init())
           .pipe(prefix('last 4 version'))
           .pipe(sas())
           .pipe(concat('main.css'))
           .pipe(sourcemaps.write('.'))
           .pipe(gulp.dest('dist/css'))
           .pipe(livereload());

})
  gulp.task("js",async function(){

    return gulp.src('stage/js/*.*')
           .pipe(sourcemaps.init())
           .pipe(concat('main.js'))
           .pipe(minify())
           .pipe(sourcemaps.write('.'))
           .pipe(gulp.dest('dist/js'))
           .pipe(livereload());

})
  gulp.task('watch',function(){

    require('./server.js');
    livereload.listen();
    gulp.watch('stage/html/**/*.*',series('html'))
    gulp.watch('stage/html-1/**/*.*',series('html-1'))
    gulp.watch('stage/html-2/**/*.*',series('html-2'))
    gulp.watch('stage/html-3/**/*.*',series('html-3'))
    gulp.watch('stage/html-4/**/*.*',series('html-4'))
    gulp.watch('stage/html-5/**/*.*',series('html-5'))
    gulp.watch('stage/css/**/*.*',series('css'))
    gulp.watch('stage/js/*.*',series('js'))
   
   
   })