import { Form, Input, Button, Space, message } from 'antd';
import { Redirect } from 'react-router-dom';
import {
	UserOutlined,
	LockOutlined
} from '@ant-design/icons';
import { reqLogin } from '../../api/index';
import storage from '../../utils/storage';
import './index.css';
import logo from '../../assets/images/loginLogo.jpg';

const Item = Form.Item;

const Login = (props) => {
	// 如果用户已经登陆，重定向到admin页面
	const user = storage.getUser();
	if (user && user.id) {
		return <Redirect to='/admin' />
	}

	const handleSubmit = (formData) => {
		reqLogin(formData).then((res) => {
			storage.saveUser(res.data);
			props.history.replace('/admin');
			message.success("登录成功");
		}).catch((err) => {
			console.log(err);
		});
	}

	return (
		<div className='login'>
			<div className="login-header">
				<div className="main">
					<img src={logo} alt="." className='login-logo' />
					<p className="login-title">博客管理系统</p>
				</div>
			</div>
			<div className="login-content">
				<h2>用户登录</h2>
				<Form
					onFinish={handleSubmit}
				>
					<Item
						label="用户名"
						name="username"
						labelCol={{ span: 6 }}
						wrapperCol={{ span: 14 }}
						rules={[
							{ required: true, message: '用户名不能为空' },
							{ pattern: /^[a-zA-Z0-9_\-]{2,}@[a-zA-Z0-9_\-]{2,}(\.[a-zA-Z0-9_\-]+){1,2}$/, message: '邮箱格式不正确，请重新输入' }
						]}
					>
						<Input prefix={<UserOutlined />} placeholder="Email" />
					</Item>
					<Item
						label="密码"
						name="password"
						labelCol={{ span: 6 }}
						wrapperCol={{ span: 14 }}
						rules={[
							{ required: true, message: '请输入密码' },
							{ min: 6, message: '密码长度不得少于6位' },
							{ max: 12, message: '密码长度不得超过12位' }
						]}
					>
						<Input prefix={<LockOutlined />} placeholder="Password" />
					</Item>
					<Item wrapperCol={{ offset: 6, span: 16 }}>
						<Space>
							<Button type="primary" htmlType="submit" ghost>登录</Button>
							<Button type="primary" ghost>注册</Button>
							<Button type="primary" ghost>游客登录</Button>
						</Space>
					</Item>
				</Form>
			</div>
		</div>
	)
};

export default Login;