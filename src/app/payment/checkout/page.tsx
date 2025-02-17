'use client';

import { Suspense } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { MotionDiv } from "@/components/animations/MotionDiv";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const amount = searchParams.get('amount') || "0";
  const currency = searchParams.get('currency') || "USD";

  const initialOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
    currency: currency,
    intent: "capture",
  };

  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
            currency_code: currency
          },
          description: "Payment for services"
        },
      ],
    });
  };

  const onApprove = async (data: any, actions: any) => {
    const details = await actions.order.capture();
    alert("Payment successful! Order ID: " + details.id);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Hero Image */}
      <div className="hidden lg:block w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 to-secondary-500/90 mix-blend-multiply z-10" />
        <Image
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Secure Checkout"
          className="w-full h-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 z-20 p-12 flex flex-col justify-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Secure Checkout Process
            </h2>
            <p className="text-xl text-white/90 max-w-md">
              Complete your transaction securely with PayPal. Your payment is protected
              by industry-leading encryption technology.
            </p>
          </MotionDiv>
        </div>
        {/* Decorative Elements */}
        <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl" />
        <div className="absolute -top-6 -right-6 w-64 h-64 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 rounded-full blur-3xl" />
      </div>

      {/* Right Section - PayPal Form */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full lg:w-1/2 min-h-screen flex items-center justify-center p-4 lg:p-12 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-100/10 to-background/0" />
        <div className="w-full py-16 max-w-md relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Complete Payment
              </span>
            </h2>
            <p className="mt-2 text-foreground/70">
              Amount: {amount} {currency}
            </p>
          </MotionDiv>

          <div className="bg-white/90 shadow-md backdrop-blur-sm p-6 rounded-xl space-y-6">
            {/* Disclaimer Section */}
            <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4 rounded">
              <div className="flex items-start space-x-3">
                <svg 
                  className="h-6 w-6 text-yellow-600 mt-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                  />
                </svg>
                <div>
                  <h3 className="font-medium text-yellow-800">Please Confirm</h3>
                  <p className="text-sm text-yellow-700 mt-1">
                    You are about to make a payment of <strong>{amount} {currency}</strong>. 
                    Please verify this amount before proceeding with the payment. This transaction 
                    cannot be reversed once completed.
                  </p>
                </div>
              </div>
            </div>

            <PayPalScriptProvider options={initialOptions}>
              <PayPalButtons 
                createOrder={createOrder}
                onApprove={onApprove}
                style={{ 
                  layout: "vertical",
                  shape: "rect",
                  color: "blue"
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}
