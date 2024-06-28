export type CustomerData = {
  created: Date;
  avatar?: string;
  name: string;
  email: string;
  type: CustomerTypes;
  riskScore?: CustomerRiskScore; // Not calculated, low, medium, high
  status: CustomerStatus;
  hasMoreActions?: boolean;
};

export enum CustomerTypes {
  aiscan2,
  norm,
  predige,
}
export enum CustomerRiskScore {
  low,
  medium,
  high,
}
export enum CustomerStatus {
  // customer awaiting interaction
  accepted, // "User Accepted KYC Invitation"
  waiting, // "Customer Processing"
  // system overrides
  ready,
  approved,
  rejected,
  cancelled,
}
export const CustomerDataColors = [
  "#28a745",
  "#ff6347",
  "#dc3545",
  "#ffeb3b",
  "#17a2b8",
];
export const CustomerSeedData: CustomerData[] = [
  {
    created: new Date("2024-05-15T14:12:27"),
    name: "KÁROLY-EDWARD RÁCZ",
    email: "karoly.edward.racz@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.low,
    status: CustomerStatus.approved,
    avatar: "user-11.png",
  },
  {
    created: new Date("2024-02-15T14:02:06"),
    name: "JÁNOS KOVÁCS",
    email: "janos.kovacs@example.com",
    type: CustomerTypes.aiscan2,
    status: CustomerStatus.waiting,
    avatar: "user-02.png",
  },
  {
    created: new Date("2024-05-03T08:57:14"),
    name: "LÁSZLÓ NAGY",
    email: "laszlo.nagy@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.low,
    status: CustomerStatus.approved,
    avatar: "user-03.png",
  },
  {
    created: new Date("2024-04-03T08:33:55"),
    name: "ANDRÁS SZABÓ",
    email: "andras.szabo@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.low,
    status: CustomerStatus.approved,
    avatar: "user-04.png",
  },
  {
    created: new Date("2024-02-03T08:23:24"),
    name: "BÁLINT TÓTH",
    email: "balint.toth@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.low,
    status: CustomerStatus.approved,
    avatar: "user-05.png",
  },
  {
    created: new Date("2024-01-01T10:45:58"),
    name: "GABRIELLA HORVÁTH",
    email: "gabriella.horvath@example.com",
    type: CustomerTypes.aiscan2,
    status: CustomerStatus.accepted,
    avatar: "user-06.png",
  },
  {
    created: new Date("2024-03-22T09:57:47"),
    name: "PÉTER KISS",
    email: "peter.kiss@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.low,
    status: CustomerStatus.approved,
    hasMoreActions: true,
    avatar: "user-07.png",
  },
  {
    created: new Date("2024-05-22T09:53:16"),
    name: "ISTVÁN VARGA",
    email: "istvan.varga@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.low,
    status: CustomerStatus.approved,
    avatar: "user-08.png",
  },
  {
    created: new Date("2024-06-21T10:15:32"),
    name: "ZOLTÁN LUKÁCS",
    email: "zoltan.lukacs@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.high,
    status: CustomerStatus.rejected,
    avatar: "user-09.png",
  },
  {
    created: new Date("2024-01-20T15:22:45"),
    name: "ATTILA FARKAS",
    email: "attila.farkas@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.medium,
    status: CustomerStatus.cancelled,
    hasMoreActions: true,
    avatar: "user-10.png",
  },
  {
    created: new Date("2024-02-19T12:18:25"),
    name: "NIKOLETT MOLNÁR",
    email: "nikolett.molnar@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.low,
    status: CustomerStatus.ready,
    avatar: "user-11.png",
  },
  {
    created: new Date("2024-01-18T14:45:23"),
    name: "GÁBOR BALOGH",
    email: "gabor.balogh@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.low,
    status: CustomerStatus.ready,
    avatar: "user-12.png",
  },
  {
    created: new Date("2023-12-17T16:27:58"),
    name: "ANNA NÉMETH",
    email: "anna.nemeth@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.low,
    status: CustomerStatus.waiting,
    avatar: "user-13.png",
  },
  {
    created: new Date("2024-02-16T10:02:47"),
    name: "ÁDÁM FEHÉR",
    email: "adam.feher@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.low,
    status: CustomerStatus.waiting,
    avatar: "user-01.png",
  },
  {
    created: new Date("2024-02-15T11:58:12"),
    name: "LÁSZLÓ FODOR",
    email: "laszlo.fodor@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.low,
    status: CustomerStatus.ready,
    avatar: "user-02.png",
  },
  {
    created: new Date("2024-02-14T09:47:36"),
    name: "TAMÁS BODNÁR",
    email: "tamas.bodnar@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.low,
    status: CustomerStatus.waiting,
    avatar: "user-03.png",
  },
  {
    created: new Date("2024-02-13T13:25:48"),
    name: "JUDIT TAKÁCS",
    email: "judit.takacs@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.low,
    status: CustomerStatus.ready,
    avatar: "user-04.png",
  },
  {
    created: new Date("2024-01-12T11:37:54"),
    name: "KRISZTIÁN BÍRÓ",
    email: "krisztian.biro@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.low,
    status: CustomerStatus.waiting,
    avatar: "user-05.png",
  },
  {
    created: new Date("2024-04-11T17:18:29"),
    name: "ZSÓFIA SIPOS",
    email: "zsofia.sipos@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.low,
    status: CustomerStatus.waiting,
    avatar: "user-06.png",
  },
  {
    created: new Date("2024-05-10T09:43:28"),
    name: "BALÁZS SIMON",
    email: "balazs.simon@example.com",
    type: CustomerTypes.aiscan2,
    riskScore: CustomerRiskScore.low,
    status: CustomerStatus.ready,
    avatar: "user-07.png",
  },
  // ... (other rows)
];
