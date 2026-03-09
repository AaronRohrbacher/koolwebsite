/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "aarons-kool-website",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          profile: "gaurav",
        },
      },
    };
  },
  async run() {
    new sst.aws.Nextjs("AaronsKoolWebsite");
  },
});
