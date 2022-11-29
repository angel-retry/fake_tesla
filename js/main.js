// const sectionOne = document.getElementById("model_s");
// console.log(sectionOne);

const sections = document.querySelectorAll(".home");
// console.log(sections);

const title = document.getElementsByClassName("car_model_title")[0];
const paragraph = document.getElementsByTagName("p")[0];
const link = document.getElementsByClassName("car_model_link")[0];
const left_btn = document.getElementsByClassName("home_button_order")[0];
const right_btn = document.getElementsByClassName("home_button_exist")[0];


let page = new Page(sections, title, link, left_btn, right_btn);

createObserver(sections);

function createObserver(elements) {
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
        
    };
    
    
    const observer = new IntersectionObserver(handleIntersect , options);
    
    elements.forEach(elements => {
        observer.observe(elements);
    });

    function handleIntersect(entries, observer) {
        entries.forEach(entry => {
            // console.log(entry);

            if(entry.isIntersecting) {
                let current_id = entry.target.id;
                // console.log(entry.target.id);
                switch(current_id) {
                    case "model_s":
                        page.title = "Model S";
                        page.paragraph = "Order Online for ";
                        page.link = "Touchless Delivery";
                        page.left_btn = "CUSTOM ORDER";
                        page.right_btn = "EXIST INVENTORY";
                    break;
                    case "model_y":
                        page.title = "Model Y";
                    break;
                    case "model_3":
                        page.title = "Model 3";
                    break;
                    case "model_x":
                        page.title = "Model X";
                        page.paragraph = "Order Online for ";
                        page.link = "Touchless Delivery";
                        page.left_btn = "CUSTOM ORDER";
                        page.right_btn = "EXIST INVENTORY";
                    break;
                    case "solar_panels":
                        page.title = "Solar Panels";
                        page.paragraph = "Lowest Cost Solar Panels in America";
                        page.link = "";
                        page.left_btn = "Order now";
                        page.right_btn = "Learn more";
                    break;
                    case "solar_roof":
                        page.title = "Solar Roof";
                        page.paragraph = "Produce Clean Energy From Your Roof";

                        break;
                    default:
                        break;
                }
                title.innerHTML = page.title;
                paragraph.childNodes[0].textContent = page.paragraph;
                paragraph.childNodes[1].textContent = page.link;
                left_btn.childNodes[1].textContent = page.left_btn;
                right_btn.childNodes[1].textContent = page.right_btn;


            }
        });
    }
}

const main = document.getElementsByTagName("main")[0];
// console.log(main);


main.addEventListener("scroll", e => {
    // console.log(main.scrollTop);
    let viewHeight = e.currentTarget.offsetHeight
    let currentOffset = e.currentTarget.scrollTop % viewHeight ;
    let opacityValue = Math.abs(1 - currentOffset / (viewHeight / 2));
    // console.log(e.currentTarget.scrollTop);
    // console.log(e.currentTarget.offsetHeight);
    // console.log(opacityValue);

    title.style.opacity = opacityValue;
    paragraph.style.opacity = opacityValue;
    link.style.opacity = opacityValue;
    left_btn.style.opacity = opacityValue;
    right_btn.style.opacity = opacityValue;
});