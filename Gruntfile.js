module.exports = function(grunt) {
    grunt.initConfig({

        sass: {
            css: {
                files: [{
                    expand: true,
                    cwd: 'public/css',
                    src: '*.scss',
                    dest: 'public/css',
                    ext: '.css'
                }]
            }
        },

        watch: {
            sass: {
                files: ['public/css/*.scss'],
                tasks: ['sass'],
                options: {
                    atBegin: true
                }
            },
            fest: {
                files: ['templates/*.xml'],
                tasks: ['fest'],
                options: {
                    atBegin: true
                }
            },
            express: {
                files: [
                    'routes/**/*.js',
                    'app.js'
                ],
                tasks: ['express'],
                options: {
                    spawn: false
                }
            },
            server: {
                files: [
                    'public/js/**/*.js'
                ],
                options: {
                    interrupt: true,
                    livereload: true
                }
            }
        },
        express: {
            server: {
                options: {
                    livereload: true,
                    port: 8000,
                    script: 'app.js'
                }
            }
        },
        fest: {
            templates: {
                files: [{
                    expand: true,
                    cwd: 'templates',
                    src: '*.xml',
                    dest: 'public/js/tmpl'
                }],
                options: {
                    template: function(data) {
                        return grunt.template.process(
                            'define(function () { return <%= contents %> ; });', {
                                data: data
                            }
                        );
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-fest');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['express', 'watch']);

};