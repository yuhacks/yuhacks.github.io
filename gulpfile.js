const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Compile SCSS to CSS
function style() {
  // 1. Locate SCSS file
  return (
    gulp
      .src('./scss/**/*.scss')
      // 2. Pass that file through the SASS compiler
      .pipe(sass().on('error', sass.logError))
      // 3. Location to save the compiled CSS
      .pipe(gulp.dest('./dist/css/'))
      // 4. Stream changes to browser
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    online: true,
    tunnel: true
  });

  // On file change run style()
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./dist/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
