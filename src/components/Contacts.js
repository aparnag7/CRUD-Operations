import React , {useState , useEffect} from "react";
import ContactForm from "./contactform";
import firebaseDb from "../firebase";
const Contacts = () => {

    var [contactObjects , setcontactObjects] = useState({})

	var [currentId, setCurrentId] = useState('');

    useEffect(() =>{
        firebaseDb.child('contacts').on('value' , snapshot => {
            if(snapshot.val() != null) {
                setcontactObjects({
                    ...snapshot.val() 
                })
            }
        }) 
    }, [])

    const addOrEdit = (obj) => {
        if (currentId == '')
            firebaseDb.child('contacts').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        else
            firebaseDb.child(`contacts/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
    }
    
    const onDelete = key => {
        if (window.confirm('Are you sure to delete this record?')){
            //node path to be deleted
            firebaseDb.child(`contacts/${key}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        }
    }

    return ( 
    <>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">Contact Manager</h1>
            </div>
        </div>
    <div className="row">
        <div className="col-md-5">
            <ContactForm {... ({addOrEdit,currentId,contactObjects})} />            
        </div>
        <div className="col-md-7">
            <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map(key => {
                                    return <tr key = {key}> 
                                        <td>{contactObjects[key].fullname}</td>
                                        <td>{contactObjects[key].mobile}</td>
                                        <td>{contactObjects[key].email}</td>
                                        <td>{contactObjects[key].address}</td>
                                        <td className="bg-light">
                                            <a className="btn text-primary" onClick={() => { setCurrentId(key) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(key) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>                        
                                    </tr>
                                })
                            }
                        </tbody>
             </table>
        </div>
    </div>   

    </>
     );
}
export default Contacts;