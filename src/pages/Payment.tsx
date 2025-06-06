
import Header from "@/components/Header";
import PaymentCard from "@/components/PaymentCard";
import { Shield, Trash2, Calendar, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
  const { toast } = useToast();
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("transfer");
  
  const paymentTypes = [
    {
      id: "security",
      title: "Iuran Keamanan",
      amount: "Rp 50.000",
      period: "Per Bulan",
      description: "Biaya untuk penjagaan keamanan 24 jam dan pemeliharaan sistem keamanan perumahan",
      icon: Shield,
      isPaid: false,
      dueDate: "15 Jan 2025"
    },
    {
      id: "cleaning",
      title: "Iuran Kebersihan",
      amount: "Rp 30.000",
      period: "Per Bulan",
      description: "Biaya untuk pemeliharaan kebersihan jalan, taman, dan fasilitas umum perumahan",
      icon: Trash2,
      isPaid: true,
      dueDate: "15 Jan 2025"
    }
  ];

  const handlePayment = (paymentId: string) => {
    setSelectedPayment(paymentId);
  };

  const processPayment = () => {
    if (!selectedPayment) return;
    
    toast({
      title: "Pembayaran Berhasil!",
      description: "Iuran Anda telah berhasil dibayar. Terima kasih atas partisipasinya.",
    });
    
    setSelectedPayment(null);
  };

  const selectedPaymentData = paymentTypes.find(p => p.id === selectedPayment);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Pembayaran Iuran Warga</h2>
          <p className="text-muted-foreground">Kelola pembayaran iuran bulanan untuk keamanan dan kebersihan perumahan</p>
        </div>

        {/* Payment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center space-x-3 mb-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-muted-foreground">Bulan Ini</span>
            </div>
            <p className="text-2xl font-bold text-foreground">Rp 80.000</p>
            <p className="text-sm text-muted-foreground">Total iuran January 2025</p>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center space-x-3 mb-2">
              <CreditCard className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-muted-foreground">Sudah Dibayar</span>
            </div>
            <p className="text-2xl font-bold text-green-600">Rp 30.000</p>
            <p className="text-sm text-muted-foreground">37.5% dari total</p>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
            <div className="flex items-center space-x-3 mb-2">
              <Shield className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium text-muted-foreground">Belum Dibayar</span>
            </div>
            <p className="text-2xl font-bold text-red-600">Rp 50.000</p>
            <p className="text-sm text-muted-foreground">62.5% dari total</p>
          </div>
        </div>

        {/* Payment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {paymentTypes.map((payment) => (
            <PaymentCard
              key={payment.id}
              title={payment.title}
              amount={payment.amount}
              period={payment.period}
              description={payment.description}
              icon={payment.icon}
              isPaid={payment.isPaid}
              dueDate={payment.dueDate}
              onPayClick={() => handlePayment(payment.id)}
            />
          ))}
        </div>

        {/* Payment Form */}
        {selectedPayment && selectedPaymentData && (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Pembayaran {selectedPaymentData.title}</CardTitle>
              <CardDescription>
                Jumlah: {selectedPaymentData.amount} - {selectedPaymentData.period}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="payment-method">Metode Pembayaran</Label>
                <select 
                  id="payment-method"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="transfer">Transfer Bank</option>
                  <option value="ewallet">E-Wallet</option>
                  <option value="cash">Tunai</option>
                </select>
              </div>
              
              {paymentMethod === "transfer" && (
                <>
                  <div>
                    <Label htmlFor="bank-account">Nomor Rekening Pengirim</Label>
                    <Input id="bank-account" placeholder="Masukkan nomor rekening" />
                  </div>
                  <div>
                    <Label htmlFor="account-name">Nama Pemilik Rekening</Label>
                    <Input id="account-name" placeholder="Masukkan nama pemilik rekening" />
                  </div>
                </>
              )}
              
              <div>
                <Label htmlFor="notes">Catatan (Opsional)</Label>
                <Input id="notes" placeholder="Masukkan catatan pembayaran" />
              </div>
              
              <div className="flex space-x-3">
                <Button 
                  onClick={processPayment}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  Konfirmasi Pembayaran
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedPayment(null)}
                  className="flex-1"
                >
                  Batal
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Payment;
