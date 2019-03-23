module.exports = function(config) {
    config.set({
        browsers: ['ChromeHeadless'],
        frameworks: ['parallel', 'jasmine'],
        files: [
            'dist/**/*.js',
            'test/**/*.spec.js'
        ]
    });
};