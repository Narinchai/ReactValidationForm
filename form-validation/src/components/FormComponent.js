import './FormComponent.css'
import {useState} from "react"

const FormComponent = ()=>{
    const [userName,setUserName] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [repass,setRepass] =useState('')

    const [errorUsername,setErrorUsername] =useState('')
    const [errorEmail,setErrorEmail] =useState('')
    const [errorPassword,setErrorPassword] =useState('')
    const [errorRepass,setErrorRepass] =useState('')

    const [userNameColor,setUserNameColor] =useState('')
    const [emailColor,setEmailColor] =useState('')
    const [passwordColor,setPasswordColor] =useState('')
    const [repassColor,setRepassColor] =useState('')


    const validateForm = (e) =>{

        e.preventDefault()
        if(userName.length>8){
            setErrorUsername('')
            setUserNameColor('green')
        }else{
            setErrorUsername('กรุณาป้อนชื่อผู้ใช้จำนวนมากกว่า 8 ตัวอักษร')
            setUserNameColor('red')
        }
        if(email.includes("@")){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setErrorEmail('รูปแบบ Email ไม่ถูกต้อง')
            setEmailColor('red')
        }
        if(password.length>8){
            setErrorPassword('')
            setPasswordColor('green')
            
        }else{
            setErrorPassword('ป้อนรหัสผ่านมากกว่า 8 ตัวอักษร')
            setPasswordColor('red')
        } 
        if(repass != "" && repass === password ){
            setErrorRepass('')
            setRepassColor('green')
        }else{
            setErrorRepass('รหัสผ่านไม่ตรงกัน')
            setRepassColor('red')
        }




    }


return(
    <div className="container">
        <form className="form" onSubmit={validateForm}>
            <h2>Register Form</h2>
                <div className="form-control">
                    <label>ชื่อผู้ใช้</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
                    <small style={{color:userNameColor}}> {errorUsername} </small>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="text"value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
                    <small  style={{color:emailColor}}> {errorEmail} </small>
                </div>
                <div className="form-control">
                    <label>password</label>
                    <input type="password"value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                    <small  style={{color:passwordColor}}>{errorPassword} </small>
                </div>
                <div className="form-control">
                    <label>confirm password</label>
                    <input type="password"value={repass} onChange={(e)=>setRepass(e.target.value)} style={{borderColor:repassColor}}/>
                    <small  style={{color:repassColor}}>{errorRepass} </small>
                </div>
                <button type="submit">ลงทะเบียน</button>
        </form>
        </div>)
}
export default FormComponent