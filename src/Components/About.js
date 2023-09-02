import React from 'react';

export default function About(props) {

  let myStyle = {
    color: props.mode === 'light' ? 'black' : "white",
    backgroundColor: props.mode === 'dark' ? 'black' : "white",
    border: "1px solid white",
    borderColor: props.mode === 'dark' ? 'white' : "none"
  }

  return (
    <React.Fragment>
      <div className='container about' style={{ marginTop: "60px" }}>
        <h1 className="my-3 text-center" style={{
          color: props.mode === 'light' ? 'black' : "white",
        }}>About Us</h1>
        <div className="accordion" id="accordionExample" >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyse Your Text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free To Use</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatiable</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
