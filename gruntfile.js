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
        }
    });

    // 3. Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 4. Default task to run from command line
    grunt.registerTask('default', ['concat']);
};
