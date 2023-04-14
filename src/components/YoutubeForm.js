import { useFormik } from "formik";
const YoutubeForm=()=>{
    const formik=useFormik({
        initialValues:{
            name:'sumit',
            chanel:'sumit coding',
            mail:'sumit@gmail.com',
        },
        onSubmit: values =>{
            console.log("values",values);
        }
    });
    return<>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type='text' id='name' name='name' value={formik.values.name} onChange={formik.handleChange}/>

            <label htmlFor="mail">E-mail</label>
            <input type='text' id='mail' name='mail' value={formik.values.mail} onChange={formik.handleChange}/>

            <label htmlFor="chanel">Youtube-chanel</label>
            <input type='text' id='chanel' name='chanel' value={formik.values.chanel} onChange={formik.handleChange}/>

            <button type="submit">Submit</button>
        </form>
    </>
}
export default YoutubeForm;