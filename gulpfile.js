var gulp = require("gulp");
var postcss = require("gulp-postcss");
var concat = require("gulp-concat");
var cssnext = require("postcss-cssnext");
var cssnano = require("cssnano");

gulp.task("cssnext", function(param) {
  return gulp
    .src(["./css/**/*.postcss", "./css/**/*.css"])
    .pipe(concat("min.css"))
    .pipe(
      postcss([
        cssnext({
          warnForDuplicates: false
        }),
        cssnano({
          reduceIdents: false
        })
      ])
    )
    .pipe(gulp.dest("dist/"));
});
