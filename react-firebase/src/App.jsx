import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase-config'
import { collection, getDocs, addDocs, doc, updateDoc, deleteDoc } from '@firebase/firestore';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const UsersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUserData = async () => {
      const data = await getDocs(UsersCollectionRef)
      setUsers(data.docs.map((elem) => ({...elem.data(), id: elem.id})))
    }
    getUserData()
  },[])

  const CreateUser = async () => {
    await addDocs(UsersCollectionRef, {Name: name, age: age})
    window.location.reload()
  }

  const increaseAge = async (id,age) => {
    const userDoc = doc(db,"users",id)
    const NewAge = { age: Number(age) + 1}
    await updateDoc(userDoc, NewAge)
    window.location.reload()
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db,"users",id)
    await deleteDoc(userDoc)
    window.location.reload()
  }

  return (
    <div className="App">
      <h1>React + Firebase</h1>
      <p>Wypełnij formularz:</p>
      <div>
        <span>Wprowadź imię:</span>
        <input type='text' onChange={(event) => { setName(event.target.value)}}/>
        <span>Wprowadź wiek:</span>
        <input type='text' onChange={(event) => { setAge(event.target.value)}}/>
        <br/>
        <button onClick={CreateUser}>Upload</button>
      </div>
      <div>
        <h3>Users:</h3>
        <div>
          {users.map(user => {
            return <div>
              <p>{user.Name}</p>
              <p>{user.age}</p>
              <button onClick={() => {increaseAge(user.id, user.age)}}>Podnieś wiek</button>
              <button onClick={() => {deleteUser(user.id)}}>Skasuj usera</button>
              </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
