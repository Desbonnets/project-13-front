import Account from "../components/Account";
import {useSelector} from "react-redux";
import {Navigate} from "react-router";
import ProfileForm from "../components/FormProfile";

function Profile() {

  // redux states
  const {token} = useSelector((state) => state.user);
  const {profile} = useSelector((state) => state.user);

  if(!token) return <Navigate to={'/'} />;

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{profile ? profile.firstName : null} {profile ? profile.lastName : null}!</h1>
          {/* <button className="edit-button">Edit Name</button> */}
          <ProfileForm />
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account title={'Argent Bank Checking (x8349)'} amount={'$2,082.79'} description={'Available Balance'} />
        <Account title={'Argent Bank Savings (x6712)'} amount={'$10,928.42'} description={'Available Balance'} />
        <Account title={'Argent Bank Credit Card (x8349)'} amount={'$184.30'} description={'Current Balance'} />
      </main>
    </>
  );
}

export default Profile;
