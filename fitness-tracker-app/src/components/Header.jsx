import UserTheme from '../components/UserTheme';

const Header = () => {
    return (
        <header className="w-full h-auto px-4 py-4 bg-gradient-to-r from-red-500 to-black flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-center sm:text-left">
                FITNESS TRACKER HUB
            </h1>
            <UserTheme />
        </header>
    )
}

export default Header;
