<template>
    <div id="nav" class="section footer">
        <!-- <router-link to="/login">Login</router-link> | -->
        
       
        <router-link to="/userprofile" class="footer-menu">
            <img src="../../assets/icons/icon-profile.png" alt="" class="footer-icon">
            <p>Profile</p>
        </router-link>
        

        <router-link to="/home" class="footer-menu">
            <img src="../../assets/icons/icon-home.png" alt="" class="footer-icon">
            <p>Home</p>
        </router-link>


        <router-link to="/menu" class="footer-menu">
            <img src="../../assets/icons/icon-menu.png" alt="" class="footer-icon">
            <p>Menu</p>
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
    background-color: #hotpink;
}

.section {
    margin-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

</style>


