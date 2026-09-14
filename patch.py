import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update page-services
page_services_old = """<section class="page" id="page-services">
  <div class="hero">
    <div class="hero-inner">
      <div class="breadcrumb"><a onclick="goHome()">首頁</a><span class="sep">/</span><span class="current">服務項目</span></div>
      <h1>服務項目</h1>
      <p class="lead">三大特種應變領域，提供從評估規劃、設備代理到技術維護的完整解決方案</p>
    </div>
  </div>
  <section class="block">
    <div class="container">
      <div class="grid-3" id="servicesOverviewCards"></div>
    </div>
  </section>
  <div class="cta-band">"""

page_services_new = """<section class="page" id="page-services">
  <div class="hero">
    <div class="hero-inner">
      <div class="breadcrumb"><a onclick="goHome()">首頁</a><span class="sep">/</span><span class="current">服務項目</span></div>
      <h1>服務項目</h1>
      <p class="lead">三大特種應變領域，提供從評估規劃、設備代理到技術維護的完整解決方案</p>
    </div>
  </div>
  <!-- Three large sections will be generated here -->
  <div id="servicesOverviewSections"></div>
  <div class="cta-band">"""
content = content.replace(page_services_old, page_services_new)

# 2. Update page-category (it stays for the intermediate page showing 3 subcats)
# and add page-subcategory (for showing 6 products)
page_category_old = """<!-- ============================================================ CATEGORY DETAIL (DYNAMIC) ============================================================ -->
<section class="page" id="page-category">
  <div class="hero">
    <div class="hero-inner">
      <div class="breadcrumb" id="categoryBreadcrumb"></div>
      <h1 id="categoryTitle"></h1>
      <p class="lead" id="categoryIntro"></p>
    </div>
  </div>
  <section class="block">
    <div class="container">
      <div class="grid-3" id="categoryProductGrid"></div>
    </div>
  </section>
  <div class="cta-band">"""

page_category_new = """<!-- ============================================================ CATEGORY DETAIL (DYNAMIC) ============================================================ -->
<section class="page" id="page-category">
  <div class="hero">
    <div class="hero-inner">
      <div class="breadcrumb" id="categoryBreadcrumb"></div>
      <h1 id="categoryTitle"></h1>
      <p class="lead" id="categoryIntro"></p>
    </div>
  </div>
  <section class="block">
    <div class="container">
      <div class="grid-3" id="categorySubcategoryGrid"></div>
    </div>
  </section>
  <div class="cta-band">
    <div class="container">
      <h2>需要此領域的裝備規劃？</h2>
      <p>歡迎與乃文專業顧問洽詢採購規格與系統整合建議</p>
      <a class="btn btn-primary" style="background:#fff;color:var(--blue-brand);border-color:#fff;" onclick="goPage('contact')">洽詢採購與規劃 <span class="arrow">→</span></a>
    </div>
  </div>
</section>

<!-- ============================================================ SUBCATEGORY DETAIL (DYNAMIC) ============================================================ -->
<section class="page" id="page-subcategory">
  <div class="hero">
    <div class="hero-inner">
      <div class="breadcrumb" id="subcategoryBreadcrumb"></div>
      <h1 id="subcategoryTitle"></h1>
      <p class="lead" id="subcategoryIntro"></p>
    </div>
  </div>
  <section class="block">
    <div class="container">
      <div class="grid-3" id="subcategoryProductGrid"></div>
    </div>
  </section>
  <div class="cta-band">"""
content = content.replace(page_category_old, page_category_new)

# 3. Modify render functions
render_overview_old = """function renderServiceOverviewCards() {
  const el = document.getElementById('servicesOverviewCards'); if (!el) return;
  el.innerHTML = Object.keys(CATEGORIES).map((key, catIdx) => {
    const c = CATEGORIES[key];
    return `
    <div class="service-section-block scroll-reveal fade-up" id="service-section-${key}" style="margin-bottom: 72px; scroll-margin-top: 100px;">
      <div style="border-left: 5px solid var(--blue-brand); padding-left: 18px; margin-bottom: 28px;">
        <h2 style="font-size: 26px; color: var(--blue-deep); margin-bottom: 8px;">${c.title}</h2>
        <p style="font-size: 15.5px; color: var(--gray); line-height: 1.6;">${c.intro}</p>
      </div>
      <div class="grid-3">
        ${c.subcategories.map((sub, subIdx) => `
          <div class="arrow-card scroll-reveal fade-up" style="transition-delay: ${(subIdx * 0.1)}s; cursor: pointer;" onclick="goSubCategory('${sub.key}')">
            <div class="thumb">
              <img src="${sub.image}" alt="${sub.title}" referrerpolicy="no-referrer" />
            </div>
            <div class="body">
              <h3>${sub.title}</h3>
              <p>${sub.desc}</p>
              <div class="go">查看子分類產品總覽 ${ICONS.arrowRight}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;
  }).join('');
}"""

render_overview_new = """function renderServiceOverviewCards() {
  const el = document.getElementById('servicesOverviewSections'); if (!el) return;
  el.innerHTML = Object.keys(CATEGORIES).map((key, catIdx) => {
    const c = CATEGORIES[key];
    const isAlt = catIdx % 2 !== 0;
    const blockClass = isAlt ? 'block alt' : 'block';
    return `
    <section class="${blockClass} scroll-reveal fade-up" id="service-section-${key}" style="scroll-margin-top: 80px; padding: 100px 0; border-bottom: 1px solid var(--border);">
      <div class="container">
        <div style="text-align: center; margin-bottom: 60px;">
          <h2 style="font-size: 32px; color: var(--blue-deep); margin-bottom: 16px;">${c.title}</h2>
          <p style="font-size: 16px; color: var(--gray); max-width: 800px; margin: 0 auto; line-height: 1.8;">${c.intro}</p>
        </div>
        <div class="grid-3" style="margin-bottom: 48px;">
          ${c.subcategories.map((sub, subIdx) => `
            <div class="arrow-card scroll-reveal fade-up" style="transition-delay: ${(subIdx * 0.1)}s; cursor: pointer; display: flex; flex-direction: column; height: 100%;" onclick="goSubCategory('${sub.key}')">
              <div class="thumb" style="flex: none;">
                <img src="${sub.image}" alt="${sub.title}" referrerpolicy="no-referrer" style="width: 100%; height: 240px; object-fit: cover;" />
              </div>
              <div class="body" style="flex: 1; display: flex; flex-direction: column;">
                <h3>${sub.title}</h3>
                <p style="flex: 1; color: var(--gray); line-height: 1.6;">${sub.desc}</p>
                <div class="go" style="margin-top: auto;">查看分類詳情 ${ICONS.arrowRight}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="text-align: center;">
          <a class="btn btn-outline" onclick="goCategory('${key}')">查看 ${c.title} 所有資訊 <span class="arrow">→</span></a>
        </div>
      </div>
    </section>`;
  }).join('');
}"""
content = content.replace(render_overview_old, render_overview_new)


go_category_old = """function goCategory(key) {
  const cat = CATEGORIES[key]; if (!cat) return;
  document.getElementById('categoryTitle').textContent = cat.title;
  document.getElementById('categoryIntro').textContent = cat.intro;
  document.getElementById('categoryBreadcrumb').innerHTML =
    `<a onclick="goHome()">首頁</a><span class="sep">/</span><a onclick="goPage('services')">服務項目</a><span class="sep">/</span><span class="current">${cat.title}</span>`;
  renderCategoryProductGrid(key);
  showPage('category');
  history.replaceState(null, '', '#category/' + key);
}"""

go_category_new = """function goCategory(key) {
  const cat = CATEGORIES[key]; if (!cat) return;
  document.getElementById('categoryTitle').textContent = cat.title;
  document.getElementById('categoryIntro').textContent = cat.intro;
  document.getElementById('categoryBreadcrumb').innerHTML =
    `<a onclick="goHome()">首頁</a><span class="sep">/</span><a onclick="goPage('services')">服務項目</a><span class="sep">/</span><span class="current">${cat.title}</span>`;
  
  const el = document.getElementById('categorySubcategoryGrid');
  if (el) {
    el.innerHTML = cat.subcategories.map((sub, subIdx) => `
      <div class="arrow-card scroll-reveal fade-up" style="transition-delay: ${(subIdx * 0.1)}s; cursor: pointer; display: flex; flex-direction: column; height: 100%;" onclick="goSubCategory('${sub.key}')">
        <div class="thumb" style="flex: none;">
          <img src="${sub.image}" alt="${sub.title}" referrerpolicy="no-referrer" style="width: 100%; height: 240px; object-fit: cover;" />
        </div>
        <div class="body" style="flex: 1; display: flex; flex-direction: column;">
          <h3>${sub.title}</h3>
          <p style="flex: 1;">${sub.desc}</p>
          <div class="go">查看分類詳情 ${ICONS.arrowRight}</div>
        </div>
      </div>
    `).join('');
  }
  
  showPage('category');
  history.replaceState(null, '', '#category/' + key);
}"""
content = content.replace(go_category_old, go_category_new)


go_subcat_old = """function goSubCategory(subKey) {
  let foundSub = null;
  let foundCat = null;
  let parentCatKey = '';
  
  Object.keys(CATEGORIES).forEach(catKey => {
    const cat = CATEGORIES[catKey];
    cat.subcategories.forEach(sub => {
      if (sub.key === subKey) {
        foundSub = sub;
        foundCat = cat;
        parentCatKey = catKey;
      }
    });
  });

  if (!foundSub) return;

  document.getElementById('categoryTitle').textContent = foundSub.title;
  document.getElementById('categoryIntro').textContent = foundSub.desc;
  document.getElementById('categoryBreadcrumb').innerHTML =
    `<a onclick="goHome()">首頁</a><span class="sep">/</span><a onclick="goPage('services')">服務項目</a><span class="sep">/</span><a onclick="scrollToCategory('${parentCatKey}')">${foundCat.title}</a><span class="sep">/</span><span class="current">${foundSub.title}</span>`;
  
  const gridEl = document.getElementById('categoryProductGrid');
  if (gridEl) {
    gridEl.innerHTML = foundSub.products.map((p, pIdx) => `
      <div class="product-card scroll-reveal fade-up" style="transition-delay: ${(pIdx * 0.1)}s;" onclick="goProduct('${p.key}')">
        <div class="thumb">
          <img src="${p.image}" alt="${p.title}" referrerpolicy="no-referrer" />
        </div>
        <div class="card-banner">
          ${p.title}
        </div>
      </div>
    `).join('');
  }

  showPage('category');
  history.replaceState(null, '', '#subcategory/' + subKey);
}"""

go_subcat_new = """function goSubCategory(subKey) {
  let foundSub = null;
  let foundCat = null;
  let parentCatKey = '';
  
  Object.keys(CATEGORIES).forEach(catKey => {
    const cat = CATEGORIES[catKey];
    cat.subcategories.forEach(sub => {
      if (sub.key === subKey) {
        foundSub = sub;
        foundCat = cat;
        parentCatKey = catKey;
      }
    });
  });

  if (!foundSub) return;

  document.getElementById('subcategoryTitle').textContent = foundSub.title;
  document.getElementById('subcategoryIntro').textContent = foundSub.desc;
  document.getElementById('subcategoryBreadcrumb').innerHTML =
    `<a onclick="goHome()">首頁</a><span class="sep">/</span><a onclick="goPage('services')">服務項目</a><span class="sep">/</span><a onclick="goCategory('${parentCatKey}')">${foundCat.title}</a><span class="sep">/</span><span class="current">${foundSub.title}</span>`;
  
  const gridEl = document.getElementById('subcategoryProductGrid');
  if (gridEl) {
    gridEl.innerHTML = foundSub.products.map((p, pIdx) => `
      <div class="product-card scroll-reveal fade-up" style="transition-delay: ${(pIdx * 0.1)}s;" onclick="goProduct('${p.key}')">
        <div class="thumb">
          <img src="${p.image}" alt="${p.title}" referrerpolicy="no-referrer" />
        </div>
        <div class="card-banner">
          ${p.title}
        </div>
      </div>
    `).join('');
  }

  showPage('subcategory');
  history.replaceState(null, '', '#subcategory/' + subKey);
}"""
content = content.replace(go_subcat_old, go_subcat_new)


# Now expand the products arrays in CATEGORIES to 6 items each
import json
import re

# We can find the definition of CATEGORIES
categories_match = re.search(r'const CATEGORIES = (\{.*?\});\n\n/\* ==', content, flags=re.DOTALL)
if categories_match:
    cat_str = categories_match.group(1)
    
    # We will just parse it roughly by string replacing.
    # It's javascript, not pure json (keys unquoted sometimes, single quotes).
    # Since it's tricky, let's just use Python's re to find `products: [...]` and duplicate items to make 6.
    def expand_products(m):
        prod_block = m.group(1)
        # Find individual product dicts
        prods = re.findall(r'\{[^{}]+\}', prod_block)
        if len(prods) < 6 and len(prods) > 0:
            # Duplicate until we have 6
            new_prods = []
            for i in range(6):
                base_prod = prods[i % len(prods)]
                # replace key to make it unique: key: 'moving-tank' -> key: 'moving-tank-0'
                # base_prod looks like { key: 'moving-tank', title: '移槽車', ... }
                key_match = re.search(r"key:\s*'([^']+)'", base_prod)
                if key_match:
                    orig_key = key_match.group(1)
                    new_key = f"{orig_key}-{i+1}"
                    base_prod = base_prod.replace(f"key: '{orig_key}'", f"key: '{new_key}'")
                
                # Optionally append suffix to title
                title_match = re.search(r"title:\s*'([^']+)'", base_prod)
                if title_match:
                    orig_title = title_match.group(1)
                    # if it's the exact same we append a variant
                    new_title = f"{orig_title} 樣式 {i+1}"
                    base_prod = base_prod.replace(f"title: '{orig_title}'", f"title: '{new_title}'")
                    
                new_prods.append(base_prod)
            return "products: [\n          " + ",\n          ".join(new_prods) + "\n        ]"
        return m.group(0)

    new_content = re.sub(r'products:\s*\[(.*?)\]', expand_products, content, flags=re.DOTALL)
    
    if new_content != content:
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Updated products to 6 items each.")
    else:
        print("Regex failed to expand products.")
else:
    print("Could not find CATEGORIES.")
