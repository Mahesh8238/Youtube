import '../styles/Categories.css'
const Categories = () => {
    let categories =[
        {link:"All"},
        {link:"Sports"},
        {link:"Comedy"},
        {link:"Travel"},
        {link:"Music"},
        {link:"kids"},
        {link:"Gaming"},
        {link:"Movies"},
        {link:"Bollywood"},
        {link:"Recently uploaded"}

    ]
    return ( 
        <div className="cats">
            <ul>
            {
    
                categories.map((data) =>{
                    return(
                        
                        <li><a href="">{data.link}</a></li>
                    )
                })
            }
            </ul>
           
        </div>
     );
}
 
export default Categories;