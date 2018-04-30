// var util=require('../../assets/js/public.js');
import * as util from '../../assets/js/public.js'
const content={
	init(){
		// new Vue({
		//   el: '#app',
		//   data: {
		//     message: 'Hello Vue!'
		//   }
		// })
		$(function(){
	        util.navScrollPosition({ 'element':$('.head_nav')});
	        // changeEvent($('.startTime'));
	        //选择我的营地
	        event_yingdi();
	        //特价&热门分类营地列表、主题分类列表
	        new carousel();
	        new Lunbo({
	            'element':$('.subjects_div'),
	            'pageSize':6
	        });
	    })
	    function carousel(){
	        var That=this;
	        this.index=0;
	        this.carousel_index=$('.carousel_index');
	        this.Acarousel_index=this.carousel_index.children('li');
	        this.carouselLen=this.Acarousel_index.length;
	        this.width=$(window).width();
	        if(this.carouselLen>1){
	            this.carousel_index.css({'margin-left':-(this.carouselLen*13)/2,'display':'block'});//控制圆点的居中、显示
	        }
	        this.timer1=setInterval(bannerCarousel,6000);
	        this.Acarousel_index.on('click',function(){
	            clearInterval(That.timer1);
	            That.index=$(this).index();
	            bannerCarousel();
	            That.timer1=setInterval(bannerCarousel,6000)
	        });
	        //banner 轮播
	        function bannerCarousel(){
	            That.Acarousel_index.eq(That.index).addClass('active').siblings('li').removeClass('active');
	            $('.carousel').children('li').eq(That.index).fadeIn().siblings('li').fadeOut();
	            That.index=(That.index+1) % That.carouselLen;
	        }
	    }
	    function Lunbo(config){
	        var This=this;
	        this.disk=1;
	        this.leftBtn=config['element'].children('.j_leftLunbo');
	        this.rightBtn=config['element'].children('.j_rightLunbo');
	        this.lunboElement=config['element'].children('.subject_list');
	        this.Aelement=this.lunboElement.children(':first-child');
	        this.Awidth=this.Aelement.width()+parseInt(this.Aelement.css('margin-left'));
	        this.pageNo=0;
	        this.pgeCount=0;
	        this.totalCount=this.lunboElement.children().length;
	        this.pageSize=config['pageSize'] || 5;
	        this.pgeCount=this.totalCount-this.pageSize+1;
	        this.lunboElement.width(this.totalCount*this.Awidth);
	        //合作伙伴 左右按钮是否显示
	        this.setLunbo=function(){
	            if(this.totalCount<=this.pageSize){
	                this.leftBtn.hide();
	                this.rightBtn.hide();
	            }else{
	                if(this.pageNo==0){
	                    This.disk=1;
	                    this.leftBtn.hide();
	                    this.rightBtn.show();
	                }else if(this.pageNo==this.pgeCount-1){
	                    This.disk=-1;
	                    this.leftBtn.show();
	                    this.rightBtn.hide();
	                }else{
	                    this.leftBtn.show();
	                    this.rightBtn.show();
	                }
	            }
	        }
	        this.setLunbo();
	        this.time1=setInterval(function(){
	            next(This.disk);
	        },2000);
	        config['element'].on('mouseover',function(){
	            clearInterval(This.time1);
	        })
	        config['element'].on('mouseout',function(){
	            This.time1=setInterval(function(){
	                next(This.disk);
	            },2000);
	        })
	        this.leftBtn.on('click',function(){
	            next(-1);
	            return false;
	        })
	        this.rightBtn.on('click',function(){
	            next(1);
	            return false;
	        })
	        function next(num){
	            This.pageNo=(This.pageNo+num) % This.pgeCount;
	            This.lunboElement.animate({'left':This.pageNo*-This.Awidth},600);
	            This.setLunbo();
	        }
	    }
	    function event_yingdi(){
	        var con1={},con2={};
	        //3 加载目的地
	        util.load_local(3,function(arr){
	            con1=arr;
	        });
	        //4加载主题类型-想去哪里
	        util.load_local(4,function(arr){
	            con2=arr;
	        });
	        $('#place').focus(function(){
	            util.index_select($(this),con1);
	        }).blur(function(){
	            util.index_blur($(this));
	        })
	        $('#wantDo').focus(function(){
	            util.index_select($(this),con2);
	        }).blur(function(){
	            util.index_blur($(this));
	        });
	        $('#search').click(function(){
	            var place=$('#place').attr('data-value');
	            var wantDo=$('#wantDo').attr('data-value');
	            var depDate=$('#J_DepDate').val();
	            var date=[];
	            if(depDate.indexOf('至')!=-1){
	                date=depDate.split('至');
	            }
	            var obj={
	                'localeCategoryId':place,
	                'subjectCategoryId':wantDo,
	                'startdate':date[0],
	                'enddate':date[1]
	            };
	            auto_submit('/search.jsp',$.param(obj),'get')
	            return false;
	        })
	    }
	    function show(url){
	        window.location.href=url;
	    }
	}
}
export default content;