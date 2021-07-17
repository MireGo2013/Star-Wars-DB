import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

export default (ViewComponent, getData) => {

  return class extends Component {

    state = {
      itemList: null,
      error: false,
      loading: true,
    }

    onError = (err) => {
      this.setState({
        error: true,
        loading: false,
      });
    }

    componentDidMount() {
      getData()
        .then((itemList) => {
          this.setState({
            itemList,
            loading: false,
          });
        })
        .catch(this.onError);
    }
  
	render(){
		const { itemList, loading, error } = this.state;

			if (error) {
				console.log(error)
			  return <ErrorIndicator />
			}
		
			if (loading) {
			  return <Spinner />
			}
		
			return (
				<ViewComponent {...this.props} data={itemList}/>
		
			)
		  }

	}

};


