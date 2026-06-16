(() => {
  'use strict';

  // ── 상태 ────────────────────────────────────────────────
  let activeCategory = 'all';

  // ── 탭 렌더링 ────────────────────────────────────────────
  function renderTabs() {
    const nav = document.getElementById('tab-nav');
    nav.innerHTML = CATEGORIES.map(cat => `
      <button
        role="tab"
        data-cat="${cat.id}"
        aria-selected="${cat.id === activeCategory}"
        class="tab-btn ${cat.id === activeCategory ? 'tab-active' : ''}"
      >${cat.label}</button>
    `).join('');

    nav.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.cat;
        renderTabs();
        renderSections();
      });
    });
  }

  // ── 카드 단일 HTML ────────────────────────────────────────
  function cardHTML(item) {
    const isActive = item.status === 'active';
    const badgeClass = isActive ? 'badge-active' : 'badge-planned';
    const badgeText  = isActive ? '운영 중' : '추후 지원 예정';
    const cardClass  = isActive ? 'portal-card' : 'portal-card card-disabled';
    const tag        = isActive ? 'a' : 'div';
    const href       = isActive ? `href="${item.url}" target="_blank" rel="noopener noreferrer"` : '';
    const title      = isActive ? `title="${item.name} 바로가기"` : `title="준비 중입니다"`;

    return `
      <${tag} ${href} ${title}
        class="${cardClass}"
        ${!isActive ? 'aria-disabled="true"' : ''}
      >
        <span class="badge ${badgeClass}">${badgeText}</span>
        <span class="card-icon" aria-hidden="true">${item.icon}</span>
        <strong class="card-name">${item.name}</strong>
        <p class="card-desc">${item.description}</p>
      </${tag}>
    `;
  }

  // ── 섹션 렌더링 ───────────────────────────────────────────
  function renderSections() {
    const container   = document.getElementById('portal-sections');
    const emptyState  = document.getElementById('empty-state');

    // 활성 카테고리에 맞게 필터
    const filtered = activeCategory === 'all'
      ? PORTAL_ITEMS
      : PORTAL_ITEMS.filter(item => item.category === activeCategory);

    if (filtered.length === 0) {
      container.innerHTML = '';
      emptyState.classList.remove('hidden');
      return;
    }
    emptyState.classList.add('hidden');

    // 전체 보기: 카테고리별 섹션 그룹핑
    if (activeCategory === 'all') {
      const grouped = {};
      filtered.forEach(item => {
        if (!grouped[item.category]) grouped[item.category] = [];
        grouped[item.category].push(item);
      });

      const SECTION_META = {
        '수업': { emoji: '📚', label: '수업 도구' },
        '업무': { emoji: '🏫', label: '업무 도구' },
        'AI':   { emoji: '🤖', label: 'AI 도구'   }
      };

      container.innerHTML = Object.entries(grouped).map(([cat, items]) => {
        const meta = SECTION_META[cat] || { emoji: '', label: cat };
        return `
          <section class="mb-10">
            <h2 class="section-title">
              <span aria-hidden="true">${meta.emoji}</span> ${meta.label}
            </h2>
            <div class="card-grid">
              ${items.map(cardHTML).join('')}
            </div>
          </section>
        `;
      }).join('');

    } else {
      // 단일 카테고리: 섹션 헤더 없이 카드 그리드만
      container.innerHTML = `
        <div class="card-grid mt-2">
          ${filtered.map(cardHTML).join('')}
        </div>
      `;
    }
  }

  // ── 초기화 ───────────────────────────────────────────────
  function init() {
    renderTabs();
    renderSections();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
