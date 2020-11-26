
var rest_BMI
function calulate(user_input_wight,user_input_heigh) {
    let new_heigh = user_input_heigh / 100
    rest_BMI = user_input_wight / (new_heigh*new_heigh)
    return  rest_BMI.toFixed(2)
}

function display(user_input_wi,user_input_he) {
    let result
    result = calulate(user_input_wi,user_input_he)
    alert("BMI ของคุณคือ " + result)
    document.getElementById("result_bmi").innerHTML = "BMI ของคุณคือ " + result
    document.getElementById("toShow").innerHTML = display_con (result)
    test_re(result)
}
function display_con (re_bmi) {
    let str
    if(re_bmi>=30.00)
    {
        str = "โรคอ้วนระดับที่ 2"
    }
    else if(re_bmi >= 25.00)
    {
        str = "โรคอ้วนระดับที่ 1"
    }
    else if(re_bmi >= 23.00)
    {
        str = "น้ำหนักเกิน"
    }
    else if(re_bmi >= 18.50)
    {
        str = "อยู่ในเกณฑ์ปกติ"
    }
    else
    {
        str = " อยู่ในเกณฑ์น้ำหนักน้อยหรือผอม"
    }
    return "คุณ"+str
}
