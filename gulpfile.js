'use strict';

// ----------------------------------------------------------------------
// Import modules
// ----------------------------------------------------------------------
// Gulp modules
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify-es').default,
    cleanCSS = require('gulp-clean-css'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

// ----------------------------------------------------------------------
// Sass/CSS tasks
// ----------------------------------------------------------------------
    // path to sass files
let sassFiles = 'src/styles/scss/*.scss',
    // destination for compiled css
    cssDest = 'src/styles/css/';

// build sass task
gulp.task('sass', function() {
  // grab all of the sass files
  // set the task as a promise (stream) letting the engine know that it should wait to resolve
  let stream = gulp.src(sassFiles)
    // compile the sass files and alert if there's any errors
    .pipe(sass().on('error', sass.logError))
    // autoprefixer, default configuration (browsers with over 1% market share, last 2 versions of all browsers, firefox esr, opera 12.1)
    .pipe(autoprefixer())
    // dump the compiled css file into the specified destination
    .pipe(gulp.dest(cssDest));
  // return the stream as the completion hint
  return stream;
});

    // path to our custom css file
let cssFile = 'src/styles/css/styles.css',
    // destination for the minified css file, also where third party minified files will live
    cssMinDest = 'src/styles/css/min/';

// minify css task
// identifies dependent task 'sass' that must be complete before this one begins
gulp.task('cssmin', ['sass'], function() {
  // grab the css file
  // set the task as a promise (stream) letting the engine know that it should wait to resolve
  let stream = gulp.src(cssFile)
    // give it a new name
    .pipe(rename('styles.min.css'))
    // clean and minify the css, add compatibility for internet explorer
    .pipe(cleanCSS({compatibility: 'ie8'}))
    // dump the minified file into the specified destination
    .pipe(gulp.dest(cssMinDest));
  // return the stream as the completion hint
  return stream;
});

// path to our minified css files, processing order matters
let cssMinFiles = [
      'src/styles/css/min/styles.min.css',
    ],
    // destination for the concatenated css file
    cssConcatDest = 'src/styles/css/concat/';

// concat css.min files task
// identifies dependent task 'cssmin' that must be complete before this one begins
// gulp.task('cssconcat', ['cssmin'], function(){
//   // grab all of the minified css files
//   // set the task as a promise (stream) letting the engine know that it should wait to resolve
//   let stream = gulp.src(cssMinFiles)
//     // concatenate all of the minified css files and place them into a new file called concat.css
//     .pipe(concat('concat.css'))
//     // dump the concatenated/minified css file into the specified destination
//     .pipe(gulp.dest(cssConcatDest));
//   // return the stream as the completion hint
//   return stream;
// });


// ----------------------------------------------------------------------
// JavaScript tasks
// ----------------------------------------------------------------------
    // path to our custom javascript file
let jsFile = 'src/javascript/script.js',
    jsMinDest = 'src/javascript/min/';

//minify javascript task
gulp.task('scriptmin', function() {
  // grab our custom javascript file
  // set the task as a promise (stream) letting the engine know that it should wait to resolve
  let stream = gulp.src(jsFile)
    // give it a new name
    .pipe(rename('script.min.js'))
    // minify our javascript file
    .pipe(uglify())
    // save the minified javascript file to the specified destination
    .pipe(gulp.dest(jsMinDest));
  // return the stream as the completion hint
  return stream;
});

// path to the minified javascript files, processing order matters
// let jsMinFiles = [
//       'power_calculator/javascript/min/script.min.js',
//     ],
//     // destination for the concatenated javascript file
//     jsConcatDest = 'power_calculator/javascript/concat/';
//
// // concatenate javascript task
// // identifies dependent task 'scriptmin' that must be complete before this one begins
// gulp.task('scriptconcat', ['scriptmin'], function() {
//   // grab our minified javascript files
//   // set the task as a promise (stream) letting the engine know that it should wait to resolve
//   let stream = gulp.src(jsMinFiles)
//     // concatenate all of the minified javascript files and place them into a new file called concat.js
//     .pipe(concat('concat.js'))
//     // dump the concatenated/minified javascript file into the specified destination
//     .pipe(gulp.dest(jsConcatDest));
//   // return the stream as the completion hint
//   return stream;
// });


// ----------------------------------------------------------------------
// Gulp Connect server
// ----------------------------------------------------------------------
// gulp.task('server', function() {
//     connect.server({
//       root: 'powcalc',
//       port: 400,
//       host: 'localhost',
//       fallback: 'powcalc/index.html'
//     });
// });


// ----------------------------------------------------------------------
// Livereload task
// * Note: livereload runs its own server on port 35729
//         this is where livereload.js is served from.
// ----------------------------------------------------------------------
// watch all sass, javascript, and template files for changes
// identifies dependent task 'server' that must be complete before this one begins (cannot reload if server is not running)
// gulp.task('watch', ['server'], function() {
gulp.task('watch', function() {
  // Fire up the live reload server whose base path starts in the power_calculator directory
  // livereload.listen({ basePath: 'powcalc' });

  // // if any of the sass files change carry out the specified gulp tasks
  // gulp.watch(sassFiles,['sass','cssmin','cssconcat']);

  // if any of the sass files change carry out the specified gulp tasks
  gulp.watch(sassFiles,['sass','cssmin']);

  // When the minified css file changes, then reload.
  // gulp.watch('**/styles/css/min/*').on('change', livereload.changed);

  // // if script.js changes carry out the specified gulp tasks
  // gulp.watch(jsFile,['scriptmin','scriptconcat']);

  // if script.js changes carry out the specified gulp task
  gulp.watch(jsFile,['scriptmin']);

  // When the minified JavaScript file changes, then reload.
  // gulp.watch('**/javascript/min/*').on('change', livereload.changed);

  // Reload when javascript files change
  // gulp.watch('**/javascript/*').on('change', livereload.changed);
  // gulp.watch('**/javascript/**/*').on('change', livereload.changed);

  // // Reload when html files change
  // gulp.watch('**/*.html').on('change', livereload.changed);
  // gulp.watch('**/templates/**/*').on('change', livereload.changed);
});
