"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "../shared/firebase/firebaseapi";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Any initialization code here
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Rathburn Chemicals Inventory Management
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
          <p className="text-gray-600 mb-4">
            View inventory statistics and activity at a glance.
          </p>
          <Link href="/dashboard" className="text-blue-600 hover:underline">
            Go to Dashboard →
          </Link>
        </div>

        {/* Inventory Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-4">Inventory</h2>
          <p className="text-gray-600 mb-4">
            Manage materials, drums, and stock levels.
          </p>
          <Link href="/inventory" className="text-blue-600 hover:underline">
            Manage Inventory →
          </Link>
        </div>

        {/* Orders Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-4">Orders</h2>
          <p className="text-gray-600 mb-4">
            Create and track customer orders.
          </p>
          <Link href="/orders" className="text-blue-600 hover:underline">
            Manage Orders →
          </Link>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Migration in Progress</h2>
        <p className="text-gray-700">
          This application is currently being migrated to a new codebase. Some
          features may be temporarily unavailable.
        </p>
      </div>
    </div>
  );
}
