# TPticketpop

ระบบจองบัตรคอนเสิร์ต + CRM (TICKETPASS) — ครอบด้วย Next.js เพื่อ deploy บน Vercel

โครงสร้างตอนนี้:
- `public/ticket-app.html` — แอปเดิม (seat map, cart, PromptPay QR, admin CRM) ทำงานครบเหมือนเดิม 100%
- `app/page.js` — หน้า Next.js ที่ฝังแอปเดิมผ่าน iframe เต็มจอ

## รันในเครื่อง
```bash
npm install
npm run dev
```
เปิด http://localhost:3000

## Push ขึ้น GitHub repo เดิม (thanawat01/TPticketpop)
```bash
git init
git remote add origin https://github.com/thanawat01/TPticketpop.git
git add .
git commit -m "Next.js wrapper for TICKETPASS app"
git branch -M main
git push -u origin main
```

## Deploy บน Vercel
ไปที่ vercel.com → Import Project → เลือก repo `TPticketpop` → Deploy

## หมายเหตุ
เวอร์ชันนี้ยังไม่ได้แปลงโค้ดข้างในเป็น React component (ยังเป็น vanilla JS เดิมทั้งหมด)
เพื่อความเร็วและความเสี่ยงต่ำที่สุด ถ้าต้องการแปลงเป็น React จริงๆ (แยก component, ใช้ state ของ React แทน)
แจ้งได้ จะช่วยแปลงทีละส่วนต่อไป
