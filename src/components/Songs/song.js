import React from 'react';
import { List, Avatar } from 'antd';

const Song = ({
  imgUrl,
  title
}) => (
  <List.Item>
    <List.Item.Meta
      avatar={<Avatar src={imgUrl} />}
      title={title}
      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
    />
  </List.Item>
);

export default Song;
