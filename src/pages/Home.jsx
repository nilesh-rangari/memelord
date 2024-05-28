import Logo from '../assets/memelord logo.png'

export default function Home() {
    return(
        <div className='bg-gradient-to-br from-black to-red-900 h-screen'>
        <header className={`fixed top-0 left-0 right-0 z-50  bg-transparent`}>
            {/* ${scrollNav ? 'bg-[#081429]' : 'bg-transparent'} */}
        <div className="w-full px-8 sm:px-12 md:px-16 max-w-7xl mx-auto">
            <nav className="flex justify-between items-center pb-5 pt-6">
                <div className="flex items-center gap-20">
                    <div className="h-auto min-w-[60px]">
                        <img 
                            alt="Logo" loading="lazy" decoding="async" data-nimg="fill"
                            className="h-auto w-[100px]"
                            src={Logo} 
                            />
                    </div>
                    <div className="lg:flex hidden gap-10 text-m ">
                        <a className="font-medium text-[#E3CEC4] hover:text-white" href="#section_home">Home</a>
                        <a className="font-medium text-[#E3CEC4] hover:text-white" href="#section_aboutus">About</a>
                        <a className="font-medium text-[#E3CEC4] hover:text-white" href="#section_roadmap">Token</a>
                        <a className="font-medium text-[#E3CEC4] hover:text-white" href="#section_upcoming">Blog</a>
                        <a className="font-medium text-[#E3CEC4] hover:text-white" href="#section_liquidity">Liquidity</a>
                        <a className="font-medium text-[#E3CEC4] hover:text-white" href="#section_faqs">Features</a>
                    </div>
                </div>
                <div className="flex items-center gap-3 ">
                    {/* <Link to="/Dapp"> */}
                    <a className="inline-block primary-button py-3 px-9 rounded text-[#8C3535] bg-[#E3CEC4]" 
                    target="_blank" href="">
                        Buy Now
                    </a>
                    {/* </Link> */}
                <div className="cursor-pointer text-3xl lg:hidden">
                    <svg stroke="#E3CEC4" fill="none" strokeWidth="2" viewBox="0 0 24 24" 
                        strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </div>
                </div>
            </nav>
        </div>
        </header>

        <section 
            className="min-h-screen flex items-center justify-center flex-col text-center py-10 pt-24" 
            id="section_home"
        >
            <h1 className="text-4xl text-[#F2B263] sm:text-6xl lg:text-[5.25rem] 2xl:text-[7.5rem] leading-none font-bold w-[12ch] max-w-[90%]">
                Memelord Coin
            </h1>
            <p className="text-sm text-neutral-400 my-4 md:my-10 w-[75%] md:w-[54ch]">
                Meme-ify Your Wallet: Where Humor Hits the Jackpot!
            </p>
            <div className="flex flex-col mt-5 md:mt-0 items-center md:flex-row gap-5">
                <a className="inline-block  primary-button  font-medium  focus:outline-none py-3 px-9 rounded text-[#8C3535] bg-[#E3CEC4]" 
                    href="/">
                    Get Connected
                </a>
            </div>
        </section>
</div>

    )
}