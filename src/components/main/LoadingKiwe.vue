<template>
    <div>
        <img class="loading" src="../../assets/KiweLoading.png" alt="Loading">
        <p class="align-center">Loading</p>
    </div>
</template>

<script>
export default {
    name:"LoadingKiwe"
}
</script>

<style>
    .loading{
        width: 100px;
        height: auto;
        -webkit-animation: rotating 5s linear infinite;
        -moz-animation: rotating 5s linear infinite;
        -ms-animation: rotating 5s linear infinite;
        -o-animation: rotating 5s linear infinite;
        animation: rotating 5s linear infinite;

    }

        @-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }
    @keyframes rotating {
    from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }

</style>

