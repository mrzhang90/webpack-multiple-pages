const path = require('path');
let moduleExports = {};
const ROOT_PATH=path.resolve(__dirname,'../');
moduleExports.ROOT_PATH=ROOT_PATH;
moduleExports.SRC_PATH=path.resolve(ROOT_PATH,"src");
moduleExports.ENTRIE_PATH = path.resolve(ROOT_PATH, './src/web/views/');
moduleExports.OUTPUT_PATH = path.resolve(ROOT_PATH, './build/assets/');
moduleExports.HTML_PATH = path.resolve(ROOT_PATH, './src/web/');
moduleExports.TRIP = [
	path.join(ROOT_PATH,'./src/web/assets/js/trip-calendar.js'),
	path.join(ROOT_PATH,'./src/web/assets/css/trip-calendar.css')
]


// const pagesPath = path.resolve(__dirname, '../src/web/views');
// const widgetPath = path.resolve(__dirname, '../src/web/widget');
module.exports=moduleExports;