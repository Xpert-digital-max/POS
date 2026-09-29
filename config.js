const CONFIG = {
    // 1. ข้อมูลเชื่อมต่อฐานข้อมูล Supabase
    supabaseUrl: 'https://bbceqmoibwlnltgpkdsf.supabase.co',
    supabaseKey: 'sb_publishable_Tm2NO4vvT938VdnT4ZG_cQ_DFdh-r-5',
    
    // 2. ข้อมูลเชื่อมต่อ LINE LIFF
    liffIdRegister: '2011794866-9V2Hw2Rg',   
    liffIdDashboard: '2011794866-5xNLJ6Sa',  
    liffIdCustomer: '2011794866-KxUcfGFz', 
    
    // 3. ข้อมูล Webhook ของ Google Apps Script (GAS)
    gasWebhookUrl: 'https://script.google.com/macros/s/AKfycbz55ygFed3hzf-3xRTdd4nCQl4wZ88PsGyaAkmpfMjU4_dexgy5R1Hpo9dXDJfG4Dcp/exec',
        
    // 4. ตั้งค่าระบบทั่วไป และ บัญชีรับเงินของแอดมิน
    trialDaysDefault: 10, 
    adminPaymentType: 'promptpay', 
    adminPromptpay: '0819474479', 
    adminBankInfo: 'ธ.กสิกรไทย บจก. เอ็กซ์ ดิจิทัล', 

    // 5. โครงสร้างแพ็กเกจ (Pricing Plans)
    pricingPlans: [
        { id: 'trial', name: 'ทดลองใช้ฟรี', days: 10, price: 0, tag: 'เริ่มต้น', mode: 'auto', comm: 0, quota: 20, desc: 'ตรวจสลิปอัตโนมัติ 20 บิล' },
        { id: 'manual_1m', name: 'Basic (1 เดือน)', days: 30, price: 390, tag: 'สุดคุ้ม', mode: 'manual', comm: 100, quota: 0, desc: 'ตรวจสลิปเอง' },
        { id: 'manual_3m', name: 'Basic (3 เดือน)', days: 90, price: 1100, tag: 'ขายยาวๆ', mode: 'manual', comm: 300, quota: 0, desc: 'ตรวจสลิปเอง (ประหยัด 70 บ.)' },
        { id: 'manual_6m', name: 'Basic (6 เดือน)', days: 180, price: 2100, tag: 'ครึ่งปี', mode: 'manual', comm: 600, quota: 0, desc: 'ตรวจสลิปเอง (ประหยัด 240 บ.)' },
        { id: 'manual_12m', name: 'Basic (รายปี)', days: 365, price: 3990, tag: 'คุ้มสุด 👑', mode: 'manual', comm: 1200, quota: 0, desc: 'จ่ายครั้งเดียว ใช้ยาวตลอดปี' },
        { id: 'auto_1m', name: 'Pro (1 เดือน)', days: 30, price: 590, tag: 'ยอดนิยม 🔥', mode: 'auto', comm: 150, quota: 300, desc: 'ฟรีตรวจสลิป 300 บิล' },
        { id: 'auto_3m', name: 'Pro (3 เดือน)', days: 90, price: 1690, tag: 'ขายยาวๆ', mode: 'auto', comm: 450, quota: 900, desc: 'ฟรีตรวจสลิป 900 บิล' },
        { id: 'auto_6m', name: 'Pro (6 เดือน)', days: 180, price: 3290, tag: 'ครึ่งปี', mode: 'auto', comm: 900, quota: 1800, desc: 'ฟรีตรวจสลิป 1,800 บิล' },
        { id: 'auto_12m', name: 'Pro (รายปี)', days: 365, price: 5990, tag: 'คุ้มสุด 👑', mode: 'auto', comm: 1800, quota: 3600, desc: 'ฟรีตรวจสลิป 3,600 บิล' }
    ],

    // 6. แพ็กเกจเติมโควต้าตรวจสลิปออโต้ (Top-up Quota)
    quotaPlans: [
        { id: 'q100', name: 'โควต้า 100 บิล', quota: 100, price: 100 },
        { id: 'q300', name: 'โควต้า 300 บิล', quota: 300, price: 250 },
        { id: 'q500', name: 'โควต้า 500 บิล', quota: 500, price: 400 }
    ]
};
