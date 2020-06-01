import React from 'react';
import renderer from 'react-test-renderer';
import { SongList } from './index';

it('Renders spinner if fetching', () => {
  const component = renderer.create(<SongList apiStatus={"FETCHING"} songs={[]} />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();  
});


it('Renders song list if data is fetched', () => {
  const component = renderer.create(<SongList apiStatus={"FETCHED"} songs={[]} />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();  
});
