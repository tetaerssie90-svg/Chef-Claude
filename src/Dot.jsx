export default function Dot() {


    function handleSubmit () {
        console.log("Form submitted!");

    }
    
    return (
        <main>
            <form  onSubmit={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"

                />
                <button>Add ingredient</button>


            </form>


        </main>
    )
}