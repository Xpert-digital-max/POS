// ไฟล์ config.js
const CONFIG = {
    supabaseUrl: 'https://bbceqmoibwlnltgpkdsf.supabase.co',
    supabaseKey: 'sb_publishable_Tm2NO4vvT938VdnT4ZG_cQ_DFdh-r-5',
    liffIdRegister: '2011781647-1GTbZ2gJ',   // LIFF ID หน้าลงทะเบียน
    liffIdDashboard: '2011781647-rkokpjId',  // LIFF ID หน้าจัดการร้าน
    liffIdCustomer: '2011781647-erlnJT8p', // LIFF ID หน้าลูกค้า
    gasWebhookUrl: 'https://script.google.com/macros/s/AKfycbz55ygFed3hzf-3xRTdd4nCQl4wZ88PsGyaAkmpfMjU4_dexgy5R1Hpo9dXDJfG4Dcp/exec', // ใส่ลื้งต์ Web App
        
    // --- ตั้งค่าระบบแพ็กเกจ (สามารถปรับราคาและจำนวนวันได้เองตลอดเวลา) ---
    trialDaysDefault: 7, // จำนวนวันทดลองใช้ฟรี
    adminPromptpay: '0819474479', // เบอร์พร้อมเพย์ของคุณสำหรับรับค่าบริการรายเดือน (ตัดขีดออก)

    // โครงสร้างแพ็กเกจและค่าแนะนำ (Affiliate)
    pricingPlans: [
        { id: 'trial', name: 'ทดลองใช้ฟรี', days: 7, price: 0, tag: 'เริ่มต้น', mode: 'manual', comm: 0, desc: 'ระบบสั่งอาหาร ตรวจสลิปเอง' },

        // --- กลุ่ม Basic (ตรวจสลิปเอง) ---
        { id: 'manual_1m', name: 'Basic (1 เดือน)', days: 30, price: 390, tag: 'สุดคุ้ม', mode: 'manual', comm: 100, desc: 'ประหยัด เหมาะกับร้านเริ่มต้น' },
        { id: 'manual_3m', name: 'Basic (3 เดือน)', days: 90, price: 1100, tag: 'ขายยาวๆ', mode: 'manual', comm: 300, desc: 'ประหยัดไป 70 บาท' },
        { id: 'manual_6m', name: 'Basic (6 เดือน)', days: 180, price: 2100, tag: 'ครึ่งปี', mode: 'manual', comm: 600, desc: 'ประหยัดไป 240 บาท' },
        { id: 'manual_12m', name: 'Basic (รายปี)', days: 365, price: 3990, tag: 'คุ้มสุด 👑', mode: 'manual', comm: 1200, desc: 'จ่ายครั้งเดียว ใช้ยาวตลอดปี' },

        // --- กลุ่ม Pro (ตรวจสลิปออโต้) ---
        { id: 'auto_1m', name: 'Pro (1 เดือน)', days: 30, price: 590, tag: 'ยอดนิยม 🔥', mode: 'auto', comm: 150, desc: 'ระบบตรวจให้อัตโนมัติ ไม่ต้องเฝ้า' },
        { id: 'auto_3m', name: 'Pro (3 เดือน)', days: 90, price: 1690, tag: 'ขายยาวๆ', mode: 'auto', comm: 450, desc: 'ประหยัดไป 80 บาท' },
        { id: 'auto_6m', name: 'Pro (6 เดือน)', days: 180, price: 3290, tag: 'ครึ่งปี', mode: 'auto', comm: 900, desc: 'ประหยัดไป 250 บาท' },
        { id: 'auto_12m', name: 'Pro (รายปี)', days: 365, price: 5990, tag: 'คุ้มสุด 👑', mode: 'auto', comm: 1800, desc: 'ระบบทำงานแทนคุณตลอดปี' }
    ]
};
