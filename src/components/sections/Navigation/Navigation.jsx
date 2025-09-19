import './_navigation.scss';
import TopNav from './TopNav/TopNav';
import BottomNav from './BottomNav/BottomNav';

const Navigation = () => {
    return (
        <nav className="navigation">
            <TopNav />
            <hr className="navigation__divider" />
            <BottomNav />
        </nav>
    );
};

export default Navigation;