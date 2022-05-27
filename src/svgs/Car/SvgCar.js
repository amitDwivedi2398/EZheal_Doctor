import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={16}
      height={16}
      {...props}>
      <Path
        d="M19.447 8.658A2.984 2.984 0 0 0 16.764 7H7.236a2.984 2.984 0 0 0-2.683 1.658L2.267 13.23A12.059 12.059 0 0 0 1 18.6V22h2v2h5v-2h8v2h5v-2h2v-3.4a12.059 12.059 0 0 0-1.267-5.367Zm-13.1.9A.994.994 0 0 1 7.236 9h9.528a.994.994 0 0 1 .894.553L19.882 14H4.118ZM21 20H3v-1.4a10 10 0 0 1 .345-2.6H5v1a1 1 0 0 0 2 0v-1h10v1a1 1 0 0 0 2 0v-1h1.655A10 10 0 0 1 21 18.6Zm2.94-14.472-.883 1.8L12.441 2.1a1 1 0 0 0-.883 0L.943 7.323.06 5.528 10.676.308a3.017 3.017 0 0 1 2.648 0Z"
        fill="#ee0825"
      />
    </Svg>
  );
}

const SvgCar = React.memo(SvgComponent);
export default SvgCar;
