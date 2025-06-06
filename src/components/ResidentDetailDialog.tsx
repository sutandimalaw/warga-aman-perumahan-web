
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Users, Calendar, CreditCard } from "lucide-react";

interface Resident {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  status: 'aktif' | 'tidak_aktif' | 'pindah';
  lastSeen: string;
  family_members: number;
  joinDate?: string;
  paymentStatus?: {
    security: 'paid' | 'unpaid' | 'overdue';
    cleaning: 'paid' | 'unpaid' | 'overdue';
    lastPayment: string;
  };
}

interface ResidentDetailDialogProps {
  resident: Resident | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'aktif':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Aktif</Badge>;
    case 'tidak_aktif':
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Tidak Aktif</Badge>;
    case 'pindah':
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Pindah</Badge>;
    default:
      return <Badge variant="secondary">Unknown</Badge>;
  }
};

const getPaymentBadge = (status: string) => {
  switch (status) {
    case 'paid':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Lunas</Badge>;
    case 'unpaid':
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Belum Bayar</Badge>;
    case 'overdue':
      return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Terlambat</Badge>;
    default:
      return <Badge variant="secondary">-</Badge>;
  }
};

const ResidentDetailDialog = ({ resident, open, onOpenChange }: ResidentDetailDialogProps) => {
  if (!resident) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Detail Warga</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-lg text-foreground">{resident.name}</h3>
              <p className="text-sm text-muted-foreground">ID: {resident.id.toString().padStart(3, '0')}</p>
              <div className="mt-2">
                {getStatusBadge(resident.status)}
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Terakhir terlihat</p>
              <p className="font-medium">{resident.lastSeen}</p>
            </div>
          </div>

          <Separator />

          {/* Contact & Address */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Informasi Kontak</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Alamat</p>
                  <p className="font-medium">{resident.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Anggota Keluarga</p>
                  <p className="font-medium">{resident.family_members} orang</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Telepon</p>
                  <p className="font-medium">{resident.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{resident.email}</p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Payment Status */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5 text-green-600" />
              <h4 className="font-semibold text-foreground">Status Pembayaran Iuran</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Iuran Keamanan</span>
                  {getPaymentBadge(resident.paymentStatus?.security || 'unpaid')}
                </div>
                <p className="text-sm text-muted-foreground">Rp 50.000 / bulan</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Iuran Kebersihan</span>
                  {getPaymentBadge(resident.paymentStatus?.cleaning || 'unpaid')}
                </div>
                <p className="text-sm text-muted-foreground">Rp 30.000 / bulan</p>
              </div>
            </div>
            {resident.paymentStatus?.lastPayment && (
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Pembayaran terakhir: {resident.paymentStatus.lastPayment}</span>
              </div>
            )}
          </div>

          <Separator />

          {/* Actions */}
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Tutup
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Kirim Pesan
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResidentDetailDialog;
