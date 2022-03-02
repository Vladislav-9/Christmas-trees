import browserSync from 'browser-sync'; //Локальный сервер
import rename from 'gulp-rename'; // Переименование файла

//Экспортируем объект
export const plugins = {
	rename: rename,
	browserSync: browserSync
}