# MYPITCOIN web frontend

This directory is the Vite/Vercel frontend for the MYPITCOIN repository. The parent repository remains the Bitcoin Core C++ source tree; it is not executed by Vercel.

## Local development

```bash
cd web
npm install
npm run dev
```

The dashboard currently uses clearly labeled illustrative demo data. Replace the demo values with a server-side API or a securely proxied Bitcoin Core RPC service before presenting live network data. Never expose Bitcoin Core RPC credentials in browser code or `VITE_*` variables.

## Vercel

Set the Vercel project **Root Directory** to `web`. Vercel will detect Vite automatically. The included `vercel.json` keeps client-side routes working on refresh.
