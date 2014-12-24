module.exports = function(grunt) {
    // 1. configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            // 2. Instruction for concatenating files
            dist: {
                src: [
                    'js/libs/*.js',
                    'js/global.js'
                ],
                dest: 'js/build/production.js'
            }
        },
        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },
        imagemin: {
            dynamic:{
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['css/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    'css/build/minified/global.css': 'css/global.less'
                }
            }
        }
    });

    // 3. Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // 4. Default task to run from command line
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'less']);
};
