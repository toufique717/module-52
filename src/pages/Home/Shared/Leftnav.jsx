import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftnav = () => {
    const [ categories, setcategories] = useState([]);

    useEffect( ()=>
        {
            fetch('categories.json')
            .then( res => res.json())
            .then(data => setcategories(data))
        },[])

    return (
        <div>
            <h1 className='text-2xl font-bold'>All categories :</h1>
            <div>
                {
                    categories.map(category => <Link key={category.id} to={`/category/${category.id}`} className='block p-2'>{category.name}</Link>)
                }
            </div>

        </div>
    );
};

export default Leftnav;