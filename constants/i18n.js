import {createInstance} from 'i18next';
import {initReactI18next} from 'react-i18next';

const i18n = createInstance({
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },

  resources: {
    th: {
      translation: {
        version: 'อัปเดตเวอร์ชัน',
        version_detail: 'ดาวน์โหลดเวอร์ชันใหม่เพื่อใช้งานเวอร์ชันล่าสุด.',
        hello: 'สวัสดี',
        lang_head: 'ยินดีต้อนรับ',
        lang_body: 'กรุณาเลือกภาษา',
        lang_btn_th: 'ไทย',
        lang_btn_en: 'English',

        term_head: 'เงื่อนไขการใช้บริการ',
        term_btn_decline: 'ปฏิเสธ',
        term_btn_accept: 'ยอมรับ',

        login_username: 'ชื่อผู้ใช้งาน',
        login_password: 'รหัสผ่าน',
        login_memo: 'บันทึกการเข้าสู่ระบบ',
        login_forgot: 'ลืมรหัสผ่าน?',
        login_submit: 'เข้าสู่ระบบ',
        login_divider: 'ไม่มีบัญชีผู้ใช้',
        login_regis: 'เปิดบัญชีเพื่อลงทะเบียนบัญชีผู้ใช้',

        forgot_title: 'ลืมรหัสผ่าน?',
        forgot_desc: 'กรุณากรอกอีเมลหรือเบอร์โทรศัพท์ที่ลงทะเบียน',
        forgot_input: 'อีเมล / เบอร์โทรศัพท์',
        forgot_submit: 'ส่ง',
        forgot_success_title: 'สำเร็จ',
        forgot_success_desc: 'รีเซ็ตรหัสผ่านของคุณสำเร็จแล้ว',
        forgot_success_submit: 'ตกลง',

        otp_title: 'OTP จะถูกส่งไปที่เบอร์โทรศัพท์',
        otp_submit: 'ข้อรหัส OTP',
        otp_issue: 'กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อ',

        verify_title: 'ยืนยันตัวตน',
        verify_desc: 'กรุณากรอกรหัสยืนยันที่เราได้ส่งให้คุณ',
        verify_issue: 'หากคุณไม่ได้รับรหัส?',
        verify_resend: 'ส่งรหัสใหม่',

        pin_title_set: 'ตั้งรหัส PIN CODE',
        pin_title_confirm: 'ยืนยันรหัส PIN CODE',
        pin_issue: 'PIN CODE ไม่ถูกต้อง',

        pin_title_required: 'กรุณากรอกรหัส PIN',
        pin_fotgot: 'ลืมรหัส PIN ?',

        touchid_title_head: 'TouchID',
        touchid_desc_head:
          'ตั้งค่าล็อคอินด้วยลายนิ้วมือ เพื่อการเข้าถึงที่รวดเร็วขึ้น',
        touchid_submit: 'ตั้งค่าลายนิ้วมือ',
        touchid_skip: 'ข้าม',

        touchid_title: 'CGS Application',
        touchid_desc:
          'เข้าใช้งานด้วย Touch ID หรือ ยกเลิกเพื่อกลับไปใช้รหัส PIN',
        touchid_fail: 'ล้มเหลว',
        touchid_cancel: 'ยกเลิก',
        touchid_show_passcode: 'แสดงรหัสผ่าน',
        touchid_success: 'การรับรองความถูกต้องเสร็จสมบูรณ์',
        touchid_notfound: 'ไม่พบ TouchId และ FaceId ในอุปกรณ์นี้',
      },
    },
    en: {
      translation: {
        version: 'Update version',
        version_detail: 'Download the new version for up to date.',
        hello: 'Hello',
        lang_head: 'Welcome',
        lang_body: 'Please select language',
        lang_btn_th: 'Thai',
        lang_btn_en: 'English',

        term_head: 'Term of services',
        term_btn_decline: 'Decline',
        term_btn_accept: 'Accept',

        login_username: 'Username',
        login_password: 'Password',
        login_memo: 'Remember me',
        login_forgot: 'Forgot password?',
        login_submit: 'Login',
        login_divider: 'No user acount?',
        login_regis: 'Open an account to register a user account.',

        forgot_title: 'Forgot your password?',
        forgot_desc: 'Please enter your registered email or phone number.',
        forgot_input: 'Email / Phone Number',
        forgot_submit: 'Send',
        forgot_success_title: 'Success',
        forgot_success_desc: 'Your password has been successfully reset.',
        forgot_success_submit: 'Ok',

        otp_title: 'OTP will be sent to the phone number.',
        otp_submit: 'Send OTP',
        otp_issue: 'In case the phone number is incorrect, please contact',

        verify_title: 'Verify your identity',
        verify_desc: 'Please enter the verification code we sent you.',
        verify_issue: "If you didn't receive the code?",
        verify_resend: 'Send code',

        pin_title_set: 'Set a PIN CODE',
        pin_title_confirm: 'Confirm PIN CODE',
        pin_issue: 'PIN CODE is incorrect.',

        pin_title_required: 'Please enter your PIN code.',
        pin_fotgot: 'Forgot your PIN code?',

        touchid_title_head: 'TouchID',
        touchid_desc_head: 'Set up fingerprint login for faster access.',
        touchid_submit: 'Set up fingerprint',
        touchid_skip: 'Skip',

        touchid_title: 'CGS Application',
        touchid_desc:
          'Log in with Touch ID or cancel to return to using your PIN.',
        touchid_fail: 'Failed',
        touchid_cancel: 'Cancel',
        touchid_show_passcode: 'Show Passcode',
        touchid_success: 'Authenticated Successfully',
        touchid_notfound: 'No TouchId and FaceId Detected in this device',
      },
    },
    cn: {
      translation: {
        version: '更新版本',
        version_detail: '下载最新版本以保持更新。',
      },
    },
  },
});

i18n.use(initReactI18next).init();

export default i18n;
