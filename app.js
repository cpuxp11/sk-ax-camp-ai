/**
 * SK AX Camp LMS - app.js
 * 라우터 + 인터랙션 + 렌더링 함수 모음
 *
 * 의존성: data.js (COURSE_CONFIG 전역 선언)
 * DOM 조작: index.html의 sidebar, main, bottom-nav
 */

// ============================================================================
// 상수 정의
// ============================================================================

const STORAGE_KEY_FONT_SIZE = 'fontSizeLevel';
const STORAGE_KEY_LAST_VISITED = 'lastVisitedClip';
const STORAGE_KEY_ONBOARDING = 'onboarding_done';
const DEFAULT_FONT_SIZE = 18;
const MIN_FONT_SIZE = 14;
const MAX_FONT_SIZE = 24;
const FONT_SIZE_STEP = 2;

// 타입 태그 매핑
const TYPE_TAG_MAP = {
  overview: '개요',
  concept: '개념',
  practice: '실습',
  reference: '참고',
  demo: '시연',
  platform: '플랫폼',
};

const TYPE_CLASS_MAP = {
  overview: 'st-overview',
  concept: 'st-concept',
  practice: 'st-practice',
  reference: 'st-reference',
  demo: 'st-demo',
  platform: 'st-platform',
};

// ============================================================================
// 유틸리티 함수
// ============================================================================

/**
 * Safe localStorage access (시크릿 모드 대비)
 */
function getStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

function setStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    // 시크릿 모드: 무시
  }
}

/**
 * 타입 코드를 한글 라벨로 변환
 */
function typeTagLabel(type) {
  return TYPE_TAG_MAP[type] || type;
}

/**
 * 타입 코드를 CSS 클래스로 변환
 */
function typeTagClass(type) {
  return TYPE_CLASS_MAP[type] || '';
}

/**
 * 토스트 알림 (3가지 타입: success, error, info)
 */
function showToast(message, type = 'info', duration = 3000) {
  const toastContainer = document.querySelector('.toast-container') || createToastContainer();

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let icon = '✓';
  if (type === 'error') icon = '✕';
  if (type === 'info') icon = 'ℹ';

  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
  `;

  toastContainer.appendChild(toast);

  // 진입 애니메이션 트리거
  setTimeout(() => toast.classList.add('visible'), 10);

  // 자동 제거
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 200);
  }, duration);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}

// ============================================================================
// 라우터 함수
// ============================================================================

/**
 * hash 파싱 및 렌더링 분기
 */
function handleRoute() {
  const hash = window.location.hash.replace(/^#/, '') || 'home';

  if (hash === 'home') {
    renderHome();
  } else {
    // #chXX-clipYY 패턴 파싱
    const match = hash.match(/^ch(\d+)-clip(\d+)$/);
    if (match) {
      const chId = `ch${match[1]}`;
      const clipId = `clip${match[2]}`;

      // 유효성 검증
      if (COURSE_CONFIG.chapters[chId] && COURSE_CONFIG.chapters[chId].clips[clipId]) {
        renderClip(chId, clipId);
      } else {
        render404();
      }
    } else {
      render404();
    }
  }

  // 스크롤 진행률 갱신
  updateScrollProgress();

  // 페이지 최상단으로 스크롤
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/**
 * 프로그래밍 방식 네비게이션
 */
function navigate(hash) {
  window.location.hash = hash;
}

/**
 * 인접한 클립 정보 반환 { prev, next }
 */
function getAdjacentClips(chId, clipId) {
  const chapters = Object.entries(COURSE_CONFIG.chapters);
  const currentChIndex = chapters.findIndex(([key]) => key === chId);
  const chapter = COURSE_CONFIG.chapters[chId];
  const clips = Object.entries(chapter.clips);
  const currentClipIndex = clips.findIndex(([key]) => key === clipId);

  let prev = null, next = null;

  // 현재 챕터 내에서 이전/다음 찾기
  if (currentClipIndex > 0) {
    const [prevKey, prevClip] = clips[currentClipIndex - 1];
    prev = { chId, clipId: prevKey, title: prevClip.title };
  }
  if (currentClipIndex < clips.length - 1) {
    const [nextKey, nextClip] = clips[currentClipIndex + 1];
    next = { chId, clipId: nextKey, title: nextClip.title };
  }

  // 현재 챕터 마지막이면, 다음 챕터 첫 클립으로
  if (!next && currentChIndex < chapters.length - 1) {
    const [nextChKey, nextChapter] = chapters[currentChIndex + 1];
    const firstClip = Object.entries(nextChapter.clips)[0];
    if (firstClip) {
      const [nextClipKey, nextClipData] = firstClip;
      next = { chId: nextChKey, clipId: nextClipKey, title: nextClipData.title };
    }
  }

  // 현재 챕터 첫 번째이고 이전이 없으면, 이전 챕터 마지막 클립으로
  if (!prev && currentChIndex > 0) {
    const [prevChKey, prevChapter] = chapters[currentChIndex - 1];
    const clips = Object.entries(prevChapter.clips);
    const lastClip = clips[clips.length - 1];
    if (lastClip) {
      const [prevClipKey, prevClipData] = lastClip;
      prev = { chId: prevChKey, clipId: prevClipKey, title: prevClipData.title };
    }
  }

  return { prev, next };
}

// ============================================================================
// 렌더링 함수 - 홈 화면
// ============================================================================

function renderHome() {
  updateActiveLink('home');
  updateBreadcrumb(null, null);

  const mainContent = document.getElementById('mainContent');

  // 이어보기 여부 확인
  const lastVisited = getLastVisited();
  let continueHtml = '';
  if (lastVisited) {
    const { chId, clipId, title, chTitle } = lastVisited;
    continueHtml = `
      <div class="continue-cta">
        <div class="continue-text">
          <div class="continue-label">지난번에 보시던 곳이 있습니다</div>
          <div class="continue-chapter">${chTitle} > ${title}</div>
        </div>
        <button class="continue-btn" onclick="navigate('${chId}-${clipId}')">
          이어서 보기 →
        </button>
      </div>
    `;
  }

  const timelineHtml = renderTimelineBar(COURSE_CONFIG.timeline);
  const chaptersHtml = renderChaptersGrid(Object.entries(COURSE_CONFIG.chapters));

  mainContent.innerHTML = `
    <div class="page-enter">
      <div class="home-greeting">
        <span class="home-greeting-name">환영합니다</span>
      </div>

      <div class="home-hero">
        <div class="home-logo-wrap">
          <img src="assets/sk-logo.png" alt="SK Logo" class="home-logo" style="width: 120px; height: auto;" />
        </div>
        <h1 class="home-title">가족한테<br />써먹는 AI</h1>
        <p class="home-subtitle">Google Gemini<br />실전 활용법</p>
      </div>

      <div class="home-meta">
        <div class="home-meta-item">
          ${COURSE_CONFIG.date}
        </div>
        <div class="home-meta-dot">·</div>
        <div class="home-meta-item">
          ${COURSE_CONFIG.location}
        </div>
      </div>

      ${continueHtml}

      <div style="background: #FFFFFF; border: 2px solid #E4002B; border-radius: 16px; padding: 36px 40px; margin: 40px 0;">
        <h2 style="color: #E4002B; margin-top: 0; font-size: 26px; margin-bottom: 24px;">오늘 우리가 할 것</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #F3F4F6;">
            <td style="padding: 16px 12px; font-size: 18px; font-weight: 700; color: #E4002B; white-space: nowrap; vertical-align: top;">1교시</td>
            <td style="padding: 16px 12px; font-size: 18px; line-height: 1.7;">AI란? + 왜 Gemini? + <strong>트로트 노래 만들기</strong></td>
          </tr>
          <tr style="border-bottom: 1px solid #F3F4F6;">
            <td style="padding: 16px 12px; font-size: 18px; font-weight: 700; color: #E4002B; white-space: nowrap; vertical-align: top;">2교시</td>
            <td style="padding: 16px 12px; font-size: 18px; line-height: 1.7;">나만의 AI 비서(Gem) 만들기 + <strong>회고록 작가</strong></td>
          </tr>
          <tr style="border-bottom: 1px solid #F3F4F6;">
            <td style="padding: 16px 12px; font-size: 18px; font-weight: 700; color: #E4002B; white-space: nowrap; vertical-align: top;">3교시</td>
            <td style="padding: 16px 12px; font-size: 18px; line-height: 1.7;">AI Studio로 <strong>와이프 번역기, 골프 캐디, 주가·부동산 분석기</strong></td>
          </tr>
          <tr>
            <td style="padding: 16px 12px; font-size: 18px; font-weight: 700; color: #E4002B; white-space: nowrap; vertical-align: top;">4교시</td>
            <td style="padding: 16px 12px; font-size: 18px; line-height: 1.7;">Q&A + 마무리</td>
          </tr>
        </table>
        <p style="margin: 24px 0 0 0; padding-top: 20px; border-top: 2px solid #E4002B; font-size: 20px; font-weight: 700; color: #1F2937; text-align: center;">코딩 한 줄 안 하고, 7개의 AI 도구를 만들어 갑니다.</p>
      </div>

      <div class="timeline-section">
        <h2 class="timeline-label">오늘의 시간표</h2>
        ${timelineHtml}
      </div>

      <div class="chapters-grid">
        ${chaptersHtml}
      </div>
    </div>
  `;
}

/**
 * 타임라인 바 렌더링
 */
function renderTimelineBar(timeline) {
  let chapterIdx = 0;
  const chKeys = Object.keys(COURSE_CONFIG.chapters);

  const blocks = timeline.map((item) => {
    const width = item.width || 10;

    if (item.break) {
      return `
      <div
        class="timeline-block timeline-break"
        style="flex: ${width} 0 0;"
        title="${item.label}${item.duration ? ' (' + item.duration + ')' : ''}"
        aria-label="${item.label}"
      >
        <span class="timeline-text">${item.label}</span>
      </div>
    `;
    }

    const chId = chKeys[chapterIdx++];
    return `
      <div
        class="timeline-block"
        style="flex: ${width} 0 0;"
        onclick="navigate('${chId}-clip01')"
        role="button"
        tabindex="0"
        title="${item.label} (${item.duration})"
      >
        <span class="timeline-text">${item.label}</span>
      </div>
    `;
  }).join('');

  return `<div class="timeline-bar">${blocks}</div>`;
}

/**
 * 챕터 카드 그리드 렌더링
 */
function renderChaptersGrid(chapters) {
  const lastVisited = getLastVisited();

  return chapters.map(([chId, chapter]) => {
    const isContinue = lastVisited && lastVisited.chId === chId;
    const badge = isContinue ? '<span class="continue-badge">이어보기</span>' : '';

    return `
      <div class="chapter-card" onclick="navigate('${chId}-clip01')">
        ${badge}
        <div class="chapter-card-num">${chapter.chNum}</div>
        <h3 class="chapter-card-title">${chapter.title}</h3>
        <div class="chapter-card-duration">${chapter.duration}</div>
        <p class="chapter-card-desc">${chapter.desc || ''}</p>
      </div>
    `;
  }).join('');
}

// ============================================================================
// 렌더링 함수 - 콘텐츠 페이지
// ============================================================================

function renderClip(chId, clipId) {
  const chapter = COURSE_CONFIG.chapters[chId];
  const clip = chapter.clips[clipId];

  if (!clip) {
    render404();
    return;
  }

  updateActiveLink(`${chId}-${clipId}`);
  updateBreadcrumb(chId, clipId);

  // 마지막 방문 기록
  saveLastVisited(chId, clipId, chapter.title, clip.title);

  const mainContent = document.getElementById('mainContent');

  // 메타 배지
  const metaHtml = renderClipMeta({
    duration: clip.duration || '',
    type: clip.type || 'overview',
    chNum: chapter.chNum,
  });

  // 콘텐츠 (빈 경우 플레이스홀더)
  let contentHtml = clip.content || '<div class="placeholder-preparing">곧 업데이트됩니다</div>';

  // 이전/다음 네비
  const { prev, next } = getAdjacentClips(chId, clipId);
  const navHtml = renderPrevNext({ prev, next });

  mainContent.innerHTML = `
    <div class="page-enter">
      ${metaHtml}

      <h1 class="clip-title">${clip.title}</h1>

      <div class="clip-content">
        ${contentHtml}
      </div>

      ${navHtml}
    </div>
  `;

  // 상호작용 초기화
  initGlossaryTooltips();
  initScrollProgress();
}

/**
 * 클립 메타 배지 렌더링
 */
function renderClipMeta(opts) {
  const { duration, type, chNum } = opts;
  const label = typeTagLabel(type);
  const tagClass = typeTagClass(type);

  return `
    <div class="clip-meta">
      ${duration ? `<span class="meta-badge">${duration}</span>` : ''}
      <span class="meta-badge">CH ${chNum}</span>
      <span class="meta-badge meta-type ${tagClass}">${label}</span>
    </div>
  `;
}

/**
 * 이전/다음 네비 렌더링
 */
function renderPrevNext(opts) {
  const { prev, next } = opts;

  let prevHtml = '';
  if (prev) {
    prevHtml = `<a href="#${prev.chId}-${prev.clipId}" class="nav-link nav-prev">← ${prev.title}</a>`;
  } else {
    prevHtml = `<div class="nav-link nav-prev nav-empty"></div>`;
  }

  let nextHtml = '';
  if (next) {
    nextHtml = `<a href="#${next.chId}-${next.clipId}" class="nav-link nav-next">${next.title} →</a>`;
  } else {
    nextHtml = `<div class="nav-link nav-next nav-empty"></div>`;
  }

  return `
    <nav class="prev-next-nav">
      ${prevHtml}
      ${nextHtml}
    </nav>
  `;
}

/**
 * 404 에러 페이지
 */
function render404() {
  updateActiveLink(null);
  updateBreadcrumb(null, null);

  const mainContent = document.getElementById('mainContent');
  mainContent.innerHTML = `
    <div class="page-enter error-page">
      <div class="error-icon">⚠</div>
      <h1>페이지를 찾을 수 없습니다</h1>
      <p>요청하신 페이지가 존재하지 않습니다.<br />아래 버튼을 눌러 홈으로 돌아가주세요.</p>
      <button class="btn btn-primary" onclick="navigate('home')">홈으로 돌아가기</button>
    </div>
  `;
}

// ============================================================================
// 사이드바 함수
// ============================================================================

function renderSidebar() {
  const sidebarNav = document.querySelector('.sidebar-nav');

  let html = '';
  for (const [chId, chapter] of Object.entries(COURSE_CONFIG.chapters)) {
    // 챕터 헤더
    html += `
      <div class="sidebar-chapter">
        <div class="sidebar-chapter-header"
             aria-expanded="false" tabindex="0">
          <div class="ch-label">
            <span class="ch-num">CH${chapter.chNum}</span>
            <span class="ch-title">${chapter.title}</span>
          </div>
          <div>
            <span class="ch-time">${chapter.duration}</span>
            <span class="chevron">▶</span>
          </div>
        </div>

        <div class="sidebar-clips" style="max-height: 0; overflow: hidden;">
    `;

    // 클립 목록
    for (const [clipId, clip] of Object.entries(chapter.clips)) {
      html += `
        <a href="#${chId}-${clipId}"
           class="sidebar-clip-link"
           data-key="${chId}-${clipId}"
           role="link"
           tabindex="0">
          <span class="clip-dot">•</span>
          <span class="sidebar-clip-title">${clip.title}</span>
        </a>
      `;
    }

    html += `
        </div>
      </div>
    `;
  }

  sidebarNav.innerHTML = html;

  // 이벤트 위임: 아코디언 토글
  sidebarNav.addEventListener('click', (e) => {
    if (e.target.closest('.sidebar-chapter-header')) {
      const header = e.target.closest('.sidebar-chapter-header');
      const chId = header.parentElement.querySelector('.sidebar-clips')
        ?.previousElementSibling?.querySelector('[onclick]')?.getAttribute('onclick')
        ?.match(/toggleChapter\('([^']+)'\)/)?.[1];

      // 더 정확한 방법: data attribute 사용
      const chapter = header.closest('.sidebar-chapter');
      const allHeaders = document.querySelectorAll('.sidebar-chapter-header');
      const headerIndex = Array.from(allHeaders).indexOf(header);
      const chKeys = Object.keys(COURSE_CONFIG.chapters);
      if (chKeys[headerIndex]) {
        toggleChapter(chKeys[headerIndex]);
      }
    }
  });

  // 키보드: Enter/Space로 아코디언 토글
  sidebarNav.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('.sidebar-chapter-header')) {
      e.preventDefault();
      const header = e.target.closest('.sidebar-chapter-header');
      const chapter = header.closest('.sidebar-chapter');
      const allHeaders = document.querySelectorAll('.sidebar-chapter-header');
      const headerIndex = Array.from(allHeaders).indexOf(header);
      const chKeys = Object.keys(COURSE_CONFIG.chapters);
      if (chKeys[headerIndex]) {
        toggleChapter(chKeys[headerIndex]);
      }
    }
  });
}

/**
 * 챕터 아코디언 토글
 */
function toggleChapter(chId) {
  const chapter = document.querySelector(`[data-chapter="${chId}"]`)
    || document.querySelector('.sidebar-chapter:has([onclick*="' + chId + '"])');

  // 더 직관적인 방식: 모든 챕터를 순회하며 찾기
  const allChapters = document.querySelectorAll('.sidebar-chapter');
  const chKeys = Object.keys(COURSE_CONFIG.chapters);

  let targetChapter = null;
  allChapters.forEach((ch, idx) => {
    if (chKeys[idx] === chId) {
      targetChapter = ch;
    }
  });

  if (!targetChapter) return;

  const header = targetChapter.querySelector('.sidebar-chapter-header');
  const clips = targetChapter.querySelector('.sidebar-clips');
  const chevron = header.querySelector('.chevron');

  const isExpanded = clips.style.maxHeight !== '0px' && clips.style.maxHeight !== '';

  if (isExpanded) {
    // 접기
    clips.style.maxHeight = '0';
    chevron.textContent = '▶';
    header.setAttribute('aria-expanded', 'false');
  } else {
    // 펼치기
    clips.style.maxHeight = clips.scrollHeight + 'px';
    chevron.textContent = '▼';
    header.setAttribute('aria-expanded', 'true');
  }
}

/**
 * 챕터 강제 펼치기
 */
function openChapter(chId) {
  const allChapters = document.querySelectorAll('.sidebar-chapter');
  const chKeys = Object.keys(COURSE_CONFIG.chapters);

  allChapters.forEach((ch, idx) => {
    if (chKeys[idx] === chId) {
      const clips = ch.querySelector('.sidebar-clips');
      const header = ch.querySelector('.sidebar-chapter-header');
      const chevron = header.querySelector('.chevron');

      clips.style.maxHeight = clips.scrollHeight + 'px';
      chevron.textContent = '▼';
      header.setAttribute('aria-expanded', 'true');
    }
  });
}

/**
 * 사이드바 active 링크 업데이트
 */
function updateActiveLink(key) {
  // 모든 링크 비활성화
  document.querySelectorAll('.sidebar-clip-link, .sidebar-chapter-header').forEach(el => {
    el.classList.remove('active');
    el.removeAttribute('aria-current');
  });

  if (key && key !== 'home') {
    // 해당 링크 활성화
    const link = document.querySelector(`[data-key="${key}"]`);
    if (link) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');

      // 부모 챕터 자동 펼치기
      const chId = key.split('-')[0];
      openChapter(chId);

      // 사이드바 자동 스크롤
      link.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  } else if (key === 'home') {
    // 홈일 때는 특별 처리 (사이드바는 활성화하지 않음)
  }
}

/**
 * 상단 breadcrumb 갱신
 */
function updateBreadcrumb(chId, clipId) {
  const breadcrumbEl = document.querySelector('.breadcrumb');

  let html = `<a href="#home" class="breadcrumb-link">홈</a>`;

  if (chId && clipId && COURSE_CONFIG.chapters[chId]) {
    const chapter = COURSE_CONFIG.chapters[chId];
    const clip = chapter.clips[clipId];

    html += ` / <span class="breadcrumb-text">${chapter.title}</span>`;
    if (clip) {
      html += ` / <span class="breadcrumb-text">${clip.title}</span>`;
    }
  }

  breadcrumbEl.innerHTML = html;
}

/**
 * 사이드바 접기/펼치기
 */
function toggleSidebarCollapse() {
  const body = document.body;
  body.classList.toggle('nav-hidden');

  // collapse/expand 버튼 visibility 전환
  const isCollapsed = body.classList.contains('nav-hidden');
  document.querySelector('.sidebar-collapse-btn')?.classList.toggle('hidden', isCollapsed);
  document.querySelector('.sidebar-expand-btn')?.classList.toggle('hidden', !isCollapsed);

  // localStorage에 저장
  setStorage('sidebarCollapsed', isCollapsed ? 'true' : 'false');
}

/**
 * 모바일 사이드바 닫기
 */
function closeMobile() {
  const overlay = document.querySelector('.sidebar-overlay');
  const sidebar = document.querySelector('.sidebar');

  if (overlay && sidebar) {
    overlay.classList.remove('active');
    sidebar.classList.remove('active');
  }
}

// ============================================================================
// UI 업데이트 함수
// ============================================================================

/**
 * 폰트 크기 변경
 */
function changeFontSize(delta) {
  const currentLevel = parseInt(getStorage(STORAGE_KEY_FONT_SIZE)) || 0;
  const newLevel = Math.max(-2, Math.min(3, currentLevel + delta));

  if (newLevel < -2 || newLevel > 3) {
    showToast(
      delta > 0 ? '최대 크기에 도달했습니다' : '최소 크기에 도달했습니다',
      'info'
    );
    return;
  }

  setStorage(STORAGE_KEY_FONT_SIZE, newLevel);

  const fontSize = DEFAULT_FONT_SIZE + newLevel * FONT_SIZE_STEP;
  document.documentElement.style.fontSize = fontSize + 'px';

  // 버튼 상태 업데이트
  updateFontSizeButtonStates(newLevel);

  showToast(`글씨 크기: ${fontSize}px`, 'info', 2000);
}

/**
 * 폰트 크기 초기화
 */
function resetFontSize() {
  setStorage(STORAGE_KEY_FONT_SIZE, 0);
  document.documentElement.style.fontSize = DEFAULT_FONT_SIZE + 'px';
  updateFontSizeButtonStates(0);
  showToast('기본 크기로 복원했습니다', 'info', 2000);
}

function updateFontSizeButtonStates(level) {
  const btns = document.querySelectorAll('.font-btn');
  btns.forEach((btn, idx) => {
    btn.classList.remove('active');
    if (idx === level + 2) {
      btn.classList.add('active');
    }

    // disabled 상태
    if ((idx === 0 && level <= -2) || (idx === 4 && level >= 3)) {
      btn.disabled = true;
      btn.setAttribute('aria-disabled', 'true');
    } else {
      btn.disabled = false;
      btn.removeAttribute('aria-disabled');
    }
  });
}

/**
 * 프롬프트 복사
 */
function copyPrompt(btn) {
  const card = btn.closest('.prompt-card');
  const bodyEl = card.querySelector('.prompt-body');
  const text = bodyEl.innerText;

  // 복사 전 버튼 상태 저장
  const originalText = btn.innerText;

  // Clipboard API 시도
  navigator.clipboard.writeText(text)
    .then(() => {
      btn.innerText = '복사됨! ✓';
      btn.classList.add('success');
      setTimeout(() => {
        btn.innerText = originalText;
        btn.classList.remove('success');
      }, 1500);
      showToast('프롬프트가 복사되었습니다', 'success', 2000);
    })
    .catch(() => {
      // Fallback: execCommand
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        btn.innerText = '복사됨! ✓';
        btn.classList.add('success');
        setTimeout(() => {
          btn.innerText = originalText;
          btn.classList.remove('success');
        }, 1500);
        showToast('프롬프트가 복사되었습니다', 'success', 2000);
      } catch (err) {
        btn.innerText = '복사 실패';
        btn.classList.add('error');
        setTimeout(() => {
          btn.innerText = originalText;
          btn.classList.remove('error');
        }, 2000);
        showToast('복사에 실패했습니다. 텍스트를 직접 선택해주세요.', 'error');
      }
    });
}

/**
 * Glossary 팝오버 초기화
 */
function initGlossaryTooltips() {
  document.querySelectorAll('.glossary-term').forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      const def = el.getAttribute('data-definition');
      if (!def) return;

      // 팝오버 생성 (간단 구현)
      const tooltip = document.createElement('div');
      tooltip.className = 'glossary-tooltip';
      tooltip.innerText = def;
      document.body.appendChild(tooltip);

      const rect = el.getBoundingClientRect();
      tooltip.style.top = (rect.bottom + 8) + 'px';
      tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';

      el.addEventListener('mouseleave', () => tooltip.remove(), { once: true });
    });
  });
}

/**
 * 스크롤 진행률 즉시 갱신 (라우트 변경 시 호출)
 */
function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight ? (scrollTop / docHeight) * 100 : 0;

  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    progressBar.style.width = scrollPercent + '%';
  }
}

/**
 * 스크롤 진행률 바 초기화
 */
function initScrollProgress() {
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight ? (scrollTop / docHeight) * 100 : 0;

    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
      progressBar.style.width = scrollPercent + '%';
    }
  };

  window.addEventListener('scroll', updateProgress);
  updateProgress();
}

/**
 * 마지막 방문 클립 저장
 */
function saveLastVisited(chId, clipId, chTitle, clipTitle) {
  const data = JSON.stringify({ chId, clipId, title: clipTitle, chTitle });
  setStorage(STORAGE_KEY_LAST_VISITED, data);
}

/**
 * 마지막 방문 클립 조회
 */
function getLastVisited() {
  const data = getStorage(STORAGE_KEY_LAST_VISITED);
  if (!data) return null;
  try {
    return JSON.parse(data);
  } catch (e) {
    return null;
  }
}

// ============================================================================
// 컴포넌트 렌더링 함수 (HTML 문자열 반환)
// ============================================================================

/**
 * 학습목표 박스 렌더링
 */
function renderPracticeGoalBox(goals) {
  const goalItems = goals.map(goal => `<li>${goal}</li>`).join('');
  return `
    <div class="practice-goal-box">
      <div class="practice-goal-title">이 실습에서는</div>
      <ul class="practice-goal-list">
        ${goalItems}
      </ul>
    </div>
  `;
}

/**
 * 비교 테이블 렌더링
 */
function renderCompareTable(opts) {
  const { headers, rows } = opts;

  let headerHtml = headers.map(h => `<th>${h}</th>`).join('');
  let rowsHtml = rows.map((row, idx) => {
    const cls = idx % 2 === 0 ? '' : 'alt';
    const cells = row.map(cell => `<td>${cell}</td>`).join('');
    return `<tr class="${cls}">${cells}</tr>`;
  }).join('');

  return `
    <table class="compare-table" role="table">
      <thead>
        <tr>
          ${headerHtml}
        </tr>
      </thead>
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>
  `;
}

/**
 * 프롬프트 카드 렌더링
 */
function renderPromptCard(opts) {
  const { title, body, highlights } = opts;

  // body에서 [텍스트] 패턴을 찾아 인라인 배지로 변환
  let formattedBody = body;
  if (highlights) {
    highlights.forEach(h => {
      const pattern = new RegExp(`\\[${h}\\]`, 'g');
      formattedBody = formattedBody.replace(pattern, `<mark class="highlight">[${h}]</mark>`);
    });
  }

  return `
    <div class="prompt-card">
      <div class="prompt-header">
        <h4 class="prompt-title">${title}</h4>
        <button class="prompt-copy-btn" onclick="copyPrompt(this)">복사</button>
      </div>
      <div class="prompt-body">${formattedBody}</div>
    </div>
  `;
}

/**
 * 플랫폼 접속 카드 렌더링
 */
function renderPlatformCard(opts) {
  const { name, icon, url, desc } = opts;

  return `
    <div class="platform-card">
      <div class="platform-info">
        <div class="platform-icon">${icon}</div>
        <div>
          <h4 class="platform-name">${name}</h4>
          <p class="platform-desc">${desc}</p>
        </div>
      </div>
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="platform-card-btn">
        접속하기 →
      </a>
    </div>
  `;
}

/**
 * Phase 진행도 렌더링
 */
function renderPhaseFlow(phases) {
  const phaseHtml = phases.map((phase, idx) => {
    const isBreak = phase.break;
    if (isBreak) {
      return `
        <div class="phase-break">
          <div class="phase-break-label">${phase.title}</div>
        </div>
      `;
    }

    const isOptional = phase.optional;
    const cls = isOptional ? 'phase-step optional' : 'phase-step';
    const badge = isOptional ? '<span class="optional-badge">[선택]</span>' : '';

    return `
      <div class="${cls}">
        <div class="phase-num">Phase ${phase.num}</div>
        <div class="phase-label">${phase.title}</div>
        <div class="phase-duration">${phase.duration}</div>
        ${badge}
      </div>
      ${idx < phases.length - 1 ? '<div class="phase-arrow">→</div>' : ''}
    `;
  }).join('');

  return `
    <div class="phase-flow">
      ${phaseHtml}
    </div>
  `;
}

/**
 * 비유/인사이트 박스
 */
function renderQuoteBox(opts) {
  const { title, content } = opts;
  return `
    <div class="quote-box">
      <div class="quote-content">
        <strong>${title}</strong>
        <p>${content}</p>
      </div>
    </div>
  `;
}

/**
 * 이번 주 실천 카드
 */
function renderActionCard(text) {
  return `
    <div class="action-card">
      <div class="action-label">이번 주 실천</div>
      <div class="action-content">${text}</div>
    </div>
  `;
}

/**
 * 챕터 연결 카드
 */
function renderBridgeCard(opts) {
  const { summary, next } = opts;
  return `
    <div class="bridge-card">
      <div class="bridge-summary">${summary}</div>
      ${next ? `<a href="#${next.chId}-${next.clipId}" class="bridge-link">${next.title} →</a>` : ''}
    </div>
  `;
}

/**
 * 파일 다운로드 카드
 */
function renderFileDownload(opts) {
  const { name, desc, href } = opts;
  return `
    <div class="file-download-card">
      <div class="file-icon">📄</div>
      <div class="file-info">
        <h4>${name}</h4>
        <p>${desc}</p>
      </div>
      <a href="${href}" download class="file-download-btn">다운로드</a>
    </div>
  `;
}

// ============================================================================
// 초기화
// ============================================================================

function init() {
  // 폰트 크기 복원
  const storedFontSize = getStorage(STORAGE_KEY_FONT_SIZE);
  if (storedFontSize !== null) {
    const level = parseInt(storedFontSize);
    const fontSize = DEFAULT_FONT_SIZE + level * FONT_SIZE_STEP;
    document.documentElement.style.fontSize = fontSize + 'px';
    updateFontSizeButtonStates(level);
  }

  // 사이드바 상태 복원
  const sidebarCollapsed = getStorage('sidebarCollapsed') === 'true';
  if (sidebarCollapsed) {
    document.body.classList.add('nav-hidden');
    document.querySelector('.sidebar-collapse-btn')?.classList.add('hidden');
    document.querySelector('.sidebar-expand-btn')?.classList.remove('hidden');
  }

  // 사이드바 렌더
  renderSidebar();

  // 라우터 초기화
  handleRoute();

  // 첫 방문 온보딩 확인
  const onboardingDone = getStorage(STORAGE_KEY_ONBOARDING);
  if (!onboardingDone) {
    showOnboarding();
    setStorage(STORAGE_KEY_ONBOARDING, 'true');
  }

  // 해시 변경 리스너
  window.addEventListener('hashchange', handleRoute);

  // 사이드바 토글 버튼
  document.querySelector('.sidebar-collapse-btn')?.addEventListener('click', toggleSidebarCollapse);
  document.querySelector('.sidebar-expand-btn')?.addEventListener('click', toggleSidebarCollapse);

  // 햄버거 메뉴
  document.querySelector('.hamburger')?.addEventListener('click', () => {
    const overlay = document.querySelector('.sidebar-overlay');
    const sidebar = document.querySelector('.sidebar');
    overlay.classList.add('active');
    sidebar.classList.add('active');
  });

  document.querySelector('.sidebar-overlay')?.addEventListener('click', closeMobile);
  document.querySelector('.hamburger-close')?.addEventListener('click', closeMobile);

  // 하단 네비 버튼
  document.querySelector('.bottom-nav-home')?.addEventListener('click', () => {
    navigate('#home');
  });

  document.querySelector('.bottom-nav-prev')?.addEventListener('click', () => {
    const hash = window.location.hash.replace(/^#/, '');
    const match = hash.match(/^ch(\d+)-clip(\d+)$/);
    if (match) {
      const { prev } = getAdjacentClips(`ch${match[1]}`, `clip${match[2]}`);
      if (prev) navigate(`#${prev.chId}-${prev.clipId}`);
    }
  });

  document.querySelector('.bottom-nav-next')?.addEventListener('click', () => {
    const hash = window.location.hash.replace(/^#/, '');
    const match = hash.match(/^ch(\d+)-clip(\d+)$/);
    if (match) {
      const { next } = getAdjacentClips(`ch${match[1]}`, `clip${match[2]}`);
      if (next) navigate(`#${next.chId}-${next.clipId}`);
    }
  });

  // 폰트 버튼
  document.querySelectorAll('.font-btn').forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      const currentLevel = parseInt(getStorage(STORAGE_KEY_FONT_SIZE)) || 0;
      const targetLevel = idx - 2; // [A-, 기본, A+] = [-2, 0, 2]
      changeFontSize(targetLevel - currentLevel);
    });
  });
}

// 페이지 로드 시 init 실행
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ============================================================================
// 헬퍼: 온보딩
// ============================================================================

function showOnboarding() {
  // 간단한 온보딩 토스트
  showToast(
    '팁: 글씨가 작으면 상단 오른쪽 A+ 버튼을 눌러주세요!',
    'info',
    4000
  );
}

/**
 * 추가 내보내기 (data.js에서 호출 가능하도록)
 */
window.renderClipMeta = renderClipMeta;
window.renderPracticeGoalBox = renderPracticeGoalBox;
window.renderCompareTable = renderCompareTable;
window.renderPromptCard = renderPromptCard;
window.renderPlatformCard = renderPlatformCard;
window.renderPhaseFlow = renderPhaseFlow;
window.renderQuoteBox = renderQuoteBox;
window.renderActionCard = renderActionCard;
window.renderBridgeCard = renderBridgeCard;
window.renderFileDownload = renderFileDownload;
window.typeTagLabel = typeTagLabel;
window.typeTagClass = typeTagClass;
