import React, { useState } from 'react'

function Form() {
    const [fields, setFields] = useState([
        { id: 1, value: '' } // Initial field
    ]);

    // Function to handle adding new fields
    const addField = () => {
        const newId = fields.length + 1;
        setFields([...fields, { id: newId, value: '' }]);
    };

    // Function to handle removing fields
    const removeField = (id) => {
        const updatedFields = fields.filter(field => field.id !== id);
        setFields(updatedFields);
    };

    // Function to handle updating field value
    const handleChange = (id, event) => {
        const updatedFields = fields.map(field => {
            if (field.id === id) {
                return { ...field, value: event.target.value };
            }
            return field;
        });
        setFields(updatedFields);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log(fields);
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map(field => (
                <div key={field.id}>
                    <input
                        type="text"
                        value={field.value}
                        onChange={(e) => handleChange(field.id, e)}
                    />
                    <button type="button" onClick={() => removeField(field.id)}>
                        Remove
                    </button>
                </div>
            ))}
            <button type="button" onClick={addField}>
                Add Field
            </button>
            <button type="submit">
                Submit
            </button>
        </form>
    );
}

export default Form
