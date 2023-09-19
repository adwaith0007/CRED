import Image from 'next/image';
import Hero from './components/Hero';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import Screen5 from './components/Screen5';
import Screen6 from './components/Screen6';
import Screen7 from './components/Screen7';
import Screen8 from './components/Screen8';
import Screen9 from './components/Screen9';
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      <Hero/>
      <Screen2/>
      <Screen3/>
      <Screen4/>
      <Screen5/>
      <Screen6/>
      <Screen7/>
      <Screen8/>
      <Screen9/>

      
    </main>
  )
}
