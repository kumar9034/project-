import React, { useState } from 'react'
import BG from '../component/Bg'
import Navbar from '../component/Navbar'
import Card from '../component/Card'
import Footer from '../component/Footer'

const Lineup = () => {
  const [selectedCard, setSelectedCard] = useState(null); // <-- NEW

  const cards = [
    {
      id: 1,
      image: "image-12.jpg",
      text: "tiara andini",
      bg: 'image-11.svg',
      description: 'This talented and beautiful singer was born in Jember, 23 September 2001. Since she was in kindergarten (TK), Tiara Anugrah Eka Setyoandini has shown a significant talent for singing. Until finally as she was starting elementary school (SD), her vocal quality was increasingly polished by attending various vocal courses. She had participated in various kinds of singing competitions and came out as champions. She is often involved in several other spectacular activities or events such as the "Jember Fashion Carnival" in her hometown, Jember, East Java. Tiara was also noted to have contributed to the vote at the 2018 Asian Games in Jakarta. Her performance received many praises from various delegations of participating countries. Indonesian Idol 2020 is the first talent search event she participated in. Despite some doubts at the beginning of the audition, Tiara Andini was able to pitch smoothly until the grand final. She released her debut single “Gemintang Hatiku” with Universal Music Indonesia on February 2020 and received a high mount of acclaim.'
    },
    {
      id: 2,
      image: "image-13.jpg",
      text: "vierratale",
      bg: 'image-11.svg',
      description: 'formerly known as Vierra, is a pop-rock group band from Indonesia which consists of three members of Kevin Aprilio (piano/keyboard), WIdy Soediro Nichlany (vocal) and Raka Cyril Damar (guitar). Started from social media connection, they connected and create Vierratale ever since 2008. Vierratale has been released three albums in total throughout 14 years of the process in the industry.  The first debut has been released in 2009 which titled ‘My First Love’ managed to creates singles that occupied the best music charts in the country back then, such as ‘Dengarkan Curhatku’, that is followed by ‘Bersamamu’, ‘Perih’, ‘Rasa Ini’, ‘Jadi Apa yang Kuinginkan’, and ‘Seandainya’. The album also received multiplatinum awards and scored the highest number of RBT sales of 9 million dial tones. After successfully catapulting the band’s name through their debut album, Vierratale issued their second album titled ‘Love, Love, Love’ along with Valentine’s day in 2011 by releasing three singles known as ‘Takut’, ‘Terlalu Lama’, and ‘Kesepian’. Through their second album, this pop-rock group band gives a sense of maturity to their works based on every members’ personal love experiences into the music and its lyrics.  Through the birth of Vierratale, the band also introducing #LiveInVierratale as the grand picture of the new beginnings from this pop-rock group band. The campaign is also expected to be able to give great impact for their listeners, Vierrania.'
    },
    {
      id: 3,
      image: "image-14.jpg",
      text: "juicy luicy",
      bg: 'image-11.svg',
      description: 'Juicy Luicy is a pop band from Bandung that started back in 2010. They’re known for their super catchy songs and lyrics that really capture everyday life. One of their hits, "Lantas," even made it into the top playlists on Spotify. The band is made up of Julian Kaisar (vocals), Denis Ligia (electric guitar), Zamzam Y.M (sax and acoustic guitar), Eggy Ramandha (drums), and Bina Bagja (bass). They’ve been consistently dropping ear-catching singles that feel super relatable, which is why so many Indonesian music fans love them. In 2024, Juicy Luicy dropped an album called "Nonfiksi," and it blew up—hitting over 1 billion streams on Spotify in less than a year. The album also snagged three nominations at the AMI (Anugerah Musik Indonesia) Awards, including Best Album. With a sound that blends pop, R&B, and jazzy vibes, plus energetic live performances, Juicy Luicy keeps making waves in the Indonesian music scene.'
    },
    {
      id: 4,
      image: "image-15.jpg",
      text: "efek rumah kaca",
      bg: 'image-11.svg',
      description: `Efek Rumah Kaca (English: Greenhouse Effect) is an Indonesian indie rock band, formed in 2001. The band consists of Cholil Mahmud (lead vocal, guitar), Airil "Poppie" Nur Abadiansyah (back vocals, bass) dan Akbar Bagus Sudibyo (drum, back vocals). They are known for their satirical and thought-provoking lyrics—usually concerning politics or everyday society. With beautifully crafted lyrics, powerful melodies, and rich arrangements, elevated by Cholil Mahmud's pristine and haunting vocals, make Efek Rumah Kaca a powerhouse in Indonesian independent music scene. So far they have released three albums that have been critically and commercially successful, (2007), (2008), and (2015). Right now Efek Rumah Kaca just started writing new materials for their fourth album.`
    },
    {
      id: 5,
      image: "image-16.jpg",
      text: "banda neira",
      bg: 'image-11.svg',
      description: `"Banda Neira was an Indonesian indie folk duo formed in 2012, consisting of Rara Sekar and Ananda Badudu. The name Banda Neira comes from a small historical island in the Banda Islands, Maluku. The duo first gained attention through simple acoustic songs with poetic and contemplative lyrics, which they shared on SoundCloud. In 2013, they released their debut album ""Berjalan Lebih Jauh"", featuring popular tracks like "Sampai Jadi Debu", "Di Atas Kapal Kertas", and "Berjalan Lebih Jauh". Their career grew with the release of the EP "Yang Patah Tumbuh, Yang Hilang Berganti" in 2016. Banda Neira’s music often reflected themes of humanity, love, and life’s journey, wrapped in warm, intimate folk sounds. Unfortunately, at the height of their popularity, Banda Neira officially disbanded in December 2016 due to personal decisions made by both members to pursue different paths. Despite their disbandment, their songs remain beloved, frequently featured in films, series, and personal moments for many listeners."`
    },
    {
      id: 6,
      image: "image-17.jpeg",
      text: "kahitna",
      bg: 'image-11.svg',
      description: `KAHITNA is a pop music band formed in June 24th 1986. Currently consist of pianist and frontman Yovie Widianto, trio vocalists Carlo Saba, Hedi Yunus, Mario Ginanjar, guitarist Andrie Bayuajie, bassist Dody Isnaini, percussionist Harry Suhardiman, keyboardist Bambang Purwono and drummer Budiana Nugraha. Only once KAHITNA had experienced personnel changes, when their former vocalist, Ronni Waluya, resigned from the band and was replaced by Mario Ginanjar. Originally playing jazz, fusion and ethnic music, KAHITNA is now known as one of the bands with the most pop hits songs in Indonesia. KAHITNA released their debut album titled "Cerita Cinta" in 1994. The song was a huge success and the album received platinum award. Now, after more than 30 years in the music industry, they continue producing new songs and collaborate with many young talented musicians. KAHITNA is still one of the most awaited performance with thousands of fans ready to sing-along everytime the band is on stage.`
    },
    {
      id: 7,
      image: "image-18.jpg",
      text: "the adams",
      bg: 'image-11.svg',
      description: `" The Adams was formed in Jakarta, Indonesia in 2002 on the grounds of the Jakarta Institute of Arts, a fertile environment for kids looking to start a band. (See also: Naif, Rumah Sakit ,The Upstairs ,Goodnight Electric ,White Shoes & Couples Company.) Their blend of crunching guitars, sweet harmonies, memorable melodies and relatable lyrics promptly placed them among the leading lights of the city's emerging independent music scene, releasing albums The Adams and V2.05 to commercial and critical acclaim in 2005 and 2006 respectively, while building up a nationwide following through a rigorous touring schedule. It is a testament to the strength of songs such as Konservatif, Waiting , Halo Beni and Hanya Kau that the band remains an in-demand live act that has performed at various major Indonesian music festivals and served as the opening act for renowned British band 's Bloc Party Jakarta date during their 2013 Asia tour. In 2017 the band made its entire back catalogue available on digital music services, including the B Release EP which collects previously-released non-album tracks and an all-new version of Glorious TIme. In 2019, The Adams released their long-awaited third album, Agterplass, with songs such as Pelantur, Masa-Masa, and Timur quickly becoming firm fan favorites. The Adams consists of Ario Hendarwan (vocals, guitar), Saleh Husein (vocals, guitar), and Gigih Suryo Prayogo (vocals, drums)."`

    },
    {
      id: 8,
      image: "image-19.jpg",
      text: "jkt48",
      bg: 'image-11.svg',
      description: `"J-K-T forty-eight") is an Indonesian-Japanese idol girl group whose name is derived from the IATA airport code for the Jakarta metropolitan area ("JKT") and the Japanese idol group AKB48, owned by IDN (in Indonesia) and under license from Superball (a subsidiary of Vernalossom, from Japan). Formed in 2011, the group is the first AKB48 sister group outside of Japan and adopted the concept of "idols you can meet",[1] before switching to "idols that will come to meet you" in April 2018. The group opened their own theater to hold regular performances under the name "JKT48 Theater" located on the 4th floor of the fX Sudirman shopping mall in Central Jakarta, Jakarta on 8 September 2012, where fans can attend daily performances which are subject to change at any time at this time. While JKT48 membership is not limited to any nationality, applicants must be residents of Indonesia. As of 1 May 2025 evening, the group has 57 individual members On 16 February 2013, JKT48 released its first studio album Heavy Rotation via Hits Records, a division of MNC subsidiary PT Star Media Nusantara. The group typically performs songs by AKB48 and other sister groups translated into Indonesian.[3] The group released their first original single "Rapsodi" in January 2020. Conception Much like AKB48, the female Japanese idol group formed in 2005 in Akihabara, Tokyo, JKT48 is based on the concept of idols with whom fans can greet and develop connections. JKT48 takes its name from the group's base city of Jakarta, Indonesia. The country was seen as a potential market for the idol business because of its relatively young population and the popularity of Japanese manga series. In order to bring the concept of AKB48 to Indonesia, producer Yasushi Akimoto and Dentsu Media Group Indonesia partnered with the country's largest media conglomerate, Global Mediacom, and Rakuten. In an interview on CNN's TalkAsia program, Akimoto responded to the question of why he selected Indonesia as the first target of AKB48's overseas expansion: "People in Indonesia were interested in AKB48. That is why we decided to try it in Jakarta. Kids watched AKB on the internet and they want to do the same, but they don't know whether they have talent. Also it's difficult [for them] to go to Japan to audition.`

    },
    {
      id: 9,
      image: "image-20.jpg",
      text: "hindia",
      bg: 'image-11.svg',
      description: `So much can be said about Hindia, some of which is summed up by Doves, ‘25 on Blank Canvas, the latest release from the Indonesian game changer. In this surprise mixtape, he expands his sonic canvas with the help of new collaborators including electro pop duo White Chorus and his live backing band, Blue Valley Radio. Meanwhile, his lyrics remain as deeply personal as ever, acting as a journal that navigates the loss of his beloved cats, broken relationships and the broken state of the nation. It’s this combination of consistent musical evolution, vulnerable introspection and trailblazing that has put Hindia at the forefront of the Indonesian music scene. Having brought his university rock band .Feast to national recognition in 2018, few would’ve expected Baskara Putra to pivot to a parallel solo career as Hindia and reach even greater heights through his now-classic 2019 debut album Menari Dengan Bayangan and its ambitious double-length follow-up from 2023, Lagipula Hidup Akan Berakhir. Meanwhile, Lomba Sihir - his former backing band of which he remains an integral part - has also emerged to become a major player in its own right. With multiple AMI Awards wins and nominations for all three of his projects, over a billion streams, legions of die-hard fans across Southeast Asia who hang on to his every word, and a tendency for his quotes to trigger social media firestorms, don’t be surprised if there’s still much more to say about Hindia - including from Hindia himself.`

    },
    {
      id: 10,
      image: "image-21.jpg",
      text: "the changcuters",
      bg: 'image-11.svg',
      description: `The Changcuters is an Indonesian garage rock and roll band formed in 2004 in Bandung. The Band consists of Tria (vocal), Qibil (guitar/vocal), Alda (guitar), Dipa (bass), and Erick (drums/vocal). They have released seven albums, namely Mencoba Sukses (2006), Mencoba Sukses Kembali (2008), The Changcuters dan Misteri Kalajengking Hitam (2009), Tugas Akhir (2011), Visualis (2013), Binauralis (2016) and Loyalis (2020).`

    },
    {
      id: 11,
      image: "lineup/image-6.jpg",
      text: "elijah woods [...",
      bg: 'image-11.svg',
      description: `Hailing from Ottawa and now based in Los Angeles, elijah woods is a multi-faceted, multi-platinum pop artist, singer-songwriter, and producer. Renowned for his irresistibly catchy melodies, vivid storytelling, and signature production, he has established himself as one of pop music’s most compelling solo acts, as well as a highly sought-after collaborator. elijah creates music that radiates raw emotion, pulling listeners into a captivating whirlwind of heartache, hope, and everything in between. With 4x JUNO Award nominations, multiple platinum and gold records, and over 1 billion career streams to date, elijah's rise as an independent artist has been extraordinary. In just the past three years, he’s released five EPs and numerous standout singles. After selling out his first Canadian headline tour in 2023, elijah exploded onto the international stage, selling out shows in Hong Kong, Tokyo, and Singapore. He opened for Niall Horan in Jakarta and lit up the Seoul Jazz Festival alongside Lauv, Jeremy Zucker, and JP Saxe. His momentum carried him to the UK, where he made his debut at BST Hyde Park, and this summer, he returns to Asia for another run of sold-out dates. Most recently, he was featured on the cover of Esquire Singapore, a testament to his rapidly growing global reach. With his debut album slated for release later this year, elijah woods is poised to make 2025 his biggest chapter yet.`

    },
    {
      id: 12,
      image: "lineup/image-7.jpg",
      text: "Ardhito Pramono",
      bg: 'image-11.svg',
      description: `"Ardhito Pramono is one of the young Indonesian old-soul musician. Music has been flowing in his blood since childhood. Ardhito Pramono taught himself to play piano and other musical instruments from the age of 14. The progress of the digital world he utilized to upload the music he created since 2013, when he was studying at JMC Academy, Australia, Department of Film. His first appearance on YouTube was doing Ella Fitzgerald's song ""What are you doing new year's eve?"". Despite that, he also write and recorded his own music. The first song titled “The Bitterlove”, then followed by “What Do You Feel About Me” – that became one of the most watched songs on YouTube. Before YouTube, he also use other digital channels such as Soundcloud and Spotify. However, nowadays he focuses on many digital platforms such as, Youtube and online music streaming platforms. ""I can display the visuals when I sing while playing a variety of musical instruments such as guitar or piano,” he said. In 2017 he signed by an international music label Sony Music and his first song that he wrote is “Bila” became one of the soundtrack of Ernest Prakasa’s movie “Susah Sinyal”. His debut single ""Fake Optics"" release on April 2018, and on August 2018 Ardhito Pramono releasing his new version of ""Bitterlove"" and on February 2019 he released his first EP ""a letter to my 17 year old""."`

    },
    {
      id: 13,
      image: "lineup/image-8.jpg",
      text: "Afgan",
      bg: 'image-11.svg',
      description: `Afgan has been redefining Indonesian music on the global stage with his commanding vocals, emotionally charged songwriting and R&B sensibilities. Over his illustrious career, he's built a massive passionate fanbase of nearly 20 million followers across his social media and hundreds of millions of streams across his music catalog. His 2021 groundbreaking album, Wallflower —his first English project and foray into the global pop market- spotlighted his influence and opened new doors for the Jakarta-based superstar. The album's top singles, which included "M.I.A" featuring Jackson Wang, "Touch Me" (Remix by Robin Thicke), "Say I'm Sorry," and "If I Don't Have Your Love," have generated more than 40 million streams. As Afgan's star quality continues to take stock internationally, he sets the stage for "Sonder", his most personal body of work yet, which is set to be released later this year.`
    },
    {
      id: 14,
      image: "lineup/image-9.jpg",
      text: ".Feast",
      bg: 'image-11.svg',
      description: `For nearly ten years, with dozens of artistic works and hundreds of thousands of monthly listeners, .Feast became a group in today’s music scene that expresses loudly various states of affairs. They consistently write lyrics about the situation in society and anything related to the country's politics. The band voiced all the issues with vibrant, modern, furious, majestic, easy-to-listen, and danceable music. .Feast was founded in 2013, consisting of Baskara Putra (Hindia) (vocals, synth), Adnan Satyanugraha Putra (guitar), Dicky Renanda (guitar) & Fadli Fikriawan (bass). They went through a rough ride at the beginning of their career before starting to get attention in 2017 with their debut full-length album, Multiverses. The album's variety of music exhibits the differences in members' backgrounds and musical references. .Feast has this major idea called 'Earth,' a fictional universe concept representing a real story in their work. Multiverses and the latest album Abdi Lara Insani: Edisi Lengkap (2022), is 'Earth-03', a caricature about horizontal conflicts between tribes, religions, races, and groups of people in the real world. The EP Beberapa Orang Memaafkan (2018) is 'Earth-02', an actual representation of the world we live in. The EP Uang Muka (2020) is 'Earth-08', the facts about worshiping money. One of the stories to be forthcoming is Membangun dan Menghancurkan, 'Earth-05', which tells the individual beliefs.`

    },
    {
      id: 15,
      image: "lineup/image-10.jpg",
      text: "Batas Senja",
      bg: 'image-11.svg',
      description: `Batas Senja is an Indonesian indie band known for its emotional blend of pop, folk, and mellow ballads. Formed in the early 2020s, the band gained attention through heartfelt lyrics and simple yet touching melodies. The name Batas Senja, meaning "Twilight Boundary," reflects their reflective and melancholic musical style, often exploring themes of love, loss, and introspection.`

    },
    {
      id: 16,
      image: "lineup/image-11.jpg",
      text: "Bilal Indrajaya",
      bg: 'image-11.svg',
      description: `Bilal Indrajaya is a singer and songwriter from Jakarta who is known for his melancholic style of old soul music. His passion in music sparked after meeting drummer Widi Puradiredja and guitarist Vega Antares. Not long after, "Biar" was born in 2015, which was only officially released after three years later. “Ruang Kecil” became his second single which was released in 2019. In the same year, Bilal released his first mini album titled "Purnama". Containing 6 tracks, this EP more or less describes Bilal's musical direction as a baritone singer who has a unique musical character and an old soul. In the end of the pandemic era, Bilal released "Niscaya". This song, which was produced by Laleilmanino, is a turning point for him as a musician - a song that opens his musical horizons to a more creative landscape with a pop musical direction wrapped in jazzy nuances. In 2022, Bilal Indrajaya was officially signed by Aksara Records, a legendary record label that houses several big names in the 2000s era from SORE, White Shoes and The Couples Company, The Adams and many more. "Saujana" became the debut single as well as Bilal Indrajaya's debut professionally through Aksara Records, which followed by his debut album “Nelangsa Pasar Turi” a year later.`

    },
    {
      id: 17,
      image: "lineup/image-12.jpg",
      text: "D'Bagindas",
      bg: 'image-11.svg',
      description: `"D'Bagindas is an Indonesian pop band formed in 2009, known for their romantic, melodic songs and Malay-influenced pop style. The group was originally composed of Bian (vocals), Mike (guitar), Andra (keyboard), and Pengpeng (bass). They rose to fame quickly with their easy-listening music and heartfelt lyrics about love and heartbreak. The band's breakthrough came with their debut album “C.I.N.T.A” in 2010, which featured hit singles like “C.I.N.T.A,” “Empat Mata,” and “Maafkan.” These songs became massively popular in Indonesia for their catchy melodies and relatable lyrics, often sung in a mellow, acoustic-pop style. D'Bagindas’ music is heavily influenced by Malay pop and ballads, similar in vibe to bands like ST 12 and Wali. Their songs typically feature themes of unrequited love, forgiveness, and emotional reflection, making them favorites for radio play and public sing-alongs. Throughout their career, D'Bagindas has released multiple albums and continued to perform across Indonesia. The band experienced several lineup changes, most notably the departure of lead vocalist Bian, who later pursued a solo career. Despite this, D'Bagindas has managed to maintain a presence in the Indonesian music industry, adapting their sound while keeping their romantic style intact."`


    },
    {
      id: 18,
      image: "lineup/image-13.jpg",
      text: "Daun Jatuh",
      bg: 'image-11.svg',
      description: `Daun Jatuh is a folk-pop group from Tangerang, Indonesia, consisting of Verrel Alvirizky (vocals) and Timothy Gunung Tua (guitar). The name “Daun Jatuh” (Falling Leaves) symbolizes their journey of coming together to form a new band after previous musical endeavors did not succeed. They liken themselves to fallen leaves that reunite, grow higher, and bloom more beautifully. Their music blends poetic lyrics with soothing folk-pop melodies, resonating with listeners experiencing love or heartbreak. The themes in Daun Jatuh’s songs often explore love in everyday life, whether in friendships or family relationships. Indonesian music enthusiasts refer to this genre as “Musik Senja” (Twilight Music). Daun Jatuh gained wider recognition in Indonesia after their song “Resah Jadi Luka” went viral on short video platforms. The track has remained on Spotify’s Top 200 charts and has garnered over 160 million streams on Spotify and 70 million views on YouTube. The band has released two EPs: *Seroja* and *Seruni*, both well-received by their fanbase, known as “Hamparan Hijau” (Green Field). They are currently preparing new material for release in 2024.`
    },
    {
      id: 19,
      image: "lineup/image-14.jpg",
      text: "Feel Koplo",
      bg: 'image-11.svg',
      description: `Coming as a Electronic Dance Dangdut Music Trio from Indonesia, Feel Koplo has been creating "digital manipulation" music since October 2018. They combine two peculiar poles of music, segmented cutting-edge and popular grassroots, resulting in specific boundaries-bending Electronic Dance Dangdut music that can be enjoyed by all kinds of people.`

    },
    {
      id: 20,
      image: "lineup/image-15.jpg",
      text: "Dongker",
      bg: 'image-11.svg',
      description: `"Dongker is a Punk band based on Bandung, West Java. Playing three chords song with fast tempo. Recommended for fans of Protex, The Hex Dispenser, and Exploded Hearts. With a fool's demeanor and sometimes make love and heartbreaking songs."`
    },
    {
      id: 21,
      image: "lineup/image-16.jpg",
      text: "Idgitaf",
      bg: 'image-11.svg',
      description: `The girl in the bloom of youth by the name of Idgitaf wishes to grow and heal with her music. Through her music journey, she wishes to not only help herself, but also others too.`

    },
    {
      id: 22,
      image: "lineup/image-17.jpg",
      text: "J-Rocks",
      bg: 'image-11.svg',
      description: `J-Rocks is an Indonesian rock band formed in 2002. It consists of Iman (lead vocals, rhythm guitar), Sony (lead guitar), Wima (bass guitar) and Anton (drums). Their music is heavily influenced by Japanese rock bands. J-Rocks fans are called J-Rockstars. The band's name, "J-Rocks", comes from "J" representing their origin, Jakarta; and "Rockstar" because they wanted their fans to be called “Rockstars”`

    },
    {
      id: 23,
      image: "lineup/image-18.jpg",
      text: "Mentari Novel",
      bg: 'image-11.svg',
      description: `Mentari Novel is an Indonesian singer-songwriter and actress from Sukabumi, West Java. She began her career in beauty pageants before pursuing music independently under her own label, Novel Records, starting around 2020. Mentari released her debut pop-rock album That Girl in 2024, known for emotional and personal themes. She also collaborates with other artists, blending classic and modern influences in her music.`

    },
    {
      id: 24,
      image: "lineup/image-19.jpg",
      text: "Suara Kayu",
      bg: 'image-11.svg',
      description: `Suara Kayu is an Indonesian folk-pop duo formed on May 7, 2020, during the COVID-19 pandemic. The group consists of Ingrid Tamara (ukulele and vocals) and Dewangga Elsandro (guitar), who initially gained recognition as cover musicians on YouTube before deciding to create original songs. The name "Suara Kayu," which means "Wooden Voice," reflects their primary instruments—ukulele and guitar—both made of wood, highlighting the acoustic vibe of their music. Their debut single, "Miniatur," quickly caught attention and made it to Spotify’s Viral Top 50 chart. Since then, Suara Kayu has released several works, including two EPs and collaborations with notable artists like Fiersa Besari and Feby Putri. In 2024, they released their full-length album Banyak Canda, Tapi Serius, showcasing more diverse musical exploration. Having joined Warner Music Indonesia at the end of 2020, Suara Kayu is now recognized for their light yet meaningful songs and lyrics that resonate closely with everyday life.`

    },
    {
      id: 25,
      image: "lineup/image-20.jpg",
      text: "YUPS",
      bg: 'image-11.svg',
      description: `With a mix of genres that includes EDM, house, techno, and trap, YUPS knows how to read the crowd and deliver unforgettable experiences on the dance floor. Her skillful transitions, bold track selections, and captivating stage presence have earned her a growing fanbase and bookings at various events and clubs across the region. YUPS is also a symbol of empowerment in the male-dominated world of electronic music, proving that talent, dedication, and authenticity can break barriers and inspire others.`
    },
  ]

  return (
    <>

      <div className='w-full h-100 bg-red-300 absolute z-10' style={{
        background: 'linear-gradient(0deg, rgb(19, 19, 19) 8%, rgba(19, 19, 19, 0.6) 50%, rgba(19, 19, 19, 0.2) 100%)',
      }}>
        <Navbar />
        <div className='absolute z-12 w-full h-auto flex flex-col items-center mt-30 px-4 sm:mt-28 md:mt-40'>
          {/* Main Heading Section */}
          <div className='flex flex-col sm:flex-row sm:items-center sm:gap-2 text-center sm:text-left'>
            <h1 className='text-3xl sm:text-5xl text-white bebas-font mb-2 sm:mb-0'>Featuring</h1>

            {/* Highlighted Word with Background */}
            <span className='relative flex justify-center sm:inline'>
              <img className='w-44 sm:w-64 h-auto' src="bg-text.svg" alt="" />
              <h1 className='absolute top-1 left-3 text-3xl sm:text-5xl bebas-font text-white'>
                Extraordinary
              </h1>
            </span>

            <h1 className='text-3xl sm:text-5xl text-white bebas-font mt-2 sm:mt-0'>line up</h1>
          </div>

          {/* Subtext */}
          <p className='text-sm sm:text-lg text-[#b6b6b6] font-medium mt-2'>
            In Alphabetical Order
          </p>
        </div>

      </div>

      <div className='h-100 w-full'>
        <BG images={['lineup/image-1.webp', 'lineup/image-2.webp', 'lineup/image-3.webp', 'lineup/image-4.webp']} height={'h-100'} />
      </div>

      <div className='w-full absolute z-70 h-auto bg-[#131313] flex flex-col items-center pt-5 '>
        <div className='w-60 h-9 bg-white rounded-lg text-md font-[500] flex pl-3'>
          <img className='w-5 h-5 mt-2 mr-3' src="lineup/image-5.svg" alt="" />
          <input className='w-full h-9 text-md outline-none' type="text" placeholder='Search Performer' />
        </div>

        <div className='flex pt-20 sm:px-20 pb-20'>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {cards.map((items) => (
              <div key={items.id} onClick={() => setSelectedCard(items)} className="cursor-pointer">
                <Card
                  image={items.image}
                  text={items.text}
                  bg={items.bg}
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>

      {/* Footer */}

      {/* Popup Modal */}
      {selectedCard && (
        <div className="fixed inset-0  bg-opacity-10 overflow-y-auto scrollbar-hide  flex justify-center h-auto z-70">
          <div className="bg-black text-white rounded-3xl sm:h-[130vh] h-[110vh]  sm:w-[60vw] w-[70vw] mb-20 mt-10 relative ">
            <button
              className="absolute top-2 right-3 text-5xl text-gray-600 "
              onClick={() => setSelectedCard(null)}
            >
              &times;
            </button>
            <div className='flex '>
              <img src={selectedCard.image} alt={selectedCard.text} className="rounded-3xl mb-7  max-h-100 object-cover  mx-auto w-full" />
              <h2 className="text-4xl font-bold bebas-font absolute sm:mt-90 mt-55 sm:ml-10 ml-5 text-white   mb-2">{selectedCard.text}</h2>
            </div>
            <p className="text-gray-700 text-sm  h-[44vh] px-4 text-white line-clamp-3 ">{selectedCard.description}</p>
            <div className='flex sm:gap-4 gap-2 items-center sm:mt-10 mt-4 sm:ml-10 ml-1' >
              <p className='bebas-font text-[#cccccc] text-[18px] sm:block hidden'>follow us</p>
              <img className='w-7 h-7' src="image-66.svg" alt="" />
              <img className='w-7 h-7' src="image-67.svg" alt="" />
              <img className='w-7 h-7' src="image-68.svg" alt="" />
              <img className='w-7 h-7' src="image-69.svg" alt="" />
              <img className='w-7 h-7' src="image-70.svg" alt="" />
              <img className='w-7 h-7' src="image-71.svg" alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Lineup
