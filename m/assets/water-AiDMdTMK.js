import{$r as e,A as t,B as n,Hn as r,Lt as i,Rn as a,Rt as o,U as s,Wi as c,_r as l,ar as u,bt as d,ft as f,io as p,ir as m,j as h,jr as g,kr as _,ro as v,ta as y}from"./three.core-BF58tRDi.js";import{i as b,r as x,t as S}from"./globals-DAxe_AO1.js";import{u as C}from"./index-CfzQNj0p.js";import{t as w}from"./config-OM6otvPM.js";import{g as T,h as E,l as D,n as O,p as k}from"./layout-C2B8gIUV.js";var A=-10;function j(t=256){let n=new Float32Array(t*t),i=9001,o=()=>(i=i*1664525+1013904223>>>0,i/4294967296);for(let e=0;e<28;e++){let e=Math.round((o()-.5)*22),r=Math.round((o()-.5)*22),i=Math.hypot(e,r);if(i<1)continue;let a=1/i**1.35,s=o()*6.283;for(let i=0;i<t;i++)for(let o=0;o<t;o++){let c=Math.sin((e*o+r*i)/t*6.2831853+s);n[i*t+o]+=a*(1-Math.abs(c))*1+a*c*.35}}let s=new Uint8Array(t*t*4);for(let e=0;e<t;e++)for(let r=0;r<t;r++){let i=n[e*t+(r+1)%t]-n[e*t+(r+t-1)%t],a=n[(e+1)%t*t+r]-n[(e+t-1)%t*t+r],o=-i*3,c=-a*3,l=1,u=Math.hypot(o,c,l);o/=u,c/=u,l/=u;let d=(e*t+r)*4;s[d]=o*127.5+127.5,s[d+1]=c*127.5+127.5,s[d+2]=l*127.5+127.5,s[d+3]=255}let l=new f(s,t,t,e);return l.wrapS=l.wrapT=c,l.minFilter=r,l.magFilter=a,l.generateMipmaps=!0,l.anisotropy=4,l.needsUpdate=!0,l}var M=`
varying vec3 vWP;
attribute vec3 flow;      // xz flow direction * speed (streams); zero on still water
varying vec3 vFlow;
void main(){
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWP = wp.xyz; vFlow = flow;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,N=`
precision highp float;
varying vec3 vWP; varying vec3 vFlow;
uniform sampler2D tRefl, tScene, tSceneDepth, tWaterN;
uniform mat4 uReflVP;
uniform vec2 uResolution;
uniform float uPlanar;            // 1 = use the planar reflection texture, 0 = sky/environment only
uniform vec3 uDeep, uShallow, uAbsorb, uSkyRefl;
uniform vec4 uFall;               // xz of the plunge point, radius, strength
${x}
${b}
vec3 nrm(vec2 uv){ return texture2D(tWaterN, uv).xyz * 2.0 - 1.0; }
void main(){
  if (vWP.y < uClipY) discard;
  vec2 suv = gl_FragCoord.xy / uResolution;
  vec3 V = cameraPosition - vWP; float dist = length(V); V /= dist;
  float flowAmt = length(vFlow.xz);
  // ---- surface normal: three scrolling layers; a slow large-scale mask makes mirror-calm and wind-ruffled patches
  vec2 p = vWP.xz;
  vec2 wd = uWind.xy;
  float ruffle = smoothstep(0.38, 0.62, texture2D(uNoiseTex, p * 0.0037 + wd * uTime * 0.0035).b);
  ruffle = mix(0.16, 1.0, ruffle) * (0.6 + 0.4 * uWind.z);
  vec3 n1, n2, n3;
  if (flowAmt > 0.01) {
    // stream: advect along the flow with two phase-shifted layers to hide the reset
    float ph = fract(uTime * 0.35), ph2 = fract(uTime * 0.35 + 0.5);
    vec2 f = vFlow.xz * 1.6;
    n1 = nrm(p * 0.33 - f * ph); n2 = nrm(p * 0.33 + 0.37 - f * ph2);
    n1 = mix(n1, n2, abs(ph * 2.0 - 1.0)); n2 = nrm(p * 0.9 - f * 1.3 * ph2 + 0.11); n3 = nrm(p * 1.9 - f * 2.0 * ph);
    ruffle = 1.0 + flowAmt;
  } else {
    n1 = nrm(p * 0.045 + wd * uTime * 0.014);
    n2 = nrm(p * 0.13 - wd.yx * uTime * 0.021 + 0.3);
    n3 = nrm(p * 0.47 + wd * uTime * 0.05 + 0.7);
  }
  vec3 tn = n1 * 0.9 + n2 * 0.7 + n3 * 0.45;
  // ripples spreading from the waterfall's plunge point
  float fd = distance(p, uFall.xy);
  float ring = sin(fd * 2.6 - uTime * 4.2) * smoothstep(uFall.z, 2.0, fd) * uFall.w;
  vec2 rdir = (p - uFall.xy) / max(fd, 0.01);
  float detail = mix(1.0, 0.25, smoothstep(40.0, 400.0, dist));   // flatten in the distance so far water stays glassy and stable
  vec3 N = normalize(vec3(tn.x * ruffle * detail * 0.55 + rdir.x * ring * 0.5, 2.2, tn.y * ruffle * detail * 0.55 + rdir.y * ring * 0.5));

  // ---- water column behind the surface
  float zs = textureLod(tSceneDepth, suv, 0.0).r;
  float dScene = zs <= 0.0 ? 1e5 : linDepth(zs), dWater = linDepth(gl_FragCoord.z);
  float thick = max(dScene - dWater, 0.0);
  vec2 ruv = suv + N.xz * 0.045 * clamp(thick * 0.5, 0.0, 1.0) / (1.0 + dist * 0.03);
  float zr = textureLod(tSceneDepth, ruv, 0.0).r; float dR = zr <= 0.0 ? 1e5 : linDepth(zr);
  if (dR < dWater) { ruv = suv; dR = dScene; }                     // do not pull in things in front of the water
  thick = max(dR - dWater, 0.0);
  vec3 bed = texture2D(tScene, ruv).rgb;
  // approximate vertical depth for the caustic falloff
  float vdepth = thick * max(V.y, 0.12);
  float ca = texture2D(uNoiseTex, p * 0.21 + vec2(uTime * 0.03, uTime * 0.021)).b * texture2D(uNoiseTex, p * 0.17 - vec2(uTime * 0.025, -uTime * 0.018) + 0.5).a;
  bed *= 1.0 + smoothstep(0.22, 0.36, ca) * 1.6 * exp(-vdepth * 0.9) * smoothstep(0.02, 0.3, vdepth) * mdCloudShadow(vWP);
  vec3 trans = exp(-thick * uAbsorb);
  float sunUp = max(uSunDirW.y, 0.0);
  vec3 scatter = mix(uShallow, uDeep, 1.0 - exp(-thick * 0.25)) * (0.35 + 0.65 * sunUp * mdCloudShadow(vWP));
  vec3 body = bed * trans + scatter * (1.0 - trans);

  // ---- reflection
  float NdV = max(dot(N, V), 0.0);
  float fres = 0.02 + 0.98 * pow(1.0 - NdV, 5.0);
  vec3 R = reflect(-V, N); R.y = abs(R.y);
  vec3 refl = mix(uSkyRefl, mdFogColor(R), smoothstep(0.25, 0.0, R.y));
  if (uPlanar > 0.5) {
    vec4 rc = uReflVP * vec4(vWP.x + N.x * 2.6, uWaterY, vWP.z + N.z * 2.6, 1.0);
    vec2 quv = rc.xy / rc.w * 0.5 + 0.5;
    quv.y += abs(N.z + N.x) * 0.012;                               // slight vertical smear, as on real ripples
    if (rc.w > 0.0) {
      // clamp instead of fading at the screen border (a fade shows up as bright bands along the edges)
      refl = texture2D(tRefl, clamp(quv, vec2(0.002), vec2(0.998))).rgb;
    }
  }
  // sun glitter (sharp) + broad sheen, only where the surface is ruffled
  vec3 Hh = normalize(V + uSunDirW);
  float spec = pow(max(dot(N, Hh), 0.0), 900.0) * 34.0 + pow(max(dot(N, Hh), 0.0), 90.0) * 0.6;
  vec3 sun = uSunColor * spec * mdCloudShadow(vWP) * 5.0;

  vec3 col = mix(body, refl, fres) + sun;
  // ---- foam: shore line, fast water, plunge pool
  float fn = texture2D(uNoiseTex, p * 0.9 + vec2(uTime * 0.02, 0.0)).b * 0.6 + texture2D(uNoiseTex, p * 2.3 - uTime * 0.03).a * 0.4;
  float shore = (1.0 - smoothstep(0.0, 0.32, thick)) * smoothstep(0.42, 0.62, fn + 0.25 * sin(uTime * 0.9 + p.x * 0.4));
  float churn = smoothstep(uFall.z * 0.55, 0.5, fd) * uFall.w * smoothstep(0.35, 0.6, fn + 0.2);
  float rapid = smoothstep(1.2, 3.2, flowAmt) * smoothstep(0.45, 0.65, fn);
  float foam = clamp(shore * 0.75 + churn + rapid * 0.8, 0.0, 1.0);
  vec3 foamCol = vec3(0.86, 0.88, 0.84) * (0.25 + 0.75 * sunUp * mdCloudShadow(vWP)) * 2.2;
  col = mix(col, foamCol, foam);
  // soft edge where the water meets the shore
  float edge = smoothstep(0.0, 0.06, thick);
  col = mix(bed, col, edge);
  col = mdAtmosphere(col, vWP, cameraPosition);
  gl_FragColor = vec4(col, 1.0);
}`;async function P(e,r){let a=j(),c=new _;c.matrixAutoUpdate=!1;let f=new d(8,8,o);f.minFilter=f.magFilter=l;let b=C(8,8,{depthBuffer:!0,depthTexture:f}),x=e=>({...S.uniforms,tRefl:{value:b.texture},tScene:{value:null},tSceneDepth:{value:null},tWaterN:{value:a},uReflVP:{value:new m},uPlanar:{value:+!!e},uDeep:{value:new s(.02,.032,.022)},uShallow:{value:new s(.06,.085,.06)},uAbsorb:{value:new v(.42,.2,.26)},uSkyRefl:{value:new s(.3,.38,.52)},uFall:{value:new p(O.x+.5,O.z+7,15,1)}}),A=e=>new y({vertexShader:M,fragmentShader:N,uniforms:x(e),fog:!1}),P=A(!0),F=A(!1);F.uniforms.uFall.value.set(-70,-64,9,.7),F.uniforms.uAbsorb.value.set(.55,.26,.3);let I=e=>e.setAttribute(`flow`,new t(new Float32Array(e.attributes.position.count*3),3)),L=new g(6e3,6e3,1,1).rotateX(-Math.PI/2);I(L);let R=new u(L,P);R.position.set(0,0,100),R.layers.set(w.WATER),R.frustumCulled=!1,R.renderOrder=0;let z=new n(E.r+3,48).rotateX(-Math.PI/2);I(z);let B=new u(z,F);B.position.set(E.x,T,E.z),B.layers.set(w.WATER);let V=(()=>{let e=3.3,t=[0];for(let e=1;e<k.length;e++)t.push(t[e-1]+Math.hypot(k[e][0]-k[e-1][0],k[e][1]-k[e-1][1]));let n=t[t.length-1],r=e=>{let n=1;for(;n<t.length-1&&t[n]<e;)n++;let r=(e-t[n-1])/(t[n]-t[n-1]);return[k[n-1][0]+(k[n][0]-k[n-1][0])*r,k[n-1][1]+(k[n][1]-k[n-1][1])*r]},a=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},o=e=>31.9+(D-1-31.9)*a(-31.5,-25,e)-.5*Math.min(1,Math.max(0,(e+24)/66)),s=[],c=[],l=[];for(let t=0;t<=90;t++){let i=t/90*n,a=r(Math.max(0,i-.5)),u=r(Math.min(n,i+.5)),d=r(i),f=u[0]-a[0],p=u[1]-a[1],m=Math.hypot(f,p)||1;f/=m,p/=m;let h=o(d[1])+.38,g=.9+Math.abs(o(u[1])-o(a[1]))*5;for(let t of[-1,1])s.push(d[0]-p*t*e*.5,h,d[1]+f*t*e*.5),c.push(f*g,0,p*g);if(t<90){let e=t*2;l.push(e,e+2,e+1,e+1,e+2,e+3)}}let d=new h;d.setAttribute(`position`,new i(s,3)),d.setAttribute(`flow`,new i(c,3)),d.setIndex(l);let f=new u(d,F);return f.layers.set(w.WATER),f.frustumCulled=!1,f})();e.scene.add(R,B,V);let H=new v,U=new v,W=new v,G=new v,K={lake:R,tarn:B,stream:V,lakeMat:P,pondMat:F,rtRefl:b,setSize(e,t,n){b.setSize(Math.max(8,Math.round(e*n.reflScale)),Math.max(8,Math.round(t*n.reflScale)))},renderReflection(e){let t=e.camera,n=e.renderer,r=S.uniforms;for(let t of[P,F])t.uniforms.tScene.value=e.rtOpaque.texture,t.uniforms.tSceneDepth.value=e.rtOpaque.depthTexture;t.getWorldDirection(G),t.position.y<.02||(H.copy(t.position),H.y=-H.y,U.copy(t.position).add(G),U.y=-U.y,W.set(0,1,0).applyQuaternion(t.quaternion),W.y=-W.y,c.position.copy(H),c.up.copy(W),c.lookAt(U),c.updateMatrix(),c.matrixWorld.copy(c.matrix),c.matrixWorldInverse.copy(c.matrixWorld).invert(),c._reversedDepth=!0,c.projectionMatrix.copy(t.projectionMatrix),c.projectionMatrixInverse.copy(t.projectionMatrixInverse),c.near=t.near,c.far=t.far,c.fov=t.fov,c.aspect=t.aspect,P.uniforms.uReflVP.value.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),c.layers.set(w.OPAQUE),c.layers.enable(w.REFL_ONLY),r.uClipY.value=-.35,n.setRenderTarget(b),n.clear(),n.render(e.scene,c),e.volumetrics?.renderReflection?.(e,c,b),r.uClipY.value=-1e5)}};e.water=K,r.water=K,K.setSize(e.w,e.h,e.q)}export{P as default,A as order};