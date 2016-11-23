var gulp = require('gulp'),
    aglio = require('gulp-aglio'),
    browserSync = require('browser-sync');

var SRC_DIR = 'src',
    DEST_DIR = 'dest';

gulp.task('build', function() {
  return gulp.src(SRC_DIR + '/index.md')
    .pipe(aglio({template: 'default'}))
    .pipe(gulp.dest(DEST_DIR));
});

gulp.task('watch', function () {
  gulp.watch(SRC_DIR + '/**/*.md', ['build', browserSync.reload]);
});

gulp.task('browserSync', function() {
  browserSync({
    logConnections: true,
    logFileChanges: true,
    notify: true,
    port: 8088,
    open: false,
    server: {
      baseDir: DEST_DIR
    }
  });
});

gulp.task('default', ['build', 'watch', 'browserSync']);
