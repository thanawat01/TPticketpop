export const metadata = {
  title: "TICKETPASS — ระบบจองบัตรคอนเสิร์ต + CRM",
  description: "ระบบจองตั๋วคอนเสิร์ตพร้อม CRM, ผังที่นั่งแบบอารีน่า และการชำระเงินผ่าน PromptPay QR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
