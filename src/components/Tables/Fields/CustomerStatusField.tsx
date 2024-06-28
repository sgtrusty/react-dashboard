import { CustomerStatus } from "@/types/customer";
import {
  XMarkIcon,
  CheckBadgeIcon,
  ArrowPathIcon,
  QuestionMarkCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";

const StatusDictionary : {[key in CustomerStatus]? : string} = {
  [CustomerStatus.accepted]: "User Accepted KYC Invitation",
  [CustomerStatus.waiting]: "Customer Processing"
}

function CustomerStatusIcon({ status }: any) {
  const iconClass = "h-5 w-5 mr-1";

  switch (status) {
    case CustomerStatus.accepted:
    case CustomerStatus.waiting:
      return <ExclamationCircleIcon className={iconClass} />;  
    case CustomerStatus.rejected:
    case CustomerStatus.cancelled:
      return <XMarkIcon className={iconClass} />;
    case CustomerStatus.ready:
      return <ArrowPathIcon className={iconClass} />;
    case CustomerStatus.approved:
      return <CheckBadgeIcon className={iconClass} />;
  }
  return <QuestionMarkCircleIcon className={iconClass} />;
}

export default function CustomerStatusField ({ status }: { status: CustomerStatus }) {
  let textColor: string = "text-gray-300";
  if (status === CustomerStatus.approved) {
    textColor = "bg-success text-success";
  } else if (status === CustomerStatus.accepted || status === CustomerStatus.waiting) {
    textColor = "bg-warning text-warning";
  } else if (status === CustomerStatus.cancelled || status === CustomerStatus.rejected) {
    textColor = "bg-danger text-danger";
  }

  return (
    <>
      <p
        className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${textColor}`}
      >
        <CustomerStatusIcon status={status} />
        {StatusDictionary[status] ?? CustomerStatus[status].toUpperCase()}
      </p>
    </>
  );
};
