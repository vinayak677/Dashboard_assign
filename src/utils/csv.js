export const downloadCSV = (rows, filename) => {
  if (!rows.length) return;

  const headers = Object.keys(rows[0]).join(",");
  const values = rows.map((row) =>
    Object.values(row)
      .map((v) => `"${v}"`)
      .join(",")
  );

  const csvContent = [headers, ...values].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();

  URL.revokeObjectURL(url);
};
