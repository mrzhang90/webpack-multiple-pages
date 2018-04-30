import indexModel from '../models/indexModel';
const indexController = {
	index() {
		return async (ctx, next) => {
			const indexModelIns = new indexModel();
			const result = await indexModelIns.getData();
			ctx.body = await ctx.render('index',{data:result});
		}
	},
	userinfo(){
		return async(ctx,next)=>{
			const indexModelIns = new indexModel();
			const result = await indexModelIns.userinfo();
			ctx.body = result;
		}
	},
	getCategroyList(){
		return async(ctx,next)=>{
			const indexModelIns = new indexModel();
			const result = await indexModelIns.getCategroyList(ctx.query.categoryType);
			ctx.body = result;
		}
	}
}
export default indexController;