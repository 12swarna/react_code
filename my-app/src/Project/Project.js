import { useState } from 'react';
import './Project.css';

function AdminPage(){
    const [product, setProduct] = useState("");
    const [selling, setSelling] = useState("");
    const [proname, setProname] = useState("");
    const [category, setCategory] = useState("");
   
    const FormHandler=(event)=>{
        event.preventDefault();
        console.log(product, selling, proname, category);
        
        // Add item to corresponding category
        if (category === "Electronics Item") {
            //this is first list//
            let list = document.createElement("li");
            list.className = "list";
            let ul = document.querySelector(".ul1");
            ul.appendChild(list);
            list.innerText = `${product}-${selling}-${proname}-${category}`;

            //setting data on localstorage//
            localStorage.setItem(product,JSON.stringify({product,selling,proname,category}));
            //this is deltebutton//
            let butto = document.createElement("button");
            let butto2 = document.createTextNode("deletebutton");
            butto.appendChild(butto2);
            ul.appendChild(butto);

            //removing item form local storage//
            butto.addEventListener('click',()=>{
                localStorage.removeItem(product);
                ul.removeChild(list);
                ul.removeChild(butto);

            })
    
        }
        else if (category === "Food Item") {
            let list2 = document.createElement("li");
            list2.className = "list1";
            let ul2 = document.querySelector(".ul2");
            ul2.appendChild(list2);
            list2.innerText = `${product}-${selling}-${proname}-${category}`;
            //adding deltebutton//
            let butto1 = document.createElement("button");
            let butto3 = document.createTextNode("deletebutton");
            butto1.appendChild(butto3);
            ul2.appendChild(butto1);

            //adding data on local storage//
            localStorage.setItem(product,JSON.stringify({product,proname,selling,category}));

            //remove data form local storage//
            butto1.addEventListener('click',()=>{
                localStorage.removeItem(product);
                ul2.removeChild(list2);
                ul2.removeChild(butto1);
            })

        }
        else if (category === "Skin care Item") {
            let list3 = document.createElement("li");
            list3.className = "list2";
            let ul3 = document.querySelector(".ul3");
            ul3.appendChild(list3);
            list3.innerText = `${product}-${selling}-${proname}-${category}`;
            //adding delte button//
            let button2=document.createElement("button");
            let button3=document.createTextNode("deletebutton");
            button2.appendChild(button3);
            ul3.appendChild(button2);

            //adding local storage//
            localStorage.setItem(product,JSON.stringify({product,selling,proname,category}));
             
            button2.addEventListener("click",()=>{
                localStorage.removeItem(product);
                ul3.removeChild(list3);
                ul3.removeChild(button2);
            })
        }
    }
    
    const handleProductID = (event) => {
        setProduct(event.target.value);
    }

    const handleSellingPrice = (event) => {
        setSelling(event.target.value);
    }

    const handleProductName = (event) => {
        setProname(event.target.value);
    }

    const handleCategory = (event) => {
        setCategory(event.target.value);
    }

    
    return (
        <>
        <h1 className='aad'>Admin page</h1>
            <form onSubmit={FormHandler} className='firstform'>
                <label className='pro1'>Product ID</label>
                <input type="number" className='pro1_' onChange={handleProductID}></input>
                <br></br>

                <label className='pro2'>Selling Price</label>
                <input type="number" onChange={handleSellingPrice}></input>
                <br></br>

                <label className='pro3'>Product name</label>
                <input type="text" onChange={handleProductName}></input>
                <br></br>

                <select className='pro4' onChange={handleCategory}>
                    <option value="">--Select Category--</option>
                    <option value="Electronics Item">Electronics Item</option>
                    <option value="Food Item">Food Item</option>
                    <option value="Skin care Item">Skin care Item</option>
                </select>
                <br></br>
                
                <button type="submit" className='pro5'> Submit</button>
                <br></br>
            </form>
            
            <br />
            <ul className='ul1'>Electronics Item:</ul>
            <ul className='ul2'>Food Item:</ul>
            <ul className='ul3'>Skin care Item:</ul>
        </>
    );
}

export default AdminPage;
