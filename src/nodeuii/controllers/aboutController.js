import aboutModel from '../models/aboutModel';
const aboutController = {
	about() {
		return async (ctx, next) => {
			ctx.body = await ctx.render('about',{data:123});
		}
	},
	aboutUs(){
		return async(ctx,next)=>{
			const about = new aboutModel();
			const result = await about.aboutUs();
			ctx.body=result;
		}
	}
}
export default aboutController;