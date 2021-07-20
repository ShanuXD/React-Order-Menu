import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const allCategories = ["all", ...new Set(items.map(item=>item.category))]

function App() {

  const [products, setProducts] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterProducts = (category)=>{

    if (category==='all'){
      setProducts(items)
      return
    }
    const newProducts = items.filter((product)=> product.category === category)
    setProducts(newProducts)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterProducts={filterProducts} categories={categories}/>
        <Menu products={products} />
      </section>
    </main>
  )
}

export default App;
