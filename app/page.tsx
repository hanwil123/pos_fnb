import { CustomerPOS } from "@/components/customer-pos";


export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    qr_token?: string;
  }>;
}) {
  const params = await searchParams;

  return <CustomerPOS qrToken={params.qr_token} />;
}
