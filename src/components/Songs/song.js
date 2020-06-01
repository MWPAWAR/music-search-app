import React from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { List, Avatar } from 'antd';

const Song = ({
  artistName,
  collectionName,
  imgUrl,
  releaseDate,
  title
}) => (
  <List.Item>
    <List.Item.Meta
      avatar={<Avatar src={imgUrl} />}
      title={title}
      description={<FormattedMessage id="app.songs-list-artist-label" values={{ collectionName, artistName, releaseDate: moment(releaseDate).format('YYYY') }} />}
    />
  </List.Item>
);

export default Song;
