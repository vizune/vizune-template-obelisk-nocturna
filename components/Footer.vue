<template>
    <div>
        <div class="bg-midnight py-8">
            <div class="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FooterWidget heading="Lorem ipsum" class="text-white">
                    <img src="/avatar.gif" class="float-left mr-2" /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum nisl id molestie consectetur. Nunc congue tincidunt odio vel imperdiet. Nullam euismod lorem sem, ac auctor massa pharetra at. Pellentesque semper augue ac sapien auctor, ac pulvinar felis pretium. Donec et turpis molestie, scelerisque massa vitae, posuere sem. Morbi rhoncus nunc quis lacus venenatis mollis. Nulla ante neque, fermentum eu mollis vitae, convallis sit amet magna. Mauris venenatis ex vel erat convallis dapibus.</p>
                </FooterWidget>
                <FooterWidget heading="Affiliates" class="Footer-widget">
                    <FooterAffiliates />
                    <div class="flex flex-col gap-4 font-forum text-xl px-6">
                        <NuxtLink to="/credits/links" class="text-ice underline">Link exchange ></NuxtLink>
                        <NuxtLink to="/credits/about" class="text-ice underline">Credits & Resources ></NuxtLink>
                    </div>
                </FooterWidget>
            </div>
            
        </div>
        <FooterSocial />
    </div>
</template>