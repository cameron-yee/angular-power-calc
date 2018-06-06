'use strict';

// ----------------------------------------------------------------------
// Import modules
// ----------------------------------------------------------------------
// Gulp modules
const gulp = require('gulp'),
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
const sassFiles = 'src/styles/scss/*.scss',
      cssDest = 'src/styles/css/';

gulp.task('sass', () => {
  return gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    // autoprefixer, default configuration (browsers with over 1% market share, last 2 versions of all browsers, firefox esr, opera 12.1)
    .pipe(autoprefixer())
    .pipe(gulp.dest(cssDest));
});

const cssFile = 'src/styles/css/styles.css',
      cssMinDest = 'src/styles/css/min/';

gulp.task('cssmin', () => {
  return gulp.src(cssFile)
    .pipe(rename('styles.min.css'))
    // clean and minify the css, add compatibility for internet explorer
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(cssMinDest));
});

// processing order matters
const cssMinFiles = [
      'src/styles/css/min/styles.min.css',
      ],
      cssConcatDest = 'src/styles/css/concat/';

// ----------------------------------------------------------------------
// JavaScript tasks
// ----------------------------------------------------------------------
const jsFile = 'src/javascript/script.js',
      jsMinDest = 'src/javascript/min/';

gulp.task('scriptmin', () => {
  return gulp.src(jsFile)
    .pipe(rename('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsMinDest));
});

gulp.task('watch', () => {
  gulp.watch(sassFiles, gulp.series('sass','cssmin'));
  gulp.watch(jsFile, gulp.series('scriptmin'));
});
