import './_navigation.scss';
import TopNavMobile from './TopNav/TopNavMobile/TopNavMobile';
import BottomNav from './BottomNav/BottomNav';
import TopNavDesktop from './TopNav/TopNavDesktop/TopNavDesktop';

const Navigation = () => {
    return (
        <nav className="navigation">
            <TopNavMobile/>
            <TopNavDesktop />
            <hr className="navigation__divider" />
            <BottomNav />
        </nav>
    );
};

export default Navigation;