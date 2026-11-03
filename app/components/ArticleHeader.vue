<script setup>
// Heading for blog posts and articles.
// Usage:
//   <ArticleHeader
//       category="Art & Design"
//       title="Article Title Goes Here"
//       description="A short description or introduction to your post."
//       date="2026-09-30"
//   />
// `category`, `description` and `date` are optional. `date` is YYYY-MM-DD.
const props = defineProps({
    category: String,
    title: { type: String, required: true },
    description: String,
    date: String,
})

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const formatted = props.date
    ? (() => { const [y, m, d] = props.date.split('-').map(Number); return `${d} ${months[m - 1]} ${y}` })()
    : null
</script>

<template>
    <header class="Article">
        <span class="Article-ornament" aria-hidden="true" />

        <p v-if="category || date" class="Article-meta">
            <span v-if="category" class="Article-category">{{ category }}</span>
            <OrnamentSparkle v-if="category && date" class="Article-sep" />
            <time v-if="date" :datetime="date">{{ formatted }}</time>
        </p>

        <h1 class="Article-title">{{ title }}</h1>

        <p v-if="description" class="Article-desc">{{ description }}</p>
    </header>
</template>

<style scoped>
.Article {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 auto 2.5rem !important;
    max-width: 40rem;
}

/* The traced line divider, coloured from CSS */
.Article-ornament {
    width: min(14rem, 60%);
    aspect-ratio: 2030 / 300;
    background: var(--purple);
    -webkit-mask: url('/divider-line.svg') center / contain no-repeat;
    mask: url('/divider-line.svg') center / contain no-repeat;
    margin-bottom: 1.25rem;
}

.Article-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: .35rem .7rem;
    margin: 0 0 .6rem !important;
    font-family: var(--font-body);
    font-size: .7rem;
    font-weight: 700;
    letter-spacing: .22em;
    text-transform: uppercase;
    line-height: 1.4;
    color: #5b4f99;
}

.Article-category {
    color: var(--carmine);
}

.Article-sep {
    font-size: .6rem;
    color: var(--violet);
}

.Article-title {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: clamp(2.2rem, 6vw, 3.4rem);
    line-height: 1.08;
    letter-spacing: .005em;
    color: #1f1a4d;
    text-wrap: balance;
    margin: 0;
}

.Article-desc {
    margin: .9rem 0 0 !important;
    max-width: 32rem;
    font-family: var(--font-display);
    font-size: 1.2rem;
    line-height: 1.5;
    color: #4a4566;
    /* Even out the lines so no word is left on its own */
    text-wrap: balance;
}
</style>
