import * as React from 'react';


export default function CheckBoxBar({ title, updateCount }) {

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        // updateCount()
        setChecked(!checked);

        updateCount(checked ? 0 : 1);

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