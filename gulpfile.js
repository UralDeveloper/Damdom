import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

// Передаем значение в глобалную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
    // browsersync: browsersync
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/sass.js";
import { js } from "./gulp/tasks/js.js";
import { img } from "./gulp/tasks/images.js";

// Наблюдатели
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.sass, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.img, img);
}

const mainTasks = gulp.parallel(copy, html, scss, js, img);
const serverTasks = gulp.parallel(watcher, server);

const dev = gulp.series(reset, mainTasks, serverTasks);

// Выполнение сценария по дефолту
gulp.task('default', dev);