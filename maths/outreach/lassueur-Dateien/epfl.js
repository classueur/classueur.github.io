/*!
 * EPFL 1.3 - Core library for dynamic CSS/JS loading for the EPFL websites.
 *
 * Copyright (c) 2012 Julien Ramboz - EPFL
 * Examples and docs at: http://jahia-ws.epfl.ch/jsdoc
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
var epflJ=epflJ||jQuery;
var EPFL=(function(k,b){var c="instances";
var a={};
var h=function(n){var o=n;
if(b.createStyleSheet){b.createStyleSheet(o)
}else{k("head").append(k('<link rel="stylesheet" href="'+o+'" type="text/css" />'))
}};
var l=function(n,p){var o=n;
k.getScript(o,p)
};
var m=function(n,o){return function(){EPFL.loadJS(n,o)
}
};
var e=function(o,n){a[o]={};
a[o][c]={};
a[o].cssTrigger=n.cssTrigger;
a[o].cssUrl=n.cssUrl;
a[o].jsUrl=n.jsUrl;
a[o].jsCallback=n.jsCallback
};
var j=function(p,o,n){if(a[o]===undefined){throw new Error("Unknown EPFL Plugin: "+o)
}a[o][c][p]=n
};
var i=function(n){return a[n][c]
};
var d=function(o,n){return a[n][c][o]
};
var g=function(p,o){var n=window.open(p,o,"width=1020,height=730,left=10,top=10,resizable=yes,scrollbars=yes,status=no");
if(window.focus){n.focus()
}return n
};
var f=function(){k.each(a,function(n,o){if(!o.cssTrigger||(o.cssTrigger&&k(o.cssTrigger).length>0)){if(o.cssUrl){EPFL.loadCSS(o.cssUrl)
}if(o.jsUrl){EPFL.loadJS(o.jsUrl,o.jsCallback)
}}});
EPFL.isInitialized=true
};
return{init:function(){f()
},loadCSS:function(n){if(n instanceof Array&&n.length>1){var o;
for(o=0;
o<n.length;
o++){h(n[o])
}}else{h(n)
}},loadJS:function(n,p){if(n instanceof Array&&n.length>1){var o=n.shift();
l(o,m(n,p))
}else{l(n,p)
}},registerPlugin:function(o,n){e(o,n)
},usePlugin:function(p,o,n){j(p,o,n)
},getPluginInstances:function(n){return i(n)
},getPluginConf:function(o,n){return d(o,n)
},openPopup:function(o,n){return g(o,n)
}}
}(epflJ,document));
epflJ(document).ready(function(){EPFL.init()
});
/*! EPFL analytics 1.1 - Plugin library that handles the GA tracking. */
EPFL.analytics=(function(d,a){window._gaq=[];
var b=function(){for(var e=0;
e<arguments.length;
++e){window._gaq.push(arguments[e])
}};
var c=function(){window._gaq.push(["_setAccount","UA-4833294-1"],["_setDomainName",".epfl.ch"],["_trackPageview"]);
var e="script",h=a.createElement(e),f=a.getElementsByTagName(e)[0];
h.async=1;
h.src="//www.google-analytics.com/ga.js";
f.parentNode.insertBefore(h,f)
};
return{init:function(){try{c()
}catch(e){console.error("Failed to initialize the library",this,e)
}},addConfig:function(){b.apply(this,arguments)
}}
}(epflJ,document));
epflJ(document).ready(function(){EPFL.analytics.init()
});
/*! EPFL header 1.0 - Plugin library that handles the header panels. */
EPFL.header=(function(d,b){var e=function(){d("#header").expose({color:"#000",opacity:0.6,loadSpeed:0,closeSpeed:0});
d(".navigation-panel").addClass("hidden");
d(this).children(".navigation-panel").removeClass("hidden")
};
var a=function(){};
var c=function(){d("#header").mouseleave(function(){d.mask.close();
d(".navigation-panel").addClass("hidden")
});
var f={over:e,out:a,timeout:500};
d("#main-menus .main-link").click(function(){return false
});
d("#main-menus .menu").hoverIntent(f)
};
return{init:function(){try{c()
}catch(f){console.error("Failed to initialize the library",this,f)
}}}
}(epflJ,document));
epflJ(document).ready(function(){EPFL.header.init()
});
/*! EPFL navigation 1.0 - Plugin library that handles the navigation menus. */
EPFL.navigation=(function(c,a){var b=function(){c(".dropdown").click(function(){c(this).children("ul").toggleClass("hidden")
});
c(".dropdown").mouseleave(function(){c(this).children("ul").addClass("hidden")
});
c("#main-navigation .dropdown").hoverIntent(function(){c(this).children("ul").removeClass("hidden")
},function(){c(this).children("ul").addClass("hidden")
});
c("#main-navigation .dropdown").click(function(){return true
});
c(".tree li.inpath").addClass("open");
c(".tree").treeview({collapsed:true,unique:false});
c(".tree").children().addClass("local-color");
c(".tree li a").hover(function(d){d.stopPropagation();
c(".tree li").removeClass("hover");
c(this).parent().addClass("hover")
},function(d){d.stopPropagation();
c(this).parent().removeClass("hover")
});
c("#main-content ul").each(function(){var d=c(this);
if(d.children().length===0){d.remove()
}})
};
return{init:function(){try{b()
}catch(d){console.error("Failed to initialize the library",this,d)
}}}
}(epflJ,document));
epflJ(document).ready(function(){EPFL.navigation.init()
});
/*! EPFL dynamic 1.4 - Registers dynamic plugin libraries. */
(function(a){a.registerPlugin("files-gallery",{cssTrigger:".files-gallery",cssUrl:["/templates/epfl/css/epfl.filesGallery.css"],jsUrl:["/templates/epfl/js/epfl.filesGallery.js"],jsCallback:function(){a.filesGallery.init()
}});
a.registerPlugin("files-list",{cssTrigger:".files-list",cssUrl:"/templates/epfl/css/epfl.filesList.css",jsUrl:"/templates/epfl/js/epfl.filesList.js",jsCallback:function(){a.filesList.init()
}});
a.registerPlugin("filter",{cssTrigger:".filterable",cssUrl:"/templates/epfl/css/epfl.filter.css",jsUrl:"/templates/epfl/js/epfl.filter.js",jsCallback:function(){a.filter.init()
}});
a.registerPlugin("syntax-highlight",{cssTrigger:".syntax-highlight",cssUrl:["http://www.epfl.ch/css/syntaxhighlighter/shCore.css","http://www.epfl.ch/css/syntaxhighlighter/shThemeEPFL.css"],jsUrl:["http://www.epfl.ch/js/syntaxhighlighter/shCore.js","/templates/epfl/js/epfl.syntaxHighlight.js"],jsCallback:function(){a.syntaxHighlight.loadBrushes(window.SyntaxHighlighter);
a.syntaxHighlight.init(window.SyntaxHighlighter)
}});
a.registerPlugin("epfl-map",{cssTrigger:".epfl-map",cssUrl:["http://plan.epfl.ch/mfbase/ext/resources/css/xtheme-gray.css","http://plan.epfl.ch/epflApi/css/api.css"],jsUrl:["/templates/epfl/js/epfl.map.js","http://plan.epfl.ch/mfbase/ext/adapter/ext/ext-base.js","http://plan.epfl.ch/mfbase/ext/ext-all.js","http://plan.epfl.ch/build/epfl.js"],jsCallback:function(){a.map.init(window.Ext,window.epfl)
}})
}(EPFL));
epflJ(document).ready(function(){(function(e,b,d){e(".box.two-cols div.box-col:even").addClass("box-left-col");
e(".box.two-cols div.box-col:odd").addClass("box-right-col");
e("#content:not(.fullpage-content) > .box:odd").addClass("last-col");
e(".toggler").click(function(){e(this).toggleClass("toggled-active").next().slideToggle("slow");
return false
});
e(".modal-opener[rel]").overlay({mask:{color:"#000",opacity:0.6,loadSpeed:200},closeOnClick:false});
var c=e("table.sortable");
if(c.length>0){c.tablesorter()
}e("img[align]").each(function(){e(this).addClass(e(this).attr("align"))
});
e("img[rel]").each(function(){try{e(this).overlay()
}catch(f){console.err("Missing overlay with id: #"+e(this).attr("rel"))
}});
var a=e(".big-buttons");
if(a.length>0){d.loadCSS("/templates/epfl/css/epfl.bigButtons.css");
a.show()
}if(e(".snippets").length>0){d.loadCSS("http://www.epfl.ch/css/applications.css");
e(".snippet-img").click(function(){var f=e(e(this).attr("rel"));
f.expose({color:"#000",loadSpeed:"fast",onLoad:function(){f.show()
},onBeforeClose:function(){f.hide()
}})
})
}if(e("#edit-content").length===0){if(e(".keyVisual").length>1){d.loadCSS("/templates/epfl/css/epfl.keyVisuals.css");
e("#keyVisuals").scrollable({circular:true}).navigator({navi:".indicator"}).autoscroll({interval:7000})
e("#keyVisuals .items").css('left','-652px')
}}e(".keyVisual").show()
}(epflJ,document,EPFL))
});
/*! EPFL search 1.0 - Plugin library that handles the search box. */
EPFL.search=(function(e,c){var a;
var f=function(h){e("#search-options").remove();
e("#searchform input[type=radio]").removeAttr("checked");
var j=h.attr("id");
var g=e("label[for="+j+"]");
var i=e("#searchfield");
i.removeData("autocompleter");
switch(j){case"search-engine-person":b();
break;
case"search-engine-local":e("#searchform").append(e("<input/>").attr({id:"search-options",name:"as_sitesearch",value:window.location.hostname,type:"hidden"}));
break;
default:break
}if(i.val()===e("#searchform label.current").attr("title")){i.val("")
}if(i.val()===""){i.val(g.attr("title"))
}a.toggleClass("current");
a=g;
a.toggleClass("current");
h.attr("checked","checked");
h.blur();
if(c.referrer.indexOf("#")!=-1){h.focus()
}};
var b=function(){var g=e("#searchfield");
g.autocomplete({url:"http://search.epfl.ch/json/autocompletename.action",resultsClass:"ac-list",selectClass:"ac-selected",loadingClass:"ac-loading",useCache:false,filterResults:false,sortResults:false,remoteDataType:"jsonp",queryParamName:"term",limitParamName:"maxRows",maxItemsToShow:15,minChars:3,processData:function(h){if(h instanceof Array&&h.length===0){return h
}var k=[],l;
for(var j in h.result){l=h.result[j];
k.push([l.firstname+" "+l.name,l.name+", "+l.firstname])
}if(h.hasMore){k.push(["http://search.epfl.ch/psearch.action?q="+h.term,h.lang&&h.lang==="en"?"See all results":"Voir tous les r?sultats"])
}return k
},showResult:function(l,k){var i=g.data("autocompleter").lastProcessedValue_;
if(l.indexOf("psearch.action")!==-1){return'<a class="ac-more" href="'+l+'" title="'+k+'">'+k+"</a>"
}var h=new RegExp("("+i+")","ig");
var j="<strong>$1</strong>";
return k[0].replace(h,j)
}})
};
var d=function(){a=e("#searchform label.current");
f(e("#search-engine-person"));
var h=e("#searchfield");
var g=e("#search-box input[type=radio]");
g.change(function(){f(e(this))
});
e("#searchlink").click(function(){h.focus()
});
h.focus(function(){if(e(this).val()===a.attr("title")){e(this).val("").addClass("focused")
}}).blur(function(){if(e(this).val()===""){e(this).val(e("#searchform label.current").attr("title")).removeClass("focused")
}}).keypress(function(i){if(i.which===13){e(this).parent("form").submit()
}});
if(e.browser.msie){g.click(function(){f(e(this));
this.blur();
this.focus()
})
}if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)){e("#search-box label").click(function(){var i=e(this).attr("for");
f(e("#"+i))
})
}};
return{init:function(){try{d()
}catch(g){console.error("Failed to initialize the library",this,g)
}}}
}(epflJ,document));
epflJ(document).ready(function(){EPFL.search.init()
});
/*! EPFL truncate 1.0 - Plugin library that handles truncating text. */
EPFL.truncate=(function(f,b){var c=function(h){var j=h.html();
var g=j.lastIndexOf(" ");
h.html(j.substring(0,g)+"...");
return g!==-1
};
var a=function(h,g){return g.position().top+g.outerHeight()+2<h.position().top+h.innerHeight()
};
var e=function(k,j){var h=f(j),g,i;
h.each(function(l,m){g=f(m);
i=g.find(k);
if(i.length){while(!a(g,i)&&c(i)){}}})
};
var d=function(){var g=f("div.news-text");
g.each(function(j,h){h=f(h);
var l=h.find("p span.heading");
var k=h.find("p span.read-more");
if(l.length&&k.length){while(!a(h,k)&&c(l)){}}})
};
return{init:function(){try{d()
}catch(g){console.error("Failed to initialize the library",this,g)
}},apply:function(h,g){e(h,g)
}}
}(epflJ,document));
epflJ(document).ready(function(){EPFL.truncate.init()
});
