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
    liffIdInfluencer: '2011794866-Jw2Icc0b',


    // ---------------------------------------------------------
    // 3. ข้อมูล Webhook ของ Google Apps Script (GAS)
    // ---------------------------------------------------------
    gasWebhookUrl: 'https://script.google.com/macros/s/AKfycbz55ygFed3hzf-3xRTdd4nCQl4wZ88PsGyaAkmpfMjU4_dexgy5R1Hpo9dXDJfG4Dcp/exec',


    // ---------------------------------------------------------
    // 4. ตั้งค่าระบบทั่วไป
    // ---------------------------------------------------------
    trialDaysDefault: 10,


    // =========================================================
    // 5. บัญชีรับเงิน "ค่าแพ็กเกจ / ต่ออายุ / เติมโควต้า"
    // =========================================================
    // ห้ามใช้ชุดนี้กับ Marketing Wallet

    adminPaymentType: 'promptpay',

    adminPromptpay: '3220300357527',

    adminBankInfo: 'ธ.กสิกรไทย บจก.NPX Digital Marketing',


    // =========================================================
    // 6. บัญชีรับเงิน "Marketing Wallet"
    // =========================================================
    // ใช้เฉพาะกรณีร้านค้าเติมเงินไว้จ่ายค่าคอม Influencer
    // แยกจากบัญชีค่าแพ็กเกจด้านบน

    marketingWalletPaymentType: 'promptpay',

    // ใส่เลขพร้อมเพย์ / เลขที่ใช้สร้าง QR ของบัญชีรับฝาก Marketing Wallet
    marketingWalletPromptpay: '3220300357527',

    // ใส่ชื่อธนาคาร + ชื่อบัญชี + เลขบัญชีของ Marketing Wallet
    // ถ้าเป็นบัญชีคนละบัญชีกับค่าแพ็กเกจ ให้เปลี่ยนตรงนี้
    marketingWalletBankInfo: 'ธ.กสิกรไทย บจก.NPX Digital Marketing',


    // ---------------------------------------------------------
    // LINE สำหรับร้านค้าติดต่อแอดมินเรื่อง Marketing Wallet
    // ---------------------------------------------------------

    // ให้เปลี่ยนเป็น LINE ที่คุณต้องการรับแจ้งเรื่อง Wallet โดยเฉพาะ
    marketingWalletAdminLineUrl: 'https://line.me/R/ti/p/@143iruhg',


    // =========================================================
    // 7. โครงสร้างแพ็กเกจหลัก (Pricing Plans)
    // =========================================================
    pricingPlans: [

        // BASIC (ไม่มี Auto Slip)
        {
            id: 'basic_30',
            name: 'Basic 30 วัน',
            days: 30,
            price: 289,
            comm: 70,
            quota: 0,
            type: 'basic'
        },

        {
            id: 'basic_90',
            name: 'Basic 90 วัน',
            days: 90,
            price: 790,
            comm: 190,
            quota: 0,
            type: 'basic'
        },

        {
            id: 'basic_180',
            name: 'Basic 180 วัน',
            days: 180,
            price: 1490,
            comm: 350,
            quota: 0,
            type: 'basic'
        },


        // PRO (มี Auto Slip Quota)
        {
            id: 'pro_30',
            name: 'Pro 30 วัน',
            days: 30,
            price: 389,
            comm: 100,
            quota: 200,
            type: 'pro'
        },

        {
            id: 'pro_90',
            name: 'Pro 90 วัน',
            days: 90,
            price: 1090,
            comm: 270,
            quota: 700,
            type: 'pro'
        },

        {
            id: 'pro_180',
            name: 'Pro 180 วัน',
            days: 180,
            price: 1990,
            comm: 500,
            quota: 1500,
            type: 'pro'
        },


        // RESTAURANT PRO
        {
            id: 'rest_30',
            name: 'Restaurant Pro 30 วัน',
            days: 30,
            price: 589,
            comm: 150,
            quota: 150,
            type: 'restaurant'
        },

        {
            id: 'rest_90',
            name: 'Restaurant Pro 90 วัน',
            days: 90,
            price: 1690,
            comm: 420,
            quota: 500,
            type: 'restaurant'
        },

        {
            id: 'rest_180',
            name: 'Restaurant Pro 180 วัน',
            days: 180,
            price: 3190,
            comm: 800,
            quota: 1200,
            type: 'restaurant'
        }
    ],


    // =========================================================
    // 8. แพ็กเกจเพิ่มสาขา
    // =========================================================
    branchPlans: [

        {
            id: 'branch_30',
            name: 'Branch Add-on 30 วัน',
            days: 30,
            price: 289,
            comm: 70,
            quota: 0,
            type: 'branch'
        },

        {
            id: 'branch_90',
            name: 'Branch Add-on 90 วัน',
            days: 90,
            price: 790,
            comm: 190,
            quota: 0,
            type: 'branch'
        },

        {
            id: 'branch_180',
            name: 'Branch Add-on 180 วัน',
            days: 180,
            price: 1490,
            comm: 350,
            quota: 0,
            type: 'branch'
        }
    ],


    // =========================================================
    // 9. แพ็กเกจเติมโควต้าตรวจสลิป
    // =========================================================
    topupPlans: [

        {
            id: 'topup_100',
            name: 'Top-up 100 บิล',
            price: 100,
            comm: 0,
            quota: 100,
            type: 'topup'
        },

        {
            id: 'topup_300',
            name: 'Top-up 300 บิล',
            price: 250,
            comm: 0,
            quota: 300,
            type: 'topup'
        },

        {
            id: 'topup_500',
            name: 'Top-up 500 บิล',
            price: 400,
            comm: 0,
            quota: 500,
            type: 'topup'
        }
    ]

};
