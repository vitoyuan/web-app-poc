import React from "react";

class CommonReactComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	syncValue(variableName, value) {
		return (e) => {
			var names = variableName.split("."),
					name,
					newstate = this.state[names[0]];

			if (names.length == 1) {
				this.setState({ [variableName]: value });
				return;
			}

			for (name of names.slice(1, -1)) {
				newstate = newstate[name];
			}

			newstate[names[names.length - 1]] = value;
			this.setState({ [names[0]]: this.state[names[0]] });
		}
	}

	syncText(variableName) {
		return (e) => {
			var names = variableName.split("."),
					name,
					newstate = this.state[names[0]];

			if (names.length == 1) {
				this.setState({ [variableName]: e.target.value });
				return;
			}

			for (name of names.slice(1, -1)) {
				newstate = newstate[name];
			}

			newstate[names[names.length - 1]] = e.target.value;
			this.setState({ [names[0]]: this.state[names[0]] });
		}
	}

	syncSelect(variableName) {
		return this.syncText(variableName);
	}
}

export default CommonReactComponent;