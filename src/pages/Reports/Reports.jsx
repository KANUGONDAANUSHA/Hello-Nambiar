import { useState } from "react";

export default function Reports() {
  const reports = [
    {
      icon: "📊",
      title: "Lead conversion report",
      subtitle: "Updated today · Salesforce",
    },
    {
      icon: "📈",
      title: "Monthly sales pipeline",
      subtitle: "Apr 2026 · Salesforce",
    },
    {
      icon: "🏆",
      title: "Top performers Q1",
      subtitle: "Q1 2026 · Salesforce",
    },
    {
      icon: "⚠️",
      title: "Closed lost analysis",
      subtitle: "Updated yesterday · Salesforce",
    },
    {
      icon: "🎯",
      title: "Source performance",
      subtitle: "Apr 2026 · Salesforce",
    },
    {
      icon: "💹",
      title: "Revenue forecast",
      subtitle: "Updated today · Salesforce",
    },
  ];

  // 🔥 EXPORT ALL REPORTS (CSV)
  const handleExportAll = () => {
    const csv = [
      "Title,Details",
      ...reports.map((r) => `${r.title},${r.subtitle}`),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "reports.csv";
    a.click();
  };

  // 🔥 DOWNLOAD SINGLE REPORT
  const handleDownload = (report) => {
    const content = `${report.title}\n${report.subtitle}`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${report.title}.txt`;
    a.click();
  };

  return (
    <div className="space-y-6">

      {/* 🔹 Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Reports</h1>
          <p className="text-sm text-gray-400">
            Last synced: 2 min ago · {reports.length} reports
          </p>
        </div>

        <button
          onClick={handleExportAll}
          className="bg-blue-600 px-4 py-2 rounded-lg text-sm"
        >
          Export All
        </button>
      </div>

      {/* 🔹 Reports List */}
      <div className="space-y-4">
        {reports.map((report, index) => (
          <div
            key={index}
            className="bg-[#16181F] border border-[#2A2C37] p-4 rounded-xl flex justify-between items-center"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <span className="text-2xl">{report.icon}</span>

              <div>
                <h3 className="text-sm font-semibold">
                  {report.title}
                </h3>
                <p className="text-xs text-gray-400">
                  {report.subtitle}
                </p>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              
              <button className="text-blue-400 text-sm hover:underline">
                View
              </button>

              <button
                onClick={() => handleDownload(report)}
                className="text-gray-300 text-sm hover:text-white"
              >
                ⬇ Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}