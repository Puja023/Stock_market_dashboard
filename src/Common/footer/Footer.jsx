import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-5  w-full" style={{boxShadow:'0 0 15px #808080'}}>
        <div className="container mx-auto flex justify-center items-center flex-col">
          <p className="text-sm text-white">Copyright © 2024 Ahex. Designed With <FavoriteIcon style={{height:'20px',width:'20px',color:'red'}}/> All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
