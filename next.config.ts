import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 👈 أضف هذا السطر هنا
  images: {
    unoptimized: true, // 👈 يفضل إضافة هذا السطر أيضاً لمنع أخطاء الصور الثابتة في الـ export
  },
};

export default nextConfig;
