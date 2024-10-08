import { ChangeEvent, useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"

const NewProduct = () => {

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setPhoto] = useState<string>();

  // using for images changes
  const changeImageHandler = (
    event: ChangeEvent<HTMLInputElement>) => 
  {
    const file:File | undefined = event.target.files?.[0];

    const reader:FileReader = new FileReader();
    if(file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if(typeof reader.result === 'string') {
          setPhoto(reader.result)
        }
      }
    }
  }

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <AdminSidebar />

      {/* main */}
      <main className="product-management">
        {/* for using a new product management using NewProduct.tsx */}
        <article>
          <form>
            <h2>New Product</h2>
            <div>
              <label>Name</label>
              <input required
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(event) => setName(event.target.value)} 
              />
            </div>
            <div>
              <label>Price</label>
              <input required
                type="number" 
                placeholder="Price" 
                value={price} 
                onChange={(event) => setPrice(Number(event.target.value))} 
              />
            </div>
            <div>
              <label>Stock</label>
              <input required
                type="number" 
                placeholder="Stock" 
                value={stock} 
                onChange={(event) => setStock(Number(event.target.value))} 
              />
            </div>
            <div>
              <label>Photo</label>
              <input required
                type="file" 
                placeholder="Photo" 
                onChange={changeImageHandler} 
              />
            </div>
            
            {/* for using a image or photos */}
            {
              photo && <img src={photo} alt="New Image" />
            }

            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  )
}

export default NewProduct