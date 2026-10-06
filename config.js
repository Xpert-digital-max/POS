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
    // 4. ตั้งค่าระบบทั่วไป และบัญชีรับเงินของแอดมิน
    // ---------------------------------------------------------
    trialDaysDefault: 10,

    adminPaymentType: 'promptpay',

    adminPromptpay: '3220300357527',

    adminBankInfo: 'ธ.กสิกรไทย บจก.NPX Digital Marketing',


    // =========================================================
    // 5. โครงสร้างแพ็กเกจหลัก (Pricing Plans)
    // =========================================================
    pricingPlans: [
        // BASIC (ไม่มี Auto Slip)
        { id: 'basic_30', name: 'Basic 30 วัน', days: 30, price: 289, comm: 70, quota: 0, type: 'basic' },
        { id: 'basic_90', name: 'Basic 90 วัน', days: 90, price: 790, comm: 190, quota: 0, type: 'basic' },
        { id: 'basic_180', name: 'Basic 180 วัน', days: 180, price: 1490, comm: 350, quota: 0, type: 'basic' },
        
        // PRO (มี Auto Slip Quota)
        { id: 'pro_30', name: 'Pro 30 วัน', days: 30, price: 389, comm: 100, quota: 200, type: 'pro' },
        { id: 'pro_90', name: 'Pro 90 วัน', days: 90, price: 1090, comm: 270, quota: 700, type: 'pro' },
        { id: 'pro_180', name: 'Pro 180 วัน', days: 180, price: 1990, comm: 500, quota: 1500, type: 'pro' },
        
        // RESTAURANT PRO (ได้ทั้งระบบร้านอาหาร + Prepaid)
        { id: 'rest_30', name: 'Restaurant Pro 30 วัน', days: 30, price: 589, comm: 150, quota: 150, type: 'restaurant' },
        { id: 'rest_90', name: 'Restaurant Pro 90 วัน', days: 90, price: 1690, comm: 420, quota: 500, type: 'restaurant' },
        { id: 'rest_180', name: 'Restaurant Pro 180 วัน', days: 180, price: 3190, comm: 800, quota: 1200, type: 'restaurant' }
    ],

    branchPlans: [
        // BRANCH ADD-ON (ซื้อได้เฉพาะตอนที่ Restaurant Pro ยัง Active)
        { id: 'branch_30', name: 'Branch Add-on 30 วัน', days: 30, price: 289, comm: 70, quota: 0, type: 'branch' },
        { id: 'branch_90', name: 'Branch Add-on 90 วัน', days: 90, price: 790, comm: 190, quota: 0, type: 'branch' },
        { id: 'branch_180', name: 'Branch Add-on 180 วัน', days: 180, price: 1490, comm: 350, quota: 0, type: 'branch' }
    ],

    topupPlans: [
        // SLIP TOP-UP (ไม่มี Commission)
        { id: 'topup_100', name: 'Top-up 100 บิล', price: 100, comm: 0, quota: 100, type: 'topup' },
        { id: 'topup_300', name: 'Top-up 300 บิล', price: 250, comm: 0, quota: 300, type: 'topup' },
        { id: 'topup_500', name: 'Top-up 500 บิล', price: 400, comm: 0, quota: 500, type: 'topup' }
    ]
};
