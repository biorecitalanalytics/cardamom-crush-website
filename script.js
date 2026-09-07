const toggle=document.querySelector('.menu-toggle');const links=document.querySelector('.links');if(toggle&&links){toggle.addEventListener('click',()=>links.classList.toggle('open'));links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')))}
let data=window.CC_DATA||{};
function esc(s){return String(s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}

function mailto(email){return `mailto:${esc(email)}`;}
function socialIcon(key){return `<span class="social-icon social-icon-${esc(key)}" aria-hidden="true"></span>`;}
function renderBusinessInfo(){
  const b=data.business||{};
  document.querySelectorAll('[data-business="email"]').forEach(el=>{el.textContent=b.email||'';});
  document.querySelectorAll('a[data-business-href="email"]').forEach(el=>{if(b.email)el.href='mailto:'+b.email;});
  const socials=[['instagram','instagramHandle'],['facebook','facebookHandle']];
  socials.forEach(([key,handleKey])=>{
    document.querySelectorAll(`[data-business="${key}"]`).forEach(el=>{el.textContent=b[handleKey]||b[key]||'';});
    document.querySelectorAll(`a[data-business-href="${key}"]`).forEach(el=>{if(b[key])el.href=b[key];});
  });
  document.querySelectorAll('[data-business="social-list"]').forEach(el=>{
    el.innerHTML=socials.map(([key,handleKey])=>b[key]?`<a class="social-link" href="${esc(b[key])}">${socialIcon(key)}<span>${esc(b[handleKey]||key)}</span></a>`:'').filter(Boolean).join('<br>');
  });
}
function renderMenu(){
  const el=document.querySelector('[data-editable="menu"]');
  if(!el||!data.menuSections)return;
  const sections=data.menuSections.filter(section=>section.visible!==false).map((section,index)=>{
    const items=(section.items||[]).filter(item=>item.status!=='hidden');
    if(!items.length)return '';
    return `<section class="menu-page-category menu-page-category-${index%4}"><header class="menu-page-category-heading"><h2>${esc(section.title)}</h2></header><div class="menu-list">${items.map(item=>{
      const soldOut=item.status==='sold-out';
      return `<details class="menu-item editable-item${soldOut?' is-sold-out':''}"><summary><div class="menu-item-copy"><strong>${esc(item.name)}</strong>${item.price?` <span class="price">${esc(item.price)}</span>`:''}${soldOut?' <span class="status-badge">Sold out</span>':''}<br><span>${esc(item.description)}</span>${item.dietary?`<br><small>${esc(item.dietary)}</small>`:''}</div></summary><div class="details-body">${item.ingredients&&item.ingredients.length?`<p><strong>Ingredients:</strong> ${item.ingredients.map(esc).join(', ')}</p>`:''}${item.recipeNote?`<p><strong>Recipe / prep note:</strong> ${esc(item.recipeNote)}</p>`:''}</div></details>`;
    }).join('')}</div></section>`;
  }).join('');
  el.innerHTML=sections+`<section class="menu-page-dietary"><div><span class="eyebrow eyebrow-light">Good to know</span><h2>Dietary Notes</h2></div><div><p>Our baked goods are gluten-free. Many items are plant-based and egg-free. Rice pudding and chai contain milk unless otherwise noted.</p><a class="btn btn-light" href="contact.html">Ask About Ingredients</a></div></section>`;
}
function renderHomeMenu(){
  const el=document.querySelector('[data-editable="home-menu"]');
  if(!el||!data.menuSections)return;
  el.innerHTML=data.menuSections.filter(section=>section.visible!==false).map((section,index)=>{
    const items=(section.items||[]).filter(item=>item.status!=='hidden');
    if(!items.length)return '';
    return `<article class="editorial-menu-category editorial-menu-category-${index%4}"><h3>${esc(section.title)}</h3><div class="editorial-menu-items">${items.map(item=>`<span>${esc(item.name)}${item.status==='sold-out'?` <small>Sold out</small>`:''}</span>`).join('')}</div></article>`;
  }).join('');
}
function renderGallery(){
  const el=document.querySelector('[data-editable="gallery"]');
  const allImages=(data.galleryImages||[]).filter(item=>item&&item.image);
  const limit=Number(el&&el.dataset.galleryLimit)||allImages.length;
  const images=allImages.slice(0,limit);
  if(!el||!images.length)return;
  const moreLink=el.dataset.galleryMore?`<div class="gallery-more"><a class="btn btn-secondary" href="${esc(el.dataset.galleryMore)}">View All Photos &amp; Reviews</a></div>`:'';
  el.innerHTML=`<div class="editorial-section-heading"><span class="eyebrow">From our kitchen</span><h2>A little look at what we make.</h2></div><div class="gallery-grid">${images.map((item,index)=>`<figure class="gallery-item gallery-item-${index%5}"><button class="gallery-open" type="button" data-gallery-index="${index}" aria-label="Enlarge ${esc(item.alt||item.caption||'product image')}"><img src="${esc(item.image)}" alt="${esc(item.alt||item.caption||'Cardamom Crush product')}" loading="lazy"></button>${item.caption?`<figcaption>${esc(item.caption)}</figcaption>`:''}</figure>`).join('')}</div>${moreLink}<dialog class="gallery-lightbox" aria-label="Enlarged product image"><button class="gallery-lightbox-close" type="button" aria-label="Close enlarged image">×</button><img src="" alt=""><p></p></dialog>`;
  const lightbox=el.querySelector('.gallery-lightbox');
  const lightboxImage=lightbox.querySelector('img');
  const lightboxCaption=lightbox.querySelector('p');
  el.querySelectorAll('.gallery-open').forEach(button=>button.addEventListener('click',()=>{
    const item=images[Number(button.dataset.galleryIndex)];
    lightboxImage.src=item.image;
    lightboxImage.alt=item.alt||item.caption||'Cardamom Crush product';
    lightboxCaption.textContent=item.caption||'';
    lightboxCaption.hidden=!item.caption;
    if(lightbox.showModal)lightbox.showModal();else lightbox.setAttribute('open','');
  }));
  lightbox.querySelector('.gallery-lightbox-close').addEventListener('click',()=>lightbox.close());
  lightbox.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close();});
  el.classList.remove('hidden');
}
function renderReviews(){
  const el=document.querySelector('[data-editable="reviews"]');
  const reviews=(data.customerReviews||[]).filter(item=>item&&item.quote);
  if(!el||!reviews.length)return;
  el.innerHTML=`<div class="editorial-section-heading"><span class="eyebrow">Kind words</span><h2>Shared with love.</h2></div><div class="reviews-grid">${reviews.map(review=>`<blockquote class="review-card"><p>“${esc(review.quote)}”</p>${review.name||review.context?`<footer>${review.name?`<strong>${esc(review.name)}</strong>`:''}${review.context?`<span>${esc(review.context)}</span>`:''}</footer>`:''}</blockquote>`).join('')}</div>`;
  el.classList.remove('hidden');
}
function renderMarkets(){const el=document.querySelector('[data-editable="markets"]');if(!el||!data.marketVenues)return;el.innerHTML=data.marketVenues.map(v=>`<section class="panel"><h2>${esc(v.name)}</h2><p><strong>Location:</strong> ${esc(v.location)}</p><p><strong>Schedule:</strong> ${esc(v.schedule)}</p><p><strong>Booth:</strong> ${esc(v.booth)}</p><p>${esc(v.notes)}</p><a class="btn btn-primary" href="links.html">Follow for Updates</a></section>`).join('')+`<section class="green-block"><h2>Free Samples</h2><p>Ask us about rice pudding, chai, and seasonal samples at the booth.</p><p>Rice pudding and chai contain milk. Gluten-free and plant-based treats are available.</p></section>`}
function renderCateringProducts(){const el=document.querySelector('[data-editable="catering-products"]');if(!el||!data.cateringProducts)return;el.innerHTML=data.cateringProducts.map((p,i)=>`<label class="check"><input type="checkbox" name="products[]" value="${esc(p)}"> ${esc(p)}</label>`).join('')+`<label class="field"><span>Other / Notes</span><textarea name="products_notes" placeholder="Any other items, quantities, or dietary needs..."></textarea></label>`}
function renderLinks(){const el=document.querySelector('[data-editable="links-page"]');if(!el||!data.linksPage)return;const b=data.business||{};el.innerHTML=data.linksPage.map(l=>{const url=l.businessLink?b[l.businessLink]:l.url;const icon=l.icon?socialIcon(l.icon):'';return `<a class="link-card${l.icon?' link-card-social':''}" href="${esc(url)}">${icon}<span>${esc(l.label)}</span></a>`}).join('')}
function renderEditableContent(){renderBusinessInfo();renderMenu();renderHomeMenu();renderGallery();renderReviews();renderMarkets();renderCateringProducts();renderLinks();}
function loadEditableData(){
  if(!window.fetch){renderEditableContent();return;}
  fetch('/data/site.json',{cache:'no-store'})
    .then(response=>response.ok?response.json():Promise.reject())
    .then(json=>{data=json;renderEditableContent();})
    .catch(()=>renderEditableContent());
}
loadEditableData();
