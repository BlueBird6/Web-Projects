import * as React from 'react';

function NewlineText(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p className='paragraph'>{str}</p>);

    return newText;
}

export default NewlineText;