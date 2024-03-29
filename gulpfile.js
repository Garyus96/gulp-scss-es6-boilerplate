// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const include = require('gulp-include')


// File paths
const files = {
    scssPath: 'assets/src/scss/**/*.scss',
    jsMainPath: 'assets/src/js/**/main.js',
    jsPath: 'assets/src/js/**/*.js'
}

// Sass task: compiles the style.scss file into style.css
function scssTask(){
    return src(files.scssPath)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(dest('assets/dist') // put final CSS in dist folder
    );
}

// JS task: concatenates and uglifies JS files to main.js
function jsTask(){
    return src([
        files.jsMainPath
        // ,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
        ])
        .pipe(include())
        .on('error', console.log)
        .pipe(babel({
            presets: [
                [
                    '@babel/env',
                    {
                        'targets': '>0.25%'
                    }
                ]
            ]
        }))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest('assets/dist')
    );
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    watch([files.scssPath, files.jsPath],
        series(
            parallel(scssTask, jsTask)
        )
    );
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// Runs watch task
exports.default = series(
    parallel(scssTask, jsTask),
    watchTask
);
