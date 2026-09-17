export default function Ingredient () {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>

    ))

    
    return (
        <main>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}