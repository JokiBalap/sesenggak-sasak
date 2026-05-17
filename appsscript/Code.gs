const CONFIG = {
  SPREADSHEET_ID: 'GANTI_DENGAN_SPREADSHEET_ID_ANDA',
  SHEET_NAME: 'Sesenggak',
  CACHE_SECONDS: 300
};

function doGet(e) {
  try {
    const params = e && e.parameter ? e.parameter : {};
    let result = getSesenggakData();

    result = result.filter(item => String(item.aktif).toLowerCase() === 'true');

    if (params.kategori) {
      const kategori = String(params.kategori).toLowerCase().trim();
      result = result.filter(item => String(item.kategori || '').toLowerCase().trim() === kategori);
    }

    if (params.q) {
      const q = String(params.q).toLowerCase().trim();
      result = result.filter(item => {
        const gabungan = [
          item.sesenggak,
          item.arti,
          item.makna,
          item.kategori,
          item.sumber
        ].join(' ').toLowerCase();
        return gabungan.includes(q);
      });
    }

    if (params.random === '1' || params.random === 'true') {
      if (result.length > 0) {
        const index = Math.floor(Math.random() * result.length);
        result = [result[index]];
      }
    }

    if (params.limit) {
      const limit = parseInt(params.limit, 10);
      if (!isNaN(limit) && limit > 0) {
        result = result.slice(0, limit);
      }
    }

    return jsonResponse({
      status: 'success',
      total: result.length,
      data: result
    }, params.callback);

  } catch (error) {
    return jsonResponse({
      status: 'error',
      message: error.message
    });
  }
}

function getSesenggakData() {
  const cache = CacheService.getScriptCache();
  const cacheKey = 'sesenggak_data_v1';
  const cached = cache.get(cacheKey);

  if (cached) {
    return JSON.parse(cached);
  }

  const spreadsheet = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(CONFIG.SHEET_NAME);

  if (!sheet) {
    throw new Error('Sheet dengan nama "' + CONFIG.SHEET_NAME + '" tidak ditemukan.');
  }

  const values = sheet.getDataRange().getValues();

  if (values.length < 2) {
    return [];
  }

  const headers = values[0].map(header => String(header).trim().toLowerCase());
  const rows = values.slice(1);

  const data = rows
    .filter(row => row.some(cell => String(cell).trim() !== ''))
    .map(row => {
      const item = {};

      headers.forEach((header, index) => {
        item[header] = row[index];
      });

      return {
        id: String(item.id || '').trim(),
        sesenggak: String(item.sesenggak || '').trim(),
        arti: String(item.arti || '').trim(),
        makna: String(item.makna || '').trim(),
        kategori: String(item.kategori || '').trim(),
        sumber: String(item.sumber || '').trim(),
        aktif: item.aktif
      };
    });

  cache.put(cacheKey, JSON.stringify(data), CONFIG.CACHE_SECONDS);
  return data;
}

function jsonResponse(data, callback) {
  const json = JSON.stringify(data);

  if (callback) {
    const safeCallback = String(callback).replace(/[^a-zA-Z0-9_.$]/g, '');
    return ContentService
      .createTextOutput(safeCallback + '(' + json + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

function clearCache() {
  CacheService.getScriptCache().remove('sesenggak_data_v1');
}
