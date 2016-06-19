var gulp = require("gulp");
var typescript = require("gulp-typescript");
var browser = require("browser-sync");
var plumber = require("gulp-plumber");

gulp.task("server", function () {
    browser({
        server: {
            baseDir: "./" 
        }
    });
});

gulp.task("html", function () {
    gulp.src("*.html") 
        .pipe(browser.reload({stream: true}));
});

var typescriptProject = typescript.createProject({
    target: "ES5", 
    removeComments: true,
    sortOutput: false,
    outDir: './src/js'
});

gulp.task("typescript", function () {
    gulp.src(["./src/ts/*.ts"])
        .pipe(typescript(typescriptProject))
        .pipe(gulp.dest("./src/js/"))
        .pipe(browser.reload({stream: true}));
});

gulp.task("default", ["html", "typescript", "server"], function () {
    gulp.watch("./*.html", ["html"]);
    gulp.watch("./src/ts/**/*.ts", ["typescript"]);
});