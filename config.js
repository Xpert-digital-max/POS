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
    adminPromptpay: '0819474479', // เบอร์พร้อมเพย์รับเงินแอดมิน

    // โครงสร้างแพ็กเกจใหม่ ควบรวมระบบตรวจสลิปและค่าแนะนำไว้ในตัว
    pricingPlans: [
        { id: 'trial', name: 'ทดลองใช้ฟรี', days: 7, price: 0, tag: 'เริ่มต้น', mode: 'manual', comm: 0, desc: 'ระบบสั่งอาหาร ตรวจสลิปเอง' },
        { id: 'manual_1m', name: 'Basic (รายเดือน)', days: 30, price: 390, tag: 'สุดคุ้ม', mode: 'manual', comm: 100, desc: 'ตรวจสลิปด้วยตนเอง' },
        { id: 'auto_1m', name: 'Pro (รายเดือน)', days: 30, price: 790, tag: 'ยอดนิยม 🔥', mode: 'auto', comm: 200, desc: 'ตรวจสลิปอัตโนมัติ ไม่ต้องเฝ้าจอ!' }
    ]
};
