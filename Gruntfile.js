module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

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
    		files: ['client/components/index.js'],
    		tasks: ['concat:js'],
    	},
    	css: {
    		files: ['client/css/style.css'],
    		tasks: ['concat:css'],
    	},
    },
	});
	grunt.registerTask('start', ['run'])
  grunt.registerTask('default', ['concat','watch']);
}