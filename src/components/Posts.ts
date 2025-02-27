import type { ComponentProps } from "astro/types";
import MarkdownPostLayout from "../layouts/MarkdownPostLayout.astro";

export type Post = {
    url: string;
} & ComponentProps<typeof MarkdownPostLayout>;

export function getAllPosts() {
    return Object.values(
        import.meta.glob("../pages/posts/*.md", { eager: true }),
    ) as Post[];
}

export function getAllTags(posts: Post[]) {
    return [
        ...new Set(posts.flatMap((post) => post.frontmatter.tags)),
    ]
}