import gulp from "gulp"
import webp from "gulp-webp"
 
gulp.task('default', () =>
    gulp.src('src/imgviejas/**.png')
        .pipe(webp())
        .pipe(gulp.dest('src/img'))
);
