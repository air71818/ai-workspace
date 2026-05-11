const responseEl = document.querySelector("#streamingResponse");
const chatScroll = document.querySelector("#chatScroll");
const composer = document.querySelector("#composer");
const promptInput = document.querySelector("#promptInput");
const palette = document.querySelector("#commandPalette");
const paletteButton = document.querySelector("#paletteButton");
const paletteInput = document.querySelector("#paletteInput");
const themeButton = document.querySelector("#themeButton");
const summarizeButton = document.querySelector("#summarizeButton");
const contextPanel = document.querySelector("#contextPanel");
const panelScrim = document.querySelector("#panelScrim");
const mobilePanelButton = document.querySelector("#mobilePanelButton");
const closePanelButton = document.querySelector("#closePanelButton");
const languageKey = "portfolio-language";

const translations = {
  zh: {
    "AI Workspace": "AI 工作區",
    "AI Workspace home": "AI Workspace 首頁",
    "Research cockpit": "研究駕駛艙",
    "Workspace navigation": "工作區導覽",
    "New thread": "新增對話",
    "Recent threads": "近期對話",
    "Market brief": "市場簡報",
    "4 sources · just now": "4 個來源 · 剛剛",
    "Launch checklist": "上市檢查表",
    "12 tasks · yesterday": "12 個任務 · 昨天",
    "Support trends": "客服趨勢",
    "8 files · Apr 28": "8 個檔案 · 4 月 28 日",
    "Open command palette": "開啟命令面板",
    "Toggle appearance": "切換外觀",
    "Open user menu": "開啟使用者選單",
    "Live workspace": "即時工作區",
    "Market intelligence thread": "市場情報對話串",
    "Language": "語言",
    "Sources": "來源",
    "Summarize": "摘要",
    "Workspace status": "工作區狀態",
    "connected files": "已連結檔案",
    "confidence": "信心分數",
    "open decisions": "待決策事項",
    "Chat thread": "對話串",
    "You": "你",
    "Build a concise market brief from the uploaded notes. Flag risks, quote useful source material, and suggest the next executive decision.": "根據上傳筆記建立精簡市場簡報。標示風險、引用有用來源，並建議下一個高層決策。",
    "Workspace AI": "Workspace AI",
    "streaming": "串流中",
    "Insert into brief": "插入簡報",
    "Create tasks": "建立任務",
    "Compare sources": "比較來源",
    "Attach file": "附加檔案",
    "Ask AI Workspace": "詢問 AI Workspace",
    "Ask for a sharper brief, a risk table, or a source-backed recommendation...": "詢問更精準的簡報、風險表，或有來源佐證的建議...",
    "Send message": "送出訊息",
    "Sources and workspace context": "來源與工作區脈絡",
    "Context": "脈絡",
    "Close sources": "關閉來源",
    "Search files, notes, and citations": "搜尋檔案、筆記與引用",
    "Source files": "來源檔案",
    "Q2 market scan": "Q2 市場掃描",
    "Pricing pressure, category shifts, and enterprise adoption signals.": "價格壓力、品類變化與企業採用訊號。",
    "18 citations": "18 個引用",
    "Pipeline movement": "Pipeline 變化",
    "Regional movement by segment with quarter-over-quarter trend notes.": "依區域與分群整理的季度趨勢註記。",
    "42 rows matched": "符合 42 列",
    "Customer interviews": "客戶訪談",
    "Six calls tagged by churn risk, buying committee, and rollout friction.": "六通訪談依流失風險、採購委員會與導入摩擦分類。",
    "9 highlights": "9 個重點",
    "Next decision": "下一個決策",
    "Ready": "就緒",
    "Approve the enterprise pilot narrative and hold SMB expansion until pricing sensitivity is validated with finance.": "核准企業版 pilot 敘事，並暫緩 SMB 擴張，直到財務驗證價格敏感度。",
    "Evidence strength": "證據強度",
    "High": "高",
    "Command palette": "命令面板",
    "Search commands, files, and actions": "搜尋命令、檔案與操作",
    "Generate executive summary": "產生高層摘要",
    "Compare selected sources": "比較選取來源",
    "Create decision memo": "建立決策 memo",
    "Export thread": "匯出對話串",
    "now": "現在"
  },
  ja: {
    "AI Workspace": "AI ワークスペース",
    "AI Workspace home": "AI Workspace ホーム",
    "Research cockpit": "リサーチコックピット",
    "Workspace navigation": "ワークスペースナビゲーション",
    "New thread": "新規スレッド",
    "Recent threads": "最近のスレッド",
    "Market brief": "市場ブリーフ",
    "4 sources · just now": "4 ソース · たった今",
    "Launch checklist": "ローンチチェックリスト",
    "12 tasks · yesterday": "12 タスク · 昨日",
    "Support trends": "サポート傾向",
    "8 files · Apr 28": "8 ファイル · 4月28日",
    "Open command palette": "コマンドパレットを開く",
    "Toggle appearance": "表示を切り替え",
    "Open user menu": "ユーザーメニューを開く",
    "Live workspace": "ライブワークスペース",
    "Market intelligence thread": "市場インテリジェンススレッド",
    "Language": "言語",
    "Sources": "ソース",
    "Summarize": "要約",
    "Workspace status": "ワークスペース状態",
    "connected files": "接続ファイル",
    "confidence": "信頼度",
    "open decisions": "未決事項",
    "Chat thread": "チャットスレッド",
    "You": "あなた",
    "Build a concise market brief from the uploaded notes. Flag risks, quote useful source material, and suggest the next executive decision.": "アップロードされたノートから簡潔な市場ブリーフを作成し、リスク、有用な引用、次の経営判断を提示してください。",
    "Workspace AI": "Workspace AI",
    "streaming": "ストリーミング中",
    "Insert into brief": "ブリーフに挿入",
    "Create tasks": "タスク作成",
    "Compare sources": "ソース比較",
    "Attach file": "ファイル添付",
    "Ask AI Workspace": "AI Workspace に質問",
    "Ask for a sharper brief, a risk table, or a source-backed recommendation...": "より鋭いブリーフ、リスク表、ソース付き提案を依頼...",
    "Send message": "送信",
    "Sources and workspace context": "ソースとワークスペース文脈",
    "Context": "文脈",
    "Close sources": "ソースを閉じる",
    "Search files, notes, and citations": "ファイル、ノート、引用を検索",
    "Source files": "ソースファイル",
    "Q2 market scan": "Q2 市場スキャン",
    "Pricing pressure, category shifts, and enterprise adoption signals.": "価格圧力、カテゴリ変化、エンタープライズ導入シグナル。",
    "18 citations": "18 引用",
    "Pipeline movement": "パイプライン変化",
    "Regional movement by segment with quarter-over-quarter trend notes.": "セグメント別の地域変化と四半期トレンドメモ。",
    "42 rows matched": "42 行一致",
    "Customer interviews": "顧客インタビュー",
    "Six calls tagged by churn risk, buying committee, and rollout friction.": "解約リスク、購買委員会、展開摩擦でタグ付けされた 6 件の通話。",
    "9 highlights": "9 ハイライト",
    "Next decision": "次の判断",
    "Ready": "準備完了",
    "Approve the enterprise pilot narrative and hold SMB expansion until pricing sensitivity is validated with finance.": "エンタープライズ向けパイロット方針を承認し、価格感度を財務で検証するまで SMB 拡大を保留します。",
    "Evidence strength": "証拠の強さ",
    "High": "高",
    "Command palette": "コマンドパレット",
    "Search commands, files, and actions": "コマンド、ファイル、アクションを検索",
    "Generate executive summary": "エグゼクティブサマリーを生成",
    "Compare selected sources": "選択ソースを比較",
    "Create decision memo": "意思決定メモを作成",
    "Export thread": "スレッドを書き出し",
    "now": "今"
  }
};

const localizedBriefs = {
  en: null,
  zh: `最強的訊號是企業需求已從探索轉向有預算的 pilot。三個來源都指出，安全審查、導入 ownership，以及可衡量的成本降低，現在比模型新穎度更重要。

主要風險：
• SMB 價格仍具彈性，可能稀釋上市敘事。
• 兩則客戶訪談提到購買後內部 enablement 速度偏慢。
• 競品訊息正集中在治理，而不是原始自動化能力。

建議決策：
核准企業優先的 pilot brief，供下一次 leadership review 使用。SMB 擴張先維持觀察，直到財務根據 pipeline movement 檔案驗證折扣容忍度。`,
  ja: `最も強いシグナルは、エンタープライズ需要が探索段階から予算付きパイロットへ移行していることです。3 つのソースはいずれも、セキュリティレビュー、展開責任、測定可能なコスト削減がモデルの新規性より重要になっていると示しています。

主なリスク：
• SMB の価格感度はまだ高く、ローンチの訴求を薄める可能性があります。
• 2 件の顧客インタビューで、購入後の社内展開が遅いと述べられています。
• 競合メッセージは生の自動化ではなくガバナンスに収束しています。

推奨判断：
次回のリーダーシップレビューに向け、エンタープライズ優先のパイロットブリーフを承認します。SMB 拡大は、財務が pipeline movement ファイルで割引許容度を検証するまで監視対象に留めます。`
};

const localizedAlternates = {
  en: null,
  zh: `我可以把它整理成決策 memo。

建議草稿：
優先推進企業版 pilot package，附上治理與成本降低的來源證據，並讓 SMB campaign 維持 discovery，直到價格資料完成 reconcile。

下一步：
• 將三段最有力的客戶 quote 放進 executive brief。
• 請財務提供高量 SMB 機會的折扣底線。
• 建立 launch readiness checklist，涵蓋 enablement、安全與 customer success。`,
  ja: `これを意思決定メモに整理できます。

提案ドラフト：
エンタープライズ向けパイロットパッケージを優先し、ガバナンスとコスト削減の根拠を添えます。価格データが照合されるまで SMB キャンペーンは探索段階に留めます。

次のアクション：
• 最も強い 3 つの顧客引用をエグゼクティブブリーフに入れる。
• 大量 SMB 案件の割引下限を財務に確認する。
• enablement、セキュリティ、customer success 向けの launch-readiness checklist を作成する。`
};

const baseTextNodes = new WeakMap();
const translatableAttributes = ["aria-label", "title", "placeholder"];

function normalizeText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function getStoredLanguage() {
  try {
    return localStorage.getItem(languageKey) || "en";
  } catch {
    return "en";
  }
}

function setStoredLanguage(language) {
  try {
    localStorage.setItem(languageKey, language);
  } catch {
    return;
  }
}

function translateValue(value, language = getStoredLanguage()) {
  const key = normalizeText(value);
  if (!key || language === "en") return key;
  return translations[language]?.[key] || key;
}

function translatePage(language = getStoredLanguage()) {
  document.documentElement.lang = language === "zh" ? "zh-Hant" : language;
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const parent = node.parentElement;
    if (!parent || parent.closest(".language-switcher") || ["SCRIPT", "STYLE"].includes(parent.tagName)) continue;
    const base = baseTextNodes.get(node) || normalizeText(node.nodeValue);
    if (!base) continue;
    baseTextNodes.set(node, base);
    node.nodeValue = translateValue(base, language);
  }

  document.querySelectorAll("*").forEach((element) => {
    translatableAttributes.forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      const baseAttribute = `data-base-${attribute}`;
      const base = element.getAttribute(baseAttribute) || element.getAttribute(attribute);
      element.setAttribute(baseAttribute, base);
      element.setAttribute(attribute, translateValue(base, language));
    });
  });
}

const briefText = `The strongest signal is enterprise demand moving from exploration to funded pilots. Three sources agree that security review, rollout ownership, and measurable cost reduction now matter more than model novelty.

Key risks:
• SMB pricing is still elastic and could dilute the launch narrative.
• Two customer interviews mention slow internal enablement after purchase.
• Competitive messaging is converging around governance, not raw automation.

Recommended decision:
Approve an enterprise-first pilot brief for the next leadership review. Keep SMB expansion as a monitored option until finance validates discount tolerance against the pipeline movement file.`;

const alternateText = `I can turn this into a decision memo.

Draft recommendation:
Prioritize the enterprise pilot package, attach source-backed proof for governance and cost reduction, and keep the SMB campaign in discovery until the pricing dataset is reconciled.

Useful next actions:
• Pull the three strongest customer quotes into the executive brief.
• Ask finance for a discount floor on high-volume SMB opportunities.
• Create a launch-readiness checklist for enablement, security, and customer success.`;

let streamTimer;

function currentBriefText() {
  return localizedBriefs[getStoredLanguage()] || briefText;
}

function currentAlternateText() {
  return localizedAlternates[getStoredLanguage()] || alternateText;
}

function streamText(text) {
  clearInterval(streamTimer);
  responseEl.textContent = "";
  responseEl.classList.remove("complete");

  let index = 0;
  streamTimer = window.setInterval(() => {
    responseEl.textContent += text[index] || "";
    index += 1;
    chatScroll.scrollTop = chatScroll.scrollHeight;

    if (index >= text.length) {
      clearInterval(streamTimer);
      responseEl.classList.add("complete");
    }
  }, 15);
}

function openPalette() {
  palette.hidden = false;
  paletteInput.focus();
}

function closePalette() {
  palette.hidden = true;
}

function openPanel() {
  contextPanel.classList.add("open");
  panelScrim.hidden = false;
}

function closePanel() {
  contextPanel.classList.remove("open");
  panelScrim.hidden = true;
}

function appendUserMessage(text) {
  const article = document.createElement("article");
  article.className = "message user-message";
  article.innerHTML = `
    <div class="avatar">TK</div>
    <div class="message-body">
      <div class="message-meta">
        <strong>You</strong>
        <span>now</span>
      </div>
      <p></p>
    </div>
  `;
  article.querySelector("p").textContent = text;
  chatScroll.append(article);
}

function resizeComposer() {
  promptInput.style.height = "auto";
  promptInput.style.height = `${Math.min(promptInput.scrollHeight, 140)}px`;
}

paletteButton.addEventListener("click", openPalette);
summarizeButton.addEventListener("click", () => streamText(currentBriefText()));
themeButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

mobilePanelButton.addEventListener("click", openPanel);
closePanelButton.addEventListener("click", closePanel);
panelScrim.addEventListener("click", closePanel);

palette.addEventListener("click", (event) => {
  if (event.target === palette) {
    closePalette();
  }
});

document.addEventListener("keydown", (event) => {
  const isCommand = event.metaKey || event.ctrlKey;

  if (isCommand && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openPalette();
  }

  if (event.key === "Escape") {
    closePalette();
    closePanel();
  }
});

promptInput.addEventListener("input", resizeComposer);

composer.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = promptInput.value.trim();

  if (!value) {
    return;
  }

  appendUserMessage(value);
  promptInput.value = "";
  resizeComposer();
  streamText(currentAlternateText());
});

document.querySelectorAll(".command-list button").forEach((button) => {
  button.addEventListener("click", () => {
    closePalette();
    streamText(currentAlternateText());
  });
});

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    setStoredLanguage(button.dataset.lang);
    translatePage(button.dataset.lang);
    streamText(currentBriefText());
  });
});

translatePage();
streamText(currentBriefText());
