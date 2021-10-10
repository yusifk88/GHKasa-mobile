<template>
    <f7-list style="width:100%">
    <f7-list-item
            v-for="n in count"
            :key="n"
            class="skeleton-text skeleton-effect-pulse"
            title="Full Name"
            subtitle="Position"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
    >
        <template #media>
            <f7-skeleton-block
                    style="width: 40px; height: 40px; border-radius: 50%"
            ></f7-skeleton-block>
        </template>
    </f7-list-item>
    </f7-list>
</template>

<script>
    export default {
        props:['count'],
        name: "loadingComponent",

    }
</script>

<style scoped>

</style>
