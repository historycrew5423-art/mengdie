import{U as e,ar as t,mr as n,qt as r}from"./three.core-BF58tRDi.js";import{a as i,c as a,i as o,n as s,o as c,r as l,s as u}from"./index-ChqJ2Hv-.js";import{t as d}from"./config-OM6otvPM.js";var f=[`rock_boulder_dry`,`rough_linen`],p=`
${s}
varying vec4 vTCol;
uniform sampler2DArray tSgA, tSgN;
uniform vec3 uSgWarm, uSgCool, uSgSkin, uSgDirt, uSgMoss, uSgStain, uSgWet;
vec3 sgNw; float sgRough; float sgAO;
${c}
// perturb a world-space normal by a procedural height (surface gradient from screen derivatives)
vec3 sgBump(vec3 N, vec3 p, float h, float k){
  vec3 dpx = dFdx(p), dpy = dFdy(p);
  vec3 r1 = cross(dpy, N), r2 = cross(N, dpx);
  float det = dot(dpx, r1);
  vec3 g = (r1 * dFdx(h) + r2 * dFdy(h)) * (sign(det) / max(abs(det), 1e-7));
  return normalize(N - g * k);
}
`,m=`
{
  vec3 Nw = normalize(vWN);
  vec3 tw = pow(abs(Nw), vec3(5.0)); tw /= (tw.x + tw.y + tw.z);
  float camDist = length(vWP - cameraPosition);
  float foot = length(fwidth(vWP));                                    // pixel footprint (m)
  float cav = vTCol.r, dirtV = vTCol.g, cloth = vTCol.b, worn = vTCol.a * cloth, hair = vTCol.a * (1.0 - cloth);
  float steep = 1.0 - Nw.y * Nw.y;
  // the walkable cuts are paved: flagstones in running bond, set into the cloth
  float joint = 0.0, slab = 0.5;
  if (worn > 0.01) {
    vec2 pv = vec2(vWP.x * 0.94 + vWP.z * 0.34, vWP.z * 0.94 - vWP.x * 0.34) / vec2(1.9, 1.3);
    pv.x += 0.5 * floor(pv.y);
    vec2 pf = abs(fract(pv) - 0.5);
    joint = smoothstep(0.455, 0.49, max(pf.x, pf.y)) * worn * (1.0 - smoothstep(0.06, 0.25, foot)) * smoothstep(0.75, 0.95, Nw.y);
    slab = fract(sin(dot(floor(pv), vec2(12.9898, 78.233))) * 43758.5453);
  }
  vec4 nA = texture(uNoiseTex, vWP.xz * 0.011 + vWP.y * 0.006);        // large blotches
  vec4 nB = texture(uNoiseTex, vWP.xz * 0.083 + vWP.yy * vec2(0.05, 0.031));

  // ---- stone body: one tiling stone, used as a low-contrast modulation so it never reads as a pattern
  MdTP st = mdTri(tSgA, tSgN, 0.0, vWP, Nw, tw, 1.0 / 9.0);
  float nearMix = 1.0 - smoothstep(5.0, 16.0, camDist);
  if (nearMix > 0.01) {
    MdTP sn = mdTri(tSgA, tSgN, 0.0, vWP.zxy + 3.7, Nw.zxy, tw.zxy, 1.0 / 2.1);
    float k = nearMix * 0.75;
    st.alb = mix(st.alb, sn.alb, k); st.rough = mix(st.rough, sn.rough, k); st.ao = mix(st.ao, sn.ao, k);
    st.nrm = normalize(mix(st.nrm, sn.nrm.yzx, k));
  }
  float lum = dot(st.alb, vec3(0.30, 0.55, 0.15)) / 0.345;             // 1 = average of the stone texture
  vec3 alb = mix(uSgCool, uSgWarm, smoothstep(0.25, 0.7, nA.b)) * mix(0.94, 1.04, nA.a);
  alb = mix(alb, uSgSkin, (1.0 - cloth) * 0.6);
  alb *= mix(1.0, clamp(lum, 0.5, 1.4), 0.42);

  // ---- normal: stone grain, fine pleats running down the cloth, weave up close
  vec3 N2 = normalize(mix(Nw, st.nrm, 0.5 + 0.2 * worn));
  {
    // pleats: stretched noise on the two vertical projections, a soft isotropic crumple everywhere
    float w1 = (nA.r - 0.5) * 0.5;
    float pz = texture(uNoiseTex, vec2(vWP.x * 0.0210 + w1 * 0.02, vWP.y * 0.0019 + vWP.z * 0.0007)).r;
    float px = texture(uNoiseTex, vec2(vWP.z * 0.0210 + w1 * 0.02 + 0.37, vWP.y * 0.0019 + vWP.x * 0.0007)).r;
    float pleat = (pz * tw.z + px * tw.x) / max(tw.x + tw.z, 1e-3);
    float h = pleat * 0.085 * smoothstep(0.15, 0.6, steep) + nB.b * 0.10 + nB.a * 0.05 - joint * 0.07;
    float fade = (1.0 - smoothstep(0.10, 0.45, foot)) * mix(0.25, 1.0, cloth) * (1.0 - 0.6 * worn);
    N2 = sgBump(N2, vWP, h, fade);
    if (hair > 0.01) {
      // strands of the hair and the beard: fine streaks running down
      float sz = texture(uNoiseTex, vec2(vWP.x * 0.039 + w1 * 0.03, vWP.y * 0.0031 + vWP.z * 0.0016)).r;
      float sx = texture(uNoiseTex, vec2(vWP.z * 0.039 + w1 * 0.03 + 0.61, vWP.y * 0.0031 + vWP.x * 0.0016)).r;
      float hs = (sz * tw.z + sx * tw.x) / max(tw.x + tw.z, 1e-3);
      N2 = sgBump(N2, vWP, hs * 0.11, hair * (1.0 - smoothstep(0.05, 0.22, foot)) * smoothstep(0.1, 0.4, steep));
    }
  }
  float weave = (1.0 - smoothstep(9.0, 30.0, camDist)) * cloth * (1.0 - worn);
  if (weave > 0.01) {
    vec3 ln = mdTriN(tSgN, 1.0, vWP, Nw, tw, 1.0 / 1.15);
    N2 = normalize(N2 + (ln - Nw) * 0.9 * weave);
  }

  // ---- weathering
  float damp = (1.0 - cav);
  // grime gathered in the fold valleys and on low, upward facing cloth
  float dirt = saturate(dirtV * (0.7 + 0.9 * nB.a) + damp * 0.35 - 0.08);
  alb *= mix(vec3(1.0), uSgDirt, dirt * 0.85);
  float moss = smoothstep(0.42, 0.78, dirtV * 0.85 + (nB.b - 0.5) * 0.7 + (nA.a - 0.5) * 0.3) * smoothstep(0.1, 0.55, Nw.y);
  alb = mix(alb, uSgMoss * (0.55 + 0.6 * lum), moss * 0.8);
  // rain streaks down the steep faces
  float sn = texture(uNoiseTex, vec2(dot(vWP.xz, vec2(0.71, 0.63)) * 0.047, vWP.y * 0.0052)).b;
  float stain = smoothstep(0.56, 0.84, sn * 0.72 + nB.a * 0.28 + damp * 0.30) * smoothstep(0.25, 0.8, steep);
  alb *= mix(vec3(1.0), uSgStain, stain * 0.62);
  // patina: the faces that the rain does not wash stay a shade darker and more ochre than the crests
  alb *= mix(vec3(1.0), vec3(0.80, 0.74, 0.63), smoothstep(0.25, 0.9, steep) * (0.25 + 0.5 * nA.r) * cloth);
  // tide mark where the robe meets the lake
  float wl = smoothstep(2.9, 0.5, vWP.y + (nA.g - 0.5) * 0.2 + (nB.b - 0.5) * 1.6);
  alb *= mix(vec3(1.0), uSgWet, wl * 0.9);
  // trodden stone on the walkable cuts
  alb *= mix(1.0, (0.78 + 0.14 * nB.b) * (0.92 + 0.14 * slab), worn) * (1.0 - 0.45 * joint);

  diffuseColor.rgb = alb;
  sgNw = N2;
  sgRough = clamp(mix(0.60, 0.84, cloth) + (st.rough - 0.63) * 0.5 + moss * 0.12 - wl * 0.3 - worn * 0.1, 0.3, 1.0);
  sgAO = cav * mix(1.0, st.ao, 0.6);
}
`,h=`
reflectedLight.indirectDiffuse *= sgAO * vec3(1.50, 1.22, 0.80);   // warm bounce from the cloth around: the shade of the concept is olive, not blue reflectedLight.indirectSpecular *= sgAO * sgAO; reflectedLight.directDiffuse *= mix(1.0, sgAO, 0.4);
#if NUM_DIR_LIGHTS > 0
{
  float ndl = dot(normal, directionalLights[0].direction);
  float wrap = saturate((ndl + 0.5) / 1.5); wrap = wrap * wrap * (1.0 - saturate(ndl * 2.2));
  reflectedLight.directDiffuse += directionalLights[0].color * BRDF_Lambert(diffuseColor.rgb) * vec3(1.0, 0.68, 0.42) * (wrap * 0.7 * sgAO * sgAO);
}
#endif
`;async function g(s,c){let[g,_]=await Promise.all([a(`sage`),u(s.renderer,f,1024,Math.min(s.q.aniso,s.maxAniso))]),v={tSgA:{value:_.albedo},tSgN:{value:_.nra},uSgWarm:{value:new e(1,.868,.665)},uSgCool:{value:new e(.97,.862,.688)},uSgSkin:{value:new e(.98,.88,.72)},uSgDirt:{value:new e(.6,.49,.35)},uSgMoss:{value:new e(.19,.22,.1)},uSgStain:{value:new e(.6,.54,.45)},uSgWet:{value:new e(.46,.47,.38)}},y=new n({color:16777215,roughness:.8,metalness:0});i(y,{key:`sage-stone`,uniforms:v,vertPars:o+`attribute vec4 color;
varying vec4 vTCol;`,vertEnd:l+`
vTCol = color;`,fragPars:p,fragAlbedo:m,fragRM:`roughnessFactor = sgRough; metalnessFactor = 0.0;`,fragNormal:`normal = normalize( ( viewMatrix * vec4( sgNw, 0.0 ) ).xyz );`,fragAO:h});let b=new r;b.name=`sage`;for(let e of g.meshes){let n=new t(e.geometry,y);n.castShadow=n.receiveShadow=!0,n.matrixAutoUpdate=!1,n.layers.set(d.OPAQUE),b.add(n)}s.scene.add(b),c.sage={group:b,material:y,pack:g,uniforms:v}}export{g as default};