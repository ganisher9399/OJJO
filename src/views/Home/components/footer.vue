<template>
    <footer>
      <div class="container">
         <div class="footer">

            
               <ul class="contactus">
                   <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                   <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                   <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                   <li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>
                   <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
               </ul>

             
                   <div class="box">
                       <ul>
                           <li><a href="#"><b>Home/me</b></a></li>
                           <li><a href="#">Meet the Team</a></li>
                           <li><a href="#">Careers</a></li>
                       </ul>
                        <ul>
                           <li><a href="#"><b>About/me</b></a></li>
                           <li><a href="#">location</a></li>
                           <li><a href="#">the work</a></li>
                           <li><a href="#">the work to About</a></li>
                        </ul>
                        <ul>
                           <li><a href="#"><b>Contact</b></a></li>
                           <li><a href="#">Telegram</a></li>
                           <li><a href="#">Instagram</a></li>
                           <li><a href="#">Twiteer</a></li>
                        </ul>
                       <ul>
                           <li><a href="#"><b>The see boock</b></a></li>
                           <li><a href="#"><b>to active boock</b></a></li>
                           <li>
                               <button>Contacts/Us</button>
                           </li>
                       </ul>                        
                   </div>
          
           

         </div>
      </div>
    </footer>
</template>


<script>
export default {
    
}
</script>


<style lang="scss">

@import '../../../assets/styles/components/_vars.scss';
@import '../../../assets/styles/components/_mixins.scss';
footer{
    padding: 50px;
    background-color: rgb(16, 13, 13);
    .footer{
        width: 100%;
        .box{
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 60px;
            width: 100%;
            flex-wrap: wrap;
            @include sm{
                display: flex;
                flex-direction: column;
                align-items: center;

            }
            ul{
              width: 25%;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;
              @include md{
                width: 50%;
                margin-bottom: 50px;
              }
              @media sm{
                margin-bottom: 0;  
              }
              li{
                  button{
                    width: 180px;
                    height: 50px;
                    border: none;
                    background: none;
                    border: 3px solid $white;
                    color: $white;
                    border-radius: 3px;
                    font-size: 18px;

                  }
                  a{
                      font-size: 20px;
                      color: rgb(191, 184, 184);
                      b{
                          font-weight: 600;
                          color: $white;
                      }
                  }
              }
            }
        }
        ul{
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            gap: 28px;
            list-style: none;
            li{
                a{
                    font-size: 28px;
                    color: $white;
                    
                }
            }

        }
    }
    

}
    
</style>