import { Metadata } from "next";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HomePageView from "./view";

export const metadata: Metadata = {
  title: "Dashboard | KYC Dashboard - GreatGood Challenge",
  description:
    "This is your dashboard for customer metrics",
};

export default function Home() {
  return (
    <DefaultLayout>
      <HomePageView />
    </DefaultLayout>
  );
}
