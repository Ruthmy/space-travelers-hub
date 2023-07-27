import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For better DOM assertions
import Rockets from '../components/Rockets';

// Mocking useDispatch and useSelector
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: (selectorFn) => selectorFn(
    {
      rockets: {
        rockets: [
          {
            flickr_images: [
              'https://imgur.com/DaCfMsj.jpg',
              'https://imgur.com/azYafd8.jpg',
            ],
            name: 'Falcon 1',
            description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
            id: '5e9d0d95eda69955f709d1eb',
          },
          {
            flickr_images: [
              'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
              'https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg',
              'https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg',
              'https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg',
              'https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg',
              'https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg',
            ],
            name: 'Falcon 9',
            description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
            id: '5e9d0d95eda69973a809d1ec',
          },
        ],
      },
    },
  ),
}));

test('renders the Empty Missions component correctly', () => {
  const { container } = render(<Rockets />);
  expect(container).toMatchSnapshot();
});
