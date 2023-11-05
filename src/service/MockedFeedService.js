/* eslint-disable  sonarjs/no-duplicate-string */

export const MockFeedService = {
  getFeedsData() {
    return [
      {
        header: "This is the Header of the first video modal",
        title: "Create new digital distribution channels",
        subTitle: "This is the subTitle",
        text: "Navigate compliance obligations for you and your clients with software built for direct investing.",
        // image:
        //   "https://assets.website-files.com/613555028d00fb3fa8399ccf/613555028d00fb43b5399cf6_icon-cup-01.svg",
        image: "https://img.youtube.com/vi/-I-vok5M7ZI/0.jpg",
        videoUrl: "https://www.youtube.com/embed/rokGy0huYEA",
      },
      {
        header: "This is the Header of the second video modal",
        title: "One-off digital account creation",
        subTitle: "This is the subTitle",
        text: "Portable digital Investor accounts are created on initial application and can be reused for new investments.",
        image: "https://img.youtube.com/vi/5h-6KWUCbWA/0.jpg",
        articleUrl: "",
        videoUrl: "https://www.youtube.com/embed/rokGy0huYEA",
      },
      {
        header: "This is the Header of the third video modal",
        title: "Connect with your investors online",
        subTitle: "This is the subTitle",
        text: "Navigate compliance obligations for you and your clients with software built for direct investing.",
        videoUrl: "https://www.youtube.com/embed/rokGy0huYEA",
        image: "https://img.youtube.com/vi/-I-vok5M7ZI/0.jpg",
      },
      {
        title: "A technology platform designed to grow funds under management",
        text: "An end-to-end, secure digital platform. Plug and play investor onboarding saves time, reduces errors and improves your investor's experience.",
        image:
          "https://assets.website-files.com/613555028d00fb3fa8399ccf/613555028d00fb7bca399cf2_icon-GetStartedFast-01.svg",
        articleUrl: "",
        videoUrl: "",
      },
      {
        title: "Create new digital distribution channels",
        text: "Activate your digital marketing channel to grow your funds under management. Reach new direct investors with targeted digital marketing campaigns.",
        image:
          "https://assets.website-files.com/613555028d00fb3fa8399ccf/613555028d00fb3471399cff_icon-anywhere-01.svg",
        articleUrl: "",
        videoUrl: "",
      },
      {
        title: "Connect with your investors online",
        text: "Build your direct to consumer business in a fully digital environment to get closer to your customers.",
        image:
          "https://assets.website-files.com/613555028d00fb3fa8399ccf/613555028d00fbb53f399cf0_icon-GetToKnow-01.svg",
        articleUrl: "",
        videoUrl: "",
      },
    ];
  },

  getFeeds() {
    return Promise.resolve(this.getFeedsData())
      .then()
      .catch((error) => console.log(error));
  },
};

export const fetchMockedFeeds = async () => {
  const feeds = await MockFeedService.getFeeds();
  console.log("Called fetchMockedFeeds()");
  return feeds;
};
/* eslint_disable  sonarjs/no-duplicate-string */
