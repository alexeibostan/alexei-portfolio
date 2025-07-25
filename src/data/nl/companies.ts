export type Company = {
  name: string;
  period: string;
  url?: string;
};

export const companies: Company[] = [
  {
    name: "Deliverect",
    period: "Nov 2021 - Heden",
    url: "https://www.deliverect.com"
  },
  {
    name: "Bostan Software",
    period: "2024 - Heden"
  },
  {
    name: "Kirey Group",
    period: "Mei 2020 - Okt 2021",
    url: "https://www.kireygroup.com"
  },
  {
    name: "Dedagroup",
    period: "2019 - 2020",
    url: "https://www.dedagroup.it"
  },
  {
    name: "Mobilesoft",
    period: "Jul 2016 - Nov 2019",
    url: "https://www.mobilesoft.it"
  }
];
