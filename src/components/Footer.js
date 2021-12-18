import React from 'react'

function Footer() {
    return (
        <div>
            <footer className=" text-center text-white" style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>

  <div className="container p-4 pb-0">
  
    <section className="mb-4">
    <div className="container p-4 pb-0">
    <form action="">
      <div className="row">

        <div className="col-auto mb-4 mb-md-0">
          <p className="pt-2">
            Pour ne rien rater de nos offres
          </p>
        </div>

        <div className="col-md-5 col-12 mb-4 mb-md-0">

          <div className="form-outline mb-4">
            <input type="email" id="form5Example25" className="form-control" placeholder='entrer une adresee e-mail'/>
          </div>
        </div>

        <div className="col-auto mb-4 mb-md-0">

          <button type="submit" class="btn btn-warning mb-4">
          s'inscrire
          </button>
        </div>

      </div>
 
    </form>
  </div>
        

    </section>

  </div>
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    <div>qui nous aimes, nous suive !</div>
    <i><img src="/facebook.png" alt="Bootstrap" width="35" height="35"/></i>
    <i><img src="/twitter.png" alt="Bootstrap" width="35" height="35"/></i>
    <i><img src="/instagram.png" alt="Bootstrap" width="35" height="35"/></i>
  </div>

</footer>
        </div>
    )
}

export default Footer
