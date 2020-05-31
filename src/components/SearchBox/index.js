import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { injectIntl, FormattedMessage } from 'react-intl';
import Creators from '../../actions/index';
import { InputError } from './styles';

const { Search } = Input;

class SearchBox extends React.PureComponent {
  state = {
    query: '',
    emptyQueryError: false
  }

  onSearchBtnClick = () => {
    const { query } = this.state;
    if (!query) {
      return this.setState({ emptyQueryError: true });
    }
    
    this.props.searchSongs(query);
  }

  handleInputChange = (evt) => {
    this.setState({ query: evt.target.value, emptyQueryError: false });
  }

  render() {
    const { emptyQueryError } = this.state;
    const { formatMessage } = this.props.intl;

    return (
      <>
        <Search
          enterButton={<FormattedMessage id="app.search-btn-label" />}
          placeholder={formatMessage({ id: 'app.search-input-placeholder' }) }
          size="large"
          onChange={this.handleInputChange}
          onSearch={this.onSearchBtnClick}
        />
        {emptyQueryError && (
          <InputError><FormattedMessage id="app.search-input-error" /></InputError>
        )}
      </>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    searchSongs: query => { dispatch(Creators.fetchSongs(query)) }
  }
};
  
const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(SearchBox);

export default injectIntl(connectedComponent);
