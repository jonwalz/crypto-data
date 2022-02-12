export function formatCurrencies(resp) {
  return resp.map((item) => {
    const { id, name, market_cap, price, symbol, ["1d"]: oneDay } = item;

    return {
      id,
      name,
      marketcapUsd: market_cap,
      priceUsd: price,
      symbol: symbol,
      ticker: symbol,
      volumeChange24h: oneDay.volume,
    };
  });
}

// Nomics Item example
// const item = {
//   id: "BTC",
//   currency: "BTC",
//   symbol: "BTC",
//   name: "Bitcoin",
//   logo_url:
//     "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg",
//   status: "active",
//   price: "42361.32402618",
//   price_date: "2022-02-12T00:00:00Z",
//   price_timestamp: "2022-02-12T05:59:00Z",
//   circulating_supply: "18955318",
//   max_supply: "21000000",
//   market_cap: "802972367817",
//   market_cap_dominance: "0.4087",
//   num_exchanges: "409",
//   num_pairs: "85227",
//   num_pairs_unmapped: "6908",
//   first_candle: "2011-08-18T00:00:00Z",
//   first_trade: "2011-08-18T00:00:00Z",
//   first_order_book: "2017-01-06T00:00:00Z",
//   rank: "1",
//   rank_delta: "0",
//   high: "67600.51752421",
//   high_timestamp: "2021-11-08T00:00:00Z",
//   "1d": {
//     volume: "30019815612.71",
//     price_change: "-1008.60199648",
//     price_change_pct: "-0.0233",
//     volume_change: "-17465576936.30",
//     volume_change_pct: "-0.3678",
//     market_cap_change: "-19078818206.17",
//     market_cap_change_pct: "-0.0232",
//   },
//   "7d": {
//     volume: "213134929749.80",
//     price_change: "932.56362014",
//     price_change_pct: "0.0225",
//     volume_change: "25290284389.92",
//     volume_change_pct: "0.1346",
//     market_cap_change: "17932323996.62",
//     market_cap_change_pct: "0.0228",
//   },
//   "30d": {
//     volume: "961007402472.27",
//     price_change: "-286.23643917",
//     price_change_pct: "-0.0067",
//     volume_change: "-87633375954.77",
//     volume_change_pct: "-0.0836",
//     market_cap_change: "-4241465268.66",
//     market_cap_change_pct: "-0.0053",
//   },
//   "365d": {
//     volume: "20997832227378.36",
//     price_change: "-6360.29841653",
//     price_change_pct: "-0.1305",
//     volume_change: "7531393040005.87",
//     volume_change_pct: "0.5593",
//     market_cap_change: "-104536352779.40",
//     market_cap_change_pct: "-0.1152",
//   },
//   ytd: {
//     volume: "1407794520946.86",
//     price_change: "-3937.51118329",
//     price_change_pct: "-0.0850",
//     volume_change: "-322972568902.81",
//     volume_change_pct: "-0.1866",
//     market_cap_change: "-72825334680.31",
//     market_cap_change_pct: "-0.0832",
//   },
// };
