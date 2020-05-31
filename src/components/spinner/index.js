import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { SpinnerContainer } from './styles';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Spinner = () => <SpinnerContainer><Spin indicator={antIcon} /></SpinnerContainer>;

export default Spinner;
