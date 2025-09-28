import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label"; // It's good practice to use the official Label component

export default function Signup() {
  const [role, setRole] = useState("company");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg"
      >
        <Card className="rounded-2xl border bg-white shadow-xl">
          <CardContent className="p-8">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-center text-3xl font-bold text-blue-700"
            >
              ProcureHub Signup
            </motion.h2>

            <div className="mb-6">
              <Label htmlFor="role-select" className="mb-2 block text-sm font-medium text-gray-600">
                Register As
              </Label>
              <Select value={role} onValueChange={(val) => setRole(val)}>
                <SelectTrigger id="role-select" className="w-full">
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="company">Contract Providing Company</SelectItem>
                  <SelectItem value="contractor">Contractor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <form className="space-y-5">
              <div>
                <Label htmlFor="name-input" className="mb-2 block text-sm font-medium text-gray-600">
                  {role === "company" ? "Company Name" : "Full Name"}
                </Label>
                <Input
                  id="name-input"
                  type="text"
                  placeholder={
                    role === "company" ? "Enter your company name" : "Enter your full name"
                  }
                />
              </div>

              {role === "company" && (
                <div>
                  <Label htmlFor="reg-num-input" className="mb-2 block text-sm font-medium text-gray-600">
                    Company Registration Number
                  </Label>
                  <Input id="reg-num-input" type="text" placeholder="Enter registration number" />
                </div>
              )}

              {role === "contractor" && (
                <div>
                  <Label htmlFor="skills-input" className="mb-2 block text-sm font-medium text-gray-600">
                    Skill Specialization
                  </Label>
                  <Input
                    id="skills-input"
                    type="text"
                    placeholder="e.g., Network Maintenance, Hardware Support"
                  />
                </div>
              )}

              <div>
                <Label htmlFor="email-input" className="mb-2 block text-sm font-medium text-gray-600">
                  Email
                </Label>
                <Input id="email-input" type="email" placeholder="Enter your email" />
              </div>

              <div>
                <Label htmlFor="password-input" className="mb-2 block text-sm font-medium text-gray-600">
                  Password
                </Label>
                <Input id="password-input" type="password" placeholder="Enter your password" />
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="mt-4 w-full rounded-xl bg-blue-700 py-2 text-white shadow-lg hover:bg-blue-800">
                  {role === "company" ? "Sign Up as Company" : "Sign Up as Contractor"}
                </Button>
              </motion.div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
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