export default function Price({oldPrice,newPrice,idx}){
return (
<div>
    <p>{oldPrice[idx]}</p>
    <p>{newPrice[idx]}</p>
</div>
)
}