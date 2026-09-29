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
        { 
            id: 'trial', 
            name: 'ทดลองใช้ฟรี', 
            days: 7, 
            price: 0, 
            tag: 'เริ่มต้น', 
            mode: 'manual', 
            comm: 0, 
            desc: 'ระบบสั่งอาหาร ตรวจสลิปเอง' 
        },
        { 
            id: 'manual_1m', 
            name: 'Basic (ตรวจสลิปเอง)', 
            days: 30, 
            price: 390, 
            tag: 'สุดคุ้ม', 
            mode: 'manual', 
            comm: 100, // <== ค่าแนะนำ 100 บาท
            desc: 'ประหยัด เหมาะกับร้านเริ่มต้น' 
        },
        { 
            id: 'auto_1m', 
            name: 'Pro (ตรวจสลิปออโต้)', 
            days: 30, 
            price: 590, 
            tag: 'ยอดนิยม 🔥', 
            mode: 'auto', 
            comm: 150, // <== ค่าแนะนำ 150 บาท
            desc: 'ระบบ SlipOK ตรวจให้อัตโนมัติ' 
        },
        // เพิ่มตัวเลือกราย 3 เดือน เผื่อแม่ค้าอยากจ่ายทีเดียวยาวๆ (ตั้งค่าแนะนำเพิ่มเป็นแรงจูงใจ)
        { 
            id: 'manual_3m', 
            name: 'Basic (ราย 3 เดือน)', 
            days: 90, 
            price: 1100, 
            tag: 'ขายยาวๆ', 
            mode: 'manual', 
            comm: 300, 
            desc: 'จ่ายทีเดียวอยู่ยาว 3 เดือน' 
        },
        { 
            id: 'auto_3m', 
            name: 'Pro (ราย 3 เดือน)', 
            days: 90, 
            price: 1690, 
            tag: 'มืออาชีพ', 
            mode: 'auto', 
            comm: 450, 
            desc: 'ออโต้คุ้มๆ เฉลี่ยเดือนละ 560 บ.' 
        }
    ]
};
