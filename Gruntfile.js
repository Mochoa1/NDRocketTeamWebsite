'use strict';

module.exports = function(grunt){

    grunt.initConfig({
        'watch' : {
            options : {
                livereload : '<%= connect.options.livereload %>'
            },
            files   : [
                'Gruntfile.js',
                'src/**/**'
            ],
            tasks : ['demo']
        },
        'connect': {
            options: {
                port       : 9000,
                livereload : 9090,
                hostname   : 'localhost'
            },
            livereload: {
                options: {
                    open       : true,
                    middleware : function (connect) {
                        return [
                            connect.static('src'),//('demo'),
                            connect().use('/bower_components', connect.static('./bower_components')) //,
                            //connect().use('/src', connect.static('./src'))
                        ];
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');


    grunt.registerTask('demo', function(){
        grunt.task.run(['connect', 'watch']);
    });
    grunt.registerTask('default', ['demo']);

};
