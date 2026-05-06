/*
    Workflow moderno: Sass + BrowserSync + Terser + PurgeCSS
    Roque Arnás Izquierdo
    https://didesweb.com/
*/

import gulp from "gulp";
import browserSync from "browser-sync";
import plumber from "gulp-plumber";
import cleanCSS from "gulp-clean-css";
import terser from "gulp-terser";
import purgecss from "gulp-purgecss";
import sourcemaps from "gulp-sourcemaps";
import * as sass from "sass";
import through from "through2";
import Vinyl from "vinyl";

const server = browserSync.create();

// -----------------------------------------------------
// CONFIG
// -----------------------------------------------------
const proxyPath = "localhost/me";

const paths = { 
    styles: { 
        src: ["assets/styles/**/*.scss", "!assets/styles/**/_*.scss"], 
        dest: "app/styles" 
    },
    scripts: { 
        src: "assets/scripts/**/*.js", 
        dest: "app/scripts"
    }
};

// -----------------------------------------------------
// HELPERS
// -----------------------------------------------------

function compileSassModern(src, dest) {
    return gulp.src(src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(
            through.obj((file, enc, cb) => {
                try {
                    const result = sass.compile(file.path, {
                        style: "expanded",
                        sourceMap: true
                    });

                    const cssFile = new Vinyl({
                        cwd: file.cwd,
                        base: file.base,
                        path: file.path.replace(/\.scss$/, ".css"),
                        contents: Buffer.from(result.css)
                    });

                    cb(null, cssFile);
                } catch (err) {
                    console.error(err);
                    cb(err);
                }
            })
        )
        .pipe(cleanCSS())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(dest))
        .pipe(server.stream());
}

// -----------------------------------------------------
// TASKS
// -----------------------------------------------------

// BrowserSync
export function serve() {
    server.init({
        proxy: proxyPath,
        notify: false
    });

    gulp.watch("**/*.php").on("change", server.reload);
}

// Sass global
export function styles() {
    return compileSassModern(paths.styles.src, paths.styles.dest);
}

// JS global
export function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(plumber())
        .pipe(terser())
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(server.stream());
}

// PurgeCSS (solo producción)
export function purge() {
    return gulp.src("app/styles/main.css")
        .pipe(
            purgecss({
                content: ["**/*.php"]
            })
        )
        .pipe(gulp.dest("app/styles"));
}

// -----------------------------------------------------
// WATCHERS
// -----------------------------------------------------
export function watchFiles() {
    gulp.watch("assets/styles/**/*.scss", styles);
    gulp.watch(paths.scripts.src, scripts);
}

// -----------------------------------------------------
// MODERN TASKS
// -----------------------------------------------------

// Desarrollo
export const dev = gulp.series(
    gulp.parallel(styles, scripts),
    gulp.parallel(serve, watchFiles)
);

// Producción
export const production = gulp.series(
    gulp.parallel(styles),
    purge
);

// Default
export default dev;
