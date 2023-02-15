searchFormBtn.addEventListener('click', () => {
    location.hash = '#search=' + searchFormInput.value;
});

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends=';
});

arrowBtn.addEventListener('click', () => {
    location.hash = '#home';
});

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({ location });

    location.hash.startsWith('#trends')    ? trendsPage()       :
    location.hash.startsWith('#search=')   ? searchPage()       :
    location.hash.startsWith('#movie=')    ? movieDetailsPage() :
    location.hash.startsWith('#category=') ? categoriesPage()   :
    homePage()

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
} 

function homePage() {
    console.log('HOME');
    
    headerSection.style.background = '';
    headerSection.classList.remove('header-container--long');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive'); 
    searchForm.classList.remove('inactive');
    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    
    arrowBtn.classList.add('inactive'); 
    headerCategoryTitle.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategoriesPreview();
};

function trendsPage() {
    console.log('TRENDS');

    headerSection.style.background = '';
    headerSection.classList.remove('header-container--long');
    arrowBtn.classList.remove('inactive'); 
    arrowBtn.classList.remove('header-arrow--white');
    headerCategoryTitle.classList.remove('inactive');
    genericSection.classList.remove('inactive');
    
    movieDetailSection.classList.add('inactive');
    headerTitle.classList.add('inactive'); 
    searchForm.classList.add ('inactive');
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
};

function searchPage() {
    console.log('SEARCH');

    headerSection.style.background = '';
    headerSection.classList.remove('header-container--long');
    arrowBtn.classList.remove('inactive'); 
    arrowBtn.classList.remove('header-arrow--white');
    genericSection.classList.remove('inactive');
    searchForm.classList.remove('inactive');
    
    headerCategoryTitle.classList.add('inactive');
    movieDetailSection.classList.add('inactive');
    headerTitle.classList.add('inactive'); 
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');

    const [_, query] = location.hash.split('=');
    getMoviesBySearch(query);
};

function movieDetailPage() {
    console.log('MOVIE');

    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive'); 
    
    movieDetailSection.classList.remove('inactive');
    headerSection.classList.add('header-container--long');
    arrowBtn.classList.add('header-arrow--white'); 
    headerCategoryTitle.classList.add('inactive');
    genericSection.classList.add('inactive');
    headerTitle.classList.add('inactive'); 
    searchForm.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
};

function categoriesPage() {
    console.log('CATEGORY');

    headerSection.style.background = '';
    headerSection.classList.remove('header-container--long');
    arrowBtn.classList.remove('inactive'); 
    arrowBtn.classList.remove('header-arrow--white');
    headerCategoryTitle.classList.remove('inactive');
    genericSection.classList.remove('inactive');
    
    movieDetailSection.classList.add('inactive');
    headerTitle.classList.add('inactive'); 
    searchForm.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');

    const [_, categoryData] = location.hash.split('=');
    const [categoryId, categoryName] = categoryData.split('-');

    headerCategoryTitle.innerHTML = categoryName;

    getMoviesByCategory(categoryId);
};



