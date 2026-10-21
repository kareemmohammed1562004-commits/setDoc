# خطوات التشغيل (حوالي 10 دقايق)

## 1) إنشاء مشروع Firebase
1. ادخل https://console.firebase.google.com ثم Add project (بدون Google Analytics).
2. من Build ← Authentication ← Get started، فعّل طريقتين:
   - Anonymous (للمحكمين، يدخلوا بدون تسجيل)
   - Email/Password (للأدمن)
3. من Authentication ← Users ← Add user: أضف إيميلك ورقمك السري (ده حساب الأدمن). اعمله قبل نشر الموقع.
4. من Build ← Firestore Database ← Create database (Production mode).

## 2) قواعد الأمان
من Firestore ← Rules: الصق محتوى ملف firestore.rules بعد ما تغيّر ADMIN_EMAIL_HERE لإيميلك، ثم Publish.

## 3) ربط الموقع
Project settings ← Your apps ← أيقونة الويب (</>) ← Register app، وانسخ القيم الأربعة (apiKey, authDomain, projectId, appId) والصقها في firebase-config.js.

## 4) النشر
ارفع الملفات كلها على أي استضافة مجانية (Firebase Hosting أو Netlify أو GitHub Pages).
- رابط المحكمين: index.html
- رابط الأدمن: admin.html (ما تعطيهوش للمحكمين)

بعد النشر: Authentication ← Settings ← Authorized domains، وأضف دومين موقعك لو ما كانش موجود.

لا تفتح index.html بالضغط المزدوج من الجهاز، لازم يتفتح من رابط الاستضافة.
