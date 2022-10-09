function tab(evt, tab_name)  
    {
        var i, tabcontent, tablinks;

        tab_cont = document.getElementsByClassName("cont_project");
        for (i = 0; i < tab_cont.length; i++) 
            {
                tab_cont[i].style.display = "none";
            }

        tab_link = document.getElementsByClassName("tab_link");
        for (i = 0; i < tab_link.length; i++) 
            {
                tab_link[i].className = tab_link[i].className.replace(" active", "");
            }

        document.getElementById(tab_name).style.display = "grid";
        evt.currentTarget.className += " active";
    }




    
const toggleSwitch = document.querySelector('.theme_switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) 
    {
        document.documentElement.setAttribute('data-theme', currentTheme);
    
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

function switchTheme(e) 
    {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            alert("dark");
        }
        else {        
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            alert("light");

        }    
    }

toggleSwitch.addEventListener('change', switchTheme, false);