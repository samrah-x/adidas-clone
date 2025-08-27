import React from 'react'
import { IoAddSharp } from 'react-icons/io5'
import { RiPlayListAddFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './sidebar.css'
import { VscAdd } from 'react-icons/vsc'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration: "none", color: "black"}}>
            <div className="sidebar-item">
                <VscAdd size={28}/>
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration: "none", color: "black"}}>
            <div className="sidebar-item">
                <RiPlayListAddFill size={22}/>
                <p>Add Product List</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar