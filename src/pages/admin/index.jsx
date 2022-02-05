import { Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import storage from '../../utils/storage';
import NavBar from '../../components/navBar';

const { Sider, Header, Content, Footer } = Layout;

const Admin = () => {
	const user = storage.getUser();
	if (!user || !user.id) {
		return <Redirect to='/login' />;
	}

	return (
		<Layout style={{ height: '100%', minHeight: '1000px' }}>
			<Sider>
				<NavBar />
			</Sider>
			<Layout>
				<Header>Header</Header>
				<Content>Content</Content>
				<Footer>Footer</Footer>
			</Layout>
		</Layout>
	)
};

export default Admin;