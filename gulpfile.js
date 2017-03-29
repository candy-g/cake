var gulp = require('gulp'),
    watch = require('gulp-watch')
     clean = require('gulp-clean')
     ;

gulp.task('clean',function () {
     return gulp.src(['public/vendor/bootstrap'
         ,'public/vendor/jquery'
         ,'public/vendor/director'
         ,'public/vendor/layer'
         ,'public/vendor/datatables.net'
         ,'public/vendor/datatables/'
         ,'public/vendor/validator'
         ,'public/vendor/select2'
         ,'public/vendor/highcharts'
     ],{read:false})
         .pipe(clean())

});

gulp.task('build',function () {
         //搬bootstrap
     return gulp.src(['bower_components/bootstrap/dist/**/*.*'])
                .pipe(gulp.dest('public/vendor/bootstrap'))
         //搬jquery
         ,gulp.src(['bower_components/jquery/dist/jquery.min.js'])
              .pipe(gulp.dest('public/vendor/jquery'))
         //搬director
         ,gulp.src(['bower_components/director/build/director.min.js'])
              .pipe(gulp.dest('public/vendor/director'))

         //搬layer
         ,gulp.src(['bower_components/layer/build/**/*.*'])
              .pipe(gulp.dest('public/vendor/layer'))


    //搬移datatable相关文件
    , gulp.src(['bower_components/datatables.net/js/jquery.dataTables.min.js',
         'bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js'])
         .pipe(gulp.dest('public/vendor/datatables/'))

         ,gulp.src(['bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css'])
             .pipe(gulp.dest('public/vendor/datatables/css/'))
         //搬移validator
         ,gulp.src(['node_modules/validator/validator.min.js'])
         .pipe(gulp.dest('public/vendor/validator'))

             //搬移select2
         ,gulp.src(['bower_components/select2/dist/**/*.*'])
         .pipe(gulp.dest('public/vendor/select2'))

         //搬移highcharts
         ,gulp.src(['node_modules/highcharts/css/highcharts.css'])
         .pipe(gulp.dest('public/vendor/highcharts/css'))
         //搬移highcharts
         ,gulp.src(['node_modules/highcharts/highcharts.js'])
         .pipe(gulp.dest('public/vendor/highcharts'))

         //搬移highcharts
         ,gulp.src(['node_modules/highcharts/modules/*.*'])
         .pipe(gulp.dest('public/vendor/highcharts/modules'))
         //搬移highcharts
         ,gulp.src(['node_modules/highcharts/themes/*.*'])
         .pipe(gulp.dest('public/vendor/highcharts/themes'))
});













