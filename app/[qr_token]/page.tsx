import { CustomerPOS } from "@/components/customer-pos";
import { notFound } from "next/navigation";


export default async function Page({
  params,
}: {
  params: Promise<{ qr_token: string }>
}) {
  const { qr_token } = await params

  const res = await fetch(`https://d66f-180-251-183-213.ngrok-free.app/api/v1/table/${qr_token}`, {
    cache: 'no-store',
  })
  if (!res.ok) notFound()

  const json = await res.json()

  return <CustomerPOS table={json.data} />
}