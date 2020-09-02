import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [category, setCategory] = useState('')

    const handleSubmit = event => {
        event.preventDefault()

        if (category.trim() === '') return null

        setCategories(cts => [category, ...cts])
        setCategory('')
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Tip the new category"
                value={category}
                type="text"
                onChange={event => setCategory(event.target.value)}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
 
export default AddCategory;
