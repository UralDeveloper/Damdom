import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/assets/js/`,
        css: `${buildFolder}/assets/css/`,
        html: `${buildFolder}/`,
        img: `${buildFolder}/assets/img/`,
        files: `${buildFolder}/assets/`
    },
    src: {
        js: `${srcFolder}/assets/js/*.js`,
        img: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/assets/img/**/*.svg`,
        sass: `${srcFolder}/assets/sass/*.sass`,
        css: `${srcFolder}/assets/css/*.css`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/assets/**/*.*`
    },
    watch: {
        js: `${srcFolder}/assets/js/*.js`,
        html: `${srcFolder}/**/*.html`,
        css: `${srcFolder}/assets/css/*.css`,
        sass: `${srcFolder}/assets/sass/*.sass`,
        img: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
        files: `${srcFolder}/assets/**/*.*`
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}