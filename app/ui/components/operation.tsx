import React from "react";

type OperationType = "deposito" | "transferencia" | "pagamento";

interface OperationProps {
  operation: OperationType;
}

const Operation: React.FC<OperationProps> = ({ operation }) => {
  const baseClasses =
    "w-fit ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium";

  const operationStyles = {
    deposito: `${baseClasses} bg-green-500 text-white`,
    transferencia: `${baseClasses} bg-yellow-500 text-gray-600`,
    pagamento: `${baseClasses} bg-red-500 text-white`,
  };

  const operationText = {
    deposito: "depósito",
    transferencia: "transferência",
    pagamento: "pagamento",
  };

  return (
    <label htmlFor={operation} className={operationStyles[operation]}>
      {operationText[operation]}
    </label>
  );
};

export default Operation;
