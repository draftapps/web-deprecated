var path = require('path'),
    gulp = require('gulp'),
    conf = require('../conf/gulp.conf'),
    gulpNgConfig = require('gulp-ng-config');

gulp.task('config', config);
gulp.task('config:build', configBuild);

function config() {
  return gulp.src(path.join('config.json'))
    .pipe(gulpNgConfig('app.config', {
      environment: 'local',
      wrap: true
    }))
    .pipe(gulp.dest(path.join('.tmp/')))
}

function configBuild() {
  return gulp.src(path.join('config.json'))
    .pipe(gulpNgConfig('app.config', {
      environment: 'production',
      wrap: true
    }))
    .pipe(gulp.dest(path.join('.tmp/')))
}

