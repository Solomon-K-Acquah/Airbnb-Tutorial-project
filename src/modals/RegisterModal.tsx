"use client";

import { useAuthModal } from "@/store/useAuthModalStore";
import Modal from "./Modal";
import Input from "@/component/ui/Input";
import Button from "@/component/ui/Button";

export default function RegisterModal() {
  //zustand
  const { isRegisterOpen, closeRegister } = useAuthModal();

  return (
    <Modal title="Register" isOpen={isRegisterOpen} onClose={closeRegister}>
      {/* header */}
      <div className="mb-6 space-y-1">
        <h2 className="text-2xl font-bold text-gray-900">Welcome to Airbnb</h2>
        <p className="text-sm text-gray-500">Create an account</p>
      </div>

      {/* form */}
      <form className="space-y-8">
        <Input
          name="name"
          label="Name"
          type="text"
          value={""}
          onChange={() => {}}
        />
        <Input
          name="email"
          label="Email"
          type="email"
          value={""}
          onChange={() => {}}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          value={""}
          onChange={() => {}}
        />
        <Button type="submit">Continue</Button>

        {/* divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 text-gray-500">Or</span>
          </div>
        </div>
      </form>
    </Modal>
  );
}
