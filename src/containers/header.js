import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { activateItem } from '../actions/index';
import './header.css';

class Header extends PureComponent {
	createItemList = () => {
		return this.props.headerItems.map((item) => {
			return (
				<Menu.Item
					key={item.id}
					as={Link}
					to={item.to}
					name={item.name}
					active={item.active === 'true' ? true : false}
					onClick={() => this.props.activateItem(this.props.headerItems, item.id)}
					className="uppercase-header-item"
				/>
			);
		});
	};

	render() {
		return (
			<Menu className="custom-header">
				<Menu.Menu position="right">{this.createItemList()}</Menu.Menu>
			</Menu>
		);
	}
}

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({ activateItem: activateItem }, dispatch);
};

const mapStateToProps = (state) => {
	if (state.activeItem) {
		return { headerItems: state.activeItem };
	}
	return {
		headerItems: state.headerItems
	};
};

export default connect(mapStateToProps, matchDispatchToProps)(Header);
