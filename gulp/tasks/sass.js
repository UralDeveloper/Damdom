import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import replace from 'gulp-replace';

import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import groupSss from 'gulp-group-css-media-queries';
import webpCss from 'gulp-webp-css';


const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.sass, {sourcemaps: true})
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupSss())
        .pipe(webpCss({
            webpClass: ".webp",
            noWebpClass: ".no-webp"
        }))
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}