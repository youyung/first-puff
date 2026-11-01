/**
 * 第一口之前・後台程式（貼到 Google 試算表的 Apps Script）
 *
 * 使用方式請看 README.md 的「設定後台」。
 * 唯一要改的地方：下面的 TEACHER_KEY（教師後台的登入密碼）。
 */
const TEACHER_KEY = "請改成你自己的密碼";
const SHEET_NAME = "遊戲紀錄";

const COLUMNS = [
  ["time", "時間"], ["type", "類型"], ["sid", "紀錄編號"],
  ["cls", "班級"], ["seat", "座號"], ["nick", "暱稱"],
  ["ending", "結局"], ["health", "健康"], ["friend", "友情"], ["cards", "知識卡"],
  ["tried", "曾選一口就好"], ["helpedZhe", "陪阿哲找大人"], ["minutes", "遊玩分鐘"],
  ["penGuess", "照片猜測"], ["thought", "第1天想法"], ["zheInvite", "回覆阿哲邀約"],
  ["feedAct", "廣告處理"], ["searchWrong", "搜尋選錯次數"], ["quiz", "小考答對(4題)"],
  ["shop", "陌生私訊"], ["cram", "補習班檳榔"], ["gpa", "回覆阿公"], ["dorm", "戶外教育那晚"]
];

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) sh = ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.appendRow(COLUMNS.map(c => c[1]));
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, COLUMNS.length).setFontWeight("bold").setBackground("#DCEFEE");
  }
  return sh;
}

// 防止有人輸入以 = + - @ 開頭的文字變成試算表公式
function safe_(v) {
  if (v === undefined || v === null) return "";
  if (typeof v === "boolean") return v ? "是" : "否";
  if (typeof v === "number") return v;
  let s = String(v).slice(0, 100);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

// 遊戲送資料進來
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents);
    const row = COLUMNS.map(([k]) => {
      if (k === "time") return new Date();
      if (k === "type") return d.type === "finish" ? "完成" : "開始";
      return safe_(d[k]);
    });
    getSheet_().appendRow(row);
    return ContentService.createTextOutput("ok");
  } catch (err) {
    return ContentService.createTextOutput("error");
  } finally {
    lock.releaseLock();
  }
}

// 教師後台讀資料（需要密碼）
function doGet(e) {
  const key = e && e.parameter ? e.parameter.key : "";
  if (!key || key !== TEACHER_KEY) return json_({ ok: false, error: "密碼錯誤" });
  const values = getSheet_().getDataRange().getValues();
  const rows = values.slice(1).map(r => {
    const o = {};
    COLUMNS.forEach(([k], i) => { o[k] = r[i] instanceof Date ? r[i].toISOString() : r[i]; });
    return o;
  });
  return json_({ ok: true, rows: rows });
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
