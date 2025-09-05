'use client';
import React, { useEffect, useState } from "react";
import { assets } from "@assets/assets";
import Image from "next/image";
import { useAppContext } from "@context/AppContext";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Loading from "@components/Loading";
import { Order } from "types/types";

const MyOrders = () => {
  const { currency } = useAppContext();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
    setLoading(false);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-between px-6 md:px-16 lg:px-32 py-6 min-h-screen">
        <div className="space-y-5">
          <h2 className="text-lg font-medium mt-6">My Orders</h2>
          {loading ? (
            <Loading />
          ) : (
            <div className="max-w-5xl border-t border-gray-300 text-sm">
              {orders.length === 0 ? (
                <p className="text-gray-500 py-5">You have no orders yet.</p>
              ) : (
                <div className="divide-y divide-gray-300">
                  {orders.map((order, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr_2fr] gap-6 p-5"
                    >
                      {/* Col 1: Items */}
                      <div className="flex gap-4">
                        <Image
                          className="w-16 h-16 object-cover flex-shrink-0"
                          src={assets.box_icon}
                          alt="box_icon"
                        />
                        <div className="flex flex-col justify-center relative group">
                          <span className="font-medium text-base line-clamp-2">
                            {order.items
                              .map(
                                (item) =>
                                  `${item.product.name} x ${item.quantity}`
                              )
                              .join(", ")}
                          </span>
                          <span className="text-gray-600">
                            Items:{" "}
                            {order.items.reduce(
                              (sum, item) => sum + item.quantity,
                              0
                            )}
                          </span>
                        </div>
                      </div>

                      {/* Col 2: Address */}
                      <div className="text-gray-700">
                        <p className="font-medium">{order.address.fullName}</p>
                        <p className="truncate">{order.address.area}</p>
                        <p className="truncate">
                          {`${order.address.city}, ${order.address.state}`}
                        </p>
                        <p>{order.address.phoneNumber}</p>
                      </div>

                      {/* Col 3: Amount */}
                      <div className="flex items-center font-medium whitespace-nowrap">
                        {currency}
                        {order.amount.toFixed(2)}
                      </div>

                      {/* Col 4: Details */}
                      <div className="text-gray-600 space-y-1">
                        <p>Method: COD</p>
                        <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                        <p>Payment: Pending</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyOrders;
