<template>
    <div>
        <!-- Example post page: copy this as a starting point for your blog posts -->
        <Content>
            <ArticleHeader
                category="Art & Design"
                title="Article Title Goes Here"
                description="A short description or introduction to your post goes here."
                date="2026-09-30"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis nec <a href="">orci et aliquet</a>. Curabitur augue leo, elementum sit amet leo eu, volutpat varius sapien. Suspendisse potenti. Nam in risus venenatis, efficitur leo id, pellentesque metus.</p>
            <h2>Heading two</h2>
            <p>Quisque id dolor vehicula, commodo eros vitae, eleifend nulla. Quisque vitae ornare leo. Aenean pretium augue eu fringilla fermentum. Nunc pulvinar est id tellus fermentum, id dignissim erat imperdiet.</p>
            <PostPagination
                :prev="{ title: 'Midnight Sanctuary', url: '/blog/midnight-sanctuary' }"
                :next="{ title: 'Luna\'s Colour Theory', url: '/blog/lunas-colour-theory' }"
            />
        </Content>
    </div>
</template>
