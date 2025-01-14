import { FiClipboard } from 'react-icons/fi';  // Import from React Icons
import { useState,useEffect } from 'react';
import { shortner } from '../services/api';
import useUserStore from '../store/userStore';
import Navbar from '../components/common/Navbar';
import { useNavigate } from 'react-router-dom';
const UrlShortner = () => {
const navigate = useNavigate()
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (!user) {
      navigate('/'); 
    }
  }, [user, navigate]);

  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(user?._id){
      const {data} = await shortner(url,user._id)
      setShortUrl(data.shortUrl);
    }
   
  };

  const handleCopy = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
      
    }
  }; 

  return (
    <>
    <Navbar/>
  
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">URL Shortener</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="url" className="block text-gray-600 font-medium">Enter URL</label>
            <input
              type="url"
              id="url"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the URL you want to shorten"
              value={url}
              onChange={handleUrlChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Shorten URL
          </button>
        </form>

        {shortUrl && (
          <div className="mt-6">
            <label className="block text-gray-600 font-medium">Your Shortened URL</label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                readOnly
                value={shortUrl}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleCopy}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 focus:outline-none"
                aria-label="Copy to clipboard"
              >
                <FiClipboard className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default UrlShortner;
