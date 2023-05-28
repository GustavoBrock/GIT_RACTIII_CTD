import City from './City';

function HomeComponent(props) {
    return (
        <div>
            {
                props.items.map((itemIteracao) => {

                    
                    if (itemIteracao.country == "AR") {

                        return <City
                            key={itemIteracao.city}
                            {...itemIteracao}
                        />
                    }
                })
            }
        </div>
    )
}
export default HomeComponent;