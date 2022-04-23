<template>
  <div>
    <SearchBar :isActive="isSearchBarActive" @closeSearchBar="isSearchBarActive = false" />
    <Navbar @openSearchBar="isSearchBarActive = true"/>
    <MainSection />
    <Event />
    <Salons />
    <HomeBlock />
    <VidoPlear />
    <SendMail />
    <Footer />
    
  </div>
</template>


<script>
import SearchBar from '../../layouts/SearchBar.vue'
import Navbar from '../../layouts/Navbar.vue'
import MainSection from './components/Main-section.vue'
import Event from './components/Event.vue'
import Salons from './components/Salons.vue'
import HomeBlock from './components/HomeBlock.vue'
import VidoPlear from './components/VidoPlear.vue'
import SendMail from './components/SendMail.vue'
import Footer from './components/footer.vue'

export default {
    components: {
        SearchBar,
        Navbar,
        MainSection,
        Event,
        Salons,
        HomeBlock,
        VidoPlear,
        SendMail,
        Footer,
    },
    data() {
      return {
         isSearchBarActive: false,
       }
    }
}
</script>


<style lang="scss">

</style>