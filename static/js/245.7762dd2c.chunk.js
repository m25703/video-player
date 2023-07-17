"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[245],{7245:function(e,t,r){r.r(t),r.d(t,{AudioVisualizer:function(){return m},LiveAudioVisualizer:function(){return h}});var n,a=r(1413),i=r(4165),o=r(5861),u=r(9439),c=r(7313),f={exports:{}},s={};f.exports=function(){if(n)return s;n=1;var e=c,t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var u,c={},f=null,s=null;for(u in void 0!==n&&(f=""+n),void 0!==r.key&&(f=""+r.key),void 0!==r.ref&&(s=r.ref),r)a.call(r,u)&&!o.hasOwnProperty(u)&&(c[u]=r[u]);if(e&&e.defaultProps)for(u in r=e.defaultProps)void 0===c[u]&&(c[u]=r[u]);return{$$typeof:t,type:e,key:f,ref:s,props:c,_owner:i.current}}return s.Fragment=r,s.jsx=u,s.jsxs=u,s}();var l=f.exports,h=function(e){var t=e.mediaRecorder,r=e.width,n=void 0===r?"100%":r,a=e.height,i=void 0===a?"100%":a,o=e.barWidth,f=void 0===o?2:o,s=e.gap,h=void 0===s?1:s,d=e.backgroundColor,v=void 0===d?"transparent":d,m=e.barColor,g=void 0===m?"rgb(160, 198, 255)":m,p=e.fftSize,b=void 0===p?1024:p,y=e.maxDecibels,x=void 0===y?-10:y,w=e.minDecibels,C=void 0===w?-90:w,_=e.smoothingTimeConstant,S=void 0===_?.4:_,R=(0,c.useState)((function(){return new AudioContext})),k=(0,u.Z)(R,1)[0],E=(0,c.useState)(),A=(0,u.Z)(E,2),D=A[0],O=A[1],Z=(0,c.useRef)(null);(0,c.useEffect)((function(){if(t.stream){var e=k.createAnalyser();O(e),e.fftSize=b,e.minDecibels=C,e.maxDecibels=x,e.smoothingTimeConstant=S,k.createMediaStreamSource(t.stream).connect(e)}}),[t.stream]),(0,c.useEffect)((function(){(null!=D?D:"recording"===t.state)&&P()}),[D,t.state]);var P=(0,c.useCallback)((function(){if(D){var e=new Uint8Array(null==D?void 0:D.frequencyBinCount);"recording"===t.state?(null==D||D.getByteFrequencyData(e),T(e),requestAnimationFrame(P)):"paused"===t.state?T(e):"inactive"===t.state&&"closed"!==k.state&&k.close()}}),[D]),T=function(e){if(Z.current){var t=function(e,t,r,n){var a=t/(r+n),i=Math.floor(e.length/a);a>e.length&&(a=e.length,i=1);for(var o=[],u=0;u<a;u++){for(var c=0,f=0;f<i&&u*i+f<e.length;f++)c+=e[u*i+f];o.push(c/i)}return o}(e,Z.current.width,f,h);!function(e,t,r,n,a,i){var o=t.height/2,u=t.getContext("2d");u&&(u.clearRect(0,0,t.width,t.height),"transparent"!==a&&(u.fillStyle=a,u.fillRect(0,0,t.width,t.height)),e.forEach((function(e,t){u.fillStyle=i;var a=t*(r+n),c=o-e/2,f=r,s=e||1;u.beginPath(),u.roundRect(a,c,f,s,50),u.fill()})))}(t,Z.current,f,h,v,g)}};return l.jsx("canvas",{ref:Z,width:n,height:i,style:{aspectRatio:"unset"}})},d=function(e,t,r,n,a){for(var i=e.getChannelData(0),o=r/(n+a),u=Math.floor(i.length/o),c=t/2,f=[],s=0,l=0;l<o;l++){for(var h=[],d=0,v=[],m=0,g=0;g<u&&l*u+g<e.length;g++){var p=i[l*u+g];p<=0&&(h.push(p),d++),p>0&&(v.push(p),m++)}var b=h.reduce((function(e,t){return e+t}),0)/d,y={max:v.reduce((function(e,t){return e+t}),0)/m,min:b};y.max>s&&(s=y.max),Math.abs(y.min)>s&&(s=Math.abs(y.min)),f.push(y)}if(.8*c>s*c){var x=.8*c/s;f=f.map((function(e){return{max:e.max*x,min:e.min*x}}))}return f},v=function(e,t,r,n,a,i,o){var u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:1,f=t.height/2,s=t.getContext("2d");if(s){s.clearRect(0,0,t.width,t.height),"transparent"!==a&&(s.fillStyle=a,s.fillRect(0,0,t.width,t.height));var l=(u||0)/c;e.forEach((function(t,a){var u=a/e.length,c=l>u;s.fillStyle=c&&o?o:i;var h=a*(r+n),d=f+t.min,v=r,m=f+t.max-d;s.beginPath(),s.roundRect(h,d,v,m,50),s.fill()}))}},m=function(e){var t=e.blob,r=e.width,n=e.height,f=e.barWidth,s=void 0===f?2:f,h=e.gap,m=void 0===h?1:h,g=e.currentTime,p=e.style,b=e.backgroundColor,y=void 0===b?"transparent":b,x=e.barColor,w=void 0===x?"rgb(184, 184, 184)":x,C=e.barPlayedColor,_=void 0===C?"rgb(160, 198, 255)":C,S=(0,c.useRef)(null),R=(0,c.useState)([]),k=(0,u.Z)(R,2),E=k[0],A=k[1],D=(0,c.useState)(0),O=(0,u.Z)(D,2),Z=O[0],P=O[1];return(0,c.useEffect)((function(){(0,o.Z)((0,i.Z)().mark((function e(){var a,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S.current){e.next=2;break}return e.abrupt("return");case 2:if(t){e.next=6;break}return a=Array.from({length:100},(function(){return{max:0,min:0}})),v(a,S.current,s,m,y,w,_),e.abrupt("return");case 6:return e.next=8,t.arrayBuffer();case 8:return o=e.sent,e.next=11,(new AudioContext).decodeAudioData(o,(function(e){if(S.current){P(e.duration);var t=d(e,n,r,s,m);A(t),v(t,S.current,s,m,y,w,_)}}));case 11:case"end":return e.stop()}}),e)})))()}),[t,S.current]),(0,c.useEffect)((function(){S.current&&v(E,S.current,s,m,y,w,_,g,Z)}),[g,Z]),l.jsx("canvas",{ref:S,width:r,height:n,style:(0,a.Z)({},p)})}}}]);