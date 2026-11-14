import{U as e,io as t,mr as n,sr as r}from"./three.core-BF58tRDi.js";import{o as i}from"./globals-DAxe_AO1.js";import{a,o}from"./index-CfzQNj0p.js";var s={uVegK:{value:new t(1,0,0,0)},uVegFill:{value:.75}},c=`
#ifdef VEG_STATIC
  #define iPos vec4(0.0, 0.0, 0.0, 1.0)
  #define iQuat vec4(0.0, 0.0, 0.0, 1.0)
  #define iMisc vec4(aVeg.w, 1.0, 0.0, 0.5)
#else
  attribute vec4 iPos; attribute vec4 iQuat; attribute vec4 iMisc;
#endif
attribute vec4 aVeg;
invariant gl_Position;     // depth pre-pass and colour pass must agree exactly
uniform vec3 uCamPosW; uniform vec4 uVegK; uniform vec4 uLod; uniform vec4 uSway;
varying vec4 vVeg; varying vec4 vMisc; varying vec2 vFade; varying vec2 vVegUv; varying vec3 vWP; varying vec3 vWN;

vec3 vegRot(vec4 q, vec3 v){ return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
// root: instance origin (gust phase), lp: scaled local position, veg: [ao, sway, leaf, phase]
vec3 vegWind(vec3 wp, vec3 lp, vec4 veg, float seed, vec3 root){
  vec2 wd = uWind.xy; float ph = seed * 6.2831853;
  float gust = 0.6 + 0.4 * sin(uTime * 0.8 - dot(root.xz, wd) * 0.05 + uWind.w);
  gust *= 0.8 + 0.2 * sin(uTime * 0.31 + root.x * 0.017 + root.z * 0.011);
  float amp = uWind.z * gust;
  float hh = max(lp.y, 0.0);
  float bend = hh * hh * uSway.x * amp;
  wp.xz += (wd * (0.7 + 0.3 * sin(uTime * 1.25 + ph)) + vec2(-wd.y, wd.x) * (0.3 * sin(uTime * 0.85 + ph * 1.7))) * bend;
  float bp = uTime * (1.7 + veg.w * 0.9) + veg.w * 12.566 + ph;
  float b = veg.y * amp * uSway.y;
  wp.y += sin(bp) * b * 0.45;
  wp.xz += wd * (sin(bp * 0.81 + 1.3) * b) + vec2(-wd.y, wd.x) * (cos(bp * 0.63) * b * 0.4);
  float f = veg.y * veg.z * amp * uSway.z;
  wp += vec3(sin(uTime * 7.3 + lp.x * 3.1 + lp.z * 2.7 + ph), sin(uTime * 8.9 + lp.x * 2.3 + lp.y * 3.3), sin(uTime * 6.7 + lp.z * 3.7 + lp.y * 2.1 + ph)) * f;
  return wp;
}`,l=`objectNormal = vegRot(iQuat, objectNormal);`,u=e=>`
vec3 vroot = iPos.xyz;
#ifdef VEG_STATIC
  vroot = position;
#endif
float vdist = distance(vroot, uCamPosW) * uVegK.x;
vFade = vec2(clamp((uLod.w - vdist) / max(uLod.w - uLod.z, 1e-3), 0.0, 1.0), clamp((vdist - uLod.x) / max(uLod.y - uLod.x, 1e-3), 0.0, 1.0));
float vcull = (vFade.x <= 0.0 || vFade.y <= 0.0) ? 1.0 : 0.0;
float vscale = iPos.w;
#ifdef VEG_SHRINK
  vscale *= smoothstep(0.0, 1.0, vFade.x); vFade.x = 1.0;
#endif
vec3 vlp = position * vscale;
vec3 vwp = vegRot(iQuat, vlp) + iPos.xyz;
#ifndef VEG_NOWIND
  vwp = vegWind(vwp, vlp, aVeg, iMisc.x, vroot);
#endif
transformed = vwp;
vVeg = aVeg; vMisc = iMisc; vVegUv = uv * vec2(1.0, 4.0); vWP = vwp;
#ifdef VEG_LOCALY
  vVeg.w = position.y;
#endif
${e?`vWN = objectNormal;`:``}`,d=`if (vcull > 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);`,f=`
uniform vec4 uVegK; uniform float uVegFill;
varying vec4 vVeg; varying vec4 vMisc; varying vec2 vFade; varying vec2 vVegUv; varying vec3 vWP; varying vec3 vWN;
float mdVegWrap = 0.0, mdVegLeaf = 0.0, mdVegTrans = 0.0, mdVegAO = 1.0, mdVegRough = 0.8, mdVegSpec = 0.25, mdVegFill = 0.0; vec3 mdVegTransCol = vec3(0.0); vec3 mdVegN = vec3(0.0, 1.0, 0.0);
float vegIGN(vec2 p){ return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
void vegDither(){ float dn = vegIGN(gl_FragCoord.xy + uVegK.y); if (dn >= vFade.x || dn < 1.0 - vFade.y) discard; }
`,p=`
${f}
uniform sampler2D tVegAlb, tVegNrm;
uniform vec4 uVegTex;      // xy atlas size, z alpha cut, w normal strength
uniform vec4 uVegShade;    // x wrap, y translucency, z leaf roughness, w ambient AO floor
uniform vec3 uVegTint;
uniform vec4 uVegCell;     // xy = leaf-card cells per atlas (0 = unknown), z = specular scale, w = sky fill
`,m=`
{
  vec2 uv = vVegUv;
  vec4 alb = texture2D(tVegAlb, uv);
  vec2 tx = uv * uVegTex.xy; vec2 tdx = dFdx(tx), tdy = dFdy(tx);
  float lod = max(0.0, 0.5 * log2(max(dot(tdx, tdx), dot(tdy, tdy)) + 1e-8));
  float leaf = step(0.5, vVeg.z);
  // plain cut-out (the temporal AA softens the edge).  As the card minifies the threshold drops a little so thin
  // leaves keep their coverage, and the card is rounded off so it cannot close up into a square.
  float thr = mix(uVegTex.z, uVegTex.z * 0.7, clamp((lod - 0.6) * 0.5, 0.0, 1.0));
  float aa = alb.a;
  if (uVegCell.x > 0.0) { vec2 cq = fract(uv * uVegCell.xy) * 2.0 - 1.0; aa *= mix(1.0, smoothstep(1.02, 0.62, length(cq)), clamp((lod - 1.2) * 0.6, 0.0, 1.0)); }
  if (leaf > 0.5 && aa < thr) discard;
  vegDither();
#ifdef VEG_PRE
  gl_FragColor = vec4( 0.0 ); return;     // depth pre-pass: coverage only
#endif
  vec3 nt = texture2D(tVegNrm, uv).xyz;
  float wet = vMisc.z;
  vec3 tint = uVegTint * mix(vec3(0.84, 0.95, 0.92), vec3(1.14, 1.05, 0.82), vMisc.w) * (0.86 + 0.28 * vMisc.x);
  vec3 col = alb.rgb * mix(vec3(0.9, 0.88, 0.84), tint, leaf);
  col *= mix(1.0, 0.78, wet * leaf);
  diffuseColor.rgb = col;
  // soft crown normal + atlas normal (derivative tangent frame; no flip on back faces: the crown shades as a volume)
  vec3 Ns = normalize(vWN);
  vec3 dpx = dFdx(vWP), dpy = dFdy(vWP); vec2 dux = dFdx(uv), duy = dFdy(uv);
  float det = dux.x * duy.y - dux.y * duy.x;
  vec3 T = dpx * duy.y - dpy * dux.y, B = dpy * dux.x - dpx * duy.x;
  float il = inversesqrt(max(dot(T, T), dot(B, B)) + 1e-12) * (det < 0.0 ? -1.0 : 1.0);
  vec2 nxy = (nt.xy * 2.0 - 1.0) * uVegTex.w * clamp(1.0 - lod * 0.22, 0.0, 1.0);
  mdVegN = normalize(Ns + (T * nxy.x - B * nxy.y) * il);
  float ao = vVeg.x * mix(1.0, nt.z, 0.75);
  mdVegAO = ao * mix(uVegShade.w, 1.0, vMisc.y);
  mdVegLeaf = leaf; mdVegWrap = uVegShade.x * leaf;
  mdVegTrans = leaf * uVegShade.y * smoothstep(0.15, 0.8, vVeg.x) * mix(0.55, 1.0, nt.z);
  mdVegTransCol = pow(alb.rgb, vec3(0.9)) * tint * vec3(1.15, 1.25, 0.5);
  mdVegRough = mix(mix(0.9, uVegShade.z, leaf), 0.32, wet * 0.5);
  mdVegSpec = uVegCell.z; mdVegFill = uVegCell.w * mix(0.3, 1.0, vMisc.y) * mix(0.6, 1.0, leaf);
}`,h=`normal = normalize( ( viewMatrix * vec4( mdVegN, 0.0 ) ).xyz );`,g=`roughnessFactor = mdVegRough; metalnessFactor = 0.0;`,_=`
{
  vec3 mdSky = uSunColor.g * vec3( 0.55, 0.86, 1.1 ) * ( 0.4 + 0.6 * ( 0.5 + 0.5 * mdVegN.y ) );
  // mostly where the sun does not reach, so the lit side keeps its warm olive
  float mdLit = smoothstep( 0.0, 0.08, dot( reflectedLight.directDiffuse, vec3( 0.3, 0.6, 0.1 ) ) );
  reflectedLight.indirectDiffuse += mdSky * ( diffuseColor.rgb * 2.0 + vec3( 0.03 ) * mdVegLeaf ) * ( mdVegFill * uVegFill * ( 1.0 - 0.75 * mdLit ) );
}
float mdAOs = smoothstep( 0.08, 0.8, mdVegAO );
reflectedLight.indirectDiffuse *= mix( 0.3, 1.0, mdAOs ); reflectedLight.indirectSpecular *= mdVegAO * mdVegAO * mix( 1.0, 0.3, mdVegLeaf );
reflectedLight.directDiffuse *= mix( 1.0, mdAOs, 0.85 ); reflectedLight.directSpecular *= mdAOs;`,v=null;function y(){if(v)return v;let e=i.lights_physical_pars_fragment,t=/float dotNL = saturate\( dot\( geometryNormal, directLight\.direction \) \);\s*vec3 irradiance = dotNL \* directLight\.color;/,n=`reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );`;if(!t.test(e)||!e.includes(n))return console.warn(`[veg] light chunk patch did not apply`),v=e;e=e.replace(t,`float mdNLraw = dot( geometryNormal, directLight.direction );
	float dotNL = saturate( mdNLraw );
	vec3 irradiance = dotNL * directLight.color;
	vec3 mdIrrD = directLight.color * mix( dotNL, saturate( ( mdNLraw + mdVegWrap ) / ( 1.0 + mdVegWrap ) ), mdVegLeaf );
	float mdVL = saturate( dot( -geometryViewDir, directLight.direction ) );
	vec3 mdIrrT = directLight.color * ( 0.2 * saturate( 0.5 - mdNLraw * 0.5 ) + 0.8 * mdVL * mdVL * mdVL ) * mdVegTrans;`),e=e.replace(n,`reflectedLight.directDiffuse += mdIrrD * diffuseBRDF * ( 1.0 - F ) + mdIrrT * BRDF_Lambert( mdVegTransCol );`);let r=`reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;`;return e.includes(r)?e=e.replace(r,`float mdNV = dot( geometryNormal, geometryViewDir );
	reflectedLight.directSpecular += min( irradiance * specularBRDF * material.multiScatteringCompensation, vec3( 4.0 ) ) * mix( 1.0, mdVegSpec * smoothstep( 0.0, 0.35, mdNV ), mdVegLeaf );`):console.warn(`[veg] specular patch did not apply`),v=e}function b(e){let t=e.onBeforeCompile;return e.onBeforeCompile=(e,n)=>{t(e,n),e.fragmentShader=e.fragmentShader.replace(`#include <lights_physical_pars_fragment>`,y())},e}function x(e,t){return t.pre&&(e.colorWrite=!1),t.eq&&(e.depthFunc=4,e.depthWrite=!1),e}function S(r){let i=new n({color:16777215,roughness:.7,metalness:0,side:2}),o={...s,tVegAlb:{value:r.tex.alb},tVegNrm:{value:r.tex.nrm},uVegTex:{value:new t(r.tex.w,r.tex.h,r.cut??.4,r.nrm??.7)},uVegShade:{value:new t(r.wrap??.18,r.trans??.6,r.rough??.7,.45)},uVegTint:{value:new e(...r.tint??[1,1,1])},uVegCell:{value:new t(r.tex.cells?.[0]??0,r.tex.cells?.[1]??0,r.spec??.16,r.fill??1)},uLod:{value:new t(...r.lod)},uSway:{value:new t(...r.sway??[0,0,0],0)}};return a(i,{key:`vegF`+(r.key??``)+(r.pre?`P`:``),uniforms:o,defines:r.pre?{...r.defines,VEG_PRE:1}:r.defines,vertPars:c,vertNormal:l,vertPos:u(!0),vertEnd:d,fragPars:p,fragAlbedo:m,fragRM:g,fragNormal:h,fragAO:_}),i.userData.u=o,x(b(i),r)}function C(e){let n=new r({side:2}),i={...s,tVegAlb:{value:e.tex.alb},uVegTex:{value:new t(e.tex.w,e.tex.h,e.cut??.4,0)},uLod:{value:new t(...e.lod)},uSway:{value:new t(...e.sway??[0,0,0],0)}};a(n,{key:`vegFD`+(e.key??``),uniforms:i,defines:e.defines,vertPars:c,vertPos:u(!1),vertEnd:d,fragPars:`uniform sampler2D tVegAlb; uniform vec4 uVegTex; varying vec4 vVeg; varying vec2 vVegUv; varying vec2 vFade;`});let o=n.onBeforeCompile;return n.onBeforeCompile=(e,t)=>{o(e,t),e.fragmentShader=e.fragmentShader.replace(`#include <alphatest_fragment>`,`{ vec2 tx = vVegUv * uVegTex.xy; vec2 tdx = dFdx( tx ), tdy = dFdy( tx );
        float lod = max( 0.0, 0.5 * log2( max( dot( tdx, tdx ), dot( tdy, tdy ) ) + 1e-8 ) );
        if ( vVeg.z > 0.5 && texture2D( tVegAlb, vVegUv ).a < mix( uVegTex.z, uVegTex.z * 0.7, clamp( ( lod - 0.6 ) * 0.5, 0.0, 1.0 ) ) ) discard; }`)},n.userData.u=i,n}var w=`
${f}
uniform sampler2DArray tAlb, tNRA;
uniform vec3 uRockTint, uRockTint2, uMossTint;
${o}
`,T=`
{
  vegDither();
  vec3 Nw = normalize(vWN);
  vec3 tw = pow(abs(Nw), vec3(6.0)); tw /= (tw.x + tw.y + tw.z);
  float macro = texture(uNoiseTex, vWP.xz * 0.0027 + vWP.y * 0.0013).b;
  float macro2 = texture(uNoiseTex, vWP.xz * 0.019 + vec2(vWP.y * 0.013, 0.0)).a;
  float fine = texture(uNoiseTex, vWP.xz * 0.11 + vWP.y * 0.07).b;
  MdTP rk = mdTri(tAlb, tNRA, 0.0, vWP, Nw, tw, 1.0 / 2.6);
  float camDist = length(vWP - cameraPosition);
  if (camDist < 22.0) {
    vec3 dn = mdTriN(tNRA, 1.0, vWP, Nw, tw, 1.0 / 1.1);
    rk.nrm = normalize(rk.nrm + (dn - Nw) * 0.6 * (1.0 - smoothstep(6.0, 22.0, camDist)));
  }
  vec3 alb = rk.alb * mix(uRockTint, uRockTint2, smoothstep(0.35, 0.7, macro * 0.5 + vMisc.x * 0.5)) * (0.86 + 0.2 * vMisc.w);
  float rough = rk.rough;
  // moss on the up-facing side, more in damp places
  float mossAmt = vMisc.w * 0.55 + vMisc.z * 0.35 + (1.0 - vMisc.y) * 0.4;
  float moss = smoothstep(0.42, 0.78, Nw.y * 0.62 + mossAmt * 0.6 + (macro2 - 0.5) * 0.45 + (fine - 0.5) * 0.3) * smoothstep(0.25, 0.8, vWP.y);
  if (moss > 0.004) {
    vec2 guv = vWP.xz / 1.6;
    MdTP mo = mdTop(tAlb, tNRA, 3.0, guv, dFdx(guv), dFdy(guv), Nw);
    alb = mix(alb, mo.alb * uMossTint * 2.3 * mix(0.8, 1.15, fine), moss);
    rk.nrm = normalize(mix(rk.nrm, mo.nrm, moss * 0.6)); rough = mix(rough, 0.95, moss);
  }
  // wet and dark at the waterline
  float wet = max(smoothstep(0.42, 0.06, vWP.y), vMisc.z * smoothstep(1.2, 0.2, vWP.y) * 0.7);
  alb *= mix(1.0, 0.42, wet); rough = mix(rough, 0.16, wet * 0.9);
  diffuseColor.rgb = alb;
  mdVegN = rk.nrm; mdVegRough = clamp(rough, 0.08, 1.0);
  mdVegAO = mix(1.0, rk.ao, 0.75) * vVeg.x * mix(0.55, 1.0, vMisc.y) * mix(0.5, 1.0, smoothstep(-0.55, 0.1, vVeg.w));
}`;function E(e){let r=new n({color:16777215,roughness:1,metalness:0}),i={...s,tAlb:e.terrain.tAlb,tNRA:e.terrain.tNRA,uRockTint:e.terrain.uRockTint,uRockTint2:e.terrain.uRockTint2,uMossTint:e.terrain.uMossTint,uLod:{value:new t(...e.lod)},uSway:{value:new t(0,0,0,0)}};return a(r,{key:`vegR`,uniforms:i,defines:{VEG_NOWIND:1,VEG_LOCALY:1},vertPars:c,vertNormal:l,vertPos:u(!0),vertEnd:d,fragPars:w,fragAlbedo:T,fragRM:g,fragNormal:h,fragAO:`reflectedLight.indirectDiffuse *= mdVegAO; reflectedLight.indirectSpecular *= mdVegAO * mdVegAO; reflectedLight.directDiffuse *= mix( 1.0, mdVegAO, 0.3 );`}),r.userData.u=i,r}function D(e){let n=new r,i={...s,uLod:{value:new t(...e.lod)},uSway:{value:new t(0,0,0,0)}};return a(n,{key:`vegRD`,uniforms:i,defines:{VEG_NOWIND:1},vertPars:c,vertPos:u(!1),vertEnd:d}),n.userData.u=i,n}var O={NX:8,NY:4,FR:128,MAX:16},k=e=>`
attribute vec4 iPos; attribute vec4 iQuat; attribute vec4 iMisc; attribute float iLayer;
invariant gl_Position;
uniform vec3 uCamPosW; uniform vec4 uVegK; uniform vec4 uLod; uniform vec4 uSway;
uniform vec4 uImpP[${O.MAX}];
varying vec4 vMisc; varying vec2 vFade; varying vec3 vWP; varying vec2 vImpUv; varying vec4 vImpF; varying vec4 vImpQ; varying float vImpL;
vec3 vegRot(vec4 q, vec3 v){ return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
void impostor(out vec3 wp, out float cull){
  int li = int(iLayer + 0.5);
  vec4 P = uImpP[li];
  float sc = iPos.w;
  vec3 centre = iPos.xyz + vegRot(iQuat, vec3(0.0, P.y, 0.0)) * sc;
  float dist = distance(iPos.xyz, uCamPosW) * uVegK.x;
  vFade = vec2(clamp((uLod.w - dist) / max(uLod.w - uLod.z, 1e-3), 0.0, 1.0), clamp((dist - uLod.x) / max(uLod.y - uLod.x, 1e-3), 0.0, 1.0));
  cull = (vFade.x <= 0.0 || vFade.y <= 0.0) ? 1.0 : 0.0;
  vec3 vd = ${e};
  vec3 vl = normalize(vegRot(vec4(-iQuat.xyz, iQuat.w), vd));          // view direction in tree space
  float fy = atan(vl.z, vl.x) / 6.2831853 * ${O.NX}.0;
  float fe = clamp(asin(clamp(vl.y, -1.0, 1.0)) / 0.43633, 0.0, ${O.NY-1}.0);
  vImpF = vec4(floor(fy), fract(fy), floor(fe), fract(fe));
  vec3 rl = normalize(cross(vec3(0.0, 1.0, 0.0), vl) + vec3(1e-5, 0.0, 0.0)), ul = cross(vl, rl);
  vec3 lp = (rl * position.x + ul * position.y) * P.x * sc;
  wp = centre + vegRot(iQuat, lp);
  // whole-crown sway
  float hh = max(P.y * sc + lp.y, 0.0);
  float gust = 0.6 + 0.4 * sin(uTime * 0.8 - dot(iPos.xz, uWind.xy) * 0.05 + uWind.w);
  wp.xz += uWind.xy * (hh * hh * uSway.x * uWind.z * gust * (0.7 + 0.3 * sin(uTime * 1.25 + iMisc.x * 6.2831853)));
  vImpUv = position.xy * 0.5 + 0.5; vImpQ = iQuat; vImpL = float(li); vMisc = iMisc; vWP = wp;
}`,A=`
${f.replace(`varying vec4 vVeg; varying vec4 vMisc; varying vec2 vFade; varying vec2 vVegUv; varying vec3 vWP; varying vec3 vWN;`,`varying vec4 vMisc; varying vec2 vFade; varying vec3 vWP;`)}
precision highp sampler2DArray;
uniform sampler2DArray tImpAlb, tImpNrm;
uniform vec4 uVegShade; uniform vec3 uVegTint;
varying vec2 vImpUv; varying vec4 vImpF; varying vec4 vImpQ; varying float vImpL;
vec3 vegRotF(vec4 q, vec3 v){ return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
vec3 impUV(){
  float n1 = vegIGN(gl_FragCoord.xy * 1.37 + 17.0 + uVegK.y), n2 = vegIGN(gl_FragCoord.yx * 1.19 + 41.0 + uVegK.y);
  float fx = mod(vImpF.x + (n1 < vImpF.y ? 1.0 : 0.0), ${O.NX}.0);
  float fy = min(vImpF.z + (n2 < vImpF.w ? 1.0 : 0.0), ${O.NY-1}.0);
  vec2 uv = clamp(vImpUv, 0.004, 0.996);
  return vec3((vec2(fx, fy) + uv) / vec2(${O.NX}.0, ${O.NY}.0), vImpL);
}`,j=`
{
  vec3 iuv = impUV();
  // explicit gradients: the frame changes per pixel (dither), implicit derivatives would jump to the last mip.
  // The mip is capped as well so neighbouring frames never bleed into each other.
  vec2 igx = dFdx(vImpUv), igy = dFdy(vImpUv);
  float igk = min(1.0, 5.0 / (${O.FR}.0 * max(length(igx), length(igy)) + 1e-6));
  igx *= igk / vec2(${O.NX}.0, ${O.NY}.0); igy *= igk / vec2(${O.NX}.0, ${O.NY}.0);
  vec4 alb = textureGrad(tImpAlb, iuv, igx, igy);
  if (alb.a < 0.36) discard;
  vegDither();
#ifdef VEG_PRE
  gl_FragColor = vec4( 0.0 ); return;     // depth pre-pass: coverage only
#endif
  vec4 nr = textureGrad(tImpNrm, iuv, igx, igy);
  float ia = 1.0 / max(alb.a, 0.05);
  vec3 base = pow(clamp(alb.rgb * ia, 0.0, 1.0), vec3(2.2));
  vec3 tint = uVegTint * mix(vec3(0.84, 0.95, 0.92), vec3(1.14, 1.05, 0.82), vMisc.w) * (0.86 + 0.28 * vMisc.x);
  diffuseColor.rgb = base * tint * mix(1.0, 0.78, vMisc.z * uVegShade.w);
  vec3 nl = normalize(nr.xyz * ia * 2.0 - 1.0);
  mdVegN = normalize(vegRotF(vImpQ, nl));
  float ao = clamp(nr.a * ia, 0.0, 1.0);
  mdVegAO = ao * mix(0.45, 1.0, vMisc.y);
  mdVegLeaf = 1.0; mdVegWrap = uVegShade.x;
  mdVegTrans = uVegShade.y * smoothstep(0.15, 0.8, ao);
  mdVegTransCol = pow(base, vec3(0.9)) * tint * vec3(1.15, 1.25, 0.5);
  mdVegRough = uVegShade.z; mdVegSpec = 0.16; mdVegFill = mix(0.3, 1.0, vMisc.y);
}`;function M(r){let i=new n({color:16777215,roughness:.7,metalness:0,side:2}),o={...s,tImpAlb:{value:r.imp.alb},tImpNrm:{value:r.imp.nrm},uImpP:{value:r.imp.params},uVegShade:{value:new t(r.wrap??.18,r.trans??.6,r.rough??.7,+!r.sunVis)},uVegTint:{value:new e(...r.tint??[1,1,1])},uLod:{value:new t(...r.lod)},uSway:{value:new t(...r.sway??[0,0,0],0)}};return a(i,{key:`vegI`+(r.sunVis?`S`:``)+(r.pre?`P`:``),uniforms:o,defines:r.pre?{VEG_PRE:1}:void 0,vertPars:k(`normalize(cameraPosition - centre)`),vertNormal:`objectNormal = vec3(0.0, 1.0, 0.0);`,vertPos:`vec3 iwp; float vcull; impostor(iwp, vcull); transformed = iwp;`,vertEnd:d,fragPars:A,fragAlbedo:j,fragRM:g,fragNormal:h,fragAO:_+(r.sunVis?`
reflectedLight.directDiffuse *= mix( 0.25, 1.0, vMisc.z ); reflectedLight.directSpecular *= vMisc.z;`:``)}),i.userData.u=o,x(b(i),r)}function N(e){let n=new r({side:2}),i={...s,tImpAlb:{value:e.imp.alb},uImpP:{value:e.imp.params},uLod:{value:new t(...e.lod)},uSway:{value:new t(0,0,0,0)}};a(n,{key:`vegID`,uniforms:i,vertPars:k(`uSunDirW`),vertPos:`vec3 iwp; float vcull; impostor(iwp, vcull); transformed = iwp;`,vertEnd:d,fragPars:`precision highp sampler2DArray; uniform sampler2DArray tImpAlb; varying vec2 vImpUv; varying vec4 vImpF; varying float vImpL;`});let o=n.onBeforeCompile;return n.onBeforeCompile=(e,t)=>{o(e,t),e.fragmentShader=e.fragmentShader.replace(`#include <alphatest_fragment>`,`{ vec2 f = vec2( mod( vImpF.x + step( 0.5, vImpF.y ), ${O.NX}.0 ), min( vImpF.z + step( 0.5, vImpF.w ), ${O.NY-1}.0 ) );
         if ( textureLod( tImpAlb, vec3( ( f + clamp( vImpUv, 0.004, 0.996 ) ) / vec2( ${O.NX}.0, ${O.NY}.0 ), vImpL ), 1.0 ).a < 0.36 ) discard; }`)},n.userData.u=i,n}var P=`
attribute vec4 aVeg;
out vec2 vUv; out vec3 vN; out vec4 vVeg;
void main(){ vUv = uv * vec2(1.0, 4.0); vN = normal; vVeg = aVeg; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,F=`
precision highp float;
uniform sampler2D tVegAlb, tVegNrm; uniform float uCut;
in vec2 vUv; in vec3 vN; in vec4 vVeg;
layout(location = 0) out vec4 oAlb; layout(location = 1) out vec4 oNrm;
void main(){
  vec4 alb = texture(tVegAlb, vUv);
  float leaf = step(0.5, vVeg.z);
  if (mix(1.0, alb.a, leaf) < uCut) discard;
  float ao = vVeg.x * mix(1.0, texture(tVegNrm, vUv).z, 0.75);
  vec3 col = alb.rgb * mix(vec3(0.9, 0.88, 0.84), vec3(1.0), leaf);
  oAlb = vec4(pow(col, vec3(1.0 / 2.2)), 1.0);
  oNrm = vec4(normalize(vN) * 0.5 + 0.5, ao);
}`;export{C as a,M as c,s as i,D as l,P as n,S as o,O as r,N as s,F as t,E as u};