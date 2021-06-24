import { useEffect, useState } from 'react'
import Card from '../components/Card'

export default function Home() {
  const [scrollState, setScrollState] = useState(false);
  const [mobileState, setMobileState] = useState(false);
  const [navState, setNavState] = useState(false);
  const handleNav = () => {
    setNavState(x => !x);
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
  return (
    <>
      <header className={`px-5 md:px-20 sticky top-0 z-40 ${scrollState ? " bg-light shadow-md" : ""}`}>

        {/* Navbar */}
        <div className={`navbar h-14 flex flex-row items-center justify-between py-2`}>
          <a href="/"><img src="/assets/signature_black.svg" alt="" className=" h-11" /></a>
          <nav
            className="fixed top-0 left-0 flex flex-col justify-center items-center h-96 w-screen lg:flex lg:flex-row lg:static lg:bg-transparent lg:w-max lg:h-auto uppercase"
            style={{
              transform: mobileState ? (navState ? "translateY(0)" : "translateY(-120%)") : "translateY(0)",
              transition: 'transform',
              transitionDuration: (navState ? "500ms" : "0")
            }}
          >
            <a onClick={handleNav} className="px-3 py-2 hover:bg-primary rounded-md" href="/#projects-section">Projects</a>
            <a onClick={handleNav} className="px-3 py-2 hover:bg-primary rounded-md" href="/#contacts">Contact</a>
            <a onClick={handleNav} className="px-3 py-2 hover:bg-primary rounded-md" target="_blank" href="https://muhrizqiardi-blog.vercel.app/">Blog <i class='bx bx-link-external' ></i></a>
            <button onClick={handleNav} className="lg:hidden rounded-full my-5 bg-dark text-light w-10 h-10">
              <i className="bx bx-x text-4xl z-50" />
            </button>
          </nav>
          <button className="lg:hidden" onClick={handleNav}>
            <i className="bx bx-menu text-4xl z-50" />
          </button>
        </div>


      </header>

      {/* Hero */}
      <section id="hero" className="px-5 md:px-20 flex flex-col lg:flex-row items-center justify-center pt-2 pb-10">
        <div className="flex justify-center items-center m-5 lg:mr-7">
          <img src="/assets/me.jpg" alt="" width="250px" height="250px" className="rounded-full drop-shadow-xl" />
        </div>
        <div className="hero-text flex flex-col justify-center items-center text-center lg:items-start lg:text-left lg:ml-2">
          <h3 className=" font-normal text-gray-900 text-2xl">Hi, I'm <br /></h3>
          <h1 className="font-black text-3xl lg:text-6xl pb-3">Muhammad Rizqi Ardiansyah.</h1>
          <p className="text-xl  font-normal text-gray-900 my-1 anim-2">
            An <span className="font-bold text-black bg-primary">Informatics Engineering student</span> and a <span className="font-bold text-black bg-primary">web developer</span> passionate about technology.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-dark px-5 lg:px-36 py-5 lg:py-10">
        <div id="projects-section" className="relative bottom-20"></div>
        <h1 className="text-center text-white text-2xl lg:text-3xl font-bold mb-5 lg:mb-10">Projects Showcase</h1>
        <div className="projects-list grid gap-4 grid-cols-1 lg:grid-cols-3">
          <Card
            title="Notefield"
            body="A note-taking app made with React framework for the front-end, and Express for the API. I made this because I feel like all note-taking app in the market isn't good enough for me."
            image="/assets/projects-thumbnail/notefield.png"
            tags={['React', 'Sass', 'Express', 'MongoDB']}
            href="https://notefield.vercel.app/"
            />
          <Card
            title="react-todo"
            body="A to-do list app made with React framework for the front-end, and Express for the API."
            image="/assets/projects-thumbnail/react-todo.png"
            tags={['React', 'Sass', 'Express', 'MongoDB']}
            href="https://muhrizqiardi-react-todo.herokuapp.com/"
            />
          <Card
            title="creative@home"
            body="A website my team created for a web design competition."
            image="/assets/projects-thumbnail/creative-at-home.png"
            tags={['JavaScript']}
            href="https://varcode-project.github.io/creative-at-home/"
            />
          <Card
            title="Koffee Khayalaan Store"
            body="An e-commerce and a landing website for a fictional cafe. Made with Next.js for the front-end and Strapi as the headless CMS to provide an API to the front-end side."
            image="/assets/projects-thumbnail/Koffee-Khayalaan.png"
            tags={['React', 'Next.js', 'Sass', 'Strapi']}
            href="https://koffee-khayalaan.vercel.app/"
            />
          <Card
            title="muhrizqiardi.github.io"
            body="This (beautiful) website."
            image="/assets/projects-thumbnail/muhrizqiardi.github.io.png"
            tags={['React', 'Next.js', 'Tailwind CSS']}
            href="https://muhrizqiardi.github.io/"
            />
          <Card
            title="My Blog"
            body="The place where I share my thougts."
            image="/assets/projects-thumbnail/my-blog.png"
            tags={['React', 'Next.js', 'Sass', 'Strapi']}
            href="https://muhrizqiardi-blog.vercel.app/"
          />

        </div>
        <h1 className="text-center text-lg text-blue-400 mt-10 lg:mb-10 hover:underline"><a target="_blank" href="https://github.com/muhrizqiardi">Find out more at my <span className="font-bold"> <i class='bx bxl-github'></i> GitHub</span></a> <i class='bx bx-link-external' ></i></h1>
      </section>

      {/* Contacts */}
      <section id="contacts" className="bg-primary p-5 lg:px-48 lg:py-10 flex justify-center items-center min-h-screen">
        <div className="contact-list rounded-xl bg-light p-10 lg:px-20 lg:py-10 w-full flex flex-col items-center justify-center text-center shadow-md ">
          {/* <i class='bx bx-briefcase text-5xl animate-pulse mb-4'></i> */}
          
          <span className="bump text-5xl mb-4"><div className="hand-left inline-block">🤜</div><span className=" boom text-xl relative bottom-5 z-20">💥</span><div className="hand-right inline-block">🤛</div></span>
          <h1 className="font-bold text-4xl mb-4">I'm open to partnerships!</h1>
          <p>I'm currently open for freelance and internship position. Hit me up!</p>
          <div className="my-5 flex flex-wrap items-center justify-center">
            <a target="_blank" href="https://github.com/muhrizqiardi" className="transition duration-100 rounded cursor-pointer hover:scale-105 hover:bg-primary bg-gray-600 px-4 py-3 m-2 text-white"><i class='bx bxl-github'></i></a>
            <a target="_blank" href="https://instagram.com/muhrizqiardi" className="transition duration-100 rounded cursor-pointer hover:scale-105 hover:bg-primary bg-red-700 px-4 py-3 m-2 text-white"><i class='bx bxl-instagram'></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/muhammad-rizqi-ardiansyah-a072761b5/" className="transition duration-100 rounded cursor-pointer hover:scale-105 hover:bg-primary bg-blue-900 px-4 py-3 m-2 text-white"><i class='bx bxl-linkedin'></i></a>
            <a target="_blank" href="https://twitter.com/muh_rizqi_ardi" className="transition duration-100 rounded cursor-pointer hover:scale-105 hover:bg-primary bg-blue-400 px-4 py-3 m-2 text-white"><i class='bx bxl-twitter'></i></a>
            <a target="_blank" href="#" className="transition duration-100 rounded cursor-pointer hover:scale-105 hover:bg-primary bg-dark px-4 py-3 m-2 text-white"><i class='bx bx-file'></i></a>
            <a target="_blank" href="mailto:muhrizqiardi@gmail.com" className="transition duration-100 rounded cursor-pointer hover:scale-105 hover:bg-primary bg-dark px-4 py-3 m-2 text-white"><i class='bx bx-at'></i></a>
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
