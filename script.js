const BG='assets/bg.jpg',MP3='assets/music.mp3',$=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s),sl=ms=>new Promise(r=>setTimeout(r,ms));
function rose(g,x,y,r,c){for(let i=0;i<20;i++){const rr=r*(1-i*.04);g.save();g.translate(x,y);g.rotate(i*2.4);const q=g.createRadialGradient(0,-rr*.5,rr*.05,0,-rr*.2,rr);q.addColorStop(0,c[1]);q.addColorStop(1,c[0]);g.fillStyle=q;g.strokeStyle='rgba(60,10,30,.28)';g.lineWidth=r*.015;g.beginPath();g.ellipse(0,-rr*.3,rr*.62,rr*.56,0,0,7);g.fill();g.stroke();g.restore()}}
function bq(S,P){const c=document.createElement('canvas');c.width=c.height=S;const g=c.getContext('2d');
for(let i=0;i<9;i++){g.save();g.translate(S*.5,S*.5);g.rotate(i*.7+.3);g.fillStyle=i%2?'#86a36e':'#6c8a58';g.beginPath();g.ellipse(0,-S*.22,S*.08,S*.22,0,0,7);g.fill();g.restore()}
[[.5,.5,.27,0],[.27,.3,.16,1],[.74,.3,.15,2],[.28,.74,.14,2],[.73,.73,.16,1]].forEach(a=>rose(g,S*a[0],S*a[1],S*a[2],P[a[3]]));return c}
function soft(c){const s=document.createElement('canvas');s.width=s.height=34;s.getContext('2d').drawImage(c,0,0,34,34);return s.toDataURL()}
function mg(n){const c=document.createElement('canvas');c.width=30;c.height=n*15+16;const g=c.getContext('2d');g.strokeStyle='#a8741c';g.beginPath();g.moveTo(15,0);g.lineTo(15,c.height);g.stroke();for(let i=0;i<n;i++){const y=12+i*15,q=g.createRadialGradient(15,y,1,15,y,8);q.addColorStop(0,'#ffd45a');q.addColorStop(1,'#f08a12');g.fillStyle=q;g.strokeStyle='#d97a0c';g.beginPath();g.arc(15,y,8,0,7);g.fill();g.stroke()}return c.toDataURL()}
$('.abg').style.backgroundImage=`url(${BG})`;


const au=new Audio(MP3);au.loop=false;au.preload='auto';au.volume=0;let songStopTimer=0;
document.addEventListener('visibilitychange',()=>{if(document.hidden)au.pause()});window.addEventListener('pagehide',()=>au.pause());
const MAP='https://maps.app.goo.gl/xVW2nznj2i73o6DZ8?g_st=ic',ADDR='Chaudhary Guest House, Arazibagh, Azamgarh';
$('#mp').href=MAP;$('#dir').href='https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(ADDR);
$('#cal').href='https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent('Daawat-e-Walima – Zeeshan & Ayesha')+'&dates=20270103T133000Z/20270103T163000Z&location='+encodeURIComponent(ADDR);
const toast=t=>{const e=$('#ts');e.textContent=t;e.classList.add('on');setTimeout(()=>e.classList.remove('on'),1800)};
$('#cp').onclick=async()=>{try{await navigator.clipboard.writeText(ADDR)}catch(e){const t=document.createElement('textarea');t.value=ADDR;document.body.appendChild(t);t.select();try{document.execCommand('copy')}catch(e){}t.remove()}toast('Address copied')};
/* particles */
const cv=$('#cv'),cx=cv.getContext('2d'),dpr=Math.min(devicePixelRatio||1,2);let ps=[],raf=0;
function burst(k){const W=innerWidth,H=innerHeight;if(!raf){cv.width=W*dpr;cv.height=H*dpr}const C=['#e9798f','#f5b7c4','#c9a45c','#6e1f2f','#fbf4ea','#8a63c4'];
for(let i=0;i<(k=='p'?36:80);i++){const p=k=='p'?{x:Math.random()*W,y:-20-Math.random()*H*.5,vx:(Math.random()-.5)*.8,vy:1+Math.random()*1.6,g:0}:{x:W/2,y:H*.6,vx:(Math.random()-.5)*12,vy:-5-Math.random()*9,g:.22};p.w=6+Math.random()*6;p.r=Math.random()*6;p.vr=(Math.random()-.5)*.2;p.c=C[Math.random()*C.length|0];p.k=k=='p'?0:i%2;ps.push(p)}
if(!raf)raf=requestAnimationFrame(loop)}
function loop(){const W=innerWidth,H=innerHeight;cx.setTransform(dpr,0,0,dpr,0,0);cx.clearRect(0,0,W,H);ps=ps.filter(p=>p.y<H+30);
ps.forEach(p=>{p.vy+=p.g;p.x+=p.vx+Math.sin(p.y/30+p.r)*.5;p.y+=p.vy;p.r+=p.vr;if(p.g)p.vx*=.99;cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillStyle=p.c;cx.beginPath();if(p.k)cx.rect(-p.w/2,-p.w/4,p.w,p.w/2);else cx.ellipse(0,0,p.w/2,p.w/3.2,0,0,7);cx.fill();cx.restore()});
raf=ps.length?requestAnimationFrame(loop):0;if(!raf)cx.clearRect(0,0,W,H)}
/* tassel */
const pap=$('#pap'),tas=$('#tas');let p=0,dr=0,y0=0,p0=0,mv=0,fin=0,ra=0;
function setP(v){p=Math.min(1,Math.max(0,v));pap.style.height=16+p*290+'px';if(p>=.995&&!fin){fin=1;tas.classList.add('h');burst('c');burst('p')}}
function go(t){cancelAnimationFrame(ra);(function f(){const d=t-p;if(Math.abs(d)<.005){setP(t);return}setP(p+d*.12+Math.sign(d)*.004);ra=requestAnimationFrame(f)})()}
tas.onpointerdown=e=>{if(fin)return;dr=1;y0=e.clientY;p0=p;mv=0;tas.setPointerCapture(e.pointerId);tas.classList.add('h');cancelAnimationFrame(ra)};
tas.onpointermove=e=>{if(!dr)return;mv=Math.max(mv,Math.abs(e.clientY-y0));setP(p0+(e.clientY-y0)/290)};
tas.onpointerup=tas.onpointercancel=()=>{if(!dr)return;dr=0;go(mv<8||p>.4?1:0)};
/* countdown */
const T=new Date('2027-01-03T19:00:00+05:30'),z=n=>String(n).padStart(2,'0');
function cd(){const s=Math.max(0,Math.floor((T-Date.now())/1e3));$('#cd').textContent=`${s/86400|0}d · ${z(s%86400/3600|0)}h · ${z(s%3600/60|0)}m · ${z(s%60)}s`}
cd();setInterval(()=>{if($('.sd').classList.contains('on'))cd()},1000);
/* observers & parallax */
const io=new IntersectionObserver(es=>es.forEach(e=>{const t=e.target;t.classList.toggle('on',e.isIntersecting);if(e.isIntersecting&&!t.classList.contains('p1'))t.classList.add('go')}),{threshold:.1});
$$('.sec').forEach(s=>io.observe(s));

/* opening */
let opened=0;
function open(){if(opened)return;opened=1;const st=$('#st');st.classList.add('open');au.play().catch(()=>{});clearTimeout(songStopTimer);songStopTimer=setTimeout(()=>{au.pause();try{au.currentTime=0}catch(e){}},45000);let v=0;const iv=setInterval(()=>{v=Math.min(.55,v+.02);au.volume=v;if(v>=.55)clearInterval(iv)},120);
setTimeout(()=>burst('p'),700);setTimeout(()=>st.classList.add('zoom'),1100);
setTimeout(()=>{$('#inv').classList.add('show');document.body.classList.remove('lock');scrollTo(0,0);st.classList.add('gone');$$('.p1 [data-at]').forEach(e=>setTimeout(()=>e.classList.add('in'),+e.dataset.at))},2300);
setTimeout(()=>st.remove(),3400)}
$('#st').addEventListener('click',open);
(async()=>{const imgs=[...$$('img')].map(i=>i.decode().catch(()=>0));
const fonts=Promise.race([Promise.all(['italic 500 40px "Playfair Display"','400 14px Montserrat','400 28px Amiri'].map(f=>document.fonts.load(f).catch(()=>0))),sl(5000)]);
const aud=new Promise(r=>{au.addEventListener('canplaythrough',r,{once:true});au.load();setTimeout(r,3500)});
await Promise.all([...imgs,fonts,aud,sl(900)]);$('#ld').classList.add('x');$('#tap').classList.add('rdy');setTimeout(()=>$('#ld').remove(),700)})();