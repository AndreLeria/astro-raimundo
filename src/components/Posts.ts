import type { ComponentProps } from "astro/types";
import MarkdownPostLayout from "../layouts/MarkdownPostLayout.astro";
import type { getCollection } from "astro:content";

export type Post = {
    url: string;
} & ComponentProps<typeof MarkdownPostLayout>;

export function getAllTags(posts: Awaited<ReturnType<typeof getCollection<"blog">>>) {
    return [
        ...new Set(posts.flatMap((post) => post.data.tags)),
    ]
}