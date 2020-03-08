import React, { Component } from 'react';

import { Sidebar, ListCategory, ButtonCategory } from './styles';

export default class Categories extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    this.setState({ categories: await this.request() });
  }

  async request() {
    const data = await (
      await fetch('https://api.thecatapi.com/v1/categories')
    ).json();
    return data;
  }

  render() {
    const { categories } = this.state;
    const { choosedCategory, setCategory } = this.props;
    return (
      <Sidebar>
        <h2>Categories</h2>
        <ListCategory>
          {categories.map(category => (
            <li key={category.id}>
              <ButtonCategory
                type="button"
                onClick={e => setCategory(e)}
                value={
                  category.name === choosedCategory ? false : category.name
                }
              >
                {category.name}
              </ButtonCategory>
            </li>
          ))}
        </ListCategory>
      </Sidebar>
    );
  }
}
