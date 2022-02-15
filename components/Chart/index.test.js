// 3rd parties
import { render, act } from '@testing-library/react';
import ChartComponent from '.';

describe('Component of outcome from simulation', () => {
  it('The components snapshot should remain always the same', () => {
    const chartA = {
      0: 1000,
      1: 1100.2919342696182,
      2: 1200.6131471917915,
      3: 1300.9636473140404,
      4: 1401.343443186277,
      5: 1501.7525433609044,
      6: 1602.190956392717,
      7: 1702.6586908394388,
      8: 1803.155755260795,
      9: 1903.6821582191965,
      10: 2004.2379082796901,
    };
    const chartB = {
      0: 1000,
      1: 1000.2919342696304,
      2: 1000.5839537648784,
      3: 1000.8760585106247,
      4: 1001.1682485317566,
      5: 1001.4605238531689,
      6: 1001.7528844997634,
      7: 1002.0453304964501,
      8: 1002.3378618681451,
      9: 1002.6304786397724,
      10: 1002.9231808362633,
    };
    act(() => {
      const { container } = render(<ChartComponent
        chart1={chartA}
        chart2={chartB}
      />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
