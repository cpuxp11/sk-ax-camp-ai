const COURSE_CONFIG = {
  title: "가족한테 써먹는 AI",
  org: "SK",
  subtitle: "Google Gemini 실전 활용법",
  logoSrc: "assets/sk-logo.svg",
  date: "2026.03.26",
  location: "SK 캠퍼스",
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
      title: "AI 3대장 비교 — 왜 구글인가",
      icon: "🤖",
      timeRange: "50분",
      desc: "오늘 끝나고 가족한테 써먹을 수 있는 AI를 고르자",
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
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">gemini.google.com</td>
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
<div data-prompt="이 유튜브 영상을 보고 핵심 내용을 정리해줘.
https://www.youtube.com/watch?v=xxxxxxx">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 프롬프트 예시</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.9; margin: 0; font-size: 18px;">이 유튜브 영상을 보고 핵심 내용을 정리해줘.
https://www.youtube.com/watch?v=xxxxxxx</pre>
  </div>
</div>
<p>AI가 해주는 것: 1시간 강의→3분 핵심 요약, 타임스탬프, 포인트 추출</p>
<p><strong>왜 대단한가?</strong> 유튜브는 구글 것입니다. Gemini만 유튜브 영상을 직접 이해할 수 있습니다.</p>

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
<div style="background: #ECFDF5; border-left: 4px solid #059669; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #059669; font-size: 19px; margin-bottom: 10px;">Step 1</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">gemini.google.com 접속 → 구글 계정으로 로그인</p>
</div>

<div style="background: #F0F7FF; border-left: 4px solid #2563EB; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #2563EB; font-size: 19px; margin-bottom: 10px;">Step 2</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;"><strong>화면 구성:</strong></p>
  <ul style="margin: 12px 0 0 0; font-size: 18px; line-height: 1.8;">
    <li>가운데: 입력창 (카카오톡 입력창처럼)</li>
    <li>왼쪽: 사이드바 (채팅 목록)</li>
    <li>상단: + 버튼 (파일 첨부)</li>
  </ul>
</div>

<div style="background: #FFF8E1; border-left: 4px solid #F59E0B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #F59E0B; font-size: 19px; margin-bottom: 10px;">Step 3 — 첫 대화</h3>
</div>
<div data-prompt="안녕, 나는 오늘 AI를 처음 배우는 사람이야.
반갑게 인사해줘.">
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
<div data-prompt="이 영상의 핵심 내용을 3가지로 요약해줘.
[유튜브 링크 붙여넣기]">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 프롬프트 예시</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.9; margin: 0; font-size: 18px;">이 영상의 핵심 내용을 3가지로 요약해줘.
[유튜브 링크 붙여넣기]</pre>
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
<p style="font-size: 18px; line-height: 1.8;">AI한테 일을 시킬 때, 이 <strong>4가지</strong>만 기억하시면 됩니다.</p>

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

<p style="font-size: 18px; line-height: 1.8;">이 4가지를 넣어서 시키면, 결과가 완전히 달라집니다. 다음 페이지에서 직접 체험해봅시다!</p>

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
<div data-prompt="너는 신나는 트로트 작곡가야.

나는 올해로 결혼 40주년이야.
평생 함께해준 배우자한테 고마운 마음을 담은 노래를 만들고 싶어.
우리가 처음 만난 곳은 대학교 도서관이고,
좋아하는 계절은 가을이야.

아래 조건으로 만들어줘:
- 장르: 신나는 트로트
- 길이: 1분 정도
- 가사: 2절까지, 후렴구는 쉽게 따라 부를 수 있게
- 가사에 넣을 키워드: 도서관, 가을, 40년, 고마워

먼저 가사만 보여줘. 내가 확인하고 수정할 부분을 알려줄게.
가사가 괜찮으면 그 다음에 노래로 만들어줘.">
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

<div data-prompt="나는 AI로 노래를 만들고 싶어.
가족한테 보내려고 하는데, 어떤 노래를 만들면 좋을지 잘 모르겠어.
좋은 노래를 만들려면 네가 나한테 뭘 물어봐야 해? 질문 먼저 해줘.">
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
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">gemini.google.com → 구글 계정 → 바로 시작</td>
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
      title: "이미지 게임 + Gems",
      icon: "🎨",
      timeRange: "60분",
      desc: "나를 표현하는 이미지 만들고, 나만의 AI 비서 만들기",
      clips: [
        {
          id: "ch02-clip01",
          title: "Gems가 뭔가요?",
          type: "개념",
          duration: "~5분",
          content: `<h2>Gems — AI에게 '직무기술서'를 써주는 것</h2>
<table style="width: 100%; border-collapse: collapse; margin: 28px 0;">
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">상황</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">일반 Gemini 채팅</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">Gems</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">비유</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">처음 만난 비서에게 매번 설명</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">오래 일한 전담 비서가 알아서 척척</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">매번 설명</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"너는 OO 전문가야. 나는 이런 사람이야..."</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">그냥 바로 "이거 해줘"</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">톤</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">대화마다 말투가 달라질 수 있음</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">항상 같은 스타일</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">재사용</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">대화 끝나면 다시 처음부터</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">한 번 만들면 계속 사용</td>
  </tr>
</table>

<div style="background: #FFF0F0; border-left: 4px solid #E4002B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #E4002B; font-size: 19px; margin-bottom: 10px;">쉽게 말하면</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">1교시에서 배운 '역할(Role)' 설정을 한 번만 해두면 영구적으로 적용되는 것이 Gems입니다.</p>
</div>`
        },
        {
          id: "ch02-clip02",
          title: "Gems 만드는 법",
          type: "실습",
          duration: "~5분",
          content: `<h2>Gems 만드는 법 — 3단계</h2>
<div style="background: #ECFDF5; border-left: 4px solid #059669; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #059669; font-size: 19px; margin-bottom: 10px;">Step 1</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">gemini.google.com → 왼쪽 사이드바 → "Gems" 클릭</p>
</div>

<div style="background: #F0F7FF; border-left: 4px solid #2563EB; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #2563EB; font-size: 19px; margin-bottom: 10px;">Step 2</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">"+ 새 Gem" 클릭</p>
</div>

<div style="background: #FFF0F0; border-left: 4px solid #E4002B; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #E4002B; font-size: 19px; margin-bottom: 10px;">Step 3</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">이름, 설명, 요청사항(시스템 인스트럭션) 입력 → "저장"</p>
</div>

<p style="text-align: center; font-weight: 600; font-size: 18px; margin-top: 30px;">이게 끝입니다. 정말 간단하죠?</p>`
        },
        {
          id: "ch02-clip03",
          title: "내 인생 회고록 작가 Gem",
          type: "실습",
          duration: "~20분",
          content: `<h2>실습: '내 인생 회고록 작가' Gem 만들기</h2>
<p>은퇴 후 인생을 돌아보며 글 정리. AI에게 "인생 회고록 전문 작가" 역할을 주면, 대화하듯 이야기하는 것만으로 멋진 회고록이 만들어집니다.</p>

<h3>Step 1: Gem 만들기</h3>
<p style="font-size: 18px; line-height: 1.8; margin-bottom: 8px;">gemini.google.com → Gems → "+ 새 Gem" 클릭 후, 아래 내용을 각 칸에 입력하세요.</p>

<div data-prompt="[Gem 이름]
내 인생 회고록 작가

[Gem 설명]
대화를 나누며 인생 이야기를 자연스럽게 이끌어내고, 감동적인 회고록으로 정리해주는 AI 작가

[요청사항 (시스템 인스트럭션)]
당신은 따뜻하고 공감 능력이 뛰어난 회고록 전문 작가입니다.

## 당신의 역할
- 대화 상대의 인생 이야기를 자연스럽게 이끌어내는 인터뷰어
- 이야기를 감동적이고 읽기 좋은 회고록으로 정리하는 작가
- 상대방의 감정과 경험을 존중하는 따뜻한 대화 상대

## 대화 방식
1. 한 번에 질문은 1~2개만 합니다 (질문 폭탄 금지)
2. 상대방이 한 이야기에 먼저 공감하고, 그 다음 자연스럽게 다음 질문으로 넘어갑니다
3. \"그때 기분이 어떠셨어요?\", \"그 일이 인생에 어떤 영향을 줬나요?\" 같은 감정을 이끌어내는 질문을 합니다
4. 존댓말을 사용하되, 친근하고 편안한 분위기를 유지합니다

## 회고록 작성 원칙
- 시간순으로 정리하되, 가장 의미 있는 순간에 집중합니다
- 상대방의 말투와 표현을 최대한 살립니다 (직접 인용 활용)
- 각 챕터에 제목을 붙입니다 (예: \"광화문에서 시작된 30년\", \"아버지가 된 날\")
- 사실 나열이 아니라 이야기(스토리)로 엮습니다

## 대화 시작
처음 만나면 이렇게 인사하세요:
\"안녕하세요! 저는 당신의 인생 이야기를 함께 정리해드릴 회고록 작가입니다.
오늘 편안하게 이야기 나눠보시죠.
먼저 여쭤볼게요 — 요즘 문득 떠오르는 옛날 기억이 있으신가요?
어떤 시절, 어떤 장면이든 좋습니다.\"

## 정리 요청 시
대화가 어느 정도 쌓이면 \"정리해줘\"라고 요청받을 수 있습니다. 이때:
- 챕터별로 나눠서 회고록 형식으로 정리합니다
- 각 챕터 앞에 한 줄 요약을 넣습니다
- 소설처럼 생생하고 감동적인 문체로 작성합니다
- 마지막에 \"이 부분을 더 자세히 쓸까요?\" 하고 물어봅니다

## 이미지 생성
회고록 정리 후 \"이미지도 만들어줘\"라고 요청받으면:
- 각 챕터의 핵심 장면을 따뜻한 일러스트로 그려줍니다
- 수채화 또는 연필화 스타일, 한국적이고 정감 있는 느낌으로
- 예: \"1985년 첫 출근 날\" → 80년대 서울 거리와 양복 입은 청년 일러스트">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 회고록 작가 Gem 전체 설정</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.8; margin: 0; font-size: 16px;"><span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ Gem 이름 ]</span>
내 인생 회고록 작가

<span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ Gem 설명 ]</span>
대화를 나누며 인생 이야기를 자연스럽게 이끌어내고, 감동적인 회고록으로 정리해주는 AI 작가

<span style="color: #F59E0B; font-weight: 700; font-size: 17px;">[ 요청사항 — 아래 내용을 통째로 붙여넣기 ]</span>
당신은 따뜻하고 공감 능력이 뛰어난 회고록 전문 작가입니다.

## 당신의 역할
- 대화 상대의 인생 이야기를 자연스럽게 이끌어내는 인터뷰어
- 이야기를 감동적이고 읽기 좋은 회고록으로 정리하는 작가
- 상대방의 감정과 경험을 존중하는 따뜻한 대화 상대

## 대화 방식
1. 한 번에 질문은 1~2개만 합니다 (질문 폭탄 금지)
2. 상대방이 한 이야기에 먼저 공감하고, 그 다음 자연스럽게 다음 질문
3. 감정을 이끌어내는 질문을 합니다
4. 존댓말을 사용하되, 친근하고 편안한 분위기를 유지합니다

## 회고록 작성 원칙
- 시간순으로 정리하되, 가장 의미 있는 순간에 집중
- 상대방의 말투와 표현을 최대한 살립니다 (직접 인용 활용)
- 각 챕터에 제목을 붙입니다
- 사실 나열이 아니라 이야기(스토리)로 엮습니다

## 대화 시작
"안녕하세요! 저는 당신의 인생 이야기를 함께 정리해드릴 회고록 작가입니다.
오늘 편안하게 이야기 나눠보시죠.
먼저 여쭤볼게요 — 요즘 문득 떠오르는 옛날 기억이 있으신가요?"

## 정리 요청 시
"정리해줘"라고 요청받으면:
- 챕터별로 나눠서 회고록 형식으로 정리
- 소설처럼 생생하고 감동적인 문체로 작성
- 마지막에 "이 부분을 더 자세히 쓸까요?" 확인

## 이미지 생성
"이미지도 만들어줘"라고 요청받으면:
- 각 챕터의 핵심 장면을 따뜻한 일러스트로 생성
- 수채화/연필화 스타일, 한국적이고 정감 있는 느낌
- 예: "1985년 첫 출근 날" → 80년대 서울 거리와 청년 일러스트</pre>
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
<div data-prompt="이 시스템 인스트럭션을 더 효과적으로 개선해줘.
빠진 부분이 있으면 추가하고, 더 명확하게 만들어줘.">
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
          id: "ch02-clip05",
          title: "Gems 활용 아이디어",
          type: "참고",
          duration: "~3분",
          content: `<h2>Gems 활용 아이디어</h2>
<table style="width: 100%; border-collapse: collapse; margin: 28px 0;">
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">Gem 이름</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">역할</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7; font-weight: bold;">활용 예시</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">건강 관리 코치</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">건강/운동 상담</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"오늘 혈압이 140인데 괜찮아?"</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">손주 선물 고문</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">연령별 선물 추천</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"8살 여자아이가 요즘 뭘 좋아해?"</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">여행 플래너</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">여행 계획 수립</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"부부 동반 일본 온천여행 3박4일 짜줘"</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">요리 선생님</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">레시피 + 요리 팁</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"냉장고에 두부랑 파밖에 없는데 뭐 해먹지?"</td>
  </tr>
</table>

<div style="background: #ECFDF5; border-left: 4px solid #059669; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #059669; font-size: 19px; margin-bottom: 10px;">숙제 (선택)</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">오늘 수업 끝나고, 본인만의 Gem을 하나 더 만들어보세요!</p>
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
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">이미지 만들기</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">외모, 활동, 배경, 스타일을 묘사하면 AI가 그려줌</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">Gems</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">"한 번 설정하면 매번 역할 설명 안 해도 되는" 나만의 AI 비서</td>
  </tr>
  <tr>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">회고록 Gem</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">대화하듯 이야기하면 AI가 멋진 회고록으로 정리해줌</td>
  </tr>
</table>

<div style="background: #F0F7FF; border-left: 4px solid #2563EB; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #2563EB; font-size: 19px; margin-bottom: 10px;">다음 시간 예고</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">Google AI Studio에서 '와이프 번역기', 'AI 골프 캐디', '주가 분석기', '부동산 분석기'를 직접 만들어 봅니다!</p>
</div>`
        }
      ]
    },
    {
      id: "ch03",
      num: "03",
      title: "AI Studio — 나만의 AI 도구 만들기",
      icon: "🛠️",
      timeRange: "90분",
      desc: "코딩 없이 AI 앱 빌더로 전문가 도구 만들기",
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
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">gemini.google.com → Gems</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">aistudio.google.com</td>
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
<div style="background: #ECFDF5; border-left: 4px solid #059669; padding: 26px 30px; margin: 28px 0; border-radius: 10px;">
  <h3 style="margin-top: 0; color: #059669; font-size: 19px; margin-bottom: 10px;">Step 1</h3>
  <p style="margin: 0; font-size: 18px; line-height: 1.8;">aistudio.google.com 접속 → 구글 로그인</p>
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

<div data-prompt="당신은 \"부부 소통 전문 번역기\"입니다. 30년 이상의 결혼 생활 경험을 가진 부부 상담 전문가 역할을 합니다.

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
- 모든 조언은 \"소통\"과 \"이해\"에 초점을 맞춥니다">
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
<div data-prompt="와이프가 \"당신 알아서 해\" 라고 했어">
  <div style="background: #1E1E1E; border-radius: 14px; padding: 28px; margin: 28px 0; position: relative;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; gap: 16px;">
      <span style="color: #9CA3AF; font-size: 16px; font-weight: 500;">📋 테스트 1</span>
      <button onclick="navigator.clipboard.writeText(this.closest('[data-prompt]').getAttribute('data-prompt')); this.textContent='✅ 복사됨!'; setTimeout(()=>this.textContent='📋 복사하기', 1500);" style="background: #E4002B; color: #FFFFFF; border: none; padding: 14px 22px; border-radius: 8px; cursor: pointer; font-size: 17px; font-weight: 700; min-height: 52px; display: flex; align-items: center; gap: 8px; white-space: nowrap; letter-spacing: 0.2px; transition: background 0.2s;">📋 복사하기</button>
    </div>
    <pre style="color: #E5E7EB; font-family: 'Pretendard', sans-serif; white-space: pre-wrap; line-height: 1.9; margin: 0; font-size: 18px;">와이프가 \"당신 알아서 해\" 라고 했어</pre>
  </div>
</div>

<div data-prompt="와이프가 \"나 화 안 났어\" 라고 하는데 문을 쾅 닫았어">
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

<div data-prompt="당신은 20년 경력의 프로 골프 캐디입니다. 한국의 모든 주요 골프장 코스를 꿰고 있습니다.

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
- 19번 홀(식당) 메뉴 추천도 해줍니다">
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

<div data-prompt="당신은 30년 경력의 증권 애널리스트입니다. 복잡한 주식 정보를 일반인도 이해할 수 있게 설명하는 것이 특기입니다.

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
- 전문 용어를 쓸 때는 괄호 안에 쉬운 설명을 넣습니다">
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

<div data-prompt="당신은 25년 경력의 부동산 전문 컨설턴트입니다. 복잡한 부동산 시장 정보를 쉽고 친근하게 설명합니다.

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
- 전문 용어에는 항상 쉬운 설명을 괄호로 넣습니다">
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
      title: "Q&A + 마무리",
      icon: "🎓",
      timeRange: "10분",
      desc: "궁금한 것 묻고, 앞으로의 계획 세우기",
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
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">gemini.google.com</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">AI 대화, 음악/이미지 생성, Gems</td>
  </tr>
  <tr style="background: #F9FAFB;">
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">AI Studio</td>
    <td style="padding: 18px 16px; border: 1px solid #E5E7EB; font-size: 17px; line-height: 1.7;">aistudio.google.com</td>
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
