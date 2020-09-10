import React from 'react'
import Header from '../../Container/Top Nav Bar/Header';
import Index2 from '../../Container/Side Nav Bar/Index2';
import Footer from '../Footer/Footer';
import Search from '../Search Button/Search';
import './Blog.css';
import { Link } from 'react-router-dom';

function Blogs() {
    return (
        <div>
            <Header/>
            <Index2/>
            <div className='shop'>
            < Search />
            </div>
            <h2 className='headlinee'>our blogs...</h2>
            <div className='containerr'>
                <div className='containerr1'>
                <div className='carrd'>
                    <div className='imagee'>
                        <img src='https://img.faballey.com/images/Product/DRS03361Z/3.jpg' alt='HR'/>
                    </div>
                    <div className='contentt'>
                        <h1>Dress | My Blog</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna 
                            aliquyam erat, sed diam voluptua.  
                        </p>
                        <button>Read More</button>
                        <div></div>
                    </div>
                </div>
                <div className='carrd'>
                    <div className='imagee'>
                        <img src='https://www.brightontheday.com/wp-content/uploads/2017/12/look2-38.jpg' alt='HR'/>
                    </div>
                    <div className='contentt'>
                        <h1>Dress | My Blog</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna 
                            aliquyam erat, sed diam voluptua.  
                        </p>
                        <button>Read More</button>
                        <div></div>
                    </div>
                </div>
                <div className='carrd'>
                    <div className='imagee'>
                        <img src='https://cdn.cliqueinc.com/posts/286313/spring-jean-outfits-286313-1584993294396-main.700x0c.jpg' alt='HR'/>
                    </div>
                    <div className='contentt'>
                        <h1>Dress | My Blog</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna 
                            aliquyam erat, sed diam voluptua.  
                        </p>
                        <button>Read More</button>
                        <div></div>
                    </div>
                </div>
            </div>
            
            <div className='containerr2'>
                <div className='carrd'>
                    <div className='imagee'>
                        <img src='https://img.faballey.com/images/Product/DRS03361Z/3.jpg' alt='HR'/>
                    </div>
                    <div className='contentt'>
                        <h1>Dress | My Blog</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna 
                            aliquyam erat, sed diam voluptua.  
                        </p>
                        <button>Read More</button>
                        <div></div>
                    </div>
                </div>
                <div className='carrd'>
                    <div className='imagee'>
                        <img src='https://www.brightontheday.com/wp-content/uploads/2017/12/look2-38.jpg' alt='HR'/>
                    </div>
                    <div className='contentt'>
                        <h1>Dress | My Blog</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna 
                            aliquyam erat, sed diam voluptua.  
                        </p>
                        <button>Read More</button>
                        <div></div>
                    </div>
                </div>
                <div className='carrd'>
                    <div className='imagee'>
                        <img src='https://cdn.cliqueinc.com/posts/286313/spring-jean-outfits-286313-1584993294396-main.700x0c.jpg' alt='HR'/>
                    </div>
                    <div className='contentt'>
                        <h1>Dress | My Blog</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna 
                            aliquyam erat, sed diam voluptua.  
                        </p>
                        <button>Read More</button>
                        <div></div>
                    </div>
                </div>
            </div>
            </div>
            <hr id='linee'></hr>
            <div className='cardss'>
                <div className='rcardd1'>
                <span><Link to='/shop' style={{color:'#4D4D4D'}}>SHOP</Link></span>
                </div>
                <div className='rcard3'>
                <span><Link to='/categories' style={{color:'#4D4D4D'}}>CATEGORIES</Link></span>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Blogs