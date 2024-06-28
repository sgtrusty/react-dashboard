import { Metadata } from "next";
import Calendar from "@/components/Calendar/Calendar";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Calendar | KYC Dashboard - GreatGood Challenge",
  description:
    "This is your calendar for customer metrics",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName="Calendar" />

      <Calendar />
    </div>
    </DefaultLayout>
  );
};

export default CalendarPage;
