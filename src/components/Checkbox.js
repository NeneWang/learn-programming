import * as React from 'react';


export default function CheckBox({ title }) {

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                {title}
            </label>
        </div>
    );
}