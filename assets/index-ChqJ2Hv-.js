const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/architecture-UF7LUfAo.js","assets/three.core-BF58tRDi.js","assets/config-OM6otvPM.js","assets/layout-C2B8gIUV.js","assets/globals-DAxe_AO1.js","assets/rolldown-runtime-DK3Fl9T5.js","assets/butterfly-DxNdgpiU.js","assets/clouds-C6lJ-NeM.js","assets/shape-B4XZ7pSn.js","assets/debugpaths-DYLInEHU.js","assets/dreamflies-jdGw589O.js","assets/falls-lrlEpLU3.js","assets/fauna-B_GkwqD4.js","assets/terrain-ClIc0rnk.js","assets/sage-CDwyAL58.js","assets/sage-BLgaV563.js","assets/vegetation-BuIhnzi9.js","assets/shaders-DSULlo0c.js","assets/water-DaUg5CFC.js","assets/ui-7sL-rQBm.js","assets/text-CJysjHy3.js","assets/game-Ho_58QqJ.js"])))=>i.map(i=>d[i]);
import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./globals-DAxe_AO1.js";import{a as c,i as l,n as u,r as d,t as f}from"./config-OM6otvPM.js";import{$r as p,A as m,Bt as h,Dn as g,Dr as _,E as v,Gt as y,Hn as b,Ht as ee,Ja as te,Ma as ne,Ni as re,Qi as ie,Qt as ae,Rn as x,Rt as oe,U as S,V as se,Wi as C,Wn as ce,Yt as w,_r as le,ar as T,bt as ue,do as de,ea as fe,fa as pe,ft as me,io as E,ir as D,j as he,kn as ge,kr as _e,lo as ve,mr as ye,mt as O,no as k,or as be,pt as xe,qt as Se,ro as A,ta as Ce,tr as we,wr as Te}from"./three.core-BF58tRDi.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var j=new D,Ee=new D,M=new A,N=new A,P=new A,F=[new A,new A,new A,new A],I=[new A,new A,new A,new A],L=[new A,new A,new A,new A,new A,new A,new A,new A],R=2,De=.1,Oe=class extends ge{constructor(){super(new _(-5,5,5,-5,.5,500)),this.isSunLightShadow=!0,this.mapSize.set(1024,1024),this._cameras=[],this._matrices=[],this._frustums=[],this._cascadeSplits=[,,,].fill(0),this._cascadeData=[],this._viewportCount=R,this._frameExtents.set(2,1);for(let e=0;e<R;e++)this._cameras.push(new _),this._matrices.push(new D),this._frustums.push(new ee),this._cascadeData.push(new E);for(;this._viewports.length<R;)this._viewports.push(new E)}getCamera(e=0){return this._cameras[e]}getMatrix(e=0){return this._matrices[e]}getFrustum(e=0){return this._frustums[e]}updateMatrices(e,t){if(t===void 0)return;let n=Math.min(.25,(Math.ceil(this.radius)+1)/this.mapSize.x),r=Math.min(.25,(Math.ceil(this.radius)+1)/this.mapSize.y);for(let e=0;e<R;e++)this._viewports[e].set(e+n,r,1-2*n,1-2*r);let i=this.mapSize.x*(1-2*n),a=this.mapSize.y*(1-2*r),o=Math.min(i,a),s=this.camera,c=t.near,l=Math.max(c+1e-6,Math.min(s.far,t.far)),u=this._cascadeSplits;u[0]=c;for(let e=1;e<R;e++){let t=e/R,n=c+(l-c)*t,r=c>0?c*(l/c)**+t:n;u[e]=(n+r)*.5}u[R]=l,M.setFromMatrixPosition(e.matrixWorld).negate().normalize(),N.set(0,1,0),Math.abs(N.dot(M))>.99&&N.set(0,0,1),j.lookAt(P.set(0,0,0),M,N),Ee.copy(j).transpose().multiply(t.matrixWorld);let d=t.reversedDepth?1:t.coordinateSystem===2001?0:-1,f=t.projectionMatrixInverse,p=-1/0;for(let e=0;e<4;e++){let n=e===0||e===1?1:-1,r=e===0||e===3?1:-1,i=F[e].set(n,r,d).applyMatrix4(f),a=I[e];t.isPerspectiveCamera===!0?a.copy(i).multiplyScalar(l/c):a.set(i.x,i.y,-l),i.applyMatrix4(Ee),a.applyMatrix4(Ee),p=Math.max(p,i.z,a.z)}p+=l;let m=s.near;for(let e=0;e<R;e++){let t=e===0?u[0]:this._cascadeData[e-1].z,n=u[e+1],r=n-De*(n-u[e]);this._cascadeData[e].set(e===0?-1e10:t,n,r,0);let d=(t-c)/(l-c),f=(n-c)/(l-c);P.set(0,0,0);for(let e=0;e<4;e++)L[e*2].lerpVectors(F[e],I[e],d),L[e*2+1].lerpVectors(F[e],I[e],f),P.add(L[e*2]).add(L[e*2+1]);P.multiplyScalar(1/8);let h=0,g=1/0;for(let e=0;e<8;e++)h=Math.max(h,L[e].distanceToSquared(P)),g=Math.min(g,L[e].z);let _=Math.sqrt(h);if(o>1){_/=1-1/o;let e=2*_/i,t=2*_/a;P.x=Math.round(P.x/e)*e,P.y=Math.round(P.y/t)*t}P.z=p+m,P.applyMatrix4(j);let v=this._cameras[e];v.position.copy(P),v.quaternion.setFromRotationMatrix(j),v.left=-_,v.right=_,v.top=_,v.bottom=-_,v.near=m,v.far=p-g+2*m,v.coordinateSystem=s.coordinateSystem,v._reversedDepth=s.reversedDepth,v.updateProjectionMatrix(),v.updateMatrixWorld(),this._updateMatrix(v,this._matrices[e],this._frustums[e],this._viewports[e])}}},ke=class extends g{constructor(e,t){super(e,t),this.isSunLight=!0,this.type=`SunLight`,this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.shadow=new Oe}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t}},Ae=.12;i.shadowmap_pars_fragment=i.shadowmap_pars_fragment.replace(`#define SUN_LIGHT_CASCADES 2`,`#define SUN_LIGHT_CASCADES 4`);var z=new D,je=new D,Me=new A,B=new A,V=new A,Ne=[new A,new A,new A,new A],Pe=[new A,new A,new A,new A],H=Array.from({length:8},()=>new A),Fe=class extends ge{constructor(){super(new _(-5,5,5,-5,.5,900)),this.isSunLightShadow=!0,this.mapSize.set(2048,2048),this.splits=[.1,16,56,190,700],this._cameras=[],this._matrices=[],this._frustums=[],this._cascadeData=[],this._viewportCount=4,this._frameExtents.set(2,2);for(let e=0;e<4;e++)this._cameras.push(new _),this._matrices.push(new D),this._frustums.push(new ee),this._cascadeData.push(new E);for(;this._viewports.length<4;)this._viewports.push(new E)}getCamera(e=0){return this._cameras[e]}getMatrix(e=0){return this._matrices[e]}getFrustum(e=0){return this._frustums[e]}updateMatrices(e,t){if(t===void 0)return;let n=Math.min(.25,(Math.ceil(this.radius)+1)/this.mapSize.x),r=Math.min(.25,(Math.ceil(this.radius)+1)/this.mapSize.y);for(let e=0;e<4;e++)this._viewports[e].set(e%2+n,Math.floor(e/2)+r,1-2*n,1-2*r);let i=this.mapSize.x*(1-2*n),a=this.mapSize.y*(1-2*r),o=Math.min(i,a),s=this.camera,c=t.near,l=this.splits,u=Math.max(c+1e-6,Math.min(l[4],t.far));Me.setFromMatrixPosition(e.matrixWorld).negate().normalize(),B.set(0,1,0),Math.abs(B.dot(Me))>.99&&B.set(0,0,1),z.lookAt(V.set(0,0,0),Me,B),je.copy(z).transpose().multiply(t.matrixWorld);let d=t.reversedDepth?1:-1,f=t.projectionMatrixInverse,p=-1/0;for(let e=0;e<4;e++){let n=e===0||e===1?1:-1,r=e===0||e===3?1:-1,i=Ne[e].set(n,r,d).applyMatrix4(f),a=Pe[e];t.isPerspectiveCamera?a.copy(i).multiplyScalar(u/c):a.set(i.x,i.y,-u),i.applyMatrix4(je),a.applyMatrix4(je),p=Math.max(p,i.z,a.z)}p+=this.casterMargin??420;let m=s.near;for(let e=0;e<4;e++){let t=Math.max(c,l[e]),n=Math.min(u,l[e+1]),r=e===0?c:this._cascadeData[e-1].z,d=n,f=d-Ae*(d-t);this._cascadeData[e].set(e===0?-1e10:r,d,f,0);let h=(r-c)/(u-c),g=(d-c)/(u-c);V.set(0,0,0);for(let e=0;e<4;e++)H[e*2].lerpVectors(Ne[e],Pe[e],h),H[e*2+1].lerpVectors(Ne[e],Pe[e],g),V.add(H[e*2]).add(H[e*2+1]);V.multiplyScalar(1/8);let _=0,v=1/0;for(let e=0;e<8;e++)_=Math.max(_,H[e].distanceToSquared(V)),v=Math.min(v,H[e].z);let y=Math.sqrt(_);if(y=Math.ceil(y*16)/16,o>1){y/=1-1/o;let e=2*y/i,t=2*y/a;V.x=Math.round(V.x/e)*e,V.y=Math.round(V.y/t)*t}V.z=p+m,V.applyMatrix4(z);let b=this._cameras[e];b.position.copy(V),b.quaternion.setFromRotationMatrix(z),b.left=-y,b.right=y,b.top=y,b.bottom=-y,b.near=m,b.far=p-v+2*m+60,b.coordinateSystem=s.coordinateSystem,b._reversedDepth=s.reversedDepth,b.updateProjectionMatrix(),b.updateMatrixWorld(),this._updateMatrix(b,this._matrices[e],this._frustums[e],this._viewports[e])}}};function Ie(e,t){let n=new ke(e,t);return n.shadow.dispose?.(),n.shadow=new Fe,n.castShadow=!0,n}var Le=new he;Le.setAttribute(`position`,new m(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),Le.setAttribute(`uv`,new m(new Float32Array([0,0,2,0,0,2]),2));var Re=new _(-1,1,1,-1,0,1),U=class{constructor(e,t={},n={}){this.material=new Ce({glslVersion:y,vertexShader:r,fragmentShader:e,uniforms:t,depthTest:!1,depthWrite:!1,toneMapped:!1,...n}),this.mesh=new T(Le,this.material),this.mesh.frustumCulled=!1,this.u=this.material.uniforms}render(e,t,n=!1){e.setRenderTarget(t),n&&e.clear(),e.render(this.mesh,Re)}};function W(e,t,n={}){return new de(Math.max(1,e|0),Math.max(1,t|0),{type:w,format:p,minFilter:x,magFilter:x,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,...n})}var ze=`
precision highp float;
in vec2 vUv; out vec4 outColor;
uniform sampler2D tDepth; uniform vec2 uRes; uniform float uRadius, uIntensity, uProjScale;
${n}
float ign(vec2 p){ return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
vec3 P_at(vec2 uv){ return viewPos(uv, textureLod(tDepth, uv, 0.0).r); }
void main(){
  float z = textureLod(tDepth, vUv, 0.0).r;
  if (z <= 0.0) { outColor = vec4(1.0); return; }
  vec3 P = viewPos(vUv, z);
  vec2 px = 1.0 / uRes;
  // normal from the shorter of the two finite differences on each axis (keeps edges clean)
  vec3 Pr = P_at(vUv + vec2(px.x, 0.0)), Pl = P_at(vUv - vec2(px.x, 0.0));
  vec3 Pu = P_at(vUv + vec2(0.0, px.y)), Pd = P_at(vUv - vec2(0.0, px.y));
  vec3 dx = abs(Pr.z - P.z) < abs(P.z - Pl.z) ? Pr - P : P - Pl;
  vec3 dy = abs(Pu.z - P.z) < abs(P.z - Pd.z) ? Pu - P : P - Pd;
  vec3 N = normalize(cross(dx, dy));
  float dist = -P.z;
  float rWorld = uRadius * clamp(dist * 0.12, 0.35, 3.5);     // grow the radius with distance: contact near, form far
  float rPx = rWorld * uProjScale / dist;
  if (rPx < 1.5) { outColor = vec4(1.0); return; }
  rPx = min(rPx, 90.0);
  float r2 = rWorld * rWorld;
  float rot = ign(gl_FragCoord.xy) * 6.2831853;
  float sum = 0.0;
  const int NS = 12;
  for (int i = 0; i < NS; i++) {
    float t = (float(i) + 0.5) / float(NS);
    float a = float(i) * 2.399963 + rot;
    vec2 uv2 = vUv + vec2(cos(a), sin(a)) * (rPx * sqrt(t)) * px;
    vec3 v = P_at(uv2) - P;
    float vv = dot(v, v), vn = dot(v, N);
    float f = max(r2 - vv, 0.0);
    sum += f * f * f * max((vn - 0.012 * dist) / (vv + 0.01 * r2), 0.0);
  }
  float ao = max(0.0, 1.0 - sum * uIntensity * 5.0 / (r2 * r2 * r2 * float(NS)));
  ao = mix(ao, 1.0, smoothstep(250.0, 500.0, dist));
  outColor = vec4(ao, dist, 0.0, 1.0);
}`,Be=`
precision highp float;
in vec2 vUv; out vec4 outColor;
uniform sampler2D tAO; uniform vec2 uDir;
void main(){
  vec4 c = texture(tAO, vUv);
  float d0 = c.g, sum = c.r, w = 1.0;
  for (int i = 1; i <= 4; i++) {
    for (int s = -1; s <= 1; s += 2) {
      vec4 t = texture(tAO, vUv + uDir * float(i * s));
      float wt = (1.0 - float(i) * 0.18) * max(0.0, 1.0 - abs(t.g - d0) / (0.06 * d0 + 0.02));
      sum += t.r * wt; w += wt;
    }
  }
  outColor = vec4(sum / w, d0, 0.0, 1.0);
}`,Ve=class{constructor(){this.rtA=W(4,4,{format:re}),this.rtB=W(4,4,{format:re}),this.ao=new U(ze,{tDepth:{value:null},uRes:{value:new k},uRadius:{value:.9},uIntensity:{value:1},uProjScale:{value:1},uProjCD:s.uniforms.uProjCD,uProjInv:s.uniforms.uProjInv,uViewInv:s.uniforms.uViewInv}),this.blur=new U(Be,{tAO:{value:null},uDir:{value:new k}})}setSize(e,t){this.w=e>>1,this.h=t>>1,this.rtA.setSize(this.w,this.h),this.rtB.setSize(this.w,this.h)}render(e,t,n){return this.ao.u.tDepth.value=t,this.ao.u.uRes.value.set(this.w,this.h),this.ao.u.uProjScale.value=this.h*.5/Math.tan(n.fov*Math.PI/360),this.ao.render(e,this.rtA),this.blur.u.tAO.value=this.rtA.texture,this.blur.u.uDir.value.set(1/this.w,0),this.blur.render(e,this.rtB),this.blur.u.tAO.value=this.rtB.texture,this.blur.u.uDir.value.set(0,1/this.h),this.blur.render(e,this.rtA),this.rtA.texture}},He=`
precision highp float;
in vec2 vUv; out vec4 outColor;
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uFirst;
vec3 s(vec2 o){ return texture(tSrc, vUv + o * uTexel).rgb; }
float karis(vec3 c){ return 1.0 / (1.0 + dot(c, vec3(0.2126, 0.7152, 0.0722))); }
void main(){
  vec3 a = s(vec2(-2, 2)), b = s(vec2(0, 2)), c = s(vec2(2, 2));
  vec3 d = s(vec2(-2, 0)), e = s(vec2(0, 0)), f = s(vec2(2, 0));
  vec3 g = s(vec2(-2,-2)), h = s(vec2(0,-2)), i = s(vec2(2,-2));
  vec3 j = s(vec2(-1, 1)), k = s(vec2(1, 1)), l = s(vec2(-1,-1)), m = s(vec2(1,-1));
  vec3 col;
  if (uFirst > 0.5) {
    vec3 g0 = (a + b + d + e) * 0.25, g1 = (b + c + e + f) * 0.25, g2 = (d + e + g + h) * 0.25, g3 = (e + f + h + i) * 0.25, g4 = (j + k + l + m) * 0.25;
    float w0 = karis(g0) * 0.125, w1 = karis(g1) * 0.125, w2 = karis(g2) * 0.125, w3 = karis(g3) * 0.125, w4 = karis(g4) * 0.5;
    col = (g0 * w0 + g1 * w1 + g2 * w2 + g3 * w3 + g4 * w4) / (w0 + w1 + w2 + w3 + w4);
    col = min(col, vec3(60.0));
  } else {
    col = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;
  }
  outColor = vec4(col, 1.0);
}`,Ue=`
precision highp float;
in vec2 vUv; out vec4 outColor;
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uRadius;
void main(){
  vec2 d = uTexel * uRadius;
  vec3 c = texture(tSrc, vUv).rgb * 4.0;
  c += (texture(tSrc, vUv + vec2(d.x, 0)).rgb + texture(tSrc, vUv - vec2(d.x, 0)).rgb + texture(tSrc, vUv + vec2(0, d.y)).rgb + texture(tSrc, vUv - vec2(0, d.y)).rgb) * 2.0;
  c += texture(tSrc, vUv + d).rgb + texture(tSrc, vUv - d).rgb + texture(tSrc, vUv + vec2(d.x, -d.y)).rgb + texture(tSrc, vUv + vec2(-d.x, d.y)).rgb;
  outColor = vec4(c / 16.0, 1.0);
}`,We=class{constructor(e=6){this.levels=e,this.rts=[];for(let t=0;t<e;t++)this.rts.push(W(4,4,{type:w}));this.down=new U(He,{tSrc:{value:null},uTexel:{value:new k},uFirst:{value:0}}),this.up=new U(Ue,{tSrc:{value:null},uTexel:{value:new k},uRadius:{value:1}},{blending:5,blendEquation:100,blendSrc:201,blendDst:201,transparent:!0})}setSize(e,t){for(let n=0;n<this.levels;n++)e=Math.max(2,e>>1),t=Math.max(2,t>>1),this.rts[n].setSize(e,t)}render(e,t,n,r){let i=t,a=n,o=r;for(let t=0;t<this.levels;t++)this.down.u.tSrc.value=i,this.down.u.uTexel.value.set(1/a,1/o),this.down.u.uFirst.value=+(t===0),this.down.render(e,this.rts[t]),i=this.rts[t].texture,a=this.rts[t].width,o=this.rts[t].height;for(let t=this.levels-1;t>0;t--){let n=this.rts[t];this.up.u.tSrc.value=n.texture,this.up.u.uTexel.value.set(1/n.width,1/n.height),this.up.render(e,this.rts[t-1])}return this.rts[0].texture}},Ge=`
precision highp float;
in vec2 vUv; out vec4 outColor;
uniform sampler2D tColor, tDepth; uniform vec2 uTexel; uniform vec4 uDof; // focus dist, near range, far range, max px
${n}
float coc(float d){
  float c = d < uDof.x ? (uDof.x - d) / uDof.y : (d - uDof.x) / uDof.z;
  return clamp(c, 0.0, 1.0) * uDof.w * (d < uDof.x ? 0.7 : 1.0);
}
void main(){
  float z = textureLod(tDepth, vUv, 0.0).r;
  float d0 = z <= 0.0 ? 1e5 : linDepth(z);
  float c0 = coc(d0);
  vec3 col = texture(tColor, vUv).rgb;
  if (c0 < 0.6) {
    // still pull in blurry foreground neighbours
    c0 = 0.0;
  }
  vec3 acc = col; float wsum = 1.0;
  float rot = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) * 6.2831853;
  const int NS = 22;
  float maxR = uDof.w;
  for (int i = 0; i < NS; i++) {
    float t = (float(i) + 0.5) / float(NS);
    float r = sqrt(t) * maxR, a = float(i) * 2.399963 + rot;
    vec2 uv2 = vUv + vec2(cos(a), sin(a)) * r * uTexel;
    float z2 = textureLod(tDepth, uv2, 0.0).r;
    float d2 = z2 <= 0.0 ? 1e5 : linDepth(z2);
    float c2 = coc(d2);
    // a sample contributes if its own blur disc reaches this pixel; background samples are limited by our CoC
    float cs = d2 > d0 ? min(c2, c0) : c2;
    float w = smoothstep(r - 1.0, r + 1.0, cs + 0.5);
    acc += texture(tColor, uv2).rgb * w; wsum += w;
  }
  outColor = vec4(acc / wsum, 1.0);
}`,Ke=class{constructor(){this.pass=new U(Ge,{tColor:{value:null},tDepth:{value:null},uTexel:{value:new k},uDof:{value:new E(30,20,600,0)},uProjCD:s.uniforms.uProjCD,uProjInv:s.uniforms.uProjInv,uViewInv:s.uniforms.uViewInv})}},qe=`
precision highp float;
in vec2 vUv; out vec4 outColor;
uniform sampler2D tCur, tHist, tDepth;
uniform vec2 uTexel, uJitterUV; uniform mat4 uPrevVP; uniform float uReset, uBlend;
${n}
vec3 tm(vec3 c){ return c / (1.0 + max(c.r, max(c.g, c.b))); }
vec3 itm(vec3 c){ return c / max(1.0 - max(c.r, max(c.g, c.b)), 1e-4); }
// 5-tap Catmull-Rom (Jimenez) for a sharp history fetch
vec3 histSample(vec2 uv){
  vec2 pos = uv / uTexel, c = floor(pos - 0.5) + 0.5, f = pos - c;
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f)), w1 = 1.0 + f * f * (-2.5 + 1.5 * f), w2 = f * (0.5 + f * (2.0 - 1.5 * f)), w3 = f * f * (-0.5 + 0.5 * f);
  vec2 w12 = w1 + w2, t0 = (c - 1.0) * uTexel, t3 = (c + 2.0) * uTexel, t12 = (c + w2 / w12) * uTexel;
  vec3 r = texture(tHist, vec2(t12.x, t0.y)).rgb * (w12.x * w0.y)
         + texture(tHist, vec2(t0.x, t12.y)).rgb * (w0.x * w12.y)
         + texture(tHist, vec2(t12.x, t12.y)).rgb * (w12.x * w12.y)
         + texture(tHist, vec2(t3.x, t12.y)).rgb * (w3.x * w12.y)
         + texture(tHist, vec2(t12.x, t3.y)).rgb * (w12.x * w3.y);
  float ws = w12.x * w0.y + w0.x * w12.y + w12.x * w12.y + w3.x * w12.y + w12.x * w3.y;
  return max(r / ws, 0.0);
}
void main(){
  vec2 uvJ = vUv - uJitterUV;
  vec3 cur = texture(tCur, uvJ).rgb;
  if (uReset > 0.5) { outColor = vec4(cur, 1.0); return; }
  // closest depth in a 3x3 cross (reversed depth: nearest = largest) so edges reproject with the foreground
  float z = textureLod(tDepth, uvJ, 0.0).r; vec2 zo = vec2(0.0);
  for (int i = 0; i < 4; i++) {
    vec2 o = vec2(i == 0 ? -1.0 : i == 1 ? 1.0 : 0.0, i == 2 ? -1.0 : i == 3 ? 1.0 : 0.0) * uTexel;
    float zz = textureLod(tDepth, uvJ + o, 0.0).r; if (zz > z) { z = zz; zo = o; }
  }
  vec3 W = worldPos(uvJ + zo, max(z, 1e-7));
  vec4 pc = uPrevVP * vec4(W, 1.0);
  vec2 uvP = (pc.xy / pc.w) * 0.5 + 0.5 - zo;
  // neighbourhood statistics (tonemapped space) for variance clipping
  vec3 m1 = vec3(0.0), m2 = vec3(0.0), mn = vec3(1e9), mx = vec3(-1e9);
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec3 c = tm(texture(tCur, uvJ + vec2(float(x), float(y)) * uTexel).rgb);
    m1 += c; m2 += c * c; mn = min(mn, c); mx = max(mx, c);
  }
  m1 /= 9.0; vec3 sd = sqrt(max(m2 / 9.0 - m1 * m1, 0.0));
  vec3 lo = max(mn, m1 - 1.25 * sd), hi = min(mx, m1 + 1.25 * sd);
  vec3 hist = tm(histSample(uvP));
  hist = clamp(hist, lo, hi);
  float w = uBlend;
  if (uvP.x < 0.0 || uvP.x > 1.0 || uvP.y < 0.0 || uvP.y > 1.0 || pc.w <= 0.0) w = 0.0;
  // fast motion: trust history a bit less to limit smearing
  float mv = length((uvP - vUv) / uTexel);
  w *= mix(1.0, 0.82, clamp(mv / 40.0, 0.0, 1.0));
  vec3 res = mix(tm(cur), hist, w);
  outColor = vec4(itm(res), 1.0);
}`,Je=class{constructor(){this.pass=new U(qe,{tCur:{value:null},tHist:{value:null},tDepth:{value:null},uTexel:{value:new k},uJitterUV:{value:new k},uPrevVP:{value:new D},uReset:{value:1},uBlend:{value:.92},uProjCD:s.uniforms.uProjCD,uProjInv:s.uniforms.uProjInv,uViewInv:s.uniforms.uViewInv}),this.rtA=W(4,4),this.rtB=W(4,4),this.reset=!0,this.jitter=new k,this.index=0}setSize(e,t){this.rtA.setSize(e,t),this.rtB.setSize(e,t),this.w=e,this.h=t,this.reset=!0}nextJitter(){let e=(e,t)=>{let n=1,r=0;for(;e>0;)n/=t,r+=e%t*n,e=Math.floor(e/t);return r};return this.index=this.index%16+1,this.jitter.set(e(this.index,2)-.5,e(this.index,3)-.5)}render(e,t,n){let r=this.pass.u;r.tCur.value=t,r.tDepth.value=n,r.tHist.value=this.rtA.texture,r.uTexel.value.set(1/this.w,1/this.h),r.uJitterUV.value.set(this.jitter.x/this.w,this.jitter.y/this.h),r.uReset.value=+!!this.reset,this.reset=!1,this.pass.render(e,this.rtB);let i=this.rtA;return this.rtA=this.rtB,this.rtB=i,this.rtA.texture}},Ye=`
precision highp float;
in vec2 vUv; out vec4 outColor;
uniform sampler2D tColor, tBloom;
uniform float uExposure, uBloom, uTime, uVignette, uGrain, uSaturation, uContrast, uFade, uSharpen;
uniform vec3 uLift, uGamma, uGain, uShadowTint, uHighTint, uFadeColor;
uniform vec2 uRes;
// AgX (after three.js / Troy Sobotka), base look
vec3 agxDefaultContrastApprox(vec3 x){
  vec3 x2 = x * x, x4 = x2 * x2;
  return 15.5 * x4 * x2 - 40.14 * x4 * x + 31.96 * x4 - 6.868 * x2 * x + 0.4298 * x2 + 0.1191 * x - 0.00232;
}
vec3 agx(vec3 color){
  const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(vec3(1.6605, -0.1246, -0.0182), vec3(-0.5876, 1.1329, -0.1006), vec3(-0.0728, -0.0083, 1.1187));
  const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(vec3(0.6274, 0.0691, 0.0164), vec3(0.3293, 0.9195, 0.0880), vec3(0.0433, 0.0113, 0.8956));
  const mat3 AgXInsetMatrix = mat3(vec3(0.856627153315983, 0.137318972929847, 0.11189821299995), vec3(0.0951212405381588, 0.761241990602591, 0.0767994186031903), vec3(0.0482516061458583, 0.101439036467562, 0.811302368396859));
  const mat3 AgXOutsetMatrix = mat3(vec3(1.1271005818144368, -0.1413297634984383, -0.14132976349843826), vec3(-0.11060664309660323, 1.157823702216272, -0.11060664309660294), vec3(-0.016493938717834573, -0.016493938717834257, 1.2519364065950405));
  const float AgxMinEv = -12.47393, AgxMaxEv = 4.026069;
  color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
  color = AgXInsetMatrix * color;
  color = max(color, 1e-10);
  color = log2(color);
  color = (color - AgxMinEv) / (AgxMaxEv - AgxMinEv);
  color = clamp(color, 0.0, 1.0);
  color = agxDefaultContrastApprox(color);
  color = AgXOutsetMatrix * color;
  color = pow(max(vec3(0.0), color), vec3(2.2));
  color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
  return clamp(color, 0.0, 1.0);
}
vec3 toSRGB(vec3 c){ return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
float hash(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
void main(){
  vec2 c = vUv - 0.5;
  // very slight chromatic fringe towards the corners
  float ca = dot(c, c) * 0.0012;
  vec3 col;
  col.r = texture(tColor, vUv - c * ca).r;
  col.g = texture(tColor, vUv).g;
  col.b = texture(tColor, vUv + c * ca).b;
  // contrast-adaptive sharpen to win back what TAA softens
  vec2 px = 1.0 / uRes;
  vec3 nb = texture(tColor, vUv + vec2(px.x, 0.0)).rgb + texture(tColor, vUv - vec2(px.x, 0.0)).rgb + texture(tColor, vUv + vec2(0.0, px.y)).rgb + texture(tColor, vUv - vec2(0.0, px.y)).rgb;
  vec3 sh = col + (col - nb * 0.25) * uSharpen;
  col = clamp(sh, col * 0.6, col * 1.6);
  col += texture(tBloom, vUv).rgb * uBloom;
  col *= uExposure;
  col = agx(col);
  // grade in display-linear space
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(l), col, uSaturation);
  col = pow(max(col * uGain + uLift * (1.0 - col), 0.0), 1.0 / uGamma);
  l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col *= mix(uShadowTint, uHighTint, smoothstep(0.0, 0.6, l));
  col = mix(vec3(0.18), col, uContrast);                                   // pivot contrast
  col = max(col, 0.0);
  col = toSRGB(col);
  float v = 1.0 - uVignette * smoothstep(0.25, 1.05, length(c * vec2(1.0, uRes.y / uRes.x) * 2.0));
  col *= v;
  float n = hash(gl_FragCoord.xy + fract(uTime) * 517.0) - 0.5;
  col += n * uGrain * (1.0 - 0.6 * dot(col, vec3(0.333)));
  col = mix(col, uFadeColor, uFade);
  col += (hash(gl_FragCoord.xy * 1.37 + 3.1) - 0.5) / 255.0;                 // dither
  outColor = vec4(col, 1.0);
}`,Xe=class{constructor(){this.pass=new U(Ye,{tColor:{value:null},tBloom:{value:null},uExposure:{value:1},uBloom:{value:.05},uTime:s.uniforms.uTime,uVignette:{value:.22},uGrain:{value:.022},uSaturation:{value:1},uContrast:{value:1},uLift:{value:new A(0,0,0)},uGamma:{value:new A(1,1,1)},uGain:{value:new A(1,1,1)},uShadowTint:{value:new A(1,1,1)},uHighTint:{value:new A(1,1,1)},uSharpen:{value:.45},uFade:{value:0},uFadeColor:{value:new A(0,0,0)},uRes:s.uniforms.uResolution}),this.u=this.pass.u}},Ze=class{constructor(e){this.gl=e,this.ext=e.getExtension(`EXT_disjoint_timer_query_webgl2`),this.on=!1,this.pending=[],this.avg={},this.cur=null}begin(e){if(!this.on||!this.ext)return;let t=this.gl.createQuery();this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,t),this.cur={name:e,q:t}}end(){this.cur&&=(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.pending.push(this.cur),null)}poll(){if(!this.on||!this.ext)return;let e=this.gl;for(let t=0;t<this.pending.length;){let n=this.pending[t];if(e.getQueryParameter(n.q,e.QUERY_RESULT_AVAILABLE)){let r=e.getQueryParameter(n.q,e.QUERY_RESULT)/1e6;this.avg[n.name]=this.avg[n.name]===void 0?r:this.avg[n.name]*.9+r*.1,e.deleteQuery(n.q),this.pending.splice(t,1)}else t++}}report(){let e={},t=0;for(let n in this.avg)e[n]=+this.avg[n].toFixed(2),t+=this.avg[n];return e.total=+t.toFixed(2),e}},Qe=`
precision highp float;
in vec2 vUv; out vec4 outColor;
uniform sampler2D tColor, tDepth, tAO; uniform float uAOOn;
void main(){
  vec3 c = texture(tColor, vUv).rgb;
  float ao = mix(1.0, texture(tAO, vUv).r, uAOOn);
  // occlusion mostly belongs to ambient light: fade it on brightly lit pixels
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  ao = mix(ao, 1.0, clamp(l * 0.22, 0.0, 0.55));
  outColor = vec4(c * ao, 1.0);
  gl_FragDepth = texture(tDepth, vUv).r;
}`,$e=`
precision highp float; in vec2 vUv; out vec4 outColor; uniform sampler2D tColor;
void main(){ outColor = texture(tColor, vUv); }`,et=class{constructor(e,t=`medium`){this.canvas=e;let n=this.renderer=new o({canvas:e,antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:`high-performance`,reversedDepthBuffer:!0});n.setPixelRatio(1),n.autoClear=!1,n.toneMapping=0,n.outputColorSpace=ce,n.shadowMap.enabled=!0,n.shadowMap.type=1,n.shadowMap.autoUpdate=!1,n.info.autoReset=!1,n.setClearColor(0,1);let r=n.getContext(),i=r.getExtension(`WEBGL_debug_renderer_info`);this.gpu=i?r.getParameter(i.UNMASKED_RENDERER_WEBGL):`unknown`,this.maxAniso=n.capabilities.getMaxAnisotropy(),this.prof=new Ze(r),this.scene=new fe,this.scene.fog=new h(16777215,1e-4),this.scene.environmentIntensity=u.envIntensity;let a=this.camera=new _e(58,16/9,.12,6e3);a._reversedDepth=!0,a.rotation.order=`YXZ`,this.sun=Ie(new S(...u.sunColor),u.sunIntensity),this.sun.position.copy(c);let s=this.sun.shadow;s.bias=-2e-5,s.normalBias=.02,s.radius=2.2,s.camera.layers.set(f.OPAQUE),s.camera.layers.enable(f.DETAIL),s.camera.layers.enable(f.SHADOW_ONLY),this.scene.add(this.sun),this.rtOpaque=null,this.rtMain=null,this.ao=new Ve,this.bloom=new We(6),this.dof=new Ke,this.final=new Xe,this.taa=new Je,this.prevVP=new D,this._vp=new D,this.applyLook(u),this.composite=new U(Qe,{tColor:{value:null},tDepth:{value:null},tAO:{value:null},uAOOn:{value:1}},{depthTest:!0,depthWrite:!0,depthFunc:1}),this.blit=new U($e,{tColor:{value:null}}),this.volBlend=new U($e,{tColor:{value:null}},{transparent:!0,blending:5,blendEquation:100,blendSrc:201,blendDst:204,blendSrcAlpha:200,blendDstAlpha:201}),this.water=null,this.volumetrics=null,this.systems=[],this.time=0,this.frame=0,this.stats={ms:16.7,cpuMs:0,samples:[],recording:!1,calls:0,tris:0},this.dofParams={on:!1,focus:40,near:20,far:800,maxPx:0},this.setQuality(t)}applyLook(e){let t=this.final.u;t.uExposure.value=e.exposure,t.uContrast.value=e.contrast,t.uSaturation.value=e.saturation,t.uShadowTint.value.fromArray(e.shadowTint),t.uHighTint.value.fromArray(e.highTint),t.uBloom.value=e.bloom,t.uVignette.value=e.vignette,t.uGrain.value=e.grain,this.sun.intensity=e.sunIntensity,this.sun.color.setRGB(...e.sunColor),this.scene.environmentIntensity=e.envIntensity}setQuality(e){this.qualityName=d[e]?e:`medium`,this.q=d[this.qualityName],this.sun.shadow.mapSize.set(this.q.shadow,this.q.shadow),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null),this.resize(this._cssW||this.canvas.clientWidth||1280,this._cssH||this.canvas.clientHeight||720,this._dpr||1)}resize(e,t,n=1){this._cssW=e,this._cssH=t,this._dpr=n;let r=this.qualityName===`high`?4096e3:2073600,i=e*n,a=t*n,o=Math.min(1,Math.sqrt(r/(i*a)))*this.q.scale;i=Math.max(16,Math.round(i*o/2)*2),a=Math.max(16,Math.round(a*o/2)*2),this.w=i,this.h=a,this.renderer.setSize(i,a,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),s.uniforms.uResolution.value.set(i,a);let c=()=>{let e=new ue(i,a,oe);return e.minFilter=e.magFilter=le,e};this.rtOpaque?.dispose(),this.rtMain?.dispose(),this.rtPost?.dispose(),this.rtOpaque=W(i,a,{depthBuffer:!0,depthTexture:c()}),this.rtMain=W(i,a,{depthBuffer:!0,depthTexture:c()}),this.rtPost=W(i,a),this.ao.setSize(i,a),this.bloom.setSize(i,a),this.taa.setSize(i,a),this.water?.setSize?.(i,a,this.q),this.volumetrics?.setSize?.(i,a,this.q)}add(e){return this.systems.push(e),e}update(e){this.time+=e,this.frame++,s.uniforms.uTime.value=this.time;for(let t of this.systems)t.update?.(e,this.time)}render(){let e=this.renderer,t=this.camera,n=this.scene,r=s.uniforms,i=performance.now();e.info.reset(),t.updateMatrixWorld(),t.updateProjectionMatrix(),this._vp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse);let a=this.taa.nextJitter();t.projectionMatrix.elements[8]+=2*a.x/this.w,t.projectionMatrix.elements[9]+=2*a.y/this.h,t.projectionMatrixInverse.copy(t.projectionMatrix).invert(),r.uCamPosW.value.setFromMatrixPosition(t.matrixWorld),r.uProjInv.value.copy(t.projectionMatrixInverse),r.uViewInv.value.copy(t.matrixWorld),r.uProjCD.value.set(t.near/(t.far-t.near),t.far*t.near/(t.far-t.near)),r.uClipY.value=-1e5;let o=this.prof;o.poll(),t.layers.set(f.OPAQUE),t.layers.enable(f.DETAIL),e.shadowMap.needsUpdate=!0,o.begin(`opaque+shadow`),e.setRenderTarget(this.rtOpaque),e.clear(),e.render(n,t),o.end(),o.begin(`reflection`),this.water?.renderReflection(this),o.end();let c=this.rtOpaque.depthTexture,l=null;if(o.begin(`ao`),this.q.ao&&(l=this.ao.render(e,c,t)),o.end(),o.begin(`composite+water`),this.composite.u.tColor.value=this.rtOpaque.texture,this.composite.u.tDepth.value=c,this.composite.u.tAO.value=l,this.composite.u.uAOOn.value=+!!l,e.setRenderTarget(this.rtMain),e.clear(),this.composite.render(e,this.rtMain),t.layers.set(f.WATER),e.setRenderTarget(this.rtMain),e.render(n,t),o.end(),o.begin(`volumetrics`),this.volumetrics){let t=this.volumetrics.render(this,this.rtMain.depthTexture);t&&(this.volBlend.u.tColor.value=t,this.volBlend.render(e,this.rtMain))}o.end(),o.begin(`transparent`),t.layers.set(f.TRANS),e.setRenderTarget(this.rtMain),e.render(n,t),t.layers.set(f.OPAQUE),t.layers.enable(f.DETAIL),o.end(),o.begin(`post`),this.taa.pass.u.uPrevVP.value.copy(this.prevVP);let u=this.taa.render(e,this.rtMain.texture,this.rtMain.depthTexture);this.prevVP.copy(this._vp);let d=this.dofParams;if(this.q.dof&&d.on&&d.maxPx>.5){let t=this.dof.pass.u;t.tColor.value=u,t.tDepth.value=this.rtMain.depthTexture,t.uTexel.value.set(1/this.w,1/this.h),t.uDof.value.set(d.focus,d.near,d.far,d.maxPx*this.h/1080),this.dof.pass.render(e,this.rtPost),u=this.rtPost.texture}let p=this.bloom.render(e,u,this.w,this.h);this.final.u.tColor.value=u,this.final.u.tBloom.value=p,this.final.pass.render(e,null),o.end();let m=this.stats;m.cpuMs=performance.now()-i,m.calls=e.info.render.calls,m.tris=e.info.render.triangles}tickStats(e){let t=this.stats;t.ms+=(e-t.ms)*.05,t.recording&&t.samples.push(e)}},tt=class extends xe{constructor(e){super(e),this.type=w}parse(e){let t=function(e,t){switch(e){case 1:throw Error(`THREE.HDRLoader: Read Error: `+(t||``));case 2:throw Error(`THREE.HDRLoader: Write Error: `+(t||``));case 3:throw Error(`THREE.HDRLoader: Bad File Format: `+(t||``));default:case 4:throw Error(`THREE.HDRLoader: Memory Error: `+(t||``))}},n=function(e,t,n){t||=1024;let r=e.pos,i=-1,a=0,o=``,s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));for(;0>(i=s.indexOf(`
`))&&a<t&&r<e.byteLength;)o+=s,a+=s.length,r+=128,s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));return-1<i&&(!1!==n&&(e.pos+=a+i+1),o+s.slice(0,i))},r=function(e){let r=/^#\?(\S+)/,i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,c={valid:0,string:``,comments:``,programtype:`RGBE`,format:``,gamma:1,exposure:1,width:0,height:0},l,u;for((e.pos>=e.byteLength||!(l=n(e)))&&t(1,`no header found`),(u=l.match(r))||t(3,`bad initial token`),c.valid|=1,c.programtype=u[1],c.string+=l+`
`;l=n(e),!1!==l;)if(c.string+=l+`
`,l.charAt(0)===`#`)c.comments+=l+`
`;else if((u=l.match(i))&&(c.gamma=parseFloat(u[1])),(u=l.match(a))&&(c.exposure=parseFloat(u[1])),(u=l.match(o))&&(c.valid|=2,c.format=u[1]),(u=l.match(s))&&(c.valid|=4,c.height=parseInt(u[1],10),c.width=parseInt(u[2],10)),c.valid&2&&c.valid&4)break;return c.valid&2||t(3,`missing format specifier`),c.valid&4||t(3,`missing image size specifier`),c},i=function(e,n,r){let i=n;if(i<8||i>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);i!==(e[2]<<8|e[3])&&t(3,`wrong scanline width`);let a=new Uint8Array(4*n*r);a.length||t(4,`unable to allocate buffer space`);let o=0,s=0,c=4*i,l=new Uint8Array(4),u=new Uint8Array(c),d=r;for(;d>0&&s<e.byteLength;){s+4>e.byteLength&&t(1),l[0]=e[s++],l[1]=e[s++],l[2]=e[s++],l[3]=e[s++],(l[0]!=2||l[1]!=2||(l[2]<<8|l[3])!=i)&&t(3,`bad rgbe scanline format`);let n=0,r;for(;n<c&&s<e.byteLength;){r=e[s++];let i=r>128;if(i&&(r-=128),(r===0||n+r>c)&&t(3,`bad scanline data`),i){let t=e[s++];for(let e=0;e<r;e++)u[n++]=t}else u.set(e.subarray(s,s+r),n),n+=r,s+=r}let f=i;for(let e=0;e<f;e++){let t=0;a[o]=u[e+t],t+=i,a[o+1]=u[e+t],t+=i,a[o+2]=u[e+t],t+=i,a[o+3]=u[e+t],o+=4}d--}return a},a=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=e[t+0]*i,n[r+1]=e[t+1]*i,n[r+2]=e[t+2]*i,n[r+3]=1},o=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=O.toHalfFloat(Math.min(e[t+0]*i,65504)),n[r+1]=O.toHalfFloat(Math.min(e[t+1]*i,65504)),n[r+2]=O.toHalfFloat(Math.min(e[t+2]*i,65504)),n[r+3]=O.toHalfFloat(1)},s=new Uint8Array(e);s.pos=0;let c=r(s),l=c.width,u=c.height,d=i(s.subarray(s.pos),l,u),f,p,m;switch(this.type){case oe:m=d.length/4;let e=new Float32Array(m*4);for(let t=0;t<m;t++)a(d,t*4,e,t*4);f=e,p=oe;break;case w:m=d.length/4;let t=new Uint16Array(m*4);for(let e=0;e<m;e++)o(d,e*4,t,e*4);f=t,p=w;break;default:throw Error(`THREE.HDRLoader: Unsupported type: `+this.type)}return{width:l,height:u,data:f,header:c.string,gamma:c.gamma,exposure:c.exposure,type:p,colorSpace:ce,minFilter:x,magFilter:x,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}},nt=`
varying vec3 vDir;
void main(){
  vDir = position;
  vec4 p = projectionMatrix * vec4(mat3(viewMatrix) * position, 1.0);
  gl_Position = vec4(p.xy, 0.0, p.w); // reversed depth: z = 0 is the far plane
}`,rt=`
precision highp float;
varying vec3 vDir;
uniform sampler2D tSky; uniform float uRot, uMirror, uVScale, uK, uSkyGain, uSunU;
uniform vec3 uSkyTint;
${a}
vec3 skyLookup(vec3 d){
  float ang = atan(d.z, d.x) - uRot;
  float u = ang / 6.2831853 + 0.5;
  u = mix(u, 2.0 * uSunU - u, uMirror);
  float v = acos(clamp(d.y, -1.0, 1.0)) / 3.14159265;
  float tv = 1.0 - min(v / uVScale, 0.999);
  // analytic gradients: the u wrap would otherwise pick the smallest mip along the seam
  vec2 uv = vec2(u, tv);
  vec2 dx = dFdx(uv), dy = dFdy(uv);
  dx.x -= floor(dx.x + 0.5); dy.x -= floor(dy.x + 0.5);
  vec3 e = textureGrad(tSky, uv, dx, dy).rgb;
  vec3 x = pow(e, vec3(2.2));
  return x / max(1.0 - x, 0.004) / uK;
}
void main(){
  vec3 d = normalize(vDir);
  vec3 dd = d; dd.y = max(dd.y, 0.004);
  vec3 col = skyLookup(normalize(dd)) * uSkyGain * uSkyTint;
  // blend into the fog colour at and below the horizon so distant terrain melts into the sky
  float hz = 1.0 - smoothstep(-0.01, 0.075, d.y);
  col = mix(col, mdFogColor(d), hz * uFogMax);
  gl_FragColor = vec4(col, 1.0);
}`,it=class{constructor(e){this.engine=e,this.mirror=0,this.rotOffset=0}async load(e=`/mengdie/assets`){let t=await(await fetch(`${e}/gen/sky.json`)).json();this.meta=t;let n=new ne,[r,i]=await Promise.all([n.loadAsync(`${e}/gen/sky_8k.jpg`),new tt().loadAsync(`${e}/ph/kloofendal_48d_partly_cloudy_puresky_1k.hdr`)]);r.colorSpace=``,r.wrapS=C,r.wrapT=se,r.minFilter=b,r.generateMipmaps=!0,r.anisotropy=4,i.mapping=303,i.wrapS=C,this.hdr=i;let a=Math.atan2(c.z,c.x),o=(t.sunU-.5)*Math.PI*2;this.baseRot=a-o,this.uniforms={tSky:{value:r},uRot:{value:this.baseRot},uMirror:{value:this.mirror},uVScale:{value:t.height/t.fullHeight},uK:{value:t.encodeK},uSkyGain:{value:1},uSunU:{value:t.sunU},uSkyTint:{value:new S(1,1,1)},...s.uniforms};let l=new Ce({vertexShader:nt,fragmentShader:rt,uniforms:this.uniforms,side:1,depthWrite:!1,depthTest:!0,fog:!1}),u=new T(new ae(1,3),l);u.frustumCulled=!1,u.renderOrder=1e3,u.layers.set(f.OPAQUE),u.matrixAutoUpdate=!1,this.mesh=u,this.engine.scene.add(u),this.applyFogFromSky(),this.buildEnvironment()}applyFogFromSky(e=1){let t=this.meta;s.uniforms.uFogColorSun.value.setRGB(t.horizonSun[0]*e,t.horizonSun[1]*e,t.horizonSun[2]*e),s.uniforms.uFogColorSky.value.setRGB(t.horizonAway[0]*e*1.25,t.horizonAway[1]*e*1.25,t.horizonAway[2]*e*1.3)}buildEnvironment(t=new S(.055,.065,.04)){let n=this.engine.renderer,r=new fe,i=new Ce({side:1,depthTest:!1,depthWrite:!1,uniforms:{tHdr:{value:this.hdr},uRot:{value:this.baseRot},uGround:{value:t},uMirror:{value:this.mirror},uSunU:{value:this.meta.sunU}},vertexShader:`varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        varying vec3 vDir; uniform sampler2D tHdr; uniform float uRot, uMirror, uSunU; uniform vec3 uGround;
        void main(){
          vec3 d = normalize(vDir);
          float u = (atan(d.z, d.x) - uRot) / 6.2831853 + 0.5;
          u = mix(u, 2.0 * uSunU - u, uMirror);
          float v = asin(clamp(max(d.y, 0.0), -1.0, 1.0)) / 3.14159265 + 0.5;
          vec3 sky = min(texture2D(tHdr, vec2(u, v)).rgb, vec3(14.0)); // drop the sun disc: the SunLight provides it
          float g = smoothstep(0.02, -0.12, d.y);
          gl_FragColor = vec4(mix(sky, uGround, g), 1.0);
        }`});r.add(new T(new ae(10,4),i));let a=new e(n),o=a.fromScene(r,0,.1,100);a.dispose(),i.dispose(),this.envRT&&this.envRT.dispose(),this.envRT=o,this.engine.scene.environment=o.texture}},at=new ne,ot=new Map,st=8;function ct(e){st=e}function lt(e,t){return e.colorSpace=t?ie:``,e.wrapS=e.wrapT=C,e.anisotropy=st,e.minFilter=b,e.magFilter=x,e}function ut(e,t=!1){let n=e+(t?`|s`:``);return ot.has(n)||ot.set(n,at.loadAsync(e).then(e=>lt(e,t))),ot.get(n)}async function dt(e,t=`dna`){let n={},r=[];return t.includes(`d`)&&r.push(ut(`/mengdie/assets/ph/${e}_diff.jpg`,!0).then(e=>n.map=e)),t.includes(`n`)&&r.push(ut(`/mengdie/assets/ph/${e}_nor.jpg`).then(e=>n.normalMap=e)),t.includes(`a`)&&r.push(ut(`/mengdie/assets/ph/${e}_arm.jpg`).then(e=>n.arm=e)),await Promise.all(r),n}function ft(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function pt(){let e=new Uint8Array(262144),t=ft(1337),n=new Uint8Array(65536);for(let e=0;e<65536;e++)n[e]=t()*256|0;let r=e=>{let t=new Float32Array(65536),n=.5,r=0;for(let i=4;i<=64;i*=2){let a=ft(e+i),o=new Float32Array(i*i);for(let e=0;e<o.length;e++)o[e]=a();for(let e=0;e<256;e++)for(let r=0;r<256;r++){let a=r/256*i,s=e/256*i,c=Math.floor(a),l=Math.floor(s),u=a-c,d=s-l;u=u*u*(3-2*u),d=d*d*(3-2*d);let f=o[l%i*i+c%i],p=o[l%i*i+(c+1)%i],m=o[(l+1)%i*i+c%i],h=o[(l+1)%i*i+(c+1)%i];t[e*256+r]+=n*(f+(p-f)*u+(m-f)*d+(f-p-m+h)*u*d)}r+=n,n*=.5}for(let e=0;e<t.length;e++)t[e]/=r;return t},i=r(11),a=r(97);for(let t=0;t<256;t++)for(let r=0;r<256;r++){let o=t*256+r;e[o*4]=n[o],e[o*4+1]=n[(t-17&255)*256+(r-37&255)],e[o*4+2]=Math.min(255,i[o]*255),e[o*4+3]=Math.min(255,a[o]*255)}let o=new me(e,256,256,p);return o.wrapS=o.wrapT=C,o.minFilter=b,o.magFilter=x,o.generateMipmaps=!0,o.needsUpdate=!0,o}var G={ref:{...l},sage_face:{pos:[-12,46,62],yaw:5.5,pitch:14,fov:30},sage_wide:{pos:[40,30,150],yaw:12,pitch:4,fov:40},top:{pos:[20,520,60],yaw:0,pitch:-88,fov:50}};async function K(e,t=`/mengdie/assets/gen`){let[n,r]=await Promise.all([fetch(`${t}/${e}.json`).then(e=>e.json()),fetch(`${t}/${e}.bin`).then(e=>e.arrayBuffer())]),i=[];for(let e of n.chunks){let t=new he,n=new Uint16Array(r,e.off.pos,e.vcount*3),a=new Float32Array(e.vcount*3),o=e.box,s=(o[3]-o[0])/65535,c=(o[4]-o[1])/65535,l=(o[5]-o[2])/65535;for(let t=0;t<e.vcount;t++)a[t*3]=o[0]+n[t*3]*s,a[t*3+1]=o[1]+n[t*3+1]*c,a[t*3+2]=o[2]+n[t*3+2]*l;t.setAttribute(`position`,new m(a,3)),t.setAttribute(`normal`,new m(new Int8Array(r,e.off.nrm,e.vcount*3),3,!0)),e.off.col!==void 0&&t.setAttribute(`color`,new m(new Uint8Array(r,e.off.col,e.vcount*4),4,!0)),t.setIndex(new m(e.idx32?new Uint32Array(r,e.off.idx,e.icount):new Uint16Array(r,e.off.idx,e.icount),1)),t.boundingBox=new v(new A(o[0],o[1],o[2]),new A(o[3],o[4],o[5])),t.boundingSphere=t.boundingBox.getBoundingSphere(new pe),i.push({id:e.id,geometry:t,meta:e.meta,box:t.boundingBox})}return{...n,meshes:i}}var mt=`
precision highp float; in vec2 vUv; out vec4 outColor; uniform sampler2D tA; uniform vec3 uTint;
void main(){ outColor = vec4(texture(tA, vUv).rgb * uTint, 1.0); }`,ht=`
precision highp float; in vec2 vUv; out vec4 outColor; uniform sampler2D tN, tM;
void main(){ vec3 n = texture(tN, vUv).xyz; vec3 m = texture(tM, vUv).rgb; outColor = vec4(n.xy, m.g, m.r); }`,gt,q;async function _t(e,t,n=1024,r=8){let i=await Promise.all(t.map(e=>dt(e))),a=e=>{let i=new ve(n,n,t.length,{depthBuffer:!1,type:te,format:p}),a=i.texture;return a.colorSpace=e?ie:``,a.wrapS=a.wrapT=C,a.minFilter=b,a.magFilter=x,a.generateMipmaps=!0,a.anisotropy=r,i},o=a(!0),s=a(!1);gt??=new U(mt,{tA:{value:null},uTint:{value:new A(1,1,1)}}),q??=new U(ht,{tN:{value:null},tM:{value:null}});let c=e.getRenderTarget();for(let n=0;n<t.length;n++)gt.u.tA.value=i[n].map,e.setRenderTarget(o,n),e.render(gt.mesh,vt),q.u.tN.value=i[n].normalMap,q.u.tM.value=i[n].arm,e.setRenderTarget(s,n),e.render(q.mesh,vt);e.setRenderTarget(c);for(let e of i)e.map.dispose(),e.normalMap.dispose(),e.arm.dispose();let l={};return t.forEach((e,t)=>l[e]=t),{albedo:o.texture,nra:s.texture,layer:l,rtA:o,rtN:s}}var vt=new _(-1,1,1,-1,0,1),yt=`
vec3 mdUnpackN(vec2 rg){ vec2 xy = rg * 2.0 - 1.0; return vec3(xy, sqrt(max(1.0 - dot(xy, xy), 0.0))); }
struct MdTP { vec3 alb; vec3 nrm; float rough; float ao; };
// Triplanar sample of one layer; returns a world-space normal (whiteout blend). Planes with a negligible
// weight are skipped (explicit gradients keep mip selection valid inside the branches).
MdTP mdTri(sampler2DArray tD, sampler2DArray tN, float layer, vec3 p, vec3 n, vec3 w, float s){
  MdTP o; o.alb = vec3(0.0); o.rough = 0.0; o.ao = 0.0; vec3 nn = vec3(0.0);
  vec3 ps = p * s, dx = dFdx(ps), dy = dFdy(ps);
  if (w.x > 0.012) {
    vec3 c = vec3(ps.zy, layer); vec4 t = textureGrad(tN, c, dx.zy, dy.zy);
    o.alb += textureGrad(tD, c, dx.zy, dy.zy).rgb * w.x; o.rough += t.b * w.x; o.ao += t.a * w.x;
    vec3 tn = mdUnpackN(t.rg); tn = vec3(tn.xy + n.zy, abs(tn.z) * n.x); nn += tn.zyx * w.x;
  }
  if (w.y > 0.012) {
    vec3 c = vec3(ps.xz, layer); vec4 t = textureGrad(tN, c, dx.xz, dy.xz);
    o.alb += textureGrad(tD, c, dx.xz, dy.xz).rgb * w.y; o.rough += t.b * w.y; o.ao += t.a * w.y;
    vec3 tn = mdUnpackN(t.rg); tn = vec3(tn.xy + n.xz, abs(tn.z) * n.y); nn += tn.xzy * w.y;
  }
  if (w.z > 0.012) {
    vec3 c = vec3(ps.xy, layer); vec4 t = textureGrad(tN, c, dx.xy, dy.xy);
    o.alb += textureGrad(tD, c, dx.xy, dy.xy).rgb * w.z; o.rough += t.b * w.z; o.ao += t.a * w.z;
    vec3 tn = mdUnpackN(t.rg); tn = vec3(tn.xy + n.xy, abs(tn.z) * n.z); nn += tn.xyz * w.z;
  }
  o.nrm = normalize(nn);
  return o;
}
vec3 mdTriN(sampler2DArray tN, float layer, vec3 p, vec3 n, vec3 w, float s){
  vec3 nn = vec3(0.0); vec3 ps = p * s, dx = dFdx(ps), dy = dFdy(ps);
  if (w.x > 0.012) { vec3 tn = mdUnpackN(textureGrad(tN, vec3(ps.zy, layer), dx.zy, dy.zy).rg); tn = vec3(tn.xy + n.zy, abs(tn.z) * n.x); nn += tn.zyx * w.x; }
  if (w.y > 0.012) { vec3 tn = mdUnpackN(textureGrad(tN, vec3(ps.xz, layer), dx.xz, dy.xz).rg); tn = vec3(tn.xy + n.xz, abs(tn.z) * n.y); nn += tn.xzy * w.y; }
  if (w.z > 0.012) { vec3 tn = mdUnpackN(textureGrad(tN, vec3(ps.xy, layer), dx.xy, dy.xy).rg); tn = vec3(tn.xy + n.xy, abs(tn.z) * n.z); nn += tn.xyz * w.z; }
  return normalize(nn);
}
// top-down (xz) sample of one layer with explicit gradients (safe inside branches)
MdTP mdTop(sampler2DArray tD, sampler2DArray tN, float layer, vec2 uv, vec2 dx, vec2 dy, vec3 n){
  MdTP o; vec3 c = vec3(uv, layer);
  o.alb = textureGrad(tD, c, dx, dy).rgb;
  vec4 t = textureGrad(tN, c, dx, dy); o.rough = t.b; o.ao = t.a;
  vec3 tn = mdUnpackN(t.rg);
  o.nrm = normalize(vec3(tn.x + n.x, abs(tn.z) * max(n.y, 0.0) + 0.001, tn.y + n.z));
  return o;
}
`,bt=0;function xt(e,t={}){let n=t.key||`md`+bt++;return t.defines&&(e.defines={...e.defines||{},...t.defines}),e.userData.mdUniforms=t.uniforms||{},e.onBeforeCompile=r=>{for(let e in s.uniforms)r.uniforms[e]=s.uniforms[e];for(let t in e.userData.mdUniforms)r.uniforms[t]=e.userData.mdUniforms[t];let i=r.vertexShader,o=r.fragmentShader,c=(e,t,r,i=!1)=>r?e.includes(t)?e.replace(t,i?r+`
`+t:t+`
`+r):(console.warn(`[matpatch:${n}] token not found: ${t}`),e):e;i=c(i,`#include <common>`,a+`
`+(t.vertPars||``)),i=c(i,`#include <beginnormal_vertex>`,t.vertNormal),i=c(i,`#include <begin_vertex>`,t.vertPos),t.vertEnd&&(i=i.replace(/}\s*$/,t.vertEnd+`
}`)),o=c(o,`#include <common>`,a+`
`+(t.fragPars||``)),o=c(o,`#include <color_fragment>`,t.fragAlbedo),o=c(o,`#include <metalnessmap_fragment>`,t.fragRM),o=c(o,`#include <normal_fragment_maps>`,t.fragNormal),o=c(o,`#include <emissivemap_fragment>`,t.fragEmissive),o=c(o,`#include <aomap_fragment>`,t.fragAO),o=c(o,`#include <opaque_fragment>`,t.fragOut,!0),r.vertexShader=i,r.fragmentShader=o,e.userData.shader=r},e.customProgramCacheKey=()=>n,e}var St=`
varying vec3 vWP;
varying vec3 vWN;
`,Ct=`
{
  vec4 mdw = vec4( transformed, 1.0 );
  vec3 mdn = objectNormal;
  #ifdef USE_INSTANCING
    mdw = instanceMatrix * mdw;
    mdn = mat3( instanceMatrix ) * mdn;
  #endif
  vWP = ( modelMatrix * mdw ).xyz;
  vWN = normalize( mat3( modelMatrix ) * mdn );
}`,wt=`
varying vec3 vWP;
varying vec3 vWN;
`,J={ROCK:0,ROCK2:1,SOIL:2,MOSS:3,PEB:4,PATH:5},Tt=[`marble_cliff_03`,`rock_face_03`,`forest_ground_04`,`forrest_ground_01`,`ganges_river_pebbles`,`rocky_trail`],Et=`
${wt}
varying vec4 vTCol;
uniform sampler2DArray tAlb, tNRA;
uniform vec3 uRockTint, uRockTint2, uSoilTint, uMossTint, uCanopyTint;
uniform float uFarMode;
vec3 mdNw; float mdRough; float mdAO;
${yt}
`,Dt=`
{
  vec3 Nw = normalize(vWN);
  vec3 tw = pow(abs(Nw), vec3(6.0)); tw /= (tw.x + tw.y + tw.z);
  float camDist = length(vWP - cameraPosition);
  float macro = texture(uNoiseTex, vWP.xz * 0.0027 + vWP.y * 0.0013).b;
  float macro2 = texture(uNoiseTex, vWP.xz * 0.019 + vec2(vWP.y * 0.013, 0.0)).a;
  float fine = texture(uNoiseTex, vWP.xz * 0.11 + vWP.y * 0.07).b;

  // ---- rock (triplanar): near scale, far scale cross-faded by distance, plus a close-up detail normal
  float farMix = smoothstep(45.0, 170.0, camDist);
  MdTP rk;
  if (farMix < 0.99) rk = mdTri(tAlb, tNRA, ${J.ROCK}.0, vWP, Nw, tw, 1.0 / 7.0);
  if (farMix > 0.01) {
    MdTP rf = mdTri(tAlb, tNRA, ${J.ROCK}.0, vWP + 13.7, Nw, tw, 1.0 / 33.0);
    if (farMix >= 0.99) rk = rf;
    else { rk.alb = mix(rk.alb, rf.alb, farMix); rk.rough = mix(rk.rough, rf.rough, farMix); rk.ao = mix(rk.ao, rf.ao, farMix); rk.nrm = normalize(mix(rk.nrm, rf.nrm, farMix)); }
  }
  float nearMix = 1.0 - smoothstep(5.0, 24.0, camDist);
  if (nearMix > 0.01) {
    vec3 dn = mdTriN(tNRA, ${J.ROCK2}.0, vWP, Nw, tw, 1.0 / 1.6);
    rk.nrm = normalize(rk.nrm + (dn - Nw) * 0.7 * nearMix);
  }
  vec3 rockAlb = rk.alb * mix(uRockTint, uRockTint2, smoothstep(0.35, 0.7, macro));
  // bedding bands and vertical water stains on steep faces
  float steep = 1.0 - Nw.y * Nw.y;
  float band = sin(vWP.y * 0.85 + macro2 * 7.0 + macro * 9.0) * 0.5 + 0.5;
  rockAlb *= mix(1.0, mix(0.86, 1.08, band), steep);
  float streak = texture(uNoiseTex, vec2(dot(vWP.xz, vec2(0.71, 0.63)) * 0.035, vWP.y * 0.0035)).b;
  float streak2 = texture(uNoiseTex, vec2(dot(vWP.xz, vec2(-0.59, 0.77)) * 0.11, vWP.y * 0.008)).a;
  float st = smoothstep(0.52, 0.75, streak * 0.65 + streak2 * 0.35) * steep;
  rockAlb *= mix(1.0, 0.55, st);
  float rockRough = mix(rk.rough, 0.6, st * 0.4);
  // moss / lichen on ledges and in damp cavities
  float mossR = smoothstep(0.05, 0.6, Nw.y + (macro2 - 0.5) * 0.5) * smoothstep(0.30, 0.62, macro2 * 0.6 + fine * 0.25 + (1.0 - vTCol.r) * 0.45);
  rockAlb = mix(rockAlb, uMossTint * (0.55 + 0.9 * rk.alb.g), mossR * 0.8);
  rockRough = mix(rockRough, 0.95, mossR * 0.7);

  // ---- soil / moss cover (top projection)
  vec2 guv = vWP.xz, gdx = dFdx(guv), gdy = dFdy(guv);
  float hb = dot(rk.alb, vec3(0.33));                     // rock brightness as a pseudo height for the blend
  float cover = smoothstep(0.42, 0.62, vTCol.g + (0.5 - hb) * 0.5 + (fine - 0.5) * 0.25);
  vec3 alb = rockAlb; vec3 nw = rk.nrm; float rough = rockRough; float aoTex = rk.ao;
  if (cover > 0.004) {
    float canopy = smoothstep(420.0, 900.0, camDist) * uFarMode;   // far away the cover reads as closed forest canopy
    vec3 gA; vec3 gN = Nw; float gRough = 0.92, gAO = 1.0;
    if (canopy < 0.995) {
      float gm = smoothstep(0.38, 0.62, macro2 * 0.7 + fine * 0.3);
      MdTP so = mdTop(tAlb, tNRA, ${J.SOIL}.0, guv / 2.9, gdx / 2.9, gdy / 2.9, Nw);
      MdTP mo = mdTop(tAlb, tNRA, ${J.MOSS}.0, guv / 3.6, gdx / 3.6, gdy / 3.6, Nw);
      gA = mix(so.alb * uSoilTint, mo.alb * uMossTint * 2.2, gm) * mix(0.72, 1.12, macro);
      gN = normalize(mix(so.nrm, mo.nrm, gm));
      gRough = mix(mix(so.rough, mo.rough, gm), 0.92, 0.5); gAO = mix(so.ao, mo.ao, gm);
    }
    gA = mix(gA, uCanopyTint * (0.55 + 0.9 * fine) * mix(0.75, 1.2, macro2), canopy);
    alb = mix(alb, gA, cover); nw = normalize(mix(nw, gN, cover)); rough = mix(rough, gRough, cover); aoTex = mix(aoTex, gAO, cover);
  }
  // ---- trodden path
  float pth = smoothstep(0.35, 0.65, vTCol.a + (fine - 0.5) * 0.3);
  if (pth > 0.004) {
    MdTP pt = mdTop(tAlb, tNRA, ${J.PATH}.0, guv / 2.6, gdx / 2.6, gdy / 2.6, Nw);
    alb = mix(alb, pt.alb * vec3(0.92, 0.86, 0.78), pth); nw = normalize(mix(nw, pt.nrm, pth)); rough = mix(rough, pt.rough, pth); aoTex = mix(aoTex, pt.ao, pth);
  }
  // ---- pebbles and wet rock at the waterline / stream beds
  float wet = vTCol.b;
  float peb = smoothstep(0.35, 0.7, wet + (fine - 0.5) * 0.4) * smoothstep(0.55, 0.85, Nw.y);
  if (peb > 0.004) {
    MdTP pb = mdTop(tAlb, tNRA, ${J.PEB}.0, guv / 2.4, gdx / 2.4, gdy / 2.4, Nw);
    alb = mix(alb, pb.alb * vec3(0.8, 0.78, 0.72), peb); nw = normalize(mix(nw, pb.nrm, peb)); rough = mix(rough, pb.rough, peb); aoTex = mix(aoTex, pb.ao, peb);
  }
  alb *= mix(1.0, 0.5, wet);
  rough = mix(rough, 0.22, wet * 0.85);

  diffuseColor.rgb = alb;
  mdNw = nw; mdRough = clamp(rough, 0.08, 1.0);
  mdAO = mix(1.0, aoTex, 0.75) * vTCol.r;
}
`,Ot=class{constructor(e){this.engine=e,this.group=new Se,this.group.name=`terrain`,e.scene.add(this.group)}async load(){let[e,t,n,r,i]=await Promise.all([K(`terrain_core`),K(`terrain_mid`),K(`terrain_far`),K(`terrain_shadow`),_t(this.engine.renderer,Tt,1024,Math.min(this.engine.q.aniso,this.engine.maxAniso))]),a={tAlb:{value:i.albedo},tNRA:{value:i.nra},uRockTint:{value:new S(.8,.72,.62)},uRockTint2:{value:new S(.62,.6,.56)},uSoilTint:{value:new S(.75,.72,.62)},uMossTint:{value:new S(.2,.25,.1)},uCanopyTint:{value:new S(.06,.085,.035)},uFarMode:{value:1}};this.uniforms=a;let o=e=>{let t=new ye({color:16777215,roughness:1,metalness:0});return xt(t,{key:`terrain`+(e?`B`:`A`),uniforms:a,vertPars:St+`attribute vec4 color;
varying vec4 vTCol;`,vertEnd:Ct+`
vTCol = color;`,fragPars:Et,fragAlbedo:e?Dt.replace(`vTCol.a + (fine`,`0.0 + (fine`):Dt,fragRM:`roughnessFactor = mdRough; metalnessFactor = 0.0;`,fragNormal:`normal = normalize( ( viewMatrix * vec4( mdNw, 0.0 ) ).xyz );`,fragAO:`reflectedLight.indirectDiffuse *= mdAO; reflectedLight.indirectSpecular *= mdAO * mdAO; reflectedLight.directDiffuse *= mix( 1.0, mdAO, 0.3 );`+(e?`
reflectedLight.directDiffuse *= vTCol.a; reflectedLight.directSpecular *= vTCol.a;`:``)}),t};this.material=o(!1),this.materialFar=o(!0);let s=new be({colorWrite:!1,depthWrite:!1,fog:!1}),c=(e,t)=>{for(let n of e.meshes){let r=new T(n.geometry,t);r.castShadow=!1,r.receiveShadow=!0,r.matrixAutoUpdate=!1,r.layers.set(f.OPAQUE),r.name=`${e.tier}:${n.id}`,r.renderOrder=5,this.group.add(r)}};c(e,this.material),c(t,this.materialFar),c(n,this.materialFar);for(let e of r.meshes){let t=new T(e.geometry,s);t.castShadow=!0,t.matrixAutoUpdate=!1,t.layers.set(f.SHADOW_ONLY),t.name=`shadow:`+e.id,this.group.add(t)}this.tiers={core:e,mid:t,far:n}}},kt=`modulepreload`,At=function(e){return`/mengdie/`+e},jt={},Mt=function(e){return e.pathname.endsWith(`.css`)},Nt=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Y=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=At(t,n);let r=s(t),i=Mt(r);return Nt(jt,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:kt,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Pt=Object.assign({"./modules/architecture.js":()=>Y(()=>import(`./architecture-UF7LUfAo.js`),__vite__mapDeps([0,1,2,3,4,5])),"./modules/butterfly.js":()=>Y(()=>import(`./butterfly-DxNdgpiU.js`),__vite__mapDeps([6,1,4,5,2,3])),"./modules/clouds.js":()=>Y(()=>import(`./clouds-C6lJ-NeM.js`),__vite__mapDeps([7,1,4,5,2,3,8])),"./modules/debugpaths.js":()=>Y(()=>import(`./debugpaths-DYLInEHU.js`),__vite__mapDeps([9,1,3])),"./modules/dreamflies.js":()=>Y(()=>import(`./dreamflies-jdGw589O.js`),__vite__mapDeps([10,1,3,4,5,2])),"./modules/falls.js":()=>Y(()=>import(`./falls-lrlEpLU3.js`).then(e=>e.n),__vite__mapDeps([11,5,1,4,2,3])),"./modules/fauna.js":()=>Y(()=>import(`./fauna-B_GkwqD4.js`),__vite__mapDeps([12,1,2,3,13,14,4,5])),"./modules/sage.js":()=>Y(()=>import(`./sage-BLgaV563.js`),__vite__mapDeps([15,1,2,3])),"./modules/vegetation.js":()=>Y(()=>import(`./vegetation-BuIhnzi9.js`),__vite__mapDeps([16,1,2,3,17,4,5])),"./modules/water.js":()=>Y(()=>import(`./water-DaUg5CFC.js`),__vite__mapDeps([18,1,4,5,2,3]))});async function Ft(e,t){let n={},r=new URLSearchParams(location.search),i=r.get(`only`)?new Set(r.get(`only`).split(`,`)):null,a=new Set((r.get(`skip`)||``).split(`,`)),o=n.terrain=new Ot(e),s=[];(!i||i.has(`terrain`))&&s.push(o.load());let c=Object.keys(Pt).map(e=>[e.match(/\/([^/]+)\.js$/)[1],e]),l=await Promise.all(c.filter(([e])=>(!i||i.has(e))&&!a.has(e)).map(async([e,n])=>{try{return[e,await Pt[n]()]}catch(n){return console.error(`[world] module ${e} failed to import`,n),t.errors.push(`module ${e}: ${n.message}`),null}}));for(let r of l.filter(Boolean).sort((e,t)=>(e[1].order??0)-(t[1].order??0))){let[i,a]=r;a.shots&&Object.assign(t.SHOTS,a.shots),typeof a.default==`function`&&s.push(Promise.resolve().then(()=>a.default(e,n,t)).catch(e=>{console.error(`[world] module ${i} failed`,e),t.errors.push(`module ${i}: ${e.message}`)}))}return await Promise.all(s),n}var X=new URLSearchParams(location.search),It=X.get(`tool`)===`1`||X.has(`shot`),Lt=Object.assign({"./ui/ui.js":()=>Y(()=>import(`./ui-7sL-rQBm.js`),__vite__mapDeps([19,20,3]))}),Rt=Object.assign({"./audio/audio.js":()=>Y(()=>import(`./audio-CzXgNDX5.js`),[])}),zt=Object.assign({"./game/game.js":()=>Y(()=>import(`./game-Ho_58QqJ.js`).then(e=>e.t),__vite__mapDeps([21,5,3,13,2,1,20]))}),Z=new et(document.getElementById(`view`),X.get(`q`)||localStorage.getItem(`md.quality`)||`medium`);ct(Math.min(Z.q.aniso,Z.maxAniso)),s.uniforms.uNoiseTex.value=pt();var Q=window.__md={engine:Z,ready:!1,errors:[],SHOTS:G,THREE:t};window.addEventListener(`error`,e=>Q.errors.push(String(e.message))),window.addEventListener(`unhandledrejection`,e=>Q.errors.push(`unhandled: `+String(e.reason?.message||e.reason)));function Bt(){Z.resize(window.innerWidth,window.innerHeight,Math.min(window.devicePixelRatio||1,2))}window.addEventListener(`resize`,Bt),Bt();function $(e){let t=Z.camera;t.position.fromArray(e.pos),t.rotation.set(we.degToRad(e.pitch),we.degToRad(e.yaw),0,`YXZ`),t.fov=e.fov,t.updateProjectionMatrix()}Q.setCamera=$,Q.setShot=(e,t=30)=>new Promise(n=>{let r=typeof e==`string`?G[e]:e;if(!r)throw Error(`unknown shot `+e);Q.shotCam=r,$(r),Q._wait={frames:t,res:n}}),Q.bench=(e=60)=>{let t=Z.renderer.getContext(),n=new Uint8Array(4),r=()=>{t.bindFramebuffer(t.FRAMEBUFFER,null),t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,n)};for(let e=0;e<6;e++)Z.update(1/60),Z.render();r();let i=[];for(let t=0;t<5;t++){let t=performance.now();for(let t=0;t<e/5;t++)Z.update(1/60),Z.render(),r();i.push((performance.now()-t)/(e/5))}return i.sort((e,t)=>e-t),i[1]},Q.profile=async(e=40)=>{Z.prof.on=!0,Z.prof.avg={},await new Promise(t=>{Q._wait={frames:e,res:t}});let t=Z.prof.report();return Z.prof.on=!1,t};async function Vt(){let e=e=>(...t)=>Q.game?.handlers?.[e]?.(...t),t={onNewGame:e(`onNewGame`),onContinue:e(`onContinue`),onResume:e(`onResume`),onQuitToTitle:e(`onQuitToTitle`),onClearSave:e(`onClearSave`),onSettingsChange:e(`onSettingsChange`),onUiSound:e(`onUiSound`),getSettings:e(`getSettings`)};try{let e=await Lt[`./ui/ui.js`]?.();e?.createUI&&(Q.ui=e.createUI(document.getElementById(`ui`),t))}catch(e){console.error(e),Q.errors.push(`ui: `+e.message)}try{let e=await Rt[`./audio/audio.js`]?.();e?.GameAudio&&(Q.audio=new e.GameAudio)}catch(e){console.error(e),Q.errors.push(`audio: `+e.message)}let n=.04;Q.ui?.loading?.(n);let r=setInterval(()=>{n+=(.92-n)*.06,Q.ui?.loading?.(n)},120);return()=>clearInterval(r)}async function Ht(){try{let e=await zt[`./game/game.js`]?.();if(!e?.Game)return;Q.ui?.ready?.then&&await Promise.race([Q.ui.ready,new Promise(e=>setTimeout(e,4e3))]),Q.game=new e.Game({engine:Z,world:Q.world,ui:Q.ui,audio:Q.audio,md:Q,params:X}),Q.game.start()}catch(e){console.error(e),Q.errors.push(`game: `+(e.stack||e.message)),Q.game=null}}async function Ut(){let e=performance.now(),t=It?null:await Vt();await(Q.sky=new it(Z)).load(),Q.world=await Ft(Z,Q),Q.loadMs=performance.now()-e,$(G[X.get(`shot`)]||G.ref),Q.shotCam=G[X.get(`shot`)]||G.ref,It||(await Ht(),t?.(),Q.ui?.loading?.(1),Q.ui?.loading?.(null));let n=performance.now(),r=e=>{let t=e-n;n=e;let i=Math.min(t/1e3,.1);Q.shotCam&&!Q.game&&$(Q.shotCam);let a=i;if(Q.game)try{a=Q.game.update(i)}catch(e){Q._gameErr||(Q._gameErr=!0,console.error(e),Q.errors.push(`game update: `+(e.stack||e.message)))}if(Z.update(Q.freeze?0:a),Z.render(),Z.tickStats(t),Q._wait&&--Q._wait.frames<=0){let e=Q._wait;Q._wait=null,e.res()}Q.ready=!0,requestAnimationFrame(r)};requestAnimationFrame(r)}Ut().catch(e=>{console.error(e),Q.errors.push(`boot: `+(e.stack||e.message)),Q.ready=!0});export{xt as a,K as c,St as i,U as l,wt as n,yt as o,Ct as r,_t as s,Y as t,W as u};