const browserify = require('gulp-browserify');
const gulp = require('gulp');


gulp.task('babelWWW', () => {
    gulp.src('./client.js')
        .pipe(browserify())
        .pipe(gulp.dest('./public/'));
});

gulp.task('default', [
    'babelWWW'
]);
