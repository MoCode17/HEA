import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

const singletonTypes = new Set(['hero', 'service', 'testimonial', 'whyChooseUs', 'about', 'contact', 'footer'])

export default defineConfig({
  name: 'hea-studio',
  title: 'HEA Content',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items(
            schemaTypes
              .filter((t) => singletonTypes.has(t.name!))
              .map((t) =>
                S.listItem()
                  .title(t.title || t.name!)
                  .id(t.name!)
                  .child(
                    S.document()
                      .schemaType(t.name!)
                      .documentId(t.name!)
                  )
              )
          ),
    }),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : input,
  },
})
