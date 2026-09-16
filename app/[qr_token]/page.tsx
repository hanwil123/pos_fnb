import { CustomerPOS } from "@/components/customer-pos";
import { notFound } from "next/navigation";


export default async function Page({
  params,
}: {
  params: Promise<{ qr_token: string }>
}) {
  const { qr_token } = await params

  const res = await fetch(`http://localhost:8080/api/v1/table/${qr_token}`, {
    cache: 'no-store',
  })
  if (!res.ok) notFound()

  const json = await res.json()

  return <CustomerPOS table={json.data} />
}