function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("Leads");
    if (!sheet) sheet = ss.getActiveSheet().setName("Leads");

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Thời gian",
        "Họ tên",
        "Email",
        "SĐT",
        "Quốc tịch",
        "Sản phẩm",
        "Số tiền vay",
        "Thu nhập",
      ]);
      sheet.getRange(1, 1, 1, 8).setFontWeight("bold");
    }

    sheet.appendRow([
      data.at || new Date().toISOString(),
      data.fullName || "",
      data.email || "",
      data.phone || "",
      data.nationality || "",
      data.product || "",
      data.loanAmount || "",
      data.incomeType || "",
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
      ContentService.MimeType.JSON,
    );
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput("Leads webhook OK");
}
