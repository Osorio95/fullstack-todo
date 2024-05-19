"use client"

import { FC, PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export const Provider: FC<PropsWithChildren> = ({ children }) => {
    const client = new QueryClient()
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
} 
