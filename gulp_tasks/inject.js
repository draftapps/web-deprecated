const gulp = require('gulp');
const browserSync = require('browser-sync');
const wiredep = require('wiredep').stream;
const angularFilesort = require('gulp-angular-filesort');
const gulpInject = require('gulp-inject');

const conf = require('../conf/gulp.conf');

gulp.task('inject', inject);

function inject() {
  const injectScripts = gulp.src([
    conf.path.tmp('**/*.js'),
    `!${conf.path.tmp('**/*.spec.js')}`,
    // Excluding highlight pack from the injected files cause we already inject it manually
    `!${conf.path.tmp('scripts/vendor/highlight.pack.js')}`,
    `!${conf.path.tmp('highlight.pack.js')}`
  ])
  .pipe(angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

  const injectOptions = {
    ignorePath: [conf.paths.src, conf.paths.tmp],
    addRootSlash: false
  };

  gulp.src(conf.path.src('styles/main.scss'))
    .pipe(wiredep(Object.assign({}, conf.wiredep)))
    .pipe(gulp.dest(conf.path.src('styles/')))
    .pipe(browserSync.stream());

  return gulp.src(conf.path.src('index.html'))
    .pipe(gulpInject(injectScripts, injectOptions))
    .pipe(wiredep(Object.assign({}, conf.wiredep)))
    .pipe(gulp.dest(conf.paths.tmp))
    .pipe(browserSync.stream());
}
