import logo from '../../assets/images/loginLogo.jpg';
import './index.css';

const NavBar = () => {
	return (
		<div className='nav'>
			<div className="nav-header">
				<img src={logo} className='nav-header-logo' />
				<h1 className='nav-header-title'>博客后台</h1>
			</div>
		</div>
	)
}

export default NavBar;