import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Aos from 'aos';
import Popper from '@material-ui/core/Popper';
import Link from 'next/link'


export default function Home(props) {
  const projectsData = [
    {
      "title": "Notefield",
      "body": {
        "en": "A note-taking app made with React libary for the front-end, and Express for the API. I made this because I feel like all note-taking app in the market isn't good enough for me.",
        "id": "Aplikasi catatan dibuat dengan library React serta Express untuk pembuatan API. Saya membuat ini karena saya merasa aplikasi catatan yang sudah ada di pasar belum mencukupi kebutuhan saya.",
        "jp": "ReactとExpressで構築したメモ帳のアプリ。私がこのアプリを構築した理由は現在にあるメモ帳アプリが物足りないと思ったからです。"
      },
      "image": "/assets/projects-thumbnail/notefield.png",
      "tags": [
        "React",
        "Sass",
        "Express",
        "MongoDB"
      ],
      "href": "https://notefield.rzqjpg.xyz/"
    },
    {
      "title": "react-todo",
      "body": {
        "en": "A to-do list app made with React library for the front-end, and Express for the API.",
        "id": "Aplikasi to-do list dibuat menggunakan React dan Express.",
        "jp": "ReactとExpressで構築したToDoリストアプリ"
      },
      "image": "/assets/projects-thumbnail/react-todo.png",
      "tags": [
        "React",
        "Sass",
        "Express",
        "MongoDB"
      ],
      "href": "https://muhrizqiardi-react-todo.herokuapp.com/"
    },
    {
      "title": "creative@home",
      "body": {
        "en": "A website my team created for a web design competition.",
        "id": "Website yang dibuat berkolaborasi dengan tim untuk kompetisi web design.",
        "jp": "私のチームがウェブデザインコンペのために制作したウェブサイトです。"
      },
      "image": "/assets/projects-thumbnail/creative-at-home.png",
      "tags": [
        "JavaScript"
      ],
      "href": "https://varcode-project.github.io/creative-at-home/"
    },
    {
      "title": "Koffee Khayalaan Store",
      "body": {
        "en": "An e-commerce and a landing website for a fictional cafe. Made with Next.js for the front-end and Strapi as the headless CMS to provide an API to the front-end side.",
        "id": "Website toko online serta landing website untuk kafe fiksional. Dibuat dengan Next.js serta Strapi CMS.",
        "jp": "喫茶店のオンラインショップとランディングページ。Next.jsとStrapi CMSを使って制作しました。"
      },
      "image": "/assets/projects-thumbnail/Koffee-Khayalaan.png",
      "tags": [
        "React",
        "Next.js",
        "Sass",
        "Strapi"
      ],
      "href": "https://koffee-khayalaan.rzqjpg.xyz/"
    },
    {
      "title": "muhrizqiardi.github.io",
      "body": {
        "en": "This (beautiful) website.",
        "id": "Website ini.",
        "jp": "現在のウェブサイトです。"
      },
      "image": "/assets/projects-thumbnail/muhrizqiardi.github.io.png",
      "tags": [
        "React",
        "Next.js",
        "Tailwind CSS"
      ],
      "href": "https://muhrizqiardi.github.io/"
    },
    {
      "title": "My Blog",
      "body": {
        "en": "The place where I share my thougts.",
        "id": "Tempat saya membagikan opini dan pikiran saya.",
        "jp": "私のブログサイトです。"
      },
      "image": "/assets/projects-thumbnail/my-blog.png",
      "tags": [
        "React",
        "Next.js",
        "Sass",
        "Strapi"
      ],
      "href": "https://muhrizqiardi-blog.vercel.app/"
    },
    {
      "title": "Quickstore",
      "body": {
        "en": "An ecommerce site made using Next.js and Commerce.js",
        "id": "Situs ecommmerce dibuat menggunakan Next.js dan Commerce.js",
        "jp": "Next.jsとCommerce.jsを使用して作ったオンラインショップのウェブサイトです。"
      },
      "image": "/assets/projects-thumbnail/quickstore.png",
      "tags": [
        "React",
        "Next.js",
        "Commerce.js",
        "Bootstrap",
      ],
      "href": "https://quickstore.rzqjpg.xyz/"
    },
    {
      "title": "Mora Inc. Website",
      "body": {
        "en": "A template for a company/business profile website, made using TailwindCSS.",
        "id": "Template untuk situs profil perusahaan/bisnis, dibuat menggunakan TailwindCSS",
        "jp": "企業サイトのテンプレートです。TailwindCSSを使用して作りました。"
      },
      "image": "/assets/projects-thumbnail/mora-inc.png",
      "tags": [
        "TailwindCSS",
      ],
      "href": "https://mora.rzqjpg.xyz/"
    },
  ];
  const [scrollState, setScrollState] = useState(false);
  const [mobileState, setMobileState] = useState(false);
  const [navState, setNavState] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [langState, setLangState] = useState("en");

  const handlePopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleNav = () => {
    setNavState(x => !x);
  }

  const handleLangState = (lang) => {
    setLangState(lang);
  }

  useEffect(() => {
    window.onscroll = (e) => {
      if (document.scrollingElement.scrollTop > 3) {
        setScrollState(true);
      } else {
        setScrollState(false);
      }
    }
    if (window.innerWidth > 1024) {
      setMobileState(false);
    } else {
      setMobileState(true);
    }
  });

  useEffect(() => {
    // Detect device language
    const userLang = ['en', 'id', 'jp'].includes(navigator.language) ? navigator.language : 'en';
    setLangState(userLang);

    // Initialize AOS 
    Aos.init({
      offset: 0
    })
  }, []);


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <header id="header" className={`px-5 md:px-20 sticky top-0 z-40 ${scrollState ? " bg-light shadow-md" : ""}`}>

        {/* Navbar */}
        <div className={`navbar h-14 flex flex-row items-center justify-between py-2`}>
          <a href={`/${langState}`}><img src="/assets/animated_signature.svg" alt="" className=" h-11" /></a>
          <nav
            className="fixed top-0 left-0 flex flex-col justify-center items-center h-96 w-screen lg:flex lg:flex-row lg:static lg:bg-transparent lg:w-max lg:h-auto text-sm text-gray-700 "
            style={{
              transform: mobileState ? (navState ? "translateY(0)" : "translateY(-120%)") : "translateY(0)",
              transition: 'transform',
              transitionDuration: (navState ? "500ms" : "0")
            }}
          >
            <Link href="#projects-section" passHref>
              <a onClick={handleNav} className="px-3 py-2 hover:bg-gray-300 rounded-md" href={`#projects-section`}>
                {langState === 'en' && 'Projects '}
                {langState === 'id' && 'Proyek '}
                {langState === 'jp' && 'プロジェクト '}
              </a>
            </Link>
            <Link href="#contacts" passHref>
              <a onClick={handleNav} className="px-3 py-2 hover:bg-gray-300 rounded-md" href={`#contacts`}>
                {langState === 'en' && 'Contact '}
                {langState === 'id' && 'Kontak '}
                {langState === 'jp' && '連絡 '}
              </a>
            </Link>
            {langState === 'id' &&
              <a onClick={handleNav} className="px-3 py-2 hover:bg-gray-300 rounded-md" href={`/jasaweb`}>
                Jasa Pembuatan Website{' '}
                <i className='bx bx-link-external' ></i>
              </a>
            }
            {langState === 'en' &&
              <a onClick={handleNav} className="px-3 py-2 hover:bg-gray-300 rounded-md" href={`/web-services`}>
                Create a Website{' '}
                <i className='bx bx-link-external' ></i>
              </a>
            }
            <a onClick={handleNav} className="px-3 py-2 hover:bg-gray-300 rounded-md" target="_blank" href={`https://muhrizqiardi-blog.vercel.app/`}>
              {langState === 'en' && 'Blog '}
              {langState === 'id' && 'Blog '}
              {langState === 'jp' && 'ブログ '}
              <i className='bx bx-link-external' ></i>
            </a>
            <button onClick={handlePopper} className="px-2 py-3 hover:bg-gray-300 rounded-md font-black uppercase"><i className='bx bx-globe relative ' style={{ top: 1 }}></i> {langState ? langState : "EN"} <i className='bx bx-caret-down' style={{ top: 1 }}></i></button>
            <button onClick={handleNav} className="lg:hidden rounded-full my-5 bg-dark text-light w-10 h-10">
              <i className="bx bx-x text-4xl z-40" />
            </button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <>
                <div className="bg-white shadow-md text-center overflow-hidden mt-3 border border-gray-400 rounded flex flex-col justify-center items-center">
                  <div onClick={() => { handleLangState('en'); handlePopper() }} className="hover:bg-gray-200 cursor-pointer py-3 px-5 border-b border-gray w-full">English</div>
                  <div onClick={() => { handleLangState('id'); handlePopper() }} className="hover:bg-gray-200 cursor-pointer py-3 px-5 border-b border-gray w-full">Bahasa Indonesia</div>
                  <div onClick={() => { handleLangState('jp'); handlePopper() }} className="hover:bg-gray-200 cursor-pointer py-3 px-5 border-b border-gray w-full">日本語</div>
                </div>
              </>
            </Popper>
          </nav>
          <button className="lg:hidden" onClick={handleNav} alt="menu">
            <i className="bx bx-menu text-4xl z-40"></i>
          </button>
        </div>


      </header>

      {/* Hero */}
      <section id="hero" className="px-5 md:px-20 pt-2 pb-10 grid grid-cols-1 lg:grid-cols-3">

        {/* Image */}
        <div className="flex justify-center items-center m-5 lg:mr-7">
          <img id="hero-img" src="/assets/me.jpg" alt="My Picture" width="250px" height="250px" className="rounded-full drop-shadow-xl" />
        </div>

        {/* Hero Text */}
        {
          (langState === 'en') &&
          <div className="hero-text col-span-2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:ml-2">
            <h3 id="greeting" className=" font-normal text-gray-900 text-2xl">Hi, I'm <br /></h3>
            <h1 id="name" className="font-black text-3xl lg:text-6xl pb-3">Muhammad Rizqi Ardiansyah.</h1>
            <p id="desc" className="text-xl  font-normal text-gray-900 my-1 anim-2">
              An <span className="bg-text-1 font-bold text-black bg-primary">Informatics Engineering student</span> and a <span className="bg-text-2 font-bold text-black bg-primary">web developer</span> passionate about technology.
            </p>
          </div>
        }
        {
          (langState === 'id') &&
          <div className="hero-text col-span-2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:ml-2">
            <h3 id="greeting" className=" font-normal text-gray-900 text-2xl">Halo, saya <br /></h3>
            <h1 id="name" className="font-black text-3xl lg:text-6xl pb-3">Muhammad Rizqi Ardiansyah.</h1>
            <p id="desc" className="text-xl  font-normal text-gray-900 my-1 anim-2">
              Seorang <span className="bg-text-1 font-bold text-black bg-primary">Mahasiswa Teknik Informatika</span> dan <span className="bg-text-2 font-bold text-black bg-primary">web developer</span> yang passionate dengan teknologi.
            </p>
          </div>

        }
        {
          (langState === 'jp') &&
          <div className="hero-text col-span-2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:ml-2">
            <h3 id="greeting" className=" font-normal text-gray-900 text-2xl">Hi, 私は <br /></h3>
            <h1 id="name" className="font-black text-3xl lg:text-6xl pb-3">Muhammad Rizqi Ardiansyah.</h1>
            <p id="name-alt" className="text-md  font-normal text-gray-900 my-1 ">
              ムハマド・リズキ・アルディアンシャー
            </p>
            <p id="desc" className="text-xl  font-normal text-gray-900 my-1 ">
              私は技術の世界に情熱を注ぐ<span className="bg-text-1  text-white bg-primary">情報工学学生</span>と<span className="bg-text-2  text-white bg-primary">ウェブ開発者</span>です。
            </p>
          </div>
        }

      </section>

      {/* Web Dev Promo */}
      {!(langState === 'jp') && <section className="promo bg-primary flex flex-col items-center p-5">
        <p className="  text-center">
          {langState === 'en' && "Looking to create a website? I can create it for you!"}
          {langState === 'id' && "Ingin membuat website? Saya bisa bantu!"}
        </p>
        {langState === 'en' &&
          <a className="" href="/web-services">
            <div className="px-3 py-2 mt-2 rounded-md bg-gray-800 hover:bg-gray-600 w-max text-white text-center">
            Learn more
            </div>
          </a>
        }
        {langState === 'id' &&
          <a className="" href="/jasaweb">
            <div className="px-3 py-2 mt-2 rounded-md bg-gray-800 hover:bg-gray-600 w-max text-white text-center">
            Pelajari lebih lanjut
            </div>
          </a>
        }
      </section>}

      {/* Projects */}
      <section id="projects" className="bg-dark px-5 lg:px-36 py-5 lg:py-10 border-b-8 border-primary">
        <div id="projects-section" className="relative bottom-20"></div>
        <h1 data-aos="fade-up" className="text-center text-white text-2xl lg:text-3xl font-bold mb-5 lg:mb-10">
          {langState === 'en' && 'Projects'}
          {langState === 'id' && 'Proyek'}
          {langState === 'jp' && 'プロジェクト'}
        </h1>
        <div className="projects-list grid gap-4 grid-cols-1 lg:grid-cols-3">
          {
            projectsData.map(project =>
              <Card
                title={project.title}
                body={project.body[langState]}
                tags={project.tags}
                image={project.image}
                href={project.href}
              />
            )
          }
        </div>
        <h1 className="text-center text-lg text-blue-400 mt-10 lg:mb-10 hover:underline">
          <a href="http://github.com/muhrizqiardi" target="_blank" rel="noreferrer" rel="noopener">
            {langState === 'en' && <>Find out more at my <span className="font-bold"> <i className='bx bxl-github'></i> GitHub</span> <i className='bx bx-link-external' ></i></>}
            {langState === 'id' && <>Selebihnya bisa kunjungi <span className="font-bold"> <i className='bx bxl-github'></i> GitHub</span> <i className='bx bx-link-external' ></i> saya</>}
            {langState === 'jp' && <>詳しくは私の<span className="font-bold"> <i className='bx bxl-github'></i> GitHub</span> <i className='bx bx-link-external' ></i>をご覧ください。</>}
          </a>
        </h1>
      </section>

      {/* Contacts */}
      <section id="contacts" className="bg-light p-5 lg:px-48 lg:py-10 flex justify-center items-center border-b-8 border-primary">
        <div data-aos="fade-up" className="contact-list p-10 lg:px-20 lg:py-10 w-full flex flex-col items-center justify-center text-center ">

          <span className="handshake text-5xl mb-4">🤝</span>
          {
            langState === 'en' &&
            <>
              <h1 className="font-bold text-4xl mb-4">I'm open to partnerships!</h1>
              <p>I'm currently open for <span className="bg-primary font-bold ">freelance</span> and <span className="bg-primary font-bold">internship</span> position. Hit me up!</p>
            </>
          }
          {
            langState === 'id' &&
            <>
              <h1 className="font-bold text-4xl mb-4">Saya terbuka untuk partnerships!</h1>
              <p>Saat ini saya terbuka untuk posisi <span className="bg-primary font-bold">freelance</span> dan <span className="bg-primary font-bold">magang</span>. Jika tertarik untuk bekerja sama dengan saya, silahkan hubungi saya melalui kontak-kontak dibawah ini:</p>
            </>
          }
          {
            langState === 'jp' &&
            <>
              <h1 className="font-bold text-4xl mb-4">私はパートナーシップを歓迎します。!</h1>
              <p>現在、<span className="bg-primary font-bold">フリーランス</span>や<span className="bg-primary font-bold">インターンシップ</span>の募集をしています。ご興味のある方は、ぜひご連絡ください。</p>
            </>
          }
          <div className="my-5 flex flex-wrap items-center justify-center">
            <a target="_blank" rel="noreferrer" rel="noopener" href="https://github.com/muhrizqiardi" className="transition duration-100 rounded cursor-pointer hover:scale-105 bg-gray-600 px-4 py-3 m-2 text-white"><i className='bx bxl-github'></i> GitHub</a>
            <a target="_blank" rel="noreferrer" rel="noopener" href="https://instagram.com/muhrizqiardi" className="transition duration-100 rounded cursor-pointer hover:scale-105 bg-red-700 px-4 py-3 m-2 text-white"><i className='bx bxl-instagram'></i> Instagram</a>
            <a target="_blank" rel="noreferrer" rel="noopener" href="https://www.linkedin.com/in/muhammad-rizqi-ardiansyah-a072761b5/" className="transition duration-100 rounded cursor-pointer hover:scale-105 bg-blue-900 px-4 py-3 m-2 text-white"><i className='bx bxl-linkedin'></i> LinkedIn</a>
            <a target="_blank" rel="noreferrer" rel="noopener" href="https://twitter.com/muh_rizqi_ardi" className="transition duration-100 rounded cursor-pointer hover:scale-105 bg-blue-600 px-4 py-3 m-2 text-white"><i className='bx bxl-twitter'></i> Twitter</a>
            <a target="_blank" rel="noreferrer" rel="noopener" href="/files/Resume.pdf" className="transition duration-100 rounded cursor-pointer hover:scale-105 bg-dark px-4 py-3 m-2 text-white"><i className='bx bx-file'></i> Resume</a>
            <a target="_blank" rel="noreferrer" rel="noopener" href="mailto:muhrizqiardi@gmail.com" className="transition duration-100 rounded cursor-pointer hover:scale-105 bg-dark px-4 py-3 m-2 text-white"><i className='bx bx-at'></i> Email</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-20 py-9 bg-dark text-white text-center">
        Copyright © 2021 Muhammad Rizqi Ardiansyah
      </footer>
    </>
  )
}