<template>
<div>
   <SearchBar :isActive="isSearchBarActive" @closeSearchBar="isSearchBarActive = false" />
    <Navbar @openSearchBar="isSearchBarActive = true"/>
  <section class="blogs">
     <div class="block">
           <Title :title='title' :sub='subtitle'/>
     </div>

  </section>
</div>
</template>


<script>
import SearchBar from '../../layouts/SearchBar.vue'
import Navbar from '../../layouts/Navbar.vue'
import Title from '@/layouts/Title.vue'
import BlogCard from '@/layouts/BlogCard.vue'
import BlogPosts from '@/blog_posts.js'

export default {
  components: {
    Navbar,
    SearchBar,
    Title,
    BlogCard,
  },
  data() {
    return {
      title: 'JEWELLERY BLOG',
      subtitle: 'Articles by Australian designer Simone Walsh',
      blockpost: BlogPosts,
      isSearchBarActive: false,
    }
  } 
}
</script>



<style lang="scss">
@import '../../assets/styles/components/_vars.scss';
@import '../../assets/styles/components/_mixins.scss';


.blogs{


    .block{
        width: 100%;
        height: 100vh;
        padding: 200px 0;
        color: $white;
        background: url("https://www.ngmk.uz/uploads/photo/production/product/yuvelir/bzoloto/30113-51.jpg") no-repeat center / cover;
        position: relative;

        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba($black, $alpha: 0.4);
        }
    }
    .wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px 0;
        flex-wrap: wrap;
        margin: 100px auto;
        //Media
        @include lg{
            margin: 50px auto;
            justify-content: center;
            gap: 25px;
        }
    }
  
}    
</style>