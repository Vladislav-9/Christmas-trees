// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // также можно использовать rootFolder
const srcFolder = `./src`;

export const path = {
	build: {
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		files: `${buildFolder}/`
	},
	src: {
		css: `${srcFolder}/css/index.css`,
		html: `${srcFolder}/*.html`,
		files: [`${srcFolder}/**/*.*`, `!${srcFolder}/css/**`]
	},
	watch: {
		css: `${srcFolder}/css/**/*.css`,
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/**/*.*`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}