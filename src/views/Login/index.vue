<template>
    <div>
        <div class="list">

            <div class="list-left">
                <img src="https://lms.tuit.uz/assets/images/study.svg" alt="">
            </div>

            <div class="list-righit">
                <div class="container-form">

           

                    <form>

                        <div class="form-logo">
                           <p>MUHAMMAD AL-XORAZMIY NOMIDAGI TOSHKENT AXBOROT TEXNOLOGIYALARI UNIVERSITETI</p>
                           <img src="https://lms.tuit.uz/assets/images/logo-md.png" alt="">
                        </div>



                        <div class="form">
                            <h2>LEARNING MANAGEMENT SYSTEM</h2>
                            <div>
                                <label for="lo">Login</label>
                                <input type="text" id="lo">
                            </div>
                            <div>
                                <label for="pa">Parol</label>
                                <input type="password" id="pa">
                            </div>  
                            
                            <button type="submit">Kirish</button>  
                        </div>   

                    </form>


                    <p>Sayt yaratuvchisi:  Online Service Group @Real_boy_7666</p>

                </div>
            </div>

        </div>
    </div>
</template>


<script>


export default {
    data() {
        return {

        }
    }
}
</script>


<style lang="scss">
@import '../../assets/styles/components/_vars.scss';
@import '../../assets/styles/components/_mixins.scss';   
.list{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .list-left{
        width: 50%;
        height: 100vh;
        background: rgb(29,45,91);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 60px;
        @include md{
            display: none;
        }

    }
    .list-righit{
        width: 50%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        @include md{
            width: 100%;
        }
        .container-form{
            padding-top: 20%;
            height: 100vh;
            width: 50%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            form{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 30px;
                .form{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                    button{
                        width: 100%;
                        height: 40px;
                        border: none;
                        background: rgb(29,45,91);
                        border-radius: 4px;
                        color: $white;
                        font-family: 'Gilroy';
                    }
                    h2{
                        text-align: center;
                        font-weight: 600;
                        font-size: 17px;
                        letter-spacing: 1.5px;
                    }
                    div{
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                        width: 100%;
                        input{
                            width: 100%;
                            height: 45px;
                            border-radius: 4px;
                            background: rgb(233, 238, 255);
                            border: 1.5px solid rgba(29, 45, 91, 0.584);
                            padding: 5px 15px;
                            font-size: 17px;
                            font-family: 'Gilroy' sans-serif;
                            color: rgb(29,45,91);
                            box-shadow: 1px 1px 10px rgba(78, 78, 78, 0.142);
                        }
                        label{

                            font-size: 14px;
                            padding-bottom: 5px;
                            font-family: 'Gilroy' sans-serif;
                        }
                    }
                }
                .form-logo{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 15px;
                    p{
                        color: #333;
                        font-weight: 600;
                        font-size: 10px;
                        line-height: 1.3;
                        padding: 0 70px;
                    }
                    img{
                        width: 100px;
                        height: 100px;
                    }
                }

            }
            p{
                text-align: center;
                font-size: 12px;
                color: $dark;
                font-family: 'Gilroy';
                margin-bottom: 2%;
            }
            
        }
    }
}

</style>