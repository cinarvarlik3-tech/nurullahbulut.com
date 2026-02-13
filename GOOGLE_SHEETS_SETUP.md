# Online Danışma Form → Google Spreadsheet (Apps Script)

The Online Danışma page form sends submissions to a Google Spreadsheet via a Google Apps Script Web App. Follow these steps exactly.

---

## Step 1 – Create the spreadsheet

1. Go to [Google Sheets](https://sheets.google.com) and create a **new blank spreadsheet**.
2. Name it (e.g. **Online Danışma Form**).
3. In **row 1**, add these headers (one per column):

   | A      | B       | C      | D       | E         |
   |--------|---------|--------|---------|-----------|
   | Tarih  | Ad Soyad | Telefon | Konu    | Mesaj     |

   (You can use different column letters as long as the script matches; the script below uses A=timestamp, B=name, C=phone, D=subject, E=message.)

---

## Step 2 – Open Apps Script

1. In the same spreadsheet: **Extensions** → **Apps Script**.
2. A new tab opens with a script editor. Delete any sample code so the editor is empty.

---

## Step 3 – Paste this code

Paste the entire code below into the Apps Script editor (replace everything that’s there):

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var body = e.postData ? JSON.parse(e.postData.contents) : {};
    var timestamp = body.timestamp || new Date().toISOString();
    var name = body.name || "";
    var phone = body.phone || "";
    var subject = body.subject || "";
    var message = body.message || "";
    sheet.appendRow([timestamp, name, phone, subject, message]);
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

- The form sends: `name`, `phone`, `subject`, `message`, `timestamp`.
- Each submission is appended as one row: **A** = timestamp, **B** = name, **C** = phone, **D** = subject, **E** = message.
- If your header row is not row 1, or you use a specific sheet name, change the first line to get that sheet, e.g.:

  `var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Form");`

---

## Step 4 – Save and deploy as Web App

1. **Save** the project: **File** → **Save** (or Ctrl+S). Name the project if asked (e.g. **Online Danışma Form**).
2. **Deploy** the script:
   - Click **Deploy** → **New deployment**.
   - Next to “Select type”, click the gear icon and choose **Web app**.
   - **Description:** e.g. `Online Danışma form submit`.
   - **Execute as:** **Me** (your Google account).
   - **Who has access:** **Anyone** (so your website can POST without logging in).
3. Click **Deploy**.
4. The first time you may need to **Authorize access**:
   - Click **Authorize access**, choose your Google account, then **Advanced** → **Go to … (unsafe)** → **Allow**.
5. After deployment you see **Web app URL**. Copy the full URL (it looks like  
   `https://script.google.com/macros/s/AKfy.../exec`).

---

## Step 5 – Add the URL to your site

1. In your project, open **`.env.local`** (create it from `.env.example` if needed).
2. Add or set:

   ```env
   NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEB_APP_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
   ```

   Paste your **actual** Web app URL in place of the example above.
3. Restart the dev server (`npm run dev`) so the new env variable is picked up.

---

## Step 6 – Test

1. Open the **Online Danışma** page on your site.
2. Fill the form (Ad Soyad, Telefon, Konu, Mesaj) and click **Gönder**.
3. Check the Google spreadsheet: a new row should appear with timestamp, name, phone, subject, and message.

---

## Troubleshooting

- **No row in the sheet**  
  - Confirm the Web App URL in `.env.local` is exactly the one from **Deploy** → **Web app** (including `/exec`).  
  - Confirm **Who has access** is **Anyone**.

- **“Form bağlantısı yapılandırılmamış”**  
  - `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEB_APP_URL` is missing or wrong in `.env.local`. Restart the dev server after changing it.

- **Script errors**  
  - In Apps Script: **Executions** (left sidebar) to see errors.  
  - Ensure the sheet has a header row and the script uses the same sheet (e.g. active sheet or the correct `getSheetByName`).

- **CORS / response**  
  - The site sends the request with `mode: "no-cors"`, so the browser cannot read the response. Success is assumed if the request doesn’t throw; check the spreadsheet to confirm rows are added.

---

## Optional – Different sheet or columns

- To use another sheet:  
  `var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sayfa2");`
- To change column order, change the array in `appendRow([timestamp, name, phone, subject, message])` to match your header (e.g. put `name` first if column A is Ad Soyad).
