import styles from './Cuisines.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';


import { Scrollbar } from 'swiper/modules';

function Cuisines(){
    return <div className={`${styles.cuisines} ${styles.container}`}>
        <span>Order online from</span>
        <h1>Our Special Cuisines</h1>
        <div className={styles.cuisines_categories}>
            <h3>Mexican</h3>
            <h3>Chinesse</h3>
            <h3>Indian</h3>
            <h3>Argentine</h3>
            <h3>Japanese</h3>
        </div>

        <Swiper
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
                <div className={styles.img_container}>
                <img src="https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2021/05/rosca-de-tacos-al-pastor.jpg" alt="" />

                <img src="https://imira.mx/wp-content/uploads/2023/11/mole-5980185_1280.jpg" alt="" />

                <img src="https://thecafesucrefarine.com/wp-content/uploads/Braised-Pork-Shoulder-Pozole-7.jpg" alt="" />

                <img src="https://editorialtelevisa.brightspotcdn.com/dims4/default/7926720/2147483647/strip/true/crop/996x560+2+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2019%2F05%2Fenchiladas-potosinas.png" alt="" />

                <img src="https://tb-static.uber.com/prod/image-proc/processed_images/c8f39a91f79bc0b5f149a5f4a883c946/4218ca1d09174218364162cd0b1a8cc1.jpeg" alt="" />
                </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.img_container}>
            <img src="https://i0.wp.com/lanoticia.com/wp-content/uploads/2023/05/arroz-frito-chino-casero-esta-es-la-receta-scaled-e1683308556496.jpg?fit=1200%2C747&ssl=1" alt="" />

            <img src="https://images.hola.com/imagenes/cocina/recetas/20221025219735/rollitos-primavera-tailandeses/1-156-437/popiah-adobe-m.jpg" alt="" />

            <img src="https://editorialtelevisa.brightspotcdn.com/dims4/default/a251119/2147483647/strip/true/crop/527x527+135+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F3b%2F97%2F30c6158f4121af234cce5e565fe9%2Fpollo-agriculde.jpg" alt="" />

            <img src="https://beaorviz.com/wp-content/uploads/2021/10/sopa-rapida-facil-china-agripicante-gyoza.jpg" alt="" />

            <img src="https://images.rove.me/w_1920,q_85/zhieisvkt7eu3bmfw6bo/beijing-peking-duck.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.img_container}>
            <img src="https://www.orientalmarket.es/recetas/wp-content/uploads/2014/09/FOTO-POLLO-AL-CURRY-ROJO-A1.jpg" alt="" />

            <img src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/shaheen_ali/Stove_Top_Grilled__Smoked_Tandoori_Chicken.jpg" alt="" />

            <img src="https://hips.hearstapps.com/hmg-prod/images/delish-091621-samosas-04-jg-1632847515.jpg?crop=1xw:0.843956043956044xh;center,top&resize=1200:*" alt="" />

            <img src="https://static01.nyt.com/images/2022/01/26/dining/21SINGAPOREREX4-nasi-biryani/merlin_200287473_78778039-dc1b-4644-9f5c-818d61d24403-superJumbo.jpg" alt="" />

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSib1DQUyJ7enQJ60gLHnwRIqi3Q20B0LIRZA&usqp=CAU" alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles.img_container}>
            <img src="https://editorialtelevisa.brightspotcdn.com/dims4/default/ae06ac2/2147483647/strip/true/crop/560x560+220+0/resize/1000x1000!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2021%2F02%2Fmini-empanadas-argentinas.jpg" alt="" />

            <img src="https://cdn7.kiwilimon.com/recetaimagen/36394/45076.jpg" alt="" />

            <img src="https://progcarne.com/storage/app/uploads/public/603/ebd/dc8/603ebddc8a32e671602297.jpg" alt="" />

            <img src="https://www.semanarioextra.com.ar/wp-content/uploads/2020/05/Locro-sin-grasa-receta-paso-a-paso-para-lograr-los-mismos-sabores-2.jpg" alt="" />

            <img src="https://locales.unimarc.cl/wp-content/files_mf/1663787056800x800PASTELDEPAPAS.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.img_container}>
            <img src="https://www.sushiparaiso.com/img/platillos/sushi-rollos-conos.jpg" alt="" />

            <img src="https://twosleevers.com/wp-content/uploads/2023/03/Shrimp-Tempura-1.png" alt="" />

            <img src="https://www.comedera.com/wp-content/uploads/2023/08/ramen-de-pollo-PG_RDP150921002.jpg" alt="" />

            <img src="https://okonomikitchen.com/wp-content/uploads/2019/02/vegan-vegetable-gyoza-recipe-1-of-1-1024x683.jpg" alt="" />

            <img src="https://www.foodandwine.com/thmb/oVhxTQwEHI9ie9c0238n6E-E17I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cauliflower-okonomiyaki-FT-RECIPE0120-1903750dc6a84e409804c16f2784f84d.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
}

export default Cuisines;