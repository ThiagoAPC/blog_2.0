import { toString as mdastToString } from 'mdast-util-to-string';

/**
 * Remark plugin that injects estimated reading time
 * into Astro's frontmatter data pipeline.
 * Accessible via post.data.readingTime in content collections.
 */
export function remarkReadingTime() {
  return function (tree, file) {
    const text = mdastToString(tree);
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 200));

    file.data.astro = file.data.astro ?? {};
    file.data.astro.frontmatter = file.data.astro.frontmatter ?? {};
    file.data.astro.frontmatter.readingTime = minutes;
  };
}
