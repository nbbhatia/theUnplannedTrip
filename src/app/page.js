import Image from 'next/image';
import BGImage from '../Assets/images/BG.jpg'
import Landing from '@/Components/Landing';
import Header from "../Components/Reusable/Header"
export default function Home() {
  return (
    <main>
      <Header/>
      <Landing/>
       {/* <Image
            src={BGImage}
            alt="Vercel Logo"
             width='100%'
            height='100vh'
            style={{height:'100vh',width:'100%'}}
            // priority
          /> */}
    </main>
  )
}
