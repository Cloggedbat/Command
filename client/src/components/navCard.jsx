// import React
import React from "react";



// create Project functional component using props
function Project(props) {

    // return data to the page using props
    // the properties will come from the projectData
    return (
        <>
            <div className="card m-3 p-3" style={{ width: "25rem" }}>
                <div className="card-title mt-3 mb-0">
                    <h2>{props.heading}</h2>

                </div>
            </div>
        </>
    )
}

// export Project component
export default Project;