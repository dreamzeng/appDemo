<template>
<header>
    <slot name="home"></slot>
    <slot name="read"></slot>
    <slot name="detail-header"></slot>
    <slot name="circle"></slot>
    <slot name="login"></slot>
    <slot name="register"></slot>
    <slot name="editprofile-header"></slot>
    <slot name="my"></slot>
</header>
</template>

<script>
export default {}
</script>

<style lang="less">
header {
    height:40px;
    width: 100%;
    line-height:40px;
    position: fixed;
    background: #fff;
    border-bottom: 0.025rem solid #e4e4e4;
    left: 0;
    top: 0;
    text-align: center;
    z-index: 999;
}
</style>
