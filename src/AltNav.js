import React, { Component, useState } from "react";

export const KEY_CODE_UP = 38;
export const KEY_CODE_DOWN = 40;

class AltNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      typedValue: "",
      selectedIdx: -1,
      isSuggestionVisible: false,
    };
  }

  onChange(value) {
    this.setState({ value, typedValue: value, selectedIdx: -1 });
  }

  showSuggestion() {
    this.setState({
      isSuggestionVisible: true,
    });
  }

  onKeyDown(evt) {
    if (evt.keyCode === KEY_CODE_DOWN || evt.keyCode === KEY_CODE_UP) {
      let { selectedIdx } = this.state;
      const { suggestions } = this.props;
      const selectedIdxMax = suggestions.length - 1;

      selectedIdx += evt.keyCode === KEY_CODE_DOWN ? 1 : -1;

      if (selectedIdx > selectedIdxMax) {
        selectedIdx = -1;
      } else if (selectedIdx < -1) {
        selectedIdx = selectedIdxMax;
      }

      let value;
      if (selectedIdx > -1) {
        value = suggestions[selectedIdx];
      } else {
        value = this.state.typedValue;
      }

      if (selectedIdx !== this.state.selectedIdx) {
        this.setState({
          selectedIdx,
          value: value,
        });
      }
    }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onFocus={() => this.showSuggestion()}
          onKeyDown={(evt) => this.onKeyDown(evt)}
          onChange={(evt) => this.onChange(evt.target.value)}
        />
        {this.state.isSuggestionVisible && (
          <ul>
            {this.props.suggestions.map((suggestion, idx) => (
              <li
                key={idx}
                style={{
                  fontWeight:
                    this.state.selectedIdx === idx ? "bold" : "inherit",
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

AltNav.defaultProps = {
  suggestions: ["Amazon", "Google", "FaceBook"],
};

export default AltNav;
