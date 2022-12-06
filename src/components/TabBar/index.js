import React from 'react'
import homeImg from '../../assets/icons/home.png'
import plusImg from '../../assets/icons/plus.png'
import graphicsImg from '../../assets/icons/graphics.png'
import './TabBar.css'
function TabBar({setOpenItemModal, activeCategory, setActiveCategory, showGraphics, setShowGraphics}) {
  const [activeHome, setActiveHome] = React.useState(false);
  const [activeNewItem, setActiveNewItem] = React.useState(true);
  const onClickHome = (e) => {
    setActiveHome(true);
    setActiveNewItem(false);
    setActiveCategory(false);
    if(!!showGraphics) {
      setShowGraphics(prevState=>!prevState)
    }
  }
  const onClickAdd = () => {
    setActiveNewItem(true);
    setActiveCategory(false);
    setActiveHome(false);
    if(!!showGraphics) {
      setShowGraphics(prevState=>!prevState)
    }
  }
  const onOpenModal = () => {
    if(!activeNewItem){
      return
    }
    setOpenItemModal(prevState=>!prevState)

  }
  const onClickCategory = () => {
    setActiveCategory(true);
    setActiveHome(false);
    setActiveNewItem(false);
    setShowGraphics(prevState=>!prevState)
  }
  return (
    <div className="TabBar__container">
      <ul>
        <li className={`List ${activeHome}`} onClick={onClickHome}>
          <a href="#/">
            <img src={homeImg} alt='home' className='icon'/>
            <span className="Text">Home</span>
          </a>
          <div className={`indicator ${activeHome}`}></div>
        </li>
        <li className={`List ${activeNewItem}`} onClick={onClickAdd}>
          <a href="#/">
            <img src={plusImg} alt='Add new item' className='icon' onClick={onOpenModal}/>
            <span className="Text">Add</span>
          </a>
          <div className={`indicator ${activeNewItem}`}></div>
        </li>
        <li className={`List ${activeCategory}`} onClick={onClickCategory}>
          <a href="#/">
            <img src={graphicsImg} alt='category' className='icon'/>
            <span className="Text">Graphics</span>
          </a>
          <div className={`indicator ${activeCategory}`}></div>
        </li>
      </ul>
    </div>
  )
}
export default TabBar;