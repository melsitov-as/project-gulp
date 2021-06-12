const gulp = require('gulp'); // Подключаем Gulp
const browserSync = require('browser-sync').create(); // Не просто подключаю, но еще вызываю у него метод create
const watch = require('gulp-watch'); // Подключаем watch





// Задача для старта сервера из папки app
gulp.task('server', function() {
    browserSync.init({
      server: {
        baseDir: "./app/"
      }
    })
});

//Задача для слежения за файлами
gulp.task('watch', function() {
    watch('./app/*.html', gulp.parallel(browserSync.reload ));// Переменная watch принимает в себя описания файлов, за которыми необходимо наблюдать
});

//Запусть задачу server и задачу watch
gulp.task('default', gulp.parallel('server', 'watch'));













// gulp.task('hello', function(callback) {
//   console.log('Hello from Gulp!');
//   callback();
// });

// gulp.task('first', function(callback) {
//   console.log('Hello from FIRST task');
//   callback();
// })

// gulp.task('second', function(callback) {
//   console.log('Hello from SECOND task');
//   callback();
// })

// gulp.task('third', function(callback) {
//   console.log('Hello from THIRD task');
//   callback();
// })

// gulp.task('fourth', function(callback) {
//   console.log('Hello from FOURTH task');
//   callback();
// })

// // gulp.task('default', gulp.series('first', 'second'));  // Дефолтный таск

// // gulp.task('default', gulp.parallel('first', 'second', 'third', 'fourth'))

// gulp.task('default', gulp.series('first', gulp.parallel('second', 'third'), 'fourth'))
