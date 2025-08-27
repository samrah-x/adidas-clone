import React, { useState } from 'react'
import './addproduct.css'
import { RiImageAddLine } from 'react-icons/ri'

const AddProduct = () => {

    const [image, setImage] = useState<File | null>(null);
    const [productDetails, setProductDetails] = useState({
        name: '',
        price: 0,
        tag: '',
        tab:'',
        category: 'women',
        image: '',
    })

    const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        setImage(e.target.files[0]);
    }
    };

    const changeHandler = (e : React.ChangeEvent<HTMLInputElement| HTMLSelectElement>) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value})
    }

    // const AddProduct = async() =>{
    //     console.log(productDetails);

    //     let responseData;
    //     let product = productDetails;

    //     let formData = new FormData();
    //     if (image) {
    //        formData.append("product", image);
    //     }
        
    //     await fetch('http://localhost:4000/upload', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application.json', 
    //         },
    //         body:formData,
    //     }).then((resp) => resp.json()).then((data) => {responseData=data})
        
    //     if(responseData!.success)
    //     {
    //         product.image = responseData!.image_url;
    //         console.log(product);
    //         await fetch('http://localhost:4000/addproduct', {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application.json',
    //                 'Content-Type': 'application.json',
    //             },
    //             body:JSON.stringify(product),
    //         }) .then((resp)=> resp.json()).then((data) => {
    //             data.success?alert('Product Added'): alert('Failed')
    //         })
    //     }
    // }

    const AddProduct = async () => {
    try {
        console.log(productDetails);
        let product = { ...productDetails };

        // 1. Upload image
        let formData = new FormData();
        if (image) {
        formData.append("product", image);
        }

        const uploadResp = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
        });

        const uploadData = await uploadResp.json();

        if (uploadData.success) {
        product.image = uploadData.image_url;
        console.log("Product with image:", product);

        // 2. Save product
        const resp = await fetch("http://localhost:4000/addproduct", {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });

        const data = await resp.json();

        if (data.success) {
            alert("Product Added");
        } else {
            alert("Failed to add product");
        }
        } else {
        alert("Image upload failed");
        }
    } catch (err) {
        console.error("Error adding product:", err);
        alert("Something went wrong");
    }
    };

  return (
    <div className='addproduct'>
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type Here'/>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Price</p>
            <input value= {productDetails.price} onChange={changeHandler} type='number' name='price' placeholder='Type Here'/>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Tag</p>
            <input value={productDetails.tag} onChange={changeHandler} type='text' name='tag' placeholder='e.g; Originals, Sportswear etc'/>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Tab</p>
            <input value={productDetails.tab} onChange={changeHandler} type='text' name='tab' placeholder='e.g; New Arrivals, New to Sale etc'/>
        </div>
        <div className="row">
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name='category' className='addproduct-selector'>
                    <option value='Women'>Women</option>  
                    <option value='Men'>Men</option>  
                    <option value='Kids'>Kids</option>  
                </select> 
            </div>
            <div className="addproduct-itemfield">
                <p>Product Image</p>
                <label htmlFor='file-input'>
                    {image? <img src={URL.createObjectURL(image)} className='addproduct-thumbnail'/> :<RiImageAddLine size={28} className='addproduct-thumbnail'/>}    
                </label>
                <input onChange={imageHandler} type='file' name='image' id='file-input' hidden/>
            </div>
        </div>
        <button onClick={AddProduct} className='addproduct-btn'>Add Product</button>
    </div>
  )
}

export default AddProduct