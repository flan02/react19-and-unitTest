"use client";

import { createContext, ReactNode } from "react";

export const ExampleContext = createContext("This is the default Context value with React19");

interface ExampleProviderProps {
  children: ReactNode;
  value: string;
}

export function ExampleProvider({ children, value }: ExampleProviderProps) {
  if (!value) value = "If default value fails this message will appear";
  // In react19 we don't need <ExampleContext.Provider /> anymore
  return <ExampleContext value={value}>{children}</ExampleContext>
}