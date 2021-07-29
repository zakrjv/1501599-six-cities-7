import {renderHook} from '@testing-library/react-hooks';
import useMap from './useMap';

let cityMock = null;
let testMapRef = null;

describe('Hook: useMap', () => {
  beforeAll(() => {
    cityMock = {
      coordinates: [50.933594, 6.961899],
      zoom: 13,
    };

    testMapRef = {
      current: true,
    };

    jest.mock('leaflet', () => ({
      __esModule: true,
      default:{
        map() {
          return this;
        },
        tileLayer() {
          return this;
        },
        addTo() {
          return this;
        },
      },
    }));
  });

  it('should return map object', () => {
    const {result} = renderHook(() =>
      useMap(testMapRef, cityMock.coordinates, cityMock.zoom),
    );

    expect(result).toBeInstanceOf(Object);
  });
});
