import indexController from './indexController';
import aboutController from './aboutController';
const controllerInit = {
	getAllrouters(app, router) {
		app.use(router(_ => {
			_.get('/', indexController.index());
			_.get('/index', indexController.index());
			_.get('/index.html', indexController.index());
			_.get('/uc/userinfo.do', indexController.userinfo());
			_.get('/getCategroyList.do', indexController.getCategroyList());
			_.get('/about.html', aboutController.about());
			_.post('/aboutUs.do', aboutController.aboutUs());
		}))
	}
};
export default controllerInit;