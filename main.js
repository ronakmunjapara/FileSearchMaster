// Disable right-click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });

  // Disable context menu
  document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('contextmenu', function(event) {
      event.preventDefault();
    });
  });


const searchForm = document.querySelector('.search-container form');
searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const searchInput = document.querySelector('.search-container input[type="text"]');
    const categorySelect = document.querySelector('.search-container select');
    const searchTerm = searchInput.value.trim().replace(/\s+/g, '.');
    const categoryValue = categorySelect.value;
    let fileTypes = '';
    let searchQuery = '';
    switch (categoryValue) {
        case 'video':
            fileTypes = '(avi|mkv|mov|mp4|mpg|wmv|avchd|webm)';
            break;
        case 'ebooks':
            fileTypes = '(CBZ|CBR|CHM|DOC|DOCX|EPUB|MOBI|ODT|PDF|RTF|txt)';
            break;
        case 'audio':
            fileTypes = '(ac3|flac|m4a|mp3|ogg|wav|wma|webm)';
            break;
        case 'compressed':
            fileTypes = '(7z|bz2|gz|iso|rar|zip)';
            break;
        case 'software':
            fileTypes = '(apk|exe|iso|rar|tar|zip|swf)';
            break;
        default:
            fileTypes = '';
    }
    const excludeURLs =
        '-inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) -inurl:(index_of|listen77|mp3raid|mp3toss|mp3drug|sirens|rocks|wallywashis)';
    searchQuery = `intext:"${searchTerm}" ${fileTypes} ${excludeURLs} intitle:"index.of./"`;
    const searchURL = `https://www.google.com/search?q=${searchQuery}`;
    if (searchTerm.length > 0) {
         window.open(searchURL, "_blank");
    }
});
