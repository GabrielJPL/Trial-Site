function yes(){

    const nameofuser = window.document.getElementById('nameofuser').value;
    const emailuser = window.document.getElementById('emailuser').value;
    const passworduser = window.document.getElementById('passworduser').value;

    const DataUserForUse = {nameofuser, emailuser, passworduser};
    
    const alert = document.getElementById('alert');
    const verification1 = /[a-z]/.test(passworduser);
    const verification2 = /[0-9]/.test(passworduser);
    const verification3 = passworduser.length >= 8;
    const verificationEMAIL = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    
    let lastVerification = false;

    if (nameofuser === "" || emailuser === "" || !verificationEMAIL.test(emailuser)) { 
        alert.innerHTML = "Erro in fields, fix them.";
        alert.style.color = 'red'
        lastVerification = false; 
    } 
    
    else if (verification1 && verification2 && verification3) {
        lastVerification = true;
    }

    if (lastVerification === true) {
        alert.style.color = "green";
        alert.innerHTML = "Password Strongh";

        alert.innerHTML = 'Loading...';
        alert.style.color = 'green';
        setTimeout(() => {
            localStorage.setItem('data', JSON.stringify('DataUserForUse'));
            window.location.href = '/Projetos/Sistemas/Site/SIte2/Hometwo.html'
        }, 4000);
    
    } 
}


const actions = document.querySelectorAll('.infosoffcontainer1');
const glass = document.getElementById('windowInformation');
const textglass = document.getElementById('informationTHEwindow');


actions.forEach(action =>{
    action.addEventListener('mouseenter', () =>{
        const section = action.getAttribute('data-info');

        if (glass.classList.contains('open') && glass.dataset.active === glass) {
            closeglass();
            return
        }
       
        let contentINglass = "";

        if (section === 'Terms')              contentINglass =            "<h3>Terms</h3>Terms of Service By accessing and using our website, you agree to comply with our terms and conditions. These guidelines ensure a safe and reliable experience for all our users. Please read them carefully." ;
        if (section === 'About')              contentINglass =            "<h3>About</h3>About us, individual developer team. This project was made by a developer with the support of two other members, social networks such as GitHub and others will be available in CONTACTS."                     ;
        if (section === 'Informations')       contentINglass =            "<h3>Informations</h3> General Information Learn more about our mission, values, and the services we provide. We are dedicated to delivering high-quality solutions and keeping our community informed."                      ;
        if (section === 'Developer')          contentINglass =            "<h3>Developer</h3> Developer Hub Explore our documentation, APIs, and technical resources. Build, integrate, and innovate with our powerful tools designed for creators and engineers."                                      ;
        if (section === 'Team')               contentINglass =            "<h3>Team</h3> Meet the Team Our strength lies in our people. Meet the passionate experts working behind the scenes to bring you the best results and drive our vision forward."                                              ;
        if (section === 'Acess more')         contentINglass =            "<h3>Acess More</h3> Access More Resources Dive deeper into our content. Discover exclusive tools, in-depth articles, and premium features designed to help you go further."                                                  ;
        if (section === 'Contacts')           contentINglass =            "<h3>Contacts</h3><h4 class='contacttittles'>GitHub:</h4> <a href='https://github.com/GabrielJPL' target='blank' class='linkContact'>Gabriel Lobão</a> <h4 class='contacttittles'>E-mail:</h4> <p class='linkContact'> gabrieljesus.lobao@gmail.com</p> <h4 class='contacttittles'>Linkedin:</h4> <a href='https://www.linkedin.com/feed/' target='blank' class='linkContact'>Gabriel Lobão</a>";

        textglass.innerHTML = contentINglass;

        glass.classList.add('open');
        glass.dataset.active = section;

    });
});

actions.forEach(action =>{
    action.addEventListener('click',
        function closeglass() {
            glass.classList.remove('open');
            glass.style.transform = "";
            glass.dataset.active = "";
        }
    );
});

