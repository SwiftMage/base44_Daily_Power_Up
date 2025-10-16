import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client without authentication requirement for public landing page
export const base44 = createClient({
  appId: "68ed5ad37e872e305c2f8b5e",
  requiresAuth: false // No authentication required for public website
});
