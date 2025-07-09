function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
        document.getElementById('juice').textContent = sentence;
    }

    // Add 6 ingredients (2 calls)
    addIngredients('apple', 'carrot', 'ginger');
    addIngredients('mint', 'lemon', 'cucumber');

    // Display final juice
    displayJuice();
}

// Invoke in global scope
makeJuice('medium');
