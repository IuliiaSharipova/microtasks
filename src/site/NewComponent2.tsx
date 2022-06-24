type NewComponent2Type = {
    topCars: Array<CarsType>
}
type CarsType = {
    manufacturer: string
    model: string

}
export const NewComponent2 = (props: NewComponent2Type) => {
    return (
        <table>
            <tr>
                <th>Top Cars:</th>
            </tr>
            {props.topCars.map((car, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{car.manufacturer}</td>
                        <td>{car.model}</td>
                    </tr>
                )
            })}
        </table>
    )
}