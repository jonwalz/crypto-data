export type CURRENCIES_RESPONSE = {
  data: any;
};

export type CURRENCY_DETAIL_RESPONSE = {
  data: {
    data: {
      project: {
        name: string;
        priceUsd: number;
        slug: string;
        ticker: string;
      };
    };
  };
};
