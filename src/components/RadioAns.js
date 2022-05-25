import * as React from 'react';


export default function RadioAns({ radio, title, toggleAnswer }) {

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        // updateCount()
        setChecked(!checked);
        toggleAnswer(title)
    };

    return (
        <div>
            <label>
                <input
                    type="radio"
                    name={radio}
                    checked={checked}
                    onChange={handleChange}
                />
                {title}
            </label>

        </div>
    );
}