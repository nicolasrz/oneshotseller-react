import React, { PureComponent } from 'react';
import { Form, Input } from 'semantic-ui-react';
// import './style.css';

export default class FormField extends PureComponent {
	onChange = (e) => {
		const { stateName, parentStateName } = this.props;
		this.props.onChange(e.target.value, parentStateName, stateName);
	};

	render() {
		const { label, required, type, parentStateName, stateName, order } = this.props;
		if (required === 'true') {
			return (
				<Form.Field required>
					<label>{label}</label>
					<Input
						placeholder={label}
						onChange={this.onChange}
						type={type}
						defaultValue={parentStateName ? order[parentStateName][stateName] : order[stateName]}
					/>
				</Form.Field>
			);
		}
		return (
			<Form.Field>
				<label>{label}</label>
				<Input
					placeholder={label}
					onChange={this.onChange}
					type={type}
					defaultValue={parentStateName ? order[parentStateName][stateName] : order[stateName]}
				/>
			</Form.Field>
		);
	}
}
