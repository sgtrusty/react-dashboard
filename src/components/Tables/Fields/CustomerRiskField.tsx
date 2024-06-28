import { CustomerRiskScore } from "@/types/customer";
import {
  ShieldExclamationIcon,
  CheckBadgeIcon,
  ExclamationCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";

function CustomerRiskIcon({ riskScore }: any) {
  const iconClass = "h-5 w-5 mr-1";

  switch (riskScore) {
    case CustomerRiskScore.low:
      return <CheckBadgeIcon className={iconClass} />;
    case CustomerRiskScore.medium:
      return <ExclamationCircleIcon className={iconClass} />;
    case CustomerRiskScore.high:
      return <ShieldExclamationIcon className={iconClass} />;
  }
  return <QuestionMarkCircleIcon className={iconClass} />;
}

export default function CustomerRiskField ({ riskScore }: { riskScore: any }) {
  let textColor: string = "bg-gray-300 text-gray-300";
  if (riskScore === CustomerRiskScore.low) {
    textColor = "bg-success text-success";
  } else if (riskScore === CustomerRiskScore.high) {
    textColor = "bg-danger text-danger";
  } else if (riskScore === CustomerRiskScore.medium) {
    textColor = "bg-warning text-warning";
  }

  return (
    <>
      <p
        className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${textColor}`}
      >
        <CustomerRiskIcon riskScore={riskScore} />
        {riskScore !== undefined
          ? CustomerRiskScore[riskScore].toUpperCase()
          : "Not calculated"}
      </p>
    </>
  );
};
