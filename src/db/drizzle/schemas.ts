import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const postsTable = sqliteTable('posts', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  author: text('author').notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  coverImageUrl: text('cover-image-url').notNull(),
  published: integer('published', {mode: 'boolean'}).notNull(),
  createAt: text('createAt').notNull(),
  updateAt: text('updateAt').notNull(),
})

export type postTableSelectMode = InferSelectModel<typeof postsTable>
export type postTableInsertMode = InferInsertModel<typeof postsTable>
