function doGet(e: GoogleAppsScript.Events.DoGet) {
    const res = ContentService.createTextOutput();
    res.setMimeType(ContentService.MimeType.JSON);
    res.setContent(JSON.stringify(e));
    return res;
}
