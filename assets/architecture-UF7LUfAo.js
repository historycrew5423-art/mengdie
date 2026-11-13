import{A as e,Dt as t,E as n,Hn as r,Lt as i,Ma as a,Nr as o,Rn as s,U as c,an as l,ar as u,fa as d,fn as f,ft as ee,in as p,io as m,j as h,jr as g,mr as _,pn as v,qt as y,ro as b,ta as x,wr as te}from"./three.core-BF58tRDi.js";import{t as S}from"./config-OM6otvPM.js";import{a as C,i as w,n as T,o as E,r as D,s as ne}from"./index-ChqJ2Hv-.js";import{r as O,t as k}from"./globals-DAxe_AO1.js";import{i as A}from"./layout-C2B8gIUV.js";var re=[`weathered_brown_planks`,`old_planks_02`,`dark_wooden_planks`,`grey_roof_tiles`,`japanese_stone_wall`,`monastery_stone_floor`,`seaworn_stone_tiles`,`rock_boulder_dry`,`worn_plaster_wall`,`green_metal_rust`,`tatami_mat`,`rough_linen`,`mossy_rock`],j={WOOD:0,PLANK:1,DARK:2,TILE:3,WALL:4,PAVE:5,BLOCK:6,STONE:7,PLASTER:8,BRONZE:9,STRAW:10,CLOTH:11,MOSS:12},M=[[.15,1.1,1,0],[.1,1.1,1,0],[.2,.95,1,0],[.35,1.25,.7,0],[.1,1,1,0],[.3,1,1,0],[.1,1,1,0],[.25,1.25,1.3,0],[.3,1,.8,0],[.45,.85,.8,.85],[.2,1.1,1,0],[1,1.3,1,0],[0,1,1,0]],N=e=>{let t=parseInt(e.slice(1),16);return[t>>16&255,t>>8&255,t&255].map(e=>(e/=255,e<=.04045?e/12.92:((e+.055)/1.055)**2.4))},P=[[.12,.073,.044],[.123,.091,.064],[.088,.069,.05],[.124,.111,.077],[.205,.19,.163],[.136,.094,.065],[.243,.198,.15],[.398,.337,.271],[.183,.155,.111],[.05,.074,.034],[.278,.227,.119],[.285,.408,.613],[.161,.154,.1]];function F(e,t){let n=N(t),r=P[e],i=M[e][0],a=r[0]*.2126+r[1]*.7152+r[2]*.0722;return n.map((e,t)=>Math.min(3.9,e/(r[t]+(a-r[t])*i)))}var I={timber:{layer:j.WOOD,tint:F(j.WOOD,`#7a5c4a`),uvs:.55,moss:.05,wear:.75,jit:.1},timberD:{layer:j.DARK,tint:F(j.DARK,`#695243`),uvs:.55,moss:.04,wear:.7,jit:.1},rafter:{layer:j.WOOD,tint:F(j.WOOD,`#6c5848`),uvs:.6,moss:0,wear:.3,jit:.12},board:{layer:j.PLANK,tint:F(j.PLANK,`#85735f`),uvs:.55,moss:.22,wear:.8,jit:.16},boardD:{layer:j.PLANK,tint:F(j.PLANK,`#66584a`),uvs:.55,moss:.12,wear:.5,jit:.14},pole:{layer:j.PLANK,tint:F(j.PLANK,`#7a6b58`),uvs:.6,moss:.18,wear:.5,jit:.14},lacquer:{layer:j.DARK,tint:F(j.DARK,`#753f2e`),uvs:.5,moss:0,wear:.8,jit:.06},furniture:{layer:j.DARK,tint:F(j.DARK,`#6b5140`),uvs:.7,moss:0,wear:.6,jit:.08},bamboo:{layer:j.STRAW,tint:F(j.STRAW,`#8a8a58`),uvs:.6,moss:0,wear:.2,jit:.12},tile:{layer:j.TILE,tint:F(j.TILE,`#7d7465`),uvs:.42,moss:.34,wear:.9,jit:.1},tilePan:{layer:j.TILE,tint:F(j.TILE,`#5e584e`),uvs:.42,moss:.45,wear:0,jit:.05},ridge:{layer:j.TILE,tint:F(j.TILE,`#8f887b`),uvs:.5,moss:.25,wear:.9,jit:.05},step:{layer:j.STONE,tint:F(j.STONE,`#a8906f`),uvs:.45,moss:.3,wear:.5,jit:.14},stepDark:{layer:j.STONE,tint:F(j.STONE,`#8a765c`),uvs:.45,moss:.42,wear:.4,jit:.14},stone:{layer:j.STONE,tint:F(j.STONE,`#8f8676`),uvs:.5,moss:.3,wear:.5,jit:.1},stoneW:{layer:j.STONE,tint:F(j.STONE,`#b9ad98`),uvs:.5,moss:.2,wear:.4,jit:.08},wall:{layer:j.WALL,tint:F(j.WALL,`#8a8170`),uvs:.42,moss:.4,wear:0,jit:.06},block:{layer:j.BLOCK,tint:F(j.BLOCK,`#9a8b74`),uvs:.5,moss:.3,wear:.4,jit:.08},pave:{layer:j.PAVE,tint:F(j.PAVE,`#8d8170`),uvs:.4,moss:.3,wear:0,jit:.04},plaster:{layer:j.PLASTER,tint:F(j.PLASTER,`#b3a995`),uvs:.4,moss:.12,wear:0,jit:.03},paper:{layer:j.CLOTH,tint:F(j.CLOTH,`#d8ccb0`),uvs:1.6,moss:0,wear:0,jit:.03},bronze:{layer:j.BRONZE,tint:F(j.BRONZE,`#4f5a45`),uvs:.8,moss:0,wear:.9,jit:0},iron:{layer:j.BRONZE,tint:F(j.BRONZE,`#33312d`),uvs:.8,moss:0,wear:.5,jit:0},straw:{layer:j.STRAW,tint:F(j.STRAW,`#9c8a5c`),uvs:1.2,moss:0,wear:0,jit:.1},rope:{layer:j.STRAW,tint:F(j.STRAW,`#7d6c4c`),uvs:2,moss:0,wear:0,jit:.05},clay:{layer:j.STONE,tint:F(j.STONE,`#6b4f3c`),uvs:.8,moss:.05,wear:.3,jit:.08},celadon:{layer:j.STONE,tint:F(j.STONE,`#9aa890`),uvs:.8,moss:0,wear:.2,jit:.02},cloth:{layer:j.CLOTH,tint:F(j.CLOTH,`#b8b0a0`),uvs:2,moss:0,wear:0,jit:.05},clothRed:{layer:j.CLOTH,tint:F(j.CLOTH,`#9a3a28`),uvs:2,moss:0,wear:0,jit:.08},clothOchre:{layer:j.CLOTH,tint:F(j.CLOTH,`#b08a3c`),uvs:2,moss:0,wear:0,jit:.08},clothBlue:{layer:j.CLOTH,tint:F(j.CLOTH,`#4a5f66`),uvs:2,moss:0,wear:0,jit:.08},clothDark:{layer:j.CLOTH,tint:F(j.CLOTH,`#3b3a34`),uvs:2,moss:0,wear:0,jit:.05}},L=M.length,R=`
${w}
attribute vec4 aCol;
attribute vec4 aMat;
varying vec4 vCol;
varying vec4 vMat;
varying vec2 vUvA;
#ifdef ARCH_INSC
attribute vec2 aUvI;
varying vec2 vUvI;
#endif
`,z=`
#ifdef ARCH_WIND
{
  float w = aMat.w / 255.0;
  vec3 wp0 = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
  float ph = uTime * ( 2.6 + 1.2 * uWind.z ) - dot( wp0.xz, uWind.xy ) * 2.4 + wp0.y * 1.7;
  vec3 wd = vec3( uWind.x, 0.0, uWind.y );
  vec3 sd = vec3( -uWind.y, 0.0, uWind.x );
  float gust = 0.55 + 0.45 * sin( uTime * 0.63 + wp0.x * 0.13 + wp0.z * 0.09 );
  float a = w * uWind.z * gust;
  transformed += wd * a * ( 0.30 + 0.10 * sin( ph ) ) + sd * a * 0.11 * sin( ph * 0.83 + 1.3 ) + vec3( 0.0, a * ( 0.16 * w + 0.07 * sin( ph * 1.31 + 0.6 ) ), 0.0 );
}
#endif
`,B=`
${D}
vCol = aCol; vMat = vec4( aMat.x, aMat.y / 255.0, aMat.z / 255.0, aMat.w ); vUvA = uv;
#ifdef ARCH_INSC
vUvI = aUvI;
#endif
`,V=`
${T}
varying vec4 vCol;
varying vec4 vMat;
varying vec2 vUvA;
uniform sampler2DArray tArchA, tArchN;
uniform vec4 uLP[${L}];
uniform vec3 uMossTint;
uniform vec3 uGlowColor;
uniform float uGlow;
uniform float uGlowCh[8];
uniform vec4 uFillP[6];
uniform vec3 uFillC[6];
uniform float uBounce;
#ifdef ARCH_INSC
varying vec2 vUvI;
uniform sampler2D tInsc;
#endif
vec3 mdNw; float mdRough; float mdAO; float mdMetal; vec3 mdEmis;
${E}
`,H=(.21*I.tile.uvs*1.06).toFixed(5),U=`
{
  float layer = floor( vMat.x + 0.5 );
  vec3 Nw = normalize( vWN );
  #ifdef DOUBLE_SIDED
    if ( ! gl_FrontFacing ) Nw = -Nw;
  #endif
  vec3 tc = vec3( vUvA, layer );
  vec4 A = texture( tArchA, tc );
  vec4 T = texture( tArchN, tc );
  vec4 lp = uLP[ int( layer ) ];
  vec3 alb = A.rgb;
  alb = mix( alb, vec3( dot( alb, vec3( 0.2126, 0.7152, 0.0722 ) ) ), lp.x );
  alb *= vCol.rgb * 4.0;
  float rough = T.b * lp.y;
  float aoT = T.a;

  // tangent frame from screen-space derivatives
  vec3 tn = mdUnpackN( T.rg ); tn.xy *= lp.z;
  vec3 dp1 = dFdx( vWP ), dp2 = dFdy( vWP ); vec2 du1 = dFdx( vUvA ), du2 = dFdy( vUvA );
  vec3 dp2perp = cross( dp2, Nw ), dp1perp = cross( Nw, dp1 );
  vec3 Tt = dp2perp * du1.x + dp1perp * du2.x, Bt = dp2perp * du1.y + dp1perp * du2.y;
  float invmax = inversesqrt( max( max( dot( Tt, Tt ), dot( Bt, Bt ) ), 1e-16 ) );
  Tt *= invmax; Bt *= invmax;
  vec3 nrm = Tt * tn.x + Bt * tn.y + Nw * tn.z;

  float camDist = length( vWP - cameraPosition );
  float n1 = texture( uNoiseTex, vWP.xz * 0.043 + vWP.y * 0.029 ).b;
  float n2 = texture( uNoiseTex, vWP.xz * 0.31 + vec2( vWP.y * 0.37, vWP.y * 0.11 ) ).a;
  float n3 = texture( uNoiseTex, vWP.xz * 1.7 + vWP.yy * 1.3 ).b;
  alb *= mix( 0.80, 1.16, n1 );

  // roof tiles: overlapping courses (dark joint, pale worn lip)
  if ( layer == ${j.TILE}.0 ) {
    float cv = vUvA.y / ${H};
    float f = fract( cv ), fw = fwidth( cv );
    float fade = 1.0 - smoothstep( 0.25, 0.6, fw );
    float joint = ( 1.0 - smoothstep( 0.0, 0.07 + fw, f ) ) * fade;
    float lip = smoothstep( 0.05, 0.12, f ) * ( 1.0 - smoothstep( 0.14, 0.42, f ) ) * fade;
    float rnd = mdHash12( vec2( floor( cv ), floor( vUvA.x * 9.0 ) ) );
    alb *= mix( 1.0, 0.42, joint ) * mix( 0.86, 1.1, rnd );
    alb = mix( alb, alb * 1.5 + 0.035, lip * 0.5 * ( vMat.w > 0.5 ? 1.0 : 0.4 ) );
    nrm += Bt * ( joint * 0.9 - lip * 0.25 );
    aoT *= mix( 1.0, 0.6, joint );
  }

  // rain streaks and grime on steep faces
  float steep = 1.0 - Nw.y * Nw.y;
  float streak = texture( uNoiseTex, vec2( dot( vWP.xz, vec2( 0.71, 0.69 ) ) * 0.83, vWP.y * 0.045 ) ).b;
  alb *= 1.0 - 0.34 * steep * smoothstep( 0.42, 0.75, streak ) * lp.w;

  // edge wear (bevels)
  float fx = vMat.w;
  #ifdef ARCH_WIND
    fx = 0.0;                         // cloth: this channel is the sway weight
  #endif
  float wear = fx < 127.5 ? fx / 127.0 : 0.0;
  if ( wear > 0.0 && layer != ${j.TILE}.0 ) {
    float wm = wear * smoothstep( 0.30, 0.62, n3 * 0.6 + n2 * 0.5 );
    alb = mix( alb, alb * 1.75 + 0.02, wm * 0.62 );
    rough *= mix( 1.0, 0.82, wm );
  }

  // damp, dirty base (emissive vertices reuse this channel for their glow channel index)
  float dirt = fx > 127.5 ? 0.0 : vMat.z;
  alb *= mix( vec3( 1.0 ), vec3( 0.50, 0.53, 0.46 ), dirt * ( 0.55 + 0.45 * n2 ) );

  // moss / lichen: grows from propensity, upward and sun-averted faces, crevices
  float facing = clamp( 0.30 + 0.55 * Nw.y + 0.22 * max( -Nw.z, 0.0 ) + 0.16 * max( Nw.x, 0.0 ), 0.0, 1.0 );
  float mossP = vMat.y * facing + dirt * 0.25 * vMat.y;
  float mth = mix( 1.08, 0.36, clamp( mossP, 0.0, 1.0 ) );
  float moss = smoothstep( mth, mth + 0.16, n2 * 0.55 + n3 * 0.22 + ( 1.0 - vCol.a ) * 0.42 + n1 * 0.2 );
  moss *= step( 0.004, vMat.y );
  if ( moss > 0.003 ) {
    vec3 mt = textureGrad( tArchA, vec3( vUvA * 1.7 + 3.1, ${j.MOSS}.0 ), du1 * 1.7, du2 * 1.7 ).rgb;
    alb = mix( alb, mt * uMossTint * mix( 0.7, 1.25, n3 ), moss * 0.92 );
    rough = mix( rough, 0.96, moss );
    nrm = mix( nrm, Nw + ( nrm - Nw ) * 0.4, moss );
  }

  // wet band at the lake
  float wet = smoothstep( 1.25, 0.15, vWP.y - uWaterY ) * step( vWP.y, 3.0 );
  alb *= mix( 1.0, 0.58, wet );
  rough = mix( rough, 0.28, wet * 0.75 );

  #ifdef ARCH_INSC
  if ( vUvI.x >= 0.0 ) {
    vec2 di1 = dFdx( vUvI ), di2 = dFdy( vUvI );
    float h = textureGrad( tInsc, vUvI, di1, di2 ).r;
    vec2 e = vec2( 1.0 / 2048.0, 0.0 );
    float hx = textureGrad( tInsc, vUvI + e.xy, di1, di2 ).r - textureGrad( tInsc, vUvI - e.xy, di1, di2 ).r;
    float hy = textureGrad( tInsc, vUvI + e.yx, di1, di2 ).r - textureGrad( tInsc, vUvI - e.yx, di1, di2 ).r;
    if ( layer == ${j.CLOTH}.0 || layer == ${j.PLASTER}.0 ) {
      alb = mix( alb, vec3( 0.012, 0.011, 0.010 ), h * 0.93 );            // ink on paper
    } else if ( layer == ${j.DARK}.0 || layer == ${j.WOOD}.0 ) {
      alb = mix( alb, vec3( 0.50, 0.36, 0.12 ) * mix( 0.6, 1.1, n3 ), h * 0.9 );   // worn gilt characters on a plaque
      rough = mix( rough, 0.45, h );
      nrm += ( Tt * hx - Bt * hy ) * 1.5;
    } else {
      vec3 cut = mix( alb * 0.30, vec3( 0.20, 0.045, 0.03 ), 0.35 * ( 1.0 - moss ) );   // cut letters with cinnabar residue
      alb = mix( alb, cut, h );
      nrm += ( Tt * hx - Bt * hy ) * 3.0;
      aoT *= mix( 1.0, 0.55, h );
    }
  }
  #endif

  diffuseColor.rgb = alb;
  mdNw = normalize( nrm );
  mdRough = clamp( rough, 0.06, 1.0 );
  mdAO = vCol.a * mix( 1.0, aoT, 0.75 );
  mdMetal = layer == ${j.BRONZE}.0 ? 0.82 : 0.0;
  float em = 0.0;
  if ( fx > 127.5 ) em = ( fx - 128.0 ) / 127.0 * uGlowCh[ int( vMat.z * 255.0 + 0.5 ) ];
  mdEmis = uGlowColor * ( em * uGlow ) * ( 0.35 + 0.65 * dot( A.rgb, vec3( 0.333 ) ) / 0.45 );
}
`,W=`
reflectedLight.indirectDiffuse *= mix( 0.26, 1.0, mdAO );
reflectedLight.indirectSpecular *= mdAO * mdAO;
reflectedLight.directDiffuse *= mix( 1.0, mdAO, 0.4 );
reflectedLight.directSpecular *= mix( 1.0, mdAO, 0.6 );
{
  vec3 fill = vec3( 0.0 );
  for ( int i = 0; i < 6; i ++ ) {
    vec3 d = uFillP[ i ].xyz - vWP;
    float d2 = dot( d, d ), q = d2 * uFillP[ i ].w;
    if ( q < 1.0 ) {
      float ndl = clamp( dot( mdNw, d ) * inversesqrt( d2 + 1e-4 ) * 0.7 + 0.3, 0.0, 1.0 );
      fill += uFillC[ i ] * ( ( 1.0 - q ) * ( 1.0 - q ) * ndl );
    }
  }
  #ifdef USE_ENVMAP
    fill += getIBLIrradiance( normalize( ( viewMatrix * vec4( 0.0, 1.0, 0.0, 0.0 ) ).xyz ) ) * ( RECIPROCAL_PI * uBounce * ( 0.5 - 0.5 * mdNw.y ) );
  #endif
  reflectedLight.indirectDiffuse += diffuseColor.rgb * ( 1.0 - metalnessFactor ) * fill * mix( 0.45, 1.0, mdAO );
}
`;function ie(e,t){let n=new Float32Array(L*4),r={[j.WOOD]:.45,[j.PLANK]:.5,[j.DARK]:.4,[j.TILE]:.3,[j.WALL]:.9,[j.PAVE]:.3,[j.BLOCK]:1,[j.STONE]:1,[j.PLASTER]:1,[j.BRONZE]:.9,[j.STRAW]:.2,[j.CLOTH]:.25,[j.MOSS]:0};for(let e=0;e<L;e++)n[e*4]=M[e][0],n[e*4+1]=M[e][1],n[e*4+2]=M[e][2],n[e*4+3]=r[e]??.5;let i={tArchA:{value:e.albedo},tArchN:{value:e.nra},uLP:{value:n},uMossTint:{value:new c(.62,.8,.38)},uGlowColor:{value:new c(1,.52,.2)},uGlow:{value:1.7},uGlowCh:{value:new Float32Array([1,0,0,0,1,1,1,1])},tInsc:{value:t||null},uFillP:{value:Array.from({length:6},()=>new m(0,-1e4,0,1))},uFillC:{value:Array.from({length:6},()=>new b)},uBounce:{value:.85}},a=(e,t,n=0)=>{let r=new _({color:16777215,roughness:1,metalness:0,side:n});return C(r,{key:`arch-`+t,uniforms:i,defines:e,vertPars:R,vertPos:z,vertEnd:B,fragPars:V,fragAlbedo:U,fragRM:`roughnessFactor = mdRough; metalnessFactor = mdMetal;`,fragNormal:`normal = normalize( ( viewMatrix * vec4( mdNw, 0.0 ) ).xyz );`,fragEmissive:`totalEmissiveRadiance += mdEmis;`,fragAO:W}),r};return{std:a({},`std`),insc:a({ARCH_INSC:1},`insc`),cloth:a({ARCH_WIND:1},`cloth`,2),uniforms:i}}var G=`/mengdie/assets/arch`;async function ae(){return fetch(`${G}/index.json`,{cache:`no-cache`}).then(e=>{if(!e.ok)throw Error("architecture packs missing: run `node tools/arch/bake.mjs`");return e.json()})}async function oe(t,r=``){let i=r?`?v=${encodeURIComponent(r)}`:``,[a,o]=await Promise.all([fetch(`${G}/${t}.json${i}`).then(e=>e.json()),fetch(`${G}/${t}.bin${i}`).then(e=>e.arrayBuffer())]),s=[];for(let t of a.meshes){let r=new h;r.setAttribute(`position`,new e(new Float32Array(o,t.off.pos,t.vcount*3),3)),r.setAttribute(`normal`,new v(new f(new Int8Array(o,t.off.nrm,t.vcount*4),4),3,0,!0)),r.setAttribute(`uv`,new e(new Float32Array(o,t.off.uv,t.vcount*2),2)),r.setAttribute(`aCol`,new e(new Uint8Array(o,t.off.col,t.vcount*4),4,!0)),r.setAttribute(`aMat`,new e(new Uint8Array(o,t.off.mat,t.vcount*4),4,!1)),t.uv1&&r.setAttribute(`aUvI`,new e(new Float32Array(o,t.off.uv1,t.vcount*2),2)),r.setIndex(new e(t.idx32?new Uint32Array(o,t.off.idx,t.icount):new Uint16Array(o,t.off.idx,t.icount),1));let i=t.box;r.boundingBox=new n(new b(i[0],i[1],i[2]),new b(i[3],i[4],i[5])),r.boundingSphere=r.boundingBox.getBoundingSphere(new d),s.push({...t,geometry:r})}return{...a,meshes:s}}var K={transparent:!0,depthWrite:!1,side:2,fog:!1,blending:5,blendEquation:100,blendSrc:201,blendDst:205},q={FLAME:0,HALO:1,COLUMN:2,EMBER:3},J=`
attribute vec3 aBase; attribute vec4 aSeed; attribute float aAmt;   // aSeed: phase, size, kind, height (columns)
varying vec2 vUv; varying float vKind; varying float vAmt; varying float vPh; varying vec3 vWP;
${O}
void main(){
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec3 r2 = normalize(vec3(right.x, 0.0, right.z) + 1e-5);
  float kind = aSeed.z, size = aSeed.y;
  vec3 wp;
  if (kind < 0.5) {
    float fl = 1.0 + 0.13 * sin(uTime * 11.0 + aSeed.x * 40.0) + 0.09 * sin(uTime * 23.0 + aSeed.x * 17.0);
    float h = position.y + 0.5;
    wp = aBase + r2 * position.x * size * 0.55 + vec3(0.0, h * size * fl, 0.0);
    wp.xz += uWind.xy * uWind.z * 0.22 * size * h * h * (0.6 + 0.4 * sin(uTime * 5.0 + aSeed.x * 9.0));
  } else if (kind < 1.5) {
    wp = aBase + (right * position.x + up * position.y) * size;
  } else if (kind < 2.5) {
    wp = aBase + r2 * position.x * size + vec3(0.0, (position.y + 0.5) * aSeed.w, 0.0);
  } else {
    wp = aBase + (right * position.x + up * position.y) * size;
  }
  vUv = position.xy * 2.0; vKind = kind; vAmt = aAmt; vPh = aSeed.x; vWP = wp;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`,Y=`
precision highp float;
varying vec2 vUv; varying float vKind; varying float vAmt; varying float vPh; varying vec3 vWP;
${O}
void main(){
  if (vWP.y < uClipY || vAmt <= 0.001) discard;
  vec3 v = vWP - cameraPosition; float d = length(v);
  float trans = 1.0 - min(1.0 - exp(-mdFogOD(cameraPosition, v / max(d, 1e-4), d)), uFogMax);
  float flick = 0.86 + 0.14 * sin(uTime * 13.0 + vPh * 31.0) * sin(uTime * 7.3 + vPh * 11.0);
  vec3 col; float a = 0.0;
  if (vKind < 0.5) {
    float y = vUv.y * 0.5 + 0.5;                                  // 0 base .. 1 tip
    float n = texture2D(uNoiseTex, vec2(vUv.x * 0.11 + vPh, y * 0.16 - uTime * 0.55)).b;
    float w = (0.20 + 0.80 * pow(y, 0.55)) * pow(max(1.0 - y, 0.0), 0.62) * 1.45;
    float x = abs(vUv.x + (n - 0.5) * 0.5 * y) / max(w, 1e-3);
    float body = smoothstep(1.0, 0.35, x) * smoothstep(0.0, 0.06, y);
    float core = smoothstep(0.75, 0.0, x) * smoothstep(0.95, 0.15, y);
    col = mix(vec3(1.0, 0.36, 0.06), vec3(1.0, 0.86, 0.50), core) * (2.2 + 7.0 * core) * flick;
    col = mix(col, vec3(0.20, 0.34, 1.0) * 1.5, smoothstep(0.16, 0.0, y) * 0.6);
    a = body * vAmt; col *= a; a *= 0.6;
  } else if (vKind < 1.5) {
    float r = length(vUv); if (r > 1.0) discard;
    float g = pow(1.0 - r, 2.6);
    col = vec3(1.0, 0.55, 0.22) * g * 0.75 * flick * vAmt;
  } else if (vKind < 2.5) {
    float y = vUv.y * 0.5 + 0.5;
    float n = texture2D(uNoiseTex, vec2(vUv.x * 0.07 + vPh, y * 0.35 - uTime * 0.03)).b;
    float g = exp(-vUv.x * vUv.x * 5.5) * pow(1.0 - y, 1.35) * smoothstep(0.0, 0.03, y) * (1.0 - abs(vUv.x));
    col = vec3(1.0, 0.72, 0.38) * g * (0.22 + 0.2 * n) * vAmt;
  } else {
    float r = length(vUv); if (r > 1.0) discard;
    col = vec3(1.0, 0.42, 0.12) * pow(1.0 - r, 1.5) * 5.0 * flick * vAmt;
  }
  gl_FragColor = vec4(col * trans, a * trans);
}`,se=class{constructor(e=96){this.max=e,this.n=0;let n=new g(1,1),r=this.geo=new l;r.index=n.index,r.setAttribute(`position`,n.attributes.position),this.base=new p(new Float32Array(e*3),3),this.seed=new p(new Float32Array(e*4),4),this.amt=new p(new Float32Array(e),1),this.amt.setUsage(t),r.setAttribute(`aBase`,this.base),r.setAttribute(`aSeed`,this.seed),r.setAttribute(`aAmt`,this.amt),r.instanceCount=0;let i=new x({vertexShader:J,fragmentShader:Y,uniforms:{...k.uniforms},...K}),a=this.mesh=new u(r,i);a.layers.set(S.TRANS),a.frustumCulled=!1,a.renderOrder=6,a.name=`arch:glows`}add(e,t,n,r=0,i=0){let a=this.n++;return a>=this.max?(this.n=this.max,this.max-1):(this.base.setXYZ(a,e[0],e[1],e[2]),this.seed.setXYZW(a,a*.6180339%1,n,t,i),this.amt.setX(a,r),this.geo.instanceCount=this.n,this.base.needsUpdate=this.seed.needsUpdate=this.amt.needsUpdate=!0,a)}set(e,t){this.amt.array[e]!==t&&(this.amt.array[e]=t,this.amt.needsUpdate=!0)}move(e,t,n,r){this.base.setXYZ(e,t,n,r),this.base.needsUpdate=!0}},X=`
attribute vec3 aBase; attribute vec4 aSeed; attribute float aAmt;   // aSeed: phase, height, width, drift
varying vec2 vUv; varying float vAmt; varying float vPh; varying vec3 vWP;
${O}
void main(){
  float s = position.y + 0.5;                                        // 0 at the source .. 1 at the top
  float h = aSeed.y, t = uTime * 0.35 + aSeed.x * 17.0;
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 r2 = normalize(vec3(right.x, 0.0, right.z) + 1e-5);
  vec3 c = aBase + vec3(0.0, s * h, 0.0);
  float sw = s * s;
  c.x += (sin(s * 5.0 - t * 2.3 + aSeed.x * 6.0) * 0.07 + sin(s * 11.0 - t * 4.1) * 0.03) * sw * h * 0.5 * (1.0 + aSeed.w);
  c.z += (cos(s * 4.2 - t * 1.9 + aSeed.x * 3.0) * 0.07 + sin(s * 9.0 - t * 3.3) * 0.03) * sw * h * 0.5 * (1.0 + aSeed.w);
  c.xz += uWind.xy * uWind.z * sw * h * 0.32;
  float w = aSeed.z * (0.25 + 2.6 * s);
  vec3 wp = c + r2 * position.x * w;
  vUv = vec2(position.x * 2.0, s); vAmt = aAmt; vPh = aSeed.x; vWP = wp;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`,Z=`
precision highp float;
varying vec2 vUv; varying float vAmt; varying float vPh; varying vec3 vWP;
${O}
void main(){
  if (vWP.y < uClipY || vAmt <= 0.001) discard;
  float n = texture2D(uNoiseTex, vec2(vUv.x * 0.21 + vPh * 3.0, vUv.y * 0.9 - uTime * 0.11)).b;
  float n2 = texture2D(uNoiseTex, vec2(vUv.x * 0.6 + vPh, vUv.y * 2.4 - uTime * 0.23)).a;
  float e = 1.0 - abs(vUv.x);
  float a = pow(e, 1.4) * smoothstep(0.0, 0.05, vUv.y) * pow(1.0 - vUv.y, 1.3) * smoothstep(0.25, 0.75, n * 0.7 + n2 * 0.45 + e * 0.25) * 0.55 * vAmt;
  vec3 col = vec3(0.80, 0.82, 0.84) * (0.35 + 0.9 * mdCloudShadow(vWP)) * (0.7 + 0.5 * uSunColor);
  col = mdAtmosphere(col, vWP, cameraPosition);
  gl_FragColor = vec4(col * a, a);
}`,ce=class{constructor(e=32){this.max=e,this.n=0;let n=new g(1,1,1,14),r=this.geo=new l;r.index=n.index,r.setAttribute(`position`,n.attributes.position),this.base=new p(new Float32Array(e*3),3),this.seed=new p(new Float32Array(e*4),4),this.amt=new p(new Float32Array(e),1),this.amt.setUsage(t),r.setAttribute(`aBase`,this.base),r.setAttribute(`aSeed`,this.seed),r.setAttribute(`aAmt`,this.amt),r.instanceCount=0;let i=new x({vertexShader:X,fragmentShader:Z,uniforms:{...k.uniforms},...K}),a=this.mesh=new u(r,i);a.layers.set(S.TRANS),a.frustumCulled=!1,a.renderOrder=5,a.name=`arch:smoke`}add(e,t,n,r=0,i=0){let a=this.n++;return a>=this.max?(this.n=this.max,this.max-1):(this.base.setXYZ(a,e[0],e[1],e[2]),this.seed.setXYZW(a,a*.754877%1,t,n,i),this.amt.setX(a,r),this.geo.instanceCount=this.n,this.base.needsUpdate=this.seed.needsUpdate=this.amt.needsUpdate=!0,a)}set(e,t){this.amt.array[e]!==t&&(this.amt.array[e]=t,this.amt.needsUpdate=!0)}},le=`
attribute float aSeed;
varying vec2 vUv; varying vec3 vWP; varying float vSeed;
void main(){ vUv = uv; vSeed = aSeed; vec4 wp = modelMatrix * vec4(position, 1.0); vWP = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,ue=`
precision highp float;
varying vec2 vUv; varying vec3 vWP; varying float vSeed;
${O}
float sdCap(vec2 p, vec2 a, vec2 b, float r){ vec2 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); return length(pa - ba * h) - r; }
// seated / standing keeper: uv.x in metres across the window, uv.y in metres above the sill
float figure(vec2 p, float t, float seed){
  float walk = sin(t * 0.07 + seed * 5.0);                                 // slow drift across the window
  float sit = smoothstep(-0.2, 0.2, sin(t * 0.045 + seed * 3.0));           // sits down for long spells
  vec2 o = vec2(walk * 0.55, mix(0.0, -0.38, sit));
  float bob = sin(t * 1.1 + seed) * 0.012 + sin(t * 0.37) * 0.02;
  p -= o;
  vec2 hip = vec2(0.0, -0.10), neck = vec2(0.03 * sin(t * 0.31), 0.52 + bob), head = neck + vec2(0.035 * sin(t * 0.23 + 1.0), 0.20);
  float d = sdCap(p, hip, neck, 0.19);                                     // torso (robe)
  d = min(d, sdCap(p, vec2(-0.02, -0.75), hip, 0.25));                      // skirt of the robe
  d = min(d, length(p - head) - 0.125);                                    // head
  d = min(d, length(p - head - vec2(0.0, 0.145)) - 0.055);                 // topknot
  // arm lifting a cup / brush now and then
  float lift = smoothstep(0.55, 0.9, sin(t * 0.42 + seed * 7.0)) * (0.6 + 0.4 * sin(t * 2.3));
  vec2 sh = neck + vec2(0.14, -0.06), el = sh + vec2(0.20, -0.26 + 0.14 * lift), hand = el + vec2(0.16 - 0.22 * lift, 0.10 + 0.34 * lift);
  d = min(d, sdCap(p, sh, el, 0.065)); d = min(d, sdCap(p, el, hand, 0.05));
  d = min(d, length(p - hand - vec2(0.0, 0.05)) - 0.04);
  return d;
}
void main(){
  if (vWP.y < uClipY) discard;
  vec2 p = vUv;
  float d = figure(p, uTime, vSeed);
  // a low table edge and a tall vessel as static props
  d = min(d, max(abs(p.x + 0.72) - 0.34, abs(p.y + 0.52) - 0.03));
  d = min(d, sdCap(p, vec2(-0.78, -0.48), vec2(-0.78, -0.30), 0.06));
  float soft = 0.045 + 0.02 * sin(uTime * 9.0 + vSeed * 13.0);              // the lamp flickers: the shadow breathes
  float a = (1.0 - smoothstep(-soft, soft, d)) * 0.62;
  gl_FragColor = vec4(vec3(0.03, 0.015, 0.008) * a, a);
}`,de=class{constructor(e){let t=[],n=[],r=[],a=[];e.forEach((e,i)=>{let o=t.length/3,s=e.w/2,c=e.cy??.95;t.push(...e.p0,...e.p1,...e.p2,...e.p3),n.push(-s,-c,s,-c,s,e.h-c,-s,e.h-c);for(let t=0;t<4;t++)r.push(e.seed??i*.37);a.push(o,o+1,o+2,o,o+2,o+3)});let o=new h;o.setAttribute(`position`,new i(t,3)),o.setAttribute(`uv`,new i(n,2)),o.setAttribute(`aSeed`,new i(r,1)),o.setIndex(a);let s=new x({vertexShader:le,fragmentShader:ue,uniforms:{...k.uniforms},...K}),c=this.mesh=new u(o,s);c.layers.set(S.TRANS),c.renderOrder=2,c.name=`arch:shades`}},fe=3,pe={arch_stair:{pos:[-1.5,2.4,91],yaw:22.1,pitch:11.8,fov:60},arch_stair_mid:{pos:[-9.9,12.8,69],yaw:16.7,pitch:17.8,fov:60},arch_stair_head:{pos:[-18.6,24.9,43],yaw:-162.9,pitch:-23.1,fov:60},arch_grotto:{pos:[-41,3.2,45.4],yaw:54.1,pitch:-1.2,fov:60},arch_shrine:{pos:[-58.5,2.65,61.2],yaw:73.3,pitch:-2.5,fov:60},arch_fold:{pos:[23.6,26.1,27.6],yaw:-129.8,pitch:-9.1,fov:60},arch_terrace:{pos:[62,24.3,6],yaw:-141.3,pitch:-8,fov:60},arch_terrace_well:{pos:[67.5,24.3,11.5],yaw:-142.8,pitch:-19.3,fov:60},arch_spur:{pos:[72,24.3,16],yaw:-156,pitch:-28.3,fov:60},arch_shuiting:{pos:[57.6,3.2,56.3],yaw:128,pitch:-6.6,fov:60},arch_boat:{pos:[40,1.2,84],yaw:-59.7,pitch:-2.5,fov:60},arch_fisher:{pos:[52,2.6,118],yaw:-146.3,pitch:-7.1,fov:60},arch_causeway:{pos:[69.6,29.6,-28],yaw:12.5,pitch:13.3,fov:60},arch_gallery_gate:{pos:[50.6,42.7,-64.6],yaw:176.8,pitch:-4.8,fov:60},arch_gallery:{pos:[50.3,42.7,-56],yaw:158.6,pitch:-1.9,fov:60},arch_gallery_bay:{pos:[20.6,42.7,-24.5],yaw:30.5,pitch:-5.8,fov:60},arch_gallery_view:{pos:[14,42.7,-26.6],yaw:-85,pitch:-2.5,fov:60},arch_gallery_end:{pos:[-9.6,42.7,-58],yaw:7.1,pitch:-2.8,fov:60},arch_climb:{pos:[70,42.7,-76],yaw:-22.6,pitch:26.9,fov:60},arch_tingfeng:{pos:[73,64.9,-100.6],yaw:-42.6,pitch:-2.6,fov:60},arch_tingfeng_arrive:{pos:[72,61.5,-105.7],yaw:-69.6,pitch:33.8,fov:60},arch_tingfeng_in:{pos:[77.2,64.9,-106],yaw:-132.3,pitch:6.7,fov:60},arch_tingfeng_bench:{pos:[79.4,64.9,-104.6],yaw:-15.6,pitch:-12.6,fov:60},arch_archway:{pos:[-20.5,34.9,-47],yaw:88.1,pitch:13.1,fov:60},arch_grove:{pos:[-30,34.9,-52],yaw:41.2,pitch:-3.8,fov:60},arch_stelae:{pos:[-39.54,34.9,-58.16],yaw:-39.9,pitch:-18.4,fov:60},arch_lampC:{pos:[-45.5,34.9,-42],yaw:66,pitch:-8.1,fov:60},arch_stones:{pos:[-52.3,34.9,-41.2],yaw:96.7,pitch:-8.3,fov:60},arch_incense:{pos:[-53.8,34.9,-57],yaw:70.3,pitch:-20.3,fov:60},arch_spiral:{pos:[-64.3,21.5,13.5],yaw:169.7,pitch:18.9,fov:60},arch_mengtai:{pos:[-46,22.6,31.4],yaw:57.1,pitch:28.5,fov:60},arch_mengtai_bridge:{pos:[-55.2,21.6,30.1],yaw:-99,pitch:0,fov:60},arch_mengtai_in:{pos:[-56.2,30.3,25.4],yaw:48.7,pitch:-9.1,fov:60},arch_mengtai_stele:{pos:[-60.4,30.3,23.6],yaw:104,pitch:-20.7,fov:60},arch_peak:{pos:[66.5,33.7,-42],yaw:-11.7,pitch:37.7,fov:60},arch_huts:{pos:[74,64.9,-101],yaw:-156,pitch:56.9,fov:60},arch_peak_ref:{pos:[0,1.7,205],yaw:-17.4,pitch:16.4,fov:12},arch_hamlet_ref:{pos:[0,1.7,205],yaw:-13.1,pitch:8.1,fov:9},arch_teahouse:{pos:[62.5,42.7,-66.5],yaw:8,pitch:2,fov:60},arch_tea_in:{pos:[57.2,42.6,-77.2],yaw:-75,pitch:-8,fov:65},arch_bell:{pos:[63.2,42.7,-65],yaw:-48,pitch:2,fov:55},arch_gate:{pos:[68.3,24.8,-6],yaw:-8,pitch:12,fov:60}},Q=e=>e<=0?0:e>=1?1:e*e*(3-2*e),$=Math.PI/180,me=70,he=12;async function ge(e,t,n){let i=await ae(),[c,l,d,f]=await Promise.all([ne(e.renderer,re,1024,Math.min(8,e.maxAniso||8)),Promise.all(i.sites.map(e=>oe(e,i.baked))),new Promise(e=>new a().load(`/mengdie/assets/arch/inscriptions.png`,t=>{t.colorSpace=``,t.minFilter=r,t.magFilter=s,t.anisotropy=8,t.generateMipmaps=!0,e(t)},void 0,()=>e(new ee(new Uint8Array([0,0,0,255]),1,1)))),fetch(`/mengdie/assets/arch/solids.json`+(i.baked?`?v=`+i.baked:``)).then(e=>e.ok?e.json():null).catch(()=>null)]);d.isDataTexture&&(d.needsUpdate=!0);let p=ie(c,d),m=p.uniforms.uGlowCh.value,h=new y;h.name=`architecture`;let g=new Map,_={},v=[],x=[],C=[],w=new b,T=0;for(let e of l){let t=new y,n=new y;t.name=`arch:`+e.id,n.name=`arch:`+e.id+`:detail`,h.add(t,n);let r=[],i=[];for(let a of e.meshes){let o=a.kind===`cloth`?p.cloth:a.uv1?p.insc:p.std,s=new u(a.geometry,o);s.name=`arch:${e.id}:${a.name}`;let c=a.kind===`main`;s.layers.set(c?S.OPAQUE:S.DETAIL),s.castShadow=c&&!a.dyn,s.receiveShadow=!0,a.kind!==`cloth`&&!s.castShadow&&i.push(s),a.dyn?(s.position.set(a.pos[0],a.pos[1],a.pos[2]),s.rotation.order=`YXZ`,s.rotation.y=a.yaw*$,s.userData.yaw0=a.yaw*$,s.userData.pos0=s.position.clone(),s.userData.data=a.data,g.set(a.name,s),r.push([a,s,c])):(s.matrixAutoUpdate=!1,(c?t:n).add(s))}for(let[e,i,a]of r){let r=e.parent?g.get(e.parent):null;r?r.add(i):(a?t:n).add(i),a&&(r?r.position.y:0)+e.pos[1]>he&&i.layers.set(S.DETAIL)}for(let t in e.anchors){let n=e.anchors[t];_[t]=Array.isArray(n)?(_[t]||[]).concat(n):n&&typeof n==`object`?{..._[t]||{},...n}:n}for(let t of e.colliders)v.push(t);for(let t of e.walls)x.push(t);let a=new b(...e.center),o=e.radius;if(!(o>0)){let t=e.meshes.filter(e=>e.dyn&&!e.parent);if(t.length){a.set(0,0,0);for(let e of t)a.add(w.set(e.pos[0],e.pos[1],e.pos[2]));a.multiplyScalar(1/t.length),o=6;for(let e of t)o=Math.max(o,6+a.distanceTo(w.set(e.pos[0],e.pos[1],e.pos[2])))}}C.push({id:e.id,center:a,radius:o,dist:e.detailDist,detail:n,nearCast:i,near:!1}),T+=e.tris}e.scene.add(h);let E=new se(128),D=new ce(40);h.add(E.mesh,D.mesh),_.windows?.length&&h.add(new de(_.windows).mesh);for(let e of _.flames||[])E.add(e.pos,q.FLAME,e.size||.09,1),e.halo!==0&&E.add([e.pos[0],e.pos[1]+(e.size||.09)*.5,e.pos[2]],q.HALO,e.halo||.9,.6);for(let e of _.smokes||[])D.add(e.pos,e.h||1.6,e.w||.05,e.amt??1,e.drift||0);let O=new Set,k=[],j=e=>g.get(e),M={};for(let e of A){if(e.type===`fly`)continue;let t=e.type===`stele`&&e.desk?`stele:`+e.id:e.id,n=_.objects?.[t],r=n?.dyn?j(n.dyn):null;if(!r){r=new te;let t=n?.pos||e.pos;r.position.set(t[0],t[1],t[2]),r.rotation.y=(e.yaw||0)*$,h.add(r)}r.userData.interact=e,M[e.id]===void 0&&(M[e.id]=r),M[t]=r,e.type===`tea`&&(M.tea=r),e.desk&&(M.teaNote=r)}let N={};for(let e of[`lampA`,`lampB`,`lampC`]){let t=_.lamps?.[e],n=t?.flame||A.find(t=>t.id===e).pos.map((e,t)=>t===1?e+1.5:e),r=new o(16753244,0,15,1.8);r.position.set(n[0],n[1],n[2]),r.castShadow=!1,h.add(r);let i=E.add(n,q.FLAME,.2,0),a=E.add([n[0],n[1]+.1,n[2]],q.HALO,2.6,0),s=E.add([n[0],n[1]+.2,n[2]],q.COLUMN,1.5,0,34),c={object:M[e],lit:!1,amt:0,light:r,setLit(e,t=!1){if(this.lit=!!e,t){this.amt=+!!e,l();return}let n=this;O.add(function(e){let t=+!!n.lit;return n.amt+=Math.sign(t-n.amt)*Math.min(Math.abs(t-n.amt),e/2.6),l(),n.amt===t})}},l=()=>{let e=Q(c.amt);E.set(i,e),E.set(a,e),E.set(s,e*e),m[t?.ch??1]=e,r.intensity=26*e};N[e]=c,l()}k.push((e,t)=>{for(let e in N){let n=N[e];n.amt>0&&(n.light.intensity=26*Q(n.amt)*(.9+.1*Math.sin(t*9.1+e.charCodeAt(4))*Math.sin(t*5.3)))}});let P={};for(let e of[`gateStair`,`gateGallery`,`gateMengtai`]){let t=_.gates?.[e],n=A.find(t=>t.id===e),r=t?.blocker?{...t.blocker}:{ax:n.pos[0]-1,az:n.pos[2],bx:n.pos[0]+1,bz:n.pos[2],y0:n.pos[1]-1,y1:n.pos[1]+3},i=r.y0,a=r.y1;x.push(r);let o=(t?.leaves||[]).map(e=>({mesh:j(e.dyn),open:e.open*$})).filter(e=>e.mesh),s={object:M[e],open:!1,amt:0,blocker:r,setOpen(e,t=!1){if(this.open=!!e,e?(r.y0=1e9,r.y1=-1e9):(r.y0=i,r.y1=a),t){this.amt=+!!e,c();return}let n=this;O.add(function(e){let t=+!!n.open;return n.amt+=Math.sign(t-n.amt)*Math.min(Math.abs(t-n.amt),e/3.2),c(),n.amt===t})}},c=()=>{let e=Q(s.amt);for(let t of o)t.mesh.rotation.y=t.mesh.userData.yaw0+t.open*e};P[e]=s}let F=(e,t)=>{let n={a:0,v:0,kick(e){n.v+=e},update(r){let i=e*2*Math.PI;return n.v+=(-i*i*n.a-t*n.v)*r,n.a+=n.v*r,n.a}};return n},I=_.bell,L={ring(){}};if(I){let e=j(I.body),t=j(I.striker),n=I.contact??.035,r=F(.42,.5),i=-1;L.ring=()=>{let a=i<0;i=0,r.kick(.3*(r.a>.05?.4:1)),a&&O.add(a=>{if(i+=a,t&&(t.rotation.x=(.24*Math.exp(-.9*i)*Math.abs(Math.sin(2.4*i))-n*Math.exp(-4*i))*Math.min(1,i/.05+.4)),e){let t=0;for(let e=0;e<3;e++)t=r.update(Math.min(a,.05)/3);e.rotation.x=t}return i>14&&(i=-1,t&&(t.rotation.x=0),!0)})}}let R={};for(let e of[`low`,`mid`,`high`]){let t=(_.chimes?.[e]?.parts||[]).map(e=>j(e)).filter(Boolean),n=t.map((t,n)=>F(.55+.11*n+(e===`high`?.25:e===`mid`?.12:0),.45));R[e]={ring(){n.forEach((e,t)=>e.kick((t%2?-1:1)*(1.6+.5*Math.sin(t*2.1))))},parts:t,pends:n}}k.push((e,t)=>{for(let n in R){let r=R[n];r.parts.forEach((i,a)=>{let o=r.pends[a];o.v+=(Math.sin(t*.9+a*1.7+n.length)*.5+Math.sin(t*2.3+a)*.3)*.5*e;let s=o.update(Math.min(e,.05));i.rotation.x=s*.22*Math.cos(a*2.4),i.rotation.z=s*.22*Math.sin(a*2.4)})}});let z={strike(){}};if(_.woodfish){let e=j(_.woodfish.mallet);z.strike=()=>{if(!e)return;let t=0;O.add(n=>{t+=n/.42;let r=t<.35?t/.35:Math.max(0,1-(t-.35)/.65);return e.rotation.x=-.585*Math.sin(r*Math.PI*.5),t>=1})}}let B={};for(let e=1;e<=4;e++){let t=`incense`+e,n=_.incense?.[t],r=[],i=[];for(let e of n?.tips||[])r.push(E.add(e,q.EMBER,.035,0)),i.push(D.add(e,2.3,.035,0,.3));B[t]={object:M[t],lit:!1,light(e=!1){if(this.lit)return;this.lit=!0;let t=+!!e,n=()=>{r.forEach(e=>E.set(e,Math.min(1,t*2))),i.forEach(e=>D.set(e,t))};e?n():O.add(e=>(t=Math.min(1,t+e/3),n(),t>=1))}}}let V={pour(){}};if(_.tea){let e=j(_.tea.pot),t=(_.tea.steam||[]).map(e=>D.add(e,.55,.03,0,.6)),n=!1;V.pour=()=>{if(n||!e)return;n=!0;let r=0,i=e.userData.pos0,a=_.tea.lift||[.1,.12,0];O.add(o=>{r+=o/3.4;let s=Q(Math.min(1,r/.25))*(1-Q(Math.max(0,(r-.78)/.22))),c=Q(Math.min(1,Math.max(0,(r-.2)/.2)))*(1-Q(Math.max(0,(r-.66)/.14)));if(e.position.set(i.x+a[0]*s,i.y+a[1]*s,i.z+a[2]*s),e.rotation.z=-.75*c,r>.3&&t.forEach(e=>D.set(e,Math.min(1,(r-.3)*3))),r>=1){n=!1;let e=45;return O.add(n=>(e-=n,e<6&&t.forEach(t=>D.set(t,Math.max(0,e/6))),e<=0)),!0}return!1})}}for(let e of _.bob||[]){let t=j(e.dyn);t&&k.push((n,r)=>{t.position.y=t.userData.pos0.y+Math.sin(r*(e.rate||.9)+(e.ph||0))*(e.amp||.03),t.rotation.z=Math.sin(r*(e.rate||.9)*.7+1+(e.ph||0))*(e.roll||.02),t.rotation.x=Math.sin(r*(e.rate||.9)*.53+2)*(e.pitch||.012)})}for(let e of _.sway||[]){let t=j(e.dyn);t&&k.push((n,r)=>{let i=(Math.sin(r*(e.rate||1.1)+(e.ph||0))*.6+Math.sin(r*(e.rate||1.1)*2.3+1.3+(e.ph||0))*.4)*(e.amp||.05);e.axis===`z`?t.rotation.z=i:t.rotation.x=i,e.dip&&(t.rotation.x+=Math.max(0,Math.sin(r*.31+(e.ph||0))-.8)*e.dip*Math.sin(r*7))})}let H=(_.fills||[]).map(e=>({p:new b(...e.pos),r:e.r||4,c:e.c||[1,.56,.26],i:(e.i??1)*2.4,ch:e.ch??0,d:0})),U=p.uniforms.uFillP.value,W=p.uniforms.uFillC.value,G=()=>{for(let e of H)e.d=e.p.distanceTo(J.position)-e.r;H.sort((e,t)=>e.d-t.d);let e=Math.min(60,H.length>6?H[6].d:60);for(let t=0;t<6;t++){let n=H[t],r=n?Math.min(1,Math.max(0,(e-n.d)/5))*n.i*(m[n.ch]??1):0;r<=0?(U[t].set(0,-1e4,0,1),W[t].set(0,0,0)):(U[t].set(n.p.x,n.p.y,n.p.z,1/(n.r*n.r)),W[t].set(n.c[0]*r,n.c[1]*r,n.c[2]*r))}},K=[];if(f?.sites)for(let e in f.sites){let t=f.sites[e];for(let e=0;e<t.length;e+=6)K.push({min:[t[e],t[e+1],t[e+2]],max:[t[e+3],t[e+4],t[e+5]]})}for(let e of v)e.r>=.24&&e.y1-e.y0>=1.5&&K.push({x:e.x,z:e.z,r:e.r,y0:e.y0,y1:e.y1});let J=e.camera,Y=new b,X={objects:M,lamps:N,gates:P,bell:L,chimes:R,woodfish:z,incense:B,tea:V,colliders:v,walls:x,solids:K,group:h,materials:p,anchors:_,sites:C,tris:T,update(e,t){for(let e of C){let t=Y.copy(e.center).sub(J.position).length()-e.radius;e.detail.visible=t<e.dist;let n=t<me;if(n!==e.near){e.near=n;for(let t of e.nearCast)t.castShadow=n}}G();for(let n of k)n(e,t);for(let n of O)n(e,t)&&O.delete(n)}};e.add(X),t.arch=X;let Z=new URLSearchParams(location.search).get(`arch`);if(Z){let e=new Set(Z.split(`,`));if(e.has(`lit`))for(let e in N)N[e].setLit(!0,!0);if(e.has(`open`))for(let e in P)P[e].setOpen(!0,!0);if(e.has(`incense`))for(let e in B)B[e].light(!0);e.has(`tea`)&&V.pour()}}export{ge as default,fe as order,pe as shots};