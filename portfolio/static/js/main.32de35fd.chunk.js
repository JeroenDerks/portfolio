(this.webpackJsonpjeroen_derks_portfolio=this.webpackJsonpjeroen_derks_portfolio||[]).push([[0],{33:function(e,t,n){e.exports=n.p+"static/media/dw1.2716018d.jpg"},34:function(e,t,n){e.exports=n.p+"static/media/nobel4.9ab9a99e.jpg"},35:function(e,t,n){e.exports=n.p+"static/media/konstruktur.dca7f7ef.jpg"},36:function(e,t,n){e.exports=n.p+"static/media/dhi1.c020e2ef.jpg"},37:function(e,t,n){e.exports=n.p+"static/media/dhi2.bac51068.jpg"},38:function(e,t,n){e.exports=n.p+"static/media/rb1.81c9c370.jpg"},39:function(e,t,n){e.exports=n.p+"static/media/rb2.08334fff.jpg"},40:function(e,t,n){e.exports=n.p+"static/media/ds1.6718d9be.jpg"},51:function(e,t,n){e.exports=n.p+"static/media/jeroenderks.cd4e090a.jpg"},52:function(e,t,n){e.exports=n.p+"static/media/dw2.7c27b41d.jpg"},58:function(e,t,n){e.exports=n(74)},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(24),o=n.n(r),s=n(15),l=n(47),c=n.n(l),m=n(90),h=n(87),p=n(86),d=(Object(p.a)({categoryWrapper:{height:"100vh",width:"100%",boxSizing:"border-box",position:"relative",pointerEvents:"none",paddingTop:200},grid:{maxWidth:1200},gridItem:{transition:"all .6s ",transitionTimingFunction:"ease",cursor:"pointer"},greyScale:{filter:"grayscale(70%)"},icon:{width:24,height:24,position:"absolute",bottom:6,right:2,opacity:.6,transition:"opacity .2s",cursor:"pointer",zIndex:2e3,"&:hover":{opacity:.8}},image:{width:"100%"},transition:{transition:"all .6s ",transitionTimingFunction:"ease"},wrapper:{transition:"all .6s ",transitionTimingFunction:"ease"}}),Object(p.a)({link:{color:"#fff",textDecoration:"none","&:hover":{textDecoration:"underline"}},wrapper:{backgroundColor:"#000",width:"max-content",padding:"0px 2px",cursor:"pointer",pointerEvents:"all"}})),u=n(88);var g=function(e){var t=e.title,n=e.technologies;return i.a.createElement(h.a,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start"},i.a.createElement(h.a,{item:!0,sm:12,md:10,lg:11},i.a.createElement(u.a,{variant:"h2"},t)),i.a.createElement(h.a,{item:!0,sm:12,md:2,lg:1},i.a.createElement(u.a,{variant:"body1"},i.a.createElement("span",{style:{fontWeight:700}},n.mainTitle)),n.location&&i.a.createElement(u.a,{variant:"body1"},n.location),i.a.createElement(u.a,{variant:"body1"},n.subTitle)))};var f=function(e){var t=e.description,n=e.link,a=i.a.useContext(ye).state.padding,r=d();return i.a.createElement(m.a,{px:a.text},t&&t.map((function(e,t){return i.a.createElement(m.a,{pt:1,key:t},i.a.createElement(u.a,{variant:"body1"},e))})),n&&i.a.createElement(m.a,{pt:1},i.a.createElement(u.a,{variant:"body1",className:r.wrapper},n)))};var b=function(e){var t=e.props,n=i.a.useContext(ye).state.padding,a=(d(),t.title),r=t.technologies,o=t.description,s=t.content,l=t.link,p=a.replace(/\s/g,""),u=8*n.x*2,b=8*n.y,y=.5625*((window.innerWidth-u)/12*7),E=window.innerHeight-b-y;return i.a.createElement("div",{id:p,style:{position:"relative"}},i.a.createElement(c.a,{boundaryElement:"#"+p,style:{position:"relative"},stickyStyle:{pointerEvents:"none",zIndex:"1000"},hideOnBoundaryHit:!1},i.a.createElement(m.a,{boxSizing:"border-box",display:"flex",flexWrap:"wrap",pt:n.y,height:"100vh",width:1},i.a.createElement(g,{title:a,technologies:r}),i.a.createElement(m.a,{width:1,pb:n.y,alignSelf:"flex-end"},i.a.createElement(h.a,{container:!0,spacing:0},i.a.createElement(h.a,{item:!0,md:6,lg:7}),i.a.createElement(h.a,{item:!0,md:4,lg:4},i.a.createElement(f,{description:o,link:l})))))),i.a.createElement(m.a,{style:{marginTop:"-100vh"}},i.a.createElement(h.a,{container:!0,spacing:0},s&&s.map((function(e,t){return i.a.createElement(i.a.Fragment,{key:t},i.a.createElement(h.a,{item:!0,md:6,lg:7},i.a.createElement(m.a,{width:1,pb:n.y,style:{paddingTop:0===t?E:0}},e)),i.a.createElement(h.a,{item:!0,md:6}))})))))},y=n(18),E=Object(p.a)({button:{backgroundColor:"#fff",color:"#000",cursor:"pointer",textDecoration:"none",transition:"all .2s","&:hover":{backgroundColor:"#000",color:"#fff"}}});var v=function(){var e=E();return i.a.createElement(m.a,{pt:5},i.a.createElement(h.a,{container:!0,justify:"space-between"},i.a.createElement(h.a,{item:!0,md:2,lg:1},i.a.createElement(u.a,{variant:"h5"},i.a.createElement(y.a,{to:"/others",className:e.button},"Other works"))),i.a.createElement(h.a,{item:!0,md:2,lg:1},i.a.createElement(u.a,{variant:"h5"},i.a.createElement(y.a,{to:"/others",className:e.button},"Other works")))))};var w=function(e){var t=i.a.useState(!1),n=Object(s.a)(t,2),a=n[0],r=n[1],o=i.a.useRef();return i.a.useEffect((function(){new IntersectionObserver((function(e){e.forEach((function(e){return r(e.isIntersecting)}))})).observe(o.current)}),[]),i.a.createElement("div",{className:"fade-in-section ".concat(a?"is-visible":""),ref:o},e.children)};var k=function(e){var t=e.props,n=i.a.useContext(ye).state.padding,a=t.title,r=t.technologies,o=t.description,s=t.content;return t.link,i.a.createElement("div",{style:{position:"relative"}},i.a.createElement(w,null,i.a.createElement(m.a,{boxSizing:"border-box",display:"flex",flexWrap:"wrap",pt:n.y,height:"100vh",width:1},i.a.createElement(g,{title:a,technologies:r}),i.a.createElement(m.a,{width:1,pb:n.y,alignSelf:"flex-end"},i.a.createElement(h.a,{container:!0,direction:"row",alignItems:"flex-end"},i.a.createElement(h.a,{item:!0,md:6,lg:7},i.a.createElement(m.a,{width:1},s)),i.a.createElement(h.a,{item:!0,md:4,lg:4},i.a.createElement(m.a,{px:n.text},o&&o.map((function(e,t){return i.a.createElement(m.a,{pt:2,key:t},i.a.createElement(u.a,{variant:"body1",style:{fontWeight:700}},e.subtitle),e.data&&e.data.map((function(e,t){return i.a.createElement(m.a,{pt:1,key:t},i.a.createElement(u.a,{variant:"body1"},e))})))})))),i.a.createElement(h.a,{item:!0,md:12},i.a.createElement(v,null)))))))};var x=function(e){var t=e.props,n=t.title,a=t.technologies,r=t.description,o=t.content;return i.a.createElement(m.a,null,i.a.createElement(m.a,{boxSizing:"border-box",pt:10,width:1},i.a.createElement(u.a,{variant:"h2"},n),i.a.createElement(u.a,{variant:"body1"},i.a.createElement("span",{style:{fontWeight:700}},a.mainTitle," "),a.location&&" - "+a.location," - "," ",a.subTitle),i.a.createElement(m.a,{pt:2},r&&r.map((function(e,t){return i.a.createElement(m.a,{pt:1,key:t},i.a.createElement(u.a,{variant:"body1",style:{fontWeight:700}},e.subtitle),e.data&&e.data.map((function(e,t){return i.a.createElement(m.a,{pt:1,key:t},i.a.createElement(u.a,{variant:"body1"},e))})))}))),i.a.createElement(m.a,null,o),i.a.createElement(v,null)))},S=n(51),T=n.n(S),j={title:"Jeroen Derks",technologies:{mainTitle:"+45 5281 6166",location:"From the Netherlands",subTitle:"Based in CPH, Denmark"},description:[{subtitle:"Experience",data:["\u2022 Frontend developer and designer/ DHI GRAS/ Copenhagen, DK/ 2018 - 2020","\u2022 Student Interaction Designer/ YOKE/ Copenhagen, DK/ 2017","\u2022 VR Post Production Assistent/ Makropol/ Copenhagen, DK/ 2017","\u2022 Graphic and interactive design intern/ Derooted Creative Agency/ Toronto, CAN/ 2011"]},{subtitle:"Education",data:["\u2022 Art & Technology BA/ Aalborg University/ Aalborg, DK/ 2013 - 2016","\u2022 International Communication and Media BA/ University of Applied sciences/ Utrecht, NL/ 2008 - 2013"]}],content:i.a.createElement("img",{src:T.a,style:{width:"100%"},alt:"dynamic_still"})};var W=function(){var e=i.a.useContext(ye).state,t=e.aboutRef,n=e.mobile,a=e.padding,r={paddingTop:8,paddingBottom:8,paddingLeft:8*a.x,paddingRight:8*a.x,boxSizing:"border-box"};return i.a.createElement("div",{ref:t,style:r},n?i.a.createElement(x,{props:j}):i.a.createElement(k,{props:j}))},C=n(29),F=n.n(C);function R(e){var t,n,a,i,r,o=[],s=[],l=[],c=[],m=[],h=[],p=[],d=0,u=0,g=0,f=0,b=0,y=0,E=!0,v=80;e.setup=function(){e.createCanvas(window.innerWidth,window.innerHeight),t=.56*e.width-.05*e.height,n=.74*e.width,i=.77*e.height-.5625*(.56*e.width-.15*e.height),a=i,r=.8*e.height,window.innerWidth>1400&&(v=120),e.textSize(12)},console.log("headersketchg"),e.myCustomRedrawAccordingToNewPropsHandler=function(e){null!==e.paddingLeft&&(v=e.paddingLeft)},e.windowResized=function(){e.resizeCanvas(window.innerWidth,window.innerHeight),v=window.innerWidth>1400?120:80,t=.56*e.width-.05*e.height,n=.74*e.width,i=.77*e.height-.5625*(.56*e.width-.15*e.height),a=i,r=.8*e.height},e.draw=function(){if(E);else if(s[0]===e.mouseX&&l[0]===e.mouseY&&0===u)return;e.background(255);for(var w=9;w>0;w--)c[w]=c[w-1],h[w]=h[w-1],m[w]=m[w-1],p[w]=p[w-1];c[0]=e.abs(e.pmouseX-e.mouseX),h[0]=e.abs(e.pmouseY-e.mouseY),m[0]=e.round(.1*c.reduce((function(e,t){return e+t}),0)),p[0]=e.round(.1*h.reduce((function(e,t){return e+t}),0)),d=m[0]+p[0],u=d-g,f=f+e.abs(e.pmouseY-e.mouseY)+e.abs(e.pmouseX-e.mouseX);for(var k=b=e.round(f/e.frameCount);k>0;k--)s[k]=s[k-1],l[k]=l[k-1],o[k]=o[k-1];s[0]=e.mouseX,l[0]=e.mouseY,o[0]=e.int(e.dist(t,i,e.mouseX-4,e.mouseY+3));for(var x=b;x>0;x--){e.fill(255,255,235),e.stroke(255),e.strokeWeight(2);var S=o[x]+c[x]+m[x],T=o[x]+h[x]+p[x];Number.isInteger(S)&&Number.isInteger(T)&&e.ellipse(s[x],l[x],S,T)}e.stroke(255,255,150),e.strokeWeight(y),e.fill(255,255,0);var j=o[0]+c[0]+m[0],W=o[0]+h[0]+p[0];Number.isInteger(j)&&Number.isInteger(W)&&e.ellipse(s[0],l[0],j,W),e.fill(50),e.noStroke(),e.text(o[0],t,i),e.text(e.int(e.mouseX),v,i),e.text(e.int(e.mouseY),v,i+20),e.text(y,n,a),e.text(m[0],v,r-20),e.text(p[0],v,r),e.text(u,t,r),e.text(b,n,r),g=d,E&&(e.fill(255,255-5*e.frameCount),e.rect(0,0,e.width,e.height),5*e.frameCount>255&&(E=!1))},e.mouseReleased=function(){y++}}var D=n(91),I={cursor:"pointer",textDecoration:"none"};var A=function(){var e=i.a.useContext(ye),t=e.actions.scrollTo,n=e.state,a=n.aboutRef,r=n.projectRef,o=n.padding;return i.a.createElement(m.a,{style:{height:"100vh"}},i.a.createElement(m.a,{position:"absolute"},i.a.createElement(F.a,{sketch:R,paddingLeft:8*o.x})),i.a.createElement(m.a,{position:"absolute",pl:o.x,pt:o.y},i.a.createElement(u.a,{variant:"h2"},"Digital Playgrounds"),i.a.createElement(u.a,{variant:"subtitle1"},"Welcome to Jeroen's collection of tech experiments and digital-physical interfaces")),i.a.createElement(m.a,{position:"absolute",pl:o.x,bottom:8*o.y},i.a.createElement(u.a,{variant:"h5"},i.a.createElement(D.a,{style:I,onClick:function(){return t(r)}},"Projects"))),i.a.createElement(m.a,{position:"absolute",right:8*o.x,bottom:8*o.y},i.a.createElement(u.a,{variant:"h5"},i.a.createElement(D.a,{style:I,onClick:function(){return t(a)}},"About"))))};var O=function(e){var t=e.props,n=t.title,a=t.technologies,r=t.description,o=t.contentMobile,s=t.link,l=d();return i.a.createElement(m.a,null,i.a.createElement(m.a,{boxSizing:"border-box",pt:10,width:1},i.a.createElement(u.a,{variant:"h2"},n),i.a.createElement(u.a,{variant:"body1"},i.a.createElement("span",{style:{fontWeight:700}},a.mainTitle," "),a.location&&" - "+a.location," - "," ",a.subTitle),i.a.createElement(m.a,{pt:2}),i.a.createElement(u.a,{variant:"body1"},r&&r.map((function(e){return e}))),s&&i.a.createElement(m.a,{pt:1,pb:2},i.a.createElement(u.a,{variant:"body1",className:l.wrapper},s)),i.a.createElement(m.a,null,o&&o.map((function(e,t){return i.a.createElement(m.a,{width:1,pb:10,key:t},e)})))))};n(73);var L,N,M,H,z,Y,P,B,X=function(e){var t=e.projects,n=i.a.useContext(ye).state,a=n.mobile,r=n.padding,o=n.projectRef,s={paddingTop:8,paddingBottom:8,paddingLeft:8*r.x,paddingRight:8*r.x,boxSizing:"border-box"};return i.a.createElement("div",{ref:o,style:s},t&&t.map((function(e,t){return i.a.createElement(w,{key:t},a?i.a.createElement(O,{props:e}):i.a.createElement(b,{props:e}))})))},q=[],K=[],_=[],V=!1;var J=n(33),G=n.n(J),U=n(52),$=n.n(U),Q=n(34),Z=n.n(Q),ee=n(35),te=n.n(ee),ne=n(36),ae=n.n(ne),ie=n(37),re=n.n(ie),oe=n(38),se=n.n(oe),le=n(39),ce=n.n(le),me=n(40),he=n.n(me),pe={width:"100%"},de={color:"#fff",textDecoration:"none"},ue={position:"absolute",top:0,left:0,width:"100%",height:"100%"},ge={position:"relative",width:"100%",height:0,paddingBottom:"56.25%"},fe=function(e){return i.a.createElement("div",{style:ge},i.a.createElement("iframe",{src:"https://player.vimeo.com/video/".concat(e,"?title=0&byline=0&portrait=0"),title:e,frameBorder:"0",allow:"fullscreen",allowFullScreen:!0,style:ue}))},be=[{title:"Darkweb",technologies:{mainTitle:"P5.js HTML CSS",subTitle:"concept, interaction & visual design, web development"},description:["Dark Web is an internet-based digital music release by sound artist Morten Poulsen","Through a combination of composed music and interactive visuals, Dark Web creates space and time for Deep Listening.","Audio implementation by Martin Sohn \xd8stergaard. Visual Design and Interaction Design by Jeroen Derks."],content:[i.a.createElement("div",{style:{cursor:"crosshair"}},i.a.createElement(F.a,{sketch:function(e){e.setup=function(){var t=(window.innerWidth-276)/12*7,n=.5625*t;e.createCanvas(t,n),q.push(new e.Square(0,0,e.width,e.height)),e.fill(0),e.rect(0,0,e.width,e.height),L=0,N=120},e.windowResized=function(){q.splice(0,q.length),K.splice(0,K.length),_.splice(0,_.length);var t=(window.innerWidth-276)/12*7,n=.544*t;e.resizeCanvas(t,n),q.push(new e.Square(0,0,e.width,e.height)),N=120,L=0},e.draw=function(){if(e.stroke(0),e.strokeWeight(4),e.fill(0),e.rect(0,0,e.width,e.height),++L%N===0){N+=10,L=0;for(var t=e.int(e.random(e.width)),n=e.int(e.random(e.height)),a=q.length-1;a>=0;a--)q[a].intersects(t,n)&&(M=q[a].x,H=q[a].y,z=q[a].w,Y=q[a].h,P=H+Y-n,B=M+z-t,V=!0),V&&(q.splice(a,1),z>Y?(K.push(new e.VLine(t,H,Y,B)),q.push(new e.Square(M,H,t-M,Y)),q.push(new e.Square(t,H,z+M-t,Y))):(_.push(new e.HLine(M,n,z,P)),q.push(new e.Square(M,H,z,n-H)),q.push(new e.Square(M,n,z,Y+H-n))),V=!1)}for(var i=0;i<q.length;i++)q[i].move(),q[i].display();for(var r=0;r<K.length;r++)K[r].move(),K[r].display();for(var o=0;o<_.length;o++)_[o].move(),_[o].display()},e.mouseReleased=function(){for(var t=q.length-1;t>=0;t--)q[t].intersects(e.mouseX,e.mouseY)&&(M=q[t].x,H=q[t].y,z=q[t].w,Y=q[t].h,P=H+Y-e.mouseY,B=M+z-e.mouseX,V=!0),V&&(q.splice(t,1),z>Y?(K.push(new e.VLine(e.mouseX,H,Y,B)),q.push(new e.Square(M,H,e.mouseX-M,Y)),q.push(new e.Square(e.mouseX,H,z+M-e.mouseX,Y))):(_.push(new e.HLine(M,e.mouseY,z,P)),q.push(new e.Square(M,H,z,e.mouseY-H)),q.push(new e.Square(M,e.mouseY,z,Y+H-e.mouseY))),V=!1);return!1},e.VLine=function(t,n,a,i){this.x=t,this.y=n,this.h=a,this.w=i,this.i=this.h%5,this.incr=5,this.by=0,this.bf=1,this.incr=5,this.bounce=!1,this.grow=!0,this.display=function(){e.stroke(0),e.strokeWeight(3),e.line(this.x+this.by,this.y-1,this.x+this.by,this.y+this.i-1),e.strokeWeight(1),e.stroke(150),e.line(this.x+this.by,this.y+1,this.x+this.by,this.y+this.i-1),e.line(this.x,this.y,this.x,this.y+this.i)},this.move=function(){this.bounce&&(this.by+=this.bf,(this.by>=this.w-2||this.by<0)&&(this.bf*=-1)),this.grow&&(this.i+=this.incr,this.i>=this.h&&(this.h>10&&this.h<30&&(this.bounce=!0),this.grow=!1))}},e.HLine=function(t,n,a,i){this.x=t,this.y=n,this.w=a,this.h=i,this.i=this.w%5,this.by=0,this.bf=1,this.incr=5,this.bounce=!1,this.grow=!0,this.display=function(){e.stroke(0),e.strokeWeight(3),e.line(this.x+2,this.y+this.by,this.x+this.i-2,this.y+this.by),e.strokeWeight(1),e.stroke(150),e.line(this.x,this.y,this.x+this.i,this.y),e.line(this.x+2,this.y+this.by,this.x+this.i-2,this.y+this.by)},this.move=function(){this.bounce&&(this.by+=this.bf,(this.by>=this.h-2||this.by<0)&&(this.bf*=-1)),this.grow&&(this.i+=this.incr,this.i>=this.w&&(this.incr=0,this.w>10&&this.w<30&&(this.bounce=!0),this.grow=!1))}},e.Square=function(t,n,a,i){this.x=t,this.y=n,this.w=a,this.h=i,this.mx=0,this.my=0,this.incr=5,this.i=this.y,this.display=function(){e.noStroke(),e.noFill(),e.rect(this.x,this.y,this.w,this.h)},this.move=function(){this.i+=this.incr,this.i>=this.y+this.h&&(this.incr=0)},this.intersects=function(e,t){return this.mx=e,this.my=t,this.mx>this.x&&this.mx<this.x+this.w&&this.my>this.y&&this.my<this.y+this.h}}}})),i.a.createElement("img",{src:G.a,style:pe,alt:"dw1"})],contentMobile:[i.a.createElement("img",{src:G.a,style:pe,alt:"dw1"}),i.a.createElement("img",{src:$.a,style:pe,alt:"dw2"})],link:i.a.createElement("a",{href:"http://www.darkweb.dk",target:"_blank",rel:"noopener noreferrer",style:de},"direct darkweb access")},{title:"Chemical Reactions",technologies:{mainTitle:"Unity, Contentful CMS",location:"at YOKE for:\nNobel Museum Dubai",subTitle:"interaction design, development"},description:["An interface designed to teach people about chemical reactions.","The visitor is offered physical blocks that represent chemical elements. By combining the right elements they can trigger information and video material of their specific chemical reaction."],content:[fe("254181584"),i.a.createElement("img",{src:Z.a,style:pe,alt:"chemicalReactions1"})],contentMobile:[fe("254181584"),i.a.createElement("img",{src:Z.a,style:pe,alt:"chemicalReactions2"})]},{title:"Konstruktur",technologies:{mainTitle:"OpenFrameworks",location:"at YOKE for:\nHorsens Manucipality",subTitle:"assembly, installation"},description:["An interactive grid of 196 custom-made responsive lightsources explores light as a material for creating temporary structures in urban space.","Konstruktur is a live experiment, challenging the perception of space. Appearing as a three dimensional sketch pad, the installation works as an interactive light architecture. By inviting visitors to create temporary structures of light, the installation explores the fleeting urban spaces of tomorrow.","Music in video by: Reveal by Panxing"],content:[fe("241518803"),i.a.createElement("img",{src:te.a,style:pe,alt:"Konstruktur1"})],contentMobile:[fe("241518803"),i.a.createElement("img",{src:te.a,style:pe,alt:"Konstruktur1"})]},{title:"DHI GRAS",technologies:{mainTitle:"React, JS, Wordpress",subTitle:"design, web development"},description:["Since I was DHI GRAS\u2019 first person with design skills and an interest in frontend development, I was responsible for defining a graphic style and increasing the organisation\u2019s online presence.","In almost 2 years we launched over 30 data viewers and web portals, made over 15 videos and gave the website a complete overhaul."],content:[i.a.createElement("img",{src:ae.a,style:pe,alt:"dhi1"}),i.a.createElement("img",{src:re.a,style:pe,alt:"dhi2"})],contentMobile:[i.a.createElement("img",{src:ae.a,style:pe,alt:"dhi1"}),i.a.createElement("img",{src:re.a,style:pe,alt:"dhi2"})],link:i.a.createElement("a",{href:"http://www.derks.dk/others/dhi",target:"_blank",rel:"noopener noreferrer",style:de},"more details")},{title:"Rebekka Borum",technologies:{mainTitle:"P5js, HTML, CSS ",subTitle:"design, web development"},description:["Rebekka is an Aalborg based painter. Her website is inspired by the geometrical, balanced shapes of her paintings.","In addition her fans have the possibility to digitally reconstruct her artworks in the opening graphic on the landing page"],content:[i.a.createElement("img",{src:se.a,style:pe,alt:"rebekka1"}),i.a.createElement("img",{src:ce.a,style:pe,alt:"rebekka2"})],contentMobile:[i.a.createElement("img",{src:se.a,style:pe,alt:"rebekka1"}),i.a.createElement("img",{src:ce.a,style:pe,alt:"rebekka2"})],link:i.a.createElement("a",{href:"http://www.rebekka-borum.com",target:"_blank",rel:"noopener noreferrer",style:de},"take me there")},{title:"Dynamic Still",technologies:{mainTitle:"HTC Vive, Python, Processing",location:"Improv Festival, Aalborg Theatre",subTitle:"robot programmer"},description:["This improvisational piece investigates creative performances between living and non-living actors\u2014 a human being and an intelligent mobile robot. None of the programmed elements are pre-scripted or tele-operated; audiences watch the actors communicate and improvise to develop an original performance. ","The project is developed by RELATE - Research Laboratory for Art and Technology at AAU."],content:[fe("211666686"),i.a.createElement("img",{src:he.a,style:pe,alt:"dynamic_still"})],contentMobile:[fe("211666686"),i.a.createElement("img",{src:he.a,style:pe,alt:"dynamic_still"})],link:i.a.createElement("a",{href:"https://vbn.aau.dk/en/publications/tonight-we-improvise-real-time-tracking-for-human-robot-improvisa",target:"_blank",rel:"noopener noreferrer",style:de},"Read the paper")}],ye=i.a.createContext();var Ee=function(){var e=function(){return window.innerWidth<600?{y:5,x:5,text:2}:window.innerWidth<1400?{y:10,x:10,text:4}:{y:10,x:17,text:8}},t=i.a.useState(e),n=Object(s.a)(t,2),a=n[0],r=n[1],o=i.a.useState(window.innerWidth<960),l=Object(s.a)(o,2),c=l[0],m=l[1];i.a.useEffect((function(){window.addEventListener("resize",(function(){r(e),m(window.innerWidth<960)}))}));var h=i.a.createRef(),p=i.a.createRef();return i.a.createElement(ye.Provider,{value:{state:{aboutRef:p,mobile:c,padding:a,projectRef:h},actions:{scrollTo:function(e){return window.scrollTo({top:e.current.offsetTop,left:0,behavior:"smooth"})}}}},i.a.createElement(A,null),i.a.createElement(X,{projects:be}),i.a.createElement(W,null))},ve=n(3),we=i.a.createContext(),ke={fontWeight:700,padding:"0px 2px"},xe=Object(p.a)({link:{color:"#000",textDecoration:"none","&:hover":{color:"#fff"}},title:{padding:"0px 2px","&:hover":{backgroundColor:"#000",color:"#fff"}}}),Se=[{group:"DHI GRAS",projects:[{link:"dhi-portals",name:"portals",comp:i.a.createElement(i.a.Fragment,null)},{link:"dhi-website",name:"website",comp:i.a.createElement(i.a.Fragment,null)},{link:"dhi-videos",name:"videos",comp:i.a.createElement(i.a.Fragment,null)}]},{group:"INSTALLATIONS",projects:[{link:"urbanplanen",name:"urbanplanen",comp:i.a.createElement(i.a.Fragment,null)},{link:"stopmotion",name:"stop motion machine",comp:i.a.createElement(i.a.Fragment,null)},{link:"cover",name:"cover",comp:i.a.createElement(i.a.Fragment,null)},{link:"tingbjergceiling",name:"tingbjerg ceiling",comp:i.a.createElement(i.a.Fragment,null)},{link:"tingbjergtrees",name:"tingbjerg trees",comp:i.a.createElement(i.a.Fragment,null)},{link:"thefreaksregister",name:"the freaks register",comp:i.a.createElement(i.a.Fragment,null)},{link:"theshydie",name:"the shy die",comp:i.a.createElement(i.a.Fragment,null)},{link:"sphero",name:"sphero",comp:i.a.createElement(i.a.Fragment,null)}]},{group:"WEB",projects:[{link:"rebekkaborum",name:"rebekka borum",comp:i.a.createElement(i.a.Fragment,null)},{link:"aalborgsurreal",name:"aalborg surreal",comp:i.a.createElement(i.a.Fragment,null)},{link:"freespeech",name:"platform for free speech",comp:i.a.createElement(i.a.Fragment,null)},{link:"informationage",name:"information age",comp:i.a.createElement(i.a.Fragment,null)}]},{group:"PERSONAL VIDEOS",projects:[{link:"justwater",name:"just water",comp:i.a.createElement(i.a.Fragment,null)},{link:"aman",name:"a man and his mind",comp:i.a.createElement(i.a.Fragment,null)},{link:"fittingin",name:"fitting in",comp:i.a.createElement(i.a.Fragment,null)},{link:"au2pilot",name:"au2pilot",comp:i.a.createElement(i.a.Fragment,null)}]},{group:"COMMERCIAL VIDEOS",projects:[{link:"pilebyg",name:"pilebyg",comp:i.a.createElement(i.a.Fragment,null)},{link:"sofar",name:"sofar",comp:i.a.createElement(i.a.Fragment,null)},{link:"oersterk",name:"oersterk",comp:i.a.createElement(i.a.Fragment,null)},{link:"densorteskole",name:"den sorte skole",comp:i.a.createElement(i.a.Fragment,null)}]},{group:"DEROOTED INTERNSHIP",projects:[{link:"lps",name:"laylor performance systems",comp:i.a.createElement(i.a.Fragment,null)},{link:"aboveground",name:"aboveground art supply",comp:i.a.createElement(i.a.Fragment,null)}]}];var Te=function(e){var t=e.match,n=function(){return window.innerWidth<600?{y:5,x:5,text:2}:window.innerWidth<1400?{y:10,x:10,text:4}:{y:10,x:17,text:8}},a=i.a.useState(n),r=Object(s.a)(a,2),o=r[0],l=r[1],c=i.a.useState(window.innerWidth<960),h=Object(s.a)(c,2),p=h[0],d=h[1],g=xe(),f=t.path;return i.a.useEffect((function(){window.addEventListener("resize",(function(){l(n),d(window.innerWidth<960)}))})),i.a.createElement(we.Provider,{value:{state:{mobile:p,padding:o},actions:{}}},i.a.createElement(ve.c,null,Se&&Se.map((function(e){return e.projects.map((function(e){e.comp;var t=e.name,n=e.link,a=e.i;return i.a.createElement(ve.a,{path:"".concat(f,"/").concat(n),key:a},i.a.createElement("div",null,t))}))}))),i.a.createElement(m.a,{width:"20%",position:"fixed",right:8*o.y,bottom:8*o.y,style:{border:"1px solid red"}},Se&&Se.map((function(e,t){var n=e.group,a=e.projects;return i.a.createElement(m.a,{pt:2,key:t},i.a.createElement(u.a,{variant:"body2",style:ke},n),a&&a.map((function(e,t){var n=e.link,a=e.name;return i.a.createElement(u.a,{variant:"body2",key:t,className:g.title},i.a.createElement(y.a,{to:"".concat(f,"/").concat(n),className:g.link},a))})))}))))},je=n(89),We=n(93),Ce=n(53),Fe=Object(Ce.a)({palette:{primary:{main:"#000"},secondary:{main:"#00A4EC"},text:{primary:"#333"}},typography:{fontFamily:['"Helvetica Neue"',"Arial","sans-serif"].join(","),h2:{fontWeight:700,letterSpacing:"-3px",textTransform:"uppercase"},h5:{fontWeight:700},body1:{fontSize:12,"@media (min-width:600px)":{fontSize:13}}},overrides:{MuiLink:{root:{transition:"all .2s","&:hover":{backgroundColor:"#000",color:"#fff"}}}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=n(6),De=Object(Re.a)(),Ie=function(){return i.a.createElement(m.a,{width:"100%",style:{paddingTop:"33%"}},i.a.createElement(u.a,{align:"center"},"This site is not optimized for Internet Explorer."),i.a.createElement(u.a,{align:"center"},"For the best experience, use Chrome, Firefox or Edge."))},Ae=Object(We.a)(Fe),Oe=!!document.documentMode;o.a.render(i.a.createElement(i.a.StrictMode,null,Oe?i.a.createElement(Ie,null):i.a.createElement(ve.b,{history:De},i.a.createElement(je.a,{theme:Ae},i.a.createElement(ve.c,null,i.a.createElement(ve.a,{path:"/others",component:Te}),i.a.createElement(ve.a,{path:"/"},i.a.createElement(Ee,null)))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.32de35fd.chunk.js.map