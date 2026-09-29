// ไฟล์ config.js
const CONFIG = {
    supabaseUrl: 'https://bbceqmoibwlnltgpkdsf.supabase.co',
    supabaseKey: 'sb_publishable_Tm2NO4vvT938VdnT4ZG_cQ_DFdh-r-5',
    liffIdRegister: '2011781647-1GTbZ2gJ',   // LIFF ID หน้าลงทะเบียน
    liffIdDashboard: '2011781647-rkokpjId',  // LIFF ID หน้าจัดการร้าน
    liffIdCustomer: '2011781647-erlnJT8p', // LIFF ID หน้าลูกค้า
    gasWebhookUrl: 'https://script.google.com/macros/s/AKfycbz55ygFed3hzf-3xRTdd4nCQl4wZ88PsGyaAkmpfMjU4_dexgy5R1Hpo9dXDJfG4Dcp/exec', // ใส่ลื้งต์ Web App
        
    // --- ตั้งค่าระบบแพ็กเกจ (สามารถปรับราคาและจำนวนวันได้เองตลอดเวลา) ---
    trialDaysDefault: 7, 
    adminPromptpay: '0812345678', 

    pricingPlans: [
        { id: 'trial', name: 'ทดลองใช้ฟรี', days: 7, price: 0, tag: 'เริ่มต้น', mode: 'manual', comm: 0, quota: 0, desc: 'ระบบสั่งอาหาร ตรวจสลิปเอง' },

        // --- กลุ่ม Basic (ตรวจสลิปเอง - ไม่มีต้นทุน API) ---
        { id: 'manual_1m', name: 'Basic (1 เดือน)', days: 30, price: 390, tag: 'สุดคุ้ม', mode: 'manual', comm: 100, quota: 0, desc: 'ตรวจสลิปเอง' },
        { id: 'manual_3m', name: 'Basic (3 เดือน)', days: 90, price: 1100, tag: 'ขายยาวๆ', mode: 'manual', comm: 300, quota: 0, desc: 'ตรวจสลิปเอง (ประหยัด 70 บ.)' },
        { id: 'manual_6m', name: 'Basic (6 เดือน)', days: 180, price: 2100, tag: 'ครึ่งปี', mode: 'manual', comm: 600, quota: 0, desc: 'ตรวจสลิปเอง (ประหยัด 240 บ.)' },
        { id: 'manual_12m', name: 'Basic (รายปี)', days: 365, price: 3990, tag: 'คุ้มสุด 👑', mode: 'manual', comm: 1200, quota: 0, desc: 'จ่ายครั้งเดียว ใช้ยาวตลอดปี' },

        // --- กลุ่ม Pro (ตรวจสลิปออโต้ - มีต้นทุน SlipOK) ---
        { id: 'auto_1m', name: 'Pro (1 เดือน)', days: 30, price: 590, tag: 'ยอดนิยม 🔥', mode: 'auto', comm: 150, quota: 300, desc: 'ฟรีตรวจสลิป 300 บิล' },
        { id: 'auto_3m', name: 'Pro (3 เดือน)', days: 90, price: 1690, tag: 'ขายยาวๆ', mode: 'auto', comm: 450, quota: 900, desc: 'ฟรีตรวจสลิป 900 บิล' },
        { id: 'auto_6m', name: 'Pro (6 เดือน)', days: 180, price: 3290, tag: 'ครึ่งปี', mode: 'auto', comm: 900, quota: 1800, desc: 'ฟรีตรวจสลิป 1,800 บิล' },
        { id: 'auto_12m', name: 'Pro (รายปี)', days: 365, price: 5990, tag: 'คุ้มสุด 👑', mode: 'auto', comm: 1800, quota: 3600, desc: 'ฟรีตรวจสลิป 3,600 บิล' }
    ]
};
