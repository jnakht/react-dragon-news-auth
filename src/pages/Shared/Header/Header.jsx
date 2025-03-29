import moment from 'moment/moment';
import logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <h3>Journalism Without Fear or Favour</h3>
            <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
        </div>
    );
};

export default Header;