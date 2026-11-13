import{Dt as e,Lt as t,Wr as n,an as r,ar as i,in as a,jt as o,qt as s,ro as c,ta as l}from"./three.core-BF58tRDi.js";import{i as u}from"./layout-C2B8gIUV.js";import{r as d,t as f}from"./globals-DAxe_AO1.js";import{t as p}from"./config-OM6otvPM.js";var m=`
vec3 qrot(vec4 q, vec3 v){ return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v); }
`,h=`
float mdTrans(vec3 wp){
  vec3 v = wp - cameraPosition; float d = length(v);
  return 1.0 - min(1.0 - exp(-mdFogOD(cameraPosition, v / max(d, 1e-4), d)), uFogMax);
}
`,g=`
uniform sampler2D tDepth; uniform vec2 uResolution; uniform vec2 uProjCD;
float softFade(float viewZ, float range){
  float z = texture2D(tDepth, gl_FragCoord.xy / uResolution).r;
  float lin = z <= 0.0 ? 1e6 : uProjCD.y / (z + uProjCD.x);
  return clamp((lin - viewZ) / range, 0.0, 1.0);
}
`,_=`
${d}
${m}
${h}
attribute float aSide;                 // -1 / +1 wing, 0 body
attribute vec3 iPos; attribute vec4 iQuat;
attribute vec4 iWing;                  // x wing angle (rad, 0 = flat, + = up), y lagging angle, z scale, w alpha
attribute vec4 iMisc;                  // x seed, y glow, z tint (0 gold .. 1 pale jade), w unused
varying vec2 vUv; varying float vSide; varying vec4 vMisc; varying float vAlpha; varying float vTrans; varying vec3 vN; varying vec3 vV;
void main(){
  vec3 p = position; vec3 n = vec3(0.0, 1.0, 0.0);
  if (aSide != 0.0) {
    float u = uv.x;
    float th = mix(iWing.x, iWing.y, u * u * 0.85);                       // the tip trails the root
    th = mix(th, iWing.y, (1.0 - smoothstep(0.28, 0.5, uv.y)) * 0.3);     // so does the hindwing
    th += sin(uv.y * 5.0 + iMisc.x * 9.0) * 0.05;                         // a little twist
    float r = abs(p.x), c = cos(th), s = sin(th);
    p = vec3(aSide * r * c, r * s + 0.012, p.z - r * 0.04 * s);
    n = vec3(-aSide * s, c, 0.0);
  }
  p *= iWing.z;
  vec3 wp = iPos + qrot(iQuat, p);
  vN = qrot(iQuat, n); vV = cameraPosition - wp;
  vUv = uv; vSide = aSide; vMisc = iMisc; vAlpha = iWing.w; vTrans = mdTrans(wp);
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`,v=`
${d}
varying vec2 vUv; varying float vSide; varying vec4 vMisc; varying float vAlpha; varying float vTrans; varying vec3 vN; varying vec3 vV;
uniform float uGain;
float ell(vec2 p, vec2 c, vec2 r, float a){ vec2 d = p - c; float cs = cos(a), sn = sin(a); d = vec2(d.x * cs + d.y * sn, -d.x * sn + d.y * cs) / r; float l = length(d); return (l - 1.0) * min(r.x, r.y) / max(l, 0.35); }
void main(){
  vec3 col; float a;
  if (vSide == 0.0) {
    // body: a soft dark-amber spindle with a bright thorax
    float w = 1.0 - abs(vUv.x - 0.5) * 2.0, l = vUv.y;
    float prof = smoothstep(0.0, 0.18, l) * smoothstep(1.0, 0.72, l) * (0.55 + 0.45 * smoothstep(0.35, 0.7, l));
    a = smoothstep(0.0, 0.5, w * prof * 1.6) * vAlpha;
    col = mix(vec3(0.55, 0.36, 0.14), vec3(1.0, 0.86, 0.55), smoothstep(0.5, 0.8, l)) * (0.8 + 1.4 * vMisc.y);
  } else {
    vec2 p = vUv;
    // silhouette: forewing (long, swept to the front) + hindwing (round, with a small tail lobe)
    float dF = ell(p, vec2(0.50, 0.70), vec2(0.515, 0.215), 0.34);
    float dH = ell(p, vec2(0.36, 0.34), vec2(0.36, 0.265), -0.38);
    float dT = ell(p, vec2(0.60, 0.10), vec2(0.10, 0.07), -0.9);
    float d = min(min(dF, dH), dT);
    // scalloped margin
    float ang = atan(p.y - 0.5, p.x + 0.02), rad = length(p - vec2(-0.02, 0.5));
    d += (0.5 - 0.5 * cos(ang * 22.0)) * 0.012 * smoothstep(0.45, 0.9, rad);
    float aa = fwidth(d) * 1.2 + 1e-4;
    float mask = 1.0 - smoothstep(-aa, aa, d);
    if (mask < 0.004) discard;
    float edge = smoothstep(-0.085, 0.0, d);                              // 0 inside .. 1 on the rim
    // veins fanning from the root, and the two discal cells
    float vein = smoothstep(0.80, 1.0, abs(sin(ang * 13.0 + (p.y > 0.5 ? 0.6 : 2.1)))) * smoothstep(0.16, 0.34, rad) * (1.0 - edge * 0.5);
    float cell = smoothstep(0.02, 0.0, abs(length((p - vec2(0.2, 0.62)) * vec2(1.0, 1.9)) - 0.15)) + smoothstep(0.02, 0.0, abs(length((p - vec2(0.17, 0.4)) * vec2(1.0, 1.5)) - 0.12));
    float dust = texture2D(uNoiseTex, p * 0.9 + vMisc.x).b;
    float sparkle = pow(texture2D(uNoiseTex, p * 5.0 + vMisc.x * 3.7).r, 9.0);
    vec3 gold = vec3(1.0, 0.52, 0.13), pale = vec3(1.0, 0.86, 0.56), jade = vec3(0.62, 0.98, 0.80);
    vec3 inner = mix(gold, mix(vec3(0.42, 0.86, 0.66), gold, 0.25), vMisc.z);
    vec3 outer = mix(pale, jade, vMisc.z);
    col = mix(inner, outer, smoothstep(0.38, 1.02, rad + (dust - 0.5) * 0.25));
    col *= 0.62 + 0.38 * dust;
    col = mix(col, col * 0.42, clamp(vein * 0.75 + cell * 0.5, 0.0, 1.0));                 // darker veins
    col += outer * edge * edge * 0.9;                                                     // luminous rim
    col += vec3(1.0, 0.95, 0.85) * sparkle * 1.6;
    // light: self-luminous, plus a sheen where the membrane catches the sun or is seen against it
    vec3 N = normalize(vN), V = normalize(vV);
    float facing = abs(dot(N, V));
    float sun = abs(dot(N, uSunDirW));
    col *= (0.70 + 0.30 * sun + 0.35 * pow(1.0 - facing, 2.0)) * (1.0 + 1.3 * vMisc.y);
    a = mask * vAlpha * (0.80 + 0.20 * edge);
  }
  col *= uGain * vTrans;
  gl_FragColor = vec4(col * a, a * 0.9);                                    // premultiplied, slightly additive
}`,y=`
${d}
${h}
attribute vec3 iPos; attribute vec4 iGlow;       // x radius (m), y intensity, z tint, w flicker seed
varying vec2 vP; varying float vI; varying float vTint; varying float vViewZ; varying float vFar;
void main(){
  vec4 mv = viewMatrix * vec4(iPos, 1.0);
  float dist = -mv.z;
  // never smaller than a few pixels: far away a butterfly stays a soft star
  float rad = max(iGlow.x, dist * 0.016);
  vFar = clamp(iGlow.x / max(rad, 1e-4), 0.0, 1.0);
  mv.xy += position.xy * rad;
  mv.z += min(0.25, rad * 0.5);                  // pull towards the camera so it sits in front of its own wings
  vP = position.xy; vTint = iGlow.z; vViewZ = -mv.z;
  float flick = 0.88 + 0.12 * sin(uTime * 7.0 + iGlow.w * 40.0);
  vI = iGlow.y * flick * mdTrans(iPos);
  gl_Position = projectionMatrix * mv;
}`,b=`
${g}
varying vec2 vP; varying float vI; varying float vTint; varying float vViewZ; varying float vFar;
void main(){
  float r2 = dot(vP, vP);
  if (r2 > 1.0) discard;
  float core = exp(-r2 * 60.0), halo = exp(-r2 * 6.0) - 0.0025;
  float f = max(core * mix(2.6, 0.4, vFar) + halo * 0.11 * vFar, 0.0) * vI * softFade(vViewZ, 0.35);
  vec3 col = mix(vec3(1.0, 0.70, 0.34), vec3(0.62, 1.0, 0.82), vTint);
  gl_FragColor = vec4(col * f, 0.0);
}`,x=`
${d}
${h}
attribute vec4 iBirth;                 // xyz start position, w birth time
attribute vec4 iVel;                   // xyz velocity, w life (s)
attribute vec4 iLook;                  // x size (m), y brightness, z tint, w seed
varying vec2 vP; varying float vI; varying float vTint; varying float vViewZ;
void main(){
  float age = uTime - iBirth.w, life = max(iVel.w, 1e-3), k = age / life;
  vec3 p = iBirth.xyz + iVel.xyz * age * (1.0 - 0.35 * k);
  float s = iLook.w * 31.0;
  p += vec3(sin(age * 1.9 + s), 0.6 * sin(age * 1.3 + s * 1.7), cos(age * 1.6 + s * 2.3)) * 0.07 * min(age, 1.5);
  p.y += -0.05 * age * age * 0.35;
  float on = step(0.0, age) * step(k, 1.0);
  float a = smoothstep(0.0, 0.12, k) * (1.0 - k) * (1.0 - k) * on;
  float tw = 0.65 + 0.35 * sin(age * 11.0 + s);
  vec4 mv = viewMatrix * vec4(p, 1.0);
  float rad = max(iLook.x * (0.6 + 0.4 * (1.0 - k)), -mv.z * 0.0011);
  mv.xy += position.xy * rad;
  vP = position.xy; vTint = iLook.z; vViewZ = -mv.z;
  vI = iLook.y * a * tw * mdTrans(p);
  gl_Position = on > 0.5 ? projectionMatrix * mv : vec4(2.0, 2.0, 2.0, 1.0);
}`,S=`
${g}
varying vec2 vP; varying float vI; varying float vTint; varying float vViewZ;
void main(){
  float r2 = dot(vP, vP);
  if (r2 > 1.0) discard;
  float f = (exp(-r2 * 9.0) * 1.3 + exp(-r2 * 2.5) * 0.25) * vI * softFade(vViewZ, 0.15);
  vec3 col = mix(vec3(1.0, 0.84, 0.52), vec3(0.75, 1.0, 0.88), vTint);
  gl_FragColor = vec4(col * f, 0.0);
}`,C=1024,w=Math.PI*2,T=(e,t,n)=>e<t?t:e>n?n:e,E=(e,t,n)=>{let r=T((n-e)/(t-e),0,1);return r*r*(3-2*r)},D=e=>{let t=Math.sin(e*127.1+311.7)*43758.5453;return t-Math.floor(t)},O=[[30,3.4,1.75],[-34,3.8,2.1],[17,5.2,2.5],[-19,5.6,1.5],[42,2.9,2.3],[-46,3.1,1.45],[57,3.7,1.95],[-61,4,2.4],[9,6.6,2.75],[-10,7,2],[74,2.7,1.6],[-80,2.9,2.2]],k=new n,A=new o(0,0,0,`YXZ`),j=new c,M=new c,N=new c;new c;function P(){let e=[],n=[],i=[],a=[];for(let t of[-1,1]){let r=e.length/3;for(let r=0;r<=4;r++)for(let a=0;a<=6;a++){let o=a/6,s=r/4;e.push(t*o,0,.5-s),n.push(o,s),i.push(t)}for(let e=0;e<4;e++)for(let t=0;t<6;t++){let n=r+e*7+t,i=n+1,o=n+6+1,s=o+1;a.push(n,o,i,i,o,s)}}for(let[t,r]of[[1,0],[0,1]]){let o=e.length/3,s=.055;for(let[a,o]of[[-1,0],[1,0],[-1,1],[1,1]])e.push(t*a*s,r*a*s,.5-o*.92),n.push(a*.5+.5,o),i.push(0);a.push(o,o+2,o+1,o+1,o+2,o+3)}let o=new r;return o.setAttribute(`position`,new t(e,3)),o.setAttribute(`uv`,new t(n,2)),o.setAttribute(`aSide`,new t(i,1)),o.setIndex(a),o}function F(){let e=new r;return e.setAttribute(`position`,new t([-1,-1,0,1,-1,0,-1,1,0,1,1,0],3)),e.setIndex([0,1,2,2,1,3]),e}var I=(t,n,r,i)=>{let o=new a(new Float32Array(r*i),i);return o.setUsage(e),t.setAttribute(n,o),o},L=class{constructor(e,t){this.engine=e,this.flies=[],this.byId={},this.player=null,this.groundAt=null,this._pPrev=new c,this._pVel=new c,this._pHas=!1,this.time=0,this.slotYaw=0,this.onArrive=null;let n=0;for(let e of t){let t=this._make(e.id,n++);t.home.fromArray(e.pos),t.p.copy(t.home),t.region=e.region,t.after=e.after||null,t.state=e.after?`hidden`:`perched`,this.flies.push(t),this.byId[e.id]=t}let r=this.guideFly=this._make(`guide`,n++);r.state=`hidden`,r.tint=1,r.size=.085,r.isGuide=!0,this.all=[...this.flies,r];let a=this.all.length,o={value:null};this._depth=o;let u=P();this.aPos=I(u,`iPos`,a,3),this.aQuat=I(u,`iQuat`,a,4),this.aWing=I(u,`iWing`,a,4),this.aMisc=I(u,`iMisc`,a,4);let d={transparent:!0,depthWrite:!1,fog:!1,blending:5,blendEquation:100,blendSrc:201,blendDst:205},m={transparent:!0,depthWrite:!1,fog:!1,blending:5,blendEquation:100,blendSrc:201,blendDst:201};this.wingMat=new l({vertexShader:_,fragmentShader:v,side:2,...d,uniforms:{...f.uniforms,uGain:{value:2.3}}}),this.wings=new i(u,this.wingMat);let h=F();this.aGPos=I(h,`iPos`,a,3),this.aGlow=I(h,`iGlow`,a,4),this.glowMat=new l({vertexShader:y,fragmentShader:b,...m,uniforms:{...f.uniforms,tDepth:o}}),this.glows=new i(h,this.glowMat);let g=F();this.aBirth=I(g,`iBirth`,C,4),this.aVel=I(g,`iVel`,C,4),this.aLook=I(g,`iLook`,C,4);for(let e=0;e<C;e++)this.aBirth.array[e*4+3]=-1e6;this.moteHead=0,this.moteDirty=!1,this.moteMat=new l({vertexShader:x,fragmentShader:S,...m,uniforms:{...f.uniforms,tDepth:o}}),this.motes=new i(g,this.moteMat),g.instanceCount=C,this.group=new s,this.group.name=`dreamflies`;let w=40;for(let e of[this.glows,this.motes,this.wings])e.frustumCulled=!1,e.layers.set(p.TRANS),e.renderOrder=w++,this.group.add(e);e.scene.add(this.group);let T=this;this.guide={get active(){return r.state!==`hidden`},show(e){T._guideShow(e)},hide(){r.state!==`hidden`&&(r.state=`leave`)}},this.escort={active:!1,start(){T._escortStart()},stop(){T._escortStop()}}}_make(e,t){let n=D(t+1.37);return{id:e,index:t,seed:n,state:`hidden`,isGuide:!1,home:new c,p:new c,v:new c,tgt:new c,yaw:n*w,pitch:0,roll:0,phase:n*w,hz:7.2+D(t+9.1)*2.2,wing:.6,wingLag:.6,alpha:0,glow:1,tint:D(t+4.4)*.16,size:.062+D(t+2.2)*.026,t:0,slot:-1,landed:!1,emit:0,glide:0,nextGlide:2+n*4,from:new c,dur:1,delay:0,a0:0,spot:null}}setPlayer(e){this.player=e}get(e){return this.byId[e]}state(e){return this.byId[e]?.state}followers(){return this.flies.filter(e=>e.state===`follow`||e.state===`lift`).sort((e,t)=>e.slot-t.slot)}reveal(e,t=!0){let n=this.byId[e];return!n||n.state!==`hidden`?!1:(n.state=`perched`,n.p.copy(n.home),n.v.set(0,0,0),n.alpha=0,n.t=0,t&&this.burst(n.home,26,1.4,n.tint),!0)}nearest(e,t,n,r=3){let i=null,a=r*r;for(let r of this.flies){if(r.state!==`perched`||r.alpha<.5)continue;let o=r.p.x-e,s=(r.p.y-t)*.6,c=r.p.z-n,l=o*o+s*s+c*c;l<a&&(a=l,i=r)}return i}collect(e){let t=this.byId[e];return!t||t.state!==`perched`&&t.state!==`hidden`?!1:(t.state=`lift`,t.t=0,t.from.copy(t.p),t.alpha=Math.max(t.alpha,.01),t.slot=this._nextSlot(),this.burst(t.p,22,1.2,t.tint),!0)}_nextSlot(){let e=-1;for(let t of this.flies)(t.state===`follow`||t.state===`lift`)&&t.slot>e&&(e=t.slot);return e+1}restore(e){let t=0;for(let n of this.flies){let r=e[n.id]||(n.after?`hidden`:`perched`);if(n.landed=!1,n.v.set(0,0,0),n.t=0,r===`follow`){n.state=`follow`,n.slot=t++,n.alpha=0;let e=this.player;e?n.p.set(e.x+(D(n.index+3)-.5)*3,e.y+1.4+D(n.index+5),e.z+(D(n.index+7)-.5)*3):n.p.copy(n.home)}else n.state=r,n.slot=-1,n.p.copy(n.home),n.alpha=0}this.escort.active=!1,this.guideFly.state=`hidden`,this.guideFly.alpha=0}gather(){let e=this.player;if(e){for(let t of this.followers())t.p.set(e.x+(D(t.index+3)-.5)*3,e.y+1.4+D(t.index+5),e.z+(D(t.index+7)-.5)*3),t.v.set(0,0,0),t.landed=!1;this._pHas=!1}}offer(e,{ids:t=null,duration:n=4.2,stagger:r=.38,onArrive:i=null}={}){let a=t?t.map(e=>this.byId[e]).filter(Boolean):this.followers();return a.forEach((t,i)=>{t.state=`offer`,t.landed=!1,t.t=0,t.delay=i*r,t.dur=n,t.from.copy(t.p),t.tgt.set(e[0],e[1],e[2]),t.a0=Math.atan2(t.p.z-e[2],t.p.x-e[0]),t.order=i,t.count=a.length}),this.onArrive=i,a.length?n+(a.length-1)*r:0}burst(e,t=20,n=1,r=0){for(let i=0;i<t;i++){let t=Math.random()*w,i=Math.random()*2-1,a=Math.sqrt(1-i*i),o=n*(.25+Math.random()*.75);this._mote(e.x,e.y,e.z,Math.cos(t)*a*o,i*o*.8+.25,Math.sin(t)*a*o,.9+Math.random()*1.3,.012+Math.random()*.014,1.6+Math.random()*1.4,r)}}_mote(e,t,n,r,i,a,o,s,c,l){let u=this.moteHead;this.moteHead=(u+1)%C;let d=this.aBirth.array,f=this.aVel.array,p=this.aLook.array,m=u*4;d[m]=e,d[m+1]=t,d[m+2]=n,d[m+3]=this.engine.time,f[m]=r,f[m+1]=i,f[m+2]=a,f[m+3]=o,p[m]=s,p[m+1]=c,p[m+2]=l,p[m+3]=Math.random(),this.moteDirty=!0}_guideShow(e){let t=this.guideFly,n=this.player;if(!e||e.length<2||!n)return;let r=e.map(e=>new c(e[0],e[1],e[2])),i=[0];for(let e=1;e<r.length;e++)i.push(i[e-1]+r[e].distanceTo(r[e-1]));let a=i[i.length-1];if(t.route={pts:r,acc:i,len:a,s:Math.min(2.5,a)},t.state===`guide`){let e=0xde0b6b3a7640000,n=t.route.s;for(let r=0;r<=Math.min(a,16);r+=.5){this._routeAt(t.route,r,j);let i=(j.x-t.p.x)**2+(j.z-t.p.z)**2;i<e&&(e=i,n=r)}t.route.s=Math.max(t.route.s,n)}if(t.state===`hidden`){let e=-Math.sin(n.yaw),r=-Math.cos(n.yaw);t.p.set(n.x-e*1.2+r*.9,n.y+2.3,n.z-r*1.2-e*.9),t.v.set(0,0,0),t.alpha=0}t.state=`guide`}_routeAt(e,t,n){let{pts:r,acc:i}=e;t=T(t,0,e.len);let a=1;for(;a<i.length-1&&i[a]<t;)a++;let o=(t-i[a-1])/Math.max(i[a]-i[a-1],1e-6);return n.lerpVectors(r[a-1],r[a],o)}_escortStart(){let e=this.engine.camera;this.escort.active=!0,this._camPrev=e.position.clone(),this._camVel=new c,this.flies.forEach((t,n)=>{t.state=`escort`,t.landed=!1,t.t=0,t.alpha=0;let r=D(n+21.3)*w,i=1.4+D(n+17.7)*4.6;t.esc={x:Math.cos(r)*i*1.5,y:Math.sin(r)*i*.65-.4,z:-(5.5+D(n+31.9)*12)},j.set(t.esc.x,t.esc.y-3,t.esc.z+14).applyQuaternion(e.quaternion).add(e.position),t.p.copy(j),t.v.set(0,0,0)})}_escortStop(){this.escort.active=!1;for(let e of this.flies)e.state===`escort`&&(e.state=`scatter`,e.t=0)}update(e,t){this.time=t;let n=this.engine,r=n.camera;this._depth.value=n.rtOpaque?.depthTexture||null;let i=this.player;if(e>0){if(i){let t=i.yaw-this.slotYaw;t=Math.atan2(Math.sin(t),Math.cos(t)),this.slotYaw+=t*Math.min(1,e*1.6),j.set(i.x,i.y,i.z),this._pHas&&(M.copy(j).sub(this._pPrev).divideScalar(Math.max(e,.001)),M.lengthSq()<144?this._pVel.lerp(M,Math.min(1,e*5)):this._pVel.set(0,0,0)),this._pPrev.copy(j),this._pHas=!0}else this._pHas=!1;this.escort.active&&(j.copy(r.position).sub(this._camPrev).divideScalar(Math.max(e,.001)),j.lengthSq()<6400&&this._camVel.lerp(j,Math.min(1,e*6)),this._camPrev.copy(r.position));let n=Math.min(24,Math.max(1,Math.ceil(e/.022))),a=e/n;for(let o=0;o<n;o++){let n=t-e+(o+1)*a;for(let e of this.all)this._step(e,a,n,i,r)}}this._write(r,t)}_step(e,t,n,r,i){let a=e.seed,o=7,s=3.6,c=3.2,l=1,u=1,d=0,f=e.tgt;switch(e.t+=t,e.state){case`hidden`:case`gone`:e.alpha=Math.max(0,e.alpha-t*3);return;case`perched`:{let t=0;if(r){let n=r.x-e.home.x,i=r.z-e.home.z,a=r.y+1.2-e.home.y;t=1-E(3.5,9,Math.sqrt(n*n+i*i+a*a))}let i=.55+.5*t,l=.24+.1*t;f.set(e.home.x+Math.sin(n*.83*i+a*20)*l,e.home.y+Math.sin(n*1.31*i+a*33)*.11+t*.12,e.home.z+Math.cos(n*.67*i+a*47)*l),o=5,s=3,c=1.2,u=1.25+.4*Math.sin(n*1.7+a*9),d=2.2;break}case`lift`:{let t=e.t/1.3,n=a*w+t*7.5,r=.2+.45*t;f.set(e.from.x+Math.cos(n)*r,e.from.y+.25+.9*t,e.from.z+Math.sin(n)*r),o=26,s=7,c=5,u=1.9,d=30,t>=1&&(e.state=`follow`,e.t=0);break}case`follow`:if(!r){e.alpha=Math.max(0,e.alpha-t*2);return}if(r.still>2.4&&!e.spot&&this._pickSpot(e,r),r.still<.25&&e.spot&&(e.spot=null,e.landed=!1,e.v.y+=.8),e.spot){if(e.landed){this._landed(e,t,n);return}let r=e.spot.x-e.p.x,i=e.spot.z-e.p.z,a=Math.sqrt(r*r+i*i);f.set(e.spot.x,e.spot.y+Math.min(.8,a*.6),e.spot.z),o=5,s=3.4,c=1.8,d=3,a<.07&&Math.abs(e.p.y-e.spot.y)<.05&&(e.landed=!0,e.v.set(0,0,0),e.p.set(e.spot.x,e.spot.y,e.spot.z),e.t=0)}else{let t=O[e.slot%O.length],i=this.slotYaw+t[0]*Math.PI/180,l=t[1]*(1+.18*Math.sin(n*.31+a*12)),u=-Math.sin(i),p=-Math.cos(i);if(this.groundAt)for(let e=0;e<3&&this.groundAt(r.x+u*l,r.z+p*l,r.y)===null;e++)l*=.6;let m=.5;f.set(r.x+u*l+Math.sin(n*.71+a*31)*m,r.y+t[2]+Math.sin(n*.93+a*17)*.28,r.z+p*l+Math.cos(n*.57+a*23)*m),f.addScaledVector(this._pVel,2.43/4.2),o=4.2,s=2.7,c=2.6+(r.speed||0)*1.5,d=5+8*Math.min(1,e.v.length()/2.5)}break;case`offer`:{let r=T((e.t-e.delay)/e.dur,0,1);if(e.t<e.delay){let r=e.a0+e.t*.9,i=1.9;j.set(f.x+Math.cos(r)*i,f.y+.5+.2*Math.sin(n*2+a*9),f.z+Math.sin(r)*i),this._spring(e,j,5,3.2,3,t),this._orient(e,t),this._flap(e,t,1,n),e.alpha=Math.min(1,e.alpha+t*2),e.glowK=1.5,this._emit(e,t,8);return}e.t-t<e.delay&&(e.from.copy(e.p),e.a0=Math.atan2(e.p.z-f.z,e.p.x-f.x));let i=r*r*(3-2*r),o=Math.hypot(e.from.x-f.x,e.from.z-f.z)*(1-i)**1.35,s=e.a0+i*w*2.1,c=e.from.y+(f.y-e.from.y)*i+Math.sin(Math.PI*i)*.9;j.set(f.x+Math.cos(s)*o,c,f.z+Math.sin(s)*o),e.v.copy(j).sub(e.p).divideScalar(Math.max(t,.001)),e.p.copy(j),this._orient(e,t),this._flap(e,t,1.15,n),e.glowK=1.5+2.2*i,e.alpha=Math.min(1,e.alpha+t*2)*(1-E(.93,1,r)),this._emit(e,t,26),r>=1&&(e.state=`gone`,e.alpha=0,this.burst(f,30,1.7,e.tint),this.onArrive?.(e,e.order,e.count));return}case`escort`:{let t=e.esc,r=.33;j.set(t.x+Math.sin(n*r*1.3+a*40)*1.5,t.y+Math.sin(n*r*1.7+a*23)*.9,t.z+Math.cos(n*r+a*31)*2.4).applyQuaternion(i.quaternion).add(i.position),o=9,s=5.2,c=60,f.copy(j).addScaledVector(this._camVel,s/o),d=16,u=1.5,l=E(0,2.5,e.t-a*2.5);break}case`scatter`:{let r=a*w;e.v.x+=Math.cos(r)*3*t,e.v.z+=Math.sin(r)*3*t,e.v.y+=4.5*t,e.p.addScaledVector(e.v,t),this._orient(e,t),this._flap(e,t,1,n),this._emit(e,t,10),e.alpha=Math.max(0,e.alpha-t*.5),e.alpha<=0&&(e.state=`gone`);return}case`guide`:case`leave`:{if(!r||!e.route){e.state=`hidden`;return}let i=e.route;if(e.state===`leave`){if(l=0,f.set(e.p.x,e.p.y+2,e.p.z),o=2,s=2,e.alpha<.02){e.state=`hidden`,e.route=null;return}}else{this._routeAt(i,i.s,j);let e=j.x-r.x,l=j.z-r.z,u=Math.sqrt(e*e+l*l),d=u<4.2?4.4:u<7.5?1.4:0;i.s=Math.min(i.len,i.s+d*t);let p=i.s>=i.len-.01?.7:.35;f.set(j.x+Math.sin(n*1.1+a*9)*p,j.y+1.5+Math.sin(n*1.7)*.16,j.z+Math.cos(n*.9+a*5)*p),o=5,s=3,c=6.5}u=1.7+.5*Math.sin(n*2.3),d=12;break}default:return}if(r&&(e.state===`follow`||e.state===`guide`||e.state===`lift`)){let n=e.p.x-i.position.x,r=e.p.y-i.position.y,a=e.p.z-i.position.z,o=Math.sqrt(n*n+r*r+a*a)+1e-4;if(o<1.3){let i=(1.3-o)*26*t/o;e.v.x+=n*i,e.v.y+=r*i*.5,e.v.z+=a*i}if(o<3.4&&e.state!==`guide`&&!e.spot){i.getWorldDirection(M);let s=n*M.x+r*M.y+a*M.z;if(s>0){N.set(n-M.x*s,r-M.y*s,a-M.z*s);let i=N.length(),c=s*.42;i<c&&(i<.001&&N.set(M.z,.3,-M.x),N.normalize(),e.v.addScaledVector(N,(c-i)*14*t*(1-o/3.4)))}}}this._spring(e,f,o,s,c,t),this._orient(e,t),this._flap(e,t,1,n),e.alpha+=(l-e.alpha)*Math.min(1,t*2.2),e.glowK=u,this._emit(e,t,d)}_spring(e,t,n,r,i,a){let o=e.v,s=e.p;o.x+=((t.x-s.x)*n-o.x*r)*a,o.y+=((t.y-s.y)*n-o.y*r)*a,o.z+=((t.z-s.z)*n-o.z*r)*a;let c=o.length();c>i&&o.multiplyScalar(i/c),s.addScaledVector(o,a)}_orient(e,t){let n=e.v,r=Math.hypot(n.x,n.z);if(r>.12){let r=Math.atan2(-n.x,-n.z)-e.yaw;r=Math.atan2(Math.sin(r),Math.cos(r));let i=r*Math.min(1,t*7);e.yaw+=i,e.roll+=(T(-i/Math.max(t,.001)*.16,-.7,.7)-e.roll)*Math.min(1,t*5)}else e.roll*=1-Math.min(1,t*3);let i=T(.32+Math.atan2(n.y,r+.6)*.8,-.5,1.1);e.pitch+=(i-e.pitch)*Math.min(1,t*6)}_flap(e,t,n,r){e.nextGlide-=t,e.nextGlide<0&&(e.glide=.22+Math.random()*.3,e.nextGlide=1.6+Math.random()*4.5);let i=e.v.length(),a=e.hz*(.82+.3*Math.min(1,i/2.5)),o=0;e.glide>0&&(e.glide-=t,o=1),e.glideK=(e.glideK||0)+(o-(e.glideK||0))*Math.min(1,t*14),e.phase+=t*w*a*(1-.85*e.glideK);let s=e=>{let t=Math.sin(e);return .34+(t>0?.98:.78)*t*n},c=s(e.phase),l=s(e.phase-.75);e.wing=c+(.42-c)*e.glideK,e.wingLag=l+(.3-l)*e.glideK,e.bob=.014*Math.sin(e.phase-1.3)*(1-e.glideK)}_landed(e,t,n){let r=1.32-.95*E(.5,.95,.5+.5*Math.sin(n*.55+e.seed*40))+.03*Math.sin(n*3+e.seed*9);e.wing+=(r-e.wing)*Math.min(1,t*5),e.wingLag+=(r-.05-e.wingLag)*Math.min(1,t*4),e.pitch+=(.1-e.pitch)*Math.min(1,t*4),e.roll*=1-Math.min(1,t*4),e.bob=0,e.glowK=.75+.2*Math.sin(n*1.2+e.seed*7),e.alpha=Math.min(1,e.alpha+t*2),this._emit(e,t,.5)}_pickSpot(e,t){for(let n=0;n<6;n++){let n=t.yaw+(Math.random()*2-1)*1.25,r=1.5+Math.random()*1.5,i=t.x-Math.sin(n)*r,a=t.z-Math.cos(n)*r,o=this.groundAt?this.groundAt(i,a,t.y):t.y;if(o===null)continue;let s=!0;for(let t of this.flies)if(t!==e&&t.spot&&Math.hypot(t.spot.x-i,t.spot.z-a)<.45){s=!1;break}if(s){e.spot={x:i,y:o+.035,z:a};return}}e.spot=null}_emit(e,t,n){if(!(n<=0||e.alpha<.3))for(e.emit+=n*t;e.emit>=1;){--e.emit;let t=.03;this._mote(e.p.x+(Math.random()-.5)*t,e.p.y+(Math.random()-.5)*t,e.p.z+(Math.random()-.5)*t,e.v.x*.12+(Math.random()-.5)*.12,e.v.y*.1-.05-Math.random()*.06,e.v.z*.12+(Math.random()-.5)*.12,1.5+Math.random()*1.6,.007+Math.random()*.008,(.7+Math.random()*.9)*(e.isGuide?1.2:1),e.tint)}}_write(e,t){let n=this.aPos.array,r=this.aQuat.array,i=this.aWing.array,a=this.aMisc.array,o=this.aGPos.array,s=this.aGlow.array,c=0;for(let t of this.all){if(t.alpha<=.003)continue;let l=t.p.distanceTo(e.position),u=1-E(70,150,l);if(u<=0)continue;let d=t.p.y+(t.bob||0);n[c*3]=t.p.x,n[c*3+1]=d,n[c*3+2]=t.p.z,A.set(t.pitch,t.yaw,t.roll),k.setFromEuler(A),r[c*4]=k.x,r[c*4+1]=k.y,r[c*4+2]=k.z,r[c*4+3]=k.w;let f=t.glowK??1;i[c*4]=t.wing,i[c*4+1]=t.wingLag,i[c*4+2]=t.size,i[c*4+3]=t.alpha*E(.12,.3,l),a[c*4]=t.seed,a[c*4+1]=.25*(f-1),a[c*4+2]=t.tint,a[c*4+3]=0,o[c*3]=t.p.x,o[c*3+1]=d,o[c*3+2]=t.p.z,s[c*4]=t.size*(2.6+1.3*f),s[c*4+1]=t.alpha*f*.55*u*E(.25,.9,l),s[c*4+2]=t.tint,s[c*4+3]=t.seed,c++}this.wings.geometry.instanceCount=c,this.glows.geometry.instanceCount=c,this.wings.visible=this.glows.visible=c>0,this.aPos.needsUpdate=this.aQuat.needsUpdate=this.aWing.needsUpdate=this.aMisc.needsUpdate=this.aGPos.needsUpdate=this.aGlow.needsUpdate=!0,this.moteDirty&&=(this.aBirth.needsUpdate=this.aVel.needsUpdate=this.aLook.needsUpdate=!0,!1)}},R=60,z={fly_near:{pos:[7.6,2,103.2],yaw:-40,pitch:-3,fov:40},fly_mid:{pos:[4,2.2,112],yaw:-22,pitch:-1,fov:58}};async function B(e,t){let n=new L(e,u.filter(e=>e.type===`fly`));t.dreamflies=n,e.add(n)}export{B as default,R as order,z as shots};