var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        proxy: "localhost:8080"
    });

    gulp.watch("src/scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/scss/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
