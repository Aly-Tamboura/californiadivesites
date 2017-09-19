module.exports = function (grunt) {
	grunt.initConfig({
		run: {
	    options: {
	      // Task-specific options go here.
	    },
	    your_target: {
	      cmd: 'nodemon',
	      args: [
	        'server/index.js'
	      ]
	    }
	  },
    concat: {
    	js: {
    		src: ['client/components/index.js', 'client/routes/router.js'],
    		dest: 'client/build/js/builds.js',
    	},
    	css: {
    		src: ['client/css/style.css'],
    		dest: 'client/build/css/styles.css',
    	},
    },
    watch: {
    	js: {
    		files: ['client/components/**.js'],
    		tasks: ['concat:js'],
    	},
    	css: {
    		files: ['client/css/**.css'],
    		tasks: ['concat:css'],
    	},
    },
	});
	grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['run']);
  grunt.registerTask('start', ['concat','watch']);
}