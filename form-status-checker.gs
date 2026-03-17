/**
 * ══════════════════════════════════════════════════════════════════
 *  מבחן בהלכות שבת – Form Status Checker
 *  Google Apps Script Web App
 *
 *  הוראות התקנה:
 *  1. פתח את ה-Spreadsheet המחובר לטופס
 *  2. Extensions → Apps Script
 *  3. מחק קוד קיים, הדבק את הקוד הזה
 *  4. Deploy → New deployment
 *     - Type: Web App
 *     - Execute as: Me
 *     - Who has access: Anyone
 *  5. העתק את ה-Web App URL והדבק ב-index.html:
 *     const STATUS_CHECK_URL = "https://script.google.com/macros/s/YOUR_ID/exec";
 * ══════════════════════════════════════════════════════════════════
 */

const FORM_ID = "1FAIpQLSejOxa8L7ak7Q7LXhrU7xSKsXcico3y2FuwOFCkJ5Arr1njtw";

function doGet() {
  const form = FormApp.openByUrl(
    `https://docs.google.com/forms/d/e/${FORM_ID}/viewform`
  );

  const result = {
    accepting: form.isAcceptingResponses()
  };

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
