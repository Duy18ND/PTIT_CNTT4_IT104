import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function UserManager() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 1500);
    const element = document.getElementById("scroll");

    if(element){
      element.scrollIntoView({behavior: 'smooth'}); 
    }
  }, [location]);
  return (
    <div>
        quae. Voluptates illum possimus quod blanditiis et illo, quia fugit reiciendis? Explicabo obcaecati eaque tempore, nam inventore odio totam. Expedita amet vel non maiores aliquam quas reprehenderit sunt debitis, cupiditate voluptas rerum veniam deleniti porro voluptates recusandae
        <p id='scroll'>Scroll den element mong muon!</p>
    </div>
  )
}
