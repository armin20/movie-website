const genres = (selectedGenres) => {
    if(selectedGenres.length < 1) return;

    const genersId = selectedGenres.map(g => g.id)
    return genersId.reduce((acc, curr) => acc + "," + curr)
    
}
export default genres;