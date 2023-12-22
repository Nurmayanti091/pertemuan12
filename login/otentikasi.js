function auth(){
    const username='nurmayanti' //untuk membat variabel tetap samadengan tag var tapi kalo var itu tetap 
    const password='12345677'

    //tangkap input user
    let userInput =document.getElementById('username').value
    let passwordInput =document.getElementById('password').value

    if (username==userInput && password== passwordInput){
        alert('login berhasil')
        document.location='home.html'
    } else {
        alert('login gagal')
    }


}