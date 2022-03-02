import cleanCss from 'gulp-clean-css'; // Сжатие CSS файлов
import autoprefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Группировка медиа-запросов
import cssImport from 'gulp-cssimport'; // Оъединение CSS файлов

export const css = () => {
	return app.gulp.src(app.path.src.css, { sourcemaps: true })
		.pipe(cssImport({
			extensions: ["css"],
		}))
		.pipe(groupCssMediaQueries())
		.pipe(autoprefixer({
			grid: true,
			overrideBrowserslist: ["last 3 version"],
			cascade: true
		}))
		// Раскомментировать, если нужен несжатый дубль файла стилей
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(cleanCss())
		.pipe(app.plugins.rename({
			extname: ".min.css"
		}))
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browserSync.stream());
}