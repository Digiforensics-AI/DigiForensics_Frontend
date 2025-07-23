import { Link } from 'react-router'
import Image from './components/Image'
import ErrorCustom from '../../assets/Images/ErrorCustom.png';
import Title from './components/TitleDescription'

export default function Error() {
  return (
    <>
    <Image width={603} height={220} src={ErrorCustom}/>
    <Title title="Ups! Halaman Tidak Ditemukan." description="Tim ahli kami berkomitmen memahami kebutuhan Anda dan bekerja sama 
untuk mengembangkan serta menerapkannya secara optimal."/>

    
    </>
  )
}
