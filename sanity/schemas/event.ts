export const event = {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "image",
      title: "Event Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "eventDate",
      title: "Event Date",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "endDate",
      title: "End Date",
      type: "datetime",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "Physical location or 'Virtual'",
    },
    {
      name: "eventType",
      title: "Event Type",
      type: "string",
      options: {
        list: [
          { title: "Conference", value: "conference" },
          { title: "Webinar", value: "webinar" },
          { title: "Roundtable", value: "roundtable" },
          { title: "Workshop", value: "workshop" },
          { title: "Networking", value: "networking" },
        ],
      },
    },
    {
      name: "registrationLink",
      title: "Registration Link",
      type: "url",
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      date: "eventDate",
    },
    prepare(selection: any) {
      const { title, media, date } = selection;
      return {
        title,
        media,
        subtitle: date
          ? new Date(date).toLocaleDateString()
          : "No date set",
      };
    },
  },
};
