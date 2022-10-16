import React from 'react'

function Registration() {
  return (
    <>
        <div className="row" style={{ margin: "5%" }}>
            <div className="col-2"></div>
            <div className="col-8">
                <div style={{ color: "purple", textAlign: "center" }}>
                <h1>REGISTER HERE!</h1>
                </div>
                <form className="form" method="post">
                <div className="form-group">
                    <label htmlFor="fname">Enter Your First Name:*</label>
                    <input
                    id="fname"
                    name="fname"
                    className="form-control"
                    type="text"
                    minLength={3}
                    maxLength={16}
                    onclick="user_name()"
                    placeholder=" e.g Brenda"
                    required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fname">Enter Your Last Name:*</label>
                    <input
                    id="lname"
                    name="Lname"
                    className="form-control"
                    type="text"
                    minLength={3}
                    maxLength={16}
                    placeholder="e.g Mwangi"
                    required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Enter Your Email:*</label>
                    <input
                    id="email"
                    name="email"
                    className="form-control"
                    type="email"
                    required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Enter Your Phone No:*</label>
                    <input
                    id="phone"
                    name="phone"
                    className="form-control"
                    type="number"
                    minLength={10}
                    maxLength={12}
                    placeholder="0740730156"
                    required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="course">Enter Your Course:*</label>
                    <input
                    id="course"
                    name="course"
                    minLength={3}
                    maxLength={5}
                    className="form-control"
                    type="text"
                    size={5}
                    placeholder="Enter only course abbreviation e.g BIT"
                    required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating of Programming:*</label>
                    <input
                    id="rating"
                    name="rating"
                    className="form-control"
                    type="number"
                    min={1}
                    max={10}
                    required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="designRating">Rating of Programming:*</label>
                    <input
                    id="designRating"
                    name="designRating"
                    className="form-control"
                    type="number"
                    min={1}
                    max={10}
                    required=""
                    />
                <div className="form-group">
                    <label htmlFor="interest">Field of interest:*</label>
                    <select
                    id="interest"
                    className="form-control"
                    name="interest"
                    required=""
                    >
                    <option value="NONE" selected="">
                        --NONE--
                    </option>
                    <option value="Android">Android Development</option>
                    <option value="Web">Web Development</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Microservices Developement">
                        Microservices Developement
                    </option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="extras">Additional Information:</label>
                    <textarea
                    name="other"
                    id=""
                    cols={0}
                    rows={10}
                    className="form-control"
                    placeholder="Enter anyother additional information here"
                    defaultValue={""}
                    />
                </div>
                <button type="submit" id="submit_btn" className="btn btn-primary">
                    REGISTER!
                </button>
                </form>
            </div>
            <div className="col-2"></div>
        </div>
    </>
  )
}

export default Registration
