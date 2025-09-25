import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function Signup() {
  const [role, setRole] = useState("company"); // default is company

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg"
      >
        <Card className="shadow-xl rounded-2xl border bg-white">
          <CardContent className="p-8">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-center text-blue-700 mb-6"
            >
              ProcureHub Signup
            </motion.h2>

            {/* Role Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-600">
                Register As
              </label>
              <Select value={role} onValueChange={(val) => setRole(val)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="company">Contract Providing Company</SelectItem>
                  <SelectItem value="contractor">Contractor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Dynamic Form Fields */}
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600">
                  {role === "company" ? "Company Name" : "Full Name"}
                </label>
                <Input type="text" placeholder={role === "company" ? "Enter your company name" : "Enter your full name"} />
              </div>

              {role === "company" && (
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-600">
                    Company Registration Number
                  </label>
                  <Input type="text" placeholder="Enter registration number" />
                </div>
              )}

              {role === "contractor" && (
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-600">
                    Skill Specialization
                  </label>
                  <Input type="text" placeholder="e.g. Network Maintenance, Hardware Support" />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-600">Password</label>
                <Input type="password" placeholder="Enter your password" />
              </div>

              {/* Submit */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-xl py-2 mt-4 shadow-lg">
                  {role === "company" ? "Sign Up as Company" : "Sign Up as Contractor"}
                </Button>
              </motion.div>
            </form>

            {/* Footer */}
            <p className="text-sm text-center text-gray-500 mt-6">
              Already have an account?{" "}
              <a href="/login" className="text-blue-700 hover:underline">
                Login here
              </a>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
