var gulp = require ('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    ext_replace = require('gulp-ext-replace');;

gulp.task('compress', function() {
    return gulp.src('js_work/*.js')
        .pipe(uglify())
        .pipe(ext_replace('.min.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('styles', function(){
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(ext_replace('.min.css'))
        .pipe(gulp.dest('css'))

})

gulp.task('watch', function(){//will watch for changes and consistently update whatever function you want
    gulp.watch('js_work/*.js', ['compress'])
    gulp.watch('css/*.css', ['styles'])

})