import { Link } from 'react-router'
import Title from './components/TitleDescription'
import CustomButton from './components/CustomButton'
import Video_Protect from '../../assets/Videos/Video_Protect.mp4';

export default function Beranda() {
  return (
    <>
    <video src={Video_Protect} autoPlay="true" width={304} height={304}/>
    <Title title="Karena Perlindungan adalah hak semua orang.
Deteksi cerdas dalam satu platform." description="Dengan platform kami, Anda dapat menyederhanakan proses pemantauan risiko secara menyeluruh. Semua terpusat dalam satu tempat dari deteksi penipuan, kejanggalan data, hingga pemantauan aktivitas ilegal. Pantau setiap ancaman, kelola respons, dan tingkatkan efisiensi perlindungan Anda."/> 
<CustomButton className="btn btn-primary" name="Deteksi Fraud" to="/fraud" />
<CustomButton className="btn btn-dark" name="Lihat Demo" to="/fraud" />

    
    </>
  )
}
