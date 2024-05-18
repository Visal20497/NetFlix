export const checkValidData=(email,password)=>{
    const isEmailValid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!isEmailValid) return "🚫 Please enter a valid email address or phone number."
    if(!isPasswordValid) return "🚫 Your password must contain between 4 and 20 characters."
    return null
}
export const checkValidDataWithName=(email,password,name)=>{
    const isNameValid=/^.{8,20}$/.test(name)
    const isEmailValid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!isNameValid) return "🚫 Name required minmun 8 characters"
    if(!isEmailValid) return "🚫 Please enter a valid email address or phone number."
    if(!isPasswordValid) return "🚫 Your password must contain between 4 and 20 characters."
    return null
}