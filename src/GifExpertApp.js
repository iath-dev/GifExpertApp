import React from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [ categories, setCategories ] = React.useState(['Simpson'])

    return ( 
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <div>
                {categories.map(cat => (
                    <GifGrid key={cat} category={cat} />
                ))}
            </div>

        </div>
     );
}
 
export default GifExpertApp;
