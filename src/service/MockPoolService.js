let delay = (time) => (result) =>
  new Promise((resolve) => setTimeout(() => resolve(result), time));
/* eslint-disable  sonarjs/no-duplicate-string */
export const MockPoolService = {
  getPoolData() {
    return [
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "Connexian Adviser Platform",
        description: "",
        image:
          "https://assets.website-files.com/613555028d00fb3fa8399ccf/613555028d00fb9d2d399d25_logo_800x128_full.png",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "VICTOR SMORGON PARTNERS",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "Growth Financial Company".toUpperCase(),
        description: "",
        image:
          "https://files.fundsflow.digital/98c807ee6be3ac39e22534ddad04d862",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "SCHRODERS",
        description: "",
        image:
          "https://files.fundsflow.digital/5d1cab47fdc6f8267b3e8e44172bbec8",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "COOLABAH",
        description: "",
        image:
          "https://files.fundsflow.digital/328da577daa386ff00cf3d94a382b1a0",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "ALL CHINA EQUITY OPPORTUNITIES FUND - PROFESSIONAL CLASS 1",
        description: "",
        image:
          "https://files.fundsflow.digital/360f0ca30f646b8129a0bf0c1dc9a8be",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "TRIBECA",
        description: "",
        image:
          "https://logos-download.com/wp-content/uploads/2016/07/Macquarie_logo.png",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "SCHRODER ABSOLUTE EUROZONE RETURN INCOME FUND - WHOLESALE CLASS",
        description: "",
        image:
          "https://files.fundsflow.digital/f71f585aabb54e6b8845afed79cbbaef",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "GLOBAL EQUITY FUND VICTOR SMORGAN",
        description: "",
        image:
          "https://files.fundsflow.digital/958d05c3d80e0db68de7452297539d57",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS B",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND II - WHOLESALE - UNIT CLASS LEVEL 23",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "VICTOR SMORGON PARTNERS US REAL ESTATE FUND II - WHOLESALE",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "JUMPS SUPERANNUATION FUND 2023",
        description: "",
        image:
          "https://files.fundsflow.digital/82f4566ad1045303a1b674b101b3471b",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "ALL CHINA EQUITY OPPORTUNITIES FUND - PROFESSIONAL CLASS 2",
        description: "",
        image:
          "https://files.fundsflow.digital/360f0ca30f646b8129a0bf0c1dc9a8be",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS B",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "SCHRODER LOW-RISK RETURN INCOME FUND - WHOLESALE CLASS",
        description: "",

        image:
          "https://files.fundsflow.digital/3bea0a90aa495c36aa6d5a9ce9d348bf",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "GLOBAL EQUITY FUND ",
        description: "",
        image:
          "https://files.fundsflow.digital/958d05c3d80e0db68de7452297539d57",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS B",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "VICTOR SMORGON PARTNERS AUS RESOURCES GOLD FUND - 31 OCTOBER 2023 CLASS",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND III - WHOLESALE - UNIT CLASS LEVEL 3",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND III - WHOLESALE",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",

        pool_name:
          "SMARTER MONEY LONG - SHORT CREDIT FUND - DIRECT INVESTOR CLASS 3",
        description: "",

        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "ALL CHINA EQUITY OPPORTUNITIES FUND - PROFESSIONAL CLASS 3",
        description: "",

        image:
          "https://files.fundsflow.digital/360f0ca30f646b8129a0bf0c1dc9a8be",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS C",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "SCHRODER AGGRESSIVE RETURN INCOME FUND - WHOLESALE CLASS",
        description: "",
        image:
          "https://files.fundsflow.digital/3bea0a90aa495c36aa6d5a9ce9d348bf",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "GLOBAL EQUITY FUND BLACKROCK",
        description: "",
        image:
          "https://files.fundsflow.digital/958d05c3d80e0db68de7452297539d57",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS B",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "VICTOR SMORGON PARTNERS RESOURCES GOLD FUND - 30 NOVEMBER 2023 CLASS",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND ASIA - WHOLESALE - UNIT CLASS LEVEL 1",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND ASIA - WHOLESALE 1",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "SMARTER MONEY LONG - SWAP CREDIT FUND - DIRECT INVESTOR CLASS 1",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "ALL JAPAN EQUITY OPPORTUNITIES FUND - PROFESSIONAL CLASS 1",
        description: "",
        image:
          "https://files.fundsflow.digital/360f0ca30f646b8129a0bf0c1dc9a8be",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS A2",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "SCHRODER OPTIMAL RETURN INCOME FUND - WHOLESALE CLASS",
        description: "",
        image:
          "https://files.fundsflow.digital/3bea0a90aa495c36aa6d5a9ce9d348bf",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "GLOBAL EQUITY FUND GOLDMAN SACKS",
        description: "",
        image:
          "https://files.fundsflow.digital/958d05c3d80e0db68de7452297539d57",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS B",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "VICTOR SMORGON USA PARTNERS RESOURCES GOLD FUND - 31 DECEMBER 2023 CLASS",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND ASIA - WHOLESALE - UNIT CLASS LEVEL 2",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND ASIA - WHOLESALE 2",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "SMARTER MONEY LONG - SWAP CREDIT FUND - DIRECT INVESTOR CLASS 2",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "ALL JAPAN EQUITY OPPORTUNITIES FUND - PROFESSIONAL CLASS 2",
        description: "",
        image:
          "https://files.fundsflow.digital/360f0ca30f646b8129a0bf0c1dc9a8be",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS B2",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "SCHRODER 10-YEAR-FIXED RETURN INCOME FUND - WHOLESALE CLASS",
        description: "",
        image:
          "https://files.fundsflow.digital/3bea0a90aa495c36aa6d5a9ce9d348bf",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "GLOBAL EQUITY FUND JP MORGAN",
        description: "",
        image:
          "https://files.fundsflow.digital/958d05c3d80e0db68de7452297539d57",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS B",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "VICTOR SMORGON PARTNERS RESOURCES GOLD FUND - 30 JANUARY 2024 CLASS",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND QLD - WHOLESALE - UNIT CLASS LEVEL 1",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "VICTOR SMORGON PARTNERS US REAL ESTATE FUND QLD - WHOLESALE 1",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "SMARTER MONEY LONG - LONG CREDIT FUND - DIRECT INVESTOR CLASS 1",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "ALL KOREA EQUITY OPPORTUNITIES FUND - PROFESSIONAL CLASS",
        description: "",

        image:
          "https://files.fundsflow.digital/360f0ca30f646b8129a0bf0c1dc9a8be",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS C2",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name:
          "SCHRODER 20-YEAR-FIXED RETURN INCOME FUND - WHOLESALE CLASS",
        description: "",
        image:
          "https://files.fundsflow.digital/3bea0a90aa495c36aa6d5a9ce9d348bf",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "GLOBAL EQUITY FUND CITI",
        description: "",
        image:
          "https://files.fundsflow.digital/958d05c3d80e0db68de7452297539d57",
      },
      {
        pool_footprint: "a65e050da6bfad2ab45fa3434d28cb32",
        pool_name: "SMARTER MONEY FUND - INSTITUTIONAL CLASS B",
        description: "",
        image:
          "https://files.fundsflow.digital/ac9ad36f9d5a8aaa5a4a9bd03d01b0cb",
      },
    ];
  },

  getVisitedPools() {
    return Promise.resolve(this.getPoolData().slice(0, 9)).then(delay(2000));
  },

  getSuggestedPools() {
    return Promise.resolve(this.getPoolData().slice(6, 12)).then(delay(2000));
  },
};

export const fetchMockedVisitedPools = async () => {
  const pools = await MockPoolService.getVisitedPools();
  console.log("Called fetchMockedPools()");
  return pools;
};

export const fetchMockedSuggestedPools = async () => {
  const pools = await MockPoolService.getSuggestedPools();
  console.log("Called fetchMockedPools()");
  return pools;
};
/* eslint-disable  sonarjs/no-duplicate-string */
