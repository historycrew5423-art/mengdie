import{Dt as e,Lt as t,an as n,ar as r,in as i,io as a,qt as o,ro as s,ta as c}from"./three.core-BF58tRDi.js";import{a as l,i as u,o as d}from"./game-W5enpgwk.js";import{t as f}from"./text-B6j2B2P2.js";import{r as p,t as m}from"./globals-DAxe_AO1.js";import{t as h}from"./config-OM6otvPM.js";import{a as g,i as _,n as v,o as y,r as b,t as x}from"./glsl-BE9h3kjA.js";import{n as S}from"./snap-BWzZWSsl.js";import{a as C}from"./terrain-ClIc0rnk.js";var w=5,T=`
${p}
${x}
attribute vec2 aPart;                  // x: 0 core, 1 mote, 2 thread;  y: mote index
attribute vec4 iPos;                   // xyz world position, w seed (0..1)
attribute vec4 iFx;                    // x time of the last 'listen' answer, y time it appeared, z brightness, w unused
uniform vec3 uPlayer;                  // the wisp leans toward the player when close
uniform vec4 uTune;                    // x core gain, y halo gain, z thread gain, w thread height (m)
varying vec2 vP; varying float vKind; varying vec4 vI; varying float vViewZ;
void main(){
  float seed = iPos.w, kind = aPart.x;
  vec3 c = iPos.xyz;
  vec3 toP = uPlayer - c; float dp = length(toP);
  float near = 1.0 - smoothstep(2.0, 6.0, dp);
  c += toP / max(dp, 1e-3) * near * min(0.55, dp * 0.3);
  c.y += sin(uTime * 0.83 + seed * 40.0) * 0.09;
  float breathe = 0.5 + 0.5 * sin(uTime * 1.5708 + seed * 6.2832);            // one breath every four seconds
  float fl = uTime - iFx.x;
  float flash = fl > 0.0 ? smoothstep(0.0, 0.14, fl) * exp(-fl * 1.5) * 1.2 : 0.0;   // answering a 'listen'
  float bright = iFx.z * smoothstep(0.0, 0.9, uTime - iFx.y);
  vec3 camTo = c - cameraPosition; float dist = length(camTo);
  float T = mix(1.0, mdTrans(c), 0.92);
  vec4 mv; vI = vec4(0.0); float cull = 0.0;
  if (kind < 0.5) {
    float r = 0.46 + 0.05 * breathe + 0.10 * near + 0.3 * flash;
    float rad = max(r, dist * 0.0125);                                         // never smaller than a soft star
    mv = viewMatrix * vec4(c, 1.0); mv.xy += position.xy * rad;
    vI = vec4((0.74 + 0.26 * breathe + 0.45 * near + 1.3 * flash) * bright * T, clamp(r / rad, 0.0, 1.0), 0.0, 0.0);
  } else if (kind < 1.5) {
    float s = seed * 7.0 + aPart.y * 1.7;
    float ang = uTime * (0.5 + 0.3 * fract(s * 3.1)) * (1.0 + near * 1.4) + s * 2.4;
    float orad = (0.40 + 0.24 * fract(s * 5.3)) * (1.0 - 0.3 * near) * (1.0 + 0.8 * flash);
    vec3 ax = normalize(vec3(sin(s * 1.3), 0.45 + 0.5 * cos(s * 2.1), cos(s * 1.7)));
    vec3 u = normalize(cross(ax, vec3(0.13, 1.0, 0.07))), v = cross(ax, u);
    vec3 mp = c + (u * cos(ang) + v * sin(ang)) * orad;
    float fade = 1.0 - smoothstep(38.0, 80.0, dist);
    float rad = max(0.05, dist * 0.0014);
    mv = viewMatrix * vec4(mp, 1.0); mv.xy += position.xy * rad;
    float tw = 0.7 + 0.3 * sin(uTime * (3.0 + fract(s) * 2.0) + s * 9.0);
    vI = vec4((0.8 + 0.6 * near + flash) * tw * fade * bright * T, 0.0, 0.0, 0.0);
    if (fade <= 0.0) cull = 1.0;
  } else {
    float t = position.y * 0.5 + 0.5;
    float vis = max(smoothstep(24.0, 70.0, dist) * (1.0 - smoothstep(260.0, 340.0, dist)), min(flash * 1.4, 1.0));
    float H = uTune.w * mix(0.55, 1.25, smoothstep(30.0, 180.0, dist)) * (1.0 + 1.2 * flash);
    vec3 wp = c + vec3(0.0, mix(-0.3, H, t), 0.0);
    vec3 side = normalize(cross(vec3(0.0, 1.0, 0.0), camTo));
    wp += side * position.x * max(0.07, dist * 0.0034) * (1.0 + 0.7 * flash);  // a few pixels wide at any range: thinner would shimmer away
    mv = viewMatrix * vec4(wp, 1.0);
    vI = vec4(vis * bright * T * (0.75 + 0.25 * breathe + 2.4 * flash), t, seed, 0.0);
    if (vis <= 0.0) cull = 1.0;
  }
  vP = position.xy; vKind = kind; vViewZ = -mv.z;
  gl_Position = cull > 0.5 ? vec4(2.0, 2.0, 2.0, 1.0) : projectionMatrix * mv;
}`,E=`
${g}
uniform vec4 uTune; uniform float uTime;
varying vec2 vP; varying float vKind; varying vec4 vI; varying float vViewZ;
const vec3 WHITE = vec3(1.0, 0.93, 0.78), GOLD = vec3(1.0, 0.70, 0.34), AMBER = vec3(0.95, 0.56, 0.20);
void main(){
  if (vKind < 0.5) {
    float r2 = dot(vP, vP);
    if (r2 > 1.0) discard;
    float far = vI.y;                                                          // 1 true size .. 0 clamped to the minimum screen size
    float core = exp(-r2 * mix(26.0, 90.0, far));                              // the hot heart
    float glow = exp(-r2 * mix(9.0, 17.0, far));                               // its soft body
    float halo = max(exp(-r2 * 4.2) - 0.015, 0.0);                             // a faint aura
    float soft = softFade(vViewZ, 0.6);
    vec3 col = WHITE * core * uTune.x * mix(1.2, 1.0, far) + GOLD * (glow * 0.85 + halo * uTune.y);
    // the body is laid over the scene rather than added to it: gold still shows on the white statue and on cloud
    float a = clamp(glow * 0.72 + halo * 0.14, 0.0, 0.8) * min(vI.x, 1.0);
    gl_FragColor = vec4(col * vI.x * soft, a * soft);
  } else if (vKind < 1.5) {
    float r2 = dot(vP, vP);
    if (r2 > 1.0) discard;
    float f = (exp(-r2 * 9.0) * 1.5 + exp(-r2 * 2.5) * 0.22) * vI.x * softFade(vViewZ, 0.2);
    gl_FragColor = vec4(mix(GOLD, WHITE, 0.6) * f * 1.5, f * 0.3);
  } else {
    float t = vI.y, x = 1.0 - abs(vP.x);
    float prof = smoothstep(0.0, 0.03, t) * pow(1.0 - t, 1.6);
    prof *= 0.82 + 0.18 * sin(t * 26.0 - uTime * 1.7 + vI.z * 40.0);          // light climbing the thread, slowly
    float f = x * x * (3.0 - 2.0 * x) * prof * vI.x * softFade(vViewZ, 0.5);
    gl_FragColor = vec4(mix(WHITE, GOLD, 0.25 + t * 0.6) * f * uTune.z, f * 0.5);
  }
}`,D=`
${p}
${x}
attribute vec4 iBirth;                 // xyz start, w birth time
attribute vec4 iVel;                   // xyz burst velocity, w life (s)
attribute vec4 iLook;                  // x size (m), y brightness, z seed, w kind (0 mote that streams into the player, 1 ring flash)
uniform vec3 uTarget;
varying vec2 vP; varying vec3 vI; varying float vViewZ;
void main(){
  float age = uTime - iBirth.w, life = max(iVel.w, 1e-3), k = age / life;
  float on = step(0.0, age) * step(k, 1.0);
  vec3 p; float rad, a;
  if (iLook.w < 0.5) {
    float s = iLook.z * 37.0;
    p = iBirth.xyz + iVel.xyz * (1.0 - exp(-age * 4.5)) / 4.5;                 // the burst, braking in the air
    p += vec3(sin(age * 5.0 + s), cos(age * 4.0 + s * 1.7), sin(age * 4.6 + s * 2.3)) * 0.10 * min(age * 2.0, 1.0);
    float h = smoothstep(0.22, 1.0, k); h = h * h * (3.0 - 2.0 * h);
    p = mix(p, uTarget, h);                                                    // then it streams into the player
    rad = iLook.x * (1.0 - 0.6 * h);
    a = smoothstep(0.0, 0.05, k) * (1.0 - smoothstep(0.86, 1.0, k)) * (0.75 + 0.25 * sin(age * 23.0 + s));
  } else {
    p = iBirth.xyz;
    rad = iLook.x * (0.25 + 0.75 * (1.0 - exp(-k * 3.2)));
    a = (1.0 - k) * (1.0 - k);
  }
  vec4 mv = viewMatrix * vec4(p, 1.0);
  rad = max(rad, -mv.z * 0.0012);
  mv.xy += position.xy * rad;
  vP = position.xy; vViewZ = -mv.z;
  vI = vec3(iLook.y * a * mix(1.0, mdTrans(p), 0.9), iLook.w, k);
  gl_Position = on > 0.5 ? projectionMatrix * mv : vec4(2.0, 2.0, 2.0, 1.0);
}`,O=`
${g}
varying vec2 vP; varying vec3 vI; varying float vViewZ;
void main(){
  float r2 = dot(vP, vP);
  if (r2 > 1.0) discard;
  float f;
  if (vI.y < 0.5) f = exp(-r2 * 8.0) * 1.6 + exp(-r2 * 2.4) * 0.25;
  else { float r = sqrt(r2), w = mix(0.10, 0.05, vI.z); f = exp(-pow((r - 0.86) / w, 2.0)) * 0.55 + exp(-r2 * 3.0) * 0.5 * (1.0 - vI.z); }
  f *= vI.x * softFade(vViewZ, 0.25);
  gl_FragColor = vec4(vec3(1.0, 0.88, 0.62) * f, f * 0.08);
}`,k=192,A=class{constructor(l,u){this.engine=l,this.max=u,this.count=0,this.depth={value:null};let d=[],f=[],p=[],g=(e,t,n=1,r=1)=>{let i=d.length/3;for(let i=0;i<4;i++)d.push(_.pos[i*3]*n,_.pos[i*3+1]*r,0),f.push(e,t);for(let e of _.idx)p.push(i+e)};g(2,0),g(0,0);for(let e=0;e<w;e++)g(1,e);let v=this.geo=new n;v.setAttribute(`position`,new t(d,3)),v.setAttribute(`aPart`,new t(f,2)),v.setIndex(p),this.iPos=new i(new Float32Array(u*4),4).setUsage(e),this.iFx=new i(new Float32Array(u*4),4).setUsage(e),v.setAttribute(`iPos`,this.iPos),v.setAttribute(`iFx`,this.iFx),v.instanceCount=0,this.uPlayer={value:new s(0,-999,0)},this.uTune={value:new a(2.7,.32,1.25,15)},this.mat=new c({vertexShader:T,fragmentShader:E,...b,uniforms:{...m.uniforms,tDepth:this.depth,uPlayer:this.uPlayer,uTune:this.uTune}}),this.mesh=new r(v,this.mat);let y=this.bgeo=new n;y.setAttribute(`position`,new t(_.pos,3)),y.setIndex(_.idx);let x=t=>{let n=new i(new Float32Array(768),4).setUsage(e);return y.setAttribute(t,n),n};this.bBirth=x(`iBirth`),this.bVel=x(`iVel`),this.bLook=x(`iLook`);for(let e=0;e<k;e++)this.bBirth.array[e*4+3]=-1e6;y.instanceCount=k,this.uTarget={value:new s},this.bmat=new c({vertexShader:D,fragmentShader:O,...b,uniforms:{...m.uniforms,tDepth:this.depth,uTarget:this.uTarget}}),this.burstMesh=new r(y,this.bmat),this.bNext=0,this.bUntil=-1,this.group=new o,this.group.name=`content:lights`;let S=30;for(let e of[this.mesh,this.burstMesh])e.frustumCulled=!1,e.layers.set(h.TRANS),e.renderOrder=S++,this.group.add(e);this.burstMesh.visible=!1,l.scene.add(this.group)}add(e,t,n,r,i=-100){let a=this.count++;return this.iPos.array.set([e,t,n,r],a*4),this.iFx.array.set([-1e6,i,1,0],a*4),this.iPos.needsUpdate=this.iFx.needsUpdate=!0,this.geo.instanceCount=this.count,a}remove(e){let t=--this.count;return e!==t&&(this.iPos.array.copyWithin(e*4,t*4,t*4+4),this.iFx.array.copyWithin(e*4,t*4,t*4+4)),this.iPos.needsUpdate=this.iFx.needsUpdate=!0,this.geo.instanceCount=this.count,e===t?-1:t}move(e,t,n,r){this.iPos.array.set([t,n,r],e*4),this.iPos.needsUpdate=!0}flash(e,t){this.iFx.array[e*4]=t,this.iFx.needsUpdate=!0}burst(e,t,n,r,i=null,a=16){let o=(e,t,n,i,a,o,s,c,l,u)=>{let d=this.bNext;this.bNext=(this.bNext+1)%k,this.bBirth.array.set([e,t,n,r],d*4),this.bVel.array.set([i,a,o,s],d*4),this.bLook.array.set([c,l,Math.random(),u],d*4),this.bUntil=Math.max(this.bUntil,r+s)};o(e,t,n,0,0,0,.55,2.3,2.2,1),o(e,t,n,0,0,0,.3,1.2,5,0);for(let r=0;r<a;r++){let r=Math.random()*2-1,a=Math.random()*6.2832,s=Math.sqrt(1-r*r),c=3.5+Math.random()*5;o(e,t,n,s*Math.cos(a)*c+(i?i.x*.35:0),r*c+1.2+(i?i.y*.35:0),s*Math.sin(a)*c+(i?i.z*.35:0),.75+Math.random()*.55,.07+Math.random()*.06,2.4+Math.random()*2.2,0)}this.bBirth.needsUpdate=this.bVel.needsUpdate=this.bLook.needsUpdate=!0,this.burstMesh.visible=!0}update(e,t,n){this.depth.value=this.engine.rtOpaque?.depthTexture||null,this.uPlayer.value.copy(t),this.uTarget.value.copy(n),this.mesh.visible=this.count>0,this.burstMesh.visible&&e>this.bUntil+.05&&(this.burstMesh.visible=!1)}dispose(){this.engine.scene.remove(this.group),this.geo.dispose(),this.bgeo.dispose(),this.mat.dispose(),this.bmat.dispose()}},j=1.6,M=2.4,N=[6,4.4,3],P=120,F=5,I=6,L=f.lights,R=null,z=null,B=null,V=[],H=new Set,U=[],W=new s,G=new s,K=!1,q=0,J=-1e9,Y=-1e9,X=[];function Z(e,t,n,r,i,a,o){let s=i-t,c=a-n,l=o-r,u=s*s+c*c+l*l,d=u>1e-9?Math.max(0,Math.min(1,((e[0]-t)*s+(e[1]-n)*c+(e[2]-r)*l)/u)):0;return Math.hypot(e[0]-t-s*d,e[1]-n-c*d,e[2]-r-l*d)}function Q(e,t=!1){let n=e.d,r=e.p,i=v(r[0],r[1],r[2]);H.add(n.id),R.save.set(`got`,[...H]);let a=e.slot,o=z.remove(a);if(o>=0){let e=V[o];e.slot=a,V[a]=e}V.length=z.count,t||(z.burst(r[0],r[1],r[2],q,R.player.form===`human`?null:R.player.vel),B([`light`,`collect`],{pos:i})),R.reward(1,i,`light`);let s=n.n?L.names[n.n]:null;R.events.emit(`light:picked`,{id:n.id,pos:i,tier:l[n.t],region:n.r,name:s,found:H.size,total:u.length}),!t&&s&&R.toast(L.named.replace(`{name}`,s)),!t&&V.length===0&&U.push({at:q+3,fn:()=>R.toast(L.all)})}function $(){if(!R||q<J+I)return;J=q;let e=R.player.pos,t=[];for(let n of V){let r=Math.hypot(n.p[0]-e.x,n.p[1]-e.y,n.p[2]-e.z);r<=P&&t.push([r,n])}t.sort((e,t)=>e[0]-t[0]),t.length?(t.slice(0,F).forEach(([,e],t)=>{U.push({at:q+.35+t*.24,fn:()=>{if(H.has(e.d.id))return;z.flash(e.slot,q);let t=R.player.pos,n=e.p[0]-t.x,r=e.p[1]-t.y,i=e.p[2]-t.z,a=Math.hypot(n,r,i)||1,o=Math.min(a,9),s=Math.min(a/P,1);B([`listen_reply`,`chime_high`],{pos:v(t.x+n/a*o,t.y+r/a*o,t.z+i/a*o),gain:.5-.3*s,pitch:1.35-.6*s})}})}),R.events.emit(`light:answer`,{count:Math.min(t.length,F),nearest:t[0][0]})):U.push({at:q+.9,fn:()=>R.toast(V.length?L.listenNone:L.listenAll)})}var ee={id:`lights`,init(e){R=e,B=y(R),V.length=0,H.clear(),U.length=0,K=!1,J=-1e9;for(let e of R.save.get(`got`,[]))H.add(e);z=new A(R.engine,u.length);for(let e of u){if(H.has(e.id))continue;let t=e.p.slice(),n=z.add(t[0],t[1],t[2],R.rng(`light:`+e.id)());V[n]={d:e,p:t,slot:n,stage:0}}X=V.filter(e=>e.d.s===`sage`),R.events.on(`listen`,$)},update(e,t){if(!R)return;q=R.engine.time??t;let n=R.player,r=n.pos,i=n.form===`human`;if(X.length){let e=X.pop();try{!H.has(e.d.id)&&S(e.p,{hover:e.d.h??null})>.05&&z.move(e.slot,e.p[0],e.p[1],e.p[2])}catch{X.length=0}}let a,o,s,c,l,u,d;if(i){let e=C(r.x,r.z,r.y-.85,.6),t=e!==null&&r.y-e>-.3&&r.y-e<2.1?e:r.y-1.7;a=c=r.x,s=u=r.z,o=t+.5,l=t+1.75,d=j,G.set(r.x,t+1.25,r.z)}else c=r.x,l=r.y,u=r.z,d=M,(K?W.distanceTo(r):1e9)<12?(a=W.x,o=W.y,s=W.z):(a=c,o=l,s=u),G.set(r.x,r.y,r.z);W.set(r.x,r.y,r.z),K=!0;for(let e=V.length-1;e>=0;e--){let t=V[e],n=t.p,i=n[0]-r.x,f=n[1]-r.y,p=n[2]-r.z;if(i*i+f*f+p*p>900){t.stage=0;continue}let m=Z(n,a,o,s,c,l,u);if(m<=d)Q(t);else if(m>8)t.stage=0;else if(t.stage<3&&m<N[t.stage]){for(;t.stage<3&&m<N[t.stage];)t.stage++;q-Y>.1&&(Y=q,B([`chime_low`,`chime_mid`,`chime_high`][t.stage-1],{pos:v(n[0],n[1],n[2]),gain:.16+.05*t.stage,pitch:1.5}))}}for(let e=U.length-1;e>=0;e--)U[e].at<=q&&U.splice(e,1)[0].fn();z.update(q,r,G)},journal(){return{label:L.journal,done:u.length-V.length,total:u.length}},debugComplete(){if(!R)return;let e=d[d.length-1],t=Math.max(R.player.lights||0,u.length-V.length);for(let n of[...V].sort((e,t)=>e.d.t-t.d.t||(e.d.id<t.d.id?-1:1))){if(t>=e)break;Q(n,!0),t++}},remaining(){return V.map(e=>({id:e.d.id,p:e.p.slice(),tier:l[e.d.t],region:e.d.r}))},listenWait(){return Math.max(0,J+I-q)},get drawCalls(){return z?1+ +!!z.burstMesh.visible:0}};export{ee as default};