'use strict';
const nav=document.querySelector('.site-header');
const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('.site-nav');
function closeMenu(){nav.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');}
toggle?.addEventListener('click',()=>{const isOpen=nav.classList.toggle('menu-open');toggle.setAttribute('aria-expanded',String(isOpen));toggle.setAttribute('aria-label',isOpen?'Close navigation':'Open navigation');});
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('menu-open'))closeMenu();});
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();

// Modest motion is progressive enhancement; content stays visible without JS.
if('IntersectionObserver'in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:0.12,rootMargin:'0px 0px -30px 0px'});
 document.querySelectorAll('[data-reveal]').forEach(el=>{el.classList.add('can-reveal');observer.observe(el);});
}

const photos=Array.from(document.querySelectorAll('.gallery-tile'));
const filters=Array.from(document.querySelectorAll('.gallery-filter'));
const lightbox=document.querySelector('#lightbox');
const lightboxImg=document.querySelector('#lightbox-image');
const lightboxCount=document.querySelector('#lightbox-count');
const lightboxCaption=document.querySelector('#lightbox-caption');
const closeButtons=document.querySelectorAll('[data-lightbox-close]');
const prevBtn=document.querySelector('.lightbox-prev');
const nextBtn=document.querySelector('.lightbox-next');
let visiblePhotos=photos;
let currentPhoto=0;
let previousFocus=null;

filters.forEach(button=>button.addEventListener('click',()=>{
 const key=button.dataset.filter;
 filters.forEach(b=>{const active=b===button;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active));});
 photos.forEach(p=>{p.hidden=key!=='all'&&p.dataset.category!==key;});
 visiblePhotos=photos.filter(p=>!p.hidden);
}));
function showPhoto(index){
 if(!visiblePhotos.length)return;
 currentPhoto=(index+visiblePhotos.length)%visiblePhotos.length;
 const tile=visiblePhotos[currentPhoto];
 const thumb=tile.querySelector('img');
 lightboxImg.src=thumb.getAttribute('src');
 lightboxImg.alt=thumb.alt;
 lightboxCaption.textContent=tile.dataset.caption;
 lightboxCount.textContent=`${String(currentPhoto+1).padStart(2,'0')} / ${String(visiblePhotos.length).padStart(2,'0')}`;
}
function openLightbox(tile){
 previousFocus=document.activeElement;
 lightbox.hidden=false;
 lightbox.setAttribute('aria-hidden','false');
 document.body.classList.add('lightbox-open');
 showPhoto(visiblePhotos.indexOf(tile));
 lightbox.querySelector('.lightbox-close').focus();
}
function closeLightbox(){
 lightbox.hidden=true;
 lightbox.setAttribute('aria-hidden','true');
 document.body.classList.remove('lightbox-open');
 if(previousFocus?.isConnected && !previousFocus.hidden)previousFocus.focus();
}
photos.forEach(tile=>tile.addEventListener('click',()=>openLightbox(tile)));
closeButtons.forEach(button=>button.addEventListener('click',closeLightbox));
prevBtn?.addEventListener('click',()=>showPhoto(currentPhoto-1));
nextBtn?.addEventListener('click',()=>showPhoto(currentPhoto+1));
document.addEventListener('keydown',e=>{
 if(lightbox.hidden)return;
 if(e.key==='Escape'){e.preventDefault();closeLightbox();}
 else if(e.key==='ArrowRight'){e.preventDefault();showPhoto(currentPhoto+1);}
 else if(e.key==='ArrowLeft'){e.preventDefault();showPhoto(currentPhoto-1);}
 else if(e.key==='Tab'){
  const focusables=Array.from(lightbox.querySelectorAll('button:not([disabled])'));
  const first=focusables[0],last=focusables.at(-1);
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
 }
});
let startX=null;
lightbox?.addEventListener('touchstart',e=>{startX=e.touches[0]?.clientX??null;},{passive:true});
lightbox?.addEventListener('touchend',e=>{if(startX===null)return;const diff=(e.changedTouches[0]?.clientX??startX)-startX;startX=null;if(Math.abs(diff)>48)showPhoto(currentPhoto+(diff<0?1:-1));},{passive:true});
