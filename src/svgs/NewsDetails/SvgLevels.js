import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={21} height={22} viewBox="0 0 21 22" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.47 0a3.534 3.534 0 00-3.433 2.683H.824A.823.823 0 000 3.5c0 .45.37.817.824.817h13.213A3.529 3.529 0 0017.47 7a.823.823 0 00.824-.817c0-.45-.37-.817-.824-.817-1.039 0-1.881-.84-1.881-1.866 0-1.03.847-1.866 1.881-1.866A1.88 1.88 0 0119.352 3.5c0 .45.37.817.824.817A.823.823 0 0021 3.5C21 1.57 19.416 0 17.47 0zM20.176 10.683H6.964A3.529 3.529 0 003.53 8C1.584 8 0 9.57 0 11.5-.004 13.43 1.58 15 3.53 15a.823.823 0 00.824-.817c0-.45-.37-.817-.824-.817-1.04 0-1.882-.84-1.882-1.866 0-1.03.847-1.866 1.882-1.866 1.04 0 1.882.84 1.882 1.866 0 .45.37.817.824.817h13.94A.823.823 0 0021 11.5c0-.45-.37-.817-.824-.817zM17.47 15a3.534 3.534 0 00-3.433 2.683H.824A.823.823 0 000 18.5c0 .45.37.817.824.817h13.213A3.529 3.529 0 0017.47 22a.823.823 0 00.824-.817c0-.45-.37-.817-.824-.817-1.039 0-1.881-.84-1.881-1.866 0-1.03.847-1.866 1.881-1.866a1.88 1.88 0 011.882 1.866c0 .45.37.817.824.817A.823.823 0 0021 18.5c0-1.93-1.584-3.5-3.53-3.5z"
        fill="#969696"
      />
    </Svg>
  );
}

const SvgLevels = React.memo(SvgComponent);
export default SvgLevels;