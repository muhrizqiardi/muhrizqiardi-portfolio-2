import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Popper from '@material-ui/core/Popper';
import axios from 'axios';

export default function Home(props) {
  const [projectsData, setProjectsData] = useState([]);
  const [scrollState, setScrollState] = useState(false);
  const [mobileState, setMobileState] = useState(false);
  const [navState, setNavState] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleNav = () => {
    setNavState(x => !x);
  }
  const fetchProjects = () => {
    axios.get('/api/projects')
      .then(function (response) {
        setProjectsData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    console.log("lang:", props.lang)

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
    fetchProjects();
  }, []);


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <header id="header" className={`px-5 md:px-20 sticky top-0 z-40 ${scrollState ? " bg-light shadow-md" : ""}`}>

        {/* Navbar */}
        <div className={`navbar h-14 flex flex-row items-center justify-between py-2`}>
          <a href="#header"><img src="/assets/signature_black.svg" alt="" className=" h-11" /></a>
          <nav
            className="fixed top-0 left-0 flex flex-col justify-center items-center h-96 w-screen lg:flex lg:flex-row lg:static lg:bg-transparent lg:w-max lg:h-auto uppercase"
            style={{
              transform: mobileState ? (navState ? "translateY(0)" : "translateY(-120%)") : "translateY(0)",
              transition: 'transform',
              transitionDuration: (navState ? "500ms" : "0")
            }}
          >
            <a onClick={handleNav} className="px-3 py-2 hover:bg-gray-300 rounded-md" href={`#projects-section`}>
              {props.lang === 'en' && 'Projects '}
              {props.lang === 'id' && 'Proyek '}
              {props.lang === 'jp' && 'プロジェクト '}
            </a>
            <a onClick={handleNav} className="px-3 py-2 hover:bg-gray-300 rounded-md" href={`#contacts`}>
              {props.lang === 'en' && 'Contact '}
              {props.lang === 'id' && 'Kontak '}
              {props.lang === 'jp' && '連絡 '}
            </a>
            <a onClick={handleNav} className="px-3 py-2 hover:bg-gray-300 rounded-md" target="_blank" href={`https://muhrizqiardi-blog.vercel.app/`}>
              {props.lang === 'en' && 'Blog '}
              {props.lang === 'id' && 'Blog '}
              {props.lang === 'jp' && 'ブログ '}
              <i class='bx bx-link-external' ></i>
            </a>
            <button onClick={handlePopper} className="px-2 py-3 hover:bg-gray-300 rounded-md font-black uppercase"><i class='bx bx-globe relative ' style={{ top: 1 }}></i> {props.lang ? props.lang : "EN"} <i class='bx bx-caret-down' style={{ top: 1 }}></i></button>
            <button onClick={handleNav} className="lg:hidden rounded-full my-5 bg-dark text-light w-10 h-10">
              <i className="bx bx-x text-4xl z-40" />
            </button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <>
                <div className="bg-white shadow-md text-center overflow-hidden mt-3 border border-gray-400 rounded flex flex-col justify-center items-center">
                  <div className="hover:bg-gray-200 py-3 px-5 border-b border-gray w-full"><a href="/en">English</a></div>
                  <div className="hover:bg-gray-200 py-3 px-5 border-b border-gray w-full"><a href="/id">Bahasa Indonesia</a></div>
                  <div className="hover:bg-gray-200 py-3 px-5 border-b border-gray w-full"><a href="/jp">日本語</a></div>
                </div>
              </>
            </Popper>
          </nav>
          <button className="lg:hidden" onClick={handleNav}>
            <i className="bx bx-menu text-4xl z-40" />
          </button>
        </div>


      </header>

      {/* Hero */}
      <section id="hero" className="px-5 md:px-20 flex flex-col lg:flex-row items-center justify-center pt-2 pb-10">

        {/* Image */}
        <div className="flex justify-center items-center m-5 lg:mr-7">
          <img src="/assets/me.jpg" alt="" width="250px" height="250px" className="rounded-full drop-shadow-xl" />
        </div>

        {/* Hero Text */}
        {
          (props.lang === 'en') &&
          <div className="hero-text flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:ml-2">
            <h3 className=" font-normal text-gray-900 text-2xl">Hi, I'm <br /></h3>
            <h1 className="font-black text-3xl lg:text-6xl pb-3">Muhammad Rizqi Ardiansyah.</h1>
            <p className="text-xl  font-normal text-gray-900 my-1 anim-2">
              An <span className="font-bold text-black bg-primary">Informatics Engineering student</span> and a <span className="font-bold text-black bg-primary">web developer</span> passionate about technology.
            </p>
          </div>
        }
        {
          (props.lang === 'id') &&
          <div className="hero-text flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:ml-2">
            <h3 className=" font-normal text-gray-900 text-2xl">Halo, saya <br /></h3>
            <h1 className="font-black text-3xl lg:text-6xl pb-3">Muhammad Rizqi Ardiansyah.</h1>
            <p className="text-xl  font-normal text-gray-900 my-1 anim-2">
              Saya adalah <span className="font-bold text-black bg-primary">Mahasiswa Teknik Informatika</span> dan seorang <span className="font-bold text-black bg-primary">web developer</span> yang sangat <span className=" italic">passionate</span> dengan teknologi.
            </p>
          </div>
        }
        {
          (props.lang === 'jp') &&
          <div className="hero-text flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:ml-2">
            <h3 className=" font-normal text-gray-900 text-2xl">Hi, 私は <br /></h3>
            <h1 className="font-black text-3xl lg:text-6xl pb-3">Muhammad Rizqi Ardiansyah.</h1>
            <p className="text-md  font-normal text-gray-900 my-1 ">
              ムハマド・リズキ・アルディアンシャー
            </p>
            <p className="text-xl  font-normal text-gray-900 my-1 ">
              私は技術の世界に情熱を注ぐ<span className=" text-white bg-primary">情報工学学生</span>と<span className=" text-white bg-primary">ウェブ開発者</span>です。
            </p>
          </div>
        }

      </section>


      {/* Projects */}
      <section id="projects" className="bg-dark px-5 lg:px-36 py-5 lg:py-10">
        <div id="projects-section" className="relative bottom-20"></div>
        <h1 className="text-center text-white text-2xl lg:text-3xl font-bold mb-5 lg:mb-10">
          {props.lang === 'en' && 'Project'}
          {props.lang === 'id' && 'Proyek'}
          {props.lang === 'jp' && 'プロジェクト'}
        </h1>
        <div className="projects-list grid gap-4 grid-cols-1 lg:grid-cols-3">
          {
            projectsData.map(project =>
              <Card
                title={project.title}
                body={project.body[props.lang]}
                tags={project.tags}
                image={project.image}
                href={project.href}
              />
            )
          }
        </div>
        <h1 className="text-center text-lg text-blue-400 mt-10 lg:mb-10 hover:underline">
          <a href="http://github.com/muhrizqiardi" target="_blank" >
            {props.lang === 'en' && <>Find out more at my <span className="font-bold"> <i class='bx bxl-github'></i> GitHub</span> <i class='bx bx-link-external' ></i></>}
            {props.lang === 'id' && <>Selebihnya bisa kunjungi <span className="font-bold"> <i class='bx bxl-github'></i> GitHub</span> <i class='bx bx-link-external' ></i> saya</>}
            {props.lang === 'jp' && <>詳しくは私の<span className="font-bold"> <i class='bx bxl-github'></i> GitHub</span> <i class='bx bx-link-external' ></i>をご覧ください。</>}
          </a>
        </h1>
      </section>

      {/* Contacts */}
      <section id="contacts" className="bg-primary p-5 lg:px-48 lg:py-10 flex justify-center items-center min-h-screen">
        <div className="contact-list rounded-xl bg-light p-10 lg:px-20 lg:py-10 w-full flex flex-col items-center justify-center text-center shadow-md ">

          <span className="bump text-5xl mb-4"><div className="hand-left inline-block">🤜</div><span className=" boom text-xl relative bottom-5 z-20">💥</span><div className="hand-right inline-block">🤛</div></span>
          {
            props.lang === 'en' &&
            <>
              <h1 className="font-bold text-4xl mb-4">I'm open to partnerships!</h1>
              <p>I'm currently open for freelance and internship position. Hit me up!</p>
            </>
          }
          {
            props.lang === 'id' &&
            <>
              <h1 className="font-bold text-4xl mb-4">Saya terbuka untuk partnerships!</h1>
              <p>Saat ini saya terbuka untuk posisi freelance dan magang. Jika tertarik untuk bekerja sama dengan saya, silahkan hubungi saya melalui kontak-kontak dibawah ini:</p>
            </>
          }
          {
            props.lang === 'jp' &&
            <>
              <h1 className="font-bold text-4xl mb-4">私はパートナーシップを歓迎します。!</h1>
              <p>現在、フリーランスやインターンシップの募集をしています。ご興味のある方は、ぜひご連絡ください。</p>
            </>
          }
          <div className="my-5 flex flex-wrap items-center justify-center">
            <a target="_blank" href="https://github.com/muhrizqiardi" className="transition duration-100 rounded cursor-pointer hover:scale-105 hover:bg-primary bg-gray-600 px-4 py-3 m-2 text-white"><i class='bx bxl-github'></i> GitHub</a>
            <a target="_blank" href="https://instagram.com/muhrizqiardi" className="transition duration-100 rounded cursor-pointer hover:scale-105 hover:bg-primary bg-red-700 px-4 py-3 m-2 text-white"><i class='bx bxl-instagram'></i> Instagram</a>
            <a target="_blank" href="https://www.linkedin.com/in/muhammad-rizqi-ardiansyah-a072761b5/" className="transition duration-100 rounded cursor-pointer hover:scale-105 hover:bg-primary bg-blue-900 px-4 py-3 m-2 text-white"><i class='bx bxl-linkedin'></i> LinkedIn</a>
            <a target="_blank" href="https://twitter.com/muh_rizqi_ardi" className="transition duration-100 rounded cursor-pointer hover:scale-105 hover:bg-primary bg-blue-400 px-4 py-3 m-2 text-white"><i class='bx bxl-twitter'></i> Twitter</a>
            <a target="_blank" href="#" className="transition duration-100 rounded cursor-pointer hover:scale-105 hover:bg-primary bg-dark px-4 py-3 m-2 text-white"><i class='bx bx-file'></i> Resume</a>
            <a target="_blank" href="mailto:muhrizqiardi@gmail.com" className="transition duration-100 rounded cursor-pointer hover:scale-105 hover:bg-primary bg-dark px-4 py-3 m-2 text-white"><i class='bx bx-at'></i> Email</a>
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

export const getStaticProps = ({ params }) => {
  return {
    props: params
  }
}

export const getStaticPaths = () => {
  return {
    paths: ['id', 'en', 'jp'].map((lang) => ({
      params: { lang: lang }
    })),
    fallback: false
  }
}

