
export default function MealItem({meals}) {

    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meals.image}`} alt={meals.name} />
            <div>
                <h3>{meals.name}</h3>
                <p className="meal-item-price">
                    {meals.price}
                
                </p>
                <p className="meal-item-description">{meals.description} </p>
            </div>
            <p className="meal-item-action">
            <button>Add to Cart</button>
            </p>
        </article>
    </li>
    
}