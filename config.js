// =====================================================
//  誘惑攻防戰前・設定檔（老師只需要改這個檔案）
// =====================================================
window.GAME_CONFIG = {

  // 1. Google Apps Script 部署後得到的「網頁應用程式網址」（結尾是 /exec）
  //    留空 "" 的話，遊戲照樣能玩，只是不會記錄到後台。
  API_URL: "https://script.google.com/macros/s/AKfycbwX3OP3O885T4JWBOzqjmcp3GCSrnL-9j8Yu1OYVywGR6komid4-3oXzXAYMMxVQ6O_vA/exec",

  // 2. 班級：目前是 []，學生自己輸入班級（例如 701）。
  //    如果想改成下拉選單，就把班級寫進來，例如 ["701", "702", "703"]。
  CLASSES: [],

  // 3. 座號最多到幾號
  MAX_SEAT: 35,

  // 4. 換成自己的圖片：把圖片上傳到 GitHub（放最外層或 images 資料夾都可以），再把檔名填進來。
  //    留空 "" 的地方會用原本的插圖。檔名大小寫要一模一樣。
  IMAGES: {
    start: "",   // 開始畫面上半部的背景　　　（建議直式，約 1080×900）
    home:  "home.jpg",   // 手機主畫面桌布　　　　　　（直式 9:19.5，約 1080×2340）
    day:   "",   // 每一天開場卡的共用背景（下面三個時段沒填時才會用到）
    dayNight: "day-night.jpg",  // 晚上的開場卡（DAY 1、DAY 4）
    dayNoon:  "day-noon.jpg",   // 中午的開場卡（DAY 2）
    dayDusk:  "day-dusk.jpg",   // 黃昏的開場卡（DAY 3、DAY 5）
    cram:  "scene-cram.jpg",   // 補習班門口，學長遞檳榔　　（直式 4:5，約 1080×1350，人物放中間）
    dorm:  "scene-dorm.jpg",   // 戶外教育晚上的房間　　　　（直式 4:5，約 1080×1350，人物放中間）
    ad:    "post-ad.jpg",   // 網紅的電子煙廣告貼文　　　（正方形或 6:5，約 1200×1000）

    // 「找線索」的電子煙照片。學生要點的位置是依照這張圖對好的，
    // 換成別張圖的話，點擊位置會對不準，請找開發者重新對準。
    vapePhoto: "photo-vape.jpg",
    // 「找線索」的口腔衛教圖（點擊位置是依照這張圖對好的）
    mouthPhoto: "photo-mouth.jpg",

    // 角色頭像（正方形，約 512×512）
    avatars: {
      zhe:   "ah-zhe.jpg",  // 阿哲
      yu:    "yu-en.jpg",  // 宇恩
      qing:  "xiao-qing.jpg",  // 小晴
      lin:   "teacher-lin.jpg",  // 林老師（班導）
      mom:   "mom.jpg",  // 媽媽
      gpa:   "grandpa.jpg",  // 阿公
      kevin: "kevin.jpg",  // 凱文學長
      wei:   "wei.jpg",  // 網紅威威
      class: "class-group.jpg",   // 707 班級群組的頭像
      fam:   "family-group.jpg"   // 溫暖的家（家族群組）的頭像
    }
  }

};
