import { Link } from 'react-router-dom'

export default function Post(props) {

    function buildHeader() {
        let resHeader;

        if (!props.hideLink) {
            resHeader = (
                <Link to={"/blog/" + props.post.id}>
                    {props.post.name}: { props.post.title }
                </Link>
            )
        } else {
            resHeader = (
                <>{props.post.name}</>
            )
        }

        return resHeader
    }

    return (
        <div className="card card-item">
            <h2>
                { buildHeader() }
            </h2>
            <p>{ props.post.name }</p>
            <p>year: { props.post.year}</p>
            <p>selling price: { props.post.sellingPrice}</p>
            <p>km driven: { props.post.kmDriven}</p>
            <p>fuel: { props.post.fuel}</p>
            <p>transmission: { props.post.transmission}</p>
            <p>owner: { props.post.owner}</p>
            <p>mileage: { props.post.mileage}</p>
            <p>engine: { props.post.engine}</p>
            <p>max power: { props.post.maxPower}</p>
            <p>torque: { props.post.torque}</p>
            <p>seats: { props.post.seats}</p>   
        </div>
    )
}