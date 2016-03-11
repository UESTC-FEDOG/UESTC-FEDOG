var gulp = require('gulp'),
    bs = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');
    
gulp.task('watch', function () {
    bs.init({
        server: {
            baseDir: './'
        }
    });
    
    gulp.watch(['./public/*', '*.html']).on('change', bs.reload);
});