import{Dt as e,an as t,ar as n,jr as r,on as i,pn as a,ta as o}from"./three.core-BF58tRDi.js";import{o as s,r as c,t as l}from"./globals-DAxe_AO1.js";import{t as u}from"./config-OM6otvPM.js";var d=1.25,f=.05,p=[`lotus`,`caltrop`,`iris`,`vetch`,`chrys`,`azalea`,`peach`,`apricot`,`orchid`,`hosta`,`dendro`,`daylily`],m={lotus:{petals:8,len:.115,width:.46,open:1.08,point:.75,wide:.86,notch:0,cup:.55,curl:-.25,whorl:.42,lip:0,heads:1,stem:.05,nod:0,leaves:3,leafLen:.21,leafWidth:1,leafStyle:2,centre:.26,inner:`#fff4ea`,outer:`#f29ab9`,accent:`#f6dc8e`,centreCol:`#e3b13a`,leaf:`#4f6d3c`,bud:`#b3a79a`},caltrop:{petals:4,len:.07,width:.74,open:1.3,point:.25,wide:1.1,notch:.1,cup:.25,curl:.1,whorl:0,lip:0,heads:2,stem:.04,nod:0,leaves:3,leafLen:.16,leafWidth:.95,leafStyle:2,centre:.3,inner:`#ffffff`,outer:`#f6f2de`,accent:`#ece3a0`,centreCol:`#e6c64a`,leaf:`#5b7340`,bud:`#a9b292`},iris:{petals:6,len:.1,width:.52,open:1.75,point:.55,wide:1.25,notch:0,cup:-.35,curl:.75,whorl:1.35,lip:0,heads:2,stem:.4,nod:.05,leaves:5,leafLen:.4,leafWidth:.045,leafStyle:0,centre:.16,inner:`#d9cef6`,outer:`#8672d8`,accent:`#f6dc6c`,centreCol:`#efe1a0`,leaf:`#5d7d49`,bud:`#77759c`},vetch:{petals:7,len:.052,width:.42,open:.78,point:.3,wide:1.2,notch:0,cup:.5,curl:.2,whorl:.3,lip:0,heads:3,stem:.16,nod:0,leaves:5,leafLen:.075,leafWidth:.52,leafStyle:3,centre:.25,inner:`#f8e2f4`,outer:`#c877d8`,accent:`#ffffff`,centreCol:`#f1e5c0`,leaf:`#5f7d42`,bud:`#938c9c`},chrys:{petals:8,len:.062,width:.32,open:1.5,point:.35,wide:1.25,notch:.06,cup:.15,curl:.2,whorl:0,lip:0,heads:3,stem:.27,nod:0,leaves:5,leafLen:.1,leafWidth:.48,leafStyle:3,centre:.42,inner:`#f8cf2e`,outer:`#eba90a`,accent:`#d98a08`,centreCol:`#b9740e`,leaf:`#587139`,bud:`#9c9966`},azalea:{petals:5,len:.08,width:.74,open:1.02,point:.4,wide:1.2,notch:0,cup:.3,curl:.5,whorl:0,lip:0,heads:3,stem:.26,nod:.3,leaves:5,leafLen:.09,leafWidth:.4,leafStyle:3,centre:.14,inner:`#fba9bd`,outer:`#e44d76`,accent:`#941c40`,centreCol:`#f8dccd`,leaf:`#3f5c36`,bud:`#96707e`,alt:[`#b3223a`,.25]},peach:{petals:5,len:.058,width:.86,open:1.25,point:.12,wide:1.2,notch:.12,cup:.4,curl:0,whorl:0,lip:0,heads:3,stem:.21,nod:.2,leaves:4,leafLen:.09,leafWidth:.26,leafStyle:3,centre:.2,inner:`#fddfe5`,outer:`#f58fa9`,accent:`#c93a5e`,centreCol:`#d85870`,leaf:`#5c713d`,bud:`#a88390`},apricot:{petals:5,len:.054,width:.9,open:1.3,point:.08,wide:1.2,notch:0,cup:.45,curl:0,whorl:0,lip:0,heads:3,stem:.21,nod:.2,leaves:4,leafLen:.085,leafWidth:.3,leafStyle:3,centre:.2,inner:`#fffaf4`,outer:`#fbd5d6`,accent:`#dc7c88`,centreCol:`#e7c058`,leaf:`#5f743f`,bud:`#b98a90`},orchid:{petals:6,len:.078,width:.32,open:1.35,point:.8,wide:.95,notch:0,cup:.3,curl:.3,whorl:0,lip:1,heads:2,stem:.3,nod:.45,leaves:5,leafLen:.26,leafWidth:.04,leafStyle:0,centre:.12,inner:`#f8f8d4`,outer:`#d3e698`,accent:`#b45cd4`,centreCol:`#f5e8a2`,leaf:`#45683b`,bud:`#98a17e`},hosta:{petals:6,len:.088,width:.44,open:.66,point:.6,wide:1.3,notch:0,cup:.5,curl:.9,whorl:0,lip:0,heads:3,stem:.36,nod:.55,leaves:5,leafLen:.19,leafWidth:.62,leafStyle:1,centre:.1,inner:`#ffffff`,outer:`#e9e2fd`,accent:`#c2aef0`,centreCol:`#f2e7aa`,leaf:`#507b46`,bud:`#a4a8a6`},dendro:{petals:6,len:.068,width:.44,open:1.3,point:.6,wide:1.05,notch:0,cup:.25,curl:.25,whorl:0,lip:1,heads:3,stem:.2,nod:.35,leaves:4,leafLen:.1,leafWidth:.3,leafStyle:3,centre:.12,inner:`#efc4f4`,outer:`#bb52d2`,accent:`#6c2090`,centreCol:`#f7d85c`,leaf:`#4f6d3f`,bud:`#9c80a4`},daylily:{petals:6,len:.11,width:.38,open:.95,point:.6,wide:1.2,notch:0,cup:.35,curl:1,whorl:.12,lip:0,heads:2,stem:.46,nod:.25,leaves:5,leafLen:.38,leafWidth:.045,leafStyle:0,centre:.1,inner:`#ffd86a`,outer:`#f59a20`,accent:`#d8601c`,centreCol:`#f7da74`,leaf:`#628545`,bud:`#a5986a`}},h=`
float lfWrap = 0.0;                  // 0 = plain Lambert .. 1 = fully wrapped
float lfTrans = 0.0;                 // amount of light that comes through from behind
vec3 lfTransCol = vec3( 0.0 );       // its colour (the pigment, a little more saturated)
`,g=null;function _(){if(g)return g;let e=s.lights_physical_pars_fragment,t=/float dotNL = saturate\( dot\( geometryNormal, directLight\.direction \) \);\s*vec3 irradiance = dotNL \* directLight\.color;/,n=`reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );`;return!t.test(e)||!e.includes(n)?(console.warn(`[life] thin-light chunk patch did not apply`),g=e):(e=e.replace(t,`float lfNL = dot( geometryNormal, directLight.direction );
	float dotNL = saturate( lfNL );
	vec3 irradiance = dotNL * directLight.color;
	vec3 lfIrrD = directLight.color * saturate( ( lfNL + lfWrap ) / ( 1.0 + lfWrap ) );
	float lfVL = saturate( dot( -geometryViewDir, directLight.direction ) );
	vec3 lfIrrT = directLight.color * ( 0.4 * saturate( 0.5 - lfNL * 0.5 ) + 0.6 * lfVL * lfVL ) * lfTrans;`),e=e.replace(n,`reflectedLight.directDiffuse += lfIrrD * diffuseBRDF * ( 1.0 - F ) + lfIrrT * BRDF_Lambert( lfTransCol );`),g=e)}function v(e){let t=e.onBeforeCompile;return e.onBeforeCompile=(n,r)=>{t.call(e,n,r),n.fragmentShader=n.fragmentShader.replace(`#include <lights_physical_pars_fragment>`,_())},e}var y=1024,b=16,x=`
attribute vec4 aA;       // birth position, birth time
attribute vec4 aB;       // velocity, life
attribute vec4 aC;       // colour, size (m)
attribute vec4 aD;       // type (0 petal, 1 spark), seed, spin, gravity
uniform vec2 uResolution;
uniform float uFxLit;
varying vec2 vUv; varying vec4 vCol; varying float vType;
${c}
void main(){
  float age = uTime - aA.w, k = age / max(aB.w, 1e-3), type = aD.x, seed = aD.y;
  if (age < 0.0 || k >= 1.0) { gl_Position = vec4(0.0, 0.0, -2.0, 1.0); return; }
  float drag = type < 0.5 ? 1.5 : 2.4;
  vec3 p = aA.xyz + aB.xyz * (1.0 - exp(-drag * age)) / drag;
  p.y += aD.w * age * age * 0.5;
  float fl = type < 0.5 ? 1.0 : 0.35;
  p.xz += uWind.xy * uWind.z * 0.35 * age * fl + vec2(sin(age * 2.7 + seed * 40.0), cos(age * 2.2 + seed * 71.0)) * 0.10 * min(age, 1.5) * fl;
  float fade = smoothstep(0.0, 0.06, k) * (1.0 - smoothstep(0.65, 1.0, k));
  float d = length(p - cameraPosition);
  float size = aC.w * (type < 0.5 ? 1.0 : mix(1.0, 0.45, k));
  if (type > 0.5) size = max(size, d * 1.6 / (projectionMatrix[1][1] * uResolution.y));
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vec2 q = position.xy * 2.0;
  if (type < 0.5) {
    float a = seed * 6.2832 + aD.z * age, c = cos(a), s = sin(a);
    q.x *= 0.25 + 0.75 * abs(cos(age * aD.z * 1.7 + seed * 9.0));
    q = vec2(c * q.x - s * q.y, s * q.x + c * q.y);
  }
  vec3 wp = p + (right * q.x + up * q.y) * size;
  vUv = position.xy * 2.0; vType = type;
  vec3 col = aC.rgb;
  if (type < 0.5) col = mdAtmosphere(col * uFxLit, wp, cameraPosition);
  vCol = vec4(col, fade);
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`,S=`
precision highp float;
varying vec2 vUv; varying vec4 vCol; varying float vType;
void main(){
  if (vType < 0.5) {
    float w = 0.62 * pow(max(1.0 - vUv.y * vUv.y, 0.0), 0.6);
    if (abs(vUv.x) > w) discard;
    gl_FragColor = vec4(vCol.rgb * (0.82 + 0.18 * vUv.y) * vCol.a, vCol.a);
  } else {
    float r = length(vUv); if (r > 1.0) discard;
    float core = exp(-r * r * 12.0), halo = exp(-r * r * 3.0) * (1.0 - r) * 0.3;
    gl_FragColor = vec4(vCol.rgb * (core * 1.5 + halo) * vCol.a, 0.0);
  }
}`,C=class{constructor(s){this.engine=s;let c=new r(1,1),d=new t;d.index=c.index,d.setAttribute(`position`,c.attributes.position);let f=this.data=new Float32Array(y*b);for(let e=0;e<y;e++)f[e*b+3]=1e9;let p=this.buf=new i(f,b,1);p.setUsage(e),this._ranges=[];for(let e=0;e<6;e++)this._ranges.push({start:0,count:0});this._nr=0,d.setAttribute(`aA`,new a(p,4,0)),d.setAttribute(`aB`,new a(p,4,4)),d.setAttribute(`aC`,new a(p,4,8)),d.setAttribute(`aD`,new a(p,4,12)),d.instanceCount=y,this.uLit={value:1.5};let m=new o({vertexShader:x,fragmentShader:S,uniforms:{...l.uniforms,uFxLit:this.uLit},transparent:!0,depthWrite:!1,fog:!1,side:2,blending:5,blendEquation:100,blendSrc:201,blendDst:205}),h=this.mesh=new n(d,m);h.layers.set(u.TRANS),h.frustumCulled=!1,h.matrixAutoUpdate=!1,h.name=`content:life-fx`,h.visible=!1,s.scene.add(h),this.cur=0,this.lo=y,this.hi=-1,this.until=-1,this.frame=-1}spawn(e,t,n,r,i,a,o,s,c,l,u,d,f=3,p=0,m=0){let h=this.cur,g=h*b,_=this.data,v=this.engine.time+m;this.cur=(h+1)%y,_[g]=t,_[g+1]=n,_[g+2]=r,_[g+3]=v,_[g+4]=i,_[g+5]=a,_[g+6]=o,_[g+7]=s,_[g+8]=c,_[g+9]=l,_[g+10]=u,_[g+11]=d,_[g+12]=e,_[g+13]=Math.random(),_[g+14]=f,_[g+15]=p,h<this.lo&&(this.lo=h),h>this.hi&&(this.hi=h),v+s>this.until&&(this.until=v+s)}puff(e,t,n,r,i,a,o,s=.022,c=.5){for(let l=0;l<r;l++){let r=Math.random()*6.2832,l=c*(.4+.6*Math.random());this.spawn(1,e,t,n,Math.cos(r)*l,.35+Math.random()*.7,Math.sin(r)*l,.7+Math.random()*.6,i,a,o,s,0,.5)}}ring(e,t,n,r,i,a,o,s,c=.05,l=1.2,u=0){let d=Math.random()*6.2832;for(let f=0;f<r;f++){let p=d+f/r*6.2832,m=i*(.75+.5*Math.random());this.spawn(u,e,t,n,Math.cos(p)*m,l*(.6+.8*Math.random()),Math.sin(p)*m,u===0?2+Math.random()*1.4:.9+Math.random()*.5,a,o,s,c*(.8+.5*Math.random()),2+Math.random()*4,u===0?-.9:.2,Math.random()*.12)}}flush(){if(this.hi>=0){let e=this.buf,t=e.updateRanges,n=this._ranges;if(t.length===0&&(this._nr=0),this._nr<n.length){let e=n[this._nr++];e.start=this.lo*b,e.count=(this.hi-this.lo+1)*b,t.push(e)}else{t.length=0;let e=n[0];e.start=0,e.count=y*b,t.push(e)}e.needsUpdate=!0,this.lo=y,this.hi=-1}this.mesh.visible=this.engine.time<this.until+.1}},w=null;function T(e){return w||=new C(e)}var E={ready:!1,patches:[],byId:new Map,combo:0,best:0,doneCount:0,isDone(e){let t=this.byId.get(e);return!!(t&&t.done)}};export{d as a,f as c,v as i,T as n,m as o,h as r,p as s,E as t};