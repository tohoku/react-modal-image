import React, { Component } from "react";

import Lightbox from "./Lightbox";

export { default as Lightbox } from "./Lightbox";

export default class extends Component {
  state = {modalOpen: false };

  toggleModal = () => {
    this.setState(prev => ({
      modalOpen: !prev.modalOpen
    }));
  };

  handleLoaded = () => {
    if (this.props.onLoaded)
      this.props.onLoaded();
  };

  render() {
    const {
      className,
      small,
      smallSrcSet,
      medium,
      large,
      alt,
      hideDownload,
      hideZoom
    } = this.props;
    const { modalOpen } = this.state;

    return (
      <div>
        <img
          className={className}
          style={{
            cursor: "pointer",
            maxWidth: "100%",
            maxHeight: "100%"
          }}
          onClick={this.toggleModal}
          src={small}
          srcSet={smallSrcSet}
          alt={alt}
        />
        {modalOpen && (
          <Lightbox
            medium={medium}
            large={large}
            alt={alt}
            onClose={this.toggleModal}
            onLoaded={this.handleLoaded}
            hideDownload={hideDownload}
            hideZoom={hideZoom}
          />
        )}
      </div>
    );
  }
}
