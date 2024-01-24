import {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './form.module.css';
import { editProfile } from '../features/user/userSlice';

/**
 * Profile Form component to handle user name update
 *
 * @returns {JSX.Element} form component
 */
const ProfileForm = () => {

  const [isUserEditShown, setIsUserEditShown] = useState(false)
  const [firstNameInput, setFirstNameInput] = useState(null);
  const [lastNameInput, setLastNameInput] = useState(null);


  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.user);
  const {firstName, lastName} = useSelector((state) => state.user.profile);

  const userRef = useRef(null)

  // const validInput = (value) => {
  //   let regex = /^[a-zA-Z]+(?:([',. -][a-zA-Z ])?[a-zA-Z])$/
  //   return regex.test(value) ? '' : 'You must enter a valid name.'
  // }

  useEffect(() => userRef.current?.focus(), [isUserEditShown])

  const handleSubmit = async () => {
    dispatch(
      editProfile({firstNameInput, lastNameInput, token}),
    )
    setIsUserEditShown(false)
  }

  /**
   * Handles show/hide edit form event
   */
  const handleUserEdit = () => setIsUserEditShown(true)

  return (
    <>
      {!isUserEditShown && (
        <button className={styles.editButton} onClick={handleUserEdit}>
          Edit Name
        </button>
      )}
      {isUserEditShown && (
        <form onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <div className={styles.inputWrapper}>
                <label>FirstName</label>
                  <input type="text" ref={userRef} onChange={(e)=>{setFirstNameInput(e.target.value)}} required/>
                  {/* {validInput(firstNameInput) !== '' (
                    <span style={{color: 'red'}}>{validInput(firstNameInput)}</span>
                  )} */}
              </div>
              <div className={styles.inputWrapper}>
                <label>LastName</label>
                <input type="text" onChange={(e)=>{setLastNameInput(e.target.value)}} required/>
                {/* {validInput(lastNameInput) !== '' (
                  <span style={{color: 'red'}}>{validInput(lastNameInput)}</span>
                )} */}
              </div>
            </div>
            <div className={styles.inputWrapper}>
            <button className={styles.editButton}>
                Save
            </button>
            <button
                className={styles.editButton}
                onClick={(e) => e.target.closest('form').reset()}
            >
                Cancel
            </button>
            </div>
        </form>
      )}
    </>
  )
}

export default ProfileForm