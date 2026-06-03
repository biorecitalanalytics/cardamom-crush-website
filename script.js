const toggle=document.querySelector('.menu-toggle');const links=document.querySelector('.links');if(toggle&&links){toggle.addEventListener('click',()=>links.classList.toggle('open'));links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')))}
const data=window.CC_DATA||{};
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
function renderMenu(){const el=document.querySelector('[data-editable="menu"]');if(!el||!data.menuSections)return;el.innerHTML=data.menuSections.map(section=>`<section class="panel"><h2>${esc(section.title)}</h2><div class="menu-list">${(section.items||[]).map(item=>`<details class="menu-item editable-item"><summary><div><strong>${esc(item.name)}</strong>${item.price?` <span class="price">${esc(item.price)}</span>`:''}<br><span>${esc(item.description)}</span>${item.dietary?`<br><small>${esc(item.dietary)}</small>`:''}</div></summary><div class="details-body">${item.ingredients?`<p><strong>Ingredients:</strong> ${item.ingredients.map(esc).join(', ')}</p>`:''}${item.recipeNote?`<p><strong>Recipe / prep note:</strong> ${esc(item.recipeNote)}</p>`:''}</div></details>`).join('')}</div></section>`).join('')+`<section class="green-block"><h2>Dietary Notes</h2><p>Our baked goods are strictly gluten-free. Many items are plant-based and egg-free. Rice pudding and chai contain milk unless otherwise noted.</p><a class="btn btn-light" href="contact.html">Ask a Question</a></section>`}
function renderMarkets(){const el=document.querySelector('[data-editable="markets"]');if(!el||!data.marketVenues)return;el.innerHTML=data.marketVenues.map(v=>`<section class="panel"><h2>${esc(v.name)}</h2><p><strong>Location:</strong> ${esc(v.location)}</p><p><strong>Schedule:</strong> ${esc(v.schedule)}</p><p><strong>Booth:</strong> ${esc(v.booth)}</p><p>${esc(v.notes)}</p><a class="btn btn-primary" href="links.html">Follow for Updates</a></section>`).join('')+`<section class="green-block"><h2>Free Samples</h2><p>Ask us about rice pudding, chai, and seasonal samples at the booth.</p><p>Rice pudding and chai contain milk. Gluten-free and plant-based treats are available.</p></section>`}
function renderCateringProducts(){const el=document.querySelector('[data-editable="catering-products"]');if(!el||!data.cateringProducts)return;el.innerHTML=data.cateringProducts.map((p,i)=>`<label class="check"><input type="checkbox" name="products[]" value="${esc(p)}"> ${esc(p)}</label>`).join('')+`<label class="field"><span>Other / Notes</span><textarea name="products_notes" placeholder="Any other items, quantities, or dietary needs..."></textarea></label>`}
function renderLinks(){const el=document.querySelector('[data-editable="links-page"]');if(!el||!data.linksPage)return;const b=data.business||{};el.innerHTML=data.linksPage.map(l=>{const url=l.businessLink?b[l.businessLink]:l.url;const icon=l.icon?socialIcon(l.icon):'';return `<a class="link-card" href="${esc(url)}">${icon}<span>${esc(l.label)}</span></a>`}).join('')}
renderBusinessInfo();renderMenu();renderMarkets();renderCateringProducts();renderLinks();
