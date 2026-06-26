const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// تشغيل وخدمة الملف الأساسي من جذر المشروع مباشرة
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// في حال وجود أي مسارات أخرى أو ملفات فرعية مستقبلاً في الجذر
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`السيرفر يعمل بنجاح على بورت: ${PORT}`);
});
