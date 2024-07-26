// let get_response = async() => {
    
    
    
    //     let response = await fetch(url);
    
    //     let json_res = await response.json();
    
    //     console.log(json_res);
    // }
    
    // get_response();
    
    
let get_response = async() => {

    
    let ele1 = document.getElementsByClassName("fr_ip")[0];
    let from = (ele1.value).toUpperCase();
    
    
    let ele2 = document.getElementsByClassName("to_ip")[0];
    let to = (ele2.value).toUpperCase();
    
    url = "https://api.metalpriceapi.com/v1/latest?api_key=d8cdbd25cc59f754857fb2e21cc70e57&base=" + from + "&currencies=" + to;

    if (!from || !to){
        alert("Please Enter both the currencies.")
    }
    else{
        let response = await fetch(url);
        let js_res = await response.json();
        
        let amt = parseInt(prompt("Enter the amount: "));

        alert((js_res.rates[to]) * amt);
    }

}