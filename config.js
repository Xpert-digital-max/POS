// ไฟล์ config.js
const CONFIG = {
    supabaseUrl: 'https://bbceqmoibwlnltgpkdsf.supabase.co',
    supabaseKey: 'sb_publishable_Tm2NO4vvT938VdnT4ZG_cQ_DFdh-r-5',
    liffIdRegister: '2011781647-1GTbZ2gJ',   // LIFF ID หน้าลงทะเบียน
    liffIdDashboard: '2011781647-rkokpjId',  // LIFF ID หน้าจัดการร้าน
    liffIdCustomer: '2011781647-erlnJT8p', // LIFF ID หน้าลูกค้า
    gasWebhookUrl: 'https://script.google.com/macros/s/AKfycbz55ygFed3hzf-3xRTdd4nCQl4wZ88PsGyaAkmpfMjU4_dexgy5R1Hpo9dXDJfG4Dcp/exec', // ใส่ลื้งต์ Web App
        
    // --- ตั้งค่าระบบแพ็กเกจ (สามารถปรับราคาและจำนวนวันได้เองตลอดเวลา) ---
    trialDaysDefault: 7, // กำหนดจำนวนวันทดลองใช้ฟรี (เช่น 7 หรือ 10 วัน)
    adminPromptpay: '0812345678', // เบอร์พร้อมเพย์ของคุณสำหรับรับค่าบริการ

    pricingPlans: [
        { id: 'trial', name: 'ทดลองใช้ฟรี', days: 7, price: 0, tag: 'เริ่มต้น', desc: 'ครบทุกฟีเจอร์ ไม่ผูกมัด' },
        { id: '1_month', name: 'ราย 1 เดือน', days: 30, price: 390, tag: 'สบายๆ', desc: 'เฉลี่ยเพียงวันละ 13 บ.' },
        { id: '3_months', name: 'ราย 3 เดือน', days: 90, price: 990, tag: 'ยอดนิยม 🔥', desc: 'เฉลี่ยเพียงวันละ 11 บ.' },
        { id: '6_months', name: 'ราย 6 เดือน', days: 180, price: 1790, tag: 'สุดคุ้ม', desc: 'เฉลี่ยเพียงวันละ 9.9 บ.' },
        { id: '1_year', name: 'รายปี (365 วัน)', days: 365, price: 2990, tag: 'คุ้มค่าที่สุด 👑', desc: 'เฉลี่ยตกวันละ 8.1 บ. เท่านั้น' }
    ]
};
