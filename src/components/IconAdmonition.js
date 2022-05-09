import React, { Children } from 'react';
import Admonition from '@theme/Admonition';


// function createMarkup(notes) {
//   return {__html: 'First &middot; Second'};
// }

// function createMarkup(notes='First &middot; Second') {
//   return {__html: `${notes}`};
// }



export default function IconAdmonition({ icon="💡", title=" ", type="tip", children}) {
  return (
    <div>
      <Admonition type={type} icon={icon} title={title}>
        {children}
      </Admonition>
    </div>
  );
}