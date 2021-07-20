import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Aos from 'aos';
import Popper from '@material-ui/core/Popper';
import axios from 'axios';
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';

function Header(props) {
  return (
    <header id="header" className={`px-5 md:px-20 sticky top-0 z-40 ${scrollState ? " bg-light shadow-md" : ""}`}>

      {/* Navbar */}
      <div className={`navbar h-14 flex flex-row items-center justify-between py-2`}>
        <a href={`/${router.locale}`}><img src="/assets/animated_signature.svg" alt="" className=" h-11" /></a>
        <nav
          className="fixed top-0 left-0 flex flex-col justify-center items-center h-96 w-screen lg:flex lg:flex-row lg:static lg:bg-transparent lg:w-max lg:h-auto uppercase"
          style={{
            transform: mobileState ? (navState ? "translateY(0)" : "translateY(-120%)") : "translateY(0)",
            transition: 'transform',
            transitionDuration: (navState ? "500ms" : "0")
          }}
        >
          <Link href="#projects-section" passHref>
            <a onClick={handleNav} className="px-3 py-2 hover:bg-gray-300 rounded-md" href={`#projects-section`}>
              {router.locale === 'en' && 'Projects '}
              {router.locale === 'id' && 'Proyek '}
              {router.locale === 'jp' && 'プロジェクト '}
            </a>
          </Link>
          <Link href="#contacts" passHref>
            <a onClick={handleNav} className="px-3 py-2 hover:bg-gray-300 rounded-md" href={`#contacts`}>
              {router.locale === 'en' && 'Contact '}
              {router.locale === 'id' && 'Kontak '}
              {router.locale === 'jp' && '連絡 '}
            </a>
          </Link>
          {!(router.locale === 'jp') && <Link href="#projects-section" passHref>
            <a onClick={handleNav} className="px-3 py-2 hover:bg-gray-300 rounded-md" href={`#projects-section`}>
              {router.locale === 'en' && 'Web Development'}
              {router.locale === 'id' && 'Jasa Pembuatan Website '}
              <i className='bx bx-link-external' ></i>
            </a>
          </Link>}
          <a onClick={handleNav} className="px-3 py-2 hover:bg-gray-300 rounded-md" target="_blank" href={`https://muhrizqiardi-blog.vercel.app/`}>
            {router.locale === 'en' && 'Blog '}
            {router.locale === 'id' && 'Blog '}
            {router.locale === 'jp' && 'ブログ '}
            <i className='bx bx-link-external' ></i>
          </a>
          <button onClick={handlePopper} className="px-2 py-3 hover:bg-gray-300 rounded-md font-black uppercase"><i className='bx bx-globe relative ' style={{ top: 1 }}></i> {router.locale ? router.locale : "EN"} <i className='bx bx-caret-down' style={{ top: 1 }}></i></button>
          <button onClick={handleNav} className="lg:hidden rounded-full my-5 bg-dark text-light w-10 h-10">
            <i className="bx bx-x text-4xl z-40" />
          </button>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <>
              <div className="bg-white shadow-md text-center overflow-hidden mt-3 border border-gray-400 rounded flex flex-col justify-center items-center">
                <div className="hover:bg-gray-200 py-3 px-5 border-b border-gray w-full"><Link href="/" locale="en" passHref><a href="/en">English</a></Link></div>
                <div className="hover:bg-gray-200 py-3 px-5 border-b border-gray w-full"><Link href="/" locale="id" passHref><a href="/id">Bahasa Indonesia</a></Link></div>
                <div className="hover:bg-gray-200 py-3 px-5 border-b border-gray w-full"><Link href="/" locale="jp" passHref><a href="/jp">日本語</a></Link></div>
              </div>
            </>
          </Popper>
        </nav>
        <button className="lg:hidden" onClick={handleNav} alt="menu">
          <i className="bx bx-menu text-4xl z-40"></i>
        </button>
      </div>


    </header>

  );
}
export default Header;
