import { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';

const MenuByCategoryPage_80 = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  console.log('params category', params.category);

  const navigate = useNavigate();

  const changeFilter = (filter = '') => {
    window.location.href=`/supa_menu_80/${filter}`;;
  }

  const getMenuDataByCategory_80 = async() => {
      const response = await fetch(`https://wjviuyuwtkixlajqlpbk.supabase.co/rest/v1/menu_80?select=*&category=eq.${params.category}`,{
        method: 'GET',
        headers: {
          apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqdml1eXV3dGtpeGxhanFscGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTkzMDcsImV4cCI6MTk5MjAzNTMwN30.pIV8FF8Cr3kMLUwG_3KKUZ1wsGipa9oXpwrXCR7Atas`,
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqdml1eXV3dGtpeGxhanFscGJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTkzMDcsImV4cCI6MTk5MjAzNTMwN30.pIV8FF8Cr3kMLUwG_3KKUZ1wsGipa9oXpwrXCR7Atas`
        }
      } );
      const data = await response.json();
      console.log('menu data', data);
      setProducts(data);
  }

  useEffect(()=> {
    getMenuDataByCategory_80();
  }, []);
  return (
    <section className="menu">
          <div className="title">
          <h2>Menu from Supabase menu table</h2>
          <h3>PoCheng Chu, 208410380</h3>
            <div className="underline"></div>
          </div>
          <div className="btn-container">
            <button type="button" className="filter-btn" data-id="all" onClick={()=> changeFilter()}>
              all
            </button>
            <button type="button" className="filter-btn" data-id="breakfast" onClick={()=>  changeFilter('breakfast')}>
              breakfast
              </button>
              <button type="button" className="filter-btn" data-id="lunch"  onClick={()=> changeFilter('lunch')}>
              lunch
              </button>
              <button type="button" className="filter-btn" data-id="dessert"  onClick={()=> changeFilter('dessert')}>
              dessert
              </button>
              <button type="button" className="filter-btn" data-id="shakes"  onClick={()=> changeFilter('shakes')}>
              shakes
            </button>
          </div>
          <div className="section-center">
            { products.map((product) => {
              const {id, img, price, title, description} = product;
              return (
              <article className="menu-item" key={id}>
              <img src={img} alt="eggs" className="photo" />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">{price}</h4>
                </header>
                <p className="item-text">
                  {description}
                </p>
              </div>
            </article>
              )
            })}
            </div>
        </section>
  );
}

export default MenuByCategoryPage_80;
