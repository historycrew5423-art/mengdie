import{$r as e,Ni as t,Rn as n,U as r,V as i,Wi as a,ir as o,no as s,ro as c,ut as l}from"./three.core-BF58tRDi.js";import{r as u,t as d}from"./globals-DAxe_AO1.js";import{l as f,u as p}from"./index-CfzQNj0p.js";import{n as m,t as h}from"./shape-B4XZ7pSn.js";import{n as g}from"./config-OM6otvPM.js";var _=-5,v=`
precision highp float; precision highp sampler3D;
in vec2 vUv; out vec4 outColor;
uniform sampler2D tDepth; uniform sampler3D tShape, tNoise;
uniform vec3 uBoxMin, uBoxSize, uCamPos, uAmbTop, uAmbBot, uSunRad;
uniform mat4 uInvProj, uInvView;
uniform vec2 uCD;
uniform float uGorge, uDensity, uFrame, uMaxSteps, uErode;
${u}
float ign(vec2 p){ return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
// eroded density: the soft lump gradient is thresholded by two octaves of billow noise (moves the boundary by
// tens of metres => cauliflower shapes), then wisps fray the edges
float cloudD(vec3 p, float base, vec3 wind){
  float n = textureLod(tNoise, p * vec3(0.0115, 0.0135, 0.0115) + wind * 0.0016, 0.0).r * 0.64
          + textureLod(tNoise, p * 0.029 + wind * 0.003 + 0.37, 0.0).r * 0.36;
  float d = smoothstep(0.0, 0.2, base - (1.0 - n) * uErode);
  if (d > 0.001 && d < 0.999) {
    float w = textureLod(tNoise, p * 0.062 + wind * 0.0055, 0.0).g;
    d = clamp(d - (1.0 - w) * 0.5 * (1.0 - d), 0.0, 1.0);
  }
  return d;
}
float hg(float c, float g){ float g2 = g * g; return (1.0 - g2) / (12.566 * pow(1.0 + g2 - 2.0 * g * c, 1.5)); }
void main(){
  float z = textureLod(tDepth, vUv, 0.0).r;
  vec4 vp = uInvProj * vec4(vUv * 2.0 - 1.0, max(z, 1e-6), 1.0); vp.xyz /= vp.w;
  float tScene = z <= 0.0 ? 1e5 : length(vp.xyz);
  vec3 rd = normalize((uInvView * vec4(normalize(vp.xyz), 0.0)).xyz);
  vec3 ro = uCamPos;
  vec3 inv = 1.0 / (rd + 1e-6 * sign(rd) + 1e-9);
  vec3 t0 = (uBoxMin - ro) * inv, t1 = (uBoxMin + uBoxSize - ro) * inv;
  vec3 ts = min(t0, t1), tb = max(t0, t1);
  float tn = max(max(max(ts.x, ts.y), ts.z), 0.0), tf = min(min(min(tb.x, tb.y), tb.z), tScene);
  if (tf <= tn) { outColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
  float dt = clamp((tf - tn) / uMaxSteps, 3.2, 16.0);
  float t = tn + dt * ign(gl_FragCoord.xy + 5.588238 * mod(uFrame, 64.0));
  vec3 L = vec3(0.0); float T = 1.0, tw = 0.0, tsum = 0.0;
  float cs = dot(rd, uSunDirW);
  float phase = mix(hg(cs, 0.62), hg(cs, -0.22), 0.45) * 12.566;       // normalised so isotropic = 1
  vec3 wind = vec3(uWind.x, 0.12, uWind.y) * uTime;
  for (int i = 0; i < 96; i++) {
    if (t >= tf || T < 0.015) break;
    vec3 p = ro + rd * t;
    vec4 sh = textureLod(tShape, (p - uBoxMin) / uBoxSize, 0.0);
    float base = sh.r + sh.b * uGorge;
    float stepLen = dt;
    if (base > 0.015) {
      float d = cloudD(p, base, wind);
      if (d > 0.002) {
        float sigma = d * uDensity;
        // baked large-scale shadow through the masses * one eroded sample towards the sun (gives the billows their shading)
        vec3 ps = p + uSunDirW * 13.0;
        vec4 ss = textureLod(tShape, (ps - uBoxMin) / uBoxSize, 0.0);
        float dS = cloudD(ps, ss.r + ss.b * uGorge, wind);
        // two lobes: direct light + a much softer one standing in for multiple scattering (cloud shadow sides stay luminous)
        float sunT = (0.62 * pow(sh.g, 1.25) + 0.38 * pow(sh.g, 0.28)) * (0.35 + 0.65 * exp(-dS * 1.5));
        float h = clamp((p.y - uBoxMin.y) / uBoxSize.y * 2.2, 0.0, 1.0);
        vec3 amb = mix(uAmbBot, uAmbTop, clamp(h * 0.45 + sh.g * 0.75, 0.0, 1.0)) * (0.6 + 0.4 * exp(-dS * 2.0));
        vec3 S = uSunRad * sunT * mix(1.0, phase, 0.5) + amb;
        float a = exp(-sigma * stepLen);
        L += T * (1.0 - a) * S; tsum += T * (1.0 - a) * t; tw += T * (1.0 - a);
        T *= a;
      }
    } else stepLen = dt * 1.6;                                           // stride faster through empty space
    t += stepLen;
  }
  // aerial perspective on the cloud itself (at its opacity-weighted mean distance)
  if (tw > 1e-4) {
    float tm = tsum / tw;
    float f = min(1.0 - exp(-mdFogOD(ro, rd, tm)), uFogMax);
    L = mix(L, mdFogColor(rd) * (1.0 - T), f);
  }
  outColor = vec4(L, T);
}`,y=`
precision highp float;
in vec2 vUv; out vec4 outColor;
uniform sampler2D tVol, tDepth; uniform vec2 uVolSize; uniform vec2 uCD;
float lin(float z){ return z <= 0.0 ? 6000.0 : uCD.y / (z + uCD.x); }
void main(){
  float d0 = lin(textureLod(tDepth, vUv, 0.0).r);
  vec2 f = vUv * uVolSize - 0.5, b = floor(f), fr = f - b;
  vec4 acc = vec4(0.0); float ws = 0.0;
  for (int j = 0; j < 2; j++) for (int i = 0; i < 2; i++) {
    vec2 uv = (b + vec2(float(i), float(j)) + 0.5) / uVolSize;
    float dc = lin(textureLod(tDepth, uv, 0.0).r);
    float wb = (i == 0 ? 1.0 - fr.x : fr.x) * (j == 0 ? 1.0 - fr.y : fr.y);
    float w = wb / (0.02 + abs(d0 - dc) / d0 * 12.0) + 1e-5;
    acc += textureLod(tVol, uv, 0.0) * w; ws += w;
  }
  outColor = acc / ws;
}`;async function b(u,_){let[b,x]=await Promise.all([fetch(`/mengdie/m/assets/gen/cloud_shape.bin`).then(e=>e.arrayBuffer()),fetch(`/mengdie/m/assets/gen/cloud_noise64.bin`).then(e=>e.arrayBuffer())]),S=new l(new Uint8Array(b),m[0],m[1],m[2]);S.format=e,S.minFilter=S.magFilter=n,S.wrapS=S.wrapT=S.wrapR=i,S.needsUpdate=!0;let C=new l(new Uint8Array(x),64,64,64);C.format=t,C.minFilter=C.magFilter=n,C.wrapS=C.wrapT=C.wrapR=a,C.needsUpdate=!0;let w=new r(...g.sunColor).multiplyScalar(g.sunIntensity*.2),T=()=>({...d.uniforms,tDepth:{value:null},tShape:{value:S},tNoise:{value:C},uBoxMin:{value:new c(...h.min)},uBoxSize:{value:new c(h.max[0]-h.min[0],h.max[1]-h.min[1],h.max[2]-h.min[2])},uCamPos:{value:new c},uInvProj:{value:new o},uInvView:{value:new o},uCD:{value:new s},uAmbTop:{value:new r(.4,.44,.5)},uAmbBot:{value:new r(.115,.125,.13)},uSunRad:{value:w},uGorge:{value:1},uDensity:{value:.16},uFrame:{value:0},uMaxSteps:{value:40},uErode:{value:.66}}),E=new f(v,T()),D=new f(v,T()),O={transparent:!0,blending:5,blendEquation:100,blendSrc:201,blendDst:204,blendSrcAlpha:200,blendDstAlpha:201},k=new f(y,{tVol:{value:null},tDepth:{value:null},uVolSize:{value:new s},uCD:{value:new s}},O),A=new f(y,{tVol:{value:null},tDepth:{value:null},uVolSize:{value:new s},uCD:{value:new s}},O),j=p(8,8),M=p(8,8),N=1,P=(e,t)=>{e.uCamPos.value.setFromMatrixPosition(t.matrixWorld),e.uInvProj.value.copy(t.projectionMatrixInverse),e.uInvView.value.copy(t.matrixWorld),e.uCD.value.set(t.near/(t.far-t.near),t.far*t.near/(t.far-t.near))},F={march:E,uniforms:E.u,setGorgeClear(e){N=1-.8*Math.min(1,Math.max(0,e))},setSize(e,t,n){j.setSize(Math.max(8,Math.round(e*n.volScale)),Math.max(8,Math.round(t*n.volScale))),M.setSize(Math.max(8,Math.round(e*n.reflScale*.5)),Math.max(8,Math.round(t*n.reflScale*.5))),E.u.uMaxSteps.value=n.volSteps,D.u.uMaxSteps.value=20},update(e){let t=E.u.uGorge;t.value+=(N-t.value)*Math.min(1,e*.25),D.u.uGorge.value=t.value},render(e,t){let n=e.renderer,r=e.camera,i=E.u;return P(i,r),i.tDepth.value=t,i.uFrame.value=e.frame,E.render(n,j,!0),k.u.tVol.value=j.texture,k.u.tDepth.value=e.rtOpaque.depthTexture,k.u.uVolSize.value.set(j.width,j.height),k.u.uCD.value.copy(i.uCD.value),k.render(n,e.rtMain),null},renderReflection(e,t,n){if(!n.depthTexture)return;let r=e.renderer,i=D.u;P(i,t),i.tDepth.value=n.depthTexture,i.uFrame.value=e.frame,D.render(r,M,!0),A.material.defines=A.material.defines||{},I.u.tColor.value=M.texture,I.render(r,n)}},I=new f(`precision highp float; in vec2 vUv; out vec4 outColor; uniform sampler2D tColor; void main(){ outColor = texture(tColor, vUv); }`,{tColor:{value:null}},O);u.volumetrics=F,_.clouds=F,u.add(F),F.setSize(u.w,u.h,u.q)}export{b as default,_ as order};