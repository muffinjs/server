const gulp = require('gulp')
const babel = require('gulp-babel')
const cache = require('gulp-cached')

const paths = [
  'routes/**/*',
  'models/**/*',
  'index.js'
]

gulp.task('transpile', () => {
  return gulp.src(paths)
  .pipe(cache('transpile'))
  .pipe(babel())
  .pipe(gulp.dest('dist'))
})

gulp.task('watch', () => {
  gulp.watch(paths, ['transpile'])
})

gulp.task('default', ['watch', 'transpile'])
