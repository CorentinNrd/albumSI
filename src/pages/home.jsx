import NEWATTITUDE from '../assets/songs/01-New-Attitude-(Anime opening).mp3';
import LADANSE from '../assets/songs/02-La-danse-de-PA.mp3';
import ZULCOMMEUNPOLAK from '../assets/songs/03-Zul-comme-un-Polak.mp3'
import FLAMETAPPART from "../assets/songs/04-Flam-et-l'appart-1.mp3"
import JOJO from "../assets/songs/05-Jooojoooo.mp3"
import JOJOWHERE from "../assets/songs/06-Jojo-where.mp3"
import GOUSSEGOUSSE from "../assets/songs/07-Gousse-gousse.mp3"
import MARIANNE from "../assets/songs/08-Marianne.mp3"
import LESI from "../assets/songs/09-LeSI.mp3"
import ROIDESICONES from "../assets/songs/10-Roi-des-icones.mp3"
import SIGITAN from "../assets/songs/11-C'est-le-SI-Gitan.mp3"
import FLAMLEDERNIER from "../assets/songs/12-FlamLeDernierbookeur.mp3"
import MARIANNELERETOUR from "../assets/songs/13-Marianne-le-retour.mp3"
import FARWEST from "../assets/songs/14-Far-West-PA.mp3"
import BABYLONE from "../assets/songs/15-Babylone-PA.mp3"
import CESTLAFAUTEDUSI from "../assets/songs/16-C'est-la-faute-du-S.I….mp3"
import CLIENT from "../assets/songs/17-Client-PA.mp3"
import BRUCACUITE from "../assets/songs/18-B.R.U-roi-cacuite.mp3"
import COVER02 from "../assets/covers/cover02.png";
import COVER03 from "../assets/covers/cover03.png";
import COVER04 from "../assets/covers/cover04.png";
import COVER05 from "../assets/covers/cover05.png";
import COVER06 from "../assets/covers/cover06.png";
import COVER07 from "../assets/covers/cover07.png";
import COVER08 from "../assets/covers/cover08.png";
import COVER09 from "../assets/covers/cover09.png";
import COVER10 from "../assets/covers/cover10.png";
import COVER11 from "../assets/covers/cover11.png";
import COVER12 from "../assets/covers/cover12.png";
import COVER13 from "../assets/covers/cover13.png";
import COVER16 from "../assets/covers/cover16.png";
import COVER18 from "../assets/covers/cover18.png";
import COVER from "../assets/covers/default-cover.png";
import {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import {EffectCoverflow, Navigation} from 'swiper/modules';

export default function HomePage() {

    const [currentSong, setCurrentSong] = useState(null);

    const [songs] = useState([
        {title: "New Attitude", src: NEWATTITUDE},
        {title: "La Danse de PA", src: LADANSE, cover: COVER02},
        {title: "Zul comme un Polak", src: ZULCOMMEUNPOLAK, cover: COVER03},
        {title: "Flam et l'appart", src: FLAMETAPPART, cover: COVER04},
        {title: "Jooojoooo", src: JOJO, cover: COVER05},
        {title: "Jojo where", src: JOJOWHERE, cover: COVER06},
        {title: "Gousse gousse", src: GOUSSEGOUSSE, cover: COVER07},
        {title: "Marianne", src: MARIANNE, cover: COVER08},
        {title: "Le SI", src: LESI, cover: COVER09},
        {title: "Roi des icônes", src: ROIDESICONES, cover: COVER10},
        {title: "C'est le SI Gitan", src: SIGITAN, cover: COVER11},
        {title: "Flam Le Dernier bookeur", src: FLAMLEDERNIER, cover: COVER12},
        {title: "Marianne le retour", src: MARIANNELERETOUR, cover: COVER13},
        {title: "Far West PA", src: FARWEST},
        {title: "Babylone PA", src: BABYLONE},
        {title: "C'est la faute du S.I…", src: CESTLAFAUTEDUSI, cover: COVER16},
        {title: "Client PA", src: CLIENT},
        {title: "B.R.U roi cacuite", src: BRUCACUITE, cover: COVER18},
    ]);

    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                slidesPerView={3}
                loop={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: -25,
                    depth: -20,
                    modifier: 1,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow, Navigation]}
            >
                {songs.map((song, index) => (
                    <SwiperSlide key={index} className="my-2">
                        <img src={song.cover || COVER} alt={song.title} className="w-full h-full object-cover"/>

                        <audio controls className="absolute bottom-4"
                               onPlay={e => {
                                   document.querySelectorAll('audio').forEach(audio => {
                                       if (audio !== e.target) audio.pause();
                                   });
                               }}
                               onEnded={() => {
                                   const nextIndex = (index + 1) % songs.length;
                                   const nextAudio = document.querySelectorAll('audio')[nextIndex];
                                   if (nextAudio) {
                                       nextAudio.play();
                                       const swiper = document.querySelector('.swiper').swiper;
                                       swiper.slideToLoop(nextIndex);
                                   }
                               }}>
                            <source src={song.src} type="audio/mp3"/>
                        </audio>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}