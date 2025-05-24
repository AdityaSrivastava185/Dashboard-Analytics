"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import orders from "@/data/pizzaOrder.json";
import { getStatusStyle } from "@/utils/getStatusStyle";
import { safeValue } from "@/utils/getStatusStyle";
import { ORDERS_PER_PAGE } from "@/constants/TableConfig";


export default function OrdersTableWithPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(orders.length / ORDERS_PER_PAGE);
  const user = useUser();

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedOrders = orders.slice(
    (currentPage - 1) * ORDERS_PER_PAGE,
    currentPage * ORDERS_PER_PAGE
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">
        HELLO {user.user?.fullName} 👋
      </h2>
      <h2 className="text-xl font-semibold mb-4">Pizza Orders🍕🍕</h2>
      <div className="flex flex-row items-center justify-start"></div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Order Date</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Pizza Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedOrders.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{safeValue(order.orderId)}</TableCell>
              <TableCell>{safeValue(order.customerName)}</TableCell>
              <TableCell>{safeValue(order.orderDate)}</TableCell>
              <TableCell>{safeValue(order.quantity)}</TableCell>
              <TableCell>{safeValue(order.pizzaType)}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-md text-sm font-medium ${getStatusStyle(
                    order.status
                  )}`}
                >
                  {safeValue(order.status)}
                </span>
              </TableCell>
              <TableCell>{safeValue(order.email)}</TableCell>
              <TableCell>{safeValue(order.phone)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  isActive={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
