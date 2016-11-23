var gulp = require('gulp'),
    aglio = require('gulp-aglio'),
    ejs = require('gulp-ejs'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    rimraf = require('rimraf');

var SRC_FILES = ['docs/**/*.md'],
    INDEX_FILE = 'docs/index.md',
    PUBLISHED_DIR = 'published';

gulp.task('combine', function(){
  return gulp.src(INDEX_FILE)
    .pipe(ejs({},{ ext: '.md' }))
    .pipe(rename('index.md'))
    .pipe(gulp.dest(PUBLISHED_DIR));
});

gulp.task('build', ['combine'], function() {
  return gulp.src(PUBLISHED_DIR + '/index.md')
    .pipe(aglio({template: 'default'}))
    .pipe(gulp.dest(PUBLISHED_DIR));
});

gulp.task('watch', function () {
  gulp.watch(SRC_FILES, ['build', browserSync.reload]);
});

gulp.task('browserSync', function() {
  browserSync({
    logConnections: true,
    logFileChanges: true,
    notify: true,
    port: 8088,
    open: false,
    server: {
      baseDir: PUBLISHED_DIR
    }
  });
});

gulp.task('clean', function(cb) {
  rimraf(PUBLISHED_DIR, cb);
});

gulp.task('publish', ['clean', 'build']);
gulp.task('default', ['build', 'watch', 'browserSync']);
