
export const getStatusStyle = (status: any) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return "text-green-700 bg-green-100";
      case "pending":
        return "text-yellow-700 bg-yellow-100";
      case "cancelled":
        return "text-red-700 bg-red-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

export const safeValue = (value: any) => (value ? value : "NA");