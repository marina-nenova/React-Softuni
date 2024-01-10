import { useState, useRef, useEffect } from "react";
import styles from "./ControlledForm.module.css";

const formInitialState = {
  username: "",
  password: "",
  age: "",
  gender: "m",
  swimming: false,
  reading: false,
  hiking: false,
  tennis: false,
};

export default function ControlledForm({ formRef }) {
  const [formValues, setFormValues] = useState(formInitialState);
  const usernameInputRef = useRef();
  const isMountedRef = useRef(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    usernameInputRef.current.focus();
  }, []);

  // Executes only on update

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
    console.log("Form is updated");
  }, [formValues]);

  const changeHandler = (e) => {
    let value = "";

    switch (e.target.type) {
      case "number":
        value = Number(e.target.value);
        break;
      case "checkbox":
        value = e.target.checked;
        break;
      default:
        value = e.target.value;
        break;
    }

    setFormValues((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const resetFormHandler = () => {
    setFormValues(formInitialState);
    setErrors({});
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formValues);
    resetFormHandler();
  };

  const ageValidator = () => {
    if (formValues.age < 0 || formValues.age > 120) {
      setErrors((state) => ({
        ...state,
        age: "Age should be between 0 and 120.",
      }));
    } else {
      if (errors.age) {
        setErrors((state) => ({
          ...state,
          age: "",
        }));
      }
    }
  };

  return (
    <>
      <h1>Controlled Form</h1>
      <form ref={formRef} onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            ref={usernameInputRef}
            type="text"
            name="username"
            id="username"
            value={formValues.username}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={formValues.age}
            onChange={changeHandler}
            onBlur={ageValidator}
            className={errors.age && styles.inputError}
          />
          {errors.age && <p className={styles.errorMessage}>{errors.age}</p>}
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            id="gender"
            onChange={changeHandler}
            value={formValues.gender}
          >
            <option value="m">Male</option>
            <option value="f">Female</option>
            <option value="o">Other</option>
          </select>
        </div>

        <div>
          <h3>Hobbies</h3>
          <label htmlFor="swimming">Swimming</label>
          <input
            type="checkbox"
            name="swimming"
            id="swimming"
            checked={formValues.swimming}
            onChange={changeHandler}
          />
          <label htmlFor="reading">Reading</label>
          <input
            type="checkbox"
            name="reading"
            id="reading"
            checked={formValues.reading}
            onChange={changeHandler}
          />
          <label htmlFor="hiking">Hiking</label>
          <input
            type="checkbox"
            name="hiking"
            id="hiking"
            checked={formValues.hiking}
            onChange={changeHandler}
          />
          <label htmlFor="tennis">Tennis</label>
          <input
            type="checkbox"
            name="tennis"
            id="tennis"
            checked={formValues.tennis}
            onChange={changeHandler}
          />
        </div>

        <div>
          <button type="submit" disabled={Object.values(errors).some(x => x)}>Register</button>
          <button type="reset" onClick={resetFormHandler}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
}
