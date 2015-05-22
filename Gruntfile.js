module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Sass task
        sass: {
            dev: {
                files: {
                    'style.css':'scss/style.scss'
                },
                options: {
                    style: 'expanded'
                }
            },

            dist: {
                files: {
                    'style.css':'scss/style.scss'
                },
                options: {
                    style: 'compressed'
                }
            }
        },
        // Watch tasks
        watch: {
            stylesheets: {
                files: ['scss/**/*.scss'],
                tasks: ['sass:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass:dev', 'watch']);
};