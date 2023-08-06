module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserSync: {
			bsFiles: {
				src: ['src/*.html', 'src/parts/*.html' , 'src/rus/*.html' , 'src/**/*.html'],
			},
			options: {
				watchTask: true,
				reloadDelay: 300,
				server: {
					baseDir: "./build"
				}
		   }
		},
		copy: {
			files: {
				cwd: 'src/*', // set working folder / root to copy
				src: '**', // copy all files and subfolders
				dest: 'build/', // destination folder
				expand: true, // required when using cwd
			}
		},
		includereplace: {
			dev: {
				options: {
					// Task-specific options go here.
				},
				// Files to perform replacements and includes with
				src: './',
				// Destination directory to copy files to
				dest: './build/',
				expand: true,
			},
			development: {
				files: [{
					cwd: 'src/',
					src: ['**/*.html'],
					dest: 'build/',
					expand: true,
				}]
			},
		},

		

		watch: {
			options: {
				spawn: false,
				livereload: true,
			},


			styles: {
				files: [
					'src/**/*.html',
				],
			},
			files: ['src/**'],
			tasks: ['copy', 'includereplace:development'],
		},
	});

	// grunt.loadNpmTasks('grunt-sass');
	// grunt.loadNpmTasks('node-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-include-replace');

	// Default task(s).
	grunt.registerTask('default', [ 'copy', 'includereplace:development', 'browserSync', 'watch']);
};