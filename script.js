const assets = {
  slides: Array.from({ length: 12 }, (_, i) => `./assets/slides/slide_${String(i + 1).padStart(2, "0")}.jpg`),
  videoFrames: Array.from({ length: 8 }, (_, i) => `./assets/video_frames/frame_${String(i + 1).padStart(2, "0")}.jpg`),
  infographics: {
    origin: "./assets/infographics/01_起源時間線.jpg",
    types: "./assets/infographics/02_民俗舞_vs_古典舞.jpg",
    folk: "./assets/infographics/03_民俗舞地圖式重點.jpg",
    masters: "./assets/infographics/04_舞林高手人物卡.jpg",
    basics: "./assets/infographics/05_基本功訓練輪.jpg",
    postures: "./assets/infographics/06_舞姿動作圖鑑.jpg"
  }
};

const driveFolderUrl = "https://drive.google.com/drive/folders/1n-pZY-BWSD3FNuIumpD2etovvBynq598?usp=sharing";
const youtubeUrls = {
  driveFolder: driveFolderUrl,
  yunshou: driveFolderUrl,
  fenghuolun: driveFolderUrl,
  shougongyaogong: driveFolderUrl,
  shuangfeiyan: driveFolderUrl,
  shanbang: driveFolderUrl,
  yubu: driveFolderUrl,
  tuigongtantiaogong: driveFolderUrl
};

const focusData = {
  origin: {
    no: "01",
    title: "起源線索",
    tagline: "從器物、岩畫、文字與壁畫追蹤舞蹈身世",
    slide: 2,
    videoFrame: 0,
    bullets: ["彩陶盆、岩畫、甲骨文與神話傳說都留下早期舞蹈痕跡", "巫師透過儀式舞蹈祭天祈福，被視為早期職業舞者", "陶舞俑與莫高窟飛天壁畫讓古代舞姿變得可見"],
    prompt: "NotebookLM 自學提示：請用三個證據說明中國舞蹈不是只存在舞台上。",
    question: "哪一項最能說明早期舞蹈也存在於文物與圖像中？",
    options: ["彩陶盆、岩畫、陶舞俑", "只看現代舞台燈光", "只記住舞者姓名"],
    answer: 0
  },
  types: {
    no: "02",
    title: "民俗舞／古典舞",
    tagline: "用來源、場合與表演方式分辨兩種舞蹈語彙",
    slide: 3,
    videoFrame: 1,
    bullets: ["民俗舞來自族群生活、節慶與民風，形式自由活潑", "古典舞由民俗舞提煉並精緻化，形成規範與獨特風格", "兩者都承載文化特色，不是高低之分"],
    prompt: "NotebookLM 自學提示：請用一張表比較民俗舞與古典舞。",
    question: "下列哪一組配對最合理？",
    options: ["民俗舞：生活節慶；古典舞：規範身段", "民俗舞：只在宮廷；古典舞：完全沒有規範", "兩者沒有文化意義"],
    answer: 0
  },
  folk: {
    no: "03",
    title: "民俗舞",
    tagline: "從族群生活、節奏與動物模擬看文化特色",
    slide: 4,
    videoFrame: 2,
    bullets: ["藏族弦子舞邊歌邊舞，長袖甩動，氣氛歡樂", "傣族孔雀舞模擬抖翅、開屏、飛翔、喝水與戲水", "踏歌與胡旋舞呈現群體同樂與鮮明節奏"],
    prompt: "NotebookLM 自學提示：請整理三種民俗舞的動作關鍵字。",
    question: "孔雀舞最重要的表現方式是什麼？",
    options: ["模擬孔雀姿態與動作", "只背誦年代", "完全不看節奏"],
    answer: 0
  },
  masters: {
    no: "04",
    title: "舞林高手",
    tagline: "用人物故事記住舞蹈技巧與時代美感",
    slide: 6,
    videoFrame: 4,
    bullets: ["戚夫人以翹袖折腰舞聞名", "趙飛燕的踽步呈現輕盈飄拂感", "楊玉環善歌舞、通音律；公孫大娘以劍器舞聞名"],
    prompt: "NotebookLM 自學提示：請把人物、舞作與動作特色做成配對卡。",
    question: "「踽步」最適合連到哪位人物？",
    options: ["趙飛燕", "公孫大娘", "安祿山"],
    answer: 0
  },
  basics: {
    no: "05",
    title: "基本功",
    tagline: "技巧不是天生，是長期練功累積出來的控制力",
    slide: 7,
    videoFrame: 5,
    bullets: ["手功訓練力量與控制", "腰功訓練耗腰、擰腰與身體弧線", "腿功與彈跳功建立肌力、柔軟度與協調"],
    prompt: "NotebookLM 自學提示：請說明基本功如何幫助日常姿勢與健康。",
    question: "哪一項不是本課列出的基本功類別？",
    options: ["手功", "腰功", "煙火功"],
    answer: 2
  },
  postures: {
    no: "06",
    title: "舞姿圖鑑",
    tagline: "讓身體變成圖像，並用眼神與氣息完成動作",
    slide: 8,
    videoFrame: 6,
    bullets: ["山膀像穩固山峰", "弓箭步展現威武氣勢", "金雞獨立、雙飛燕與雲手考驗平衡、線條與手眼相隨"],
    prompt: "NotebookLM 自學提示：請選一個舞姿，描述手、腳、眼神與重心。",
    question: "雲手練習時，眼神通常要怎麼做？",
    options: ["跟著手部移動軌跡", "一直看地板", "完全閉眼"],
    answer: 0
  }
};

const focusQuestionLabels = {
  origin: "01 起源線索",
  types: "02 民俗／古典",
  folk: "03 民俗舞",
  masters: "04 舞林高手",
  basics: "05 基本功",
  postures: "06 舞姿圖鑑"
};

const assessmentQuestions = [
  { part: 1, focus: "01 起源線索", q: "哪一項最能作為中國早期舞蹈存在的證據？", options: ["彩陶盆、岩畫、甲骨文", "現代流行歌曲", "舞台燈光", "投影布幕"], answer: 0 },
  { part: 1, focus: "01 起源線索", q: "教材中提到，巫師被視為早期職業舞者，主要和哪種活動有關？", options: ["祭天祈福與消災解厄", "商業廣告拍攝", "運動競賽裁判", "舞台音響維修"], answer: 0 },
  { part: 1, focus: "01 起源線索", q: "莫高窟飛天壁畫在本課中可用來說明什麼？", options: ["古代舞姿與服飾動態可被看見", "現代街舞比賽規則", "樂器製作流程", "座號抽籤方式"], answer: 0 },
  { part: 1, focus: "01 起源線索", q: "舞蹈紋飾彩陶盆最適合連結到哪個概念？", options: ["群體舞蹈與古代生活", "單人考試作答", "舞台機械控制", "現代錄音設備"], answer: 0 },
  { part: 1, focus: "01 起源線索", q: "甲骨文中關於舞蹈的記載，主要屬於哪類證據？", options: ["文字文獻證據", "現代攝影證據", "口頭投票證據", "音響規格證據"], answer: 0 },
  { part: 1, focus: "02 民俗／古典", q: "民俗舞最常連結到哪一類文化情境？", options: ["族群生活、節慶與民風", "只限宮廷典禮", "只在考試紙上出現", "完全不使用身體"], answer: 0 },
  { part: 1, focus: "02 民俗／古典", q: "古典舞的特色較接近下列哪一項？", options: ["經提煉、精緻化並形成規範", "完全即興且沒有身段要求", "只模仿交通工具", "只用文字朗讀"], answer: 0 },
  { part: 1, focus: "02 民俗／古典", q: "民俗舞與古典舞的關係，哪一項較合理？", options: ["兩者都承載文化特色", "民俗舞完全沒有文化", "古典舞一定沒有規範", "兩者都不是舞蹈"], answer: 0 },
  { part: 1, focus: "02 民俗／古典", q: "文舞與武舞屬於哪一類舞蹈介紹？", options: ["古典舞", "民俗舞", "現代流行舞", "體育操"], answer: 0 },
  { part: 1, focus: "02 民俗／古典", q: "判斷民俗舞與古典舞時，最應先觀察什麼？", options: ["來源、場合與表演方式", "影片檔案大小", "投影幕品牌", "座位方向"], answer: 0 },
  { part: 1, focus: "03 民俗舞", q: "傣族孔雀舞主要模擬哪一種形象？", options: ["孔雀抖翅、開屏、飛翔等姿態", "熊的冬眠", "魚群游泳", "馬車移動"], answer: 0 },
  { part: 1, focus: "03 民俗舞", q: "藏族弦子舞在教材中的描述重點是什麼？", options: ["邊歌邊舞、長袖甩動、氣氛歡樂", "完全靜止不動", "只使用劍器", "只在祭孔大典出現"], answer: 0 },
  { part: 1, focus: "03 民俗舞", q: "踏歌較接近哪一種舞蹈形式？", options: ["群體同樂、挽手相牽", "單人閉眼默念", "只練手指", "只看影片不表演"], answer: 0 },
  { part: 1, focus: "03 民俗舞", q: "胡旋舞最突出的動作特色是什麼？", options: ["快速連續旋轉", "長時間坐著不動", "只做深呼吸", "只做手寫筆記"], answer: 0 },
  { part: 1, focus: "03 民俗舞", q: "民俗舞常使用道具或模擬動物，主要是為了什麼？", options: ["讓動作更豐富並呈現文化特色", "減少身體表現", "避免觀眾理解", "取代所有音樂"], answer: 0 },
  { part: 2, focus: "04 舞林高手", q: "戚夫人的代表特色是什麼？", options: ["翹袖折腰", "劍器舞", "孔雀開屏", "八佾隊形"], answer: 0 },
  { part: 2, focus: "04 舞林高手", q: "趙飛燕的踽步呈現哪種感覺？", options: ["輕盈飄拂", "沉重遲緩", "完全僵硬", "只靠道具"], answer: 0 },
  { part: 2, focus: "04 舞林高手", q: "楊玉環與哪個舞作連結最密切？", options: ["霓裳羽衣舞", "弦子舞", "猴鼓舞", "踏歌"], answer: 0 },
  { part: 2, focus: "04 舞林高手", q: "公孫大娘以哪種舞聞名？", options: ["劍器舞", "孔雀舞", "弓箭步", "耗腰"], answer: 0 },
  { part: 2, focus: "04 舞林高手", q: "人物故事在本課學習中的功能是什麼？", options: ["幫助記住舞蹈技巧與時代美感", "取代所有身體練習", "只用來背年代", "和舞蹈無關"], answer: 0 },
  { part: 2, focus: "05 基本功", q: "中國舞基本功不包含下列哪一項？", options: ["煙火功", "手功", "腰功", "腿功"], answer: 0 },
  { part: 2, focus: "05 基本功", q: "腰功主要訓練身體哪方面能力？", options: ["腰背力量、弧線與扭轉", "只訓練聲音大小", "只訓練記憶座號", "只訓練畫圖速度"], answer: 0 },
  { part: 2, focus: "05 基本功", q: "腿功練習包含下列哪一項？", options: ["耗腿、踢腿、端腿", "只坐著觀看", "只拍手", "只畫線"], answer: 0 },
  { part: 2, focus: "05 基本功", q: "彈跳功主要訓練什麼？", options: ["身體彈跳能力與協調", "文字朗讀速度", "投影操作", "座位排列"], answer: 0 },
  { part: 2, focus: "05 基本功", q: "練基本功時，哪一項姿勢提醒較合理？", options: ["抬頭、挺胸、收小腹、肩膝放鬆", "低頭駝背", "完全閉眼亂跳", "只看旁邊同學"], answer: 0 },
  { part: 2, focus: "06 舞姿圖鑑", q: "弓箭步的視覺意象是什麼？", options: ["一腳如弓，一腳如箭", "雙手像雲飄移", "單腳站立如金雞", "手拉手群舞"], answer: 0 },
  { part: 2, focus: "06 舞姿圖鑑", q: "山膀主要是哪一類動作？", options: ["手部動作，雙臂平舉如山", "腿部小碎步", "快速旋轉", "道具拋接"], answer: 0 },
  { part: 2, focus: "06 舞姿圖鑑", q: "雲手練習時，眼神通常應該如何配合？", options: ["跟著手部移動軌跡", "一直看地板", "完全閉眼", "只看旁邊同學"], answer: 0 },
  { part: 2, focus: "06 舞姿圖鑑", q: "金雞獨立主要考驗哪一種能力？", options: ["單腳平衡與身體控制", "文字抄寫", "音響設定", "影片剪輯"], answer: 0 },
  { part: 2, focus: "06 舞姿圖鑑", q: "動物模擬創作時，最適合先觀察什麼？", options: ["外形特徵、動作樣態與節奏", "座位排列", "投影機品牌", "課本頁碼顏色"], answer: 0 }
];

let currentFocus = "origin";
let currentView = "brief";
let currentSlideOffset = 0;
let assessmentPage = 0;
let timerSeconds = 180;
let timerInitial = 180;
let timerId = null;
let penEnabled = false;
let penColor = "#f2efdc";
let drawBag = [];
let viewerSlideIndex = 0;
let viewerInfoIndex = 0;
let viewerMode = "asset";

const app = document.querySelector(".app-shell");
const stage = document.querySelector("#focusStage");
const progressPercent = document.querySelector("#progressPercent");
const progressText = document.querySelector("#progressText");
const viewer = document.querySelector("#assetViewer");
const viewerTitle = document.querySelector("#viewerTitle");
const viewerBody = document.querySelector("#viewerBody");

function setViewerNavVisible(visible) {
  document.querySelector("#viewerPrev").hidden = !visible;
  document.querySelector("#viewerNext").hidden = !visible;
}

function openViewer(title, html, mode = "asset") {
  viewerTitle.textContent = title;
  viewerBody.innerHTML = html;
  viewerMode = mode;
  setViewerNavVisible(mode === "slides" || mode === "info");
  viewer.hidden = false;
  sizeCanvas();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function closeViewer() {
  viewerBody.innerHTML = "";
  viewer.hidden = true;
  viewerMode = "asset";
  setViewerNavVisible(false);
}

function openSlideViewer(index) {
  viewerSlideIndex = Math.max(0, Math.min(assets.slides.length - 1, index));
  openViewer(
    `NotebookLM 簡報放大檢視｜${viewerSlideIndex + 1} / ${assets.slides.length}`,
    `<img src="${assets.slides[viewerSlideIndex]}" alt="NotebookLM 簡報第 ${viewerSlideIndex + 1} 張" />`,
    "slides"
  );
}

function stepSlideViewer(step) {
  if (viewerMode !== "slides") return;
  const next = (viewerSlideIndex + step + assets.slides.length) % assets.slides.length;
  openSlideViewer(next);
}

function openImageViewer(title, src) {
  openViewer(title, `<img src="${src}" alt="${title}" />`, "asset");
}

function openInfoViewer(index) {
  const keys = Object.keys(focusData);
  viewerInfoIndex = (index + keys.length) % keys.length;
  const key = keys[viewerInfoIndex];
  openViewer(
    `${focusData[key].title}｜資訊圖表放大檢視｜${viewerInfoIndex + 1} / ${keys.length}`,
    `<img src="${assets.infographics[key]}" alt="${focusData[key].title}資訊圖表放大檢視" />`,
    "info"
  );
}

function stepViewer(step) {
  if (viewerMode === "slides") stepSlideViewer(step);
  if (viewerMode === "info") openInfoViewer(viewerInfoIndex + step);
}

function openInteractiveViewer() {
  openViewer(
    "互動視覺化＋形成性評量放大檢視",
    `<div class="viewer-interactive">${visualFor(currentFocus)}${assessmentMarkup(true)}</div>`,
    "asset"
  );
}

function youtubeExternalUrl(value) {
  return youtubeUrls[value] || driveFolderUrl;
}

function updateYoutubeBox(select) {
  const box = select.closest(".youtube-placeholder");
  const value = select.value;
  const external = youtubeExternalUrl(value);
  const openLink = box.querySelector("[data-youtube-open]");
  const currentOpen = box.querySelector("[data-current-open]");
  const currentLink = box.querySelector("[data-youtube-current]");
  if (openLink) openLink.href = external;
  if (currentOpen) currentOpen.href = external;
  if (currentLink) {
    currentLink.href = external;
    currentLink.textContent = external;
  }
}

function render() {
  const data = focusData[currentFocus];
  const focusKeys = Object.keys(focusData);
  const focusIndex = focusKeys.indexOf(currentFocus);
  const percent = Math.round(((focusIndex + 1) / focusKeys.length) * 100);
  progressPercent.textContent = `${percent}%`;
  progressText.textContent = `目前重點：${data.title}`;
  currentSlideOffset = Math.max(0, currentSlideOffset);

  if (currentView === "brief") renderBrief(data);
  if (currentView === "interactive") renderInteractive(data);
  if (currentView === "infographic") renderInfographic(data);
}

function currentUnitQuestions() {
  return assessmentQuestions.filter((item) => item.focus === focusQuestionLabels[currentFocus]);
}

function displayOptions(item, unitIndex) {
  const pattern = [0, 1, 2, 3, 1];
  const targetCorrectIndex = pattern[unitIndex % pattern.length];
  const correctText = item.options[item.answer];
  const distractors = item.options.filter((_, index) => index !== item.answer);
  const ordered = [];
  for (let index = 0; index < item.options.length; index += 1) {
    if (index === targetCorrectIndex) {
      ordered.push({ text: correctText, correct: true });
    } else {
      ordered.push({ text: distractors.shift(), correct: false });
    }
  }
  return ordered;
}

function titleBlock(data) {
  return `
    <div class="stage-title">
      <h2><span>${data.no}</span> ${data.title}</h2>
      <p>${data.tagline}</p>
    </div>
  `;
}

function renderBrief(data) {
  const slideIndex = Math.min(assets.slides.length - 1, data.slide + currentSlideOffset);
  const frameIndex = data.videoFrame;
  stage.innerHTML = `
    <div class="stage-content">
      ${titleBlock(data)}
      <div class="brief-layout">
        <section>
          <div class="media-frame">
            <img src="${assets.slides[slideIndex]}" alt="${data.title}簡報圖" />
          </div>
          <p class="media-caption">簡報輪番：第 ${slideIndex + 1} 張｜搭配 NotebookLM 自學提示使用</p>
          <div class="carousel-controls">
            <button data-slide-step="-1">上一張</button>
            <button data-slide-step="1">下一張</button>
            <button data-open-slide-index="${slideIndex}">放大檢視</button>
          </div>
        </section>
        <aside class="chalk-note">
          <h3>NotebookLM 簡動輪番</h3>
          <ul>${data.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
          <p>${data.prompt}</p>
          <div class="quick-actions">
            <button data-copy-prompt="${data.prompt}">複製提示詞</button>
            <button data-view-jump="interactive">做形成性評量</button>
          </div>
        </aside>
      </div>
    </div>
  `;
}

function renderInteractive(data) {
  stage.innerHTML = `
    <div class="stage-content">
      ${titleBlock(data)}
      <div class="view-toolbar">
        <button data-open-interactive="true">放大檢視</button>
      </div>
      <div class="interactive-layout">
        <section class="visual-board">${visualFor(currentFocus)}</section>
        ${assessmentMarkup(false)}
      </div>
    </div>
  `;
}

function assessmentMarkup(compact) {
  const unitQuestions = currentUnitQuestions();
  const total = unitQuestions.length;
  const isAnswerPage = assessmentPage >= total;
  if (isAnswerPage) {
    const answerRows = unitQuestions.map((item, index) => {
      const orderedOptions = displayOptions(item, index);
      const correctIndex = orderedOptions.findIndex((option) => option.correct);
      const letter = ["A", "B", "C", "D"][correctIndex];
      return `<li>${index + 1}. ${letter}｜${orderedOptions[correctIndex].text}</li>`;
    }).join("");
    return `
      <aside class="question-card ${compact ? "viewer-question-card" : ""}">
        <h3>${focusQuestionLabels[currentFocus]}｜本單元解答</h3>
        <p>本頁只顯示目前單元的 5 題解答。</p>
        <ol class="answer-key">${answerRows}</ol>
        <div class="quick-actions">
          <button data-assessment-page="0">回本單元第 1 題</button>
        </div>
      </aside>
    `;
  }

  const item = unitQuestions[assessmentPage];
  const orderedOptions = displayOptions(item, assessmentPage);
  return `
    <aside class="question-card ${compact ? "viewer-question-card" : ""}">
      <h3>${item.focus}｜第 ${assessmentPage + 1} 題 / ${total}</h3>
      <p>${item.q}</p>
      <div class="answer-options">
        ${orderedOptions.map((option, index) => `<button class="answer-btn" data-answer="${index}" data-correct="${option.correct}">${["A", "B", "C", "D"][index]}. ${option.text}</button>`).join("")}
      </div>
      <p class="feedback" id="feedback">作答後請按下一題；本單元 5 題完成後才顯示解答。</p>
      <div class="quick-actions assessment-actions">
        <button data-assessment-step="-1">上一題</button>
        <button data-assessment-step="1">下一題</button>
        <button data-assessment-page="${total}">本單元解答</button>
      </div>
    </aside>
  `;
}

function renderInfographic(data) {
  stage.innerHTML = `
    <div class="stage-content">
      ${titleBlock(data)}
      <div class="view-toolbar">
        <button data-open-info="${currentFocus}">放大檢視</button>
      </div>
      <div class="info-layout">
        <section>
          <div class="media-frame">
            <img src="${assets.infographics[currentFocus]}" alt="${data.title}資訊圖表" />
          </div>
          <p class="media-caption">資訊圖表：${data.title}｜可投影、可截圖、可搭配小組討論</p>
        </section>
        <aside class="chalk-note">
          <h3>圖表讀法</h3>
          <ul>
            <li>先找圖上的中心概念。</li>
            <li>再用三個關鍵字說明這個教學重點。</li>
            <li>最後回到評量題，說明你的判斷證據。</li>
          </ul>
          <div class="quick-actions">
            <button data-view-jump="brief">回到簡報輪番</button>
            <button data-view-jump="interactive">回到互動題</button>
          </div>
        </aside>
      </div>
    </div>
  `;
}

function visualFor(focus) {
  if (focus === "origin") {
    return `
      <div class="timeline">
        ${["彩陶盆：群舞紋飾", "岩畫：蛙形人姿態", "甲骨文：舞蹈記錄", "巫舞：祭天祈福", "飛天壁畫：古代身段"].map((item, i) => `<button class="${i === 0 ? "active" : ""}" data-mini="${item}">${i + 1}. ${item}</button>`).join("")}
      </div>
      <p class="media-caption" id="miniExplain">點選線索，請學生說出它如何證明舞蹈曾存在於古代生活。</p>
    `;
  }
  if (focus === "types") {
    return `
      <div class="compare-grid">
        <div class="compare-pill"><strong>民俗舞</strong>生活、節慶、族群、即興、道具。</div>
        <div class="compare-pill"><strong>古典舞</strong>宮廷、祭典、禮儀、規範、身段。</div>
        <div class="compare-pill"><strong>共同點</strong>都展現文化特色與身體語彙。</div>
        <div class="compare-pill"><strong>判斷法</strong>先看來源，再看場合與表演方式。</div>
      </div>
    `;
  }
  if (focus === "folk") {
    return `
      <div class="dance-grid">
        ${[
          ["弦子舞", "長袖、歌舞、歡樂"],
          ["孔雀舞", "抖翅、開屏、戲水"],
          ["踏歌", "挽手、群體、同樂"],
          ["胡旋舞", "快速、旋轉、節奏"]
        ].map(([a, b], i) => `<button class="dance-card ${i === 0 ? "active" : ""}"><strong>${a}</strong>${b}</button>`).join("")}
      </div>
    `;
  }
  if (focus === "masters") {
    return `
      <div class="match-grid">
        ${[
          ["戚夫人", "翹袖折腰"],
          ["趙飛燕", "踽步"],
          ["楊玉環", "霓裳羽衣舞"],
          ["公孫大娘", "劍器舞"]
        ].map(([a, b]) => `<button class="match-card"><strong>${a}</strong>${b}</button>`).join("")}
      </div>
      <p class="media-caption">請學生輪流把「人物」與「動作特色」說成完整句。</p>
    `;
  }
  if (focus === "basics") {
    return `
      <div class="wheel">
        ${[
          ["手功", "力量與控制"],
          ["腰功", "弧線與扭轉"],
          ["腿功", "肌力與柔軟度"],
          ["彈跳功", "彈力與協調"]
        ].map(([a, b], i) => `<button class="wheel-item ${i === 0 ? "active" : ""}"><strong>${a}</strong>${b}</button>`).join("")}
      </div>
      <p class="media-caption">活動：每組選一項基本功，說出它練到身體哪一種能力。</p>
    `;
  }
  return `
    <div class="posture-grid">
      ${[
        ["山膀", "雙臂如山"],
        ["弓箭步", "一弓一箭"],
        ["金雞獨立", "單腳平衡"],
        ["雲手", "手眼相隨"]
      ].map(([a, b]) => `<button class="posture-check"><strong>${a}</strong>${b}</button>`).join("")}
    </div>
    <p class="media-caption">點選完成的舞姿，讓學生自評動作穩定度。</p>
  `;
}

document.addEventListener("click", async (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.matches(".mode-btn")) {
    document.querySelectorAll(".mode-btn").forEach((btn) => btn.classList.remove("active"));
    target.classList.add("active");
    app.dataset.mode = target.dataset.modeTarget;
  }

  if (target.matches(".focus-tab")) {
    document.querySelectorAll(".focus-tab").forEach((btn) => btn.classList.remove("active"));
    target.classList.add("active");
    currentFocus = target.dataset.focus;
    currentSlideOffset = 0;
    assessmentPage = 0;
    render();
  }

  if (target.matches(".view-btn")) {
    document.querySelectorAll(".view-btn").forEach((btn) => btn.classList.remove("active"));
    target.classList.add("active");
    currentView = target.dataset.view;
    render();
  }

  if (target.dataset.viewJump) {
    currentView = target.dataset.viewJump;
    document.querySelectorAll(".view-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.view === currentView));
    render();
  }

  if (target.dataset.slideStep) {
    currentSlideOffset = Math.max(0, Math.min(2, currentSlideOffset + Number(target.dataset.slideStep)));
    render();
  }

  if (target.dataset.openSlideIndex) {
    openSlideViewer(Number(target.dataset.openSlideIndex));
  }

  if (target.dataset.openInfo) {
    const key = target.dataset.openInfo;
    openInfoViewer(Object.keys(focusData).indexOf(key));
  }

  if (target.dataset.openInteractive) {
    openInteractiveViewer();
  }

  if (target.dataset.frame) {
    stage.querySelector(".media-frame").innerHTML = `<img src="${assets.videoFrames[Number(target.dataset.frame)]}" alt="影片分鏡" />`;
  }

  if (target.dataset.copyPrompt) {
    await navigator.clipboard.writeText(target.dataset.copyPrompt);
    target.textContent = "已複製";
  }

  if (target.matches(".answer-btn")) {
    document.querySelectorAll(".answer-btn").forEach((btn) => {
      btn.classList.remove("selected-answer");
    });
    target.classList.add("selected-answer");
    const feedback = document.querySelector("#feedback");
    if (feedback) feedback.textContent = "已作答。請繼續下一題，最後一頁再對答案。";
  }

  if (target.dataset.assessmentStep) {
    assessmentPage = Math.max(0, Math.min(currentUnitQuestions().length, assessmentPage + Number(target.dataset.assessmentStep)));
    if (!viewer.hidden && viewerMode === "asset" && viewerTitle.textContent.includes("互動視覺化")) {
      openInteractiveViewer();
    } else {
      renderInteractive(focusData[currentFocus]);
    }
  }

  if (target.dataset.assessmentPage) {
    assessmentPage = Math.max(0, Math.min(currentUnitQuestions().length, Number(target.dataset.assessmentPage)));
    if (!viewer.hidden && viewerMode === "asset" && viewerTitle.textContent.includes("互動視覺化")) {
      openInteractiveViewer();
    } else {
      renderInteractive(focusData[currentFocus]);
    }
  }

  if (target.dataset.mini) {
    document.querySelectorAll("[data-mini]").forEach((btn) => btn.classList.remove("active"));
    target.classList.add("active");
    document.querySelector("#miniExplain").textContent = `${target.dataset.mini}：請說明這個線索的「年代感、身體動作、文化用途」。`;
  }

  if (target.matches(".dance-card,.match-card,.wheel-item,.posture-check")) {
    target.classList.toggle(target.matches(".posture-check") ? "checked" : "selected");
    target.classList.toggle("active");
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches(".youtube-select")) {
    updateYoutubeBox(target);
  }
});

document.querySelector("#toolToggle").addEventListener("click", () => {
  const panel = document.querySelector("#toolPanel");
  panel.classList.toggle("collapsed");
  document.querySelector("#toolToggle").setAttribute("aria-expanded", String(!panel.classList.contains("collapsed")));
});

document.querySelector("#viewerClose").addEventListener("click", closeViewer);
document.querySelector("#viewerPrev").addEventListener("click", () => stepViewer(-1));
document.querySelector("#viewerNext").addEventListener("click", () => stepViewer(1));
viewer.addEventListener("click", (event) => {
  if (event.target === viewer) closeViewer();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !viewer.hidden) closeViewer();
  if (event.key === "ArrowLeft" && !viewer.hidden) stepViewer(-1);
  if (event.key === "ArrowRight" && !viewer.hidden) stepViewer(1);
});

function getSeatRange() {
  const start = Math.max(1, Number(document.querySelector("#seatStart").value) || 1);
  const end = Math.max(start, Number(document.querySelector("#seatEnd").value) || start);
  document.querySelector("#seatStart").value = start;
  document.querySelector("#seatEnd").value = end;
  return { start, end };
}

function refillDrawBag() {
  const { start, end } = getSeatRange();
  drawBag = Array.from({ length: end - start + 1 }, (_, index) => start + index);
  document.querySelector("#drawResult").textContent = `目前範圍：${start}-${end}，共 ${drawBag.length} 位`;
}

document.querySelector("#drawBtn").addEventListener("click", () => {
  const { start, end } = getSeatRange();
  if (!drawBag.length || drawBag.some((seat) => seat < start || seat > end)) refillDrawBag();
  const index = Math.floor(Math.random() * drawBag.length);
  const result = drawBag.splice(index, 1)[0];
  document.querySelector("#drawResult").textContent = `抽到：${result} 號｜剩 ${drawBag.length} 位`;
});

document.querySelector("#resetDraw").addEventListener("click", refillDrawBag);
document.querySelector("#seatStart").addEventListener("change", refillDrawBag);
document.querySelector("#seatEnd").addEventListener("change", refillDrawBag);

function renderTimer() {
  const minutes = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const seconds = String(timerSeconds % 60).padStart(2, "0");
  document.querySelector("#timerFace").textContent = `${minutes}:${seconds}`;
}

document.querySelectorAll("[data-minutes]").forEach((btn) => {
  btn.addEventListener("click", () => {
    timerInitial = Number(btn.dataset.minutes) * 60;
    timerSeconds = timerInitial;
    renderTimer();
  });
});

document.querySelector("#startTimer").addEventListener("click", () => {
  if (timerId) return;
  timerId = setInterval(() => {
    timerSeconds = Math.max(0, timerSeconds - 1);
    renderTimer();
    if (timerSeconds === 0) {
      clearInterval(timerId);
      timerId = null;
    }
  }, 1000);
});

document.querySelector("#pauseTimer").addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
});

document.querySelector("#resetTimer").addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  timerSeconds = timerInitial;
  renderTimer();
});

const canvas = document.querySelector("#inkCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;

function sizeCanvas() {
  const old = ctx.getImageData(0, 0, Math.max(1, canvas.width), Math.max(1, canvas.height));
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  try {
    ctx.putImageData(old, 0, 0);
  } catch {}
}

window.addEventListener("resize", sizeCanvas);
sizeCanvas();

document.querySelector("#penToggle").addEventListener("click", (event) => {
  penEnabled = !penEnabled;
  canvas.classList.toggle("active", penEnabled);
  event.target.classList.toggle("active", penEnabled);
  event.target.textContent = penEnabled ? "關閉" : "畫筆";
});

document.querySelector("#clearInk").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.querySelectorAll(".pen-color").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".pen-color").forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    penColor = btn.dataset.color;
  });
});

canvas.addEventListener("pointerdown", (event) => {
  if (!penEnabled) return;
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(event.clientX, event.clientY);
});

canvas.addEventListener("pointermove", (event) => {
  if (!drawing || !penEnabled) return;
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = penColor;
  ctx.globalAlpha = .86;
  ctx.lineTo(event.clientX, event.clientY);
  ctx.stroke();
});

canvas.addEventListener("pointerup", () => {
  drawing = false;
});

render();
refillDrawBag();

