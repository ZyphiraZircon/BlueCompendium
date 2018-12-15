/* eslint-disable */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

console.log("Setting production environment");

process.env.NODE_ENV = 'production';

console.log('Generating minified build for production via Webpack.  This will take a moment...'.blue);

webpack(webpackConfig).run((err, stats) => {
  if (err){
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors){
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if(jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings:'.bold.yellow);
    return jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats:  ${stats}`);

  console.log('Your app has been compiled in production mode and written to /dist.  It\'s ready to roll!'.green);

  return 0;

});
