
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaymentCardProps {
  title: string;
  amount: string;
  period: string;
  description: string;
  icon: LucideIcon;
  onPayClick: () => void;
  isPaid?: boolean;
  dueDate?: string;
}

const PaymentCard = ({ 
  title, 
  amount, 
  period, 
  description, 
  icon: Icon, 
  onPayClick, 
  isPaid = false,
  dueDate 
}: PaymentCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
            <Icon className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{period}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-foreground">{amount}</p>
          {dueDate && (
            <p className="text-sm text-muted-foreground">Jatuh tempo: {dueDate}</p>
          )}
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {isPaid ? (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
              ✓ Sudah Dibayar
            </span>
          ) : (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
              ⏳ Belum Dibayar
            </span>
          )}
        </div>
        
        <Button 
          onClick={onPayClick}
          disabled={isPaid}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          {isPaid ? "Lunas" : "Bayar Sekarang"}
        </Button>
      </div>
    </div>
  );
};

export default PaymentCard;
