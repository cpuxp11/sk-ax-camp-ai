const COURSE_CONFIG = {
  title: "가족한테 써먹는 AI",
  org: "SK",
  subtitle: "Google Gemini 실전 활용법",
  logoSrc: "assets/sk-logo.svg",
  date: "2026.03.26 (수) 13:30",
  location: "아너스라운지 6층",
  instructor: "",

  glossary: {
    "LLM": "Large Language Model. 세상의 거의 모든 글을 읽고 공부한 AI",
    "프롬프트": "AI에게 지시하는 말. 연극의 프롬프터에서 유래",
    "프롬프팅": "AI에게 잘 시키는 기술. 4원칙: 역할→맥락→형식→단계",
    "Gems": "Gemini의 나만의 AI 비서 기능. 역할을 영구 저장",
    "AI Studio": "Google의 AI 앱 빌더. Gems보다 고급 — 실시간 검색+도구 연결",
    "바이브 코딩": "코딩 없이, 말로 AI 도구를 만드는 것",
    "할루시네이션": "AI가 아는 척하면서 지어내는 현상. 중요 결정은 반드시 확인",
    "역질문": "뭘 시켜야 할지 모를 때, AI에게 '뭘 물어봐야 해?' 먼저 묻는 기법"
  },

  timeline: [
    { label: "1교시", percent: 21, duration: "50분", color: "#E4002B" },
    { label: "Break", percent: 4, duration: "10분", color: "#E5E7EB", break: true },
    { label: "2교시", percent: 25, duration: "60분", color: "#E4002B" },
    { label: "Break", percent: 4, duration: "10분", color: "#E5E7EB", break: true },
    { label: "3교시", percent: 33, duration: "90분", color: "#E4002B" },
    { label: "Break", percent: 4, duration: "10분", color: "#E5E7EB", break: true },
    { label: "4교시", percent: 5, duration: "10분", color: "#E4002B" }
  ],

  chapters: [
    {
      id: "ch01",
      num: "01",
      title: "LLM 비교: GPT vs Gemini (vs Claude)",
      icon: "🤖",
      timeRange: "50분",
      desc: "생성형 AI 시장의 흐름과 임원진의 선택 기준, 구글 워크스페이스 연동을 통한 실시간 업무 효율화",
      clips: [
        {
          id: "ch01-clip01",
          title: "오늘의 약속",
          type: "개요",
          duration: "~5분",
          content: `<h2>오늘이 끝나면 이런 걸 할 수 있습니다</h2>
<ul style="line-height: 1.9; font-size: 19px;">
  <li>AI로 세상에 하나뿐인 노래를 만들어서 가족한테 보내기</li>
  <li>"나는 누구일까요?" AI 이미지 퀴즈로 가족 단톡방 웃기기</li>
  <li>내 인생 이야기를 AI와 대화하면서 회고록으로 정리하기</li>
  <li>배우자가 "아니 괜찮아"라고 했을 때, 진짜 뜻을 AI한테 물어보기</li>
  <li>관심 종목 시세를 AI한테 쉽게 설명해달라고 시키기</li>
</ul>
<div style="background: #FFF0F0; border-left: 4px solid #E4002B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #E4002B; font-size: 19px; margin-bottom: 10px;">AI는 젊은 사람들 것이라고요?</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">아닙니다. 오히려 경험이 많은 분들이 더 잘 쓸 수 있습니다. 왜냐하면 AI에게 가장 중요한 건 '좋은 질문을 하는 능력'이고, 그건 수십 년 경험에서 나오거든요.</p>
</div>`
        },
        {
          id: "ch01-clip02",
          title: "AI가 뭔가요?",
          type: "개념",
          duration: "~10분",
          content: `<h2>AI가 뭔가요? — 1분 정리</h2>
<h3>먼저, LLM이라는 단어</h3>
<p>요즘 뉴스에서 "LLM" 자주 나옵니다. Large Language Model = 대규모 언어 모델입니다.</p>
<blockquote style="border-left: 5px solid #E4002B; padding: 24px 28px; margin: 28px 0; background: #FFF5F5; border-radius: 0 10px 10px 0;">
  <p style="margin: 0; font-size: 21px; font-weight: 700; color: #1F2937; line-height: 1.6;">LLM = 세상의 거의 모든 글을 읽고 공부한 AI</p>
</blockquote>
<p>인터넷의 책, 뉴스, 논문, 블로그, 위키피디아를 수천억 개 읽고 학습했습니다.</p>

<h3>그래서 AI는요</h3>
<blockquote style="border-left: 5px solid #E4002B; padding: 24px 28px; margin: 28px 0; background: #FFF5F5; border-radius: 0 10px 10px 0;">
  <p style="margin: 0; font-size: 21px; font-weight: 700; color: #1F2937; line-height: 1.6;">AI = 엄청 똑똑한 대화 상대</p>
</blockquote>
<p>카카오톡처럼 말을 주고받는데, 상대방이 세상의 거의 모든 책을 읽은 비서입니다.</p>
<ul style="line-height: 1.9; font-size: 19px;">
  <li>질문하면 답해주기</li>
  <li>글 작성하기</li>
  <li>사진 분석하기</li>
  <li>파일 정리하기</li>
  <li>유튜브 영상 요약하기</li>
</ul>

<div style="background: #FFF8E1; border-left: 4px solid #F59E0B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #F59E0B; font-size: 19px; margin-bottom: 10px;">핵심 한 줄</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">잘 시키면 잘 하고, 대충 시키면 대충 합니다. 그래서 <strong>'어떻게 시킬 것인가'</strong>가 중요합니다.</p>
</div>`
        },
        {
          id: "ch01-clip03",
          title: "AI 3대장 소개",
          type: "개념",
          duration: "~10분",
          content: `<h2>AI 3대장 소개</h2>
<p>편의점으로 치면 CU, GS25, 세븐일레븐 같은 거예요. 다 비슷하지만, 각각의 특징이 있습니다.</p>
<table style="width: 100%; border-collapse: collapse; margin: 28px 0;">
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">구분</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">ChatGPT</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">Gemini (제미나이)</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">Claude (클로드)</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">만든 곳</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">OpenAI (미국)</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">Google (구글)</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">Anthropic (미국)</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">쉽게 말하면</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">AI계의 원조, 가장 유명함</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">구글이 만든 AI, 구글 서비스와 찰떡</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">글 잘 쓰는 AI, 꼼꼼함</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">접속 주소</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">chat.openai.com</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;"><a href="https://gemini.google.com" target="_blank" style="color: #2563EB; text-decoration: underline;">gemini.google.com</a></td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">claude.ai</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">무료 사용</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">가능 (제한적)</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">가능 (넉넉함)</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">가능 (제한적)</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">유료 가격</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">월 $20</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">월 $20</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">월 $20</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">한국어</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">잘함</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">잘함</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">잘함</td>
  </tr>
</table>

<h3>그래서 뭐가 다른데?</h3>
<p>솔직히 세 개 다 잘합니다.</p>
<blockquote style="border-left: 5px solid #E4002B; padding: 24px 28px; margin: 28px 0; background: #FFF5F5; border-radius: 0 10px 10px 0;">
  <p style="margin: 0; font-size: 21px; font-weight: 700; color: #1F2937; line-height: 1.6;">Gemini는 구글과 연결됩니다.</p>
</blockquote>
<p>Gmail, Google Drive, Google Docs, YouTube... Gemini는 이 모든 것과 연결됩니다. ChatGPT나 Claude는 안 됩니다.</p>`
        },
        {
          id: "ch01-clip04",
          title: "왜 Gemini인가?",
          type: "개념",
          duration: "~10분",
          content: `<h2>왜 오늘 구글 제미나이를 배우나요?</h2>
<h3>이유 1: 이미 구글을 쓰고 계시니까</h3>
<p>Gmail, 유튜브, 구글 지도. 이미 다 쓰고 계십니다. 추가 가입 없이 바로 시작할 수 있습니다.</p>

<h3>이유 2: 유튜브 링크 하나면 끝 (킬러 기능)</h3>
<div data-prompt="이 유튜브 영상을 보고 핵심 내용을 정리해줘.&#10;https://www.youtube.com/watch?v=Ll0oAYdzDAk">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 프롬프트 예시</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.9; margin: 0; font-size: 18px;">이 유튜브 영상을 보고 핵심 내용을 정리해줘.
https://www.youtube.com/watch?v=Ll0oAYdzDAk</pre>
  </div>
</div>
<p>AI가 해주는 것: 1시간 강의→3분 핵심 요약, 타임스탬프, 포인트 추출</p>
<p><strong>왜 대단한가?</strong> 유튜브는 구글 것입니다. Gemini는 유튜브 영상의 내용을 가장 자연스럽고 정확하게 이해합니다. 링크 하나만 붙여넣으면 끝!</p>

<div style="background: #F0F7FF; border-left: 4px solid #2563EB; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #2563EB; font-size: 19px; margin-bottom: 10px;">활용 예시</h3>
  <ul style="margin: 0; font-size: 18px; line-height: 1.8;">
    <li>건강 강의 요약</li>
    <li>재테크 영상</li>
    <li>손주 추천 영상</li>
    <li>영어 강의 한국어 요약</li>
  </ul>
</div>

<h3>이유 3: Gemini만 되는 것들</h3>
<ul style="line-height: 1.9; font-size: 19px;">
  <li>유튜브 영상 분석</li>
  <li>음악 생성</li>
  <li>구글 서비스 연동</li>
</ul>

<h3>이유 4: 가족한테 알려주기 가장 쉬움</h3>
<p>"구글 들어가서 Gemini 눌러봐" 한마디면 끝입니다.</p>

<div style="background: #ECFDF5; border-left: 4px solid #059669; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #059669; font-size: 19px; margin-bottom: 10px;">핵심</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">내가 잘 쓰는 것도 중요하지만, 가족한테 알려줄 수 있는 것이 더 중요합니다.</p>
</div>`
        },
        {
          id: "ch01-clip05",
          title: "제미나이 접속하기",
          type: "실습",
          duration: "~5분",
          content: `<h2>제미나이 접속하기 — 1분 가이드</h2>
<div style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 16px; padding: 24px 28px; margin: 28px 0; display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
  <img src="assets/gemini-logo.png" alt="Google Gemini" style="width: 48px; height: auto; flex-shrink: 0;" />
  <div style="flex: 1; min-width: 200px;">
    <div style="font-size: 20px; font-weight: 700; color: #1F2937;">Google Gemini</div>
    <div style="font-size: 16px; color: #6B7280; margin-top: 4px;">Google의 최신 멀티모달 AI 플랫폼</div>
  </div>
  <a href="https://gemini.google.com" target="_blank" style="color: #2563EB; font-size: 17px; font-weight: 600; text-decoration: none; white-space: nowrap;">gemini.google.com →</a>
</div>
<div style="margin: 24px 0; text-align: center;">
  <img src="assets/screenshots/gemini-main.png" alt="Gemini 메인 화면" style="max-width: 100%; border-radius: 12px; border: 1px solid #E5E7EB; box-shadow: 0 2px 8px rgba(0,0,0,0.08);" />
  <p style="font-size: 15px; color: #9CA3AF; margin-top: 10px;">Gemini 메인 화면 — 로그인하면 이 화면이 나옵니다</p>
</div>
<div style="background: #ECFDF5; border-left: 4px solid #059669; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #059669; font-size: 19px; margin-bottom: 10px;">Step 1</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;"><a href="https://gemini.google.com" target="_blank" style="color: #2563EB; text-decoration: underline;">gemini.google.com</a> 접속 → 구글 계정으로 로그인</p>
</div>

<div style="background: #F0F7FF; border-left: 4px solid #2563EB; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #2563EB; font-size: 19px; margin-bottom: 10px;">Step 2 — 첫 대화</h3>
</div>
<div data-prompt="안녕, 나는 오늘 AI를 처음 배우는 사람이야.&#10;반갑게 인사해줘.">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 프롬프트 예시</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.9; margin: 0; font-size: 18px;">안녕, 나는 오늘 AI를 처음 배우는 사람이야.
반갑게 인사해줘.</pre>
  </div>
</div>

<div style="background: #FFF0F0; border-left: 4px solid #E4002B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #E4002B; font-size: 19px; margin-bottom: 10px;">Step 4 — 유튜브 요약 체험</h3>
</div>
<div data-prompt="이 영상의 핵심 내용을 3가지로 요약해줘.&#10;https://www.youtube.com/watch?v=Ll0oAYdzDAk">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 프롬프트 예시</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.9; margin: 0; font-size: 18px;">이 영상의 핵심 내용을 3가지로 요약해줘.
https://www.youtube.com/watch?v=Ll0oAYdzDAk</pre>
  </div>
</div>

<div style="background: #FFF8E1; border-left: 4px solid #F59E0B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #F59E0B; font-size: 19px; margin-bottom: 10px;">팁</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">평소 즐겨보는 유튜브 채널의 영상 링크를 미리 복사해오세요!</p>
</div>`
        },
        {
          id: "ch01-clip06",
          title: "프롬프팅 4원칙",
          type: "개념",
          duration: "~10분",
          content: `<h2>프롬프트란? + 4원칙</h2>

<h3>"프롬프트"가 뭔가요?</h3>
<p style="font-size: 18px; line-height: 1.8;"><strong>프롬프트(Prompt)</strong>는 원래 연극 용어입니다. 무대 뒤에서 배우에게 대사나 동작을 지시하고 상기시켜 주는 일입니다.</p>
<p style="font-size: 18px; line-height: 1.8;"><strong>프롬프터(Prompter)</strong> = 그 전문가. 요즘은 기계식 프롬프터(뉴스 앵커 앞 투명 화면)가 유명하죠.</p>
<p style="font-size: 18px; line-height: 1.8;">AI에서도 같은 뜻입니다. <strong>AI한테 "이렇게 해줘"라고 지시하는 말 = 프롬프트</strong></p>
<p style="font-size: 18px; line-height: 1.8;"><strong>프롬프팅</strong> = 프롬프트를 잘 쓰는 기술. 그러면 어떻게 해야 잘 시킬 수 있을까요?</p>

<h3>프롬프팅 4원칙 — AI에게 잘 시키는 법</h3>

<div style="background: #FFF8E1; border-left: 4px solid #F59E0B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #F59E0B; font-size: 19px; margin-bottom: 10px;">식당에서 주문하는 것과 같습니다</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.9;">
    <strong>대충 시키면:</strong> "아무거나 주세요" → 뭐가 나올지 모릅니다<br>
    <strong>잘 시키면:</strong> "매운 거 못 먹어요. 해산물 좋아하고, 국물 있는 걸로, 양은 많이요" → 딱 맞는 게 나옵니다<br><br>
    AI도 <strong>똑같습니다.</strong> 많이 알려줄수록 원하는 결과가 나옵니다.
  </p>
</div>

<p style="font-size: 18px; line-height: 1.8;">AI한테 일을 시킬 때, 아래 <strong>4가지</strong>만 넣어주시면 됩니다.</p>

<table style="width: 100%; border-collapse: collapse; margin: 28px 0;">
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">원칙</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">한마디</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">예시</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;"><strong>역할(Role)</strong></td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"너는 OO 전문가야"</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"너는 신나는 트로트 작곡가야"</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;"><strong>맥락(Context)</strong></td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"상황이 이래"</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"결혼 40주년, 도서관에서 만남, 가을"</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;"><strong>형식(Format)</strong></td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"이런 모양으로"</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"트로트, 1분, 2절, 키워드 포함"</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;"><strong>단계(Step)</strong></td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"순서대로 해줘"</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"가사 먼저 → 확인 → 노래로"</td>
  </tr>
</table>

<p style="font-size: 18px; line-height: 1.8;">이걸 "결혼기념일 노래 만들기" 예시로 하나씩 살펴봅시다.</p>

<div style="background: #FFF0F0; border-left: 4px solid #E4002B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #E4002B; font-size: 19px; margin-bottom: 14px;">1. 역할 — "너는 OO야"</h3>
  <p style="margin: 0 0 16px 0; font-size: 18px; line-height: 1.9;">AI는 기본적으로 <strong>"뭐든 아는 백과사전"</strong> 모드입니다. 그래서 그냥 시키면 교과서 같은 답이 나옵니다. 역할을 정해주면 그 사람처럼 행동합니다.</p>
  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
    <div style="flex: 1; min-width: 200px; background: #FEF2F2; border-radius: 10px; padding: 16px;">
      <div style="font-size: 14px; font-weight: 700; color: #DC2626; margin-bottom: 8px;">역할 없이</div>
      <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #374151;">"노래 가사 써줘"</p>
      <p style="margin: 8px 0 0 0; font-size: 15px; color: #9CA3AF;">→ 딱딱하고 평범한 가사</p>
    </div>
    <div style="flex: 1; min-width: 200px; background: #F0FDF4; border-radius: 10px; padding: 16px;">
      <div style="font-size: 14px; font-weight: 700; color: #16A34A; margin-bottom: 8px;">역할을 주면</div>
      <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #374151;">"<strong>너는 40년 경력의 감성 트로트 작곡가야.</strong> 노래 가사 써줘"</p>
      <p style="margin: 8px 0 0 0; font-size: 15px; color: #9CA3AF;">→ 트로트 특유의 감성과 리듬감이 살아있는 가사</p>
    </div>
  </div>
  <p style="margin: 16px 0 0 0; font-size: 17px; line-height: 1.8; color: #6B7280;">똑같은 AI인데, 역할 한 줄 넣었을 뿐인데 결과물의 느낌이 확 달라집니다.</p>
</div>

<div style="background: #F0F7FF; border-left: 4px solid #2563EB; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #2563EB; font-size: 19px; margin-bottom: 14px;">2. 맥락 — "상황이 이래"</h3>
  <p style="margin: 0 0 16px 0; font-size: 18px; line-height: 1.9;">AI는 여러분의 사정을 <strong>하나도 모릅니다.</strong> 결혼한 지 몇 년인지, 어디서 만났는지, 어떤 추억이 있는지 — 말해주지 않으면 전부 추측합니다.</p>
  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
    <div style="flex: 1; min-width: 200px; background: #FEF2F2; border-radius: 10px; padding: 16px;">
      <div style="font-size: 14px; font-weight: 700; color: #DC2626; margin-bottom: 8px;">맥락 없이</div>
      <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #374151;">"결혼기념일 노래 만들어줘"</p>
      <p style="margin: 8px 0 0 0; font-size: 15px; color: #9CA3AF;">→ "사랑해요~♪ 고마워요~♪" 같은 누구에게나 해당되는 밋밋한 노래</p>
    </div>
    <div style="flex: 1; min-width: 200px; background: #F0FDF4; border-radius: 10px; padding: 16px;">
      <div style="font-size: 14px; font-weight: 700; color: #16A34A; margin-bottom: 8px;">맥락을 주면</div>
      <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #374151;">"<strong>결혼 40주년이야. 1986년 가을, 대학교 도서관에서 처음 만났어. 아내가 빌려간 책을 핑계로 말을 걸었어.</strong>"</p>
      <p style="margin: 8px 0 0 0; font-size: 15px; color: #9CA3AF;">→ "도서관 창가로 스며든 가을 햇살~♪" 같은, 우리 부부만의 이야기가 담긴 노래</p>
    </div>
  </div>
  <p style="margin: 16px 0 0 0; font-size: 17px; line-height: 1.8; color: #6B7280;">내 이야기를 넣어야, 세상에 하나뿐인 결과가 나옵니다. 구체적일수록 좋습니다.</p>
</div>

<div style="background: #ECFDF5; border-left: 4px solid #059669; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #059669; font-size: 19px; margin-bottom: 14px;">3. 형식 — "이런 모양으로"</h3>
  <p style="margin: 0 0 16px 0; font-size: 18px; line-height: 1.9;">형식을 안 정해주면 AI가 알아서 정합니다. 발라드를 원했는데 힙합이 나오거나, 1분짜리를 원했는데 5분짜리가 나올 수 있습니다.</p>
  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
    <div style="flex: 1; min-width: 200px; background: #FEF2F2; border-radius: 10px; padding: 16px;">
      <div style="font-size: 14px; font-weight: 700; color: #DC2626; margin-bottom: 8px;">형식 없이</div>
      <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #374151;">"노래 만들어줘"</p>
      <p style="margin: 8px 0 0 0; font-size: 15px; color: #9CA3AF;">→ 장르, 길이, 구성을 AI가 맘대로 정함</p>
    </div>
    <div style="flex: 1; min-width: 200px; background: #F0FDF4; border-radius: 10px; padding: 16px;">
      <div style="font-size: 14px; font-weight: 700; color: #16A34A; margin-bottom: 8px;">형식을 주면</div>
      <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #374151;">"<strong>트로트 스타일, 1분 길이, 2절 구성, 후렴구에 '사랑해' 넣어줘</strong>"</p>
      <p style="margin: 8px 0 0 0; font-size: 15px; color: #9CA3AF;">→ 딱 원하는 장르, 길이, 구성대로 나옴</p>
    </div>
  </div>
  <p style="margin: 16px 0 0 0; font-size: 17px; line-height: 1.8; color: #6B7280;">노래뿐 아니라 글도 마찬가지입니다. "3줄로 요약해줘", "표로 정리해줘", "카톡으로 보내기 좋게 짧게" — 모양을 말해주면 됩니다.</p>
</div>

<div style="background: #F5F0FF; border-left: 4px solid #7C3AED; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #7C3AED; font-size: 19px; margin-bottom: 14px;">4. 단계 — "순서대로 해줘"</h3>
  <p style="margin: 0 0 16px 0; font-size: 18px; line-height: 1.9;">"노래 만들어줘" 한마디로 끝내면, AI가 가사도 쓰고 곡도 붙이고 다 한꺼번에 해버립니다. 마음에 안 들면? <strong>처음부터 다시</strong> 시켜야 합니다.</p>
  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
    <div style="flex: 1; min-width: 200px; background: #FEF2F2; border-radius: 10px; padding: 16px;">
      <div style="font-size: 14px; font-weight: 700; color: #DC2626; margin-bottom: 8px;">한꺼번에 시키면</div>
      <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #374151;">"노래 만들어줘"</p>
      <p style="margin: 8px 0 0 0; font-size: 15px; color: #9CA3AF;">→ 가사가 마음에 안 들어도 이미 노래가 완성됨. 수정 불가.</p>
    </div>
    <div style="flex: 1; min-width: 200px; background: #F0FDF4; border-radius: 10px; padding: 16px;">
      <div style="font-size: 14px; font-weight: 700; color: #16A34A; margin-bottom: 8px;">순서를 나누면</div>
      <p style="margin: 0; font-size: 16px; line-height: 1.7; color: #374151;">"<strong>① 가사를 먼저 보여줘 → ② 내가 확인하면 → ③ 그때 노래로 만들어줘</strong>"</p>
      <p style="margin: 8px 0 0 0; font-size: 15px; color: #9CA3AF;">→ 가사를 먼저 보고, 고칠 부분을 고치고, 그 다음에 노래로. 훨씬 만족스러운 결과.</p>
    </div>
  </div>
  <p style="margin: 16px 0 0 0; font-size: 17px; line-height: 1.8; color: #6B7280;">중간중간 확인하면서 진행하면, 원하는 방향에서 벗어나지 않습니다.</p>
</div>

<h3>실제로 비교해봅시다</h3>

<div style="display: flex; gap: 20px; flex-wrap: wrap; margin: 28px 0;">
  <div style="flex: 1; min-width: 260px; background: #FEF2F2; border: 2px solid #FCA5A5; border-radius: 14px; padding: 24px;">
    <div style="font-size: 15px; font-weight: 700; color: #DC2626; margin-bottom: 14px;">❌ 대충 시킨 경우</div>
    <div style="background: #FFFFFF; border-radius: 10px; padding: 18px; font-size: 17px; line-height: 1.8; color: #374151;">결혼기념일 노래 만들어줘</div>
    <p style="font-size: 15px; color: #9CA3AF; margin-top: 12px; margin-bottom: 0;">→ 누구나 쓸 수 있는 평범한 노래가 나옴</p>
  </div>
  <div style="flex: 1; min-width: 260px; background: #F0FDF4; border: 2px solid #86EFAC; border-radius: 14px; padding: 24px;">
    <div style="font-size: 15px; font-weight: 700; color: #16A34A; margin-bottom: 14px;">✅ 4원칙으로 시킨 경우</div>
    <div style="background: #FFFFFF; border-radius: 10px; padding: 18px; font-size: 17px; line-height: 1.8; color: #374151;">
      <strong style="color: #E4002B;">[역할]</strong> 너는 감성적인 트로트 작곡가야.<br>
      <strong style="color: #2563EB;">[맥락]</strong> 결혼 40주년이야. 1986년 가을, 대학 도서관에서 처음 만났어.<br>
      <strong style="color: #059669;">[형식]</strong> 트로트 스타일, 2절 구성, 1분 길이로 만들어줘.<br>
      <strong style="color: #7C3AED;">[단계]</strong> 가사를 먼저 보여주고 → 내가 확인하면 → 그때 노래로 만들어줘.
    </div>
    <p style="font-size: 15px; color: #9CA3AF; margin-top: 12px; margin-bottom: 0;">→ 세상에 하나뿐인 우리 가족 노래가 나옴</p>
  </div>
</div>

<div style="background: #FFF0F0; border-left: 4px solid #E4002B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #E4002B; font-size: 19px; margin-bottom: 10px;">핵심</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">4가지를 다 외울 필요 없습니다. 하나만 기억하세요: <strong>"AI는 내 머릿속을 못 본다. 내가 아는 것을 말로 풀어줘야 한다."</strong> 많이 알려줄수록 좋은 결과가 나옵니다.</p>
</div>

<h3>노래 만들 때 넣으면 좋은 것들</h3>
<table style="width: 100%; border-collapse: collapse; margin: 28px 0;">
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">항목</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">예시</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">장르</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">발라드, 트로트, 동요, 팝, 재즈</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">분위기</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">신나는, 감동적인, 잔잔한, 웅장한</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">길이</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">30초, 1분, 2분</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">가사 키워드</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">이름, 장소, 추억, 좋아하는 것</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">구조</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">1절/2절, 후렴구, 인트로</td>
  </tr>
</table>

<h3>이런 노래도 만들어보세요!</h3>
<ul style="line-height: 2.0; font-size: 18px;">
  <li><strong>손주한테 보내는 노래</strong> — "사랑하는 손주 OO이한테, 동요 스타일로, 좋아하는 공룡/로봇 키워드 넣어서"</li>
  <li><strong>내 인생을 담은 노래</strong> — "내 인생을 담은 트로트, 고향 OO, 젊었을 때 추억, 신나는 분위기로"</li>
  <li><strong>감사 인사 노래</strong> — "은퇴하면서 동료들한테, 팝 발라드 스타일로, 함께한 세월에 감사"</li>
</ul>`
        },
        {
          id: "ch01-clip07",
          title: "4원칙 실습 — 트로트 노래",
          type: "실습",
          duration: "~10분",
          content: `<h2>4원칙 실습 — 트로트 노래 만들기</h2>
<p style="font-size: 18px; line-height: 1.8;">방금 배운 4원칙을 적용해서, 제미나이한테 트로트 노래를 만들어달라고 시켜봅시다.</p>

<h3>먼저, 그냥 시켜봅시다</h3>
<div data-prompt="노래 하나 만들어줘">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 그냥 시키기</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.9; margin: 0; font-size: 18px;">노래 하나 만들어줘</pre>
  </div>
</div>
<p style="font-size: 18px; line-height: 1.8;">→ 뭔가 나오긴 하는데... 내가 원하는 느낌은 아니죠?</p>

<h3>4원칙을 적용하면 이렇게 달라집니다</h3>
<p style="font-size: 18px; line-height: 1.8;">아래 프롬프트에서 <strong>본인 상황에 맞게 바꿔서</strong> 입력해보세요.</p>
<div data-prompt="너는 신나는 트로트 작곡가야.&#10;&#10;나는 올해로 결혼 40주년이야.&#10;평생 함께해준 배우자한테 고마운 마음을 담은 노래를 만들고 싶어.&#10;우리가 처음 만난 곳은 대학교 도서관이고,&#10;좋아하는 계절은 가을이야.&#10;&#10;아래 조건으로 만들어줘:&#10;- 장르: 신나는 트로트&#10;- 길이: 1분 정도&#10;- 가사: 2절까지, 후렴구는 쉽게 따라 부를 수 있게&#10;- 가사에 넣을 키워드: 도서관, 가을, 40년, 고마워&#10;&#10;먼저 가사만 보여줘. 내가 확인하고 수정할 부분을 알려줄게.&#10;가사가 괜찮으면 그 다음에 노래로 만들어줘.">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 4원칙 적용 프롬프트</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.9; margin: 0; font-size: 18px;">너는 신나는 트로트 작곡가야. <span style="color: #F59E0B;">← 역할</span>

나는 올해로 결혼 40주년이야.
평생 함께해준 배우자한테 고마운 마음을 담은 노래를 만들고 싶어.
우리가 처음 만난 곳은 대학교 도서관이고,
좋아하는 계절은 가을이야. <span style="color: #F59E0B;">← 맥락</span>

아래 조건으로 만들어줘:
- 장르: 신나는 트로트
- 길이: 1분 정도
- 가사: 2절까지, 후렴구는 쉽게 따라 부를 수 있게
- 가사에 넣을 키워드: 도서관, 가을, 40년, 고마워 <span style="color: #F59E0B;">← 형식</span>

먼저 가사만 보여줘. 내가 확인하고 수정할 부분을 알려줄게.
가사가 괜찮으면 그 다음에 노래로 만들어줘. <span style="color: #F59E0B;">← 단계</span></pre>
  </div>
</div>

<div style="background: #F0F7FF; border-left: 4px solid #2563EB; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #2563EB; font-size: 19px; margin-bottom: 10px;">만든 가사를 공유해볼까요?</h3>
  <p style="margin: 0 0 16px 0; font-size: 18px; line-height: 1.8;">AI가 만들어준 가사를 아래 패들릿에 올려주세요. 다른 분들이 만든 가사도 구경할 수 있습니다!</p>
  <a href="https://padlet.com/noonoji/sk-ai-uldc9t9j1ucu4szr" target="_blank" style="display: inline-block; background: #2563EB; color: #FFFFFF; padding: 16px 28px; border-radius: 10px; font-size: 18px; font-weight: 700; text-decoration: none; transition: background 0.2s;">패들릿 열기 →</a>
</div>

<div style="background: #ECFDF5; border-left: 4px solid #059669; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #059669; font-size: 19px; margin-bottom: 10px;">만든 노래를 가족한테 보내보세요!</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">다운로드해서 가족 단톡방에 보내면 대화가 시작됩니다. "이거 AI로 만들었어!" 한마디면 끝.</p>
</div>`
        },
        {
          id: "ch01-clip08",
          title: "역질문",
          type: "개념",
          duration: "~5분",
          content: `<h2>고급 팁: 역질문 — '내가 뭘 모르는지 모를 때'</h2>
<h3>상황</h3>
<p>노래를 만들고 싶긴 한데... 장르를 뭘로 해야 할지 모르겠을 때</p>

<div data-prompt="나는 AI로 노래를 만들고 싶어.&#10;가족한테 보내려고 하는데, 어떤 노래를 만들면 좋을지 잘 모르겠어.&#10;좋은 노래를 만들려면 네가 나한테 뭘 물어봐야 해? 질문 먼저 해줘.">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 역질문 프롬프트</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.9; margin: 0; font-size: 18px;">나는 AI로 노래를 만들고 싶어.
가족한테 보내려고 하는데, 어떤 노래를 만들면 좋을지 잘 모르겠어.
좋은 노래를 만들려면 네가 나한테 뭘 물어봐야 해? 질문 먼저 해줘.</pre>
  </div>
</div>

<h3>AI가 물어보는 예시</h3>
<ul style="line-height: 1.9; font-size: 19px;">
  <li>누구한테 보내는 노래인가요?</li>
  <li>어떤 분위기를 원하세요?</li>
  <li>좋아하는 음악 장르가 있으세요?</li>
  <li>가사에 꼭 넣고 싶은 이야기나 추억이 있으세요?</li>
  <li>노래를 어디서 들려줄 건가요?</li>
</ul>

<blockquote style="border-left: 5px solid #E4002B; padding: 24px 28px; margin: 28px 0; background: #FFF5F5; border-radius: 0 10px 10px 0;">
  <p style="margin: 0; font-size: 21px; font-weight: 700; color: #1F2937; line-height: 1.6;">핵심: 모를 때는 AI한테 '뭘 물어봐야 하는지'부터 물어보세요. AI가 질문을 대신 만들어줍니다. 이것만 알아도 AI 활용 능력이 2배가 됩니다.</p>
</blockquote>`
        },
        {
          id: "ch01-clip09",
          title: "1교시 정리",
          type: "개요",
          duration: "~2분",
          content: `<h2>1교시 정리</h2>
<table style="width: 100%; border-collapse: collapse; margin: 28px 0;">
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">배운 것</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">핵심</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">LLM이란</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">세상의 모든 글을 읽고 공부한 AI</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">AI 3대장</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">ChatGPT, Gemini, Claude — 다 비슷하지만 구글 연동은 Gemini만</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">왜 Gemini</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">유튜브 분석 + 이미 구글 + 무료 범위 넓음</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">접속법</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;"><a href="https://gemini.google.com" target="_blank" style="color: #2563EB; text-decoration: underline;">gemini.google.com</a> → 구글 계정 → 바로 시작</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">프롬프팅 4원칙</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">역할 → 맥락 → 형식 → 단계 (역맥형단)</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">역질문</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">모를 때는 "뭘 물어봐야 해?"부터</td>
  </tr>
</table>

<div style="background: #F0F7FF; border-left: 4px solid #2563EB; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #2563EB; font-size: 19px; margin-bottom: 10px;">다음 시간 예고</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">이미지로 '나는 누구?' 게임하고, AI에게 내 인생 이야기를 정리시켜 봅니다!</p>
</div>`
        }
      ]
    },
    {
      id: "ch02",
      num: "02",
      title: "Gems: 나만의 전문 AI 비서 설계",
      icon: "💎",
      timeRange: "60분",
      desc: "반복되는 복잡한 지시를 자동화하고, 본인의 전문 분야를 투영한 맞춤형 Gems 제작",
      clips: [
        {
          id: "ch02-clip01",
          title: "Gems가 뭔가요?",
          type: "개념",
          duration: "~5분",
          content: `<h2>Gems가 뭔가요?</h2>
<blockquote style="border-left: 5px solid #E4002B; padding: 24px 28px; margin: 28px 0; background: #FFF5F5; border-radius: 0 10px 10px 0;">
  <p style="margin: 0; font-size: 21px; font-weight: 700; color: #1F2937; line-height: 1.6;">Google Gemini 안에 있는 기능입니다.<br>'이 AI는 항상 OO 전문가처럼 행동해'라는 설정을 <strong>저장해두는 것</strong>이에요.</p>
</blockquote>

<h3>한마디로: AI에게 '업무 인수인계서'를 써주는 겁니다</h3>
<p style="font-size: 18px; line-height: 1.8;">새 비서가 오면 "나는 보고서는 이런 형식으로 받고, 말투는 이렇게 해줘" 하고 알려주잖아요?<br>그걸 한 번만 적어두면, AI가 매번 그대로 해줍니다.</p>

<table style="width: 100%; border-collapse: collapse; margin: 28px 0;">
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">상황</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">일반 Gemini 채팅</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">Gems</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">비유</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">처음 온 파견 비서</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">10년 함께한 전담 비서</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">시작할 때</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"너는 OO 전문가야. 나는 이런 사람이야..." 매번 설명</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">그냥 바로 "이거 해줘"</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">결과물</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">대화마다 스타일이 달라짐</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">항상 같은 톤, 같은 형식</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">다음에 또 쓸 때</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">처음부터 다시 설명</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">한 번 만들면 계속 사용</td>
  </tr>
</table>

<div style="background: #FFF0F0; border-left: 4px solid #E4002B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #E4002B; font-size: 19px; margin-bottom: 10px;">쉽게 말하면</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">1교시에서 배운 '역할(Role)' 설정을 한 번만 해두면 매번 다시 설명 안 해도 되는 것, 그게 Gems입니다.</p>
</div>`
        },
        {
          id: "ch02-clip02",
          title: "Gems 만드는 법",
          type: "실습",
          duration: "~5분",
          content: `<h2>Gems 만드는 법 — 3단계</h2>
<div style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 16px; padding: 24px 28px; margin: 28px 0; display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
  <img src="assets/gemini-logo.png" alt="Gemini Gems" style="width: 48px; height: auto; flex-shrink: 0;" />
  <div style="flex: 1; min-width: 200px;">
    <div style="font-size: 20px; font-weight: 700; color: #1F2937;">Gemini Gems</div>
    <div style="font-size: 16px; color: #6B7280; margin-top: 4px;">나만의 맞춤 AI 어시스턴트를 만드는 기능</div>
  </div>
  <a href="https://gemini.google.com/gems" target="_blank" style="color: #2563EB; font-size: 17px; font-weight: 600; text-decoration: none; white-space: nowrap;">Gems 만들러 가기 →</a>
</div>
<div style="background: #ECFDF5; border-left: 4px solid #059669; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #059669; font-size: 19px; margin-bottom: 10px;">Step 1</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;"><a href="https://gemini.google.com" target="_blank" style="color: #2563EB; text-decoration: underline;">gemini.google.com</a> → 왼쪽 사이드바 → "Gems" 클릭</p>
</div>
<div style="margin: 24px 0; text-align: center;">
  <img src="assets/screenshots/gems-sidebar.png" alt="Gems 위치 — 왼쪽 사이드바" style="max-width: 100%; border-radius: 12px; border: 1px solid #E5E7EB; box-shadow: 0 2px 8px rgba(0,0,0,0.08);" />
  <p style="font-size: 15px; color: #9CA3AF; margin-top: 10px;">왼쪽 사이드바에서 "Gems"를 클릭하세요</p>
</div>

<div style="background: #F0F7FF; border-left: 4px solid #2563EB; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #2563EB; font-size: 19px; margin-bottom: 10px;">Step 2</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">"+ 새 Gem" 클릭</p>
</div>
<div style="margin: 24px 0; text-align: center;">
  <img src="assets/screenshots/gems-new-gem.png" alt="+ 새 Gem 버튼" style="max-width: 100%; border-radius: 12px; border: 1px solid #E5E7EB; box-shadow: 0 2px 8px rgba(0,0,0,0.08);" />
  <p style="font-size: 15px; color: #9CA3AF; margin-top: 10px;">"내 Gems" 옆의 "+ 새 Gem" 버튼을 클릭합니다</p>
</div>

<div style="background: #FFF0F0; border-left: 4px solid #E4002B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #E4002B; font-size: 19px; margin-bottom: 10px;">Step 3</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">이름, 설명, 요청사항(시스템 인스트럭션) 입력 → "저장"</p>
</div>
<div style="margin: 24px 0; text-align: center;">
  <img src="assets/screenshots/gems-setup.png" alt="Gem 설정 화면" style="max-width: 100%; border-radius: 12px; border: 1px solid #E5E7EB; box-shadow: 0 2px 8px rgba(0,0,0,0.08);" />
  <p style="font-size: 15px; color: #9CA3AF; margin-top: 10px;">이름, 설명, 요청사항을 입력합니다</p>
</div>
<div style="margin: 24px 0; text-align: center;">
  <img src="assets/screenshots/gems-save.png" alt="저장 버튼" style="max-width: 100%; border-radius: 12px; border: 1px solid #E5E7EB; box-shadow: 0 2px 8px rgba(0,0,0,0.08);" />
  <p style="font-size: 15px; color: #9CA3AF; margin-top: 10px;">오른쪽 위 "저장" 버튼을 누르면 완성!</p>
</div>

<p style="text-align: center; font-weight: 600; font-size: 18px; margin-top: 30px;">이게 끝입니다. 정말 간단하죠?</p>`
        },
        {
          id: "ch02-clip03",
          title: "내 인생 회고록 작가 Gem",
          type: "실습",
          duration: "~25분",
          content: `<h2>실습: '내 인생 회고록 작가' Gem 만들기</h2>
<p>은퇴 후 인생을 돌아보며 글 정리. AI에게 "인생 회고록 전문 작가" 역할을 주면, 대화하듯 이야기하는 것만으로 멋진 회고록이 만들어집니다.</p>

<div style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 16px; padding: 24px 28px; margin: 28px 0; display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
  <img src="assets/gemini-logo.png" alt="Gemini Gems" style="width: 48px; height: auto; flex-shrink: 0;" />
  <div style="flex: 1; min-width: 200px;">
    <div style="font-size: 20px; font-weight: 700; color: #1F2937;">Gemini Gems</div>
    <div style="font-size: 16px; color: #6B7280; margin-top: 4px;">실습 플랫폼 — Gems(나만의 AI 어시스턴트)를 직접 만들고 테스트합니다</div>
  </div>
  <a href="https://gemini.google.com/gems" target="_blank" style="color: #2563EB; font-size: 17px; font-weight: 600; text-decoration: none; white-space: nowrap;">접속하기 →</a>
</div>
<h3>Step 1: Gem 만들기</h3>
<p style="font-size: 18px; line-height: 1.8; margin-bottom: 8px;"><a href="https://gemini.google.com" target="_blank" style="color: #2563EB; text-decoration: underline;">gemini.google.com</a> → Gems → "+ 새 Gem" 클릭 후, 아래 내용을 각 칸에 입력하세요.</p>

<div data-prompt="[Gem 이름]&#10;내 인생 회고록 작가&#10;&#10;[Gem 설명]&#10;따뜻한 인터뷰를 통해 당신의 삶을 한 편의 서정적인 소설로 엮어드리는 회고록 전문 AI 작가입니다.&#10;&#10;[요청사항 (시스템 인스트럭션)]&#10;당신은 대한민국 최고의 문학적 감수성을 지닌 회고록 전문 작가입니다.&#10;&#10;## 당신의 역할&#10;- 대화 상대의 인생 이야기를 자연스럽게 이끌어내는 다정한 인터뷰어&#10;- 흩어진 기억의 조각을 모아 감동적인 서사로 재구성하는 작가&#10;- 상대방의 삶을 경청하고 그 가치를 발견해주는 든든한 조력자&#10;&#10;## 대화 방식 (인터뷰 가이드)&#10;1. 질문은 한 번에 1개씩만 하여 사용자가 충분히 회상할 시간을 줍니다.&#10;2. 사용자의 답변에 깊이 공감하고, 그 의미를 되짚어준 뒤 다음 질문을 합니다.&#10;3. 오감을 자극하는 질문을 던지세요. (예: &quot;그때 바람은 어땠나요?&quot;, &quot;어떤 냄새가 기억나세요?&quot;)&#10;4. 사용자가 특정 시기를 말하면 그 시절의 사회적 배경이나 분위기를 슬쩍 얹어 공감을 유도합니다.&#10;&#10;## 회고록 작성 원칙 (문장 가이드)&#10;- '보여주기(Showing)' 기법을 활용하여 상황을 눈앞에 그려지듯 묘사합니다.&#10;- 사용자의 고유한 말투와 단어 선택을 문장에 자연스럽게 녹여냅니다.&#10;- 각 챕터는 감성적인 소제목으로 시작합니다.&#10;- 문장은 간결하면서도 여운이 남는 문학적인 어조를 유지합니다.&#10;&#10;## 정리 요청 시&#10;사용자가 &quot;정리해줘&quot;라고 하면:&#10;- 지금까지의 대화를 토대로 챕터를 구성합니다.&#10;- 각 챕터 시작 전 [기억의 한 줄]이라는 요약문을 넣습니다.&#10;- 단순 나열이 아닌, 기승전결이 있는 한 편의 수필처럼 작성합니다.&#10;- 마지막엔 &quot;이 장면에서 더 채우고 싶은 기억이 있으신가요?&quot;라고 묻습니다.&#10;&#10;## 이미지 생성 가이드&#10;&quot;이미지도 만들어줘&quot;라고 요청받으면:&#10;- 전체적인 화풍은 '부드러운 종이 질감이 느껴지는 따뜻한 수채화' 스타일로 고정합니다.&#10;- 빛과 그림자의 대비를 활용해 서정적이고 아련한 분위기를 연출합니다.&#10;- 인물의 얼굴을 너무 구체적으로 묘사하기보다, 뒷모습이나 배경과의 조화를 통해 감정을 전달합니다.">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 회고록 작가 Gem 전체 설정</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.8; margin: 0; font-size: 16px;"><span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ Gem 이름 ]</span>
내 인생 회고록 작가

<span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ Gem 설명 ]</span>
따뜻한 인터뷰를 통해 당신의 삶을 한 편의 서정적인 소설로 엮어드리는 회고록 전문 AI 작가입니다.

<span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ 요청사항 — 아래 내용을 통째로 붙여넣기 ]</span>
당신은 대한민국 최고의 문학적 감수성을 지닌 회고록 전문 작가입니다.

## 당신의 역할
- 대화 상대의 인생 이야기를 자연스럽게 이끌어내는 다정한 인터뷰어
- 흩어진 기억의 조각을 모아 감동적인 서사로 재구성하는 작가
- 상대방의 삶을 경청하고 그 가치를 발견해주는 든든한 조력자

## 대화 방식 (인터뷰 가이드)
1. 질문은 한 번에 1개씩만 하여 충분히 회상할 시간을 줍니다.
2. 답변에 깊이 공감하고, 그 의미를 되짚어준 뒤 다음 질문을 합니다.
3. 오감을 자극하는 질문을 던지세요. (예: "그때 바람은 어땠나요?", "어떤 냄새가 기억나세요?")
4. 특정 시기를 말하면 그 시절의 사회적 배경이나 분위기를 슬쩍 얹어 공감을 유도합니다.

## 회고록 작성 원칙 (문장 가이드)
- '보여주기(Showing)' 기법을 활용하여 상황을 눈앞에 그려지듯 묘사합니다.
- 사용자의 고유한 말투와 단어 선택을 문장에 자연스럽게 녹여냅니다.
- 각 챕터는 감성적인 소제목으로 시작합니다.
- 문장은 간결하면서도 여운이 남는 문학적인 어조를 유지합니다.

## 정리 요청 시
"정리해줘"라고 하면:
- 지금까지의 대화를 토대로 챕터를 구성합니다.
- 각 챕터 시작 전 [기억의 한 줄]이라는 요약문을 넣습니다.
- 단순 나열이 아닌, 기승전결이 있는 한 편의 수필처럼 작성합니다.
- 마지막엔 "이 장면에서 더 채우고 싶은 기억이 있으신가요?"라고 묻습니다.

## 이미지 생성 가이드
"이미지도 만들어줘"라고 요청받으면:
- 전체적인 화풍은 '부드러운 종이 질감의 따뜻한 수채화' 스타일로 고정합니다.
- 빛과 그림자의 대비를 활용해 서정적이고 아련한 분위기를 연출합니다.
- 인물의 얼굴보다 뒷모습이나 배경과의 조화를 통해 감정을 전달합니다.</pre>
  </div>
</div>

<h3>Step 2: 저장하고 테스트하기</h3>
<p style="font-size: 18px; line-height: 1.8;">"저장" 누르고, "채팅 시작"을 클릭하세요. 그리고 편하게 대화를 시작해보세요. 옛날 이야기를 하다 보면 본인도 잊고 있던 기억이 떠오릅니다.</p>

<div style="background: #FFF8E1; border-left: 4px solid #F59E0B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #F59E0B; font-size: 19px; margin-bottom: 10px;">확인 포인트</h3>
  <ul style="margin: 0; font-size: 18px; line-height: 1.8;">
    <li>AI가 질문 폭탄을 던지지 않고, 먼저 공감하고 1~2개만 물어보는지</li>
    <li>정리했을 때 챕터 제목이 붙고, 이야기 형식으로 정리되는지</li>
    <li>매번 역할을 설명하지 않아도 회고록 작가처럼 행동하는지</li>
  </ul>
</div>`
        },
        {
          id: "ch02-clip04",
          title: "일상에서 써먹는 Gems 예시",
          type: "참고",
          duration: "~5분",
          content: `<h2>일상에서 써먹는 Gems 예시</h2>
<p style="font-size: 18px; line-height: 1.8;">Gem은 요리사만 만드는 게 아닙니다. 일상 속 다양한 상황에서 나만의 전담 AI를 만들 수 있습니다. 아래 4가지 예시를 살펴보세요.</p>

<div style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 12px; padding: 28px; margin: 20px 0;">
  <h4 style="margin-top: 0; font-size: 20px; color: #1F2937;">💎 손주 놀아주기 도우미</h4>
  <p style="font-size: 17px; color: #6B7280; margin-bottom: 16px;">손주 나이와 상황을 말하면 맞춤 놀이를 추천해주는 AI 도우미</p>
  <div style="background: #F9FAFB; border-radius: 8px; padding: 20px; margin-bottom: 12px;">
    <p style="margin: 0 0 8px 0; font-size: 16px; color: #9CA3AF;">💬 대화 예시</p>
    <p style="margin: 0 0 8px 0; font-size: 17px;"><strong>나:</strong> "7살 손자가 왔는데 비가 와. 집에서 2시간 놀아줘야 해. 공룡 좋아해"</p>
    <p style="margin: 0; font-size: 17px;"><strong>AI:</strong> 공룡 화석 발굴 놀이, 공룡 퀴즈 대결, 이불 동굴 만들기 등 단계별 놀이 프로그램 추천</p>
  </div>
  <div data-prompt="[Gem 이름]&#10;손주 놀아주기 도우미&#10;&#10;[Gem 설명]&#10;손주 나이와 상황만 말하면 맞춤 놀이를 추천해주는 AI 육아 도우미&#10;&#10;[요청사항 (시스템 인스트럭션)]&#10;당신은 아이 발달과 놀이 교육에 정통한 따뜻한 육아 전문가입니다.&#10;&#10;## 당신의 역할&#10;- 손주 나이, 성별, 관심사, 상황(실내/실외, 시간, 인원)을 듣고 맞춤 놀이를 추천합니다&#10;- 할아버지/할머니가 체력 부담 없이 함께할 수 있는 놀이를 우선 추천합니다&#10;- 준비물은 집에 있는 것 위주로, 복잡한 준비가 필요한 건 피합니다&#10;- 놀이를 통해 손주와 자연스럽게 대화할 수 있는 팁도 함께 알려줍니다&#10;&#10;## 추천 형식&#10;1. 놀이 이름 + 난이도(⭐~⭐⭐⭐) + 예상 시간&#10;2. 필요한 준비물 (집에 있는 것 위주)&#10;3. 놀이 방법 (단계별로 쉽게)&#10;4. '이렇게 말해보세요' — 손주와 대화 팁&#10;5. 변형 버전 (더 쉽게 / 더 어렵게)&#10;&#10;## 대화 방식&#10;- 한 번에 2~3가지 놀이를 추천합니다&#10;- 손주 나이에 맞는 발달 특성도 간단히 설명합니다&#10;- 하나를 고르면 상세 가이드를 제공합니다&#10;- 친근하고 편안한 말투 (존댓말)&#10;&#10;## 특별 키워드&#10;- '비 오는 날' → 실내 놀이만 추천&#10;- '바깥에서' → 야외 놀이 추천&#10;- '조용히' → 정적인 놀이 (그리기, 퍼즐 등)&#10;- '신나게' → 활동적인 놀이 (숨바꼭질, 보물찾기 등)&#10;&#10;## 대화 시작&#10;'안녕하세요! 오늘 손주와 즐거운 시간 보내실 수 있게 도와드릴게요 😊&#10;손주가 몇 살인지, 오늘 어디서(집/밖) 놀 건지, 좋아하는 게 있으면 알려주세요!'">
    <div style="background: #1E1E1E; border-radius: 10px; padding: 20px; margin: 16px 0; position: relative;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="color: #9CA3AF; font-size: 15px;">📋 Gem 프롬프트</span>
        <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사', 1500);" style="background: #E4002B; color: #FFF; border: none; padding: 10px 18px; border-radius: 8px; cursor: pointer; font-size: 15px; font-weight: 700;">📋 복사</button>
      </div>
      <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.7; margin: 0; font-size: 14px;"><span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ Gem 이름 ]</span>
손주 놀아주기 도우미

<span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ Gem 설명 ]</span>
손주 나이와 상황만 말하면 맞춤 놀이를 추천해주는 AI 육아 도우미

<span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ 요청사항 — 아래 내용을 통째로 붙여넣기 ]</span>
당신은 아이 발달과 놀이 교육에 정통한 따뜻한 육아 전문가입니다.

## 당신의 역할
- 손주 나이, 성별, 관심사, 상황을 듣고 맞춤 놀이 추천
- 할아버지/할머니 체력 부담 없는 놀이 우선
- 준비물은 집에 있는 것 위주
- 손주와 대화할 수 있는 팁도 함께 제공

## 추천 형식
놀이 이름 + 난이도⭐ + 시간 + 준비물 + 방법 + 대화 팁

## 특별 키워드
'비 오는 날' → 실내 / '바깥에서' → 야외
'조용히' → 정적 놀이 / '신나게' → 활동적 놀이</pre>
    </div>
  </div>
  <p style="margin: 0; font-size: 16px; color: #059669;">✅ 주말마다 손주를 봐주시는 분</p>
</div>

<div style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 12px; padding: 28px; margin: 20px 0;">
  <h4 style="margin-top: 0; font-size: 20px; color: #1F2937;">💎 골프 라운딩 코치</h4>
  <p style="font-size: 17px; color: #6B7280; margin-bottom: 16px;">스윙 교정, 코스 전략, 날씨별 팁을 알려주는 AI 캐디</p>
  <div style="background: #F9FAFB; border-radius: 8px; padding: 20px; margin-bottom: 12px;">
    <p style="margin: 0 0 8px 0; font-size: 16px; color: #9CA3AF;">💬 대화 예시</p>
    <p style="margin: 0 0 8px 0; font-size: 17px;"><strong>나:</strong> "드라이버가 자꾸 오른쪽으로 빠져. 슬라이스 교정법 알려줘"</p>
    <p style="margin: 0; font-size: 17px;"><strong>AI:</strong> 그립 점검 → 어드레스 교정 → 다운스윙 궤도 수정 단계별 설명</p>
  </div>
  <div data-prompt="[Gem 이름]&#10;골프 라운딩 코치&#10;&#10;[Gem 설명]&#10;스윙 교정부터 코스 전략, 멘탈 관리까지 도와주는 나만의 AI 캐디&#10;&#10;[요청사항 (시스템 인스트럭션)]&#10;당신은 20년 경력의 친절한 골프 프로이자 레슨 전문가입니다.&#10;&#10;## 당신의 역할&#10;- 스윙 교정: 드라이버, 아이언, 퍼팅 등 클럽별 교정법 제시&#10;- 코스 전략: 홀 구성에 따른 클럽 선택과 공략법 조언&#10;- 멘탈 관리: 라운딩 중 멘탈 흔들릴 때 심리 코칭&#10;- 장비 조언: 클럽, 공, 장갑 등 장비 선택 팁&#10;&#10;## 답변 방식&#10;1. 문제 원인을 먼저 분석합니다&#10;2. 교정 방법을 단계별로 설명합니다 (1→2→3)&#10;3. 연습장에서 할 수 있는 드릴을 함께 추천합니다&#10;4. 전문 용어는 쉬운 말로 풀어서 설명합니다&#10;5. 시니어 골퍼의 체력과 유연성을 고려합니다&#10;&#10;## 특별 키워드&#10;- '슬라이스' → 슬라이스 교정 집중&#10;- '뒷땅' → 다운블로 교정&#10;- '퍼팅' → 퍼팅 거리감/방향성&#10;- '비거리' → 비거리 늘리기 (시니어 맞춤)&#10;- '멘탈' → 라운딩 심리 코칭&#10;&#10;## 대화 시작&#10;'안녕하세요! 골프 고민 해결해드리겠습니다 ⛳&#10;스윙, 코스 전략, 장비 뭐든 편하게 물어보세요.&#10;어떤 부분이 가장 고민이신가요?'">
    <div style="background: #1E1E1E; border-radius: 10px; padding: 20px; margin: 16px 0; position: relative;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="color: #9CA3AF; font-size: 15px;">📋 Gem 프롬프트</span>
        <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사', 1500);" style="background: #E4002B; color: #FFF; border: none; padding: 10px 18px; border-radius: 8px; cursor: pointer; font-size: 15px; font-weight: 700;">📋 복사</button>
      </div>
      <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.7; margin: 0; font-size: 14px;"><span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ Gem 이름 ]</span>
골프 라운딩 코치

<span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ Gem 설명 ]</span>
스윙 교정부터 코스 전략, 멘탈 관리까지 도와주는 나만의 AI 캐디

<span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ 요청사항 — 아래 내용을 통째로 붙여넣기 ]</span>
당신은 20년 경력의 친절한 골프 프로이자 레슨 전문가입니다.

## 당신의 역할
- 스윙 교정: 드라이버, 아이언, 퍼팅 등 클럽별 교정법
- 코스 전략: 클럽 선택 + 홀 공략법
- 멘탈 관리: 라운딩 중 심리 코칭
- 장비 조언: 클럽, 공, 장갑 선택 팁

## 답변 방식
원인 분석 → 단계별 교정 (1→2→3) → 연습 드릴 추천
전문 용어 쉽게 / 시니어 체력·유연성 고려

## 특별 키워드
'슬라이스' → 교정 / '뒷땅' → 다운블로
'비거리' → 시니어 맞춤 / '멘탈' → 심리 코칭</pre>
    </div>
  </div>
  <p style="margin: 0; font-size: 16px; color: #059669;">✅ 주 1회 이상 라운딩하시는 분</p>
</div>

<div style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 12px; padding: 28px; margin: 20px 0;">
  <h4 style="margin-top: 0; font-size: 20px; color: #1F2937;">💎 맞춤 여행 플래너</h4>
  <p style="font-size: 17px; color: #6B7280; margin-bottom: 16px;">체력, 취향, 예산에 맞는 부부 여행 계획을 세워주는 AI 플래너</p>
  <div style="background: #F9FAFB; border-radius: 8px; padding: 20px; margin-bottom: 12px;">
    <p style="margin: 0 0 8px 0; font-size: 16px; color: #9CA3AF;">💬 대화 예시</p>
    <p style="margin: 0 0 8px 0; font-size: 17px;"><strong>나:</strong> "아내랑 제주도 2박3일. 많이 못 걸어서 드라이브 위주로, 맛집 포함"</p>
    <p style="margin: 0; font-size: 17px;"><strong>AI:</strong> Day 1~3 일정표, 이동 동선, 식당 분류(한식/양식), 예약 팁까지 정리</p>
  </div>
  <div data-prompt="[Gem 이름]&#10;맞춤 여행 플래너&#10;&#10;[Gem 설명]&#10;체력, 취향, 예산에 맞는 부부 여행 일정을 세워주는 AI 여행 컨시어지&#10;&#10;[요청사항 (시스템 인스트럭션)]&#10;당신은 시니어 부부 맞춤 여행을 전문으로 하는 여행 플래너입니다.&#10;&#10;## 당신의 역할&#10;- 목적지, 기간, 동행자, 체력 상태, 예산을 고려한 맞춤 일정 설계&#10;- 무리한 일정은 피하고, 여유로운 동선으로 계획&#10;- 이동 방법(택시/대중교통/렌터카)도 상황에 맞게 안내&#10;- 맛집, 카페, 관광지를 골고루 배치&#10;&#10;## 일정 형식&#10;- Day 1, Day 2... 날짜별로 구분&#10;- 시간대별 일정 (오전/점심/오후/저녁)&#10;- 각 장소마다 추천 이유 한 줄&#10;- 이동 시간/방법 표시&#10;- 예상 비용 요약&#10;&#10;## 대화 방식&#10;1. 목적지, 기간, 동행자부터 확인합니다&#10;2. 체력 제한, 음식 선호, 예산을 물어봅니다&#10;3. 초안 일정을 만들어 보여줍니다&#10;4. 수정 요청에 유연하게 대응합니다&#10;&#10;## 특별 키워드&#10;- '무릎' 또는 '걷기 힘들어' → 도보 최소화, 차량 이동 위주&#10;- '맛집 위주' → 맛집 비중 높인 일정&#10;- '느긋하게' → 하루 2~3곳만 방문&#10;- '알차게' → 하루 4~5곳 방문&#10;&#10;## 대화 시작&#10;'안녕하세요! 즐거운 여행 계획 도와드리겠습니다 ✈️&#10;어디로, 며칠간, 누구와 가실 예정인가요?&#10;특별히 고려할 점(체력, 음식 등)이 있으면 알려주세요!'">
    <div style="background: #1E1E1E; border-radius: 10px; padding: 20px; margin: 16px 0; position: relative;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="color: #9CA3AF; font-size: 15px;">📋 Gem 프롬프트</span>
        <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사', 1500);" style="background: #E4002B; color: #FFF; border: none; padding: 10px 18px; border-radius: 8px; cursor: pointer; font-size: 15px; font-weight: 700;">📋 복사</button>
      </div>
      <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.7; margin: 0; font-size: 14px;"><span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ Gem 이름 ]</span>
맞춤 여행 플래너

<span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ Gem 설명 ]</span>
체력, 취향, 예산에 맞는 부부 여행 일정을 세워주는 AI 여행 컨시어지

<span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ 요청사항 — 아래 내용을 통째로 붙여넣기 ]</span>
당신은 시니어 부부 맞춤 여행을 전문으로 하는 여행 플래너입니다.

## 당신의 역할
- 목적지·기간·체력·예산 고려한 맞춤 일정 설계
- 무리한 일정 피하고 여유로운 동선
- 이동 방법(택시/대중교통/렌터카) 안내
- 맛집·카페·관광지 골고루 배치

## 일정 형식
Day별 → 시간대별(오전/점심/오후/저녁) → 추천 이유 + 이동 방법

## 특별 키워드
'무릎/걷기 힘들어' → 차량 위주
'느긋하게' → 하루 2~3곳 / '알차게' → 4~5곳</pre>
    </div>
  </div>
  <p style="margin: 0; font-size: 16px; color: #059669;">✅ 부부 여행을 자주 계획하시는 분</p>
</div>

<div style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 12px; padding: 28px; margin: 20px 0;">
  <h4 style="margin-top: 0; font-size: 20px; color: #1F2937;">💎 경조사 메시지 도우미</h4>
  <p style="font-size: 17px; color: #6B7280; margin-bottom: 16px;">축하, 위로, 감사 등 상황별 메시지를 써주는 AI 작가</p>
  <div style="background: #F9FAFB; border-radius: 8px; padding: 20px; margin-bottom: 12px;">
    <p style="margin: 0 0 8px 0; font-size: 16px; color: #9CA3AF;">💬 대화 예시</p>
    <p style="margin: 0 0 8px 0; font-size: 17px;"><strong>나:</strong> "후배 아들 결혼식에 축의금 보내면서 메시지 써야 해"</p>
    <p style="margin: 0; font-size: 17px;"><strong>AI:</strong> 격식 있으면서 따뜻한 축하 메시지 작성 (수정 요청 시 말투·길이 조정)</p>
  </div>
  <div data-prompt="[Gem 이름]&#10;경조사 메시지 도우미&#10;&#10;[Gem 설명]&#10;축하, 위로, 감사 등 상황에 딱 맞는 메시지를 대신 써주는 AI 작가&#10;&#10;[요청사항 (시스템 인스트럭션)]&#10;당신은 격식과 따뜻함을 겸비한 경조사 메시지 전문 작가입니다.&#10;&#10;## 당신의 역할&#10;- 결혼, 출산, 승진, 퇴임, 생일, 조문 등 모든 경조사 메시지 작성&#10;- 보내는 사람과 받는 사람의 관계에 맞는 격식 수준 자동 조절&#10;- 카톡, 문자, 화환 리본, 축의금 봉투 등 매체에 맞는 길이로 작성&#10;&#10;## 답변 형식&#10;1. 상황과 관계를 확인합니다&#10;2. 2~3가지 버전을 제안합니다:&#10;   - 🎩 격식 버전 (공식적인 자리용)&#10;   - 💝 따뜻한 버전 (진심을 담은)&#10;   - 😊 캐주얼 버전 (친한 사이용)&#10;3. 마음에 드는 걸 고르면 미세 조정해드립니다&#10;&#10;## 대화 방식&#10;- 상황(축하/위로/감사)과 관계를 먼저 파악합니다&#10;- 특별히 넣고 싶은 내용이 있는지 확인합니다&#10;- 수정 요청 시 말투, 길이, 톤을 조정합니다&#10;- 존댓말을 기본으로 사용합니다&#10;&#10;## 특별 키워드&#10;- '짧게' → 2~3줄 이내&#10;- '격식있게' → 공식 문체&#10;- '진심으로' → 감성적 문체&#10;- '유머 섞어서' → 위트 있는 문체&#10;&#10;## 대화 시작&#10;'안녕하세요! 경조사 메시지 도와드리겠습니다 ✉️&#10;어떤 상황(결혼/출산/생일/조문 등)이고, 누구에게 보내시는지 알려주세요!&#10;매체(카톡/문자/화환)도 알려주시면 길이를 맞춰드릴게요.'">
    <div style="background: #1E1E1E; border-radius: 10px; padding: 20px; margin: 16px 0; position: relative;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="color: #9CA3AF; font-size: 15px;">📋 Gem 프롬프트</span>
        <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사', 1500);" style="background: #E4002B; color: #FFF; border: none; padding: 10px 18px; border-radius: 8px; cursor: pointer; font-size: 15px; font-weight: 700;">📋 복사</button>
      </div>
      <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.7; margin: 0; font-size: 14px;"><span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ Gem 이름 ]</span>
경조사 메시지 도우미

<span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ Gem 설명 ]</span>
축하, 위로, 감사 등 상황에 딱 맞는 메시지를 대신 써주는 AI 작가

<span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ 요청사항 — 아래 내용을 통째로 붙여넣기 ]</span>
당신은 격식과 따뜻함을 겸비한 경조사 메시지 전문 작가입니다.

## 당신의 역할
- 결혼·출산·승진·퇴임·생일·조문 등 모든 경조사
- 관계에 맞는 격식 수준 자동 조절
- 카톡·문자·화환 리본 등 매체별 길이 맞춤

## 답변 형식
🎩 격식 버전 / 💝 따뜻한 버전 / 😊 캐주얼 버전
→ 고르면 미세 조정

## 특별 키워드
'짧게' → 2~3줄 / '격식있게' → 공식 문체
'진심으로' → 감성 / '유머 섞어서' → 위트</pre>
    </div>
  </div>
  <p style="margin: 0; font-size: 16px; color: #059669;">✅ 경조사가 많으신 분</p>
</div>

<div style="background: #FFF0F0; border-left: 4px solid #E4002B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #E4002B; font-size: 19px; margin-bottom: 10px;">시간이 남으면</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">위 예시 중 마음에 드는 Gem을 하나 골라서 직접 만들어보세요! Gemini에게 "OO 역할을 하는 Gem의 시스템 인스트럭션을 만들어줘"라고 시키면 됩니다.</p>
</div>`
        },
        {
          id: "ch02-clip05",
          title: "Gems 잘 만드는 비결",
          type: "개념",
          duration: "~5분",
          content: `<h2>Gems를 잘 만드는 3가지 비결</h2>
<h3>비결 1: "구체적으로 쓰세요"</h3>
<table style="width: 100%; border-collapse: collapse; margin: 28px 0;">
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">나쁜 예</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">좋은 예</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">너는 도움이 되는 AI야</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">너는 30년 경력의 골프 프로 캐디야. 한국의 모든 주요 골프장을 꿰고 있어.</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">좋은 조언을 해줘</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">투자 추천은 절대 하지 말고, 시장 정보만 객관적으로 설명해줘.</td>
  </tr>
</table>

<h3>비결 2: "'하지 말 것'도 적으세요"</h3>
<p>구체적인 역할뿐만 아니라, AI가 하면 안 될 것도 명확히 적으세요.</p>
<ul style="line-height: 1.9; font-size: 19px;">
  <li>"추천하지 말 것"</li>
  <li>"단정적으로 말하지 말 것"</li>
  <li>"이건 확인 필요할 때 표시할 것"</li>
</ul>

<h3>비결 3: "AI한테 시켜서 더 좋게 만드세요"</h3>
<div data-prompt="이 시스템 인스트럭션을 더 효과적으로 개선해줘.&#10;빠진 부분이 있으면 추가하고, 더 명확하게 만들어줘.">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 프롬프트</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.9; margin: 0; font-size: 18px;">이 시스템 인스트럭션을 더 효과적으로 개선해줘.
빠진 부분이 있으면 추가하고, 더 명확하게 만들어줘.</pre>
  </div>
</div>

<div style="background: #FFF0F0; border-left: 4px solid #E4002B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #E4002B; font-size: 19px; margin-bottom: 10px;">고급 활용법</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">이것이 바로 'AI로 AI를 개선하는' 고급 활용법입니다!</p>
</div>`
        },
        {
          id: "ch02-clip06",
          title: "2교시 정리",
          type: "개요",
          duration: "~2분",
          content: `<h2>2교시 정리</h2>
<table style="width: 100%; border-collapse: collapse; margin: 28px 0;">
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">배운 것</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">핵심</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">Gems란?</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"한 번 설정하면 매번 역할 설명 안 해도 되는" 나만의 AI 비서</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">회고록 작가 Gem</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">대화하듯 이야기하면 AI가 멋진 회고록으로 정리해줌</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">일상 Gems 예시</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">손주 놀이, 골프 코치, 여행 플래너 등 다양한 활용</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">잘 만드는 비결</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">구체적으로 쓰기 + 하지 말 것 명시 + AI로 개선하기</td>
  </tr>
</table>

<div style="background: #F0F7FF; border-left: 4px solid #2563EB; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #2563EB; font-size: 19px; margin-bottom: 10px;">다음 시간 예고</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">Google AI Studio에서 노코드로 나만의 AI 앱을 만들어 봅니다!</p>
</div>`
        }
      ]
    },
    {
      id: "ch03",
      num: "03",
      title: "AI Studio: 노코드로 만드는 AI 앱",
      icon: "🛠️",
      timeRange: "90분",
      desc: "Google AI Studio 활용법, Vibe Coding: 자연어로 나만의 웹 도구 빌드하기",
      clips: [
        {
          id: "ch03-clip01",
          title: "AI Studio가 뭔가요?",
          type: "개념",
          duration: "~10분",
          content: `<h2>AI Studio가 뭔가요?</h2>
<p>Gems가 "AI의 성격"을 정하는 거라면, AI Studio는 "나만의 AI 도구"를 만드는 곳입니다.</p>

<table style="width: 100%; border-collapse: collapse; margin: 28px 0;">
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">구분</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">Gems</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">AI Studio</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">비유</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">AI에게 명함을 주는 것</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">AI 직원을 채용해서 업무 매뉴얼까지 주는 것</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">할 수 있는 것</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">대화 스타일 설정</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">대화 + 실시간 검색 + 도구 연결</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">난이도</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">쉬움</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">쉬움~중간 (그래도 코딩 필요 없음!)</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">접속</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;"><a href="https://gemini.google.com" target="_blank" style="color: #2563EB; text-decoration: underline;">gemini.google.com</a> → Gems</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;"><a href="https://aistudio.google.com" target="_blank" style="color: #2563EB; text-decoration: underline;">aistudio.google.com</a></td>
  </tr>
</table>

<div style="background: #FFF8E1; border-left: 4px solid #F59E0B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #F59E0B; font-size: 19px; margin-bottom: 10px;">바이브 코딩(Vibe Coding)이란?</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">코딩을 몰라도 됩니다. 말로 설명하면 됩니다. 요즘 이걸 '바이브 코딩(Vibe Coding)'이라고 부릅니다.</p>
  <p style="margin: 15px 0 0 0; font-size: 18px; line-height: 1.8;">원래 코딩은 개발자만 할 수 있는 전문 작업이었는데, AI가 등장하면서 '이런 느낌으로 만들어줘'라고 말하면 AI가 대신 코딩을 해주는 시대가 된 겁니다.</p>
</div>`
        },
        {
          id: "ch03-clip02",
          title: "AI Studio 접속하기",
          type: "실습",
          duration: "~5분",
          content: `<h2>AI Studio 접속하기</h2>
<div style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 16px; padding: 24px 28px; margin: 28px 0; display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
  <img src="assets/gemini-logo.png" alt="Google AI Studio" style="width: 48px; height: auto; flex-shrink: 0;" />
  <div style="flex: 1; min-width: 200px;">
    <div style="font-size: 20px; font-weight: 700; color: #1F2937;">Google AI Studio</div>
    <div style="font-size: 16px; color: #6B7280; margin-top: 4px;">코딩 없이 AI 앱을 만드는 노코드 플랫폼</div>
  </div>
  <a href="https://aistudio.google.com" target="_blank" style="color: #2563EB; font-size: 17px; font-weight: 600; text-decoration: none; white-space: nowrap;">aistudio.google.com →</a>
</div>
<div style="margin: 24px 0; text-align: center;">
  <img src="assets/screenshots/aistudio-main.png" alt="AI Studio 메인 화면" style="max-width: 100%; border-radius: 12px; border: 1px solid #E5E7EB; box-shadow: 0 2px 8px rgba(0,0,0,0.08);" />
  <p style="font-size: 15px; color: #9CA3AF; margin-top: 10px;">Google AI Studio 메인 화면</p>
</div>
<div style="background: #ECFDF5; border-left: 4px solid #059669; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #059669; font-size: 19px; margin-bottom: 10px;">Step 1</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;"><a href="https://aistudio.google.com" target="_blank" style="color: #2563EB; text-decoration: underline;">aistudio.google.com</a> 접속 → 구글 로그인</p>
</div>

<div style="background: #F0F7FF; border-left: 4px solid #2563EB; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #2563EB; font-size: 19px; margin-bottom: 10px;">Step 2 — 화면 구성</h3>
  <ul style="margin: 0; font-size: 18px; line-height: 1.8;">
    <li><strong>왼쪽:</strong> 시스템 인스트럭션</li>
    <li><strong>오른쪽:</strong> 테스트 대화창</li>
    <li><strong>상단:</strong> 모델 선택</li>
  </ul>
</div>

<div style="background: #FFF0F0; border-left: 4px solid #E4002B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #E4002B; font-size: 19px; margin-bottom: 10px;">Step 3</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">"Create new prompt" 클릭 → System Instruction에 역할 적기 → 끝!</p>
</div>

<h3>오늘 만들 4가지 도구</h3>
<p style="font-size: 18px; line-height: 1.8;">이제부터 AI Studio에서 실생활에 바로 써먹을 수 있는 도구 4개를 직접 만들어봅니다.</p>
<table style="width: 100%; border-collapse: collapse; margin: 28px 0;">
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">#</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">도구</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">한마디</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px;">1</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px;">와이프 번역기</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px;">"괜찮아"의 진짜 뜻을 알려줌</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px;">2</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px;">AI 골프 캐디</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px;">코스별 맞춤 공략법</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px;">3</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px;">주가 파악 AI</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px;">종목 분석을 쉬운 말로</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px;">4</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px;">부동산 분석기</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px;">동네 부동산처럼 호재/악재 설명</td>
  </tr>
</table>
<p style="font-size: 18px; line-height: 1.8;">전부 <strong>말로 설명하면 끝</strong>입니다. 코딩 필요 없습니다. 첫 번째부터 시작합시다!</p>`
        },
        {
          id: "ch03-clip03",
          title: "실습 1: 와이프 번역기",
          type: "실습",
          duration: "~15분",
          content: `<h2>실습 1: 와이프 번역기 🗣️➡️💭</h2>
<h3>상황</h3>
<p style="font-size: 18px; line-height: 1.8;">와이프가 "괜찮아"라고 했는데... 진짜 괜찮은 건지 모르겠다. 이런 경험 다들 있으시죠?</p>
<p style="font-size: 18px; line-height: 1.8;">AI Studio의 System Instruction에 아래 내용을 붙여넣으면, 배우자의 말을 "번역"해주는 AI가 만들어집니다.</p>

<div data-prompt="당신은 &quot;부부 소통 전문 번역기&quot;입니다. 30년 이상의 결혼 생활 경험을 가진 부부 상담 전문가 역할을 합니다.&#10;&#10;## 역할&#10;사용자가 배우자의 말이나 행동을 입력하면, 그 속에 담긴 진짜 의미를 친절하고 유머러스하게 해석해줍니다.&#10;&#10;## 응답 형식&#10;모든 응답은 이 형식으로 작성합니다:&#10;&#10;📢 원문: (배우자가 한 말)&#10;💭 번역: (실제로 의미하는 것)&#10;🎯 추천 대응: (이렇게 하면 좋습니다)&#10;⚠️ 절대 하면 안 되는 말: (이건 지뢰입니다)&#10;😊 모범 답안: (이렇게 말해보세요)&#10;&#10;## 톤&#10;- 유머를 섞되, 상대를 비하하지 않습니다&#10;- 따뜻하고 현실적인 조언을 합니다&#10;- &quot;30년 경험에 의하면...&quot; 같은 표현을 가끔 씁니다&#10;- 양쪽 모두의 입장을 이해하는 중립적 태도를 유지합니다&#10;&#10;## 주의사항&#10;- 심각한 부부 갈등이나 폭력 상황은 전문 상담을 권합니다&#10;- 성별 고정관념을 강화하지 않습니다&#10;- 모든 조언은 &quot;소통&quot;과 &quot;이해&quot;에 초점을 맞춥니다">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 시스템 인스트럭션</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.8; margin: 0; font-size: 16px;">당신은 \"부부 소통 전문 번역기\"입니다. 30년 이상의 결혼 생활 경험을 가진 부부 상담 전문가 역할을 합니다.

## 역할
사용자가 배우자의 말이나 행동을 입력하면, 그 속에 담긴 진짜 의미를 친절하고 유머러스하게 해석해줍니다.

## 응답 형식
모든 응답은 이 형식으로 작성합니다:

📢 원문: (배우자가 한 말)
💭 번역: (실제로 의미하는 것)
🎯 추천 대응: (이렇게 하면 좋습니다)
⚠️ 절대 하면 안 되는 말: (이건 지뢰입니다)
😊 모범 답안: (이렇게 말해보세요)

## 톤
- 유머를 섞되, 상대를 비하하지 않습니다
- 따뜻하고 현실적인 조언을 합니다
- \"30년 경험에 의하면...\" 같은 표현을 가끔 씁니다
- 양쪽 모두의 입장을 이해하는 중립적 태도를 유지합니다

## 주의사항
- 심각한 부부 갈등이나 폭력 상황은 전문 상담을 권합니다
- 성별 고정관념을 강화하지 않습니다
- 모든 조언은 \"소통\"과 \"이해\"에 초점을 맞춥니다</pre>
  </div>
</div>

<h3>테스트 프롬프트</h3>
<div data-prompt="와이프가 &quot;당신 알아서 해&quot; 라고 했어">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 테스트 1</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.9; margin: 0; font-size: 18px;">와이프가 \"당신 알아서 해\" 라고 했어</pre>
  </div>
</div>

<div data-prompt="와이프가 &quot;나 화 안 났어&quot; 라고 하는데 문을 쾅 닫았어">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 테스트 2</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.9; margin: 0; font-size: 18px;">와이프가 \"나 화 안 났어\" 라고 하는데 문을 쾅 닫았어</pre>
  </div>
</div>

<div style="background: #ECFDF5; border-left: 4px solid #059669; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #059669; font-size: 19px; margin-bottom: 10px;">팁</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">반대로도 됩니다! '남편이 응 이라고만 답하는데 뭔 뜻이야?' 같은 것도 물어보세요. 가족 단톡방에서 써먹으면 100% 웃깁니다. 😂</p>
</div>`
        },
        {
          id: "ch03-clip04",
          title: "실습 2: AI 골프 캐디",
          type: "실습",
          duration: "~15분",
          content: `<h2>실습 2: AI 골프 캐디 ⛳</h2>
<h3>상황</h3>
<p>라운딩 가기 전에 코스 공략법을 미리 알고 싶다</p>

<div data-prompt="당신은 20년 경력의 프로 골프 캐디입니다. 한국의 모든 주요 골프장 코스를 꿰고 있습니다.&#10;&#10;## 역할&#10;사용자가 골프장 이름이나 코스를 알려주면:&#10;1. 해당 코스의 특징과 주의점을 알려줍니다&#10;2. 핸디캡에 맞는 맞춤 공략법을 제시합니다&#10;3. 홀별 전략을 표로 정리합니다&#10;&#10;## 응답 스타일&#10;- 캐디처럼 친근하고 자신감 있게 말합니다&#10;- &quot;사장님, 이 홀은요...&quot; 같은 캐디 특유의 화법을 씁니다&#10;- 숫자(거리, 클럽 선택)를 구체적으로 제시합니다&#10;&#10;## 사용자 정보 확인&#10;처음 대화 시작할 때 이렇게 물어보세요:&#10;&quot;사장님, 안녕하세요! 오늘 어디서 라운딩하시나요?&#10;그리고 평균 스코어가 어떻게 되세요? 드라이버 평균 비거리도 알려주시면 딱 맞는 공략 드릴게요.&quot;&#10;&#10;## 응답 형식 (홀별 공략)&#10;&#10;| 홀 | 파 | 거리 | 포인트 | 추천 클럽 | 주의사항 |&#10;|----|---|------|--------|----------|---------|&#10;&#10;## 추가 조언&#10;- 날씨(바람, 비)에 따른 전략 조정&#10;- &quot;보기 플레이어용&quot; vs &quot;파 플레이어용&quot; 분리 조언&#10;- 19번 홀(식당) 메뉴 추천도 해줍니다">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 시스템 인스트럭션</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.8; margin: 0; font-size: 16px;">당신은 20년 경력의 프로 골프 캐디입니다. 한국의 모든 주요 골프장 코스를 꿰고 있습니다.

## 역할
사용자가 골프장 이름이나 코스를 알려주면:
1. 해당 코스의 특징과 주의점을 알려줍니다
2. 핸디캡에 맞는 맞춤 공략법을 제시합니다
3. 홀별 전략을 표로 정리합니다

## 응답 스타일
- 캐디처럼 친근하고 자신감 있게 말합니다
- \"사장님, 이 홀은요...\" 같은 캐디 특유의 화법을 씁니다
- 숫자(거리, 클럽 선택)를 구체적으로 제시합니다

## 사용자 정보 확인
처음 대화 시작할 때 이렇게 물어보세요:
\"사장님, 안녕하세요! 오늘 어디서 라운딩하시나요?
그리고 평균 스코어가 어떻게 되세요? 드라이버 평균 비거리도 알려주시면 딱 맞는 공략 드릴게요.\"

## 응답 형식 (홀별 공략)

| 홀 | 파 | 거리 | 포인트 | 추천 클럽 | 주의사항 |
|----|---|------|--------|----------|---------|

## 추가 조언
- 날씨(바람, 비)에 따른 전략 조정
- \"보기 플레이어용\" vs \"파 플레이어용\" 분리 조언
- 19번 홀(식당) 메뉴 추천도 해줍니다</pre>
  </div>
</div>

<h3>테스트 프롬프트</h3>
<div data-prompt="이번 주 토요일에 남서울CC 가는데, 평균 95치고 드라이버 200m 정도 나가">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 테스트 1</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.9; margin: 0; font-size: 18px;">이번 주 토요일에 남서울CC 가는데, 평균 95치고 드라이버 200m 정도 나가</pre>
  </div>
</div>`
        },
        {
          id: "ch03-clip05",
          title: "실습 3: 주가 파악 AI",
          type: "실습",
          duration: "~15분",
          content: `<h2>실습 3: 주가 파악 AI 📈</h2>
<h3>상황</h3>
<p>관심 있는 종목의 현재 상황과 전망을 빠르게 파악하고 싶다</p>

<div data-prompt="당신은 30년 경력의 증권 애널리스트입니다. 복잡한 주식 정보를 일반인도 이해할 수 있게 설명하는 것이 특기입니다.&#10;&#10;## 역할&#10;사용자가 종목명이나 관심 분야를 말하면:&#10;1. 해당 종목의 현재 상황을 쉽게 요약합니다&#10;2. 최근 주요 뉴스와 이슈를 정리합니다&#10;3. 긍정적 요인과 부정적 요인을 균형 있게 제시합니다&#10;&#10;## 응답 형식&#10;&#10;📊 종목 개요&#10;- 현재가 / 시가총액 / 업종&#10;&#10;📰 최근 이슈 (최근 1개월)&#10;- 주요 뉴스 3개&#10;&#10;👍 긍정적 요인&#10;- (구체적 근거와 함께)&#10;&#10;👎 부정적 요인&#10;- (구체적 근거와 함께)&#10;&#10;🔮 체크포인트&#10;- 앞으로 지켜봐야 할 이벤트 / 일정&#10;&#10;## 반드시 지킬 것&#10;⚠️ 매수/매도 추천은 절대 하지 않습니다&#10;⚠️ &quot;~할 것입니다&quot; 대신 &quot;~할 가능성이 있습니다&quot;로 표현합니다&#10;⚠️ 모든 분석 끝에 &quot;투자 판단은 본인의 책임이며, 이 정보는 참고용입니다&quot;를 반드시 넣습니다&#10;⚠️ 확인되지 않은 루머나 추측성 정보는 &quot;확인 필요&quot; 표시를 합니다&#10;&#10;## 톤&#10;- 증권방송처럼 딱딱하지 않고, 옆에서 설명해주는 느낌&#10;- 전문 용어를 쓸 때는 괄호 안에 쉬운 설명을 넣습니다">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 시스템 인스트럭션</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.8; margin: 0; font-size: 16px;">당신은 30년 경력의 증권 애널리스트입니다. 복잡한 주식 정보를 일반인도 이해할 수 있게 설명하는 것이 특기입니다.

## 역할
사용자가 종목명이나 관심 분야를 말하면:
1. 해당 종목의 현재 상황을 쉽게 요약합니다
2. 최근 주요 뉴스와 이슈를 정리합니다
3. 긍정적 요인과 부정적 요인을 균형 있게 제시합니다

## 응답 형식

📊 종목 개요
- 현재가 / 시가총액 / 업종

📰 최근 이슈 (최근 1개월)
- 주요 뉴스 3개

👍 긍정적 요인
- (구체적 근거와 함께)

👎 부정적 요인
- (구체적 근거와 함께)

🔮 체크포인트
- 앞으로 지켜봐야 할 이벤트 / 일정

## 반드시 지킬 것
⚠️ 매수/매도 추천은 절대 하지 않습니다
⚠️ \"~할 것입니다\" 대신 \"~할 가능성이 있습니다\"로 표현합니다
⚠️ 모든 분석 끝에 \"투자 판단은 본인의 책임이며, 이 정보는 참고용입니다\"를 반드시 넣습니다
⚠️ 확인되지 않은 루머나 추측성 정보는 \"확인 필요\" 표시를 합니다

## 톤
- 증권방송처럼 딱딱하지 않고, 옆에서 설명해주는 느낌
- 전문 용어를 쓸 때는 괄호 안에 쉬운 설명을 넣습니다</pre>
  </div>
</div>

<h3>테스트 프롬프트</h3>
<div data-prompt="삼성전자 요즘 어때?">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 테스트 1</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.9; margin: 0; font-size: 18px;">삼성전자 요즘 어때?</pre>
  </div>
</div>

<div style="background: #FFF8E1; border-left: 4px solid #F59E0B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #F59E0B; font-size: 19px; margin-bottom: 10px;">팁</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;"><strong>참고:</strong> AI Studio에서 'Google Search' 도구를 켜면, 실시간 검색을 해서 최신 정보를 가져옵니다. 왼쪽 패널에서 'Tools' → 'Google Search' ON으로 설정하세요.</p>
</div>`
        },
        {
          id: "ch03-clip06",
          title: "실습 4: 부동산 분석기",
          type: "실습",
          duration: "~15분",
          content: `<h2>실습 4: 부동산 분석기 🏠</h2>
<h3>상황</h3>
<p>관심 지역의 부동산 동향을 쉽게 파악하고 싶다</p>

<div data-prompt="당신은 25년 경력의 부동산 전문 컨설턴트입니다. 복잡한 부동산 시장 정보를 쉽고 친근하게 설명합니다.&#10;&#10;## 역할&#10;사용자가 관심 지역이나 부동산 관련 질문을 하면:&#10;1. 해당 지역의 최근 시세 동향을 요약합니다&#10;2. 호재(좋은 소식)와 악재(나쁜 소식)를 정리합니다&#10;3. 주변 인프라(교통, 학교, 상권)를 고려한 분석을 제공합니다&#10;&#10;## 응답 형식&#10;&#10;🏠 지역 개요&#10;- 위치 특성, 주요 단지&#10;&#10;📈 시세 동향&#10;- 최근 6개월~1년 흐름&#10;- 전세/매매 비율&#10;&#10;✅ 호재 (긍정적 요인)&#10;- (구체적으로)&#10;&#10;⛔ 악재 (부정적 요인)&#10;- (구체적으로)&#10;&#10;🔍 체크포인트&#10;- 향후 지켜볼 이슈&#10;&#10;## 반드시 지킬 것&#10;⚠️ 특정 매물의 매수/매도를 추천하지 않습니다&#10;⚠️ &quot;오를 겁니다/내릴 겁니다&quot; 같은 단정적 표현을 쓰지 않습니다&#10;⚠️ &quot;~할 가능성이 있습니다&quot;, &quot;~를 고려할 필요가 있습니다&quot;로 표현합니다&#10;⚠️ 분석 끝에 &quot;부동산 투자는 개인 상황에 따라 다르며, 전문가 상담을 권합니다&quot;를 넣습니다&#10;⚠️ 정확한 실거래가는 국토부 실거래가 공개시스템 확인을 안내합니다&#10;&#10;## 톤&#10;- 동네 부동산 사장님처럼 친근하게&#10;- &quot;이 동네는요, 솔직히 말씀드리면...&quot; 같은 화법&#10;- 전문 용어에는 항상 쉬운 설명을 괄호로 넣습니다">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 시스템 인스트럭션</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.8; margin: 0; font-size: 16px;">당신은 25년 경력의 부동산 전문 컨설턴트입니다. 복잡한 부동산 시장 정보를 쉽고 친근하게 설명합니다.

## 역할
사용자가 관심 지역이나 부동산 관련 질문을 하면:
1. 해당 지역의 최근 시세 동향을 요약합니다
2. 호재(좋은 소식)와 악재(나쁜 소식)를 정리합니다
3. 주변 인프라(교통, 학교, 상권)를 고려한 분석을 제공합니다

## 응답 형식

🏠 지역 개요
- 위치 특성, 주요 단지

📈 시세 동향
- 최근 6개월~1년 흐름
- 전세/매매 비율

✅ 호재 (긍정적 요인)
- (구체적으로)

⛔ 악재 (부정적 요인)
- (구체적으로)

🔍 체크포인트
- 향후 지켜볼 이슈

## 반드시 지킬 것
⚠️ 특정 매물의 매수/매도를 추천하지 않습니다
⚠️ \"오를 겁니다/내릴 겁니다\" 같은 단정적 표현을 쓰지 않습니다
⚠️ \"~할 가능성이 있습니다\", \"~를 고려할 필요가 있습니다\"로 표현합니다
⚠️ 분석 끝에 \"부동산 투자는 개인 상황에 따라 다르며, 전문가 상담을 권합니다\"를 넣습니다
⚠️ 정확한 실거래가는 국토부 실거래가 공개시스템 확인을 안내합니다

## 톤
- 동네 부동산 사장님처럼 친근하게
- \"이 동네는요, 솔직히 말씀드리면...\" 같은 화법
- 전문 용어에는 항상 쉬운 설명을 괄호로 넣습니다</pre>
  </div>
</div>

<h3>테스트 프롬프트</h3>
<div data-prompt="강남 대치동 은마아파트 요즘 어때?">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 테스트 1</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.9; margin: 0; font-size: 18px;">강남 대치동 은마아파트 요즘 어때?</pre>
  </div>
</div>`
        },
        {
          id: "ch03-clip07",
          title: "바이브 코딩의 힘",
          type: "개념",
          duration: "~5분",
          content: `<h2>바이브 코딩이란?</h2>
<p>오늘 실습에서 여러분이 한 것이 바이브 코딩입니다. <strong>코딩 한 줄 안 하고 4개의 AI 도구를 만들었습니다.</strong></p>

<table style="width: 100%; border-collapse: collapse; margin: 28px 0;">
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">만든 것</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">예전 같았으면</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">오늘 여러분</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">와이프 번역기</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">앱 개발자 고용, 수백만원</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">말로 설명, 5분</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">골프 캐디 AI</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">데이터베이스 구축 필요</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">말로 설명, 5분</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">주가 분석기</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">금융 API 연동 필요</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">말로 설명, 5분</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">부동산 분석기</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">크롤링 프로그램 필요</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">말로 설명, 5분</td>
  </tr>
</table>

<blockquote style="border-left: 5px solid #E4002B; padding: 24px 28px; margin: 28px 0; background: #FFF5F5; border-radius: 0 10px 10px 0;">
  <p style="margin: 0; font-size: 21px; font-weight: 700; color: #1F2937; line-height: 1.6;">이것이 바이브 코딩의 힘입니다. '아이디어만 있으면, 만들 수 있는 시대'가 왔습니다.</p>
</blockquote>`
        },
        {
          id: "ch03-clip08",
          title: "AI Studio 추가 팁",
          type: "참고",
          duration: "~5분",
          content: `<h2>AI Studio 추가 팁</h2>
<h3>Google Search 연동하기</h3>
<ol style="line-height: 1.9; font-size: 19px;">
  <li>Tools 클릭</li>
  <li>Google Search ON</li>
  <li>실시간 뉴스, 시세, 날씨 검색</li>
</ol>

<h3>만든 AI 저장하고 공유하기</h3>
<ul style="line-height: 1.9; font-size: 19px;">
  <li>Save 버튼 → 저장</li>
  <li>Get code 버튼 → 코드 복사</li>
  <li>링크 공유 → 다른 사람과 함께 사용</li>
</ul>

<h3>더 만들어볼 아이디어</h3>
<table style="width: 100%; border-collapse: collapse; margin: 28px 0;">
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">아이디어</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">설명</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">건강 식단 코치</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"오늘 혈당이 높은데 저녁 뭐 먹지?"</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">손주 숙제 도우미</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"초3 수학 분수를 쉽게 설명해줘"</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">여행 가이드</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"제주도 2박3일, 걷기 좋아하는 부부 코스"</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">와인 소믈리에</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"오늘 소고기 구워먹는데 와인 추천해줘"</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">한시(漢詩) 해설가</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"오늘의 한시 한 수 읽어줘, 해설도 해줘"</td>
  </tr>
</table>`
        },
        {
          id: "ch03-clip09",
          title: "3교시 정리",
          type: "개요",
          duration: "~2분",
          content: `<h2>3교시 정리</h2>
<table style="width: 100%; border-collapse: collapse; margin: 28px 0;">
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">배운 것</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">핵심</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">AI Studio</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">Gems보다 한 단계 위, 나만의 AI 앱을 만드는 곳</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">와이프 번역기</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">배우자의 "진짜 뜻"을 유머러스하게 해석</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">골프 캐디</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">코스별 맞춤 공략, 클럽 선택까지 조언</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">주가 분석기</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">종목 분석을 쉬운 말로, 단 투자 추천은 안 함</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">부동산 분석기</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">지역 시세와 호재/악재를 동네 부동산처럼 설명</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">바이브 코딩</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">코딩 없이, 말로 설명해서 AI 도구 만들기</td>
  </tr>
</table>

<div style="background: #F0F7FF; border-left: 4px solid #2563EB; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #2563EB; font-size: 19px; margin-bottom: 10px;">다음 시간</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">Q&A — 궁금한 것 뭐든 물어보세요!</p>
</div>`
        }
      ]
    },
    {
      id: "ch04",
      num: "04",
      title: "Q&A",
      icon: "🎓",
      timeRange: "10분",
      desc: "현업 및 실생활 적용을 위한 질의응답",
      clips: [
        {
          id: "ch04-clip01",
          title: "오늘 우리가 한 것",
          type: "개요",
          duration: "~3분",
          content: `<h2>오늘 우리가 한 것</h2>
<table style="width: 100%; border-collapse: collapse; margin: 28px 0;">
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">교시</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">배운 것</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">만든 것</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">1교시</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">AI 3대장 비교, 왜 구글인가, 프롬프팅 4원칙</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">Gemini 첫 대화</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">2교시</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">제미나이 음악/이미지, Gems 개념</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">생일 축하곡, "나는 누구?" 이미지, 회고록 Gem</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">3교시</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">AI Studio, 바이브 코딩</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">와이프 번역기, 골프 캐디, 주가 분석기, 부동산 분석기</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">4교시</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">Q&A</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">-</td>
  </tr>
</table>

<div style="background: #FFF0F0; border-left: 4px solid #E4002B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #E4002B; font-size: 19px; margin-bottom: 10px;">핵심</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;"><strong>코딩 한 줄 안 하고, 7개의 AI 도구를 만들었습니다.</strong></p>
</div>`
        },
        {
          id: "ch04-clip02",
          title: "자주 묻는 질문 (FAQ)",
          type: "참고",
          duration: "~3분",
          content: `<h2>자주 묻는 질문 (FAQ)</h2>

<div style="background: #FFF0F0; border-left: 4px solid #E4002B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #E4002B; font-size: 19px; margin-bottom: 10px;">Q1: AI가 틀린 답을 하면 어떡해요?</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;"><strong>할루시네이션(환각)</strong> = AI가 아는 척하면서 지어내는 것입니다. 중요한 결정은 반드시 다른 곳에서 확인하세요.</p>
</div>

<div style="background: #F0F7FF; border-left: 4px solid #2563EB; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #2563EB; font-size: 19px; margin-bottom: 10px;">Q2: 내가 입력한 내용이 유출되지는 않나요?</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;"><strong>무료:</strong> 서비스 개선에 사용 가능. <strong>유료:</strong> 학습에 미사용. 민감정보 입력 금지.</p>
</div>

<div style="background: #FFF8E1; border-left: 4px solid #F59E0B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #F59E0B; font-size: 19px; margin-bottom: 10px;">Q3: 유료 결제할 가치가 있나요?</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">주 3회 이상 쓰면 추천합니다. 무료로 충분히 써보고 결정해도 늦지 않습니다.</p>
</div>

<div style="background: #ECFDF5; border-left: 4px solid #059669; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #059669; font-size: 19px; margin-bottom: 10px;">Q4: 영어로 물어봐야 더 잘 답하나요?</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">한국어로 충분합니다. 전문 내용은 영어 키워드를 섞으면 더 좋은 결과를 얻습니다.</p>
</div>

<div style="background: #FFF0F0; border-left: 4px solid #E4002B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #E4002B; font-size: 19px; margin-bottom: 10px;">Q5: ChatGPT나 Claude도 써봐야 하나요?</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">하나를 잘 쓰는 것이 여러 개를 대충 쓰는 것보다 낫습니다. Gemini부터 익히세요.</p>
</div>`
        },
        {
          id: "ch04-clip03",
          title: "집에 가서 해볼 것",
          type: "참고",
          duration: "~2분",
          content: `<h2>집에 가서 해볼 것 (숙제 아닙니다, 놀이입니다)</h2>

<div style="background: #ECFDF5; border-left: 4px solid #059669; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #059669; font-size: 19px; margin-bottom: 10px;">오늘 당장</h3>
  <ol style="margin: 0; padding-left: 20px;">
    <li>가족 단톡방에 AI로 만든 노래 보내기</li>
    <li>와이프 번역기 써보기</li>
  </ol>
</div>

<div style="background: #F0F7FF; border-left: 4px solid #2563EB; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #2563EB; font-size: 19px; margin-bottom: 10px;">이번 주 안에</h3>
  <ol style="margin: 0; padding-left: 20px;">
    <li>회고록 Gem과 30분 대화하기</li>
    <li>골프 캐디 AI에게 다음 라운딩 코스 공략 받기</li>
  </ol>
</div>

<div style="background: #FFF8E1; border-left: 4px solid #F59E0B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #F59E0B; font-size: 19px; margin-bottom: 10px;">한 달 안에</h3>
  <ol style="margin: 0; padding-left: 20px;">
    <li>나만의 Gem 3개 만들기</li>
    <li>가족 중 한 명에게 Gemini 사용법 알려주기 — 가르치면서 본인도 더 잘 알게 됩니다</li>
  </ol>
</div>`
        },
        {
          id: "ch04-clip04",
          title: "마무리",
          type: "개요",
          duration: "~2분",
          content: `<h2>마무리</h2>

<blockquote style="border-left: 4px solid #E4002B; padding: 20px; margin: 20px 0; background: #FFF5F5; border-radius: 0 8px 8px 0; text-align: center;">
  <p style="margin: 0; font-size: 19px; line-height: 1.9; color: #1F2937;">
    AI는 도구입니다. 연장통에 새 연장이 하나 추가된 겁니다.<br><br>
    망치가 있다고 모든 것을 못으로 박을 필요는 없듯이,<br>
    AI가 있다고 모든 것을 AI로 할 필요는 없습니다.<br><br>
    하지만 못을 박아야 할 때 망치가 있으면 편하듯이,<br>
    뭔가를 알아보고 싶을 때, 정리하고 싶을 때, 만들고 싶을 때<br>
    <strong>'아, Gemini한테 물어보자!'</strong> 가 자연스러워지면 성공입니다.<br><br>
    오늘 수업 들으신 것만으로도 대단하십니다. 👏<br>
    가족한테 자랑하세요. '나 오늘 AI로 노래 만들었어!'
  </p>
</blockquote>

<h3>핵심 주소 모음</h3>
<table style="width: 100%; border-collapse: collapse; margin: 28px 0;">
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">서비스</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">주소</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">용도</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">Gemini</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;"><a href="https://gemini.google.com" target="_blank" style="color: #2563EB; text-decoration: underline;">gemini.google.com</a></td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">AI 대화, 음악/이미지 생성, Gems</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">AI Studio</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;"><a href="https://aistudio.google.com" target="_blank" style="color: #2563EB; text-decoration: underline;">aistudio.google.com</a></td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">나만의 AI 도구 만들기</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">ChatGPT</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">chat.openai.com</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">(참고) OpenAI의 AI</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">Claude</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">claude.ai</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">(참고) Anthropic의 AI</td>
  </tr>
</table>

<p style="text-align: center; font-size: 24px; margin-top: 40px;">감사합니다! 🙇</p>`
        }
      ]
    }
  ]
};

// ============================================================================
// 데이터 구조 변환: 배열 → app.js가 기대하는 객체 형태로 정규화
// ============================================================================
(function normalizeCourseConfig() {
  const TYPE_KO_TO_EN = {
    '개요': 'overview',
    '개념': 'concept',
    '실습': 'practice',
    '참고': 'reference',
    '시연': 'demo',
    '플랫폼': 'platform',
  };

  const chaptersObj = {};
  COURSE_CONFIG.chapters.forEach(ch => {
    const chKey = ch.id;
    const clipsObj = {};
    ch.clips.forEach(clip => {
      const clipKey = clip.id.replace(/^ch\d+-/, '');
      clipsObj[clipKey] = {
        title: clip.title,
        type: TYPE_KO_TO_EN[clip.type] || clip.type,
        duration: clip.duration,
        content: clip.content,
      };
    });

    chaptersObj[chKey] = {
      chNum: ch.num,
      title: ch.title,
      duration: ch.timeRange,
      desc: ch.desc,
      icon: ch.icon,
      clips: clipsObj,
    };
  });
  COURSE_CONFIG.chapters = chaptersObj;

  COURSE_CONFIG.timeline = COURSE_CONFIG.timeline.map(item => ({
    label: item.label,
    width: item.percent,
    duration: item.duration || '',
    color: item.color,
    break: item.break || false,
  }));
})();
