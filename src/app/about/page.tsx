


export default  async function About() {
    await new Promise((resolve) => {
 setTimeout (resolve ,10000);
    })
    return (
       <>
       <section className="bg-bannerImg bg-repeat bg-cover bg-bottom ">
        <div className="w-full h-screen flex items-end bg-blackOverlay"> 
            <div className="conatiner mx-auto mb-20 md:mb-30">
                <h1 className=" text-white text-2xl font-bold flex justify-center items-center m-2 md:text-5xl md:m-5"> ABOUT US </h1>
                <p className="text-white w-full max-w-2xl my-4 md:my-8 ">Lorem ipsum dolor sit amet consectetur adipisicing 
                    soluta dolore asperiores alias quidem in omnis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a deleniti hic asperiores reprehenderit omnis enim, porro vel iure dolore perferendis molestiae molestias eaque consequuntur obcaecati, pariatur ratione corrupti odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eligendi aperiam deserunt magnam sed quam nemo labore impedit quibusdam magni nostrum soluta, architecto delectus. Dolore corrupti aliquid nam ab veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi modi mollitia magnam veritatis optio vel hic fugiat in, reprehenderit dolor, enim, cumque recusandae amet. Quod impedit unde aliquam fugit. Quae, facere atque! Repellendus illum corporis magni consequatur iste, veritatis est at officia incidunt laudantium debitis aliquid quidem necessitatibus exercitationem odit commodi.</p>
            </div>
        </div>

       </section>
       </>
    )
}