import React from "react";
// আমরা একটু পরে যে কম্পোনেন্টটি বানাবো, সেটি এখানে ইম্পোর্ট করছি
import AppDetailsClient from "../../components/AppDetailsClient";

export const dynamic = "force-dynamic";

export default async function AppDetailsPage({ params }) {
  // সার্ভার সাইড থেকে params সরাসরি রেজলভ করা হচ্ছে
  const resolvedParams = await params;
  const appId = resolvedParams?.id;

  return <AppDetailsClient appId={appId} />;
}
