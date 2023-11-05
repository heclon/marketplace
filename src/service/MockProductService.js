let delay = (time) => (result) =>
  new Promise((resolve) => setTimeout(() => resolve(result), time));
/* eslint-disable  sonarjs/no-duplicate-string */
export const MockProductService = {
  getProductsData() {
    return [
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "f230fh0g3",
        full_name: "GLOBAL EQUITY FUND - WHOLESALE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        info: "https://managedfund.fundsflow.digital/f011049b199321f0d18585a2c61d0f92",
        details_page_source_type: "default",
        details_page_custom_url: "https://www.connexian.com/",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 500000,
        category: "WHOLESALE",
        quantity: 24,
        tags: ["WHOLESALE", "GLOBAL"],
        favourite: true,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "f230fh0g3",
        full_name:
          "Coolabah Long-Short Opportunities Fund (Assisted Investor Class)".toUpperCase(),
        description: "",
        info: "https://managedfund.fundsflow.digital/f011049b199321f0d18585a2c61d0f92",
        details_page_source_type: "custom",
        details_page_custom_url: "https://www.google.com/",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/459930f481a36d178a8d8eac26b95aee",
        image: "",
        price: 500000,
        category: "WHOLESALE",
        quantity: 24,
        tags: ["COOLABAH", "LONG-SHORT", "OPPORTUNITIES FUND"],
        favourite: true,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "nvklal433",
        full_name:
          "Victor Smorgon Partners Global Multi-Strategy Fund - 31 August 2022 Unit Class".toUpperCase(),
        description:
          "HectorHectorHectorHectorHector HectorHectorHector HectorHectorHectorHector HectorHector HectorHectorHectorHectorHectorHector HectorHectorHectorHectorHectorHectorHectorHectorHectorHectorHectorHectorHectorHectorHector HectorHector",
        info: "https://managedfund.fundsflow.digital/75e5ee4c9d0f87189b92279e2c7d88cb?campaign_footprint=28d538b44acf47edf0e96dba7ebf5a04",
        details_page_source_type: "custom",
        details_page_custom_url: "https://if-market-place.webflow.io/",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/f000acb317848db4ddf0fe9a46c1169e",
        image:
          "https://files.fundsflow.digital/98c807ee6be3ac39e22534ddad04d862",
        price: 720000,
        category: "WHOLESALE",
        quantity: 100000,
        tags: ["FIXED INCOME", "GOVERNMENT", "MINING"],
        favourite: false,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "zz21cz3c1",
        full_name: "Schroders Centuria Diversified Property Fund",
        description:
          "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
        info: "https://managedfund.fundsflow.digital/2b72bb126d19c4659e655756709deb42",
        details_page_source_type: "default",
        details_page_custom_url: "https://if-market-place.webflow.io/",
        image:
          "https://files.fundsflow.digital/5d1cab47fdc6f8267b3e8e44172bbec8",
        price: 0,
        category: "RETAIL",
        quantity: 2,
        tags: ["COMMERCIAL INCOME", "GROWTH RETAIL", "PROPERTY"],
        favourite: false,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "244wgerg2",
        full_name: "SMARTER MONEY",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 250000,
        category: "RETAIL",
        quantity: 25,
        tags: ["FIXED INCOME", "GOVERNMENT", "AUSTRALIA"],
        favourite: true,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "h456wer53",
        full_name: "ALL CHINA EQUITY OPPORTUNITIES FUND - PROFESSIONAL CLASS 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. TESTING",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "custom",
        details_page_custom_url:
          "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/360f0ca30f646b8129a0bf0c1dc9a8be",
        price: 150000,
        category: "WHOLESALE",
        quantity: 73,
        tags: ["ALL CHINA", "EQUITY", "OPPORTUNITIES FUND"],
        favourite: false,
        currency_code: "CNY",
        currency_symbol: "¥",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "av2231fwg",
        full_name: "SMARTER MONEY FUND EUROZONE - INSTITUTIONAL CLASS A",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/19c94deccf4c8c454b76d3c6dfc7701c",
        price: 120000,
        category: "WHOLESALE",
        quantity: 0,
        tags: ["AGGRESSIVE"],
        favourite: false,
        currency_code: "EUR",
        currency_symbol: "€",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "bib36pfvm",
        full_name:
          "SCHRODER ABSOLUTE EUROZONE RETURN INCOME FUND - WHOLESALE CLASS",
        description: "",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "custom",
        details_page_custom_url:
          "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/3bea0a90aa495c36aa6d5a9ce9d348bf",
        price: 320000,
        category: "WHOLESALE",
        quantity: 5,
        tags: ["COMMERCIAL", "LONGARTE"],
        favourite: false,
        currency_code: "EUR",
        currency_symbol: "€",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "mbvjkgip5",
        full_name: "GLOBAL EQUITY FUND VICTOR SMORGAN",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "custom",
        details_page_custom_url:
          "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/958d05c3d80e0db68de7452297539d57",
        price: 340000,
        category: "WHOLESALE",
        quantity: 23,
        tags: ["FIXED INCOME", "LONGARTE"],
        favourite: true,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "vbb124btr",
        full_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS B",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "custom",
        details_page_custom_url:
          "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 1000000,
        category: "RETAIL",
        quantity: 2,
        tags: ["COMMERCIAL", "AGGRESSIVE"],
        favourite: false,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "nvklal433",
        full_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND II - WHOLESALE - UNIT CLASS LEVEL 23",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "This product has a bit longer description than others",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "custom",
        details_page_custom_url:
          "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/40bf89cf7e560ecd16f24e1c80c8b22a",
        price: 720000,
        category: "WHOLESALE",
        quantity: 100000,
        tags: ["FIXED INCOME", "GOVERNMENT"],
        favourite: false,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "zz21cz3c1",
        full_name: "VICTOR SMORGON PARTNERS US REAL ESTATE FUND II - WHOLESALE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "custom",
        details_page_custom_url:
          "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 200000,
        category: "RETAIL",
        quantity: 2,
        tags: ["COMMERCIAL", "AGGRESSIVE"],
        favourite: false,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "244wgerg2",
        full_name: "JUMPS SUPERANNUATION FUND 2023",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/82f4566ad1045303a1b674b101b3471b",
        price: 250000,
        category: "RETAIL",
        quantity: 25,
        tags: ["FIXED INCOME", "GOVERNMENT", "AUSTRALIA"],
        favourite: true,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "h456wer53",
        full_name: "ALL CHINA EQUITY OPPORTUNITIES FUND - PROFESSIONAL CLASS 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/360f0ca30f646b8129a0bf0c1dc9a8be",
        price: 150000,
        category: "WHOLESALE",
        quantity: 73,
        tags: ["FIXED INCOME", "GOVERNMENT"],
        favourite: false,
        currency_code: "CNY",
        currency_symbol: "¥",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "av2231fwg",
        full_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS B",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 120000,
        category: "WHOLESALE",
        quantity: 0,
        tags: ["AGGRESSIVE"],
        favourite: false,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "bib36pfvm",
        full_name: "SCHRODER LOW-RISK RETURN INCOME FUND - WHOLESALE CLASS",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/3bea0a90aa495c36aa6d5a9ce9d348bf",
        price: 320000,
        category: "WHOLESALE",
        quantity: 5,
        tags: ["COMMERCIAL", "AGGRESSIVE", "GLOBAL"],
        favourite: false,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "mbvjkgip5",
        full_name: "GLOBAL EQUITY FUND ",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/958d05c3d80e0db68de7452297539d57",
        price: 340000,
        category: "WHOLESALE",
        quantity: 23,
        tags: ["FIXED INCOME", "GOVERNMENT"],
        favourite: true,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "vbb124btr",
        full_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS B",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 1000000,
        category: "RETAIL",
        quantity: 2,
        tags: ["COMMERCIAL", "AGGRESSIVE"],
        favourite: false,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "f230fh0g3",
        full_name:
          "VICTOR SMORGON PARTNERS AUS RESOURCES GOLD FUND - 31 OCTOBER 2023 CLASS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 500000,
        category: "WHOLESALE",
        quantity: 24,
        tags: ["FIXED INCOME", "GOVERNMENT"],
        favourite: true,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "nvklal433",
        full_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND III - WHOLESALE - UNIT CLASS LEVEL 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "This product has a bit longer description than others  ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 720000,
        category: "WHOLESALE",
        quantity: 100000,
        tags: ["FIXED INCOME", "GOVERNMENT"],
        favourite: false,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "zz21cz3c1",
        full_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND III - WHOLESALE",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 200000,
        category: "RETAIL",
        quantity: 2,
        tags: ["COMMERCIAL", "AGGRESSIVE"],
        favourite: false,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "244wgerg2",
        full_name:
          "SMARTER MONEY LONG - SHORT CREDIT FUND - DIRECT INVESTOR CLASS 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 0,
        category: "RETAIL",
        quantity: 25,
        tags: ["FIXED INCOME", "GOVERNMENT", "AUSTRALIA"],
        favourite: true,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "h456wer53",
        full_name: "ALL CHINA EQUITY OPPORTUNITIES FUND - PROFESSIONAL CLASS 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/360f0ca30f646b8129a0bf0c1dc9a8be",
        price: 150000,
        category: "WHOLESALE",
        quantity: 73,
        tags: ["FIXED INCOME", "GOVERNMENT"],
        favourite: false,
        currency_code: "CNY",
        currency_symbol: "¥",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "av2231fwg",
        full_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS C",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 120000,
        category: "WHOLESALE",
        quantity: 0,
        tags: ["AGGRESSIVE"],
        favourite: false,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "bib36pfvm",
        full_name: "SCHRODER AGGRESSIVE RETURN INCOME FUND - WHOLESALE CLASS",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/3bea0a90aa495c36aa6d5a9ce9d348bf",
        price: 320000,
        category: "WHOLESALE",
        quantity: 5,
        tags: ["COMMERCIAL", "AGGRESSIVE"],
        favourite: false,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "mbvjkgip5",
        full_name: "GLOBAL EQUITY FUND BLACKROCK",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/958d05c3d80e0db68de7452297539d57",
        price: 340000,
        category: "WHOLESALE",
        quantity: 23,
        tags: ["FIXED INCOME", "GOVERNMENT"],
        favourite: true,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "vbb124btr",
        full_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS B",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 1000000,
        category: "RETAIL",
        quantity: 2,
        tags: ["COMMERCIAL", "AGGRESSIVE"],
        favourite: false,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        id: "1000",
        abn_code: "f230fh0g3",
        full_name:
          "VICTOR SMORGON PARTNERS RESOURCES GOLD FUND - 30 NOVEMBER 2023 CLASS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 500000,
        category: "WHOLESALE",
        quantity: 24,
        tags: ["FIXED INCOME", "GOVERNMENT"],
        favourite: true,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "nvklal433",
        full_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND ASIA - WHOLESALE - UNIT CLASS LEVEL 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "This product has a bit longer description than others  ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 720000,
        category: "WHOLESALE",
        quantity: 100000,
        tags: ["FIXED INCOME", "GOVERNMENT"],
        favourite: false,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "zz21cz3c1",
        full_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND ASIA - WHOLESALE 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 200000,
        category: "RETAIL",
        quantity: 2,
        tags: ["COMMERCIAL", "AGGRESSIVE"],
        favourite: false,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "244wgerg2",
        full_name:
          "SMARTER MONEY LONG - SWAP CREDIT FUND - DIRECT INVESTOR CLASS 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 250000,
        category: "RETAIL",
        quantity: 25,
        tags: ["FIXED INCOME", "GOVERNMENT", "AUSTRALIA"],
        favourite: true,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "h456wer53",
        full_name: "ALL JAPAN EQUITY OPPORTUNITIES FUND - PROFESSIONAL CLASS 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/360f0ca30f646b8129a0bf0c1dc9a8be",
        price: 150000,
        category: "WHOLESALE",
        quantity: 73,
        tags: ["FIXED INCOME", "GOVERNMENT"],
        favourite: false,
        currency_code: "YEN",
        currency_symbol: "¥",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "av2231fwg",
        full_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS A2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 120000,
        category: "WHOLESALE",
        quantity: 0,
        tags: ["AGGRESSIVE"],
        favourite: false,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "bib36pfvm",
        full_name: "SCHRODER OPTIMAL RETURN INCOME FUND - WHOLESALE CLASS",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/3bea0a90aa495c36aa6d5a9ce9d348bf",
        price: 320000,
        category: "WHOLESALE",
        quantity: 5,
        tags: ["COMMERCIAL", "AGGRESSIVE"],
        favourite: false,
        currency_code: "YEN",
        currency_symbol: "¥",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "mbvjkgip5",
        full_name: "GLOBAL EQUITY FUND GOLDMAN SACKS",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/958d05c3d80e0db68de7452297539d57",
        price: 340000,
        category: "WHOLESALE",
        quantity: 23,
        tags: ["FIXED INCOME", "GOVERNMENT"],
        favourite: true,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "vbb124btr",
        full_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS B",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 1000000,
        category: "RETAIL",
        quantity: 2,
        tags: ["COMMERCIAL", "AGGRESSIVE"],
        favourite: false,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        id: "1000",
        abn_code: "f230fh0g3",
        full_name:
          "VICTOR SMORGON USA PARTNERS RESOURCES GOLD FUND - 31 DECEMBER 2023 CLASS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 500000,
        category: "WHOLESALE",
        quantity: 24,
        tags: ["FIXED INCOME", "GOVERNMENT"],
        favourite: true,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "nvklal433",
        full_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND ASIA - WHOLESALE - UNIT CLASS LEVEL 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "This product has a bit longer description than others  ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 720000,
        category: "WHOLESALE",
        quantity: 100000,
        tags: ["FIXED INCOME", "GOVERNMENT"],
        favourite: false,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "zz21cz3c1",
        full_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND ASIA - WHOLESALE 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 200000,
        category: "RETAIL",
        quantity: 2,
        tags: ["COMMERCIAL", "AGGRESSIVE"],
        favourite: false,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "244wgerg2",
        full_name:
          "SMARTER MONEY LONG - SWAP CREDIT FUND - DIRECT INVESTOR CLASS 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 250000,
        category: "RETAIL",
        quantity: 25,
        tags: ["FIXED INCOME", "AUSTRALIA", "2023"],
        favourite: true,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "h456wer53",
        full_name: "ALL JAPAN EQUITY OPPORTUNITIES FUND - PROFESSIONAL CLASS 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/360f0ca30f646b8129a0bf0c1dc9a8be",
        price: 150000,
        category: "WHOLESALE",
        quantity: 73,
        tags: ["FIXED INCOME", "GOVERNMENT"],
        favourite: false,
        currency_code: "YEN",
        currency_symbol: "¥",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "av2231fwg",
        full_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS B2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 120000,
        category: "WHOLESALE",
        quantity: 0,
        tags: ["AGGRESSIVE"],
        favourite: false,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "bib36pfvm",
        full_name:
          "SCHRODER 10-YEAR-FIXED RETURN INCOME FUND - WHOLESALE CLASS",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/3bea0a90aa495c36aa6d5a9ce9d348bf",
        price: 320000,
        category: "WHOLESALE",
        quantity: 5,
        tags: ["COMMERCIAL", "AGGRESSIVE"],
        favourite: false,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "mbvjkgip5",
        full_name: "GLOBAL EQUITY FUND JP MORGAN",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/958d05c3d80e0db68de7452297539d57",
        price: 340000,
        category: "WHOLESALE",
        quantity: 23,
        tags: ["FIXED INCOME", "GOVERNMENT"],
        favourite: true,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "vbb124btr",
        full_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS B",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 1000000,
        category: "RETAIL",
        quantity: 2,
        tags: ["COMMERCIAL", "AGGRESSIVE"],
        favourite: false,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        id: "1000",
        abn_code: "f230fh0g3",
        full_name:
          "VICTOR SMORGON PARTNERS RESOURCES GOLD FUND - 30 JANUARY 2024 CLASS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 500000,
        category: "WHOLESALE",
        quantity: 24,
        tags: ["FIXED INCOME", "GOVERNMENT"],
        favourite: true,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "nvklal433",
        full_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND QLD - WHOLESALE - UNIT CLASS LEVEL 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "This product has a bit longer description than others  ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 720000,
        category: "WHOLESALE",
        quantity: 100000,
        tags: ["FIXED INCOME", "GOVERNMENT"],
        favourite: false,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "zz21cz3c1",
        full_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND QLD - WHOLESALE 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 200000,
        category: "RETAIL",
        quantity: 2,
        tags: ["COMMERCIAL", "AGGRESSIVE"],
        favourite: false,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "244wgerg2",
        full_name:
          "SMARTER MONEY LONG - LONG CREDIT FUND - DIRECT INVESTOR CLASS 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 250000,
        category: "RETAIL",
        quantity: 25,
        tags: ["SMARTER MONEY FUND"],
        favourite: true,
        currency_code: "AUD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "h456wer53",
        full_name: "ALL KOREA EQUITY OPPORTUNITIES FUND - PROFESSIONAL CLASS",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/360f0ca30f646b8129a0bf0c1dc9a8be",
        price: 150000,
        category: "WHOLESALE",
        quantity: 73,
        tags: ["FIXED INCOME AUSTRALIA"],
        favourite: false,
        currency_code: "WON",
        currency_symbol: "₩",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "av2231fwg",
        full_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS C2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 120000,
        category: "WHOLESALE",
        quantity: 0,
        tags: ["INCOME GROWTH"],
        favourite: false,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "bib36pfvm",
        full_name:
          "SCHRODER 20-YEAR-FIXED RETURN INCOME FUND - WHOLESALE CLASS",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/3bea0a90aa495c36aa6d5a9ce9d348bf",
        price: 320000,
        category: "WHOLESALE",
        quantity: 5,
        tags: ["PROPERTY COMMERCIAL INCOME GROWTH"],
        favourite: false,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "mbvjkgip5",
        full_name: "GLOBAL EQUITY FUND CITI",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/958d05c3d80e0db68de7452297539d57",
        price: 340000,
        category: "WHOLESALE",
        quantity: 23,
        tags: ["FIXED INCOME GOVERNMENT"],
        favourite: true,
        currency_code: "USD",
        currency_symbol: "$",
      },
      {
        campaign_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        abn_code: "vbb124btr",
        full_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS B",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        info: "https://managedfund.fundsflow.digital/8e06db9582e7e3402848935535a39635",
        details_page_source_type: "default",
        details_page_custom_url: "",
        raw_emaf_url:
          "https://onboarding.fund.fundsflow.digital/4f6aa3b2a883a9ae17852a4de26b29f2",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
        price: 1000000,
        category: "RETAIL",
        quantity: 2,
        tags: ["PROPERTY COMMERCIAL AGGRESSIVE"],
        favourite: false,
        currency_code: "AUD",
        currency_symbol: "$",
      },
    ];
  },

  getProductsShort() {
    // console.log("Called getProductsShort()");
    return Promise.resolve(this.getProductsData().slice(0, 6)).then(
      delay(2000),
    );
  },

  getProducts() {
    return Promise.resolve(this.getProductsData())
      .then(delay(2000))
      .catch((error) => console.log(error));
  },
};

export const fetchMockedProducts = async () => {
  const products = await MockProductService.getProductsShort();
  console.log("Called fetchMockedProducts()");
  return products;
};
/* eslint-disable  sonarjs/no-duplicate-string */
