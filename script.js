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
summarizeButton.addEventListener("click", () => streamText(briefText));
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
  streamText(alternateText);
});

document.querySelectorAll(".command-list button").forEach((button) => {
  button.addEventListener("click", () => {
    closePalette();
    streamText(alternateText);
  });
});

streamText(briefText);
