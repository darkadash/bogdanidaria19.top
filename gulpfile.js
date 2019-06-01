const gulp = require('gulp');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

gulp.task('default', function () {
  return gulp.src('css/*.css')
    .pipe(minifyCSS())
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('build/css'))
});
