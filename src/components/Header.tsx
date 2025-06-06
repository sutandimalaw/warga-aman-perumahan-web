
import { Users, Home, BarChart3, CreditCard } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-lg">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MonitorWarga</h1>
              <p className="text-sm text-muted-foreground">Sistem Monitoring Perumahan</p>
            </div>
          </div>
          
          <nav className="flex items-center space-x-6">
            <a href="/" className="flex items-center space-x-2 text-green-600 font-medium">
              <BarChart3 className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
              <Users className="w-5 h-5" />
              <span>Data Warga</span>
            </a>
            <a href="/payment" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
              <CreditCard className="w-5 h-5" />
              <span>Pembayaran</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
