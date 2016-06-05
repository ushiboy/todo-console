const gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  fs = require('fs'),
  path = require('path'),
  del = require('del'),
  buildDir = path.join(__dirname, 'build'),
  staticDir = path.join(buildDir, 'static'),
  distDir = path.join(__dirname, 'dist'),
  scriptDir = path.join(staticDir, 'scripts'),
  webpack = require('webpack'),
  bundler = webpack({
    entry: {
      'app': './src/scripts/app.js'
    },
    devtool: 'inline-source-map',
    output: {
      path: scriptDir,
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel'
        }
      ]
    }
  });

gulp.task('clean', del.bind(null, [distDir, buildDir]));

gulp.task('js:dev', cb => {
  bundler.run((err, stats) => {
    if (err) {
      throw new $.util.PluginError('webpack:build', err);
    }
    $.util.log('[webpack:build]', stats.toString({
      colors: true,
      chunkModules: false
    }));
    cb();
  });
});

gulp.task('js:app', cb => {
  fs.readFile(path.join(__dirname, '.babelrc'), { encoding: 'utf8' }, (error, data) => {
    const babelConfig = JSON.parse(data);
    gulp.src('src/scripts/**/*.js')
    .pipe($.plumber())
    .pipe($.babel(babelConfig))
    .pipe(gulp.dest(distDir))
    .on('end', () => {
      cb();
    });
  });
});

gulp.task('dev', ['js:app'], () => {
  gulp.watch('src/scripts/**/*.js', ['js:app']);
});

gulp.task('default', ['clean'], () => {
  gulp.start('dev');
});
