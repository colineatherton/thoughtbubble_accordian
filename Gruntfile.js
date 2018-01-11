module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/index.js',
        dest: 'dist/js/index.min.js'
      }
    },
    cssmin: {
      dist: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: {
          'dist/css/style.min.css': ['src/css/style.css']
        }
      }
    },
    copy : {
      main: {
        files: [
          {
            src: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
            dest: 'dist/vendor/bootstrap/css/bootstrap.min.css'
          },
          {
            src: 'node_modules/bootstrap/dist/js/bootstrap.min.js',
            dest: 'dist/vendor/bootstrap/js/bootstrap.min.js'
          },
          {
            src: 'node_modules/jquery/dist/jquery.min.js',
            dest: 'dist/vendor/jquery/js/jquery.min.js'
          },
          {
            src: 'node_modules/font-awesome/css/font-awesome.min.css',
            dest: 'dist/vendor/font-awesome/css/font-awesome.min.css'
          },
          {
            expand: 'true',
            cwd: 'node_modules/font-awesome/fonts/',
            src: '**',
            dest: 'dist/vendor/font-awesome/fonts'
          },
          {
            expand: 'true',
            cwd: 'node_modules/jquery-validation/dist',
            src: '**',
            dest: 'dist/vendor/jquery-validation/dist'
          }
        ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Load the plugin that provides the "copy" task.
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin', 'copy']);

};
