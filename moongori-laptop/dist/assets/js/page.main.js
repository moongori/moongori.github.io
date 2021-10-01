"use strict";var jsonData,initJson=[{code:"0001",display:"Y"},{code:"0002",display:"Y"},{code:"0003",display:"Y"},{code:"0004",display:"Y"},{code:"0005",display:"Y"},{code:"0006",display:"Y"},{code:"0007",display:"Y"},{code:"0008",display:"Y"},{code:"0009",display:"Y"},{code:"0010",display:"Y"},{code:"0011",display:"Y"},{code:"0012",display:"Y"},{code:"0013",display:"Y"},{code:"0014",display:"Y"},{code:"0015",display:"Y"},{code:"0016",display:"Y"},{code:"0017",display:"Y"},{code:"0018",display:"Y"},{code:"0019",display:"Y"}],headerHeight=$("#head").outerHeight()-18+$(".local-head").height();function init(){$.getJSON("user_category_data.json",function(e){jsonData=e}).done(function(){}).fail(function(){console.log("error"),jsonData=initJson}).always(function(){orderCategory(!0)}),showCategory()}function showCategory(){var e=$(".section.category");e.offset().top-headerHeight-$(window).scrollTop()<0&&$(".category-list-wrap").show(),(e.offset().top+e.outerHeight()-headerHeight-$(window).scrollTop()<0||0<e.offset().top-headerHeight-$(window).scrollTop())&&$(".category-list-wrap").hide()}function activeCategory(){$("[id^=cate-]").not(".hide").each(function(){var e;$(this).hasClass("hide")||(e=$(this).attr("id").split("-")[1],$(this).offset().top-headerHeight-20-$(window).scrollTop()<0&&$(".category-list.type1 .category-name."+e).addClass("active").siblings().removeClass("active"))})}function settingCategory(){for(var e=new Array,t=0;t<19;t++){var o=new Object,a=$(".category-list.type2 .category-item").eq(t);o.code=a.attr("data-code"),o.display=a.children("input[type='checkbox']").prop("checked")?"Y":"N",e.push(o)}jsonData=e}function orderCategory(){[].forEach.call(jsonData,function(e){var t="[data-code='"+e.code+"']",o=$(".category-list.type1 .category-name"+t),a=$(".category-list.type2 .category-item"+t),t=$("#category-wrap .category-inner"+t);$(".category-list.type1").append(o),$("#category-wrap").append(t),$(".category-list.type2").append(a),"Y"==e.display?(o.removeClass("hide"),t.removeClass("hide"),t.find(".goods-list, .category-banner-list").slick("refresh"),a.removeClass("unenabled"),a.children("input").prop("checked",!0)):(o.addClass("hide"),t.addClass("hide"),a.addClass("unenabled"),a.children("input").prop("checked",!1))})}$(function(){init(),$(".btn-setting").click(function(){$(".category-layer").toggle()}),$(".btn-reset").click(function(){jsonData=initJson,[].forEach.call(jsonData,function(e){var t="[data-code='"+e.code+"']",t=$(".category-list.type2 .category-item"+t);$(".category-list.type2").append(t),"Y"==e.display?(t.removeClass("unenabled"),t.children("input").prop("checked",!0)):(t.addClass("unenabled"),t.children("input").prop("checked",!1))})}),$(".btn-cancel").click(function(){$(".category-layer").hide()}),$(".btn-confirm").click(function(){settingCategory(),orderCategory(),$(".category-layer").hide()}),$(".category-list.type2 input[type='checkbox']").on("change",function(){$(this).prop("checked")?$(this).closest(".category-item").removeClass("unenabled"):$(this).closest(".category-item").addClass("unenabled")}),$(".category-list.type2").sortable({}),$(".category-list.type1 .category-name").on("click",function(e){e.preventDefault();e=$(this).attr("href"),e=$(e).offset().top-headerHeight;$(window).scrollTop(e)}),$(window).on("scroll",function(){showCategory()}),$("#category-wrap .goods-list").slick({infinite:!0,rows:2,slidesPerRow:4}),$(".category-banner-list").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,fade:!0})});