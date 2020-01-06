function setBackground(urls, targetId) {
    setInterval(function() {
    	if(urls.length === 0){
    		urls = [
				"https://i.imgur.com/I707hwy.gif", //blowing bubbles
				"https://i.imgur.com/qsLhV91.gif", //who me?
				"https://i.imgur.com/oiZMuaC.gif", //telephone
				"https://i.imgur.com/unGDVJv.gif", //vaporwave road
				"https://i.imgur.com/EIZsxuG.gif", //keyboard typing
				"https://i.imgur.com/soj9i15.gif", //macintosh plus
				"https://i.imgur.com/qgzj4Pt.gif", //evangelion walkman
				"https://i.imgur.com/QAqiUuu.gif", //prince of persia
				"https://i.imgur.com/ZmJCpIv.gif", //work out
				"https://i.imgur.com/AxqubiT.gif", //power rangers
				"https://i.imgur.com/fgTRcdT.gif", //h e l p   m e
				"https://i.imgur.com/ulc95Ai.gif", //drinking form straw
				"https://i.imgur.com/pDhDN4M.gif", //VCR menu
				"https://i.imgur.com/Ek3nfcs.gif", //tuning comm
				"https://i.imgur.com/S6QDhWA.gif", //blinking button
				"https://i.imgur.com/iOJUcQ7.gif", //data-stream
				"https://i.imgur.com/857VFjy.gif", //inserting disk
				"https://i.imgur.com/leGzAeS.gif", //entering commands
				"https://i.imgur.com/LujbLVU.gif", //3D-data
				"https://i.imgur.com/Yjn9GVZ.gif", //VHS tapes on the ground
				"https://i.imgur.com/Nb08Qbe.gif", //window hyukoh
				"https://i.imgur.com/PKvK8Nf.gif", //it follows
				"https://i.imgur.com/fRvhSdl.gif", //matilda hammer throw
				"https://i.imgur.com/6OCwYRs.gif", //evangelion blood
				"https://i.imgur.com/kVshy5i.gif", //inuyasha kagome
				"https://i.imgur.com/pRt29Uh.gif", //totoro rain
				"https://i.imgur.com/ufPp1Hv.gif", //princess mononoke spitting blood
				"https://i.imgur.com/aI7g0js.gif", //austin powers
				"https://i.imgur.com/OfyYapR.gif", //spirited away train
				"https://i.imgur.com/j4sqbTI.gif", //truman-show
				"https://i.imgur.com/FLohQYs.gif", //good-will-hunting
				"https://i.imgur.com/0XiTSDB.gif", //kiki's delivery service
				"https://i.imgur.com/DDCU1wS.gif", //spirited away leaving ship
				"https://i.imgur.com/D7iYdRW.gif", //star wars
				"https://i.imgur.com/d8sbuYL.gif", //paprika suicide
				"https://i.imgur.com/6dD9wgs.gif", //guardians of the galaxy awesome mix
				"https://i.imgur.com/zz1KiXB.gif", //cowboy bebop finding location
				"https://i.imgur.com/2amcMk4.gif", //sonic 3 hidden ring
				"https://i.imgur.com/pCVgYOu.gif", //wednesday addams family
				"https://i.imgur.com/V6f9sLY.gif", //jumanji robin williams run
				"https://i.imgur.com/TjnYVEt.gif", //back to the future
				"https://i.imgur.com/UEfSYnk.gif", //pokemon ash on bike
				"https://i.imgur.com/Vhm9Ftg.gif", //akira bike skid
				"https://i.imgur.com/PbKuKLi.gif", //akira explosion
				"https://i.imgur.com/sPR6G2l.gif", //leon the professional
				"https://i.imgur.com/0NOQyr0.mp4", //drive
				"https://i.imgur.com/Bte1Ma3.gif", //drive ryan gosling
				"https://i.imgur.com/g4GVWc8.gif", //laying down
				"https://i.imgur.com/ROK5iWD.gif", //playing-piano
				"https://i.imgur.com/ztmSMxw.gif", //pulp fiction grooving
				"https://i.imgur.com/8lgiF6o.gif", //pulp fiction grooving 2
				"https://i.imgur.com/Gd6aCoV.gif", //grand budapest hotel skiing
				"https://i.imgur.com/rpnByYh.gif", //grand budapest hotel sledding
				"https://i.imgur.com/y6cYymB.gif", //leather jacket riding down the street hyukoh
				"https://i.imgur.com/EZILStq.gif", //leather jacket falling down bike hyukoh
				"https://i.imgur.com/v24b5qb.gif", //alien close
				"https://i.imgur.com/95LRjTR.gif", //alien idle
				"https://i.imgur.com/l3KGnm0.gif", //paper mario excellent
				"https://i.imgur.com/9YLfPe8.gif", //teenage mutant ninja turtles falling
				"https://i.imgur.com/XDKed94.gif", //teenage mutant ninja turtles click clack
				"https://i.imgur.com/r63E6qo.gif", //retro car
				"https://i.imgur.com/Ij8eE8k.gif", //radio waves
			]
    	}
        var index = Math.floor(Math.random() * (urls.length));
        var target = document.getElementById(targetId);
        target.style.backgroundImage = "url(" + urls[index] + ")";
        urls.splice(index, 1);
    }, 2200);
}

var urls = [
	"https://i.imgur.com/I707hwy.gif", //blowing bubbles
	"https://i.imgur.com/qsLhV91.gif", //who me?
	"https://i.imgur.com/oiZMuaC.gif", //telephone
	"https://i.imgur.com/unGDVJv.gif", //vaporwave road
	"https://i.imgur.com/EIZsxuG.gif", //keyboard typing
	"https://i.imgur.com/soj9i15.gif", //macintosh plus
	"https://i.imgur.com/qgzj4Pt.gif", //evangelion walkman
	"https://i.imgur.com/QAqiUuu.gif", //prince of persia
	"https://i.imgur.com/ZmJCpIv.gif", //work out
	"https://i.imgur.com/AxqubiT.gif", //power rangers
	"https://i.imgur.com/fgTRcdT.gif", //h e l p   m e
	"https://i.imgur.com/ulc95Ai.gif", //drinking form straw
	"https://i.imgur.com/pDhDN4M.gif", //VCR menu
	"https://i.imgur.com/Ek3nfcs.gif", //tuning comm
	"https://i.imgur.com/S6QDhWA.gif", //blinking button
	"https://i.imgur.com/iOJUcQ7.gif", //data-stream
	"https://i.imgur.com/857VFjy.gif", //inserting disk
	"https://i.imgur.com/leGzAeS.gif", //entering commands
	"https://i.imgur.com/LujbLVU.gif", //3D-data
	"https://i.imgur.com/Yjn9GVZ.gif", //VHS tapes on the ground
	"https://i.imgur.com/Nb08Qbe.gif", //window hyukoh
	"https://i.imgur.com/PKvK8Nf.gif", //it follows
	"https://i.imgur.com/fRvhSdl.gif", //matilda hammer throw
	"https://i.imgur.com/6OCwYRs.gif", //evangelion blood
	"https://i.imgur.com/kVshy5i.gif", //inuyasha kagome
	"https://i.imgur.com/pRt29Uh.gif", //totoro rain
	"https://i.imgur.com/ufPp1Hv.gif", //princess mononoke spitting blood
	"https://i.imgur.com/aI7g0js.gif", //austin powers
	"https://i.imgur.com/OfyYapR.gif", //spirited away train
	"https://i.imgur.com/j4sqbTI.gif", //truman-show
	"https://i.imgur.com/FLohQYs.gif", //good-will-hunting
	"https://i.imgur.com/0XiTSDB.gif", //kiki's delivery service
	"https://i.imgur.com/DDCU1wS.gif", //spirited away leaving ship
	"https://i.imgur.com/D7iYdRW.gif", //star wars
	"https://i.imgur.com/d8sbuYL.gif", //paprika suicide
	"https://i.imgur.com/6dD9wgs.gif", //guardians of the galaxy awesome mix
	"https://i.imgur.com/zz1KiXB.gif", //cowboy bebop finding location
	"https://i.imgur.com/2amcMk4.gif", //sonic 3 hidden ring
	"https://i.imgur.com/pCVgYOu.gif", //wednesday addams family
	"https://i.imgur.com/V6f9sLY.gif", //jumanji robin williams run
	"https://i.imgur.com/TjnYVEt.gif", //back to the future
	"https://i.imgur.com/UEfSYnk.gif", //pokemon ash on bike
	"https://i.imgur.com/Vhm9Ftg.gif", //akira bike skid
	"https://i.imgur.com/PbKuKLi.gif", //akira explosion
	"https://i.imgur.com/sPR6G2l.gif", //leon the professional
	"https://i.imgur.com/0NOQyr0.mp4", //drive
	"https://i.imgur.com/Bte1Ma3.gif", //drive ryan gosling
	"https://i.imgur.com/g4GVWc8.gif", //laying down
	"https://i.imgur.com/ROK5iWD.gif", //playing-piano
	"https://i.imgur.com/ztmSMxw.gif", //pulp fiction grooving
	"https://i.imgur.com/8lgiF6o.gif", //pulp fiction grooving 2
	"https://i.imgur.com/Gd6aCoV.gif", //grand budapest hotel skiing
	"https://i.imgur.com/rpnByYh.gif", //grand budapest hotel sledding
	"https://i.imgur.com/y6cYymB.gif", //leather jacket riding down the street hyukoh
	"https://i.imgur.com/EZILStq.gif", //leather jacket falling down bike hyukoh
	"https://i.imgur.com/v24b5qb.gif", //alien close
	"https://i.imgur.com/95LRjTR.gif", //alien idle
	"https://i.imgur.com/l3KGnm0.gif", //paper mario excellent
	"https://i.imgur.com/9YLfPe8.gif", //teenage mutant ninja turtles falling
	"https://i.imgur.com/XDKed94.gif", //teenage mutant ninja turtles click clack
	"https://i.imgur.com/r63E6qo.gif", //retro car
	"https://i.imgur.com/Ij8eE8k.gif" //radio waves
];

var target = "epilepsy";

$(function() {
	var documentEl = $(document),
	fade1 = $('#home').attr('id', $(this).text());
	fade2 = $('#projects').attr('id', $(this).text());
	fade3 = $('#about').attr('id', $(this).text());
	    documentEl.on('scroll', function() {
	    var currScrollPos = documentEl.scrollTop();          
	    fade1.each(function() {
	        var $this = $(this),
	       	elemOffsetTop = $this.offset().top;
	        if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/300);
	   	}); 
	   	fade2.each(function() {
	        var $this = $(this),
	       	elemOffsetTop = $this.offset().top;
	        if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/300);
	   	}); 
	   	fade3.each(function() {
	        var $this = $(this),
	       	elemOffsetTop = $this.offset().top;
	        if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/300);
	   	}); 
	});
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.glitch').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            }
            
        }); 
    
    });
    
});

setBackground(urls, target);