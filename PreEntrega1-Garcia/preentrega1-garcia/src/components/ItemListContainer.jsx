import remera1Img from '../assets/r1.png';
import remera2Img from '../assets/r2.png';
import buzos1Img from '../assets/22.png';
import buzos2Img from '../assets/22.png';

const ItemListContainer = ({ category }) => {
    const items = [
        { id: 1, name: 'Remeras', category: 'ropa', image: remera1Img },
        { id: 2, name: 'Remeras', category: 'ropa', image: remera2Img },
        { id: 3, name: 'Buzos', category: 'ropa', image: buzos1Img },
        { id: 4, name: 'Buzos', category: 'ropa', image: buzos2Img },
    ];

    const filteredItems = items.filter((item) => item.category === category);

    return (
        <div className="container mt-4">
            <h2 className="text-center">Colección {category}</h2>
            <div className="row">
                {filteredItems.map((item) => (
                    <div key={item.id} className="col-md-4">
                        <div className="card mb-3">
                            <img src={item.image} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;

