import{t as e}from"./rolldown-runtime-DK3Fl9T5.js";import{Lt as t,an as n,ar as r,in as i,j as a,jr as o,qt as s,ta as c}from"./three.core-BF58tRDi.js";import{i as l,r as u,t as d}from"./globals-DAxe_AO1.js";import{t as f}from"./config-OM6otvPM.js";import{l as p,n as m}from"./layout-C2B8gIUV.js";var h=e({FALLS:()=>_,default:()=>S,order:()=>6,shots:()=>g}),g={falls:{pos:[-36,2.2,84],yaw:8,pitch:14,fov:55}},_=[{name:`main`,top:[m.x,p-.7,m.z+1.6],dir:[.1,1],h:18.7,w:4.8,reach:5.6,mist:1},{name:`tarn1`,top:[-84.5,79,-69.5],dir:[.25,1],h:46.5,w:3.2,reach:4.5,mist:.7},{name:`tarn2`,top:[-77,80.5,-66.5],dir:[.05,1],h:48,w:4.2,reach:5,mist:.9},{name:`tarn3`,top:[-69.5,78,-67.5],dir:[-.2,1],h:45.5,w:2.6,reach:4,mist:.6},{name:`peak`,top:[-112,232,-268],dir:[.1,1],h:96,w:9,reach:9,mist:0,far:!0},{name:`peak2`,top:[-70,150,-262],dir:[.3,1],h:60,w:5,reach:6,mist:0,far:!0},{name:`east`,top:[124,52,-68],dir:[.6,.8],h:40,w:3.4,reach:4,mist:.6}],v=`
attribute float aSeed;
varying vec2 vUv; varying vec3 vWP; varying float vSeed;
void main(){ vUv = uv; vSeed = aSeed; vec4 wp = modelMatrix * vec4(position, 1.0); vWP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,y=`
precision highp float;
varying vec2 vUv; varying vec3 vWP; varying float vSeed;
uniform float uH;
${u}
void main(){
  if (vWP.y < uClipY) discard;
  float s = vUv.y;                                   // 0 at the lip, 1 at the base; water travels linearly in s
  float t = uTime * (0.55 + 0.25 * vSeed);
  // stretched streaks falling with the water, two layers
  float a = texture2D(uNoiseTex, vec2(vUv.x * 0.9 + vSeed * 3.1, s * uH * 0.022 - t * 0.9)).b;
  float b = texture2D(uNoiseTex, vec2(vUv.x * 2.7 + vSeed * 7.3, s * uH * 0.05 - t * 1.7)).a;
  float streak = a * 0.6 + b * 0.4;
  float edge = 1.0 - pow(abs(vUv.x * 2.0 - 1.0), 2.4);
  // the sheet breaks up into strands as it falls and widens
  float cover = smoothstep(0.30 + 0.28 * s, 0.62 + 0.2 * s, streak + edge * 0.35);
  float alpha = edge * cover * smoothstep(0.0, 0.04, s) * (1.0 - smoothstep(0.93, 1.0, s) * 0.6) * (0.78 + 0.22 * vSeed);
  float lit = 0.38 + 0.62 * mdCloudShadow(vWP);
  vec3 col = vec3(0.90, 0.93, 0.95) * (0.42 + 1.25 * lit * (0.6 + 0.6 * streak)) * (0.8 + 0.5 * uSunColor);
  col = mdAtmosphere(col, vWP, cameraPosition);
  gl_FragColor = vec4(col * alpha, alpha);
}`,b=`
attribute vec4 aSeed;       // phase, size, drift angle, life scale
attribute vec3 aBase;
uniform float uRise;
varying vec2 vUv; varying float vLife; varying vec3 vWP; varying float vRnd;
${u}
void main(){
  float life = fract(uTime * 0.085 * aSeed.w + aSeed.x);
  vLife = life; vRnd = aSeed.x;
  vec3 c = aBase;
  c.y += life * uRise * (0.5 + aSeed.y);
  c.xz += vec2(cos(aSeed.z), sin(aSeed.z)) * life * 5.0 * (0.4 + aSeed.y) + uWind.xy * life * 6.0 * uWind.z;
  float size = (2.2 + 7.5 * life) * (0.6 + aSeed.y);
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec3 wp = c + (right * position.x + up * position.y) * size;
  vWP = wp; vUv = position.xy * 2.0;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`,x=`
precision highp float;
varying vec2 vUv; varying float vLife; varying vec3 vWP; varying float vRnd;
uniform sampler2D tSceneDepth; uniform vec2 uResolution; uniform float uAmount;
${u}
${l}
void main(){
  if (vWP.y < uClipY) discard;
  float r = length(vUv); if (r > 1.0) discard;
  float n = texture2D(uNoiseTex, vUv * 0.23 + vRnd * 7.0 + uTime * 0.01).b;
  float a = pow(1.0 - r, 1.6) * smoothstep(0.0, 0.12, vLife) * (1.0 - vLife) * (0.5 + 0.9 * n) * 0.34 * uAmount;
  // soft particles
  float zs = textureLod(tSceneDepth, gl_FragCoord.xy / uResolution, 0.0).r;
  float dS = zs <= 0.0 ? 1e5 : linDepth(zs), dP = linDepth(gl_FragCoord.z);
  a *= smoothstep(0.0, 2.5, dS - dP) * smoothstep(0.3, 2.5, dP);
  vec3 col = vec3(0.86, 0.88, 0.88) * (0.30 + 1.3 * mdCloudShadow(vWP)) * (0.75 + 0.45 * uSunColor);
  col = mdAtmosphere(col, vWP, cameraPosition);
  gl_FragColor = vec4(col * a, a);
}`;async function S(e,l){let u=new s;u.name=`falls`;let p={transparent:!0,depthWrite:!1,side:2,fog:!1,blending:5,blendEquation:100,blendSrc:201,blendDst:205},m={},h={};for(let e of _){let s=[],l=[],g=[],_=[],S=Math.hypot(e.dir[0],e.dir[1]),C=e.dir[0]/S,w=e.dir[1]/S,T=-w,E=C;for(let t=0;t<3;t++){let n=s.length/3,r=t*.37+.2,i=1-t*.16,a=e.reach*(1-t*.22);for(let o=0;o<=22;o++){let c=o/22,u=e.h*c*c,d=a*c+t*.25,f=e.w*i*(.75+.6*c);for(let n of[-1,1])s.push(e.top[0]+C*d+T*n*f*.5+T*(t-1)*e.w*.12,e.top[1]-u,e.top[2]+w*d+E*n*f*.5+E*(t-1)*e.w*.12),l.push(n*.5+.5,c),g.push(r);if(o<22){let e=n+o*2;_.push(e,e+1,e+2,e+1,e+3,e+2)}}}let D=new a;D.setAttribute(`position`,new t(s,3)),D.setAttribute(`uv`,new t(l,2)),D.setAttribute(`aSeed`,new t(g,1)),D.setIndex(_);let O=new c({vertexShader:v,fragmentShader:y,uniforms:{...d.uniforms,uH:{value:e.h}},...p}),k=new r(D,O);if(k.layers.set(f.TRANS),k.renderOrder=3,k.frustumCulled=!e.far,u.add(k),m[e.name]=k,e.mist>0){let t=Math.round(46*e.mist),a=new o(1,1),s=new n;s.index=a.index,s.setAttribute(`position`,a.attributes.position);let l=new Float32Array(t*4),m=new Float32Array(t*3),g=1234+e.h*7,_=()=>(g=g*1664525+1013904223>>>0,g/4294967296);for(let n=0;n<t;n++){l.set([_(),_(),_()*6.283,.6+_()*.8],n*4);let t=_()<.25?_()*e.h*.6:0,r=Math.sqrt(1-t/e.h);m.set([e.top[0]+C*e.reach*r+(_()-.5)*e.w*1.6,e.top[1]-e.h+t+_()*1.2,e.top[2]+w*e.reach*r+(_()-.5)*e.w*1.2],n*3)}s.setAttribute(`aSeed`,new i(l,4)),s.setAttribute(`aBase`,new i(m,3)),s.instanceCount=t;let v=new c({vertexShader:b,fragmentShader:x,uniforms:{...d.uniforms,tSceneDepth:{value:null},uRise:{value:7+e.h*.25},uAmount:{value:e.mist}},...p}),y=new r(s,v);y.layers.set(f.TRANS),y.frustumCulled=!1,y.renderOrder=4,u.add(y),h[e.name]=y}}e.scene.add(u);let g={group:u,ribbons:m,mists:h,FALLS:_,update(){for(let t in h)h[t].material.uniforms.tSceneDepth.value=e.rtOpaque.depthTexture}};l.falls=g,e.add(g)}export{h as n,_ as t};