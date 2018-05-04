module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['less']
                },
                files: {
                    'css/styles.css': 'less/styles.less' // destination file and source file
                }
            }
        },
        watch: {
            files: ['**/*.less'], // which files to watch
            tasks: ['less']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less', 'watch']);
};