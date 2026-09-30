const CONFIG = {
    // ---------------------------------------------------------
    // 1. ข้อมูลเชื่อมต่อฐานข้อมูล Supabase
    // ---------------------------------------------------------
    supabaseUrl: 'https://bbceqmoibwlnltgpkdsf.supabase.co',
    supabaseKey: 'sb_publishable_Tm2NO4vvT938VdnT4ZG_cQ_DFdh-r-5',
    
    // ---------------------------------------------------------
    // 2. ข้อมูลเชื่อมต่อ LINE LIFF
    // ---------------------------------------------------------
    liffIdRegister: '2011794866-9V2Hw2Rg',   
    liffIdDashboard: '2011794866-5xNLJ6Sa',  
    liffIdCustomer: '2011794866-KxUcfGFz', 
    
    // ---------------------------------------------------------
    // 3. ข้อมูล Webhook ของ Google Apps Script (GAS)
    // ---------------------------------------------------------
    gasWebhookUrl: 'https://script.google.com/macros/s/AKfycbz55ygFed3hzf-3xRTdd4nCQl4wZ88PsGyaAkmpfMjU4_dexgy5R1Hpo9dXDJfG4Dcp/exec',
        
    // ---------------------------------------------------------
    // 4. ตั้งค่าระบบทั่วไป และ บัญชีรับเงินของแอดมิน
    // ---------------------------------------------------------
    trialDaysDefault: 10, 
    adminPaymentType: 'promptpay', 
    adminPromptpay: '0819474479', 
    adminBankInfo: 'ธ.กสิกรไทย บจก. เอ็กซ์ ดิจิทัล', 

    // ---------------------------------------------------------
    // 5. โครงสร้างแพ็กเกจ (Pricing Plans) อัปเดตล่าสุด
    // ---------------------------------------------------------
    pricingPlans: [
        { id: 'trial', name: 'ทดลองใช้ฟรี', days: 10, price: 0, tag: 'เริ่มต้น', mode: 'auto', comm: 0, quota: 20, desc: 'ฟรีตรวจสลิปอัตโนมัติ 20 บิล' },
        { id: 'manual_1m', name: 'Basic (1 เดือน)', days: 30, price: 289, tag: 'เริ่มต้นง่ายๆ', mode: 'manual', comm: 70, quota: 0, desc: 'ระบบจัดการออเดอร์ (ตรวจสลิปเอง)' },
        { id: 'manual_3m', name: 'Basic (3 เดือน)', days: 90, price: 790, tag: 'สุดคุ้ม', mode: 'manual', comm: 190, quota: 0, desc: 'ประหยัด 77 บาท' },
        { id: 'manual_6m', name: 'Basic (6 เดือน)', days: 180, price: 1490, tag: 'ครึ่งปี', mode: 'manual', comm: 350, quota: 0, desc: 'ประหยัด 244 บาท' },
        { id: 'auto_1m', name: 'Pro (1 เดือน)', days: 30, price: 389, tag: 'ยอดนิยม 🔥', mode: 'auto', comm: 100, quota: 200, desc: 'ฟรีตรวจสลิปอัตโนมัติ 200 บิล' },
        { id: 'auto_3m', name: 'Pro (3 เดือน)', days: 90, price: 1090, tag: 'เพิ่มโบนัสสลิป', mode: 'auto', comm: 270, quota: 700, desc: 'ฟรีตรวจสลิปอัตโนมัติ 700 บิล' },
        { id: 'auto_6m', name: 'Pro (6 เดือน)', days: 180, price: 1990, tag: 'คุ้มสุด 👑', mode: 'auto', comm: 500, quota: 1500, desc: 'ฟรีตรวจสลิปอัตโนมัติ 1,500 บิล' }
    ],

    // ---------------------------------------------------------
    // 6. แพ็กเกจเติมโควต้าตรวจสลิปออโต้ (Top-up Quota)
    // ---------------------------------------------------------
    quotaPlans: [
        { id: 'q100', name: 'โควต้า 100 บิล', quota: 100, price: 100 },
        { id: 'q300', name: 'โควต้า 300 บิล', quota: 300, price: 250 },
        { id: 'q500', name: 'โควต้า 500 บิล', quota: 500, price: 400 }
    ]
};
