module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-symlink');
  grunt.loadNpmTasks('grunt-styl');

  // Project configuration.
  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'build/app/app.js' : ['app/app.js']
        },
        options: {
          transform: ['hbsfy'],
          bundleOptions: {
            debug: true
          }
        }
      }
    },
    symlink: {
      expanded: {
        files: {
          'build/app/app.html' : ['app/app.html']
        }
      }
    },
    styl: {
      dist: {
        options: {
          whitespace: true
        },
        files: {
            'build/app/style.css': 'app/styles/*.styl'
        }
      }
    },
    watch: {
      scripts: {
        files: ['app/app.js', 'app/**/*.hbs', 'app/**/*.js'],
        tasks: ['browserify']
      },
      css: {
        files: ['app/**/*.styl'],
        tasks: ['styl']
      }
    }
  });

  grunt.registerTask('default', ['browserify', 'symlink', 'styl', 'watch']);
};
