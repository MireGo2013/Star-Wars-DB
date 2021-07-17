import React, { Component } from "react";
import ErrorButton from "../../error-button";
import ErrorIndicator from "../../error-indicator";
import Spinner from "../../spinner";

export default (ViewComponent, getItemDetails, getItemImage) => {
  return class extends Component {
    state = {
      itemDetails: null,
      loading: true,
      error: false,
      image: null,
    };

    componentDidMount() {
      this.updatePerson();
    }

    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
        this.setState({
          loading: true,
        });
        this.updatePerson();
      }
    }

    onError = (err) => {
      this.setState({
        error: true,
        loading: false,
      });
    };

    updatePerson() {
      const { itemId } = this.props;
      if (!itemId) {
        return;
      }

      getItemDetails(itemId)
        .then((itemDetails) => {
          this.setState({
            itemDetails,
            loading: false,
            image: getItemImage(itemDetails),
          });
        })
        .catch(this.onError);
    }

    render() {
      const { itemDetails, loading, error, image } = this.state;

      if (!itemDetails) {
        return <span>Select a person from a list</span>;
      }
      if (loading) {
        return <Spinner />;
      }
      if (error) {
        return <ErrorIndicator />;
      }
	  
      return (
        <>
          <ViewComponent
            {...this.props}
            image={image}
            itemDetails={itemDetails}
          />
          <ErrorButton />
        </>
      );
    }
  };
};
