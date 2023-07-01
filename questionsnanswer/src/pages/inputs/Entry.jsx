import { useState, useEffect } from "react";

const Entry = ({ data, add }) => {
  const defaultFormData = {
    title: "",
    question: "",
    subject: "",
    difficulty: "",
    attempt: "",
    comments: "",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [errorData, setErrorData] = useState({});
  const [viewOnly, setViewOnly] = useState(false);

  useEffect(() => {
    console.log("watch data useEffect", data)
    // to check
    // if (Object.keys(data).length > 0) {
    //   setFormData(data);
    //   setViewOnly(true);
    // } else {
    //   setFormData(defaultFormData);
    //   setViewOnly(false);
    // }
  }, [data]);

  const validateData = () => {
    console.log("validate data");
    let newErrorData = {};
    let success = false;
    for (const property in formData) {
      newErrorData[property] = formData[property] ? null : "Cannot be empty";

      if (formData[property]) {
        newErrorData[property] = null;
        success = true;
      } else {
        newErrorData[property] = "Cannot be empty";
      }
    }
    setErrorData(newErrorData);
    return success;
  };

  const clearForm = (e) => {
    setFormData(defaultFormData);
    setErrorData({});
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (validateData()) {
      // add(formData); to check
      clearForm(e);
    }
  };

  const handleInputChange = (e) => {
    setFormData((prevState) => {
      console.log(`target name: ${e.target.name}`);
      console.log(`target value: ${e.target.value}`);
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="flex">
      <div className="basis-4/5 border border-red-500 p-4">
        <form onSubmit={handleSubmitClick}>
          <div className="flex mt-4">
            <label className="basis-1/5 custom-display-label">Title</label>
            <div className="basis-4/5">
              <input
                type="text"
                disabled={viewOnly}
                name="title"
                onChange={handleInputChange}
                className={`custom-input ${
                  errorData?.title ? "red-border" : ""
                } ${viewOnly ? "input-disabled" : ""}`}
                value={formData.title}
              />
              <div className="custom-error">
                {errorData.title ? errorData.title : null}
              </div>
            </div>
          </div>

          <div className="flex mt-4">
            <label className="basis-1/5 custom-display-label">Question</label>
            <div className="basis-4/5">
              <input
                type="text"
                disabled={viewOnly}
                name="question"
                onChange={handleInputChange}
                className={`custom-input ${
                  errorData?.question ? "red-border" : ""
                } ${viewOnly ? "input-disabled" : ""}`}
                value={formData.question}
              />
              <div className="custom-error">
                {errorData.question ? errorData.question : null}
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            <label className="basis-1/5 custom-display-label">Subject</label>
            <div className="basis-4/5">
              <input
                type="text"
                disabled={viewOnly}
                name="subject"
                onChange={handleInputChange}
                className={`custom-input ${
                  errorData?.subject ? "red-border" : ""
                } ${viewOnly ? "input-disabled" : ""}`}
                value={formData.subject}
              />
              <div className="custom-error">
                {errorData.subject ? errorData.subject : null}
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            <label className="basis-1/5 custom-display-label">Difficulty</label>
            <div className="basis-4/5">
              <input
                type="text"
                disabled={viewOnly}
                name="difficulty"
                onChange={handleInputChange}
                className={`custom-input ${
                  errorData?.difficulty ? "red-border" : ""
                } ${viewOnly ? "input-disabled" : ""}`}
                value={formData.difficulty}
              />
              <div className="custom-error">
                {errorData.difficulty ? errorData.difficulty : null}
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            <label className="basis-1/5 custom-display-label">
              Student Answer
            </label>
            <div className="basis-4/5">
              <input
                type="text"
                disabled={viewOnly}
                name="attempt"
                onChange={handleInputChange}
                className={`custom-input ${
                  errorData?.attempt ? "red-border" : ""
                }  ${viewOnly ? "input-disabled" : ""}`}
                value={formData.attempt}
              />
              <div className="custom-error">
                {errorData.attempt ? errorData.attempt : null}
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            <label className="basis-1/5 custom-display-label">
              Teacher Comments
            </label>
            <div className="basis-4/5">
              <input
                type="text"
                disabled={viewOnly}
                name="comments"
                onChange={handleInputChange}
                className={`custom-input ${
                  errorData?.comments ? "red-border" : ""
                }  ${viewOnly ? "input-disabled" : ""}`}
                value={formData.comments}
              />
              <div className="custom-error">
                {errorData.comments ? errorData.comments : null}
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="primary-button" onClick={handleSubmitClick}>
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="basis-1/5 border border-blue-500 p-4">
        Others Attempts
      </div>
    </div>
  );
};

export default Entry;
