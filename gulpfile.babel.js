import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import minifyCSS from 'gulp-csso';
import browserify from 'gulp-browserify';
import babelify from 'babelify';
import del from 'del';

sass.compiler = require('node-sass');

const paths = {
    styles: {
        src: 'assets/scss/styles.scss',
        dest: 'src/public/styles',
        watch: 'assets/scss/**/*.scss',
    },
    js: {
        src: 'assets/js/main.js',
        dest: 'src/public/js',
        watch: 'assets/js/**/*.js',
    },
};

const clean = () => del(['src/public']);

const styles = () =>
    gulp
        .src(paths.styles.src)
        .pipe(sass())
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 2 versions'],
                cascade: false,
            })
        )
        .pipe(minifyCSS())
        .pipe(gulp.dest(paths.styles.dest));

const js = () =>
    gulp
        .src(paths.js.src) //
        .pipe(
            browserify({
                transform: [babelify.configure({ presets: ['@babel/preset-env'] })],
            })
        )
        .pipe(gulp.dest(paths.js.dest));

const watchFiles = () => {
    gulp.watch(paths.styles.watch, styles);
    gulp.watch(paths.js.watch, js);
};

const dev = gulp.series([clean, styles, js, watchFiles]);

export default dev;
