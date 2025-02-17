"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { MotionDiv } from "@/components/animations/MotionDiv";

const formSchema = z.object({
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid amount greater than 0",
  }),
  currency: z.string().min(1, "Please select a currency"),
});

export default function PaymentPage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      currency: "USD",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const searchParams = new URLSearchParams({
      amount: values.amount,
      currency: values.currency,
    });
    router.push(`/payment/checkout?${searchParams.toString()}`);
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Hero Image */}
      <div className="hidden lg:block w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/90 to-secondary-500/90 mix-blend-multiply z-10" />
        <Image
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Enterprise Solutions"
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
              Secure Enterprise Payments
            </h2>
            <p className="text-xl text-white/90 max-w-md">
              Experience seamless transactions with our AI-powered payment
              processing system, backed by enterprise-grade security and 24/7
              support.
            </p>
          </MotionDiv>
        </div>
        {/* Decorative Elements */}
        <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl" />
        <div className="absolute -top-6 -right-6 w-64 h-64 bg-gradient-to-r from-secondary-500/10 to-primary-500/10 rounded-full blur-3xl" />
      </div>

      {/* Right Section - Form */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full lg:w-1/2 min-h-screen flex items-center justify-center p-4 lg:p-12 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-100/10 to-background/0" />
        <div className="w-full max-w-md relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Payment Details
              </span>
            </h2>
            <p className="mt-2 text-foreground/70">
              Complete your secure transaction
            </p>
          </MotionDiv>

          <div className="bg-white/90 shadow-md backdrop-blur-sm p-6 rounded-xl">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter amount"
                          type="number"
                          step="0.01"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="currency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Currency</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="USD">USD - US Dollar</SelectItem>
                          <SelectItem value="EUR">EUR - Euro</SelectItem>
                          <SelectItem value="GBP">
                            GBP - British Pound
                          </SelectItem>
                          <SelectItem value="AUD">
                            AUD - Australian Dollar
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <MotionDiv
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <button
                    className="w-full py-3 rounded-lg font-medium text-white 
                      bg-gradient-to-r from-primary-500 to-secondary-500
                      hover:from-primary-600 hover:to-secondary-600
                      transition-all duration-200 transform hover:shadow-lg
                      border border-transparent"
                    type="submit"
                  >
                    Proceed to Payment
                  </button>
                </MotionDiv>
              </form>
            </Form>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}
