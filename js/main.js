$(function(){let o=$(".banner__right"),t=$(".lang-wrap"),n=$(".banner__description"),l=$(".banner__letterA");$(window).width()>=768&&(o.css({transform:"translateX(0)"}),t.css({transform:"translateX(0)"}),n.css({opacity:"1"}),l.css({transform:"scale(1)"}));let i=$(".main-nav--comp .main-nav__sandwich"),a=$(".main-nav--mobile .main-nav__sandwich"),e=$(".main-nav--comp"),s=$(".main-nav--mobile"),c=$(".main-nav--mobile .main-nav__list"),r=$(".main-nav__background");function p(){$("main").removeClass("blur"),c.slideUp("slow"),r.fadeOut("slow"),$(".lang-wrap").css("opacity","1"),$(".logo-wrap").css("transform","translateX(0)")}i.on("click",function(){e.toggleClass("nav-open")}),a.on("click",function(){s.toggleClass("nav-mobile-open"),s.hasClass("nav-mobile-open")?($("main").addClass("blur"),c.slideDown("slow"),r.fadeIn("slow"),$(".lang-wrap").css("opacity","0"),$(".logo-wrap").css("transform","translateX(166%)")):p()});let f=$(".main-nav--comp .main-nav__list a"),d=$(".main-nav--mobile .main-nav__list a"),h=$(window);function _(o,t,n){let l=o.attr("href"),i=$(l);if(i.length>0){let o=i.offset().top,l=h.scrollTop(),a=Math.abs(o-t-l);$("html,body").animate({scrollTop:o-t},a/n)}}f.on("click",function(o){o.preventDefault(),_($(this),50,2)}),d.on("click",function(o){o.preventDefault(),_($(this),140,5),s.removeClass("nav-mobile-open"),p()});let u=$(".portfolio__gallery-item"),w=$(".portfolio__gallery");$(".portfolio__menu").on("click",".portfolio__tab",function(o){o.preventDefault(),$(this).addClass("active"),$(".portfolio__tab").not($(this)).removeClass("active");let t=$(this).attr("data-filter");"all"==t?w.fadeOut("slow",function(){u.show(),w.fadeIn()}):w.fadeOut("slow",function(){$(t).show(),u.not(t).hide(),w.fadeIn()})});let m=$(".portfolio__gallery-back"),b=$(".portfolio__wrap");function v(o){let t=o.parent().width()/2-o.innerWidth()/2;o.css("left",`${t}px`)}if(m.each(function(){v($(this))}),$(window).width()>=992&&($(".portfolio__gallery-back:first").css("left","-33px"),$(".portfolio__gallery-back:eq(1)").css("left","-65px")),$(window).width()<=380&&(m.each(function(){$(this).innerWidth(b.width()+10),$(this).innerHeight(.71*(b.width()+10))}),m.each(function(){v($(this))})),$(".about__picture-mobile").height(.8*$(".about__picture-mobile").width()),window.screen.width<=768){let o=$(window);o.on("scroll",function(){u.each(function(){console.log($(this)),console.log(o),o.scrollTop()+o.height()>=$(this).offset().top+$(this).height()-80?$(this).find(".portfolio__gallery-back").css("opacity","1"):$(this).find(".portfolio__gallery-back").css("opacity","0")})})}$(window).width()<=768&&$(window).on("scroll",function(){$(window).scrollTop()>0?$(".header").css("box-shadow","0px 4px 10px rgba(0, 0, 0, 0.2)"):$(".header").css("box-shadow","none")});let g=$(".btnUp");g.on("click",function(){let o=h.scrollTop();$("html,body").animate({scrollTop:0},o/3)}),$(window).on("scroll",function(){let o=h.scrollTop()>300;!y&&o?(g.stop(!0).fadeIn(500),y=!0):y&&!o&&(g.stop(!0).fadeOut(500),y=!1)});let y=!1;$(".portfolio__gallery-number").each(function(o,t){++o>9?$(t).text(`${o}`):$(t).text(`0${o}`)});let k=$(".order .form__submit"),x=$(".order .form__check input"),C=$(".popup .form__submit"),T=$(".popup .form__check input");function I(o,t){o.is(":checked")?t.removeAttr("disabled"):t.attr("disabled","disabled")}x.on("click",function(){I($(this),k)}),T.on("click",function(){I($(this),C)});let O=new class{constructor(o){this.modal=$(o.modal),this.overlay=$(o.overlay),this.overlay.on("click",()=>{console.log(1),this.close()})}open(){O.overlay.fadeIn("slow"),O.modal.fadeIn("slow")}close(){O.overlay.fadeOut("slow"),O.modal.fadeOut("slow")}}({modal:".popup .popup__content",overlay:".popup .popup__overlay"});$(".banner__left .button").on("click",function(){O.open()});let D=$(".portfolio__show-btn");$(window).width()<=576&&(u.each(function(o,t){o>3?$(t).css("display","none"):$(t).css("display","block")}),D.on("click",function(){u.each(function(o,t){$(t).css("display","block")})}))
            $('.js-tilt').tilt({
    axis: x
})
            });
