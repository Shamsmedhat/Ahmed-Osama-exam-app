'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NextAuthProvider from './components/next-auth.provider';
import React from 'react';

const queryClient = new QueryClient();

type ProvidersProps = {
    children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <NextAuthProvider>
              {children}
            </NextAuthProvider>
        </QueryClientProvider>
    );
}
