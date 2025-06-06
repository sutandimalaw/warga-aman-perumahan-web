
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Phone, Mail } from "lucide-react";

interface Resident {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  status: 'aktif' | 'tidak_aktif' | 'pindah';
  lastSeen: string;
  family_members: number;
}

const mockResidents: Resident[] = [
  {
    id: 1,
    name: "Ahmad Wijaya",
    address: "Blok A No. 15",
    phone: "08123456789",
    email: "ahmad@email.com",
    status: "aktif",
    lastSeen: "2 jam yang lalu",
    family_members: 4
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    address: "Blok B No. 22",
    phone: "08198765432",
    email: "siti@email.com",
    status: "aktif",
    lastSeen: "5 menit yang lalu",
    family_members: 3
  },
  {
    id: 3,
    name: "Budi Santoso",
    address: "Blok C No. 8",
    phone: "08187654321",
    email: "budi@email.com",
    status: "tidak_aktif",
    lastSeen: "3 hari yang lalu",
    family_members: 2
  },
  {
    id: 4,
    name: "Maya Indira",
    address: "Blok A No. 31",
    phone: "08156789012",
    email: "maya@email.com",
    status: "aktif",
    lastSeen: "1 jam yang lalu",
    family_members: 5
  },
  {
    id: 5,
    name: "Rudi Hartono",
    address: "Blok B No. 7",
    phone: "08134567890",
    email: "rudi@email.com",
    status: "pindah",
    lastSeen: "1 minggu yang lalu",
    family_members: 1
  }
];

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

const ResidentTable = () => {
  return (
    <div className="bg-card rounded-xl shadow-sm border border-border">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Data Warga Terbaru</h3>
        <p className="text-sm text-muted-foreground mt-1">Monitoring aktivitas dan status warga perumahan</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 font-medium text-muted-foreground">Nama</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Alamat</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Kontak</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Terakhir Terlihat</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Anggota Keluarga</th>
              <th className="text-left p-4 font-medium text-muted-foreground">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {mockResidents.map((resident) => (
              <tr key={resident.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="p-4">
                  <div>
                    <p className="font-medium text-foreground">{resident.name}</p>
                    <p className="text-sm text-muted-foreground">ID: {resident.id.toString().padStart(3, '0')}</p>
                  </div>
                </td>
                <td className="p-4">
                  <p className="text-foreground">{resident.address}</p>
                </td>
                <td className="p-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-foreground">{resident.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{resident.email}</span>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  {getStatusBadge(resident.status)}
                </td>
                <td className="p-4">
                  <p className="text-sm text-foreground">{resident.lastSeen}</p>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {resident.family_members}
                  </span>
                </td>
                <td className="p-4">
                  <Button size="sm" variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">
                    <Eye className="w-4 h-4 mr-1" />
                    Detail
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResidentTable;
