import Image from "next/image";


const TopBar: React.FC = () => {
    return (
        <div className="hidden md:block">
            <div className="top-bar flex flex-col md:flex-row justify-between items-center h-[36px] px-[48px] bg-[#F5F5F5] text-black text-sm">
                <div className="pr-56">
                    <Image src="/topbarlogo.png" alt="icon" width={20} height={20} className="ml-1 text-[20px]" />
                </div>
                <span className="text-center font-bold md:text-left">
                    Skip to main content{" "}
                </span>
                <div className="language space-x-3 flex items-center mt-2 md:mt-0">
                    <span className="items-center cursor-pointer font-semibold"><a href="/pages/store">Find a Store</a></span>
                    <span>|</span>
                    <span className="items-center cursor-pointer font-semibold"><a href="/pages/help">Help</a></span>
                    <span>|</span>
                    <span className="items-center cursor-pointer font-semibold"><a href="/pages/joinus">Join Us</a></span>
                    <span>|</span>
                    <span className="items-center cursor-pointer font-semibold"><a href="/pages/login">Sign In</a></span>
                </div>
            </div>
        </div>
    );
};

export default TopBar