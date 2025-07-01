CREATE TABLE `posts` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`author` text NOT NULL,
	`excerpt` text NOT NULL,
	`content` text NOT NULL,
	`cover-image-url` text NOT NULL,
	`published` integer NOT NULL,
	`createAt` text NOT NULL,
	`updateAt` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `posts_slug_unique` ON `posts` (`slug`);