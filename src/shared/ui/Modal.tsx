
"use client";
import * as Dialog from "@radix-ui/react-dialog";

export function Modal({ trigger, children }: any) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Content className="fixed inset-0 flex items-center justify-center bg-black/70">
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 w-[420px]">
          {children}
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
