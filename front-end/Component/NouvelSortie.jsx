import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useData from '../Hooks/data'
import { AiOutlineComment } from "react-icons/ai"
import Commentaire from './Commentaire';


const NouvelSortie = () => {

     const { livres } = useData()
     const [active, setActive] = useState(false)
     const [idLivre, setIdLivre] = useState()

     const CheckLivre = (id) => {
          setIdLivre(id)
          setActive(true)
     }
     
     return (
          <div className='container_sortie'>
               <div className='sortie_card'>
                    <div className='titre'>
                         <p>Les nouvelles sorties de livre</p>
                    </div>
                    <div>
                         <Swiper
                              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                              slidesPerView={4}
                              autoplay={{
                                   delay: 2000,
                                   disableOnInteraction: false,
                                   pauseOnMouseEnter: true,
                              }}
                              
                              className='cards_nouvelle'
                         >
                              {
                                   livres?.slice(0, 6).map((livre, index) => {

                                        return (
                                             <>
                                            
                                             <SwiperSlide key={index}>
                                                  <div className='card_sortie'>
                                                       <div className='image_cover'>
                                                            <Link href={"#"} onClick={() => CheckLivre(livre.id)}>
                                                                 <Image loader={() => `http://127.0.0.1:8000/${livre.cover}`} src={livre ? `http://127.0.0.1:8000/${livre.cover}` : ''} width={10} height={10} alt="Image de couverture" className='image' />
                                                            </Link>
                                                       </div>
                                                       <div className='categorie_div'>
                                                            <p>{livre?.categorie.nom}</p>
                                                       </div>
                                                       <div className='infos_livre'>
                                                            <p className='auteur'>{livre.auteur}</p>
                                                            <p>{livre.titre}</p>
                                                       </div>
                                                       <div className='info_user'>
                                                            <div className='profil_user'>
                                                                 <div className='profil'>
                                                                      <p>{livre.user.nom[0]}</p>
                                                                 </div>
                                                                 <div className='nom'>
                                                                     {livre.user.nom}
                                                                 </div>
                                                            </div>
                                                            <div className='commenter' onClick={() => CheckLivre(livre.id)}>
                                                                 <AiOutlineComment />
                                                            </div>
                                                       </div>
                                                  </div>
                                             </SwiperSlide>
                                        </>
                                        )
                                   })
                              }
                         </Swiper>
                         {
                             
                              active && <Commentaire id={idLivre} close={() => setActive(false)} /> 
                              
                         
                         }
                    </div>
               </div>
          </div>
     );
};

export default NouvelSortie;