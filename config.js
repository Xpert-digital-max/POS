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

        // -----------------------------------------------------
        // TRIAL
        // สมัครร้านครั้งแรก ทดลองเต็มระบบ 10 วัน
        // เทียบเท่า Restaurant Pro
        // จำกัด Auto Slip 20 บิล เพื่อควบคุมต้นทุน
        // -----------------------------------------------------
        {
            id: 'trial',
            name: 'ทดลองใช้ฟรี 10 วัน',
            days: 10,
            price: 0,
            tag: 'ทดลองใช้ฟรี 🎁',

            // Trial เปิดสิทธิ์สูงสุด
            mode: 'restaurant',

            comm: 0,
            quota: 20,

            planType: 'trial',

            fullAccess: true,

            includedBranches: 1,

            unlimitedTables: true,

            desc: 'ทดลองเต็มระบบ 10 วัน • ใช้ได้ทั้ง Basic + Pro + Restaurant Pro • ตรวจสลิปอัตโนมัติฟรี 20 บิล'
        },


        // =====================================================
        // BASIC
        // ระบบรับออเดอร์
        // ร้านตรวจสลิปเอง
        // ไม่มี Auto Slip Quota
        // =====================================================

        {
            id: 'manual_1m',
            name: 'Basic (1 เดือน)',
            days: 30,
            price: 289,
            tag: 'เริ่มต้นง่ายๆ',

            mode: 'manual',

            comm: 70,
            quota: 0,

            planType: 'basic',

            desc: 'ระบบจัดการออเดอร์ • ร้านตรวจสลิปเอง'
        },

        {
            id: 'manual_3m',
            name: 'Basic (3 เดือน)',
            days: 90,
            price: 790,
            tag: 'สุดคุ้ม',

            mode: 'manual',

            comm: 190,
            quota: 0,

            planType: 'basic',

            desc: 'ระบบจัดการออเดอร์ • ร้านตรวจสลิปเอง • ประหยัด 77 บาท'
        },

        {
            id: 'manual_6m',
            name: 'Basic (6 เดือน)',
            days: 180,
            price: 1490,
            tag: 'ครึ่งปี',

            mode: 'manual',

            comm: 350,
            quota: 0,

            planType: 'basic',

            desc: 'ระบบจัดการออเดอร์ • ร้านตรวจสลิปเอง • ประหยัด 244 บาท'
        },


        // =====================================================
        // PRO
        // ระบบรับออเดอร์ + ตรวจสลิปอัตโนมัติ
        // =====================================================

        {
            id: 'auto_1m',
            name: 'Pro (1 เดือน)',
            days: 30,
            price: 389,
            tag: 'ยอดนิยม 🔥',

            mode: 'auto',

            comm: 100,
            quota: 200,

            planType: 'pro',

            desc: 'ระบบจัดการออเดอร์ + ตรวจสลิปอัตโนมัติฟรี 200 บิล'
        },

        {
            id: 'auto_3m',
            name: 'Pro (3 เดือน)',
            days: 90,
            price: 1090,
            tag: 'เพิ่มโบนัสสลิป',

            mode: 'auto',

            comm: 270,
            quota: 700,

            planType: 'pro',

            desc: 'ระบบจัดการออเดอร์ + ตรวจสลิปอัตโนมัติฟรี 700 บิล'
        },

        {
            id: 'auto_6m',
            name: 'Pro (6 เดือน)',
            days: 180,
            price: 1990,
            tag: 'คุ้มสุด 👑',

            mode: 'auto',

            comm: 500,
            quota: 1500,

            planType: 'pro',

            desc: 'ระบบจัดการออเดอร์ + ตรวจสลิปอัตโนมัติฟรี 1,500 บิล'
        },


        // =====================================================
        // RESTAURANT PRO
        //
        // จุดขาย:
        // - ใช้ได้ทั้ง "จ่ายก่อนกิน" และ "กินก่อนจ่าย"
        // - รวม 1 สาขา
        // - โต๊ะไม่จำกัด
        // - QR โต๊ะ
        // - สั่งเพิ่มได้
        // - เรียกพนักงาน
        // - เช็คบิล
        // - เงินสด / โอน
        // - ตรวจสลิป
        // - พิมพ์บิล / ใบเสร็จ
        // =====================================================

        {
            id: 'restaurant_1m',
            name: 'Restaurant Pro (1 เดือน)',
            days: 30,
            price: 589,
            tag: 'ร้านอาหาร 🍽️',

            mode: 'restaurant',

            comm: 150,
            quota: 150,

            planType: 'restaurant',

            includedBranches: 1,

            unlimitedTables: true,

            prepaidEnabled: true,

            dineInEnabled: true,

            desc: 'จ่ายก่อนกิน + กินก่อนจ่าย • รวม 1 สาขา • โต๊ะไม่จำกัด • ตรวจสลิปอัตโนมัติ 150 บิล'
        },

        {
            id: 'restaurant_3m',
            name: 'Restaurant Pro (3 เดือน)',
            days: 90,
            price: 1690,
            tag: 'ยอดนิยม 🔥',

            mode: 'restaurant',

            comm: 420,
            quota: 500,

            planType: 'restaurant',

            includedBranches: 1,

            unlimitedTables: true,

            prepaidEnabled: true,

            dineInEnabled: true,

            desc: 'Restaurant 2 Mode • รวม 1 สาขา • โต๊ะไม่จำกัด • ตรวจสลิปอัตโนมัติ 500 บิล'
        },

        {
            id: 'restaurant_6m',
            name: 'Restaurant Pro (6 เดือน)',
            days: 180,
            price: 3190,
            tag: 'คุ้มสุด 👑',

            mode: 'restaurant',

            comm: 800,
            quota: 1200,

            planType: 'restaurant',

            includedBranches: 1,

            unlimitedTables: true,

            prepaidEnabled: true,

            dineInEnabled: true,

            desc: 'Restaurant เต็มระบบ • รวม 1 สาขา • โต๊ะไม่จำกัด • ตรวจสลิปอัตโนมัติ 1,200 บิล'
        }
    ],


    // =========================================================
    // 6. Restaurant Branch Add-on
    //
    // ใช้ราคาเดียวกับ Basic
    // ใช้ค่าแนะนำเดียวกับ Basic
    //
    // IMPORTANT:
    // Restaurant Pro = Parent
    // Branch Add-on = Child
    //
    // Branch Add-on ใช้งานได้เฉพาะเมื่อ Restaurant Pro
    // ของร้านยัง Active
    //
    // Branch Add-on ไม่มี Auto Slip Quota เพิ่ม
    // =========================================================

    restaurantBranchPlans: [

        {
            id: 'restaurant_branch_1m',
            name: 'เพิ่มสาขา Restaurant (1 เดือน)',
            days: 30,
            price: 289,

            comm: 70,
            quota: 0,

            planType: 'restaurant_branch',

            requiresActiveRestaurantPlan: true,

            desc: 'เพิ่ม Restaurant 1 สาขา • ใช้งานได้เมื่อ Restaurant Pro หลักยัง Active'
        },

        {
            id: 'restaurant_branch_3m',
            name: 'เพิ่มสาขา Restaurant (3 เดือน)',
            days: 90,
            price: 790,

            comm: 190,
            quota: 0,

            planType: 'restaurant_branch',

            requiresActiveRestaurantPlan: true,

            desc: 'เพิ่ม Restaurant 1 สาขา • ใช้งานได้เมื่อ Restaurant Pro หลักยัง Active'
        },

        {
            id: 'restaurant_branch_6m',
            name: 'เพิ่มสาขา Restaurant (6 เดือน)',
            days: 180,
            price: 1490,

            comm: 350,
            quota: 0,

            planType: 'restaurant_branch',

            requiresActiveRestaurantPlan: true,

            desc: 'เพิ่ม Restaurant 1 สาขา • ใช้งานได้เมื่อ Restaurant Pro หลักยัง Active'
        }
    ],


    // =========================================================
    // 7. แพ็กเกจเติมโควต้าตรวจสลิปอัตโนมัติ
    //
    // ใช้ร่วมกันทั้งระบบ
    // ไม่มีค่าแนะนำ
    //
    // Basic สามารถซื้อ Top-up ได้หรือไม่
    // ให้ระบบสิทธิ์เป็นตัวตัดสินภายหลัง
    //
    // โครงราคาเดิมคงไว้ทั้งหมด
    // =========================================================

    quotaPlans: [

        {
            id: 'q100',
            name: 'โควต้า 100 บิล',
            quota: 100,
            price: 100
        },

        {
            id: 'q300',
            name: 'โควต้า 300 บิล',
            quota: 300,
            price: 250
        },

        {
            id: 'q500',
            name: 'โควต้า 500 บิล',
            quota: 500,
            price: 400
        }
    ],


    // =========================================================
    // 8. Trial Configuration
    //
    // ร้านใหม่ทุกแห่ง:
    //
    // ลงทะเบียนสำเร็จ
    // ↓
    // Trial เปิดให้อัตโนมัติทันที
    // ↓
    // ทดลองเต็มระบบ 10 วัน
    //
    // Trial ใช้ได้ครั้งเดียวต่อ Merchant
    // =========================================================

    trialConfig: {

        enabled: true,

        days: 10,

        // หลังสมัครร้านสำเร็จเปิด Trial ทันที
        autoActivateOnRegistration: true,

        // Trial ให้สิทธิ์เทียบเท่าแพ็กสูงสุด
        accessLevel: 'restaurant',

        fullAccess: true,

        // ใช้ได้ทั้ง Prepaid + Restaurant
        prepaidEnabled: true,

        dineInEnabled: true,

        // Trial รวม 1 สาขา
        includedBranches: 1,

        // โต๊ะไม่จำกัด
        unlimitedTables: true,

        // ตรวจสลิปอัตโนมัติฟรี 20 บิล
        slipQuota: 20,

        // Trial ไม่มีค่าแนะนำ
        commission: 0,

        // 1 Merchant ใช้ Trial ได้ครั้งเดียว
        oncePerMerchant: true
    },


    // =========================================================
    // 9. Restaurant Configuration
    //
    // เป็นกติกากลางสำหรับ Restaurant Mode
    // ไม่ใช่ราคา
    // =========================================================

    restaurantConfig: {

        enabled: true,

        // Restaurant Pro แพ็กหลักรวม 1 สาขา
        includedBranches: 1,

        // โต๊ะไม่จำกัดต่อสาขา
        unlimitedTables: true,

        // Restaurant ใช้ได้ทั้งสองระบบ
        prepaidEnabled: true,

        dineInEnabled: true,

        // ซื้อ Branch Add-on ได้
        branchAddOnEnabled: true,

        // สาขาเสริมต้องมี Restaurant Pro หลัก Active
        branchRequiresActiveParentPlan: true,

        // ถ้า Parent หมดอายุ ให้พักสาขาเสริม
        suspendBranchWhenParentExpired: true,

        // ไม่ลบวันหมดอายุของ Branch Add-on
        preserveBranchExpiryWhenSuspended: true,

        // ถ้าต่อ Restaurant Pro และ Add-on ยังไม่หมดอายุ
        // ให้สาขากลับมาใช้งานได้
        reactivateValidBranchOnParentRenewal: true
    }
};
