// Menu
var url = new URL(window.location.href);
var c = url.searchParams.get("cat");


const buttons = document.querySelectorAll('[data-filter]');
const categories = document.querySelectorAll('[data-cat]');
if(c != null)
{
    filterCategories(c);
}

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const cat = button.dataset.filter;
        filterCategories(cat);
        
    });
});

function filterCategories(cat)
{
    categories.forEach(function(category) {
            category.classList.add('is-hidden');

            if (category.dataset.cat.includes(cat) || cat === '*') {
                category.classList.remove('is-hidden');
            }
        });
}