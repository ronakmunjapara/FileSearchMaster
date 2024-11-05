import React, { useState } from 'react';
import { Search, Film, Book, Music, Archive, Box, Command } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanSearchTerm = searchTerm.trim().replace(/\s+/g, '.');
    
    const fileTypes: Record<string, string> = {
      video: '(avi|mkv|mov|mp4|mpg|wmv|avchd|webm)',
      ebooks: '(CBZ|CBR|CHM|DOC|DOCX|EPUB|MOBI|ODT|PDF|RTF|txt)',
      audio: '(ac3|flac|m4a|mp3|ogg|wav|wma|webm)',
      compressed: '(7z|bz2|gz|iso|rar|zip)',
      software: '(apk|exe|iso|rar|tar|zip|swf)'
    };

    const excludeURLs = '-inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) -inurl:(index_of|listen77|mp3raid|mp3toss|mp3drug|sirens|rocks|wallywashis)';
    const searchQuery = `intext:"${cleanSearchTerm}" ${category ? fileTypes[category] : ''} ${excludeURLs} intitle:"index.of./"`;
    
    if (cleanSearchTerm) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`, "_blank");
    }
  };

  const categories = [
    { id: 'video', name: 'Videos', icon: Film },
    { id: 'ebooks', name: 'E-Books', icon: Book },
    { id: 'audio', name: 'Audio', icon: Music },
    { id: 'compressed', name: 'Archives', icon: Archive },
    { id: 'software', name: 'Software', icon: Command }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] hero-background">
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl w-full px-4 space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold tracking-tight">
                File Search Master
              </h1>
              <p className="text-xl text-gray-300">
                Advanced file discovery powered by Google
              </p>
            </div>

            <form onSubmit={handleSearch} className="space-y-6">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for files..."
                    className="w-full pl-12 pr-4 py-4 bg-[rgba(0,0,0,0.75)] border-2 border-gray-600 rounded-lg focus:border-red-600 focus:outline-none text-lg backdrop-blur-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-colors"
                >
                  Search
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {categories.map(({ id, name, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setCategory(id)}
                    className={`flex flex-col items-center p-4 rounded-lg transition-all backdrop-blur-sm ${
                      category === id
                        ? 'bg-red-600 text-white'
                        : 'bg-[rgba(0,0,0,0.75)] border-2 border-gray-600 hover:border-gray-400'
                    }`}
                  >
                    <Icon className="w-6 h-6 mb-2" />
                    <span className="text-sm font-medium">{name}</span>
                  </button>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[rgba(0,0,0,0.75)] p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
            <Box className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Advanced Search</h3>
            <p className="text-gray-400">
              Powerful Google-based search algorithm to find direct file downloads
            </p>
          </div>
          <div className="bg-[rgba(0,0,0,0.75)] p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
            <Archive className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Multiple Formats</h3>
            <p className="text-gray-400">
              Search for various file types including videos, music, ebooks, and more
            </p>
          </div>
          <div className="bg-[rgba(0,0,0,0.75)] p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
            <Command className="w-8 h-8 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Filtering</h3>
            <p className="text-gray-400">
              Automatically filters out irrelevant results and unsafe websites
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;