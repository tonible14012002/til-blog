import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blogs/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: false },
    publishedAt: { type: 'string', required: false },
    description: { type: 'string', required: false },
    cover: { type: 'string', required: false },
  },
  computedFields: {
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw)
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace('.mdx', ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})