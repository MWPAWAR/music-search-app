import React from 'react';
import { Divider, Layout } from 'antd';
import { FormattedMessage } from 'react-intl';
import SearchBox from '../SearchBox/index';
import SongList from '../Songs/index';
import { SiteLayoutContent, PageHeading } from './styles';

const { Header, Content } = Layout;

const App = () => (
  <Layout className="layout">
    <Header>
      <PageHeading>
        <FormattedMessage id="app.header" />
      </PageHeading>
    </Header>
    <Content>
      <SiteLayoutContent>
        <SearchBox />
        <Divider />
        <SongList />
      </SiteLayoutContent>
    </Content>
  </Layout>
);

export default App;
