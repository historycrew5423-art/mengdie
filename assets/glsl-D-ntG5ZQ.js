import{t as e}from"./index-ChqJ2Hv-.js";var t=null,n=!1;function r(r){n||(n=!0,e(()=>import(`./audio-CzXgNDX5.js`).then(e=>{Array.isArray(e.SFX_NAMES)&&(t=new Set(e.SFX_NAMES))}),[]).catch(()=>{}));let i=e=>r.audio?.has?r.audio.has(e):t?t.has(e):!1;return function(e,t={},n=null){let a=Array.isArray(e)?e:[e];if(!r.audio?.play)return null;for(let e=0;e<a.length;e++){let o=a[e];if(!(e<a.length-1&&!i(o)))try{return r.audio.play(o,n?.[o]?{...t,...n[o]}:t)}catch{return null}}return null}}var i=`
float mdTrans(vec3 wp){
  vec3 v = wp - cameraPosition; float d = length(v);
  return 1.0 - min(1.0 - exp(-mdFogOD(cameraPosition, v / max(d, 1e-4), d)), uFogMax);
}
`,a=`
uniform sampler2D tDepth; uniform vec2 uResolution; uniform vec2 uProjCD;
float softFade(float viewZ, float range){
  float z = texture2D(tDepth, gl_FragCoord.xy / uResolution).r;
  float lin = z <= 0.0 ? 1e6 : uProjCD.y / (z + uProjCD.x);
  return clamp((lin - viewZ) / range, 0.0, 1.0);
}
`,o={transparent:!0,depthWrite:!1,fog:!1,blending:5,blendEquation:100,blendSrc:201,blendDst:205},s={pos:[-1,-1,0,1,-1,0,1,1,0,-1,1,0],idx:[0,1,2,0,2,3]},c=(e,t,n)=>Object.assign([e,t,n],{x:e,y:t,z:n});export{a,s as i,c as n,r as o,o as r,i as t};