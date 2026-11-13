import{Ba as e,Hn as t,L as n,Rn as r,U as i,V as a,ar as o,io as s,jr as c,mr as l,pa as u,qt as d,ro as f,ta as p,tr as m,z as h}from"./three.core-BF58tRDi.js";import{r as g,t as _}from"./globals-DAxe_AO1.js";import{t as v}from"./config-OM6otvPM.js";import{d as y}from"./layout-C2B8gIUV.js";var b=5,x={butterfly:{pos:[0,40,60],yaw:2,pitch:27,fov:34},jade:{pos:[-17.5,2.5,71],yaw:52,pitch:-6,fov:50}};function S(){let e=1024,i=document.createElement(`canvas`);i.width=e*2,i.height=e;let o=i.getContext(`2d`);o.fillStyle=`#000`,o.fillRect(0,0,e*2,e);let s=(()=>{let e=77;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)})(),c=(t,n,r)=>[t+n*e,e-r*e],l=(e,t)=>{o.beginPath();let n=c(e,t[0][0],t[0][1]);o.moveTo(n[0],n[1]);for(let n=1;n<t.length;n++){let r=t[n];if(r.length===2){let t=c(e,r[0],r[1]);o.lineTo(t[0],t[1])}else{let t=c(e,r[0],r[1]),n=c(e,r[2],r[3]),i=c(e,r[4],r[5]);o.bezierCurveTo(t[0],t[1],n[0],n[1],i[0],i[1])}}o.closePath()},u=(t,n,r,i,a)=>{o.save(),l(t,n),o.clip();let u=o.createRadialGradient(...c(t,r[0],r[1]),10,...c(t,r[0],r[1]),e*.95);u.addColorStop(0,`rgb(0,0,150)`),u.addColorStop(.5,`rgb(0,0,70)`),u.addColorStop(1,`rgb(0,0,120)`),o.fillStyle=u,o.fillRect(t,0,e,e),o.globalCompositeOperation=`lighter`;for(let n=0;n<26;n++){let n=s(),a=.55+s()*.4,l=r[0]+Math.cos(i.a0+(i.a1-i.a0)*n)*a*i.len(n),u=r[1]+Math.sin(i.a0+(i.a1-i.a0)*n)*a*i.len(n),d=c(t,l,u),f=(.03+s()*.07)*e,p=o.createRadialGradient(d[0],d[1],0,d[0],d[1],f);p.addColorStop(0,`rgba(0,${90+s()*120|0},0,0.8)`),p.addColorStop(1,`rgba(0,0,0,0)`),o.fillStyle=p,o.fillRect(d[0]-f,d[1]-f,f*2,f*2)}o.strokeStyle=`rgb(255,0,0)`,o.lineCap=`round`;let d=(n,r,i,a,s,l,u)=>{let d=n,f=r;for(let p=1;p<=14;p++){let m=p/14,h=n+(i-n)*m,g=r+(a-r)*m,_=Math.sin(m*Math.PI)*s,v=-(a-r),y=i-n,b=Math.hypot(v,y)||1,x=h+v/b*_,S=g+y/b*_;o.lineWidth=(l+(u-l)*m)*e,o.beginPath(),o.moveTo(...c(t,d,f)),o.lineTo(...c(t,x,S)),o.stroke(),d=x,f=S}};for(let e=0;e<i.n;e++){let t=e/(i.n-1),n=i.a0+(i.a1-i.a0)*t,o=i.len(t)*1.02,s=r[0]+Math.cos(n)*a*(.55+.45*Math.sin(t*Math.PI)),c=r[1]+Math.sin(n)*a*(.55+.45*Math.sin(t*Math.PI));if(d(r[0],r[1],s,c,0,.011,.008),d(s,c,r[0]+Math.cos(n)*o,r[1]+Math.sin(n)*o,(t-.5)*.05,.0075,.0022),e<i.n-1){let e=n+(i.a1-i.a0)/(i.n-1)*.5,a=i.len(t+.5/(i.n-1));d(r[0]+Math.cos(e)*a*.62,r[1]+Math.sin(e)*a*.62,r[0]+Math.cos(e)*a*1.02,r[1]+Math.sin(e)*a*1.02,0,.0035,.0015)}}o.lineWidth=.006*e,o.beginPath();for(let e=0;e<=24;e++){let n=e/24,s=i.a0+(i.a1-i.a0)*n,l=a*(.55+.45*Math.sin(n*Math.PI)),u=c(t,r[0]+Math.cos(s)*l,r[1]+Math.sin(s)*l);e?o.lineTo(u[0],u[1]):o.moveTo(u[0],u[1])}o.stroke(),o.restore(),o.save(),l(t,n),o.clip(),o.globalCompositeOperation=`lighter`,o.strokeStyle=`rgb(210,0,0)`,o.lineWidth=.012*e,l(t,n),o.stroke(),o.restore()};u(0,[[.05,.22],[.2,.42,.5,.86,.8,.96],[.9,.99,.97,.94,.965,.86],[.95,.66,.86,.44,.8,.22],[.76,.12,.66,.07,.56,.08],[.38,.1,.2,.14,.05,.16]],[.06,.19],{n:9,a0:1.02,a1:-.1,len:e=>.8+.36*Math.sin(Math.min(1,e*1.25)*Math.PI*.62)-.34*e},.36),u(e,[[.05,.93],[.3,.99,.58,.98,.78,.86],[.93,.76,.95,.56,.86,.42],[.84,.36,.8,.33,.74,.3],[.72,.22,.66,.17,.58,.16],[.54,.09,.46,.05,.4,.08],[.33,.12,.28,.2,.22,.3],[.14,.5,.07,.7,.05,.86]],[.06,.9],{n:8,a0:.05,a1:-1.42,len:e=>.8+.14*Math.sin(e*Math.PI)-.06*e},.3);let d=new n(i);return d.colorSpace=``,d.minFilter=t,d.magFilter=r,d.anisotropy=8,d.wrapS=d.wrapT=a,d}var C=`
uniform float uFlap, uCup, uTime2;
uniform vec4 uUvRect;      // atlas rect of this wing
varying vec2 vUv; varying vec2 vUvL; varying vec3 vWP; varying vec3 vWN;
void main(){
  vUvL = uv; vUv = uUvRect.xy + uv * uUvRect.zw;
  vec3 p = position;
  // flap about the body axis (local y), bending more towards the tip; a gentle travelling ripple and cupping
  float a = uFlap * (0.55 + 0.45 * uv.x) + sin(uTime2 * 1.3 + uv.x * 3.0 + uv.y * 2.0) * 0.03 * uv.x;
  float cup = uCup * uv.x * uv.x;
  vec3 q = vec3(p.x * cos(a), p.y, p.x * sin(a) + cup * abs(p.x));
  vec3 nrm = normalize(vec3(-sin(a) * sign(p.x), 0.0, cos(a)));
  vec4 wp = modelMatrix * vec4(q, 1.0);
  vWP = wp.xyz; vWN = normalize(mat3(modelMatrix) * nrm);
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,w=`
precision highp float; precision highp sampler3D;
varying vec2 vUv; varying vec2 vUvL; varying vec3 vWP; varying vec3 vWN;
uniform sampler2D tWing; uniform sampler3D tShape, tNoise;
uniform vec3 uBoxMin, uBoxSize, uTint, uVeinCol, uSpotCol, uGlow;
uniform float uOpacity, uGorge, uErode, uCloudOn, uCrinkle, uSolid, uFade;
${g}
float cloudT(vec3 a, vec3 b){
  // transmittance of the cloud volume along a->b (coarse: 10 steps, shape + one noise octave)
  float T = 1.0; vec3 d = b - a; float len = length(d); float dt = min(len, 520.0) / 10.0; vec3 st = d / len * dt;
  vec3 p = b - st * (0.5 + 0.5 * fract(52.98 * fract(dot(gl_FragCoord.xy, vec2(0.0671, 0.00584)))));
  for (int i = 0; i < 10; i++) {
    vec4 sh = textureLod(tShape, (p - uBoxMin) / uBoxSize, 0.0);
    float base = sh.r + sh.b * uGorge;
    if (base > 0.02) {
      float n = textureLod(tNoise, p * vec3(0.0115, 0.0135, 0.0115) + vec3(uWind.x, 0.12, uWind.y) * uTime * 0.0016, 0.0).r;
      T *= exp(-smoothstep(0.0, 0.2, base - (1.0 - n) * uErode) * 0.16 * dt);
    }
    p -= st;
  }
  return T;
}
void main(){
  vec4 t = texture2D(tWing, vUv);
  float mask = smoothstep(0.10, 0.22, t.b);
  if (mask < 0.01) discard;
  vec3 V = normalize(cameraPosition - vWP);
  // crinkled film: two octaves of noise bend the normal (large soft buckles + fine creases)
  vec2 cu = vUvL * 3.0;
  float n1 = texture2D(uNoiseTex, cu * 0.35 + 0.1).b, n2 = texture2D(uNoiseTex, cu * 1.3 + 0.37).a, n3 = texture2D(uNoiseTex, cu * 4.1).b;
  vec3 N = normalize(vWN);
  vec3 T1 = normalize(cross(N, vec3(0.0, 1.0, 0.0))), B1 = cross(N, T1);
  vec2 g1 = vec2(dFdx(n1 + n2 * 0.5 + n3 * 0.2), dFdy(n1 + n2 * 0.5 + n3 * 0.2));
  N = normalize(N + (T1 * (n1 - 0.5) + B1 * (n2 - 0.5)) * uCrinkle + (T1 * (n3 - 0.5)) * uCrinkle * 0.5);
  if (!gl_FrontFacing) N = -N;
  float NdV = abs(dot(N, V));
  float fres = pow(1.0 - NdV, 3.0);
  vec3 R = reflect(-V, N);
  // sky reflection (cheap analytic) + sun glints on both sides of the film
  vec3 sky = mix(mdFogColor(R), vec3(0.34, 0.46, 0.66), clamp(R.y * 1.4, 0.0, 1.0));
  float sd = max(dot(R, uSunDirW), 0.0);
  float glint = pow(sd, 220.0) * 26.0 + pow(sd, 22.0) * 0.9;
  // light coming through the film from behind
  float back = pow(max(dot(-V, uSunDirW), 0.0), 3.0);
  float vein = t.r, spot = t.g * (0.6 + 0.8 * n2);
  float thick = t.b;
  vec3 col = sky * (0.10 + 0.9 * fres) + uSunColor * glint * 1.8;
  col += uTint * (0.20 + 0.5 * thick + 0.9 * back) * (0.45 + 0.55 * max(dot(vWN, uSunDirW) * (gl_FrontFacing ? 1.0 : -1.0), 0.0) + 0.5 * back);
  // buckle highlights: bright streaks where the film faces the sun
  float streak = smoothstep(0.55, 0.9, n1 * 0.6 + n2 * 0.4) * (0.35 + 0.65 * max(dot(N, uSunDirW), 0.0));
  col += vec3(1.0, 0.97, 0.9) * streak * 0.55;
  // film stretched between the veins: radial streaks of sheen (polar coords from the wing root)
  vec2 pr = vUvL - vec2(0.06, vUvL.y > 0.5 ? 0.9 : 0.19) * vec2(1.0, 0.0) - vec2(0.0, 0.5);
  float ang = atan(vUvL.y - 0.5, vUvL.x + 0.05), rad = length(vUvL - vec2(-0.05, 0.5));
  float sheen = texture2D(uNoiseTex, vec2(ang * 1.9, rad * 0.35 + 0.2)).b * 0.6 + texture2D(uNoiseTex, vec2(ang * 5.5 + 0.3, rad * 0.9)).a * 0.4;
  sheen = smoothstep(0.42, 0.75, sheen) * (0.4 + 0.6 * fres + 0.5 * max(dot(N, uSunDirW), 0.0));
  col += vec3(0.95, 0.96, 1.0) * sheen * 0.75 + uTint * 0.16;
  float alpha = uOpacity * (0.24 + 0.34 * fres + 0.45 * streak + 0.22 * thick + 0.5 * sheen) + uSolid;
  col = mix(col, uSpotCol * (0.5 + 1.2 * max(dot(vWN, uSunDirW), 0.15)), clamp(spot * 0.75, 0.0, 1.0)); alpha += spot * 0.35 * uOpacity;
  col = mix(col, uVeinCol * (0.55 + 0.9 * max(abs(dot(vWN, uSunDirW)), 0.2)), clamp(vein * 1.2, 0.0, 1.0)); alpha = max(alpha, vein * 0.92);
  // solid (jade) wings: carved translucent stone rather than film
  if (uSolid > 0.01) {
    float ndl = max(dot(vWN, uSunDirW) * (gl_FrontFacing ? 1.0 : -1.0), 0.0);
    vec3 jade = uTint * (0.55 + 1.5 * ndl * mdCloudShadow(vWP) + 0.9 * back) * (0.7 + 0.6 * thick) + sky * 0.10 * (0.3 + fres);
    jade = mix(jade, uVeinCol * (0.35 + 0.9 * ndl), clamp(vein * 0.85, 0.0, 1.0));
    jade = mix(jade, uSpotCol * (0.5 + ndl), clamp(spot * 0.6, 0.0, 1.0));
    col = mix(col, jade + uSunColor * glint * 0.25, clamp(uSolid * 1.3, 0.0, 1.0));
  }
  col += uGlow * (0.4 + 0.6 * thick + vein);
  alpha = clamp(alpha, 0.0, 1.0) * mask * uFade;
  col = mdAtmosphere(col, vWP, cameraPosition);
  float ct = uCloudOn > 0.5 ? cloudT(cameraPosition, vWP) : 1.0;
  alpha *= ct;
  gl_FragColor = vec4(col * alpha, alpha);
}`;function T(t,n){let r=new d,a=n.span*.5,m=[],g=(e,l)=>{let u=a*(e?.82:1),d=a*(e?.9:1),h=new c(u,d,28,24);h.translate(u/2,0,0);let g=new p({vertexShader:C,fragmentShader:w,side:2,transparent:!0,depthWrite:!1,fog:!1,blending:5,blendEquation:100,blendSrc:201,blendDst:205,uniforms:{..._.uniforms,tWing:{value:t},tShape:{value:null},tNoise:{value:null},uBoxMin:{value:new f},uBoxSize:{value:new f(1,1,1)},uGorge:{value:1},uErode:{value:.66},uCloudOn:{value:0},uFlap:{value:0},uCup:{value:n.cup??.1},uTime2:{value:0},uUvRect:{value:new s(e?.5:0,0,.5,1)},uTint:{value:new i(...n.tint)},uVeinCol:{value:new i(...n.vein)},uSpotCol:{value:new i(...n.spot)},uGlow:{value:new i(0,0,0)},uOpacity:{value:n.opacity},uCrinkle:{value:n.crinkle},uSolid:{value:n.solid??0},uFade:{value:1}}});m.push(g);let y=new o(h,g);return y.scale.x=l,y.frustumCulled=!1,y.layers.set(v.TRANS),y.renderOrder=e?1:2,y.position.set(l*a*.02,e?-d*.4:d*.31,e?-a*.004:0),y.userData.hind=e,y.userData.side=l,r.add(y),y},y=[g(!1,1),g(!1,-1),g(!0,1),g(!0,-1)],b=new l({color:new i(...n.body),roughness:.85,metalness:0,emissive:new i(...n.body).multiplyScalar(n.bodyEmissive??0)}),x=(e,t,i,a)=>{let s=new u(1,20,14);s.scale(e,t,i);let c=new o(s,b);return c.position.y=a,c.castShadow=n.shadow,r.add(c),c};x(a*.035,a*.11,a*.035,a*.03),x(a*.026,a*.2,a*.026,-a*.2),x(a*.03,a*.03,a*.03,a*.16);for(let t of[-1,1]){let n=new h([new f(t*a*.012,a*.18,0),new f(t*a*.06,a*.33,a*.02),new f(t*a*.15,a*.46,a*.015),new f(t*a*.2,a*.5,0)]),i=new o(new e(n,16,a*.0035,5),b);r.add(i);let s=new o(new u(a*.008,8,6),b);s.position.copy(n.getPoint(1)),r.add(s)}return{group:r,wings:y,mats:m,bodyMat:b,flap:0,t:0}}async function E(e,t){let n=S(),r=T(n,{span:138,tint:[.8,.84,.86],vein:[1,.98,.94],spot:[.95,.66,.3],body:[.88,.86,.8],opacity:1,crinkle:.55,cup:.06,shadow:!1,bodyEmissive:.08}),i=y.greatButterfly;r.group.position.set(i[0]-6,i[1]+8,i[2]),r.group.rotation.set(-.42,.06,.05,`YXZ`),e.scene.add(r.group);let a=T(n,{span:15.5,tint:[.05,.26,.22],vein:[.42,.8,.66],spot:[.12,.42,.33],body:[.1,.28,.24],opacity:1,crinkle:.2,cup:.12,solid:.72,shadow:!0}),o=y.jadeButterfly;a.group.position.set(o[0],o[1]+.85,o[2]),a.group.rotation.set(-1.02,.9,0,`YXZ`),e.scene.add(a.group);let s={great:`hover`,jade:`sleep`,jadeT:0,greatT:0},c=a.group.position.clone(),l=r.group.position.clone(),u=new f,d={great:{object:r.group,setState(e){s.great=e,s.greatT=0}},jade:{object:a.group,setState(e){s.jade=e,s.jadeT=0}},update(e,n){let i=t.clouds?.uniforms;for(let e of[r,a])for(let t of e.mats)t.uniforms.uTime2.value=n,i&&e===r&&(t.uniforms.tShape.value=i.tShape.value,t.uniforms.tNoise.value=i.tNoise.value,t.uniforms.uBoxMin.value.copy(i.uBoxMin.value),t.uniforms.uBoxSize.value.copy(i.uBoxSize.value),t.uniforms.uGorge.value=i.uGorge.value,t.uniforms.uErode.value=i.uErode.value,t.uniforms.uCloudOn.value=1);s.greatT+=e;let o=.3+Math.sin(n*.42)*.16+Math.sin(n*.17+1)*.05,d=1;if(r.group.position.copy(l),r.group.position.y+=Math.sin(n*.21)*3,r.group.position.x+=Math.sin(n*.13+2)*2,s.great===`descend`){let e=Math.min(1,s.greatT/14),t=e*e*(3-2*e);r.group.position.lerpVectors(l,u.set(-40,92,0),t),o+=Math.sin(s.greatT*1.6)*.3*(1-t*.5)}else s.great===`gone`&&(d=Math.max(0,1-s.greatT/4));r.group.visible=d>.001;for(let e of r.wings)e.material.uniforms.uFlap.value=o*(e.userData.hind?.8:1),e.material.uniforms.uFade.value=d;s.jadeT+=e;let f=.34+Math.sin(n*.5)*.05,p=0;if(s.jade===`wake`){let e=Math.min(1,s.jadeT/5);f=.1+e*.5+Math.sin(s.jadeT*3)*.25*e,p=e*.5}else if(s.jade===`fly`){let t=s.jadeT,n=Math.min(1,t/9),r=n*n*(3-2*n);f=.35+Math.sin(t*5.2)*.75,p=.5;let i=t*.32,o=14+r*30,l=m.lerp(c.x,-17,r),d=m.lerp(c.z,8,r),h=m.lerp(c.y+2,88,r);u.set(l+Math.cos(i)*o*r,h+Math.sin(t*.7)*2.5,d+Math.sin(i)*o*r);let g=a.group.position.clone();a.group.position.lerp(u,Math.min(1,e*1.2));let _=a.group.position.clone().sub(g);if(_.lengthSq()>1e-6){let e=Math.atan2(_.x,_.z);a.group.rotation.set(-1.15+.25*Math.sin(t*5.2),e+Math.PI,0,`YXZ`)}}for(let e of a.wings)e.material.uniforms.uFlap.value=f*(e.userData.hind?.85:1),e.material.uniforms.uGlow.value.setRGB(.05*p,.35*p,.28*p)}};t.butterfly=d,e.add(d)}export{E as default,b as order,x as shots};