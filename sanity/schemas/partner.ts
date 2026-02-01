export const partner = {
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Partner Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "website",
      title: "Website URL",
      type: "url",
    },
    {
      name: "partnerType",
      title: "Partner Type",
      type: "string",
      options: {
        list: [
          { title: "Corporate Partner", value: "corporate" },
          { title: "Institutional Partner", value: "institutional" },
          { title: "Media Partner", value: "media" },
          { title: "Community Partner", value: "community" },
        ],
      },
    },
    {
      name: "tier",
      title: "Tier",
      type: "string",
      options: {
        list: [
          { title: "Strategic", value: "strategic" },
          { title: "Premium", value: "premium" },
          { title: "Partner", value: "partner" },
        ],
      },
    },
    {
      name: "featured",
      title: "Show on Homepage",
      type: "boolean",
      initialValue: false,
    },
  ],
};
