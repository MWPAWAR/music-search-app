import React from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import getSongs from '../../selectors/songs';
import getApiStatus from '../../selectors/api-status';
import Spinner from '../spinner/index';
import { FETCHING } from '../../constants/app';
import Song from './song';

export const SongList = ({ apiStatus, songs }) =>
  apiStatus === FETCHING
    ? <Spinner />
    : <List
        itemLayout="horizontal"
        dataSource={songs}
        renderItem={song => <Song { ...song} />}
      />

const mapStateToProps = state => ({
  songs: getSongs(state),
  apiStatus: getApiStatus(state)
});

export default connect(mapStateToProps)(SongList);
