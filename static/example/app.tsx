/** @jsx jsx */
import { jsx } from "@emotion/react";
import {GHCorner} from 'react-gh-corner';
import {globalStyles, wrapperCss} from './styled';

const repoUrl = 'https://github.com/';

const App = () => {
  return (
    <div css={wrapperCss}>
      <GHCorner openInNewTab href={repoUrl} />
      Example!
      {globalStyles}
    </div>
  )
}

export default App