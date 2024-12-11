import React, { useState } from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState('ropa'); // Estado para la categoría

    return (
        <div>
            <NavBar />
            <div className="container my-3">
                <button onClick={() => setSelectedCategory('ropa')} className="btn btn-primary me-2">
                    Ropa
                </button>
            </div>
            <ItemListContainer category={selectedCategory} />
        </div>
    );
};

export default App;

