import rp from 'request-promise';
import cheerio from 'cheerio';
export default class indexModel {
	constructor(ctx) {}
	getData() {
		return new Promise((resolve, reject) => {
			rp('http://www.chnc.com.cn/front/news.do')
				.then((htmlString) => {
					const $ = cheerio.load(htmlString);
					const html = $('.honour_details p').map(function(i, el) {
						return $(this).text();
					}).get().join(' ');
					resolve({
						'html':html,//DEMO-这里是演示抓取列表的，实际网站用不上
						'left':{
							'campsId':'20170819135330CAM660cd568',
							'campsName':'英国全真插班英语营',
							'detailPrice':'6580',
							'campsImages':'http://oss.camplink.cn/camps/jpg/Aerial-shot-e1448613226737_20170819135424.jpg'
						},
						'right1':{
							'campsId':'20170828110642CAM9168c0b6',
							'campsName':'欧洲高端滑雪体验营',
							'detailPrice':'11800',
							'campsImages':'http://oss.camplink.cn/camps/jpg/4_20170828110736.jpg'
						},
						'right2':{
							'campsId':'20170829114202CAM87b64136',
							'campsName':'美国中小学插班寄宿营',
							'detailPrice':'29500',
							'campsImages':'http://oss.camplink.cn/camps/jpg/bc03b1a5a1454df98bbceac2da51874d_20170831132722.jpg'
						},
						'right3':{
							'campsId':'20170821153308CAM73548f5a',
							'campsName':'新家坡国立大学高端英语插班营',
							'detailPrice':'12500',
							'campsImages':'http://oss.camplink.cn/camps/jpg/9-national-university-of-singapore-nus-singapore-singapore_20170821153749.jpg'
						},
						'right4':{
							'campsId':'20170901103234CAM47f063ef',
							'campsName':'美国加州篮球训练+比赛冬令营',
							'detailPrice':'7035',
							'campsImages':'http://oss.camplink.cn/camps/png/fd060b31b0fd4aec93925ccec61b3d0d_20170901113055.png'
						},
						'right5':{
							'campsId':'20170830094855CAM873eceb6',
							'campsName':'中美机器人对抗大赛-加州赛区',
							'detailPrice':'9045',
							'campsImages':'http://oss.camplink.cn/camps/jpg/b44963a704cb44f9b5c76f81653e462d_20170831161439.jpg'
						},
						'right6':{
							'campsId':'20170829114202CAM87b64136',
							'campsName':'美国中小学插班寄宿营',
							'detailPrice':'29500',
							'campsImages':'http://oss.camplink.cn/camps/jpg/Aerial-shot-e1448613226737_20170819135424.jpg'
						},
						'categoryList':[
							{
								'categoryId':'20170627115702CA770932a5',
								'categoryUrl':'http://oss.camplink.cn/category/jpg/b806363cb97f4209a222d0c962f713e3_20170911114828.jpg',
								'categoryName':'名校探索',
							},{
								'categoryId':'20170306101232CAefc0a183',
								'categoryUrl':'http://oss.camplink.cn/category/JPG/4bc537c9c87546c68724dadba00ea3b8_20170911115543.JPG',
								'categoryName':'日营',
							},{
								'categoryId':'20170306101213CAe70c792b',
								'categoryUrl':'http://oss.camplink.cn/category/jpg/aafdb67d15f64149af6da875f2c3b563_20170911115747.jpg',
								'categoryName':'英国学年项目',
							},{
								'categoryId':'20170306101148CAf5c5cb19',
								'categoryUrl':'http://oss.camplink.cn/category/jpg/0a8e3f133dd54f2eab6ed626cf4534dd_20170911120030.jpg',
								'categoryName':'志愿者项目',
							},{
								'categoryId':'20170306095608CA2fbcebf2',
								'categoryUrl':'http://oss.camplink.cn/category/jpg/f84d9424996646e2bd5afded5575f3a5_20170911131640.jpg',
								'categoryName':'科技探索',
							},{
								'categoryId':'20170306095629CA081a46ea',
								'categoryUrl':'http://oss.camplink.cn/category/jpg/34a97acbbd1348f3902c018b80920cce_20170911132641.jpg',
								'categoryName':'野生保护',
							},{
								'categoryId':'20170306095544CAcb3d42cf',
								'categoryUrl':'http://oss.camplink.cn/category/15.16-Art-Camp-1080x675.jpg/585be4c398f444a78465489b3940e12d_20170911133122.15.16-Art-Camp-1080x675.jpg',
								'categoryName':'艺术形式',
							},{
								'categoryId':'20170107222733CAb14690a4',
								'categoryUrl':'http://oss.camplink.cn/category/jpg/3ea49d5ec9cb473a85517a3e8005c1f6_20170911135435.jpg',
								'categoryName':'语言学习',
							},{
								'categoryId':'20170108112846CA03fb5ecd',
								'categoryUrl':'http://oss.camplink.cn/category/jpg/acb9b03189df4a069cf3c20ccbce4462_20170911135454.jpg',
								'categoryName':'全真插班',
							},{
								'categoryId':'20170108112827CA0a9c5f9f',
								'categoryUrl':'http://oss.camplink.cn/category/jpg/e9bb785c10234e0b87fe2f4ce6a73ebb_20170911141435.jpg',
								'categoryName':'传统营地',
							},{
								'categoryId':'20170112102252CAc19bea4e',
								'categoryUrl':'http://oss.camplink.cn/category/JPG/946564302d5e452c9a1b27a7f0225d2d_20170911140439.JPG',
								'categoryName':'体育项目',
							}
						]
					});
				})
				.catch((err) => {
					reject(err);
				});
		})
	}
	userinfo(){
		return new Promise((resolve,reject)=>{
			resolve({result: -2, resultDesc: "用户未登录！", success: false})
		})
	}
	getCategroyList(categoryType){
		return new Promise((resolve,reject)=>{
			if(categoryType==3){
				resolve(
					"{\"categoryList\":[{\"categoryId\":\"20170306103932CAf10377e0\",\"categoryName\":\"澳大利亚\",\"categoryType\":3,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/1b31d15a1a654db38618bbd3a8faedba_20170907181612.jpg\",\"categoryWeight\":109,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/1b31d15a1a654db38618bbd3a8faedba_20170907181612.jpg\"},{\"categoryId\":\"20170627104447CA1909a9c0\",\"categoryName\":\"美国\",\"categoryType\":3,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/cda7e1d7763c46c084d742e6d819e1ab_20170907181810.jpg\",\"categoryWeight\":27,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/cda7e1d7763c46c084d742e6d819e1ab_20170907181810.jpg\"},{\"categoryId\":\"20170505134730CA8219dd46\",\"categoryName\":\"西班牙\",\"categoryType\":3,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/3ec25494b11b466e8d7e0c51ca29b7f1_20170908160415.jpg\",\"categoryWeight\":23,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/3ec25494b11b466e8d7e0c51ca29b7f1_20170908160415.jpg\"},{\"categoryId\":\"20170503144434CA7cc04a1c\",\"categoryName\":\"意大利\",\"categoryType\":3,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/eb3c8d0cf3e443b6b2735e84795b3a52_20170908161332.jpg\",\"categoryWeight\":20,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/eb3c8d0cf3e443b6b2735e84795b3a52_20170908161332.jpg\"},{\"categoryId\":\"20170828103100CAfc469281\",\"categoryName\":\"新加坡\",\"categoryType\":3,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/1_20170828103057.jpg\",\"categoryWeight\":16,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/1_20170828103057.jpg\"},{\"categoryId\":\"20170630095235CA0d96cbd9\",\"categoryName\":\"德国\",\"categoryType\":3,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/fbe0dce18afd49fd88a79d043da0e7ab_20170911085445.jpg\",\"categoryWeight\":15,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/fbe0dce18afd49fd88a79d043da0e7ab_20170911085445.jpg\"},{\"categoryId\":\"20170306103919CA70df84e7\",\"categoryName\":\"英国\",\"categoryType\":3,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/fe386f0045e541c495a39b5314e0ae84_20170911093745.jpg\",\"categoryWeight\":10,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/fe386f0045e541c495a39b5314e0ae84_20170911093745.jpg\"},{\"categoryId\":\"20170306104020CA7516cb1b\",\"categoryName\":\"瑞士\",\"categoryType\":3,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/aed5d5e30f7b4b4697abe2e5e8897b93_20170911093937.jpg\",\"categoryWeight\":6,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/aed5d5e30f7b4b4697abe2e5e8897b93_20170911093937.jpg\"},{\"categoryId\":\"20170428150323CAaffd1b5f\",\"categoryName\":\"中国大陆\",\"categoryType\":3,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/5731c64742c14cdfbb424cb34ee8c7dd_20170911101410.jpg\",\"categoryWeight\":6,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/5731c64742c14cdfbb424cb34ee8c7dd_20170911101410.jpg\"},{\"categoryId\":\"20170306104003CAd6e163d9\",\"categoryName\":\"日本\",\"categoryType\":3,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/b1748e9ae7474cde83eaa9b8263235b3_20170911101529.jpg\",\"categoryWeight\":5,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/b1748e9ae7474cde83eaa9b8263235b3_20170911101529.jpg\"},{\"categoryId\":\"20170306103945CAc6d68183\",\"categoryName\":\"韩国\",\"categoryType\":3,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/85729aa6c8a246679ea46494c698c4fa_20170911112820.jpg\",\"categoryWeight\":4,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/85729aa6c8a246679ea46494c698c4fa_20170911112820.jpg\"},{\"categoryId\":\"20170413091557CAd344eafd\",\"categoryName\":\"北欧\",\"categoryType\":3,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/8108e8f001ec468f97a21c366a5a9a86_20170911113300.jpg\",\"categoryWeight\":0,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/8108e8f001ec468f97a21c366a5a9a86_20170911113300.jpg\"},{\"categoryId\":\"20170502102750CAc7f80903\",\"categoryName\":\"加拿大\",\"categoryType\":3,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/0a1e3acbb6224c37a4d6077c96fa3d0f_20170911113906.jpg\",\"categoryWeight\":0,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/0a1e3acbb6224c37a4d6077c96fa3d0f_20170911113906.jpg\"}],\"result\":100,\"resultDesc\":\"\",\"success\":true}"
				)
			}else{
				resolve("{\"categoryList\":[{\"categoryId\":\"20170627115702CA770932a5\",\"categoryName\":\"名校探索\",\"categoryType\":4,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/b806363cb97f4209a222d0c962f713e3_20170911114828.jpg\",\"categoryWeight\":18,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/b806363cb97f4209a222d0c962f713e3_20170911114828.jpg\"},{\"categoryId\":\"20170306101232CAefc0a183\",\"categoryName\":\"日营\",\"categoryType\":4,\"categoryUrl\":\"http://oss.camplink.cn/category/JPG/4bc537c9c87546c68724dadba00ea3b8_20170911115543.JPG\",\"categoryWeight\":9,\"realCategoryUrl\":\"http://oss.camplink.cn/category/JPG/4bc537c9c87546c68724dadba00ea3b8_20170911115543.JPG\"},{\"categoryId\":\"20170306101213CAe70c792b\",\"categoryName\":\"英国学年项目\",\"categoryType\":4,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/aafdb67d15f64149af6da875f2c3b563_20170911115747.jpg\",\"categoryWeight\":8,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/aafdb67d15f64149af6da875f2c3b563_20170911115747.jpg\"},{\"categoryId\":\"20170306101148CAf5c5cb19\",\"categoryName\":\"志愿者项目\",\"categoryType\":4,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/0a8e3f133dd54f2eab6ed626cf4534dd_20170911120030.jpg\",\"categoryWeight\":7,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/0a8e3f133dd54f2eab6ed626cf4534dd_20170911120030.jpg\"},{\"categoryId\":\"20170306095608CA2fbcebf2\",\"categoryName\":\"科技探索\",\"categoryType\":4,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/f84d9424996646e2bd5afded5575f3a5_20170911131640.jpg\",\"categoryWeight\":6,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/f84d9424996646e2bd5afded5575f3a5_20170911131640.jpg\"},{\"categoryId\":\"20170306095629CA081a46ea\",\"categoryName\":\"野生保护\",\"categoryType\":4,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/34a97acbbd1348f3902c018b80920cce_20170911132641.jpg\",\"categoryWeight\":6,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/34a97acbbd1348f3902c018b80920cce_20170911132641.jpg\"},{\"categoryId\":\"20170306095544CAcb3d42cf\",\"categoryName\":\"艺术形式\",\"categoryType\":4,\"categoryUrl\":\"http://oss.camplink.cn/category/15.16-Art-Camp-1080x675.jpg/585be4c398f444a78465489b3940e12d_20170911133122.15.16-Art-Camp-1080x675.jpg\",\"categoryWeight\":5,\"realCategoryUrl\":\"http://oss.camplink.cn/category/15.16-Art-Camp-1080x675.jpg/585be4c398f444a78465489b3940e12d_20170911133122.15.16-Art-Camp-1080x675.jpg\"},{\"categoryId\":\"20170107222733CAb14690a4\",\"categoryName\":\"语言学习\",\"categoryType\":4,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/3ea49d5ec9cb473a85517a3e8005c1f6_20170911135435.jpg\",\"categoryWeight\":3,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/3ea49d5ec9cb473a85517a3e8005c1f6_20170911135435.jpg\"},{\"categoryId\":\"20170108112846CA03fb5ecd\",\"categoryName\":\"全真插班\",\"categoryType\":4,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/acb9b03189df4a069cf3c20ccbce4462_20170911135454.jpg\",\"categoryWeight\":3,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/acb9b03189df4a069cf3c20ccbce4462_20170911135454.jpg\"},{\"categoryId\":\"20170108112827CA0a9c5f9f\",\"categoryName\":\"传统营地\",\"categoryType\":4,\"categoryUrl\":\"http://oss.camplink.cn/category/jpg/e9bb785c10234e0b87fe2f4ce6a73ebb_20170911141435.jpg\",\"categoryWeight\":2,\"realCategoryUrl\":\"http://oss.camplink.cn/category/jpg/e9bb785c10234e0b87fe2f4ce6a73ebb_20170911141435.jpg\"},{\"categoryId\":\"20170112102252CAc19bea4e\",\"categoryName\":\"体育项目\",\"categoryType\":4,\"categoryUrl\":\"http://oss.camplink.cn/category/JPG/946564302d5e452c9a1b27a7f0225d2d_20170911140439.JPG\",\"categoryWeight\":1,\"realCategoryUrl\":\"http://oss.camplink.cn/category/JPG/946564302d5e452c9a1b27a7f0225d2d_20170911140439.JPG\"}],\"result\":100,\"resultDesc\":\"\",\"success\":true}")
			}
		})
	}
}