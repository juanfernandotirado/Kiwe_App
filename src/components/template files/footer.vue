<template>
    <div id="nav" class="section footer">
        <!-- <router-link to="/login">Login</router-link> | -->
        
       
        <router-link to="/userprofile">
            <img src="../../assets/icons/icon-profile.png" alt="" class="footer-icon">
        </router-link>
        

        <router-link to="/home">
            <img src="../../assets/icons/icon-home.png" alt="" class="footer-icon">
        </router-link>


        <router-link to="/menu">
            <img src="../../assets/icons/icon-menu.png" alt="" class="footer-icon">
        </router-link>
      </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">

.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 13;
    //margin: 0;
    overflow: hidden;
}

#nav {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    background-color: white;
    margin-top: 2rem;
}

.footer-icon {
    max-width: 50px;
}

.footer-icon:active {
    color: orange;
}

.section {
    margin-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

</style>


