import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.categories.map((category, index) => {
          return (
            <div key={index}>
            <br />
              <h3>Categories:</h3>
              {category}
              <hr />
              <br />
              <h3>Products:</h3>
              {this.props.products.map(product => {
                if (product.category === category) {
                  return (
                    <div key={product.id}>
                      <Link to={`/products/${product.id}`} >{product.name}</Link>
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ products }) => {

  const categories = products.reduce((agg, product) => {
    if (!agg.includes(product.category)) {
      agg.push(product.category);
      return agg;
    } else {
      return agg;
    }
  }, []);

  return {
    products,
    categories
  };
};


export default connect(mapStateToProps)(Product);
