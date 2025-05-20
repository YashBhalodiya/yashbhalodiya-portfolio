// src/components/hooks/use-toast.ts

import * as React from "react";
import { useToast as useSonnerToast } from "@/components/ui/use-toast";
import { ToastActionElement } from "@/components/ui/toast";

export function useToast() {
  const { toast } = useSonnerToast();

  return {
    toast: (props: {
      title?: string;
      description: string;
      action?: ToastActionElement;
      variant?: "default" | "destructive";
    }) => toast(props),
  };
}
