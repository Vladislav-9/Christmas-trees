import gulp from 'gulp';
import browserSync from 'browser-sync';
import cssImport from 'gulp-cssimport';

export const html = () =>
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

export const font = () =>
	gulp.src('src/fonts/**')
		.pipe(gulp.dest('dist/fonts/'));

export const css = () =>
	gulp.src('src/css/index.css')
		.pipe(cssImport({
			extensions: ["css"],
		}))
		.pipe(gulp.dest('dist/css/'))
		.pipe(browserSync.stream());

export const image = () =>
	gulp.src('src/img/*.*')
		.pipe(gulp.dest('dist/img/'))
		.pipe(browserSync.stream());

export const js = () =>
	gulp.src('src/script/*.js')
		.pipe(gulp.dest('dist/script/'))
		.pipe(browserSync.stream());

export const snow = () =>
	gulp.src('src/snow/**')
		.pipe(gulp.dest('dist/snow/'));

export const server = () => {
	browserSync.init({
		tunnel: false,
		server: {
			baseDir: 'dist'
		}
	});
	gulp.watch('src/css/*.css', css);
	gulp.watch('src/*.html', html);
	gulp.watch('src/script/*.js', js);
	gulp.watch('src/img/*.*', image);
};

export default gulp.series(html, font, css, image, js, snow, server);