import UserTheme from '../components/UserTheme';

const Header = () => {
    return (
        <header className="h-30 w-full bg-gradient-to-r from-red-500 to-black content-center text-center  py-5 text-white">
            <h1 className="mt-2 text-4xl font-bold ">FITNESS TRACKER HUB</h1>
            <UserTheme />
        </header>
    )
}

export default Header;