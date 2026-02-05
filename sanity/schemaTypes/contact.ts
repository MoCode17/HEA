import { defineType, defineField } from 'sanity'

export const contact = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'text' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'liveChat', title: 'Live Chat', type: 'string' }),
    defineField({ name: 'serviceArea', title: 'Service Area', type: 'string' }),
    defineField({ name: 'mapEmbedUrl', title: 'Map Embed URL', type: 'url' }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'object',
      fields: [
        defineField({ name: 'weekday', title: 'Weekday Hours', type: 'string' }),
        defineField({ name: 'saturday', title: 'Saturday Hours', type: 'string' }),
        defineField({ name: 'sunday', title: 'Sunday Hours', type: 'string' }),
      ],
    }),
  ],
})
