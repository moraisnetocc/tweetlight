module.exports = function (grunt) {
    pkg: grunt.file.readJSON('package.json'),
    grunt.initConfig({
        uglify: {
            options: {
                preserveComments: 'all'
            },
            timeline: {
                files: {
                    'user/src/tweetlight.min.js': ['user/src/tweetlight.js']
                }
            },
            hashtag: {
                files: {
                    'hashtag/src/tweetlight.min.js': ['hashtag/src/tweetlight.js']
                }
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [ 'uglify' ]);
};