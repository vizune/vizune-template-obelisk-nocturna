<template>
    <div>
        <Content>
            <ArticleHeader
                category="Obelisk: Nocturna"
                title="Welcome to Vizune"
                description="A creative hub where anime, gaming, design and web development merge."
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis nec <a href="">orci et aliquet</a>. Curabitur augue leo, elementum sit amet leo eu, volutpat varius sapien. Suspendisse potenti. Nam in risus venenatis, efficitur leo id, pellentesque metus. Aliquam erat volutpat. Sed mattis, tortor id cursus vulputate, orci ex sollicitudin elit, vel tempor velit ex id dolor. Integer ornare vulputate libero, ut sodales tellus posuere id. Pellentesque bibendum nisi a risus viverra cursus.</p>
            <hr />
            <h2>Heading two</h2>
            <p>Quisque id dolor vehicula, commodo eros vitae, eleifend nulla. Quisque vitae ornare leo. Aenean pretium augue eu fringilla fermentum. Nunc pulvinar est id tellus fermentum, id dignissim erat imperdiet. Nullam maximus nisl velit, sed hendrerit nibh condimentum quis. Duis elementum non elit mattis fermentum. Pellentesque ipsum nibh, dignissim ut felis ut, euismod eleifend tellus.</p>
            <h3>Blockquote styling</h3>
            <blockquote class="font-display">
                <p>Obelisk: Nocturna is best viewed with the curtains closed, lights off and listening to <a href="https://open.spotify.com/track/2SHzX7kPO4SBmBGsqnH6nN?si=2f81be5c66154553" target="_blank">"Luma" by The M Machine.</a></p>
                <span>Sasha, <cite>Vizune.com</cite></span>
            </blockquote>
            <h3>List styling</h3>
            <ul>
                <li>Free templates, PSDs and avatars to download</li>
                <li>Step-by-step tutorials for graphics and web design</li>
                <li>Renders and resources, with nested items:
                    <ul>
                        <li>Anime renders</li>
                        <li>Textures and brushes</li>
                    </ul>
                </li>
            </ul>
            <h3>Pagination styling</h3>
            <PostPagination
                :prev="{ title: 'Midnight Sanctuary', url: '/blog/midnight-sanctuary' }"
                :next="{ title: 'Luna\'s Colour Theory', url: '/blog/lunas-colour-theory' }"
            />
            <p class="text-center pt-6">
                <NuxtLink to="/templates" class="Btn">Explore the site <span aria-hidden="true">›</span></NuxtLink>
            </p>
        </Content>

        <section class="Section">
            <SectionHeading title="Latest content" subtitle="Fresh resources, updates & inspiration" />
            <HomeLatest />
        </section>
    </div>
</template>
