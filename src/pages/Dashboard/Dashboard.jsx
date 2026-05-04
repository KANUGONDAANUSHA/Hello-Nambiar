import { useState, useEffect } from "react";

export default function Dashboard() {
  const [timeline, setTimeline] = useState("Today");

  const [stats, setStats] = useState([]);
  const [leadSources, setLeadSources] = useState([]);
  const [weeklyTrend, setWeeklyTrend] = useState([]);

  const [loading, setLoading] = useState(true);

  const timelineOptions = [
    "Today",
    "This week",
    "This month",
    "90 days",
    "1 year",
  ];

  // 🔹 FETCH FROM BACKEND
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/dashboard");
        const data = await res.json();

        setStats(data.stats || []);
        setLeadSources(data.leadSources || []);
        setWeeklyTrend(data.weeklyTrend || []);
      } catch (err) {
        console.error("Dashboard error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  const pipeline = stats.slice(1);

  // 🔥 EXPORT FUNCTION (UPDATED to use API data)
  const handleExport = () => {
    const csv = [
      "Title,Value,Change",
      ...stats.map((s) => `${s.title},${s.value},${s.change}`),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "dashboard.csv";
    a.click();
  };

  if (loading) {
    return <div className="text-white p-6">Loading dashboard...</div>;
  }

  return (
    <div className="space-y-6">

      {/* 🔹 Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-sm text-gray-400">Salesforce Live Data</p>
        </div>

        <div className="flex gap-4 items-center">
          {/* 🔥 Export Button */}
          <button
            onClick={handleExport}
            className="bg-blue-600 px-4 py-2 rounded-lg text-sm"
          >
            Export CSV
          </button>

          {/* Timeline Filter */}
          <div className="flex gap-2 flex-wrap">
            {timelineOptions.map((item) => (
              <button
                key={item}
                onClick={() => setTimeline(item)}
                className={`px-3 py-1 rounded-md text-xs ${
                  timeline === item
                    ? "bg-blue-600 text-white"
                    : "bg-[#1E2029] text-gray-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-[#16181F] border border-[#2A2C37] p-4 rounded-xl"
          >
            <p className="text-gray-400 text-xs">{item.title}</p>
            <h2 className="text-xl font-bold mt-1">{item.value}</h2>
            <p
              className={`text-xs mt-1 ${
                item.change.includes("↑")
                  ? "text-green-400"
                  : item.change.includes("↓")
                  ? "text-red-400"
                  : "text-gray-400"
              }`}
            >
              {item.change} vs last period
            </p>
          </div>
        ))}
      </div>

      {/* 🔹 Pipeline */}
      <div className="bg-[#16181F] border border-[#2A2C37] p-6 rounded-xl">
        <h3 className="text-sm font-semibold mb-4">Pipeline by stage</h3>

        <div className="grid grid-cols-4 gap-4 text-center">
          {pipeline.map((item, i) => (
            <div key={i}>
              <p className="text-gray-400 text-xs">{item.title}</p>
              <p className="text-lg font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Weekly Trend */}
      <div className="bg-[#16181F] border border-[#2A2C37] p-6 rounded-xl">
        <h3 className="text-sm font-semibold mb-4">
          Weekly lead trend
        </h3>

        <div className="flex justify-between text-xs text-gray-400">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
            (day) => (
              <div key={day}>{day}</div>
            )
          )}
        </div>

        <div className="mt-4 h-32 flex items-end gap-2">
          {weeklyTrend.map((h, i) => (
            <div
              key={i}
              className="bg-blue-500 w-full rounded"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* 🔹 Lead Source */}
      <div className="bg-[#16181F] border border-[#2A2C37] p-6 rounded-xl">

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-semibold">Lead source</h3>

          <div className="flex gap-2">
            <select className="bg-[#1E2029] text-sm px-2 py-1 rounded">
              <option>All sources</option>
              <option>Marketing leads</option>
              <option>Channel partner</option>
              <option>Walk-in leads</option>
            </select>

            {/* 🔥 Synced Timeline */}
            <select
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="bg-[#1E2029] text-sm px-2 py-1 rounded"
            >
              {timelineOptions.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {leadSources.map((item, i) => (
            <div
              key={i}
              className="bg-[#1E2029] p-4 rounded-lg flex items-center gap-4"
            >
              <div className="text-2xl">{item.icon}</div>

              <div>
                <p className="text-lg font-bold">{item.value}</p>
                <p className="text-xs text-gray-400">{item.label}</p>
                <p
                  className={`text-xs ${
                    item.change.includes("↑")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {item.change} vs last
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}