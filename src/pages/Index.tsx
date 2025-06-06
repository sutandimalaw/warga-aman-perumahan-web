
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import ResidentTable from "@/components/ResidentTable";
import { Users, Home, UserCheck, AlertTriangle, TrendingUp, Activity } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard Monitoring Warga</h2>
          <p className="text-muted-foreground">Pantau aktivitas dan status warga perumahan secara real-time</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Warga"
            value="247"
            icon={Users}
            subtitle="Terdaftar aktif"
            trend="+5 dari bulan lalu"
            trendUp={true}
          />
          <StatsCard
            title="Rumah Terisi"
            value="89%"
            icon={Home}
            subtitle="dari 156 unit"
            trend="+2% dari bulan lalu"
            trendUp={true}
          />
          <StatsCard
            title="Warga Aktif"
            value="198"
            icon={UserCheck}
            subtitle="Online hari ini"
            trend="Stabil"
            trendUp={true}
          />
          <StatsCard
            title="Perlu Perhatian"
            value="12"
            icon={AlertTriangle}
            subtitle="Tidak aktif >7 hari"
            trend="-3 dari minggu lalu"
            trendUp={false}
          />
        </div>

        {/* Activity Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Aktivitas Mingguan</h3>
                <Activity className="w-5 h-5 text-green-600" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium text-foreground">Senin - Jumat</span>
                  <span className="text-sm text-green-600 font-semibold">Aktivitas Tinggi</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <span className="text-sm font-medium text-foreground">Sabtu - Minggu</span>
                  <span className="text-sm text-yellow-600 font-semibold">Aktivitas Sedang</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Trending</h3>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Warga Baru Bulan Ini</p>
                <p className="text-2xl font-bold text-green-600">+8</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tingkat Kehadiran</p>
                <p className="text-2xl font-bold text-foreground">92%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Residents Table */}
        <ResidentTable />
      </main>
    </div>
  );
};

export default Index;
