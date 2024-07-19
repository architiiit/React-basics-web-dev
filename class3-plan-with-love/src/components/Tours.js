import Card from "./Card"

function Tours({tours,removeTour}){
    return (
        <div className="container">
            <div>
                <h2 className="title">Plan With Love</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour)=>{
                        {/* always passa key value when using map function */}
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}
export default Tours;