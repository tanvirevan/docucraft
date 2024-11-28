import Logo from "/Logo";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Image from "next/image";
import Link from "next/link";

const Header = ({docs}) => {
    return (
      <header className="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pb-8 pt-4 dark:border-white/10 lg:block xl:w-80">
          <Logo />
          <div className="fixed inset-x-0 top-0 z-50 bg-white px-4 backdrop-blur-sm transition dark:bg-[#17181C] dark:backdrop-blur sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80">
              <div className="container flex h-14 items-center justify-between gap-12">
                <div className="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition dark:bg-white/7.5"></div>


                {/* Mobile Responsive Header Starts  */}
                <div className="flex items-center justify-start gap-5 lg:hidden">
                    <button type="button "
                        className="flex h-6 w-6 items-center justify-start rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
                        aria-label="Toggle navigation">
                        <Image 
                            src="/hamburger.svg" 
                            alt="Menu" 
                            className="w-5 stroke-zinc-900 dark:stroke-white"
                            width={100}
                            height={100}
                        />
                    </button>
                    <Link aria-label="Home" href="/">
                        <Image 
                            src="/logo.svg" 
                            alt="Protocol" 
                            className="h-6"
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>
                {/* Mobile Responsive Header Ends */}
                <Search  docs={docs}/>

              </div>
          </div>
          <Sidebar docs={docs}/>
      </header>
    );
};

export default Header;